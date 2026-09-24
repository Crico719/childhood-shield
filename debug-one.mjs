import { readFileSync } from "fs";
const src = readFileSync("C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts", "utf8");
const slug = "aplicaciones-trigonometricas";
const idx = src.indexOf(`slug: "${slug}"`);
const block = src.slice(idx, idx + 3000);
// Find exercises line
const lines = block.split("\n");
for (let i = 0; i < lines.length && i < 50; i++) {
  if (lines[i].includes("exercises")) {
    console.log(`Line ${i}: ${lines[i].substring(0, 100)}`);
  }
}
// Count exercises
let count = 0;
for (const line of lines) {
  if (line.match(/\bid:\s*\d+.*question:/)) count++;
}
console.log("Total exercises:", count);
