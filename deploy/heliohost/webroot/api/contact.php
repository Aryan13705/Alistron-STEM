<?php
// Contact form endpoint for the Alistron site on HelioHost (Plesk).
//
// PHP port of deploy/cloudflare/webroot/_worker.js. The site itself is a static
// Next.js export; .htaccess rewrites POST /api/contact to this file, which
// forwards enquiries through the Resend REST API.
//
// Configuration (first match wins):
//   1. alistron-config.php in the folder ABOVE the web root (next to httpdocs),
//      so the API key is never web-accessible. Template:
//      deploy/heliohost/alistron-config.example.php
//   2. Environment variables RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_TO_EMAIL.
//
//   RESEND_API_KEY    - Resend API key (required; without it the form tells
//                       visitors to email us directly instead of losing enquiries)
//   RESEND_FROM_EMAIL - sender on a domain verified in Resend, e.g. website@alistron.in
//                       (onboarding@resend.dev only delivers to the Resend account owner)
//   RESEND_TO_EMAIL   - recipient inbox, defaults to contact@alistron.in
//
// Written for PHP 7.4+ so it runs on any PHP version Plesk offers.

const CONTACT_EMAIL = 'contact@alistron.in';
const UNAVAILABLE = "We couldn't send your enquiry right now. Please email us at " . CONTACT_EMAIL . " and we'll get back to you.";

function respond(array $body, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($body);
    exit;
}

function config(string $key, string $default = ''): string
{
    static $file = null;
    if ($file === null) {
        $path = dirname(__DIR__, 2) . '/alistron-config.php';
        $file = is_readable($path) ? (array) (include $path) : [];
    }
    if (!empty($file[$key])) {
        return trim((string) $file[$key]);
    }
    $env = getenv($key);
    if ($env === false || $env === '') {
        $env = $_SERVER[$key] ?? '';
    }
    return $env !== '' ? trim((string) $env) : $default;
}

function escape_html($value): string
{
    return htmlspecialchars((string) ($value ?? ''), ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

function str_len($value): int
{
    $value = (string) $value;
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function send_via_resend(string $apiKey, array $payload): array
{
    $json = json_encode($payload);
    $headers = [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ];

    if (function_exists('curl_init')) {
        $ch = curl_init('https://api.resend.com/emails');
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $json,
            CURLOPT_HTTPHEADER => $headers,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CONNECTTIMEOUT => 10,
            CURLOPT_TIMEOUT => 20,
        ]);
        $body = curl_exec($ch);
        $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);
        if ($body === false) {
            throw new RuntimeException('cURL error: ' . $error);
        }
        return [$status, (string) $body];
    }

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => implode("\r\n", $headers),
            'content' => $json,
            'timeout' => 20,
            'ignore_errors' => true,
        ],
    ]);
    $body = @file_get_contents('https://api.resend.com/emails', false, $context);
    if ($body === false) {
        throw new RuntimeException('HTTP request to Resend failed (no cURL, stream wrapper error).');
    }
    $status = 0;
    if (isset($http_response_header[0]) && preg_match('#^HTTP/\S+\s+(\d{3})#', $http_response_header[0], $m)) {
        $status = (int) $m[1];
    }
    return [$status, (string) $body];
}

// The GitHub Pages copy of the site posts here cross-origin. The form sends no
// cookies or credentials, so allowing any origin exposes nothing a direct POST
// couldn't already do.
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(['error' => 'Method not allowed.'], 405);
}

$body = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($body)) {
    respond(['error' => 'Invalid JSON payload.'], 400);
}

$name = $body['name'] ?? null;
$email = $body['email'] ?? null;
$orgPhone = $body['orgPhone'] ?? '';
$enquiryType = $body['enquiryType'] ?? '';
$message = $body['message'] ?? null;
$website = $body['website'] ?? '';
$privacyConsent = $body['privacyConsent'] ?? false;

// 1. Honeypot check (anti-spam)
if (is_string($website) && trim($website) !== '') {
    error_log('[AntiSpam] Honeypot field triggered by bot submission.');
    respond(['success' => true, 'simulated' => true]);
}

// 2. Server-side validation
if (!is_string($name) || str_len(trim($name)) < 2) {
    respond(['error' => 'A valid full name is required.'], 400);
}
if (str_len($name) > 120 || (is_scalar($orgPhone) && str_len($orgPhone) > 200) || (is_string($message) && str_len($message) > 5000)) {
    respond(['error' => 'Your enquiry is too long. Please shorten it and try again.'], 400);
}
if (!is_string($email) || strlen($email) > 254 || !preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/', trim($email))) {
    respond(['error' => 'A valid email address is required.'], 400);
}
if (!is_string($message) || str_len(trim($message)) < 5) {
    respond(['error' => 'Please provide detailed enquiry content (at least 5 characters).'], 400);
}
if (!$privacyConsent) {
    respond(['error' => 'Privacy consent is mandatory for enquiry submission.'], 400);
}

$resendApiKey = config('RESEND_API_KEY');
$resendFromEmail = config('RESEND_FROM_EMAIL', 'onboarding@resend.dev');
$resendToEmail = config('RESEND_TO_EMAIL', CONTACT_EMAIL);
$category = is_string($enquiryType) && $enquiryType !== '' ? $enquiryType : 'general';
$categoryLabels = ['neurotech' => 'Bionics', 'school' => 'School STEM', 'general' => 'General'];
$categoryLabel = $categoryLabels[$category] ?? $category;
$orgPhone = is_scalar($orgPhone) ? (string) $orgPhone : '';

// 3. Deliver via Resend. Never report success unless the email was actually sent.
if ($resendApiKey === '') {
    error_log('[Contact] RESEND_API_KEY is not configured; enquiry not delivered. category=' . $category);
    respond(['error' => UNAVAILABLE], 503);
}

try {
    // Strip CR/LF so user input can't inject extra headers into the subject.
    $emailSubject = str_replace(["\r", "\n"], ' ', '[Alistron Website Enquiry] ' . strtoupper($categoryLabel) . ': ' . $name);
    $emailHtml = '
      <h2>New Alistron Web Enquiry</h2>
      <p><strong>Enquiry Category:</strong> ' . escape_html($categoryLabel) . '</p>
      <p><strong>Name:</strong> ' . escape_html($name) . '</p>
      <p><strong>Email:</strong> ' . escape_html($email) . '</p>
      <p><strong>Organization / Phone:</strong> ' . escape_html($orgPhone !== '' ? $orgPhone : 'Not provided') . '</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background:#f4f6f9; padding:12px; border-left:4px solid #0B132B;">
        ' . nl2br(escape_html($message), false) . '
      </blockquote>
      <p><em>Privacy consent acknowledged by sender.</em></p>
    ';

    [$status, $detail] = send_via_resend($resendApiKey, [
        'from' => $resendFromEmail,
        'to' => [$resendToEmail],
        'reply_to' => trim($email),
        'subject' => $emailSubject,
        'html' => $emailHtml,
    ]);

    if ($status < 200 || $status >= 300) {
        throw new RuntimeException("Resend responded {$status}: {$detail}");
    }

    respond(['success' => true]);
} catch (Throwable $e) {
    error_log('[Resend Error] Delivery failed: ' . $e->getMessage());
    respond(['error' => UNAVAILABLE], 502);
}
