import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const TARGET = join(process.env.USERPROFILE, "OneDrive", "Documents", "prepa-premium-uv", "src", "lib", "course-content.ts");
const DATA_DIR = join(process.env.USERPROFILE, "OneDrive", "Documents", "Default Project", "src", "data");

const targetSlugs = [
  "recta-en-coordenadas", "circunferencia-coordenadas", "distancia-punto-recta",
  "ley-de-senos", "ley-de-cosenos", "area-con-trigonometria",
  "problemas-compuestos-geometrica", "fractales-introduccion", "guerras-civiles-xix", "locus-geometrico"
];

const files = ["geo-extra-exercises-4.ts","geo-extra-exercises-5.ts","geo-extra-exercises-7.ts","historia-extra-exercises-2.ts"];

const extraBySlug = {};

for (const f of files) {
  try {
    const code = readFileSync(join(DATA_DIR, f), "utf8");
    let currentSlug = null;
    let inExercise = false;
    let currentEx = {};
    
    for (const line of code.split("\n")) {
      const slugMatch = line.match(/^\s*"([a-z][a-z0-9-]+)":\s*\[/);
      if (slugMatch) { 
        currentSlug = slugMatch[1]; 
        continue; 
      }
      
      if (!currentSlug || !targetSlugs.includes(currentSlug)) continue;
      
      if (line.match(/^\s*\}\s*,?\s*$/) || line.match(/^\s*\]\s*,?\s*$/)) {
        if (inExercise && currentEx.id) {
          if (!extraBySlug[currentSlug]) extraBySlug[currentSlug] = [];
          extraBySlug[currentSlug].push(currentEx);
        }
        inExercise = false;
        currentEx = {};
        continue;
      }
      
      if (line.match(/\{\s*id:\s*\d+/)) {
        if (inExercise && currentEx.id) {
          if (!extraBySlug[currentSlug]) extraBySlug[currentSlug] = [];
          extraBySlug[currentSlug].push(currentEx);
        }
        const idM = line.match(/id:\s*(\d+)/);
        currentEx = { id: idM ? parseInt(idM[1]) : 0 };
        inExercise = true;
      }
      
      if (inExercise) {
        const qM = line.match(/question:\s*"((?:[^"\\]|\\.)*)"/);
        if (qM) currentEx.question = qM[1].replace(/\\"/g, '"');
        
        const oM = line.match(/options:\s*\[([^\]]*)\]/);
        if (oM) {
          currentEx.options = oM[1].match(/"((?:[^"\\]|\\.)*)"/g)?.map(o => o.slice(1, -1).replace(/\\"/g, '"')) || [];
        }
        
        const cM = line.match(/correctIndex:\s*(\d+)/);
        if (cM) currentEx.correctIndex = parseInt(cM[1]);
        
        const eM = line.match(/explanation:\s*"((?:[^"\\]|\\.)*)"/);
        if (eM) currentEx.explanation = eM[1].replace(/\\"/g, '"');
        
        const dM = line.match(/difficulty:\s*"(\w+)"/);
        const lM = line.match(/level:\s*"(\w+)"/);
        if (dM) currentEx.difficulty = dM[1];
        else if (lM) {
          const level = lM[1];
          if (level === "basico") currentEx.difficulty = "basic";
          else if (level === "intermedio") currentEx.difficulty = "intermediate";
          else if (level === "avanzado") currentEx.difficulty = "advanced";
          else currentEx.difficulty = level;
        }
      }
    }
  } catch (e) { console.error(`Error: ${f}: ${e.message}`); }
}

for (const [slug, exercises] of Object.entries(extraBySlug)) {
  console.log(`${slug}: ${exercises.length} exercises`);
}

let src = readFileSync(TARGET, "utf8");
const lines = src.split("\n");
let injected = 0;

for (const slug of targetSlugs) {
  const exercises = extraBySlug[slug];
  if (!exercises || exercises.length === 0) continue;
  
  let slugLine = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`slug: "${slug}"`)) { slugLine = i; break; }
  }
  if (slugLine === -1) continue;
  
  let exLine = -1;
  for (let i = slugLine; i < Math.min(slugLine + 500, lines.length); i++) {
    if (lines[i].match(/^\s*exercises:\s*\[/)) { exLine = i; break; }
  }
  if (exLine === -1) continue;
  
  let depth = 0, closeLine = -1;
  for (let i = exLine; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === "[") depth++;
      if (ch === "]") { depth--; if (depth === 0) { closeLine = i; break; } }
    }
    if (closeLine !== -1) break;
  }
  if (closeLine === -1) continue;
  
  const extraLines = exercises.map(ex => {
    const opts = (ex.options || []).map(o => `"${o.replace(/"/g, '\\"')}"`).join(", ");
    return `    { id: ${ex.id}, question: "${(ex.question || "").replace(/"/g, '\\"')}", options: [${opts}], correctIndex: ${ex.correctIndex || 0}, explanation: "${(ex.explanation || "").replace(/"/g, '\\"')}", difficulty: "${ex.difficulty || "basic"}" }`;
  });
  
  lines.splice(closeLine, 0, `    ,${extraLines.join(",\n")}`);
  injected++;
}

src = lines.join("\n");
writeFileSync(TARGET, src, "utf8");
console.log(`\nInjected into ${injected} modules`);
