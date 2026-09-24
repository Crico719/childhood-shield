import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const TARGET = join(process.env.USERPROFILE, "OneDrive", "Documents", "prepa-premium-uv", "src", "lib", "course-content.ts");
const DATA_DIR = join(process.env.USERPROFILE, "OneDrive", "Documents", "Default Project", "src", "data");

const targetSlugs = [
  "recta-en-coordenadas", "circunferencia-coordenadas", "distancia-punto-recta",
  "ley-de-senos", "ley-de-cosenos", "area-con-trigonometria",
  "aplicaciones-trigonometricas", "vectores-en-el-plano", "operaciones-vectores",
  "producto-escalar", "rectas-vectorial", "elipse-analitica",
  "hiperbola-analitica", "parabola-analitica", "locus-geometrico",
  "tangentes-circunferencia", "problemas-compuestos-geometrica", "fractales-introduccion",
  "guerras-civiles-xix", "guerra-pacifico-consecuencias"
];

const files = [
  "geo-extra-exercises-4.ts", "geo-extra-exercises-5.ts",
  "geo-extra-exercises-6.ts", "geo-extra-exercises-7.ts",
  "historia-extra-exercises-2.ts",
];

const extraBySlug = {};

for (const f of files) {
  try {
    const code = readFileSync(join(DATA_DIR, f), "utf8");
    let currentSlug = null;
    for (const line of code.split("\n")) {
      const slugMatch = line.match(/^\s*"([a-z][a-z0-9-]+)":\s*\[/);
      if (slugMatch) { currentSlug = slugMatch[1]; continue; }
      
      const idMatch = line.match(/\{\s*id:\s*(\d+)/);
      if (idMatch && currentSlug && targetSlugs.includes(currentSlug)) {
        const qMatch = line.match(/question:\s*"((?:[^"\\]|\\.)*)"/);
        const cMatch = line.match(/correctIndex:\s*(\d+)/);
        const eMatch = line.match(/explanation:\s*"((?:[^"\\]|\\.)*)"/);
        const dMatch = line.match(/difficulty:\s*"(\w+)"/);
        const oMatch = line.match(/options:\s*\[((?:[^\]]*)*)\]/);
        if (qMatch && cMatch && eMatch && dMatch && oMatch) {
          const opts = oMatch[1].match(/"((?:[^"\\]|\\.)*)"/g)?.map(o => o.slice(1, -1).replace(/\\"/g, '"')) || [];
          if (!extraBySlug[currentSlug]) extraBySlug[currentSlug] = [];
          extraBySlug[currentSlug].push({
            id: parseInt(idMatch[1]), question: qMatch[1].replace(/\\"/g, '"'),
            options: opts, correctIndex: parseInt(cMatch[1]),
            explanation: eMatch[1].replace(/\\"/g, '"'), difficulty: dMatch[1],
          });
        }
      }
      if (line.trim() === "],") currentSlug = null;
    }
  } catch (e) { console.error(`Error: ${f}: ${e.message}`); }
}

let src = readFileSync(TARGET, "utf8");
const lines = src.split("\n");
let injected = 0;

for (const slug of targetSlugs) {
  const exercises = extraBySlug[slug];
  if (!exercises || exercises.length === 0) { console.log(`No extra for ${slug}`); continue; }
  
  // Find slug line
  let slugLine = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`slug: "${slug}"`)) { slugLine = i; break; }
  }
  if (slugLine === -1) { console.log(`Slug not found: ${slug}`); continue; }
  
  // Find exercises: [ line
  let exLine = -1;
  for (let i = slugLine; i < Math.min(slugLine + 500, lines.length); i++) {
    if (lines[i].match(/^\s*exercises:\s*\[/)) { exLine = i; break; }
  }
  if (exLine === -1) { console.log(`No exercises for ${slug}`); continue; }
  
  // Find closing ]
  let depth = 0, closeLine = -1;
  for (let i = exLine; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === "[") depth++;
      if (ch === "]") { depth--; if (depth === 0) { closeLine = i; break; } }
    }
    if (closeLine !== -1) break;
  }
  if (closeLine === -1) { console.log(`No close for ${slug}`); continue; }
  
  const extraLines = exercises.map(ex => {
    const opts = ex.options.map(o => `"${o.replace(/"/g, '\\"')}"`).join(", ");
    return `    { id: ${ex.id}, question: "${ex.question.replace(/"/g, '\\"')}", options: [${opts}], correctIndex: ${ex.correctIndex}, explanation: "${ex.explanation.replace(/"/g, '\\"')}", difficulty: "${ex.difficulty}" }`;
  });
  
  lines.splice(closeLine, 0, `    ,${extraLines.join(",\n")}`);
  injected++;
}

src = lines.join("\n");
writeFileSync(TARGET, src, "utf8");
console.log(`Injected into ${injected} modules`);
