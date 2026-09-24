import { readFileSync } from "fs";
const src = readFileSync("C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts", "utf8");
const slugs = ["estimacion-geometrica","sucesiones","analogias-y-distribuciones","series","sumatorias","cuatro-operaciones","metodos-practicos","planteo-de-ecuaciones","edades","cronometria","promedios","operadores-matematicos","operadores-binarios","conteo-de-figuras","areas-sombreadas-y-perimetros","analisis-combinatorio","probabilidades","principio-casos"];
for (const s of slugs) {
  const marker = `slug: "${s}"`;
  const idx = src.indexOf(marker);
  const exIdx = src.indexOf("exercises: [", idx);
  const nextSlug = src.indexOf("slug:", exIdx + 12);
  const block = src.slice(idx, nextSlug);
  const exIdx2 = block.indexOf("exercises: [");
  const rest = block.slice(exIdx2 + 12);
  let depth = 0, end = -1;
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === "[") depth++;
    if (rest[i] === "]") { depth--; if (depth === 0) { end = i; break; } }
  }
  const arrContent = rest.slice(0, end);
  const count = (arrContent.match(/\{\s*id:\s*\d+/g) || []).length;
  console.log(s, count, "exercises");
}
