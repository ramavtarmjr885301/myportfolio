// Usage: node scripts/extract-avatar.mjs path/to/your-original-portfolio.html
// Pulls the base64 <img> from your old HTML and saves it to public/avatar.jpg
import fs from "node:fs";
import path from "node:path";

const src = process.argv[2];
if (!src) {
  console.error("Usage: node scripts/extract-avatar.mjs <original-portfolio.html>");
  process.exit(1);
}
const html = fs.readFileSync(src, "utf8");
const m = html.match(/data:image\/(jpeg|jpg|png|webp);base64,([A-Za-z0-9+/=\s]+)/);
if (!m) {
  console.error("No base64 image found in that file.");
  process.exit(1);
}
const ext = m[1] === "jpeg" ? "jpg" : m[1];
const out = path.join("public", `avatar.${ext}`);
fs.mkdirSync("public", { recursive: true });
fs.writeFileSync(out, Buffer.from(m[2].replace(/\s+/g, ""), "base64"));
console.log(`Saved ${out}. If ext is not jpg, update AVATAR_SRC in src/lib/data.ts`);
