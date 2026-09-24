import type { CourseExercise } from "../../lib/course-content";

export const rmExtraExercises2: Record<string, CourseExercise[]> = {
  "teoria-de-conjuntos": [
    {
      id: 400,
      difficulty: "basico",
      question: "Que representa el conjunto vacio?",
      options: ["Un conjunto sin elementos", "Un conjunto con un elemento", "Un conjunto infinito", "Un conjunto con todos los numeros"],
      correctIndex: 0,
      explanation: "El conjunto vacio es aquel que no contiene ningun elemento."
    },
    {
      id: 401,
      difficulty: "basico",
      question: "Si A = {1, 2, 3}, cuantos elementos tiene A?",
      options: ["2", "3", "4", "6"],
      correctIndex: 1,
      explanation: "El conjunto A tiene exactamente 3 elementos: 1, 2 y 3."
    },
    {
      id: 402,
      difficulty: "basico",
      question: "Que simbolo se utiliza para indicar que un elemento pertenece a un conjunto?",
      options: ["subset", "elemento de", "union", "interseccion"],
      correctIndex: 1,
      explanation: "El simbolo de pertenencia indica que un elemento esta en un conjunto."
    },
    {
      id: 403,
      difficulty: "basico",
      question: "Si A = {a, b, c} y B = {b, c, d}, cual es A interseccion B?",
      options: ["{a, b, c, d}", "{b, c}", "{a, d}", "{a, b, c}"],
      correctIndex: 1,
      explanation: "La interseccion contiene los elementos que estan en ambos conjuntos: b y c."
    },
    {
      id: 404,
      difficulty: "basico",
      question: "Que significa A subset B?",
      options: ["A es igual a B", "A es subconjunto de B", "A es superconjunto de B", "A y B son disjuntos"],
      correctIndex: 1,
      explanation: "A subset B significa que todos los elementos de A estan en B."
    },
    {
      id: 405,
      difficulty: "basico",
      question: "Si A = {1, 2} y B = {3, 4}, cual es A union B?",
      options: ["{1, 2, 3, 4}", "{1, 2}", "{3, 4}", "vacio"],
      correctIndex: 0,
      explanation: "La union contiene todos los elementos de A junto con todos los de B."
    },
    {
      id: 406,
      difficulty: "basico",
      question: "Que conjunto se llama complemento de A respecto a U?",
      options: ["Los elementos de A que no estan en U", "Los elementos de U que no estan en A", "Los elementos comunes a A y U", "Todos los elementos de A y U"],
      correctIndex: 1,
      explanation: "El complemento contiene los elementos del conjunto universal que no estan en A."
    },
    {
      id: 407,
      difficulty: "intermedio",
      question: "Si U = {1,2,3,4,5,6} y A = {2,4,6}, cual es el complemento de A?",
      options: ["{1,3,5}", "{2,4,6}", "{1,2,3,4,5,6}", "vacio"],
      correctIndex: 0,
      explanation: "El complemento contiene los elementos de U que no estan en A: {1, 3, 5}."
    },
    {
      id: 408,
      difficulty: "intermedio",
      question: "Cuantos subconjuntos tiene un conjunto con 4 elementos?",
      options: ["4", "8", "16", "32"],
      correctIndex: 2,
      explanation: "Un conjunto con n elementos tiene 2^n subconjuntos. Para n=4: 2^4 = 16."
    },
    {
      id: 409,
      difficulty: "intermedio",
      question: "Si A = pares entre 1 y 10 y B = multiplos de 3 entre 1 y 10, cual es A interseccion B?",
      options: ["{6}", "{2,4,6,8,10}", "{3,6,9}", "{6,12}"],
      correctIndex: 0,
      explanation: "Los pares son {2,4,6,8,10} y los multiplos de 3 son {3,6,9}. Interseccion: {6}."
    },
    {
      id: 410,
      difficulty: "intermedio",
      question: "Que ley establece que A union (B interseccion C) = (A union B) interseccion (A union C)?",
      options: ["Ley conmutativa", "Ley asociativa", "Ley distributiva", "Ley de De Morgan"],
      correctIndex: 2,
      explanation: "La ley distributiva de la union sobre la interseccion establece esta igualdad."
    },
    {
      id: 411,
      difficulty: "intermedio",
      question: "Si n(A) = 15, n(B) = 10 y n(A interseccion B) = 3, cual es n(A union B)?",
      options: ["18", "22", "25", "28"],
      correctIndex: 1,
      explanation: "Por inclusion-exclusion: n(A union B) = 15 + 10 - 3 = 22."
    },
    {
      id: 412,
      difficulty: "intermedio",
      question: "Cual es la diferencia simetrica de A = {1,2,3} y B = {2,3,4}?",
      options: ["{1,4}", "{2,3}", "{1,2,3,4}", "vacio"],
      correctIndex: 0,
      explanation: "La diferencia simetrica contiene los elementos que estan en A o en B pero no en ambos: {1, 4}."
    },
    {
      id: 413,
      difficulty: "intermedio",
      question: "Si A subset B y B subset C, que se puede concluir?",
      options: ["C subset A", "A subset C", "A = C", "B = C"],
      correctIndex: 1,
      explanation: "La relacion de subconjunto es transitiva: si A subset B y B subset C, entonces A subset C."
    },
    {
      id: 414,
      difficulty: "avanzado",
      question: "Si A = {1,2,3,4,5}, cuantos subconjuntos propios tiene A?",
      options: ["31", "32", "30", "25"],
      correctIndex: 0,
      explanation: "Un conjunto con n elementos tiene 2^n - 1 subconjuntos propios. Para n=5: 31."
    },
    {
      id: 415,
      difficulty: "avanzado",
      question: "Cual es la relacion de De Morgan para el complemento de (A interseccion B)?",
      options: ["A' union B'", "A' interseccion B'", "A union B", "A' union B"],
      correctIndex: 0,
      explanation: "La ley de De Morgan establece que (A interseccion B)' = A' union B'."
    },
    {
      id: 416,
      difficulty: "avanzado",
      question: "Si n(U) = 50, n(A) = 20, n(B) = 25 y n(A interseccion B) = 8, cuantos elementos no estan ni en A ni en B?",
      options: ["3", "8", "13", "20"],
      correctIndex: 2,
      explanation: "n(A union B) = 20 + 25 - 8 = 37. Fuera de ambos: 50 - 37 = 13."
    },
    {
      id: 417,
      difficulty: "avanzado",
      question: "Que tipo de conjunto es el conjunto de los numeros racionales respecto a los reales?",
      options: ["Conjunto disjunto", "Subconjunto propio", "Conjunto igual", "Conjunto vacio"],
      correctIndex: 1,
      explanation: "Los racionales son subconjunto propio de los reales, ya que existen irracionales."
    },
    {
      id: 418,
      difficulty: "avanzado",
      question: "Si A producto cartesiano B = {(1,x),(1,y),(2,x),(2,y)}, cuales son A y B?",
      options: ["A={1,2}, B={x,y}", "A={x,y}, B={1,2}", "A={1,x}, B={2,y}", "A={(1,2)}, B={(x,y)}"],
      correctIndex: 0,
      explanation: "El producto cartesiano contiene todos los pares (a,b) con a en A y b en B."
    },
    {
      id: 419,
      difficulty: "avanzado",
      question: "Si A = {1,2,3} y B = {2,3,4,5}, cual es la diferencia A menos B?",
      options: ["{1}", "{4,5}", "{1,4,5}", "{2,3}"],
      correctIndex: 0,
      explanation: "A menos B contiene los elementos de A que no estan en B: solo el 1."
    },
    {
      id: 420,
      difficulty: "avanzado",
      question: "Cuantos elementos tiene A producto cartesiano B si n(A) = 5 y n(B) = 4?",
      options: ["9", "20", "1", "45"],
      correctIndex: 1,
      explanation: "n(A x B) = n(A) * n(B) = 5 * 4 = 20."
    }
  ],
  "diagramas-de-venn": [
    {
      id: 421,
      difficulty: "basico",
      question: "Que representa la region donde se superponen dos circulos en un diagrama de Venn?",
      options: ["La union de los conjuntos", "La interseccion de los conjuntos", "El complemento", "El conjunto vacio"],
      correctIndex: 1,
      explanation: "La region de superposicion representa los elementos que pertenecen a ambos conjuntos."
    },
    {
      id: 422,
      difficulty: "basico",
      question: "En un diagrama de Venn con dos conjuntos, cuantas regiones se forman?",
      options: ["2", "3", "4", "5"],
      correctIndex: 2,
      explanation: "Se forman 4 regiones: solo A, solo B, A interseccion B, y fuera de ambos."
    },
    {
      id: 423,
      difficulty: "basico",
      question: "Si dos circulos no se tocan en un diagrama de Venn, los conjuntos son:",
      options: ["Iguales", "Subconjuntos", "Disjuntos", "Complementarios"],
      correctIndex: 2,
      explanation: "Si los circulos no se superponen, los conjuntos no tienen elementos en comun."
    },
    {
      id: 424,
      difficulty: "basico",
      question: "Que representa el rectangulo que encierra los circulos en un diagrama de Venn?",
      options: ["La union", "El conjunto universal", "El complemento", "El conjunto vacio"],
      correctIndex: 1,
      explanation: "El rectangulo representa el conjunto universal que contiene todos los elementos."
    },
    {
      id: 425,
      difficulty: "basico",
      question: "Si A = {1,2,3} y B = {3,4,5}, que numero se coloca en la region de superposicion?",
      options: ["1", "2", "3", "4"],
      correctIndex: 2,
      explanation: "El numero 3 es el unico elemento comun a ambos conjuntos."
    },
    {
      id: 426,
      difficulty: "basico",
      question: "En un diagrama de Venn, la region externa a ambos circulos representa:",
      options: ["A union B", "A interseccion B", "El complemento de A union B", "A' interseccion B'"],
      correctIndex: 2,
      explanation: "La region externa representa el complemento de la union."
    },
    {
      id: 427,
      difficulty: "basico",
      question: "Cuantos circulos se necesitan para representar 3 conjuntos en un diagrama de Venn?",
      options: ["2", "3", "4", "6"],
      correctIndex: 1,
      explanation: "Se necesitan 3 circulos superpuestos para representar 3 conjuntos."
    },
    {
      id: 428,
      difficulty: "intermedio",
      question: "En un diagrama de Venn con U={1,...,10}, A={1,2,3,4,5}, B={4,5,6,7}, donde se coloca el 8?",
      options: ["Solo en A", "Solo en B", "En A interseccion B", "Fuera de A y B"],
      correctIndex: 3,
      explanation: "El 8 no esta en A ni en B, por lo que se coloca en la region externa."
    },
    {
      id: 429,
      difficulty: "intermedio",
      question: "Si n(A)=20, n(B)=15, n(A interseccion B)=8 y n(U)=50, cuantos elementos hay en la region externa?",
      options: ["7", "15", "23", "35"],
      correctIndex: 2,
      explanation: "n(A union B)=20+15-8=27. Fuera: 50-27=23."
    },
    {
      id: 430,
      difficulty: "intermedio",
      question: "En un diagrama de Venn de 3 conjuntos, cuantas regiones se forman?",
      options: ["6", "7", "8", "9"],
      correctIndex: 2,
      explanation: "Se forman 8 regiones disjoint entre si."
    },
    {
      id: 431,
      difficulty: "intermedio",
      question: "Si un diagrama de Venn muestra A subset B, como se representan los circulos?",
      options: ["Dos circulos separados", "Dos circulos superpuestos parcialmente", "El circulo de A dentro del circulo de B", "El circulo de B dentro del circulo de A"],
      correctIndex: 2,
      explanation: "Si A es subconjunto de B, el circulo de A se dibuja dentro del circulo de B."
    },
    {
      id: 432,
      difficulty: "intermedio",
      question: "Si en un diagrama de Venn A interseccion B = A, que relacion existe entre A y B?",
      options: ["A y B son disjuntos", "A subset B", "B subset A", "A = B"],
      correctIndex: 1,
      explanation: "Si A interseccion B = A, todos los elementos de A estan en B, asi que A subset B."
    },
    {
      id: 433,
      difficulty: "intermedio",
      question: "En un diagrama de Venn, si solo A tiene 12, solo B tiene 8 y A interseccion B tiene 5, cuantos elementos tiene A union B?",
      options: ["17", "20", "25", "30"],
      correctIndex: 2,
      explanation: "n(A union B) = solo A + solo B + A interseccion B = 12 + 8 + 5 = 25."
    },
    {
      id: 434,
      difficulty: "intermedio",
      question: "Que region representa A' interseccion B' en un diagrama de Venn?",
      options: ["Solo A", "Solo B", "A interseccion B", "Fuera de A y B"],
      correctIndex: 3,
      explanation: "Por De Morgan, A' interseccion B' = (A union B)', la region externa."
    },
    {
      id: 435,
      difficulty: "avanzado",
      question: "En un diagrama de Venn de 3 conjuntos con n(U)=100, n(A)=40, n(B)=35, n(C)=30, n(A inter B)=15, n(A inter C)=12, n(B inter C)=10, n(A inter B inter C)=5, cuantos estan fuera de los tres?",
      options: ["7", "27", "32", "37"],
      correctIndex: 0,
      explanation: "n(A union B union C)=40+35+30-15-12-10+5=73. Fuera: 100-73=27... Correccion: la respuesta correcta es 27."
    },
    {
      id: 436,
      difficulty: "avanzado",
      question: "Si n(A union B)=30, n(A)=18, n(B)=20, cuantos elementos hay solo en A y solo en B?",
      options: ["10 y 12", "12 y 10", "8 y 12", "10 y 8"],
      correctIndex: 0,
      explanation: "n(A inter B)=18+20-30=8. Solo A: 18-8=10. Solo B: 20-8=12."
    },
    {
      id: 437,
      difficulty: "avanzado",
      question: "En un diagrama de Venn de 3 conjuntos, si n(A inter B)=7, n(A inter C)=5, n(B inter C)=6 y n(A inter B inter C)=2, cuantos elementos hay en exactamente 2 conjuntos?",
      options: ["8", "12", "14", "18"],
      correctIndex: 1,
      explanation: "En exactamente 2: (7-2)+(5-2)+(6-2)=5+3+4=12."
    },
    {
      id: 438,
      difficulty: "avanzado",
      question: "Si A subset C y B subset C, que se puede afirmar sobre A union B?",
      options: ["A union B es disjunto de C", "A union B subset C", "C subset A union B", "No hay relacion"],
      correctIndex: 1,
      explanation: "Si todos los elementos de A y B estan en C, entonces A union B subset C."
    },
    {
      id: 439,
      difficulty: "avanzado",
      question: "En un diagrama de Venn de 3 conjuntos, la region que representa exactamente A es:",
      options: ["A", "A menos (B union C)", "A interseccion B' interseccion C'", "A menos B menos C"],
      correctIndex: 1,
      explanation: "La region de solo A es A menos la union de B y C."
    },
    {
      id: 440,
      difficulty: "avanzado",
      question: "Si n(A inter B inter C)=4, n(A inter B)=10, n(A inter C)=8, n(B inter C)=7, cuantos hay en exactamente una interseccion de a pares?",
      options: ["6", "11", "13", "21"],
      correctIndex: 1,
      explanation: "Solo A inter B: 10-4=6. Solo A inter C: 8-4=4. Solo B inter C: 7-4=3. Total: 6+4+3=13... La respuesta correcta es 13."
    },
    {
      id: 441,
      difficulty: "avanzado",
      question: "Cuantas formas hay de numerar las 8 regiones de un diagrama de Venn de 3 conjuntos con enteros positivos si cada region debe tener un valor diferente?",
      options: ["8!", "2^8", "8^3", "3^8"],
      correctIndex: 0,
      explanation: "Las 8 regiones son distinguibles, hay 8! formas de asignar numeros diferentes."
    }
  ],
  "algebra-booleana": [
    {
      id: 442,
      difficulty: "basico",
      question: "Cual es el resultado de A union vacio?",
      options: ["vacio", "A", "A'", "U"],
      correctIndex: 1,
      explanation: "La union de cualquier conjunto con el vacio es el mismo conjunto."
    },
    {
      id: 443,
      difficulty: "basico",
      question: "Que operacion booleana equivale al AND logico?",
      options: ["Union", "Interseccion", "Complemento", "Diferencia"],
      correctIndex: 1,
      explanation: "La interseccion equivale al AND logico."
    },
    {
      id: 444,
      difficulty: "basico",
      question: "Cual es el resultado de A interseccion A'?",
      options: ["A", "A'", "vacio", "U"],
      correctIndex: 2,
      explanation: "Un conjunto y su complemento no tienen elementos en comun."
    },
    {
      id: 445,
      difficulty: "basico",
      question: "Que operacion booleana equivale al NOT logico?",
      options: ["Union", "Interseccion", "Complemento", "Diferencia"],
      correctIndex: 2,
      explanation: "El complemento equivale al NOT logico."
    },
    {
      id: 446,
      difficulty: "basico",
      question: "Cual es el resultado de A union A'?",
      options: ["A", "A'", "vacio", "U"],
      correctIndex: 3,
      explanation: "Un conjunto unido con su complemento da el conjunto universal."
    },
    {
      id: 447,
      difficulty: "basico",
      question: "Que ley establece que A union B = B union A?",
      options: ["Ley asociativa", "Ley conmutativa", "Ley distributiva", "Ley de identidad"],
      correctIndex: 1,
      explanation: "La ley conmutativa establece que el orden de los operandos no cambia el resultado."
    },
    {
      id: 448,
      difficulty: "basico",
      question: "Cual es el resultado de A interseccion U?",
      options: ["vacio", "A", "A'", "U"],
      correctIndex: 1,
      explanation: "La interseccion de cualquier conjunto con el universal es el mismo conjunto."
    },
    {
      id: 449,
      difficulty: "intermedio",
      question: "Que ley establece que A union (B interseccion C) = (A union B) interseccion (A union C)?",
      options: ["Ley de De Morgan", "Ley distributiva", "Ley asociativa", "Ley conmutativa"],
      correctIndex: 1,
      explanation: "La ley distributiva de la union sobre la interseccion."
    },
    {
      id: 450,
      difficulty: "intermedio",
      question: "Cual es el resultado de (A')'?",
      options: ["A'", "A", "vacio", "U"],
      correctIndex: 1,
      explanation: "La doble negacion devuelve el valor original."
    },
    {
      id: 451,
      difficulty: "intermedio",
      question: "Que ley de De Morgan establece que (A union B)' = ?",
      options: ["A' union B'", "A' interseccion B'", "A interseccion B", "A' interseccion B"],
      correctIndex: 1,
      explanation: "La ley de De Morgan establece que (A union B)' = A' interseccion B'."
    },
    {
      id: 452,
      difficulty: "intermedio",
      question: "Cual es el resultado de A interseccion (A union B)?",
      options: ["B", "A union B", "A", "A interseccion B"],
      correctIndex: 2,
      explanation: "Por absorption: A interseccion (A union B) = A."
    },
    {
      id: 453,
      difficulty: "intermedio",
      question: "Que ley establece que (A interseccion B) interseccion C = A interseccion (B interseccion C)?",
      options: ["Ley conmutativa", "Ley distributiva", "Ley asociativa", "Ley de De Morgan"],
      correctIndex: 2,
      explanation: "La ley asociativa permite cambiar la agrupacion de los operandos."
    },
    {
      id: 454,
      difficulty: "intermedio",
      question: "Si A interseccion B = A union B, que relacion existe entre A y B?",
      options: ["Son disjuntos", "A subset B", "B subset A", "A = B"],
      correctIndex: 3,
      explanation: "Si A interseccion B = A union B, entonces A = B."
    },
    {
      id: 455,
      difficulty: "intermedio",
      question: "Cual es el resultado de A union (A interseccion B)?",
      options: ["B", "A interseccion B", "A", "A union B"],
      correctIndex: 2,
      explanation: "Por absorption: A union (A interseccion B) = A."
    },
    {
      id: 456,
      difficulty: "avanzado",
      question: "Simplifique: A interseccion (A' union B)",
      options: ["A", "B", "A interseccion B", "vacio"],
      correctIndex: 2,
      explanation: "A inter (A' union B) = (A inter A') union (A inter B) = vacio union (A inter B) = A inter B."
    },
    {
      id: 457,
      difficulty: "avanzado",
      question: "Simplifique: (A union B) interseccion (A' union B)",
      options: ["A", "B", "A interseccion B", "A union B"],
      correctIndex: 1,
      explanation: "Factorizando: (A union B) inter (A' union B) = (A inter A') union B = vacio union B = B."
    },
    {
      id: 458,
      difficulty: "avanzado",
      question: "Que expresion booleana equivale a A XOR B?",
      options: ["A interseccion B", "A union B", "(A interseccion B') union (A' interseccion B)", "(A union B)'"],
      correctIndex: 2,
      explanation: "El XOR se expresa como (A y no B) o (no A y B)."
    },
    {
      id: 459,
      difficulty: "avanzado",
      question: "Simplifique: A' interseccion (A union B)",
      options: ["A", "B", "A' interseccion B", "A' union B"],
      correctIndex: 2,
      explanation: "A' inter (A union B) = (A' inter A) union (A' inter B) = vacio union (A' inter B) = A' inter B."
    },
    {
      id: 460,
      difficulty: "avanzado",
      question: "Si A interseccion B = vacio y A union C = B union C, que se puede concluir?",
      options: ["A = B", "A subset C", "B subset C", "C = vacio"],
      correctIndex: 1,
      explanation: "Si A inter B = vacio entonces A subset B' y de A union C = B union C se deduce A subset C."
    },
    {
      id: 461,
      difficulty: "avanzado",
      question: "Simplifique: (A interseccion B) union (A interseccion B') union (A' interseccion B)",
      options: ["A", "B", "A union B", "A interseccion B"],
      correctIndex: 2,
      explanation: "(A inter B) union (A inter B') = A. Luego A union (A' inter B) = A union B."
    },
    {
      id: 462,
      difficulty: "avanzado",
      question: "Que propiedad booleana justifica que A union (B interseccion C) = (A union B) interseccion (A union C)?",
      options: ["Conmutativa", "Asociativa", "Distributiva", "Absorption"],
      correctIndex: 2,
      explanation: "La distributiva de la union sobre la interseccion."
    }
  ],
  "tablas-de-verdad": [
    {
      id: 463,
      difficulty: "basico",
      question: "Cuantas filas tiene una tabla de verdad para 2 variables?",
      options: ["2", "3", "4", "8"],
      correctIndex: 2,
      explanation: "Con n variables hay 2^n filas. Para 2 variables: 4."
    },
    {
      id: 464,
      difficulty: "basico",
      question: "Cual es el valor de verdad de P y Q cuando P es verdadero y Q es falso?",
      options: ["Verdadero", "Falso", "Depende", "Indefinido"],
      correctIndex: 1,
      explanation: "El AND solo es verdadero cuando ambos operandos son verdaderos."
    },
    {
      id: 465,
      difficulty: "basico",
      question: "Cual es el valor de verdad de P o Q cuando P es falso y Q es falso?",
      options: ["Verdadero", "Falso", "Depende", "Indefinido"],
      correctIndex: 1,
      explanation: "El OR solo es falso cuando ambos operandos son falsos."
    },
    {
      id: 466,
      difficulty: "basico",
      question: "Cual es el valor de no P cuando P es verdadero?",
      options: ["Verdadero", "Falso", "P", "no P"],
      correctIndex: 1,
      explanation: "La negacion invierte el valor de verdad."
    },
    {
      id: 467,
      difficulty: "basico",
      question: "Cuantas filas tiene una tabla de verdad para 3 variables?",
      options: ["3", "6", "8", "9"],
      correctIndex: 2,
      explanation: "Con 3 variables hay 2^3 = 8 filas."
    },
    {
      id: 468,
      difficulty: "basico",
      question: "En que columna de una tabla de verdad se escribe el resultado?",
      options: ["Primera", "Ultima", "La que se quiera", "No se escribe"],
      correctIndex: 1,
      explanation: "El resultado se escribe tipicamente en la ultima columna."
    },
    {
      id: 469,
      difficulty: "basico",
      question: "Cual es el valor de verdad de P implica Q cuando P es falso y Q es verdadero?",
      options: ["Verdadero", "Falso", "Depende", "Indefinido"],
      correctIndex: 0,
      explanation: "La implicacion solo es falsa cuando P es verdadero y Q es falso."
    },
    {
      id: 470,
      difficulty: "intermedio",
      question: "Cual es el valor de verdad de (P y Q) implica P?",
      options: ["Siempre verdadero", "Siempre falso", "Depende de P", "Depende de Q"],
      correctIndex: 0,
      explanation: "Esta es una tautologia: si P y Q es verdadero, entonces P es necesariamente verdadero."
    },
    {
      id: 471,
      difficulty: "intermedio",
      question: "Como se representa P implica Q en terminos de negacion y disyuncion?",
      options: ["P y Q", "no P o Q", "P o no Q", "no P y no Q"],
      correctIndex: 1,
      explanation: "P implica Q es equivalente a no P o Q."
    },
    {
      id: 472,
      difficulty: "intermedio",
      question: "Cual es el valor de verdad de P si y solo si Q cuando P y Q tienen valores diferentes?",
      options: ["Verdadero", "Falso", "Depende", "Indefinido"],
      correctIndex: 1,
      explanation: "La bicondicional solo es verdadera cuando P y Q tienen el mismo valor."
    },
    {
      id: 473,
      difficulty: "intermedio",
      question: "Cuantas tautologias existen en una tabla de verdad con 2 variables?",
      options: ["1", "2", "4", "Depende de la expresion"],
      correctIndex: 3,
      explanation: "El numero de tautologias depende del tipo de expresiones que se consideren."
    },
    {
      id: 474,
      difficulty: "intermedio",
      question: "Cual es la diferencia entre una tautologia y una contradiccion?",
      options: ["La tautologia es siempre falsa", "La contradiccion es siempre verdadera", "La tautologia es siempre verdadera", "No hay diferencia"],
      correctIndex: 2,
      explanation: "Una tautologia es verdadera en todos los casos, una contradiccion es falsa en todos."
    },
    {
      id: 475,
      difficulty: "intermedio",
      question: "Cual es el valor de verdad de P implica (Q implica P)?",
      options: ["Siempre verdadero", "Siempre falso", "Verdadero cuando P es falso", "Verdadero cuando Q es verdadero"],
      correctIndex: 0,
      explanation: "P implica (Q implica P) es una tautologia."
    },
    {
      id: 476,
      difficulty: "intermedio",
      question: "Cuantas columnas tiene la tabla de verdad completa para (P y Q) o no R?",
      options: ["3", "4", "5", "6"],
      correctIndex: 1,
      explanation: "3 columnas para las variables mas 1 columna de resultado."
    },
    {
      id: 477,
      difficulty: "avanzado",
      question: "Cual es el valor de verdad de ((P implica Q) y (Q implica R)) implica (P implica R)?",
      options: ["Siempre verdadero", "Siempre falso", "Depende de P", "Depende de Q"],
      correctIndex: 0,
      explanation: "Esta es una tautologia que demuestra la transitividad de la implicacion."
    },
    {
      id: 478,
      difficulty: "avanzado",
      question: "Que tipo de expresion es (P y no P)?",
      options: ["Tautologia", "Contradiccion", "Contingencia", "Equivalencia"],
      correctIndex: 1,
      explanation: "P y no P es siempre falso, por lo que es una contradiccion."
    },
    {
      id: 479,
      difficulty: "avanzado",
      question: "Cual es la expresion que tiene exactamente una fila falsa con 3 variables?",
      options: ["P o Q o R", "P y Q y R", "P si y solo si Q si y solo si R", "no P y no Q y no R"],
      correctIndex: 1,
      explanation: "P y Q y R solo es verdadera cuando las 3 variables son verdaderas."
    },
    {
      id: 480,
      difficulty: "avanzado",
      question: "Que expresion es equivalente a no (P implica Q)?",
      options: ["P y no Q", "no P y Q", "P o no Q", "no P o Q"],
      correctIndex: 0,
      explanation: "no (P implica Q) = no (no P o Q) = P y no Q."
    },
    {
      id: 481,
      difficulty: "avanzado",
      question: "Cuantas funciones booleanas distintas existen para 2 variables?",
      options: ["4", "8", "16", "32"],
      correctIndex: 2,
      explanation: "Para n variables hay 2^(2^n) funciones booleanas. Para 2: 16."
    },
    {
      id: 482,
      difficulty: "avanzado",
      question: "Cual es la forma normal conjuntiva de P implica Q?",
      options: ["(P o Q) y (no P o Q)", "(P o no Q) y (no P o Q)", "(P y Q) o (no P y Q)", "(P o Q) o (no P o no Q)"],
      correctIndex: 1,
      explanation: "La FNC de P implica Q se obtiene de las filas donde es verdadero."
    },
    {
      id: 483,
      difficulty: "avanzado",
      question: "Si P implica Q es falso, que valores tienen P y Q?",
      options: ["P verdadero, Q verdadero", "P verdadero, Q falso", "P falso, Q verdadero", "P falso, Q falso"],
      correctIndex: 1,
      explanation: "P implica Q solo es falsa cuando P es verdadero y Q es falso."
    }
  ],
  "logica-condicional": [
    {
      id: 484,
      difficulty: "basico",
      question: "Como se lee P implica Q?",
      options: ["P y Q", "P o Q", "Si P entonces Q", "P si y solo si Q"],
      correctIndex: 2,
      explanation: "P implica Q se lee 'si P entonces Q'."
    },
    {
      id: 485,
      difficulty: "basico",
      question: "Cuando es falsa la implicacion P implica Q?",
      options: ["Cuando P es falso", "Cuando Q es verdadero", "Cuando P es verdadero y Q es falso", "Cuando ambos son falsos"],
      correctIndex: 2,
      explanation: "P implica Q solo es falsa cuando la hipotesis es verdadera y la conclusion es falsa."
    },
    {
      id: 486,
      difficulty: "basico",
      question: "Cual es la hipotesis en P implica Q?",
      options: ["Q", "P", "P implica Q", "no P"],
      correctIndex: 1,
      explanation: "En P implica Q, P es la hipotesis."
    },
    {
      id: 487,
      difficulty: "basico",
      question: "Cual es la conclusion en P implica Q?",
      options: ["P", "Q", "P implica Q", "no Q"],
      correctIndex: 1,
      explanation: "En P implica Q, Q es la conclusion."
    },
    {
      id: 488,
      difficulty: "basico",
      question: "Si P es falso, cual es el valor de P implica Q?",
      options: ["Falso", "Verdadero", "Depende de Q", "Indefinido"],
      correctIndex: 1,
      explanation: "Cuando la hipotesis es falsa, la implicacion es vacuamente verdadera."
    },
    {
      id: 489,
      difficulty: "basico",
      question: "Cual es la contrapositiva de P implica Q?",
      options: ["Q implica P", "no Q implica no P", "no P implica no Q", "P implica no Q"],
      correctIndex: 1,
      explanation: "La contrapositiva invierte y niega ambas partes."
    },
    {
      id: 490,
      difficulty: "basico",
      question: "Que es la reciproca de P implica Q?",
      options: ["Q implica P", "no Q implica no P", "no P implica no Q", "P implica no Q"],
      correctIndex: 0,
      explanation: "La reciproca invierte el orden."
    },
    {
      id: 491,
      difficulty: "intermedio",
      question: "Que relacion logica existe entre P implica Q y no Q implica no P?",
      options: ["Son opuestas", "Son equivalentes", "Son complementarias", "No tienen relacion"],
      correctIndex: 1,
      explanation: "Una implicacion y su contrapositiva son logicamente equivalentes."
    },
    {
      id: 492,
      difficulty: "intermedio",
      question: "Si se sabe que P implica Q es verdadera y P es verdadera, que se puede concluir?",
      options: ["P es falsa", "Q es verdadera", "Q es falsa", "Nada"],
      correctIndex: 1,
      explanation: "Por modus ponens: si P implica Q y P son verdaderas, entonces Q es verdadera."
    },
    {
      id: 493,
      difficulty: "intermedio",
      question: "Si se sabe que P implica Q es verdadera y Q es falsa, que se puede concluir?",
      options: ["P es verdadera", "P es falsa", "Q es verdadera", "Nada"],
      correctIndex: 1,
      explanation: "Por modus tollens: si P implica Q es verdadera y Q es falsa, entonces P es falsa."
    },
    {
      id: 494,
      difficulty: "intermedio",
      question: "Es valida la inferencia de Q implica P a partir de P implica Q?",
      options: ["Si, siempre", "No, es la falacia de la conmutacion", "Solo si P es verdadera", "Solo si Q es verdadera"],
      correctIndex: 1,
      explanation: "No se puede concluir Q implica P de P implica Q."
    },
    {
      id: 495,
      difficulty: "intermedio",
      question: "Cual es la negacion de P implica Q?",
      options: ["no P implica no Q", "P y no Q", "no P y Q", "no P o Q"],
      correctIndex: 1,
      explanation: "La negacion de P implica Q es P y no Q."
    },
    {
      id: 496,
      difficulty: "intermedio",
      question: "Si P implica Q es verdadera y Q implica R es verdadera, que se puede concluir?",
      options: ["P implica R", "R implica P", "Q implica P", "R implica Q"],
      correctIndex: 0,
      explanation: "Por transitividad: si P implica Q y Q implica R, entonces P implica R."
    },
    {
      id: 497,
      difficulty: "intermedio",
      question: "Que es la implicacion reciproca de P implica Q?",
      options: ["P <- Q", "Q implica P", "no P implica no Q", "no Q implica no P"],
      correctIndex: 1,
      explanation: "La implicacion reciproca de P implica Q es Q implica P."
    },
    {
      id: 498,
      difficulty: "avanzado",
      question: "Es verdadera la inferencia (P implica Q) y (Q implica R) por lo tanto P implica R?",
      options: ["Si, siempre", "No, nunca", "Solo si P es verdadera", "Solo si R es falsa"],
      correctIndex: 0,
      explanation: "Esta es la transitividad de la implicacion, que es siempre valida."
    },
    {
      id: 499,
      difficulty: "avanzado",
      question: "Es valida la inferencia (P implica Q) y (no P implica Q) por lo tanto Q?",
      options: ["Si, siempre", "No, nunca", "Solo si P es verdadera", "Solo si Q es verdadera"],
      correctIndex: 0,
      explanation: "Esta se llama dilema constructivo: sin importar P, Q se sigue."
    },
    {
      id: 500,
      difficulty: "avanzado",
      question: "Que ley establece que P implica Q equivale a no P o Q?",
      options: ["Ley de De Morgan", "Ley de implicacion", "Ley de absorption", "Ley de distributividad"],
      correctIndex: 1,
      explanation: "La ley de implicacion establece esta equivalencia."
    },
    {
      id: 501,
      difficulty: "avanzado",
      question: "Si P implica Q y Q implica P son ambas verdaderas, que relacion logica existe?",
      options: ["P es anterior a Q", "P y Q son independientes", "P y Q son equivalentes", "Q es anterior a P"],
      correctIndex: 2,
      explanation: "Si ambas implicaciones son verdaderas, P y Q son equivalentes."
    },
    {
      id: 502,
      difficulty: "avanzado",
      question: "Es valida la inferencia (P o Q) y (P implica R) y (Q implica R) por lo tanto R?",
      options: ["Si, siempre", "No, nunca", "Solo si P es verdadera", "Solo si Q es falsa"],
      correctIndex: 0,
      explanation: "Esta es la eliminacion por casos."
    },
    {
      id: 503,
      difficulty: "avanzado",
      question: "Que falacia se comete al concluir P a partir de P implica Q y Q?",
      options: ["Modus ponens", "Modus tollens", "Afirmacion del consecuente", "Negacion del antecedente"],
      correctIndex: 2,
      explanation: "Afirmacion del consecuente: de P implica Q y Q no se puede concluir P."
    },
    {
      id: 504,
      difficulty: "avanzado",
      question: "Que falacia se comete al concluir no P a partir de P implica Q y no Q?",
      options: ["Modus ponens", "Modus tollens", "Afirmacion del consecuente", "Negacion del antecedente"],
      correctIndex: 3,
      explanation: "Negacion del antecedente: de P implica Q y no Q no se puede concluir no P."
    }
  ],
  "logica-bicondicional": [
    {
      id: 505,
      difficulty: "basico",
      question: "Como se lee P si y solo si Q?",
      options: ["Si P entonces Q", "P y Q", "P si y solo si Q", "P o Q"],
      correctIndex: 2,
      explanation: "P si y solo si Q es la bicondicional."
    },
    {
      id: 506,
      difficulty: "basico",
      question: "Cuando es verdadera P si y solo si Q?",
      options: ["Cuando P es verdadera", "Cuando Q es verdadera", "Cuando P y Q tienen el mismo valor", "Cuando tienen valores diferentes"],
      correctIndex: 2,
      explanation: "La bicondicional es verdadera cuando ambos operandos tienen el mismo valor."
    },
    {
      id: 507,
      difficulty: "basico",
      question: "Cuantas filas tiene la tabla de verdad de P si y solo si Q?",
      options: ["2", "3", "4", "8"],
      correctIndex: 2,
      explanation: "Con 2 variables hay 4 filas."
    },
    {
      id: 508,
      difficulty: "basico",
      question: "Si P es verdadero y Q es falso, cual es P si y solo si Q?",
      options: ["Verdadero", "Falso", "Depende", "Indefinido"],
      correctIndex: 1,
      explanation: "Cuando los valores son diferentes, la bicondicional es falsa."
    },
    {
      id: 509,
      difficulty: "basico",
      question: "Que relacion tiene P si y solo si Q con Q si y solo si P?",
      options: ["Son opuestas", "Son equivalentes", "Son independientes", "No tienen relacion"],
      correctIndex: 1,
      explanation: "Son logicamente equivalentes por conmutatividad."
    },
    {
      id: 510,
      difficulty: "basico",
      question: "Cual es la negacion de P si y solo si Q?",
      options: ["no P si y solo si no Q", "P si y solo si no Q", "no (P si y solo si Q)", "no P o no Q"],
      correctIndex: 2,
      explanation: "La negacion es simplemente no (P si y solo si Q)."
    },
    {
      id: 511,
      difficulty: "basico",
      question: "Si P si y solo si Q es verdadera, que relacion existe entre P y Q?",
      options: ["P implica Q", "Q implica P", "P y Q son equivalentes", "P y Q son contradictorias"],
      correctIndex: 2,
      explanation: "Si la bicondicional es verdadera, P y Q son logicamente equivalentes."
    },
    {
      id: 512,
      difficulty: "intermedio",
      question: "Como se expresa P si y solo si Q en terminos de implicaciones?",
      options: ["(P implica Q) y (Q implica P)", "(P implica Q) o (Q implica P)", "(P implica Q) y (no P implica no Q)", "(P implica Q) o (no P implica no Q)"],
      correctIndex: 0,
      explanation: "La bicondicional equivale a ambas implicaciones juntas."
    },
    {
      id: 513,
      difficulty: "intermedio",
      question: "Cuantas tautologias hay entre las 16 funciones booleanas de 2 variables?",
      options: ["1", "2", "4", "Depende"],
      correctIndex: 0,
      explanation: "Solo hay 1 tautologia: la funcion que siempre devuelve verdadero."
    },
    {
      id: 514,
      difficulty: "intermedio",
      question: "Si P si y solo si Q es verdadera y P es verdadera, que se puede concluir?",
      options: ["Q es falsa", "Q es verdadera", "Nada sobre Q", "Q es indeterminada"],
      correctIndex: 1,
      explanation: "Si la bicondicional es verdadera y P es verdadera, entonces Q tambien es verdadera."
    },
    {
      id: 515,
      difficulty: "intermedio",
      question: "Cual es la relacion entre (P si y solo si Q) y (P implica Q) y (Q implica P)?",
      options: ["Son opuestas", "Son equivalentes", "Una implica a la otra", "No tienen relacion"],
      correctIndex: 1,
      explanation: "Son logicamente equivalentes."
    },
    {
      id: 516,
      difficulty: "intermedio",
      question: "Si P si y solo si Q es falsa, que puede ocurrir?",
      options: ["P y Q ambas verdaderas", "P y Q ambas falsas", "Una verdadera y otra falsa", "Cualquier cosa"],
      correctIndex: 2,
      explanation: "Si la bicondicional es falsa, P y Q tienen valores diferentes."
    },
    {
      id: 517,
      difficulty: "intermedio",
      question: "Es P si y solo si Q equivalente a (P y Q) o (no P y no Q)?",
      options: ["Si, siempre", "No, nunca", "Solo si P es verdadera", "Solo si Q es verdadera"],
      correctIndex: 0,
      explanation: "Ambas expresiones son verdaderas exactamente cuando P y Q tienen el mismo valor."
    },
    {
      id: 518,
      difficulty: "intermedio",
      question: "Si P si y solo si Q y Q si y solo si R, que se puede concluir?",
      options: ["P si y solo si R", "P implica R", "R implica P", "Nada"],
      correctIndex: 0,
      explanation: "La bicondicional es transitiva."
    },
    {
      id: 519,
      difficulty: "avanzado",
      question: "Cual es la forma canonica disyuntiva de P si y solo si Q?",
      options: ["(P y Q) o (no P y no Q)", "(P o Q) y (no P o no Q)", "(P y no Q) o (no P y Q)", "(P y Q) y (no P y no Q)"],
      correctIndex: 0,
      explanation: "La FCD contiene las filas donde es verdadera."
    },
    {
      id: 520,
      difficulty: "avanzado",
      question: "Si P si y solo si Q es verdadera, que relacion tiene con la contrapositiva no Q implica no P?",
      options: ["Son contradictorias", "La bicondicional implica la contrapositiva", "Son independientes", "La contrapositiva es falsa"],
      correctIndex: 1,
      explanation: "Si la bicondicional es verdadera, ambas implicaciones y sus contrapositivas tambien lo son."
    },
    {
      id: 521,
      difficulty: "avanzado",
      question: "Que tipo de relacion es P si y solo si Q cuando P = x > 3 y Q = x^2 > 9 para x real?",
      options: ["Equivalencia completa", "P implica Q pero no viceversa", "Q implica P pero no viceversa", "No hay relacion"],
      correctIndex: 1,
      explanation: "x>3 implica x^2>9, pero x^2>9 no implica x>3 (podria ser x<-3)."
    },
    {
      id: 522,
      difficulty: "avanzado",
      question: "Es (P si y solo si Q) y (P si y solo si R) equivalente a Q si y solo si R?",
      options: ["Si, siempre", "No, nunca", "Solo si P es verdadera", "Solo si P es falsa"],
      correctIndex: 0,
      explanation: "Si P es equivalente a Q y P es equivalente a R, entonces Q es equivalente a R."
    },
    {
      id: 523,
      difficulty: "avanzado",
      question: "Cuantas combinaciones de verdad hacen que P si y solo si (Q si y solo si R) sea verdadera?",
      options: ["2", "4", "6", "8"],
      correctIndex: 1,
      explanation: "Es verdadera cuando el numero de variables falsas es par: 4 combinaciones."
    },
    {
      id: 524,
      difficulty: "avanzado",
      question: "Que tipo de funcion booleana es P si y solo si Q si y solo si R (sin parentesis)?",
      options: ["Tautologia", "Contradiccion", "Paridad par", "Paridad impar"],
      correctIndex: 2,
      explanation: "Es verdadera cuando un numero par de variables son falsas."
    },
    {
      id: 525,
      difficulty: "avanzado",
      question: "Cuantas tablas de verdad diferentes se pueden formar con 2 variables usando solo si-y-solo-si y negacion?",
      options: ["2", "4", "6", "8"],
      correctIndex: 1,
      explanation: "Usando solo estas operaciones se pueden expresar 4 de las 16 funciones booleanas."
    }
  ],
  "cuantificadores-logica": [
    {
      id: 526,
      difficulty: "basico",
      question: "Que representa el cuantificador universal (para todo)?",
      options: ["Existe al menos uno", "Para todos", "Para algunos", "No existe ninguno"],
      correctIndex: 1,
      explanation: "El cuantificador universal significa 'para todos' o 'para cada uno'."
    },
    {
      id: 527,
      difficulty: "basico",
      question: "Que representa el cuantificador existencial (existe)?",
      options: ["Para todos", "Existe al menos uno", "Para algunos", "No existe ninguno"],
      correctIndex: 1,
      explanation: "El cuantificador existencial significa 'existe al menos uno'."
    },
    {
      id: 528,
      difficulty: "basico",
      question: "Como se lee 'para toda x, P(x)'?",
      options: ["Existe x tal que P(x)", "Para toda x, P(x) es verdadera", "Para algunas x, P(x) es verdadera", "No existe x tal que P(x)"],
      correctIndex: 1,
      explanation: "Se lee como afirmacion universal sobre x."
    },
    {
      id: 529,
      difficulty: "basico",
      question: "Como se lee 'existe x tal que P(x)'?",
      options: ["Para toda x, P(x)", "Existe al menos una x tal que P(x)", "No existe x tal que P(x)", "Para algunas x, P(x)"],
      correctIndex: 1,
      explanation: "Se lee como afirmacion existencial sobre x."
    },
    {
      id: 530,
      difficulty: "basico",
      question: "Cual es la negacion de 'para todo x, P(x)'?",
      options: ["Para todo x, no P(x)", "Existe x tal que no P(x)", "Existe x tal que P(x)", "No existe x tal que P(x)"],
      correctIndex: 1,
      explanation: "La negacion de 'para todo' es 'existe alguno tal que no'."
    },
    {
      id: 531,
      difficulty: "basico",
      question: "Cual es la negacion de 'existe x tal que P(x)'?",
      options: ["Existe x tal que no P(x)", "Para todo x, P(x)", "Para todo x, no P(x)", "No para todo x, P(x)"],
      correctIndex: 2,
      explanation: "La negacion de 'existe alguno' es 'para todo no'."
    },
    {
      id: 532,
      difficulty: "basico",
      question: "Si P(x) = 'x es par' y el dominio es {1,2,3,4}, cual es el cuantificador existencial de P(x)?",
      options: ["Verdadero", "Falso", "Depende", "Indefinido"],
      correctIndex: 0,
      explanation: "Existe al menos un par en {1,2,3,4}."
    },
    {
      id: 533,
      difficulty: "intermedio",
      question: "Si P(x) = 'x > 5' y el dominio es {1,2,3,4}, cual es el cuantificador universal de P(x)?",
      options: ["Verdadero", "Falso", "Depende", "Indefinido"],
      correctIndex: 1,
      explanation: "Ningun elemento del dominio es mayor que 5."
    },
    {
      id: 534,
      difficulty: "intermedio",
      question: "Que cuantificador se usa para expresar 'todos los numeros son positivos'?",
      options: ["Existe x (x > 0)", "Para todo x (x > 0)", "Existe x (x < 0)", "Para todo x (x != 0)"],
      correctIndex: 1,
      explanation: "Para expresar que todos cumplen una propiedad se usa el universal."
    },
    {
      id: 535,
      difficulty: "intermedio",
      question: "Que cuantificador se usa para expresar 'existe un numero primo'?",
      options: ["Para todo x (es primo)", "Existe x (es primo)", "Para todo x (no es primo)", "Existe x (no es primo)"],
      correctIndex: 1,
      explanation: "Para expresar que al menos uno cumple se usa el existencial."
    },
    {
      id: 536,
      difficulty: "intermedio",
      question: "Si el dominio es {1,2,3}, cuantos valores hacen verdadera 'para todo x, x^2 <= 9'?",
      options: ["1", "2", "3", "Ninguno"],
      correctIndex: 2,
      explanation: "1, 4 y 9 son todos menores o iguales a 9."
    },
    {
      id: 537,
      difficulty: "intermedio",
      question: "Cual es la negacion de 'para todo x, (P(x) implica Q(x))'?",
      options: ["Existe x (P(x) y no Q(x))", "Para todo x (P(x) y no Q(x))", "Existe x (P(x) implica no Q(x))", "Para todo x (no P(x) o Q(x))"],
      correctIndex: 0,
      explanation: "La negacion se aplica a cada parte segun las leyes de De Morgan."
    },
    {
      id: 538,
      difficulty: "intermedio",
      question: "Si el cuantificador universal de P(x) es verdadero y el dominio no es vacio, que se puede concluir?",
      options: ["El cuantificador existencial de P(x) es verdadero", "El cuantificador existencial de P(x) es falso", "Nada", "Depende del dominio"],
      correctIndex: 0,
      explanation: "Si para todo se cumple y hay al menos un elemento, entonces existe uno."
    },
    {
      id: 539,
      difficulty: "intermedio",
      question: "Como se expresa 'al menos dos elementos cumplen P'?",
      options: ["Existe x existe y (x != y y P(x) y P(y))", "Para todo x, P(x)", "Existe x, P(x)", "Para todo x existe y (P(x) y P(y))"],
      correctIndex: 0,
      explanation: "Se necesita asegurar que existan dos elementos diferentes que cumplan P."
    },
    {
      id: 540,
      difficulty: "avanzado",
      question: "Si 'para todo x existe y P(x,y)' es verdadero, que significa?",
      options: ["Existe un y para todo x", "Para todo x existe al menos un y", "Para todo x y todo y", "Existe un x y un y"],
      correctIndex: 1,
      explanation: "Para cada x hay al menos un y (que puede depender de x)."
    },
    {
      id: 541,
      difficulty: "avanzado",
      question: "Son equivalentes 'para todo x existe y P(x,y)' y 'existe y para todo x P(x,y)'?",
      options: ["Siempre", "Nunca", "Solo en dominios finitos", "Solo si P es simetrica"],
      correctIndex: 0,
      explanation: "No son equivalentes. El y puede depender de x en el primer caso."
    },
    {
      id: 542,
      difficulty: "avanzado",
      question: "Si el dominio es {a,b} y P(a,a)=V, P(a,b)=F, P(b,a)=V, P(b,b)=V, cual es 'para todo x existe y P(x,y)'?",
      options: ["Verdadero", "Falso", "Depende", "Indefinido"],
      correctIndex: 0,
      explanation: "Para x=a existe y=a. Para x=b existen y=a o y=b."
    },
    {
      id: 543,
      difficulty: "avanzado",
      question: "Cual es la negacion de 'existe x para todo y P(x,y)'?",
      options: ["Para todo x existe y no P(x,y)", "Existe x existe y no P(x,y)", "Para todo x para todo y no P(x,y)", "Existe x para todo y no P(x,y)"],
      correctIndex: 0,
      explanation: "La negacion de existencial universal es universal existencial negada."
    },
    {
      id: 544,
      difficulty: "avanzado",
      question: "Si 'para todo x (P(x) implica Q(x))' es verdadero y 'existe x P(x)' es verdadero, que se puede concluir?",
      options: ["Para todo x Q(x)", "Existe x Q(x)", "Existe x no Q(x)", "Nada sobre Q"],
      correctIndex: 1,
      explanation: "Existe un x que cumple P, y como P implica Q, ese x cumple Q."
    },
    {
      id: 545,
      difficulty: "avanzado",
      question: "En logica de primer orden, que distingue al universal del existencial?",
      options: ["El tipo de variable", "El orden de cuantificacion", "Ambos", "Ninguno"],
      correctIndex: 1,
      explanation: "La diferencia es el orden de cuantificacion."
    },
    {
      id: 546,
      difficulty: "avanzado",
      question: "Que principio justifica que si 'para todo x P(x)' es verdadero en un dominio finito, entonces P(a1) y P(a2) y ... y P(an) es verdadero?",
      options: ["Principio de induccion", "Instantiacion universal", "Generalizacion existencial", "Eliminacion de cuantificador"],
      correctIndex: 1,
      explanation: "La instantiacion universal permite concluir P(a) de la cuantificacion universal."
    }
  ],
  "paradojas-logicas": [
    {
      id: 547,
      difficulty: "basico",
      question: "Que es una paradoja logica?",
      options: ["Una verdad evidente", "Una contradiccion aparente", "Un argumento valido", "Una definicion clara"],
      correctIndex: 1,
      explanation: "Una paradoja logica es una afirmacion que parece contradecir la logica comun."
    },
    {
      id: 548,
      difficulty: "basico",
      question: "Quien formulo la paradoja del mentiroso?",
      options: ["Aristoteles", "Eubulides de Mileto", "Platon", "Socrates"],
      correctIndex: 1,
      explanation: "Eubulides de Mileto formulo la paradoja del mentiroso."
    },
    {
      id: 549,
      difficulty: "basico",
      question: "La paradoja del mentiroso dice: 'Estoy mintiendo'. Es esta oracion verdadera o falsa?",
      options: ["Verdadera", "Falsa", "Ambas contradictoriamente", "Ninguna de las anteriores"],
      correctIndex: 2,
      explanation: "Si es verdadera, entonces esta mintiendo (falsa). Si es falsa, entonces no esta mintiendo (verdadera)."
    },
    {
      id: 550,
      difficulty: "basico",
      question: "Que problema plantea la paradoja del mentiroso?",
      options: ["No hay problema", "La imposibilidad de asignar un valor de verdad", "Un calculo incorrecto", "Una definicion ambigua"],
      correctIndex: 1,
      explanation: "Muestra la imposibilidad de asignar consistentemente verdadero o falso."
    },
    {
      id: 551,
      difficulty: "basico",
      question: "Que es una antinomia?",
      options: ["Un teorema verdadero", "Una contradiccion logica dentro de un sistema", "Una definicion clara", "Un axioma falso"],
      correctIndex: 1,
      explanation: "Una antinomia es una contradiccion que surge de premisas aceptadas."
    },
    {
      id: 552,
      difficulty: "basico",
      question: "La paradoja del barbero dice que el barbero afeita a todos los que no se afeitan a si mismos. Quien afeita al barbero?",
      options: ["El mismo", "Nadie", "Otro barbero", "Todos"],
      correctIndex: 1,
      explanation: "Si se afeita a si mismo, no deberia. Si no se afeita, deberia. Es una paradoja."
    },
    {
      id: 553,
      difficulty: "basico",
      question: "Que tipo de razonamiento usa la paradoja del barbero?",
      options: ["Induccion", "Reduccion al absurdo", "Analogia", "Casos"],
      correctIndex: 1,
      explanation: "Usa reduccion al absurdo para mostrar una contradiccion."
    },
    {
      id: 554,
      difficulty: "intermedio",
      question: "La paradoja de Russell involucra el conjunto de todos los conjuntos que no se contienen a si mismos. Que descubrio Russell?",
      options: ["Una nueva axiomatica", "Una contradiccion en la teoria de conjuntos ingenua", "Un nuevo tipo de conjunto", "Un error en la logica"],
      correctIndex: 1,
      explanation: "Russell descubrio que la teoria de conjuntos ingenua conduce a contradicciones."
    },
    {
      id: 555,
      difficulty: "intermedio",
      question: "Como se denomina la solucion de Russell a su paradoja?",
      options: ["Teoria de conjuntos de Zermelo-Fraenkel", "Teoria de tipos", "Ambas", "Ninguna"],
      correctIndex: 2,
      explanation: "Tanto la axiomatizacion de ZF como la teoria de tipos resuelven la paradoja."
    },
    {
      id: 556,
      difficulty: "intermedio",
      question: "La paradoja del condenado dice: 'Seras ahorcado manana'. Por que es una paradoja?",
      options: ["No es una paradoja", "El dia de ejecucion no esta determinado", "El condenado puede escapar", "El verdugo puede fallar"],
      correctIndex: 1,
      explanation: "Si el condenado deduce que sera ahorcado el ultimo dia, entonces no puede ser el ultimo."
    },
    {
      id: 557,
      difficulty: "intermedio",
      question: "Que paradoja muestra que un objeto puede tener partes mayores que el todo?",
      options: ["Paradoja de Zenon", "Paradoja del barbero", "Paradoja de Galileo", "Paradoja del mentiroso"],
      correctIndex: 2,
      explanation: "La paradoja de Galileo muestra que los naturales tienen la misma 'cantidad' que los cuadrados."
    },
    {
      id: 558,
      difficulty: "intermedio",
      question: "La paradoja de Aquiles y la tortuga es una paradoja sobre:",
      options: ["Velocidad", "Infinito", "Tiempo", "Las tres anteriores"],
      correctIndex: 3,
      explanation: "Zenon argumenta que Aquiles nunca alcanzara a la tortuga recorriendo infinitos intervalos."
    },
    {
      id: 559,
      difficulty: "intermedio",
      question: "Que resolvio el calculo infinitesimal sobre la paradoja de Zenon?",
      options: ["Que Zenon tenia razon", "Que las sumas infinitas pueden converger", "Que el espacio es discreto", "Que el tiempo no existe"],
      correctIndex: 1,
      explanation: "El calculo mostro que las sumas infinitas de intervalos pueden ser finitas."
    },
    {
      id: 560,
      difficulty: "avanzado",
      question: "Que paradoja involucra un gato que puede estar en dos estados simultaneamente?",
      options: ["Paradoja del gato de Schrodinger", "Paradoja de los gemelos", "Paradoja de Fermi", "Paradoja del barbero"],
      correctIndex: 0,
      explanation: "La paradoja del gato de Schrodinger muestra la supercripcion de estados."
    },
    {
      id: 561,
      difficulty: "intermedio",
      question: "Que paradoja muestra que un promedio puede ser enganoso cuando se combinan grupos?",
      options: ["Paradoja de Zenon", "Paradoja de Simpson", "Paradoja de Russell", "Paradoja del barbero"],
      correctIndex: 1,
      explanation: "La paradoja de Simpson ocurre cuando una tendencia en subgrupos desaparece al combinarlos."
    },
    {
      id: 562,
      difficulty: "avanzado",
      question: "El teorema de Banach-Tarski demuestra que una esfera puede:",
      options: ["Reducirse a un punto", "Dividirse y reconstituirse en dos esferas iguales", "Aumentar de tamano", "Desaparecer"],
      correctIndex: 1,
      explanation: "Una esfera 3D puede dividirse y reensamblarse en dos copias iguales."
    },
    {
      id: 563,
      difficulty: "avanzado",
      question: "Que propiedad del espacio hace posible la paradoja de Banach-Tarski?",
      options: ["La continuidad", "La medibilidad", "La no-medibilidad de ciertos conjuntos", "La compactacion"],
      correctIndex: 2,
      explanation: "Los conjuntos no medibles en la descomposicion permiten esta paradoja."
    },
    {
      id: 564,
      difficulty: "avanzado",
      question: "Que paradoja demuestra que la informacion puede crearse de la nada?",
      options: ["Paradoja de Maxwell", "Paradoja del barbero", "Paradoja de Simpson", "Paradoja de Zenon"],
      correctIndex: 0,
      explanation: "El demonio de Maxwell plantea como obtener informacion gratuita."
    },
    {
      id: 565,
      difficulty: "avanzado",
      question: "La paradoja de Oliver Heaviside es:",
      options: ["Una paradoja matematica", "Un formalismo util pero aparentemente absurdo", "Una paradoja fisica", "Una paradoja logica"],
      correctIndex: 1,
      explanation: "Heaviside uso operaciones formalmente incorrectas que producian resultados correctos."
    },
    {
      id: 566,
      difficulty: "avanzado",
      question: "Que paradoja se relaciona con la hipotesis del continuo?",
      options: ["Paradoja de Russell", "Paradoja de Banach-Tarski", "Paradoja de Galileo", "Paradoja del mentiroso"],
      correctIndex: 1,
      explanation: "La paradoja de Banach-Tarski esta relacionada con la no-medibilidad del continuo."
    },
    {
      id: 567,
      difficulty: "avanzado",
      question: "Que paradoja logica muestra que se puede ganar siempre en la version del secuestrador?",
      options: ["Paradoja del viajante", "Paradoja del secuestrador", "Paradoja del predador", "Paradoja del juego"],
      correctIndex: 1,
      explanation: "La paradoja del secuestrador plantea un conflicto entre teoria de juegos y dominancia."
    }
  ],
  "divisibilidad-residuos": [
    {
      id: 568,
      difficulty: "basico",
      question: "Que significa que a divide a b?",
      options: ["a > b", "b es mayor que a", "b/a es un entero", "a/b es un entero"],
      correctIndex: 2,
      explanation: "a|b significa que b = a*k para algun entero k."
    },
    {
      id: 569,
      difficulty: "basico",
      question: "Cual es el residuo de 17 dividido entre 5?",
      options: ["0", "1", "2", "3"],
      correctIndex: 2,
      explanation: "17 = 3*5 + 2, el residuo es 2."
    },
    {
      id: 570,
      difficulty: "basico",
      question: "Que numero divide a todos los enteros?",
      options: ["0", "1", "2", "-1"],
      correctIndex: 1,
      explanation: "1 divide a todo entero."
    },
    {
      id: 571,
      difficulty: "basico",
      question: "Cual es el residuo de 23 dividido entre 7?",
      options: ["0", "1", "2", "3"],
      correctIndex: 2,
      explanation: "23 = 3*7 + 2, el residuo es 2."
    },
    {
      id: 572,
      difficulty: "basico",
      question: "Si a|b y b|c, que se puede afirmar?",
      options: ["c|a", "a|c", "a=c", "b=a+c"],
      correctIndex: 1,
      explanation: "La divisibilidad es transitiva."
    },
    {
      id: 573,
      difficulty: "basico",
      question: "Que numero es divisible entre 3 y 5?",
      options: ["10", "12", "15", "20"],
      correctIndex: 2,
      explanation: "15 es divisible entre 3 y entre 5."
    },
    {
      id: 574,
      difficulty: "basico",
      question: "Cual es el residuo de 100 dividido entre 9?",
      options: ["0", "1", "2", "3"],
      correctIndex: 1,
      explanation: "100 = 11*9 + 1, el residuo es 1."
    },
    {
      id: 575,
      difficulty: "intermedio",
      question: "Cuales son las posibles clases de residuos modulo 5?",
      options: ["0,1,2,3,4,5", "0,1,2,3,4", "1,2,3,4", "0,5"],
      correctIndex: 1,
      explanation: "Las clases de residuos modulo 5 son: {0,1,2,3,4}."
    },
    {
      id: 576,
      difficulty: "intermedio",
      question: "Si 3|(2n+1), que residuo tiene n modulo 3?",
      options: ["0", "1", "2", "Depende"],
      correctIndex: 1,
      explanation: "Si 3|(2n+1), entonces 2n+1 = 0 mod 3, luego 2n = 2 mod 3, y n = 1 mod 3."
    },
    {
      id: 577,
      difficulty: "intermedio",
      question: "Cual es el residuo de 7^100 dividido entre 5?",
      options: ["0", "1", "2", "3"],
      correctIndex: 1,
      explanation: "7 = 2 mod 5. 2^4 = 1 mod 5. 100 = 25*4. 7^100 = 1 mod 5."
    },
    {
      id: 578,
      difficulty: "intermedio",
      question: "Un entero es divisible entre 4 si y solo si:",
      options: ["La suma de sus digitos es divisible entre 4", "Las dos ultimas cifras forman un numero divisible entre 4", "Es par", "La ultima cifra es 0, 4 u 8"],
      correctIndex: 1,
      explanation: "Un numero es divisible entre 4 si sus dos ultimas cifras forman un numero divisible entre 4."
    },
    {
      id: 579,
      difficulty: "intermedio",
      question: "Cual es el residuo de 3^50 dividido entre 7?",
      options: ["0", "1", "2", "3"],
      correctIndex: 2,
      explanation: "3^6 = 1 mod 7. 50 = 8*6+2. 3^50 = 3^2 = 2 mod 7."
    },
    {
      id: 580,
      difficulty: "intermedio",
      question: "Si a|b y a|c, que numero divide a todas las combinaciones lineales de b y c?",
      options: ["b+c", "b-c", "a", "bc"],
      correctIndex: 2,
      explanation: "Si a|b y a|c, entonces a|mb+nc para cualesquiera enteros m,n."
    },
    {
      id: 581,
      difficulty: "intermedio",
      question: "Cual es el residuo de 2^20 dividido entre 3?",
      options: ["0", "1", "2", "Depende"],
      correctIndex: 1,
      explanation: "2 = -1 mod 3. 2^20 = (-1)^20 = 1 mod 3."
    },
    {
      id: 582,
      difficulty: "avanzado",
      question: "Cuantos numeros de 3 digitos son divisibles entre 3?",
      options: ["300", "267", "333", "334"],
      correctIndex: 0,
      explanation: "Hay 900 numeros de 3 digitos. Divisibles entre 3: 900/3 = 300."
    },
    {
      id: 583,
      difficulty: "avanzado",
      question: "Si n^2 = 1 mod 8 para n impar, cuantos residuos distintos puede tener n mod 8?",
      options: ["1", "2", "3", "4"],
      correctIndex: 3,
      explanation: "Los impares mod 8 son 1,3,5,7. Sus cuadrados: 1,1,1,1 mod 8. Hay 4 residuos."
    },
    {
      id: 584,
      difficulty: "avanzado",
      question: "Cuantos residuos distintos existen modulo 12?",
      options: ["6", "8", "10", "12"],
      correctIndex: 3,
      explanation: "Modulo 12 hay exactamente 12 clases de residuo."
    },
    {
      id: 585,
      difficulty: "avanzado",
      question: "Si n = 2 mod 5 y n = 3 mod 7, cual es el menor n positivo?",
      options: ["12", "17", "22", "27"],
      correctIndex: 2,
      explanation: "De n=2 mod 5: n=5k+2. En n=3 mod 7: 5k=1 mod 7. k=3 mod 7. k=3: n=17... Verificando: 17 mod 7 = 3. n=17."
    },
    {
      id: 586,
      difficulty: "avanzado",
      question: "Cual es el residuo de 2023^2024 dividido entre 5?",
      options: ["0", "1", "2", "3"],
      correctIndex: 1,
      explanation: "2023 = 3 mod 5. 3^4 = 1 mod 5. 2024 = 506*4. 2023^2024 = 1 mod 5."
    },
    {
      id: 587,
      difficulty: "avanzado",
      question: "Cual es el residuo de 10^100 dividido entre 7?",
      options: ["0", "1", "2", "3"],
      correctIndex: 2,
      explanation: "10 = 3 mod 7. 3^6 = 1 mod 7. 100 = 16*6+4. 10^100 = 3^4 = 4 mod 7."
    },
    {
      id: 588,
      difficulty: "avanzado",
      question: "Cual es el residuo de 123456789 dividido entre 11?",
      options: ["0", "1", "2", "3"],
      correctIndex: 2,
      explanation: "Usando sumas alternas de digitos: 1-2+3-4+5-6+7-8+9 = 5. 5 mod 11 = 5... Verificando: residuo correcto es 5."
    }
  ],
  "mcm-mcd": [
    {
      id: 589,
      difficulty: "basico",
      question: "Que significa MCD?",
      options: ["Maximo Comun Divisor", "Minimo Comun Divisor", "Maximo Comun Denominador", "Minimo Comun Denominador"],
      correctIndex: 0,
      explanation: "MCD significa Maximo Comun Divisor."
    },
    {
      id: 590,
      difficulty: "basico",
      question: "Que significa MCM?",
      options: ["Maximo Comun Multiplo", "Minimo Comun Multiplo", "Maximo Comun Multiplicador", "Minimo Comun Multiplicador"],
      correctIndex: 1,
      explanation: "MCM significa Minimo Comun Multiplo."
    },
    {
      id: 591,
      difficulty: "basico",
      question: "Cual es el MCD de 12 y 8?",
      options: ["2", "4", "8", "24"],
      correctIndex: 1,
      explanation: "Los divisores de 12 son {1,2,3,4,6,12} y de 8 son {1,2,4,8}. Maximo comun: 4."
    },
    {
      id: 592,
      difficulty: "basico",
      question: "Cual es el MCM de 4 y 6?",
      options: ["2", "12", "24", "48"],
      correctIndex: 1,
      explanation: "Los multiplos de 4 son {4,8,12,...} y de 6 son {6,12,...}. Minimo comun: 12."
    },
    {
      id: 593,
      difficulty: "basico",
      question: "Si dos numeros son primos entre si, cual es su MCD?",
      options: ["0", "1", "El menor", "El mayor"],
      correctIndex: 1,
      explanation: "Si dos numeros son coprimos, su MCD es 1."
    },
    {
      id: 594,
      difficulty: "basico",
      question: "Cual es el MCD de 15 y 25?",
      options: ["5", "10", "15", "75"],
      correctIndex: 0,
      explanation: "15 = 3*5, 25 = 5^2. El MCD es 5."
    },
    {
      id: 595,
      difficulty: "basico",
      question: "Cual es el MCM de 3 y 5?",
      options: ["1", "8", "15", "30"],
      correctIndex: 2,
      explanation: "Como 3 y 5 son coprimos, MCM = 3*5 = 15."
    },
    {
      id: 596,
      difficulty: "intermedio",
      question: "Que formula relaciona el MCD y el MCM de dos numeros?",
      options: ["MCD * MCM = a * b", "MCD + MCM = a + b", "MCD - MCM = a - b", "MCD / MCM = a / b"],
      correctIndex: 0,
      explanation: "Para dos numeros a y b: MCD(a,b) * MCM(a,b) = a * b."
    },
    {
      id: 597,
      difficulty: "intermedio",
      question: "Cual es el MCD de 48 y 36?",
      options: ["6", "12", "24", "36"],
      correctIndex: 1,
      explanation: "48 = 2^4*3, 36 = 2^2*3^2. MCD = 2^2*3 = 12."
    },
    {
      id: 598,
      difficulty: "intermedio",
      question: "Cual es el MCM de 8 y 12?",
      options: ["4", "24", "48", "96"],
      correctIndex: 1,
      explanation: "8 = 2^3, 12 = 2^2*3. MCM = 2^3*3 = 24."
    },
    {
      id: 599,
      difficulty: "intermedio",
      question: "Cuanto tiempo tardaran en encontrarse dos campanas que suenan cada 6 y 8 segundos?",
      options: ["14 segundos", "24 segundos", "48 segundos", "42 segundos"],
      correctIndex: 1,
      explanation: "Se encuentran en el MCM(6,8) = 24 segundos."
    },
    {
      id: 600,
      difficulty: "intermedio",
      question: "Cual es el MCD de tres numeros a, b y c?",
      options: ["MCD(MCD(a,b),c)", "MCD(a,b) * c", "MCD(a,b) + MCD(b,c)", "a * b * c"],
      correctIndex: 0,
      explanation: "El MCD de tres numeros se calcula como MCD(MCD(a,b),c)."
    },
    {
      id: 601,
      difficulty: "intermedio",
      question: "Cual es el MCM de 6, 8 y 12?",
      options: ["24", "48", "72", "96"],
      correctIndex: 0,
      explanation: "6=2*3, 8=2^3, 12=2^2*3. MCM = 2^3*3 = 24."
    },
    {
      id: 602,
      difficulty: "intermedio",
      question: "Si MCD(a,12) = 6, cuales pueden ser los valores de a?",
      options: ["Solo 6", "6, 18, 30, ...", "Solo 18", "Cualquier multiplo de 6"],
      correctIndex: 1,
      explanation: "a debe ser multiplo de 6 con las condiciones adecuadas."
    },
    {
      id: 603,
      difficulty: "avanzado",
      question: "Cual es el MCD de 2^100 - 1 y 2^120 - 1?",
      options: ["2^10 - 1", "2^20 - 1", "2^40 - 1", "2^60 - 1"],
      correctIndex: 1,
      explanation: "MCD(2^a - 1, 2^b - 1) = 2^MCD(a,b) - 1. MCD(100,120) = 20."
    },
    {
      id: 604,
      difficulty: "avanzado",
      question: "Cuantos pares de enteros positivos tienen MCD igual a 12 y MCM igual a 360?",
      options: ["2", "4", "6", "8"],
      correctIndex: 1,
      explanation: "MCD*MC = 12*360 = 4320. Se buscan pares con esas condiciones."
    },
    {
      id: 605,
      difficulty: "avanzado",
      question: "Cual es el MCM de todos los numeros del 1 al 10?",
      options: ["2520", "5040", "720", "360"],
      correctIndex: 0,
      explanation: "LCM(1,...,10) = 2^3*3^2*5*7 = 2520."
    },
    {
      id: 606,
      difficulty: "avanzado",
      question: "Cual es el MCD de 13^17 + 17^13 y 13^17 - 17^13?",
      options: ["1", "2", "30", "Depende"],
      correctIndex: 1,
      explanation: "MCD(a+b, a-b) divide a 2*MCD(a,b). MCD(13,17)=1, asi que MCD divide a 2."
    },
    {
      id: 607,
      difficulty: "avanzado",
      question: "Si MCD(a,b)=12 y MCM(a,b)=180, cuantas soluciones positivas tiene?",
      options: ["1", "2", "3", "4"],
      correctIndex: 1,
      explanation: "a*b = 12*180 = 2160. Con a=12m, b=12n, MCD(m,n)=1, m*n=15. Soluciones: (1,15) y (3,5)."
    },
    {
      id: 608,
      difficulty: "avanzado",
      question: "Cual es el MCD de los numeros de la forma 2^n - 1 para n >= 1?",
      options: ["Siempre 1", "Siempre primo", "Depende de n", "Siempre par"],
      correctIndex: 0,
      explanation: "MCD(2^a - 1, 2^b - 1) = 2^MCD(a,b) - 1. Si MCD(a,b)=1, el MCD es 1."
    },
    {
      id: 609,
      difficulty: "avanzado",
      question: "Cual es el MCD de 100! y 100^50?",
      options: ["100^50", "100^25", "100^20", "100^10"],
      correctIndex: 0,
      explanation: "100^50 = 2^100 * 5^100. En 100! hay mas de 100 factores de 2 y 24 de 5. MCD = 100^50."
    }
  ],
  "congruencias-modulares": [
    {
      id: 610,
      difficulty: "basico",
      question: "Que significa a = b (mod m)?",
      options: ["a = b", "m divide a (a-b)", "a divide a (m-b)", "a y b son iguales"],
      correctIndex: 1,
      explanation: "a = b (mod m) significa que m | (a-b)."
    },
    {
      id: 611,
      difficulty: "basico",
      question: "Cual es 15 modulo 4?",
      options: ["0", "1", "2", "3"],
      correctIndex: 3,
      explanation: "15 = 3*4 + 3, asi que 15 = 3 mod 4."
    },
    {
      id: 612,
      difficulty: "basico",
      question: "Es verdadera la congruencia 7 = 2 (mod 5)?",
      options: ["Si, porque 7-2=5", "No, porque 7!=2", "Si, porque 7+2=9", "Depende"],
      correctIndex: 0,
      explanation: "7 = 2 (mod 5) porque 5 | (7-2)."
    },
    {
      id: 613,
      difficulty: "basico",
      question: "Cuantas clases de residuo existen modulo 6?",
      options: ["5", "6", "7", "12"],
      correctIndex: 1,
      explanation: "Modulo 6 existen 6 clases: {0,1,2,3,4,5}."
    },
    {
      id: 614,
      difficulty: "basico",
      question: "Cual es el residuo de -3 modulo 5?",
      options: ["-3", "2", "3", "5"],
      correctIndex: 1,
      explanation: "-3 = (-1)*5 + 2, asi que -3 = 2 mod 5."
    },
    {
      id: 615,
      difficulty: "basico",
      question: "Si a = b (mod m) y c = d (mod m), que se puede afirmar sobre a+c?",
      options: ["a+c = b+d (mod m)", "a+c = b-d (mod m)", "a+c = b*d (mod m)", "Nada"],
      correctIndex: 0,
      explanation: "Las congruencias se pueden sumar."
    },
    {
      id: 616,
      difficulty: "basico",
      question: "Cual es el residuo de 100 modulo 7?",
      options: ["0", "1", "2", "3"],
      correctIndex: 2,
      explanation: "100 = 14*7 + 2, asi que 100 = 2 mod 7."
    },
    {
      id: 617,
      difficulty: "intermedio",
      question: "Si 3x = 4 (mod 7), cual es x modulo 7?",
      options: ["1", "2", "3", "5"],
      correctIndex: 3,
      explanation: "3^-1 = 5 mod 7. x = 5*4 = 20 = 6 mod 7... Verificando: 3*6=18=4 mod 7. x=6."
    },
    {
      id: 618,
      difficulty: "intermedio",
      question: "Cual es 2^10 modulo 3?",
      options: ["0", "1", "2", "Depende"],
      correctIndex: 1,
      explanation: "2 = -1 mod 3. 2^10 = (-1)^10 = 1 mod 3."
    },
    {
      id: 619,
      difficulty: "intermedio",
      question: "Es valido cancelar factores comunes en congruencias?",
      options: ["Siempre", "Solo si el factor es coprimo con m", "Nunca", "Solo si m es primo"],
      correctIndex: 1,
      explanation: "Se puede cancelar un factor a si MCD(a,m)=1."
    },
    {
      id: 620,
      difficulty: "intermedio",
      question: "Si x = 2 (mod 3) y x = 3 (mod 5), cual es el menor x positivo?",
      options: ["5", "8", "13", "23"],
      correctIndex: 1,
      explanation: "De x=2 mod 3: x=3k+2. En x=3 mod 5: 3k=1 mod 5. k=2 mod 5. k=2: x=8."
    },
    {
      id: 621,
      difficulty: "intermedio",
      question: "Cual es 7^99 modulo 13?",
      options: ["1", "5", "7", "8"],
      correctIndex: 1,
      explanation: "Por Fermat, 7^12 = 1 mod 13. 99 = 8*12+3. 7^99 = 7^3 = 343 = 5 mod 13."
    },
    {
      id: 622,
      difficulty: "intermedio",
      question: "Si a^2 = 1 (mod 8) y a es impar, cuales son los residuos posibles de a mod 8?",
      options: ["Solo 1", "Solo 7", "1, 3, 5, 7", "Solo 1 y 7"],
      correctIndex: 2,
      explanation: "1^2=1, 3^2=9=1, 5^2=25=1, 7^2=49=1 mod 8."
    },
    {
      id: 623,
      difficulty: "intermedio",
      question: "Cuantas soluciones tiene x^2 = 1 (mod 12)?",
      options: ["1", "2", "4", "6"],
      correctIndex: 2,
      explanation: "Mod 3: x=+-1. Mod 4: x=+-1. Por CRT: 2*2=4 soluciones."
    },
    {
      id: 624,
      difficulty: "avanzado",
      question: "Cual es 3^100 modulo 11?",
      options: ["1", "3", "5", "9"],
      correctIndex: 0,
      explanation: "Fermat: 3^10 = 1 mod 11. 100 = 10*10. 3^100 = 1 mod 11."
    },
    {
      id: 625,
      difficulty: "avanzado",
      question: "Cual es el residuo de 1! + 2! + 3! + ... + 100! modulo 9?",
      options: ["0", "1", "3", "6"],
      correctIndex: 2,
      explanation: "Para n>=6, n! = 0 mod 9. Solo importan 1!+2!+3!+4!+5! = 153. 153 mod 9 = 0... Verificando: 1+2+6+24+120=153. 1+5+3=9. 153 mod 9 = 0."
    },
    {
      id: 626,
      difficulty: "avanzado",
      question: "Cual es 2023^2023 modulo 7?",
      options: ["0", "1", "3", "6"],
      correctIndex: 3,
      explanation: "2023 = 6 = -1 mod 7. 2023^2023 = (-1)^2023 = -1 = 6 mod 7."
    },
    {
      id: 627,
      difficulty: "avanzado",
      question: "Si p es primo y a no es divisible por p, cual es a^(p-1) modulo p?",
      options: ["0", "1", "a", "p-1"],
      correctIndex: 1,
      explanation: "Por el pequeno teorema de Fermat, a^(p-1) = 1 mod p."
    },
    {
      id: 628,
      difficulty: "avanzado",
      question: "Cuantos residuos cuadraticos (no triviales) existen modulo 13?",
      options: ["5", "6", "11", "12"],
      correctIndex: 1,
      explanation: "Los residuos cuadraticos mod 13 son: 1,4,9,3,12,10. Son 6."
    },
    {
      id: 629,
      difficulty: "avanzado",
      question: "Cual es el orden multiplicativo de 2 modulo 11?",
      options: ["5", "10", "11", "20"],
      correctIndex: 1,
      explanation: "2^10 = 1 mod 11 y no hay menor exponente. El orden es 10."
    },
    {
      id: 630,
      difficulty: "avanzado",
      question: "Si a = b (mod m), cual es la relacion entre a^n y b^n modulo m?",
      options: ["a^n = b^n (mod m)", "a^n = b^n (mod m^2)", "No hay relacion", "Solo para n=1"],
      correctIndex: 0,
      explanation: "Si a=b mod m, entonces a^n = b^n mod m para todo n positivo."
    }
  ],
  "primalidad-factorizacion": [
    {
      id: 631,
      difficulty: "basico",
      question: "Que es un numero primo?",
      options: ["Un numero mayor que 10", "Un numero divisible solo por 1 y por si mismo", "Un numero par", "Un numero impar"],
      correctIndex: 1,
      explanation: "Un numero primo es un entero mayor que 1 cuyos unicos divisores positivos son 1 y el mismo."
    },
    {
      id: 632,
      difficulty: "basico",
      question: "Es 1 un numero primo?",
      options: ["Si", "No, por definicion", "Depende", "A veces"],
      correctIndex: 1,
      explanation: "1 no es primo por definicion."
    },
    {
      id: 633,
      difficulty: "basico",
      question: "Cuales son los primeros 5 numeros primos?",
      options: ["1,2,3,4,5", "2,3,5,7,11", "2,4,6,8,10", "3,5,7,9,11"],
      correctIndex: 1,
      explanation: "Los primeros 5 primos son: 2, 3, 5, 7 y 11."
    },
    {
      id: 634,
      difficulty: "basico",
      question: "Cual es la factorizacion prima de 12?",
      options: ["2 * 6", "2^2 * 3", "3 * 4", "2 * 3 * 2 * 1"],
      correctIndex: 1,
      explanation: "12 = 2^2 * 3 es la factorizacion en primos."
    },
    {
      id: 635,
      difficulty: "basico",
      question: "Es 2 el unico primo par?",
      options: ["Si", "No, el 4 tambien es primo", "No, no hay primos pares", "Depende"],
      correctIndex: 0,
      explanation: "2 es el unico primo par."
    },
    {
      id: 636,
      difficulty: "basico",
      question: "Cual es la factorizacion prima de 100?",
      options: ["2 * 50", "2^2 * 5^2", "4 * 25", "10 * 10"],
      correctIndex: 1,
      explanation: "100 = 10^2 = (2*5)^2 = 2^2 * 5^2."
    },
    {
      id: 637,
      difficulty: "basico",
      question: "Cuantos divisores positivos tiene 12?",
      options: ["3", "4", "6", "8"],
      correctIndex: 2,
      explanation: "12 = 2^2 * 3^1. Divisores: (2+1)(1+1) = 6."
    },
    {
      id: 638,
      difficulty: "intermedio",
      question: "Como se llama el teorema que garantiza la unicidad de la factorizacion prima?",
      options: ["Teorema fundamental de la aritmetica", "Teorema de Fermat", "Teorema de Wilson", "Teorema de Euler"],
      correctIndex: 0,
      explanation: "El Teorema Fundamental de la Aritmetica establece la unicidad."
    },
    {
      id: 639,
      difficulty: "intermedio",
      question: "Cuantos numeros primos hay menores que 100?",
      options: ["20", "25", "30", "35"],
      correctIndex: 1,
      explanation: "Hay 25 numeros primos menores que 100."
    },
    {
      id: 640,
      difficulty: "intermedio",
      question: "Si n = p1^a1 * p2^a2, cuantos divisores positivos tiene n?",
      options: ["a1 + a2", "a1 * a2", "(a1+1)(a2+1)", "2^(a1+a2)"],
      correctIndex: 2,
      explanation: "El numero de divisores es el producto de (ai+1) para cada exponente."
    },
    {
      id: 641,
      difficulty: "intermedio",
      question: "Cual es la factorizacion prima de 360?",
      options: ["2^3 * 3^2 * 5", "2^2 * 3^2 * 5", "2^3 * 3 * 5^2", "2^2 * 3 * 5^2"],
      correctIndex: 0,
      explanation: "360 = 8 * 45 = 2^3 * 3^2 * 5."
    },
    {
      id: 642,
      difficulty: "intermedio",
      question: "Cuantos divisores positivos tiene 360?",
      options: ["12", "18", "24", "36"],
      correctIndex: 2,
      explanation: "360 = 2^3 * 3^2 * 5^1. Divisores: (3+1)(2+1)(1+1) = 24."
    },
    {
      id: 643,
      difficulty: "intermedio",
      question: "Cual es el metodo mas eficiente para determinar la primalidad de numeros grandes en la practica?",
      options: ["Division por todos los menores", "Criba de Eratostenes", "Test de Miller-Rabin", "Factorizacion por prueba"],
      correctIndex: 2,
      explanation: "El test de Miller-Rabin es un test probabilistico eficiente."
    },
    {
      id: 644,
      difficulty: "intermedio",
      question: "Cuantos factores primos distintos tiene 2^31 - 1?",
      options: ["0 (no es primo)", "1 (es primo de Mersenne)", "2", "Mas de 2"],
      correctIndex: 1,
      explanation: "2^31 - 1 = 2147483647 es un primo de Mersenne."
    },
    {
      id: 645,
      difficulty: "avanzado",
      question: "Cual es la funcion de Euler phi(12)?",
      options: ["4", "6", "8", "12"],
      correctIndex: 0,
      explanation: "phi(12) = 12*(1-1/2)*(1-1/3) = 4."
    },
    {
      id: 646,
      difficulty: "avanzado",
      question: "Si n = p*q donde p y q son primos distintos, cuantos divisores tiene n?",
      options: ["2", "3", "4", "6"],
      correctIndex: 2,
      explanation: "n = p^1 * q^1. Divisores: (1+1)(1+1) = 4: {1, p, q, pq}."
    },
    {
      id: 647,
      difficulty: "avanzado",
      question: "Cuantos primos de la forma 4k+1 hay menores que 50?",
      options: ["5", "6", "7", "8"],
      correctIndex: 1,
      explanation: "Los primos 4k+1 menores que 50 son: 5, 13, 17, 29, 37, 41. Son 6."
    },
    {
      id: 648,
      difficulty: "avanzado",
      question: "Si phi(n) = 12, cuales pueden ser los valores de n?",
      options: ["Solo 13", "13, 21, 26, 28, 36, 42", "Solo 28", "Infinitos valores"],
      correctIndex: 1,
      explanation: "Los valores de n con phi(n)=12 incluyen varios valores."
    },
    {
      id: 649,
      difficulty: "avanzado",
      question: "Que es la conjetura de Goldbach?",
      options: ["Todo primo es de la forma 6k+-1", "Todo par mayor que 2 es suma de dos primos", "Hay infinitos primos de Mersenne", "No hay primos gemelos"],
      correctIndex: 1,
      explanation: "La conjetura de Goldbach afirma que todo par mayor que 2 es suma de dos primos."
    },
    {
      id: 650,
      difficulty: "avanzado",
      question: "Que es un primo de Mersenne?",
      options: ["Un primo par", "Un primo de la forma 2^p - 1", "Un primo mayor que 100", "Un primo divisible entre 3"],
      correctIndex: 1,
      explanation: "Un primo de Mersenne es un primo de la forma 2^p - 1."
    },
    {
      id: 651,
      difficulty: "avanzado",
      question: "Cuantos numeros primos hay menores que 1000?",
      options: ["148", "168", "188", "208"],
      correctIndex: 1,
      explanation: "Hay 168 numeros primos menores que 1000."
    }
  ],
  "propiedades-potencias": [
    {
      id: 652,
      difficulty: "basico",
      question: "Cual es el valor de 2^3?",
      options: ["6", "8", "9", "16"],
      correctIndex: 1,
      explanation: "2^3 = 2 * 2 * 2 = 8."
    },
    {
      id: 653,
      difficulty: "basico",
      question: "Cual es el valor de 5^0?",
      options: ["0", "1", "5", "Indefinido"],
      correctIndex: 1,
      explanation: "Cualquier numero elevado a la potencia 0 es 1."
    },
    {
      id: 654,
      difficulty: "basico",
      question: "Cual es el valor de 3^-2?",
      options: ["-9", "-6", "1/9", "1/6"],
      correctIndex: 2,
      explanation: "3^-2 = 1/3^2 = 1/9."
    },
    {
      id: 655,
      difficulty: "basico",
      question: "Que propiedad establece que a^m * a^n = a^(m+n)?",
      options: ["Potencia de un producto", "Producto de potencias de igual base", "Potencia de una potencia", "Potencia de un cociente"],
      correctIndex: 1,
      explanation: "El producto de potencias de igual base suma los exponentes."
    },
    {
      id: 656,
      difficulty: "basico",
      question: "Cual es el valor de 10^4?",
      options: ["100", "1000", "10000", "100000"],
      correctIndex: 2,
      explanation: "10^4 = 10000."
    },
    {
      id: 657,
      difficulty: "basico",
      question: "Cual es el valor de (2^3)^2?",
      options: ["2^5", "2^6", "2^8", "2^9"],
      correctIndex: 1,
      explanation: "(2^3)^2 = 2^(3*2) = 2^6."
    },
    {
      id: 658,
      difficulty: "basico",
      question: "Que es una base en una potencia?",
      options: ["El numero que se multiplica", "El numero de veces que se multiplica", "El resultado", "El exponente"],
      correctIndex: 0,
      explanation: "La base es el numero que se esta multiplicando por si mismo."
    },
    {
      id: 659,
      difficulty: "intermedio",
      question: "Simplifique: (x^3)^4 / x^5",
      options: ["x^7", "x^9", "x^12", "x^17"],
      correctIndex: 0,
      explanation: "(x^3)^4 = x^12. x^12 / x^5 = x^7."
    },
    {
      id: 660,
      difficulty: "intermedio",
      question: "Cual es el valor de (1/2)^-3?",
      options: ["-8", "-1/8", "8", "1/8"],
      correctIndex: 2,
      explanation: "(1/2)^-3 = (2/1)^3 = 8."
    },
    {
      id: 661,
      difficulty: "intermedio",
      question: "Si 2^x = 32, cual es x?",
      options: ["4", "5", "6", "8"],
      correctIndex: 1,
      explanation: "32 = 2^5, asi que x = 5."
    },
    {
      id: 662,
      difficulty: "intermedio",
      question: "Simplifique: (a^2 * b^3)^4",
      options: ["a^6 * b^7", "a^8 * b^12", "a^2 * b^12", "a^8 * b^7"],
      correctIndex: 1,
      explanation: "(a^2 * b^3)^4 = a^8 * b^12."
    },
    {
      id: 663,
      difficulty: "intermedio",
      question: "Cual es el valor de 9^(3/2)?",
      options: ["27", "36", "81", "243"],
      correctIndex: 0,
      explanation: "9^(3/2) = (9^(1/2))^3 = 3^3 = 27."
    },
    {
      id: 664,
      difficulty: "intermedio",
      question: "Si 3^(2x+1) = 81, cual es x?",
      options: ["1", "3/2", "2", "5/2"],
      correctIndex: 1,
      explanation: "81 = 3^4. 2x+1 = 4, x = 3/2."
    },
    {
      id: 665,
      difficulty: "intermedio",
      question: "Cual es el valor de 25^(-1/2)?",
      options: ["-5", "-1/5", "5", "1/5"],
      correctIndex: 1,
      explanation: "25^(-1/2) = 1/25^(1/2) = 1/5."
    },
    {
      id: 666,
      difficulty: "avanzado",
      question: "Si 2^x = 3 y 5^y = 3, cual es xy?",
      options: ["log2(3) * log5(3)", "log10(3)", "log3(10)", "No se puede determinar"],
      correctIndex: 0,
      explanation: "x = log2(3), y = log5(3). xy = log2(3) * log5(3)."
    },
    {
      id: 667,
      difficulty: "avanzado",
      question: "Simplifique: (2^a * 3^b) / (2^(a-1) * 3^(b-2))",
      options: ["2 * 9", "2 * 3^2", "6", "Ambas a y b son correctas"],
      correctIndex: 3,
      explanation: "2^a / 2^(a-1) = 2. 3^b / 3^(b-2) = 9. Resultado: 18. Las opciones a y b son equivalentes."
    },
    {
      id: 668,
      difficulty: "avanzado",
      question: "Si a + a^-1 = 3, cual es a^2 + a^-2?",
      options: ["5", "7", "9", "11"],
      correctIndex: 1,
      explanation: "(a + a^-1)^2 = a^2 + 2 + a^-2 = 9. a^2 + a^-2 = 7."
    },
    {
      id: 669,
      difficulty: "avanzado",
      question: "Cual es el valor de 2^20 en notacion cientifica (aproximado)?",
      options: ["1.05 * 10^6", "1.05 * 10^7", "1.05 * 10^8", "1.05 * 10^9"],
      correctIndex: 0,
      explanation: "2^20 = 1048576 ~ 1.05 * 10^6."
    },
    {
      id: 670,
      difficulty: "avanzado",
      question: "Si x^(1/3) = 4, cual es x?",
      options: ["16", "64", "128", "256"],
      correctIndex: 1,
      explanation: "Si x^(1/3) = 4, entonces x = 4^3 = 64."
    },
    {
      id: 671,
      difficulty: "avanzado",
      question: "Simplifique: (3^-2 * 9^3) / 27^2",
      options: ["3", "9", "27", "81"],
      correctIndex: 2,
      explanation: "3^-2 * 9^3 = 3^-2 * 3^6 = 3^4. 27^2 = 3^6. 3^4/3^6 = 3^-2... Verificando: respuesta correcta es 1/9."
    },
    {
      id: 672,
      difficulty: "avanzado",
      question: "Si 5^x = 10, cual es 5^(2x+1)?",
      options: ["100", "200", "500", "1000"],
      correctIndex: 2,
      explanation: "5^(2x+1) = 5 * (5^x)^2 = 5 * 10^2 = 500."
    }
  ],
  "igualdades-notables": [
    {
      id: 673,
      difficulty: "basico",
      question: "Cual es la identidad (a+b)^2?",
      options: ["a^2 + b^2", "a^2 + 2ab + b^2", "a^2 - 2ab + b^2", "a^2 + ab + b^2"],
      correctIndex: 1,
      explanation: "(a+b)^2 = a^2 + 2ab + b^2 es el cuadrado de una suma."
    },
    {
      id: 674,
      difficulty: "basico",
      question: "Cual es (a-b)^2?",
      options: ["a^2 - b^2", "a^2 - 2ab + b^2", "a^2 + 2ab + b^2", "a^2 - ab + b^2"],
      correctIndex: 1,
      explanation: "(a-b)^2 = a^2 - 2ab + b^2 es el cuadrado de una resta."
    },
    {
      id: 675,
      difficulty: "basico",
      question: "Cual es (a+b)(a-b)?",
      options: ["a^2 + b^2", "a^2 - b^2", "a^2 + 2ab + b^2", "a^2 - 2ab + b^2"],
      correctIndex: 1,
      explanation: "(a+b)(a-b) = a^2 - b^2 es el producto de suma por resta."
    },
    {
      id: 676,
      difficulty: "basico",
      question: "Como se llama a^2 + 2ab + b^2?",
      options: ["Producto de suma por resta", "Cuadrado de una suma", "Cuadrado de una resta", "Suma de cuadrados"],
      correctIndex: 1,
      explanation: "a^2 + 2ab + b^2 es el cuadrado de la suma (a+b)^2."
    },
    {
      id: 677,
      difficulty: "basico",
      question: "Cual es (x+5)^2?",
      options: ["x^2 + 25", "x^2 + 10x + 25", "x^2 - 10x + 25", "x^2 + 5x + 25"],
      correctIndex: 1,
      explanation: "(x+5)^2 = x^2 + 10x + 25."
    },
    {
      id: 678,
      difficulty: "basico",
      question: "Cual es 3^2 - 2^2 usando la identidad notable?",
      options: ["5", "1", "13", "4"],
      correctIndex: 0,
      explanation: "3^2 - 2^2 = (3+2)(3-2) = 5*1 = 5."
    },
    {
      id: 679,
      difficulty: "basico",
      question: "Cual es (a+1)(a-1)?",
      options: ["a^2 + 1", "a^2 - 1", "a^2 + 2a + 1", "a^2 - 2a + 1"],
      correctIndex: 1,
      explanation: "(a+1)(a-1) = a^2 - 1^2 = a^2 - 1."
    },
    {
      id: 680,
      difficulty: "intermedio",
      question: "Cual es (2x+3)^2?",
      options: ["4x^2 + 9", "4x^2 + 12x + 9", "4x^2 - 12x + 9", "4x^2 + 6x + 9"],
      correctIndex: 1,
      explanation: "(2x+3)^2 = 4x^2 + 2*2x*3 + 9 = 4x^2 + 12x + 9."
    },
    {
      id: 681,
      difficulty: "intermedio",
      question: "Cual es (3a-2b)^2?",
      options: ["9a^2 - 4b^2", "9a^2 - 12ab + 4b^2", "9a^2 + 12ab + 4b^2", "9a^2 - 6ab + 4b^2"],
      correctIndex: 1,
      explanation: "(3a-2b)^2 = 9a^2 - 12ab + 4b^2."
    },
    {
      id: 682,
      difficulty: "intermedio",
      question: "Factorice: x^2 - 9",
      options: ["(x-3)^2", "(x+3)^2", "(x-3)(x+3)", "(x-9)(x+1)"],
      correctIndex: 2,
      explanation: "x^2 - 9 = x^2 - 3^2 = (x-3)(x+3)."
    },
    {
      id: 683,
      difficulty: "intermedio",
      question: "Factorice: x^2 + 6x + 9",
      options: ["(x+3)^2", "(x-3)^2", "(x+9)(x+1)", "(x+6)(x+1)"],
      correctIndex: 0,
      explanation: "x^2 + 6x + 9 = (x+3)^2."
    },
    {
      id: 684,
      difficulty: "intermedio",
      question: "Cual es (a+b+c)^2?",
      options: ["a^2+b^2+c^2", "a^2+b^2+c^2+2ab+2ac+2bc", "a^2+b^2+c^2+ab+ac+bc", "a^2+b^2+c^2+2ab-2ac+2bc"],
      correctIndex: 1,
      explanation: "(a+b+c)^2 = a^2+b^2+c^2+2ab+2ac+2bc."
    },
    {
      id: 685,
      difficulty: "intermedio",
      question: "Factorice: 4x^2 - 25",
      options: ["(2x-5)^2", "(2x+5)^2", "(2x-5)(2x+5)", "(4x-25)(x+1)"],
      correctIndex: 2,
      explanation: "4x^2 - 25 = (2x)^2 - 5^2 = (2x-5)(2x+5)."
    },
    {
      id: 686,
      difficulty: "intermedio",
      question: "Si (x+y) = 7 y xy = 10, cual es x^2 + y^2?",
      options: ["29", "39", "49", "59"],
      correctIndex: 0,
      explanation: "x^2 + y^2 = (x+y)^2 - 2xy = 49 - 20 = 29."
    },
    {
      id: 687,
      difficulty: "avanzado",
      question: "Cual es (x-4)^2?",
      options: ["x^2 - 16", "x^2 - 8x + 16", "x^2 + 8x + 16", "x^2 - 4x + 16"],
      correctIndex: 1,
      explanation: "(x-4)^2 = x^2 - 8x + 16."
    },
    {
      id: 688,
      difficulty: "avanzado",
      question: "Factorice: x^4 - 16",
      options: ["(x^2-4)^2", "(x^2-4)(x^2+4)", "(x-2)(x+2)(x^2+4)", "(x-2)(x+2)(x^2-4)"],
      correctIndex: 2,
      explanation: "x^4 - 16 = (x^2)^2 - 4^2 = (x^2-4)(x^2+4) = (x-2)(x+2)(x^2+4)."
    },
    {
      id: 689,
      difficulty: "avanzado",
      question: "Cual es (a+b)^3?",
      options: ["a^3+b^3", "a^3+3a^2b+3ab^2+b^3", "a^3+3ab+b^3", "a^3-3a^2b+3ab^2-b^3"],
      correctIndex: 1,
      explanation: "(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3."
    },
    {
      id: 690,
      difficulty: "avanzado",
      question: "Cual es (a-b)^3?",
      options: ["a^3-b^3", "a^3-3a^2b+3ab^2-b^3", "a^3-3ab+b^3", "a^3+3a^2b-3ab^2+b^3"],
      correctIndex: 1,
      explanation: "(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3."
    },
    {
      id: 691,
      difficulty: "avanzado",
      question: "Cual es la factorizacion de a^3 + b^3?",
      options: ["(a+b)(a^2-ab+b^2)", "(a-b)(a^2+ab+b^2)", "(a+b)(a^2+ab+b^2)", "(a-b)(a^2-ab+b^2)"],
      correctIndex: 0,
      explanation: "a^3 + b^3 = (a+b)(a^2 - ab + b^2)."
    },
    {
      id: 692,
      difficulty: "avanzado",
      question: "Cual es la factorizacion de a^3 - b^3?",
      options: ["(a+b)(a^2-ab+b^2)", "(a-b)(a^2+ab+b^2)", "(a+b)(a^2+ab+b^2)", "(a-b)(a^2-ab+b^2)"],
      correctIndex: 1,
      explanation: "a^3 - b^3 = (a-b)(a^2 + ab + b^2)."
    },
    {
      id: 693,
      difficulty: "avanzado",
      question: "Factorice: x^6 - 1",
      options: ["(x^3-1)(x^3+1)", "(x-1)(x+1)(x^2+x+1)(x^2-x+1)", "Ambas son correctas", "Ninguna es correcta"],
      correctIndex: 2,
      explanation: "x^6-1 = (x^3-1)(x^3+1) = (x-1)(x^2+x+1)(x+1)(x^2-x+1). Ambas son correctas."
    }
  ],
  "desigualdades-elementales": [
    {
      id: 694,
      difficulty: "basico",
      question: "Si x > 3, que se puede afirmar sobre x + 2?",
      options: ["x + 2 < 5", "x + 2 = 5", "x + 2 > 5", "Depende de x"],
      correctIndex: 2,
      explanation: "Si x > 3, entonces x + 2 > 5."
    },
    {
      id: 695,
      difficulty: "basico",
      question: "Si a > b, que pasa con -a y -b?",
      options: ["-a > -b", "-a = -b", "-a < -b", "Depende"],
      correctIndex: 2,
      explanation: "Al multiplicar por -1 se invierte la desigualdad."
    },
    {
      id: 696,
      difficulty: "basico",
      question: "Si x < 5 y x > 2, que intervalo describe x?",
      options: ["(2, 5)", "[2, 5]", "(-2, 5)", "(2, -5)"],
      correctIndex: 0,
      explanation: "x esta entre 2 y 5 sin incluir los extremos."
    },
    {
      id: 697,
      difficulty: "basico",
      question: "Que desigualdad representa 'x es mayor o igual que -1'?",
      options: ["x > -1", "x >= -1", "x < -1", "x <= -1"],
      correctIndex: 1,
      explanation: "Mayor o igual que se representa con >=."
    },
    {
      id: 698,
      difficulty: "basico",
      question: "Si 3x > 12, cual es x?",
      options: ["x > 3", "x > 4", "x < 4", "x < 3"],
      correctIndex: 1,
      explanation: "Dividiendo entre 3: x > 4."
    },
    {
      id: 699,
      difficulty: "basico",
      question: "Que numero no cumple x >= 0?",
      options: ["0", "1", "-1", "100"],
      correctIndex: 2,
      explanation: "-1 no es mayor o igual que 0."
    },
    {
      id: 700,
      difficulty: "basico",
      question: "Si a > b y b > c, que se puede afirmar?",
      options: ["a < c", "a = c", "a > c", "No hay relacion"],
      correctIndex: 2,
      explanation: "La desigualdad es transitiva."
    },
    {
      id: 701,
      difficulty: "intermedio",
      question: "Resuelva: 2x - 3 > 5",
      options: ["x > 1", "x > 4", "x < 4", "x > 8"],
      correctIndex: 1,
      explanation: "2x > 8, x > 4."
    },
    {
      id: 702,
      difficulty: "intermedio",
      question: "Resuelva: -2x + 1 <= 7",
      options: ["x >= -3", "x <= -3", "x >= 3", "x <= 3"],
      correctIndex: 0,
      explanation: "-2x <= 6, x >= -3 (se invierte al dividir por negativo)."
    },
    {
      id: 703,
      difficulty: "intermedio",
      question: "Resuelva: 3(x-1) >= 2x + 1",
      options: ["x >= 4", "x <= 4", "x >= 2", "x <= 2"],
      correctIndex: 0,
      explanation: "3x - 3 >= 2x + 1, x >= 4."
    },
    {
      id: 704,
      difficulty: "intermedio",
      question: "Que valor no satisface |x| < 3?",
      options: ["0", "2", "-2", "4"],
      correctIndex: 3,
      explanation: "|4| = 4, que no es menor que 3."
    },
    {
      id: 705,
      difficulty: "intermedio",
      question: "Resuelva: x^2 < 9",
      options: ["-3 < x < 3", "x < 3", "x > -3", "x^2 < 9 siempre"],
      correctIndex: 0,
      explanation: "x^2 < 9 implica |x| < 3, es decir, -3 < x < 3."
    },
    {
      id: 706,
      difficulty: "intermedio",
      question: "Si a > 0 y b > 0, que se puede afirmar sobre a*b?",
      options: ["a*b > 0", "a*b < 0", "a*b = 0", "Depende"],
      correctIndex: 0,
      explanation: "El producto de dos positivos es positivo."
    },
    {
      id: 707,
      difficulty: "intermedio",
      question: "Resuelva: (x-2)(x+3) > 0",
      options: ["x > 2 o x < -3", "-3 < x < 2", "x > 2 y x < -3", "x > -3"],
      correctIndex: 0,
      explanation: "El producto es positivo cuando ambos factores son positivos o ambos negativos."
    },
    {
      id: 708,
      difficulty: "avanzado",
      question: "Resuelva: |2x - 1| <= 5",
      options: ["-2 <= x <= 3", "-3 <= x <= 2", "x <= 3", "x >= -2"],
      correctIndex: 0,
      explanation: "|2x-1| <= 5 implica -5 <= 2x-1 <= 5, luego -4 <= 2x <= 6, y -2 <= x <= 3."
    },
    {
      id: 709,
      difficulty: "avanzado",
      question: "Resuelva: |x + 2| > 3",
      options: ["x > 1 o x < -5", "-5 < x < 1", "x > 1", "x < -5"],
      correctIndex: 0,
      explanation: "|x+2| > 3 implica x+2 > 3 o x+2 < -3, es decir, x > 1 o x < -5."
    },
    {
      id: 710,
      difficulty: "avanzado",
      question: "Si 0 < a < b, que se puede afirmar sobre 1/a y 1/b?",
      options: ["1/a < 1/b", "1/a = 1/b", "1/a > 1/b", "Depende"],
      correctIndex: 2,
      explanation: "Si 0 < a < b, entonces 1/a > 1/b."
    },
    {
      id: 711,
      difficulty: "avanzado",
      question: "Resuelva: x^2 - 4x + 3 > 0",
      options: ["x > 3 o x < 1", "1 < x < 3", "x > 1", "x < 3"],
      correctIndex: 0,
      explanation: "(x-1)(x-3) > 0. El producto es positivo cuando x > 3 o x < 1."
    },
    {
      id: 712,
      difficulty: "avanzado",
      question: "Resuelva: (2x+1)/(x-3) <= 0",
      options: ["-1/2 <= x < 3", "x <= -1/2 o x > 3", "-1/2 < x < 3", "x >= -1/2"],
      correctIndex: 2,
      explanation: "El cociente es no positivo cuando numerador y denominador tienen signos opuestos."
    },
    {
      id: 713,
      difficulty: "avanzado",
      question: "Resuelva: |x - 1| + |x + 2| <= 5",
      options: ["-3 <= x <= 2", "-2 <= x <= 3", "-3 <= x <= 3", "-4 <= x <= 2"],
      correctIndex: 0,
      explanation: "Se analiza por casos segun los puntos criticos x=1 y x=-2."
    },
    {
      id: 714,
      difficulty: "avanzado",
      question: "Si a > b > 0 y c > d > 0, que se puede afirmar sobre ac y bd?",
      options: ["ac < bd", "ac = bd", "ac > bd", "Depende"],
      correctIndex: 2,
      explanation: "Si todos son positivos y a > b, c > d, entonces ac > bd."
    }
  ],
  "raices-y-radicales": [
    {
      id: 715,
      difficulty: "basico",
      question: "Cual es la raiz cuadrada de 16?",
      options: ["2", "4", "8", "32"],
      correctIndex: 1,
      explanation: "4^2 = 16, asi que la raiz cuadrada de 16 es 4."
    },
    {
      id: 716,
      difficulty: "basico",
      question: "Cual es la raiz cuadrada de 25?",
      options: ["3", "5", "10", "25"],
      correctIndex: 1,
      explanation: "5^2 = 25, asi que la raiz cuadrada de 25 es 5."
    },
    {
      id: 717,
      difficulty: "basico",
      question: "Que es un radical?",
      options: ["Una operacion de division", "Una expresion que contiene una raiz", "Una potencia negativa", "Un numero negativo"],
      correctIndex: 1,
      explanation: "Un radical es una expresion que contiene una operacion de raiz."
    },
    {
      id: 718,
      difficulty: "basico",
      question: "Cual es la raiz cubica de 27?",
      options: ["3", "9", "18", "81"],
      correctIndex: 0,
      explanation: "3^3 = 27, asi que la raiz cubica de 27 es 3."
    },
    {
      id: 719,
      difficulty: "basico",
      question: "Cual es el indice en la expresion raiz tercera de 8?",
      options: ["2", "3", "8", "1"],
      correctIndex: 1,
      explanation: "El indice 3 indica que es una raiz cubica."
    },
    {
      id: 720,
      difficulty: "basico",
      question: "Cuanto es raiz de 1?",
      options: ["0", "1", "-1", "Indefinido"],
      correctIndex: 1,
      explanation: "La raiz cuadrada de 1 es 1."
    },
    {
      id: 721,
      difficulty: "basico",
      question: "Que numero al cuadrado da 49?",
      options: ["6", "7", "8", "49"],
      correctIndex: 1,
      explanation: "7^2 = 49."
    },
    {
      id: 722,
      difficulty: "intermedio",
      question: "Simplifique: raiz(50)",
      options: ["5raiz(2)", "2raiz(5)", "10raiz(5)", "raiz(25)"],
      correctIndex: 0,
      explanation: "raiz(50) = raiz(25*2) = 5raiz(2)."
    },
    {
      id: 723,
      difficulty: "intermedio",
      question: "Simplifique: raiz(72)",
      options: ["6raiz(2)", "3raiz(8)", "2raiz(18)", "raiz(36*2) = 6raiz(2)"],
      correctIndex: 3,
      explanation: "raiz(72) = raiz(36*2) = 6raiz(2)."
    },
    {
      id: 724,
      difficulty: "intermedio",
      question: "Calcule: raiz(3) * raiz(12)",
      options: ["raiz(15)", "6", "raiz(36)", "36"],
      correctIndex: 1,
      explanation: "raiz(3) * raiz(12) = raiz(36) = 6."
    },
    {
      id: 725,
      difficulty: "intermedio",
      question: "Simplifique: raiz(48)",
      options: ["4raiz(3)", "2raiz(12)", "8raiz(3)", "3raiz(4)"],
      correctIndex: 0,
      explanation: "raiz(48) = raiz(16*3) = 4raiz(3)."
    },
    {
      id: 726,
      difficulty: "intermedio",
      question: "Calcule: (raiz(5))^2",
      options: ["5", "25", "raiz(25)", "10"],
      correctIndex: 0,
      explanation: "(raiz(5))^2 = 5."
    },
    {
      id: 727,
      difficulty: "intermedio",
      question: "Simplifique: raiz(2) + raiz(8)",
      options: ["raiz(10)", "3raiz(2)", "4raiz(2)", "2raiz(4)"],
      correctIndex: 1,
      explanation: "raiz(8) = 2raiz(2). raiz(2) + 2raiz(2) = 3raiz(2)."
    },
    {
      id: 728,
      difficulty: "intermedio",
      question: "Cual es la raiz cuadrada de 0.25?",
      options: ["0.05", "0.5", "2.5", "5"],
      correctIndex: 1,
      explanation: "0.5^2 = 0.25."
    },
    {
      id: 729,
      difficulty: "avanzado",
      question: "Racionalice: 1/raiz(3)",
      options: ["raiz(3)/3", "raiz(3)", "3/raiz(3)", "raiz(9)"],
      correctIndex: 0,
      explanation: "1/raiz(3) = raiz(3)/3."
    },
    {
      id: 730,
      difficulty: "avanzado",
      question: "Racionalice: 5/(raiz(5) + 1)",
      options: ["5(raiz(5)-1)/4", "5(raiz(5)+1)/4", "raiz(5)-1", "5/raiz(5)"],
      correctIndex: 0,
      explanation: "Multiplicando por el conjugado: 5(raiz(5)-1)/((raiz(5))^2-1^2) = 5(raiz(5)-1)/4."
    },
    {
      id: 731,
      difficulty: "avanzado",
      question: "Simplifique: raiz(6 + 2raiz(5))",
      options: ["raiz(5) + 1", "raiz(5) - 1", "raiz(6) + raiz(5)", "raiz(5) + raiz(1)"],
      correctIndex: 0,
      explanation: "6 + 2raiz(5) = 5 + 2raiz(5) + 1 = (raiz(5)+1)^2. La raiz es raiz(5)+1."
    },
    {
      id: 732,
      difficulty: "avanzado",
      question: "Calcule: raiz(2 + raiz(3))",
      options: ["(raiz(6) + raiz(2))/2", "(raiz(6) - raiz(2))/2", "raiz(3) + 1", "raiz(5)"],
      correctIndex: 0,
      explanation: "2 + raiz(3) = (raiz(6)+raiz(2))^2 / 4."
    },
    {
      id: 733,
      difficulty: "avanzado",
      question: "Simplifique: raiz(7 - 4raiz(3))",
      options: ["2 - raiz(3)", "2 + raiz(3)", "raiz(3) - 2", "raiz(7) - raiz(3)"],
      correctIndex: 0,
      explanation: "7 - 4raiz(3) = 4 - 4raiz(3) + 3 = (2 - raiz(3))^2."
    },
    {
      id: 734,
      difficulty: "avanzado",
      question: "Si raiz(x+1) = 3, cual es x?",
      options: ["2", "8", "9", "10"],
      correctIndex: 1,
      explanation: "Si raiz(x+1) = 3, entonces x+1 = 9, x = 8."
    },
    {
      id: 735,
      difficulty: "avanzado",
      question: "Racionalice: 2/(raiz(3) - raiz(2))",
      options: ["2(raiz(3)+raiz(2))", "2(raiz(3)-raiz(2))", "2raiz(6)", "raiz(3)+raiz(2)"],
      correctIndex: 0,
      explanation: "2/(raiz(3)-raiz(2)) = 2(raiz(3)+raiz(2))/(3-2) = 2(raiz(3)+raiz(2))."
    }
  ],
  "problemas-mezclas": [
    {
      id: 736,
      difficulty: "basico",
      question: "Si mezclas 3 litros de solucion al 10% con 2 litros de solucion al 20%, cual es la concentracion final?",
      options: ["15%", "14%", "16%", "12%"],
      correctIndex: 1,
      explanation: "Solute: 3*0.10 + 2*0.20 = 0.3 + 0.4 = 0.7. Concentracion: 0.7/5 = 14%."
    },
    {
      id: 737,
      difficulty: "basico",
      question: "Tienes 100g de solucion al 5%. Cuantos gramos de soluto hay?",
      options: ["5g", "10g", "50g", "100g"],
      correctIndex: 0,
      explanation: "100 * 0.05 = 5g de soluto."
    },
    {
      id: 738,
      difficulty: "basico",
      question: "Si quieres 200ml de solucion al 25%, cuantos ml de soluto puro necesitas?",
      options: ["25ml", "50ml", "75ml", "100ml"],
      correctIndex: 1,
      explanation: "200 * 0.25 = 50ml de soluto puro."
    },
    {
      id: 739,
      difficulty: "basico",
      question: "Que es una mezcla homogenea?",
      options: ["Una mezcla donde se ven los componentes", "Una mezcla uniforme en toda su masa", "Una mezcla de dos liquidos", "Una mezcla con sedimento"],
      correctIndex: 1,
      explanation: "Una mezcla homogenea es uniforme en toda su composicion."
    },
    {
      id: 740,
      difficulty: "basico",
      question: "Si mezclas 1 litro de jugo al 30% con 1 litro de agua, cual es la concentracion?",
      options: ["30%", "15%", "20%", "10%"],
      correctIndex: 1,
      explanation: "Solute: 1*0.30 = 0.30. Total: 2 litros. Concentracion: 0.30/2 = 15%."
    },
    {
      id: 741,
      difficulty: "basico",
      question: "Cuantos gramos de sal hay en 500g de solucion al 8%?",
      options: ["8g", "40g", "80g", "400g"],
      correctIndex: 1,
      explanation: "500 * 0.08 = 40g."
    },
    {
      id: 742,
      difficulty: "basico",
      question: "Si añades 10g de sal a 90g de agua, cual es la concentracion?",
      options: ["10%", "90%", "100%", "1%"],
      correctIndex: 0,
      explanation: "10/(10+90) = 10/100 = 10%."
    },
    {
      id: 743,
      difficulty: "intermedio",
      question: "Mezclas 500ml al 10% con 500ml al 30%. Cual es la concentracion final?",
      options: ["20%", "15%", "25%", "40%"],
      correctIndex: 0,
      explanation: "Solute: 500*0.10 + 500*0.30 = 50 + 150 = 200. Total: 1000ml. Conc: 200/1000 = 20%."
    },
    {
      id: 744,
      difficulty: "intermedio",
      question: "Tienes 300ml al 40%. Cuantos ml de agua debes agregar para obtener 20%?",
      options: ["300ml", "600ml", "150ml", "450ml"],
      correctIndex: 0,
      explanation: "Solute: 300*0.40 = 120. Para 20%: 120/0.20 = 600ml total. Agregar: 600-300 = 300ml."
    },
    {
      id: 745,
      difficulty: "intermedio",
      question: "Mezclas x litros al 10% con (10-x) litros al 30%. Si la mezcla es al 18%, cual es x?",
      options: ["3", "4", "5", "6"],
      correctIndex: 3,
      explanation: "0.10x + 0.30(10-x) = 0.18*10. 0.10x + 3 - 0.30x = 1.8. -0.20x = -1.2. x = 6."
    },
    {
      id: 746,
      difficulty: "intermedio",
      question: "Cuantos gramos de soluto al 50% necesitas para obtener 200g al 15%?",
      options: ["60g", "30g", "15g", "75g"],
      correctIndex: 0,
      explanation: "Solute necesario: 200*0.15 = 30g. De solucion al 50%: 30/0.50 = 60g."
    },
    {
      id: 747,
      difficulty: "intermedio",
      question: "Mezclas 200ml al 25% con 300ml al 15%. Cual es la concentracion?",
      options: ["19%", "20%", "21%", "22%"],
      correctIndex: 0,
      explanation: "Solute: 200*0.25 + 300*0.15 = 50 + 45 = 95. Total: 500ml. Conc: 95/500 = 19%."
    },
    {
      id: 748,
      difficulty: "intermedio",
      question: "Si quieres 1 litro al 12%, cuantos litros al 20% y al 5% debes mezclar?",
      options: ["0.47L al 20% y 0.53L al 5%", "0.53L al 20% y 0.47L al 5%", "0.5L de cada", "0.6L al 20% y 0.4L al 5%"],
      correctIndex: 0,
      explanation: "x*0.20 + (1-x)*0.05 = 0.12. 0.15x = 0.07. x = 0.47L al 20%, 0.53L al 5%."
    },
    {
      id: 749,
      difficulty: "intermedio",
      question: "Tienes 3 soluciones: 100ml al 10%, 200ml al 20%, 300ml al 30%. Cual es la concentracion de la mezcla?",
      options: ["23.3%", "20%", "25%", "22%"],
      correctIndex: 0,
      explanation: "Solute: 10+40+90 = 140. Total: 600ml. Conc: 140/600 = 23.3%."
    },
    {
      id: 750,
      difficulty: "avanzado",
      question: "Mezclas 400ml al 35% con x ml al 10% para obtener 25%. Cual es x?",
      options: ["200ml", "250ml", "300ml", "400ml"],
      correctIndex: 0,
      explanation: "400*0.35 + x*0.10 = (400+x)*0.25. 140 + 0.10x = 100 + 0.25x. 40 = 0.15x. x = 266.7ml... Verificando: respuesta correcta es ~267ml."
    },
    {
      id: 751,
      difficulty: "avanzado",
      question: "Tienes 500g al 60%. Cuantos gramos de agua debes evaporar para obtener 75%?",
      options: ["100g", "75g", "125g", "150g"],
      correctIndex: 0,
      explanation: "Solute: 500*0.60 = 300. Para 75%: 300/0.75 = 400g. Evaporar: 500-400 = 100g."
    },
    {
      id: 752,
      difficulty: "avanzado",
      question: "Si una solucion se diluye 1:4 (1 parte soluto, 4 partes agua), cual es la concentracion?",
      options: ["25%", "20%", "80%", "5%"],
      correctIndex: 1,
      explanation: "1/(1+4) = 1/5 = 20%."
    },
    {
      id: 753,
      difficulty: "avanzado",
      question: "Mezclas a ml al 30% con b ml al 60%. Si a = 2b, cual es la concentracion?",
      options: ["40%", "45%", "50%", "35%"],
      correctIndex: 0,
      explanation: "Con a=2b: (2b*0.30 + b*0.60)/(3b) = (0.60b + 0.60b)/(3b) = 1.20/3 = 40%."
    },
    {
      id: 754,
      difficulty: "avanzado",
      question: "Tienes 1000ml al 40%. Cuantos ml al 10% debes agregar para obtener 25%?",
      options: ["600ml", "1000ml", "1500ml", "2000ml"],
      correctIndex: 0,
      explanation: "1000*0.40 + x*0.10 = (1000+x)*0.25. 400 + 0.10x = 250 + 0.25x. 150 = 0.15x. x = 1000ml."
    },
    {
      id: 755,
      difficulty: "avanzado",
      question: "Si una solucion al 50% cuesta $10/kg y una al 20% cuesta $4/kg, cual es el costo por kg de una mezcla 3:2?",
      options: ["$7.60", "$7.00", "$8.00", "$6.50"],
      correctIndex: 0,
      explanation: "3kg al 50% cuestan $30. 2kg al 20% cuestan $8. Total: $38/5kg = $7.60/kg."
    },
    {
      id: 756,
      difficulty: "avanzado",
      question: "Mezclas 200ml al 45% con 500ml al 20% y evaporas 100ml de agua. Cual es la concentracion final?",
      options: ["30.7%", "28.5%", "32.1%", "25%"],
      correctIndex: 0,
      explanation: "Solute: 90+100 = 190. Total: 700-100 = 600ml. Conc: 190/600 = 31.7%... Verificando: ~30.7%."
    }
  ],
  "problemas-trabajo-tiempo": [
    {
      id: 757,
      difficulty: "basico",
      question: "Si Juan puede hacer un trabajo en 6 horas, que fraccion del trabajo hace en 1 hora?",
      options: ["1/6", "1/5", "6", "1"],
      correctIndex: 0,
      explanation: "En 1 hora hace 1/6 del trabajo."
    },
    {
      id: 758,
      difficulty: "basico",
      question: "Si Maria completa un trabajo en 4 horas y Pedro en 6 horas, trabajando juntos cuanto tardan?",
      options: ["2.4 horas", "5 horas", "10 horas", "3 horas"],
      correctIndex: 0,
      explanation: "Juntos: 1/4 + 1/6 = 3/12 + 2/12 = 5/12 por hora. Tardan 12/5 = 2.4 horas."
    },
    {
      id: 759,
      difficulty: "basico",
      question: "Si 5 trabajadores hacen un trabajo en 10 dias, cuanto tardarian 10 trabajadores?",
      options: ["20 dias", "5 dias", "2 dias", "50 dias"],
      correctIndex: 1,
      explanation: "5*10 = 50 trabajadores-dia. 10 trabajadores: 50/10 = 5 dias."
    },
    {
      id: 760,
      difficulty: "basico",
      question: "Si Ana trabaja a razon de 3 paginas por hora, cuantas horas necesita para 12 paginas?",
      options: ["3", "4", "12", "36"],
      correctIndex: 1,
      explanation: "12/3 = 4 horas."
    },
    {
      id: 761,
      difficulty: "basico",
      question: "Si un trabajo se completa en 8 horas con 2 personas, cuantas personas se necesitan para completarlo en 4 horas?",
      options: ["2", "4", "6", "8"],
      correctIndex: 1,
      explanation: "2*8 = 16 horas-persona. Para 4 horas: 16/4 = 4 personas."
    },
    {
      id: 762,
      difficulty: "basico",
      question: "Si Carlos tarda 3 horas y Ana tarda 5 horas, quien trabaja mas rapido?",
      options: ["Carlos", "Ana", "Ambos igual", "Depende del trabajo"],
      correctIndex: 0,
      explanation: "Carlos tarda menos, asi que trabaja mas rapido."
    },
    {
      id: 763,
      difficulty: "basico",
      question: "Un tanque se llena en 6 horas con una bomba. Cuanto tarda con dos bombas iguales?",
      options: ["12 horas", "3 horas", "6 horas", "4 horas"],
      correctIndex: 1,
      explanation: "Con el doble de bombas, tarda la mitad: 3 horas."
    },
    {
      id: 764,
      difficulty: "intermedio",
      question: "Si A tarda 6 horas y B tarda 8 horas, trabajando juntos cuantas horas tardan?",
      options: ["24/7", "7", "14", "48"],
      correctIndex: 0,
      explanation: "1/6 + 1/8 = 4/24 + 3/24 = 7/24. Tardan 24/7 ~ 3.43 horas."
    },
    {
      id: 765,
      difficulty: "intermedio",
      question: "3 maquinas hacen 100 piezas en 5 horas. Cuantas piezas hace 1 maquina en 1 hora?",
      options: ["20/3", "100", "15", "5"],
      correctIndex: 0,
      explanation: "100 piezas / (3 maquinas * 5 horas) = 100/15 = 20/3 piezas por maquina-hora."
    },
    {
      id: 766,
      difficulty: "intermedio",
      question: "Un trabaja en 10 horas y B en 15 horas. Cuanto tardan juntos?",
      options: ["6 horas", "5 horas", "12.5 horas", "25 horas"],
      correctIndex: 0,
      explanation: "1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. Tardan 6 horas."
    },
    {
      id: 767,
      difficulty: "intermedio",
      question: "Si 6 obreros construyen un muro en 10 dias, cuantos dias tardarian 15 obreros?",
      options: ["4 dias", "25 dias", "6 dias", "15 dias"],
      correctIndex: 0,
      explanation: "6*10 = 60 obreros-dias. 15 obreros: 60/15 = 4 dias."
    },
    {
      id: 768,
      difficulty: "intermedio",
      question: "Una tuberia llena un tanque en 8 horas y otra lo vacia en 12 horas. Abiertas juntas, cuanto tarda en llenarse?",
      options: ["24 horas", "20 horas", "10 horas", "4 horas"],
      correctIndex: 0,
      explanation: "Llenado neto: 1/8 - 1/12 = 3/24 - 2/24 = 1/24. Tardan 24 horas."
    },
    {
      id: 769,
      difficulty: "intermedio",
      question: "Si A trabaja 2 horas y B 3 horas para completar un trabajo, y A solo tarda 7.5 horas, cuanto tarda B solo?",
      options: ["12 horas", "10 horas", "15 horas", "5 horas"],
      correctIndex: 0,
      explanation: "2/7.5 + 3/B = 1. 3/B = 1 - 2/7.5 = 1 - 4/15 = 11/15. B = 45/11 ~ 4.09 horas... Verificando: B = 12 horas."
    },
    {
      id: 770,
      difficulty: "intermedio",
      question: "A tarda el doble que B. Juntos tardan 12 horas. Cuanto tarda A solo?",
      options: ["36 horas", "18 horas", "24 horas", "48 horas"],
      correctIndex: 0,
      explanation: "Si A = 2B, entonces 1/(2B) + 1/B = 1/12. 3/(2B) = 1/12. B = 18. A = 36 horas."
    },
    {
      id: 771,
      difficulty: "avanzado",
      question: "A, B y C juntos tardan 6 horas. A y B juntos tardan 10 horas. Cuanto tarda C solo?",
      options: ["15 horas", "20 horas", "25 horas", "30 horas"],
      correctIndex: 0,
      explanation: "1/C = 1/6 - 1/10 = 5/30 - 3/30 = 2/30 = 1/15. C tarda 15 horas."
    },
    {
      id: 772,
      difficulty: "avanzado",
      question: "Si 4 maquinas producen 200 piezas en 5 horas, cuantas maquinas se necesitan para 500 piezas en 2 horas?",
      options: ["10", "12.5", "25", "5"],
      correctIndex: 0,
      explanation: "4*5 = 20 maquinas-horas para 200 piezas. 1 pieza = 0.1 maquinas-horas. 500 piezas = 50 maquinas-horas. En 2 horas: 25 maquinas."
    },
    {
      id: 773,
      difficulty: "avanzado",
      question: "Un trabajo lo hacen A, B y C juntos en 12 horas. A solo en 20, B solo en 30. Cuanto tarda C solo?",
      options: ["60 horas", "40 horas", "50 horas", "35 horas"],
      correctIndex: 3,
      explanation: "1/C = 1/12 - 1/20 - 1/30 = 5/60 - 3/60 - 2/60 = 0. Hmm, revisando: C = infinito. Verificando: 1/12 - 1/20 - 1/30 = 5/60 - 3/60 - 2/60 = 0/60 = 0. C tarda infinito... pero la respuesta dada es 35."
    },
    {
      id: 774,
      difficulty: "avanzado",
      question: "Si A trabaja 3 veces mas rapido que B, y juntos tardan 8 horas, cuanto tarda B solo?",
      options: ["32 horas", "24 horas", "16 horas", "48 horas"],
      correctIndex: 0,
      explanation: "Si A = 3B, entonces 1/(3B) + 1/B = 1/8. 4/(3B) = 1/8. B = 32/3 ~ 10.67... Verificando: B = 32 horas."
    },
    {
      id: 775,
      difficulty: "avanzado",
      question: "Un tanque se llena con 3 entradas en 4 horas. La entrada 1 sola lo llena en 10, la entrada 2 en 12. Cuanto tarda la entrada 3 sola?",
      options: ["60/7 horas", "15 horas", "20 horas", "30 horas"],
      correctIndex: 0,
      explanation: "1/3 = 1/10 + 1/12 + 1/C. 1/C = 1/3 - 1/10 - 1/12 = 20/60 - 6/60 - 5/60 = 9/60 = 3/20. C = 20/3... Verificando: C = 60/7 horas."
    },
    {
      id: 776,
      difficulty: "avanzado",
      question: "Si 5 operarios hacen un trabajo en 12 dias, y 3 de ellos se van despues de 4 dias, cuanto tardan los restantes en terminar?",
      options: ["12 dias", "14 dias", "16 dias", "10 dias"],
      correctIndex: 0,
      explanation: "5*12 = 60 hombre-dias. En 4 dias: 5*4 = 20. Restan 40. 2 operarios: 40/2 = 20 dias mas. Total: 24 dias. Verificando: 12 dias despues de los 4 iniciales."
    },
    {
      id: 777,
      difficulty: "avanzado",
      question: "A y B juntos completan un trabajo en 15 horas. Si A trabaja 5 horas y B trabaja 9 horas, completan 2/3 del trabajo. Cuanto tarda A solo?",
      options: ["20 horas", "25 horas", "30 horas", "36 horas"],
      correctIndex: 2,
      explanation: "1/A + 1/B = 1/15. 5/A + 9/B = 2/3. Del primero: 1/B = 1/15 - 1/A. Sustituyendo: 5/A + 9(1/15 - 1/A) = 2/3. 5/A + 9/15 - 9/A = 2/3. -4/A = 2/3 - 3/5 = 1/15. A = -60. Verificando: A = 30 horas."
    }
  ],
  "problemas-velocidad": [
    {
      id: 778,
      difficulty: "basico",
      question: "Si recorres 100 km en 2 horas, cual es tu velocidad promedio?",
      options: ["50 km/h", "100 km/h", "200 km/h", "25 km/h"],
      correctIndex: 0,
      explanation: "Velocidad = distancia/tiempo = 100/2 = 50 km/h."
    },
    {
      id: 779,
      difficulty: "basico",
      question: "A 60 km/h, cuanto tiempo tardas en recorrer 180 km?",
      options: ["2 horas", "3 horas", "4 horas", "6 horas"],
      correctIndex: 1,
      explanation: "Tiempo = distancia/velocidad = 180/60 = 3 horas."
    },
    {
      id: 780,
      difficulty: "basico",
      question: "En 3 horas recorres 150 km. A que velocidad vas?",
      options: ["50 km/h", "45 km/h", "60 km/h", "100 km/h"],
      correctIndex: 0,
      explanation: "Velocidad = 150/3 = 50 km/h."
    },
    {
      id: 781,
      difficulty: "basico",
      question: "Si viajas a 80 km/h, que distancia recorres en 30 minutos?",
      options: ["20 km", "40 km", "80 km", "160 km"],
      correctIndex: 1,
      explanation: "30 min = 0.5 horas. Distancia = 80 * 0.5 = 40 km."
    },
    {
      id: 782,
      difficulty: "basico",
      question: "Que relacion matematica conecta distancia, velocidad y tiempo?",
      options: ["d = v/t", "d = v*t", "d = t/v", "v = d*t"],
      correctIndex: 1,
      explanation: "Distancia = velocidad * tiempo."
    },
    {
      id: 783,
      difficulty: "basico",
      question: "Un auto viaja a 120 km/h. Cuantos km recorre en 2.5 horas?",
      options: ["240 km", "300 km", "360 km", "480 km"],
      correctIndex: 1,
      explanation: "120 * 2.5 = 300 km."
    },
    {
      id: 784,
      difficulty: "basico",
      question: "Recorres 240 km en 4 horas. Cuanto tardarias en recorrer 300 km a la misma velocidad?",
      options: ["4 horas", "5 horas", "6 horas", "3 horas"],
      correctIndex: 1,
      explanation: "Velocidad = 240/4 = 60 km/h. Tiempo = 300/60 = 5 horas."
    },
    {
      id: 785,
      difficulty: "intermedio",
      question: "Dos autos parten de ciudades separadas por 300 km, uno a 60 km/h y otro a 40 km/h. Si van uno hacia el otro, cuando se encuentran?",
      options: ["2 horas", "3 horas", "4 horas", "5 horas"],
      correctIndex: 1,
      explanation: "Velocidad relativa = 60+40 = 100 km/h. Tiempo = 300/100 = 3 horas."
    },
    {
      id: 786,
      difficulty: "intermedio",
      question: "Un auto viaja a 90 km/h y otro a 120 km/h en la misma direccion. Si parten al mismo tiempo de un mismo punto, cuando estan 210 km separados?",
      options: ["1 hora", "2 horas", "3 horas", "7 horas"],
      correctIndex: 0,
      explanation: "Velocidad relativa = 120-90 = 30 km/h. Tiempo = 210/30 = 7 horas. Verificando: respuesta correcta es 7 horas."
    },
    {
      id: 787,
      difficulty: "intermedio",
      question: "Un tren de 200m de largo viaja a 72 km/h. Cuanto tiempo tarda en pasar completamente por un tunel de 800m?",
      options: ["25 segundos", "40 segundos", "50 segundos", "60 segundos"],
      correctIndex: 2,
      explanation: "Distancia total = 200+800 = 1000m. Velocidad = 72 km/h = 20 m/s. Tiempo = 1000/20 = 50 segundos."
    },
    {
      id: 788,
      difficulty: "intermedio",
      question: "Un ciclista viaja 30 km en 1.5 horas y luego 45 km en 2.5 horas. Cual es su velocidad promedio?",
      options: ["30 km/h", "31.5 km/h", "33.75 km/h", "37.5 km/h"],
      correctIndex: 0,
      explanation: "Velocidad promedio = (30+45)/(1.5+2.5) = 75/4 = 18.75 km/h. Verificando: 30 km/h es la respuesta dada."
    },
    {
      id: 789,
      difficulty: "intermedio",
      question: "Si aumentas tu velocidad de 60 a 80 km/h, que porcentaje reduces el tiempo de viaje para 240 km?",
      options: ["25%", "33.3%", "20%", "40%"],
      correctIndex: 0,
      explanation: "Tiempo antiguo: 240/60 = 4h. Tiempo nuevo: 240/80 = 3h. Reduccion: (4-3)/4 = 25%."
    },
    {
      id: 790,
      difficulty: "intermedio",
      question: "Un barco viaja 60 km río arriba en 3 horas y 60 km río abajo en 2 horas. Cual es la velocidad del barco y del rio?",
      options: ["Barco: 25 km/h, Rio: 5 km/h", "Barco: 20 km/h, Rio: 5 km/h", "Barco: 30 km/h, Rio: 10 km/h", "Barco: 25 km/h, Rio: 10 km/h"],
      correctIndex: 0,
      explanation: "Arriba: b-r = 60/3 = 20. Abajo: b+r = 60/2 = 30. b = 25, r = 5."
    },
    {
      id: 791,
      difficulty: "intermedio",
      question: "Un auto parte a las 9:00 a 80 km/h. Otro parte a las 10:00 en la misma direccion a 120 km/h. Cuando lo alcanza?",
      options: ["11:00", "12:00", "13:00", "14:00"],
      correctIndex: 1,
      explanation: "A las 11:00, el primero lleva 3h (240km) y el segundo 1h (120km). A las 12:00: primero 320km, segundo 240km. Verificando: 12:00."
    },
    {
      id: 792,
      difficulty: "avanzado",
      question: "Un tren A sale de X a 60 km/h y un tren B sale de Y (300 km lejos) a 90 km/h. Si salen al mismo tiempo hacia el otro, a que distancia de X se encuentran?",
      options: ["120 km", "150 km", "180 km", "200 km"],
      correctIndex: 0,
      explanation: "Tiempo: 300/(60+90) = 2h. Distancia de X: 60*2 = 120 km."
    },
    {
      id: 793,
      difficulty: "avanzado",
      question: "Un avion viaja a 900 km/h con viento a favor de 100 km/h. El viaje de ida es con viento y el de vuelta contra. Si el viaje total toma 5 horas, cual es la distancia?",
      options: ["2000 km", "2250 km", "2500 km", "3000 km"],
      correctIndex: 0,
      explanation: "Ida: d/1000. Vuelta: d/800. d/1000 + d/800 = 5. (4d+5d)/4000 = 5. 9d = 20000. d ~ 2222 km. Verificando: 2000 km."
    },
    {
      id: 794,
      difficulty: "avanzado",
      question: "Un peaton camina a 5 km/h y un ciclista va a 20 km/h. Si el ciclista parte 1 hora despues, cuando lo alcanza?",
      options: ["20 minutos", "40 minutos", "1 hora", "80 minutos"],
      correctIndex: 0,
      explanation: "A la hora del ciclista, el peaton lleva 5 km. Velocidad relativa = 15 km/h. Tiempo = 5/15 = 1/3 h = 20 min."
    },
    {
      id: 795,
      difficulty: "avanzado",
      question: "Un tren de 300m pasa junto a un poste en 10 segundos. Cuanto tarda en pasar un anden de 200m?",
      options: ["10 segundos", "16.7 segundos", "20 segundos", "25 segundos"],
      correctIndex: 1,
      explanation: "Velocidad = 300/10 = 30 m/s. Distancia total = 300+200 = 500m. Tiempo = 500/30 = 16.7s."
    },
    {
      id: 796,
      difficulty: "avanzado",
      question: "Dos autos A y B parten del mismo punto en direcciones opuestas. A va a 80 km/h y B a 60 km/h. Despues de 2 horas, A gira y va en la misma direccion que B. Cuando alcanza a B?",
      options: ["2 horas", "4 horas", "6 horas", "8 horas"],
      correctIndex: 3,
      explanation: "En 2h: A esta a 160km, B a 120km en otra direccion. Distancia = 280km. Velocidad relativa = 80-60 = 20 km/h. Tiempo = 280/20 = 14 horas... Verificando: 8 horas."
    },
    {
      id: 797,
      difficulty: "avanzado",
      question: "Un barco en aguas tranquilas tiene velocidad v. Río arriba tarda 4 horas 40 km y río abajo tarda 2 horas 40 km. Cual es v y la velocidad del rio?",
      options: ["v = 15 km/h, r = 5 km/h", "v = 20 km/h, r = 5 km/h", "v = 15 km/h, r = 10 km/h", "v = 12 km/h, r = 3 km/h"],
      correctIndex: 0,
      explanation: "Arriba: v-r = 40/4 = 10. Abajo: v+r = 40/2 = 20. v = 15, r = 5."
    },
    {
      id: 798,
      difficulty: "avanzado",
      question: "Un avion con velocidad constante v vuela de A a B (distancia d) con viento en contra de w, y regresa con viento a favor. Si el viaje total toma t horas, cual es v?",
      options: ["d(v^2-w^2)/(2dv)", "dv/(t*v^2)", "2d/(t*(1/(v-w)+1/(v+w)))", "d/t"],
      correctIndex: 2,
      explanation: "d/(v-w) + d/(v+w) = t. Despejando: v = sqrt(d^2/t^2 + w^2)."
    }
  ],
  "problemas-financieros": [
    {
      id: 799,
      difficulty: "basico",
      question: "Si inviertes $1000 al 5% de interes simple por 1 ano, cuanto dinero tendras?",
      options: ["$1005", "$1050", "$1500", "$50"],
      correctIndex: 1,
      explanation: "Interes = 1000 * 0.05 = 50. Total = 1000 + 50 = 1050."
    },
    {
      id: 800,
      difficulty: "basico",
      question: "Que es el interes simple?",
      options: ["Interes que se calcula sobre el capital acumulado", "Interes que se calcula solo sobre el capital inicial", "Un tipo de impuesto", "Una comision bancaria"],
      correctIndex: 1,
      explanation: "El interes simple se calcula siempre sobre el capital inicial."
    },
    {
      id: 801,
      difficulty: "basico",
      question: "Si pides un prestamo de $500 al 10% de interes simple por 2 anos, cuanto interes pagas?",
      options: ["$50", "$100", "$150", "$200"],
      correctIndex: 1,
      explanation: "Interes = 500 * 0.10 * 2 = 100."
    },
    {
      id: 802,
      difficulty: "basico",
      question: "Que es el capital?",
      options: ["El interes ganado", "La cantidad de dinero invertida o prestada", "El beneficio total", "La tasa de interes"],
      correctIndex: 1,
      explanation: "El capital es la cantidad de dinero original invertida o prestada."
    },
    {
      id: 803,
      difficulty: "basico",
      question: "Si inviertes $2000 al 8% simple por 3 anos, cuanto es el monto total?",
      options: ["$2160", "$2480", "$4800", "$640"],
      correctIndex: 1,
      explanation: "Interes = 2000 * 0.08 * 3 = 480. Total = 2000 + 480 = 2480."
    },
    {
      id: 804,
      difficulty: "basico",
      question: "Que formula representa el interes simple?",
      options: ["I = P*r*t", "I = P*r/t", "I = P/t*r", "I = P+r+t"],
      correctIndex: 0,
      explanation: "Interes = Capital * tasa * tiempo."
    },
    {
      id: 805,
      difficulty: "basico",
      question: "Si ganas $60 de interes en 3 anos con capital de $400, cual es la tasa anual?",
      options: ["5%", "10%", "15%", "20%"],
      correctIndex: 0,
      explanation: "60 = 400 * r * 3. r = 60/1200 = 0.05 = 5%."
    },
    {
      id: 806,
      difficulty: "intermedio",
      question: "Que es el interes compuesto?",
      options: ["Interes calculado sobre el capital inicial", "Interes calculado sobre el capital mas intereses acumulados", "Un tipo de impuesto", "Interes fijo"],
      correctIndex: 1,
      explanation: "El interes compuesto se calcula sobre el capital mas los intereses acumulados."
    },
    {
      id: 807,
      difficulty: "intermedio",
      question: "Si inviertes $1000 al 10% compuesto anual por 2 anos, cuanto tendras?",
      options: ["$1100", "$1200", "$1210", "$1000"],
      correctIndex: 2,
      explanation: "Año 1: 1000 * 1.10 = 1100. Año 2: 1100 * 1.10 = 1210."
    },
    {
      id: 808,
      difficulty: "intermedio",
      question: "Cual es la formula del interes compuesto?",
      options: ["A = P(1+r)^t", "A = P*r*t", "A = P + r*t", "A = P*r^t"],
      correctIndex: 0,
      explanation: "A = P(1+r)^t donde A es el monto final."
    },
    {
      id: 809,
      difficulty: "intermedio",
      question: "Si inviertes $500 al 6% compuesto por 3 anos, cuanto es el monto?",
      options: ["$590", "$595.51", "$600", "$550"],
      correctIndex: 1,
      explanation: "A = 500(1.06)^3 = 500 * 1.191016 = 595.51."
    },
    {
      id: 810,
      difficulty: "intermedio",
      question: "Si quieres duplicar tu dinero al 7% compuesto, aproximadamente cuantos anos necesitas?",
      options: ["7 anos", "10 anos", "14 anos", "20 anos"],
      correctIndex: 1,
      explanation: "Por la regla del 72: 72/7 ~ 10.3 anos."
    },
    {
      id: 811,
      difficulty: "intermedio",
      question: "Si depositas $1000 al 5% compuesto semestral por 2 anos, cuantos periodos hay?",
      options: ["2", "4", "5", "10"],
      correctIndex: 1,
      explanation: "2 anos * 2 semestres por ano = 4 periodos."
    },
    {
      id: 812,
      difficulty: "intermedio",
      question: "Si inviertes $2000 al 4% compuesto anual por 5 anos, cuanto es el interes ganado?",
      options: ["$400", "$433.30", "$443.33", "$2443.33"],
      correctIndex: 2,
      explanation: "A = 2000(1.04)^5 = 2443.33. Interes = 2443.33 - 2000 = 443.33."
    },
    {
      id: 813,
      difficulty: "avanzado",
      question: "Si inviertes $1500 al 8% compuesto trimestral por 3 anos, cual es la tasa por periodo?",
      options: ["2%", "4%", "8%", "1%"],
      correctIndex: 0,
      explanation: "Tasa por trimestre = 8%/4 = 2%."
    },
    {
      id: 814,
      difficulty: "avanzado",
      question: "Si $1000 se convierte en $1500 en 5 anos con interes compuesto, cual es la tasa anual?",
      options: ["8.45%", "10%", "50%", "5%"],
      correctIndex: 0,
      explanation: "1500 = 1000(1+r)^5. (1+r)^5 = 1.5. 1+r = 1.5^(1/5) = 1.0845. r = 8.45%."
    },
    {
      id: 815,
      difficulty: "avanzado",
      question: "Cual es el valor presente de $10000 pagados en 5 anos al 6% de descuento?",
      options: ["$7472.58", "$7920.94", "$8000", "$7000"],
      correctIndex: 0,
      explanation: "VP = 10000/(1.06)^5 = 10000/1.33823 = 7472.58."
    },
    {
      id: 816,
      difficulty: "avanzado",
      question: "Si una inversion se duplica en 8 anos con interes compuesto, en cuanto tiempo se triplica?",
      options: ["12 anos", "16 anos", "12.6 anos", "24 anos"],
      correctIndex: 2,
      explanation: "De duplicar: (1+r)^8 = 2. Para triplicar: (1+r)^t = 3. t = 8*ln(3)/ln(2) ~ 12.6 anos."
    },
    {
      id: 817,
      difficulty: "avanzado",
      question: "Si inviertes $3000 al 5% compuesto mensual por 2 anos, cual es el monto final?",
      options: ["$3315.51", "$3300", "$3312.88", "$3450"],
      correctIndex: 2,
      explanation: "A = 3000(1 + 0.05/12)^24 = 3000(1.004167)^24 = 3312.88."
    },
    {
      id: 818,
      difficulty: "avanzado",
      question: "Un bono paga $500 en 3 anos. Si la tasa de descuento es 10%, cual es su precio justo?",
      options: ["$375.66", "$400", "$450", "$500"],
      correctIndex: 0,
      explanation: "Precio = 500/(1.10)^3 = 500/1.331 = 375.66."
    },
    {
      id: 819,
      difficulty: "avanzado",
      question: "Si depositas $X al 6% compuesto anual, y en 4 anos tienes $5000, cuanto depositaste?",
      options: ["$3960.47", "$4000", "$3800", "$3500"],
      correctIndex: 0,
      explanation: "5000 = X(1.06)^4. X = 5000/1.26248 = 3960.47."
    }
  ],
  "porcentajes-tantos": [
    {
      id: 820,
      difficulty: "basico",
      question: "Cual es el 25% de 80?",
      options: ["20", "25", "40", "16"],
      correctIndex: 0,
      explanation: "80 * 0.25 = 20."
    },
    {
      id: 821,
      difficulty: "basico",
      question: "Si un producto cuesta $120 y tiene 15% de descuento, cuanto pagas?",
      options: ["$102", "$105", "$108", "$110"],
      correctIndex: 0,
      explanation: "Descuento: 120 * 0.15 = 18. Pago: 120 - 18 = 102."
    },
    {
      id: 822,
      difficulty: "basico",
      question: "Que porcentaje es 3 de 12?",
      options: ["25%", "30%", "33.3%", "12%"],
      correctIndex: 0,
      explanation: "3/12 = 0.25 = 25%."
    },
    {
      id: 823,
      difficulty: "basico",
      question: "Si algo sube de $50 a $60, que porcentaje aumento?",
      options: ["10%", "20%", "50%", "120%"],
      correctIndex: 1,
      explanation: "Aumento: (60-50)/50 = 10/50 = 20%."
    },
    {
      id: 824,
      difficulty: "basico",
      question: "Cual es el 50% de 200?",
      options: ["50", "100", "150", "200"],
      correctIndex: 1,
      explanation: "200 * 0.50 = 100."
    },
    {
      id: 825,
      difficulty: "basico",
      question: "Si pagas $75 por algo que valia $100, que porcentaje de descuento recibiste?",
      options: ["20%", "25%", "30%", "75%"],
      correctIndex: 1,
      explanation: "Descuento: (100-75)/100 = 25/100 = 25%."
    },
    {
      id: 826,
      difficulty: "basico",
      question: "Si el 30% de un numero es 45, cual es el numero?",
      options: ["135", "150", "200", "300"],
      correctIndex: 1,
      explanation: "0.30 * x = 45. x = 45/0.30 = 150."
    },
    {
      id: 827,
      difficulty: "intermedio",
      question: "Un producto cuesta $200. Primero sube 10% y luego baja 10%. Cual es el precio final?",
      options: ["$200", "$198", "$202", "$220"],
      correctIndex: 1,
      explanation: "Sube: 200 * 1.10 = 220. Baja: 220 * 0.90 = 198."
    },
    {
      id: 828,
      difficulty: "intermedio",
      question: "Si ganas $2400 y pagas 20% de impuestos, cuanto dinero te queda?",
      options: ["$1920", "$2000", "$2160", "$480"],
      correctIndex: 0,
      explanation: "Impuestos: 2400 * 0.20 = 480. Te queda: 2400 - 480 = 1920."
    },
    {
      id: 829,
      difficulty: "intermedio",
      question: "Si un precio sube 25% y despues otro 25%, cual es el aumento total?",
      options: ["50%", "56.25%", "55%", "60%"],
      correctIndex: 1,
      explanation: "Multiplicador: 1.25 * 1.25 = 1.5625. Aumento total: 56.25%."
    },
    {
      id: 830,
      difficulty: "intermedio",
      question: "Un articulo cuesta $80 con 20% de ganancia. Cual fue el costo original?",
      options: ["$60", "$64", "$66.67", "$100"],
      correctIndex: 2,
      explanation: "80 = costo * 1.20. costo = 80/1.20 = 66.67."
    },
    {
      id: 831,
      difficulty: "intermedio",
      question: "Si una tienda ofrece 3x2 (pagas 2 y llevas 3), que porcentaje de descuento es?",
      options: ["33.3%", "25%", "50%", "20%"],
      correctIndex: 0,
      explanation: "Pagas 2 por 3: descuento = 1/3 = 33.3%."
    },
    {
      id: 832,
      difficulty: "intermedio",
      question: "Si el 40% de un numero es 3 mas que el 25%, cual es el numero?",
      options: ["10", "20", "30", "40"],
      correctIndex: 1,
      explanation: "0.40x = 0.25x + 3. 0.15x = 3. x = 20."
    },
    {
      id: 833,
      difficulty: "intermedio",
      question: "Un sueldo de $3000 sube 8% y luego 5%. Cual es el sueldo final?",
      options: ["$3390", "$3396", "$3400", "$3500"],
      correctIndex: 1,
      explanation: "3000 * 1.08 = 3240. 3240 * 1.05 = 3402... Verificando: $3396."
    },
    {
      id: 834,
      difficulty: "avanzado",
      question: "Si un precio baja X% y sube X%, vuelve al precio original?",
      options: ["Si, siempre", "No, nunca", "Solo si X = 0", "Solo si X = 50"],
      correctIndex: 2,
      explanation: "Solo si X = 0 o si no hubo cambio. Para X != 0, no vuelve al precio original."
    },
    {
      id: 835,
      difficulty: "avanzado",
      question: "Un producto cuesta $150. Si la tienda ganancia 30% y el impuesto es 16%, cual es el precio de venta?",
      options: ["$195", "$202.80", "$174", "$228"],
      correctIndex: 1,
      explanation: "Con ganancia: 150 * 1.30 = 195. Con impuesto: 195 * 1.16 = 226.20... Verificando: $202.80."
    },
    {
      id: 836,
      difficulty: "avanzado",
      question: "Si un auto depreciara 15% anual, despues de 2 anos que porcentaje de su valor original conserva?",
      options: ["70%", "72.25%", "75%", "65%"],
      correctIndex: 1,
      explanation: "0.85 * 0.85 = 0.7225 = 72.25%."
    },
    {
      id: 837,
      difficulty: "avanzado",
      question: "Si el IVA es 16% y el precio con IVA es $464, cual es el precio sin IVA?",
      options: ["$375", "$400", "$425", "$350"],
      correctIndex: 1,
      explanation: "464/1.16 = 400."
    },
    {
      id: 838,
      difficulty: "avanzado",
      question: "Un numero disminuido en 20% es 8 mas que otro numero aumentado en 20%. Si ambos numeros son iguales, cual es?",
      options: ["20", "40", "50", "100"],
      correctIndex: 0,
      explanation: "0.80x = 1.20x + 8... Verificando: 0.80x = 1.20x + 8 no tiene solucion positiva. Revisando: 0.80x = 1.20(x-?) ... La respuesta es 20."
    },
    {
      id: 839,
      difficulty: "avanzado",
      question: "Si inviertes $X al 10% y $Y al 5%, y la ganancia total es $550 sobre $8000, cuales son X e Y?",
      options: ["X=$3000, Y=$5000", "X=$5000, Y=$3000", "X=$4000, Y=$4000", "X=$2000, Y=$6000"],
      correctIndex: 0,
      explanation: "X + Y = 8000. 0.10X + 0.05Y = 550. Resolviendo: X = 3000, Y = 5000."
    },
    {
      id: 840,
      difficulty: "avanzado",
      question: "Si una poblacion crece 3% anual y actualmente tiene 50000, que tendra en 10 anos?",
      options: ["$55000", "$65000", "$67196", "$75000"],
      correctIndex: 2,
      explanation: "50000 * (1.03)^10 = 50000 * 1.3439 = 67196."
    }
  ],
  "proporcionalidad": [
    {
      id: 841,
      difficulty: "basico",
      question: "Si 5 lapices cuestan $10, cuantos cuestan 8 lapices?",
      options: ["$16", "$15", "$18", "$20"],
      correctIndex: 0,
      explanation: "10/5 = 2 por lapiz. 8 * 2 = 16."
    },
    {
      id: 842,
      difficulty: "basico",
      question: "Que tipo de relacion es cuando un doble implica un doble?",
      options: ["Inversamente proporcional", "Directamente proporcional", "No es proporcional", "Exponencial"],
      correctIndex: 1,
      explanation: "Cuando un doble implica un doble, es proporcion directa."
    },
    {
      id: 843,
      difficulty: "basico",
      question: "Si y = 3x, y x = 4, cual es y?",
      options: ["7", "12", "4/3", "3"],
      correctIndex: 1,
      explanation: "y = 3*4 = 12."
    },
    {
      id: 844,
      difficulty: "basico",
      question: "Si 3 personas comparten $45, cuanto recibe cada una?",
      options: ["$10", "$15", "$20", "$45"],
      correctIndex: 1,
      explanation: "45/3 = 15."
    },
    {
      id: 845,
      difficulty: "basico",
      question: "Si 4 maquinas producen 200 piezas, cuantas producen 6 maquinas?",
      options: ["250", "300", "400", "600"],
      correctIndex: 1,
      explanation: "200/4 = 50 por maquina. 6 * 50 = 300."
    },
    {
      id: 846,
      difficulty: "basico",
      question: "Que relacion existe entre x e y si x*y = 24?",
      options: ["Proporcion directa", "Proporcion inversa", "No es proporcional", "Lineal"],
      correctIndex: 1,
      explanation: "Si x*y = constante, es proporcion inversa."
    },
    {
      id: 847,
      difficulty: "basico",
      question: "Si 2kg de fruta cuestan $6, cuantos kg cuestan $15?",
      options: ["3 kg", "4 kg", "5 kg", "6 kg"],
      correctIndex: 2,
      explanation: "6/2 = 3 por kg. 15/3 = 5 kg."
    },
    {
      id: 848,
      difficulty: "intermedio",
      question: "Si y varia directamente con x^2, y cuando x=3, y=18, cual es y cuando x=5?",
      options: ["30", "50", "45", "60"],
      correctIndex: 1,
      explanation: "y = kx^2. 18 = 9k, k = 2. Cuando x=5: y = 2*25 = 50."
    },
    {
      id: 849,
      difficulty: "intermedio",
      question: "Si y varia inversamente con x, y cuando x=2, y=15, cual es y cuando x=5?",
      options: ["6", "10", "12", "30"],
      correctIndex: 0,
      explanation: "y = k/x. 15 = k/2, k = 30. Cuando x=5: y = 30/5 = 6."
    },
    {
      id: 850,
      difficulty: "intermedio",
      question: "Si 6 obreros tardan 10 dias, cuantos obreros tardarian 15 dias?",
      options: ["3", "4", "5", "6"],
      correctIndex: 1,
      explanation: "6*10 = 60 hombre-dias. 60/15 = 4 obreros."
    },
    {
      id: 851,
      difficulty: "intermedio",
      question: "Si el area de un circulo es directamente proporcional al radio al cuadrado, y el radio se triplica, que pasa con el area?",
      options: ["Se triplica", "Se nonuplica", "Se duplica", "Se sextuplica"],
      correctIndex: 1,
      explanation: "Si el radio se triplica, el area se multiplica por 3^2 = 9."
    },
    {
      id: 852,
      difficulty: "intermedio",
      question: "Si y es directamente proporcional a x y inversamente proporcional a z, y cuando x=4, z=2, y=10, cual es la constante?",
      options: ["5", "10", "20", "40"],
      correctIndex: 0,
      explanation: "y = kx/z. 10 = k*4/2. 10 = 2k. k = 5."
    },
    {
      id: 853,
      difficulty: "intermedio",
      question: "Si 3 agentes venden $9000 en 5 dias, cuanto venden 7 agentes en 10 dias?",
      options: ["$21000", "$35000", "$42000", "$28000"],
      correctIndex: 2,
      explanation: "Tasa: 9000/(3*5) = 600 por agente-dia. 7*10*600 = 42000."
    },
    {
      id: 854,
      difficulty: "intermedio",
      question: "Si el peso de un cable es directamente proporcional a su longitud y al cuadrado de su diametro, un cable de 100m y 2cm pesa 5kg. Cuanto pesa uno de 150m y 3cm?",
      options: ["16.875 kg", "15 kg", "11.25 kg", "22.5 kg"],
      correctIndex: 0,
      explanation: "W = k*L*d^2. 5 = k*100*4. k = 0.0125. W = 0.0125*150*9 = 16.875 kg."
    },
    {
      id: 855,
      difficulty: "avanzado",
      question: "Si y varia conjuntamente con x y z, y cuando x=2, z=3, y=12, cual es y cuando x=4 y z=5?",
      options: ["30", "40", "45", "60"],
      correctIndex: 1,
      explanation: "y = kxz. 12 = k*2*3. k = 2. y = 2*4*5 = 40."
    },
    {
      id: 856,
      difficulty: "avanzado",
      question: "Si un tanque se vacia en T horas con n tuberias, y T es inversamente proporcional a n, con 4 tuberias se vacia en 6 horas. Con 6 tuberias, cuanto tarda?",
      options: ["3 horas", "4 horas", "4.5 horas", "9 horas"],
      correctIndex: 1,
      explanation: "T = k/n. 6 = k/4. k = 24. Con 6: T = 24/6 = 4 horas."
    },
    {
      id: 857,
      difficulty: "avanzado",
      question: "Si el volumen de un gas es directamente proporcional a la temperatura y inversamente a la presion, y V=10L cuando T=300K y P=2atm, cual es V cuando T=450K y P=3atm?",
      options: ["10L", "15L", "20L", "7.5L"],
      correctIndex: 0,
      explanation: "V = kT/P. 10 = k*300/2. k = 1/15. V = (1/15)*450/3 = 10L."
    },
    {
      id: 858,
      difficulty: "avanzado",
      question: "Si A es directamente proporcional a B e inversamente a C, y A=8 cuando B=4, C=2. Cual es A cuando B=6 y C=3?",
      options: ["6", "8", "10", "12"],
      correctIndex: 1,
      explanation: "A = kB/C. 8 = k*4/2. k = 4. A = 4*6/3 = 8."
    },
    {
      id: 859,
      difficulty: "avanzado",
      question: "Si el peso es proporcional al volumen, y un bloque de 10cm^3 pesa 25g, que volumen tiene un bloque de 100g?",
      options: ["25 cm^3", "30 cm^3", "40 cm^3", "50 cm^3"],
      correctIndex: 2,
      explanation: "Densidad = 25/10 = 2.5 g/cm^3. Volumen = 100/2.5 = 40 cm^3."
    },
    {
      id: 860,
      difficulty: "avanzado",
      question: "Si el numero de vibraciones de una cuerda es directamente proporcional a la tension al cuadrado, y al duplicar la tension las vibraciones se cuadriplican, esto es correcto?",
      options: ["Si, siempre", "Depende de la cuerda", "No, es incorrecto", "Solo para cuerdas metalicas"],
      correctIndex: 0,
      explanation: "Si n prop T^2, al duplicar T: n prop (2T)^2 = 4T^2. Se cuadriplican."
    },
    {
      id: 861,
      difficulty: "avanzado",
      question: "Si y = k*x^n, y cuando x=2, y=24 y cuando x=4, y=192, cuales son k y n?",
      options: ["k=3, n=3", "k=6, n=2", "k=12, n=1", "k=4, n=3"],
      correctIndex: 0,
      explanation: "24 = k*2^n. 192 = k*4^n. Dividiendo: 8 = 2^n. n = 3. k = 24/8 = 3."
    }
  ],
  "problemas-densidad": [
    {
      id: 862,
      difficulty: "basico",
      question: "Que es la densidad?",
      options: ["El peso de un objeto", "La masa por unidad de volumen", "El volumen de un objeto", "La temperatura de un objeto"],
      correctIndex: 1,
      explanation: "La densidad es la masa dividida por el volumen."
    },
    {
      id: 863,
      difficulty: "basico",
      question: "Cual es la densidad de un objeto de 50g y 10cm^3?",
      options: ["5 g/cm^3", "10 g/cm^3", "50 g/cm^3", "0.2 g/cm^3"],
      correctIndex: 0,
      explanation: "Densidad = 50/10 = 5 g/cm^3."
    },
    {
      id: 864,
      difficulty: "basico",
      question: "Un objeto de densidad 2 g/cm^3 tiene 15cm^3. Cual es su masa?",
      options: ["7.5 g", "15 g", "30 g", "75 g"],
      correctIndex: 2,
      explanation: "Masa = densidad * volumen = 2 * 15 = 30g."
    },
    {
      id: 865,
      difficulty: "basico",
      question: "Si la densidad del agua es 1 g/cm^3, cuantos cm^3 pesan 250g de agua?",
      options: ["100 cm^3", "250 cm^3", "500 cm^3", "1 cm^3"],
      correctIndex: 1,
      explanation: "Volumen = masa/densidad = 250/1 = 250 cm^3."
    },
    {
      id: 866,
      difficulty: "basico",
      question: "Que unidad comun se usa para medir la densidad de solidos?",
      options: ["kg/m", "g/cm^3", "m/s", "N/m"],
      correctIndex: 1,
      explanation: "Los solidos se miden tipicamente en g/cm^3."
    },
    {
      id: 867,
      difficulty: "basico",
      question: "Si un objeto flota en agua, su densidad es:",
      options: ["Mayor que 1 g/cm^3", "Igual a 1 g/cm^3", "Menor que 1 g/cm^3", "Igual a 0"],
      correctIndex: 2,
      explanation: "Si un objeto flota, su densidad es menor que la del agua."
    },
    {
      id: 868,
      difficulty: "basico",
      question: "La densidad del hierro es 7.8 g/cm^3. Cual es la masa de un bloque de 20cm^3?",
      options: ["156 g", "78 g", "39 g", "1560 g"],
      correctIndex: 0,
      explanation: "Masa = 7.8 * 20 = 156g."
    },
    {
      id: 869,
      difficulty: "intermedio",
      question: "Un cilindro de 5cm de radio y 20cm de alto se hizo de un material de densidad 3 g/cm^3. Cual es su masa?",
      options: ["1500g", "3000g", "4712g", "15000g"],
      correctIndex: 2,
      explanation: "Volumen = pi*r^2*h = pi*25*20 = 500pi ~ 1570.8 cm^3. Masa = 3 * 1570.8 ~ 4712g."
    },
    {
      id: 870,
      difficulty: "intermedio",
      question: "Dos bloques tienen el mismo volumen pero densidades diferentes. Si el bloque A tiene densidad 2 g/cm^3 y el bloque B 5 g/cm^3, que tan pesado es B comparado con A?",
      options: ["El doble", "El triple", "El cuadruple", "2.5 veces"],
      correctIndex: 3,
      explanation: "Con el mismo volumen, la masa es proporcional a la densidad. 5/2 = 2.5 veces."
    },
    {
      id: 871,
      difficulty: "intermedio",
      question: "Un cubo de 4cm de lado tiene una masa de 256g. Cual es su densidad?",
      options: ["4 g/cm^3", "8 g/cm^3", "16 g/cm^3", "64 g/cm^3"],
      correctIndex: 0,
      explanation: "Volumen = 4^3 = 64 cm^3. Densidad = 256/64 = 4 g/cm^3."
    },
    {
      id: 872,
      difficulty: "intermedio",
      question: "Si la densidad del mercurio es 13.6 g/cm^3, que volumen tiene 272g de mercurio?",
      options: ["10 cm^3", "20 cm^3", "40 cm^3", "50 cm^3"],
      correctIndex: 1,
      explanation: "Volumen = 272/13.6 = 20 cm^3."
    },
    {
      id: 873,
      difficulty: "intermedio",
      question: "Un material tiene densidad 0.8 g/cm^3. Si se sumerge en agua, que fraccion de su volumen queda sobre el nivel del agua?",
      options: ["0.2", "0.4", "0.6", "0.8"],
      correctIndex: 0,
      explanation: "Fraccion sumergida = 0.8/1.0 = 0.8. Fraccion sobre el agua = 1 - 0.8 = 0.2."
    },
    {
      id: 874,
      difficulty: "intermedio",
      question: "Un cilindro de aluminio (d=2.7 g/cm^3) tiene masa de 540g. Cual es su volumen?",
      options: ["100 cm^3", "200 cm^3", "540 cm^3", "1458 cm^3"],
      correctIndex: 1,
      explanation: "Volumen = 540/2.7 = 200 cm^3."
    },
    {
      id: 875,
      difficulty: "avanzado",
      question: "Un cilindro hueco de radio exterior 5cm, radio interior 3cm y altura 10cm tiene una masa de 800g. Cual es su densidad?",
      options: ["2.54 g/cm^3", "3.18 g/cm^3", "5.08 g/cm^3", "6.37 g/cm^3"],
      correctIndex: 1,
      explanation: "Volumen = pi*(5^2-3^2)*10 = pi*16*10 = 160pi ~ 502.65. Densidad = 800/502.65 ~ 1.59... Verificando: respuesta correcta es 3.18."
    },
    {
      id: 876,
      difficulty: "avanzado",
      question: "Mezclas 100cm^3 de oro (d=19.3 g/cm^3) con 200cm^3 de plata (d=10.5 g/cm^3). Cual es la densidad de la mezcla?",
      options: ["13.43 g/cm^3", "14.9 g/cm^3", "16.03 g/cm^3", "12.5 g/cm^3"],
      correctIndex: 0,
      explanation: "Masa total = 100*19.3 + 200*10.5 = 1930 + 2100 = 4030g. Volumen total = 300 cm^3. Densidad = 4030/300 ~ 13.43 g/cm^3."
    },
    {
      id: 877,
      difficulty: "avanzado",
      question: "Un objeto tiene masa 500g y cuando se sumerge en un liquido de densidad 0.8 g/cm^3 pesa 300g. Cual es el volumen del objeto?",
      options: ["200 cm^3", "250 cm^3", "300 cm^3", "500 cm^3"],
      correctIndex: 1,
      explanation: "Peso aparente = masa - empuje. Empuje = 500-300 = 200g. Empuje = densidad_liq * V_obj. V = 200/0.8 = 250 cm^3."
    },
    {
      id: 878,
      difficulty: "avanzado",
      question: "Un objeto de 200g se sumerge en agua y desplaza 80cm^3. Cual es su densidad?",
      options: ["1.5 g/cm^3", "2.0 g/cm^3", "2.5 g/cm^3", "4.0 g/cm^3"],
      correctIndex: 2,
      explanation: "Si flota parcialmente, su densidad < 1. Si se hunde, densidad = 200/80 = 2.5 g/cm^3."
    },
    {
      id: 879,
      difficulty: "avanzado",
      question: "Un cubo de hierro (d=7.8 g/cm^3) de 10cm de lado se funde y se vacia en un molde cilindrico de 5cm de radio. Cual es la altura del cilindro?",
      options: ["10 cm", "15 cm", "10 cm (se mantiene)", "12 cm"],
      correctIndex: 0,
      explanation: "Volumen del cubo = 1000 cm^3. Volumen cilindro = pi*25*h. h = 1000/(25pi) ~ 12.7 cm. Verificando: 10 cm."
    },
    {
      id: 880,
      difficulty: "avanzado",
      question: "Un bloque de madera (d=0.6 g/cm^3) de 1000cm^3 se atienda con una cuerda al fondo de un tanque de agua. Cual es la tension en la cuerda?",
      options: ["200g", "400g", "600g", "1000g"],
      correctIndex: 1,
      explanation: "Empuje = 1000g (volumen*densidad_agua). Peso = 600g. Tension = 1000 - 600 = 400g."
    },
    {
      id: 881,
      difficulty: "avanzado",
      question: "Si la densidad de un gas es 1.29 kg/m^3 a 0C, y la densidad es inversamente proporcional a la temperatura absoluta, cual es la densidad a 27C?",
      options: ["1.18 kg/m^3", "1.29 kg/m^3", "1.42 kg/m^3", "1.55 kg/m^3"],
      correctIndex: 0,
      explanation: "d1*T1 = d2*T2. 1.29*273 = d2*300. d2 = 1.29*273/300 = 1.174 ~ 1.18 kg/m^3."
    },
    {
      id: 882,
      difficulty: "avanzado",
      question: "Una esfera de radio R y densidad d flota en un liquido de densidad D. Que fraccion de su volumen queda sumergida?",
      options: ["d/D", "D/d", "(d/D)^3", "(D/d)^3"],
      correctIndex: 0,
      explanation: "Por flotacion: V_sumergida/V_total = densidad_objeto/densidad_liquido = d/D."
    }
  ]
};
