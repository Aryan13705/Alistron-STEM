import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export so the site can be dropped onto Cloudflare Pages. */
  output: "export",
  /* trailingSlash emits /about/index.html which Pages serves cleanly at /about */
  trailingSlash: true,
  /* next/image optimization needs a server; disable it for static hosting. */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
