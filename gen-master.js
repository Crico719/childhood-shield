// Master generator for all 3 courses: Aritmética, Álgebra, Ciencia
// Each course gets 70 modules with 21 exercises each = 4,410 exercises total
// Generated as TypeScript batch files

const fs = require("fs");
const path = require("path");

const DIR = "C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\src\\data";
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

let globalId = 50001;
function nextId() { return globalId++; }

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeExercises(topic, slug, count = 21) {
  const exercises = [];
  const diffs = ["basico","basico","basico","basico","basico","basico","basico",
                 "intermedio","intermedio","intermedio","intermedio","intermedio","intermedio","intermedio",
                 "avanzado","avanzado","avanzado","avanzado","avanzado","avanzado","avanzado"];
  
  for (let i = 0; i < count; i++) {
    const d = diffs[i];
    const ex = topic.exercises[d][i % topic.exercises[d].length];
    exercises.push({
      id: nextId(),
      question: ex.q,
      options: ex.o,
      correctIndex: ex.a,
      explanation: ex.e,
      difficulty: d
    });
  }
  return exercises;
}

function makeModule(topic, idx) {
  const exs = makeExercises(topic, topic.slug);
  return {
    slug: topic.slug,
    illustrationSummary: topic.illSum || `Diagrama educativo sobre ${topic.title.toLowerCase()} mostrando conceptos clave y fórmulas.`,
    tip: topic.tip,
    studyGuide: `## ${topic.title}\n\n### Conceptos Fundamentales\n${topic.theory[0].lines.join('. ')}.\n\n### Fórmulas y Propiedades\n${topic.theory[1].lines.join('. ')}.\n\n### Teoremas y Aplicaciones\n${topic.theory[2].lines.join('. ')}.`,
    theory: topic.theory,
    illustrations: topic.svgs,
    exercises: exs
  };
}

function writeBatch(courseName, batchNum, modules) {
  const varName = `${courseName}Batch${batchNum}`;
  const filename = `${courseName}-batch-${batchNum}.ts`;
  
  let content = `import type { CourseModule } from "../../lib/course-content";\n\nexport const ${varName}: CourseModule[] = [\n`;
  
  for (const mod of modules) {
    content += `  ${JSON.stringify(mod, null, 2).replace(/\n/g, "\n  ")},\n`;
  }
  
  content += `];\n`;
  fs.writeFileSync(path.join(DIR, filename), content, "utf8");
  console.log(`  Wrote ${filename}: ${modules.length} modules`);
}

function writeFullCourse(courseName, allModules) {
  const filename = `${courseName}-full.ts`;
  let content = `import type { CourseModule } from "../../lib/course-content";\n\nexport const ${courseName}Modules: CourseModule[] = [\n`;
  for (const mod of allModules) {
    content += `  ${JSON.stringify(mod, null, 2).replace(/\n/g, "\n  ")},\n`;
  }
  content += `];\n`;
  fs.writeFileSync(path.join(DIR, filename), content, "utf8");
  console.log(`Wrote ${filename}: ${allModules.length} modules, ${(content.length/1024).toFixed(0)}KB`);
}

module.exports = { makeModule, writeBatch, writeFullCourse, nextId, DIR };
