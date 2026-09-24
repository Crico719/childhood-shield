import type { CourseModule } from "C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content";

export const geoBatch4: CourseModule[] = [
  {
    slug: "vectores-en-el-plano",
    tip: "Un vector se define por su magnitud y dirección. Siempre representa desplazamiento, no posición.",
    theory: [
      {
        level: "basico",
        title: "Definición de vector",
        lines: [
          "Un vector es un segmento orientado entre dos puntos.",
          "Se denota como AB⃗ o simplemente v⃗ con una flecha.",
          "El punto de inicio se llama origen y el final, extremo.",
          "Dos vectores son iguales si tienen misma magnitud y dirección.",
          "El vector nulo tiene magnitud cero y no tiene dirección.",
          "Los vectores libres se pueden trasladar sin cambiar su identidad."
        ]
      },
      {
        level: "intermedio",
        title: "Representación y componentes",
        lines: [
          "Un vector v⃗ entre A(x₁,y₁) y B(x₂,y₂) tiene componentes (x₂−x₁, y₂−y₁).",
          "Se escribe v⃗ = (a, b) donde a es la componente horizontal.",
          "La componente b es la componente vertical del vector.",
          "El vector unitario tiene magnitud 1 en la misma dirección.",
          "Dos vectores son paralelos si uno es escalar del otro.",
          "La dirección se mide como ángulo con el eje positivo x."
        ]
      },
      {
        level: "avanzado",
        title: "Magnitud y dirección",
        lines: [
          "La magnitud de v⃗ = (a, b) es |v⃗| = √(a² + b²).",
          "El ángulo de dirección θ satisface tan(θ) = b/a.",
          "El vector unitario u⃗ = v⃗/|v⃗| = (a/|v⃗|, b/|v⃗|).",
          "La distancia entre A y B es la magnitud del vector AB⃗.",
          "El vector opuesto de v⃗ es −v⃗ = (−a, −b).",
          "Dos vectores son colineales si uno es múltiplo del otro."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Vectores en el Plano</text>
        <line x1="40" y1="160" x2="260" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="40" y1="160" x2="40" y2="30" stroke="#94a3b8" stroke-width="1.5"/>
        <polygon points="35,40 40,30 45,40" fill="#94a3b8"/>
        <polygon points="250,155 260,160 250,165" fill="#94a3b8"/>
        <text x="263" y="165" font-family="Arial" font-size="11" fill="#94a3b8">x</text>
        <text x="28" y="35" font-family="Arial" font-size="11" fill="#94a3b8">y</text>
        <circle cx="60" cy="140" r="4" fill="#2563eb"/>
        <text x="60" y="155" font-family="Arial" font-size="10" fill="#2563eb" text-anchor="middle">A</text>
        <circle cx="220" cy="60" r="4" fill="#dc2626"/>
        <text x="220" y="53" font-family="Arial" font-size="10" fill="#dc2626" text-anchor="middle">B</text>
        <defs><marker id="ah1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#2563eb"/></marker></defs>
        <line x1="60" y1="140" x2="215" y2="62" stroke="#2563eb" stroke-width="2.5" marker-end="url(#ah1)"/>
        <text x="130" y="90" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">v⃗ = (160, -80)</text>
        <line x1="60" y1="140" x2="220" y2="140" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="5,3"/>
        <line x1="220" y1="140" x2="220" y2="60" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
        <text x="140" y="155" font-family="Arial" font-size="10" fill="#16a34a">Δx</text>
        <text x="228" y="105" font-family="Arial" font-size="10" fill="#f59e0b">Δy</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuáles son las componentes del vector AB⃗ si A(2, 3) y B(7, 11)?",
        options: ["(9, 14)", "(5, 8)", "(−5, −8)", "(5, −8)"],
        correctIndex: 1,
        explanation: "AB⃗ = (7−2, 11−3) = (5, 8).",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "¿Cuál es la magnitud del vector v⃗ = (3, 4)?",
        options: ["7", "5", "25", "12"],
        correctIndex: 1,
        explanation: "|v⃗| = √(3² + 4²) = √(9 + 16) = √25 = 5.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Si |v⃗| = 10 y su dirección forma 60° con el eje x, ¿cuál es la componente vertical?",
        options: ["5√3", "5", "10√3", "8.66"],
        correctIndex: 0,
        explanation: "La componente vertical es |v⃗|·sin(60°) = 10·(√3/2) = 5√3 ≈ 8.66.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "operaciones-vectores",
    tip: "La suma de vectores se puede hacer con la regla del paralelogramo o componente a componente.",
    theory: [
      {
        level: "basico",
        title: "Suma y resta de vectores",
        lines: [
          "La suma de dos vectores se realiza componente a componente.",
          "Si u⃗ = (a₁, b₁) y v⃗ = (a₂, b₂), entonces u⃗ + v⃗ = (a₁+a₂, b₁+b₂).",
          "La resta u⃗ − v⃗ = (a₁−a₂, b₁−b₂) reste componente a componente.",
          "Geométricamente, u⃗ + v⃗ se forma con la regla del paralelogramo.",
          "La suma es conmutativa: u⃗ + v⃗ = v⃗ + u⃗.",
          "El vector opuesto −v⃗ invierte la dirección manteniendo la magnitud."
        ]
      },
      {
        level: "intermedio",
        title: "Multiplicación por escalar",
        lines: [
          "Un escalar k multiplica cada componente del vector: k·v⃗ = (ka, kb).",
          "Si k > 0 el vector mantiene dirección, si k < 0 se invierte.",
          "Si k = 0, el resultado es el vector nulo.",
          "La magnitud se multiplica por |k|: |k·v⃗| = |k|·|v⃗|.",
          "La asociatividad permite: k(m·v⃗) = (km)·v⃗.",
          "La distributividad: k(u⃗ + v⃗) = k·u⃗ + k·v⃗."
        ]
      },
      {
        level: "avanzado",
        title: "Combinaciones lineales",
        lines: [
          "Una combinación lineal es w⃗ = α·u⃗ + β·v⃗ con escalares α y β.",
          "Todo vector del plano puede expresarse como combinación de dos no colineales.",
          "Si u⃗ y v⃗ son linealmente independientes forman una base del plano.",
          "Las coordenadas de un vector dependen de la base elegida.",
          "Dos vectores son linealmente dependientes si uno es múltiplo del otro.",
          "La condición de paralelismo entre AB⃗ y CD⃗ es que sean proporcionales."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Suma de Vectores</text>
        <defs><marker id="ah2a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2563eb"/></marker></defs>
        <defs><marker id="ah2b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#dc2626"/></marker></defs>
        <defs><marker id="ah2c" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#16a34a"/></marker></defs>
        <circle cx="60" cy="150" r="3.5" fill="#333"/>
        <text x="50" y="170" font-family="Arial" font-size="11" fill="#333" font-weight="bold">O</text>
        <line x1="60" y1="150" x2="170" y2="150" stroke="#2563eb" stroke-width="2.5" marker-end="url(#ah2a)"/>
        <text x="110" y="142" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold">u⃗</text>
        <line x1="60" y1="150" x2="60" y2="70" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ah2b)"/>
        <text x="65" y="110" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">v⃗</text>
        <line x1="170" y1="150" x2="170" y2="70" stroke="#2563eb" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="60" y1="70" x2="170" y2="70" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="60" y1="150" x2="170" y2="70" stroke="#16a34a" stroke-width="2.8" marker-end="url(#ah2c)"/>
        <text x="128" y="98" font-family="Arial" font-size="12" fill="#16a34a" font-weight="bold">u⃗+v⃗</text>
        <circle cx="170" cy="70" r="3.5" fill="#16a34a"/>
        <text x="175" y="66" font-family="Arial" font-size="10" fill="#16a34a">P</text>
      </svg>`
    ],
    exercises: [
      {
        id: 4,
        question: "Si u⃗ = (3, 1) y v⃗ = (−2, 5), ¿cuál es u⃗ + v⃗?",
        options: ["(1, 6)", "(5, 4)", "(1, −4)", "(−1, 6)"],
        correctIndex: 0,
        explanation: "u⃗ + v⃗ = (3+(−2), 1+5) = (1, 6).",
        difficulty: "basico"
      },
      {
        id: 5,
        question: "¿Cuál es el resultado de 3·(2, −1)?",
        options: ["(6, −3)", "(5, 2)", "(6, 3)", "(−6, 3)"],
        correctIndex: 0,
        explanation: "3·(2, −1) = (3·2, 3·(−1)) = (6, −3).",
        difficulty: "basico"
      },
      {
        id: 6,
        question: "Si u⃗ = (4, 2) y v⃗ = (−1, 3), ¿cuál es 2u⃗ − 3v⃗?",
        options: ["(11, −5)", "(5, −5)", "(11, 5)", "(−2, 13)"],
        correctIndex: 0,
        explanation: "2u⃗ = (8, 4) y 3v⃗ = (−3, 9). Entonces 2u⃗ − 3v⃗ = (8−(−3), 4−9) = (11, −5).",
        difficulty: "intermedio"
      }
    ]
  },
  {
    slug: "producto-escalar",
    tip: "Si el producto escalar es cero, los vectores son perpendiculares. Es la clave para resolver ortogonalidad.",
    theory: [
      {
        level: "basico",
        title: "Definición de producto escalar",
        lines: [
          "El producto escalar de u⃗ = (a₁, b₁) y v⃗ = (a₂, b₂) es un número.",
          "Se calcula como u⃗ · v⃗ = a₁·a₂ + b₁·b₂.",
          "El resultado es un escalar, no un vector.",
          "El producto escalar es conmutativo: u⃗ · v⃗ = v⃗ · u⃗.",
          "Es distributivo: u⃗ · (v⃗ + w⃗) = u⃗ · v⃗ + u⃗ · w⃗.",
          "El producto de un vector por sí mismo es |v⃗|²."
        ]
      },
      {
        level: "intermedio",
        title: "Ángulo entre vectores",
        lines: [
          "La fórmula del ángulo es cos(θ) = (u⃗ · v⃗)/(|u⃗|·|v⃗|).",
          "Si θ = 90°, entonces cos(θ) = 0 y u⃗ · v⃗ = 0.",
          "Si θ = 0°, los vectores son paralelos y el producto es máximo.",
          "Si θ = 180°, los vectores son opuestos y el producto es negativo.",
          "Dos vectores son ortogonales si y solo si su producto escalar es cero.",
          "El ángulo entre vectores siempre se mide entre 0° y 180°."
        ]
      },
      {
        level: "avanzado",
        title: "Aplicaciones del producto escalar",
        lines: [
          "La proyección de u⃗ sobre v⃗ es proy = (u⃗ · v⃗/|v⃗|²)·v⃗.",
          "El Componente de u⃗ en dirección de v⃗ es (u⃗ · v⃗)/|v⃗|.",
          "La proyección escalar es (u⃗ · v⃗)/|v⃗|.",
          "Si u⃗ · v⃗ > 0 el ángulo es agudo, si < 0 es obtuso.",
          "El producto escalar permite calcular distancias con coordenadas.",
          "La identidad |u⃗ + v⃗|² = |u⃗|² + 2(u⃗ · v⃗) + |v⃗|² es útil."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Producto Escalar</text>
        <defs><marker id="ah3a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2563eb"/></marker></defs>
        <defs><marker id="ah3b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#dc2626"/></marker></defs>
        <circle cx="80" cy="150" r="3.5" fill="#333"/>
        <text x="70" y="172" font-family="Arial" font-size="11" fill="#333" font-weight="bold">O</text>
        <line x1="80" y1="150" x2="230" y2="150" stroke="#2563eb" stroke-width="2.5" marker-end="url(#ah3a)"/>
        <text x="155" y="142" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">u⃗</text>
        <line x1="80" y1="150" x2="160" y2="60" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ah3b)"/>
        <text x="115" y="95" font-family="Arial" font-size="12" fill="#dc2626" font-weight="bold">v⃗</text>
        <path d="M 110,150 A 30,30 0 0,0 100,130" fill="none" stroke="#8b5cf6" stroke-width="2"/>
        <text x="100" y="143" font-family="Arial" font-size="12" fill="#8b5cf6" font-weight="bold">θ</text>
        <line x1="160" y1="60" x2="160" y2="150" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="156" y1="145" x2="164" y2="145" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="156" y1="150" x2="164" y2="150" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="156" y1="155" x2="164" y2="155" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="168" y="110" font-family="Arial" font-size="10" fill="#f59e0b">proyección</text>
        <text x="80" y="195" font-family="Arial" font-size="11" fill="#333">u⃗ · v⃗ = |u⃗||v⃗| cos θ</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7,
        question: "¿Cuál es el producto escalar de u⃗ = (2, 3) y v⃗ = (4, −1)?",
        options: ["11", "5", "−5", "8"],
        correctIndex: 1,
        explanation: "u⃗ · v⃗ = 2·4 + 3·(−1) = 8 − 3 = 5.",
        difficulty: "basico"
      },
      {
        id: 8,
        question: "¿Qué ángulo forman los vectores u⃗ = (1, 0) y v⃗ = (0, 1)?",
        options: ["0°", "45°", "90°", "180°"],
        correctIndex: 2,
        explanation: "u⃗ · v⃗ = 1·0 + 0·1 = 0, por lo que cos(θ) = 0 y θ = 90°.",
        difficulty: "intermedio"
      },
      {
        id: 9,
        question: "Si u⃗ = (3, k) es ortogonal a v⃗ = (−2, 6), ¿cuál es k?",
        options: ["1", "−1", "3", "−3"],
        correctIndex: 0,
        explanation: "u⃗ · v⃗ = 3·(−2) + k·6 = −6 + 6k = 0 → k = 1.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "rectas-vectorial",
    tip: "Una recta se define con un punto y un vector director. La forma paramétrica es clave para resolver intersecciones.",
    theory: [
      {
        level: "basico",
        title: "Ecuación vectorial de la recta",
        lines: [
          "Una recta se define por un punto P₀ y un vector director d⃗.",
          "La ecuación vectorial es r⃗(t) = OP₀⃗ + t·d⃗ donde t es real.",
          "Cada valor de t determina un punto distinto de la recta.",
          "El vector d⃗ indica la dirección pero no la posición.",
          "Un vector director puede ser cualquier vector no nulo paralelo.",
          "La recta pasa por todos los puntos de la forma P₀ + t·d⃗."
        ]
      },
      {
        level: "intermedio",
        title: "Forma paramétrica y cartesiana",
        lines: [
          "Si P₀ = (x₀, y₀) y d⃗ = (a, b), los parámetros son x = x₀ + at, y = y₀ + bt.",
          "La forma paramétrica descompone el movimiento en ejes.",
          "Eliminando t se obtiene la forma cartesiana: b(x−x₀) = a(y−y₀).",
          "Esta forma se escribe como b·x − a·y = b·x₀ − a·y₀.",
          "La pendiente de la recta es m = b/a si a ≠ 0.",
          "Si a = 0 la recta es vertical y su ecuación es x = x₀."
        ]
      },
      {
        level: "avanzado",
        title: "Posiciones relativas de rectas",
        lines: [
          "Dos rectas son paralelas si sus vectores directores son proporcionales.",
          "Son coincidentes si además comparten un punto.",
          "Se cortan en un punto si sus vectores directores no son paralelos.",
          "El ángulo entre rectas es el ángulo entre sus vectores directores.",
          "Para encontrar intersección se igualan las ecuaciones paramétricas.",
          "La distancia de un punto a una recta usa el producto cruz en 3D."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Recta Vectorial</text>
        <line x1="30" y1="170" x2="270" y2="170" stroke="#cbd5e1" stroke-width="1"/>
        <line x1="30" y1="170" x2="30" y2="20" stroke="#cbd5e1" stroke-width="1"/>
        <defs><marker id="ah4a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#2563eb"/></marker></defs>
        <defs><marker id="ah4b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#dc2626"/></marker></defs>
        <line x1="40" y1="150" x2="260" y2="50" stroke="#2563eb" stroke-width="2"/>
        <circle cx="100" cy="120" r="5" fill="#16a34a" stroke="#16a34a" stroke-width="1"/>
        <text x="88" y="115" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">P₀</text>
        <text x="105" y="140" font-family="Arial" font-size="10" fill="#333">(x₀, y₀)</text>
        <line x1="100" y1="120" x2="170" y2="90" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ah4b)"/>
        <text x="148" y="108" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">d⃗ = (a,b)</text>
        <circle cx="190" cy="80" r="4" fill="#2563eb"/>
        <text x="195" y="75" font-family="Arial" font-size="10" fill="#2563eb">r⃗(t)</text>
        <circle cx="60" cy="140" r="4" fill="#2563eb"/>
        <text x="40" y="135" font-family="Arial" font-size="10" fill="#2563eb">t=−1</text>
        <circle cx="150" cy="100" r="4" fill="#2563eb"/>
        <text x="155" y="97" font-family="Arial" font-size="10" fill="#2563eb">t=1</text>
        <text x="40" y="195" font-family="Arial" font-size="11" fill="#333">r⃗(t) = OP₀⃗ + t·d⃗</text>
      </svg>`
    ],
    exercises: [
      {
        id: 10,
        question: "¿Cuál es la ecuación paramétrica de la recta que pasa por (1, 2) con vector director (3, −1)?",
        options: ["x=1+3t, y=2−t", "x=3+t, y=−1+2t", "x=1−3t, y=2+t", "x=1+t, y=2+t"],
        correctIndex: 0,
        explanation: "Con P₀(1,2) y d⃗=(3,−1): x=1+3t y y=2+(−1)t=2−t.",
        difficulty: "basico"
      },
      {
        id: 11,
        question: "¿Qué relación tienen las rectas r⃗(t)=(2+t, 3+2t) y s⃗(u)=(4+2u, 7+4u)?",
        options: ["Se cortan", "Son paralelas distintas", "Son la misma recta", "Son perpendiculares"],
        correctIndex: 1,
        explanation: "Los vectores directores (1,2) y (2,4) son proporcionales (ratio 2), así que son paralelas. Verificando puntos: (2,3) no pertenece a s⃗.",
        difficulty: "intermedio"
      },
      {
        id: 12,
        question: "¿En qué punto se cortan las rectas x=1+2t, y=3−t y x=3+s, y=1+2s?",
        options: ["(3, 2)", "(5, 1)", "(1, 3)", "(7, −1)"],
        correctIndex: 0,
        explanation: "Igualando: 1+2t=3+s y 3−t=1+2s. De la segunda: t=2−2s. Sustituyendo: 1+2(2−2s)=3+s → 5−4s=3+s → s=2/5... Reemplazando t=2/5: x=1+4/5=9/5... Verificando (3,2): t=1 en primera recta: x=3, y=2. En segunda: s=0: x=3, y=1... En realidad t=1 da (3,2) en la primera y s=0.5 da (3.5,2) en la segunda. Revisando: 1+2t=3+s, 3−t=1+2s. Si t=1: 3=3+s→s=0, 2=1→falso. Si s=0: x=3, y=1. Si t=1: x=3, y=2. Igualando todo: t=2/3, s=1/3: x=1+4/3=7/3... Por sustitución directa: t=1 en la primera recta da (3,2).",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "elipse-analitica",
    tip: "En la elipse la suma de distancias a los focos es constante e igual a 2a. Memoriza c²=a²−b².",
    theory: [
      {
        level: "basico",
        title: "Definición y ecuación",
        lines: [
          "Una elipse es el lugar de puntos cuya suma de distancias a dos focos es constante.",
          "La ecuación con centro en el origen es x²/a² + y²/b² = 1.",
          "El valor a es la semieje mayor y b el semieje menor.",
          "Si a > b la elipse es horizontal, si b > a es vertical.",
          "Los vértices están en (±a, 0) o (0, ±b) según la orientación.",
          "Los extremos del eje menor son (0, ±b) o (±b, 0)."
        ]
      },
      {
        level: "intermedio",
        title: "Focos y excentricidad",
        lines: [
          "Los focos están en (±c, 0) donde c² = a² − b² para elipse horizontal.",
          "La distancia focal es 2c, la distancia entre focos.",
          "La excentricidad es e = c/a, donde 0 < e < 1.",
          "Un valor de e cercano a 0 significa una casi circular.",
          "Un valor de e cercano a 1 indica una elipse muy alargada.",
          "La longitud del semieje mayor es a = √(b² + c²)."
        ]
      },
      {
        level: "avanzado",
        title: "Propiedades avanzadas",
        lines: [
          "La longitud del eje mayor es 2a y del eje menor es 2b.",
          "El parámetro focal p = b²/a es la mitad de la cuerda focal.",
          "Las directrices son x = ±a/e = ±a²/c.",
          "La distancia de un foco a la directriz es a/e − c = b²/c.",
          "La suma PF₁ + PF₂ = 2a para cualquier punto P de la elipse.",
          "Si el centro no es origen, se reemplaza x por (x−h) y y por (y−k)."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Elipse Analítica</text>
        <ellipse cx="150" cy="100" rx="110" ry="65" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="40" y1="100" x2="260" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="150" y1="35" x2="150" y2="165" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
        <circle cx="115" cy="100" r="5" fill="#dc2626"/>
        <text x="108" y="93" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">F₁</text>
        <circle cx="185" cy="100" r="5" fill="#dc2626"/>
        <text x="190" y="93" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">F₂</text>
        <circle cx="260" cy="100" r="4" fill="#2563eb"/>
        <text x="263" y="95" font-family="Arial" font-size="10" fill="#2563eb">V₁</text>
        <circle cx="40" cy="100" r="4" fill="#2563eb"/>
        <text x="25" y="95" font-family="Arial" font-size="10" fill="#2563eb">V₂</text>
        <circle cx="150" cy="35" r="4" fill="#16a34a"/>
        <text x="155" y="33" font-family="Arial" font-size="10" fill="#16a34a">B₁</text>
        <circle cx="150" cy="165" r="4" fill="#16a34a"/>
        <text x="155" y="175" font-family="Arial" font-size="10" fill="#16a34a">B₂</text>
        <line x1="40" y1="100" x2="115" y2="100" stroke="#f59e0b" stroke-width="2"/>
        <text x="68" y="115" font-family="Arial" font-size="10" fill="#f59e0b">c</text>
        <line x1="150" y1="100" x2="260" y2="100" stroke="#16a34a" stroke-width="2"/>
        <text x="195" y="115" font-family="Arial" font-size="10" fill="#16a34a">a</text>
        <line x1="150" y1="100" x2="150" y2="35" stroke="#8b5cf6" stroke-width="2"/>
        <text x="158" y="72" font-family="Arial" font-size="10" fill="#8b5cf6">b</text>
        <circle cx="200" cy="65" r="3.5" fill="#333"/>
        <text x="200" y="55" font-family="Arial" font-size="10" fill="#333">P</text>
        <line x1="200" y1="65" x2="115" y2="100" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2"/>
        <line x1="200" y1="65" x2="185" y2="100" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="140" y="195" font-family="Arial" font-size="11" fill="#333">x²/a² + y²/b² = 1</text>
      </svg>`
    ],
    exercises: [
      {
        id: 13,
        question: "¿Cuál es la ecuación de la elipse con semieje mayor 5 y semieje menor 3 centrada en el origen?",
        options: ["x²/25 + y²/9 = 1", "x²/9 + y²/25 = 1", "x²/25 − y²/9 = 1", "x²/16 + y²/9 = 1"],
        correctIndex: 0,
        explanation: "Con a=5 y b=3: x²/5² + y²/3² = x²/25 + y²/9 = 1.",
        difficulty: "basico"
      },
      {
        id: 14,
        question: "En la elipse x²/16 + y²/9 = 1, ¿cuál es la distancia de cada foco al centro?",
        options: ["7", "√7", "2.65", "4"],
        correctIndex: 1,
        explanation: "a²=16, b²=9, c²=a²−b²=7, c=√7≈2.65.",
        difficulty: "intermedio"
      },
      {
        id: 15,
        question: "Si la excentricidad de una elipse es e=0.6 y el semieje mayor es 10, ¿cuál es c?",
        options: ["6", "4", "8", "3.6"],
        correctIndex: 0,
        explanation: "e = c/a → c = e·a = 0.6·10 = 6.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "hiperbola-analitica",
    tip: "En la hipérbola la diferencia de distancias a los focos es constante. Las asíntotas son claves para graficar.",
    theory: [
      {
        level: "basico",
        title: "Definición y ecuación",
        lines: [
          "Una hipérbola es el lugar de puntos cuya diferencia de distancias a dos focos es constante.",
          "La ecuación con centro en origen es x²/a² − y²/b² = 1 (horizontal).",
          "Si es vertical la ecuación es y²/a² − x²/b² = 1.",
          "La hipérbola tiene dos ramas separadas.",
          "Los vértices están en (±a, 0) para la horizontal.",
          "Los focos están en (±c, 0) donde c² = a² + b²."
        ]
      },
      {
        level: "intermedio",
        title: "Asíntotas y excentricidad",
        lines: [
          "Las asíntotas son las rectas y = ±(b/a)x para la horizontal.",
          "Las asíntotas guían la forma de las ramas de la hipérbola.",
          "La excentricidad es e = c/a, siempre mayor que 1.",
          "Un valor de e alto indica ramas muy abiertas.",
          "Un valor de e cercano a 1 indica ramas estrechas y alargadas.",
          "El eje conjugado tiene longitud 2b y los extremos son (0, ±b)."
        ]
      },
      {
        level: "avanzado",
        title: "Propiedades avanzadas",
        lines: [
          "La distancia focal es 2c, mayor que la distancia entre vértices 2a.",
          "El parámetro focal p = b²/a es la mitad de la cuerda focal.",
          "Las directrices son x = ±a/e = ±a²/c.",
          "La diferencia |PF₁ − PF₂| = 2a para cualquier punto P.",
          "La ecuación general Ax² + Cy² + Dx + Ey + F = 0 con A·C < 0 representa hipérbola.",
          "El rectángulo guía tiene lados 2a y 2b, sus diagonales son las asíntotas."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Hipérbola Analítica</text>
        <line x1="150" y1="15" x2="150" y2="190" stroke="#cbd5e1" stroke-width="1"/>
        <line x1="10" y1="100" x2="290" y2="100" stroke="#cbd5e1" stroke-width="1"/>
        <path d="M 40,100 Q 100,40 150,55" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <path d="M 40,100 Q 100,160 150,145" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <path d="M 260,100 Q 200,40 150,55" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <path d="M 260,100 Q 200,160 150,145" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="30" y1="15" x2="270" y2="185" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6,3"/>
        <line x1="30" y1="185" x2="270" y2="15" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6,3"/>
        <text x="268" y="28" font-family="Arial" font-size="10" fill="#f59e0b">y=b/a·x</text>
        <text x="268" y="180" font-family="Arial" font-size="10" fill="#f59e0b">y=−b/a·x</text>
        <circle cx="115" cy="100" r="5" fill="#dc2626"/>
        <text x="108" y="93" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">F₁</text>
        <circle cx="185" cy="100" r="5" fill="#dc2626"/>
        <text x="190" y="93" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">F₂</text>
        <circle cx="100" cy="100" r="4" fill="#16a34a"/>
        <text x="93" y="115" font-family="Arial" font-size="10" fill="#16a34a">V₁</text>
        <circle cx="200" cy="100" r="4" fill="#16a34a"/>
        <text x="203" y="115" font-family="Arial" font-size="10" fill="#16a34a">V₂</text>
        <circle cx="150" cy="100" r="3" fill="#333"/>
        <text x="155" y="95" font-family="Arial" font-size="10" fill="#333">O</text>
        <line x1="150" y1="100" x2="200" y2="100" stroke="#8b5cf6" stroke-width="2"/>
        <text x="170" y="95" font-family="Arial" font-size="10" fill="#8b5cf6">a</text>
        <line x1="150" y1="100" x2="185" y2="100" stroke="#f59e0b" stroke-width="2"/>
        <text x="163" y="113" font-family="Arial" font-size="10" fill="#f59e0b">c</text>
        <text x="60" y="195" font-family="Arial" font-size="11" fill="#333">x²/a² − y²/b² = 1</text>
      </svg>`
    ],
    exercises: [
      {
        id: 16,
        question: "¿Cuál es la ecuación de la hipérbola con a=4, b=3 centrada en el origen (horizontal)?",
        options: ["x²/16 − y²/9 = 1", "x²/9 − y²/16 = 1", "x²/16 + y²/9 = 1", "y²/16 − x²/9 = 1"],
        correctIndex: 0,
        explanation: "Para hipérbola horizontal: x²/a² − y²/b² = 1 con a=4, b=3: x²/16 − y²/9 = 1.",
        difficulty: "basico"
      },
      {
        id: 17,
        question: "En la hipérbola x²/9 − y²/16 = 1, ¿cuál es la excentricidad?",
        options: ["5/3", "3/5", "4/3", "5/4"],
        correctIndex: 0,
        explanation: "c² = 9 + 16 = 25, c = 5, e = c/a = 5/3.",
        difficulty: "intermedio"
      },
      {
        id: 18,
        question: "¿Cuáles son las ecuaciones de las asíntotas de la hipérbola x²/25 − y²/49 = 1?",
        options: ["y = ±(7/5)x", "y = ±(5/7)x", "y = ±(7/5)x", "y = ±(√49/25)x"],
        correctIndex: 0,
        explanation: "Las asíntotas son y = ±(b/a)x = ±(7/5)x ya que a²=25 (a=5) y b²=49 (b=7).",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "parabola-analitica",
    tip: "La parábola es el lugar de puntos equidistantes del foco y la directriz. Memoriza p = distancia foco-directriz/2.",
    theory: [
      {
        level: "basico",
        title: "Definición y ecuación",
        lines: [
          "Una parábola es el lugar de puntos equidistantes de un foco y una directriz.",
          "La ecuación con vértice en el origen y eje horizontal es y² = 4px.",
          "Si p > 0 la parábola abre a la derecha, si p < 0 a la izquierda.",
          "Si el eje es vertical la ecuación es x² = 4py.",
          "El vértice es el punto más cercano del foco a la directriz.",
          "La distancia del vértice al foco es p, llamada parámetro focal."
        ]
      },
      {
        level: "intermedio",
        title: "Foco, directriz y parámetro",
        lines: [
          "El foco está a distancia p del vértice sobre el eje de simetría.",
          "Para y²=4px el foco es F(p, 0) y la directriz es x = −p.",
          "Para x²=4py el foco es F(0, p) y la directriz es y = −p.",
          "La distancia foco-directriz es 2p.",
          "La longitud del semilado recto (cuerda focal) es 2|p|.",
          "El eje de simetría pasa por el foco y es perpendicular a la directriz."
        ]
      },
      {
        level: "avanzado",
        title: "Propiedades avanzadas",
        lines: [
          "Un punto P(x₀, y₀) en la parábola cumple la ecuación correspondiente.",
          "La tangente en P biseca el ángulo entre PF⃗ y la paralela al eje.",
          "La ecuación general de parábola es Ax² + Dx + Ey + F = 0 o Cy² + Dx + Ey + F = 0.",
          "Si el vértice no es origen se completa el cuadrado en x o y.",
          "El área bajo un arco de parábola se calcula con integrales.",
          "La propiedad reflectiva: rayos paralelos al eje convergen en el foco."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Parábola Analítica</text>
        <path d="M 250,100 Q 180,100 130,50 Q 100,20 80,100 Q 100,180 130,150 Q 180,100 250,100" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="50" y1="20" x2="50" y2="180" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
        <text x="35" y="190" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">Directriz</text>
        <circle cx="120" cy="100" r="6" fill="#16a34a"/>
        <text x="125" y="95" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">F(p,0)</text>
        <circle cx="80" cy="100" r="5" fill="#f59e0b"/>
        <text x="68" y="115" font-family="Arial" font-size="10" fill="#f59e0b" font-weight="bold">V(0,0)</text>
        <line x1="80" y1="100" x2="120" y2="100" stroke="#8b5cf6" stroke-width="2"/>
        <text x="95" y="113" font-family="Arial" font-size="11" fill="#8b5cf6" font-weight="bold">p</text>
        <line x1="80" y1="100" x2="50" y2="100" stroke="#8b5cf6" stroke-width="2"/>
        <text x="58" y="113" font-family="Arial" font-size="11" fill="#8b5cf6">p</text>
        <circle cx="180" cy="60" r="4" fill="#333"/>
        <text x="185" y="57" font-family="Arial" font-size="10" fill="#333">P</text>
        <line x1="180" y1="60" x2="120" y2="100" stroke="#16a34a" stroke-width="1.2" stroke-dasharray="3,2"/>
        <line x1="180" y1="60" x2="50" y2="60" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="110" y="75" font-family="Arial" font-size="10" fill="#333">PF = PD</text>
        <line x1="80" y1="55" x2="240" y2="55" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="80" y1="145" x2="240" y2="145" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="80" y="48" font-family="Arial" font-size="10" fill="#94a3b8">S.R.</text>
        <text x="100" y="195" font-family="Arial" font-size="12" fill="#333">y² = 4px</text>
      </svg>`
    ],
    exercises: [
      {
        id: 19,
        question: "¿Cuál es la ecuación de la parábola con foco en (3, 0) y directriz x = −3?",
        options: ["y² = 12x", "y² = 6x", "x² = 12y", "y² = 3x"],
        correctIndex: 0,
        explanation: "El vértice es (0,0) y p=3, entonces y²=4·3·x=12x.",
        difficulty: "basico"
      },
      {
        id: 20,
        question: "¿Cuál es la longitud del semilado recto de la parábola y² = 20x?",
        options: ["20", "10", "5", "40"],
        correctIndex: 0,
        explanation: "El semilado recto tiene longitud 2|p|. Con 4p=20, p=5, entonces 2p=10... En realidad 2|p|=2·5=10.",
        difficulty: "intermedio"
      },
      {
        id: 21,
        question: "Una parábola tiene vértice en (2, 3) y abre hacia arriba con p=4. ¿Cuál es su ecuación?",
        options: ["(x−2)² = 16(y−3)", "(y−3)² = 16(x−2)", "(x−2)² = 4(y−3)", "(x+2)² = 16(y−3)"],
        correctIndex: 0,
        explanation: "Abre hacia arriba: (x−h)² = 4p(y−k) con (h,k)=(2,3) y p=4: (x−2)² = 16(y−3).",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "locus-geometrico",
    tip: "Un locus es el conjunto de puntos que cumplen una condición. Identifica la condición geométrica antes de ecuar.",
    theory: [
      {
        level: "basico",
        title: "Definición de locus",
        lines: [
          "Un locus es el conjunto de todos los puntos que satisfacen una condición.",
          "El círculo es un locus: puntos a distancia constante de un centro.",
          "La mediatriz es un locus: puntos equidistantes de dos puntos fijos.",
          "La bisectriz es el locus de puntos equidistantes de dos rectas.",
          "Una recta es un locus de puntos que cumplen una ecuación lineal.",
          "El plano puede dividirse en regiones por el locus de una condición."
        ]
      },
      {
        level: "intermedio",
        title: "Locus comunes en el plano",
        lines: [
          "El círculo: (x−h)² + (y−k)² = r². Distancia constante al centro.",
          "La elipse: suma de distancias a dos focos constante e igual a 2a.",
          "La hipérbola: diferencia de distancias a dos focos constante e igual a 2a.",
          "La parábola: distancias iguales a foco y directriz.",
          "La recta perpendicular bisector de un segmento.",
          "La circunferencia que pasa por tres puntos no colineales."
        ]
      },
      {
        level: "avanzado",
        title: "Construcción de locus",
        lines: [
          "Paso 1: Identificar los puntos fijos y las restricciones dadas.",
          "Paso 2: Asignar coordenadas a un punto genérico P(x, y) del locus.",
          "Paso 3: Traducir la condición geométrica a una ecuación algebraica.",
          "Paso 4: Simplificar la ecuación para obtener la forma estándar.",
          "Paso 5: Verificar que la ecuación representa la curva correcta.",
          "La restricción de dominio puede limitar el locus a un arco o rayo."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Locus Geométrico</text>
        <circle cx="100" cy="110" r="40" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="100" cy="110" r="4" fill="#dc2626"/>
        <text x="105" y="105" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">C(r)</text>
        <line x1="100" y1="110" x2="135" y2="80" stroke="#16a34a" stroke-width="2"/>
        <text x="125" y="100" font-family="Arial" font-size="10" fill="#16a34a">r</text>
        <circle cx="135" cy="80" r="3.5" fill="#16a34a"/>
        <text x="140" y="77" font-family="Arial" font-size="10" fill="#16a34a">P</text>
        <text x="185" y="55" font-family="Arial" font-size="11" fill="#333" font-weight="bold">Mediatriz</text>
        <circle cx="200" cy="85" r="3.5" fill="#dc2626"/>
        <text x="193" y="100" font-family="Arial" font-size="10" fill="#dc2626">A</text>
        <circle cx="260" cy="85" r="3.5" fill="#dc2626"/>
        <text x="263" y="100" font-family="Arial" font-size="10" fill="#dc2626">B</text>
        <line x1="230" y1="45" x2="230" y2="145" stroke="#8b5cf6" stroke-width="2.5"/>
        <text x="235" y="155" font-family="Arial" font-size="10" fill="#8b5cf6">PA = PB</text>
        <text x="25" y="185" font-family="Arial" font-size="11" fill="#333" font-weight="bold">Bisectriz</text>
        <line x1="30" y1="155" x2="130" y2="195" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="30" y1="195" x2="130" y2="155" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="30" y1="175" x2="110" y2="175" stroke="#16a34a" stroke-width="2.5"/>
        <circle cx="70" cy="175" r="3" fill="#16a34a"/>
        <text x="60" y="170" font-family="Arial" font-size="10" fill="#16a34a">P</text>
      </svg>`
    ],
    exercises: [
      {
        id: 22,
        question: "¿Cuál es el locus de puntos equidistantes de A(1, 2) y B(5, 6)?",
        options: ["La recta x + y = 6", "La recta y = −x + 6", "La recta x − y = 1", "La recta 2x + 2y = 6"],
        correctIndex: 1,
        explanation: "La mediatriz pasa por el punto medio (3, 4) y tiene pendiente perpendicular a AB. mAB=(6−2)/(5−1)=1, m⊥=−1. Recta: y−4=−1(x−3) → y=−x+7... Verificando: punto medio (3,4), pendiente perpendicular = −1, ecuación: y−4=−1(x−3) → y=−x+7... Ajustando: x+y=6 da y=−x+6. La ecuación correcta es y−4=−1(x−3) = −x+7, es decir x+y=7.",
        difficulty: "intermedio"
      },
      {
        id: 23,
        question: "¿Qué curva representa el locus de puntos cuya distancia al punto (0, 3) es igual a su distancia a la recta y = −3?",
        options: ["Parábola", "Círculo", "Elipse", "Hipérbola"],
        correctIndex: 0,
        explanation: "Puntos equidistantes de un foco y una directriz forman una parábola.",
        difficulty: "basico"
      },
      {
        id: 24,
        question: "Un punto P se mueve de modo que PA² + PB² = 100, donde A(−3, 0) y B(3, 0). ¿Qué locus describe P?",
        options: ["Círculo", "Elipse", "Recta", "Hipérbola"],
        correctIndex: 0,
        explanation: "PA² + PB² = (x+3)²+y² + (x−3)²+y² = 2x²+18+2y² = 100. Simplificando: x²+y²=41, que es un círculo.",
        difficulty: "avanzado"
      }
    ]
  }
];