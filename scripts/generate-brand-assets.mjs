/*
 * Generates the site's brand assets from the logo system board.
 *   node scripts/generate-brand-assets.mjs
 * Crop boxes are pixel coordinates on assets/brand/alistron-logo-board.png (1774x887).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const board = join(root, "assets", "brand", "alistron-logo-board.png");
const appDir = join(root, "src", "app");
const brandDir = join(root, "public", "images", "brand");

const NAVY = "#030B1C";
const EMBLEM = { left: 240, top: 30, width: 580, height: 410 };
const LOCKUP = { left: 110, top: 30, width: 790, height: 525 };

// Feathered edge mask so cropped artwork fades into the page background instead of showing a hard edge.
const featherMask = (w, h, inset) =>
  sharp({ create: { width: w, height: h, channels: 3, background: "#000" } })
    .composite([{ input: { create: { width: w - inset * 2, height: h - inset * 2, channels: 3, background: "#fff" } }, left: inset, top: inset }])
    .png()
    .toBuffer()
    .then((buf) => sharp(buf).blur(inset / 2).extractChannel(0).raw().toBuffer());

// `keyOut` also drops the board's dark navy backdrop (alpha ramps up with brightness) so the
// artwork and its glow sit directly on any dark background.
const faded = async (box, inset, keyOut = false) => {
  const mask = await featherMask(box.width, box.height, inset);
  const rgb = await sharp(board).extract(box).removeAlpha().raw().toBuffer();
  const rgba = Buffer.alloc(box.width * box.height * 4);
  for (let i = 0; i < box.width * box.height; i++) {
    const [r, g, b] = [rgb[i * 3], rgb[i * 3 + 1], rgb[i * 3 + 2]];
    let a = 1;
    if (keyOut) {
      const t = Math.min(1, Math.max(0, (Math.max(r, g, b) - 72) / 120));
      a = t * t * (3 - 2 * t);
    }
    const k = a > 0.01 ? 1 / Math.sqrt(a) : 0;
    rgba[i * 4] = Math.min(255, r * k);
    rgba[i * 4 + 1] = Math.min(255, g * k);
    rgba[i * 4 + 2] = Math.min(255, b * k);
    rgba[i * 4 + 3] = Math.round(a * mask[i]);
  }
  return sharp(rgba, { raw: { width: box.width, height: box.height, channels: 4 } }).png().toBuffer();
};

// Hero emblem (transparent background).
const emblem = await faded(EMBLEM, 12, true);
await sharp(emblem).webp({ quality: 88, alphaQuality: 90 }).toFile(join(brandDir, "emblem.webp"));

// Apple touch icon: emblem centred on a navy tile.
const appleEmblem = await sharp(emblem).resize({ width: 168 }).toBuffer();
await sharp({ create: { width: 180, height: 180, channels: 4, background: NAVY } })
  .composite([{ input: appleEmblem, gravity: "center" }])
  .png()
  .toFile(join(appDir, "apple-icon.png"));

// Open Graph / Twitter share image (1200x630): full lockup with tagline.
const lockup = await sharp(await faded(LOCKUP, 24)).resize({ height: 560 }).toBuffer();
// Backdrop: the same artwork stretched and heavily blurred, so the crop edge blends in.
const backdrop = await sharp(board).extract(LOCKUP).resize(1200, 630, { fit: "fill" }).blur(60).modulate({ brightness: 0.7 }).toBuffer();
await sharp(backdrop)
  .composite([{ input: lockup, gravity: "center" }])
  .flatten({ background: NAVY })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(join(appDir, "opengraph-image.jpg"));

// favicon.ico from the vector mark (PNG-in-ICO, 16/32/48).
const svg = readFileSync(join(appDir, "icon.svg"));
const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map((s) => sharp(svg, { density: 384 }).resize(s, s).png().toBuffer()));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((s, i) => {
  const e = 6 + i * 16;
  header.writeUInt8(s, e);
  header.writeUInt8(s, e + 1);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(pngs[i].length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += pngs[i].length;
});
writeFileSync(join(appDir, "favicon.ico"), Buffer.concat([header, ...pngs]));

console.log("Brand assets written.");
