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
    const allLines = code.split("\n");
    let currentSlug = null;
    let inObj = false;
    let objLines = [];
    
    for (let i = 0; i < allLines.length; i++) {
      const line = allLines[i];
      
      const slugMatch = line.match(/^\s*"([a-z][a-z0-9-]+)":\s*\[/);
      if (slugMatch) {
        currentSlug = slugMatch[1];
        continue;
      }
      
      if (!currentSlug) continue;
      
      if (line.match(/^\s*\{/)) {
        inObj = true;
        objLines = [line];
        continue;
      }
      
      if (inObj) {
        objLines.push(line);
        if (line.match(/^\s*\}/)) {
          inObj = false;
          const objStr = objLines.join("\n");
          const idM = objStr.match(/id:\s*(\d+)/);
          const qM = objStr.match(/question:\s*"((?:[^"\\]|\\.)*)"/);
          const cM = objStr.match(/correctIndex:\s*(\d+)/);
          const eM = objStr.match(/explanation:\s*"((?:[^"\\]|\\.)*)"/);
          const dM = objStr.match(/difficulty:\s*"(\w+)"/);
          const lM = objStr.match(/level:\s*"(\w+)"/);
          const oM = objStr.match(/options:\s*\[([^\]]*)\]/);
          
          if (idM && qM && cM && eM && oM) {
            const opts = oM[1].match(/"((?:[^"\\]|\\.)*)"/g)?.map(o => o.slice(1, -1).replace(/\\"/g, '"')) || [];
            let diff = dM ? dM[1] : "basic";
            if (!dM && lM) {
              const lv = lM[1];
              if (lv === "basico") diff = "basic";
              else if (lv === "intermedio") diff = "intermediate";
              else if (lv === "avanzado") diff = "advanced";
            }
            if (!extraBySlug[currentSlug]) extraBySlug[currentSlug] = [];
            extraBySlug[currentSlug].push({
              id: parseInt(idM[1]),
              question: qM[1].replace(/\\"/g, '"'),
              options: opts,
              correctIndex: parseInt(cM[1]),
              explanation: eM[1].replace(/\\"/g, '"'),
              difficulty: diff,
            });
          }
          objLines = [];
        }
      }
    }
  } catch (e) { console.error(`Error: ${f}: ${e.message}`); }
}

for (const [slug, ex] of Object.entries(extraBySlug)) console.log(`${slug}: ${ex.length}`);

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
