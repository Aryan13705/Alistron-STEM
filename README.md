# Alistron website

Marketing site for Alistron (Alistron Bionics and Alistron STEM), live at
[alistron.in](https://alistron.in). Built with Next.js as a fully static export and
hosted on HelioHost (Plesk). The same site can also be uploaded to GitHub Pages or
Cloudflare Pages.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
```

Content lives in `src/data/` (events, projects, team, journey). The contact form posts
to `/api/contact`, which only exists on the host (`deploy/heliohost/webroot/api/contact.php`
or the Cloudflare `_worker.js`), so it shows an error in local dev. That's expected.
The GitHub Pages build posts to the HelioHost endpoint instead, since Pages has no backend.

Host-specific files live in `deploy/<host>/webroot/` and are copied into `out/` when the
upload bundle is packaged, so no host's files ship to another. Each `build:*` script
runs `next build` itself with that host's settings.

## Deploy to HelioHost (Plesk)

The site is plain static files served by Apache. The contact form is a single PHP
file. No Node.js app is needed on the server.

1. Build the upload bundle:

   ```bash
   npm run build:heliohost      # -> heliohost-deploy.zip
   ```

   It contains the static export plus `.htaccess` (clean URLs, 404 page, caching,
   gzip, security headers) and `api/contact.php`.

2. In Plesk: **Websites & Domains → your domain → File Manager**, open `httpdocs/`,
   delete the default `index.html` (and any old site files), upload
   `heliohost-deploy.zip`, then select it → **Extract Files** into `httpdocs/`.
   `.htaccess` must end up directly in `httpdocs/`, not in a subfolder.

3. **Required for the contact form**: copy `deploy/heliohost/alistron-config.example.php`
   to `alistron-config.php`, fill in the values, and upload it to the folder
   **above** `httpdocs/` (the domain's home folder), so the key is never web-accessible:

   | Key | Value |
   | --- | --- |
   | `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
   | `RESEND_FROM_EMAIL` | A sender on a domain verified in Resend, e.g. `website@alistron.in` |
   | `RESEND_TO_EMAIL` | Inbox that receives enquiries (defaults to `contact@alistron.in`) |

   The domain's PHP version must be 7.4 or newer (Plesk: **PHP Settings**). It
   is usually on by default.

4. **Domains**: add `www.alistron.in` as an alias of `alistron.in` in Plesk (or point
   both DNS records at HelioHost). `.htaccess` 301-redirects `www` to `alistron.in`.

5. **HTTPS**: issue a Let's Encrypt certificate in Plesk (**SSL/TLS Certificates**),
   then enable HTTP → HTTPS redirection, either with Plesk's "Permanent SEO-safe 301
   redirect" option in **Hosting Settings** or by uncommenting the three
   `Force HTTPS` lines in `.htaccess`. The certificate must cover both `alistron.in`
   and `www.alistron.in`.

6. Check it: `/about` should redirect to `/about/`, an unknown URL should show the
   branded 404, and the contact form should deliver a test enquiry.

To update the site, rebuild and extract the new zip over `httpdocs/` (overwrite).
`alistron-config.php` sits outside `httpdocs/`, so updates never touch it.

If cache or security headers are missing in production, Plesk's nginx is serving
static files directly and skipping `.htaccess`. Turn off **Smart static files
processing** under **Apache & nginx Settings** if your plan lets you. The site
still works without it.

## Deploy to GitHub Pages (upload from the browser)

1. Build the folder to upload:

   ```bash
   npm run build:github                       # site at <user>.github.io or a custom domain
   BASE_PATH=/<repo> npm run build:github     # site at <user>.github.io/<repo>
   ```

   This writes `github-pages-deploy/`: the static export plus `.nojekyll`. GitHub runs
   Jekyll by default, which drops the `_next/` folder; `.nojekyll` turns that off.
   Without it the site loads with no styles or scripts.

2. Create a repository (or empty its root), then **Add file → Upload files**. GitHub
   takes at most 100 files per upload and the site has ~175, so upload in two commits:
   the `_next` folder first, then everything else in `github-pages-deploy/`. Make sure
   `.nojekyll` is included: Finder hides it, so press **Cmd+Shift+.** to show it.

3. **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, branch
   `main`, folder `/ (root)`.

The contact form posts to `https://alistron.in/api/contact` (the HelioHost PHP endpoint,
which allows cross-origin requests), so it works once HelioHost is live **with HTTPS**.
GitHub Pages is HTTPS-only, so browsers block calls to an `http://` endpoint. To use a
different endpoint, set `NEXT_PUBLIC_CONTACT_ENDPOINT` when building.

## Deploy to Cloudflare Pages

1. Build the upload bundle:

   ```bash
   npm run build:cloudflare     # -> cloudflare-pages-deploy.zip
   ```

2. In Cloudflare: **Workers & Pages → your Pages project → Create deployment**, then
   drag in `cloudflare-pages-deploy.zip`.

3. **Required for the contact form**: under **Settings → Environment variables**
   (Production), set:

   | Variable | Value |
   | --- | --- |
   | `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
   | `RESEND_FROM_EMAIL` | A sender on a domain verified in Resend, e.g. `website@alistron.in` |
   | `RESEND_TO_EMAIL` | Inbox that receives enquiries (defaults to `contact@alistron.in`) |

   Without a valid key the form doesn't pretend to succeed: it asks visitors to email
   `contact@alistron.in` directly, so no enquiry is silently lost. Redeploy after
   changing variables.

## Brand assets

The logo, favicon, apple icon, social share image and hero emblem are generated from
`assets/brand/alistron-logo-board.png`:

```bash
node scripts/generate-brand-assets.mjs
```
