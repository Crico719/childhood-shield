[
  {
    slug: "prop-y-semejanza",
    tip: "En semejanza, identifica SIEMPRE el vértice común y el orden correcto de los polígonos. Muchos errores vienen de no respetar la correspondencia de vértices al plantear las proporciones.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "**Proporcionalidad**: Dos razones son **proporcionales** si el cociente de sus términos es igual.",
          "**Razón de semejanza (k)**: Factor que relaciona las longitudes correspondientes de dos figuras semejantes.",
          "Dos polígonos son **semejantes** si sus ángulos correspondientes son iguales y sus lados correspondientes son **proporcionales**.",
          "**Teorema de Tales**: Si una paralela corta a dos rectas concurrentes, determina segmentos **proporcionales**.",
          "Las figuras semejantes conservan la **forma** pero no necesariamente el **tamaño**.",
          "La relación de semejanza se escribe como **k = L₂/L₁**, donde L son longitudes correspondientes.",
        ],
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Relación de áreas**: Si k es el factor de semejanza, entonces **A₂/A₁ = k²**.",
          "**Relación de perímetros**: **P₂/P₁ = k** (la misma que la relación de lados).",
          "Si un triángulo tiene una **paralela a un lado**, el triángulo formado es **semejante** al original.",
          "**Teorema de la paralela**: En un triángulo, una paralela a un lado divide a los otros dos en **segmentos proporcionales**.",
          "Proporción fundamental: **a/b = c/d = e/f** cuando hay semejanza de polígonos con 3 pares de lados.",
          "Si k > 1 la figura se **agranda**; si 0 < k < 1 se **reduce**; si k = 1 son **congruentes**.",
        ],
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Teorema de Tales generalizado**: Si 3 o más paralelas cortan a dos transversales, los segmentos determinados son **proporcionales**.",
          "En un **trapecio**, la paralela a las bases que pasa por el punto medio de un lado no paralelo **biseca** al otro lado no paralelo.",
          "El **segmento que une puntos medios** de dos lados no paralelos de un trapecio mide: **m = (b₁ + b₂)/2**.",
          "Si dos triángulos son semejantes, el cociente de sus **radios de circunferencia circunscrita** es igual a **k**.",
          "El **incentro** de dos figuras semejantes se mapea en la **misma posición relativa**, lo que permite resolver problemas de ubicación.",
          "Truco de examen: cuando aparecen rectas que cruzan en un punto con paralelas, siempre aplicar **Thales** directamente sin dibujar auxiliares adicionales.",
        ],
      },
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="150,20 40,180 260,180" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="75" y1="110" x2="225" y2="110" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="150" y="12" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="bold">A</text>
  <text x="25" y="192" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="bold">B</text>
  <text x="275" y="192" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="bold">C</text>
  <text x="65" y="107" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="bold">D</text>
  <text x="235" y="107" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="bold">E</text>
  <text x="85" y="60" font-size="11" fill="#059669">k</text>
  <text x="195" y="60" font-size="11" fill="#059669">k</text>
  <line x1="150" y1="20" x2="75" y2="110" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="150" y1="20" x2="225" y2="110" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="150" y="160" text-anchor="middle" font-size="12" fill="#1e293b">DE ∥ BC</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">△ADE ~ △ABC</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <circle cx="100" cy="100" r="70" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="220" cy="100" r="35" fill="none" stroke="#dc2626" stroke-width="2"/>
  <polygon points="100,30 55,120 145,120" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2"/>
  <polygon points="220,65 197.5,100 242.5,100" fill="#dc2626" fill-opacity="0.15" stroke="#dc2626" stroke-width="2"/>
  <text x="100" y="140" text-anchor="middle" font-size="12" fill="#2563eb" font-weight="bold">Lado = a</text>
  <text x="220" y="120" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">Lado = ka</text>
  <text x="150" y="190" text-anchor="middle" font-size="12" fill="#1e293b">Factor de semejanza k</text>
  <text x="150" y="30" text-anchor="middle" font-size="11" fill="#64748b">Relación de áreas = k²</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="180" x2="150" y2="20" stroke="#2563eb" stroke-width="2"/>
  <line x1="150" y1="180" x2="270" y2="20" stroke="#2563eb" stroke-width="2"/>
  <line x1="30" y1="180" x2="270" y2="180" stroke="#2563eb" stroke-width="2"/>
  <line x1="70" y1="180" x2="160" y2="80" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/>
  <line x1="130" y1="180" x2="210" y2="80" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/>
  <line x1="200" y1="180" x2="250" y2="80" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="20" y="185" font-size="12" fill="#1e293b" font-weight="bold">A</text>
  <text x="150" y="195" font-size="12" fill="#1e293b" font-weight="bold">B</text>
  <text x="275" y="185" font-size="12" fill="#1e293b" font-weight="bold">C</text>
  <text x="145" y="15" font-size="12" fill="#dc2626" font-weight="bold">L₁</text>
  <text x="55" y="175" font-size="10" fill="#059669">a</text>
  <text x="95" y="175" font-size="10" fill="#059669">b</text>
  <text x="155" y="175" font-size="10" fill="#059669">c</text>
  <text x="150" y="145" text-anchor="middle" font-size="11" fill="#64748b">Teorema de Tales: a/b = c/d</text>
</svg>`,
    ],
    exercises: [
      {
        id: 701,
        question:
          "En un triángulo ABC, una paralela al lado BC corta a AB en D y a AC en E, formando el triángulo ADE. Si AD = 6, DB = 4 y BC = 15, ¿cuánto mide DE?",
        options: ["7.5", "9", "10", "12"],
        correctIndex: 1,
        explanation:
          "Por Thales, AD/AB = DE/BC. AB = AD + DB = 6 + 4 = 10. Entonces 6/10 = DE/15, por lo tanto DE = (6 × 15)/10 = 9.",
        difficulty: "basico",
      },
      {
        id: 702,
        question:
          "Dos triángulos semejantes tienen un factor de semejanza k = 3. Si el perímetro del menor es 20 cm, ¿cuál es el área del mayor si el área del menor es 24 cm²?",
        options: ["72 cm²", "144 cm²", "216 cm²", "729 cm²"],
        correctIndex: 2,
        explanation:
          "El perímetro del mayor sería 20 × 3 = 60 cm. Para las áreas, A₂/A₁ = k² = 9, entonces A₂ = 24 × 9 = 216 cm².",
        difficulty: "intermedio",
      },
      {
        id: 703,
        question:
          "En un trapecio ABCD con AB ∥ CD, AB = 20, CD = 12. Un segmento EF une puntos de AD y BC tal que EF ∥ AB. Si DE/EA = 3/5, ¿cuánto mide EF?",
        options: ["14", "15", "16", "17"],
        correctIndex: 1,
        explanation:
          "La fórmula del segmento paralelo en un trapecio es EF = (EA × CD + DE × AB)/(DE + EA) = (5 × 12 + 3 × 20)/(3 + 5) = (60 + 60)/8 = 15.",
        difficulty: "avanzado",
      },
    ],
  },
  {
    slug: "relaciones-metricas",
    tip: "En relaciones métricas del triángulo rectángulo, memoriza solo 3 fórmulas: a² = c·m, b² = c·n y h² = m·n. El teorema de Pitágoras se deduce de ellas: a² + b² = c·m + c·n = c(m+n) = c².",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "En un **triángulo rectángulo**, la **altura** trazada desde el vértice del ángulo recto a la hipotenusa genera **dos triángulos semejantes** entre sí y con el original.",
          "**Hipotenusa (c)**: lado opuesto al ángulo recto. Es el lado **más largo** del triángulo rectángulo.",
          "**Catetos (a, b)**: los dos lados que forman el ángulo recto.",
          "**Proyección**: los segmentos en que la altura **divide la hipotenusa** se llaman **m** y **n** (proyecciones de los catetos).",
          "**Teorema de Pitágoras**: En todo triángulo rectángulo, **a² + b² = c²**.",
          "La **altura (h)** es perpendicular a la hipotenusa y se mide desde el vértice del ángulo recto.",
        ],
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Teorema de la altura**: **h² = m · n** (la altura es la media geométrica de las proyecciones).",
          "**Teorema del cateto**: **a² = c · m** y **b² = c · n** (cada cateto es media geométrica de la hipotenusa y su proyección).",
          "**Área del triángulo rectángulo**: **A = (a · b)/2 = (c · h)/2**.",
          "La **inversa del Pitágoras** también se cumple: si a² + b² = c², el triángulo es rectángulo.",
          "**Relación fundamental**: m + n = c (las proyecciones suman la hipotenusa).",
          "De las relaciones métricas se deduce: **1/h² = 1/a² + 1/b²**.",
        ],
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Media geométrica**: h = √(m·n). Este concepto aparece en la **secante-tangente** y en el **cateto medio**.",
          "Si el ángulo recto es de **45°-45°-90°**, entonces m = n y h = c/2. Los catetos miden **c/√2**.",
          "Si el ángulo recto es de **30°-60°-90°**, los catetos son **c/2** y **c√3/2**.",
          "**Truco de examen**: Para verificar si un triángulo es rectángulo, sustituir los lados en a² + b² = c². Si se cumple, es rectángulo.",
          "En un triángulo rectángulo inscrito en una **circunferencia**, la hipotenusa es siempre el **diámetro**.",
          "La **altura máxima** de un triángulo rectángulo con hipotenusa fija c se alcanza cuando h = c/2 (caso isósceles).",
        ],
      },
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="50,170 250,170 50,30" fill="#2563eb" fill-opacity="0.1" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="50" y1="30" x2="50" y2="170" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="50" y1="170" x2="250" y2="170" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="50" y1="30" x2="250" y2="170" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="50" y1="30" x2="106" y2="154" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
  <rect x="50" y="30" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="30" y="25" font-size="14" fill="#1e293b" font-weight="bold">A</text>
  <text x="40" y="188" font-size="14" fill="#1e293b" font-weight="bold">B</text>
  <text x="260" y="188" font-size="14" fill="#1e293b" font-weight="bold">C</text>
  <text x="30" y="105" font-size="13" fill="#dc2626" font-weight="bold">a</text>
  <text x="155" y="188" font-size="13" fill="#dc2626" font-weight="bold">b</text>
  <text x="155" y="90" font-size="13" fill="#059669" font-weight="bold">c</text>
  <text x="110" y="148" font-size="12" fill="#7c3aed" font-weight="bold">h</text>
  <text x="70" y="188" font-size="11" fill="#f59e0b" font-weight="bold">m</text>
  <text x="185" y="188" font-size="11" fill="#f59e0b" font-weight="bold">n</text>
  <text x="150" y="15" text-anchor="middle" font-size="12" fill="#1e293b">Relaciones Métricas del Triángulo Rectángulo</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="30,170 150,170 30,50" fill="#2563eb" fill-opacity="0.08" stroke="#2563eb" stroke-width="2"/>
  <polygon points="150,170 250,170 150,80" fill="#dc2626" fill-opacity="0.08" stroke="#dc2626" stroke-width="2"/>
  <polygon points="30,50 150,170 150,80" fill="#059669" fill-opacity="0.08" stroke="#059669" stroke-width="2"/>
  <polygon points="30,170 150,170 30,50" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="150" y="15" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Los 3 triángulos son semejantes</text>
  <text x="70" y="130" font-size="11" fill="#2563eb" font-weight="bold">△1</text>
  <text x="200" y="140" font-size="11" fill="#dc2626" font-weight="bold">△2</text>
  <text x="80" y="95" font-size="11" fill="#059669" font-weight="bold">△3</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">△1 ~ △2 ~ △3 (todos semejantes al original)</text>
</svg>`,
    ],
    exercises: [
      {
        id: 801,
        question:
          "En un triángulo rectángulo, la hipotenusa mide 13 cm y una de las proyecciones de los catetos mide 4 cm. ¿Cuánto mide la altura?",
        options: ["4 cm", "5 cm", "6 cm", "8 cm"],
        correctIndex: 2,
        explanation:
          "Si m = 4, entonces n = c − m = 13 − 4 = 9. Por el teorema de la altura: h² = m·n = 4·9 = 36, entonces h = 6 cm.",
        difficulty: "basico",
      },
      {
        id: 802,
        question:
          "Un triángulo rectángulo tiene catetos de 9 cm y 12 cm. ¿Cuánto mide el segmento que une el punto medio de la hipotenusa con el punto medio del cateto de 9 cm?",
        options: ["4.5 cm", "5 cm", "6 cm", "7.5 cm"],
        correctIndex: 2,
        explanation:
          "La hipotenusa c = √(81 + 144) = √225 = 15 cm. El segmento une el punto medio de la hipotenusa con el punto medio del cateto de 9 cm, por lo que por el teorema de la línea media es paralelo al cateto restante (12 cm) y mide la mitad: 12/2 = 6 cm.",
        difficulty: "intermedio",
      },
      {
        id: 803,
        question:
          "En un triángulo rectángulo, las proyecciones de los catetos sobre la hipotenusa miden 9 cm y 16 cm respectivamente. ¿Cuánto miden los catetos?",
        options: [
          "a = 12 cm, b = 16 cm",
          "a = 15 cm, b = 20 cm",
          "a = 9 cm, b = 16 cm",
          "a = 15 cm, b = 25 cm",
        ],
        correctIndex: 1,
        explanation:
          "c = m + n = 9 + 16 = 25 cm. Por el teorema del cateto: a² = c·m = 25·9 = 225, a = 15 cm. b² = c·n = 25·16 = 400, b = 20 cm. Verificación: 15² + 20² = 225 + 400 = 625 = 25².",
        difficulty: "avanzado",
      },
    ],
  },
  {
    slug: "poligonos-regulares",
    tip: "Para hallar el área de un polígono regular, multiplica el perímetro por el apotema y divide entre 2: A = (P × a)/2. El apotema siempre es menor que el radio. En exámenes, memoriza: hexágono regular → lado = radio.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **polígono regular** tiene todos sus **lados iguales** y todos sus **ángulos internos iguales**.",
          "**Número de diagonales**: Para un polígono de n lados, tiene **n(n−3)/2 diagonales**.",
          "La suma de los ángulos internos de un polígono de n lados es **(n−2) × 180°**.",
          "Cada ángulo interno de un polígono regular de n lados mide **(n−2) × 180°/n**.",
          "Cada ángulo externo de un polígono regular mide **360°/n**.",
          "El **apotema** es la distancia del centro al punto medio de un lado (perpendicular al lado).",
        ],
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Área de un polígono regular**: **A = (P × a)/2**, donde P es el perímetro y a es el apotema.",
          "**Radio (R)**: distancia del centro a un vértice. En un hexágono regular, **R = lado**.",
          "**Apothema (a)**: **a = R · cos(180°/n)** o **a = L/(2·tan(180°/n))** donde L es la longitud de un lado.",
          "**Lado a partir del radio**: **L = 2R · sin(180°/n)**.",
          "El **ángulo central** de un polígono regular de n lados es **360°/n**.",
          "Un hexágono regular se divide en **6 triángulos equiláteros**, por eso L = R.",
        ],
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Polígonos que tesselan**: Solo los triángulos equiláteros, cuadrados y hexágonos regulares tesselan el plano.",
          "La relación entre el apotema y el radio: **a = R·cos(π/n)** permite resolver problemas con circunferencia circunscrita.",
          "**Área en función del radio**: **A = (n/2) · R² · sin(360°/n)**.",
          "**Truco de examen**: Si conoces el apotema y el número de lados, puedes hallar todo: **L = 2a·tan(180°/n)**.",
          "El **radio de la circunferencia inscrita** es igual al apotema del polígono regular.",
          "Para un polígono de muchos lados, el área se aproxima al área de la circunferencia: **A ≈ πR²** cuando **n → ∞**.",
        ],
      },
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="150,30 220,60 220,140 150,170 80,140 80,60" fill="#2563eb" fill-opacity="0.12" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="150" cy="100" r="70" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="150" cy="100" r="46" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="150" cy="100" r="3" fill="#dc2626"/>
  <line x1="150" y1="100" x2="220" y2="60" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="150" y2="170" stroke="#059669" stroke-width="1.5"/>
  <text x="150" y="20" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Hexágono Regular</text>
  <text x="230" y="55" font-size="11" fill="#dc2626" font-weight="bold">R</text>
  <text x="158" y="155" font-size="11" fill="#059669" font-weight="bold">a</text>
  <text x="250" y="100" font-size="11" fill="#7c3aed" font-weight="bold">L = R</text>
  <text x="150" y="115" font-size="10" fill="#64748b">centro</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="150,25 235,80 205,175 95,175 65,80" fill="#7c3aed" fill-opacity="0.12" stroke="#7c3aed" stroke-width="2.5"/>
  <circle cx="150" cy="108" r="83" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="150" cy="108" r="50" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="150" cy="108" r="3" fill="#dc2626"/>
  <line x1="150" y1="108" x2="150" y2="25" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="150" y1="108" x2="235" y2="80" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="150" y1="108" x2="205" y2="175" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="150" y="15" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Pentágono Regular</text>
  <text x="155" y="65" font-size="11" fill="#dc2626" font-weight="bold">R</text>
  <text x="155" y="75" font-size="10" fill="#64748b">radio</text>
  <text x="195" y="175" font-size="10" fill="#059669" font-weight="bold">a = apotema</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">Ángulo central = 360°/5 = 72°</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <rect x="20" y="20" width="85" height="80" rx="2" fill="#2563eb" fill-opacity="0.1" stroke="#2563eb" stroke-width="2"/>
  <polygon points="170,25 215,50 215,100 170,125 125,100 125,50" fill="#dc2626" fill-opacity="0.1" stroke="#dc2626" stroke-width="2"/>
  <polygon points="280,60 260,30 225,30 210,60 225,90 260,90" fill="#059669" fill-opacity="0.1" stroke="#059669" stroke-width="2"/>
  <text x="62" y="55" text-anchor="middle" font-size="10" fill="#2563eb" font-weight="bold">Cuadrado</text>
  <text x="62" y="70" text-anchor="middle" font-size="9" fill="#64748b">90° × 4</text>
  <text x="170" y="80" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="bold">Hexágono</text>
  <text x="170" y="95" text-anchor="middle" font-size="9" fill="#64748b">120° × 6</text>
  <text x="245" y="65" text-anchor="middle" font-size="10" fill="#059669" font-weight="bold">Triángulo</text>
  <text x="245" y="80" text-anchor="middle" font-size="9" fill="#64748b">60° × 3</text>
  <text x="150" y="160" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Polígonos que tesselan el plano</text>
  <text x="150" y="180" text-anchor="middle" font-size="11" fill="#64748b">Solo 3, 4 y 6 lados regulares tesselan</text>
</svg>`,
    ],
    exercises: [
      {
        id: 901,
        question:
          "¿Cuánto mide cada ángulo interno de un octágono regular?",
        options: ["120°", "135°", "140°", "144°"],
        correctIndex: 1,
        explanation:
          "Cada ángulo interno = (n−2) × 180°/n = (8−2) × 180°/8 = 6 × 180°/8 = 1080°/8 = 135°. Verificando: 8 × 135° = 1080° = 6 × 180°.",
        difficulty: "basico",
      },
      {
        id: 902,
        question:
          "Un hexágono regular tiene un lado de 8 cm. ¿Cuál es su área?",
        options: [
          "96 cm²",
          "96√3 cm²",
          "48√3 cm²",
          "192 cm²",
        ],
        correctIndex: 1,
        explanation:
          "Un hexágono regular se divide en 6 triángulos equiláteros. Área de cada triángulo = (√3/4) × 8² = 16√3. Área total = 6 × 16√3 = 96√3 cm².",
        difficulty: "intermedio",
      },
      {
        id: 903,
        question:
          "Un polígono regular tiene una suma de ángulos internos igual a 1800°. ¿Cuántos lados tiene y cuánto mide cada ángulo interno?",
        options: [
          "12 lados, 150°",
          "10 lados, 144°",
          "12 lados, 160°",
          "14 lados, 154.3°",
        ],
        correctIndex: 0,
        explanation:
          "(n−2) × 180° = 1800°, entonces n − 2 = 10, por lo tanto n = 12. Cada ángulo interno = 1800°/12 = 150°. Verificación: 12 × 150° = 1800°.",
        difficulty: "avanzado",
      },
    ],
  },
  {
    slug: "areas",
    tip: "Cuando un problema pide el área de una figura compuesta, siempre descomponla en figuras simples (triángulos, rectángulos, trapecios). Identifica qué se suma y qué se resta. Lee bien si piden área lateral o total.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "**Área**: Es la medida de la **superficie** que ocupa una figura plana, expresada en unidades cuadradas.",
          "**Triángulo**: **A = (b × h)/2**, donde b es la base y h es la altura (perpendicular a la base).",
          "**Rectángulo**: **A = base × altura = b × h**.",
          "**Paralelogramo**: **A = base × altura = b × h** (la altura es perpendicular a la base).",
          "**Círculo**: **A = π × r²**, donde r es el radio.",
          "La unidad de medida del área es la **unidad cuadrada** (cm², m², etc.).",
        ],
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Rombo**: **A = (D × d)/2**, donde D y d son las diagonales mayor y menor.",
          "**Trapecio**: **A = [(b₁ + b₂) × h]/2**, donde b₁ y b₂ son las bases paralelas.",
          "**Polígono regular**: **A = (P × a)/2**, donde P es el perímetro y a el apotema.",
          "**Sector circular**: **A = (π × r² × θ)/360°**, donde θ es el ángulo central en grados.",
          "**Corona circular**: **A = π(R² − r²)**, con R el radio mayor y r el menor.",
          "Las áreas son **aditivas**: el área total de una figura compuesta es la **suma** de las áreas de sus partes.",
        ],
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Fórmula de Heron**: Para un triángulo con lados a, b, c y semiperímetro s = (a+b+c)/2: **A = √[s(s−a)(s−b)(s−c)]**.",
          "El **triángulo de área máxima** inscrito en un semicírculo es el **rectángulo isósceles**.",
          "La **relación entre áreas** de triángulos con la misma base es proporcional a sus **alturas**.",
          "**Área del trapecio** usando la diagonal: **A = ½ · d₁ · d₂ · sen(α)**, donde α es el ángulo entre las diagonales.",
          "Si dos polígonos son **semejantes** con factor k, el cociente de sus áreas es **k²**.",
          "Truco de examen: cuando el problema da el perímetro y el apotema, usa **A = Pa/2** directamente sin calcular el lado.",
        ],
      },
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="60,160 240,160 200,40 100,40" fill="#2563eb" fill-opacity="0.12" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="100" y1="40" x2="100" y2="160" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
  <rect x="95" y="135" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="60" y="175" font-size="12" fill="#1e293b" font-weight="bold">b₁</text>
  <text x="220" y="175" font-size="12" fill="#1e293b" font-weight="bold">b₂</text>
  <text x="80" y="105" font-size="12" fill="#dc2626" font-weight="bold">h</text>
  <text x="150" y="25" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="bold">Trapecio</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">A = (b₁ + b₂) × h / 2</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <circle cx="150" cy="100" r="75" fill="#dc2626" fill-opacity="0.08" stroke="#dc2626" stroke-width="2"/>
  <circle cx="150" cy="100" r="40" fill="#2563eb" fill-opacity="0.12" stroke="#2563eb" stroke-width="2"/>
  <circle cx="150" cy="100" r="3" fill="#1e293b"/>
  <line x1="150" y1="100" x2="225" y2="100" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="190" y2="100" stroke="#2563eb" stroke-width="1.5"/>
  <text x="230" y="95" font-size="12" fill="#dc2626" font-weight="bold">R</text>
  <text x="195" y="120" font-size="12" fill="#2563eb" font-weight="bold">r</text>
  <path d="M 150 100 L 225 100 A 75 75 0 0 1 189 33 Z" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="1.5"/>
  <text x="200" y="55" font-size="11" fill="#059669" font-weight="bold">θ</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">Corona: A = π(R² − r²) | Sector: A = πr²θ/360°</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="60,150 150,40 240,150" fill="#7c3aed" fill-opacity="0.12" stroke="#7c3aed" stroke-width="2.5"/>
  <line x1="60" y1="150" x2="240" y2="150" stroke="#2563eb" stroke-width="2"/>
  <line x1="150" y1="40" x2="150" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
  <rect x="145" y="125" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="150" y="30" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="bold">Triángulo</text>
  <text x="145" y="165" font-size="12" fill="#2563eb" font-weight="bold">b</text>
  <text x="160" y="100" font-size="12" fill="#dc2626" font-weight="bold">h</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">A = (b × h) / 2</text>
</svg>`,
    ],
    exercises: [
      {
        id: 1001,
        question:
          "Un triángulo tiene una base de 14 cm y una altura de 9 cm. ¿Cuál es su área?",
        options: ["63 cm²", "126 cm²", "22.5 cm²", "45 cm²"],
        correctIndex: 0,
        explanation:
          "A = (b × h)/2 = (14 × 9)/2 = 126/2 = 63 cm².",
        difficulty: "basico",
      },
      {
        id: 1002,
        question:
          "Una figura compuesta está formada por un rectángulo de 12 cm × 8 cm y un semicírculo de diámetro 8 cm unido por uno de sus lados menores. ¿Cuál es el área total?",
        options: [
          "(96 + 8π) cm²",
          "(96 + 16π) cm²",
          "(96 + 4π) cm²",
          "(48 + 8π) cm²",
        ],
        correctIndex: 0,
        explanation:
          "Área del rectángulo = 12 × 8 = 96 cm². El semicírculo tiene diámetro 8, radio = 4. Área semicírculo = π(4²)/2 = 8π cm². Área total = 96 + 8π cm².",
        difficulty: "intermedio",
      },
      {
        id: 1003,
        question:
          "Un trapecio tiene bases de 10 cm y 16 cm. Su área es 104 cm². ¿Cuál es la altura del trapecio y el área del triángulo formado por una diagonal y la base menor?",
        options: [
          "h = 8 cm, A_triángulo = 64 cm²",
          "h = 8 cm, A_triángulo = 48 cm²",
          "h = 8 cm, A_triángulo = 40 cm²",
          "h = 6 cm, A_triángulo = 30 cm²",
        ],
        correctIndex: 2,
        explanation:
          "A = (b₁ + b₂)h/2 → 104 = (10 + 16)h/2 = 13h → h = 8 cm. El triángulo formado por una diagonal y la base menor (b₁ = 10) tiene la misma altura h = 8 cm. Su área = (10 × 8)/2 = 40 cm².",
        difficulty: "avanzado",
      },
    ],
  },
  {
    slug: "rectas-y-planos",
    tip: "En problemas de rectas y planos en el espacio, dibuja siempre una figura de referencia (cubo o prisma). Para identificar si dos rectas son paralelas, se cortan o son inclinadas, verifica: ¿comparten un plano? Si sí y no son paralelas, se cortan.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **recta** es una línea **infinita** que se extiende en ambas direcciones sin grosor.",
          "Un **plano** es una superficie **infinita** y **plana** que contiene infinitas rectas.",
          "Dos rectas en el espacio pueden ser: **paralelas**, **concurrentes** (se cortan) o **inclinadas** (no paralelas y no se cortan).",
          "**Rectas paralelas**: No se cortan y están en el **mismo plano**.",
          "**Rectas inclinadas (skew)**: No se cortan y **no** están en el mismo plano. Solo existen en **3D**.",
          "Dos planos pueden ser: **paralelos** (no se cortan) o **secantes** (se cortan en una recta).",
        ],
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "Una recta **perpendicular** a un plano es perpendicular a **todas** las rectas del plano que pasan por el punto de intersección.",
          "Si una recta es perpendicular a **dos rectas no paralelas** de un plano, es perpendicular al **plano**.",
          "La **distancia entre dos planos paralelos** es la longitud del segmento perpendicular que los une.",
          "**Ángulo entre recta y plano**: es el ángulo entre la recta y su **proyección ortogonal** sobre el plano.",
          "**Ángulo entre dos planos (diedro)**: es el ángulo entre las **rectas perpendiculares** a la línea de intersección, una en cada plano.",
          "Si dos planos son perpendiculares, una recta perpendicular a uno **no necesariamente** es paralela al otro.",
        ],
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Teorema de las tres perpendiculares**: Si una recta del plano es perpendicular a la proyección de una recta oblicua, entonces es perpendicular a la recta oblicua misma.",
          "Si un plano es perpendicular a la intersección de otros dos planos, entonces es perpendicular a **cada uno** de ellos.",
          "**Ángulo diedro**: Si dos planos secantes forman un diedro de 90°, se dice que son **perpendiculares**.",
          "Para calcular la distancia de un **punto a un plano**, se proyecta ortogonalmente el punto sobre el plano.",
          "**Truco de examen**: Si un cubo tiene aristas de longitud a, la diagonal del cubo mide **a√3** y la diagonal de una cara mide **a√2**.",
          "La **distancia entre rectas inclinadas** se mide por el segmento perpendicular común, que es la proyección sobre la normal común.",
        ],
      },
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="150,30 280,80 280,150 150,180 20,150 20,80" fill="#2563eb" fill-opacity="0.06" stroke="#2563eb" stroke-width="2"/>
  <line x1="150" y1="30" x2="150" y2="180" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="20" y1="80" x2="280" y2="80" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="20" y1="150" x2="280" y2="150" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="280" y1="80" x2="280" y2="150" stroke="#2563eb" stroke-width="2"/>
  <line x1="20" y1="80" x2="20" y2="150" stroke="#2563eb" stroke-width="2" stroke-dasharray="5,4"/>
  <line x1="20" y1="150" x2="150" y2="180" stroke="#2563eb" stroke-width="2"/>
  <line x1="280" y1="150" x2="150" y2="180" stroke="#2563eb" stroke-width="2"/>
  <line x1="20" y1="80" x2="150" y2="30" stroke="#2563eb" stroke-width="2" stroke-dasharray="5,4"/>
  <line x1="280" y1="80" x2="150" y2="30" stroke="#2563eb" stroke-width="2"/>
  <line x1="20" y1="80" x2="280" y2="80" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="20" y1="150" x2="280" y2="150" stroke="#dc2626" stroke-width="2.5"/>
  <text x="150" y="20" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Planos paralelos α y β</text>
  <text x="145" y="75" font-size="12" fill="#dc2626" font-weight="bold">α</text>
  <text x="145" y="165" font-size="12" fill="#dc2626" font-weight="bold">β</text>
  <line x1="150" y1="80" x2="150" y2="150" stroke="#059669" stroke-width="2"/>
  <text x="160" y="118" font-size="11" fill="#059669" font-weight="bold">d</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="40,170 140,170 140,70 40,70" fill="#2563eb" fill-opacity="0.08" stroke="#2563eb" stroke-width="2"/>
  <polygon points="160,170 260,170 260,70 160,70" fill="#dc2626" fill-opacity="0.08" stroke="#dc2626" stroke-width="2"/>
  <line x1="40" y1="120" x2="260" y2="120" stroke="#059669" stroke-width="2.5"/>
  <line x1="140" y1="70" x2="160" y2="70" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="5,3"/>
  <line x1="140" y1="170" x2="160" y2="170" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="5,3"/>
  <circle cx="120" cy="120" r="3" fill="#059669"/>
  <circle cx="180" cy="120" r="3" fill="#059669"/>
  <text x="90" y="115" font-size="12" fill="#2563eb" font-weight="bold">α</text>
  <text x="210" y="115" font-size="12" fill="#dc2626" font-weight="bold">β</text>
  <text x="150" y="115" font-size="11" fill="#059669" font-weight="bold">r</text>
  <text x="150" y="60" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Dos planos secantes</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">La intersección de dos planos es una recta r</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="150" x2="270" y2="50" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="30" y1="80" x2="270" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="150" y="30" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Rectas inclinadas (skew)</text>
  <text x="28" y="75" font-size="11" fill="#dc2626" font-weight="bold">r₂</text>
  <text x="28" y="160" font-size="11" fill="#2563eb" font-weight="bold">r₁</text>
  <line x1="120" y1="115" x2="180" y2="105" stroke="#059669" stroke-width="2"/>
  <text x="145" y="100" font-size="10" fill="#059669" font-weight="bold">d perpendicular</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">No se cortan y no están en un mismo plano</text>
</svg>`,
    ],
    exercises: [
      {
        id: 1101,
        question:
          "Dos planos α y β son paralelos. Una recta r es perpendicular a α. ¿Cuál es la relación de r con β?",
        options: [
          "r es paralela a β",
          "r es perpendicular a β",
          "r es oblicua a β",
          "No se puede determinar",
        ],
        correctIndex: 1,
        explanation:
          "Si r es perpendicular a α y α ∥ β, entonces r también es perpendicular a β. Esto se debe a que la perpendicular a uno de dos planos paralelos es perpendicular al otro.",
        difficulty: "basico",
      },
      {
        id: 1102,
        question:
          "En un cubo de arista 6, ¿cuánto mide el ángulo que forma la diagonal del cubo con la cara inferior?",
        options: ["30°", "45°", "arctan(1/√2) ≈ 35.26°", "arccos(1/√3)"],
        correctIndex: 2,
        explanation:
          "La diagonal del cubo AG tiene longitud 6√3. Su proyección sobre la cara inferior es la diagonal AC = 6√2. El ángulo θ cumple: sen(θ) = altura/diagonal = 6/(6√3) = 1/√3, o equivalentemente tan(θ) = 6/(6√2) = 1/√2. Entonces θ = arctan(1/√2) ≈ 35.26°.",
        difficulty: "intermedio",
      },
      {
        id: 1103,
        question:
          "Un cubo tiene arista de longitud a. ¿Cuál es el ángulo que forma la diagonal del cubo con una de las diagonales de una cara?",
        options: [
          "arccos(1/√3)",
          "arccos(√2/√3)",
          "arccos(1/3)",
          "45°",
        ],
        correctIndex: 1,
        explanation:
          "La diagonal del cubo d_c = a√3. La diagonal de una cara d_f = a√2. El ángulo α entre ellas cumple: cos(α) = d_f/d_c = (a√2)/(a√3) = √2/√3. Entonces α = arccos(√2/√3) ≈ 35.26°.",
        difficulty: "avanzado",
      },
    ],
  },
  {
    slug: "prisma-y-cilindro",
    tip: "Para calcular el área total de prismas y cilindros, siempre suma: 2 × área_base + perímetro_base × altura. En cilindro, recuerda que el lateral es un rectángulo 'desenrollado' de base 2πr y altura h.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **prisma** es un sólido con **dos bases paralelas e iguales** y caras laterales que son **paralelogramos**.",
          "Un **cilindro** es un sólido con **dos bases circulares paralelas e iguales** y una superficie lateral **curva**.",
          "Prismas se nombran por la forma de su base: **triangular, rectangular, hexagonal**, etc.",
          "La **altura** es la distancia perpendicular entre las dos bases.",
          "Las **aristas laterales** de un prisma son todas iguales y paralelas entre sí.",
          "Un cilindro se puede obtener rotando un **rectángulo** alrededor de uno de sus lados.",
        ],
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Volumen del prisma**: **V = A_base × h** (área de la base por la altura).",
          "**Volumen del cilindro**: **V = π × r² × h**.",
          "**Área lateral del prisma**: **A_lat = P_base × h** (perímetro de la base por la altura).",
          "**Área lateral del cilindro**: **A_lat = 2π × r × h**.",
          "**Área total del prisma**: **A_total = 2 × A_base + P_base × h**.",
          "**Área total del cilindro**: **A_total = 2πr² + 2πrh = 2πr(r + h)**.",
        ],
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Teorema de Cavalieri**: Si dos sólidos tienen la misma altura y secciones iguales a cualquier altura, tienen el **mismo volumen**.",
          "Un cilindro es el **caso límite** de un prisma cuando el número de lados de la base tiende a **infinito**.",
          "Un **cilindro oblicuo** tiene el mismo volumen que uno recto con la **misma base y la misma altura perpendicular**.",
          "Si un prisma se corta con un plano oblicuo, el volumen se calcula con la **altura media**: **V = A_base × h_media**.",
          "**Truco de examen**: En problemas de vasos comunicantes o líquidos en recipientes cilíndricos, el volumen del líquido = A_base × altura_del_líquido, independientemente de la inclinación.",
          "La relación entre el volumen de un cilindro y el de una esfera inscrita es **V_cil = (3/2) × V_esfera** (misma base y altura = 2r).",
        ],
      },
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="80,50 170,50 210,30 120,30" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2"/>
  <polygon points="80,160 170,160 210,140 120,140" fill="#2563eb" fill-opacity="0.2" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="80" y1="50" x2="80" y2="160" stroke="#2563eb" stroke-width="2"/>
  <line x1="170" y1="50" x2="170" y2="160" stroke="#2563eb" stroke-width="2"/>
  <line x1="210" y1="30" x2="210" y2="140" stroke="#2563eb" stroke-width="2"/>
  <line x1="120" y1="30" x2="120" y2="140" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="80" y1="50" x2="120" y2="30" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="150" y="20" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Prisma Rectangular</text>
  <text x="220" y="90" font-size="12" fill="#dc2626" font-weight="bold">h</text>
  <text x="120" y="180" font-size="11" fill="#059669" font-weight="bold">base</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">V = A_base × h</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <ellipse cx="150" cy="50" rx="60" ry="20" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="150" cy="160" rx="60" ry="20" fill="#2563eb" fill-opacity="0.25" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="90" y1="50" x2="90" y2="160" stroke="#2563eb" stroke-width="2"/>
  <line x1="210" y1="50" x2="210" y2="160" stroke="#2563eb" stroke-width="2"/>
  <line x1="150" y1="50" x2="150" y2="160" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="90" y1="160" x2="150" y2="160" stroke="#059669" stroke-width="1.5"/>
  <text x="150" y="20" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Cilindro</text>
  <text x="218" y="108" font-size="12" fill="#dc2626" font-weight="bold">h</text>
  <text x="120" y="168" font-size="11" fill="#059669" font-weight="bold">r</text>
  <text x="150" y="80" font-size="10" fill="#7c3aed">2πr</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">V = πr²h | A_lat = 2πrh</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <rect x="30" y="40" width="240" height="120" rx="3" fill="#dc2626" fill-opacity="0.1" stroke="#dc2626" stroke-width="2"/>
  <line x1="30" y1="100" x2="270" y2="100" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="150" y="25" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Superficie lateral desenrollada</text>
  <text x="150" y="75" text-anchor="middle" font-size="11" fill="#2563eb" font-weight="bold">Altura = h</text>
  <text x="150" y="140" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="bold">Base = 2πr (circunferencia)</text>
  <text x="150" y="190" text-anchor="middle" font-size="11" fill="#64748b">A_lateral = 2πr × h (rectángulo)</text>
</svg>`,
    ],
    exercises: [
      {
        id: 1201,
        question:
          "Un prisma rectangular tiene dimensiones 5 cm × 3 cm × 8 cm. ¿Cuál es su volumen?",
        options: ["40 cm³", "80 cm³", "120 cm³", "160 cm³"],
        correctIndex: 2,
        explanation:
          "V = largo × ancho × alto = 5 × 3 × 8 = 120 cm³.",
        difficulty: "basico",
      },
      {
        id: 1202,
        question:
          "Un cilindro tiene radio 4 cm y altura 10 cm. ¿Cuál es su área lateral?",
        options: [
          "40π cm²",
          "80π cm²",
          "160π cm²",
          "320π cm²",
        ],
        correctIndex: 1,
        explanation:
          "A_lateral = 2πrh = 2π(4)(10) = 80π cm². La superficie lateral desenrollada es un rectángulo de base 2πr = 8π y altura 10.",
        difficulty: "intermedio",
      },
      {
        id: 1203,
        question:
          "Un prisma hexagonal regular tiene un lado de base de 4 cm y una altura de 10 cm. ¿Cuál es su volumen y su área total?",
        options: [
          "V = 240√3 cm³, A = 240 + 24√3 cm²",
          "V = 120√3 cm³, A = 120 + 24√3 cm²",
          "V = 240√3 cm³, A = 240 + 48√3 cm²",
          "V = 480√3 cm³, A = 480 + 48√3 cm²",
        ],
        correctIndex: 2,
        explanation:
          "Área del hexágono = 6 × (√3/4)(4²) = 6 × 4√3 = 24√3 cm². Volumen = 24√3 × 10 = 240√3 cm³. Perímetro = 6 × 4 = 24 cm. A_lateral = 24 × 10 = 240 cm². A_total = 2(24√3) + 240 = 48√3 + 240 cm².",
        difficulty: "avanzado",
      },
    ],
  },
]