import { readFileSync } from "fs";
const c = readFileSync("C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts", "utf8");
const slug = "aplicaciones-trigonometricas";
const idx = c.indexOf('slug: "' + slug + '"');
const block = c.slice(idx, idx + 10000);
// Check what fields exist
const fields = ["slug:", "tip:", "theory:", "illustrations:", "illustrationSummary:", "studyGuide:", "exercises:"];
for (const f of fields) {
  const fi = block.indexOf(f);
  console.log(f, fi === -1 ? "NOT FOUND" : `at ${fi}`);
}
// Show last 500 chars of block
console.log("\n--- LAST 500 CHARS ---");
console.log(block.slice(-500));
