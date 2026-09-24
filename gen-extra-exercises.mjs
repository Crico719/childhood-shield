import fs from "fs";
import path from "path";

const OUTPUT_DIR = "C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\src\\data";

// Read the main exercise files to get existing exercises per slug
function extractExercisesFromFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, "utf8");
  const exercises = {};
  const slugRegex = /"([a-z0-9-]+)":\s*\[/g;
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    const slug = match[1];
    const startIdx = match.index;
    // Find the matching closing bracket
    let depth = 0;
    let endIdx = startIdx;
    for (let i = content.indexOf("[", startIdx); i < content.length; i++) {
      if (content[i] === "[") depth++;
      if (content[i] === "]") depth--;
      if (depth === 0) { endIdx = i + 1; break; }
    }
    const block = content.substring(content.indexOf("[", startIdx), endIdx);
    const questionCount = (block.match(/question:/g) || []).length;
    exercises[slug] = questionCount;
  }
  return exercises;
}

// Read course-content.ts to get all slugs
const courseContent = fs.readFileSync("C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\course-content.ts", "utf8");
const slugRegex2 = /slug:\s*"([^"]+)"/g;
const allSlugs = [];
let m;
while ((m = slugRegex2.exec(courseContent)) !== null) {
  if (!allSlugs.includes(m[1])) allSlugs.push(m[1]);
}

console.log(`Total slugs: ${allSlugs.length}`);

// Count exercises per slug from existing files
const existingCounts = {};
for (const slug of allSlugs) existingCounts[slug] = 0;

// Count from main exercises in course-content.ts
for (const slug of allSlugs) {
  const regex = new RegExp(`slug:\\s*"${slug}"[\\s\\S]*?exercises:\\s*\\[([\\s\\S]*?)\\]\\s*,\\s*(?:extraExercises|illustrations|studyGuide|theory)`, "g");
  const m2 = regex.exec(courseContent);
  if (m2) {
    existingCounts[slug] = (m2[1].match(/question:/g) || []).length;
  }
}

// Also count from extra exercise files
const extraFiles = fs.readdirSync(OUTPUT_DIR).filter(f => f.includes("extra-exercises") && f.endsWith(".ts"));
for (const file of extraFiles) {
  const counts = extractExercisesFromFile(path.join(OUTPUT_DIR, file));
  for (const [slug, count] of Object.entries(counts)) {
    existingCounts[slug] = (existingCounts[slug] || 0) + count;
  }
}

console.log("\nExercises per slug:");
let totalExercises = 0;
for (const [slug, count] of Object.entries(existingCounts)) {
  totalExercises += count;
  if (count < 30) {
    console.log(`  ${slug}: ${count} (needs more)`);
  }
}
console.log(`\nTotal existing exercises: ${totalExercises}`);
console.log(`Modules needing more exercises: ${Object.values(existingCounts).filter(c => c < 30).length}`);
