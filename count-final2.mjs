import { readFileSync } from "fs";
const src = readFileSync("C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts", "utf8");
const lines = src.split("\n");

// Find all module blocks
let under = 0, ok = 0, noEx = 0;
const underSlugs = [];
for (let i = 0; i < lines.length; i++) {
  const slugMatch = lines[i].match(/slug: "([a-z][a-z0-9-]+)"/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  
  // Find exercises: [ in next 200 lines
  let exLine = -1;
  for (let j = i; j < Math.min(i + 200, lines.length); j++) {
    if (lines[j].includes("exercises: [")) { exLine = j; break; }
  }
  if (exLine === -1) { noEx++; continue; }
  
  // Count id: occurrences until ], closes
  let depth = 0, count = 0;
  for (let j = exLine; j < lines.length; j++) {
    const line = lines[j];
    for (const ch of line) {
      if (ch === "[") depth++;
      if (ch === "]") depth--;
    }
    if (depth <= 0) break;
    if (line.match(/\bid:\s*\d+/)) count++;
  }
  
  if (count >= 21) { ok++; }
  else { under++; underSlugs.push(`${slug}(${count})`); }
}

console.log(`OK(21+): ${ok}, Under: ${under}, NoEx: ${noEx}`);
if (underSlugs.length > 0) console.log("Under:", underSlugs.join(", "));
