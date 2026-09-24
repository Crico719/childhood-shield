export const cokitoRMModules17to22: CourseModule[] = [
  {
    slug: "operadores-matematicos",
    tip: "Lee siempre el **enunciado completo** antes de calcular. Identifica la fórmula del operador, sustituye paso a paso y respeta el orden de operaciones.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **operador matemático** es un símbolo que define una operación entre números. Aparecen con símbolos como ◊, △, ⋆, ∘, ☆.",
          "La expresión **a ◊ b** significa que debes reemplazar ◊ con la fórmula específica dada en el problema.",
          "Los operadores comunes involucran **suma, resta, multiplicación** y potencias, combinados de forma no estándar.",
          "**Primero identificas la operación**, luego sustituyes los valores y calculas respetando el orden PEMDAS.",
          "Ejemplo: Si a ◊ b = 2a + 3b, entonces **3 ◊ 4** = 2(3) + 3(4) = 6 + 12 = **18**.",
          "Los paréntesis en la definición son **obligatorios** para definir el alcance de la operación."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Cuando el operador involucra **potencias o raíces**, recuerda que x² = x·x y √x es la raíz cuadrada.",
          "Para operadores **compuestos** como (a ◊ b) ◊ c, calculas el paréntesis interior primero.",
          "Cuando el problema pide **despejar una variable**, sustituye el resultado conocido e iguala la ecuación.",
          "Cuidado con la **conmutatividad**: verifica si a ◊ b = b ◊ a. No todos los operadores la cumplen.",
          "Cuando aparecen **dos operadores** distintos, identifica cuál aplica en cada paso antes de calcular.",
          "Si el operador se define por **tabla de valores**, busca un patrón: ¿es lineal, cuadrático o exponencial?"
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "En problemas avanzados aparecen **operadores anidados**: evaluar expresiones como (2 ◊ 3) ◊ (1 ◊ 4).",
          "Cuando el problema define **dos operadores** distintos, cuida la precedencia entre ellos.",
          "Algunos problemas piden encontrar **x** tal que x ◊ 5 = 5 ◊ x. Convierte la operación en ecuación.",
          "Problemas de **sucesiones operadas**: si a₁ = 2, aₙ₊₁ = aₙ ◊ n, calcula iterativamente cada término.",
          "Cuando el operador involucra **módulo**, recuerda: 17 mod 5 = 2 y 17 div 5 = 3.",
          "**Descomponer** el problema en pasos pequeños es la estrategia más efectiva."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Operadores Definidos</text><rect x="20" y="38" width="125" height="148" fill="#eff6ff" rx="6" stroke="#2563eb" stroke-width="1.5"/><text x="82" y="56" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">Operador ◊</text><text x="82" y="76" text-anchor="middle" font-size="11" fill="#1e293b">a ◊ b = 2a + 3b</text><line x1="30" y1="86" x2="135" y2="86" stroke="#2563eb" stroke-width="0.5" opacity="0.4"/><text x="82" y="104" text-anchor="middle" font-size="10" fill="#475569">Ejemplo:</text><text x="82" y="122" text-anchor="middle" font-size="11" fill="#1e293b">3 ◊ 4 = 2(3)+3(4)</text><text x="82" y="142" text-anchor="middle" font-size="11" fill="#1e293b">= 6 + 12</text><text x="82" y="168" text-anchor="middle" font-size="14" font-weight="bold" fill="#059669">= 18</text><rect x="155" y="38" width="125" height="148" fill="#fef3c7" rx="6" stroke="#d97706" stroke-width="1.5"/><text x="217" y="56" text-anchor="middle" font-size="12" font-weight="bold" fill="#d97706">Operador △</text><text x="217" y="76" text-anchor="middle" font-size="11" fill="#1e293b">a △ b = a² − b</text><line x1="165" y1="86" x2="270" y2="86" stroke="#d97706" stroke-width="0.5" opacity="0.4"/><text x="217" y="104" text-anchor="middle" font-size="10" fill="#475569">Ejemplo:</text><text x="217" y="122" text-anchor="middle" font-size="11" fill="#1e293b">5 △ 3 = 5² − 3</text><text x="217" y="142" text-anchor="middle" font-size="11" fill="#1e293b">= 25 − 3</text><text x="217" y="168" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626">= 22</text></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Operador Compuesto</text><rect x="20" y="34" width="260" height="26" fill="#ede9fe" rx="4" stroke="#7c3aed" stroke-width="1"/><text x="150" y="52" text-anchor="middle" font-size="11" fill="#7c3aed">Si a ◊ b = a + 2b, calcular (3 ◊ 1) ◊ 2</text><rect x="20" y="68" width="260" height="120" fill="#f0fdf4" rx="4" stroke="#059669" stroke-width="1"/><text x="35" y="90" font-size="11" fill="#059669" font-weight="bold">Paso 1: Resolver el paréntesis interior</text><text x="50" y="110" font-size="11" fill="#2563eb">3 ◊ 1 = 3 + 2(1) = 3 + 2 = 5</text><text x="35" y="135" font-size="11" fill="#059669" font-weight="bold">Paso 2: Sustituir y resolver</text><text x="50" y="155" font-size="11" fill="#dc2626">5 ◊ 2 = 5 + 2(2) = 5 + 4 = 9</text><text x="150" y="180" text-anchor="middle" font-size="13" font-weight="bold" fill="#7c3aed">Resultado: (3 ◊ 1) ◊ 2 = 9</text></svg>`
    ],
    exercises: [
      {
        id: 1701,
        question: "Si **a ◊ b = 2a + 3b**, ¿cuál es el valor de **4 ◊ 5**?",
        options: ["20", "23", "17", "25"],
        correctIndex: 1,
        explanation: "2(4) + 3(5) = 8 + 15 = **23**.",
        difficulty: "basico"
      },
      {
        id: 1702,
        question: "Si **a △ b = 2a − b**, ¿cuál es el valor de **(4 △ 3) △ 2**?",
        options: ["6", "8", "10", "12"],
        correctIndex: 1,
        explanation: "Primero: 4 △ 3 = 2(4) − 3 = 5. Luego: 5 △ 2 = 2(5) − 2 = **8**.",
        difficulty: "intermedio"
      },
      {
        id: 1703,
        question: "Se define **a ☆ b = a² − b** y **a ◎ b = 2a + b**. ¿Cuál es **(3 ☆ 2) ◎ 5**?",
        options: ["15", "17", "19", "21"],
        correctIndex: 2,
        explanation: "3 ☆ 2 = 3² − 2 = 7. Luego 7 ◎ 5 = 2(7) + 5 = 14 + 5 = **19**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "operadores-binarios",
    tip: "Los operadores binarios suelen definirse por **tabla o fórmula**. Si es tabla, constrúyela completa antes de responder. Si es fórmula, verifica con valores dados para confirmar tu interpretación.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **operador binario** toma exactamente **dos operandos** y produce un resultado. Se escribe como a ⊕ b.",
          "Los binarios conocidos son: **suma (+), resta (−), multiplicación (×)** y división (÷).",
          "Un operador binario se define mediante una **fórmula algebraica** o una **tabla de valores**.",
          "Si a ⊕ b = a + b − 2, entonces 5 ⊕ 3 = 5 + 3 − 2 = **6**.",
          "La **conmutatividad** significa que a ◊ b = b ◊ a. No todos la cumplen.",
          "La **asociatividad** significa que (a ◊ b) ◊ c = a ◊ (b ◊ c)."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Para verificar **conmutatividad**, comprueba si a ◊ b = b ◊ a. Un solo contraejemplo basta para descartarla.",
          "Cuando el problema da una **tabla incompleta**, usa los valores conocidos para deducir la fórmula.",
          "Operadores comunes: **a ⊕ b = ab + 1**, **a ◊ b = a² + b**, **a ⋆ b = |a − b|**.",
          "Cuando el problema dice 'a ◊ 4 = 10', convierte en ecuación y despeja a.",
          "La **sustitución inversa** es clave: conoces el resultado y un operando, encuentras el otro.",
          "Para **dos operadores**, resuelve completamente uno antes de aplicar el otro."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Dos operadores**: a ☆ b = a + 2b y a ◎ b = ab − 1. Evalúa (2 ☆ 3) ◎ (1 ☆ 2).",
          "Cuando un operador **depende del orden**, presta atención a la posición de cada operando.",
          "**Inverso**: dado a ◊ b = a² − ab + b², encuentra x tal que x ◊ 3 = 7.",
          "Operadores con **restricciones**: solo se definen para ciertos valores.",
          "En **tablas de verdad lógicas**, AND (∧), OR (∨), XOR (⊕) y NOT (¬).",
          "**Descomponer** la expresión en subexpresiones más pequeñas es la clave."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Tabla: a ⊕ b = 2a + b − 1</text><rect x="55" y="40" width="190" height="130" fill="white" rx="4" stroke="#2563eb" stroke-width="1.5"/><text x="105" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">⊕</text><text x="155" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">1</text><text x="205" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">2</text><line x1="55" y1="68" x2="245" y2="68" stroke="#e2e8f0" stroke-width="1"/><text x="105" y="88" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">1</text><text x="155" y="88" text-anchor="middle" font-size="11" fill="#1e293b">2</text><text x="205" y="88" text-anchor="middle" font-size="11" fill="#1e293b">3</text><line x1="55" y1="96" x2="245" y2="96" stroke="#e2e8f0" stroke-width="1"/><text x="105" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">2</text><text x="155" y="116" text-anchor="middle" font-size="11" fill="#1e293b">4</text><text x="205" y="116" text-anchor="middle" font-size="11" fill="#1e293b">5</text><line x1="55" y1="124" x2="245" y2="124" stroke="#e2e8f0" stroke-width="1"/><text x="105" y="144" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">3</text><text x="155" y="144" text-anchor="middle" font-size="11" fill="#1e293b">6</text><text x="205" y="144" text-anchor="middle" font-size="11" fill="#1e293b">7</text><text x="150" y="185" text-anchor="middle" font-size="10" fill="#475569">2(1)+1−1=2 | 2(2)+2−1=5 | 2(3)+1−1=6 ✓</text></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">¿Es Conmutativo?</text><rect x="20" y="34" width="260" height="24" fill="#ede9fe" rx="4" stroke="#7c3aed" stroke-width="1"/><text x="150" y="51" text-anchor="middle" font-size="11" fill="#7c3aed">a ⊕ b = a + 2b</text><rect x="20" y="66" width="125" height="60" fill="#f0fdf4" rx="4" stroke="#059669" stroke-width="1"/><text x="82" y="83" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669">Prueba: a=1, b=2</text><text x="82" y="100" text-anchor="middle" font-size="10" fill="#1e293b">1 ⊕ 2 = 1+4 = 5</text><text x="82" y="117" text-anchor="middle" font-size="10" fill="#1e293b">2 ⊕ 1 = 2+2 = 4</text><rect x="155" y="66" width="125" height="60" fill="#fef2f2" rx="4" stroke="#dc2626" stroke-width="1"/><text x="217" y="92" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">5 ≠ 4</text><text x="217" y="112" text-anchor="middle" font-size="10" fill="#dc2626">NO es conmutativo</text><rect x="20" y="140" width="260" height="48" fill="#eff6ff" rx="4" stroke="#2563eb" stroke-width="1"/><text x="150" y="160" text-anchor="middle" font-size="10" fill="#2563eb" font-weight="bold">Conmutativos: +, ×, |a−b|, a²+b²</text><text x="150" y="178" text-anchor="middle" font-size="10" fill="#dc2626">NO conmutativos: −, ÷, a+b², a+2b</text></svg>`
    ],
    exercises: [
      {
        id: 1801,
        question: "Si **a ⊕ b = a + b − 1**, ¿cuál es el valor de **3 ⊕ 4 ⊕ 3**?",
        options: ["6", "7", "8", "9"],
        correctIndex: 2,
        explanation: "Primero: 3 ⊕ 4 = 3+4−1 = 6. Luego: 6 ⊕ 3 = 6+3−1 = **8**.",
        difficulty: "basico"
      },
      {
        id: 1802,
        question: "Un operador se define por tabla: 1◊1=2, 1◊2=3, 2◊1=4, 2◊2=5. ¿Cuál es la fórmula de **a ◊ b**?",
        options: ["a + b", "2a + b − 1", "a + 2b − 1", "ab + 1"],
        correctIndex: 1,
        explanation: "Probamos 2a+b−1: 1◊1=2✓, 1◊2=3✓, 2◊1=4✓, 2◊2=5✓. Respuesta: **2a + b − 1**.",
        difficulty: "intermedio"
      },
      {
        id: 1803,
        question: "Si **a ☆ b = a² − ab + b²** y **a ◎ b = a + b**, ¿cuál es **(3 ☆ 2) ◎ 4**?",
        options: ["7", "9", "11", "13"],
        correctIndex: 2,
        explanation: "3 ☆ 2 = 9−6+4 = 7. Luego 7 ◎ 4 = 7+4 = **11**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "conteo-de-figuras",
    tip: "Para contar figuras en cuadrículas usa **fórmulas directas**: cuadrados en n×n = n(n+1)(2n+1)/6; rectángulos en m×n = C(m+1,2)·C(n+1,2). Empieza siempre por las figuras más pequeñas.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "El **conteo de figuras** es identificar y contar todas las figuras geométricas en un dibujo o cuadrícula.",
          "Para contar **cuadrados** en una malla n×n: suma los cuadrados de cada tamaño. En 2×2 hay 4+1 = **5**.",
          "Para **rectángulos** en m×n: **C(m+1,2) × C(n+1,2)** = m(m+1)/2 × n(n+1)/2.",
          "Un **triángulo** se forma cuando dos líneas se cortan creando una figura de 3 lados.",
          "En un triángulo subdividido en n filas, hay **n²** triángulos con la misma orientación.",
          "Empieza contando las figuras **más pequeñas** y avanza hacia las más grandes."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "En **m × n**: rectángulos = m(m+1)/2 × n(n+1)/2.",
          "Cuadrados en **n×n**: **n(n+1)(2n+1)/6**. En 3×3: 14 cuadrados.",
          "Triángulos por **capas**: la capa k tiene 2k−1 triángulos.",
          "Con **líneas que se cruzan**, cuenta puntos de intersección y aplica combinatoria.",
          "Con **figuras superpuestas**, usa inclusión-exclusión: A + B − A∩B.",
          "**Descomposición**: divide en partes simples, suma evitando doble conteo."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "En **4×4**: 16+9+4+1 = **30 cuadrados**.",
          "**Triángulos con diagonales**: pentágono con diagonales tiene múltiples triángulos por tipo.",
          "Cuadrículas con **líneas diagonales**: identifica base y altura de cada triángulo.",
          "Tablero 8×8: 1²+2²+...+8² = **204 cuadrados**.",
          "Con **simetría**, cuenta un cuarto y multiplica.",
          "Triángulos con vértice: **n × m(m+1)/2** donde n = segmentos base, m = líneas del vértice."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Conteo de Cuadrados en 3×3</text><g transform="translate(30,38)"><rect x="0" y="0" width="80" height="80" fill="none" stroke="#1e293b" stroke-width="1"/><line x1="26.7" y1="0" x2="26.7" y2="80" stroke="#1e293b" stroke-width="0.5"/><line x1="53.3" y1="0" x2="53.3" y2="80" stroke="#1e293b" stroke-width="0.5"/><line x1="0" y1="26.7" x2="80" y2="26.7" stroke="#1e293b" stroke-width="0.5"/><line x1="0" y1="53.3" x2="80" y2="53.3" stroke="#1e293b" stroke-width="0.5"/><rect x="0" y="0" width="26.7" height="26.7" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="1.5"/><rect x="0" y="0" width="53.3" height="53.3" fill="#dc2626" fill-opacity="0.12" stroke="#dc2626" stroke-width="1.5"/><rect x="0" y="0" width="80" height="80" fill="#059669" fill-opacity="0.08" stroke="#059669" stroke-width="2"/></g><g transform="translate(130,38)"><text x="65" y="15" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Desglose:</text><rect x="10" y="28" width="12" height="12" fill="#2563eb" fill-opacity="0.3" stroke="#2563eb" stroke-width="1"/><text x="28" y="39" font-size="10" fill="#1e293b">1×1 = 9</text><rect x="10" y="50" width="18" height="18" fill="#dc2626" fill-opacity="0.3" stroke="#dc2626" stroke-width="1"/><text x="34" y="64" font-size="10" fill="#1e293b">2×2 = 4</text><rect x="10" y="78" width="24" height="24" fill="#059669" fill-opacity="0.3" stroke="#059669" stroke-width="1"/><text x="40" y="96" font-size="10" fill="#1e293b">3×3 = 1</text><text x="65" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="#7c3aed">Total = 9+4+1 = 14</text></g></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Fórmulas Clave</text><rect x="20" y="35" width="260" height="30" fill="#ede9fe" rx="4" stroke="#7c3aed" stroke-width="1"/><text x="150" y="55" text-anchor="middle" font-size="11" fill="#7c3aed" font-weight="bold">Rectángulos en m×n = m(m+1)/2 × n(n+1)/2</text><rect x="20" y="75" width="125" height="108" fill="#eff6ff" rx="4" stroke="#2563eb" stroke-width="1"/><text x="82" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">Ejemplo: 2×3</text><rect x="35" y="103" width="90" height="60" fill="none" stroke="#1e293b" stroke-width="1"/><line x1="65" y1="103" x2="65" y2="163" stroke="#1e293b" stroke-width="0.5"/><line x1="95" y1="103" x2="95" y2="163" stroke="#1e293b" stroke-width="0.5"/><line x1="35" y1="133" x2="125" y2="133" stroke="#1e293b" stroke-width="0.5"/><text x="82" y="178" text-anchor="middle" font-size="10" fill="#2563eb">R = 3×6 = 18 rectángulos</text><rect x="155" y="75" width="125" height="108" fill="#f0fdf4" rx="4" stroke="#059669" stroke-width="1"/><text x="217" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">Cuadrados n×n</text><text x="217" y="115" text-anchor="middle" font-size="11" fill="#1e293b">S(n) = n(n+1)(2n+1)/6</text><text x="217" y="138" text-anchor="middle" font-size="10" fill="#475569">3×3 → 14</text><text x="217" y="155" text-anchor="middle" font-size="10" fill="#475569">4×4 → 30</text><text x="217" y="172" text-anchor="middle" font-size="10" fill="#475569">8×8 → 204</text></svg>`
    ],
    exercises: [
      {
        id: 1901,
        question: "¿Cuántos **cuadrados** hay en una cuadrícula de **3 × 3**?",
        options: ["9", "12", "14", "18"],
        correctIndex: 2,
        explanation: "1×1: 9, 2×2: 4, 3×3: 1. Total = 9+4+1 = **14**.",
        difficulty: "basico"
      },
      {
        id: 1902,
        question: "¿Cuántos **rectángulos** hay en una cuadrícula de **2 filas × 4 columnas**?",
        options: ["20", "24", "30", "36"],
        correctIndex: 2,
        explanation: "C(3,2) × C(5,2) = 3 × 10 = **30**.",
        difficulty: "intermedio"
      },
      {
        id: 1903,
        question: "¿Cuántos **cuadrados** hay en un tablero de ajedrez (**8 × 8**)?",
        options: ["64", "128", "204", "256"],
        correctIndex: 2,
        explanation: "1²+2²+...+8² = 64+49+36+25+16+9+4+1 = **204**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "areas-sombreadas-y-perimetros",
    tip: "Para áreas sombreadas usa **resta de áreas**: calcula el área total y resta las partes no sombreadas. Identifica primero las figuras que componen el dibujo.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "El **área** es el espacio interior de una figura, medida en unidades cuadradas (cm², m²).",
          "Fórmulas: **Cuadrado** = lado², **Rectángulo** = base × altura, **Triángulo** = (base × altura)/2.",
          "El **perímetro** es la suma de todos los lados. Cuadrado: P = 4l.",
          "Área de **círculo** = **πr²**. Circunferencia = **2πr**.",
          "Semicírculo = πr²/2. Cuarto de círculo = πr²/4.",
          "Para **área sombreada**, identifica qué figuras conforman la región y aplica la fórmula."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Área total − área no sombreada**: calcula el área completa y resta las partes blancas.",
          "Cuadrado con **círculo inscrito**: sombreado = l²(1 − π/4).",
          "Para **semicírculos y cuartos**, identifica el radio y aplica la fracción de πr².",
          "**Anillo** (dos círculos concéntricos): π(R² − r²).",
          "**Descompon** en rectángulos, triángulos, semicírculos. Calcula por separado.",
          "Para **perímetros compuestos**, suma solo los lados exteriores."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Figuras superpuestas**: dos cuadrados rotados o círculos intersectados.",
          "**Intersección de dos círculos**: área compartida con arcos y triángulos.",
          "**Sombreado alternado** en tablero: el sombreado es la mitad del total.",
          "Cuando un círculo **corta un cuadrado**, restar segmentos circulares.",
          "Con **simetría**, calcula un cuarto y multiplica por 4.",
          "Triángulo rectángulo inscrito: la **hipotenusa es el diámetro** del círculo circunscrito."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Cuadrado con Círculo Inscrito</text><rect x="50" y="40" width="90" height="90" fill="#dc2626" fill-opacity="0.2" stroke="#dc2626" stroke-width="1.5" rx="2"/><circle cx="95" cy="85" r="45" fill="#2563eb" fill-opacity="0.25" stroke="#2563eb" stroke-width="1.5"/><line x1="95" y1="85" x2="140" y2="85" stroke="#1e293b" stroke-width="1" stroke-dasharray="3"/><text x="120" y="80" font-size="9" fill="#1e293b">r</text><text x="95" y="145" text-anchor="middle" font-size="10" fill="#1e293b">lado = 2r</text><rect x="170" y="40" width="115" height="145" fill="white" rx="4" stroke="#e2e8f0" stroke-width="1"/><text x="227" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Cálculo:</text><text x="227" y="80" text-anchor="middle" font-size="10" fill="#475569">Cuadrado = (2r)² = 4r²</text><text x="227" y="100" text-anchor="middle" font-size="10" fill="#475569">Círculo = πr²</text><text x="227" y="125" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Sombreado = 4r² − πr²</text><text x="227" y="145" text-anchor="middle" font-size="11" fill="#7c3aed">= r²(4 − π)</text><text x="227" y="168" text-anchor="middle" font-size="10" fill="#059669">Si r=4: 64 − 16π ≈ 13.73</text></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Método: Resta de Áreas</text><rect x="30" y="38" width="100" height="75" fill="#dc2626" fill-opacity="0.15" stroke="#dc2626" stroke-width="1.5" rx="2"/><circle cx="80" cy="75" r="25" fill="#f8fafc" stroke="#1e293b" stroke-width="1"/><text x="80" y="48" text-anchor="middle" font-size="9" fill="#dc2626">Sombreado</text><text x="80" y="130" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">Rect 10×8</text><text x="80" y="145" text-anchor="middle" font-size="9" fill="#475569">r = 3</text><rect x="155" y="38" width="130" height="145" fill="white" rx="4" stroke="#e2e8f0" stroke-width="1"/><text x="220" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Método: Resta</text><text x="220" y="78" text-anchor="middle" font-size="10" fill="#2563eb">1. Rectángulo = 10×8 = 80</text><text x="220" y="98" text-anchor="middle" font-size="10" fill="#dc2626">2. Círculo = π(3²) = 9π</text><text x="220" y="118" text-anchor="middle" font-size="10" fill="#dc2626">   ≈ 28.27</text><text x="220" y="145" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">3. Sombreado = 80 − 9π</text><text x="220" y="168" text-anchor="middle" font-size="12" fill="#059669">≈ 51.73</text></svg>`
    ],
    exercises: [
      {
        id: 2001,
        question: "Cuadrado de lado **8** con círculo inscrito (r=4). ¿Área sombreada entre ambos?",
        options: ["16 − 4π", "64 − 16π", "64 − 4π", "32 − 16π"],
        correctIndex: 1,
        explanation: "Cuadrado: 8² = 64. Círculo: π(4²) = 16π. Sombreado = **64 − 16π** ≈ 13.73.",
        difficulty: "basico"
      },
      {
        id: 2002,
        question: "Rectángulo **12 × 8** con triángulo no sombreado (base 12, altura 8). ¿Área sombreada?",
        options: ["24", "48", "72", "96"],
        correctIndex: 1,
        explanation: "Rectángulo = 96. Triángulo = 48. Sombreado = 96 − 48 = **48**.",
        difficulty: "intermedio"
      },
      {
        id: 2003,
        question: "Cuadrado de lado **10** con semicírculo de diámetro 10 sobre 2 lados opuestos. ¿Perímetro total?",
        options: ["20 + 10π", "40 + 10π", "20 + 20π", "40 + 20π"],
        correctIndex: 0,
        explanation: "2 lados rectos (10+10=20) + 2 semicírculos (2×5π=10π). Total = **20 + 10π**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "analisis-combinatorio",
    tip: "Domina: **P(n,r) = n!/(n−r)!** y **C(n,r) = n!/(r!(n−r)!)**. Pregunta siempre si el orden importa. Si hay restricciones, usa el principio multiplicativo paso a paso.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "El **análisis combinatorio** estudia las formas de **organizar, agrupar y contar** elementos.",
          "**Factorial** n! = n × (n−1) × ... × 1. Ejemplo: 5! = 120.",
          "**Permutaciones**: el orden importa. P(n,r) = n!/(n−r)!.",
          "**Combinaciones**: el orden NO importa. C(n,r) = n!/(r!(n−r)!).",
          "**Principio multiplicativo**: el total es el **producto** de opciones por etapa.",
          "**Principio aditivo**: si hay formas independientes, el total es la **suma**."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Orden importa** (códigos) → permutaciones. Ej: 3 dígitos con {1,2,3,4} → P(4,3) = 24.",
          "**Orden no importa** (comités) → combinaciones. Ej: elegir 3 de 7 → C(7,3) = 35.",
          "Con **repetición**: r elementos de n = **nʳ**.",
          "**Triángulo de Pascal** para calcular C(n,r) rápidamente.",
          "**Circulares**: n elementos en círculo → **(n−1)!**.",
          "**Inclusión-exclusión**: |A∪B| = |A| + |B| − |A∩B|."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Permutaciones con **elem. repetidos**: n!/(r₁!·r₂!·...·rₖ!).",
          "**Partición** de n objetos en k cajas: C(n+k−1, k−1).",
          "**Identidad de Pascal**: C(n,r) = C(n−1,r−1) + C(n−1,r).",
          "Con **restricciones negativas**, usa inclusión-exclusión.",
          "**Adyacencia**: 2 elementos juntos → agrupa como una unidad.",
          "**Multi-conjunto**: elegir r de k tipos = C(r+k−1, k−1)."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Permutaciones vs Combinaciones</text><rect x="20" y="35" width="125" height="72" fill="#eff6ff" rx="6" stroke="#2563eb" stroke-width="1.5"/><text x="82" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">Permutación</text><text x="82" y="66" text-anchor="middle" font-size="9" fill="#475569">(orden importa)</text><text x="82" y="84" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">P(n,r) = n!/(n−r)!</text><text x="82" y="100" text-anchor="middle" font-size="9" fill="#475569">P(4,3) = 24</text><rect x="155" y="35" width="125" height="72" fill="#fef3c7" rx="6" stroke="#d97706" stroke-width="1.5"/><text x="217" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#d97706">Combinación</text><text x="217" y="66" text-anchor="middle" font-size="9" fill="#475569">(orden NO importa)</text><text x="217" y="84" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">C(n,r) = n!/(r!(n−r)!)</text><text x="217" y="100" text-anchor="middle" font-size="9" fill="#475569">C(4,3) = 4</text><rect x="20" y="118" width="260" height="70" fill="#f0fdf4" rx="6" stroke="#059669" stroke-width="1.5"/><text x="150" y="138" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669">Ejemplo: elegir 2 de {A,B,C}</text><text x="80" y="158" font-size="10" fill="#2563eb">Perm: AB,BA AC,CA BC,CB</text><text x="80" y="174" font-size="10" fill="#2563eb">→ 6 formas</text><text x="210" y="158" font-size="10" fill="#d97706">Comb: {A,B}{A,C}{B,C}</text><text x="210" y="174" font-size="10" fill="#d97706">→ 3 formas</text></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Triángulo de Pascal</text><g transform="translate(150,115)" text-anchor="middle"><text x="0" y="-65" font-size="10" font-weight="bold" fill="#7c3aed">n=0</text><text x="0" y="-48" font-size="11" fill="#1e293b">1</text><text x="-30" y="-28" font-size="11" fill="#1e293b">1</text><text x="30" y="-28" font-size="11" fill="#1e293b">1</text><text x="-60" y="-8" font-size="11" fill="#1e293b">1</text><text x="-20" y="-8" font-size="11" font-weight="bold" fill="#2563eb">2</text><text x="20" y="-8" font-size="11" font-weight="bold" fill="#2563eb">2</text><text x="60" y="-8" font-size="11" fill="#1e293b">1</text><text x="-90" y="12" font-size="11" fill="#1e293b">1</text><text x="-50" y="12" font-size="11" fill="#059669">3</text><text x="-10" y="12" font-size="11" fill="#059669">3</text><text x="30" y="12" font-size="11" fill="#059669">3</text><text x="70" y="12" font-size="11" fill="#1e293b">1</text><text x="-120" y="32" font-size="11" fill="#1e293b">1</text><text x="-80" y="32" font-size="11" fill="#dc2626">4</text><text x="-40" y="32" font-size="11" fill="#dc2626">6</text><text x="0" y="32" font-size="11" fill="#dc2626">4</text><text x="40" y="32" font-size="11" fill="#1e293b">1</text></g><text x="150" y="162" text-anchor="middle" font-size="10" fill="#475569">Cada número = suma de los dos superiores</text><text x="150" y="178" text-anchor="middle" font-size="10" fill="#475569">C(n,r) = C(n−1,r−1) + C(n−1,r)</text><text x="150" y="194" text-anchor="middle" font-size="10" fill="#7c3aed">Ej: C(4,2) = 6</text></svg>`
    ],
    exercises: [
      {
        id: 2101,
        question: "¿Cuántos **números de 3 dígitos** con **{1,2,3,4,5}** sin repetición?",
        options: ["60", "125", "24", "15"],
        correctIndex: 0,
        explanation: "P(5,3) = 5×4×3 = **60**.",
        difficulty: "basico"
      },
      {
        id: 2102,
        question: "De **7 personas**, ¿cuántas formas de elegir un comité de **3**?",
        options: ["21", "35", "42", "120"],
        correctIndex: 1,
        explanation: "C(7,3) = 7!/(3!·4!) = 210/6 = **35**.",
        difficulty: "intermedio"
      },
      {
        id: 2103,
        question: "¿Cuántas formas de ordenar **5 libros** si **2 específicos** deben estar juntos?",
        options: ["24", "48", "60", "120"],
        correctIndex: 1,
        explanation: "2 juntos = 1 unidad → 4! = 24. Intercambio: 2! = 2. Total = 24×2 = **48**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "probabilidades",
    tip: "Probabilidad = **casos favorables / casos posibles**. Para eventos compuestos: **independientes** se multiplican, **dependientes** ajusta el denominador. Los **árboles de probabilidad** son tu mejor aliado para múltiples etapas.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "La **probabilidad** mide la posibilidad de un evento. Va de **0** (imposible) a **1** (seguro).",
          "**P(A) = casos favorables / casos posibles**. Dado justo: P(6) = 1/6.",
          "El **espacio muestral** (S) es el conjunto de todos los resultados posibles.",
          "**P(no A) = 1 − P(A)**. Si P(lluvia) = 0.3, P(no lluvia) = 0.7.",
          "**Mutuamente excluyentes**: no ocurren juntos. P(A o B) = P(A) + P(B).",
          "Las probabilidades del espacio muestral **suman 1**."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Independientes**: P(A y B) = P(A) × P(B). Ej: lanzar dados dos veces.",
          "**Dependientes**: P(A y B) = P(A) × P(B|A). Ej: cartas sin reposición.",
          "**Regla suma**: P(A o B) = P(A) + P(B) − P(A y B).",
          "**Árbol de probabilidades** para problemas de dos o más etapas.",
          "Con dados, la suma más probable es **7** (6 de 36).",
          "**'Al menos uno'**: P(al menos 1) = 1 − P(ninguno)."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Diagrama de Venn**: |A∪B| = |A| + |B| − |A∩B|.",
          "**P(A|B) = P(A∩B)/P(B)**. La probabilidad condicional.",
          "**Teorema de Bayes**: P(H|E) = P(E|H)·P(H) / P(E).",
          "**Urnas**: con reposición = independiente; sin reposición = dependiente.",
          "Dos dados: **36 combinaciones**. Sumas forman distribución triangular centrada en 7.",
          "P(A|B) ≠ P(B|A). La confusión de probabilidades inversas es error común."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Árbol de Probabilidades</text><text x="150" y="38" text-anchor="middle" font-size="10" fill="#475569">Sacar 2 bolas sin reposición de {3R, 2A}</text><circle cx="40" cy="70" r="8" fill="#2563eb"/><text x="40" y="74" text-anchor="middle" font-size="8" fill="white" font-weight="bold">I</text><line x1="48" y1="66" x2="120" y2="46" stroke="#dc2626" stroke-width="1.5"/><text x="82" y="50" font-size="9" fill="#dc2626" font-weight="bold">R = 3/5</text><circle cx="130" cy="42" r="6" fill="#dc2626"/><line x1="136" y1="40" x2="200" y2="28" stroke="#dc2626" stroke-width="1.5"/><text x="167" y="28" font-size="8" fill="#dc2626">RR = 2/4</text><text x="220" y="28" font-size="9" fill="#dc2626" font-weight="bold">= 6/20</text><line x1="136" y1="46" x2="200" y2="58" stroke="#2563eb" stroke-width="1.5"/><text x="167" y="58" font-size="8" fill="#2563eb">RA = 2/4</text><text x="220" y="58" font-size="9" fill="#2563eb" font-weight="bold">= 6/20</text><line x1="48" y1="74" x2="120" y2="96" stroke="#2563eb" stroke-width="1.5"/><text x="82" y="92" font-size="9" fill="#2563eb" font-weight="bold">A = 2/5</text><circle cx="130" cy="100" r="6" fill="#2563eb"/><line x1="136" y1="96" x2="200" y2="84" stroke="#dc2626" stroke-width="1.5"/><text x="167" y="84" font-size="8" fill="#dc2626">AR = 3/4</text><text x="220" y="84" font-size="9" fill="#dc2626" font-weight="bold">= 6/20</text><line x1="136" y1="104" x2="200" y2="116" stroke="#059669" stroke-width="1.5"/><text x="167" y="116" font-size="8" fill="#059669">AA = 1/4</text><text x="220" y="116" font-size="9" fill="#059669" font-weight="bold">= 2/20</text><rect x="20" y="135" width="260" height="55" fill="#ede9fe" rx="4" stroke="#7c3aed" stroke-width="1"/><text x="150" y="155" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="bold">RR=6/20 RA=6/20 AR=6/20 AA=2/20</text><text x="150" y="175" text-anchor="middle" font-size="10" fill="#7c3aed">Total = 20/20 = 1 ✓</text></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Diagrama de Venn</text><text x="150" y="38" text-anchor="middle" font-size="10" fill="#475569">P(A) = 0.4, P(B) = 0.3, P(A∩B) = 0.1</text><circle cx="115" cy="105" r="50" fill="#2563eb" fill-opacity="0.2" stroke="#2563eb" stroke-width="1.5"/><circle cx="175" cy="105" r="50" fill="#dc2626" fill-opacity="0.2" stroke="#dc2626" stroke-width="1.5"/><text x="90" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">A</text><text x="200" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">B</text><text x="145" y="100" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="bold">0.1</text><text x="145" y="115" text-anchor="middle" font-size="8" fill="#7c3aed">A∩B</text><rect x="20" y="160" width="260" height="32" fill="#f0fdf4" rx="4" stroke="#059669" stroke-width="1"/><text x="150" y="180" text-anchor="middle" font-size="10" fill="#059669" font-weight="bold">P(A∪B) = P(A)+P(B)−P(A∩B) = 0.4+0.3−0.1 = 0.6</text></svg>`
    ],
    exercises: [
      {
        id: 2201,
        question: "Al lanzar un dado de 6 caras, ¿cuál es la probabilidad de obtener un **número par**?",
        options: ["1/3", "1/2", "2/3", "1/6"],
        correctIndex: 1,
        explanation: "Pares: {2,4,6} = 3 casos. P(par) = 3/6 = **1/2**.",
        difficulty: "basico"
      },
      {
        id: 2202,
        question: "Al lanzar **dos dados**, ¿cuál es la probabilidad de que la **suma sea 7**?",
        options: ["1/4", "1/6", "1/12", "5/36"],
        correctIndex: 1,
        explanation: "Formas de sumar 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Total: 36. P = 6/36 = **1/6**.",
        difficulty: "intermedio"
      },
      {
        id: 2200,
        question: "Urna con **4 rojas y 6 azules**. Se sacan **2 sin reposición**. P(ambas rojas) = ?",
        options: ["2/15", "4/25", "1/5", "2/9"],
        correctIndex: 0,
        explanation: "P(1ª roja) = 4/10. P(2ª roja|1ª roja) = 3/9. P(ambas) = 4/10 × 3/9 = 12/90 = **2/15**.",
        difficulty: "avanzado"
      }
    ]
  }
];
