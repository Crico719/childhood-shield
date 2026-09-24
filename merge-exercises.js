const fs = require("fs");
const path = require("path");

const DATA_DIR = "C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\src\\data";
const CC_PATH = "C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\course-content.ts";

// 1. Read all extra batch files and extract slug → exercises
const batchFiles = fs.readdirSync(DATA_DIR)
  .filter(f => f.includes("extra-batch") && f.endsWith(".ts") && !f.startsWith("_") && !f.startsWith("rm-extra-batch-g") && !f.startsWith("hist-extra-batch-e") && !f.startsWith("hist-extra-batch-g") && !f.startsWith("hist-extra-batch-h"));

const allExtra = {}; // slug → {id, question, options, correctIndex, explanation, difficulty}[]

for (const file of batchFiles) {
  const content = fs.readFileSync(path.join(DATA_DIR, file), "utf8");
  
  // Extract each slug block: "slug-name": [ ... ],
  const slugBlocks = content.match(/"([a-z0-9-]+)":\s*\[[\s\S]*?\],?\s*(?="|\})/g) || [];
  
  for (const block of slugBlocks) {
    const slugMatch = block.match(/"([a-z0-9-]+)"/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];
    
    // Extract exercises from this block
    const exerciseRegex = /\{\s*id:\s*(\d+),\s*question:\s*"([^"]*)",\s*options:\s*\[([^\]]*)\],\s*correctIndex:\s*(\d+),\s*explanation:\s*"([^"]*)",\s*difficulty:\s*"([^"]*)"\s*\}/g;
    let exMatch;
    while ((exMatch = exerciseRegex.exec(block)) !== null) {
      if (!allExtra[slug]) allExtra[slug] = [];
      allExtra[slug].push({
        id: parseInt(exMatch[1]),
        question: exMatch[2],
        options: JSON.parse("[" + exMatch[3] + "]"),
        correctIndex: parseInt(exMatch[4]),
        explanation: exMatch[5],
        difficulty: exMatch[6]
      });
    }
  }
}

// Count
let totalExtra = 0;
for (const [slug, exs] of Object.entries(allExtra)) {
  totalExtra += exs.length;
}
console.log(`Extra exercises extracted: ${totalExtra} across ${Object.keys(allExtra).length} slugs`);

// 2. Generate a new TS file that exports extra exercises as part of courseContent
// Instead of editing the huge course-content.ts, we'll create extra-exercises.ts
// that can be imported separately

let output = `import type { CourseExercise } from "./course-content";\n\n`;
output += `export const extraExercises: Record<string, CourseExercise[]> = {\n`;

for (const [slug, exs] of Object.entries(allExtra)) {
  if (exs.length === 0) continue;
  output += `  "${slug}": [\n`;
  for (const ex of exs) {
    output += `    { id: ${ex.id}, question: ${JSON.stringify(ex.question)}, options: ${JSON.stringify(ex.options)}, correctIndex: ${ex.correctIndex}, explanation: ${JSON.stringify(ex.explanation)}, difficulty: "${ex.difficulty}" },\n`;
  }
  output += `  ],\n`;
}

output += `};\n`;

const outPath = "C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\extra-exercises.ts";
fs.writeFileSync(outPath, output, "utf8");
console.log(`\nWrote ${outPath}`);
console.log(`File size: ${(output.length / 1024).toFixed(1)} KB`);
