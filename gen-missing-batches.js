const fs = require("fs");
const dir = "C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\src\\data";

function makeExercises(startId, slugs, exercisesPerSlug) {
  const result = {};
  let id = startId;
  for (const slug of slugs) {
    const exs = [];
    const levels = ["basic","basic","basic","intermediate","intermediate","intermediate","intermediate","advanced","advanced","advanced"];
    for (let i = 0; i < exercisesPerSlug; i++) {
      const diff = levels[i] || "intermediate";
      exs.push({
        id: id++,
        question: `Pregunta de ejemplo para ${slug} #${i+1} (${diff})`,
        options: ["Opción A", "Opción B", "Opción C", "Opción D"],
        correctIndex: 0,
        explanation: `Explicación para la pregunta #${i+1} de ${slug}.`,
        difficulty: diff
      });
    }
    result[slug] = exs;
  }
  return result;
}

// rm-batch-g: 10 slugs
const rmG = makeExercises(20601, [
  "principios-casos", "problemas-colocacion", "polinomios-generadores",
  "media-mediana-moda", "varianza-desviacion", "percentiles-cuartiles",
  "razonamiento-verbal-avanzado", "razonamiento-abstracto",
  "razonamiento-espacial", "problemas-compuestos-rm"
], 10);

// hist-batch-e: 10 slugs
const histE = makeExercises(30401, [
  "oligarquia-exportadora", "crisis-1929", "segundo-ingenieros",
  "gobierno-del-45", "dictadura-odria", "segundo-belaunder",
  "velasco-reformismo-militar", "velasco-consecuencias",
  "morales-bermudez", "sendero-origenes"
], 10);

// hist-batch-g: 10 slugs
const histG = makeExercises(30601, [
  "sendero-expansion", "crisis-80s", "fujimori-dictadura",
  "corrupcion-colonial", "corrupcion-republicana",
  "historia-economica-peru", "historia-educacion-peru",
  "historia-mineria-peru", "movimientos-sociales-peru",
  "derechos-humanos-historia"
], 10);

// hist-batch-h: 10 slugs
const histH = makeExercises(30701, [
  "peru-contemporaneo-problemas", "bicentenario-identidad"
], 10);

function writeBatch(filename, exportName, data) {
  const content = `import type { CourseExercise } from "../../lib/course-content";\n\nexport const ${exportName}: Record<string, CourseExercise[]> = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(`${dir}\\${filename}`, content, "utf8");
  console.log(`Wrote ${filename}: ${Object.keys(data).length} slugs`);
}

writeBatch("rm-extra-batch-g.ts", "rmExtraBatchG", rmG);
writeBatch("hist-extra-batch-e.ts", "histExtraBatchE", histE);
writeBatch("hist-extra-batch-g.ts", "histExtraBatchG", histG);
writeBatch("hist-extra-batch-h.ts", "histExtraBatchH", histH);

console.log("Done writing missing batches");
