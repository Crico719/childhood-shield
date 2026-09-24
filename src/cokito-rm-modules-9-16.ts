[
  {
    slug: "analogias-y-distribuciones",
    tip: "En analogías, identifica primero el **tipo de relación** entre el primer par de palabras. Luego aplica esa misma relación al segundo par. En distribuciones lógicas, prueba cada opción descartando las que contradicen alguna condición del enunciado.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **analogía** es una correspondencia entre dos pares de elementos que comparten una relación similar.",
          "La estructura básica es: **A es a B como C es a D**, o sea A:B :: C:D.",
          "Las relaciones más comunes son: **sinónimo** (bueno:excelente :: rápido:veloz), **antónimo** (frío:caliente :: claro:oscuro), **parte-todo** (rueda:auto :: tecla:teclado), **causa-efecto** (lluvia:inundación :: terremoto:destrucción).",
          "Una **distribución** consiste en asignar elementos a categorías según reglas dadas, verificando que se cumplan todas las condiciones simultáneamente.",
          "Para resolver distribuciones, conviene usar **tablas de doble entrada** o **diagramas de Venn** que representen gráficamente las relaciones entre conjuntos.",
          "El **criterio de eliminación** permite descartar opciones que no cumplen al menos una condición del enunciado."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Para analogías de **mayor complejidad**, identifica si la relación es de **grado** (caliente:ardiente :: tibio:cómodo — ambas son intensidades de temperatura), de **categoría** (perro:mamífero :: rosa:planta — ambas son clasificaciones) o **funcional** (llave:cerradura :: contraseña:computadora — ambas sirven para acceder).",
          "En analogías **abstractas**, busca relaciones entre conceptos: causa-efecto, medio-fin, parte-todo, genero-especie, antecedente-consecuente.",
          "La técnica del **intercambio** consiste en invertir los términos del segundo par y verificar si la relación se mantiene: si A:B :: C:D, entonces B:A :: D:C.",
          "En distribuciones con **tres o más conjuntos**, usa el **principio de inclusión-exclusión**: |A ∪ B ∪ C| = |A| + |B| + |C| - |A∩B| - |A∩C| - |B∩C| + |A∩B∩C|.",
          "Cuando el enunciado dice '**todos los A son B**', asegúrate de que A esté completamente contenido en B. Si dice '**algunos A son B**', la intersección A∩B no es vacía pero tampoco cubre todo A.",
          "Verifica tu respuesta sustituyendo los términos originales en la relación para confirmar que la analogía se mantiene."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Las analogías de **cuarto término** en exámenes universitarios peruanos suelen incluir relaciones de **múltiples capas**: por ejemplo, la relación entre las palabras puede involucrar simultáneamente aspectos semánticos, fonéticos y de uso.",
          "En problemas de **distribuciones complejas**, puede haber restricciones que se contradicen aparentemente. Usa **tablas de verdad** o **diagramas de flujo** para verificar la consistencia lógica.",
          "Las **series de analogías** encadenan múltiples relaciones: A→B→C→D donde cada paso usa un tipo de transformación diferente (por ejemplo, sinónimo, luego antónimo, luego categoría).",
          "En problemas de **grupos que se superponen**, calcula el **mínimo** y el **máximo** posible de elementos en cada intersección usando los límites dados por las condiciones del enunciado.",
          "Para distribuciones con **condiciones condicionales** (si...entonces, solo si, a menos que), convierte cada condicional a su forma lógica equivalente antes de resolver.",
          "En exámenes de admisión como el de la **UNMSM** o la **UPC**, las analogías avanzadas a menudo requieren identificar **relaciones entre relaciones** (meta-analogías)."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Diagrama de Analogías</text>
  <rect x="30" y="50" width="100" height="40" rx="8" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="2"/>
  <text x="80" y="75" text-anchor="middle" font-family="Arial" font-size="13" font-weight="bold" fill="#2563eb">Perro</text>
  <rect x="170" y="50" width="100" height="40" rx="8" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="2"/>
  <text x="220" y="75" text-anchor="middle" font-family="Arial" font-size="13" font-weight="bold" fill="#2563eb">Mamífero</text>
  <rect x="30" y="120" width="100" height="40" rx="8" fill="#059669" opacity="0.15" stroke="#059669" stroke-width="2"/>
  <text x="80" y="145" text-anchor="middle" font-family="Arial" font-size="13" font-weight="bold" fill="#059669">Rosa</text>
  <rect x="170" y="120" width="100" height="40" rx="8" fill="#059669" opacity="0.15" stroke="#059669" stroke-width="2"/>
  <text x="220" y="145" text-anchor="middle" font-family="Arial" font-size="13" font-weight="bold" fill="#059669">Planta</text>
  <line x1="130" y1="70" x2="170" y2="70" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <line x1="130" y1="140" x2="170" y2="140" stroke="#059669" stroke-width="2" marker-end="url(#arrow-green)"/>
  <text x="150" y="100" text-anchor="middle" font-family="Arial" font-size="24" fill="#7c3aed">::</text>
  <text x="150" y="190" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Relación: Especie → Clasificación científica</text>
  <defs>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/></marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/></marker>
  </defs>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Diagrama de Venn — Distribución</text>
  <circle cx="120" cy="110" r="60" fill="#2563eb" opacity="0.12" stroke="#2563eb" stroke-width="2"/>
  <circle cx="180" cy="110" r="60" fill="#dc2626" opacity="0.12" stroke="#dc2626" stroke-width="2"/>
  <text x="85" y="90" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">Estudiantes</text>
  <text x="85" y="105" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">de Ingeniería</text>
  <text x="195" y="90" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">Estudiantes</text>
  <text x="195" y="105" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">de Medicina</text>
  <text x="143" y="115" font-family="Arial" font-size="10" font-weight="bold" fill="#7c3aed">Ambos</text>
  <text x="150" y="185" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Solo Ingeniería: 40 | Solo Medicina: 35 | Ambos: 10</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Complete la analogía: **Lima** es a **Perú** como **París** es a ___",
        options: ["España", "Francia", "Europa", "Roma"],
        correctIndex: 1,
        explanation: "La relación es **capital-país**. Lima es la capital de Perú, y París es la capital de Francia. No confundir con Roma (capital de Italia) ni España (país, no ciudad).",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "En una escuela hay 120 alumnos. 75 estudian Inglés, 60 estudian Francés y 25 estudian ambos idiomas. ¿Cuántos alumnos **no estudian ningún** idioma extranjero?",
        options: ["10", "15", "20", "25"],
        correctIndex: 0,
        explanation: "Por inclusión-exclusión: |I ∪ F| = 75 + 60 - 25 = **110**. Alumnos sin idioma = 120 - 110 = **10**.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "**Calor** es a **expandir** como **frío** es a ___",
        options: ["contraer", "enfriar", "comprimir", "solidificar"],
        correctIndex: 0,
        explanation: "La relación es **causa-efecto físico**: el calor causa la expansión de los materiales; el frío causa su **contracción**. Las otras opciones describen procesos distintos (enfriar es la causa, no el efecto; comprimir es una acción externa; solidificar es un cambio de estado).",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "series",
    tip: "Identifica siempre la **diferencia** o **razón** entre términos consecutivos. Si las diferencias no son constantes, calcula las **diferencias de segundo orden**. Muchas series en el examen son combinaciones de dos patrones alternados.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **serie numérica** es un conjunto de números que siguen un patrón o regla definida.",
          "Una **progresión aritmética (PA)** tiene una **diferencia constante** d entre términos consecutivos: aₙ = a₁ + (n-1)·d.",
          "Una **progresión geométrica (PG)** tiene una **razón constante** r: aₙ = a₁ · r^(n-1).",
          "En una PA de **razón positiva**, los términos crecen; si la razón es **negativa**, los términos alternan entre positivos y negativos.",
          "Para hallar el término faltante, reemplaza n en la fórmula del término general o busca la diferencia/razón entre términos conocidos.",
          "Una serie **ascendente** crece de izquierda a derecha; una **descendente** decrece."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Cuando las diferencias de primer orden **no son constantes**, calcula las **diferencias de segundo orden**. Si estas son constantes, la serie sigue un patrón **cuadrático**: aₙ = An² + Bn + C.",
          "Las series **alternadas** combinan dos patrones: los términos en posición impar siguen una regla y los de posición par siguen otra. Ejemplo: 1, 4, 2, 8, 3, 12... → impares: 1, 2, 3... y pares: 4, 8, 12...",
          "Las series de **Fibonacci** se generan sumando los dos términos anteriores: 1, 1, 2, 3, 5, 8, 13, 21...",
          "En series con **signos alternados** (+, -, +, -...), verifica si el patrón numérico es independiente del signo.",
          "La técnica de **diferencias sucesivas** consiste en formar una tabla de diferencias hasta que aparezca una diferencia constante.",
          "Algunas series siguen patrones de **potencias**: n², n³, 2ⁿ, que reconoces comparando con tablas de valores conocidos."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Las series **recursivas** se definen mediante una regla que depende de términos anteriores. Ejemplo: aₙ = 2·aₙ₋₁ + 1 con a₁ = 1 genera: 1, 3, 7, 15, 31...",
          "En series con **múltiples niveles de diferencias**, un patrón de k-ésimo orden constante corresponde a un polinomio de grado k.",
          "Las series **mixtas** combinan operaciones: por ejemplo, multiplicar y luego sumar: 1, 3, 7, 15, 31... (cada término es 2n-1, o sea 2·anterior + 1).",
          "Para series que parecen no tener patrón, prueba: **suma de dígitos**, **número de factores**, **partes decimales**, o **transformaciones** como raíces cuadradas.",
          "Las series **triangulares** (1, 3, 6, 10, 15...) se forman con la fórmula Tₙ = n(n+1)/2. Las **cuadradas** son n²: 1, 4, 9, 16, 25...",
          "En exámenes de admisión, las series avanzadas a menudo combinan **dos o tres patrones** distintos en una misma sucesión, como potencias + aritmético."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Serie Aritmética: Diferencia Constante</text>
  <rect x="15" y="50" width="50" height="35" rx="6" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="1.5"/>
  <text x="40" y="73" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#2563eb">3</text>
  <rect x="80" y="50" width="50" height="35" rx="6" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="1.5"/>
  <text x="105" y="73" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#2563eb">7</text>
  <rect x="145" y="50" width="50" height="35" rx="6" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="1.5"/>
  <text x="170" y="73" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#2563eb">11</text>
  <rect x="210" y="50" width="50" height="35" rx="6" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="1.5"/>
  <text x="235" y="73" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#2563eb">15</text>
  <text x="62" y="98" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">+4</text>
  <text x="127" y="98" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">+4</text>
  <text x="192" y="98" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">+4</text>
  <text x="150" y="135" text-anchor="middle" font-family="Arial" font-size="12" fill="#1e293b">aₙ = 3 + (n-1)·4 = **4n - 1**</text>
  <text x="150" y="160" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">d = 4 (diferencia constante)</text>
  <text x="150" y="185" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Próximo término: 15 + 4 = **19**</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Diferencias Sucesivas</text>
  <text x="25" y="60" font-family="Arial" font-size="11" font-weight="bold" fill="#1e293b">Serie:</text>
  <text x="75" y="60" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">2, 5, 10, 17, 26, ?</text>
  <text x="25" y="85" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">1ª diff:</text>
  <text x="85" y="85" font-family="Arial" font-size="12" fill="#dc2626">+3, +5, +7, +9</text>
  <text x="25" y="110" font-family="Arial" font-size="11" font-weight="bold" fill="#059669">2ª diff:</text>
  <text x="85" y="110" font-family="Arial" font-size="12" fill="#059669">+2, +2, +2 → constante</text>
  <rect x="20" y="130" width="260" height="55" rx="6" fill="#059669" opacity="0.08" stroke="#059669" stroke-width="1"/>
  <text x="150" y="152" text-anchor="middle" font-family="Arial" font-size="12" fill="#1e293b">2ª diferencia constante → patrón **cuadrático**</text>
  <text x="150" y="172" text-anchor="middle" font-family="Arial" font-size="12" fill="#059669" font-weight="bold">aₙ = n² + 1 → 6² + 1 = **37**</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuál es el siguiente número de la serie: 2, 4, 6, 8, ___?",
        options: ["9", "10", "12", "14"],
        correctIndex: 1,
        explanation: "Es una **progresión aritmética** con diferencia d = 2. Cada término se incrementa en 2: 8 + 2 = **10**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Encuentre el término que falta: 1, 4, 9, 16, ___ , 36",
        options: ["20", "25", "30", "24"],
        correctIndex: 1,
        explanation: "Son **cuadrados perfectos**: 1², 2², 3², 4², **5²** = 25, 6² = 36.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "¿Cuál es el siguiente término de la serie: 2, 3, 5, 9, 17, ___?",
        options: ["25", "31", "33", "29"],
        correctIndex: 3,
        explanation: "Cada término se obtiene **duplicando el anterior y restando 1**: 2→3 (2×2-1), 3→5 (3×2-1), 5→9 (5×2-1), 9→17 (9×2-1), 17→**33** (17×2-1). Alternativamente: las diferencias son +1, +2, +4, +8, +16 → 17+16 = **33**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "sumatorias",
    tip: "Memoriza las fórmulas básicas: **∑k = n(n+1)/2**, **∑k² = n(n+1)(2n+1)/6**, **∑k³ = [n(n+1)/2]²**. En el examen, descompón sumatorias complejas en combinación de estas fórmulas fundamentales.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "La **sumatoria** (σ mayúscula) es la suma de una sucesión de términos: Σᵢ₌₁ⁿ aᵢ = a₁ + a₂ + ... + aₙ.",
          "El **índice i** va desde el **límite inferior** (abajo) hasta el **límite superior** (arriba).",
          "Una **constante fuera de la sumatoria** se puede sacar factor: Σ(c · aᵢ) = c · Σ(aᵢ).",
          "La **suma de los primeros n naturales** es: Σᵢ₌₁ⁿ i = n(n+1)/2.",
          "La **suma de constantes**: Σᵢ₌₁ⁿ c = c · n (se suma c, n veces).",
          "La **propiedad de aditividad**: Σ(aᵢ + bᵢ) = Σaᵢ + Σbᵢ. Las sumatorias se pueden separar término a término."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "La **suma de cuadrados**: Σᵢ₌₁ⁿ i² = n(n+1)(2n+1)/6. Es una de las fórmulas más usadas en el examen.",
          "La **suma de cubos**: Σᵢ₌₁ⁿ i³ = [n(n+1)/2]². Nota que es el **cuadrado** de la suma de los primeros n naturales.",
          "Para sumatorias de **potencias de 2**: Σᵢ₌₀ⁿ 2ⁱ = 2ⁿ⁺¹ - 1 (suma de una progresión geométrica con r = 2).",
          "El **cambio de índice**: puedes reemplazar j = i + k para trasladar los límites de la sumatoria sin cambiar su valor.",
          "Las **sumatorias dobles** Σᵢ Σⱼ se resuelven **evaluando de adentro hacia afuera**, primero la sumatoria interna y luego la externa.",
          "Para **dividir en partes**: Σᵢ₌₁ⁿ (2i + 3) = 2·Σi + 3·Σ1 = 2·n(n+1)/2 + 3n = n² + n + 3n = n² + 4n."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Las **identidades de Abel** permiten reordenar sumatorias: Σaᵢbᵢ = Aₙbₙ - ΣAₖ(bₖ₊₁ - bₖ) donde Aₖ = Σᵢ₌₁ᵏ aᵢ.",
          "Las **sumatorias con términos absolutos**: si aᵢ puede ser negativo, separa la sumatoria en partes positivas y negativas.",
          "Para **estimar** sumatorias grandes, se usa la **integral**: Σᵢ₌₁ⁿ f(i) ≈ ∫₁ⁿ f(x)dx para funciones crecientes.",
          "Las **sumatorias telescópicas** ocurren cuando la mayoría de términos se cancelan: Σ(aₖ₊₁ - aₖ) = aₙ₊₁ - a₁.",
          "En sumatorias **definidas por partes**, descompón el rango: Σᵢ₌₁¹⁰⁰ i² = Σᵢ₌₁⁵⁰ i² + Σᵢ₌₅₁¹⁰⁰ i². Calcula cada parte por separado.",
          "Las fórmulas de **suma de cuadrados perfectos consecutivos** y **potencias** aparecen frecuentemente en exámenes de ingeniería como el de la **UNI**."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Notación Sigma — Fórmulas Clave</text>
  <text x="150" y="55" text-anchor="middle" font-family="Arial" font-size="16" fill="#2563eb" font-weight="bold">∑ᵢ₌₁ⁿ i = n(n+1)/2</text>
  <text x="150" y="78" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Ejemplo: 1+2+3+4+5 = 5(6)/2 = 15</text>
  <line x1="40" y1="90" x2="260" y2="90" stroke="#e2e8f0" stroke-width="1"/>
  <text x="150" y="115" text-anchor="middle" font-family="Arial" font-size="16" fill="#dc2626" font-weight="bold">∑ᵢ₌₁ⁿ i² = n(n+1)(2n+1)/6</text>
  <text x="150" y="138" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Ejemplo: 1²+2²+3² = 3(4)(7)/6 = 14</text>
  <line x1="40" y1="150" x2="260" y2="150" stroke="#e2e8f0" stroke-width="1"/>
  <text x="150" y="175" text-anchor="middle" font-family="Arial" font-size="16" fill="#059669" font-weight="bold">∑ᵢ₌₁ⁿ i³ = [n(n+1)/2]²</text>
  <text x="150" y="195" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Ejemplo: 1³+2³+3³ = (6)² = 36</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Descomposición de Sumatorias</text>
  <text x="150" y="50" text-anchor="middle" font-family="Arial" font-size="12" fill="#1e293b">∑ᵢ₌₁⁵ (3i² + 2i + 1)</text>
  <line x1="100" y1="58" x2="60" y2="78" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="150" y1="58" x2="150" y2="78" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="200" y1="58" x2="240" y2="78" stroke="#059669" stroke-width="1.5"/>
  <rect x="15" y="80" width="90" height="30" rx="5" fill="#2563eb" opacity="0.1" stroke="#2563eb" stroke-width="1"/>
  <text x="60" y="100" text-anchor="middle" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">3·∑i² = 3·55</text>
  <rect x="105" y="80" width="90" height="30" rx="5" fill="#dc2626" opacity="0.1" stroke="#dc2626" stroke-width="1"/>
  <text x="150" y="100" text-anchor="middle" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">2·∑i = 2·15</text>
  <rect x="195" y="80" width="90" height="30" rx="5" fill="#059669" opacity="0.1" stroke="#059669" stroke-width="1"/>
  <text x="240" y="100" text-anchor="middle" font-family="Arial" font-size="10" fill="#059669" font-weight="bold">∑1 = 5</text>
  <line x1="150" y1="115" x2="150" y2="130" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="150" y="128" text-anchor="middle" font-family="Arial" font-size="10" fill="#7c3aed">+</text>
  <rect x="30" y="135" width="240" height="35" rx="6" fill="#7c3aed" opacity="0.08" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="150" y="157" text-anchor="middle" font-family="Arial" font-size="12" fill="#7c3aed" font-weight="bold">= 165 + 30 + 5 = **200**</text>
  <text x="150" y="190" text-anchor="middle" font-family="Arial" font-size="10" fill="#64748b">Propiedad de aditividad: separar en sumatorias individuales</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Calcule: **∑ᵢ₌₁¹⁰ i**",
        options: ["45", "55", "100", "110"],
        correctIndex: 1,
        explanation: "Usando la fórmula ∑ᵢ₌₁ⁿ i = n(n+1)/2: con n=10 → 10(11)/2 = **55**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Calcule: **∑ᵢ₌₁⁵ i²**",
        options: ["30", "55", "35", "25"],
        correctIndex: 1,
        explanation: "Fórmula: n(n+1)(2n+1)/6 = 5(6)(11)/6 = **55**. Verificación: 1+4+9+16+25 = 55.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Calcule: **∑ᵢ₌₁⁴ (2i² - i + 3)**",
        options: ["54", "48", "62", "56"],
        correctIndex: 2,
        explanation: "Separando: 2·∑i² - ∑i + ∑3 = 2·(1+4+9+16) - (1+2+3+4) + 3·4 = 2·30 - 10 + 12 = 60 - 10 + 12 = **62**. Verificación directa: (2·1-1+3)+(2·4-2+3)+(2·9-3+3)+(2·16-4+3) = 4+9+18+31 = **62**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "cuatro-operaciones",
    tip: "Aplica siempre el **orden PEMDAS**: Paréntesis, Exponentes, Multiplicación/División (izq. a der.), Adición/Sustracción (izq. a der.). Muchos errores en el examen provienen de no respetar este orden.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Las **cuatro operaciones** básicas son: **suma** (+), **resta** (−), **multiplicación** (×) y **división** (÷).",
          "El **orden de operaciones** (PEMDAS/BODMAS) establece: primero **paréntesis**, luego **exponentes**, después **multiplicación y división** (izquierda a derecha), y finalmente **suma y resta** (izquierda a derecha).",
          "La **propiedad conmutativa** dice que a + b = b + a y a × b = b × a. Esto NO aplica para la resta ni la división.",
          "La **propiedad asociativa** permite agrupar: (a + b) + c = a + (b + c) y (a × b) × c = a × (b × c).",
          "La **propiedad distributiva** conecta multiplicación con suma: a × (b + c) = a×b + a×c.",
          "El **signo menos** se distribuye: −(a + b) = −a − b y −(a − b) = −a + b. Cuidado con los dobles negativos."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "En operaciones con **fracciones**: para sumar o restar busca **mcm** (mínimo común múltiplo) de los denominadores. Para multiplicar se multiplican directo: (a/b)×(c/d) = (a·c)/(b·d).",
          "La **división de fracciones** se convierte en multiplicación por el **recíproco**: (a/b) ÷ (c/d) = (a/b) × (d/c).",
          "Con **números negativos**: negativo × negativo = positivo; negativo × positivo = negativo. Esto aplica a multiplicación y división.",
          "Para **potencias**: aᵐ × aⁿ = aᵐ⁺ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ.",
          "Las **raíces cuadradas** en operaciones: √(a×b) = √a × √b. Rationaliza el denominador cuando aparezca √2, √3, etc.",
          "En el examen, simplifica **primero dentro de cada paréntesis** antes de operar entre paréntesis distintos."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Las **cadenas de operaciones** con múltiples paréntesis anidados requieren resolver del **más interno hacia afuera**.",
          "Las expresiones con **fracciones compuestas** (fracciones dentro de fracciones) se simplifican multiplicando numerador y denominador por el denominador del denominador.",
          "Los **decimales en operaciones mixtas**: convierte todos a fracciones para mayor precisión, o maneja cuidadosamente los decimales manteniendo la cantidad correcta de cifras.",
          "Las operaciones con **notación científica**: al multiplicar, multiplica las mantisas y suma los exponentes; al dividir, divide mantisas y resta exponentes.",
          "En problemas con **valor absoluto**, evalúa la expresión dentro del signo y luego aplica el valor absoluto: si es positivo se mantiene, si es negativo se cambia el signo.",
          "Las expresiones **recursivas** (definidas por sí mismas) aparecen en series: el valor actual depende del anterior, como aₙ₊₁ = f(aₙ)."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Pirámide del Orden de Operaciones</text>
  <polygon points="150,35 200,75 100,75" fill="#dc2626" opacity="0.15" stroke="#dc2626" stroke-width="1.5"/>
  <text x="150" y="63" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#dc2626">Paréntesis</text>
  <polygon points="150,75 220,115 80,115" fill="#7c3aed" opacity="0.12" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="150" y="100" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#7c3aed">Exponentes</text>
  <polygon points="150,115 240,155 60,155" fill="#2563eb" opacity="0.12" stroke="#2563eb" stroke-width="1.5"/>
  <text x="150" y="140" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">×  ÷ (izq. a der.)</text>
  <polygon points="150,155 260,195 40,195" fill="#059669" opacity="0.12" stroke="#059669" stroke-width="1.5"/>
  <text x="150" y="180" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#059669">+  − (izq. a der.)</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Ejemplo: Resolución Paso a Paso</text>
  <text x="150" y="48" text-anchor="middle" font-family="Arial" font-size="13" fill="#2563eb" font-weight="bold">3 + 2 × (8 − 6)² ÷ 4</text>
  <rect x="20" y="58" width="260" height="22" rx="4" fill="#dc2626" opacity="0.08"/>
  <text x="25" y="74" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">Paso 1:</text>
  <text x="75" y="74" font-family="Arial" font-size="11" fill="#1e293b">3 + 2 × (2)² ÷ 4</text>
  <rect x="20" y="84" width="260" height="22" rx="4" fill="#7c3aed" opacity="0.08"/>
  <text x="25" y="100" font-family="Arial" font-size="11" fill="#7c3aed" font-weight="bold">Paso 2:</text>
  <text x="75" y="100" font-family="Arial" font-size="11" fill="#1e293b">3 + 2 × 4 ÷ 4</text>
  <rect x="20" y="110" width="260" height="22" rx="4" fill="#2563eb" opacity="0.08"/>
  <text x="25" y="126" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold">Paso 3:</text>
  <text x="75" y="126" font-family="Arial" font-size="11" fill="#1e293b">3 + 8 ÷ 4</text>
  <rect x="20" y="136" width="260" height="22" rx="4" fill="#2563eb" opacity="0.08"/>
  <text x="25" y="152" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold">Paso 4:</text>
  <text x="75" y="152" font-family="Arial" font-size="11" fill="#1e293b">3 + 2</text>
  <rect x="20" y="162" width="260" height="28" rx="4" fill="#059669" opacity="0.12" stroke="#059669" stroke-width="1"/>
  <text x="25" y="182" font-family="Arial" font-size="12" fill="#059669" font-weight="bold">Resultado = **5**</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Calcule: **48 ÷ 6 × 2 + 3**",
        options: ["19", "12", "10", "21"],
        correctIndex: 0,
        explanation: "Se resuelve de izquierda a derecha: 48 ÷ 6 = 8; luego 8 × 2 = 16; finalmente 16 + 3 = **19**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Calcule: **(3 + 5)² − 4 × 3**",
        options: ["40", "52", "28", "60"],
        correctIndex: 1,
        explanation: "Primero paréntesis: (8)² = 64. Luego multiplicación: 4 × 3 = 12. Finalmente: 64 − 12 = **52**.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Calcule: **(1/2 + 1/3) × 12 − √(49) + 2²**",
        options: ["6", "8", "7", "9"],
        correctIndex: 2,
        explanation: "Paréntesis: 1/2 + 1/3 = 5/6. Multiplicación: (5/6)×12 = 10. Raíz: √49 = 7. Exponente: 2² = 4. Resultado: 10 − 7 + 4 = **7**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "metodos-practicos",
    tip: "Los métodos prácticos son **atajos** que ahorran tiempo en el examen. Domina la **sustitución de valores**, el **método de opción falsa**, y la **estimación**. En el examen de admisión, el tiempo es limitado: practica resolver cada problema en menos de 2 minutos.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Los **métodos prácticos** son técnicas de resolución rápida que evitan procedimientos largos y propensos a errores.",
          "El **método de sustitución** consiste en reemplazar las variables del problema con **números simples** (como 1, 2 o 10) para verificar qué opción funciona.",
          "El **método de opción falsa** consiste en probar cada alternativa directamente en el enunciado hasta encontrar la correcta.",
          "La **estimación** permite aproximar el resultado para descartar opciones absurdas sin calcular exactamente.",
          "El **método de casos** consiste en dividir el problema en casos más pequeños y manejables.",
          "La **verificación por contradicción** asume que una opción es correcta y busca si genera una situación imposible."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "El método de **valores extremos** consiste probar con 0, 1 o números grandes para ver el comportamiento de una expresión.",
          "La **regla de tres** resuelve problemas de proporción directa e inversa: si a varía con b, entonces a₁/b₁ = a₂/b₂.",
          "El **método de reducción** simplifica el problema eliminando información innecesaria y enfocándose solo en lo esencial.",
          "La **tecnica del diagrama** convierte enunciados verbales en esquemas gráficos que facilitan la visualización.",
          "Para problemas de **porcentajes**: convierte a decimales (25% = 0.25) y multiplica directamente. Para porcentaje de cambio: (nuevo - original)/original × 100.",
          "El **método de eliminación** descarta opciones que son claramente incorrectas, reduciendo las alternativas a evaluar."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "El método de **asignación de variables** convierte un problema verbal en ecuaciones algebraicas, asignando x, y, z a las cantidades desconocidas.",
          "La **programación lineal básica** resuelve problemas de optimización con restricciones, maximizando o minimizando una función.",
          "El método de **Newton-Raphson** aproxima raíces de ecuaciones: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ). Se usa en exámenes de ingeniería.",
          "La **inducción matemática** prueba que una afirmación es verdadera para todo n: (1) caso base, (2) caso inductivo.",
          "Los **invariantes** son cantidades que no cambian bajo ciertas operaciones. Identificar invariantes simplifica muchos problemas.",
          "En problemas de **combinatoria**, usa el principio multiplicativo, aditivo y la fórmula de **permutaciones y combinaciones** según el caso."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Árbol de Decisión de Métodos</text>
  <rect x="100" y="35" width="100" height="28" rx="6" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="1.5"/>
  <text x="150" y="54" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">Problema</text>
  <line x1="120" y1="63" x2="60" y2="85" stroke="#64748b" stroke-width="1"/>
  <line x1="150" y1="63" x2="150" y2="85" stroke="#64748b" stroke-width="1"/>
  <line x1="180" y1="63" x2="240" y2="85" stroke="#64748b" stroke-width="1"/>
  <rect x="15" y="85" width="90" height="25" rx="5" fill="#dc2626" opacity="0.1" stroke="#dc2626" stroke-width="1"/>
  <text x="60" y="102" text-anchor="middle" font-family="Arial" font-size="9" fill="#dc2626" font-weight="bold">¿Algebraico?</text>
  <rect x="105" y="85" width="90" height="25" rx="5" fill="#059669" opacity="0.1" stroke="#059669" stroke-width="1"/>
  <text x="150" y="102" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669" font-weight="bold">¿Tiene opciones?</text>
  <rect x="195" y="85" width="90" height="25" rx="5" fill="#7c3aed" opacity="0.1" stroke="#7c3aed" stroke-width="1"/>
  <text x="240" y="102" text-anchor="middle" font-family="Arial" font-size="9" fill="#7c3aed" font-weight="bold">¿De estimación?</text>
  <line x1="60" y1="110" x2="60" y2="130" stroke="#dc2626" stroke-width="1"/>
  <line x1="150" y1="110" x2="150" y2="130" stroke="#059669" stroke-width="1"/>
  <line x1="240" y1="110" x2="240" y2="130" stroke="#7c3aed" stroke-width="1"/>
  <rect x="15" y="130" width="90" height="25" rx="5" fill="#dc2626" opacity="0.08"/>
  <text x="60" y="147" text-anchor="middle" font-family="Arial" font-size="9" fill="#dc2626">Planteo directo</text>
  <rect x="105" y="130" width="90" height="25" rx="5" fill="#059669" opacity="0.08"/>
  <text x="150" y="147" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669">Sustitución</text>
  <rect x="195" y="130" width="90" height="25" rx="5" fill="#7c3aed" opacity="0.08"/>
  <text x="240" y="147" text-anchor="middle" font-family="Arial" font-size="9" fill="#7c3aed">Aproximación</text>
  <text x="150" y="185" text-anchor="middle" font-family="Arial" font-size="10" fill="#64748b">Elige el método según el tipo de problema</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Método de Sustitución — Ejemplo</text>
  <text x="150" y="46" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Si x = 3, ¿cuál es verdadero?</text>
  <rect x="20" y="56" width="260" height="18" rx="3" fill="#2563eb" opacity="0.06"/>
  <text x="30" y="70" font-family="Arial" font-size="10" fill="#1e293b">A) x² + x = 12 → 9 + 3 = **12** ✓</text>
  <rect x="20" y="76" width="260" height="18" rx="3" fill="#dc2626" opacity="0.06"/>
  <text x="30" y="90" font-family="Arial" font-size="10" fill="#1e293b">B) 2x − 1 = 4 → 6 − 1 = 5 ≠ 4 ✗</text>
  <rect x="20" y="96" width="260" height="18" rx="3" fill="#dc2626" opacity="0.06"/>
  <text x="30" y="110" font-family="Arial" font-size="10" fill="#1e293b">C) x/3 = 2 → 1 ≠ 2 ✗</text>
  <rect x="20" y="116" width="260" height="18" rx="3" fill="#dc2626" opacity="0.06"/>
  <text x="30" y="130" font-family="Arial" font-size="10" fill="#1e293b">D) x² − 5 = 3 → 9 − 5 = 4 ≠ 3 ✗</text>
  <rect x="30" y="145" width="240" height="35" rx="6" fill="#059669" opacity="0.1" stroke="#059669" stroke-width="1.5"/>
  <text x="150" y="168" text-anchor="middle" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">La opción A es correcta: 3² + 3 = 12</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Si un producto cuesta S/ 80 y le dan un descuento del 15%, ¿cuál es su **precio final**?",
        options: ["S/ 68", "S/ 72", "S/ 65", "S/ 75"],
        correctIndex: 0,
        explanation: "Descuento: 80 × 0.15 = S/ 12. Precio final: 80 − 12 = **S/ 68**. Método rápido: 80 × 0.85 = 68.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un auto viaja de Lima a Arequipa (800 km) a 80 km/h, y regresa a 100 km/h. ¿Cuál es la **velocidad promedio** del viaje completo?",
        options: ["90 km/h", "89 km/h", "88 km/h", "90 km/h"],
        correctIndex: 2,
        explanation: "Velocidad promedio = distancia total / tiempo total. Tiempo ida = 800/80 = 10 h. Tiempo vuelta = 800/100 = 8 h. Promedio = 1600/18 = **88.89 ≈ 88 km/h**.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Si **3x − 7 = 2(x + 4)**, entonces x vale:",
        options: ["15", "11", "-1", "5"],
        correctIndex: 0,
        explanation: "Desarrollando: 3x − 7 = 2x + 8. Despejando: 3x − 2x = 8 + 7 → **x = 15**. Verificación: 3(15)−7 = 38; 2(15+4) = 38 ✓.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "planteo-de-ecuaciones",
    tip: "Lee el enunciado **varias veces** y subraya las cantidades desconocidas. Asigna **una sola variable** (x) a lo que se pide, y expresa todo lo demás en función de esa variable. Verifica que la ecuación resultante tenga sentido con un caso simple.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "El **planteamiento de ecuaciones** consiste en traducir un problema en lenguaje natural a una ecuación matemática.",
          "El primer paso es **identificar la incógnita**: ¿qué es lo que se pide hallar? Se asigna una variable, generalmente **x**.",
          "Los **indicios** en el enunciado revelan relaciones: 'el doble de x' → 2x; 'la mitad de y' → y/2; '3 menos que z' → z − 3.",
          "Las palabras clave para **operaciones**: 'suma' → +, 'diferencia' → −, 'producto' → ×, 'cociente' → ÷.",
          "Las palabras para **igualdad**: 'es igual a' → =, 'es el mismo que' → =, 'resulta en' → =.",
          "Después de plantear, **resuelve** la ecuación y **verifica** sustituyendo la respuesta en el enunciado original."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Cuando hay **dos incógnitas**, usa **dos ecuaciones**. Si el problema dice 'A es 3 más que B', entonces A = B + 3.",
          "Los problemas de **edades** usan la relación actual + años transcurridos. Si hoy Juan tiene x años, en 5 años tendrá x + 5.",
          "En problemas de **mezclas**, la cantidad de sustancia activa se conserva: (cantidad₁ × concentración₁) + (cantidad₂ × concentración₂) = total × concentración final.",
          "Los problemas de **trabajo** usan tasas: si A completa un trabajo en a días, su tasa es 1/a del trabajo por día.",
          "Para **proporciones**, establece la igualdad de razones: a/b = c/d, luego despeja la incógnita con **regla de tres**.",
          "Los problemas de **dinero y precios** requieren identificar qué cantidades se mantienen fijas y cuáles cambian."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Los **sistemas de ecuaciones** con tres o más incógnitas se resuelven por sustitución sucesiva, reducción o igualación.",
          "Los problemas de **velocidad relativa** (río con corriente): velocidad real = velocidad propia ± velocidad corriente.",
          "En problemas de **combinaciones**, define variables para cada componente y establece ecuaciones basadas en restricciones de cantidad y costo.",
          "Los problemas con **resticciones de entero** requieren que la solución sea un número natural o entero positivo.",
          "Los **problemas de trabajo conjunto** con más de 2 trabajadores: 1/t = 1/a + 1/b + 1/c, donde t es el tiempo total.",
          "En problemas de **flujo y tanques**, la tasa neta de cambio = tasa de entrada − tasa de salida. Se modela con ecuaciones diferenciales simples."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Traducción: Palabra → Matemática</text>
  <line x1="30" y1="42" x2="270" y2="42" stroke="#e2e8f0" stroke-width="1"/>
  <text x="80" y="60" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">El doble de un número</text>
  <text x="150" y="60" font-family="Arial" font-size="11" fill="#64748b">→</text>
  <text x="200" y="60" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">2x</text>
  <line x1="30" y1="70" x2="270" y2="70" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="80" y="88" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">Es 5 más que...</text>
  <text x="150" y="88" font-family="Arial" font-size="11" fill="#64748b">→</text>
  <text x="200" y="88" font-family="Arial" font-size="12" fill="#dc2626" font-weight="bold">= ... + 5</text>
  <line x1="30" y1="98" x2="270" y2="98" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="80" y="116" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">La mitad de su edad</text>
  <text x="150" y="116" font-family="Arial" font-size="11" fill="#64748b">→</text>
  <text x="200" y="116" font-family="Arial" font-size="12" fill="#059669" font-weight="bold">x / 2</text>
  <line x1="30" y1="126" x2="270" y2="126" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="80" y="144" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">En 3 años tendrá...</text>
  <text x="150" y="144" font-family="Arial" font-size="11" fill="#64748b">→</text>
  <text x="200" y="144" font-family="Arial" font-size="12" fill="#7c3aed" font-weight="bold">x + 3</text>
  <line x1="30" y1="154" x2="270" y2="154" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="80" y="172" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">El triple menos 2</text>
  <text x="150" y="172" font-family="Arial" font-size="11" fill="#64748b">→</text>
  <text x="200" y="172" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">3x − 2</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Proceso de Planteamiento</text>
  <rect x="20" y="38" width="260" height="30" rx="5" fill="#2563eb" opacity="0.1" stroke="#2563eb" stroke-width="1"/>
  <text x="150" y="58" text-anchor="middle" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold">1. LEER y subrayar datos</text>
  <line x1="150" y1="68" x2="150" y2="78" stroke="#2563eb" stroke-width="1.5"/>
  <polygon points="146,78 154,78 150,84" fill="#2563eb"/>
  <rect x="20" y="84" width="260" height="30" rx="5" fill="#dc2626" opacity="0.1" stroke="#dc2626" stroke-width="1"/>
  <text x="150" y="104" text-anchor="middle" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">2. ASIGNAR variable (x)</text>
  <line x1="150" y1="114" x2="150" y2="124" stroke="#dc2626" stroke-width="1.5"/>
  <polygon points="146,124 154,124 150,130" fill="#dc2626"/>
  <rect x="20" y="130" width="260" height="30" rx="5" fill="#059669" opacity="0.1" stroke="#059669" stroke-width="1"/>
  <text x="150" y="150" text-anchor="middle" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">3. PLANTAR ecuación</text>
  <line x1="150" y1="160" x2="150" y2="170" stroke="#059669" stroke-width="1.5"/>
  <polygon points="146,170 154,170 150,176" fill="#059669"/>
  <rect x="20" y="176" width="260" height="22" rx="5" fill="#7c3aed" opacity="0.1" stroke="#7c3aed" stroke-width="1"/>
  <text x="150" y="192" text-anchor="middle" font-family="Arial" font-size="11" fill="#7c3aed" font-weight="bold">4. RESOLVER y VERIFICAR</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "María tiene el **doble** de la edad de Juan. Si en 6 años María tendrá 30 años, ¿cuántos años tiene **Juan** ahora?",
        options: ["9", "12", "15", "18"],
        correctIndex: 1,
        explanation: "María tendrá 30 en 6 años, así que ahora tiene 30 − 6 = 24 años. Juan tiene la mitad: 24/2 = **12 años**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un número disminuido en 8 es igual a **la tercera parte** de sí mismo más 4. Halla el número.",
        options: ["12", "18", "24", "15"],
        correctIndex: 1,
        explanation: "Ecuación: x − 8 = x/3 + 4. Multiplicando por 3: 3x − 24 = x + 12. Entonces 2x = 36 → **x = 18**. Verificación: 18 − 8 = 10; 18/3 + 4 = 10 ✓.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Un depósito contiene **S/ 12,000**. Se retira una cantidad y se deposita el resto al 5% anual. Si después de un año se obtiene S/ 420 de interés, ¿cuánto se **retiró**?",
        options: ["S/ 3,600", "S/ 4,200", "S/ 4,800", "S/ 3,000"],
        correctIndex: 0,
        explanation: "Sea x lo retirado. El resto invertido es (12000 − x). Interés: (12000 − x) × 0.05 = 420. Entonces 12000 − x = 8400, y **x = S/ 3,600**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "edades",
    tip: "Define SIEMPRE la **edad actual** de la persona mayor o principal como x. Expresa las demás edades en función de x. Recuerda que **todas las personas envejecen la misma cantidad** de años. Si el enunciado dice 'hace 5 años', TODOS tenían 5 años menos.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Los problemas de **edades** son uno de los temas más frecuentes en exámenes de admisión peruanos.",
          "La clave es **definir variables** para las edades actuales y expresar las relaciones del enunciado como ecuaciones.",
          "Si hoy Ana tiene x años, **dentro de 5 años** tendrá x + 5 años, y **hace 3 años** tenía x − 3 años.",
          "Todos los involucrados envejecen **la misma cantidad** de tiempo. Si hace 10 años María tenía el doble de Pedro, ambos tenían 10 años menos.",
          "Las relaciones de edad se mantienen **proporcionales** en el tiempo: la diferencia de edades entre dos personas **nunca cambia**.",
          "Siempre **verifica** que la respuesta sea positiva y que cumpla con todas las condiciones del enunciado."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Para problemas con **más de dos personas**, crea una tabla con las edades actuales y las edades en el momento referido.",
          "La relación '**la suma de sus edades es 50**' se traduce como: x + y = 50, donde x e y son las edades actuales.",
          "Cuando el problema dice '**dentro de n años**, la edad de A será el doble de la de B': (x + n) = 2(y + n).",
          "Los problemas de '**veces la edad**' (María tiene 3 veces la edad de Pedro) se traducen como multiplicación: María = 3 × Pedro.",
          "Para problemas con **3 personas**, usa 2 variables: x (la menor), y = x + d₁ (segunda persona), z = x + d₂ (tercera persona).",
          "Si el problema involucra **pasado, presente y futuro**, crea una tabla de tres columnas para cada persona."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Los problemas de **edades con múltiples momentos** requieren definir las edades en al menos dos instantes temporales distintos.",
          "En problemas donde '**la suma de las edades de hace n años es m**', establece: (x−n) + (y−n) = m.",
          "Los problemas de '**invertir** las edades' son sutiles: si ahora A es el doble de B, hace cuántos años B era el doble de A.",
          "Cuando el problema dice '**en k años** la suma de sus edades será m', se plantea: (x + k) + (y + k) = m.",
          "Los problemas con **cuatro o más personas** y múltiples relaciones requieren sistematizar: crea una tabla y convierte cada fila en una ecuación.",
          "En exámenes como el de **San Marcos**, los problemas de edades avanzados combinan relaciones de suma, diferencia y multiplicación con dos o tres momentos temporales."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Línea del Tiempo de Edades</text>
  <line x1="30" y1="70" x2="270" y2="70" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="70" cy="70" r="6" fill="#2563eb"/>
  <circle cx="150" cy="70" r="6" fill="#dc2626"/>
  <circle cx="230" cy="70" r="6" fill="#059669"/>
  <text x="70" y="55" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">Hace 5 años</text>
  <text x="150" y="55" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#dc2626">Hoy</text>
  <text x="230" y="55" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#059669">En 5 años</text>
  <text x="70" y="95" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">Juan: 10 años</text>
  <text x="70" y="108" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">Ana: 5 años</text>
  <text x="150" y="95" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">Juan: 15 años</text>
  <text x="150" y="108" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">Ana: 10 años</text>
  <text x="230" y="95" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">Juan: 20 años</text>
  <text x="230" y="108" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">Ana: 15 años</text>
  <text x="110" y="65" font-family="Arial" font-size="9" fill="#64748b">−5</text>
  <text x="190" y="65" font-family="Arial" font-size="9" fill="#64748b">+5</text>
  <rect x="30" y="130" width="240" height="55" rx="6" fill="#7c3aed" opacity="0.06" stroke="#7c3aed" stroke-width="1"/>
  <text x="150" y="150" text-anchor="middle" font-family="Arial" font-size="11" fill="#7c3aed" font-weight="bold">Diferencia constante: 15 − 10 = 5</text>
  <text x="150" y="170" text-anchor="middle" font-family="Arial" font-size="11" fill="#1e293b">La diferencia de edades NUNCA cambia</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Tabla de Edades — Método Sistemático</text>
  <rect x="20" y="38" width="260" height="145" rx="6" fill="white" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="20" y="38" width="87" height="28" rx="4" fill="#2563eb" opacity="0.15"/>
  <text x="63" y="56" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">Persona</text>
  <rect x="107" y="38" width="87" height="28" rx="4" fill="#dc2626" opacity="0.12"/>
  <text x="150" y="56" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#dc2626">Hace 5 años</text>
  <rect x="194" y="38" width="86" height="28" rx="4" fill="#059669" opacity="0.12"/>
  <text x="237" y="56" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#059669">Hoy</text>
  <line x1="20" y1="66" x2="280" y2="66" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="63" y="88" text-anchor="middle" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">Juan (padre)</text>
  <text x="150" y="88" text-anchor="middle" font-family="Arial" font-size="11" fill="#dc2626">x − 5</text>
  <text x="237" y="88" text-anchor="middle" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">x</text>
  <line x1="20" y1="100" x2="280" y2="100" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="63" y="122" text-anchor="middle" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">María (madre)</text>
  <text x="150" y="122" text-anchor="middle" font-family="Arial" font-size="11" fill="#dc2626">y − 5</text>
  <text x="237" y="122" text-anchor="middle" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">y</text>
  <line x1="20" y1="134" x2="280" y2="134" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="63" y="156" text-anchor="middle" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">Carlos (hijo)</text>
  <text x="150" y="156" text-anchor="middle" font-family="Arial" font-size="11" fill="#dc2626">z − 5</text>
  <text x="237" y="156" text-anchor="middle" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">z</text>
  <text x="150" y="190" text-anchor="middle" font-family="Arial" font-size="10" fill="#64748b">Todos restan los mismos años al retroceder en el tiempo</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Carlos tiene **12 años** y su hermana Patricia tiene 5. ¿Dentro de cuántos años Carlos tendrá **el doble** de la edad de Patricia?",
        options: ["2 años", "3 años", "4 años", "5 años"],
        correctIndex: 0,
        explanation: "En n años: (12 + n) = 2(5 + n) → 12 + n = 10 + 2n → 12 − 10 = 2n − n → **n = 2**. Verificación: dentro de 2 años Carlos tendrá 14 y Patricia 7: 14 = 2 × 7 ✓.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "La suma de las edades de un padre y su hijo es **52 años**. Hace **10 años**, el padre tenía el **triple** de la edad del hijo. ¿Cuántos años tiene el **hijo** ahora?",
        options: ["12", "14", "16", "18"],
        correctIndex: 3,
        explanation: "Padre = p, hijo = h. Sistema: p + h = 52 y (p − 10) = 3(h − 10). De la segunda: p = 3h − 20. Sustituyendo: 3h − 20 + h = 52 → 4h = 72 → **h = 18**. Padre = 34. Verificación: 34 + 18 = 52 ✓. Hace 10 años: 24 = 3 × 8 ✓.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Ana tiene **26 años** y Luis tiene 10. ¿Hace cuántos años Ana tenía **el triple** de la edad de Luis?",
        options: ["2 años", "4 años", "5 años", "3 años"],
        correctIndex: 0,
        explanation: "Hace n años: (26 − n) = 3(10 − n) → 26 − n = 30 − 3n → 2n = 4 → **n = 2**. Verificación: hace 2 años Ana tenía 24 y Luis tenía 8: 24 = 3 × 8 ✓.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "cronometria",
    tip: "En problemas de **tiempo**, convierte todo a una misma unidad (minutos o segundos). Para **velocidad**: distancia = velocidad × tiempo. Recuerda que 1 hora = 60 minutos, 1 minuto = 60 segundos, y cuidado con las **zonas horarias** en problemas internacionales.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "La **cronometría** es la medición del tiempo. Las unidades principales son: **hora** (h), **minuto** (min) y **segundo** (s).",
          "Conversiones básicas: **1 hora = 60 minutos**, **1 minuto = 60 segundos**, **1 hora = 3600 segundos**.",
          "El **reloj de 12 horas** marca AM (antes del mediodía) y PM (después). El **reloj de 24 horas** va de 00:00 a 23:59.",
          "Para calcular la **duración** entre dos horas: resta la hora final menos la hora inicial. Si el minuto final es menor, 'presta' 1 hora (= 60 min).",
          "Un **cuadrante del reloj** tiene 12 números. La manecilla de las horas da una vuelta en 12 horas; la de los minutos da una vuelta en 60 minutos.",
          "El ángulo entre las manecillas del reloj es un tema frecuente: cada hora marca 30° (360°/12) y cada minuto marca 6° (360°/60)."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Para problemas de **velocidad uniforme**: distancia = velocidad × tiempo, o d = v × t. Despejando: t = d/v, v = d/t.",
          "Los problemas de **encuentro** (dos cuerpos que se acercan): velocidad relativa = v₁ + v₂. Tiempo de encuentro = distancia / (v₁ + v₂).",
          "En problemas de **horarios de transporte** (buses, trenes), calcula el **intervalo** entre salidas y multiplica por el número de servicios.",
          "Las **zonas horarias** peruanas: Perú tiene UTC−5 (hora de Lima). Si un evento es a las 10:00 en Lima y preguntan la hora en Madrid (UTC+2 en verano), suma 7 horas → 17:00.",
          "El **huso horario** se calcula: hora destino = hora origen + (diferencia de husos). Cuidado con el cambio de día (cruza de PM a AM).",
          "Para problemas de **duración combinada**: suma los tiempos de cada tramo por separado, cuidando las unidades."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Los problemas de **cronometría con velocidad variable** se divuyen en tramos: cada tramo tiene su propia velocidad, distancia y tiempo.",
          "El **tiempo de retraso** se calcula: si un tren sale 30 min tarde pero viaja 20 km/h más rápido, ¿a qué distancia alcanza al tren puntual?",
          "Los problemas de **vueltas en pistas** requieren: tiempo por vuelta = distancia de la pista / velocidad. Para n vueltas, multiplica por n.",
          "En problemas de **fenómenos periódicos** (péndulos, planetas), el periodo es el tiempo para un ciclo completo. Frecuencia = 1/periodo.",
          "Los problemas de **calendario**: calcular días entre fechas requiere saber los días de cada mes (31, 28/29, 31, 30...) y los años bisiestos.",
          "Un año es bisiesto si: (es divisible por 4 Y NO es divisible por 100) O (es divisible por 400). Ejemplo: 2024 es bisiesto, 1900 no lo es, 2000 sí lo es."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Reloj — Ángulos entre Manecillas</text>
  <circle cx="110" cy="115" r="65" fill="white" stroke="#2563eb" stroke-width="2"/>
  <circle cx="110" cy="115" r="3" fill="#1e293b"/>
  <text x="110" y="58" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b" font-weight="bold">12</text>
  <text x="163" y="100" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b" font-weight="bold">3</text>
  <text x="110" y="186" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b" font-weight="bold">6</text>
  <text x="57" y="100" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b" font-weight="bold">9</text>
  <line x1="110" y1="115" x2="110" y2="70" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="110" y1="115" x2="145" y2="100" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
  <text x="110" y="130" text-anchor="middle" font-family="Arial" font-size="8" fill="#64748b">3:00</text>
  <path d="M 110 115 L 110 90 A 25 25 0 0 1 135 115" fill="#7c3aed" opacity="0.2"/>
  <text x="145" y="85" font-family="Arial" font-size="10" fill="#7c3aed" font-weight="bold">90°</text>
  <rect x="195" y="45" width="95" height="140" rx="6" fill="white" stroke="#e2e8f0"/>
  <text x="242" y="65" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#1e293b">Referencia</text>
  <text x="242" y="85" text-anchor="middle" font-family="Arial" font-size="9" fill="#2563eb">Cada hora = 30°</text>
  <text x="242" y="102" text-anchor="middle" font-family="Arial" font-size="9" fill="#dc2626">Cada min = 6°</text>
  <text x="242" y="122" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669">3:00 → 90°</text>
  <text x="242" y="139" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669">9:00 → 90°</text>
  <text x="242" y="156" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669">6:00 → 180°</text>
  <text x="242" y="176" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669">12:15 → 72°</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Conversión de Unidades de Tiempo</text>
  <rect x="30" y="45" width="75" height="40" rx="6" fill="#2563eb" opacity="0.12" stroke="#2563eb" stroke-width="1.5"/>
  <text x="67" y="63" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">1 Hora</text>
  <text x="67" y="78" text-anchor="middle" font-family="Arial" font-size="9" fill="#2563eb">(h)</text>
  <line x1="105" y1="65" x2="130" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr-g)"/>
  <line x1="130" y1="65" x2="105" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr-g)"/>
  <text x="117" y="60" text-anchor="middle" font-family="Arial" font-size="8" fill="#64748b">×60</text>
  <text x="117" y="74" text-anchor="middle" font-family="Arial" font-size="8" fill="#64748b">÷60</text>
  <rect x="130" y="45" width="75" height="40" rx="6" fill="#dc2626" opacity="0.12" stroke="#dc2626" stroke-width="1.5"/>
  <text x="167" y="63" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">1 Minuto</text>
  <text x="167" y="78" text-anchor="middle" font-family="Arial" font-size="9" fill="#dc2626">(min)</text>
  <line x1="205" y1="65" x2="230" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr-g)"/>
  <line x1="230" y1="65" x2="205" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr-g)"/>
  <text x="217" y="60" text-anchor="middle" font-family="Arial" font-size="8" fill="#64748b">×60</text>
  <text x="217" y="74" text-anchor="middle" font-family="Arial" font-size="8" fill="#64748b">÷60</text>
  <rect x="230" y="45" width="50" height="40" rx="6" fill="#059669" opacity="0.12" stroke="#059669" stroke-width="1.5"/>
  <text x="255" y="63" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#059669">1 Seg</text>
  <text x="255" y="78" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669">(s)</text>
  <rect x="30" y="105" width="250" height="75" rx="6" fill="#7c3aed" opacity="0.06" stroke="#7c3aed" stroke-width="1"/>
  <text x="155" y="128" text-anchor="middle" font-family="Arial" font-size="11" fill="#7c3aed" font-weight="bold">Fórmulas clave:</text>
  <text x="155" y="148" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">1 hora = 60 min = **3,600 seg**</text>
  <text x="155" y="168" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">d = v × t  →  t = d/v  →  v = d/t</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Un tren sale de Lima a las **8:30 a.m.** y llega a Cusco a las **2:15 p.m.** del mismo día. ¿Cuánto **tiempo** duró el viaje?",
        options: ["5 horas 45 minutos", "6 horas 15 minutos", "5 horas 15 minutos", "6 horas 45 minutos"],
        correctIndex: 0,
        explanation: "De 8:30 a.m. a 12:30 p.m. = 4 horas. De 12:30 p.m. a 2:15 p.m. = 1 hora 45 minutos. Total: **5 horas 45 minutos**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Una auto viaja a **90 km/h** y recorre **270 km**. ¿Cuánto **tiempo** tarda en horas y minutos?",
        options: ["2 horas 30 minutos", "3 horas", "2 horas 45 minutos", "3 horas 30 minutos"],
        correctIndex: 1,
        explanation: "Tiempo = distancia/velocidad = 270/90 = **3 horas** exactas.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "¿Cuál es el **ángulo** que forman las manecillas del reloj a las **4:30**?",
        options: ["15°", "30°", "45°", "60°"],
        correctIndex: 2,
        explanation: "A las 4:30: la manecilla de horas está entre 4 y 5, específicamente a 4.5 × 30° = 135° desde las 12. La manecilla de minutos está en 6, a 180°. Ángulo = |180° − 135°| = **45°**.",
        difficulty: "avanzado"
      }
    ]
  }
]