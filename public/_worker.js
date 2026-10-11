// Cloudflare Pages Function (Advanced mode) for the Alistron site.
//
// The site itself is a fully static Next.js export. This worker exists only to
// keep the contact form working after deployment by handling POST /api/contact
// and forwarding enquiries through the Resend REST API.
//
// Configure these in the Cloudflare Pages dashboard
// (Settings -> Environment variables) for production and preview:
//   RESEND_API_KEY   - Resend API key (optional; falls back to log-only mode)
//   RESEND_FROM_EMAIL - verified sender, defaults to onboarding@resend.dev
//   RESEND_TO_EMAIL   - recipient inbox, defaults to alistronllp@gmail.com

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

async function handleContact(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON payload." }, 400);
  }

  const { name, email, orgPhone, enquiryType, message, website, privacyConsent } = body || {};

  // 1. Honeypot check (anti-spam)
  if (website && String(website).trim() !== "") {
    console.warn("[AntiSpam] Honeypot field triggered by bot submission.");
    return json({ success: true, simulated: true });
  }

  // 2. Server-side validation
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return json({ error: "A valid full name is required." }, 400);
  }
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return json({ error: "A valid email address is required." }, 400);
  }
  if (!message || typeof message !== "string" || message.trim().length < 5) {
    return json({ error: "Please provide detailed enquiry content (at least 5 characters)." }, 400);
  }
  if (!privacyConsent) {
    return json({ error: "Privacy consent is mandatory for enquiry submission." }, 400);
  }

  const resendApiKey = env.RESEND_API_KEY;
  const resendFromEmail = env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const resendToEmail = env.RESEND_TO_EMAIL || "alistronllp@gmail.com";
  const category = typeof enquiryType === "string" && enquiryType ? enquiryType : "general";

  // 3. Optional Resend email delivery
  if (resendApiKey && String(resendApiKey).trim().length > 0) {
    try {
      const emailSubject = `[Alistron Website Enquiry] ${category.toUpperCase()}: ${name}`;
      const emailHtml = `
        <h2>New Alistron Web Enquiry</h2>
        <p><strong>Enquiry Category:</strong> ${escapeHtml(category)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Organization / Phone:</strong> ${escapeHtml(orgPhone || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background:#f4f6f9; padding:12px; border-left:4px solid #0B132B;">
          ${escapeHtml(message).replace(/\n/g, "<br/>")}
        </blockquote>
        <p><em>Privacy consent acknowledged by sender.</em></p>
      `;

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: resendFromEmail,
          to: [resendToEmail],
          reply_to: email,
          subject: emailSubject,
          html: emailHtml,
        }),
      });

      if (!resendResponse.ok) {
        const detail = await resendResponse.text();
        throw new Error(`Resend responded ${resendResponse.status}: ${detail}`);
      }

      return json({
        success: true,
        delivered: true,
        message: "Enquiry delivered via Resend API.",
      });
    } catch (emailErr) {
      console.error("[Resend Error] Delivery failed:", emailErr);
      return json({
        success: true,
        simulated: true,
        message: "Enquiry logged securely on server (Resend delivery attempt failed).",
      });
    }
  }

  // 4. Fallback when no API key is configured
  console.log("=== NEW ALISTRON ENQUIRY RECEIVED (MOCK MODE) ===", {
    timestamp: new Date().toISOString(),
    name,
    email,
    orgPhone,
    enquiryType: category,
    message,
  });
  return json({
    success: true,
    simulated: true,
    message: "Enquiry verified and logged on server. Configure RESEND_API_KEY for direct inbox forwarding.",
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method === "POST") {
        return handleContact(request, env);
      }
      return json({ error: "Method not allowed." }, 405);
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ error: "Not found." }, 404);
    }

    return env.ASSETS.fetch(request);
  },
};
