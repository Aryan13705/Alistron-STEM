import type { NextConfig } from "next";

/* Sub-path for GitHub Pages project sites (e.g. "/alistron-site"), set by
   scripts/package-deploy.mjs. Empty for HelioHost and Cloudflare. */
const basePath = (process.env.BASE_PATH ?? "").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  /* Static export so the site can be dropped onto any static host (HelioHost/Apache, GitHub Pages, Cloudflare Pages). */
  output: "export",
  /* trailingSlash emits /about/index.html, which Apache (DirectoryIndex) and Pages serve at /about/ */
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  /* next/image optimization needs a server; disable it for static hosting. */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
