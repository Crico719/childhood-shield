import { readFileSync } from "fs";
const src = readFileSync("C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts", "utf8");
const missing = ["estimacion-geometrica","sucesiones","analogias-y-distribuciones","series","sumatorias","cuatro-operaciones","metodos-practicos","planteo-de-ecuaciones","edades","cronometria","promedios","operadores-matematicos","operadores-binarios","conteo-de-figuras","areas-sombreadas-y-perimetros","analisis-combinatorio","probabilidades","principio-casos"];
for (const s of missing) {
  const has = src.includes(`slug: "${s}"`);
  console.log(s, has ? "EXISTS" : "MISSING");
}
