const vm = require('vm');
const fs = require('fs');
let src = fs.readFileSync('gen-le-batch.js', 'utf8');
const cut = src.indexOf('// ===== VALIDACION');
if (cut > 0) src = src.slice(0, cut);
const sandbox = { MODULES: [], console, require, __dirname: __dirname };
try {
  vm.runInNewContext(src, sandbox);
} catch (e) {
  console.log('LOAD ERR:', e.message);
}
console.log('modules:', sandbox.MODULES.length);
const m0 = sandbox.MODULES[0];
if (m0) {
  console.log('slug:', m0.slug);
  console.log('theory levels:', (m0.theory || []).map(t => t && t.level).join(','));
  console.log('exercises count:', m0.exercises ? m0.exercises.length : 'UNDEFINED');
  console.log('first exercise:', JSON.stringify(m0.exercises && m0.exercises[0]));
  if (m0.exercises) {
    const bad = [];
    m0.exercises.forEach((q, i) => { if (!q || !q.difficulty || !['basico','intermedio','avanzado'].includes(q.difficulty)) bad.push(i + ':' + (q ? q.difficulty : 'NULL')); });
    console.log('bad difficulty entries:', JSON.stringify(bad));
  }
}
