import { readFileSync } from "fs";
const src = readFileSync("C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts", "utf8");
const lines = src.split("\n");

let under = 0, ok = 0;
const underSlugs = [];
for (let i = 0; i < lines.length; i++) {
  const slugMatch = lines[i].match(/slug: "([a-z][a-z0-9-]+)"/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  
  // Find exercises: [ in next 500 lines
  let exLine = -1;
  for (let j = i; j < Math.min(i + 500, lines.length); j++) {
    if (lines[j].match(/^\s*exercises:\s*\[/)) { exLine = j; break; }
  }
  if (exLine === -1) { under++; underSlugs.push(`${slug}(0)`); continue; }
  
  // Count exercises by counting { id: patterns until ] closes the array
  let depth = 0, count = 0;
  for (let j = exLine; j < lines.length; j++) {
    const line = lines[j];
    for (let k = 0; k < line.length; k++) {
      if (line[k] === "[") depth++;
      if (line[k] === "]") { depth--; if (depth === 0) break; }
    }
    if (depth <= 0) break;
    if (line.match(/\bid:\s*\d+/)) count++;
  }
  
  if (count >= 21) ok++;
  else { under++; underSlugs.push(`${slug}(${count})`); }
}

console.log(`OK(21+): ${ok}, Under(21): ${under}`);
if (underSlugs.length > 0) console.log("Under:", underSlugs.join(", "));
