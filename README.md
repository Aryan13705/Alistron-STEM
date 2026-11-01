This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy to Cloudflare Pages (drag and drop)

The site is configured as a Next.js static export (`output: "export"`), so it can be
deployed to Cloudflare Pages by dragging a folder. The contact form keeps working on
Cloudflare through a Pages Function in advanced mode (`public/_worker.js`).

1. Build the static site:

   ```bash
   npm install
   npm run build
   ```

   This produces the deployable `out/` folder (or run `npm run build:cloudflare` to
   also generate `cloudflare-pages-deploy.zip`).

2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages →
   Upload assets**, then drag either the `out/` folder or `cloudflare-pages-deploy.zip`.

3. (Optional) In the Pages project under **Settings → Environment variables**, add
   these to enable real email delivery for the contact form. Without a key the form
   still succeeds and logs enquiries server-side:

   - `RESEND_API_KEY` – Resend API key
   - `RESEND_FROM_EMAIL` – verified sender (defaults to `onboarding@resend.dev`)
   - `RESEND_TO_EMAIL` – recipient inbox (defaults to `contact@alistron.in`)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy to other static hosts

Because the build is a plain static export, the `out/` folder also works on GitHub
Pages, Netlify, S3, or any static file server. On hosts without Cloudflare Pages
Functions, the contact form's `/api/contact` endpoint will be unavailable.

