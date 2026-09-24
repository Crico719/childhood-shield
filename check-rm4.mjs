import { readFileSync } from "fs";
const c = readFileSync("C:/Users/USUARIO/OneDrive/Documents/Default Project/src/data/rm-extra-exercises-4.ts", "utf8");
const m = [...c.matchAll(/"([a-z][a-z0-9-]+)":\s*\[/g)];
console.log("Keys:", m.map(x => x[1]));
