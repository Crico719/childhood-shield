import type { CourseModule } from "C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content";

export const rmBatch4: CourseModule[] = [
  {
    slug: "sucesiones-aritmeticas",
    tip: "Identifica rápidamente la razón restando dos términos consecutivos; luego usa aₙ = a₁ + (n−1)d para cualquier término.",
    theory: [
      {
        level: "basico",
        title: "Definición de sucesión aritmética",
        lines: [
          "Una sucesión aritmética es aquella en la que la diferencia entre términos consecutivos es constante.",
          "Esa diferencia constante se llama razón (d) y se calcula como d = aₙ₊₁ − aₙ.",
          "Ejemplo: 3, 7, 11, 15, 19, … tiene razón d = 4 porque 7−3 = 11−7 = 4.",
          "Una sucesión es creciente si d > 0, decreciente si d < 0, y constante si d = 0.",
          "El primer término se denota a₁ y es el punto de partida para construir toda la sucesión.",
          "Para confirmar que una sucesión es aritmética, basta verificar que la diferencia entre pares consecutivos sea siempre la misma."
        ]
      },
      {
        level: "intermedio",
        title: "Término general de una AP",
        lines: [
          "El término general de una sucesión aritmética es aₙ = a₁ + (n − 1) · d.",
          "Esta fórmula permite calcular directamente cualquier término sin necesidad de listar todos los anteriores.",
          "Para encontrar n cuando se conoce aₙ, se despeja: n = (aₙ − a₁) / d + 1.",
          "Si conocemos dos términos aₘ y aₙ, la razón es d = (aₙ − aₘ) / (n − m).",
          "Ejemplo: Si a₁ = 5 y d = 3, el término 20 es a₂₀ = 5 + 19·3 = 62.",
          "La fórmula también permite construir una AP conociendo solo un término intermedio y la razón."
        ]
      },
      {
        level: "avanzado",
        title: "Suma de los primeros n términos",
        lines: [
          "La suma de los primeros n términos de una AP es Sₙ = n/2 · (a₁ + aₙ).",
          "Sustituyendo aₙ: Sₙ = n/2 · (2a₁ + (n − 1) · d), útil cuando no se conoce el último término.",
          "Otra forma: Sₙ = n · (a₁ + aₙ) / 2, equivalente al promedio del primero y el último multiplicado por n.",
          "Si se conoce aₘ y aₙ (m < n), la suma desde m hasta n es S = (n − m + 1)/2 · (aₘ + aₙ).",
          "Ejemplo: S₁₀ de la AP 2, 5, 8, … es 10/2 · (2·2 + 9·3) = 5 · 31 = 155.",
          "En exámenes, identifica si piden un término suelto o una suma, y elige la fórmula adecuada."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="22" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Sucesión Aritmética: aₙ = a₁ + (n−1)d</text>
        <line x1="30" y1="100" x2="270" y2="100" stroke="#94a3b8" stroke-width="2"/>
        <circle cx="60" cy="100" r="14" fill="#2563eb"/>
        <text x="60" y="105" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">3</text>
        <circle cx="120" cy="100" r="14" fill="#2563eb"/>
        <text x="120" y="105" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">7</text>
        <circle cx="180" cy="100" r="14" fill="#2563eb"/>
        <text x="180" y="105" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">11</text>
        <circle cx="240" cy="100" r="14" fill="#2563eb"/>
        <text x="240" y="105" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">15</text>
        <text x="60" y="132" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">a₁</text>
        <text x="120" y="132" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">a₂</text>
        <text x="180" y="132" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">a₃</text>
        <text x="240" y="132" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">a₄</text>
        <line x1="75" y1="80" x2="105" y2="80" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowR1)"/>
        <line x1="135" y1="80" x2="165" y2="80" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowR1)"/>
        <line x1="195" y1="80" x2="225" y2="80" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowR1)"/>
        <defs><marker id="arrowR1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/></marker></defs>
        <text x="90" y="73" font-family="Arial" font-size="11" fill="#dc2626" text-anchor="middle" font-weight="bold">d=4</text>
        <text x="150" y="73" font-family="Arial" font-size="11" fill="#dc2626" text-anchor="middle" font-weight="bold">d=4</text>
        <text x="210" y="73" font-family="Arial" font-size="11" fill="#dc2626" text-anchor="middle" font-weight="bold">d=4</text>
        <rect x="30" y="148" width="240" height="24" fill="#f0fdf4" rx="4" stroke="#16a34a" stroke-width="1"/>
        <text x="150" y="165" font-family="Arial" font-size="12" fill="#16a34a" text-anchor="middle">aₙ = 3 + (n−1)·4 = 4n − 1</text>
      </svg>`
    ],
    exercises: [
      { id: 1, question: "¿Cuál es la razón de la sucesión 5, 11, 17, 23, 29, …?", options: ["d = 4", "d = 5", "d = 6", "d = 7"], correctIndex: 2, explanation: "La razón es d = 11 − 5 = 6. Verificamos: 17 − 11 = 6 y 23 − 17 = 6.", difficulty: "basico" },
      { id: 2, question: "En una AP con a₁ = 8 y d = −3, ¿cuánto vale a₁₅?", options: ["−31", "−34", "−37", "−40"], correctIndex: 1, explanation: "a₁₅ = 8 + (15−1)(−3) = 8 + 14(−3) = 8 − 42 = −34.", difficulty: "intermedio" },
      { id: 3, question: "¿Cuál es la suma de los primeros 20 términos de la AP 4, 7, 10, 13, …?", options: ["610", "640", "650", "700"], correctIndex: 2, explanation: "a₂₀ = 4 + 19·3 = 61. S₂₀ = 20/2 · (4 + 61) = 10 · 65 = 650.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "sucesiones-geometricas",
    tip: "En una GP, multiplica el primer término por q^(n−1) para el término n; para la suma infinita verifica que |q| < 1 antes de usar S = a₁/(1−q).",
    theory: [
      {
        level: "basico",
        title: "Definición de sucesión geométrica",
        lines: [
          "Una sucesión geométrica es aquella en la que el cociente entre términos consecutivos es constante.",
          "Ese cociente constante se llama razón (q) y se calcula como q = aₙ₊₁ / aₙ.",
          "Ejemplo: 2, 6, 18, 54, … tiene razón q = 3 porque 6/2 = 18/6 = 54/18 = 3.",
          "La sucesión es creciente si q > 1 (con a₁ > 0), decreciente si 0 < q < 1, y alterna si q < 0.",
          "Si q = 1 la sucesión es constante: todos los términos valen a₁.",
          "Para verificar que una sucesión es geométrica, basta comprobar que el cociente entre pares consecutivos sea siempre igual."
        ]
      },
      {
        level: "intermedio",
        title: "Término general de una GP",
        lines: [
          "El término general de una sucesión geométrica es aₙ = a₁ · q^(n − 1).",
          "Para encontrar n cuando se conoce aₙ: n = log(aₙ/a₁) / log(q) + 1.",
          "Si conocemos aₘ y aₙ, la razón es q = (aₙ/aₘ)^(1/(n−m)).",
          "Ejemplo: Si a₁ = 5 y q = 2, el término 8 es a₈ = 5 · 2⁷ = 5 · 128 = 640.",
          "Los términos de una GP nunca valen cero si a₁ ≠ 0, ya que se multiplican por q constantemente.",
          "En exámenes, cuida los exponentes: el término n tiene exponente n−1, no n."
        ]
      },
      {
        level: "avanzado",
        title: "Suma finita e infinita de una GP",
        lines: [
          "La suma de los primeros n términos de una GP es Sₙ = a₁ · (qⁿ − 1) / (q − 1), con q ≠ 1.",
          "Si q = 1, simplemente Sₙ = n · a₁ porque todos los términos son iguales a a₁.",
          "La suma infinita converge cuando |q| < 1, y vale S∞ = a₁ / (1 − q).",
          "Si |q| ≥ 1, la suma infinita diverge (no tiene valor finito).",
          "Ejemplo: S∞ de 1, 1/2, 1/4, 1/8, … con a₁ = 1, q = 1/2 es S∞ = 1/(1−1/2) = 2.",
          "La suma infinita se usa en problemas de fracciones repetidas, propagación y series financieras."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="22" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Sucesión Geométrica: aₙ = a₁ · qⁿ⁻¹</text>
        <rect x="35" y="120" width="30" height="50" fill="#2563eb" rx="3"/>
        <rect x="85" y="90" width="30" height="80" fill="#8b5cf6" rx="3"/>
        <rect x="135" y="55" width="30" height="115" fill="#dc2626" rx="3"/>
        <rect x="185" y="25" width="30" height="145" fill="#f59e0b" rx="3"/>
        <rect x="235" y="5" width="30" height="165" fill="#16a34a" rx="3"/>
        <text x="50" y="140" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">2</text>
        <text x="100" y="120" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">4</text>
        <text x="150" y="100" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">8</text>
        <text x="200" y="80" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">16</text>
        <text x="250" y="65" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">32</text>
        <text x="50" y="185" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">a₁</text>
        <text x="100" y="185" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">a₂</text>
        <text x="150" y="185" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">a₃</text>
        <text x="200" y="185" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">a₄</text>
        <text x="250" y="185" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">a₅</text>
        <text x="150" y="50" font-family="Arial" font-size="11" fill="#dc2626" text-anchor="middle" font-weight="bold">q = 2</text>
      </svg>`
    ],
    exercises: [
      { id: 4, question: "¿Cuál es la razón de la sucesión 3, 12, 48, 192, …?", options: ["q = 3", "q = 4", "q = 6", "q = 9"], correctIndex: 1, explanation: "La razón es q = 12/3 = 4. Verificamos: 48/12 = 4 y 192/48 = 4.", difficulty: "basico" },
      { id: 5, question: "¿Cuánto vale el término 7 de una GP con a₁ = 2 y q = 3?", options: ["486", "729", "1458", "2187"], correctIndex: 2, explanation: "a₇ = 2 · 3⁶ = 2 · 729 = 1458.", difficulty: "intermedio" },
      { id: 6, question: "¿Cuál es la suma infinita de la serie 100, 50, 25, 12.5, …?", options: ["150", "200", "250", "300"], correctIndex: 1, explanation: "a₁ = 100, q = 1/2. Como |q| < 1: S∞ = 100 / (1 − 0.5) = 100 / 0.5 = 200.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "sucesiones-recursivas",
    tip: "En definiciones recursivas, identifica siempre los casos base (primeros términos dados) antes de calcular cualquier término posterior.",
    theory: [
      {
        level: "basico",
        title: "¿Qué es una definición recursiva?",
        lines: [
          "Una sucesión recursiva se define mediante una fórmula que expresa cada término en función de los anteriores.",
          "Se necesita siempre al menos un caso base para empezar a generar la sucesión.",
          "Ejemplo: a₁ = 2, aₙ = aₙ₋₁ + 3 genera: 2, 5, 8, 11, 14, …",
          "La recursividad es como una cadena: cada eslabón depende del anterior.",
          "No confundir recursiva con explícita: la recursiva necesita calcular paso a paso.",
          "En los exámenes, lee con cuidado la fórmula recursiva y los casos base; un error al inicio afecta todos los términos."
        ]
      },
      {
        level: "intermedio",
        title: "La sucesión de Fibonacci",
        lines: [
          "La sucesión de Fibonacci se define como: a₁ = 1, a₂ = 1, aₙ = aₙ₋₁ + aₙ₋₂ para n ≥ 3.",
          "Genera: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …",
          "Cada término (desde el tercero) es la suma de los dos términos anteriores.",
          "Aparece en la naturaleza: flores, conchas, espirales de galaxias, entre otros.",
          "La razón entre términos consecutivos se aproxima a φ = (1 + √5) / 2 ≈ 1.618 (razón áurea).",
          "En exámenes suelen pedir calcular un término específico o la cantidad de términos hasta cierto valor."
        ]
      },
      {
        level: "avanzado",
        title: "Resolución paso a paso",
        lines: [
          "Para resolver problemas recursivos, organiza los términos en una tabla: n, caso base, fórmula, resultado.",
          "Si la recursión es de segundo orden (depende de dos anteriores), necesitas dos casos base.",
          "Ejemplo: a₁ = 1, a₂ = 2, aₙ = 2aₙ₋₁ + aₙ₋₂ genera: 1, 2, 5, 12, 29, …",
          "Para hallar a₆: a₆ = 2·a₅ + a₄ = 2·29 + 12 = 70.",
          "En recursiones de orden superior, el patrón puede ser más complejo; resuelve término a término sin saltos.",
          "Algunas recursiones se pueden resolver con fórmula explícita si se reconoce la estructura lineal homogénea."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="22" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Sucesión Recursiva: Fibonacci</text>
        <circle cx="45" cy="90" r="18" fill="#2563eb"/>
        <text x="45" y="95" font-family="Arial" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">1</text>
        <circle cx="95" cy="90" r="18" fill="#2563eb"/>
        <text x="95" y="95" font-family="Arial" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">1</text>
        <circle cx="145" cy="90" r="18" fill="#8b5cf6"/>
        <text x="145" y="95" font-family="Arial" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">2</text>
        <circle cx="195" cy="90" r="18" fill="#8b5cf6"/>
        <text x="195" y="95" font-family="Arial" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">3</text>
        <circle cx="250" cy="90" r="18" fill="#dc2626"/>
        <text x="250" y="95" font-family="Arial" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">5</text>
        <path d="M 63 82 Q 70 55 87 82" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#arrG)"/>
        <path d="M 113 82 Q 120 55 137 82" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#arrG)"/>
        <path d="M 163 82 Q 170 55 187 82" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#arrG)"/>
        <path d="M 213 82 Q 230 55 242 82" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#arrG)"/>
        <defs><marker id="arrG" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a"/></marker></defs>
        <text x="45" y="125" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">a₁</text>
        <text x="95" y="125" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">a₂</text>
        <text x="145" y="125" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">a₃</text>
        <text x="195" y="125" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">a₄</text>
        <text x="250" y="125" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">a₅</text>
        <rect x="30" y="140" width="240" height="44" fill="#f0f9ff" rx="6" stroke="#2563eb" stroke-width="1"/>
        <text x="150" y="158" font-family="Arial" font-size="10" fill="#2563eb" text-anchor="middle">a₁=1, a₂=1, aₙ = aₙ₋₁ + aₙ₋₂</text>
        <text x="150" y="175" font-family="Arial" font-size="10" fill="#2563eb" text-anchor="middle">1+1=2, 1+2=3, 2+3=5</text>
      </svg>`
    ],
    exercises: [
      { id: 7, question: "Si a₁ = 3 y aₙ = aₙ₋₁ + 5, ¿cuánto vale a₆?", options: ["23", "28", "33", "38"], correctIndex: 1, explanation: "Generamos: a₁=3, a₂=8, a₃=13, a₄=18, a₅=23, a₆=28. Cada término suma 5 al anterior.", difficulty: "basico" },
      { id: 8, question: "En la sucesión de Fibonacci modificada: a₁ = 1, a₂ = 3, aₙ = aₙ₋₁ + aₙ₋₂, ¿cuánto vale a₆?", options: ["16", "18", "20", "24"], correctIndex: 1, explanation: "a₁=1, a₂=3, a₃=4, a₄=7, a₅=11, a₆=18.", difficulty: "intermedio" },
      { id: 9, question: "Si a₁ = 2, a₂ = 3 y aₙ = aₙ₋₁ · aₙ₋₂, ¿cuánto vale a₄?", options: ["6", "12", "18", "36"], correctIndex: 2, explanation: "a₁=2, a₂=3, a₃=a₂·a₁=3·2=6, a₄=a₃·a₂=6·3=18.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "sucesiones-recurrentes",
    tip: "Para relaciones de recurrencia, sustituye valores conocidos uno por uno; si la relación es lineal, busca el patrón o usa la ecuación característica.",
    theory: [
      {
        level: "basico",
        title: "Relaciones de recurrencia",
        lines: [
          "Una relación de recurrencia define un término de la sucesión en función de uno o varios anteriores.",
          "Es similar a la definición recursiva pero se enfoca en la ecuación que relaciona los términos.",
          "Ejemplo: aₙ₊₁ = 2aₙ + 1 con a₁ = 1 genera: 1, 3, 7, 15, 31, …",
          "Cada recurrencia necesita al menos un término conocido (condición inicial) para resolverse.",
          "La recurrencia puede ser lineal o no lineal, homogénea o no homogénea.",
          "En exámenes, lee bien la recurrencia: ¿depende de un término, dos o más? Eso cambia el método."
        ]
      },
      {
        level: "intermedio",
        title: "Calcular términos sucesivos",
        lines: [
          "Para hallar términos sucesivos, sustituye en la recurrencia empezando por el término conocido.",
          "Ejemplo: aₙ₊₁ = aₙ² − 2 con a₁ = 3: a₂ = 7, a₃ = 47, a₄ = 2207.",
          "Si la recurrencia involucra dos términos anteriores, necesitas dos condiciones iniciales.",
          "Organiza los cálculos en tabla para no perderse: n, aₙ, operación, resultado.",
          "Verifica tus resultados: sustituye el valor obtenido en la recurrencia para comprobar.",
          "Algunas recurrencias se resuelven identificando un patrón en los términos calculados."
        ]
      },
      {
        level: "avanzado",
        title: "Recurrencias lineales homogéneas",
        lines: [
          "Una recurrencia lineal homogénea de segundo orden tiene forma: aₙ₊₂ = p·aₙ₊₁ + q·aₙ.",
          "La ecuación característica es r² = p·r + q, o sea r² − p·r − q = 0.",
          "Si la ecuación tiene raíces r₁ ≠ r₂, la solución general es aₙ = A·r₁ⁿ + B·r₂ⁿ.",
          "Las constantes A y B se determinan con las condiciones iniciales a₁ y a₂.",
          "Si hay raíz doble r, la solución es aₙ = (A + Bn)·rⁿ.",
          "Ejemplo: Fibonacci (aₙ = aₙ₋₁ + aₙ₋₂) tiene raíces φ y −1/φ, lo que da la fórmula de Binet."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="22" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Relación de Recurrencia</text>
        <rect x="30" y="45" width="55" height="32" fill="#2563eb" rx="6"/>
        <text x="57" y="66" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">a₁ = 1</text>
        <rect x="100" y="45" width="75" height="32" fill="#8b5cf6" rx="6"/>
        <text x="137" y="66" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">a₂ = 2a₁+1</text>
        <rect x="190" y="45" width="75" height="32" fill="#dc2626" rx="6"/>
        <text x="227" y="66" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">a₃ = 2a₂+1</text>
        <rect x="100" y="100" width="75" height="32" fill="#f59e0b" rx="6"/>
        <text x="137" y="121" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">a₂ = 3</text>
        <rect x="190" y="100" width="75" height="32" fill="#16a34a" rx="6"/>
        <text x="227" y="121" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">a₃ = 7</text>
        <line x1="85" y1="61" x2="100" y2="61" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrS)"/>
        <line x1="175" y1="61" x2="190" y2="61" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrS)"/>
        <line x1="137" y1="77" x2="137" y2="100" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrS)"/>
        <line x1="227" y1="77" x2="227" y2="100" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrS)"/>
        <defs><marker id="arrS" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
        <rect x="30" y="150" width="240" height="35" fill="#fef3c7" rx="6" stroke="#f59e0b" stroke-width="1"/>
        <text x="150" y="172" font-family="Arial" font-size="11" fill="#92400e" text-anchor="middle">Secuencia: 1, 3, 7, 15, 31, …</text>
      </svg>`
    ],
    exercises: [
      { id: 10, question: "Si a₁ = 2 y aₙ₊₁ = 3aₙ − 1, ¿cuánto vale a₃?", options: ["8", "11", "14", "17"], correctIndex: 2, explanation: "a₂ = 3(2)−1 = 5, a₃ = 3(5)−1 = 14.", difficulty: "basico" },
      { id: 11, question: "Dada a₁ = 1, a₂ = 4 y aₙ₊₂ = aₙ₊₁ + aₙ, ¿cuánto vale a₆?", options: ["14", "18", "23", "29"], correctIndex: 2, explanation: "a₃ = 4+1 = 5, a₄ = 5+4 = 9, a₅ = 9+5 = 14, a₆ = 14+9 = 23.", difficulty: "intermedio" },
      { id: 12, question: "La sucesión satisface aₙ₊₂ = 2aₙ₊₁ + aₙ con a₁ = 1, a₂ = 3. ¿Cuánto vale a₅?", options: ["17", "25", "41", "53"], correctIndex: 2, explanation: "a₃ = 2(3)+1 = 7, a₄ = 2(7)+3 = 17, a₅ = 2(17)+7 = 41.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "patrones-numericos",
    tip: "Calcula las diferencias entre términos consecutivos; si son constantes es AP, si los cocientes son constantes es GP, si las diferencias varían prueba cuadráticas.",
    theory: [
      {
        level: "basico",
        title: "¿Qué son los patrones numéricos?",
        lines: [
          "Un patrón numérico es una regla que conecta los términos de una sucesión de forma sistemática.",
          "Reconocer patrones es clave en razonamiento matemático y aparece mucho en exámenes de admisión.",
          "Los patrones pueden ser aritméticos (suma constante), geométricos (multiplicación constante) u otros.",
          "Ejemplo: 1, 4, 9, 16, 25, … sigue el patrón de cuadrados perfectos: aₙ = n².",
          "Para descubrir un patrón, escribe los términos y busca relaciones entre su posición y su valor.",
          "Empieza siempre calculando diferencias y cocientes entre términos consecutivos como primera estrategia."
        ]
      },
      {
        level: "intermedio",
        title: "Cómo extraer la fórmula general",
        lines: [
          "Paso 1: Calcula las diferencias de primer orden: Δ₁ = aₙ₊₁ − aₙ.",
          "Paso 2: Si las diferencias de primer orden no son constantes, calcula las de segundo orden: Δ₂.",
          "Paso 3: Si las diferencias de segundo orden son constantes, la fórmula es cuadrática: aₙ = An² + Bn + C.",
          "Si las diferencias de primer orden son constantes, la fórmula es lineal: aₙ = An + B.",
          "Si los cocientes consecutivos son constantes, la fórmula es exponencial: aₙ = A · q^(n−1).",
          "Determina A, B, C sustituyendo valores conocidos y resolviendo el sistema de ecuaciones resultante."
        ]
      },
      {
        level: "avanzado",
        title: "Patrones complejos y polinómicos",
        lines: [
          "Si las diferencias de tercer orden son constantes, la fórmula es cúbica: aₙ = An³ + Bn² + Cn + D.",
          "Los patrones polinómicos de grado k se identifican cuando las diferencias de orden k son constantes.",
          "Algunos patrones combinan operaciones: aₙ = n² + 2n o aₙ = 2ⁿ + n.",
          "Ejemplo: 2, 5, 10, 17, 26, … tiene diferencias 3, 5, 7, 9 (segundo orden constante = 2).",
          "La fórmula es aₙ = n² + 1, verificando: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26. ✓",
          "En exámenes, si no identificas el patrón inmediatamente, prueba con cuadráticos: son los más comunes."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="22" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Patrón Numérico: aₙ = n² + 1</text>
        <line x1="40" y1="180" x2="280" y2="180" stroke="#94a3b8" stroke-width="1"/>
        <line x1="40" y1="180" x2="40" y2="30" stroke="#94a3b8" stroke-width="1"/>
        <circle cx="70" cy="148" r="5" fill="#2563eb"/>
        <circle cx="120" cy="116" r="5" fill="#8b5cf6"/>
        <circle cx="170" cy="68" r="5" fill="#dc2626"/>
        <circle cx="220" cy="30" r="5" fill="#f59e0b"/>
        <text x="70" y="165" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">n=1</text>
        <text x="120" y="165" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">n=2</text>
        <text x="170" y="165" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">n=3</text>
        <text x="220" y="165" font-family="Arial" font-size="9" fill="#666" text-anchor="middle">n=4</text>
        <text x="70" y="140" font-family="Arial" font-size="10" fill="#2563eb" text-anchor="middle" font-weight="bold">2</text>
        <text x="120" y="108" font-family="Arial" font-size="10" fill="#8b5cf6" text-anchor="middle" font-weight="bold">5</text>
        <text x="170" y="60" font-family="Arial" font-size="10" fill="#dc2626" text-anchor="middle" font-weight="bold">10</text>
        <text x="220" y="22" font-family="Arial" font-size="10" fill="#f59e0b" text-anchor="middle" font-weight="bold">17</text>
        <path d="M 70 148 L 120 116 L 170 68 L 220 30" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,3"/>
        <rect x="30" y="182" width="240" height="14" fill="none"/>
        <text x="60" y="20" font-family="Arial" font-size="9" fill="#2563eb" text-anchor="middle">Δ₁: 3, 5, 7</text>
        <text x="60" y="11" font-family="Arial" font-size="9" fill="#dc2626" text-anchor="middle">Δ₂: 2, 2 (constante)</text>
      </svg>`
    ],
    exercises: [
      { id: 13, question: "¿Qué patrón sigue la sucesión 3, 6, 11, 18, 27, …?", options: ["aₙ = n² + 2", "aₙ = 3n", "aₙ = n² − n + 3", "aₙ = 2n + 1"], correctIndex: 0, explanation: "Probando aₙ = n² + 2: 1²+2=3, 2²+2=6, 3²+2=11, 4²+2=18, 5²+2=27. ✓", difficulty: "basico" },
      { id: 14, question: "La sucesión 1, 3, 7, 13, 21, … tiene un patrón. ¿Cuál es la fórmula?", options: ["aₙ = n² − n + 1", "aₙ = 2n − 1", "aₙ = n² + 1", "aₙ = n² + n − 1"], correctIndex: 0, explanation: "Diferencias de 1er orden: 2, 4, 6, 8 (constante en 2do orden = 2). aₙ = n² − n + 1: 1−1+1=1, 4−2+1=3, 9−3+1=7, 16−4+1=13, 25−5+1=21. ✓", difficulty: "intermedio" },
      { id: 15, question: "Si las diferencias de primer orden de una sucesión son 4, 6, 8, 10, … y a₁ = 2, ¿cuál es a₆?", options: ["36", "40", "42", "48"], correctIndex: 2, explanation: "Δ₁: 4,6,8,10 → Δ₂: 2,2,2 (constante) → aₙ = n²+n. a₆ = 36+6 = 42.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "conjeturas-induccion",
    tip: "Para conjeturas, verifica al menos 3 casos; para demostrar por inducción, necesitas caso base + paso inductivo (asumir para k, probar para k+1).",
    theory: [
      {
        level: "basico",
        title: "Verificar con casos específicos",
        lines: [
          "Una conjetura es una afirmación que se propone basándose en la observación de patrones.",
          "Para formular una conjetura, verifica la propiedad con varios valores de n: n = 1, 2, 3, 4, …",
          "Si la propiedad se cumple para los primeros casos, tenemos evidencia (pero no prueba) de que es cierta.",
          "Ejemplo: Observamos que 1+3=4=2², 1+3+5=9=3², 1+3+5+7=16=4². Conjetura: la suma de n impares consecutivos es n².",
          "Nunca conjetures solo con un caso; usa al menos tres para tener confianza en el patrón.",
          "Una conjetura puede ser falsa aunque se cumpla para muchos casos (contraejemplos tardíos)."
        ]
      },
      {
        level: "intermedio",
        title: "Formular y expresar hipótesis",
        lines: [
          "Una hipótesis bien formulada usa notación matemática clara: 'Para todo n ∈ ℕ, P(n) es verdadero'.",
          "Expresa la conjetura en términos de n para que sea testeable y demostrable.",
          "Ejemplo: Si observamos 1=1, 1+2=3, 1+2+3=6, 1+2+3+4=10, conjeturamos: 1+2+…+n = n(n+1)/2.",
          "Verificar más casos fortalece la conjetura, pero la demostración completa requiere inducción.",
          "Al formular, busca la conexión entre el número de términos y el resultado; ahí está la fórmula.",
          "En exámenes, suelen pedir que identifiques la conjetura a partir de una tabla o patrón dado."
        ]
      },
      {
        level: "avanzado",
        title: "Demostración por inducción",
        lines: [
          "La inducción matemática tiene dos pasos: (1) Caso base: verificar P(1). (2) Paso inductivo: asumir P(k) y probar P(k+1).",
          "El caso base establece la verdad de la proposición para el primer valor (generalmente n=1).",
          "En el paso inductivo, asumimos que P(k) es verdadera (hipótesis inductiva) y usamos eso para probar P(k+1).",
          "Si ambos pasos se cumplen, entonces P(n) es verdadera para todo n ≥ 1 por el principio de inducción.",
          "Ejemplo: Probar 1+2+…+n = n(n+1)/2. Caso base: 1 = 1·2/2 = 1 ✓. Paso: si vale para k, para k+1: k(k+1)/2 + (k+1) = (k+1)(k+2)/2 ✓.",
          "La inducción es la herramienta más poderosa para demostrar propiedades de sucesiones y patrones."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="22" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Inducción Matemática</text>
        <rect x="30" y="40" width="100" height="30" fill="#16a34a" rx="6"/>
        <text x="80" y="60" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">Caso base: P(1) ✓</text>
        <line x1="80" y1="70" x2="80" y2="85" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrI)"/>
        <rect x="30" y="85" width="100" height="30" fill="#2563eb" rx="6"/>
        <text x="80" y="105" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">Asumir P(k) ✓</text>
        <line x1="80" y1="115" x2="80" y2="130" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrI)"/>
        <rect x="30" y="130" width="100" height="30" fill="#dc2626" rx="6"/>
        <text x="80" y="150" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">Probar P(k+1) ✓</text>
        <defs><marker id="arrI" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
        <line x1="130" y1="145" x2="155" y2="145" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrI)"/>
        <rect x="155" y="130" width="120" height="30" fill="#f59e0b" rx="6"/>
        <text x="215" y="150" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">P(n) ∀n ≥ 1</text>
        <text x="150" y="185" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">P(k) → P(k+1) por lógica deductiva</text>
        <circle cx="155" cy="145" r="8" fill="#f59e0b" stroke="#fff" stroke-width="2"/>
        <text x="155" y="149" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle">∴</text>
      </svg>`
    ],
    exercises: [
      { id: 16, question: "Observamos: 1=1, 1+2=3, 1+2+3=6, 1+2+3+4=10. ¿Cuál es la conjetura?", options: ["n²", "n(n+1)/2", "n(n−1)/2", "2ⁿ − 1"], correctIndex: 1, explanation: "Para n=1: 1(2)/2=1 ✓. Para n=2: 2(3)/2=3 ✓. Para n=3: 3(4)/2=6 ✓. Para n=4: 4(5)/2=10 ✓.", difficulty: "basico" },
      { id: 17, question: "Si conjeturamos que 2+4+6+…+2n = n² + n, ¿cuánto vale la suma de los primeros 8 pares?", options: ["64", "72", "80", "88"], correctIndex: 1, explanation: "Sustituyendo n=8: 8² + 8 = 64 + 8 = 72. Verificando: 2+4+6+8+10+12+14+16 = 72. ✓", difficulty: "intermedio" },
      { id: 18, question: "En una demostración por inducción, si P(k) afirma que 3 divide a k³ − k, ¿qué debemos probar en el paso inductivo?", options: ["3 divide a (k+1)³ − (k+1)", "3 divide a k³ − k + 3", "3 divide a k³ + k", "3 divide a (k+1)³ + k"], correctIndex: 0, explanation: "En el paso inductivo debemos probar P(k+1): 3 divide a (k+1)³ − (k+1). Esto se hace usando que 3 | (k³−k) por hipótesis.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "secuencias-dos-variables",
    tip: "Cuando cada término depende de dos anteriores, identifica si son independientes o acopladas; calcula término a término sin intentar fórmulas cerradas.",
    theory: [
      {
        level: "basico",
        title: "Sucesiones con dos variables",
        lines: [
          "Una sucesión de dos variables involucra dos sucesiones que se definen mutuamente o de forma simultánea.",
          "Cada término puede depender de los dos términos anteriores de una misma sucesión o de dos sucesiones distintas.",
          "Ejemplo: aₙ₊₁ = bₙ + 1 y bₙ₊₁ = aₙ − 1, con a₁ = 5, b₁ = 3.",
          "Se calculan los términos en orden: primero a₂, luego b₂, después a₃, y así sucesivamente.",
          "Las sucesiones de dos variables aparecen en problemas de movimiento, poblaciones y sistemas dinámicos.",
          "La clave es organizar los cálculos en una tabla para no mezclar los valores."
        ]
      },
      {
        level: "intermedio",
        title: "Ejemplo resuelto paso a paso",
        lines: [
          "Definición: a₁ = 2, b₁ = 1, aₙ₊₁ = aₙ + bₙ, bₙ₊₁ = aₙ · bₙ.",
          "n=1: a₂ = a₁ + b₁ = 2 + 1 = 3, b₂ = a₁ · b₁ = 2 · 1 = 2.",
          "n=2: a₃ = a₂ + b₂ = 3 + 2 = 5, b₃ = a₂ · b₂ = 3 · 2 = 6.",
          "n=3: a₄ = a₃ + b₃ = 5 + 6 = 11, b₄ = a₃ · b₃ = 5 · 6 = 30.",
          "La sucesión aₙ crece más lento que bₙ porque la suma es menor que el producto en general.",
          "En exámenes, pregunta cuántos pasos necesitas; no intentes deducir una fórmula si no es evidente."
        ]
      },
      {
        level: "avanzado",
        title: "Sistemas y patrones en dos variables",
        lines: [
          "Algunos sistemas de dos variables generan patrones identificables tras varios términos.",
          "Ejemplo: Si aₙ₊₁ = bₙ − aₙ y bₙ₊₁ = aₙ + bₙ, las sucesiones pueden tener período.",
          "Para detectar períodos, calcula suficientes términos y observa si los pares (aₙ, bₙ) se repiten.",
          "Si el sistema es lineal, se puede usar álgebra matricial: vector [aₙ, bₙ]ᵀ = M · [aₙ₋₁, bₙ₋₁]ᵀ.",
          "Los autovalores de la matriz M determinan el comportamiento: crecimiento, decrecimiento o oscilación.",
          "En exámenes avanzados, reconoce si el sistema es lineal y busca la matriz de transición."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="22" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Secuencias de Dos Variables</text>
        <circle cx="70" cy="70" r="22" fill="#2563eb"/>
        <text x="70" y="67" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">a₁</text>
        <text x="70" y="80" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">= 2</text>
        <circle cx="70" cy="140" r="22" fill="#dc2626"/>
        <text x="70" y="137" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">b₁</text>
        <text x="70" y="150" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">= 1</text>
        <circle cx="160" cy="70" r="22" fill="#8b5cf6"/>
        <text x="160" y="67" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">a₂</text>
        <text x="160" y="80" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">= 3</text>
        <circle cx="160" cy="140" r="22" fill="#f59e0b"/>
        <text x="160" y="137" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">b₂</text>
        <text x="160" y="150" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">= 2</text>
        <circle cx="250" cy="70" r="22" fill="#16a34a"/>
        <text x="250" y="67" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">a₃</text>
        <text x="250" y="80" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">= 5</text>
        <circle cx="250" cy="140" r="22" fill="#94a3b8"/>
        <text x="250" y="137" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">b₃</text>
        <text x="250" y="150" font-family="Arial" font-size="10" fill="#fff" text-anchor="middle" font-weight="bold">= 6</text>
        <path d="M 92 70 L 138 70" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arr2V)"/>
        <path d="M 92 140 L 138 140" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#arr2V)"/>
        <path d="M 182 70 L 228 70" fill="none" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arr2V)"/>
        <path d="M 182 140 L 228 140" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr2V)"/>
        <path d="M 85 92 Q 100 120 85 118" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,2"/>
        <path d="M 175 92 Q 190 120 175 118" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,2"/>
        <defs><marker id="arr2V" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
        <text x="150" y="185" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">aₙ₊₁ = aₙ + bₙ   |   bₙ₊₁ = aₙ · bₙ</text>
      </svg>`
    ],
    exercises: [
      { id: 19, question: "Si a₁ = 1, b₁ = 2, aₙ₊₁ = aₙ + bₙ y bₙ₊₁ = aₙ − bₙ, ¿cuánto vale a₃?", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "a₂ = 1 + 2 = 3, b₂ = 1 − 2 = −1. a₃ = a₂ + b₂ = 3 + (−1) = 2.", difficulty: "basico" },
      { id: 20, question: "Con a₁ = 3, b₁ = 1, aₙ₊₁ = 2aₙ − bₙ y bₙ₊₁ = aₙ + bₙ, ¿cuánto vale b₄?", options: ["13", "15", "17", "19"], correctIndex: 1, explanation: "a₂ = 2(3)−1 = 5, b₂ = 3+1 = 4. a₃ = 2(5)−4 = 6, b₃ = 5+4 = 9. a₄ = 2(6)−9 = 3, b₄ = 6+9 = 15.", difficulty: "intermedio" },
      { id: 21, question: "Si x₁ = 1, y₁ = 2, xₙ₊₁ = xₙ·yₙ y yₙ₊₁ = xₙ + yₙ, ¿cuánto vale x₃ + y₃?", options: ["9", "11", "13", "15"], correctIndex: 1, explanation: "x₂ = 1·2 = 2, y₂ = 1+2 = 3. x₃ = 2·3 = 6, y₃ = 2+3 = 5. x₃+y₃ = 6+5 = 11.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "progresiones-avanzadas",
    tip: "Si las diferencias no son constantes, calcula diferencias de segundo o tercer orden; las diferencias parciales revelan el grado del polinomio que genera la sucesión.",
    theory: [
      {
        level: "basico",
        title: "Mezclas de progresiones",
        lines: [
          "Una sucesión puede combinar comportamiento aritmético y geométrico en sus términos.",
          "Ejemplo: 1, 3, 7, 15, 31, … parece crecer rápido (geométrico) pero las diferencias son 2, 4, 8, 16.",
          "Identificar si hay mezcla ayuda a encontrar la fórmula correcta: aₙ = 2ⁿ − 1 en este caso.",
          "Otra mezcla común: aₙ = n · 2ⁿ (término lineal multiplicado por exponencial).",
          "La suma de una AP y una GP también genera una sucesión mixta con comportamiento especial.",
          "En exámenes, si no encaja en AP ni GP pura, sospecha de una mezcla o combinación."
        ]
      },
      {
        level: "intermedio",
        title: "Método de diferencias parciales",
        lines: [
          "El método de diferencias consiste en calcular sucesivamente las diferencias entre términos consecutivos.",
          "Diferencias de 1er orden: Δ₁ = aₙ₊₁ − aₙ. Si son constantes → AP (grado 1).",
          "Diferencias de 2do orden: Δ₂ = Δ₁(n+1) − Δ₁(n). Si son constantes → cuadrática (grado 2).",
          "Diferencias de 3er orden constantes → cúbica (grado 3), y así sucesivamente.",
          "Ejemplo: 2, 4, 8, 14, 22 → Δ₁: 2, 4, 6, 8 → Δ₂: 2, 2, 2 (constante) → grado 2.",
          "La fórmula será aₙ = An² + Bn + C; determina A, B, C con tres puntos conocidos."
        ]
      },
      {
        level: "avanzado",
        title: "Sucesiones polinómicas de grado superior",
        lines: [
          "Si las diferencias de grado k son constantes, la fórmula es un polinomio de grado k en n.",
          "Una fórmula práctica: aₙ = Σᵢ₌₀ᵏ (Δⁱ(0)/i!) · C(n,i), donde C(n,i) = n!/(i!(n−i)!).",
          "Δⁱ(0) es la primera diferencia de orden i, y C(n,i) es el coeficiente binomial.",
          "Ejemplo: Si Δ₀=1, Δ₁=2, Δ₂=2, entonces aₙ = 1·C(n,0) + 2·C(n,1) + 2·C(n,2) = n² + 1.",
          "El método de diferencias funciona porque el operador Δ actúa como derivada discreta sobre polinomios.",
          "En competencias, domina este método para resolver cualquier sucesión polinómica sin necesidad de sistemas de ecuaciones."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="22" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Diferencias Parciales</text>
        <rect x="20" y="40" width="260" height="25" fill="#2563eb" rx="4"/>
        <text x="150" y="57" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">aₙ:    2       4       8      14      22</text>
        <rect x="20" y="72" width="260" height="25" fill="#8b5cf6" rx="4"/>
        <text x="150" y="89" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">Δ₁:       2       4       6       8</text>
        <rect x="20" y="104" width="260" height="25" fill="#dc2626" rx="4"/>
        <text x="150" y="121" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">Δ₂:          2       2       2</text>
        <rect x="20" y="136" width="260" height="25" fill="#16a34a" rx="4"/>
        <text x="150" y="153" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle" font-weight="bold">Δ₃:             0       0</text>
        <text x="150" y="182" font-family="Arial" font-size="11" fill="#f59e0b" text-anchor="middle" font-weight="bold">Δ₂ = constante → polinomio de grado 2</text>
        <text x="150" y="196" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">Polinomio de grado 2 → 2, 4, 8, 14, 22</text>
      </svg>`
    ],
    exercises: [
      { id: 22, question: "La sucesión 1, 4, 9, 16, 25 tiene diferencias de 2do orden constantes. ¿Cuánto vale a₁₀?", options: ["50", "81", "100", "121"], correctIndex: 2, explanation: "La fórmula es aₙ = n². Entonces a₁₀ = 10² = 100.", difficulty: "basico" },
      { id: 23, question: "Si las diferencias de 1er orden de una sucesión son 3, 5, 7, 9 y a₁ = 1, ¿cuál es a₅?", options: ["19", "22", "25", "28"], correctIndex: 2, explanation: "Δ₁: 3,5,7,9 → Δ₂: 2,2,2 (constante). a₁=1, a₂=4, a₃=9, a₄=16, a₅=25. La fórmula es aₙ = n².", difficulty: "intermedio" },
      { id: 24, question: "Una sucesión tiene Δ₁ = 4, 7, 10, 13 y Δ₂ = 3, 3, 3 (constante). Si a₁ = 2, ¿cuánto vale a₇?", options: ["62", "68", "71", "78"], correctIndex: 2, explanation: "a₂=2+4=6, a₃=6+7=13, a₄=13+10=23, a₅=23+13=36, a₆=36+16=52, a₇=52+19=71.", difficulty: "avanzado" }
    ]
  }
];
