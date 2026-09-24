import { readFileSync } from "fs";
const code = readFileSync("C:/Users/USUARIO/OneDrive/Documents/Default Project/src/data/geo-extra-exercises-4.ts", "utf8");
let currentSlug = null;
let inExercise = false;
let count = {};
for (const line of code.split("\n")) {
  const slugMatch = line.match(/^\s*"([a-z][a-z0-9-]+)":\s*\[/);
  if (slugMatch) { currentSlug = slugMatch[1]; count[currentSlug] = 0; inExercise = false; continue; }
  if (line.match(/^\s*\]\s*,?\s*$/) && currentSlug) { currentSlug = null; inExercise = false; continue; }
  if (line.match(/\{\s*id:\s*\d+/)) { inExercise = true; if (currentSlug) count[currentSlug] = (count[currentSlug]||0) + 1; }
}
for (const [s, c] of Object.entries(count)) console.log(s, c);
