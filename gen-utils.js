const fs = require('fs');
const path = require('path');
const OUT = path.resolve(__dirname, '../prepa-premium-uv/src/data');

// Helper to escape strings for TS output
function esc(s) { return s.replace(/\\/g,'\\\\').replace(/"/g,'\\"'); }

function writeBatch(prefix, batchNum, varName, modules) {
  let o = `import type { CourseModule } from '../lib/course-content';\nexport const ${varName}: CourseModule[] = [\n`;
  for (const m of modules) {
    o += `  {\n    slug: "${esc(m.slug)}",\n    tip: "${esc(m.tip)}",\n`;
    o += `    theory: [\n`;
    for (const t of m.theory) {
      o += `      { level: "${t.level}", title: "${esc(t.title)}", lines: [${t.lines.map(l=>`"${esc(l)}"`).join(', ')}] },\n`;
    }
    o += `    ],\n    illustrations: [],\n    exercises: [\n`;
    for (let i = 0; i < m.exercises.length; i++) {
      const q = m.exercises[i];
      o += `      { id: ${i+1}, question: "${esc(q.question)}", options: [${q.options.map(x=>`"${esc(x)}"`).join(', ')}], correctIndex: ${q.correctIndex}, explanation: "${esc(q.explanation)}", difficulty: "${q.difficulty}" },\n`;
    }
    o += `    ],\n  },\n`;
  }
  o += `];\n`;
  const fp = path.join(OUT, `${prefix}-batch-${batchNum}.ts`);
  fs.writeFileSync(fp, o, 'utf8');
  console.log(`  ${prefix}-batch-${batchNum}.ts: ${modules.length} modules, ${modules.reduce((s,m)=>s+m.exercises.length,0)} questions`);
}

module.exports = { writeBatch };
