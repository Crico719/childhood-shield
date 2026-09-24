[
  {
    slug: "piramide-y-cono",
    tip: "En el examen, distingue siempre entre la altura (h) y la apotema o generatriz (g). La altura cae perpendicular desde el vértice al centro de la base; la generatriz va del vértice al borde de la base. Muchos errores ocurren por confundir ambas. Memoriza: V_pirámide = (1/3)·A_base·h y V_cono = (1/3)·π·r²·h.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **pirámide** es un sólido cuya base es un polígono y cuyas caras laterales son triángulos que convergen en un punto llamado **vértice**.",
          "Un **cono** es un sólido cuya base es un círculo y cuya superficie lateral se curva desde el borde de la base hasta un punto llamado **vértice** o **ápice**.",
          "La **altura (h)** de una pirámide o cono es el segmento perpendicular que va desde el vértice hasta el plano de la base.",
          "La **apotema de la pirámide** o **generatriz del cono (g)** es la distancia desde el vértice hasta un punto del borde de la base, midiendo sobre la superficie lateral.",
          "Una pirámide se denomina **regular** cuando su base es un polígono regular y su vértice se proyecta sobre el centro de la base.",
          "El cono se llama **recto** cuando su eje es perpendicular al plano de la base.",
          "La **altura de un tronco** (pirámide o cono truncado) es la distancia perpendicular entre las dos bases paralelas."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Volumen de pirámide:** V = (1/3) · A_base · h, donde A_base es el área de la base y h es la altura.",
          "**Volumen de cono:** V = (1/3) · π · r² · h, donde r es el radio de la base circular.",
          "**Área lateral de pirámide regular:** A_L = (1/2) · P_base · g, donde P_base es el perímetro de la base y g es el apotema (generatriz lateral).",
          "**Área lateral de cono recto:** A_L = π · r · g, donde g = √(r² + h²) es la generatriz.",
          "**Área total de cono:** A_T = π · r · g + π · r² = π · r · (g + r).",
          "**Relación generatriz-altura-radio:** g² = h² + r² (en cono recto, análogo al teorema de Pitágoras).",
          "**Volumen de tronco de cono:** V = (1/3) · π · h · (r₁² + r₂² + r₁ · r₂), donde r₁ y r₂ son los radios de las bases.",
          "**Volumen de tronco de pirámide:** V = (h/3) · (A₁ + A₂ + √(A₁ · A₂)), donde A₁ y A₂ son las áreas de las bases."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Teorema de la sección cónica (Pappus-Guldinus) para superficies de revolución:** El área de una superficie de revolución generada por una curva plana es el producto de la longitud de la curva por la distancia recorrida por su centroide.",
          "**Volúmenes por el método de Pappus:** El volumen generado por una figura plana al rotar alrededor de un eje exterior es igual al área de la figura multiplicada por la distancia recorrida por su centroide: V = 2π · d̄ · A.",
          "**Relación de semejanza:** Si dos pirámides o conos son semejanza con razón de proporcionalidad k, entonces: relación de alturas = k, relación de áreas = k², relación de volúmenes = k³.",
          "**Proporción de un cono y su circunsferencia:** En un cono recto, el ángulo del vértice α satisface: tan(α/2) = r/h. Esto permite determinar el ángulo del cono conocidos r y h.",
          "**Área lateral del tronco de cono:** A_L = π · (r₁ + r₂) · g_t, donde g_t es la generatriz del tronco.",
          "**Centroide de una pirámide:** El centroide de volumen de una pirámide o cono recto se encuentra a una distancia de h/4 desde la base, es decir, a 3h/4 desde el vértice."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="80,170 170,170 125,50" fill="none" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="125" cy="170" rx="45" ry="12" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="125" y1="50" x2="125" y2="170" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="125" y1="50" x2="170" y2="170" stroke="#059669" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="130" y="115" fill="#dc2626" font-size="13" font-family="sans-serif" font-weight="bold">h</text>
  <text x="152" y="118" fill="#059669" font-size="13" font-family="sans-serif" font-weight="bold">g</text>
  <text x="125" y="185" fill="#2563eb" font-size="13" font-family="sans-serif" font-weight="bold">r</text>
  <text x="150" y="30" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Pirámide regular</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="100" y1="40" x2="60" y2="165" stroke="#2563eb" stroke-width="2"/>
  <line x1="100" y1="40" x2="180" y2="165" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="120" cy="165" rx="60" ry="14" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="100" y1="40" x2="120" y2="165" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="40" x2="180" y2="165" stroke="#059669" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="105" y="105" fill="#dc2626" font-size="13" font-family="sans-serif" font-weight="bold">h</text>
  <text x="148" y="110" fill="#059669" font-size="13" font-family="sans-serif" font-weight="bold">g</text>
  <text x="135" y="178" fill="#2563eb" font-size="13" font-family="sans-serif" font-weight="bold">r</text>
  <text x="130" y="22" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Cono recto</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="110" y1="50" x2="70" y2="150" stroke="#2563eb" stroke-width="2"/>
  <line x1="110" y1="50" x2="190" y2="150" stroke="#2563eb" stroke-width="2"/>
  <line x1="70" y1="150" x2="190" y2="150" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="130" cy="150" rx="60" ry="12" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="110" y1="50" x2="130" y2="150" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="130" y1="100" x2="130" y2="150" stroke="#7c3aed" stroke-width="1.5"/>
  <line x1="110" y1="50" x2="170" y2="100" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="2,2"/>
  <line x1="110" y1="50" x2="170" y2="100" stroke="#7c3aed" stroke-width="1.5"/>
  <ellipse cx="130" cy="100" rx="30" ry="8" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="115" y="80" fill="#dc2626" font-size="12" font-family="sans-serif" font-weight="bold">h₁</text>
  <text x="135" y="130" fill="#7c3aed" font-size="12" font-family="sans-serif" font-weight="bold">h</text>
  <text x="100" y="38" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Tronco de pirámide</text>
</svg>`
    ],
    exercises: [
      {
        id: 1301,
        question: "¿Cuál es el volumen de una pirámide cuya base es un cuadrado de lado 6 cm y cuya altura mide 10 cm?",
        options: ["120 cm³", "60 cm³", "360 cm³", "180 cm³"],
        correctIndex: 0,
        explanation: "A_base = 6² = 36 cm². V = (1/3)·36·10 = 120 cm³.",
        difficulty: "basico"
      },
      {
        id: 1302,
        question: "Un cono recto tiene radio de base 5 cm y generatriz de 13 cm. ¿Cuál es su área lateral?",
        options: ["65π cm²", "25π cm²", "156π cm²", "90π cm²"],
        correctIndex: 0,
        explanation: "A_L = π·r·g = π·5·13 = 65π cm². La generatriz ya se nos dio directamente.",
        difficulty: "intermedio"
      },
      {
        id: 1303,
        question: "Un cono recto tiene una generatriz de 25 cm y un radio de base de 7 cm. Se trunca el cono a la mitad de su altura (medida sobre el eje). ¿Cuál es el volumen del tronco resultante si la altura total del cono original es 24 cm?",
        options: ["308π cm³", "154π cm³", "616π cm³", "462π cm³"],
        correctIndex: 0,
        explanation: "La altura total es h=24. Truncando a la mitad, h_tronco=12. Por semejanza, el radio del cono pequeño es r₂=3.5 y el radio mayor es r₁=7. V=(1/3)·π·12·(7²+3.5²+7·3.5)=(1/3)·π·12·(49+12.25+24.5)=(1/3)·π·12·85.75=12·π·85.75/3=308π cm³.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "esfera",
    tip: "La fórmula de la esfera V = (4/3)πr³ debe memorizarse perfectamente. En el examen, cuidado: muchos preguntan el diámetro y no el radio. También recuerda que A = 4πr². Un atajo: el área de la esfera es exactamente la derivada del volumen respecto a r: dV/dr = 4πr².",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **esfera** es el conjunto de todos los puntos del espacio que están a una distancia igual (radio **r**) de un punto fijo llamado **centro**.",
          "Un **semiesfera** es la mitad de una esfera, cortada por un plano que pasa por su centro. La intersección se llama **ecuador** o **círculo máximo**.",
          "Un **casquete esférico** es la porción de esfera cortada por un plano que no necesariamente pasa por el centro.",
          "El **radio (r)** es la distancia del centro a cualquier punto de la superficie. El **diámetro (d)** vale d = 2r.",
          "Un **gran círculo** es la intersección de la esfera con un plano que pasa por su centro. Es el círculo de mayor radio posible en la esfera (radio = r).",
          "Los **polos** de una esfera son dos puntos opuestos sobre un eje, y la **distancia polar** es la distancia entre ambos polos a lo largo de la superficie.",
          "Una **zona esférica** es la superficie lateral de la esfera entre dos planos paralelos que la cortan."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Volumen de esfera:** V = (4/3) · π · r³.",
          "**Superficie de esfera:** A = 4 · π · r².",
          "**Volumen de semiesfera:** V = (2/3) · π · r³.",
          "**Área de zona esférica:** A_zona = 2 · π · r · h, donde h es la altura del casquete (distancia entre los dos planos cortantes).",
          "**Volumen de casquete esférico:** V_casquete = (π · h² / 3) · (3r − h).",
          "**Relación esfera-cubo circunscrito:** Si un cubo de lado a circunscribe una esfera, entonces r = a/2 y V_esfera = (π/6)·a³.",
          "**Relación esfera-cilindro circunscrito:** Si un cilindro de radio r y altura 2r circunscribe una esfera, entonces: V_esfera/V_cilindro = 2/3.",
          "**Proporción de Arquímedes:** La esfera inscrita en un cilindro tiene exactamente 2/3 del volumen y 2/3 del área superficial del cilindro."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Análisis dimensional:** Las fórmulas de la esfera son invariantes bajo escalado. Si duplicamos el radio, el volumen se multiplica por 2³ = 8 y el área por 2² = 4.",
          "**La esfera como solución de optimización:** De todos los cuerpos con igual volumen, la esfera tiene la menor superficie. Esto se demuestra con cálculo de variaciones.",
          "**Teorema de la esfera y el tetraedro:** Para un tetraedro inscrito en una esfera de radio R, existe la fórmula R = (√6/4)·a para un tetraedro regular de lado a.",
          "**Área de un triángulo esférico:** A = R²·(α + β + γ − π), donde α, β, γ son los ángulos del triángulo esférico medidos en radianes y R es el radio de la esfera.",
          "**Volumen esférico en coordenadas esféricas:** V = ∫∫∫ r²·sin(φ) dr dφ dθ, integrando r de 0 a R, φ de 0 a π, y θ de 0 a 2π.",
          "**Relación con círculos de Apolonio:** En geometría esférica, las distancias entre puntos se miden por el ángulo central: la distancia esférica d = R·θ."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <circle cx="150" cy="100" r="70" fill="none" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="150" cy="100" rx="70" ry="20" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="150" y1="100" x2="220" y2="100" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="150" y2="30" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="150" cy="100" r="3" fill="#dc2626"/>
  <text x="178" y="95" fill="#dc2626" font-size="14" font-family="sans-serif" font-weight="bold">r</text>
  <text x="155" y="65" fill="#059669" font-size="14" font-family="sans-serif" font-weight="bold">r</text>
  <text x="108" y="125" fill="#2563eb" font-size="12" font-family="sans-serif" font-weight="bold">ecuador</text>
  <text x="100" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Esfera con ecuador</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <circle cx="150" cy="100" r="70" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="150" y1="100" x2="220" y2="100" stroke="#dc2626" stroke-width="1.5"/>
  <path d="M 100 100 A 50 50 0 0 1 150 50" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M 150 50 A 70 70 0 0 1 220 100" fill="#2563eb" fill-opacity="0.1"/>
  <line x1="150" y1="100" x2="150" y2="30" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="150" y1="30" x2="220" y2="100" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="150" cy="100" r="3" fill="#dc2626"/>
  <text x="178" y="95" fill="#dc2626" font-size="13" font-family="sans-serif" font-weight="bold">r</text>
  <text x="90" y="55" fill="#7c3aed" font-size="12" font-family="sans-serif" font-weight="bold">R esférico</text>
  <text x="130" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Triángulo esférico</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <rect x="75" y="30" width="150" height="140" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="150" cy="100" r="70" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="220" y2="100" stroke="#059669" stroke-width="1.5"/>
  <line x1="75" y1="100" x2="225" y2="100" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="150" y1="30" x2="150" y2="170" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="178" y="95" fill="#059669" font-size="13" font-family="sans-serif" font-weight="bold">r</text>
  <text x="130" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Esfera en cubo</text>
  <text x="90" y="195" fill="#7c3aed" font-size="11" font-family="sans-serif">lado = 2r</text>
</svg>`
    ],
    exercises: [
      {
        id: 1401,
        question: "¿Cuál es el volumen de una esfera de radio 6 cm? (Usar π ≈ 3.14)",
        options: ["904.32 cm³", "226.08 cm³", "452.16 cm³", "113.04 cm³"],
        correctIndex: 0,
        explanation: "V = (4/3)·π·r³ = (4/3)·3.14·6³ = (4/3)·3.14·216 = 904.32 cm³.",
        difficulty: "basico"
      },
      {
        id: 1402,
        question: "Un casquete esférico tiene radio de esfera R = 10 cm y altura h = 4 cm. ¿Cuál es su volumen?",
        options: ["175.93 cm³", "100.53 cm³", "251.20 cm³", "334.93 cm³"],
        correctIndex: 0,
        explanation: "V = (π·h²/3)·(3R − h) = (π·16/3)·(30 − 4) = (16π/3)·26 = 416π/3 ≈ 175.93 cm³.",
        difficulty: "intermedio"
      },
      {
        id: 1403,
        question: "Un cilindro circunscribe una esfera de radio 5 cm (es decir, la esfera toca las tapas y la pared lateral del cilindro). ¿Cuál es la relación entre el volumen de la esfera y el del cilindro?",
        options: ["2/3", "1/2", "3/4", "4/3"],
        correctIndex: 0,
        explanation: "El cilindro que circunscribe una esfera de radio r tiene radio r y altura 2r. V_esfera = (4/3)πr³, V_cilindro = πr²(2r) = 2πr³. Relación: (4/3)πr³ / 2πr³ = (4/3)/2 = 2/3.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "la-recta",
    tip: "Dominar las tres formas de ecuación de la recta (pendiente-intersección, punto-pendiente y general) es clave. En el examen, identifica primero qué te dan: si te dan dos puntos usa m=(y₂−y₁)/(x₂−x₁) y luego punto-pendiente. La ecuación general Ax+By+C=0 es la más versátil para calcular distancias y ángulos.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **recta** en el plano es el lugar geométrico de todos los puntos que satisfacen una ecuación de primer grado en x e y.",
          "La **pendiente (m)** de una recta mide la inclinación de la recta y se calcula como: m = (y₂ − y₁) / (x₂ − x₁).",
          "Si m > 0 la recta sube de izquierda a derecha; si m < 0 la recta baja; si m = 0 la recta es horizontal.",
          "Una recta **vertical** no tiene pendiente definida (división por cero) y su ecuación es x = k (constante).",
          "El **intersección con el eje y** (o ordenada al origen, b) es el valor de y cuando x = 0.",
          "El **intersección con el eje x** (o abcisa) es el valor de x cuando y = 0.",
          "Dos rectas son **paralelas** si tienen la misma pendiente. Son **perpendiculares** si el producto de sus pendientes es −1."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Ecuación pendiente-intersección:** y = m·x + b, donde m es la pendiente y b la intersección con el eje y.",
          "**Ecuación punto-pendiente:** y − y₁ = m·(x − x₁), útil cuando conoces un punto y la pendiente.",
          "**Ecuación general:** A·x + B·y + C = 0 (con A, B no ambos cero). Pendiente: m = −A/B.",
          "**Ecuación interceptos:** x/a + y/b = 1, donde a y b son las intersecciones con los ejes x e y respectivamente.",
          "**Distancia entre dos puntos:** d = √[(x₂ − x₁)² + (y₂ − y₁)²].",
          "**Punto medio:** M = ((x₁ + x₂)/2, (y₁ + y₂)/2).",
          "**Ángulo entre dos rectas:** tan(θ) = |(m₂ − m₁)/(1 + m₁·m₂)|, donde θ es el ángulo agudo entre las rectas.",
          "**Distancia de un punto a una recta:** d = |A·x₀ + B·y₀ + C| / √(A² + B²), donde la recta es Ax + By + C = 0."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Ecuación de la mediatriz:** La mediatriz del segmento AB tiene pendiente −1/m_AB y pasa por el punto medio de AB.",
          "**Condiciones de concurrencia:** Tres rectas son concurrentes si el determinante |A₁ B₁ C₁; A₂ B₂ C₂; A₃ B₃ C₃| = 0.",
          "**Ángulo de inclinación:** Si θ es el ángulo que la recta forma con el eje x positivo, entonces m = tan(θ). El ángulo de inclinación satisface 0° ≤ θ < 180°.",
          "**Ecuación de familia de rectas:** La familia de rectas que pasan por la intersección de L₁ y L₂ se escribe: L₁ + λ·L₂ = 0.",
          "**Transformación de coordenadas:** Si se traslada el origen a (h, k), la recta Ax + By + C = 0 se convierte en A(x'+h) + B(y'+k) + C = 0.",
          "**Proyección ortogonal:** La proyección del punto P(x₀, y₀) sobre la recta Ax + By + C = 0 tiene coordenadas: x' = x₀ − A·(Ax₀+By₀+C)/(A²+B²), y' = y₀ − B·(Ax₀+By₀+C)/(A²+B²)."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="40" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <line x1="40" y1="170" x2="280" y2="30" stroke="#2563eb" stroke-width="2"/>
  <line x1="200" y1="100" x2="200" y2="60" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="150" y1="100" x2="200" y2="100" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,2"/>
  <circle cx="200" cy="60" r="3" fill="#dc2626"/>
  <circle cx="150" cy="100" r="3" fill="#059669"/>
  <text x="210" y="58" fill="#dc2626" font-size="11" font-family="sans-serif">(x₁, y₁)</text>
  <text x="155" y="115" fill="#059669" font-size="11" font-family="sans-serif">(0, b)</text>
  <text x="185" y="92" fill="#7c3aed" font-size="12" font-family="sans-serif" font-weight="bold">Δy</text>
  <text x="170" y="115" fill="#7c3aed" font-size="12" font-family="sans-serif" font-weight="bold">Δx</text>
  <text x="80" y="185" fill="#2563eb" font-size="13" font-family="sans-serif" font-weight="bold">y = mx + b</text>
  <text x="230" y="115" fill="#94a3b8" font-size="12" font-family="sans-serif">x</text>
  <text x="155" y="22" fill="#94a3b8" font-size="12" font-family="sans-serif">y</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <line x1="40" y1="170" x2="270" y2="40" stroke="#2563eb" stroke-width="2"/>
  <line x1="40" y1="40" x2="270" y2="170" stroke="#dc2626" stroke-width="2"/>
  <circle cx="155" cy="105" r="3" fill="#059669"/>
  <text x="230" y="35" fill="#2563eb" font-size="11" font-family="sans-serif" font-weight="bold">L₁: m₁</text>
  <text x="230" y="165" fill="#dc2626" font-size="11" font-family="sans-serif" font-weight="bold">L₂: m₂</text>
  <text x="160" y="100" fill="#059669" font-size="11" font-family="sans-serif">P</text>
  <text x="100" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Rectas perpendiculares</text>
  <text x="110" y="195" fill="#7c3aed" font-size="11" font-family="sans-serif">m₁ · m₂ = −1</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <line x1="30" y1="150" x2="280" y2="60" stroke="#2563eb" stroke-width="2"/>
  <circle cx="100" cy="130" r="3" fill="#dc2626"/>
  <line x1="100" y1="130" x2="133" y2="72" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="113" y1="102" x2="120" y2="95" stroke="#059669" stroke-width="1"/>
  <line x1="120" y1="102" x2="113" y2="95" stroke="#059669" stroke-width="1"/>
  <text x="70" y="135" fill="#dc2626" font-size="11" font-family="sans-serif">P(x₀, y₀)</text>
  <text x="135" y="70" fill="#059669" font-size="11" font-family="sans-serif">d</text>
  <text x="210" y="55" fill="#2563eb" font-size="11" font-family="sans-serif">Ax + By + C = 0</text>
  <text x="70" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Distancia punto a recta</text>
</svg>`
    ],
    exercises: [
      {
        id: 1501,
        question: "¿Cuál es la ecuación de la recta que pasa por los puntos (1, 3) y (4, 9)?",
        options: ["y = 2x + 1", "y = 3x", "y = 2x − 1", "y = 3x + 6"],
        correctIndex: 0,
        explanation: "m = (9−3)/(4−1) = 6/3 = 2. Usando punto-pendiente con (1,3): y−3 = 2(x−1) → y = 2x+1.",
        difficulty: "basico"
      },
      {
        id: 1502,
        question: "¿Cuál es la distancia del punto (2, −1) a la recta 3x − 4y + 5 = 0?",
        options: ["1.4", "3.0", "0.2", "5.0"],
        correctIndex: 1,
        explanation: "d = |A·x₀ + B·y₀ + C| / √(A² + B²) = |3(2) − 4(−1) + 5| / √(9 + 16) = |6 + 4 + 5| / √25 = 15/5 = 3.0.",
        difficulty: "intermedio"
      },
      {
        id: 1503,
        question: "Halle el área del triángulo formado por los vértices A(1, 2), B(4, 6) y C(7, 3).",
        options: ["10.5", "21", "7", "14"],
        correctIndex: 0,
        explanation: "Usando la fórmula del área con coordenadas: A = (1/2)|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)| = (1/2)|1(6−3) + 4(3−2) + 7(2−6)| = (1/2)|3 + 4 − 28| = (1/2)|−21| = 10.5.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "circunferencia-y-parabola",
    tip: "Para la circunferencia: identifica rápidamente el centro (h,k) y radio r de la ecuación general completando cuadrados. Para la parábola: siempre identifica si abre hacia arriba/abajo (eje vertical) o derecha/izquierda (eje horizontal). El foco y la directriz están a distancia p del vértice, y p = 1/(4|a|) en la forma y = ax².",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **circunferencia** es el lugar geométrico de todos los puntos que están a una distancia fija (**radio r**) de un punto fijo (**centro**).",
          "Una **parábola** es el lugar geométrico de todos los puntos que están a igual distancia de un punto fijo (**foco**) y una recta fija (**directriz**).",
          "El **vértice** de una parábola es el punto donde la parábola cruza su eje de simetría. Está a mitad de camino entre el foco y la directriz.",
          "La **distancia focal** (o parámetro **p**) es la distancia del vértice al foco (y también del vértice a la directriz).",
          "El **eje** de la parábola es la recta que pasa por el foco y es perpendicular a la directriz.",
          "Un **corte** de una parábola (la **latus rectum**) es el segmento que pasa por el foco, es paralelo a la directriz y termina en la parábola.",
          "En una circunferencia, una **cuerda** es un segmento que une dos puntos de la circunferencia. Un **diámetro** es la cuerda que pasa por el centro."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Ecuación de la circunferencia (centro-radio):** (x − h)² + (y − k)² = r², con centro (h, k) y radio r.",
          "**Ecuación general de la circunferencia:** x² + y² + Dx + Ey + F = 0, con centro (−D/2, −E/2) y r² = (D²+E²)/4 − F.",
          "**Forma canónica de la parábola (eje vertical):** (x − h)² = 4p(y − k), vértice en (h, k), foco en (h, k+p).",
          "**Forma canónica de la parábola (eje horizontal):** (y − k)² = 4p(x − h), vértice en (h, k), foco en (h+p, k).",
          "**Parábola función cuadrática:** y = a(x−h)² + k, con a = 1/(4p). Si a > 0 abre hacia arriba; si a < 0, hacia abajo.",
          "**Largo del latus rectum:** 4|p|.",
          "**Ecuación de la recta tangente a la circunferencia:** x·x₁ + y·y₁ = r² (para centro en el origen), o sustituyendo coordenadas relativas al centro.",
          "**Condición de tangencia:** Una recta es tangente a una circunferencia si la distancia del centro a la recta es exactamente igual al radio."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Ángulo inscrito en semicircunferencia:** Todo ángulo inscrito que abarca un diámetro es recto (90°). Este es el teorema de Tales.",
          "**Potencia de un punto respecto a una circunferencia:** Para un punto P y una circunferencia, PA·PB es constante para cualquier recta que pase por P y corte la circunferencia en A y B.",
          "**Ángulo entre dos circunferencias:** Si dos circunferencias se cortan, el ángulo entre ellas es el ángulo entre sus tangentes en los puntos de intersección.",
          "**Propiedad de reflexión de la parábola:** Cualquier rayo paralelo al eje que incide sobre una parábola se refleja pasando por el foco. Esto se usa en antenas parabólicas y faros.",
          "**Propiedades métricas en la parábola:** Para cualquier punto P sobre la parábola y = ax², la distancia al foco PF = y_P + p = y_P + 1/(4a).",
          "**Ecuación polar de la parábola:** Con el foco como polo y el eje como polar, r = 2p/(1 − cos θ), donde p es la distancia focal."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <circle cx="150" cy="100" r="60" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="150" cy="100" r="3" fill="#dc2626"/>
  <text x="155" y="95" fill="#dc2626" font-size="11" font-family="sans-serif">C(h,k)</text>
  <line x1="150" y1="100" x2="210" y2="100" stroke="#059669" stroke-width="1.5"/>
  <text x="172" y="95" fill="#059669" font-size="12" font-family="sans-serif" font-weight="bold">r</text>
  <text x="155" y="115" fill="#059669" font-size="11" font-family="sans-serif">(x₁,y₁)</text>
  <text x="80" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">(x−h)²+(y−k)²=r²</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <path d="M 80,170 Q 150,30 220,170" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="150" y1="85" x2="150" y2="115" stroke="#dc2626" stroke-width="1.5"/>
  <circle cx="150" cy="85" r="3" fill="#dc2626"/>
  <line x1="80" y1="170" x2="220" y2="170" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="150" y1="115" x2="150" y2="170" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="155" y="83" fill="#dc2626" font-size="11" font-family="sans-serif" font-weight="bold">Foco</text>
  <text x="155" y="110" fill="#7c3aed" font-size="11" font-family="sans-serif" font-weight="bold">p</text>
  <text x="155" y="165" fill="#059669" font-size="11" font-family="sans-serif" font-weight="bold">Directriz</text>
  <text x="155" y="120" fill="#94a3b8" font-size="10" font-family="sans-serif">Vértice</text>
  <text x="80" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Parábola (eje vertical)</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <path d="M 220,80 Q 80,100 220,120" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="85" cy="100" r="3" fill="#dc2626"/>
  <line x1="215" y1="10" x2="215" y2="190" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="85" y1="100" x2="215" y2="100" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="90" y="95" fill="#dc2626" font-size="11" font-family="sans-serif" font-weight="bold">F</text>
  <text x="140" y="93" fill="#7c3aed" font-size="11" font-family="sans-serif" font-weight="bold">p</text>
  <text x="115" y="115" fill="#94a3b8" font-size="10" font-family="sans-serif">V</text>
  <text x="220" y="95" fill="#059669" font-size="11" font-family="sans-serif" font-weight="bold">Directriz</text>
  <text x="70" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Parábola (eje horizontal)</text>
</svg>`
    ],
    exercises: [
      {
        id: 1601,
        question: "¿Cuál es el centro y el radio de la circunferencia x² + y² − 6x + 4y − 12 = 0?",
        options: ["Centro (3, −2), r = 5", "Centro (−3, 2), r = 5", "Centro (3, −2), r = 25", "Centro (6, −4), r = 12"],
        correctIndex: 0,
        explanation: "Completando cuadrados: (x²−6x+9) + (y²+4y+4) = 12+9+4 → (x−3)² + (y+2)² = 25. Centro (3,−2), r=5.",
        difficulty: "basico"
      },
      {
        id: 1602,
        question: "La ecuación de una parábola con vértice en el origen y foco en (0, 3) es:",
        options: ["x² = 12y", "y² = 12x", "x² = 6y", "y² = 6x"],
        correctIndex: 0,
        explanation: "El foco está en (0,3), por lo que p=3 y la parábola abre hacia arriba. x² = 4py = 4(3)y = 12y.",
        difficulty: "intermedio"
      },
      {
        id: 1603,
        question: "Una parábola tiene vértice en (1, −2) y foco en (1, 1). ¿Cuál es su ecuación?",
        options: ["(x−1)² = 12(y+2)", "(x−1)² = 6(y+2)", "(y+2)² = 12(x−1)", "(x+1)² = 12(y−2)"],
        correctIndex: 0,
        explanation: "El foco (1,1) está arriba del vértice (1,−2), así que la parábola abre hacia arriba con eje vertical. p = 1−(−2) = 3. Forma: (x−1)² = 4p(y−(−2)) = 12(y+2).",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "elipse-e-hiperbola",
    tip: "La clave para resolver ejercicios de cónicas rápidamente es memorizar la relación c² = a² − b² (elipse) vs c² = a² + b² (hiperbola). Identifica siempre cuál es a, b y c, y ubica los focos sobre el eje mayor. El excentricidad e te dice la forma: 0 < e < 1 (elipse), e > 1 (hiperbola). A mayor e, más alargada la figura.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **elipse** es el lugar geométrico de todos los puntos del plano tales que la **suma** de las distancias a dos puntos fijos (**focos**) es constante e igual a **2a**.",
          "Una **hiperbola** es el lugar geométrico de todos los puntos del plano tales que la **diferencia** de las distancias a dos puntos fijos (**focos**) es constante e igual a **2a**.",
          "El **centro** de la elipse e hiperbola es el punto medio entre los dos focos.",
          "El **eje mayor** es el segmento de longitud 2a que une los dos **vértices** de la elipse o hiperbola.",
          "En la elipse, el **eje menor** tiene longitud 2b, con b < a.",
          "La **excentricidad (e)** mide la forma de la cónica: para la elipse 0 < e < 1, para la hiperbola e > 1.",
          "Las **assíntotas** de la hiperbola son dos rectas que se cruzan en el centro y que la hiperbola se aproxima infinitamente sin cruzarlas."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Elipse (eje mayor horizontal):** x²/a² + y²/b² = 1, con a > b > 0, focos en (±c, 0) y c² = a² − b².",
          "**Elipse (eje mayor vertical):** x²/b² + y²/a² = 1, con a > b > 0, focos en (0, ±c).",
          "**Excentricidad de la elipse:** e = c/a, con 0 < e < 1.",
          "**Hiperbola (eje transversal horizontal):** x²/a² − y²/b² = 1, focos en (±c, 0) y c² = a² + b².",
          "**Hiperbola (eje transversal vertical):** y²/a² − x²/b² = 1, focos en (0, ±c).",
          "**Excentricidad de la hiperbola:** e = c/a, con e > 1.",
          "**Assíntotas de la hiperbola:** y = ±(b/a)·x (eje horizontal) o y = ±(a/b)·x (eje vertical).",
          "**Relación fundamental:** En la elipse, la suma PF₁ + PF₂ = 2a para cualquier punto P de la elipse. En la hiperbola, |PF₁ − PF₂| = 2a."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Propiedades de reflexión de la elipse:** Un rayo emitido desde un foco de una elipse se refleja y pasa por el otro foco. Esto se aplica en lámparas elípticas y en litotripcia.",
          "**Propiedades de reflexión de la hiperbola:** Un rayo emitido desde un foco de una hiperbola se refleja como si viniera del otro foco. Se usa en telescopios de Cassegrain.",
          "**Forma general de las cónicas:** Ax² + Bxy + Cy² + Dx + Ey + F = 0. El discriminante B² − 4AC determina el tipo: < 0 (elipse), = 0 (parábola), > 0 (hiperbola).",
          "**Invariantes bajo rotación:** Al rotar coordenadas para eliminar el término Bxy, los valores A + C y AC − B²/4 se conservan.",
          "**Cónicas degeneradas:** La ecuación general puede representar un punto (0 intersecciones), una recta (1 intersección tangente), dos rectas, o una circunferencia como casos degenerados.",
          "**Área y perímetro de la elipse:** Área = π·a·b. El perímetro no tiene fórmula exacta simple; una aproximación es P ≈ π[3(a+b) − √((3a+b)(a+3b))] (fórmula de Ramanujan)."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <ellipse cx="150" cy="100" rx="100" ry="55" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="100" cy="100" r="3" fill="#dc2626"/>
  <circle cx="200" cy="100" r="3" fill="#dc2626"/>
  <circle cx="50" cy="100" r="3" fill="#059669"/>
  <circle cx="250" cy="100" r="3" fill="#059669"/>
  <line x1="150" y1="100" x2="50" y2="100" stroke="#059669" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="250" y2="100" stroke="#059669" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="150" y2="45" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="93" y="93" fill="#dc2626" font-size="11" font-family="sans-serif">F₁</text>
  <text x="203" y="93" fill="#dc2626" font-size="11" font-family="sans-serif">F₂</text>
  <text x="43" y="93" fill="#059669" font-size="11" font-family="sans-serif">V₁</text>
  <text x="253" y="93" fill="#059669" font-size="11" font-family="sans-serif">V₂</text>
  <text x="155" y="58" fill="#7c3aed" font-size="11" font-family="sans-serif">b</text>
  <text x="80" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Elipse: x²/a² + y²/b² = 1</text>
  <text x="80" y="195" fill="#7c3aed" font-size="11" font-family="sans-serif">c² = a² − b²</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <line x1="50" y1="25" x2="250" y2="175" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="50" y1="175" x2="250" y2="25" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/>
  <path d="M 60,55 Q 120,90 60,145" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="M 240,55 Q 180,90 240,145" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="110" cy="100" r="3" fill="#dc2626"/>
  <circle cx="190" cy="100" r="3" fill="#dc2626"/>
  <line x1="60" y1="100" x2="100" y2="100" stroke="#059669" stroke-width="1"/>
  <line x1="200" y1="100" x2="240" y2="100" stroke="#059669" stroke-width="1"/>
  <text x="103" y="93" fill="#dc2626" font-size="11" font-family="sans-serif">F₁</text>
  <text x="193" y="93" fill="#dc2626" font-size="11" font-family="sans-serif">F₂</text>
  <text x="80" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Hiperbola: x²/a² − y²/b² = 1</text>
  <text x="55" y="18" fill="#059669" font-size="11" font-family="sans-serif">assíntotas</text>
  <text x="80" y="195" fill="#7c3aed" font-size="11" font-family="sans-serif">c² = a² + b²</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <text x="80" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Excentricidad comparativa</text>
  <ellipse cx="80" cy="110" rx="50" ry="48" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="60" y="180" fill="#2563eb" font-size="11" font-family="sans-serif">e ≈ 0 (círculo)</text>
  <ellipse cx="200" cy="110" rx="70" ry="35" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="160" y="180" fill="#dc2626" font-size="11" font-family="sans-serif">e ≈ 0.87 (elipse)</text>
  <path d="M 240,40 Q 260,100 240,160" fill="none" stroke="#059669" stroke-width="1.5"/>
  <path d="M 270,40 Q 250,100 270,160" fill="none" stroke="#059669" stroke-width="1.5"/>
  <text x="240" y="180" fill="#059669" font-size="11" font-family="sans-serif">e > 1 (hiperbola)</text>
  <line x1="5" y1="110" x2="300" y2="110" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="150" y1="10" x2="150" y2="195" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`
    ],
    exercises: [
      {
        id: 1701,
        question: "¿Cuáles son los focos de la elipse x²/25 + y²/16 = 1?",
        options: ["(±3, 0)", "(±4, 0)", "(±5, 0)", "(±√41, 0)"],
        correctIndex: 0,
        explanation: "a²=25, b²=16. c²=a²−b²=25−16=9, c=3. Los focos están en (±3, 0).",
        difficulty: "basico"
      },
      {
        id: 1702,
        question: "Una hiperbola tiene vértices en (±5, 0) y focos en (±13, 0). ¿Cuál es su ecuación?",
        options: ["x²/25 − y²/144 = 1", "x²/169 − y²/25 = 1", "x²/25 − y²/169 = 1", "x²/144 − y²/25 = 1"],
        correctIndex: 0,
        explanation: "a=5 (vértices), c=13 (focos). c²=a²+b² → 169=25+b² → b²=144. Ecuación: x²/25 − y²/144 = 1.",
        difficulty: "intermedio"
      },
      {
        id: 1703,
        question: "Una elipse tiene focos en (0, ±4) y pasa por el punto (3, 0). ¿Cuál es su excentricidad?",
        options: ["4/5", "3/5", "4/3", "5/4"],
        correctIndex: 0,
        explanation: "Focos en (0,±4): c=4. El punto (3,0) está en la elipse: 3²/b²+0²/a²=1 → b²=9, b=3. Con eje vertical: a²=b²+c²=9+16=25, a=5. e=c/a=4/5.",
        difficulty: "avanzado"
      }
    ]
  }
]
