import { readFileSync } from "fs";
const src = readFileSync("C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts", "utf8");
const re = /slug: "([a-z][a-z0-9-]+)"/g;
let m;
let total = 0, under = 0, ok = 0;
while ((m = re.exec(src)) !== null) {
  const slug = m[1];
  const blockEnd = src.indexOf('slug:', m.index + 1);
  const block = src.slice(m.index, blockEnd > 0 ? blockEnd : src.length);
  const exIdx = block.indexOf("exercises: [");
  if (exIdx === -1) { under++; console.log(slug, "NO EXERCISES"); continue; }
  const rest = block.slice(exIdx + 12);
  let depth = 0, end = -1;
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === "[") depth++;
    if (rest[i] === "]") { depth--; if (depth === 0) { end = i; break; } }
  }
  const count = (rest.slice(0, end).match(/\{\s*id:\s*\d+/g) || []).length;
  total++;
  if (count < 21) { under++; console.log(slug, count, "exercises"); }
  else ok++;
}
console.log(`\nTotal: ${total}, OK(21+): ${ok}, Under: ${under}`);
