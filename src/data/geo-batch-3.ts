import type { CourseModule } from "C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content";

export const geoBatch3: CourseModule[] = [
  {
    slug: "razones-trigonometricas",
    tip: "En triángulos rectángulos, memoriza SOH-CAH-TOA: Seno = Opuesto/Hipotenusa, Coseno = Adyacente/Hipotenusa, Tangente = Opuesto/Adyacente.",
    theory: [
      {
        level: "basico",
        title: "Definición de razones trigonométricas",
        lines: [
          "En un triángulo rectángulo, el seno de un ángulo es la razón entre el cateto opuesto y la hipotenusa.",
          "El coseno es la razón entre el cateto adyacente al ángulo y la hipotenusa.",
          "La tangente es la razón entre el cateto opuesto y el cateto adyacente.",
          "Se denotan como sen(θ), cos(θ) y tan(θ) respectivamente.",
          "La hipotenusa siempre es el lado más largo y está frente al ángulo recto.",
          "SOH-CAH-TOA es una mnemotecnia para recordar estas tres definiciones."
        ]
      },
      {
        level: "intermedio",
        title: "Relaciones entre razones trigonométricas",
        lines: [
          "La tangente se puede expresar como tan(θ) = sen(θ) / cos(θ).",
          "El seno de un ángulo complementario es igual al coseno del ángulo: sen(90° - θ) = cos(θ).",
          "Del mismo modo, cos(90° - θ) = sen(θ).",
          "La cotangente es el recíproco de la tangente: cot(θ) = cos(θ) / sen(θ).",
          "La secante es el recíproco del coseno: sec(θ) = 1 / cos(θ).",
          "La cosecante es el recíproco del seno: csc(θ) = 1 / sen(θ)."
        ]
      },
      {
        level: "avanzado",
        title: "Aplicación de razones en problemas",
        lines: [
          "Si se conocen dos lados de un triángulo rectángulo, se pueden calcular todas las razones.",
          "Ejemplo: cateto opuesto = 5, hipotenusa = 13 → sen(θ) = 5/13, cateto adyacente = 12 por Pitágoras.",
          "El ángulo θ = arcsen(5/13) ≈ 22.62°.",
          "Los valores especiales son: sen(30°) = 1/2, cos(30°) = √3/2, tan(30°) = √3/3.",
          "Para 45°: sen(45°) = cos(45°) = √2/2, tan(45°) = 1.",
          "Para 60°: sen(60°) = √3/2, cos(60°) = 1/2, tan(60°) = √3."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Razones Trigonométricas</text>
        <polygon points="60,170 240,170 240,50" fill="none" stroke="#2563eb" stroke-width="2"/>
        <line x1="240" y1="170" x2="225" y2="170" stroke="#333" stroke-width="1.5"/>
        <line x1="240" y1="170" x2="240" y2="155" stroke="#333" stroke-width="1.5"/>
        <rect x="230" y="155" width="10" height="15" fill="none" stroke="#333" stroke-width="1.5"/>
        <text x="90" y="190" font-family="Arial" font-size="12" fill="#333">Cateto</text>
        <text x="85" y="200" font-family="Arial" font-size="12" fill="#333">adyacente</text>
        <text x="248" y="115" font-family="Arial" font-size="12" fill="#333">Cateto</text>
        <text x="248" y="127" font-family="Arial" font-size="12" fill="#333">opuesto</text>
        <text x="120" y="100" font-family="Arial" font-size="12" fill="#333">Hipotenusa</text>
        <text x="80" y="160" font-family="Arial" font-size="13" fill="#dc2626" font-weight="bold">θ</text>
        <path d="M 80,170 Q 80,155 95,150" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <rect x="20" y="120" width="120" height="60" fill="white" stroke="#16a34a" stroke-width="1.5" rx="5"/>
        <text x="30" y="138" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">sen(θ) = op / hip</text>
        <text x="30" y="153" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold">cos(θ) = ady / hip</text>
        <text x="30" y="168" font-family="Arial" font-size="11" fill="#8b5cf6" font-weight="bold">tan(θ) = op / ady</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "En un triángulo rectángulo, el cateto opuesto mide 7 y la hipotenusa mide 25. ¿Cuál es el seno del ángulo?",
        options: ["7/25", "24/25", "7/24", "25/7"],
        correctIndex: 0,
        explanation: "sen(θ) = cateto opuesto / hipotenusa = 7/25.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Si sen(θ) = 3/5 y el cateto opuesto es 9, ¿cuánto mide la hipotenusa?",
        options: ["15", "12", "25", "10"],
        correctIndex: 0,
        explanation: "sen(θ) = op/hip → 3/5 = 9/hip → hip = 9 × 5/3 = 15.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "¿Cuál es el valor exacto de tan(60°)?",
        options: ["√3", "√3/3", "1", "√2"],
        correctIndex: 0,
        explanation: "tan(60°) = sen(60°)/cos(60°) = (√3/2)/(1/2) = √3.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "identidades-trigonometricas",
    tip: "La identidad pitagórica más usada es sen²θ + cos²θ = 1. De ella se derivan las otras dos: 1 + tan²θ = sec²θ y 1 + cot²θ = csc²θ.",
    theory: [
      {
        level: "basico",
        title: "Identidad pitagórica fundamental",
        lines: [
          "La identidad pitagórica más importante es: sen²(θ) + cos²(θ) = 1.",
          "Se obtiene aplicando el teorema de Pitágoras a un triángulo rectángulo con hipotenusa 1.",
          "Si el cateto opuesto es sen(θ) y el adyacente es cos(θ), entonces sen²(θ) + cos²(θ) = 1² = 1.",
          "Esta identidad es válida para cualquier valor de θ.",
          "Se puede reescribir como: sen²(θ) = 1 - cos²(θ) o cos²(θ) = 1 - sen²(θ).",
          "Es la base para demostrar todas las demás identidades trigonométricas."
        ]
      },
      {
        level: "intermedio",
        title: "Identidades derivadas y de tangente",
        lines: [
          "Dividiendo sen²(θ) + cos²(θ) = 1 entre cos²(θ), se obtiene: tan²(θ) + 1 = sec²(θ).",
          "Dividiendo entre sen²(θ): 1 + cot²(θ) = csc²(θ).",
          "La identidad de tangente dice que: tan(θ) = sen(θ)/cos(θ).",
          "El cuadrado de la tangente más uno es igual al cuadrado de la secante.",
          "Estas tres identidades se usan frecuentemente para simplificar expresiones.",
          "Siempre verifica que la identidad se cumple sustituyendo valores conocidos."
        ]
      },
      {
        level: "avanzado",
        title: "Identidad de ángulo doble",
        lines: [
          "sen(2θ) = 2·sen(θ)·cos(θ) → el seno del doble ángulo.",
          "cos(2θ) = cos²(θ) - sen²(θ) → también se escribe como 2cos²(θ) - 1 o 1 - 2sen²(θ).",
          "tan(2θ) = 2tan(θ) / (1 - tan²(θ)) → la tangente del doble ángulo.",
          "Estas fórmulas se deducen usando las fórmulas de suma con ángulos iguales.",
          "Son útiles para reducir potencias: cos²(θ) = (1 + cos(2θ))/2.",
          "Análogamente: sen²(θ) = (1 - cos(2θ))/2 se llama fórmula de potencia a la mitad."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Identidades Trigonométricas</text>
        <circle cx="150" cy="120" r="70" fill="none" stroke="#2563eb" stroke-width="2"/>
        <line x1="80" y1="120" x2="150" y2="120" stroke="#333" stroke-width="1.5"/>
        <line x1="150" y1="120" x2="190" y2="60" stroke="#dc2626" stroke-width="2"/>
        <line x1="190" y1="60" x2="190" y2="120" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4"/>
        <line x1="190" y1="120" x2="220" y2="120" stroke="#333" stroke-width="1.5"/>
        <text x="115" y="115" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold">cos(θ)</text>
        <text x="195" y="95" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">sen(θ)</text>
        <text x="155" y="95" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">r = 1</text>
        <text x="200" y="55" font-family="Arial" font-size="11" fill="#333">θ</text>
        <rect x="30" y="160" width="240" height="30" fill="white" stroke="#8b5cf6" stroke-width="1.5" rx="5"/>
        <text x="40" y="180" font-family="Arial" font-size="12" fill="#8b5cf6" font-weight="bold">sen²θ + cos²θ = 1</text>
        <text x="185" y="180" font-family="Arial" font-size="11" fill="#f59e0b" font-weight="bold">1 + tan²θ = sec²θ</text>
      </svg>`
    ],
    exercises: [
      {
        id: 4,
        question: "Si cos(θ) = 4/5 y θ está en el primer cuadrante, ¿cuánto vale sen(θ)?",
        options: ["3/5", "4/5", "5/4", "3/4"],
        correctIndex: 0,
        explanation: "sen²θ + cos²θ = 1 → sen²θ = 1 - 16/25 = 9/25 → sen(θ) = 3/5 (primer cuadrante, positivo).",
        difficulty: "basico"
      },
      {
        id: 5,
        question: "¿Cuál es el valor de 1 + tan²(45°)?",
        options: ["2", "1", "√2", "3"],
        correctIndex: 0,
        explanation: "tan(45°) = 1, entonces 1 + 1² = 1 + 1 = 2.",
        difficulty: "intermedio"
      },
      {
        id: 6,
        question: "¿Cuál es el valor de sen(2·30°)?",
        options: ["√3/2", "1/2", "√3", "1"],
        correctIndex: 0,
        explanation: "sen(2·30°) = sen(60°) = √3/2. También: 2·sen(30°)·cos(30°) = 2·(1/2)·(√3/2) = √3/2.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "suma-diferencia-trig",
    tip: "Las fórmulas de suma y diferencia se aplican para calcular sen/cos de ángulos no estándar como 75° = 45° + 30°. Memoriza el patrón: cos cambia el signo, sen mantiene.",
    theory: [
      {
        level: "basico",
        title: "Fórmulas de suma para seno y coseno",
        lines: [
          "sen(A + B) = sen(A)·cos(B) + cos(A)·sen(B).",
          "sen(A - B) = sen(A)·cos(B) - cos(A)·sen(B).",
          "cos(A + B) = cos(A)·cos(B) - sen(A)·sen(B).",
          "cos(A - B) = cos(A)·cos(B) + sen(A)·sen(B).",
          "Nota el patrón: para seno el signo se mantiene, para coseno el signo cambia.",
          "Estas fórmulas permiten calcular funciones de ángulos como 75°, 15°, etc."
        ]
      },
      {
        level: "intermedio",
        title: "Aplicación de las fórmulas de suma",
        lines: [
          "Para sen(75°): usamos 75° = 45° + 30°.",
          "sen(75°) = sen(45°)·cos(30°) + cos(45°)·sen(30°) = (√2/2)(√3/2) + (√2/2)(1/2).",
          "sen(75°) = (√6 + √2)/4.",
          "Para cos(15°): usamos 15° = 45° - 30°.",
          "cos(15°) = cos(45°)·cos(30°) + sen(45°)·sen(30°) = (√2/2)(√3/2) + (√2/2)(1/2).",
          "cos(15°) = (√6 + √2)/4, igual que sen(75°) porque son complementarios."
        ]
      },
      {
        level: "avanzado",
        title: "Derivaciones y casos especiales",
        lines: [
          "Si A = B en la fórmula de cos(A - B), obtenemos cos(0) = cos²(A) + sen²(A) = 1.",
          "La fórmula de sen(A + B) se puede obtener de la de cos(A + B) usando complementarios.",
          "cos(A - B) = cos(A)cos(B) + sen(A)sen(B) es la identidad más fundamental.",
          "De ella se deducen todas las demás: suma, diferencia, ángulo doble, etc.",
          "Para tan(A ± B): tan(A+B) = (tanA + tanB)/(1 - tanA·tanB).",
          "La fórmula de tan(A-B) es: tan(A-B) = (tanA - tanB)/(1 + tanA·tanB)."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Suma y Diferencia</text>
        <rect x="15" y="40" width="270" height="55" fill="white" stroke="#2563eb" stroke-width="1.5" rx="5"/>
        <text x="25" y="60" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold">sen(A ± B) = senA·cosB ± cosA·senB</text>
        <text x="25" y="80" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">cos(A ± B) = cosA·cosB ∓ senA·senB</text>
        <rect x="15" y="105" width="270" height="45" fill="white" stroke="#dc2626" stroke-width="1.5" rx="5"/>
        <text x="25" y="125" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">Ejemplo: sen(75°) = sen(45°+30°)</text>
        <text x="25" y="140" font-family="Arial" font-size="10" fill="#333">= (√2/2)(√3/2) + (√2/2)(1/2) = (√6+√2)/4</text>
        <rect x="15" y="160" width="270" height="35" fill="white" stroke="#8b5cf6" stroke-width="1.5" rx="5"/>
        <text x="25" y="182" font-family="Arial" font-size="11" fill="#8b5cf6" font-weight="bold">Mnemotecnia: sen cambia igual, cos cambia al revés</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7,
        question: "¿Cuál es el valor de sen(15°)?",
        options: ["(√6 - √2)/4", "(√6 + √2)/4", "√2/2", "1/2"],
        correctIndex: 0,
        explanation: "sen(15°) = sen(45° - 30°) = sen45°cos30° - cos45°sen30° = (√2/2)(√3/2) - (√2/2)(1/2) = (√6 - √2)/4.",
        difficulty: "basico"
      },
      {
        id: 8,
        question: "¿Cuánto vale cos(75°)?",
        options: ["(√6 - √2)/4", "(√6 + √2)/4", "(√3 - 1)/2", "√2/4"],
        correctIndex: 0,
        explanation: "cos(75°) = cos(45°+30°) = cos45°cos30° - sen45°sen30° = (√2/2)(√3/2) - (√2/2)(1/2) = (√6 - √2)/4.",
        difficulty: "intermedio"
      },
      {
        id: 9,
        question: "Si tan(A) = 3/4 y tan(B) = 1/2, ¿cuánto vale tan(A + B)?",
        options: ["2", "5/7", "5/2", "7/10"],
        correctIndex: 0,
        explanation: "tan(A+B) = (tanA + tanB)/(1 - tanA·tanB) = (3/4 + 1/2)/(1 - 3/4·1/2) = (5/4)/(5/8) = 2.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "ley-de-senos",
    tip: "La ley de senos funciona con cualquier triángulo: a/senA = b/senB = c/senC. Úsala cuando conoces un lado y su ángulo opuesto, y buscas otro lado o ángulo.",
    theory: [
      {
        level: "basico",
        title: "Enunciado de la ley de senos",
        lines: [
          "En cualquier triángulo, el cociente entre un lado y el seno de su ángulo opuesto es constante.",
          "La fórmula es: a/sen(A) = b/sen(B) = c/sen(C).",
          "Aquí a, b, c son los lados y A, B, C son los ángulos opuestos respectivamente.",
          "También se escribe como: a/senA = b/senB = c/senC = 2R, donde R es el radio de la circunferencia circunscrita.",
          "Es útil cuando se conoce un par lado-ángulo y se busca otro lado o ángulo.",
          "Se aplica en triángulos agudos, rectángulos y obtusos por igual."
        ]
      },
      {
        level: "intermedio",
        title: "Aplicación de la ley de senos",
        lines: [
          "Si conoces un lado y su ángulo opuesto, y otro ángulo, hallas el lado faltante.",
          "Ejemplo: a = 10, A = 30°, B = 45°. Entonces b = a·sen(B)/sen(A).",
          "b = 10·sen(45°)/sen(30°) = 10·(√2/2)/(1/2) = 10√2 ≈ 14.14.",
          "Para hallar un ángulo: si a = 8, b = 12, A = 40°, entonces sen(B) = b·sen(A)/a.",
          "sen(B) = 12·sen(40°)/8 = 12·0.6428/8 = 0.9642, entonces B = arcsen(0.9642) ≈ 74.6°.",
          "IMPORTANTE: arcsen puede dar dos valores (agudo y obtuso), debes verificar cuál es válido."
        ]
      },
      {
        level: "avanzado",
        title: "Caso ambiguo y verificación",
        lines: [
          "El caso ambiguo ocurre cuando conoces dos lados y un ángulo no incluido (LADO-LADO-ÁNGULO).",
          "Si sen(B) > 1, no hay solución → el triángulo no existe.",
          "Si sen(B) = 1, hay exactamente una solución → triángulo rectángulo.",
          "Si sen(B) < 1, hay dos posibles valores de B: uno agudo y otro obtuso (B' = 180° - B).",
          "Debes verificar si ambos valores producen triángulos válidos (la suma de ángulos no excede 180°).",
          "La ley de senos es especialmente útil para resolver triángulos en navegación y topografía."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Ley de Senos</text>
        <polygon points="60,170 180,170 240,60" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="70" y="165" font-family="Arial" font-size="13" fill="#dc2626" font-weight="bold">A</text>
        <text x="185" y="165" font-family="Arial" font-size="13" fill="#dc2626" font-weight="bold">B</text>
        <text x="235" y="55" font-family="Arial" font-size="13" fill="#dc2626" font-weight="bold">C</text>
        <text x="140" y="188" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">c</text>
        <text x="250" y="115" font-family="Arial" font-size="12" fill="#16a34a" font-weight="bold">a</text>
        <text x="55" y="105" font-family="Arial" font-size="12" fill="#8b5cf6" font-weight="bold">b</text>
        <rect x="30" y="5" width="240" height="30" fill="white" stroke="#f59e0b" stroke-width="1.5" rx="5"/>
        <text x="40" y="25" font-family="Arial" font-size="12" fill="#f59e0b" font-weight="bold">a/senA = b/senB = c/senC = 2R</text>
        <rect x="30" y="130" width="100" height="30" fill="white" stroke="#16a34a" stroke-width="1" rx="3"/>
        <text x="40" y="150" font-family="Arial" font-size="10" fill="#16a34a">b = a·senB/senA</text>
      </svg>`
    ],
    exercises: [
      {
        id: 10,
        question: "En un triángulo, a = 8, A = 30° y B = 60°. ¿Cuánto mide b?",
        options: ["8√3", "8", "4√3", "16"],
        correctIndex: 0,
        explanation: "b = a·sen(B)/sen(A) = 8·sen(60°)/sen(30°) = 8·(√3/2)/(1/2) = 8√3.",
        difficulty: "basico"
      },
      {
        id: 11,
        question: "En un triángulo, a = 10, b = 15 y A = 40°. ¿Cuánto vale sen(B)?",
        options: ["0.9642", "0.6428", "1.5", "0.4286"],
        correctIndex: 0,
        explanation: "sen(B) = b·sen(A)/a = 15·sen(40°)/10 = 15·0.6428/10 = 0.9642.",
        difficulty: "intermedio"
      },
      {
        id: 12,
        question: "En un triángulo, a = 6, b = 8 y A = 150°. ¿Cuántos triángulos posibles existen?",
        options: ["Ninguno", "Uno", "Dos", "Infinitos"],
        correctIndex: 0,
        explanation: "sen(B) = b·sen(A)/a = 8·sen(150°)/6 = 8·(1/2)/6 = 2/3. B ≈ 41.8° o B ≈ 138.2°. Pero A = 150° y A + B > 180° en ambos casos, así que no existe tal triángulo.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "ley-de-cosenos",
    tip: "La ley de cosenos es como una extensión del teorema de Pitágoras: a² = b² + c² - 2bc·cos(A). Úsala cuando conoces dos lados y el ángulo incluido (LAL).",
    theory: [
      {
        level: "basico",
        title: "Enunciado de la ley de cosenos",
        lines: [
          "En cualquier triángulo: a² = b² + c² - 2bc·cos(A).",
          "De forma equivalente: b² = a² + c² - 2ac·cos(B).",
          "Y: c² = a² + b² - 2ab·cos(C).",
          "Cuando el ángulo es 90°, cos(90°) = 0 y se reduce al teorema de Pitágoras.",
          "Es útil para encontrar un lado cuando conoces dos lados y el ángulo incluido.",
          "También se usa para encontrar un ángulo cuando conoces los tres lados."
        ]
      },
      {
        level: "intermedio",
        title: "Hallar lados con la ley de cosenos",
        lines: [
          "Ejemplo: b = 5, c = 7, A = 60°. Hallar a.",
          "a² = 5² + 7² - 2(5)(7)cos(60°) = 25 + 49 - 70(1/2) = 74 - 35 = 39.",
          "a = √39 ≈ 6.24.",
          "Ejemplo 2: a = 10, c = 8, B = 120°. Hallar b.",
          "b² = 10² + 8² - 2(10)(8)cos(120°) = 100 + 64 - 160(-1/2) = 164 + 80 = 244.",
          "b = √244 = 2√61 ≈ 15.62."
        ]
      },
      {
        level: "avanzado",
        title: "Hallar ángulos con la ley de cosenos",
        lines: [
          "Para hallar un ángulo, se despeja: cos(A) = (b² + c² - a²)/(2bc).",
          "Ejemplo: a = 7, b = 8, c = 9. Hallar A.",
          "cos(A) = (64 + 81 - 49)/(2·8·9) = 96/144 = 2/3.",
          "A = arccos(2/3) ≈ 48.19°.",
          "La ley de cosenos siempre da un solo valor de ángulo (entre 0° y 180°).",
          "Verificación: calcula los otros ángulos y verifica que sumen 180°."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Ley de Cosenos</text>
        <polygon points="50,170 200,170 260,50" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="45" y="165" font-family="Arial" font-size="12" fill="#dc2626" font-weight="bold">A</text>
        <text x="205" y="165" font-family="Arial" font-size="12" fill="#dc2626" font-weight="bold">B</text>
        <text x="265" y="48" font-family="Arial" font-size="12" fill="#dc2626" font-weight="bold">C</text>
        <text x="115" y="188" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">c</text>
        <text x="260" y="115" font-family="Arial" font-size="12" fill="#16a34a" font-weight="bold">a</text>
        <text x="35" y="105" font-family="Arial" font-size="12" fill="#8b5cf6" font-weight="bold">b</text>
        <path d="M 65,170 Q 55,160 60,150" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="55" y="148" font-family="Arial" font-size="10" fill="#f59e0b">A</text>
        <rect x="20" y="5" width="260" height="28" fill="white" stroke="#f59e0b" stroke-width="1.5" rx="5"/>
        <text x="30" y="24" font-family="Arial" font-size="11" fill="#f59e0b" font-weight="bold">a² = b² + c² − 2bc·cos(A)</text>
      </svg>`
    ],
    exercises: [
      {
        id: 13,
        question: "En un triángulo, b = 6, c = 8 y A = 60°. ¿Cuánto mide a?",
        options: ["√52", "√76", "10", "2√13"],
        correctIndex: 0,
        explanation: "a² = 36 + 64 - 2(6)(8)cos(60°) = 100 - 48 = 52. a = √52 = 2√13.",
        difficulty: "basico"
      },
      {
        id: 14,
        question: "Si a = 5, b = 7, c = 8, ¿cuánto vale cos(A)?",
        options: ["11/14", "1/2", "5/7", "2/3"],
        correctIndex: 0,
        explanation: "cos(A) = (b² + c² - a²)/(2bc) = (49 + 64 - 25)/(2·7·8) = 88/112 = 11/14.",
        difficulty: "intermedio"
      },
      {
        id: 15,
        question: "Un triángulo tiene lados 13, 14 y 15. ¿Cuál es el coseno del ángulo mayor?",
        options: ["5/13", "3/5", "33/65", "4/5"],
        correctIndex: 0,
        explanation: "El ángulo mayor está frente al lado mayor (15). cos(C) = (13² + 14² - 15²)/(2·13·14) = (169 + 196 - 225)/364 = 140/364 = 5/13.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "area-con-trigonometria",
    tip: "La fórmula del área con trigonometría es: Área = ½ab·sin(C). Solo necesitas dos lados y el ángulo que forma entre ellos, sin importar si el triángulo es rectángulo o no.",
    theory: [
      {
        level: "basico",
        title: "Fórmula del área con seno",
        lines: [
          "El área de un triángulo se puede calcular como: Área = ½ · base · altura.",
          "Si no conoces la altura directamente, puedes usar: Área = ½ · a · b · sen(C).",
          "Donde a y b son dos lados y C es el ángulo incluido entre ellos.",
          "Esta fórmula funciona para cualquier triángulo: agudo, rectángulo u obtuso.",
          "Es especialmente útil cuando no conoces la altura pero sí dos lados y su ángulo.",
          "Ejemplo: a = 10, b = 8, C = 30° → Área = ½(10)(8)sen(30°) = 20."
        ]
      },
      {
        level: "intermedio",
        title: "Aplicaciones de la fórmula de área",
        lines: [
          "Ejemplo: un triángulo con lados 7 y 10 y ángulo de 120° entre ellos.",
          "Área = ½(7)(10)sen(120°) = 35 · (√3/2) = 35√3/2 ≈ 30.31.",
          "Ejemplo 2: área de un triángulo con lados 5, 6 y ángulo de 45°.",
          "Área = ½(5)(6)sen(45°) = 15 · (√2/2) = 15√2/2 ≈ 10.61.",
          "Si conoces los tres lados, primero usa la ley de cosenos para hallar un ángulo.",
          "Luego aplica la fórmula de área con ese ángulo y los dos lados adyacentes."
        ]
      },
      {
        level: "avanzado",
        title: "Relación con el radio de la circunferencia",
        lines: [
          "El área también se puede expresar como: Área = abc/(4R), donde R es el radio de la circunferencia circunscrita.",
          "Combinando con la ley de senos: a/senA = 2R, se puede derivar esta fórmula.",
          "Otra fórmula es la de Heron: Área = √[s(s-a)(s-b)(s-c)], donde s = (a+b+c)/2.",
          "La fórmula con seno es más directa cuando ya tienes dos lados y el ángulo.",
          "Para maximizar el área con dos lados fijos, el ángulo debe ser 90° (sen(90°) = 1).",
          "El área máxima con lados a y b es: Área_max = ½ab."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Área con Trigonometría</text>
        <polygon points="50,170 250,170 200,50" fill="#dbeafe" fill-opacity="0.5" stroke="#2563eb" stroke-width="2"/>
        <text x="55" y="165" font-family="Arial" font-size="12" fill="#dc2626" font-weight="bold">A</text>
        <text x="255" y="165" font-family="Arial" font-size="12" fill="#dc2626" font-weight="bold">B</text>
        <text x="195" y="45" font-family="Arial" font-size="12" fill="#dc2626" font-weight="bold">C</text>
        <text x="140" y="188" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">b</text>
        <text x="235" y="108" font-family="Arial" font-size="12" fill="#16a34a" font-weight="bold">a</text>
        <text x="110" y="100" font-family="Arial" font-size="12" fill="#8b5cf6" font-weight="bold">c</text>
        <path d="M 65,170 Q 55,160 60,150" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="55" y="148" font-family="Arial" font-size="10" fill="#f59e0b">C</text>
        <rect x="50" y="5" width="200" height="28" fill="white" stroke="#16a34a" stroke-width="1.5" rx="5"/>
        <text x="60" y="24" font-family="Arial" font-size="12" fill="#16a34a" font-weight="bold">Área = ½ · a · b · sen(C)</text>
      </svg>`
    ],
    exercises: [
      {
        id: 16,
        question: "Un triángulo tiene lados de 12 cm y 15 cm con un ángulo de 30° entre ellos. ¿Cuál es su área?",
        options: ["45 cm²", "90 cm²", "30 cm²", "60 cm²"],
        correctIndex: 0,
        explanation: "Área = ½(12)(15)sen(30°) = ½(180)(1/2) = 45 cm².",
        difficulty: "basico"
      },
      {
        id: 17,
        question: "Un triángulo tiene lados de 8 y 10 con un ángulo de 120° entre ellos. ¿Cuál es su área?",
        options: ["20√3", "40√3", "80", "40"],
        correctIndex: 0,
        explanation: "Área = ½(8)(10)sen(120°) = 40 · (√3/2) = 20√3 ≈ 34.64.",
        difficulty: "intermedio"
      },
      {
        id: 18,
        question: "Si el área de un triángulo es 12 y dos de sus lados son 6 y 8, ¿cuánto vale el seno del ángulo incluido?",
        options: ["1/2", "√2/2", "√3/2", "2/3"],
        correctIndex: 0,
        explanation: "Área = ½ab·sen(C) → 12 = ½(6)(8)·sen(C) = 24·sen(C) → sen(C) = 12/24 = 1/2.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "ecuaciones-trigonometricas",
    tip: "Para resolver ecuaciones trigonométricas, primero aísla la función trigonométrica. Luego usa el arco inverso y recuerda que hay infinitas soluciones: θ + 360°n.",
    theory: [
      {
        level: "basico",
        title: "Ecuaciones trigonométricas básicas",
        lines: [
          "Una ecuación trigonométrica contiene una o más funciones trigonométricas de la variable.",
          "Para resolver sen(θ) = k, se usa θ = arcsen(k) + 360°n o θ = 180° - arcsen(k) + 360°n.",
          "Para resolver cos(θ) = k, se usa θ = arccos(k) + 360°n o θ = -arccos(k) + 360°n.",
          "Para resolver tan(θ) = k, se usa θ = arctan(k) + 180°n, donde n es un entero.",
          "Si se pide solución en [0°, 360°), solo se listan los valores de n que dan ángulos en ese rango.",
          "Siempre verifica las soluciones sustituyendo en la ecuación original."
        ]
      },
      {
        level: "intermedio",
        title: "Ecuaciones con cuadrados y identidades",
        lines: [
          "Ejemplo: 2sen²(θ) - sen(θ) - 1 = 0. Sea x = sen(θ), entonces 2x² - x - 1 = 0.",
          "Factorizando: (2x + 1)(x - 1) = 0, entonces x = -1/2 o x = 1.",
          "sen(θ) = -1/2 → θ = 210° o θ = 330° en [0°, 360°).",
          "sen(θ) = 1 → θ = 90° en [0°, 360°).",
          "Las soluciones en [0°, 360°) son: 90°, 210°, 330°.",
          "Siempre verifica que cada solución satisfaga la ecuación original."
        ]
      },
      {
        level: "avanzado",
        title: "Ecuaciones con múltiples funciones",
        lines: [
          "Ejemplo: cos(2θ) + cos(θ) = 0. Usando cos(2θ) = 2cos²(θ) - 1.",
          "2cos²(θ) + cos(θ) - 1 = 0. Sea x = cos(θ): 2x² + x - 1 = 0.",
          "(2x - 1)(x + 1) = 0, entonces x = 1/2 o x = -1.",
          "cos(θ) = 1/2 → θ = 60° o θ = 300° en [0°, 360°).",
          "cos(θ) = -1 → θ = 180° en [0°, 360°).",
          "Soluciones: 60°, 180°, 300°. Verificar cada una."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Ecuaciones Trigonométricas</text>
        <line x1="30" y1="100" x2="280" y2="100" stroke="#333" stroke-width="1"/>
        <line x1="50" y1="30" x2="50" y2="180" stroke="#333" stroke-width="1"/>
        <path d="M 30,50 Q 65,100 100,50 Q 135,0 170,50 Q 205,100 240,50 Q 275,0 280,30" fill="none" stroke="#2563eb" stroke-width="2"/>
        <line x1="30" y1="50" x2="280" y2="50" stroke="#dc2626" stroke-width="1" stroke-dasharray="4"/>
        <text x="285" y="53" font-family="Arial" font-size="10" fill="#dc2626">y = k</text>
        <circle cx="80" cy="50" r="4" fill="#16a34a"/>
        <circle cx="155" cy="50" r="4" fill="#16a34a"/>
        <circle cx="225" cy="50" r="4" fill="#16a34a"/>
        <text x="80" y="42" font-family="Arial" font-size="9" fill="#16a34a">θ₁</text>
        <text x="155" y="42" font-family="Arial" font-size="9" fill="#16a34a">θ₂</text>
        <text x="225" y="42" font-family="Arial" font-size="9" fill="#16a34a">θ₃</text>
        <text x="30" y="195" font-family="Arial" font-size="10" fill="#333">0°</text>
        <text x="150" y="195" font-family="Arial" font-size="10" fill="#333">180°</text>
        <text x="270" y="195" font-family="Arial" font-size="10" fill="#333">360°</text>
      </svg>`
    ],
    exercises: [
      {
        id: 19,
        question: "¿Cuáles son las soluciones de sen(θ) = 1 en [0°, 360°)?",
        options: ["90°", "90° y 270°", "0° y 180°", "Solo 0°"],
        correctIndex: 0,
        explanation: "sen(θ) = 1 solo se cumple cuando θ = 90° en el intervalo [0°, 360°).",
        difficulty: "basico"
      },
      {
        id: 20,
        question: "¿Cuáles son las soluciones de 2cos²(θ) - 3cos(θ) + 1 = 0 en [0°, 360°)?",
        options: ["0° y 60°", "60° y 300°", "0°, 60° y 300°", "Solo 60°"],
        correctIndex: 2,
        explanation: "Factorizando: (2cos(θ) - 1)(cos(θ) - 1) = 0 → cos(θ) = 1/2 o cos(θ) = 1. cos(θ) = 1 → θ = 0°. cos(θ) = 1/2 → θ = 60° o θ = 300°.",
        difficulty: "intermedio"
      },
      {
        id: 21,
        question: "¿Cuántas soluciones tiene tan(θ) = 2 en [0°, 360°)?",
        options: ["1", "2", "4", "Infinitas"],
        correctIndex: 1,
        explanation: "tan(θ) = 2 tiene una solución en el primer cuadrante y otra en el tercer cuadrante (donde tangente también es positiva). Son 2 soluciones en [0°, 360°).",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "aplicaciones-trigonometricas",
    tip: "Para problemas de alturas inaccesibles, dibuja el diagrama con dos triángulos rectángulos que comparten la misma base. La diferencia de cotangentes te da la altura.",
    theory: [
      {
        level: "basico",
        title: "Problemas de alturas inaccesibles",
        lines: [
          "Para medir la altura de un objeto inaccesible (edificio, montaña), se usan ángulos de elevación.",
          "Desde un punto A, se mide el ángulo de elevación α hacia la cima.",
          "Se camina una distancia conocida d hasta un punto B y se mide el ángulo β.",
          "La altura h se calcula usando tangente: h = d / (1/tan(β) - 1/tan(α)).",
          "Si el punto B está más cerca, β > α, y la fórmula funciona igual.",
          "Se requiere una línea base horizontal y dos mediciones de ángulos."
        ]
      },
      {
        level: "intermedio",
        title: "Problemas de distancia",
        lines: [
          "Para hallar la distancia a un objeto inaccesible: se mide un ángulo y se conoce la altura.",
          "Ejemplo: desde un punto A, el ángulo de elevación a un edificio es 30°. La altura es 50 m.",
          "tan(30°) = 50/d → d = 50/tan(30°) = 50/(√3/3) = 50√3 ≈ 86.6 m.",
          "Para distancia entre dos puntos inaccesibles: se forman dos triángulos con una base conocida.",
          "Los problemas de navegación usan bearings (rumbos) que son ángulos medidos desde el norte.",
          "La trigonometría se aplica en topografía, arquitectura y ingeniería civil."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas compuestos",
        lines: [
          "Problema del avión: un avión a altura h tiene ángulos de elevación α y β desde dos puntos.",
          "Si los puntos están a la misma altitud y separados por distancia d: h = d·tan(α)·tan(β)/(tan(α) + tan(β)).",
          "Problema del río: para medir la anchura de un río, se usa un ángulo y una distancia lateral.",
          "Los problemas mixtos combinan ley de senos, ley de cosenos y razones trigonométricas.",
          "Siempre dibuja un diagrama claro, identifica los triángulos y establece las ecuaciones.",
          "Verifica que las respuestas sean razonables en el contexto del problema."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Aplicaciones Prácticas</text>
        <rect x="220" y="60" width="40" height="110" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="225" y="55" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">h</text>
        <line x1="40" y1="170" x2="220" y2="170" stroke="#333" stroke-width="1.5"/>
        <line x1="40" y1="170" x2="240" y2="60" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4"/>
        <line x1="120" y1="170" x2="240" y2="60" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4"/>
        <path d="M 55,170 Q 50,155 65,150" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="55" y="148" font-family="Arial" font-size="10" fill="#f59e0b">α</text>
        <path d="M 135,170 Q 130,155 145,150" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="135" y="148" font-family="Arial" font-size="10" fill="#f59e0b">β</text>
        <text x="30" y="185" font-family="Arial" font-size="10" fill="#333">A</text>
        <text x="115" y="185" font-family="Arial" font-size="10" fill="#333">B</text>
        <text x="120" y="165" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">d</text>
        <text x="230" y="130" font-family="Arial" font-size="10" fill="#dc2626">h</text>
        <circle cx="240" cy="60" r="3" fill="#dc2626"/>
      </svg>`
    ],
    exercises: [
      {
        id: 22,
        question: "Desde un punto, el ángulo de elevación a la cima de un edificio es 45°. Si se camina 20 m hacia el edificio y el ángulo nuevo es 60°, ¿cuál es la altura del edificio?",
        options: ["30 + 10√3 m", "20√3 m", "20 m", "10√3 m"],
        correctIndex: 0,
        explanation: "Sea h la altura y d la distancia inicial. tan(45°) = h/d → d = h. tan(60°) = h/(h-20) → h = √3(h-20) → h(√3-1) = 20√3 → h = 20√3/(√3-1) = 20√3(√3+1)/2 = 10√3(√3+1) = 30 + 10√3 ≈ 47.32 m.",
        difficulty: "basico"
      },
      {
        id: 23,
        question: "Un avión vuela a una altura de 3000 m. Desde un punto A, el ángulo de elevación es 30°. ¿Cuál es la distancia horizontal desde A hasta el punto bajo el avión?",
        options: ["3000√3 m", "3000 m", "1500√3 m", "6000 m"],
        correctIndex: 0,
        explanation: "tan(30°) = 3000/d → d = 3000/tan(30°) = 3000/(√3/3) = 3000√3 m ≈ 5196 m.",
        difficulty: "intermedio"
      },
      {
        id: 24,
        question: "Dos observadores están a 500 m de distancia. Miden ángulos de elevación de 30° y 45° respectivamente hacia un avión que está entre ambos. ¿A qué altura vuela el avión?",
        options: ["250(√3 - 1) m", "500√3 m", "250 m", "500(√3 + 1) m"],
        correctIndex: 0,
        explanation: "Sea h la altura y x la distancia del primer observador. tan(30°) = h/x → x = h√3. tan(45°) = h/(500 - x) → h = 500 - x. Sustituyendo: h = 500 - h√3 → h(1 + √3) = 500 → h = 500/(√3 + 1) = 500(√3 - 1)/2 = 250(√3 - 1) ≈ 183 m.",
        difficulty: "avanzado"
      }
    ]
  }
];
