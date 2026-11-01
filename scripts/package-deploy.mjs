// Builds the static export for one host and packages it for upload.
//
//   node scripts/package-deploy.mjs heliohost   -> heliohost-deploy.zip
//   node scripts/package-deploy.mjs github      -> github-pages-deploy/ (folder to drag into GitHub)
//   node scripts/package-deploy.mjs cloudflare  -> cloudflare-pages-deploy.zip
//
// Runs `next build` with the target's settings, copies deploy/<target>/webroot/
// over out/, then zips out/ (or copies it to a folder for GitHub's web uploader).
//
// GitHub Pages options (environment variables):
//   BASE_PATH                     "/<repo>" for a project site at <user>.github.io/<repo>;
//                                 leave unset for <user>.github.io or a custom domain
//   NEXT_PUBLIC_CONTACT_ENDPOINT  where the contact form posts (Pages has no backend);
//                                 defaults to the HelioHost endpoint

import { cpSync, existsSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, "out");
const nextBin = join(root, "node_modules", "next", "dist", "bin", "next");

const TARGETS = {
  heliohost: { zip: "heliohost-deploy.zip", env: {} },
  cloudflare: { zip: "cloudflare-pages-deploy.zip", env: {} },
  github: {
    dir: "github-pages-deploy",
    env: {
      BASE_PATH: process.env.BASE_PATH ?? "",
      NEXT_PUBLIC_CONTACT_ENDPOINT: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "https://alistron.in/api/contact",
    },
  },
};

const name = process.argv[2];
const target = TARGETS[name];
if (!target) {
  console.error(`Usage: node scripts/package-deploy.mjs <${Object.keys(TARGETS).join("|")}>`);
  process.exit(1);
}

// Only the GitHub target may use a sub-path or remote contact endpoint; clear
// anything left in the shell so it can't leak into the other bundles.
const env = { ...process.env, BASE_PATH: "", NEXT_PUBLIC_CONTACT_ENDPOINT: "", ...target.env };
execFileSync(process.execPath, [nextBin, "build"], { cwd: root, env, stdio: "inherit" });

if (!existsSync(outDir)) {
  console.error("next build did not produce out/.");
  process.exit(1);
}
cpSync(join(root, "deploy", name, "webroot"), outDir, { recursive: true });

if (target.zip) {
  const zipPath = join(root, target.zip);
  rmSync(zipPath, { force: true });
  execFileSync("zip", ["-rq", "-X", zipPath, ".", "-x", "*.DS_Store"], { cwd: outDir, stdio: "inherit" });
  console.log(`Packaged ${name}: ${target.zip}`);
} else {
  const dirPath = join(root, target.dir);
  rmSync(dirPath, { recursive: true, force: true });
  cpSync(outDir, dirPath, { recursive: true });
  console.log(`Packaged ${name}: ${target.dir}/`);
}
