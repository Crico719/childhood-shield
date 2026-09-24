[
  {
    slug: "linea-recta-y-angulos",
    tip: "Para identificar ángulos complementarios, recuerda que suman 90°; los suplementarios suman 180°. En el examen, verifica siempre si el problema implica ángulos adyacentes, verticales o alternos internos antes de resolver.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **línea recta** es una sucesión infinita de puntos que se extiende en ambas direcciones sin curvatura.",
          "Un **segmento de recta** es la porción de una recta comprendida entre dos puntos llamados extremos.",
          "Una **semirrecta** (o rayo) parte de un punto y se extiende indefinidamente en una dirección.",
          "Un **ángulo** es la figura formada por dos semirrectas que comparten un mismo vértice.",
          "Las semirrectas que forman el ángulo se llaman **lados** del ángulo, y el punto común es el **vértice**.",
          "Los ángulos se clasifican por su medida: **agudo** (< 90°), **recto** (= 90°), **obtuso** (90° < α < 180°), **llano** (= 180°) y **cónico** (> 180°)."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "La **suma de ángulos en un punto** alrededor de un vértice es siempre 360°.",
          "Dos ángulos son **complementarios** si su suma es 90°, y **suplementarios** si su suma es 180°.",
          "Los **ángulos opuestos por el vértice** son iguales: si α y β son opuestos por el vértice, entonces α = β.",
          "Los **ángulos adyacentes** comparten vértice y un lado, y no se superponen. Sus medidas suman el ángulo mayor.",
          "Cuando dos rectas se cortan, los **ángulos alternos internos** son iguales, los **alternos externos** son iguales, y los **correspondientes** son iguales.",
          "La fórmula para el ángulo entre dos rectas con pendientes m₁ y m₂ es: **tan(θ) = |(m₂ − m₁) / (1 + m₁·m₂)|**."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "El **teorema del ángulo externo** establece que el ángulo externo de un triángulo es igual a la suma de los dos ángulos internos no adyacentes.",
          "El **teorema de los ángulos formados por una transversal** con dos rectas paralelas: la suma de los ángulos internos del mismo lado es 180°.",
          "El ángulo formado por dos rectas que se cortan puede expresarse como: **θ = arctan(|(m₂ − m₁)/(1 + m₁m₂)|)**, siempre que 1 + m₁m₂ ≠ 0.",
          "Si las dos rectas son **perpendiculares**, el producto de sus pendientes es −1: **m₁ · m₂ = −1**.",
          "En la **geometría analítica**, el ángulo que forma una recta con el eje positivo de x se calcula como **θ = arctan(m)**, donde m es la pendiente.",
          "Truco de examen: cuando no se conocen las pendientes, usa vectores directores **v₁** y **v₂** y aplica **cos(θ) = (v₁ · v₂) / (|v₁| · |v₂|)**."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <line x1="20" y1="160" x2="280" y2="160" stroke="#2563eb" stroke-width="2"/>
        <line x1="20" y1="160" x2="200" y2="50" stroke="#dc2626" stroke-width="2"/>
        <line x1="20" y1="160" x2="280" y2="160" stroke="#dc2626" stroke-width="2"/>
        <path d="M 55 160 A 35 35 0 0 0 42 137" fill="none" stroke="#059669" stroke-width="2"/>
        <circle cx="20" cy="160" r="4" fill="#7c3aed"/>
        <text x="15" y="180" font-family="Arial" font-size="11" fill="#333">V</text>
        <text x="282" y="175" font-family="Arial" font-size="11" fill="#2563eb">L₁</text>
        <text x="200" y="42" font-family="Arial" font-size="11" fill="#dc2626">L₂</text>
        <text x="50" y="145" font-family="Arial" font-size="12" fill="#059669" font-weight="bold">α</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Ángulo entre dos rectas</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <line x1="30" y1="100" x2="270" y2="100" stroke="#2563eb" stroke-width="2"/>
        <line x1="150" y1="20" x2="150" y2="180" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,3"/>
        <line x1="150" y1="100" x2="250" y2="40" stroke="#dc2626" stroke-width="2"/>
        <line x1="150" y1="100" x2="250" y2="160" stroke="#059669" stroke-width="2"/>
        <path d="M 185 100 A 35 35 0 0 0 175 75" fill="none" stroke="#dc2626" stroke-width="2"/>
        <path d="M 185 100 A 35 35 0 0 1 175 125" fill="none" stroke="#059669" stroke-width="2"/>
        <circle cx="150" cy="100" r="4" fill="#7c3aed"/>
        <text x="145" y="115" font-family="Arial" font-size="10" fill="#7c3aed">V</text>
        <text x="165" y="78" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">α₁</text>
        <text x="165" y="133" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">α₂</text>
        <text x="100" y="90" font-family="Arial" font-size="10" fill="#333" font-style="italic">α₁ = α₂</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Ángulos opuestos por el vértice</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuánto mide el ángulo complementario de 35°?",
        options: ["145°", "55°", "125°", "65°"],
        correctIndex: 1,
        explanation: "Los ángulos complementarios suman 90°. Entonces: 90° − 35° = 55°.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Dos rectas se cortan y forman un ángulo de 70°. ¿Cuánto miden los ángulos opuestos por el vértice?",
        options: ["70° y 110°", "70° y 70°", "110° y 110°", "35° y 145°"],
        correctIndex: 1,
        explanation: "Los ángulos opuestos por el vértice son iguales. Si uno mide 70°, su opuesto también mide 70°.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "La recta r tiene pendiente m₁ = 2 y la recta s tiene pendiente m₂ = −1/2. ¿Cuál es el ángulo entre ambas rectas?",
        options: ["45°", "60°", "90°", "30°"],
        correctIndex: 2,
        explanation: "Si m₁ · m₂ = 2 × (−1/2) = −1, las rectas son perpendiculares, por lo que el ángulo entre ellas es 90°.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "triangulos",
    tip: "En todo triángulo, la suma de sus ángulos internos siempre es 180°. Usa esta propiedad para encontrar ángulos faltantes rápidamente. En el examen, identifica primero el tipo de triángulo antes de aplicar fórmulas específicas.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **triángulo** es un polígono formado por tres segmentos de recta (lados) que se encuentran en tres vértices.",
          "Los **ángulos internos** de cualquier triángulo suman siempre **180°**.",
          "Los triángulos se clasifican por sus ángulos: **acutángulo** (todos agudos), **rectángulo** (un ángulo recto) y **obtusángulo** (un ángulo obtuso).",
          "Por sus lados: **equilátero** (3 lados iguales), **isósceles** (2 lados iguales) y **escalenos** (3 lados diferentes).",
          "La **altura** de un triángulo es el segmento perpendicular desde un vértice al lado opuesto (o su prolongación).",
          "El **perímetro** de un triángulo es la suma de la longitud de sus tres lados: **P = a + b + c**."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "El **área** de un triángulo se calcula como: **A = (b × h) / 2**, donde b es la base y h es la altura correspondiente.",
          "La **fórmula de Herón** permite calcular el área conociendo los tres lados: **A = √[s(s−a)(s−b)(s−c)]**, donde s = (a+b+c)/2 es el semiperímetro.",
          "El **teorema del seno** establece: **a/sen(A) = b/sen(B) = c/sen(C) = 2R**, donde R es el radio de la circunferencia circunscrita.",
          "El **teorema del coseno** relaciona lados y ángulos: **c² = a² + b² − 2ab·cos(C)**.",
          "En un triángulo isósceles, los ángulos opuestos a los lados iguales son iguales entre sí.",
          "La **bisectriz** de un ángulo divide al ángulo en dos partes iguales y al lado opuesto en proporción a los lados adyacentes."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "El **teorema de la bisectriz** interna: si AD biseca ∠BAC, entonces **BD/DC = AB/AC**.",
          "El **teorema de la mediana**: la mediana divide al triángulo en dos triángulos de igual área.",
          "La **desigualdad triangular** establece que la suma de cualesquiera dos lados es siempre mayor que el tercero: **a + b > c**.",
          "El **área máxima** de un triángulo con dos lados dados a y b ocurre cuando el ángulo entre ellos es 90°: **A_max = (a × b) / 2**.",
          "En un triángulo rectángulo, el **cateto** es igual a la hipotenusa por el seno del ángulo opuesto, y por el coseno del ángulo adyacente.",
          "Truco de examen: en un triángulo con ángulos de 30°-60°-90°, los lados están en proporción **1 : √3 : 2**; en uno de 45°-45°-90°, la proporción es **1 : 1 : √2**."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,30 50,170 250,170" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="150" y1="30" x2="150" y2="170" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
        <path d="M 145 170 L 150 165 L 155 170" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <circle cx="150" cy="170" r="3" fill="#dc2626"/>
        <circle cx="150" cy="30" r="3" fill="#7c3aed"/>
        <circle cx="50" cy="170" r="3" fill="#059669"/>
        <circle cx="250" cy="170" r="3" fill="#059669"/>
        <text x="148" y="20" font-family="Arial" font-size="11" fill="#7c3aed" font-weight="bold">A</text>
        <text x="30" y="182" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">B</text>
        <text x="255" y="182" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">C</text>
        <text x="155" y="100" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">h</text>
        <text x="140" y="188" font-family="Arial" font-size="10" fill="#dc2626">90°</text>
        <text x="100" y="185" font-family="Arial" font-size="10" fill="#333">b</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Altura de un triángulo</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,30 50,170 250,170" fill="#dbeafe" fill-opacity="0.5" stroke="#2563eb" stroke-width="2"/>
        <text x="145" y="20" font-family="Arial" font-size="11" fill="#7c3aed" font-weight="bold">A</text>
        <text x="30" y="182" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">B</text>
        <text x="255" y="182" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">C</text>
        <text x="130" y="190" font-family="Arial" font-size="10" fill="#2563eb">a</text>
        <text x="195" y="88" font-family="Arial" font-size="10" fill="#2563eb">b</text>
        <text x="82" y="88" font-family="Arial" font-size="10" fill="#2563eb">c</text>
        <text x="55" y="150" font-family="Arial" font-size="10" fill="#dc2626">α</text>
        <text x="225" y="150" font-family="Arial" font-size="10" fill="#dc2626">β</text>
        <text x="143" y="50" font-family="Arial" font-size="10" fill="#dc2626">γ</text>
        <text x="85" y="115" font-family="Arial" font-size="12" fill="#333" font-weight="bold">α + β + γ = 180°</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Suma de ángulos internos</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuál es el área de un triángulo con base 10 cm y altura 6 cm?",
        options: ["60 cm²", "30 cm²", "16 cm²", "15 cm²"],
        correctIndex: 1,
        explanation: "El área se calcula como A = (b × h) / 2 = (10 × 6) / 2 = 30 cm².",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un triángulo tiene lados de 5, 12 y 13. ¿Qué tipo de triángulo es?",
        options: ["Equilátero", "Isósceles rectángulo", "Escaleno rectángulo", "Escaleno acutángulo"],
        correctIndex: 2,
        explanation: "Verificamos: 5² + 12² = 25 + 144 = 169 = 13². Por el teorema de Pitágoras inverso, es un triángulo rectángulo. Los tres lados son diferentes, por lo tanto es escaleno rectángulo.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "En un triángulo, los lados miden a = 7, b = 10 y el ángulo entre ellos es C = 60°. ¿Cuál es la longitud del lado c?",
        options: ["√129", "√89", "√109", "√79"],
        correctIndex: 3,
        explanation: "Aplicando el teorema del coseno: c² = a² + b² − 2ab·cos(C) = 49 + 100 − 2(7)(10)cos(60°) = 149 − 140(0.5) = 149 − 70 = 79. Entonces c = √79.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "poligonos",
    tip: "La fórmula general para la suma de ángulos internos de un polígono de n lados es (n−2)×180°. Memoriza esta fórmula y úsala para resolver rápidamente cualquier problema sobre ángulos de polígonos regulares en el examen.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **polígono** es una figura plana cerrada formada por segmentos de recta (lados) que se unen en vértices.",
          "Un polígono es **regular** si todos sus lados son iguales y todos sus ángulos internos son iguales.",
          "Un polígono es **irregular** si sus lados o ángulos no son todos iguales.",
          "Los polígonos se clasifican por el número de lados: **triángulo** (3), **cuadrilátero** (4), **pentágono** (5), **hexágono** (6), etc.",
          "Un polígono es **convexo** si todos sus ángulos internos son menores que 180°, y **cóncavo** si al menos uno es mayor.",
          "El **perímetro** de un polígono es la suma de las longitudes de todos sus lados."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "La **suma de los ángulos internos** de un polígono de n lados es: **S = (n − 2) × 180°**.",
          "Cada **ángulo interno** de un polígono regular de n lados mide: **α = (n − 2) × 180° / n**.",
          "La **suma de los ángulos externos** de cualquier polígono (convexo) es siempre **360°**.",
          "Cada **ángulo externo** de un polígono regular de n lados mide: **β = 360° / n**.",
          "Un polígono de n lados tiene **n(n − 3)/2 diagonales**.",
          "El **número de diagonales** que parten de un solo vértice es **n − 3**."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "Un polígono regular de n lados se puede dividir en **n − 2 triángulos** trazando diagonales desde un mismo vértice.",
          "El **área** de un polígono regular de n lados con lado a es: **A = (n × a²) / (4 × tan(π/n))**.",
          "El **radio de la circunferencia circunscrita** a un polígono regular de n lados y lado a es: **R = a / (2 × sen(π/n))**.",
          "El **radio de la incircle** (circunferencia inscrita) es: **r = a / (2 × tan(π/n))**.",
          "El **apotema** de un polígono regular de n lados y lado a es: **a_p = a / (2 × tan(π/n))**.",
          "Truco de examen: si conoces el número de diagonales, puedes hallar n resolviendo **d = n(n−3)/2**, es decir **n² − 3n − 2d = 0**."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,30 80,70 55,140 110,185 190,185 245,140 220,70" fill="#dbeafe" fill-opacity="0.4" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="150" cy="120" r="4" fill="#dc2626"/>
        <line x1="150" y1="30" x2="150" y2="120" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="80" y1="70" x2="150" y2="120" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="130" y="118" font-family="Arial" font-size="10" fill="#dc2626">O</text>
        <text x="145" y="22" font-family="Arial" font-size="10" fill="#333">A</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Heptágono regular (n=7)</text>
        <text x="50" y="198" font-family="Arial" font-size="10" fill="#2563eb">Suma de ángulos internos = (7−2)×180° = 900°</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="100,30 30,100 60,180 180,180 210,100" fill="#dbeafe" fill-opacity="0.4" stroke="#2563eb" stroke-width="2"/>
        <line x1="100" y1="30" x2="60" y2="180" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
        <line x1="100" y1="30" x2="180" y2="180" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
        <line x1="30" y1="100" x2="210" y2="100" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
        <text x="95" y="22" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="10" y="100" font-family="Arial" font-size="10" fill="#333">B</text>
        <text x="45" y="192" font-family="Arial" font-size="10" fill="#333">C</text>
        <text x="175" y="192" font-family="Arial" font-size="10" fill="#333">D</text>
        <text x="215" y="100" font-family="Arial" font-size="10" fill="#333">E</text>
        <text x="70" y="110" font-family="Arial" font-size="10" fill="#7c3aed">5 diagonales</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Diagonales de un pentágono</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuánto mide cada ángulo interno de un hexágono regular?",
        options: ["120°", "108°", "135°", "140°"],
        correctIndex: 0,
        explanation: "Cada ángulo interno de un polígono regular de n lados mide (n−2)×180°/n. Para n=6: (6−2)×180°/6 = 720°/6 = 120°.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "¿Cuántos diagonales tiene un decágono (10 lados)?",
        options: ["35", "45", "25", "40"],
        correctIndex: 0,
        explanation: "El número de diagonales es n(n−3)/2. Para n=10: 10(10−3)/2 = 10×7/2 = 35 diagonales.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Un polígono regular tiene cada ángulo interno midiendo 156°. ¿Cuántos lados tiene?",
        options: ["20", "15", "24", "18"],
        correctIndex: 1,
        explanation: "Si cada ángulo mide 156°, entonces (n−2)×180°/n = 156°. Despejando: (n−2)×180 = 156n → 180n − 360 = 156n → 24n = 360 → n = 15.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "cuadrilateros",
    tip: "Memoriza las propiedades específicas de cada cuadrilátero: el paralelogramo tiene lados opuestos paralelos e iguales, el rectángulo añade ángulos de 90°, el rombo añade lados iguales, y el cuadrado combina ambas propiedades. En el examen, identifica primero el tipo de cuadrilátero.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **cuadrilátero** es un polígono con 4 lados y 4 vértices. La suma de sus ángulos internos es **360°**.",
          "Un **paralelogramo** es un cuadrilátero con ambos pares de lados opuestos paralelos.",
          "Un **rectángulo** es un paralelogramo con los cuatro ángulos internos iguales a 90°.",
          "Un **rombo** es un paralelogramo con los cuatro lados de igual longitud.",
          "Un **cuadrado** es un rectángulo que también es rombo: tiene 4 lados iguales y 4 ángulos rectos.",
          "Un **trapecio** es un cuadrilátero con al menos un par de lados opuestos paralelos (llamados **bases**)."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "El **área** de un paralelogramo es: **A = b × h**, donde b es la base y h es la altura perpendicular.",
          "El **área** de un trapecio es: **A = (b₁ + b₂) × h / 2**, donde b₁ y b₂ son las bases y h la altura.",
          "En un rectángulo, la **diagonal** se calcula con Pitágoras: **d = √(a² + b²)**.",
          "Las **diagonales** de un paralelogramo se bisecan mutuamente (se cortan en sus puntos medios).",
          "Las **diagonales** de un rectángulo son iguales entre sí.",
          "Las **diagonales** de un rombo son perpendiculares entre sí y bisecan los ángulos."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "El **área** de un rombo puede calcularse con sus diagonales: **A = (d₁ × d₂) / 2**.",
          "Un **cuadrilátero cíclico** (inscrito en una circunferencia) tiene ángulos opuestos suplementarios: **∠A + ∠C = 180°**.",
          "El **teorema de Brahmagupta** da el área de un cuadrilátero cíclico con lados a, b, c, d: **A = √[(s−a)(s−b)(s−c)(s−d)]**, donde s es el semiperímetro.",
          "El **área** de cualquier cuadrilátero conyugado (con diagonales d₁, d₂ y ángulo θ entre ellas) es: **A = (d₁ × d₂ × sen(θ)) / 2**.",
          "El **teorema de Varignon** dice que los puntos medios de los lados de cualquier cuadrilátero forman un paralelogramo.",
          "Truco de examen: si un cuadrilátero tiene diagonales perpendiculares, su área es siempre **(d₁ × d₂) / 2**, sin importar la forma."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <rect x="60" y="40" width="180" height="120" fill="#dbeafe" fill-opacity="0.4" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="60" y1="40" x2="240" y2="160" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
        <line x1="240" y1="40" x2="60" y2="160" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
        <text x="52" y="35" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="242" y="35" font-family="Arial" font-size="10" fill="#333" font-weight="bold">B</text>
        <text x="242" y="172" font-family="Arial" font-size="10" fill="#333" font-weight="bold">C</text>
        <text x="52" y="172" font-family="Arial" font-size="10" fill="#333" font-weight="bold">D</text>
        <text x="130" y="85" font-family="Arial" font-size="10" fill="#dc2626">d₁</text>
        <text x="165" y="100" font-family="Arial" font-size="10" fill="#dc2626">d₂</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Rectángulo con diagonales</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="80,50 220,50 260,150 40,150" fill="#dbeafe" fill-opacity="0.4" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="150" y1="50" x2="150" y2="150" stroke="#059669" stroke-width="2"/>
        <path d="M 145 150 L 150 145 L 155 150" fill="none" stroke="#059669" stroke-width="1.5"/>
        <text x="75" y="42" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="222" y="42" font-family="Arial" font-size="10" fill="#333" font-weight="bold">B</text>
        <text x="262" y="158" font-family="Arial" font-size="10" fill="#333" font-weight="bold">C</text>
        <text x="30" y="158" font-family="Arial" font-size="10" fill="#333" font-weight="bold">D</text>
        <text x="92" y="42" font-family="Arial" font-size="10" fill="#2563eb">b₁</text>
        <text x="130" y="162" font-family="Arial" font-size="10" fill="#2563eb">b₂</text>
        <text x="155" y="105" font-family="Arial" font-size="10" fill="#059669" font-weight="bold">h</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Trapecio</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuál es el área de un rectángulo con largo 12 cm y ancho 5 cm?",
        options: ["34 cm²", "60 cm²", "17 cm²", "48 cm²"],
        correctIndex: 1,
        explanation: "El área de un rectángulo es A = largo × ancho = 12 × 5 = 60 cm².",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un trapecio tiene bases de 8 cm y 14 cm, y una altura de 6 cm. ¿Cuál es su área?",
        options: ["66 cm²", "48 cm²", "84 cm²", "52 cm²"],
        correctIndex: 0,
        explanation: "El área del trapecio es A = (b₁ + b₂) × h / 2 = (8 + 14) × 6 / 2 = 22 × 6 / 2 = 66 cm².",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Las diagonales de un rombo miden 10 cm y 24 cm. ¿Cuál es su área y el lado del rombo?",
        options: ["A = 120 cm², lado = 13 cm", "A = 240 cm², lado = 13 cm", "A = 120 cm², lado = 26 cm", "A = 60 cm², lado = 12 cm"],
        correctIndex: 0,
        explanation: "El área del rombo es A = (d₁ × d₂)/2 = (10 × 24)/2 = 120 cm². El lado se obtiene con Pitágoras usando medias diagonales: lado = √(5² + 12²) = √(25 + 144) = √169 = 13 cm.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "circumferencia",
    tip: "Recuerda siempre las relaciones clave: C = 2πr, A = πr², y que el ángulo central es igual al arco que intercepta. Para problemas de sectores, usa A = (θ/360°)πr². En el examen, verifica si el problema pide longitud de arco (L = rθ en radianes) o área de sector.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **circunferencia** es el lugar geométrico de todos los puntos de un plano que están a una distancia fija (radio) de un punto fijo (centro).",
          "El **radio** (r) es el segmento que va del centro a cualquier punto de la circunferencia.",
          "El **diámetro** (d) es el segmento que pasa por el centro y une dos puntos opuestos: **d = 2r**.",
          "La **longitud** de la circunferencia (perímetro) es: **C = 2πr = πd**.",
          "Una **cuerda** es un segmento que une dos puntos de la circunferencia sin pasar por el centro.",
          "Un **arco** es una porción de la circunferencia comprendida entre dos puntos."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "El **área** del círculo es: **A = πr²**.",
          "La **longitud de un arco** con ángulo central θ (en grados) es: **L = (θ/360°) × 2πr**.",
          "El **área de un sector** circular es: **A_sector = (θ/360°) × πr²**.",
          "El **ángulo inscrito** es la mitad del ángulo central que subtiende el mismo arco: **α = θ/2**.",
          "Un **ángulo inscrito** que subtiende un diámetro es siempre **90°** (teorema de Tales).",
          "Un **segmento circular** es la región entre una cuerda y el arco que subtiende. Su área es: **A_segmento = A_sector − A_triángulo**."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "El **teorema de la cuerda-cuerda**: si dos cuerdas se cortan dentro de la circunferencia, **PA × PB = PC × PD** (donde P es el punto de intersección).",
          "El **teorema del tangente-secante**: si un segmento tangente y un segmento secante parten de un punto exterior, **PT² = PA × PB**.",
          "El **teorema del ángulo entre tangente y cuerda**: el ángulo formado por una tangente y una cuerda en el punto de contacto es igual al ángulo inscrito que subtiende la misma cuerda.",
          "El **área** de un sector con ángulo θ en radianes es: **A = (1/2)r²θ**. La longitud de arco es **L = rθ**.",
          "La **potencia de un punto** P con respecto a una circunferencia es **PO² − R²** (donde O es el centro y R el radio). Es positiva si P es exterior, negativa si es interior.",
          "Truco de examen: convierte siempre a radianes cuando uses fórmulas diferenciadas. **360° = 2π rad**, **180° = π rad**, **90° = π/2 rad**."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <circle cx="150" cy="110" r="70" fill="#dbeafe" fill-opacity="0.3" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="150" cy="110" r="3" fill="#dc2626"/>
        <line x1="150" y1="110" x2="220" y2="110" stroke="#dc2626" stroke-width="2"/>
        <line x1="150" y1="110" x2="150" y2="40" stroke="#059669" stroke-width="2"/>
        <path d="M 175 110 A 25 25 0 0 0 164 92" fill="none" stroke="#7c3aed" stroke-width="2"/>
        <line x1="150" y1="40" x2="220" y2="110" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="148" y="107" font-family="Arial" font-size="10" fill="#dc2626">O</text>
        <text x="185" y="103" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">r</text>
        <text x="155" y="80" font-family="Arial" font-size="10" fill="#059669" font-weight="bold">r</text>
        <text x="170" y="92" font-family="Arial" font-size="10" fill="#7c3aed">θ</text>
        <text x="185" y="75" font-family="Arial" font-size="10" fill="#2563eb">s (arco)</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Partes de la circunferencia</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <circle cx="150" cy="100" r="70" fill="none" stroke="#2563eb" stroke-width="2"/>
        <line x1="80" y1="100" x2="220" y2="100" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="100" r="3" fill="#dc2626"/>
        <circle cx="80" cy="100" r="3" fill="#333"/>
        <circle cx="220" cy="100" r="3" fill="#333"/>
        <text x="146" y="97" font-family="Arial" font-size="10" fill="#dc2626">O</text>
        <text x="68" y="95" font-family="Arial" font-size="10" fill="#333">A</text>
        <text x="222" y="95" font-family="Arial" font-size="10" fill="#333">B</text>
        <text x="130" y="115" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">d = 2r</text>
        <circle cx="150" cy="100" r="70" fill="#dc2626" fill-opacity="0.08"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Diámetro y radio</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuál es la circunferencia de un círculo con radio 7 cm? (Usa π ≈ 22/7)",
        options: ["22 cm", "44 cm", "154 cm", "49 cm"],
        correctIndex: 1,
        explanation: "C = 2πr = 2 × (22/7) × 7 = 2 × 22 = 44 cm.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un sector circular tiene un ángulo central de 120° y un radio de 9 cm. ¿Cuál es su área? (Usa π ≈ 3.14)",
        options: ["84.78 cm²", "169.56 cm²", "254.34 cm²", "28.26 cm²"],
        correctIndex: 0,
        explanation: "A_sector = (θ/360°) × πr² = (120/360) × 3.14 × 81 = (1/3) × 254.34 = 84.78 cm².",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Desde un punto exterior P, se traza un segmento tangente PT = 8 cm a una circunferencia, y un segmento secante que intersecta la circunferencia en A y B, con PA = 4 cm. ¿Cuánto mide PB?",
        options: ["12 cm", "16 cm", "32 cm", "6 cm"],
        correctIndex: 1,
        explanation: "Por el teorema tangente-secante: PT² = PA × PB. Entonces 8² = 4 × PB → 64 = 4 × PB → PB = 16 cm.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "puntos-notables",
    tip: "Los 4 puntos notables del triángulo (incentro, baricentro, ortocentro y circuncentro) siempre están alineados en la Recta de Euler. En un triángulo equilátero, los cuatro puntos coinciden. Memoriza: el baricentro divide a cada mediana en relación 2:1 desde el vértice.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Los **puntos notables** de un triángulo son puntos especiales que se obtienen al trazar líneas específicas desde los vértices o lados.",
          "El **incentro** (I) es el punto de intersección de las tres **bisectrices** del triángulo. Es el centro de la circunferencia inscrita.",
          "El **baricentro** (G) es el punto de intersección de las tres **medianas** del triángulo. Es el centro de gravedad.",
          "El **ortocentro** (H) es el punto de intersección de las tres **alturas** del triángulo.",
          "El **circuncentro** (O) es el punto de intersección de las tres **mediatrices** de los lados. Es el centro de la circunferencia circunscrita.",
          "En un triángulo **equilátero**, los cuatro puntos notables coinciden en un solo punto."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "El **baricentro** G divide cada mediana en una razón **2:1**, contando desde el vértice: **AG:GM = 2:1** (siendo M el punto medio del lado opuesto).",
          "El **incentro** I está a la misma distancia de los tres lados: esa distancia es el **radio de la circunferencia inscrita** **r = A/s**, donde A es el área y s el semiperímetro.",
          "El **circuncentro** O está a la misma distancia de los tres vértices: esa distancia es el **radio de la circunferencia circunscrita** **R = a/(2·senA)**.",
          "El **ortocentro** H tiene la propiedad de que los reflejos de H sobre los lados del triángulo caen sobre la circunferencia circunscrita.",
          "El **baricentro** tiene coordenadas promedio: **G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)** si los vértices son (x₁,y₁), (x₂,y₂), (x₃,y₃).",
          "El **incentro** tiene coordenadas ponderadas por los lados: **I = (a·A + b·B + c·C) / (a+b+c)**, donde a, b, c son las longitudes de los lados opuestos a A, B, C."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "La **Recta de Euler** es la recta que contiene al circuncentro O, al baricentro G, al ortocentro H y al centro de la circunferencia de los nueve puntos N.",
          "En la Recta de Euler se cumple: **OG:GH = 1:2**, y el centro de los nueve puntos N es el punto medio de OH.",
          "El **centro de los nueve puntos** N es el centro de la circunferencia que pasa por los puntos medios de los lados, los pies de las alturas y los puntos medios de los segmentos de H a los vértices.",
          "La **circunferencia de los nueve puntos** tiene radio **R/2**, donde R es el radio de la circunferencia circunscrita.",
          "El **incentro** I no pertenece a la Recta de Euler en general. Solo coincide con los demás en el triángulo equilátero.",
          "Truco de examen: en un triángulo rectángulo, el ortocentro está en el vértice del ángulo recto, y el circuncentro es el punto medio de la hipotenusa."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,25 40,175 260,175" fill="#dbeafe" fill-opacity="0.3" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="25" r="3" fill="#333"/>
        <circle cx="40" cy="175" r="3" fill="#333"/>
        <circle cx="260" cy="175" r="3" fill="#333"/>
        <text x="145" y="18" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="25" y="185" font-family="Arial" font-size="10" fill="#333" font-weight="bold">B</text>
        <text x="262" y="185" font-family="Arial" font-size="10" fill="#333" font-weight="bold">C</text>
        <line x1="150" y1="25" x2="150" y2="175" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
        <circle cx="150" cy="125" r="4" fill="#dc2626"/>
        <text x="155" y="128" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">G</text>
        <text x="48" y="168" font-family="Arial" font-size="9" fill="#333">M</text>
        <circle cx="150" cy="175" r="2.5" fill="#333"/>
        <line x1="150" y1="125" x2="150" y2="100" stroke="#dc2626" stroke-width="1"/>
        <line x1="150" y1="125" x2="150" y2="150" stroke="#dc2626" stroke-width="1"/>
        <text x="190" y="118" font-family="Arial" font-size="8" fill="#333">2/3</text>
        <text x="155" y="155" font-family="Arial" font-size="8" fill="#333">1/3</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Baricentro (G) — Mediana</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,30 45,170 255,170" fill="#dbeafe" fill-opacity="0.25" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="30" r="3" fill="#333"/>
        <circle cx="45" cy="170" r="3" fill="#333"/>
        <circle cx="255" cy="170" r="3" fill="#333"/>
        <text x="145" y="22" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="30" y="180" font-family="Arial" font-size="10" fill="#333" font-weight="bold">B</text>
        <text x="257" y="180" font-family="Arial" font-size="10" fill="#333" font-weight="bold">C</text>
        <line x1="150" y1="30" x2="150" y2="170" stroke="#059669" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="45" y1="170" x2="210" y2="52" stroke="#059669" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="255" y1="170" x2="90" y2="52" stroke="#059669" stroke-width="1.2" stroke-dasharray="4,3"/>
        <circle cx="150" cy="112" r="5" fill="#059669"/>
        <text x="156" y="110" font-family="Arial" font-size="10" fill="#059669" font-weight="bold">I</text>
        <circle cx="150" cy="112" r="35" fill="none" stroke="#059669" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Incentro (I) — Bisectrices</text>
        <text x="190" y="125" font-family="Arial" font-size="9" fill="#059669">r (inscrita)</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,35 45,165 255,165" fill="#dbeafe" fill-opacity="0.25" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="35" r="3" fill="#333"/>
        <circle cx="45" cy="165" r="3" fill="#333"/>
        <circle cx="255" cy="165" r="3" fill="#333"/>
        <text x="145" y="27" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="30" y="175" font-family="Arial" font-size="10" fill="#333" font-weight="bold">B</text>
        <text x="257" y="175" font-family="Arial" font-size="10" fill="#333" font-weight="bold">C</text>
        <line x1="150" y1="35" x2="150" y2="165" stroke="#7c3aed" stroke-width="1.2"/>
        <line x1="100" y1="35" x2="45" y2="165" stroke="#7c3aed" stroke-width="1.2"/>
        <line x1="200" y1="35" x2="255" y2="165" stroke="#7c3aed" stroke-width="1.2"/>
        <circle cx="150" cy="70" r="5" fill="#7c3aed"/>
        <text x="156" y="68" font-family="Arial" font-size="10" fill="#7c3aed" font-weight="bold">H</text>
        <circle cx="150" cy="70" r="55" fill="none" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Ortocentro (H) — Alturas</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,35 45,165 255,165" fill="#dbeafe" fill-opacity="0.25" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="35" r="3" fill="#333"/>
        <circle cx="45" cy="165" r="3" fill="#333"/>
        <circle cx="255" cy="165" r="3" fill="#333"/>
        <text x="145" y="27" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="30" y="175" font-family="Arial" font-size="10" fill="#333" font-weight="bold">B</text>
        <text x="257" y="175" font-family="Arial" font-size="10" fill="#333" font-weight="bold">C</text>
        <circle cx="150" cy="35" r="80" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="97" y1="100" x2="97" y2="165" stroke="#f59e0b" stroke-width="1.2"/>
        <line x1="203" y1="100" x2="203" y2="165" stroke="#f59e0b" stroke-width="1.2"/>
        <line x1="150" y1="35" x2="150" y2="115" stroke="#f59e0b" stroke-width="1.2"/>
        <circle cx="150" cy="115" r="5" fill="#f59e0b"/>
        <text x="156" y="113" font-family="Arial" font-size="10" fill="#f59e0b" font-weight="bold">O</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Circuncentro (O) — Mediatices</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿En qué punto notable del triángulo se intersecan las tres medianas?",
        options: ["Incentro", "Ortocentro", "Circuncentro", "Baricentro"],
        correctIndex: 3,
        explanation: "El baricentro (G) es el punto de intersección de las tres medianas del triángulo. Representa el centro de gravedad.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un triángulo tiene vértices en A(0,0), B(6,0) y C(3,6). ¿Cuáles son las coordenadas del baricentro?",
        options: ["(3, 2)", "(2, 3)", "(3, 3)", "(1.5, 2)"],
        correctIndex: 0,
        explanation: "El baricentro es el promedio de las coordenadas: G = ((0+6+3)/3, (0+0+6)/3) = (9/3, 6/3) = (3, 2).",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "En un triángulo rectángulo con catetos de 6 cm y 8 cm, ¿dónde se ubica el circuncentro?",
        options: ["En el vértice del ángulo recto", "En el punto medio de la hipotenusa", "En el punto medio del cateto mayor", "Fuera del triángulo"],
        correctIndex: 1,
        explanation: "En un triángulo rectángulo, el circuncentro siempre se encuentra en el punto medio de la hipotenusa. La hipotenusa mide 10 cm (por Pitágoras), y el radio de la circunferencia circunscrita es 5 cm.",
        difficulty: "avanzado"
      }
    ]
  }
]