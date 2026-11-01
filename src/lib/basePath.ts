// Sub-path the site is built under ("" except for GitHub Pages project sites).
// <Link> adds it automatically; next/image src and fetch URLs need it added by hand.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const withBasePath = (path: string) => `${BASE_PATH}${path}`;
