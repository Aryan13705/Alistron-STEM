# Production Check — Alistron Website

Tracking of issues found while reviewing the production deployment.
Legend: **[P1]** critical / user-facing · **[P2]** important · **[P3]** polish
Status: `DONE` fixed · `TODO` open · `BLOCKED` waiting on assets/specs

## Performance

- [x] **DONE — Heavy images / slow loading.** Project, journey and team photos were
  served raw (300 KB–1 MB each, ~6.4 MB on the pages that use them). Re-encoded
  to WebP (`npm run optimize:images`), ~83% smaller (used set ~6.4 MB -> ~1.0 MB).
  Project cards alone drop from ~4 MB to ~0.7 MB.
- [x] **DONE — No cache headers.** Production returned
  `cache-control: public, max-age=0, must-revalidate` for everything. Added
  `public/_headers` (immutable for `/_next/static/*`, 30-day cache for
  `/images/*` and `*.svg`) — applies on Cloudflare Pages.
- [ ] **TODO [P3]** Remove unused heavy photos still shipped in `public/images`
  (e.g. `company-hq.jpg` 828 KB, `obstacle-avoider.jpg` 796 KB,
  `bluetooth-car.jpg` 800 KB, `team-group.png` 672 KB). Not referenced by any
  page but add ~3 MB to the deploy. Left in place in case they are planned for
  future pages — confirm before deleting.
- [x] **DONE** Removed the leftover Next.js starter SVGs (`next.svg`,
  `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`) from `public/`.

## Brand / assets

- [ ] **BLOCKED — Logos missing.** Navbar brand is a placeholder dark square with
  the letter "A" (`src/components/Navbar.tsx`). No logo file in `public/`.
  Waiting on the official logo asset(s) to drop in.
- [ ] **BLOCKED [P3]** Social share image (`openGraph.images` / `twitter.images`)
  and `apple-touch-icon` are not set in `src/app/layout.tsx`.

## Layout / responsiveness

- [ ] **TODO [P1] — Issues at some screen resolutions (reported).**
  Needs specifics to fix: viewport width(s) + screenshots. Candidate areas to
  re-check: Navbar breakpoint (switches at 840px), project/event card grids,
  hero headings (`clamp()`), and detail-page hero images on mobile.

## Code quality

- [x] **DONE — Stray `"use me"` directives** left in `Navbar.tsx`,
  `Diagrams.tsx`, `ContactForm.tsx`. Removed.
- [x] **DONE — Lint errors/warnings** (unused imports, unescaped entity,
  `no-explicit-any`). `npm run lint` is clean.

## Deployment

- [x] **DONE — Cloudflare Pages drag-and-drop.** Static export (`out/`) plus
  `_worker.js` / `_routes.json` keep the contact form working. `npm run build:cloudflare`
  produces `cloudflare-pages-deploy.zip`.
