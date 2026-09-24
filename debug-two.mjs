import { readFileSync } from "fs";
const c = readFileSync("C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts", "utf8");
const slug = "aplicaciones-trigonometricas";
const idx = c.indexOf('slug: "' + slug + '"');
const block = c.slice(idx, idx + 5000);
const exIdx = block.indexOf("exercises:");
if (exIdx === -1) {
  console.log("No exercises found");
} else {
  console.log(block.slice(exIdx, exIdx + 500));
}
