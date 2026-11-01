<?php
// Contact form settings for HelioHost.
//
// Copy this file to alistron-config.php and upload it to the folder ABOVE the
// web root (the folder that contains httpdocs/), NOT into httpdocs itself.
// api/contact.php reads it from there, so the API key is never web-accessible.
// Never commit the real file: .gitignore excludes alistron-config.php.

return [
    // API key from https://resend.com (required)
    'RESEND_API_KEY' => 're_xxxxxxxxxxxxxxxxxxxxxxxx',
    // Sender on a domain verified in Resend
    'RESEND_FROM_EMAIL' => 'website@alistron.in',
    // Inbox that receives enquiries
    'RESEND_TO_EMAIL' => 'contact@alistron.in',
];
