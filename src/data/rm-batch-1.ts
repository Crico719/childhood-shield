import type { CourseModule } from "C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content";

export const rmBatch1: CourseModule[] = [
  {
    slug: "teoria-de-conjuntos",
    tip: "En el examen, identifica primero los conjuntos dados antes de calcular operaciones. Dibuja un diagrama para verificar tu respuesta.",
    theory: [
      {
        level: "basico",
        title: "Definición y notación de conjuntos",
        lines: [
          "Un conjunto es una colección bien definida de objetos llamados elementos.",
          "Se escriben entre llaves: A = {1, 2, 3, 4}.",
          "El símbolo ∈ indica pertenencia: 3 ∈ A significa que 3 está en A.",
          "El conjunto vacío se denota ∅ y no contiene ningún elemento.",
          "Dos conjuntos son iguales si tienen exactamente los mismos elementos.",
          "Un subconjunto B ⊆ A contiene solo elementos que pertenecen a A."
        ]
      },
      {
        level: "intermedio",
        title: "Unión e intersección",
        lines: [
          "La unión A ∪ B reúne todos los elementos de A o de B o de ambos.",
          "Ejemplo: {1,2} ∪ {2,3} = {1,2,3}.",
          "La intersección A ∩ B contiene solo los elementos comunes a A y B.",
          "Ejemplo: {1,2,3} ∩ {2,3,4} = {2,3}.",
          "Si A ∩ B = ∅, los conjuntos se llaman disjuntos.",
          "La unión crece o mantiene el conjunto más grande, la intersección reduce."
        ]
      },
      {
        level: "avanzado",
        title: "Complemento, diferencia y leyes de De Morgan",
        lines: [
          "El complemento de A (A' o Ā) son los elementos de U que no están en A.",
          "A ∪ A' = U y A ∩ A' = ∅ siempre se cumplen.",
          "La diferencia A − B contiene los elementos de A que no están en B.",
          "Ejemplo: {1,2,3} − {2,3,4} = {1}.",
          "La diferencia simétrica A △ B = (A − B) ∪ (B − A).",
          "Leyes de De Morgan: (A ∪ B)' = A' ∩ B' y (A ∩ B)' = A' ∪ B'."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Operaciones de Conjuntos</text>
        <circle cx="115" cy="110" r="55" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="185" cy="110" r="55" fill="#dc2626" fill-opacity="0.15" stroke="#dc2626" stroke-width="2.5"/>
        <text x="80" y="115" font-family="Arial" font-size="18" fill="#2563eb" font-weight="bold">A</text>
        <text x="205" y="115" font-family="Arial" font-size="18" fill="#dc2626" font-weight="bold">B</text>
        <text x="150" y="105" font-family="Arial" font-size="11" fill="#16a34a" text-anchor="middle" font-weight="bold">A∩B</text>
        <text x="150" y="120" font-family="Arial" font-size="10" fill="#16a34a" text-anchor="middle">{4,5}</text>
        <text x="150" y="185" font-family="Arial" font-size="10" fill="#8b5cf6" text-anchor="middle" font-weight="bold">A∪B = {1,2,3,4,5,6,7}</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Dados A = {1, 2, 3} y B = {3, 4, 5}, ¿cuál es A ∪ B?",
        options: ["{3}", "{1,2,3,4,5}", "{1,2,4,5}", "{1,2,3}"],
        correctIndex: 1,
        explanation: "La unión incluye todos los elementos presentes en al menos uno de los dos conjuntos: {1,2,3,4,5}.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Si A = {1,2,3,4,5}, B = {3,4,5,6,7} y C = {5,6,7,8,9}, ¿cuál es A ∩ B ∩ C?",
        options: ["{3,4,5,6,7}", "{5,6,7}", "{5}", "{3,4,5}"],
        correctIndex: 2,
        explanation: "La intersección de los tres conjuntos contiene solo los elementos presentes en los tres simultáneamente: {5}.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Dados U = {1,...,10}, A = {1,2,3,4,5} y B = {4,5,6,7}, ¿cuál es (A − B) ∪ (B − A)?",
        options: ["{4,5}", "{1,2,3,4,5,6,7}", "{1,2,3,6,7}", "{1,2,3}"],
        correctIndex: 2,
        explanation: "A − B = {1,2,3} y B − A = {6,7}. La diferencia simétrica reúne los elementos exclusivos de cada conjunto.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "diagramas-de-venn",
    tip: "Lee siempre el enunciado cuidadosamente: los números en un Venn representan la cantidad de elementos en cada región, no los elementos mismos.",
    theory: [
      {
        level: "basico",
        title: "Elementos de un diagrama de Venn",
        lines: [
          "Un diagrama de Venn usa círculos cerrados para representar conjuntos.",
          "El rectángulo exterior representa al conjunto universal U.",
          "Cada círculo representa un conjunto con sus elementos dentro.",
          "Los números dentro de las regiones indican la cantidad de elementos.",
          "Las regiones superpuestas muestran elementos compartidos entre conjuntos.",
          "Es la herramienta visual más útil para resolver problemas de conjuntos."
        ]
      },
      {
        level: "intermedio",
        title: "Diagramas con dos conjuntos",
        lines: [
          "Con dos conjuntos A y B se forman cuatro regiones en el diagrama.",
          "La región central es A ∩ B, los elementos comunes a ambos.",
          "La parte izquierda exclusiva es A − B, elementos solo de A.",
          "La parte derecha exclusiva es B − A, elementos solo de B.",
          "El exterior de ambos círculos es (A ∪ B)', los que no están en ninguno.",
          "La suma de todas las regiones debe ser igual al total del conjunto universal."
        ]
      },
      {
        level: "avanzado",
        title: "Diagramas con tres conjuntos",
        lines: [
          "Con tres conjuntos A, B y C se forman ocho regiones distintas.",
          "La intersección central A ∩ B ∩ C es donde los tres se superponen.",
          "Para resolver problemas, empieza llenando la intersección de los tres.",
          "Luego ve llenando las intersecciones de pares hacia afuera.",
          "Siempre verifica que la suma de elementos coincida con el total dado.",
          "Los errores más comunes son confundir 'solo A' con 'A incluyendo intersecciones'."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Diagrama de Venn</text>
        <rect x="40" y="40" width="220" height="140" fill="none" stroke="#333" stroke-width="1.5" rx="4"/>
        <text x="48" y="55" font-family="Arial" font-size="11" fill="#333" font-weight="bold">U</text>
        <circle cx="125" cy="110" r="50" fill="#2563eb" fill-opacity="0.12" stroke="#2563eb" stroke-width="2"/>
        <circle cx="175" cy="110" r="50" fill="#dc2626" fill-opacity="0.12" stroke="#dc2626" stroke-width="2"/>
        <text x="90" y="75" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold">A</text>
        <text x="195" y="75" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">B</text>
        <text x="90" y="115" font-family="Arial" font-size="14" fill="#2563eb" font-weight="bold">20</text>
        <text x="150" y="115" font-family="Arial" font-size="14" fill="#16a34a" text-anchor="middle" font-weight="bold">10</text>
        <text x="205" y="115" font-family="Arial" font-size="14" fill="#dc2626" font-weight="bold">15</text>
        <text x="240" y="170" font-family="Arial" font-size="11" fill="#8b5cf6" font-weight="bold">5</text>
        <text x="150" y="195" font-family="Arial" font-size="9" fill="#8b5cf6" text-anchor="middle">Total U = 50</text>
      </svg>`
    ],
    exercises: [
      {
        id: 4,
        question: "En un diagrama de Venn con U = {1,...,20}, A = {2,4,6,8,10} y B = {6,8,10,12,14}, ¿cuántos elementos hay solo en A?",
        options: ["5", "3", "2", "8"],
        correctIndex: 2,
        explanation: "Solo en A están los elementos de A que no pertenecen a B: {2,4}, es decir, 2 elementos.",
        difficulty: "basico"
      },
      {
        id: 5,
        question: "En una encuesta de 50 personas, 30 gustan de fútbol, 25 de básquet y 10 de ambos. ¿Cuántas personas gustan de al menos uno de los dos deportes?",
        options: ["50", "10", "40", "45"],
        correctIndex: 3,
        explanation: "Por inclusión-exclusión: fútbol solo = 20, básquet solo = 15, ambos = 10. Total que gusta al menos uno = 45.",
        difficulty: "intermedio"
      },
      {
        id: 6,
        question: "En una escuela, 80 estudian inglés, 60 francés, 40 alemán, 30 inglés y francés, 20 francés y alemán, 15 inglés y alemán, y 10 los tres. ¿Cuántos estudian solo inglés?",
        options: ["55", "35", "25", "45"],
        correctIndex: 3,
        explanation: "Solo inglés = 80 − 30 − 15 + 10 = 45. Se suma la intersección de los tres porque se restó dos veces.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "algebra-booleana",
    tip: "Memoriza las leyes de De Morgan y de absorción; aparecen frecuentemente en el examen y simplifican mucho las expresiones.",
    theory: [
      {
        level: "basico",
        title: "Operadores booleanos fundamentales",
        lines: [
          "En álgebra booleana las variables solo toman valores verdadero (1) o falso (0).",
          "AND (∧) produce 1 solo cuando ambos operandos son 1.",
          "OR (∨) produce 1 cuando al menos uno de los operandos es 1.",
          "NOT (¬) invierte el valor: ¬1 = 0 y ¬0 = 1.",
          "Se usan las letras P, Q, R para representar proposiciones.",
          "La precedencia es: NOT antes de AND, AND antes de OR."
        ]
      },
      {
        level: "intermedio",
        title: "Leyes de la álgebra booleana",
        lines: [
          "Ley conmutativa: A ∧ B = B ∧ A y A ∨ B = B ∨ A.",
          "Ley asociativa: (A ∧ B) ∧ C = A ∧ (B ∧ C).",
          "Ley distributiva: A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C).",
          "Leyes de identidad: A ∧ 1 = A y A ∨ 0 = A.",
          "Leyes de complemento: A ∧ ¬A = 0 y A ∨ ¬A = 1.",
          "Leyes de De Morgan: ¬(A ∧ B) = ¬A ∨ ¬B y ¬(A ∨ B) = ¬A ∧ ¬B."
        ]
      },
      {
        level: "avanzado",
        title: "Simplificación de expresiones",
        lines: [
          "Para simplificar, aplica las leyes paso a paso de adentro hacia afuera.",
          "Usa las leyes de De Morgan para negar expresiones compuestas.",
          "Ley de absorción: A ∨ (A ∧ B) = A y A ∧ (A ∨ B) = A.",
          "Verifica tu simplificación construyendo la tabla de verdad de ambas expresiones.",
          "Si ambas tablas coinciden filas, la simplificación es correcta.",
          "Practica identificar patrones como A ∧ ¬A = 0 directamente."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Circuito Booleano</text>
        <text x="20" y="70" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">A ──┐</text>
        <text x="20" y="95" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">B ──┤</text>
        <rect x="65" y="55" width="70" height="55" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2" rx="4"/>
        <text x="100" y="87" font-family="Arial" font-size="12" fill="#2563eb" text-anchor="middle" font-weight="bold">AND</text>
        <line x1="135" y1="82" x2="170" y2="82" stroke="#333" stroke-width="1.5"/>
        <text x="20" y="130" font-family="Arial" font-size="12" fill="#dc2626" font-weight="bold">C ──────────┘</text>
        <rect x="170" y="65" width="60" height="80" fill="#dc2626" fill-opacity="0.15" stroke="#dc2626" stroke-width="2" rx="4"/>
        <text x="200" y="110" font-family="Arial" font-size="12" fill="#dc2626" text-anchor="middle" font-weight="bold">OR</text>
        <line x1="230" y1="105" x2="255" y2="105" stroke="#333" stroke-width="1.5"/>
        <text x="260" y="110" font-family="Arial" font-size="12" fill="#16a34a" font-weight="bold">Y</text>
        <text x="150" y="185" font-family="Arial" font-size="11" fill="#8b5cf6" text-anchor="middle" font-weight="bold">Y = (A ∧ B) ∨ C</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7,
        question: "Si P = verdadero y Q = falso, ¿cuál es el valor de P ∧ Q?",
        options: ["Verdadero", "Falso", "Indeterminado", "Depende del contexto"],
        correctIndex: 1,
        explanation: "P ∧ Q es verdadero solo cuando ambos operandos son verdaderos. Como Q es falso, el resultado es falso.",
        difficulty: "basico"
      },
      {
        id: 8,
        question: "¿Cuál es la simplificación de ¬(P ∧ Q)?",
        options: ["¬P ∧ ¬Q", "P ∨ Q", "¬P ∨ ¬Q", "¬(P ∨ Q)"],
        correctIndex: 2,
        explanation: "Por la primera ley de De Morgan, negar una conjunción equivale a la disyunción de las negaciones: ¬P ∨ ¬Q.",
        difficulty: "intermedio"
      },
      {
        id: 9,
        question: "¿Cuál es la forma simplificada de (P ∧ Q) ∨ (P ∧ ¬Q)?",
        options: ["P ∧ Q", "Q", "P", "P ∨ Q"],
        correctIndex: 2,
        explanation: "Factorizando P: P ∧ (Q ∨ ¬Q) = P ∧ 1 = P por la ley de complemento y de identidad.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "tablas-de-verdad",
    tip: "Construye la tabla paso a paso, evaluando primero las expresiones entre paréntesis y aplicando la precedencia de operadores.",
    theory: [
      {
        level: "basico",
        title: "Estructura de una tabla de verdad",
        lines: [
          "Una tabla de verdad lista todas las combinaciones posibles de valores de verdad.",
          "Con n variables hay exactamente 2^n filas en la tabla.",
          "Las columnas se ordenan de izquierda a derecha, de más variable a menos.",
          "Se empieza alternando V y F en la primera columna.",
          "La segunda columna alterna cada 2 filas, la tercera cada 4, y así sucesivamente.",
          "Se evalúa la expresión columna por columna siguiendo la precedencia."
        ]
      },
      {
        level: "intermedio",
        title: "Proposiciones compuestas",
        lines: [
          "Una proposición compuesta usa conectores como ∧, ∨, ¬ y →.",
          "Para P ∧ Q solo es verdadero cuando ambos P y Q son verdaderos.",
          "Para P ∨ Q es verdadero cuando al menos uno de los dos es verdadero.",
          "Para ¬P se invierte el valor de P en cada fila de la tabla.",
          "Evalúa primero las negaciones, luego las conjunciones, luego las disyunciones.",
          "Usa paréntesis para eliminar ambigüedad en expresiones complejas."
        ]
      },
      {
        level: "avanzado",
        title: "Tautologías, contradicciones y contingencias",
        lines: [
          "Una tautología es una expresión que siempre es verdadera sin importar los valores.",
          "Una contradicción es una expresión que siempre es falsa en todas las filas.",
          "Una contingencia es una expresión que puede ser verdadera o falsa según los valores.",
          "P ∨ ¬P es siempre una tautología, conocida como tercero excluido.",
          "P ∧ ¬P es siempre una contradicción, imposibilidad lógica.",
          "Para identificarlas, construye la tabla completa y observa la última columna."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Tabla de Verdad</text>
        <rect x="40" y="40" width="220" height="140" fill="white" stroke="#333" stroke-width="1.5" rx="4"/>
        <line x1="40" y1="65" x2="260" y2="65" stroke="#333" stroke-width="1"/>
        <text x="70" y="58" font-family="Arial" font-size="11" fill="#333" font-weight="bold">P</text>
        <text x="110" y="58" font-family="Arial" font-size="11" fill="#333" font-weight="bold">Q</text>
        <text x="165" y="58" font-family="Arial" font-size="11" fill="#333" font-weight="bold">P→Q</text>
        <text x="225" y="58" font-family="Arial" font-size="11" fill="#333" font-weight="bold">¬Q→¬P</text>
        <text x="70" y="85" font-family="Arial" font-size="11" fill="#2563eb">V</text>
        <text x="110" y="85" font-family="Arial" font-size="11" fill="#2563eb">V</text>
        <text x="165" y="85" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">V</text>
        <text x="225" y="85" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">V</text>
        <text x="70" y="105" font-family="Arial" font-size="11" fill="#2563eb">V</text>
        <text x="110" y="105" font-family="Arial" font-size="11" fill="#2563eb">F</text>
        <text x="165" y="105" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">F</text>
        <text x="225" y="105" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">F</text>
        <text x="70" y="125" font-family="Arial" font-size="11" fill="#2563eb">F</text>
        <text x="110" y="125" font-family="Arial" font-size="11" fill="#2563eb">V</text>
        <text x="165" y="125" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">V</text>
        <text x="225" y="125" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">V</text>
        <text x="70" y="145" font-family="Arial" font-size="11" fill="#2563eb">F</text>
        <text x="110" y="145" font-family="Arial" font-size="11" fill="#2563eb">F</text>
        <text x="165" y="145" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">V</text>
        <text x="225" y="145" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">V</text>
        <text x="150" y="178" font-family="Arial" font-size="10" fill="#8b5cf6" text-anchor="middle" font-weight="bold">P→Q ≡ ¬Q→¬P (contrapositiva)</text>
      </svg>`
    ],
    exercises: [
      {
        id: 10,
        question: "En una tabla de verdad con 3 variables, ¿cuántas filas tiene?",
        options: ["6", "9", "8", "12"],
        correctIndex: 2,
        explanation: "Con n variables hay 2^n filas. Con 3 variables: 2³ = 8 filas posibles.",
        difficulty: "basico"
      },
      {
        id: 11,
        question: "¿Cuándo es verdadero el condicional P → Q?",
        options: [
          "Cuando P y Q son ambos verdaderos",
          "Cuando P es falso y Q es verdadero",
          "Cuando Q es verdadero sin importar P",
          "En todos los casos excepto cuando P es verdadero y Q es falso"
        ],
        correctIndex: 3,
        explanation: "Un condicional solo es falso cuando la hipótesis es verdadera y la conclusión es falsa. En los demás casos es verdadero.",
        difficulty: "intermedio"
      },
      {
        id: 12,
        question: "¿Cuál es el valor de verdad de (P ∨ Q) ∧ (¬P ∨ ¬Q) cuando P = V y Q = F?",
        options: ["Falso", "Indeterminado", "Depende del dominio", "Verdadero"],
        correctIndex: 3,
        explanation: "P ∨ Q = V ∨ F = V. ¬P ∨ ¬Q = F ∨ V = V. Por lo tanto V ∧ V = V. Ambas partes son verdaderas.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "logica-condicional",
    tip: "La única forma de que 'si P entonces Q' sea falsa es cuando P es verdadero y Q es falso. No confundas con la recíproca.",
    theory: [
      {
        level: "basico",
        title: "Enunciado condicional",
        lines: [
          "Un condicional se escribe P → Q y se lee 'si P entonces Q'.",
          "P es la hipótesis (antecedente) y Q es la conclusión (consecuente).",
          "P → Q solo es falso cuando P es verdadero y Q es falso.",
          "Si la hipótesis es falsa, el condicional es verdadero automáticamente.",
          "Ejemplo: 'Si llueve, entonces mojado' solo es falso si llueve y no se moja.",
          "Un condicional no afirma que P cause Q, solo establece una relación lógica."
        ]
      },
      {
        level: "intermedio",
        title: "Contrapositiva, recíproca e inversa",
        lines: [
          "La recíproca de P → Q es Q → P, que no es equivalente al original.",
          "La inversa de P → Q es ¬P → ¬Q, tampoco es equivalente al original.",
          "La contrapositiva de P → Q es ¬Q → ¬P, y sí es equivalente al original.",
          "P → Q ≡ ¬Q → ¬P siempre tienen la misma tabla de verdad.",
          "La recíproca y la inversa son equivalentes entre sí, pero no con el original.",
          "Muchos errores en el examen vienen de confundir recíproca con contrapositiva."
        ]
      },
      {
        level: "avanzado",
        title: "Equivalencias y aplicaciones",
        lines: [
          "P → Q es equivalente a ¬P ∨ Q, una forma muy útil para simplificar.",
          "¬(P → Q) equivale a P ∧ ¬Q, la única situación donde el condicional falla.",
          "Para demostrar equivalencia, compara las tablas de verdad de ambas expresiones.",
          "(P → Q) ∧ (Q → P) equivale a P ↔ Q, que es el bicondicional.",
          "En problemas del examen, convierte condicionales a forma disyuntiva primero.",
          "Practica reconociendo equivalentes sin construir tablas de verdad completas."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Lógica Condicional</text>
        <rect x="30" y="50" width="100" height="40" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2" rx="6"/>
        <text x="80" y="75" font-family="Arial" font-size="13" fill="#2563eb" text-anchor="middle" font-weight="bold">P → Q</text>
        <rect x="165" y="50" width="110" height="40" fill="#16a34a" fill-opacity="0.15" stroke="#16a34a" stroke-width="2" rx="6"/>
        <text x="220" y="75" font-family="Arial" font-size="13" fill="#16a34a" text-anchor="middle" font-weight="bold">¬Q → ¬P</text>
        <text x="140" y="65" font-family="Arial" font-size="14" fill="#333" text-anchor="middle" font-weight="bold">≡</text>
        <text x="80" y="108" font-family="Arial" font-size="10" fill="#333" text-anchor="middle">Original</text>
        <text x="220" y="108" font-family="Arial" font-size="10" fill="#333" text-anchor="middle">Contrapositiva ✓</text>
        <rect x="30" y="125" width="100" height="40" fill="#dc2626" fill-opacity="0.15" stroke="#dc2626" stroke-width="2" rx="6"/>
        <text x="80" y="150" font-family="Arial" font-size="13" fill="#dc2626" text-anchor="middle" font-weight="bold">Q → P</text>
        <text x="80" y="185" font-family="Arial" font-size="10" fill="#dc2626" text-anchor="middle">Recíproca ✗</text>
        <rect x="165" y="125" width="110" height="40" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="2" rx="6"/>
        <text x="220" y="150" font-family="Arial" font-size="13" fill="#f59e0b" text-anchor="middle" font-weight="bold">¬P → ¬Q</text>
        <text x="220" y="185" font-family="Arial" font-size="10" fill="#f59e0b" text-anchor="middle">Inversa ✗</text>
      </svg>`
    ],
    exercises: [
      {
        id: 13,
        question: "¿Cuál es la contrapositiva de 'Si llueve, entonces la calle está mojada'?",
        options: [
          "Si no llueve, la calle no está mojada",
          "Si la calle está mojada, entonces llueve",
          "Si la calle no está mojada, entonces no llueve",
          "Llueve y la calle está mojada"
        ],
        correctIndex: 2,
        explanation: "La contrapositiva niega la conclusión y la convierte en hipótesis: 'Si la calle no está mojada, entonces no llueve'.",
        difficulty: "basico"
      },
      {
        id: 14,
        question: "¿Cuál es la única situación donde P → Q es falsa?",
        options: [
          "P es verdadero y Q es falso",
          "P es falso y Q es verdadero",
          "P y Q son ambos verdaderos",
          "P y Q son ambos falsos"
        ],
        correctIndex: 0,
        explanation: "Un condicional solo es falso cuando el antecedente es verdadero y el consecuente es falso. Es la única excepción.",
        difficulty: "intermedio"
      },
      {
        id: 15,
        question: "¿Qué expresión es equivalente a P → Q?",
        options: ["¬P ∨ Q", "P ∧ ¬Q", "¬P ∧ Q", "P ∨ ¬Q"],
        correctIndex: 0,
        explanation: "P → Q equivale a ¬P ∨ Q: cuando P es falso el condicional es verdadero, y cuando P es verdadero se necesita Q verdadero.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "logica-bicondicional",
    tip: "P ↔ Q es verdadero solo cuando P y Q tienen el mismo valor de verdad. Verifica ambos sentidos de la implicación.",
    theory: [
      {
        level: "basico",
        title: "Definición de bicondicional",
        lines: [
          "El bicondicional P ↔ Q se lee 'P si y solo si Q'.",
          "Es verdadero cuando P y Q tienen el mismo valor de verdad.",
          "Es falso cuando uno es verdadero y el otro es falso.",
          "P ↔ Q equivale a (P → Q) ∧ (Q → P).",
          "También equivale a (P ∧ Q) ∨ (¬P ∧ ¬Q).",
          "En el examen, verifica ambos sentidos de la implicación para confirmar."
        ]
      },
      {
        level: "intermedio",
        title: "Equivalencia lógica",
        lines: [
          "P ↔ Q establece que P y Q son lógicamente equivalentes.",
          "Para verificarlo, construye la tabla de verdad de P ↔ Q.",
          "Si la columna resultante es toda verdadera, las expresiones son equivalentes.",
          "Ejemplo: ¬(¬P) ↔ P es una tautología por la doble negación.",
          "Ejemplo: (P ∧ Q) ↔ (Q ∧ P) es siempre verdadero por conmutativa.",
          "Si una columna tiene al menos un F, P y Q no son equivalentes."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos con bicondicional",
        lines: [
          "Para problemas complejos, descompón el bicondicional en dos condicionales.",
          "Verifica cada condicional por separado usando la contrapositiva.",
          "Recuerda que P ↔ Q ≡ (P → Q) ∧ (¬P → ¬Q).",
          "Usa tablas de verdad cuando la expresión tenga más de dos variables.",
          "Muchos problemas del examen combinan biconditionales con cuantificadores.",
          "Practica con (P ↔ Q) ↔ (¬P ↔ ¬Q), que es siempre una tautología."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Lógica Bicondicional</text>
        <circle cx="100" cy="95" r="45" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="200" cy="95" r="45" fill="#dc2626" fill-opacity="0.15" stroke="#dc2626" stroke-width="2.5"/>
        <text x="100" y="100" font-family="Arial" font-size="18" fill="#2563eb" text-anchor="middle" font-weight="bold">P</text>
        <text x="200" y="100" font-family="Arial" font-size="18" fill="#dc2626" text-anchor="middle" font-weight="bold">Q</text>
        <line x1="145" y1="85" x2="155" y2="85" stroke="#16a34a" stroke-width="2.5"/>
        <polygon points="155,82 162,85 155,88" fill="#16a34a"/>
        <line x1="155" y1="105" x2="145" y2="105" stroke="#16a34a" stroke-width="2.5"/>
        <polygon points="145,102 138,105 145,108" fill="#16a34a"/>
        <text x="150" y="155" font-family="Arial" font-size="14" fill="#8b5cf6" text-anchor="middle" font-weight="bold">P ↔ Q</text>
        <text x="80" y="175" font-family="Arial" font-size="10" fill="#16a34a" text-anchor="middle">V→V=V</text>
        <text x="220" y="175" font-family="Arial" font-size="10" fill="#16a34a" text-anchor="middle">F→F=V</text>
        <text x="80" y="190" font-family="Arial" font-size="10" fill="#dc2626" text-anchor="middle">V→F=F</text>
        <text x="220" y="190" font-family="Arial" font-size="10" fill="#dc2626" text-anchor="middle">F→V=F</text>
      </svg>`
    ],
    exercises: [
      {
        id: 16,
        question: "¿Cuándo es verdadero P ↔ Q?",
        options: [
          "Cuando P es verdadero y Q es falso",
          "Cuando ambos son verdaderos",
          "Cuando P y Q tienen el mismo valor de verdad",
          "Cuando al menos uno es verdadero"
        ],
        correctIndex: 2,
        explanation: "El bicondicional es verdadero cuando ambos componentes tienen el mismo valor: ambos V o ambos F.",
        difficulty: "basico"
      },
      {
        id: 17,
        question: "¿Cuál es la secuencia de valores de verdad de P ↔ Q para las combinaciones VV, VF, FV, FF?",
        options: ["V, V, F, F", "F, V, V, F", "V, F, F, V", "F, F, V, V"],
        correctIndex: 2,
        explanation: "Las combinaciones (V,V) y (F,F) dan V, mientras que (V,F) y (F,V) dan F. Resultado: V, F, F, V.",
        difficulty: "intermedio"
      },
      {
        id: 18,
        question: "¿Cuál de las siguientes expresiones es una tautología?",
        options: ["P ↔ ¬P", "(P ↔ Q) ↔ (¬P ↔ ¬Q)", "P ∧ ¬Q", "P ∨ ¬Q"],
        correctIndex: 1,
        explanation: "Si P y Q coinciden, ¬P y ¬Q también coinciden, y viceversa. Ambos lados del bicondicional siempre tienen el mismo valor.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "cuantificadores-logica",
    tip: "La negación de 'todo X cumple P' es 'existe un X que no cumple P', y viceversa. Cambia siempre el cuantificador al negar.",
    theory: [
      {
        level: "basico",
        title: "Cuantificador universal (∀)",
        lines: [
          "El cuantificador universal ∀ se lee 'para todo' o 'todo'.",
          "∀x P(x) significa que P(x) es verdadero para todo x del dominio.",
          "Para refutar ∀x P(x), basta con encontrar un solo contraejemplo.",
          "Ejemplo: ∀n ∈ ℕ, n² ≥ 0 es verdadero para todos los naturales.",
          "Ejemplo: ∀n ∈ ℕ, n es par es falso porque 1 no es par.",
          "En el examen, distingue entre 'para todo' y 'existe al menos uno'."
        ]
      },
      {
        level: "intermedio",
        title: "Cuantificador existencial (∃)",
        lines: [
          "El cuantificador existencial ∃ se lee 'existe' o 'existe al menos uno'.",
          "∃x P(x) significa que hay al menos un x del dominio que cumple P(x).",
          "Para demostrar ∃x P(x), basta con encontrar un solo ejemplo que funcione.",
          "Para refutar ∃x P(x), hay que mostrar que P(x) es falso para todo x.",
          "Ejemplo: ∃n ∈ ℕ, n² = 4 es verdadero porque 2² = 4.",
          "Ejemplo: ∃n ∈ ℕ, n² = 3 es falso porque ningún natural al cuadrado da 3."
        ]
      },
      {
        level: "avanzado",
        title: "Negación de cuantificadores",
        lines: [
          "La negación de ∀x P(x) es ∃x ¬P(x), cambia el cuantificador y niega P.",
          "La negación de ∃x P(x) es ∀x ¬P(x), mismo cambio pero en dirección opuesta.",
          "Regla mnemotécnica: negar cambia ∀ por ∃ y viceversa, y niega lo que sigue.",
          "Negación de 'todo estudiante aprueba': 'existe un estudiante que no aprueba'.",
          "Negación de 'existe un par primo': 'todo par no es primo' (o no existe par primo).",
          "Practica con doble negación: ¬(∀x ¬P(x)) ≡ ∃x P(x)."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Cuantificadores Lógicos</text>
        <text x="30" y="60" font-family="Arial" font-size="18" fill="#2563eb" font-weight="bold">∀</text>
        <text x="55" y="60" font-family="Arial" font-size="12" fill="#333">Para todo: todos cumplen</text>
        <circle cx="50" cy="90" r="12" fill="#2563eb" fill-opacity="0.3" stroke="#2563eb" stroke-width="1.5"/>
        <circle cx="85" cy="90" r="12" fill="#2563eb" fill-opacity="0.3" stroke="#2563eb" stroke-width="1.5"/>
        <circle cx="120" cy="90" r="12" fill="#2563eb" fill-opacity="0.3" stroke="#2563eb" stroke-width="1.5"/>
        <circle cx="155" cy="90" r="12" fill="#2563eb" fill-opacity="0.3" stroke="#2563eb" stroke-width="1.5"/>
        <text x="50" y="94" font-family="Arial" font-size="10" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="85" y="94" font-family="Arial" font-size="10" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="120" y="94" font-family="Arial" font-size="10" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="155" y="94" font-family="Arial" font-size="10" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="30" y="140" font-family="Arial" font-size="18" fill="#dc2626" font-weight="bold">∃</text>
        <text x="55" y="140" font-family="Arial" font-size="12" fill="#333">Existe: al menos uno cumple</text>
        <circle cx="50" cy="165" r="12" fill="#dc2626" fill-opacity="0.3" stroke="#dc2626" stroke-width="1.5"/>
        <circle cx="85" cy="165" r="12" fill="#f8fafc" stroke="#ccc" stroke-width="1.5"/>
        <circle cx="120" cy="165" r="12" fill="#f8fafc" stroke="#ccc" stroke-width="1.5"/>
        <circle cx="155" cy="165" r="12" fill="#f8fafc" stroke="#ccc" stroke-width="1.5"/>
        <text x="50" y="169" font-family="Arial" font-size="10" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="85" y="169" font-family="Arial" font-size="10" fill="#999" text-anchor="middle">✗</text>
        <text x="120" y="169" font-family="Arial" font-size="10" fill="#999" text-anchor="middle">✗</text>
        <text x="155" y="169" font-family="Arial" font-size="10" fill="#999" text-anchor="middle">✗</text>
        <text x="200" y="80" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold">Negación:</text>
        <text x="200" y="105" font-family="Arial" font-size="10" fill="#333">¬(∀x P(x)) = ∃x ¬P(x)</text>
        <text x="200" y="130" font-family="Arial" font-size="10" fill="#333">¬(∃x P(x)) = ∀x ¬P(x)</text>
        <text x="200" y="160" font-family="Arial" font-size="10" fill="#8b5cf6" font-weight="bold">Cambia cuantificador</text>
        <text x="200" y="175" font-family="Arial" font-size="10" fill="#8b5cf6" font-weight="bold">y niega la propiedad</text>
      </svg>`
    ],
    exercises: [
      {
        id: 19,
        question: "La expresión ∀x ∈ ℕ, x + 0 = x es:",
        options: ["Falsa", "Solo verdadera para algunos", "Verdadera", "Indeterminada"],
        correctIndex: 2,
        explanation: "Sumar 0 a cualquier número natural no cambia su valor. Es una propiedad universal del cero aditivo.",
        difficulty: "basico"
      },
      {
        id: 20,
        question: "¿Cuál es un contraejemplo para refutar 'todo número natural es primo'?",
        options: ["2", "3", "1", "5"],
        correctIndex: 2,
        explanation: "El 1 no es primo porque, por definición, un primo debe tener exactamente dos divisores positivos distintos.",
        difficulty: "intermedio"
      },
      {
        id: 21,
        question: "¿Cuál es la negación correcta de 'existe un número entero par que es primo'?",
        options: [
          "Todo número entero par no es primo",
          "No existe ningún número primo",
          "Todo número primo es par",
          "Existe un primo que no es par"
        ],
        correctIndex: 0,
        explanation: "La negación de ∃x P(x) es ∀x ¬P(x): 'existe un entero par primo' se niega como 'todo entero par no es primo'.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "paradojas-logicas",
    tip: "En el examen, identifica la auto-referencia como fuente de la paradoja y busca la interpretación formal, no filosófica.",
    theory: [
      {
        level: "basico",
        title: "¿Qué es una paradoja lógica?",
        lines: [
          "Una paradoja es una afirmación que parece contradecirse a sí misma.",
          "No todas las paradojas son verdaderas contradicciones; muchas tienen solución.",
          "En exámenes, las paradojas se usan para evaluar razonamiento lógico.",
          "La paradoja del mentiroso: 'Esta frase es falsa' no puede ser V ni F.",
          "El examen busca que identifiques la estructura lógica, no la resuelvas filosóficamente.",
          "Reconocer una auto-referencia es el primer paso para analizar una paradoja."
        ]
      },
      {
        level: "intermedio",
        title: "Paradojas clásicas",
        lines: [
          "La paradoja del barbero: el barbero afeita a todos los que no se afeitan solos.",
          "Si el barbero se afeita a sí mismo, contradice la definición dada.",
          "La paradoja del mentiroso: 'Esta frase es falsa' no tiene valor consistente.",
          "La paradoja de Zenón del aquilea propone que Aquiles nunca alcanza a la tortuga.",
          "Estas paradojas comparten una estructura de auto-referencia o circularidad.",
          "En exámenes, las más frecuentes son la del mentiroso y la del barbero."
        ]
      },
      {
        level: "avanzado",
        title: "Resolución de paradojas en exámenes",
        lines: [
          "Russell resolvió su paradoja restringiendo los conjuntos auto-referentes.",
          "En lógica formal, se evitan las paradojas con axiomas que limitan la construcción.",
          "Para el examen, identifica si la paradoja depende de una definición ambigua.",
          "Muchas paradojas se resuelven notando que las premisas son inconsistentes.",
          "La paradoja del barbero se resuelve concluyendo que tal barbero no puede existir.",
          "En problemas de examen, busca la opción que señale la contradicción lógica."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Paradojas Lógicas</text>
        <ellipse cx="150" cy="90" rx="85" ry="35" fill="none" stroke="#8b5cf6" stroke-width="2.5"/>
        <text x="150" y="87" font-family="Arial" font-size="12" fill="#333" text-anchor="middle" font-weight="bold">"Esta frase es falsa"</text>
        <text x="150" y="102" font-family="Arial" font-size="9" fill="#8b5cf6" text-anchor="middle">↑ se refiere a sí misma ↑</text>
        <text x="65" y="55" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">Si es V → es F</text>
        <text x="235" y="55" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold" text-anchor="end">Si es F → es V</text>
        <path d="M 80 60 Q 60 80 80 100" fill="none" stroke="#dc2626" stroke-width="2"/>
        <path d="M 220 60 Q 240 80 220 100" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="150" y="150" font-family="Arial" font-size="11" fill="#f59e0b" text-anchor="middle" font-weight="bold">Contradicción: nunca tiene</text>
        <text x="150" y="165" font-family="Arial" font-size="11" fill="#f59e0b" text-anchor="middle" font-weight="bold">valor de verdad consistente</text>
        <text x="150" y="190" font-family="Arial" font-size="10" fill="#16a34a" text-anchor="middle">Auto-referencia → Paradoja</text>
      </svg>`
    ],
    exercises: [
      {
        id: 22,
        question: "¿Qué tipo de estructura lógica se identifica en la paradoja 'Esta frase es falsa'?",
        options: ["Razonamiento deductivo", "Analogía", "Auto-referencia", "Inducción"],
        correctIndex: 2,
        explanation: "La paradoja del mentiroso se basa en la auto-referencia: la frase habla de sí misma generando una contradicción.",
        difficulty: "basico"
      },
      {
        id: 23,
        question: "La paradoja del barbero establece que 'el barbero afeita a todos los que no se afeitan solos'. Si el barbero se afeita a sí mismo, entonces:",
        options: [
          "No hay ninguna contradicción",
          "Debería afeitarse solo",
          "Debería afeitarse también a otros",
          "Se contradice porque no debería afeitarse a sí mismo"
        ],
        correctIndex: 3,
        explanation: "Si el barbero se afeita a sí mismo, pertenece al grupo de quienes no se afeitan solos, por lo que no debería hacerlo.",
        difficulty: "intermedio"
      },
      {
        id: 24,
        question: "En un examen, la paradoja del barbero se resuelve mejor argumentando que:",
        options: [
          "El barbero puede afeitarse a otros sin problemas",
          "La definición del barbero es simplemente ambigua",
          "La paradoja no tiene ninguna solución lógica",
          "Tal barbero no puede existir sin generar contradicción"
        ],
        correctIndex: 3,
        explanation: "La resolución formal es que la existencia de tal barbero genera una contradicción, por lo tanto no puede existir.",
        difficulty: "avanzado"
      }
    ]
  }
];
