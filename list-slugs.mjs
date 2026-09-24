import { readFileSync } from "fs";
const src = readFileSync("C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts", "utf8");
const slugs = [...src.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);
console.log("Total modules:", slugs.length);
console.log(JSON.stringify(slugs));
