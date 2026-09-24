#!/usr/bin/env node
// Master generator: reads ari-topics-p1.js and generates arit-batch-*.ts files
// Also includes remaining topics defined inline
const fs = require('fs'), P = require('path');
const D = "C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\src\\data";
if (!fs.existsSync(D)) fs.mkdirSync(D, { recursive: true });

let gid = 50001;
const I = () => gid++;
const E = (q, o, a, e, d) => ({ id: I(), question: q, options: o, correctIndex: a, explanation: e, difficulty: d });
const M = (s, ti, tp, th, ex) => ({
  slug: s,
  illustrationSummary: `Diagrama de ${ti} con conceptos principales.`,
  tip: tp,
  studyGuide: `## ${ti}\n\n${th.map(t => `### ${t.title}\n${t.lines.join('. ')}`).join('\n\n')}`,
  theory: th,
  illustrations: [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold" text-anchor="middle">${ti}</text><rect x="30" y="40" width="240" height="120" fill="none" stroke="#2563eb" stroke-width="2" rx="8"/><text x="150" y="105" font-family="Arial" font-size="11" fill="#666" text-anchor="middle">Conceptos</text></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><circle cx="150" cy="100" r="50" fill="#2563eb20" stroke="#2563eb" stroke-width="2"/><text x="150" y="105" font-family="Arial" font-size="11" fill="#2563eb" text-anchor="middle">Ejemplo</text></svg>`
  ],
  exercises: ex
});

function W(n, m) {
  const v = "aritBatch" + n;
  const c = `import type { CourseModule } from "../../lib/course-content";\n\nexport const ${v}: CourseModule[] = ${JSON.stringify(m)};\n`;
  fs.writeFileSync(P.join(D, `arit-batch-${n}.ts`), c, "utf8");
  console.log(`Wrote arit-batch-${n}.ts: ${m.length} modules, ${(c.length / 1024).toFixed(0)}KB`);
}

// Load part 1 topics
const part1 = require('./ari-topics-p1.js');

// We need to convert part1 format (which uses pre-made E() calls) to proper modules
const modules1 = part1.map(t => {
  // Flatten all exercises
  const allEx = [
    ...t.ex.basico, ...t.ex.intermedio, ...t.ex.avanzado
  ].map(e => E(e.q, e.o, e.a, e.e, e.d || 'intermedio'));
  return M(t.slug, t.title, t.tip, t.th, allEx);
});

// Now define topics 13-70 inline as compact data
// Format: [slug, title, tip, [basico_theory_lines], [intermedio_theory_lines], [avanzado_theory_lines], exercises]
// exercises: array of [q, [opts], correctIdx, explanation, difficulty]

const topics13to70 = require('./topics-remaining.js');

const modules2to7 = topics13to70.map(t => {
  const allEx = t.ex.map(e => E(e[0], e[1], e[2], e[3], e[4]));
  const th = [
    { level: 'basico', title: 'Conceptos', lines: t.b },
    { level: 'intermedio', title: 'Aplicaciones', lines: t.i },
    { level: 'avanzado', title: 'Propiedades', lines: t.a }
  ];
  return M(t.s, t.t, t.p, th, allEx);
});

const allModules = [...modules1, ...modules2to7];
console.log(`Total modules: ${allModules.length}`);

// Split into batches of 10
const batchSize = 10;
for (let i = 0; i < allModules.length; i += batchSize) {
  const batch = allModules.slice(i, i + batchSize);
  W(Math.floor(i / batchSize) + 1, batch);
}

console.log(`Done! Total IDs used: ${gid - 50001}`);
