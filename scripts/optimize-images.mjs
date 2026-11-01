import { readFileSync, readdirSync, statSync, unlinkSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dataDir = join(root, "src", "data");
const publicDir = join(root, "public");

const MAX_WIDTH = 1600;
const QUALITY = 80;

const referenced = new Set();
for (const file of readdirSync(dataDir)) {
  if (!file.endsWith(".ts")) continue;
  const content = readFileSync(join(dataDir, file), "utf8");
  for (const match of content.matchAll(/["'](\/images\/[^"']+\.(?:jpe?g|png))["']/g)) {
    referenced.add(match[1]);
  }
}

const toPublic = (url) => join(publicDir, url.replace(/^\//, ""));

let beforeTotal = 0;
let afterTotal = 0;
const results = [];

for (const url of [...referenced].sort()) {
  const source = toPublic(url);
  if (!existsSync(source)) {
    console.warn(`skip (missing): ${url}`);
    continue;
  }

  const before = statSync(source).size;
  const outPath = source.replace(/\.(jpe?g|png)$/i, ".webp");

  const pipeline = sharp(source).rotate();
  const meta = await pipeline.metadata();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(outPath);

  const after = statSync(outPath).size;
  beforeTotal += before;
  afterTotal += after;
  results.push({ url, before, after, out: outPath.replace(publicDir, "") });

  if (source !== outPath) unlinkSync(source);
}

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
results.sort((a, b) => b.before - a.before);
for (const r of results) {
  const pct = ((1 - r.after / r.before) * 100).toFixed(0);
  console.log(`${r.out.padEnd(46)} ${kb(r.before).padStart(8)} -> ${kb(r.after).padStart(8)}  (-${pct}%)`);
}
console.log(`\nTotal: ${kb(beforeTotal)} -> ${kb(afterTotal)} across ${results.length} images`);
