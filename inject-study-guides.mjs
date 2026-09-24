import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const TARGET = join(process.env.USERPROFILE, "OneDrive", "Documents", "prepa-premium-uv", "src", "lib", "course-content.ts");
const DATA_DIR = join(process.env.USERPROFILE, "OneDrive", "Documents", "Default Project", "src", "data");

const files = [
  "geo-study-guides.ts",
  "geo-study-guides-2.ts",
  "geo-study-guides-3.ts",
  "geo-study-guides-4.ts",
  "geo-study-guides-5.ts",
  "geo-study-guides-6.ts",
  "geo-study-guides-7.ts",
  "geo-study-guides-8.ts",
  "geo-study-guides-9.ts",
  "rm-study-guides.ts",
  "rm-study-guides-2.ts",
  "historia-study-guides.ts",
];

const guides = {};
for (const f of files) {
  const code = readFileSync(join(DATA_DIR, f), "utf8");
  const match = code.match(/Record<string,\s*string>\s*=\s*\{([\s\S]*)\};/);
  if (!match) { console.error(`Could not parse ${f}`); continue; }
  const body = match[1];
  const re = /"([^"]+)"\s*:\s*`([\s\S]*?)`/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    guides[m[1]] = m[2];
  }
}

let src = readFileSync(TARGET, "utf8");
let injected = 0;
let skipped = 0;

for (const [slug, guide] of Object.entries(guides)) {
  const marker = `slug: "${slug}"`;
  if (!src.includes(marker)) { skipped++; continue; }

  const slugIdx = src.indexOf(marker);
  const chunkEnd = src.indexOf("},", slugIdx);
  if (chunkEnd === -1) { skipped++; continue; }
  const chunk = src.slice(slugIdx, chunkEnd);

  if (chunk.includes("studyGuide:")) {
    const sgStart = src.indexOf("studyGuide:", slugIdx);
    const afterSG = src.indexOf("`", sgStart + 12);
    const valEnd = src.indexOf("`", afterSG + 1);
    const escaped = guide.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
    src = src.slice(0, sgStart) + `studyGuide: \`${escaped}\`` + src.slice(valEnd + 1);
    injected++;
    continue;
  }

  const escaped = guide.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
  src = src.slice(0, chunkEnd) + `,\n  studyGuide: \`${escaped}\`` + src.slice(chunkEnd);
  injected++;
}

writeFileSync(TARGET, src, "utf8");
console.log(`Injected ${injected} study guides, skipped ${skipped}`);
