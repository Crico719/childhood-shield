import type { CourseModule } from "C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content";

export const geoBatch2: CourseModule[] = [
  {
    slug: "transformaciones-isometricas",
    tip: "En isometrías el área y las distancias se conservan. Verifica que la orientación se invierta en reflexiones pero no en traslaciones ni rotaciones.",
    theory: [
      { level: "basico", title: "Traslación", lines: [
        "Una traslación mueve todos los puntos de una figura la misma distancia en la misma dirección.",
        "Se define por un vector v = (a, b) que indica el desplazamiento horizontal y vertical.",
        "Si un punto tiene coordenadas (x, y), su imagen trasladada será (x + a, y + b).",
        "La traslación conserva distancias, ángulos y áreas de la figura original.",
        "No cambia la orientación de la figura: lo que estaba a la izquierda sigue a la izquierda.",
        "Ejemplo: trasladar (3, 2) con vector (-1, 4) da como resultado (2, 6)."
      ]},
      { level: "intermedio", title: "Rotación", lines: [
        "Una rotación gira cada punto alrededor de un punto fijo llamado centro de rotación.",
        "El ángulo de rotación indica cuántos grados se gira; puede ser horario o antihorario.",
        "Fórmula para rotar (x, y) un ángulo θ: x' = x·cos θ - y·sin θ, y' = x·sin θ + y·cos θ.",
        "Una rotación de 90° antihorario transforma (x, y) en (-y, x).",
        "Una rotación de 180° transforma (x, y) en (-x, -y).",
        "La rotación conserva distancias, ángulos, áreas y el tamaño de la figura."
      ]},
      { level: "avanzado", title: "Reflexión", lines: [
        "Una reflexión invierte la orientación de la figura respecto a una línea llamada eje de simetría.",
        "Reflexión respecto al eje Y: (x, y) se transforma en (-x, y).",
        "Reflexión respecto al eje X: (x, y) se transforma en (x, -y).",
        "Reflexión respecto a la recta y = x: (x, y) se transforma en (y, x).",
        "A diferencia de traslación y rotación, la reflexión cambia la orientación de la figura.",
        "La composición de dos reflexiones paralelas da una traslación; de ejes concurrentes, una rotación."
      ]}
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Isometrías</text>
        <polygon points="40,130 70,80 100,130" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="50" y="155" font-family="Arial" font-size="10" fill="#2563eb">Original</text>
        <polygon points="150,130 180,80 210,130" fill="none" stroke="#16a34a" stroke-width="2"/>
        <text x="155" y="155" font-family="Arial" font-size="10" fill="#16a34a">Traslación</text>
        <polygon points="250,140 270,90 280,135" fill="none" stroke="#dc2626" stroke-width="2"/>
        <text x="238" y="170" font-family="Arial" font-size="10" fill="#dc2626">Rotación</text>
        <line x1="100" y1="105" x2="140" y2="105" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr1)"/>
        <defs><marker id="arr1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/></marker></defs>
      </svg>`
    ],
    exercises: [
      { id: 1, question: "¿Cuál es la imagen del punto (4, -3) tras una traslación con vector (-2, 5)?", options: ["(6, 2)", "(2, 2)", "(-2, 2)", "(2, 8)"], correctIndex: 1, explanation: "Se suman: (4 + (-2), -3 + 5) = (2, 2).", difficulty: "basico" },
      { id: 2, question: "¿Cuál es la imagen de (3, 1) al rotarlo 90° antihorario respecto al origen?", options: ["(-1, 3)", "(1, -3)", "(-3, 1)", "(3, -1)"], correctIndex: 0, explanation: "Rotación 90° antihorario: (x, y) → (-y, x), entonces (3, 1) → (-1, 3).", difficulty: "intermedio" },
      { id: 3, question: "Reflexión respecto al eje Y y luego traslación con vector (3, -2) al punto (5, 4). ¿Resultado final?", options: ["(-2, 2)", "(8, 2)", "(2, 2)", "(-8, 2)"], correctIndex: 0, explanation: "Reflexión Y: (5,4)→(-5,4). Traslación: (-5+3, 4-2) = (-2, 2).", difficulty: "avanzado" }
    ]
  },
  {
    slug: "simetria-ejes-y-puntos",
    tip: "Una figura tiene simetría axial si al doblarla por el eje las partes coinciden. Un cuadrado tiene 4 ejes, un rectángulo solo 2.",
    theory: [
      { level: "basico", title: "Simetría Axial", lines: [
        "Una figura tiene simetría axial si existe una línea que la divide en dos partes congruentes y reflejadas.",
        "Al doblar la figura por el eje, las dos mitades coinciden exactamente.",
        "Un triángulo equilátero tiene 3 ejes de simetría, cada uno desde un vértice hasta el punto medio del lado opuesto.",
        "Un cuadrado tiene 4 ejes: 2 diagonales y 2 que unen puntos medios de lados opuestos.",
        "Un rectángulo tiene 2 ejes de simetría: las rectas que unen los puntos medios de lados opuestos.",
        "Un círculo tiene infinitos ejes de simetría: cualquier diámetro es un eje."
      ]},
      { level: "intermedio", title: "Simetría Central", lines: [
        "Una figura tiene simetría central si existe un punto tal que cada punto tiene un simétrico opuesto a la misma distancia.",
        "La simetría central equivale a una rotación de 180° respecto al centro de simetría.",
        "Un paralelogramo tiene simetría central en el punto de intersección de sus diagonales.",
        "Un cuadrado, un rectángulo y un rombo tienen simetría central.",
        "Un triángulo NO tiene simetría central, pues no existe punto que sea centro de rotación de 180°.",
        "Si una figura tiene simetría central, cualquier recta por el centro la divide en dos partes de igual área."
      ]},
      { level: "avanzado", title: "Relación entre Simetrías", lines: [
        "La composición de dos reflexiones en ejes paralelos equivale a una traslación perpendicular de doble módulo.",
        "La composición de dos reflexiones en ejes concurrentes equivale a una rotación de ángulo doble al ángulo entre ellos.",
        "Toda isometría del plano es composición de a lo sumo 3 reflexiones.",
        "Si una figura tiene n ejes concurrentes, tiene simetría central cuando n es par.",
        "Las simetrías de una figura forman un grupo con la operación de composición.",
        "En el examen, identificar el grupo de simetría permite deducir todas las transformaciones de la figura."
      ]}
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Simetría Axial y Central</text>
        <polygon points="150,45 210,140 90,140" fill="none" stroke="#2563eb" stroke-width="2"/>
        <line x1="150" y1="45" x2="150" y2="140" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="90" y1="140" x2="195" y2="65" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="210" y1="140" x2="105" y2="65" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="115" y="185" font-family="Arial" font-size="10" fill="#2563eb">3 ejes de simetría</text>
        <rect x="235" y="50" width="50" height="90" fill="none" stroke="#16a34a" stroke-width="2"/>
        <circle cx="260" cy="95" r="4" fill="#8b5cf6"/>
        <line x1="260" y1="45" x2="260" y2="148" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="228" y1="95" x2="292" y2="95" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="228" y="175" font-family="Arial" font-size="9" fill="#16a34a">Simetría central</text>
      </svg>`
    ],
    exercises: [
      { id: 4, question: "¿Cuántos ejes de simetría tiene un rombo que NO es cuadrado?", options: ["0", "1", "2", "4"], correctIndex: 2, explanation: "Un rombo no cuadrado tiene exactamente 2 ejes de simetría: sus diagonales.", difficulty: "basico" },
      { id: 5, question: "¿Cuál de las siguientes figuras NO tiene simetría central?", options: ["Paralelogramo", "Rectángulo", "Rombo", "Triángulo equilátero"], correctIndex: 3, explanation: "El triángulo equilátero tiene simetría axial pero NO simetría central.", difficulty: "intermedio" },
      { id: 6, question: "Reflexión respecto al eje X y luego respecto al eje Y equivale a:", options: ["Una traslación", "Una rotación de 90°", "Una rotación de 180°", "Una reflexión"], correctIndex: 2, explanation: "Reflexión X: (x,y)→(x,-y). Luego Y: (x,-y)→(-x,-y). Equivale a rotación de 180°.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "homotecia",
    tip: "En una homotecia las distancias se multiplican por |k| y las áreas por k². Si k es negativo la figura se invierte respecto al centro.",
    theory: [
      { level: "basico", title: "Definición de Homotecia", lines: [
        "Una homotecia amplía o reduce una figura respecto a un punto fijo llamado centro de homotecia.",
        "Se define por un centro O y un factor de homotecia k distinto de cero.",
        "Cada punto P se transforma en P' tal que OP' = k · OP.",
        "Si k > 1, la imagen es más grande que el original (ampliación).",
        "Si 0 < k < 1, la imagen es más pequeña que el original (reducción).",
        "Si k < 0, la imagen se ubica en el lado opuesto del centro respecto al original."
      ]},
      { level: "intermedio", title: "Propiedades de la Homotecia", lines: [
        "La homotecia conserva las líneas paralelas: si dos segmentos son paralelos, sus imágenes también.",
        "Los ángulos se conservan: la homotecia preserva la orientación de la figura.",
        "Las distancias se multiplican por |k|: si AB = d, entonces A'B' = |k| · d.",
        "Las áreas se multiplican por k²: si el área es A, la imagen tiene área k² · A.",
        "Un cuadrado de lado 3 con homotecia de factor 2 tiene lado 6 y área 36.",
        "La homotecia transforma triángulos en triángulos semejantes con razón de semejanza |k|."
      ]},
      { level: "avanzado", title: "Homotecia y Semejanza", lines: [
        "Toda homotecia es una semejanza: la imagen y el original son semejantes con razón |k|.",
        "La composición de dos homotecias con factores k₁ y k₂ es otra homotecia de factor k₁·k₂.",
        "Si los centros coinciden la composición es trivial; si no, el nuevo centro se determina por intersección.",
        "Toda semejanza directa puede expresarse como composición de una homotecia y una isometría directa.",
        "En coordenadas, homotecia de centro O(x₀, y₀) y factor k: P(x,y) → P'(x₀ + k(x-x₀), y₀ + k(y-y₀)).",
        "La homotecia de factor -1 equivale a una simetría central respecto a ese punto."
      ]}
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Homotecia con k = 2</text>
        <circle cx="35" cy="150" r="5" fill="#8b5cf6"/>
        <text x="18" y="175" font-family="Arial" font-size="10" fill="#8b5cf6">Centro O</text>
        <polygon points="100,120 125,85 150,120 125,140" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="95" y="160" font-family="Arial" font-size="10" fill="#2563eb">Original</text>
        <polygon points="165,100 215,30 265,100 215,130" fill="none" stroke="#dc2626" stroke-width="2"/>
        <text x="195" y="155" font-family="Arial" font-size="10" fill="#dc2626">Imagen (k=2)</text>
        <line x1="35" y1="150" x2="100" y2="120" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="35" y1="150" x2="165" y2="100" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="35" y1="150" x2="125" y2="85" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="35" y1="150" x2="215" y2="30" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>
      </svg>`
    ],
    exercises: [
      { id: 7, question: "¿Cuál es la imagen de (2, 3) bajo homotecia de centro en el origen y factor k = 3?", options: ["(6, 9)", "(5, 6)", "(8, 12)", "(-2, -3)"], correctIndex: 0, explanation: "P'(kx, ky) = (3·2, 3·3) = (6, 9).", difficulty: "basico" },
      { id: 8, question: "Un triángulo tiene área 20 cm². ¿Cuál será el área de su imagen bajo homotecia de factor k = 3?", options: ["60 cm²", "80 cm²", "180 cm²", "40 cm²"], correctIndex: 2, explanation: "El área se multiplica por k² = 9, entonces 20 × 9 = 180 cm².", difficulty: "intermedio" },
      { id: 9, question: "Homotecia de centro O y factor k = -2 transforma un segmento de longitud 5. ¿Longitud y posición de la imagen?", options: ["10, mismo lado de O", "10, lado opuesto de O", "2.5, mismo lado de O", "2.5, lado opuesto de O"], correctIndex: 1, explanation: "Longitud: |k|·5 = 10. k negativo implica lado opuesto de O.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "coordenadas-cartesianas",
    tip: "Para calcular la distancia usa d = √((x₂-x₁)² + (y₂-y₁)²). El punto medio se obtiene promediando cada coordenada por separado.",
    theory: [
      { level: "basico", title: "El Plano Cartesiano", lines: [
        "El plano cartesiano se forma por dos rectas perpendiculares: el eje X (horizontal) y el eje Y (vertical).",
        "El punto donde se cruzan los ejes se llama origen O y tiene coordenadas (0, 0).",
        "Cada punto del plano se identifica con un par ordenado (x, y).",
        "En el primer cuadrante ambos valores son positivos; en el segundo x es negativo y y positivo.",
        "En el tercer cuadrante ambos son negativos; en el cuarto x positivo e y negativo.",
        "Los ejes dividen al plano en 4 cuadrantes numerados en sentido antihorario."
      ]},
      { level: "intermedio", title: "Distancia entre Dos Puntos", lines: [
        "La distancia entre A(x₁, y₁) y B(x₂, y₂) se calcula con la fórmula de Pitágoras.",
        "Fórmula: d = √[(x₂ - x₁)² + (y₂ - y₁)²].",
        "Pasos: restar coordenadas iguales, elevar al cuadrado, sumar y sacar raíz cuadrada.",
        "La distancia entre (1, 2) y (4, 6) es √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5.",
        "La distancia es siempre positiva o cero (solo cero si los puntos coinciden).",
        "Este método funciona en cualquier cuadrante, pues las diferencias se elevan al cuadrado."
      ]},
      { level: "avanzado", title: "Punto Medio y Aplicaciones", lines: [
        "El punto medio M entre A(x₁, y₁) y B(x₂, y₂) es M((x₁+x₂)/2, (y₁+y₂)/2).",
        "El punto medio equidista de ambos extremos y divide al segmento en dos partes iguales.",
        "Si conoces un extremo y el punto medio, hallas el otro: x₂ = 2x_m - x₁.",
        "La fórmula del punto medio se usa para verificar el centro de una circunferencia circunscrita.",
        "El baricentro de un triángulo con vértices A, B, C es ((x_A+x_B+x_C)/3, (y_A+y_B+y_C)/3).",
        "En el examen, el punto medio aparece en problemas de paralelogramos y simetrías."
      ]}
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Plano Cartesiano: Distancia y Punto Medio</text>
        <line x1="30" y1="100" x2="280" y2="100" stroke="#999" stroke-width="1"/>
        <line x1="155" y1="20" x2="155" y2="190" stroke="#999" stroke-width="1"/>
        <text x="275" y="95" font-family="Arial" font-size="10" fill="#999">X</text>
        <text x="160" y="30" font-family="Arial" font-size="10" fill="#999">Y</text>
        <circle cx="75" cy="130" r="4" fill="#2563eb"/>
        <text x="55" y="125" font-family="Arial" font-size="10" fill="#2563eb">A(1,2)</text>
        <circle cx="235" cy="50" r="4" fill="#dc2626"/>
        <text x="240" y="45" font-family="Arial" font-size="10" fill="#dc2626">B(5,4)</text>
        <line x1="75" y1="130" x2="235" y2="50" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="5,3"/>
        <circle cx="155" cy="90" r="4" fill="#8b5cf6"/>
        <text x="160" y="85" font-family="Arial" font-size="10" fill="#8b5cf6">M(3,3)</text>
      </svg>`
    ],
    exercises: [
      { id: 10, question: "¿Cuáles son las coordenadas del punto en el tercer cuadrante con abscisa -4 y ordenada -7?", options: ["(4, 7)", "(-4, 7)", "(-4, -7)", "(4, -7)"], correctIndex: 2, explanation: "En el tercer cuadrante ambas coordenadas son negativas: (-4, -7).", difficulty: "basico" },
      { id: 11, question: "¿Cuál es la distancia entre los puntos P(2, -1) y Q(-1, 3)?", options: ["3", "5", "7", "25"], correctIndex: 1, explanation: "d = √[(-1-2)² + (3-(-1))²] = √[9 + 16] = √25 = 5.", difficulty: "intermedio" },
      { id: 12, question: "Si el punto medio es M(3, 5) y un extremo es A(1, 2), ¿cuál es el otro extremo B?", options: ["(5, 8)", "(6, 10)", "(4, 3)", "(2, 3)"], correctIndex: 0, explanation: "x_B = 2(3) - 1 = 5; y_B = 2(5) - 2 = 8. Entonces B = (5, 8).", difficulty: "avanzado" }
    ]
  },
  {
    slug: "area-coordenadas",
    tip: "El método Shoelace calcula el área de un polígono con vértices en coordenadas: multiplica diagonalmente, suma los productos y aplica valor absoluto sobre 2.",
    theory: [
      { level: "basico", title: "Método de las Coordenadas", lines: [
        "El método de las coordenadas permite calcular el área de un polígono cuyos vértices se conocen.",
        "Se listan los vértices en orden (horario o antihorario) repitiendo el primero al final.",
        "Se multiplica cada abscisa por la ordenada del vértice siguiente, de izquierda a derecha.",
        "Se multiplica cada ordenada por la abscisa del vértice siguiente, de izquierda a derecha.",
        "Se resta la segunda suma de la primera, se toma el valor absoluto y se divide entre 2.",
        "Fórmula: A = |Σ(xᵢ·yᵢ₊₁ - yᵢ·xᵢ₊₁)| / 2."
      ]},
      { level: "intermedio", title: "Aplicación Paso a Paso", lines: [
        "Para un triángulo con vértices (1,1), (4,1) y (1,5): listar (1,1), (4,1), (1,5), (1,1).",
        "Productos descendentes: 1·1 + 4·5 + 1·1 = 1 + 20 + 1 = 22.",
        "Productos ascendentes: 1·4 + 1·1 + 5·1 = 4 + 1 + 5 = 10.",
        "Área = |22 - 10| / 2 = 12 / 2 = 6 unidades².",
        "Verificación con base × altura / 2: base = 3, altura = 4, área = 12/2 = 6. ¡Correcto!",
        "El método funciona para cualquier polígono convexo o cóncavo, siempre que los vértices estén en orden."
      ]},
      { level: "avanzado", title: "Propiedades y Usos", lines: [
        "El método Shoelace también puede expresarse como determinante de una matriz de coordenadas.",
        "Si el resultado es negativo, indica que los vértices están en sentido horario.",
        "Para un triángulo con vértices A(x₁,y₁), B(x₂,y₂), C(x₃,y₃): A = |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)| / 2.",
        "El área de un paralelogramo formado por vectores u y v es el valor absoluto del determinante de la matriz [u|v].",
        "El método se extiende a polígonos en 3D proyectando o usando el producto cruz.",
        "En el examen, el método Shoelace es más rápido que descomponer el polígono en triángulos."
      ]}
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Método Shoelace: Área de Polígono</text>
        <line x1="30" y1="170" x2="280" y2="170" stroke="#999" stroke-width="0.5"/>
        <line x1="30" y1="10" x2="30" y2="170" stroke="#999" stroke-width="0.5"/>
        <polygon points="80,130 160,50 240,130 200,160 120,160" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="80" cy="130" r="3" fill="#dc2626"/>
        <text x="60" y="145" font-family="Arial" font-size="9" fill="#dc2626">(2,2)</text>
        <circle cx="160" cy="50" r="3" fill="#dc2626"/>
        <text x="140" y="45" font-family="Arial" font-size="9" fill="#dc2626">(5,6)</text>
        <circle cx="240" cy="130" r="3" fill="#dc2626"/>
        <text x="243" y="128" font-family="Arial" font-size="9" fill="#dc2626">(8,2)</text>
        <circle cx="200" cy="160" r="3" fill="#dc2626"/>
        <text x="203" y="158" font-family="Arial" font-size="9" fill="#dc2626">(7,1)</text>
        <circle cx="120" cy="160" r="3" fill="#dc2626"/>
        <text x="85" y="168" font-family="Arial" font-size="9" fill="#dc2626">(3,1)</text>
        <text x="120" y="110" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">Shoelace</text>
      </svg>`
    ],
    exercises: [
      { id: 13, question: "¿Cuál es el área de un triángulo con vértices A(0,0), B(4,0) y C(0,3)?", options: ["6", "12", "7", "3"], correctIndex: 0, explanation: "Shoelace: |0·0 + 4·3 + 0·0 - (0·4 + 0·0 + 3·0)| / 2 = |12| / 2 = 6.", difficulty: "basico" },
      { id: 14, question: "Un cuadrado tiene vértices (1,1), (4,1), (4,4) y (1,4). ¿Cuál es su área por el método de coordenadas?", options: ["9", "12", "16", "6"], correctIndex: 0, explanation: "Shoelace: |1·1+4·4+4·4+1·1 - (1·4+1·4+4·1+4·1)| / 2 = |34 - 16| / 2 = 9.", difficulty: "intermedio" },
      { id: 15, question: "¿Cuál es el área del triángulo con vértices A(2,1), B(5,1) y C(3,6)?", options: ["7.5", "15", "10", "5"], correctIndex: 0, explanation: "|2·1+5·6+3·1 - (1·5+1·3+6·2)| / 2 = |35 - 20| / 2 = 7.5.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "recta-en-coordenadas",
    tip: "Para hallar la ecuación de una recta por dos puntos primero calcula la pendiente m = (y₂-y₁)/(x₂-x₁) y luego usa punto-pendiente.",
    theory: [
      { level: "basico", title: "Formas de la Ecuación de una Recta", lines: [
        "La ecuación reducida de una recta es y = mx + b, donde m es la pendiente y b la intersección con el eje Y.",
        "La ecuación general es Ax + By + C = 0, donde A, B y C son constantes y B ≠ 0.",
        "La pendiente m indica la inclinación de la recta: m = (y₂ - y₁) / (x₂ - x₁).",
        "Si m > 0 la recta sube de izquierda a derecha; si m < 0 desciende; si m = 0 es horizontal.",
        "Si B = 0 en la ecuación general, la recta es vertical (x = constante).",
        "La forma normal es Ax + By = D, donde A² + B² = 1 y D es la distancia al origen."
      ]},
      { level: "intermedio", title: "Ecuación por Dos Puntos", lines: [
        "Para hallar la recta por A(x₁, y₁) y B(x₂, y₂), primero calcula la pendiente m = (y₂ - y₁) / (x₂ - x₁).",
        "Luego usa la ecuación punto-pendiente: y - y₁ = m(x - x₁).",
        "Desarrollando: y = mx + (y₁ - mx₁), identificando b = y₁ - mx₁.",
        "Ejemplo: por (1, 2) y (3, 6): m = (6-2)/(3-1) = 4/2 = 2. Recta: y = 2x.",
        "Si los puntos tienen la misma abscisa (x₁ = x₂), la recta es vertical: x = x₁.",
        "Si los puntos tienen la misma ordenada (y₁ = y₂), la recta es horizontal: y = y₁."
      ]},
      { level: "avanzado", title: "Forma Normal y Aplicaciones", lines: [
        "La forma normal n · x = p usa el vector unitario normal n y la distancia p al origen.",
        "Para pasar de Ax + By + C = 0 a forma normal, divide todo por √(A² + B²).",
        "El ángulo que forma la recta con el eje X es θ = arctan(m).",
        "Dos rectas son paraleles si tienen la misma pendiente: m₁ = m₂.",
        "Dos rectas son perpendiculares si el producto de sus pendientes es -1: m₁ · m₂ = -1.",
        "El punto de intersección de y = m₁x + b₁ y y = m₂x + b₂ se resuelve igualando ambas expresiones."
      ]}
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Ecuaciones de Recta</text>
        <line x1="30" y1="100" x2="280" y2="100" stroke="#999" stroke-width="0.8"/>
        <line x1="155" y1="15" x2="155" y2="190" stroke="#999" stroke-width="0.8"/>
        <text x="275" y="95" font-family="Arial" font-size="9" fill="#999">x</text>
        <text x="160" y="25" font-family="Arial" font-size="9" fill="#999">y</text>
        <line x1="20" y1="140" x2="290" y2="60" stroke="#2563eb" stroke-width="2"/>
        <text x="220" y="52" font-family="Arial" font-size="10" fill="#2563eb">y = mx + b</text>
        <line x1="60" y1="185" x2="60" y2="15" stroke="#dc2626" stroke-width="2"/>
        <text x="65" y="45" font-family="Arial" font-size="10" fill="#dc2626">x = c</text>
        <circle cx="155" cy="100" r="3" fill="#8b5cf6"/>
        <text x="130" y="95" font-family="Arial" font-size="9" fill="#8b5cf6">Origen</text>
        <circle cx="240" cy="80" r="3" fill="#16a34a"/>
        <text x="245" y="78" font-family="Arial" font-size="9" fill="#16a34a">P(x,y)</text>
      </svg>`
    ],
    exercises: [
      { id: 16, question: "¿Cuál es la ecuación de la recta que pasa por (0, 3) y tiene pendiente 2?", options: ["y = 2x + 3", "y = 3x + 2", "y = 2x - 3", "y = x + 3"], correctIndex: 0, explanation: "Con m = 2 y b = 3 (intersección con eje Y), la ecuación es y = 2x + 3.", difficulty: "basico" },
      { id: 17, question: "¿Cuál es la pendiente de la recta que pasa por (2, 5) y (6, 13)?", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "m = (13 - 5) / (6 - 2) = 8 / 4 = 2.", difficulty: "intermedio" },
      { id: 18, question: "¿Qué relación tienen las rectas y = 3x + 1 y y = -x/3 + 5?", options: ["Son paralelas", "Son perpendiculares", "Se cortan en 45°", "Son la misma recta"], correctIndex: 1, explanation: "m₁ · m₂ = 3 · (-1/3) = -1, por lo tanto son perpendiculares.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "circunferencia-coordenadas",
    tip: "La ecuación canónica (x-a)² + (y-b)² = r² identifica directamente centro y radio. Para hallar la ecuación general completa el cuadrado de x e y.",
    theory: [
      { level: "basico", title: "Ecuación Canónica", lines: [
        "La ecuación canónica de una circunferencia es (x - a)² + (y - b)² = r².",
        "El punto C(a, b) es el centro de la circunferencia.",
        "El valor r es el radio de la circunferencia (r > 0).",
        "Un punto P(x, y) pertenece a la circunferencia si su distancia al centro es igual al radio.",
        "Si el centro está en el origen (0,0), la ecuación se simplifica a x² + y² = r².",
        "Para verificar si un punto está en la circunferencia, sustitúyelo en la ecuación y verifica que se cumple."
      ]},
      { level: "intermedio", title: "Ecuación General", lines: [
        "La ecuación general de la circunferencia es x² + y² + Dx + Ey + F = 0.",
        "Para pasar de general a canónica se completa el cuadrado de las términos en x e y.",
        "El centro es C(-D/2, -E/2) y el radio es r = √(D²/4 + E²/4 - F).",
        "Ejemplo: x² + y² - 4x + 6y - 3 = 0 → (x-2)² + (y+3)² = 16, centro (2,-3), radio 4.",
        "Para que exista la circunferencia se requiere D²/4 + E²/4 - F > 0.",
        "Si el resultado es cero, la circunferencia se reduce a un punto; si es negativo, no existe."
      ]},
      { level: "avanzado", title: "Propiedades y Tercio de Euler", lines: [
        "La ecuación de una circunferencia que pasa por tres puntos no colineales se halla con un sistema de 3 ecuaciones.",
        "El teorema de Thales dice que si AB es diámetro, cualquier punto C del arco forma ángulo recto ACB = 90°.",
        "La ecuación paramétrica es x = a + r·cos t, y = b + r·sin t, con t ∈ [0, 360°).",
        "La potencia de un punto P respecto a una circunferencia es d² - r², donde d es la distancia de P al centro.",
        "Si P está dentro, la potencia es negativa; si está fuera, es positiva; si está en la circunferencia, es cero.",
        "Dos circunferencias son tangentes externamente si la distancia entre centros es r₁ + r₂."
      ]}
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Circunferencia: Centro y Radio</text>
        <line x1="30" y1="100" x2="280" y2="100" stroke="#999" stroke-width="0.5"/>
        <line x1="145" y1="10" x2="145" y2="195" stroke="#999" stroke-width="0.5"/>
        <circle cx="145" cy="100" r="65" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="145" cy="100" r="3" fill="#dc2626"/>
        <text x="150" y="95" font-family="Arial" font-size="10" fill="#dc2626">C(a,b)</text>
        <line x1="145" y1="100" x2="210" y2="100" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="170" y="115" font-family="Arial" font-size="10" fill="#16a34a">r</text>
        <circle cx="210" cy="100" r="3" fill="#8b5cf6"/>
        <text x="215" y="115" font-family="Arial" font-size="9" fill="#8b5cf6">P(x,y)</text>
        <text x="60" y="185" font-family="Arial" font-size="10" fill="#2563eb">(x-a)² + (y-b)² = r²</text>
      </svg>`
    ],
    exercises: [
      { id: 19, question: "¿Cuál es el centro y radio de la circunferencia (x - 3)² + (y + 2)² = 16?", options: ["Centro (3, -2), radio 4", "Centro (-3, 2), radio 4", "Centro (3, -2), radio 16", "Centro (-3, 2), radio 16"], correctIndex: 0, explanation: "De (x-3)² + (y+2)² = 16, centro es (3, -2) y r = √16 = 4.", difficulty: "basico" },
      { id: 20, question: "¿Cuál es el centro de la circunferencia x² + y² - 6x + 4y - 12 = 0?", options: ["(3, -2)", "(-3, 2)", "(6, -4)", "(3, 2)"], correctIndex: 0, explanation: "Centro: (-D/2, -E/2) = (-(-6)/2, -(4)/2) = (3, -2).", difficulty: "intermedio" },
      { id: 21, question: "¿Cuál es el radio de la circunferencia x² + y² - 8x + 2y + 8 = 0?", options: ["3", "5", "9", "√17"], correctIndex: 0, explanation: "r = √(D²/4 + E²/4 - F) = √(64/4 + 4/4 - 8) = √(16 + 1 - 8) = √9 = 3.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "distancia-punto-recta",
    tip: "La distancia del punto (x₀,y₀) a Ax+By+C=0 es |Ax₀+By₀+C|/√(A²+B²). Si el numerador es cero, el punto está sobre la recta.",
    theory: [
      { level: "basico", title: "Distancia Punto-Reta", lines: [
        "La distancia de un punto a una recta es la longitud del segmento perpendicular desde el punto hasta la recta.",
        "Para la recta Ax + By + C = 0 y el punto P(x₀, y₀), la fórmula es: d = |Ax₀ + By₀ + C| / √(A² + B²).",
        "El valor absoluto garantiza que la distancia sea siempre positiva o cero.",
        "Si el resultado es cero, el punto está sobre la recta.",
        "El denominador √(A² + B²) normaliza la ecuación para cualquier forma de la recta.",
        "Ejemplo: distancia de (1, 2) a 3x + 4y - 10 = 0 es |3+8-10|/5 = 1/5 = 0.2."
      ]},
      { level: "intermedio", title: "Distancia entre Rectas Paralelas", lines: [
        "Dos rectas paralelas tienen la misma pendiente pero distinta intersección con el eje Y.",
        "Para hallar la distancia entre Ax + By + C₁ = 0 y Ax + By + C₂ = 0, usa: d = |C₁ - C₂| / √(A² + B²).",
        "Importante: ambas ecuaciones deben tener los mismos coeficientes A y B para aplicar esta fórmula.",
        "Si los coeficientes difieren en un factor, primero normaliza multiplicando para igualarlos.",
        "Ejemplo: distancia entre 2x + 3y + 1 = 0 y 2x + 3y - 5 = 0: d = |1-(-5)|/√(4+9) = 6/√13.",
        "Esta distancia es constante en todas las rectas paralelas."
      ]},
      { level: "avanzado", title: "Aplicaciones y Fórmulas Complementarias", lines: [
        "La distancia entre dos rectas que NO son paralelas es cero (se cortan en un punto).",
        "La distancia de un punto a una recta se usa para calcular la altura de un triángulo: h = 2A/base.",
        "El área de un triángulo puede calcularse como base × distancia del vértice opuesto a la recta de la base, todo entre 2.",
        "Para rectas en forma reducida y = m₁x + b₁ y y = m₂x + b₂ paralelas: d = |b₁ - b₂| / √(1 + m²).",
        "La distancia de un punto a una recta also se calcula con vectores: d = |(P - A) × v| / |v|.",
        "En el examen, convierte siempre la recta a forma general Ax + By + C = 0 antes de aplicar la fórmula."
      ]}
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Distancia Punto-Reta</text>
        <line x1="20" y1="150" x2="280" y2="110" stroke="#2563eb" stroke-width="2"/>
        <text x="230" y="105" font-family="Arial" font-size="10" fill="#2563eb">Ax + By + C = 0</text>
        <circle cx="120" cy="50" r="4" fill="#dc2626"/>
        <text x="125" y="48" font-family="Arial" font-size="10" fill="#dc2626">P(x₀,y₀)</text>
        <line x1="120" y1="50" x2="145" y2="135" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>
        <circle cx="145" cy="135" r="3" fill="#f59e0b"/>
        <text x="150" y="133" font-family="Arial" font-size="9" fill="#f59e0b">H</text>
        <path d="M 140,130 L 148,133 L 145,140" fill="none" stroke="#f59e0b" stroke-width="1"/>
        <text x="60" y="185" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">d = |Ax₀+By₀+C| / √(A²+B²)</text>
      </svg>`
    ],
    exercises: [
      { id: 22, question: "¿Cuál es la distancia del punto (1, 2) a la recta 3x + 4y - 12 = 0?", options: ["1/5", "1", "5", "7/5"], correctIndex: 0, explanation: "d = |3(1) + 4(2) - 12| / √(9+16) = |3+8-12| / 5 = |-1| / 5 = 1/5.", difficulty: "basico" },
      { id: 23, question: "¿Cuál es la distancia entre las rectas paralelas 2x + 3y + 1 = 0 y 2x + 3y - 8 = 0?", options: ["9/√13", "7/√13", "8/√13", "3"], correctIndex: 0, explanation: "d = |1 - (-8)| / √(4+9) = 9/√13.", difficulty: "intermedio" },
      { id: 24, question: "Un triángulo tiene base AB de longitud 10 y el vértice C está a distancia 6 de la recta que contiene AB. ¿Cuál es su área?", options: ["30", "60", "16", "24"], correctIndex: 0, explanation: "Área = base × altura / 2 = 10 × 6 / 2 = 30.", difficulty: "avanzado" }
    ]
  }
];
