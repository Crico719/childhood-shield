import type { CourseModule } from "C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content";

export const geoBatch1: CourseModule[] = [
  {
    slug: "pitagoras-y-aplicaciones",
    tip: "Verifica siempre si los datos forman una terna pitagórica conocida antes de calcular raíces; en la PUCP, las ternas (3,4,5), (5,12,13) y (8,15,17) aparecen con frecuencia.",
    theory: [
      {
        level: "basico",
        title: "Enunciado del Teorema de Pitágoras",
        lines: [
          "En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos: a² + b² = c².",
          "La hipotenusa es el lado más largo, opuesto al ángulo recto de 90°.",
          "Si conocemos dos lados, podemos hallar el tercero despejando la fórmula.",
          "Para hallar la hipotenusa: c = √(a² + b²), donde a y b son los catetos.",
          "Para hallar un cateto: a = √(c² - b²), donde c es la hipotenusa.",
          "Los triángulos con lados en proporción 3:4:5 son siempre rectángulos."
        ]
      },
      {
        level: "intermedio",
        title: "Ternas Pitagóricas y Aplicaciones",
        lines: [
          "La terna pitagórica más conocida es (3, 4, 5), verificando 3² + 4² = 5² = 25.",
          "Otras ternas pitagóricas son (5, 12, 13), (8, 15, 17) y (7, 24, 25).",
          "Si multiplicamos cada elemento de una terna por k, obtenemos otra terna válida.",
          "En un rectángulo, la diagonal forma dos triángulos rectángulos congruentes entre sí.",
          "La altura relativa a la hipotenusa se calcula con: h = (a × b) / c.",
          "Los catetos son medios proporcionales entre la hipotenusa y sus proyecciones."
        ]
      },
      {
        level: "avanzado",
        title: "Pitágoras y la Ley de Cosenos",
        lines: [
          "El teorema de Pitágoras es caso particular de la ley de cosenos para ángulo de 90°.",
          "En un triángulo con ángulo obtuso, el cuadrado del lado mayor supera la suma de los otros dos.",
          "En un triángulo con ángulo agudo, el cuadrado de cualquier lado es menor que la suma de los otros dos.",
          "Para verificar si un triángulo es rectángulo, basta comprobar si cumple a² + b² = c².",
          "La distancia entre dos puntos se calcula aplicando Pitágoras en coordenadas.",
          "En un triángulo rectángulo, el radio de la circunferencia circunscrita es la mitad de la hipotenusa."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Teorema de Pitágoras</text>
        <polygon points="50,165 50,45 235,165" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <rect x="50" y="149" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <text x="28" y="110" font-family="Arial" font-size="14" fill="#dc2626" font-weight="bold">a</text>
        <text x="135" y="182" font-family="Arial" font-size="14" fill="#16a34a" font-weight="bold">b</text>
        <text x="155" y="95" font-family="Arial" font-size="14" fill="#8b5cf6" font-weight="bold">c</text>
        <text x="50" y="42" font-family="Arial" font-size="10" fill="#2563eb">A</text>
        <text x="38" y="178" font-family="Arial" font-size="10" fill="#2563eb">B</text>
        <text x="238" y="178" font-family="Arial" font-size="10" fill="#2563eb">C</text>
        <text x="85" y="195" font-family="Arial" font-size="12" fill="#f59e0b" font-weight="bold">a² + b² = c²</text>
      </svg>`
    ],
    exercises: [
      { id: 1, question: "¿Cuál es la hipotenusa de un triángulo rectángulo con catetos 6 y 8?", options: ["10", "12", "14", "16"], correctIndex: 0, explanation: "Aplicando Pitágoras: c = √(6² + 8²) = √(36 + 64) = √100 = 10.", difficulty: "basico" },
      { id: 2, question: "¿Es rectángulo un triángulo con lados 7, 24 y 25?", options: ["Sí, porque 7² + 24² = 25²", "No, porque 7 + 24 > 25", "Sí, porque todos los lados son primos", "No, porque 25² > 7² + 24²"], correctIndex: 0, explanation: "7² + 24² = 49 + 576 = 625 = 25². Se verifica la relación pitagórica, por lo que es rectángulo.", difficulty: "intermedio" },
      { id: 3, question: "¿Cuál es la distancia entre los puntos A(1, 2) y B(4, 6)?", options: ["5", "7", "12", "3√5"], correctIndex: 0, explanation: "d = √((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "teorema-de-tales",
    tip: "Cuando veas rectas paralelas cortando lados de un triángulo, aplica Tales de inmediato; si hay rectas paralelas iguales, los segmentos cortados en un lado son iguales a los del otro.",
    theory: [
      {
        level: "basico",
        title: "Enunciado del Teorema de Tales",
        lines: [
          "El Teorema de Tales establece que una recta paralela a un lado de un triángulo corta a los otros dos lados en proporción.",
          "Si D está en AB y E está en AC con DE paralela a BC, entonces AD/DB = AE/EC.",
          "También se cumple que AD/AB = AE/AC = DE/BC, manteniendo la proporción.",
          "La recta paralela genera un triángulo más pequeño semejante al triángulo original.",
          "Si la recta pasa por el punto medio de un lado, también pasa por el punto medio del otro.",
          "Este teorema es fundamental para resolver problemas de proporcionalidad geométrica."
        ]
      },
      {
        level: "intermedio",
        title: "Aplicaciones del Teorema de Tales",
        lines: [
          "Si DE ∥ BC, entonces el triángulo ADE es semejante al triángulo ABC.",
          "La razón de semejanza es k = AD/AB = AE/AC = DE/BC.",
          "El teorema también se aplica con varias rectas paralelas cortadas por dos transversales.",
          "Si hay varias rectas paralelas, los segmentos correspondientes en ambas transversales son proporcionales.",
          "En un trapecio, las rectas paralelas a las bases cortan los lados no paralelos en proporción.",
          "La intersección de las diagonales de un trapecio divide los lados en segmentos proporcionales."
        ]
      },
      {
        level: "avanzado",
        title: "Teorema Recíproco y Bisectrices",
        lines: [
          "El teorema recíproco también es verdadero: si AD/DB = AE/EC, entonces DE es paralela a BC.",
          "La bisectriz interna del ángulo A divide al lado opuesto BC en proporción a los lados.",
          "Se cumple que BD/DC = AB/AC, donde D es el punto donde la bisectriz corta a BC.",
          "La bisectriz externa del ángulo A cumple la misma relación pero con D fuera del segmento BC.",
          "Si se trazan paralelas a la base que dividen un lado en partes iguales, dividen el otro también.",
          "Las paralelas a la base de un trapecio que dividen la otra base en n partes iguales dividen las diagonales en partes proporcionales."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Teorema de Tales</text>
        <polygon points="150,35 35,170 265,170" fill="none" stroke="#2563eb" stroke-width="2"/>
        <line x1="78" y1="100" x2="222" y2="100" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,3"/>
        <text x="142" y="30" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">A</text>
        <text x="18" y="185" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">B</text>
        <text x="268" y="185" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">C</text>
        <text x="60" y="96" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">D</text>
        <text x="226" y="96" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">E</text>
        <text x="90" y="80" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">AD/DB = AE/EC</text>
        <text x="100" y="115" font-family="Arial" font-size="11" fill="#f59e0b" font-weight="bold">DE ∥ BC</text>
      </svg>`
    ],
    exercises: [
      { id: 4, question: "En un triángulo ABC, si D y E son puntos medios de AB y AC respectivamente, y BC = 10, ¿cuánto mide DE?", options: ["5", "10", "20", "2.5"], correctIndex: 0, explanation: "Por el teorema de Tales, D y E miden los lados en proporción 1:1, entonces DE = BC/2 = 5.", difficulty: "basico" },
      { id: 5, question: "Si DE ∥ BC, AD = 3, DB = 6 y AE = 2, ¿cuánto mide EC?", options: ["4", "3", "6", "9"], correctIndex: 0, explanation: "Por Tales: AD/DB = AE/EC → 3/6 = 2/EC → EC = 4.", difficulty: "intermedio" },
      { id: 6, question: "La bisectriz del ángulo A en un triángulo divide a BC en BD = 5 y DC = 8. Si AB = 10, ¿cuánto mide AC?", options: ["16", "12", "20", "13"], correctIndex: 0, explanation: "Por la bisectriz: BD/DC = AB/AC → 5/8 = 10/AC → AC = 16.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "semejanza-avanzada",
    tip: "Recuerda que en triángulos semejantes la razón de áreas es k² y la de perímetros es k; si te dan una relación de lados, eleva al cuadrado para áreas.",
    theory: [
      {
        level: "basico",
        title: "Definición de Semejanza",
        lines: [
          "Dos triángulos son semejantes si tienen los mismos ángulos y sus lados correspondientes son proporcionales.",
          "La notación ΔABC ~ ΔDEF indica que los triángulos ABC y DEF son semejantes.",
          "Si son semejantes, AB/DE = BC/EF = AC/DF = k, donde k es la razón de semejanza.",
          "Los ángulos correspondientes son iguales: ∠A = ∠D, ∠B = ∠E, ∠C = ∠F.",
          "Si la razón de semejanza es k, la de perímetros es k y la de áreas es k².",
          "Todo triángulo equilátero es semejante a cualquier otro triángulo equilátero."
        ]
      },
      {
        level: "intermedio",
        title: "Criterios de Semejanza",
        lines: [
          "Criterio AA: si dos ángulos de un triángulo son iguales a dos de otro, son semejantes.",
          "Criterio LAL de semejanza: dos lados proporcionales con el ángulo comprendido igual.",
          "Criterio LLL de semejanza: los tres lados de un triángulo son proporcionales a los del otro.",
          "Una paralela a un lado de un triángulo siempre forma un triángulo semejante al original.",
          "La relación entre áreas de triángulos semejantes es el cuadrado de la razón de semejanza.",
          "Si un lado se duplica manteniendo la semejanza, el área se cuadruplica (factor k² = 4)."
        ]
      },
      {
        level: "avanzado",
        title: "Propiedades Avanzadas de Semejanza",
        lines: [
          "Si ΔABC ~ ΔDEF y ΔDEF ~ ΔGHI, entonces ΔABC ~ ΔGHI por transitividad de semejanza.",
          "Si k = 2, las áreas están en razón 4:1, y los perímetros en razón 2:1.",
          "En un triángulo rectángulo, la altura a la hipotenusa genera dos triángulos semejantes entre sí.",
          "Cada uno de estos dos triángulos es también semejante al triángulo original.",
          "La razón de semejanza entre el triángulo original y cada parte depende de los catetos.",
          "Si ΔABC ~ ΔDEF con razón k, y un lado de ABC mide 12, el correspondiente mide 12/k."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Triángulos Semejantes</text>
        <polygon points="30,165 80,45 130,165" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <polygon points="165,165 225,65 285,165" fill="none" stroke="#dc2626" stroke-width="2.5"/>
        <text x="30" y="180" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">A</text>
        <text x="73" y="40" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">B</text>
        <text x="118" y="180" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">C</text>
        <text x="160" y="180" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">D</text>
        <text x="218" y="58" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">E</text>
        <text x="275" y="180" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">F</text>
        <text x="50" y="110" font-family="Arial" font-size="10" fill="#16a34a" font-weight="bold">k=1</text>
        <text x="200" y="115" font-family="Arial" font-size="10" fill="#f59e0b" font-weight="bold">k=1.5</text>
        <text x="65" y="195" font-family="Arial" font-size="11" fill="#8b5cf6" font-weight="bold">ΔABC ~ ΔDEF</text>
      </svg>`
    ],
    exercises: [
      { id: 7, question: "Si ΔABC ~ ΔDEF con razón de semejanza k = 3 y AB = 6, ¿cuánto mide DE?", options: ["2", "18", "9", "12"], correctIndex: 0, explanation: "AB/DE = k → 6/DE = 3 → DE = 2.", difficulty: "basico" },
      { id: 8, question: "Si dos triángulos semejantes tienen lados 5 y 8 en el primero, y 10 y x en el segundo, ¿cuánto vale x?", options: ["16", "20", "4", "25"], correctIndex: 0, explanation: "La proporción es constante: 5/10 = 8/x → x = 16.", difficulty: "intermedio" },
      { id: 9, question: "Si la razón de semejanza entre dos triángulos es 3:1, ¿cuál es la razón de sus áreas?", options: ["3:1", "9:1", "27:1", "6:1"], correctIndex: 1, explanation: "La razón de áreas es k² = 3² = 9, por lo que la razón es 9:1.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "criterios-de-congruencia",
    tip: "No confundas congruencia con semejanza: AAA nunca da congruencia. En la PUCP, identifica rápidamente qué elementos te dan para elegir el criterio correcto.",
    theory: [
      {
        level: "basico",
        title: "Congruencia de Triángulos",
        lines: [
          "Dos triángulos son congruentes si tienen exactamente la misma forma y el mismo tamaño.",
          "La notación ΔABC ≅ ΔDEF indica que ambos triángulos son congruentes.",
          "Los lados y ángulos correspondientes de triángulos congruentes son todos iguales.",
          "El criterio LAL requiere dos lados y el ángulo comprendido entre ellos iguales.",
          "El criterio LAA requiere dos ángulos y un lado correspondiente iguales.",
          "El criterio ALA requiere dos ángulos y el lado comprendido entre ellos iguales."
        ]
      },
      {
        level: "intermedio",
        title: "Los Cuatro Criterios Principales",
        lines: [
          "Criterio LAL: dos lados y el ángulo comprendido determinan un triángulo único.",
          "Criterio LAA: dos ángulos y un lado adyacente garantizan la congruencia de los triángulos.",
          "Criterio ALA: dos ángulos y el lado comprendido entre ellos también garantizan congruencia.",
          "Criterio LLL: si los tres lados son iguales, los triángulos son obligatoriamente congruentes.",
          "El criterio AAA solo garantiza semejanza, no congruencia, pues el tamaño puede variar.",
          "Para triángulos rectángulos, el criterio HR usa la hipotenusa y un cateto para congruencia."
        ]
      },
      {
        level: "avanzado",
        title: "Casos Especiales y Errores Comunes",
        lines: [
          "Dos triángulos rectángulos son congruentes si la hipotenusa y un cateto son iguales.",
          "El criterio HR es caso particular del LAL aplicado a triángulos con ángulo de 90°.",
          "El criterio LAL funciona porque las medidas fijan un triángulo de tamaño único.",
          "AAA solo da semejanza: dos triángulos pueden compartir ángulos y tener distinto tamaño.",
          "Si dos triángulos tienen dos lados iguales y un ángulo no comprendido igual, pueden no ser congruentes.",
          "En la PUCP, identificar el criterio correcto de congruencia ahorra tiempo valioso."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Criterios de Congruencia</text>
        <polygon points="40,165 40,55 135,165" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <polygon points="165,165 165,55 260,165" fill="none" stroke="#dc2626" stroke-width="2.5"/>
        <line x1="37" y1="90" x2="43" y2="90" stroke="#16a34a" stroke-width="2"/>
        <line x1="37" y1="95" x2="43" y2="95" stroke="#16a34a" stroke-width="2"/>
        <line x1="162" y1="90" x2="168" y2="90" stroke="#16a34a" stroke-width="2"/>
        <line x1="162" y1="95" x2="168" y2="95" stroke="#16a34a" stroke-width="2"/>
        <line x1="82" y1="161" x2="88" y2="165" stroke="#f59e0b" stroke-width="2"/>
        <line x1="82" y1="169" x2="88" y2="165" stroke="#f59e0b" stroke-width="2"/>
        <line x1="207" y1="161" x2="213" y2="165" stroke="#f59e0b" stroke-width="2"/>
        <line x1="207" y1="169" x2="213" y2="165" stroke="#f59e0b" stroke-width="2"/>
        <text x="30" y="50" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">A</text>
        <text x="25" y="178" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">B</text>
        <text x="125" y="178" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">C</text>
        <text x="155" y="50" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">D</text>
        <text x="150" y="178" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">E</text>
        <text x="250" y="178" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">F</text>
        <text x="55" y="100" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">L=</text>
        <text x="180" y="100" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">L=</text>
        <text x="95" y="195" font-family="Arial" font-size="11" fill="#8b5cf6" font-weight="bold">ΔABC ≅ ΔDEF (LAL)</text>
      </svg>`
    ],
    exercises: [
      { id: 10, question: "¿Cuál de los siguientes criterios NO garantiza congruencia entre triángulos?", options: ["LAL", "LAA", "AAA", "LLL"], correctIndex: 2, explanation: "AAA solo garantiza semejanza, no congruencia, porque el tamaño puede ser diferente.", difficulty: "basico" },
      { id: 11, question: "Dos triángulos rectángulos tienen la misma hipotenusa y un cateto igual. ¿Son congruentes?", options: ["Sí, por criterio HR", "Sí, por criterio AAA", "No, no hay criterio suficiente", "Solo si el ángulo es 60°"], correctIndex: 0, explanation: "El criterio HR (hipotenusa-cateto) es un caso de LAL para triángulos rectángulos.", difficulty: "intermedio" },
      { id: 12, question: "En ΔABC y ΔDEF, si AB = DE, ∠A = ∠D y ∠B = ∠E, ¿qué criterio garantiza congruencia?", options: ["LAL", "ALA", "LAA", "LLL"], correctIndex: 1, explanation: "Tienen dos ángulos y el lado comprendido entre ellos iguales, lo cual corresponde al criterio ALA.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "area-triangulos-avanzado",
    tip: "Domina las tres fórmulas de área (base-altura, Herón y coordenadas) y elige según los datos: si tienes tres lados usa Herón, si tienes vértices usa coordenadas.",
    theory: [
      {
        level: "basico",
        title: "Fórmula Base por Altura",
        lines: [
          "El área de un triángulo se calcula: A = (base × altura) / 2.",
          "La base es cualquier lado del triángulo y la altura es la perpendicular desde el vértice opuesto.",
          "La altura puede caer fuera del triángulo si el ángulo correspondiente es obtuso.",
          "Un triángulo con base b y altura h tiene área igual a la mitad de un rectángulo bh.",
          "La fórmula se escribe como A = bh/2, equivalente a la mitad del producto base por altura.",
          "En un triángulo rectángulo, los dos catetos pueden usarse como base y altura."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmula de Herón y Coordenadas",
        lines: [
          "La fórmula de Herón calcula el área con los tres lados: A = √[s(s−a)(s−b)(s−c)].",
          "El semiperímetro s es la mitad del perímetro: s = (a + b + c) / 2.",
          "El método de coordenadas usa los vértices (x₁,y₁), (x₂,y₂) y (x₃,y₃).",
          "Fórmula de coordenadas: A = ½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|.",
          "Con dos lados y el ángulo entre ellos: A = ½ × a × b × sen(C).",
          "La fórmula con seno es útil cuando se conoce un ángulo y sus lados adyacentes."
        ]
      },
      {
        level: "avanzado",
        title: "Fórmulas Derivadas y Combinaciones",
        lines: [
          "La fórmula A = ½ab·sen(C) equivale a base por altura sobre dos por definición de seno.",
          "Con el radio R de la circunferencia circunscrita, el área es: A = abc / (4R).",
          "Con el radio r de la inscrita, el área es: A = r × s, siendo s el semiperímetro.",
          "Para un triángulo rectángulo con catetos a y b, el área se reduce a A = ab / 2.",
          "El método del determinante usa una matriz 3×3 con los vértices y una columna de unos.",
          "En la PUCP, combinar fórmulas de área con relaciones de triángulos es muy frecuente."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Área de Triángulos</text>
        <polygon points="50,165 150,35 250,165" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="150" y1="35" x2="150" y2="165" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/>
        <rect x="145" y="157" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <text x="155" y="105" font-family="Arial" font-size="13" fill="#dc2626" font-weight="bold">h</text>
        <text x="138" y="183" font-family="Arial" font-size="13" fill="#16a34a" font-weight="bold">b</text>
        <text x="50" y="30" font-family="Arial" font-size="10" fill="#2563eb">A</text>
        <text x="40" y="180" font-family="Arial" font-size="10" fill="#2563eb">B</text>
        <text x="252" y="180" font-family="Arial" font-size="10" fill="#2563eb">C</text>
        <text x="30" y="195" font-family="Arial" font-size="11" fill="#f59e0b" font-weight="bold">A = (b × h) / 2</text>
        <text x="170" y="195" font-family="Arial" font-size="11" fill="#8b5cf6" font-weight="bold">Heron: √[s(s-a)(s-b)(s-c)]</text>
      </svg>`
    ],
    exercises: [
      { id: 13, question: "Un triángulo tiene base 12 cm y altura 8 cm. ¿Cuál es su área?", options: ["96 cm²", "48 cm²", "24 cm²", "20 cm²"], correctIndex: 1, explanation: "A = (12 × 8) / 2 = 96 / 2 = 48 cm².", difficulty: "basico" },
      { id: 14, question: "Un triángulo tiene lados 3, 4 y 5. Usando la fórmula de Herón, su área es:", options: ["12", "6", "10", "8"], correctIndex: 1, explanation: "s = (3+4+5)/2 = 6. A = √(6·3·2·1) = √36 = 6.", difficulty: "intermedio" },
      { id: 15, question: "Los vértices de un triángulo son A(1,1), B(4,1) y C(1,5). ¿Cuál es su área?", options: ["12", "6", "8", "10"], correctIndex: 1, explanation: "A = ½|1(1−5) + 4(5−1) + 1(1−1)| = ½|−4 + 16 + 0| = ½(12) = 6.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "circunferencia-circunscrita-inscrita",
    tip: "Memoriza: circuncentro = mediatrices, incentro = bisectrices. En rectángulos el circuncentro es el punto medio de la hipotenusa, eso ahorra cálculos.",
    theory: [
      {
        level: "basico",
        title: "Circunferencias Asociadas al Triángulo",
        lines: [
          "La circunferencia circunscrita de un triángulo pasa exactamente por sus tres vértices.",
          "El centro de esta circunferencia se llama circuncentro y se obtiene con las mediatrices.",
          "El radio de la circunferencia circunscrita se representa con la letra R.",
          "La circunferencia inscrita es tangente a los tres lados del triángulo por dentro.",
          "El centro de la inscrita se llama incentro y se halla con las bisectrices de los ángulos.",
          "El radio de la circunferencia inscrita se representa con la letra r."
        ]
      },
      {
        level: "intermedio",
        title: "Ubicación y Cálculo de los Radios",
        lines: [
          "El circuncentro puede estar dentro (acutángulo), fuera (obtusángulo) o en un vértice (rectángulo).",
          "Para un triángulo rectángulo, el circuncentro es el punto medio de la hipotenusa.",
          "El radio circunscrito se calcula como: R = a / (2·sen(A)) o R = abc / (4·Área).",
          "El incentro siempre se encuentra dentro del triángulo sin importar su forma.",
          "El radio inscrito se calcula como: r = Área / s, donde s es el semiperímetro.",
          "El área se puede expresar como A = r·s o también como A = abc / (4R)."
        ]
      },
      {
        level: "avanzado",
        title: "Centros Notables y Relaciones",
        lines: [
          "El ortocentro, circuncentro y baricentro están alineados en la línea de Euler.",
          "El baricentro divide cada mediana en razón 2:1 contando desde el vértice.",
          "En un triángulo equilátero, los cuatro centros notables coinciden en un mismo punto.",
          "Para un triángulo equilátero de lado a: R = a√3/3 y r = a√3/6.",
          "La desigualdad de Euler establece que R ≥ 2r, con igualdad solo en equiláteros.",
          "En la PUCP, calcular radios de circunferencias asociadas requiere dominar múltiples fórmulas."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Circunferencias Asociadas</text>
        <circle cx="150" cy="105" r="85" fill="none" stroke="#2563eb" stroke-width="1.8"/>
        <polygon points="150,20 55,165 245,165" fill="none" stroke="#dc2626" stroke-width="2.5"/>
        <circle cx="150" cy="132" r="32" fill="none" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="5,3"/>
        <circle cx="150" cy="105" r="3" fill="#2563eb"/>
        <circle cx="150" cy="132" r="3" fill="#16a34a"/>
        <text x="155" y="102" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">O (R)</text>
        <text x="155" y="146" font-family="Arial" font-size="10" fill="#16a34a" font-weight="bold">I (r)</text>
        <text x="143" y="15" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">A</text>
        <text x="38" y="180" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">B</text>
        <text x="248" y="180" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">C</text>
      </svg>`
    ],
    exercises: [
      { id: 16, question: "¿Cómo se obtiene el circuncentro de un triángulo?", options: ["Intersección de alturas", "Intersección de mediatrices", "Intersección de bisectrices", "Intersección de medianas"], correctIndex: 1, explanation: "El circuncentro es el punto de intersección de las mediatrices de los lados del triángulo.", difficulty: "basico" },
      { id: 17, question: "Un triángulo rectángulo tiene catetos 6 y 8. ¿Cuál es el radio de su circunferencia circunscrita?", options: ["4", "5", "10", "3"], correctIndex: 1, explanation: "La hipotenusa es √(36+64) = 10. En un triángulo rectángulo, R = hipotenusa/2 = 5.", difficulty: "intermedio" },
      { id: 18, question: "Un triángulo tiene área 30 y semiperímetro s = 15. ¿Cuál es el radio de la circunferencia inscrita?", options: ["1", "2", "3", "5"], correctIndex: 1, explanation: "r = A/s = 30/15 = 2.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "potencia-de-un-punto",
    tip: "La potencia de un punto es la misma para cualquier secante que pase por él: usa PA × PB = PC × PD para resolver rápidamente sin calcular distancias al centro.",
    theory: [
      {
        level: "basico",
        title: "Concepto de Potencia de un Punto",
        lines: [
          "La potencia de un punto P respecto a una circunferencia mide su posición relativa al círculo.",
          "Si P está fuera, la potencia es positiva: P(P) = d² − R², donde d es la distancia al centro.",
          "Si P está dentro, la potencia es negativa, también con la fórmula P(P) = d² − R².",
          "Si P está sobre la circunferencia, su potencia es exactamente igual a cero.",
          "Para un punto exterior con una secante PAB, la potencia es PA × PB.",
          "Para un punto interior con una cuerda que pasa por él, la potencia también es PA × PB."
        ]
      },
      {
        level: "intermedio",
        title: "Relaciones de Potencia",
        lines: [
          "Si desde P se traza una tangente PT, entonces PT² = PA × PB para cualquier secante PAB.",
          "Si dos secantes PAB y PCD salen de P, entonces PA × PB = PC × PD.",
          "Si una tangente y una secante salen de P, entonces el cuadrado de la tangente es PA × PB.",
          "Para dos cuerdas interiores ABC y DEF que se cruzan en P: PA × PC = PD × PF.",
          "El eje radical de dos circunferencias es el lugar geométrico de puntos con igual potencia.",
          "El eje radical es siempre perpendicular a la línea que une los centros de las circunferencias."
        ]
      },
      {
        level: "avanzado",
        title: "Aplicaciones Avanzadas",
        lines: [
          "Para un punto P fuera con centro O, la potencia también se expresa como PO² − R².",
          "Para dos secantes desde P, el producto PA × PB siempre es igual a PO² − R².",
          "Una potencia positiva indica que P está fuera; negativa, que está dentro del círculo.",
          "Si dos circunferencias son exteriores, su eje radical queda en la región entre ambas.",
          "Si dos circunferencias son interiores, su eje radical queda fuera de ambas.",
          "En problemas de PUCP, la potencia de un punto se combina con semejanza de triángulos."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Potencia de un Punto</text>
        <circle cx="175" cy="105" r="60" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="175" cy="105" r="3" fill="#2563eb"/>
        <text x="180" y="100" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">O</text>
        <circle cx="30" cy="105" r="3" fill="#dc2626"/>
        <text x="18" y="98" font-family="Arial" font-size="12" fill="#dc2626" font-weight="bold">P</text>
        <line x1="30" y1="105" x2="265" y2="72" stroke="#16a34a" stroke-width="1.8"/>
        <line x1="30" y1="105" x2="265" y2="138" stroke="#f59e0b" stroke-width="1.8"/>
        <circle cx="112" cy="86" r="2.5" fill="#16a34a"/>
        <circle cx="238" y="75" r="2.5" fill="#16a34a"/>
        <text x="100" y="80" font-family="Arial" font-size="10" fill="#16a34a" font-weight="bold">A</text>
        <text x="240" y="68" font-family="Arial" font-size="10" fill="#16a34a" font-weight="bold">B</text>
        <circle cx="112" cy="124" r="2.5" fill="#f59e0b"/>
        <circle cx="238" cy="135" r="2.5" fill="#f59e0b"/>
        <text x="100" y="140" font-family="Arial" font-size="10" fill="#f59e0b" font-weight="bold">C</text>
        <text x="240" y="152" font-family="Arial" font-size="10" fill="#f59e0b" font-weight="bold">D</text>
        <text x="45" y="195" font-family="Arial" font-size="12" fill="#8b5cf6" font-weight="bold">PA × PB = PC × PD</text>
      </svg>`
    ],
    exercises: [
      { id: 19, question: "Si P está fuera de una circunferencia y PT es tangente con PT = 6, ¿cuál es la potencia de P?", options: ["36", "6", "12", "18"], correctIndex: 0, explanation: "La potencia de un punto exterior es PT² = 6² = 36.", difficulty: "basico" },
      { id: 20, question: "Desde P se trazan dos secantes PAB y PCD con PA = 2, PB = 8 y PC = 4. ¿Cuánto mide PD?", options: ["4", "6", "8", "16"], correctIndex: 0, explanation: "PA × PB = PC × PD → 2 × 8 = 4 × PD → PD = 16/4 = 4.", difficulty: "intermedio" },
      { id: 21, question: "Dos cuerdas AB y CD se cruzan en P dentro de una circunferencia con PA = 3, PB = 5 y PC = 2. ¿Cuánto mide PD?", options: ["7.5", "8", "6", "10"], correctIndex: 0, explanation: "PA × PB = PC × PD → 3 × 5 = 2 × PD → PD = 15/2 = 7.5.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "angulos-inscritos-centrales",
    tip: "El ángulo inscrito siempre vale la mitad del arco; memoriza que un ángulo inscrito en semicírculo es 90°, esto aparece mucho en la PUCP.",
    theory: [
      {
        level: "basico",
        title: "Ángulos Centrales e Inscritos",
        lines: [
          "Un ángulo central tiene su vértice en el centro de la circunferencia y lados que son radios.",
          "Un ángulo inscrito tiene su vértice sobre la circunferencia y lados que son cuerdas.",
          "El ángulo inscrito siempre mide la mitad del arco que intercepta sobre la circunferencia.",
          "El ángulo central mide exactamente igual que el arco que intercepta en la circunferencia.",
          "Por tanto, un ángulo inscrito es la mitad del ángulo central que subtiende el mismo arco.",
          "Si dos ángulos inscritos interceptan el mismo arco, necesariamente son iguales entre sí."
        ]
      },
      {
        level: "intermedio",
        title: "Relaciones Fundamentales",
        lines: [
          "Si ∠AOB es central e ∠ACB es inscrito sobre el mismo arco, entonces ∠ACB = ½∠AOB.",
          "Un ángulo inscrito que intercepta un semicírculo siempre mide 90° (ángulo recto).",
          "Los ángulos inscritos en el mismo segmento circular son siempre iguales entre sí.",
          "La relación entre un ángulo inscrito y uno central sobre el mismo arco es de 1 a 2.",
          "Un cuadrilátero con sus cuatro vértices en una circunferencia se llama cuadrilátero cíclico.",
          "En un cuadrilátero cíclico, los ángulos opuestos son suplementarios, es decir suman 180°."
        ]
      },
      {
        level: "avanzado",
        title: "Ángulos con Secantes, Tangentes y Cuerdas",
        lines: [
          "El ángulo formado por dos cuerdas que se cruzan dentro es el promedio de los arcos formados.",
          "La fórmula es ∠P = ½(arco AC + arco BD), donde AC y BD son los arcos opuestos.",
          "Si una secante y una tangente se cortan fuera, el ángulo mide la mitad de la diferencia de arcos.",
          "La fórmula es ∠P = ½(mayor − menor), donde mayor y menor son los arcos interceptados.",
          "Para dos tangentes desde un punto exterior se aplica la misma fórmula de diferencia de arcos.",
          "En la PUCP, los ángulos con cuerdas, tangentes y secantes aparecen en problemas de alto nivel."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Ángulos Inscritos y Centrales</text>
        <circle cx="150" cy="108" r="72" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="108" r="3" fill="#2563eb"/>
        <text x="155" y="104" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">O</text>
        <circle cx="82" cy="42" r="3" fill="#dc2626"/>
        <text x="72" y="36" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">A</text>
        <circle cx="218" cy="42" r="3" fill="#dc2626"/>
        <text x="222" y="36" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">B</text>
        <circle cx="150" cy="180" r="3" fill="#16a34a"/>
        <text x="155" y="193" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">C</text>
        <line x1="150" y1="108" x2="82" y2="42" stroke="#2563eb" stroke-width="1.8"/>
        <line x1="150" y1="108" x2="218" y2="42" stroke="#2563eb" stroke-width="1.8"/>
        <line x1="150" y1="180" x2="82" y2="42" stroke="#dc2626" stroke-width="1.8"/>
        <line x1="150" y1="180" x2="218" y2="42" stroke="#dc2626" stroke-width="1.8"/>
        <text x="110" y="72" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">∠AOB = α</text>
        <text x="100" y="160" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">∠ACB = α/2</text>
        <text x="60" y="198" font-family="Arial" font-size="11" fill="#8b5cf6" font-weight="bold">∠inscrito = ½ × ∠central</text>
      </svg>`
    ],
    exercises: [
      { id: 22, question: "Si un ángulo central mide 80°, ¿cuánto mide el ángulo inscrito que intercepta el mismo arco?", options: ["80°", "160°", "40°", "20°"], correctIndex: 2, explanation: "El ángulo inscrito vale la mitad del central: 80° / 2 = 40°.", difficulty: "basico" },
      { id: 23, question: "Un ángulo inscrito mide 72°. ¿Cuánto mide el arco que intercepta?", options: ["72°", "144°", "36°", "108°"], correctIndex: 1, explanation: "El arco interceptado es el doble del ángulo inscrito: 2 × 72° = 144°.", difficulty: "intermedio" },
      { id: 24, question: "Un cuadrilátero cíclico tiene un ángulo de 65°. ¿Cuánto mide el ángulo opuesto?", options: ["65°", "115°", "130°", "90°"], correctIndex: 1, explanation: "En un cuadrilátero cíclico los ángulos opuestos suman 180°: 180° − 65° = 115°.", difficulty: "avanzado" }
    ]
  }
];
