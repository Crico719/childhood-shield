import { readFileSync } from "fs";
const code = readFileSync("C:/Users/USUARIO/OneDrive/Documents/Default Project/src/data/geo-extra-exercises-5.ts", "utf8");
const slugs = [...code.matchAll(/"([a-z][a-z0-9-]+)":\s*\[/g)].map(m => m[1]);
console.log("geo-5 slugs:", slugs);
