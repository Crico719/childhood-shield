import { readFileSync, writeFileSync } from "fs";
const TARGET = "C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts";
const src = readFileSync(TARGET, "utf8");
const slug = "guerras-civiles-xix";
const slugIdx = src.indexOf(`slug: "${slug}"`);
const nextSlugIdx = src.indexOf('slug:', slugIdx + 10);
const exSearchStart = src.indexOf("exercises:", slugIdx);
const openBracket = src.indexOf("[", exSearchStart + 10);

let depth = 0, closeBracket = -1;
for (let i = openBracket; i < src.length; i++) {
  if (src[i] === "[") depth++;
  if (src[i] === "]") { depth--; if (depth === 0) { closeBracket = i; break; } }
}

const newExercises = [
  { id: 3000, q: "Las guerras civiles en la república del siglo XIX fueron causadas principalmente por:", o: ["Disputas entre caudillos por el control del poder central", "Invasiones extranjeras", "Problemas económicos con Inglaterra", "La lucha contra los remanentes coloniales"], c: 0, e: "Las guerras civiles fueron producto de la lucha entre caudillos regionales por el poder central.", d: "basic" },
  { id: 3001, q: "¿Qué caudillo fue vencedor en la guerra civil entre Gamarra y La Mar?", o: ["Agustín Gamarra", "José de La Mar", "Andrés de Santa Cruz", "Luis José de Orbegoso"], c: 0, e: "Gamarra derrotó a La Mar en la batalla de Portete de Tarqui en 1829.", d: "basic" },
  { id: 3002, q: "La Confederación Perú-Boliviana fue liderada por:", o: ["Andrés de Santa Cruz", "Agustín Gamarra", "Ramón Castilla", "Felipe Santiago Salaverry"], c: 0, e: "Santa Cruz organizó la Confederación Perú-Boliviana en 1836-1839.", d: "basic" },
  { id: 3003, q: "La batalla de Yungay (1839) significó:", o: ["El fin de la Confederación Perú-Boliviana", "La independencia del Perú", "La unión con Bolivia", "El inicio de la república"], c: 0, e: "En Yungay, el ejército chileno-restaurador derrotó a las fuerzas de Santa Cruz.", d: "basic" },
  { id: 3004, q: "Los territorialistas buscaban:", o: ["Conservar el territorio peruano intacto", "Expandir el territorio", "Reducir el territorio", "Crear nuevas provincias"], c: 0, e: "Los territorialistas se oponían a la Confederación para preservar la integridad territorial del Perú.", d: "intermediate" },
  { id: 3005, q: "El directorio de Santa Cruz organizó la Confederación con:", o: ["Tres estados: Norte, Perú y Sud", "Dos estados: Perú y Bolivia", "Un solo gobierno central", "Cinco repúblicas federales"], c: 0, e: "La Confederación tenía tres estados: Norte (Arequipa), Perú (Cuzco) y Sud (Bolivia).", d: "intermediate" },
  { id: 3006, q: "La guerra civil entre Orbegoso y Salaverry en 1835 resultó en:", o: ["La victoria de Santa Cruz sobre ambos", "La victoria de Orbegoso", "La victoria de Salaverry", "Un empate"], c: 0, e: "Santa Cruz aprovechó el conflicto para imponer su autoridad sobre ambos bandos.", d: "intermediate" },
  { id: 3007, q: "Eligré, precursor de las guerras civiles, se levantó en:", o: ["1823", "1830", "1840", "1850"], c: 0, e: "Elíguer se levantó en armas en 1823 contra el gobierno, siendo uno de los primeros levantamientos.", d: "intermediate" },
  { id: 3008, q: "Las consecuencias económicas de las guerras civiles incluyeron:", o: ["Destrucción de infraestructura y atraso económico", "Crecimiento económico acelerado", "Modernización de la industria", "Aumento de las exportaciones"], c: 0, e: "Las continuas guerras destruyeron infraestructura, paralizaron la economía y fomentaron la pobreza.", d: "intermediate" },
  { id: 3009, q: "¿Cuántas guerras civiles importantes hubo entre 1822 y 1845?", o: ["Más de 10", "Menos de 3", "Exactamente 5", "Ninguna"], c: 0, e: "Hubo más de 10 guerras civiles importantes en el periodo de inestabilidad republicana.", d: "intermediate" },
  { id: 3010, q: "El rol de los militares en las guerras civiles del siglo XIX fue determinante porque:", o: ["Eran los principales caudillos y tenían el control de las armas", "No participaron en las guerras", "Solo eran asesores", "Eran diplomáticos"], c: 0, e: "Los militares acumulaban poder regional y usaban las armas para disputar el poder central.", d: "advanced" },
  { id: 3011, q: "La fragmentación regional del Perú en el siglo XIX se explica por:", o: ["La herencia colonial de centralismo vs. regionalismo", "La influencia de los países vecinos", "La falta de recursos naturales", "La ausencia de una burguesía"], c: 0, e: "La estructura colonial creó regiones con identidades y economías propias que rivalizaban entre sí.", d: "advanced" },
  { id: 3012, q: "Las guerras civiles del siglo XIX afectaron gravemente al Perú porque:", o: ["Impidieron la consolidación del Estado-nación", "Fortalecieron las instituciones", "Aumentaron la educación", "Mejoraron la economía"], c: 0, e: "La inestabilidad crónica impidió construir un Estado fuerte, educar a la población y desarrollar la economía.", d: "advanced" },
  { id: 3013, q: "El equilibrio de poder entre lima y las provincias fue un factor clave de las guerras civiles porque:", o: ["Las provincias sentían explotación por la capital", "Lima no tenía poder", "Las provincias eran más ricas", "No había provincias"], c: 0, e: "Las provincias se sentían subordinadas a Lima y buscaban mayor autonomía y representación política.", d: "advanced" },
];

const extraLines = newExercises.map(ex => {
  const opts = ex.o.map(o => `"${o.replace(/"/g, '\\"')}"`).join(", ");
  return `    { id: ${ex.id}, question: "${ex.q.replace(/"/g, '\\"')}", options: [${opts}], correctIndex: ${ex.c}, explanation: "${ex.e.replace(/"/g, '\\"')}", difficulty: "${ex.d}" }`;
}).join(",\n");

const result = src.slice(0, closeBracket) + ",\n" + extraLines + "\n  ]" + src.slice(closeBracket + 1);
writeFileSync(TARGET, result, "utf8");
console.log("Injected 14 exercises for guerras-civiles-xix");
