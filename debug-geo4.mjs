import { readFileSync } from "fs";
const code = readFileSync("C:/Users/USUARIO/OneDrive/Documents/Default Project/src/data/geo-extra-exercises-4.ts", "utf8");
// Find the block for recta-en-coordenadas
const idx = code.indexOf('"recta-en-coordenadas"');
const block = code.slice(idx, idx + 500);
console.log(block);
