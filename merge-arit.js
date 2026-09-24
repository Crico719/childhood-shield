#!/usr/bin/env node
// Merge aritmetica batches into course-content.ts
const fs = require('fs');
const path = 'src/lib/course-content.ts';
let content = fs.readFileSync(path, 'utf8');

// Check if already imported
if (content.includes('aritBatch1')) {
  console.log('Already imported, skipping.');
  process.exit(0);
}

// Add import at top (after last import line)
const importLines = `
import { aritBatch1 } from "./data/arit-batch-1";
import { aritBatch2 } from "./data/arit-batch-2";
import { aritBatch3 } from "./data/arit-batch-3";
import { aritBatch4 } from "./data/arit-batch-4";
import { aritBatch5 } from "./data/arit-batch-5";
import { aritBatch6 } from "./data/arit-batch-6";
import { aritBatch7 } from "./data/arit-batch-7";
`;

// Find last import line
const lines = content.split('\n');
let lastImportIdx = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('import ')) lastImportIdx = i;
}
if (lastImportIdx >= 0) {
  lines.splice(lastImportIdx + 1, 0, importLines);
} else {
  lines.unshift(importLines);
}

content = lines.join('\n');

// Add courseContent assignment at the end
const assignLine = '\ncourseContent["aritmetica"] = [...aritBatch1, ...aritBatch2, ...aritBatch3, ...aritBatch4, ...aritBatch5, ...aritBatch6, ...aritBatch7];\n';
content += assignLine;

fs.writeFileSync(path, content, 'utf8');
console.log('Merged aritmetica into course-content.ts');
