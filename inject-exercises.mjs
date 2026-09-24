import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const TARGET = join(process.env.USERPROFILE, "OneDrive", "Documents", "prepa-premium-uv", "src", "lib", "course-content.ts");
const DATA_DIR = join(process.env.USERPROFILE, "OneDrive", "Documents", "Default Project", "src", "data");

// Parse extra exercises files using a simpler line-based approach
const files = [
  "geo-extra-exercises.ts", "geo-extra-exercises-2.ts", "geo-extra-exercises-3.ts",
  "geo-extra-exercises-4.ts", "geo-extra-exercises-5.ts", "geo-extra-exercises-6.ts",
  "geo-extra-exercises-7.ts", "geo-extra-exercises-8.ts",
  "rm-extra-exercises.ts", "rm-extra-exercises-2.ts", "rm-extra-exercises-3.ts",
  "rm-extra-exercises-4.ts",
  "historia-extra-exercises.ts", "historia-extra-exercises-2.ts", "historia-extra-exercises-3.ts",
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
      if (idMatch && currentSlug) {
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
  } catch (e) { console.error(`Error in ${f}: ${e.message}`); }
}

console.log(`Parsed ${Object.keys(extraBySlug).length} slugs, total exercises: ${Object.values(extraBySlug).reduce((s, a) => s + a.length, 0)}`);

let src = readFileSync(TARGET, "utf8");
let injected = 0;

// Split into module blocks by finding slug markers
const slugPositions = [];
const re = /slug: "([a-z][a-z0-9-]+)"/g;
let m;
while ((m = re.exec(src)) !== null) {
  slugPositions.push({ slug: m[1], idx: m.index });
}

for (let i = 0; i < slugPositions.length; i++) {
  const { slug, idx } = slugPositions[i];
  if (!extraBySlug[slug] || extraBySlug[slug].length === 0) continue;
  
  // Find exercises: [ within this module's block (up to next slug or end)
  const blockEnd = i + 1 < slugPositions.length ? slugPositions[i + 1].idx : src.length;
  const block = src.slice(idx, blockEnd);
  const exIdx = block.indexOf("exercises: [");
  if (exIdx === -1) continue;
  
  const openBracket = idx + exIdx + "exercises: ".length;
  let depth = 0, closeBracket = -1;
  for (let j = openBracket; j < blockEnd; j++) {
    if (src[j] === "[") depth++;
    if (src[j] === "]") { depth--; if (depth === 0) { closeBracket = j; break; } }
  }
  if (closeBracket === -1) continue;
  
  const exercises = extraBySlug[slug];
  const extraLines = exercises.map(ex => {
    const opts = ex.options.map(o => `"${o.replace(/"/g, '\\"')}"`).join(", ");
    return `    { id: ${ex.id}, question: "${ex.question.replace(/"/g, '\\"')}", options: [${opts}], correctIndex: ${ex.correctIndex}, explanation: "${ex.explanation.replace(/"/g, '\\"')}", difficulty: "${ex.difficulty}" }`;
  }).join(",\n");
  
  const insert = `,\n${extraLines}`;
  src = src.slice(0, closeBracket) + insert + "\n  ]" + src.slice(closeBracket + 1);
  injected++;
}

writeFileSync(TARGET, src, "utf8");
console.log(`Injected into ${injected} modules`);
