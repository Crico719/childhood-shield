const fs = require("fs");
const path = require("path");

const DATA_DIR = "C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\src\\data";
const CC_PATH = "C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\course-content.ts";

// 1. Read all extra exercise batch files and extract slug→exercises mappings
const batchFiles = fs.readdirSync(DATA_DIR).filter(f => f.includes("extra-batch") && f.endsWith(".ts") && !f.startsWith("_"));

const allExtra = {}; // slug → CourseExercise[]

for (const file of batchFiles) {
  const content = fs.readFileSync(path.join(DATA_DIR, file), "utf8");
  
  // Extract export name
  const exportMatch = content.match(/export\s+const\s+(\w+)/);
  if (!exportMatch) continue;
  
  // Extract all slug→exercises pairs using regex
  // Match: "slug-name": [ { ... }, ... ]
  const slugRegex = /"([a-z0-9-]+)":\s*\[/g;
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    const slug = match[1];
    // Find the matching closing bracket for this array
    let depth = 0;
    let startIdx = content.indexOf("[", match.index);
    let endIdx = startIdx;
    for (let i = startIdx; i < content.length; i++) {
      if (content[i] === "[") depth++;
      if (content[i] === "]") depth--;
      if (depth === 0) { endIdx = i + 1; break; }
    }
    
    const arrayStr = content.substring(startIdx, endIdx);
    // Count exercises by counting "id:" occurrences
    const exerciseCount = (arrayStr.match(/\bid\s*:/g) || []).length;
    
    if (!allExtra[slug]) allExtra[slug] = [];
    allExtra[slug].push({ file, count: exerciseCount });
  }
}

console.log(`\n=== EXTRA EXERCISES SUMMARY ===`);
console.log(`Total slugs with extra exercises: ${Object.keys(allExtra).length}`);
let totalExtra = 0;
for (const [slug, info] of Object.entries(allExtra)) {
  const count = info.reduce((sum, i) => sum + i.count, 0);
  totalExtra += count;
  console.log(`  ${slug}: ${count} extra (from ${info.map(i => i.file).join(", ")})`);
}
console.log(`\nTotal extra exercises: ${totalExtra}`);
console.log(`\nFiles used: ${batchFiles.length}`);
