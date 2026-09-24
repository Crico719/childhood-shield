import { readFileSync } from "fs";
const src = readFileSync("C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts", "utf8");
const slug = "guerras-civiles-xix";
const slugIdx = src.indexOf(`slug: "${slug}"`);
const blockEnd = src.indexOf('slug:', slugIdx + 10);
const block = src.slice(slugIdx, blockEnd > 0 ? blockEnd : src.length);
console.log("Block length:", block.length);
const exIdx = block.indexOf("exercises: [");
console.log("exercises at:", exIdx);
if (exIdx > 0) {
  const rest = block.slice(exIdx + 12);
  let depth = 0, end = -1;
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === "[") depth++;
    if (rest[i] === "]") { depth--; if (depth === 0) { end = i; break; } }
  }
  const arr = rest.slice(0, end);
  const count = (arr.match(/\bid:\s*\d+/g) || []).length;
  console.log("Current count:", count);
  console.log("Last 200 chars:", arr.slice(-200));
}
