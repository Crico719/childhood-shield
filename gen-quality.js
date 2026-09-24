const fs = require('fs');
const path = require('path');

const OUT = path.resolve(__dirname, '../prepa-premium-uv/src/data');

function writeBatch(prefix, batchNum, modules) {
  const varName = `${prefix}Batch${batchNum}`;
  let out = `import type { CourseModule } from '../lib/course-content';\nexport const ${varName}: CourseModule[] = [\n`;
  for (const m of modules) {
    out += `  {\n`;
    out += `    slug: "${m.slug}",\n`;
    out += `    tip: "${m.tip.replace(/"/g, '\\"')}",\n`;
    out += `    theory: [\n`;
    for (const lvl of ['basico','intermedio','avanzado']) {
      out += `      { level: "${lvl}", title: "${m.titles[lvl]}", lines: [${m.theory[lvl].map(s=>`"${s.replace(/"/g,'\\"')}"`).join(', ')}] },\n`;
    }
    out += `    ],\n`;
    out += `    illustrations: [${(m.illustrations||[]).map(s=>`"${s.replace(/"/g,'\\"')}"`).join(', ')}],\n`;
    out += `    exercises: [\n`;
    let id = m.idStart || 1;
    for (const q of m.questions) {
      out += `      { id: ${id++}, question: "${q.q.replace(/"/g,'\\"')}", options: [${q.o.map(s=>`"${s.replace(/"/g,'\\"')}"`).join(', ')}], correctIndex: ${q.c}, explanation: "${q.e.replace(/"/g,'\\"')}", difficulty: "${q.d}" },\n`;
    }
    out += `    ],\n`;
    out += `  },\n`;
  }
  out += `];\n`;
  const filePath = path.join(OUT, `${prefix}-batch-${batchNum}.ts`);
  fs.writeFileSync(filePath, out, 'utf8');
  console.log(`  ${prefix}-batch-${batchNum}.ts (${modules.length} modules, ${modules.reduce((s,m)=>s+m.questions.length,0)} questions)`);
}

function splitIntoBatches(arr, size) {
  const batches = [];
  for (let i = 0; i < arr.length; i += size) batches.push(arr.slice(i, i + size));
  return batches;
}

module.exports = { writeBatch, splitIntoBatches };
