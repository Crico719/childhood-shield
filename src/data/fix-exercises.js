const fs = require('fs');
const filePath = 'C:/Users/USUARIO/OneDrive/Documents/Default Project/src/data/rm-extra-exercises.ts';

const content = fs.readFileSync(filePath, 'utf8');

// Parse each module and its exercises
const moduleRegex = /"([a-z][a-z-]+)":\s*\[([\s\S]*?)\n  \]/g;
let match;
const modules = {};
const moduleOrder = [];

while ((match = moduleRegex.exec(content)) !== null) {
  const name = match[1];
  const body = match[2];
  moduleOrder.push(name);
  
  const exRegex = /\{ id: (\d+), question: "((?:[^"\\]|\\.)*)", options: \[((?:[^\]]|\](?!\s*,\s*\{))*)\], correctIndex: (\d+), explanation: "((?:[^"\\]|\\.)*)", difficulty: "(basic|intermediate|advanced)" \}/g;
  let em;
  const exercises = [];
  while ((em = exRegex.exec(body)) !== null) {
    exercises.push({
      id: parseInt(em[1]),
      question: em[2],
      options: em[3],
      correctIndex: parseInt(em[4]),
      explanation: em[5],
      difficulty: em[6]
    });
  }
  modules[name] = exercises;
}

// Report current state
console.log('Total modules found: ' + moduleOrder.length);
let totalExercises = 0;
const problematic = [];
for (const name of moduleOrder) {
  const exs = modules[name];
  const b = exs.filter(e => e.difficulty === 'basic').length;
  const i = exs.filter(e => e.difficulty === 'intermediate').length;
  const a = exs.filter(e => e.difficulty === 'advanced').length;
  totalExercises += exs.length;
  if (b !== 7 || i !== 7 || a !== 7) {
    problematic.push({name, b, i, a, total: exs.length});
  }
}
console.log('Total exercises: ' + totalExercises);
console.log('Modules needing fix: ' + problematic.length);
for (const p of problematic) {
  console.log('  ' + p.name + ': basic=' + p.b + ' inter=' + p.i + ' adv=' + p.a + ' total=' + p.total);
}
