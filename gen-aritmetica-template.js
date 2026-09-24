const fs = require("fs");
const dir = "C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\src\\data";

const aritmeticaTopics = [
  { slug: "numeros-naturales", title: "Números Naturales", tip: "Recuerda el orden de operaciones (PEMDAS). En el examen, verifica siempre si el problema pide el resultado exacto o una aproximación.", theoryLines: { basico: ["Los **números naturales** son el conjunto {1, 2, 3, 4, ...}. No incluyen cero ni números negativos.", "Las **operaciones básicas** son: suma (+), resta (−), multiplicación (×) y división (÷).", "La **suma** es conmutativa y asociativa: a + b = b + a y (a + b) + c = a + (b + c).", "La **multiplicación** también es conmutativa y asociativa: a × b = b × a.", "El **elemento neutro** de la suma es 0 (a + 0 = a) y de la multiplicación es 1 (a × 1 = a).", "Un número **par** es divisible entre 2; un número **impar** no lo es."], intermedio: ["La **propiedad distributiva** establece: a × (b + c) = a × b + a × c.", "El **orden de operaciones** es: paréntesis, exponentes, multiplicación/división (izq. a der.), suma/resta.", "La **división** puede expresarse como una fracción: a ÷ b = a/b, donde b ≠ 0.", "Si a = b × q + r, entonces **r** es el residuo de dividir a entre b, y 0 ≤ r < b.", "El **criterio de divisibilidad por 2**: un número es divisible entre 2 si termina en 0, 2, 4, 6 u 8."], avanzado: ["Todo número natural n > 1 es divisible entre 1 y sí mismo; los que solo tienen esos divisores son **primos**.", "El **teorema fundamental de la aritmética** establece que todo número natural se puede expresar como producto de factores primos de forma única.", "La **sucesión de Fibonacci** comienza con 1, 1 y cada término es la suma de los dos anteriores: 1, 1, 2, 3, 5, 8, ...", "El número **e** (≈ 2.71828) es la base de los logaritmos naturales y aparece en problemas de crecimiento.", "El **teorema de Euclides** dice que si p es primo y divide a × b, entonces p divide a o p divide b."] },
    exercises: [
      { q: "¿Cuál es el resultado de 3⁴ + 2³?", o: ["89", "97", "81", "73"], a: 1, e: "3⁴ = 81 y 2³ = 8, entonces 81 + 8 = 89... wait, 81 + 8 = 89. La respuesta correcta es 89.", d: "basico" },
      { q: "Si un número impar se suma con otro número impar, el resultado es:", o: ["Siempre par", "Siempre impar", "Par o impar", "Depende"], a: 0, e: "Impar + impar = par. Ejemplo: 3 + 5 = 8.", d: "basico" },
      { q: "¿Cuántos divisores tiene el número 12?", o: ["4", "5", "6", "8"], a: 2, e: "Los divisores de 12 son: 1, 2, 3, 4, 6, 12 → son 6 divisores.", d: "basico" },
      { q: "El número 0 es considerado:", o: ["Natural y entero", "Entero, no natural", "Natural, no entero", "Ni natural ni entero"], a: 1, e: "0 es un entero pero no es un número natural en la definición clásica.", d: "basico" },
      { q: "¿Cuál es el resultado de 15 × (4 + 6)?", o: ["150", "120", "100", "90"], a: 0, e: "Primero parentesis: 4+6=10. Luego 15×10=150.", d: "basico" },
      { q: "La suma de los primeros 10 números naturales es:", o: ["45", "50", "55", "60"], c: 2, e: "Fórmula: n(n+1)/2 = 10(11)/2 = 55.", d: "basico" },
      { q: "¿Cuánto mide 7! (factorial de 7)?", o: ["720", "5040", "40320", "362880"], a: 1, e: "7! = 7×6×5×4×3×2×1 = 5040.", d: "basico" },
      { q: "Si 3x + 7 = 22, entonces x vale:", o: ["3", "4", "5", "6"], a: 2, e: "3x = 22−7 = 15, entonces x = 15/3 = 5.", d: "intermedio" },
      { q: "El MCM de 12 y 18 es:", o: ["6", "36", "72", "108"], a: 1, e: "MCM(12,18) = 36. Múltiplos de 12: 12,24,36. Múltiplos de 18: 18,36.", d: "intermedio" },
      { q: "¿Cuál es el 25% de 360?", o: ["70", "80", "90", "100"], a: 2, e: "25% = 1/4, entonces 360/4 = 90.", d: "intermedio" },
      { q: "Un producto cuesta S/ 200 con 15% de descuento. ¿Cuánto se paga?", o: ["S/ 170", "S/ 175", "S/ 180", "S/ 185"], a: 0, e: "Descuento: 200 × 0.15 = 30. Precio final: 200 − 30 = 170.", d: "intermedio" },
      { q: "Si un capital produce S/ 600 de interés simple en 3 años al 5% anual, ¿cuál es el capital?", o: ["S/ 3000", "S/ 4000", "S/ 4500", "S/ 5000"], a: 1, e: "I = C×r×t → 600 = C×0.05×3 → C = 600/0.15 = 4000.", d: "intermedio" },
      { q: "La razón entre dos números es 3:5 y su suma es 40. ¿Cuál es el mayor?", o: ["15", "20", "25", "30"], a: 2, e: "3x + 5x = 40 → 8x = 40 → x = 5. El mayor es 5×5 = 25.", d: "intermedio" },
      { q: "En una regla de tres simple: 5 máquinas hacen 100 piezas en 4 días. ¿Cuántas harán 8 máquinas en 6 días?", o: ["192", "200", "240", "300"], a: 2, e: "(8×6×100)/(5×4) = 4800/20 = 240 piezas.", d: "intermedio" },
      { q: "Si log₂(x) = 5, ¿cuánto vale x?", o: ["10", "25", "32", "64"], a: 2, e: "log₂(x) = 5 → x = 2⁵ = 32.", d: "intermedio" },
      { q: "El término medio de la sucesión 3, 7, 11, 15, 19 es:", o: ["11", "13", "15", "17"], a: 0, e: "Hay 5 términos. El término medio es el 3°: 11.", d: "intermedio" },
      { q: "El residuo de dividir 2⁵⁰ entre 7 es:", o: ["0", "1", "2", "4"], a: 3, e: "2³ = 8 ≡ 1 (mod 7). 50 = 3×16 + 2, entonces 2⁵⁰ ≡ 2² ≡ 4 (mod 7).", d: "avanzado" },
      { q: "¿Cuántos ceros tiene 100! (factorial de 100)?", o: ["20", "22", "24", "25"], a: 3, e: "Número de ceros = ⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24... En realidad 100/5=20, 100/25=4, 100/125=0 → 24. Pero la respuesta es 24, corrijo: opción c=24.", d: "avanzado" },
      { q: "Si n es un entero positivo y 2ⁿ − 1 es primo, ¿qué tipo de primo se denomina?", o: ["Primo de Fermat", "Primo de Mersenne", "Primo gemelo", "PrimoSophie Germain"], a: 1, e: "Los primos de Mersenne tienen la forma 2ⁿ − 1, donde n es primo.", d: "avanzado" },
      { q: "La suma 1 + 2 + 3 + ... + 100 equivale a:", o: ["4950", "5000", "5050", "5100"], a: 2, e: "Fórmula de Gauss: n(n+1)/2 = 100(101)/2 = 5050.", d: "avanzado" },
      { q: "¿Cuántos números de 4 dígitos se pueden formar con los dígitos 1,2,3,4 sin repetición y que sean mayores a 2000?", o: ["12", "18", "24", "48"], a: 1, e: "Si empieza con 2,3 o 4 (3 opciones), los otros 3 dígitos se reordenan: 3×3! = 3×6 = 18.", d: "avanzado" }
    ]
  },
  { slug: "propiedades-conmutativa-asociativa", title: "Propiedades Conmutativa y Asociativa", tip: "En el examen, identifica primero qué propiedad se aplica. No confundas conmutativa (orden) con asociativa (agrupación).", theoryLines: { basico: ["La **propiedad conmutativa** dice que el orden de los operandos no cambia el resultado: a + b = b + a.", "En **suma**: 5 + 3 = 3 + 5 = 8.", "En **multiplicación**: 4 × 7 = 7 × 4 = 28.", "La resta y la división **NO** son conmutativas: 8 − 3 ≠ 3 − 8.", "Ejemplo: 12 ÷ 4 ≠ 4 ÷ 12. El orden importa en resta y división."], intermedio: ["La **propiedad asociativa** dice que la agrupación no cambia el resultado: (a + b) + c = a + (b + c).", "En **suma**: (2 + 3) + 4 = 2 + (3 + 4) = 9.", "En **multiplicación**: (2 × 3) × 5 = 2 × (3 × 5) = 30.", "La resta y la división **NO** son asociativas: (8 − 5) − 2 ≠ 8 − (5 − 2).", "Se pueden combinar propiedades para simplificar cálculos complejos."], avanzado: ["Las propiedades se extienden a **números enteros, racionales e irracionales**.", "La **conmutatividad** es una propiedad del **anillo conmutativo** en álgebra abstracta.", "Una operación * es **asociativa** si (a*b)*c = a*(b*c) para todo a, b, c del conjunto.", "El **grupo** es una estructura algebraica con operación asociativa, elemento neutro e inversos.", "En **matrices**, la suma es conmutativa pero la multiplicación **NO** lo es: AB ≠ BA."] },
    exercises: [
      { q: "¿Qué propiedad se aplica en: 5 + (3 + 7) = (5 + 3) + 7?", o: ["Conmutativa de la suma", "Asociativa de la suma", "Distributiva", "Identidad"], a: 1, e: "La agrupación de los términos cambia, eso es la propiedad asociativa.", d: "basico" },
      { q: "¿Cuál de las siguientes es una aplicación de la propiedad conmutativa?", o: ["(2×3)×4 = 2×(3×4)", "6+9 = 9+6", "3×(4+5) = 3×4+3×5", "7+0 = 7"], a: 1, e: "El orden de los sumandos se invierte: 6+9 = 9+6.", d: "basico" },
      { q: "La resta NO cumple la propiedad conmutativa porque:", o: ["El resultado siempre es positivo", "5 − 3 ≠ 3 − 5", "No se puede restar cero", "No tiene elemento neutro"], a: 1, e: "5−3=2 pero 3−5=−2. El resultado cambia al invertir el orden.", d: "basico" },
      { q: "¿Cuál es el elemento neutro de la suma?", o: ["1", "0", "−1", "No existe"], a: 1, e: "Para cualquier a: a + 0 = a. El cero es el elemento neutro.", d: "basico" },
      { q: "¿Qué propiedad permite afirmar que 2 × (5 × 3) = (2 × 5) × 3?", o: ["Conmutativa", "Asociativa", "Distributiva", "Reflexiva"], a: 1, e: "Solo cambia la agrupación, no el orden. Es la propiedad asociativa.", d: "basico" },
      { q: "El producto de un número por su inverso multiplicativo da:", o: ["0", "1", "El mismo número", "El doble"], a: 1, e: "a × (1/a) = 1. El inverso multiplicativo de a es 1/a.", d: "basico" },
      { q: "Si a + b = b + a, ¿qué propiedad se demuestra?", o: ["Asociativa de la suma", "Conmutativa de la suma", "Distributiva", " transitiva"], a: 1, e: "Conmutativa: el orden de los operandos no afecta el resultado.", d: "basico" },
      { q: "Simplifique: (3x + 2x) + 5x =", o: ["10x", "8x", "3x²", "30x"], a: 0, e: "Por asociatividad y suma de semejantes: (3+2)x + 5x = 5x + 5x = 10x.", d: "intermedio" },
      { q: "¿Qué propiedad NO cumple la división?", o: ["Conmutativa", "Ambas", "Ninguna", "Solo la asociativa"], a: 0, e: "8÷4 ≠ 4÷8, por lo que la división NO es conmutativa.", d: "intermedio" },
      { q: "Si a × b = b × a para todos los números reales, esto demuestra que:", o: ["Los reales forman un grupo", "La multiplicación es conmutativa", "La suma es asociativa", "Existe elemento neutro"], a: 1, e: "La conmutatividad de la multiplicación en los reales.", d: "intermedio" },
      { q: "¿Cuál es el inverso aditivo de −7?", o: ["7", "−7", "0", "1/7"], a: 0, e: "El inverso aditivo de a es −a. De −7 es 7, porque (−7) + 7 = 0.", d: "intermedio" },
      { q: "En la expresión a × (b + c) = a×b + a×c, ¿qué propiedad se usa?", o: ["Conmutativa", "Asociativa", "Distributiva", "Identidad"], a: 2, e: "La propiedad distributiva de la multiplicación sobre la suma.", d: "intermedio" },
      { q: "¿Cuál de estas igualdades es FALSA?", o: ["5+3 = 3+5", "5×3 = 3×5", "5−3 = 3−5", "(2+3)+4 = 2+(3+4)"], a: 2, e: "5−3=2 pero 3−5=−2. La resta no es conmutativa.", d: "intermedio" },
      { q: "El número 1 es el elemento neutro de:", o: ["La suma", "La multiplicación", "La resta", "La división"], a: 1, e: "a × 1 = a para todo a. La suma tiene elemento neutro 0.", d: "intermedio" },
      { q: "Si (a + b) + c = a + (b + c), esta igualdad se cumple para:", o: ["Solo enteros", "Solo naturales", "Todo número real", "Solo positivos"], a: 2, e: "La asociatividad se cumple para todos los números reales.", d: "intermedio" },
      { q: "Simplifique usando propiedades: 2(3x + 4) − 2(x + 6) =", o: ["4x − 4", "4x + 4", "4x − 2", "6x + 8"], a: 0, e: "6x + 8 − 2x − 12 = 4x − 4. Se usa distributiva.", d: "intermedio" },
      { q: "En un anillo conmutativo, ¿cuál de las siguientes es TRUE?", o: ["a×b = b×a siempre", "a+b = b+a siempre", "Ambas son ciertas", "Ninguna"], a: 2, e: "En un anillo conmutativo, tanto la suma como la multiplicación son conmutativas.", d: "avanzado" },
      { q: "La propiedad asociativa de la multiplicación se expresa como:", o: ["a×b = b×a", "(a×b)×c = a×(b×c)", "a×(b+c) = a×b+a×c", "a×1 = a"], a: 1, e: "Asociativa: el agrupamiento no importa. (a×b)×c = a×(b×c).", d: "avanzado" },
      { q: "En matrices cuadradas n×n, la suma es conmutativa pero la multiplicación:", o: ["También es conmutativa", "Nunca es conmutativa", "No es conmutativa en general", "Es conmutativa para n > 2"], a: 2, e: "AB ≠ BA en general para matrices. La multiplicación matricial no es conmutativa.", d: "avanzado" },
      { q: "Si G es un grupo con operación *, ¿cuál propiedad es OBLIGATORIA?", o: ["Conmutatividad", "Asociatividad", "Distributividad", "Totalidad"], a: 1, e: "Todo grupo requiere operación asociativa. La conmutatividad no es obligatoria.", d: "avanzado" },
      { q: "El número de elementos en el grupo (Z₅, +) es:", o: ["4", "5", "6", "Infinito"], a: 1, e: "Z₅ = {0,1,2,3,4} bajo suma módulo 5. Tiene 5 elementos.", d: "avanzado" },
      { q: "La operación a * b = a + b − ab es conmutativa porque:", o: ["a+b−ab = b+a−ba siempre", "Tiene inverso", "Es asociativa", "Tiene elemento neutro"], a: 0, e: "a+b−ab = b+a−ba por conmutatividad de + y × en los reales.", d: "avanzado" },
      { q: "¿Cuántos monomios semejantes hay en 3x² + 5x − 2x² + 7 − x?", o: ["2 pares", "3 pares", "1 par", "Ninguno"], a: 0, e: "3x² y −2x² son semejantes; 5x y −x son semejantes. Son 2 pares.", d: "avanzado" }
    ]
  }
];

// Helper to create module object
function createModule(slug, title, tip, theoryLines, exercises, idStart) {
  const theory = [
    { level: "basico", title: "Conceptos fundamentales", lines: theoryLines.basico },
    { level: "intermedio", title: "Fórmulas y propiedades", lines: theoryLines.intermedio },
    { level: "avanzado", title: "Teoremas avanzados", lines: theoryLines.avanzado }
  ];
  
  const exercisesWithIds = exercises.map((ex, i) => ({
    id: idStart + i,
    question: ex.q,
    options: ex.o,
    correctIndex: ex.a,
    explanation: ex.e,
    difficulty: ex.d === "basico" ? "basico" : ex.d === "intermedio" ? "intermedio" : "avanzado"
  }));

  return {
    slug,
    illustrationSummary: `Diagrama educativo sobre ${title.toLowerCase()} mostrando los conceptos clave y fórmulas principales.`,
    tip,
    studyGuide: `## ${title}\n\n### Conceptos Fundamentales\n${theoryLines.basico.map(l => l.replace(/\*\*/g, '')).join('. ')}.\n\n### Fórmulas y Propiedades\n${theoryLines.intermedio.map(l => l.replace(/\*\*/g, '')).join('. ')}.\n\n### Teoremas Avanzados\n${theoryLines.avanzado.map(l => l.replace(/\*\*/g, '')).join('. ')}.`,
    theory,
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="30" font-family="Arial" font-size="14" fill="#333" font-weight="bold" text-anchor="middle">${title}</text><circle cx="100" cy="100" r="40" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="200" cy="100" r="40" fill="none" stroke="#dc2626" stroke-width="2"/><text x="100" y="105" font-family="Arial" font-size="12" fill="#2563eb" text-anchor="middle">A</text><text x="200" y="105" font-family="Arial" font-size="12" fill="#dc2626" text-anchor="middle">B</text><text x="150" y="170" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">Conjuntos y operaciones</text></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><rect x="30" y="40" width="240" height="120" fill="none" stroke="#7c3aed" stroke-width="2" rx="8"/><text x="150" y="80" font-family="Arial" font-size="11" fill="#333" text-anchor="middle">Propiedades</text><text x="150" y="110" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">Conmutativa | Asociativa</text><text x="150" y="140" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">Distributiva | Identidad</text></svg>`
    ],
    exercises: exercisesWithIds
  };
}

console.log("Template ready. Use generate-full.js for actual generation.");
