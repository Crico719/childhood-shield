import type { CourseModule } from "C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content";

export const rmBatch6: CourseModule[] = [
  {
    slug: "media-mediana-moda",
    tip: "La media se afecta por valores extremos; la mediana y la moda son más robustas ante datos atípicos.",
    theory: [
      {
        level: "basico",
        title: "Media aritmética",
        lines: [
          "La media aritmética es la suma de todos los valores dividida entre la cantidad total de datos.",
          "Fórmula: media = (x₁ + x₂ + ... + xₙ) / n",
          "Es la medida de tendencia central más utilizada en el examen.",
          "Si sumamos 10 a cada dato, la media también sube 10 unidades.",
          "Ejemplo: 4, 6, 8, 10, 12 → media = (4+6+8+10+12)/5 = 40/5 = 8",
          "La media puede no ser representativa si hay valores muy grandes o muy pequeños."
        ]
      },
      {
        level: "intermedio",
        title: "Mediana y moda",
        lines: [
          "La mediana es el valor que ocupa la posición central cuando los datos están ordenados.",
          "Si n es par, la mediana es el promedio de los dos valores centrales.",
          "La moda es el valor que más se repite en un conjunto de datos.",
          "Un conjunto puede ser unimodal, bimodal o multimodal.",
          "Si todos los valores se repiten igual, no existe moda.",
          "Ejemplo: 3, 5, 5, 7, 9 → mediana = 5, moda = 5"
        ]
      },
      {
        level: "avanzado",
        title: "Relación entre media, mediana y moda",
        lines: [
          "En distribuciones simétricas: media = mediana = moda.",
          "En distribuciones asimétricas positivas: media > mediana > moda.",
          "En distribuciones asimétricas negativas: media < mediana < moda.",
          "La media ponderada asigna pesos diferentes a cada valor: Σ(wᵢ·xᵢ) / Σwᵢ.",
          "Si conoces la media de un grupo y la de subgrupos, puedes hallar la media total.",
          "En el examen suelen pedir la media original tras transformar los datos."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Media, Mediana y Moda</text>
  <line x1="30" y1="50" x2="30" y2="170" stroke="#94a3b8" stroke-width="1"/>
  <line x1="30" y1="170" x2="280" y2="170" stroke="#94a3b8" stroke-width="1"/>
  <rect x="45" y="130" width="28" height="40" fill="#2563eb" rx="3"/>
  <text x="59" y="148" text-anchor="middle" font-size="9" fill="white">2</text>
  <rect x="80" y="110" width="28" height="60" fill="#2563eb" rx="3"/>
  <text x="94" y="140" text-anchor="middle" font-size="9" fill="white">4</text>
  <rect x="115" y="80" width="28" height="90" fill="#16a34a" rx="3"/>
  <text x="129" y="120" text-anchor="middle" font-size="9" fill="white">6</text>
  <rect x="150" y="60" width="28" height="110" fill="#dc2626" rx="3"/>
  <text x="164" y="110" text-anchor="middle" font-size="9" fill="white">8</text>
  <rect x="185" y="90" width="28" height="80" fill="#2563eb" rx="3"/>
  <text x="199" y="126" text-anchor="middle" font-size="9" fill="white">10</text>
  <rect x="220" y="100" width="28" height="70" fill="#2563eb" rx="3"/>
  <text x="234" y="131" text-anchor="middle" font-size="9" fill="white">12</text>
  <text x="59" y="185" text-anchor="middle" font-size="8" fill="#475569">2</text>
  <text x="94" y="185" text-anchor="middle" font-size="8" fill="#475569">4</text>
  <text x="129" y="185" text-anchor="middle" font-size="8" fill="#16a34a">6</text>
  <text x="164" y="185" text-anchor="middle" font-size="8" fill="#dc2626">8</text>
  <text x="199" y="185" text-anchor="middle" font-size="8" fill="#475569">10</text>
  <text x="234" y="185" text-anchor="middle" font-size="8" fill="#475569">12</text>
  <line x1="164" y1="50" x2="164" y2="56" stroke="#dc2626" stroke-width="2"/>
  <text x="164" y="48" text-anchor="middle" font-size="8" fill="#dc2626">Moda=8</text>
  <line x1="129" y1="50" x2="129" y2="56" stroke="#16a34a" stroke-width="2"/>
  <text x="129" y="48" text-anchor="middle" font-size="8" fill="#16a34a">Mediana=6</text>
  <line x1="145" y1="50" x2="145" y2="56" stroke="#f59e0b" stroke-width="2"/>
  <text x="145" y="48" text-anchor="middle" font-size="8" fill="#f59e0b">Media≈7</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuál es la media de los números 5, 10, 15, 20 y 25?",
        options: ["12", "15", "10", "20"],
        correctIndex: 1,
        explanation: "Media = (5+10+15+20+25)/5 = 75/5 = 15.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "En un grupo de 7 estudiantes, sus edades son: 14, 15, 15, 16, 16, 16, 18. ¿Cuál es la mediana?",
        options: ["15", "16", "15.5", "14"],
        correctIndex: 1,
        explanation: "Los datos ya están ordenados y son 7 (impar). La posición central es la 4ª: 16.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "La media de 5 calificaciones es 8. Si se elimina una calificación de 6, la nueva media es 8.5. ¿Cuál era la calificación eliminada?",
        options: ["6", "5", "7", "4"],
        correctIndex: 0,
        explanation: "Suma original = 5×8 = 40. Nueva suma = 4×8.5 = 34. Calificación eliminada = 40−34 = 6.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "varianza-desviacion",
    tip: "La desviación estándar mide qué tan dispersos están los datos respecto a la media. Un valor alto indica mucha variabilidad.",
    theory: [
      {
        level: "basico",
        title: "Qué es la varianza",
        lines: [
          "La varianza mide qué tan alejados están los datos de la media.",
          "Se calcula restando la media a cada dato, elevando al cuadrado y promediando.",
          "Fórmula: varianza = Σ(xᵢ − media)² / n",
          "Siempre es un valor positivo o cero.",
          "Si todos los datos son iguales, la varianza es cero.",
          "Unidad de la varianza: la unidad original elevada al cuadrado."
        ]
      },
      {
        level: "intermedio",
        title: "Desviación estándar",
        lines: [
          "La desviación estándar es la raíz cuadrada de la varianza.",
          "Fórmula: σ = √(varianza)",
          "Tiene la misma unidad que los datos originales.",
          "Un 68% de datos en una distribución normal están dentro de ±1σ de la media.",
          "Un 95% están dentro de ±2σ de la media.",
          "Si σ es pequeña, los datos están agrupados cerca de la media."
        ]
      },
      {
        level: "avanzado",
        title: "Desviación media y fórmula alternativa",
        lines: [
          "La desviación media es Σ|xᵢ − media| / n, no usa cuadrados.",
          "La varianza también se puede calcular como: var = media(x²) − media².",
          "Si cada dato se multiplica por k, la varianza se multiplica por k².",
          "Si se suma c a cada dato, la varianza no cambia.",
          "La raíz cuadrada de la varianza poblacional usa n; la muestral usa n−1.",
          "En el examen, la fórmula alternativa var = media(x²) − media² ahorra tiempo."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Dispersión: Varianza y Desviación</text>
  <line x1="30" y1="170" x2="280" y2="170" stroke="#94a3b8" stroke-width="1"/>
  <line x1="30" y1="40" x2="30" y2="170" stroke="#94a3b8" stroke-width="1"/>
  <circle cx="60" cy="100" r="5" fill="#2563eb"/>
  <circle cx="80" cy="95" r="5" fill="#2563eb"/>
  <circle cx="100" cy="90" r="5" fill="#2563eb"/>
  <circle cx="120" cy="100" r="5" fill="#2563eb"/>
  <circle cx="140" cy="105" r="5" fill="#2563eb"/>
  <circle cx="160" cy="92" r="5" fill="#2563eb"/>
  <circle cx="180" cy="98" r="5" fill="#2563eb"/>
  <circle cx="200" cy="100" r="5" fill="#2563eb"/>
  <circle cx="220" cy="105" r="5" fill="#2563eb"/>
  <circle cx="240" cy="97" r="5" fill="#2563eb"/>
  <line x1="30" y1="98" x2="270" y2="98" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="275" y="102" font-size="9" fill="#dc2626">μ</text>
  <text x="40" y="188" font-size="9" fill="#475569">Datos agrupados → σ baja</text>
  <circle cx="60" cy="55" r="5" fill="#16a34a"/>
  <circle cx="100" cy="130" r="5" fill="#16a34a"/>
  <circle cx="140" cy="45" r="5" fill="#16a34a"/>
  <circle cx="180" cy="140" r="5" fill="#16a34a"/>
  <circle cx="220" cy="50" r="5" fill="#16a34a"/>
  <circle cx="250" cy="125" r="5" fill="#16a34a"/>
  <line x1="30" y1="92" x2="270" y2="92" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="275" y="96" font-size="9" fill="#16a34a">μ</text>
  <text x="140" y="188" font-size="9" fill="#475569">Datos dispersos → σ alta</text>
  <rect x="50" y="150" width="8" height="20" fill="#2563eb" opacity="0.3" rx="1"/>
  <rect x="90" y="155" width="8" height="15" fill="#2563eb" opacity="0.3" rx="1"/>
  <rect x="130" y="160" width="8" height="10" fill="#2563eb" opacity="0.3" rx="1"/>
  <text x="260" y="60" font-size="9" fill="#16a34a">σ alta</text>
  <text x="260" y="115" font-size="9" fill="#2563eb">σ baja</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuál es la varianza de los datos 2, 4, 6, 8, 10?",
        options: ["6", "8", "10", "4"],
        correctIndex: 1,
        explanation: "Media = 6. Varianza = [(2−6)²+(4−6)²+(6−6)²+(8−6)²+(10−6)²]/5 = [16+4+0+4+16]/5 = 40/5 = 8.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Si la varianza de un conjunto de datos es 25, ¿cuál es la desviación estándar?",
        options: ["5", "25", "12.5", "50"],
        correctIndex: 0,
        explanation: "La desviación estándar es la raíz cuadrada de la varianza: √25 = 5.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Si cada dato de un conjunto se multiplica por 3, ¿cómo cambia la desviación estándar?",
        options: ["Se multiplica por 3", "Se multiplica por 9", "No cambia", "Se triplica la varianza"],
        correctIndex: 0,
        explanation: "Si se multiplica cada dato por k, la desviación estándar se multiplica por |k|. Aquí: 3σ.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "percentiles-cuartiles",
    tip: "El diagrama de caja muestra la mediana, Q1, Q3 y los valores atípicos. Domina el cálculo de posiciones.",
    theory: [
      {
        level: "basico",
        title: "Qué son los percentiles",
        lines: [
          "Un percentil es el valor por debajo del cual se encuentra un porcentaje de los datos.",
          "P50 es la mediana, el percentil 50.",
          "P25 es el valor que deja el 25% de datos por debajo.",
          "P75 deja el 75% de datos por debajo.",
          "La posición del percentil k es: pos = (k/100) × n.",
          "Si la posición no es entera, se redondea hacia arriba."
        ]
      },
      {
        level: "intermedio",
        title: "Cuartiles y diagrama de caja",
        lines: [
          "Q1 = P25, Q2 = P50 (mediana), Q3 = P75.",
          "El rango intercuartílico IQR = Q3 − Q1.",
          "El IQR mide la dispersión del 50% central de los datos.",
          "En un diagrama de caja, la caja va de Q1 a Q3.",
          "Los bigotes se extienden hasta 1.5×IQR desde Q1 y Q3.",
          "Los puntos fuera de los bigotes son valores atípicos."
        ]
      },
      {
        level: "avanzado",
        title: "Cálculo preciso de cuartiles",
        lines: [
          "Para hallar Q1: ordena los datos y busca la mediana de la mitad inferior.",
          "Si n es impar, la mediana no se incluye en ninguna mitad.",
          "Si n es par, se divide el conjunto exactamente en dos mitades iguales.",
          "La fórmula general: posición de Qk = k(n+1)/4.",
          "El diagrama de caja también muestra la simetría o asimetría de los datos.",
          "Un bigote más largo indica mayor dispersión en esa mitad de los datos."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Diagrama de Caja y Bigotes</text>
  <line x1="20" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,2"/>
  <rect x="80" y="70" width="100" height="60" fill="none" stroke="#2563eb" stroke-width="2.5" rx="3"/>
  <line x1="130" y1="70" x2="130" y2="130" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="80" y1="100" x2="50" y2="100" stroke="#16a34a" stroke-width="2"/>
  <line x1="50" y1="85" x2="50" y2="115" stroke="#16a34a" stroke-width="2"/>
  <line x1="180" y1="100" x2="230" y2="100" stroke="#16a34a" stroke-width="2"/>
  <line x1="230" y1="85" x2="230" y2="115" stroke="#16a34a" stroke-width="2"/>
  <circle cx="255" cy="100" r="4" fill="#f59e0b"/>
  <text x="50" y="155" text-anchor="middle" font-size="10" fill="#475569">Min</text>
  <text x="80" y="155" text-anchor="middle" font-size="10" fill="#2563eb">Q1</text>
  <text x="130" y="155" text-anchor="middle" font-size="10" fill="#dc2626">Q2</text>
  <text x="180" y="155" text-anchor="middle" font-size="10" fill="#2563eb">Q3</text>
  <text x="230" y="155" text-anchor="middle" font-size="10" fill="#475569">Max</text>
  <text x="255" y="155" text-anchor="middle" font-size="10" fill="#f59e0b">Atípico</text>
  <text x="130" y="62" text-anchor="middle" font-size="9" fill="#dc2626">Mediana</text>
  <line x1="80" y1="55" x2="180" y2="55" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="130" y="50" text-anchor="middle" font-size="9" fill="#8b5cf6">IQR</text>
  <line x1="80" y1="170" x2="180" y2="170" stroke="#2563eb" stroke-width="1" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="130" y="185" text-anchor="middle" font-size="9" fill="#2563eb">50% central</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "En un conjunto de 20 datos ordenados, ¿en qué posición se encuentra Q1 (percentil 25)?",
        options: ["Posición 5", "Posición 4", "Posición 6", "Posición 10"],
        correctIndex: 0,
        explanation: "Posición de Q1 = (25/100) × 20 = 5. Se toma el valor en la posición 5.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Si Q1 = 12 y Q3 = 28, ¿cuál es el rango intercuartílico?",
        options: ["16", "40", "14", "20"],
        correctIndex: 0,
        explanation: "IQR = Q3 − Q1 = 28 − 12 = 16.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "¿Cuál es el límite superior para detectar valores atípicos usando el criterio de 1.5×IQR si Q1=10 y Q3=30?",
        options: ["55", "60", "45", "50"],
        correctIndex: 1,
        explanation: "IQR = 30−10 = 20. Límite superior = Q3 + 1.5×IQR = 30 + 1.5×20 = 30 + 30 = 60.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "razonamiento-verbal-avanzado",
    tip: "Para deducir el correcto, prueba cada opción y verifica si contradice la premisa. La respuesta siempre se sigue lógicamente.",
    theory: [
      {
        level: "basico",
        title: "Afirmaciones universales",
        lines: [
          "Todo A es B → equivale a: Si es A, entonces es B.",
          "Ningún A es B → equivale a: Si es A, entonces no es B.",
          "Algunos A son B → existe al menos un A que es B.",
          "Algunos A no son B → existe al menos un A que no es B.",
          "De 'todo A es B' NO se puede concluir que todo B es A.",
          "La negación de 'todo A es B' es 'algunos A no son B'."
        ]
      },
      {
        level: "intermedio",
        title: "Deducción verbal paso a paso",
        lines: [
          "Primero identifica las premisas: oraciones con palabras como todos, algunos, ningún.",
          "Luego busca la conclusión que se deduce lógicamente de TODAS las premisas.",
          "Una palabra clave como 'pero' funciona como 'y' en lógica.",
          "Si dos premisas comparten un término, puedes encadenar conclusiones.",
          "Cuidado con el error de negar el antecedente o afirmar el consecuente.",
          "En el examen, dibuja un diagrama de Venn para visualizar las relaciones."
        ]
      },
      {
        level: "avanzado",
        title: "Argumentación y silogismos",
        lines: [
          "Silogismo categórico: premisa mayor + premisa menor → conclusión.",
          "Modo válido: Si A→B y A, entonces B (modus ponens).",
          "Modo válido: Si A→B y no B, entonces no A (modus tollens).",
          "Modo inválido: Si A→B y B, entonces A (affirming the consequent).",
          "Modo inválido: Si A→B y no A, entonces no B (denying the antecedent).",
          "Para refutar un argumento, basta encontrar un contraejemplo."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Silogismo y Deducción Verbal</text>
  <rect x="20" y="40" width="260" height="30" fill="#2563eb" rx="5" opacity="0.15"/>
  <text x="150" y="60" text-anchor="middle" font-size="11" fill="#2563eb" font-weight="bold">Todos los gatos son animales</text>
  <rect x="20" y="80" width="260" height="30" fill="#16a34a" rx="5" opacity="0.15"/>
  <text x="150" y="100" text-anchor="middle" font-size="11" fill="#16a34a" font-weight="bold">Milo es un gato</text>
  <line x1="150" y1="110" x2="150" y2="120" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowhead)"/>
  <rect x="20" y="125" width="260" height="30" fill="#dc2626" rx="5" opacity="0.15"/>
  <text x="150" y="145" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="bold">∴ Milo es un animal</text>
  <circle cx="150" cy="175" r="12" fill="none" stroke="#8b5cf6" stroke-width="2"/>
  <text x="150" y="179" text-anchor="middle" font-size="10" fill="#8b5cf6" font-weight="bold">∴</text>
  <text x="30" y="175" font-size="9" fill="#f59e0b">Modus ponens</text>
  <line x1="85" y1="50" x2="85" y2="70" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="215" y1="50" x2="215" y2="70" stroke="#16a34a" stroke-width="1.5"/>
  <text x="60" y="185" font-size="8" fill="#94a3b8">Premisa mayor</text>
  <text x="200" y="185" font-size="8" fill="#94a3b8">Premisa menor</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Todos los médicos estudiaron biología. Ana estudió biología. ¿Se puede concluir que Ana es médica?",
        options: [
          "Sí, porque estudió biología",
          "No, porque otros también estudiaron biología",
          "Sí, siempre",
          "No hay información suficiente"
        ],
        correctIndex: 1,
        explanation: "Esto es afirmar el consecuente (error lógico). Estudiar biología no implica ser médica; otros profesionales también la estudian.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Ningún reptil tiene pelo. El lagarto es un reptil. ¿Qué se puede concluir?",
        options: [
          "El lagarto no tiene pelo",
          "Algunos reptiles tienen pelo",
          "El lagarto es un mamífero",
          "No se puede concluir nada"
        ],
        correctIndex: 0,
        explanation: "Si ningún reptil tiene pelo y el lagarto es reptil, entonces el lagarto no tiene pelo. Silogismo válido.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Si llueve, la calle se moja. La calle no está mojada. ¿Qué se deduce?",
        options: [
          "No llovió",
          "Puede haber llovido igualmente",
          "Siempre llueve",
          "No hay suficiente información"
        ],
        correctIndex: 0,
        explanation: "Modus tollens: Si P→Q y no Q, entonces no P. Si no está mojada, no llovió.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "razonamiento-abstracto",
    tip: "Busca el patrón: número de lados, rotación, simetría, color o posición. Compara siempre entre elementos consecutivos.",
    theory: [
      {
        level: "basico",
        title: "Tipos de patrones visuales",
        lines: [
          "Los patrones pueden ser: repetición, alternancia, progresión o simetría.",
          "Repetición: un elemento se repite igual en cada paso.",
          "Alternancia: dos o más elementos se intercalan (A, B, A, B...).",
          "Progresión: el elemento cambia gradualmente (más lados, más oscuro, más grande).",
          "Simetría: el patrón es igual a la izquierda y a la derecha.",
          "Para encontrar el patrón, compara pares de figuras consecutivas."
        ]
      },
      {
        level: "intermedio",
        title: "Elementos cambiantes",
        lines: [
          "Los elementos que pueden cambiar son: forma, número, posición, color, tamaño.",
          "Identifica cuántos elementos cambian en cada paso.",
          "Si solo cambia la posición, puede ser una rotación o traslación.",
          "Si cambia el número de lados, puede ser una secuencia aritmética.",
          "Combina los cambios: posición + color implica dos patrones simultáneos.",
          "El patrón más complejo sigue siendo la superposición de patrones simples."
        ]
      },
      {
        level: "avanzado",
        title: "Series abstractas complejas",
        lines: [
          "En series con dos figuras, analiza cada una por separado.",
          "El movimiento puede ser en sentido horario o antihorario.",
          "Algunos patrones usan operaciones: agregar, quitar, superponer.",
          "Los patrones pueden saltar: elemento 1 → 3 → 5 y 2 → 4 → 6.",
          "Verifica tu respuesta aplicando el patrón al último elemento conocido.",
          "Si ninguna opción encaja, reevalúa los patrones desde el inicio."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Patrones Visuales</text>
  <line x1="20" y1="100" x2="280" y2="100" stroke="#cbd5e1" stroke-width="1"/>
  <text x="150" y="115" text-anchor="middle" font-size="9" fill="#94a3b8">Serie de figuras con patrón de rotación</text>
  <polygon points="40,65 50,50 60,65" fill="none" stroke="#2563eb" stroke-width="2"/>
  <polygon points="85,60 100,45 115,60 100,75" fill="none" stroke="#dc2626" stroke-width="2"/>
  <polygon points="140,55 155,45 170,55 155,75 140,65" fill="none" stroke="#16a34a" stroke-width="2"/>
  <polygon points="195,55 210,45 225,55 225,70 210,80 195,70" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="240,50 258,42 270,55 265,75 248,82 238,70" fill="none" stroke="#8b5cf6" stroke-width="2"/>
  <text x="50" y="80" text-anchor="middle" font-size="8" fill="#2563eb">3 lados</text>
  <text x="100" y="92" text-anchor="middle" font-size="8" fill="#dc2626">4 lados</text>
  <text x="155" y="92" text-anchor="middle" font-size="8" fill="#16a34a">5 lados</text>
  <text x="210" y="92" text-anchor="middle" font-size="8" fill="#f59e0b">6 lados</text>
  <text x="255" y="92" text-anchor="middle" font-size="8" fill="#8b5cf6">7 lados</text>
  <text x="255" y="140" font-size="9" fill="#94a3b8">→ +1 lado cada paso</text>
  <polygon points="130,150 145,135 160,150 145,170" fill="#2563eb" stroke="#2563eb" stroke-width="2"/>
  <polygon points="170,150 185,135 200,150 185,170" fill="#2563eb" stroke="#2563eb" stroke-width="2" opacity="0.5"/>
  <text x="150" y="190" text-anchor="middle" font-size="9" fill="#2563eb">Patrón de alternancia</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Secuencia visual: triángulo, cuadrado, pentágono, hexágono. ¿Qué figura sigue?",
        options: ["Heptágono", "Octágono", "Pentágono", "Círculo"],
        correctIndex: 0,
        explanation: "El patrón es +1 lado cada figura: 3, 4, 5, 6 → sigue 7 (heptágono).",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "En una serie, las figuras rotan 90° en sentido horario. Si la primera apunta al norte, ¿a dónde apunta la cuarta?",
        options: ["Norte", "Este", "Sur", "Oeste"],
        correctIndex: 3,
        explanation: "90° en sentido horario: Norte → Este → Sur → Oeste. La cuarta figura tiene 3 rotaciones de 90° = 270° desde norte = Oeste.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Serie: ○, ●○, ○●○, ●○●○. ¿Cuál es el patrón?",
        options: [
          "Se agrega un círculo alterno al inicio",
          "Se duplica el patrón anterior",
          "Se agrega un círculo del color opuesto al final",
          "Los círculos oscuros aumentan en uno"
        ],
        correctIndex: 0,
        explanation: "El patrón agrega un círculo del color opuesto al inicio en cada paso.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "razonamiento-espacial",
    tip: "Imagina que sostienes el objeto. Para plegados, sigue cada cara. Para rotaciones, mantén una marca de referencia.",
    theory: [
      {
        level: "basico",
        title: "Rotaciones mentales",
        lines: [
          "Una rotación cambia la orientación de un objeto sin alterar su forma.",
          "Al rotar,某些 caras quedan ocultas y otras se vuelven visibles.",
          "Elige una marca o color en el objeto para rastrear su posición.",
          "Una rotación de 90° cambia radicalmente qué caras se ven.",
          "Una rotación de 180° invierte arriba/abajo y izquierda/derecha.",
          "Practica con cubos: una cara visible puede quedar arriba, abajo o al costado."
        ]
      },
      {
        level: "intermedio",
        title: "Plegado de papel",
        lines: [
          "Cuando pliegas papel, las caras que se tocan quedan frente a frente.",
          "Un pliegue simple une dos mitades: la imagen se refleja.",
          "Si perforas después de plegar, el hueco aparece simétricamente.",
          "Cuenta los pliegues para determinar cuántas capas hay.",
          "Un pliegue diagonal produce simetría diagonal en el resultado.",
          "Traza mentalmente qué parte del papel va a dónde tras cada pliegue."
        ]
      },
      {
        level: "avanzado",
        title: "Cortes y vistas espaciales",
        lines: [
          "Un corte vertical en un cubo muestra un rectángulo.",
          "Un corte diagonal puede mostrar un rectángulo, hexágono u otra figura.",
          "Las vistas ortogonales son: frontal, lateral y superior.",
          "Una vista superior muestra lo que se ve mirando desde arriba.",
          "Los objetos con agujeros muestran líneas discontinuas en las vistas ocultas.",
          "Para problemas complejos, descompón el objeto en partes más simples."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Razonamiento Espacial</text>
  <polygon points="50,120 90,80 130,120 90,160" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="90,80 130,80 130,120 90,80" fill="#2563eb" opacity="0.2"/>
  <polygon points="130,80 170,60 170,100 130,120" fill="#2563eb" opacity="0.3"/>
  <line x1="90" y1="80" x2="90" y2="40" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="90" y="35" text-anchor="middle" font-size="9" fill="#dc2626">rotación</text>
  <polygon points="195,120 235,80 275,120 235,160" fill="none" stroke="#16a34a" stroke-width="2.5" transform="rotate(90,235,120)"/>
  <polygon points="235,80 275,80 275,120" fill="#16a34a" opacity="0.3"/>
  <text x="235" y="190" text-anchor="middle" font-size="9" fill="#16a34a">rotado 90°</text>
  <text x="90" y="175" text-anchor="middle" font-size="9" fill="#2563eb">original</text>
  <text x="50" y="45" font-size="10" fill="#8b5cf6" font-weight="bold">Papel plegado:</text>
  <rect x="50" y="50" width="40" height="25" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" stroke-width="1.5" rx="2"/>
  <line x1="70" y1="50" x2="70" y2="75" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,2"/>
  <rect x="70" y="50" width="40" height="25" fill="#f59e0b" opacity="0.5" stroke="#f59e0b" stroke-width="1.5" rx="2"/>
  <circle cx="58" cy="62" r="3" fill="#dc2626"/>
  <circle cx="82" cy="62" r="3" fill="#dc2626" opacity="0.5"/>
  <text x="90" y="68" font-size="8" fill="#f59e0b">pliegue</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Si rotates un cubo 90° hacia la derecha, ¿qué cara queda arriba si originalmente estaba la cara frontal?",
        options: [
          "La cara de abajo",
          "La cara izquierda",
          "La cara derecha",
          "La cara de atrás"
        ],
        correctIndex: 1,
        explanation: "Al rotar 90° a la derecha, la cara frontal sube y la cara izquierda queda arriba.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Pliegas un papel cuadrado por la mitad y perforas un círculo cerca del pliegue. ¿Cuántos agujeros quedan al desplegar?",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        explanation: "Un pliegue produce 2 capas. Una perforación atraviesa ambas capas, resultando en 2 agujeros simétricos.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Un cubo tiene una marca en la cara superior. Se rota 90° sobre el eje vertical y luego 90° hacia adelante. ¿En qué cara queda la marca?",
        options: [
          "Cara frontal",
          "Cara inferior",
          "Cara derecha",
          "Cara izquierda"
        ],
        correctIndex: 0,
        explanation: "1ª rotación (eje vertical, 90°): la marca pasa de arriba a la cara derecha. 2ª rotación (eje horizontal, hacia adelante): la cara derecha pasa a quedar frontal.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "problemas-compuestos-rm",
    tip: "Descompón el problema en partes: identifica qué conoces, qué buscas y qué operación necesitas para cada paso.",
    theory: [
      {
        level: "basico",
        title: "Estructura de un problema compuesto",
        lines: [
          "Un problema compuesto combina dos o más áreas: aritmética, lógica, conteo.",
          "Lee el enunciado completo antes de intentar resolver.",
          "Subraya los datos conocidos y escribe qué se pide.",
          "Identifica las operaciones necesarias en orden.",
          "Resuelve paso a paso: un error al inicio afecta todo lo demás.",
          "Verifica que la respuesta tenga sentido en el contexto del problema."
        ]
      },
      {
        level: "intermedio",
        title: "Problemas combinados con porcentajes",
        lines: [
          "Un descuento del 20% equivale a pagar el 80% del precio.",
          "Si hay dos descuentos sucesivos del 10%, no es 20% total sino 19%.",
          "Para calcular el precio final: precio × (1−d₁) × (1−d₂) × ...",
          "Un aumento del 50% seguido de un descuento del 50% NO deja el precio igual.",
          "50% de aumento: ×1.50; 50% de descuento: ×0.50. Resultado: ×0.75 (baja 25%).",
          "Siempre calcula el porcentaje sobre el valor vigente, no sobre el original."
        ]
      },
      {
        level: "avanzado",
        title: "Combinatoria y lógica en problemas",
        lines: [
          "Permutaciones: orden importa. P(n,r) = n! / (n−r)!",
          "Combinaciones: orden no importa. C(n,r) = n! / (r!(n−r)!)",
          "Principio de la multiplicación: si hay m formas de A y n de B, hay m×n combinaciones.",
          "Principio de la suma: si son opciones excluyentes, se suman las cantidades.",
          "En problemas de probabilidad compuesta, multiplica las probabilidades independientes.",
          "Para construir un problema inverso, trabaja desde la respuesta hacia los datos."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Problemas Compuestos</text>
  <rect x="15" y="35" width="80" height="35" fill="#2563eb" rx="6" opacity="0.9"/>
  <text x="55" y="57" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Leer</text>
  <line x1="95" y1="52" x2="115" y2="52" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>
  <rect x="115" y="35" width="80" height="35" fill="#16a34a" rx="6" opacity="0.9"/>
  <text x="155" y="57" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Identificar</text>
  <line x1="195" y1="52" x2="215" y2="52" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>
  <rect x="215" y="35" width="80" height="35" fill="#dc2626" rx="6" opacity="0.9"/>
  <text x="255" y="57" text-anchor="middle" font-size="9" fill="white" font-weight="bold">Resolver</text>
  <rect x="50" y="85" width="200" height="50" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" stroke-width="1.5" rx="5"/>
  <text x="150" y="105" text-anchor="middle" font-size="10" fill="#f59e0b" font-weight="bold">Ejemplo: Precio $200</text>
  <text x="150" y="122" text-anchor="middle" font-size="9" fill="#475569">Descuento 10% → aumento 20% → ¿Precio final?</text>
  <line x1="80" y1="150" x2="220" y2="150" stroke="#8b5cf6" stroke-width="2"/>
  <circle cx="100" cy="150" r="8" fill="#8b5cf6"/>
  <text x="100" y="154" text-anchor="middle" font-size="8" fill="white">$200</text>
  <circle cx="150" cy="150" r="8" fill="#dc2626"/>
  <text x="150" y="154" text-anchor="middle" font-size="7" fill="white">×0.9</text>
  <circle cx="200" cy="150" r="8" fill="#16a34a"/>
  <text x="200" y="154" text-anchor="middle" font-size="7" fill="white">×1.2</text>
  <text x="200" y="175" font-size="9" fill="#8b5cf6">$200×0.9×1.2 = $216</text>
  <line x1="100" y1="158" x2="142" y2="158" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="158" y1="158" x2="192" y2="158" stroke="#94a3b8" stroke-width="1.5"/>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Un producto cuesta S/ 150. Tiene un descuento del 20% y luego otro del 10%. ¿Cuánto paga?",
        options: ["S/ 108", "S/ 110", "S/ 117", "S/ 120"],
        correctIndex: 0,
        explanation: "S/ 150 × 0.80 × 0.90 = S/ 150 × 0.72 = S/ 108.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "De 5 hombres y 4 mujeres, se debe elegir un comité de 3 personas. Si el comité debe tener al menos 1 hombre y 1 mujer, ¿cuántos comités son posibles?",
        options: ["74", "80", "84", "120"],
        correctIndex: 0,
        explanation: "Total C(9,3)=84. Comités solo hombres C(5,3)=10. Solo mujeres C(4,3)=4. Con al menos 1 de cada: 84−10−4 = 74.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Un vendedor gana 5% de comisión sobre ventas menores a S/ 1000 y 8% sobre lo que exceda S/ 1000. Si vendió S/ 3500, ¿cuánto ganó de comisión?",
        options: ["S/ 250", "S/ 200", "S/ 275", "S/ 225"],
        correctIndex: 0,
        explanation: "Sobre S/ 1000: 5%×1000 = S/ 50. Excedente: S/ 2500×8% = S/ 200. Total: S/ 50 + S/ 200 = S/ 250.",
        difficulty: "avanzado"
      }
    ]
  }
];