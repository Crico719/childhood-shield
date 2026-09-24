import { readFileSync } from "fs";
import { join } from "path";

const DATA_DIR = join(process.env.USERPROFILE, "OneDrive", "Documents", "Default Project", "src", "data");

const files = [
  "geo-extra-exercises.ts",
  "geo-extra-exercises-2.ts",
  "geo-extra-exercises-3.ts",
  "geo-extra-exercises-4.ts",
  "geo-extra-exercises-5.ts",
  "geo-extra-exercises-6.ts",
  "geo-extra-exercises-7.ts",
  "geo-extra-exercises-8.ts",
  "rm-extra-exercises.ts",
  "rm-extra-exercises-2.ts",
  "rm-extra-exercises-3.ts",
  "rm-extra-exercises-4.ts",
  "historia-extra-exercises.ts",
  "historia-extra-exercises-2.ts",
  "historia-extra-exercises-3.ts",
];

const covered = new Set();
for (const f of files) {
  try {
    const code = readFileSync(join(DATA_DIR, f), "utf8");
    const matches = [...code.matchAll(/"([a-z][a-z0-9-]+)":\s*\[/g)];
    for (const m of matches) covered.add(m[1]);
  } catch(e) {}
}

const all = readFileSync("C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts", "utf8");
const allSlugs = [...all.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);

const missing = allSlugs.filter(s => !covered.has(s));
console.log("Covered:", covered.size);
console.log("Missing:", missing.length);
console.log(JSON.stringify(missing));
