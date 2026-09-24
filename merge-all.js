#!/usr/bin/env node
const fs = require('fs');
const path = 'src/lib/course-content.ts';
let content = fs.readFileSync(path, 'utf8');

function addImportAndAssign(courseName, batchFiles, varPrefix) {
  if (content.includes(batchFiles[0])) return;

  const importLines = batchFiles.map(f => `import { ${f} } from "./data/${f.replace(/Batch/, '-batch-').toLowerCase().replace(/([0-9]+)/, '-$1')}"\n`).join('');

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

  const assignLine = `\ncourseContent["${courseName}"] = [...${batchFiles.join(', ...')}];\n`;
  content += assignLine;
}

addImportAndAssign('aritmetica', ["aritBatch1","aritBatch2","aritBatch3","aritBatch4","aritBatch5","aritBatch6","aritBatch7"]);
addImportAndAssign('algebra', ["algebraBatch1","algebraBatch2","algebraBatch3","algebraBatch4","algebraBatch5","algebraBatch6","algebraBatch7"]);
addImportAndAssign('ciencia', ["cienciaBatch1","cienciaBatch2","cienciaBatch3","cienciaBatch4","cienciaBatch5","cienciaBatch6","cienciaBatch7"]);

fs.writeFileSync(path, content, 'utf8');
console.log('All courses merged into course-content.ts');
