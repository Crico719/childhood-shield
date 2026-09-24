export const rmStudyGuides: Record<string, string> = {
  "relaciones-de-parentesco": `## Relaciones de Parentesco
### Tipos de parentesco
El parentesco se define por la relación biológica o jurídica entre personas. Existen dos tipos fundamentales: consanguíneos (por sangre) y por afinidad (por matrimonio o unión). Los grados de parentesco se cuentan desde uno hasta el ascendente o descendente directo, y luego se suman ambos lados para obtener el grado total entre dos personas.

### Reglas básicas
Hermanos: comparten ambos padres, grado 1. Medio hermano: comparten un solo progenitor, grado 2 entre ellos. Primos hermanos: hijos de hermanos, grado 3. Tío-sobrino: grado 2. Abuelo-nieto: grado 2. Bisabuelo-bisnieto: grado 3. Cuñados: relación por afinidad, grado 2 si ambos están casados con hermanos.

### Fórmula general
Grado = suma de saltos desde una persona hasta el ancestro común más cercano, más los saltos desde ese ancestro hasta la otra persona. Si A y B comparten un abuelo: A → padre (1) → abuelo (2), abuelo → padre de B (1) → B (2), total = 4. Para primos hermanos: A → padre (1) → abuelo (2), abuelo → tío (1) → primo (2), total = 3.

### Ejemplo resuelto
María y Pedro son hermanos. Ana es hija de María. ¿Cuál es el parentesco de Ana con Pedro? Pedro y María son hermanos (grado 1). Ana es hija de María (grado 1). Pedro es tío de Ana. El grado entre Ana y Pedro: Ana → María (1), María → Pedro (1), total = 2. Pedro es el tío de Ana.

### Ejemplo resuelto 2
Luis es padre de Carlos. Carmen es hermana de Luis. ¿Qué relación tiene Carlos con Carmen? Carmen y Luis son hermanos (grado 1). Carlos es hijo de Luis (grado 1). Carlos → Luis (1), Luis → Carmen (1), total = 2. Carmen es tía de Carlos. Si Carmen tuviera un hijo llamado Miguel, Carlos y Miguel serían primos hermanos (grado 3).

### Tabla de referencia
- Padres e hijos: grado 1
- Hermanos: grado 1
- Abuelos y nietos: grado 2
- Tíos y sobrinos: grado 2
- Primos hermanos: grado 3
- Tío-abuelo y sobrino-nieto: grado 4

### Consejos para resolver
Identifica primero el ancestro común más cercano. Cuenta los saltos desde cada persona hasta ese ancestro. Suma ambos valores. Recuerda que los cuñados tienen parentesco por afinidad, no por sangre. En problemas complejos, dibuja un árbol genealógico para visualizar las relaciones.`,

  "relaciones-de-tiempo": `## Relaciones de Tiempo
### Concepto fundamental
Las relaciones de tiempo determinan cuándo ocurrieron eventos pasados o cuándo ocurrirán eventos futuros. Se basan en la resta de fechas o la suma de lapsos de tiempo. El punto de referencia es siempre la fecha actual o una fecha dada en el problema.

### Operaciones básicas
Para calcular el tiempo transcurrido: resta la fecha inicial de la fecha final. Para calcular una fecha futura: suma el lapso a la fecha de referencia. Para calcular una fecha pasada: resta el lapso de la fecha de referencia. Los meses tienen entre 28 y 31 días según el mes, y los años pueden ser bisiestos (29 días en febrero).

### Regla del año bisiesto
Un año es bisiesto si es divisible entre 4, excepto los divisibles entre 100 que no sean divisibles entre 400. Ejemplo: 2024 es bisiesto (divisible entre 4). 1900 no es bisiesto (divisible entre 100 pero no entre 400). 2000 sí es bisiesto (divisible entre 400). Esto afecta los cálculos que cruzan febrero.

### Ejemplo resuelto
Un evento ocurrió hace 3 meses y 12 días. Si hoy es 15 de marzo, ¿cuándo ocurrió? Mes anterior: 15 de febrero. Restar 12 días: 15 de febrero menos 12 = 3 de febrero. El evento ocurrió el 3 de febrero.

### Ejemplo resuelto 2
Pedro tiene 28 años. Su hermana nació hace 5 años menos que él. ¿Cuántos años tiene la hermana? Si Pedro tiene 28 y nació 5 años después que la hermana, la hermana tiene 28 + 5 = 33 años. Verificación: la hermana es mayor, nació primero.

### Trucos de cálculo
Cuando calcules meses, recuerda que no todos los meses tienen 30 días. Para simplificar, usa la regla: meses de 31 días (enero, marzo, mayo, julio, agosto, octubre, diciembre), meses de 30 días (abril, junio, septiembre, noviembre) y febrero con 28 o 29 días. Si un problema involucra años bisiestos, verifica si el período incluye el 29 de febrero.

### Ejemplo con cruces de mes
Si hoy es 20 de enero y un evento ocurrió hace 45 días: enero tiene 31 días, 20 de enero menos 20 = 31 de diciembre del año anterior. Luego restar 25 días más: 6 de diciembre. El evento fue el 6 de diciembre.

### Consejos prácticos
Dibuja una línea de tiempo para visualizar los eventos. Identifica la fecha de referencia y hacia dónde te mueves (pasado o futuro). Cuida los límites de cada mes. Cuando un problema diga "el mes pasado", refiérete al mismo día pero del mes anterior. Para edades, recuerda que la edad se incrementa en el cumpleaños, no el 1 de enero.`,

  "verdades-y-mentiras": `## Verdades y Mentiras
### Planteo del problema
En este tipo de problemas se presentan varias afirmaciones y se sabe que unas son verdaderas y otras son falsas. El objetivo es determinar qué afirmaciones son verdaderas y cuáles son falsas usando lógica deductiva. La clave es asumir que una afirmación es verdadera o falsa y verificar si genera contradicciones.

### Estrategia básica
Si una afirmación es verdadera, todo lo que implica también debe ser verdadero. Si es falsa, su negación debe ser verdadera. Cuando una afirmación dice "si A entonces B", si A es verdadera entonces B también debe serlo. Si B es falsa entonces A también debe ser falsa. Estas son las reglas de la implication lógica.

### Ejemplo resuelto
En un grupo hay tres personas: Ana, Luis y Pedro. Solo uno dice la verdad. Ana dice: "Pedro miente". Luis dice: "Ana dice la verdad". Pedro dice: "Luis miente". Si Ana dice la verdad, entonces Pedro miente (verdadero). Luis dice que Ana dice la verdad, lo cual sería cierto, pero solo uno dice la verdad. Contradicción. Si Pedro dice la verdad, entonces Luis miente. Luis dice que Ana dice la verdad, lo cual sería falso (Luis miente), así que Ana también miente. Ana dice que Pedro miente, lo cual sería falso (Pedro dice la verdad). Esto es consistente. Respuesta: solo Pedro dice la verdad.

### Ejemplo resuelto 2
Dos personas declaran: A: "Al menos uno de nosotros miente". B: "A miente". Si A dice la verdad, entonces "al menos uno miente" es verdadero. B dice que A miente, lo cual sería falso, así que B miente. Esto es consistente. Si A miente, entonces "al menos uno de nosotros miente" es falso, lo cual significaría que ninguno miente. Pero si A miente, sí miente. Contradicción. Respuesta: A dice la verdad, B miente.

### Operador lógico Y
Cuando una afirmación usa "y" (conjunction), ambas partes deben ser verdaderas para que la afirmación completa sea verdadera. Si una parte es falsa, toda la afirmación es falsa. Esto permite deducir que si una afirmación con "y" es falsa, al menos una de sus partes es falsa.

### Operador lógico O
Cuando se usa "o" (disjunction), al menos una parte debe ser verdadera para que la afirmación completa sea verdadera. Solo es falsa cuando ambas partes son falsas. Si una afirmación con "o" es verdadera, puede que una o ambas partes lo sean, pero no sabemos cuál.

### Tabla de verdad implication
| A | B | A → B |
|---|---|-------|
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

### Consejos prácticos
Empieza asumiendo que cada persona dice la verdad o miente, y busca contradicciones. Usa tablas de verdad para verificar. Presta atención a cuantificadores como "todos", "algunos", "ninguno". Cuando diga "al menos uno", significa uno o más. Cuando diga "exactamente uno", significa uno y solo uno. Los problemas más difíciles requieren probar múltiples casos hasta encontrar el único consistente.`,

  "orden-de-informacion": `## Orden de Información
### Tipo de problema
Se presentan varias personas o elementos y una serie de pistas que establecen relaciones de orden (antes, después, mayor, menor, izquierda, derecha, etc.). El objetivo es determinar el orden completo o responder preguntas específicas sobre la secuencia.

### Estrategia de resolución
Primero, identifica todas las pistas y escríbelas como desigualdades o relaciones. Luego, combina las pistas para formar una cadena de orden. Cuando no hay información directa entre dos elementos, busca un elemento intermedio que conecte ambos. Finalmente, verifica que la cadena resultante sea consistente con todas las pistas.

### Símbolos útiles
Usa > para "mayor que" o "antes que". Usa < para "menor que" o "después que". Si A está a la izquierda de B: A < B en la posición. Si A es mayor que B y B es mayor que C: A > B > C. Esto forma una cadena directa.

### Ejemplo resuelto
Cinco personas se sientan en fila: A, B, C, D, E. A se sienta a la izquierda de B. C está en algún lugar entre A y D. E está en el extremo derecho. D está a la izquierda de E. Si E está en posición 5, D está en posición 4. A está a la izquierda de B. C está entre A y D. Si A está en 1, B en 2, C en 3, D en 4, E en 5: C está entre A y D (posición 3 entre 1 y 4). Verificación: todas las pistas se cumplen.

### Ejemplo resuelto 2
Cuatro libros se apilan de arriba a abajo. El libro rojo está sobre el azul. El verde está entre el amarillo y el azul. El amarillo está en la parte superior. Orden de arriba a abajo: amarillo, verde, azul, rojo. Verificación: rojo sobre azul (posición 4 sobre 3). Verde entre amarillo y azul (posición 2 entre 1 y 3). Amarillo en la parte superior (posición 1).

### Pistas condicionales
Algunas pistas dan información condicional: "Si A está en posición 1, entonces B está en posición 3". En estos casos, prueba ambas posibilidades y verifica cuál es consistente con las demás pistas. Si una posibilidad genera contradicción, la otra debe ser correcta.

### Ejemplo resuelto 3
Tres personas: X, Y, Z. Si X es el mayor, entonces Y es el menor. Z no es el mayor. Si X fuera el mayor, Y sería el menor. Entonces Z estaría en el medio. Verificación: X mayor, Z medio, Y menor. Z no es el mayor (correcto). Esto funciona. X es el mayor.

### Consejos prácticos
Dibuja una tabla o línea de tiempo para representar las posiciones. Marca con X las posiciones descartadas. Usa proceso de eliminación cuando tengas información parcial. Cuando una pista diga "no nécessairement", significa que esa relación no siempre se cumple. Presta atención a las pistas que dicen "exactamente" o "al menos". Revisa siempre tu respuesta contra todas las pistas originales.`,

  "razonamiento-inductivo": `## Razonamiento Inductivo
### Definición
El razonamiento inductivo consiste en observar patrones específicos y generalizarlos para predecir comportamientos futuros o establecer reglas generales. A diferencia del deductivo, que va de lo general a lo particular, el inductivo va de lo particular a lo general. No garantiza certeza absoluta, sino alta probabilidad.

### Tipos de patrones
Los patrones más comunes son: aritméticos (diferencia constante entre términos consecutivos), geométricos (razón constante), cuadráticos (diferencias de segundo orden constantes), y patrones visuales (rotaciones, translaciones, reflexiones). Identificar el tipo de patrón es el primer paso para generalizar.

### Sucesión aritmética
Un patrón es aritmético si la diferencia entre términos consecutivos es constante. Fórmula del término general: aₙ = a₁ + (n-1)d, donde a₁ es el primer término y d es la diferencia común. Para encontrar d: d = a₂ - a₁. Para encontrar a₁: a₁ = a₂ - d.

### Ejemplo resuelto
Secuencia: 3, 7, 11, 15, 19, ... Diferencias: 7-3=4, 11-7=4, 15-11=4. La diferencia constante es 4. Fórmula: aₙ = 3 + (n-1)×4 = 4n - 1. Para n=10: a₁₀ = 4(10) - 1 = 39. Para encontrar qué término es 55: 55 = 4n - 1, n = 56/4 = 14. El término 14 es 55.

### Ejemplo resuelto 2
Patrón visual: cuadrados de puntos. Figura 1: 1 punto. Figura 2: 4 puntos. Figura 3: 9 puntos. Figura 4: 16 puntos. Observamos: 1=1², 4=2², 9=3², 16=4². Generalización: la figura n tiene n² puntos. Para la figura 10: 10² = 100 puntos.

### Sucesión geométrica
Cuando la razón entre términos consecutivos es constante. Fórmula: aₙ = a₁ × r^(n-1), donde r es la razón común. Para encontrar r: r = a₂/a₁. Ejemplo: 2, 6, 18, 54, ... Razón: r = 6/2 = 3. Fórmula: aₙ = 2 × 3^(n-1). Para n=5: a₅ = 2 × 3⁴ = 2 × 81 = 162.

### Diferencias de segundo orden
Cuando las primeras diferencias no son constantes pero las segundas sí. Ejemplo: 1, 4, 9, 16, 25. Primeras diferencias: 3, 5, 7, 9. Segundas diferencias: 2, 2, 2. Esto indica un patrón cuadrático: aₙ = n². En general, si las segundas diferencias son constantes (d₂), la fórmula es aₙ = (d₂/2)n² + ... (términos de menor grado).

### Patrones complejos
Algunos patrones combinan múltiples reglas. Ejemplo: 2, 3, 5, 8, 12, 17, ... Primeras diferencias: 1, 2, 3, 4, 5, ... Son crecientes de 1 en 1. Segundas diferencias: 1, 1, 1, 1, ... Constante. Esto es un patrón cuadrático. Generalización: aₙ = n(n+1)/2 + 1. Para n=1: (1×2)/2 + 1 = 2. Para n=2: (2×3)/2 + 1 = 4. Verificar: a₃ = (3×4)/2 + 1 = 7. Hmm, ese no coincide. Ajustar: aₙ = n²/2 + n/2 + 1. Para n=1: 0.5 + 0.5 + 1 = 2. Para n=2: 2 + 1 + 1 = 4. Para n=3: 4.5 + 1.5 + 1 = 7. Aún no. La secuencia correcta para 2, 3, 5, 8, 12, 17 es aₙ = (n² + n + 2)/2. Para n=1: (1+1+2)/2 = 2. Para n=2: (4+2+2)/2 = 4. Para n=3: (9+3+2)/2 = 7. Aún no coincide. La secuencia real con esas diferencias 1, 2, 3, 4, 5 genera: 2, 3, 5, 8, 12, 17. Verificando: a₁=2, a₂=3, a₃=5, a₄=8, a₅=12, a₆=17. Las diferencias son 1, 2, 3, 4, 5. Para n=6: a₆=17. La fórmula es aₙ = (n² - n + 4)/2. Para n=1: (1-1+4)/2 = 2. Para n=2: (4-2+4)/2 = 3. Para n=3: (9-3+4)/2 = 5. Para n=4: (16-4+4)/2 = 8. Para n=5: (25-5+4)/2 = 12. Para n=6: (36-6+4)/2 = 17. Correcto.

### Consejos prácticos
Siempre calcula las diferencias entre términos consecutivos. Si son constantes, es aritmético. Si no lo son, calcula las segundas diferencias. Si son constantes, es cuadrático. Para patrones geométricos, calcula la razón entre términos. Dibuja los patrones visuales para identificar transformaciones. Verifica tu fórmula con los primeros términos conocidos. Si un patrón no se ajusta a una categoría simple, busca combinaciones de patrones.`,

  "sistemas-de-numeracion": `## Sistemas de Numeración
### Tipos de sistemas
Los sistemas de numeración más comunes son: decimal (base 10), binario (base 2), octal (base 8), hexadecimal (base 16), y en general cualquier base b. Cada sistema utiliza un conjunto de dígitos y un valor posicional para representar números.

### Conversión a base 10
Para convertir un número de cualquier base b a base 10, multiplica cada dígito por b elevado a la posición (empezando desde 0 a la derecha). Ejemplo: (1011)₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11 en base 10.

### Conversión de base 10
Para convertir de base 10 a base b, divide sucesivamente por b y anota los residuos de abajo hacia arriba. Ejemplo: 11 en base 2: 11÷2=5 residuo 1, 5÷2=2 residuo 1, 2÷2=1 residuo 0, 1÷2=0 residuo 1. Leyendo de abajo hacia arriba: (1011)₂.

### Ejemplo resuelto
Convierte (352)₈ a decimal: 3×8² + 5×8¹ + 2×8⁰ = 3×64 + 5×8 + 2×1 = 192 + 40 + 2 = 234. Verificación: 192+40=232, 232+2=234. Correcto.

### Ejemplo resuelto 2
Convierte 255 a hexadecimal: 255÷16=15 residuo 15 (F en hex), 15÷16=0 residuo 15 (F en hex). Leyendo de abajo hacia arriba: (FF)₁₆. Verificación: F=15, 15×16¹ + 15×16⁰ = 240 + 15 = 255. Correcto.

### Operaciones en otras bases
Las operaciones aritméticas se realizan igual que en base 10, pero con los dígitos de cada base. Para sumar en binario: 0+0=0, 0+1=1, 1+0=1, 1+1=10 (0 con acarreo 1). Para sumar en hexadecimal: los dígitos van del 0 al 9 y luego A(10), B(11), C(12), D(13), E(14), F(15).

### Tabla de equivalencias comunes
- Decimal 0 = Binario 0000 = Octal 0 = Hex 0
- Decimal 7 = Binario 0111 = Octal 7 = Hex 7
- Decimal 8 = Binario 1000 = Octal 10 = Hex 8
- Decimal 10 = Binario 1010 = Octal 12 = Hex A
- Decimal 15 = Binario 1111 = Octal 17 = Hex F
- Decimal 16 = Binario 10000 = Octal 20 = Hex 10

### Dígitos por base
- Base 2: 0, 1
- Base 8: 0, 1, 2, 3, 4, 5, 6, 7
- Base 10: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
- Base 16: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

### Consejos prácticos
Memoriza las potencias de las bases más comunes (2, 8, 16). Para conversiones rápidas de binario a hexadecimal, agrupa los bits de 4 en 4 desde la derecha. Para binario a octal, agrupa de 3 en 3. Verifica siempre tu respuesta reconstruyendo el número en base 10. En exámenes, las bases más preguntadas son 2, 8 y 16.`,

  "criptoaritmetica": `## Criptoaritmetica
### Definición
La criptoaritmética es un tipo de puzzles donde cada letra representa un dígito único (0-9). Se presenta una operación aritmética (suma, resta, multiplicación) con letras en lugar de números, y el objetivo es descubrir qué dígito corresponde a cada letra.

### Reglas fundamentales
Cada letra representa un dígito único (no se repite). Cada dígito es representado por una sola letra. El primer dígito de un número no puede ser 0. La operación debe ser aritméticamente correcta. Si hay una ecuación con varias letras, se deben encontrar los valores que la satisfagan.

### Estrategia de resolución
Identifica las restricciones: qué letras aparecen en qué posiciones, cuántas letras hay en total. Busca carry (acarreos) en sumas: si dos números de 3 cifras dan un resultado de 4 cifras, el carry es 1. Usa propiedades aritméticas: si A + B termina en C, entonces A + B = C o A + B = C + 10 (si hay carry).

### Ejemplo resuelto
SEND + MORE = MONEY. S, E, N, D, M, O, R, Y son dígitos únicos. M debe ser 1 (por el carry en la columna más a la izquierda). S + M puede dar un carry, así que S + 1 ≥ 10, por lo tanto S = 9. O = 0 (por la columna de las centenas: E + O + carry = N, pero O no puede ser 0 si M = 1). Probando: S=9, M=1, O=0. E + 0 = N (sin carry de la columna anterior). N + R = E + 10×carry. Si N + R ≥ 10, hay carry. Y = D + E - 10×carry. Buscando valores: 9567 + 1085 = 10652. Verificación: 9567+1085=10652. Correcto.

### Ejemplo resuelto 2
Si ABC + ABC = DEF, con A, B, C, D, E, F dígitos únicos. 2×ABC = DEF. ABC debe ser ≤ 4999 (porque DEF es de 4 dígitos). Si ABC = 246, DEF = 492. Pero D=4, E=9, F=2, y C=2, así que F=C, no es válido. Si ABC = 267, DEF = 534. Dígitos: 2, 6, 7, 5, 3, 4. Todos únicos. Verificación: 267+267=534. Correcto.

### Restricciones de carry
En una suma ABC + DEF = GHIJ, el carry máximo es 1 en cada columna. En columnas de la derecha: C + F = I o C + F = I + 10. En la columna del medio: B + E + carry₁ = H o B + E + carry₁ = H + 10. En la columna izquierda: A + D + carry₂ = G + 10×carry₃. El carry₃ es el dígito más a la izquierda del resultado.

### Multiplicación
En multiplicaciones como AB × C = DEF, el rango de posibles valores es mayor. Para AB × C: A×C puede dar un carry. El producto tiene restricciones por los dígitos disponibles. Usa prueba y error sistemático con las restricciones conocidas.

### Consejos prácticos
Empieza por las letras en posiciones más restrictivas (primera cifra, resultado de carry). Usa una tabla para rastrear qué dígitos ya están asignados. Si hay 8 letras, solo quedan 2 dígitos sin usar. Cuando encuentres un candidato, verifica toda la operación. Los carry son la herramienta más poderosa para reducir posibilidades.`,

  "sucesiones": `## Sucesiones
### Concepto general
Una sucesión es una función que asigna un número a cada posición (índice) de un conjunto ordenado. Se representa como a₁, a₂, a₃, ... o {aₙ}. El objetivo es encontrar la fórmula general aₙ que permita calcular cualquier término sin necesidad de calcular todos los anteriores.

### Sucesión aritmética
Diferencia constante d entre términos consecutivos. Fórmula: aₙ = a₁ + (n-1)d. Para encontrar d: d = a₂ - a₁. Para encontrar n: n = (aₙ - a₁)/d + 1. Suma de los primeros n términos: Sₙ = n(a₁ + aₙ)/2 o Sₙ = n[2a₁ + (n-1)d]/2.

### Ejemplo resuelto
Secuencia: 5, 8, 11, 14, ... d = 8 - 5 = 3. Fórmula: aₙ = 5 + (n-1)×3 = 3n + 2. Para n=20: a₂₀ = 3(20) + 2 = 62. Suma de los primeros 20: S₂₀ = 20(5 + 62)/2 = 20×67/2 = 670.

### Sucesión geométrica
Razón constante r entre términos consecutivos. Fórmula: aₙ = a₁ × r^(n-1). Para encontrar r: r = a₂/a₁. Para encontrar n: n = log(aₙ/a₁)/log(r) + 1. Suma de los primeros n términos: Sₙ = a₁(rⁿ - 1)/(r - 1) si r ≠ 1.

### Ejemplo resuelto 2
Secuencia: 3, 6, 12, 24, ... r = 6/3 = 2. Fórmula: aₙ = 3 × 2^(n-1). Para n=8: a₈ = 3 × 2⁷ = 3 × 128 = 384. Suma de los primeros 8: S₈ = 3(2⁸ - 1)/(2 - 1) = 3(255)/1 = 765.

### Sucesiones cuadráticas
Cuando las segundas diferencias son constantes. Fórmula: aₙ = an² + bn + c. Para encontrar a, b, c, usa los tres primeros términos: a₁ = a + b + c, a₂ = 4a + 2b + c, a₃ = 9a + 3b + c. Resuelve el sistema de ecuaciones.

### Ejemplo resuelto 3
Secuencia: 2, 5, 10, 17, 26, ... Primeras diferencias: 3, 5, 7, 9. Segundas diferencias: 2, 2, 2. Constante = 2. a = 2/2 = 1. Usando a₁ = a + b + c: 1 + b + c = 2, b + c = 1. Usando a₂: 4 + 2b + c = 5, 2b + c = 1. Restando: b = 0. Entonces c = 1. Fórmula: aₙ = n² + 1. Verificación: a₁ = 1 + 1 = 2, a₂ = 4 + 1 = 5, a₃ = 9 + 1 = 10. Correcto.

### Sucesiones recorrentes
Definidas por una fórmula que depende de términos anteriores. Ejemplo: a₁ = 1, a₂ = 1, aₙ = aₙ₋₁ + aₙ₋₂. Esta es la sucesión de Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, ... Para calcular a₁₀: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55. a₁₀ = 55.

### Sumas notables
- Suma de los primeros n naturales: n(n+1)/2
- Suma de los primeros n cuadrados: n(n+1)(2n+1)/6
- Suma de los primeros n cubos: [n(n+1)/2]²
- Serie geométrica infinita (|r| < 1): a₁/(1-r)

### Consejos prácticos
Calcula las diferencias entre términos consecutivos para identificar el tipo de sucesión. Si las primeras diferencias son constantes, es aritmética. Si las segundas lo son, es cuadrática. Si la razón entre términos es constante, es geométrica. Verifica tu fórmula con los primeros términos conocidos. Para sumas, identifica si es aritmética o geométrica antes de aplicar la fórmula.`,

  "analogias-y-distribuciones": `## Analogías y Distribuciones
### Concepto de analogía
Una analogía establece una relación entre dos pares de elementos: A es a B como C es a D (A:B::C:D). La relación entre A y B debe ser la misma que entre C y D. El objetivo es encontrar el elemento que completa la analogía o determinar si una analogía es válida.

### Tipos de relaciones
Relación de sinonimia: palabras con significado similar. Relación de antonimia: palabras con significado opuesto. Relación de inclusión: un concepto incluye a otro (animal:mamífero). Relación de función: un elemento cumple una función respecto al otro (llave:puerta). Relación de parte-todo: una parte de un sistema (rueda:bicicleta).

### Ejemplo resuelto
Médico:hospital::abogado:__. El médico trabaja en un hospital. El abogado trabaja en un juzgado o tribunal. Respuesta: juzgado. Verificación: la relación es profesional:lugar de trabajo. Médico-hospital es la misma relación que abogado-juzgado.

### Ejemplo resuelto 2
Perro:mamífero::serpiente:__. Un perro es un mamífero. Una serpiente es un reptil. Respuesta: reptil. Verificación: la relación es animal:clase taxonómica. Perro es mamífero, serpiente es reptil.

### Distribuciones lógicas
Una distribución se refiere a cómo se reparten elementos en categorías. Si hay n elementos y k categorías, hay kⁿ formas de distribuirlos si cada elemento puede ir en cualquier categoría. Si cada categoría debe tener al menos uno, se usa el principio de inclusión-exclusión.

### Ejemplo con distribuciones
Cuatro personas deben sentarse en 6 sillas. Cada persona elige una silla. Total de formas: 6⁴ = 1296. Si las personas son distintas y las sillas son distintas, es un problema de permutación con repetición. Si las personas fueran idénticas, sería un problema de combinación con repetición.

### Analogías con patrones numéricos
A veces las analogías involucran números: 2:4::5:__. La relación entre 2 y 4 es ×2. Entonces 5×2 = 10. Respuesta: 10. Si la relación fuera +2, la respuesta sería 7. Identificar la operación exacta es clave.

### Ejemplo resuelto 3
16:4::81:__. 16 es 4², así que 4 es la raíz cuadrada de 16. 81 es 9², así que la raíz cuadrada de 81 es 9. Respuesta: 9. Verificación: la relación es número:raíz cuadrada.

### Distribuciones con restricciones
Cuando hay restricciones (por ejemplo, "al menos uno de cada tipo"), se usa el principio de inclusión-exclusión: |A ∪ B| = |A| + |B| - |A ∩ B|. Para tres conjuntos: |A ∪ B ∪ C| = |A| + |B| + |C| - |A∩B| - |A∩C| - |B∩C| + |A∩B∩C|.

### Ejemplo de distribución
Cinco regalos para tres personas. ¿Cuántas formas de distribuir si cada persona recibe al menos un regalo? Total sin restricción: 3⁵ = 243. Usar inclusión-exclusión para restar los casos donde una persona no recibe nada. Sea A_i = "la persona i no recibe nada". |A₁| = 2⁵ = 32 (solo personas 2 y 3). |A₁ ∩ A₂| = 1⁵ = 1 (solo persona 3). |A₁ ∪ A₂ ∪ A₃| = 3×32 - 3×1 + 0 = 96 - 3 = 93. Formas válidas: 243 - 93 = 150.

### Consejos prácticos
En analogías, identifica primero la relación entre el primer par. Luego aplica la misma relación al segundo par. Para distribuciones, distingue si los elementos son idénticos o distintos. Si los elementos son distintos y las categorías también, es permutación. Si los elementos son idénticos, es combinación con repetición. Verifica siempre que tu respuesta cumpla todas las restricciones del problema.`,

  "series": `## Series
### Definición
Una series es la suma de los términos de una sucesión. Se representa como Σaₙ donde n va desde un valor inicial hasta uno final. Las series más comunes son aritméticas, geométricas, cuadráticas y de potencias. El objetivo es calcular la suma de un número determinado de términos o hallar la suma infinita cuando converge.

### Serie aritmética
Suma de una sucesión aritmética. Fórmula: Sₙ = n(a₁ + aₙ)/2. También: Sₙ = n[2a₁ + (n-1)d]/2. Para hallar n cuando conoces Sₙ: resuelve la ecuación cuadrática n²d/2 + n(a₁ - d/2) - Sₙ = 0.

### Ejemplo resuelto
Suma de los primeros 50 números naturales. a₁ = 1, a₅₀ = 50, n = 50. S₅₀ = 50(1 + 50)/2 = 50×51/2 = 1275. Verificación: la fórmula n(n+1)/2 = 50×51/2 = 1275. Correcto.

### Serie geométrica
Suma de una sucesión geométrica. Fórmula: Sₙ = a₁(rⁿ - 1)/(r - 1) si r ≠ 1. Para r < 1, la suma infinita converge: S∞ = a₁/(1 - r). La serie converge solo si |r| < 1.

### Ejemplo resuelto 2
Suma: 2 + 6 + 18 + 54 + ... hasta 8 términos. a₁ = 2, r = 3, n = 8. S₈ = 2(3⁸ - 1)/(3 - 1) = 2(6561 - 1)/2 = 6560. Verificación: 3⁸ = 6561. 6561 - 1 = 6560. 6560/1 = 6560. Correcto.

### Series de potencias
Suma de cuadrados, cubos u otras potencias. Fórmulas conocidas:
- Σk² = n(n+1)(2n+1)/6
- Σk³ = [n(n+1)/2]²
- Σk⁴ = n(n+1)(2n+1)(3n²+3n-1)/30

### Ejemplo resuelto 3
Suma de los cuadrados del 1 al 10: Σk² = 10(11)(21)/6 = 10×11×21/6 = 2310/6 = 385. Verificación: 1+4+9+16+25+36+49+64+81+100 = 385. Correcto.

### Serie telescópica
Serie donde la mayoría de los términos se cancelan. Ejemplo: Σ(1/k - 1/(k+1)) desde k=1 hasta n. Al expandir: (1/1 - 1/2) + (1/2 - 1/3) + (1/3 - 1/4) + ... + (1/n - 1/(n+1)). Todos los términos intermedios se cancelan. Resultado: 1 - 1/(n+1) = n/(n+1).

### Serie de potencias con ratio
Ejemplo: Σ(1/2ⁿ) desde n=1 hasta ∞. a₁ = 1/2, r = 1/2. S∞ = (1/2)/(1 - 1/2) = (1/2)/(1/2) = 1. La serie converge a 1.

### Criterios de convergencia
Para series positivas: si aₙ → 0, la serie puede converger o diverger. El criterio de la razón: si |aₙ₊₁/aₙ| < 1 para todo n grande, la serie converge. El criterio de la raíz: si |aₙ|^(1/n) < 1 para todo n grande, converge. El criterio de comparación: si 0 ≤ aₙ ≤ bₙ y Σbₙ converge, entonces Σaₙ converge.

### Ejemplo de serie convergente
Σ(1/n²) desde n=1 hasta ∞. Esta es la serie de Riemann zeta(2) = π²/6 ≈ 1.6449. Criterio de la razón: (1/(n+1)²)/(1/n²) = n²/(n+1)² → 1. No conclusive. Usar criterio de comparación con Σ(1/n(n+1)) que converge (serie telescópica). 1/n² < 1/n(n+1) para n > 1, así que converge.

### Consejos prácticos
Identifica el tipo de serie (aritmética, geométrica, potencias). Para series aritméticas, usa Sₙ = n(a₁ + aₙ)/2. Para geométricas, usa la fórmula con rⁿ - 1. Para series infinitas, verifica que |r| < 1 antes de usar a₁/(1-r). Las series telescópicas son comunes en exámenes: busca términos que se cancelen. Para series de potencias, memoriza las fórmulas de suma de cuadrados y cubos.`,

  "sumatorias": `## Sumatorias
### Notación sigma
La sumatoria se representa con la letra griega sigma (Σ). Σaₙ donde n va desde i hasta j significa sumar todos los términos aᵢ, aᵢ₊₁, ..., aⱼ. Es una forma compacta de expresar sumas largas. El índice puede usar cualquier letra (i, j, k, n, etc.).

### Propiedades de las sumatorias
- Linealidad: Σ(c×aₙ) = c×Σaₙ (constante factoriza)
- Aditividad: Σ(aₙ + bₙ) = Σaₙ + Σbₙ
- Separación: Σ(aₙ - bₙ) = Σaₙ - Σbₙ
- Índice: Σaₙ desde i hasta j = Σaₙ₋ₖ desde i+k hasta j+k

### Fórmulas básicas
- Σ1 desde 1 hasta n = n
- Σk desde 1 hasta n = n(n+1)/2
- Σk² desde 1 hasta n = n(n+1)(2n+1)/6
- Σk³ desde 1 hasta n = [n(n+1)/2]²
- Σrᵏ desde 0 hasta n-1 = (rⁿ - 1)/(r - 1) para r ≠ 1

### Ejemplo resuelto
Calcule Σ(2k + 3) desde k=1 hasta 5. Σ(2k+3) = 2×Σk + Σ3 = 2×(5×6/2) + 3×5 = 2×15 + 15 = 30 + 15 = 45. Verificación: para k=1: 5, k=2: 7, k=3: 9, k=4: 11, k=5: 13. 5+7+9+11+13 = 45. Correcto.

### Ejemplo resuelto 2
Calcule Σk² desde k=1 hasta 4. Usando la fórmula: 4×5×9/6 = 180/6 = 30. Verificación: 1+4+9+16 = 30. Correcto.

### Cambio de índice
Útil para simplificar sumatorias. Ejemplo: Σaₖ desde k=3 hasta 7. Sea j = k-2, entonces k = j+2. Cuando k=3, j=1. Cuando k=7, j=5. La sumatoria se convierte en Σaⱼ₊₂ desde j=1 hasta 5.

### Ejemplo de cambio de índice
Σ(2k-1) desde k=3 hasta 6. Sea j = k-2, k = j+2. Cuando k=3, j=1. Cuando k=6, j=4. Σ(2(j+2)-1) = Σ(2j+3) desde j=1 hasta 4. = 2×Σj + Σ3 = 2×(4×5/2) + 3×4 = 20 + 12 = 32. Verificación: k=3: 5, k=4: 7, k=5: 9, k=6: 11. 5+7+9+11 = 32. Correcto.

### Sumatorias dobles
ΣΣaᵢⱼ donde i va desde 1 hasta m y j va desde 1 hasta n. Se puede cambiar el orden de summación: Σᵢ Σⱼ aᵢⱼ = Σⱼ Σᵢ aᵢⱼ. Esto es útil cuando un summation es más fácil de calcular primero.

### Ejemplo de sumatoria doble
Σᵢ₌₁³ Σⱼ₌₁² (i+j). Para i=1: (1+1)+(1+2) = 2+3 = 5. Para i=2: (2+1)+(2+2) = 3+4 = 7. Para i=3: (3+1)+(3+2) = 4+5 = 9. Total: 5+7+9 = 21. Cambiando el orden: Para j=1: (1+1)+(2+1)+(3+1) = 2+3+4 = 9. Para j=2: (1+2)+(2+2)+(3+2) = 3+4+5 = 12. Total: 9+12 = 21. Correcto.

### Sumatoria con productos
A veces es útil factorizar: Σ(aₙ×bₙ) no se puede separar en Σaₙ × Σbₙ en general. Solo se puede separar si los términos son independientes del índice. Ejemplo: Σ(c×aₙ) = c×Σaₙ porque c no depende de n.

### Consejos prácticos
Memoriza las fórmulas para sumas de k, k² y k³. Usa linealidad para separar sumatorias complejas. El cambio de índice es poderoso para simplificar límites. Para sumatorias dobles, prueba cambiar el orden de summación. Verifica siempre con los primeros términos. Las sumatorias aparecen frecuentemente en problemas de series y progresiones.`,

  "cuatro-operaciones": `## Cuatro Operaciones
### Operaciones básicas
Las cuatro operaciones fundamentales son: suma (+), resta (-), multiplicación (×) y división (÷). Cada una tiene propiedades algebraicas que facilitan los cálculos. Conocer estas propiedades permite simplificar expresiones y resolver problemas más eficientemente.

### Propiedades conmutativas
La suma y la multiplicación son conmutativas: a + b = b + a y a × b = b × a. La resta y la división no son conmutativas: a - b ≠ b - a (en general) y a ÷ b ≠ b ÷ a. Esto significa que el orden importa en resta y división.

### Propiedades asociativas
La suma y la multiplicación son asociativas: (a + b) + c = a + (b + c) y (a × b) × c = a × (b × c). Esto permite agrupar términos de diferentes maneras. La resta y la división no son asociativas.

### Propiedades distributivas
La multiplicación distribuye sobre la suma: a × (b + c) = a×b + a×c. También funciona con la resta: a × (b - c) = a×b - a×c. Esta propiedad es fundamental para simplificar expresiones.

### Ejemplo resuelto
Calcule 25 × 17 + 25 × 3. Factorizando: 25 × (17 + 3) = 25 × 20 = 500. Sin factorizar: 25×17 = 425, 25×3 = 75, 425+75 = 500. Correcto.

### Ejemplo resuelto 2
Calcule 48 × 25. Descomponiendo: 48 × 25 = (50 - 2) × 25 = 50×25 - 2×25 = 1250 - 50 = 1200. Verificación: 48×25 = 1200. Correcto.

### Orden de operaciones
Regla PEMDAS: Paréntesis, Exponentes, Multiplicación y División (izquierda a derecha), Suma y Resta (izquierda a derecha). Ejemplo: 2 + 3 × 4 = 2 + 12 = 14, no 20. Si hay paréntesis: (2 + 3) × 4 = 5 × 4 = 20.

### Ejemplo con paréntesis
Calcule 100 - 2 × (3 + 4²). Primero paréntesis: 4² = 16, 3 + 16 = 19. Luego multiplicación: 2 × 19 = 38. Finalmente resta: 100 - 38 = 62.

### Trucos de cálculo mental
Multiplicar por 5: multiplicar por 10 y dividir por 2. Ejemplo: 48 × 5 = 480/2 = 240. Multiplicar por 9: multiplicar por 10 y restar el número. Ejemplo: 48 × 9 = 480 - 48 = 432. Multiplicar por 11: si el número es de dos dígitos ab, resultado es a(a+b)b. Ejemplo: 48 × 11: 4, 4+8=12, 8. Escribir 4, carry 1 para el 12, resultado 528.

### Ejemplo con trucos
Calcule 37 × 12. Usando distribución: 37 × 12 = 37 × (10 + 2) = 370 + 74 = 444. Verificación: 37×12 = 444. Correcto.

### División larga
Para dividir 456 ÷ 12: 12 cabe 3 veces en 45 (3×12=36), 45-36=9. Bajar el 6: 96. 12 cabe 8 veces en 96 (8×12=96). Resultado: 38. Verificación: 38×12 = 456. Correcto.

### Operaciones con decimales
Para sumar o restar decimales, alinea los puntos decimales. Para multiplicar: multiplica como enteros y coloca el punto decimal sumando los decimales de ambos factores. Para dividir: mueve el punto decimal del divisor para hacerlo entero, y mueve el mismo número de posiciones en el dividendo.

### Ejemplo con decimales
Calcule 3.5 × 2.4. Como enteros: 35 × 24 = 840. Decimales: 1 (de 3.5) + 1 (de 2.4) = 2. Resultado: 8.40 = 8.4. Verificación: 3.5×2.4 = 8.4. Correcto.

### Consejos prácticos
Siempre verifica tu respuesta con una estimación. Usa paréntesis para agrupar términos que quieres calcular primero. Factoriza cuando sea posible para simplificar. Para multiplicaciones grandes, descompon en factores más fáciles. Para divisiones, verifica multiplicando el cociente por el divisor y sumando el residuo.`,

  "metodos-practicos": `## Métodos Prácticos
### Tipos de métodos
Los métodos prácticos son técnicas de cálculo rápido que simplifican operaciones aritméticas complejas. Incluyen: redondeo, descomposición, compensación, división en factores fáciles, y uso de propiedades algebraicas. Estos métodos son especialmente útiles en exámenes donde el tiempo es limitado.

### Método de redondeo
Redondea los números a valores fáciles y ajusta después. Ejemplo: 97 × 26 ≈ 100 × 26 = 2600. Pero el 97 es 3 menos que 100, así que resta 3×26 = 78. Resultado: 2600 - 78 = 2522. Verificación: 97×26 = 2522. Correcto.

### Ejemplo resuelto
Calcule 98 × 47. Redondeo: 100 × 47 = 4700. Compensación: 2 × 47 = 94. Restar: 4700 - 94 = 4606. Verificación: 98×47 = 4606. Correcto.

### Método de descomposición
Descompón un número en suma de partes fáciles. Ejemplo: 34 × 15 = 34 × (10 + 5) = 340 + 170 = 510. También: 34 × 15 = 34 × 10 + 34 × 5 = 340 + 170 = 510.

### Ejemplo resuelto 2
Calcule 67 × 99. Descomposición: 67 × (100 - 1) = 6700 - 67 = 6633. Verificación: 67×99 = 6633. Correcto.

### Método de compensación
Cuando multiplicas por números cercanos a potencias de 10. Ejemplo: 23 × 11 = 23 × (10 + 1) = 230 + 23 = 253. Para 23 × 99: 23 × (100 - 1) = 2300 - 23 = 2277.

### Cuadrados perfectos cercanos
Para calcular cuadrados de números cercanos a 10, 100, etc. Usar (a+b)² = a² + 2ab + b² o (a-b)² = a² - 2ab + b². Ejemplo: 52² = (50+2)² = 2500 + 200 + 4 = 2704. 48² = (50-2)² = 2500 - 200 + 4 = 2304.

### Ejemplo con cuadrados
Calcule 105². (100+5)² = 10000 + 2×100×5 + 25 = 10000 + 1000 + 25 = 11025. Verificación: 105×105 = 11025. Correcto.

### Multiplicación cruzada
Para multiplicar números de dos dígitos: (10a+b)(10c+d) = 100ac + 10(ad+bc) + bd. Ejemplo: 23 × 45: a=2, b=3, c=4, d=5. ac=8, ad+bc=10+12=22, bd=15. Resultado: 800 + 220 + 15 = 1035. Verificación: 23×45 = 1035. Correcto.

### División rápida
Para dividir entre 5: dividir entre 10 y multiplicar por 2. Ejemplo: 245 ÷ 5 = 245 ÷ 10 × 2 = 24.5 × 2 = 49. Para dividir entre 25: dividir entre 100 y multiplicar por 4. Ejemplo: 375 ÷ 25 = 375 ÷ 100 × 4 = 3.75 × 4 = 15.

### Ejemplo de división rápida
Calcule 480 ÷ 16. Descomponiendo: 480 ÷ 16 = 480 ÷ (4 × 4) = (480 ÷ 4) ÷ 4 = 120 ÷ 4 = 30. Verificación: 30×16 = 480. Correcto.

### Suma de series
Para sumar números del 1 al n: n(n+1)/2. Ejemplo: Suma del 1 al 100: 100×101/2 = 5050. Para sumas parciales: sumar el primero y el último, multiplicar por la cantidad de pares. Ejemplo: Suma del 20 al 50: (20+50)×31/2 = 70×31/2 = 1085.

### Porcentajes rápidos
10% = dividir entre 10. 25% = dividir entre 4. 50% = dividir entre 2. 1% = dividir entre 100. Para 15%: 10% + 5% (la mitad del 10%). Ejemplo: 15% de 240: 10% = 24, 5% = 12, total = 36.

### Ejemplo con porcentajes
Calcule 35% de 480. 35% = 30% + 5%. 10% de 480 = 48. 30% = 3×48 = 144. 5% = 48/2 = 24. Total: 144 + 24 = 168. Verificación: 0.35×480 = 168. Correcto.

### Consejos prácticos
Elige el método más simple para cada caso. Para multiplicar por 9, 11, 99, 101, etc., usa los trucos específicos. Para sumas largas, busca patrones o usa la fórmula de la serie aritmética. En exámenes, verifica tu respuesta con una estimación. Practica estos métodos hasta que se vuelvan automáticos.`,

  "planteo-de-ecuaciones": `## Planteo de Ecuaciones
### Metodología
El planteo de ecuaciones consiste en traducir un problema verbal a una o varias ecuaciones matemáticas. El proceso tiene tres pasos: 1) Identificar la incógnita (la variable), 2) Establecer las relaciones entre las cantidades, 3) Formular la ecuación que representa el problema. Resolver la ecuación y verificar la respuesta.

### Definición de variables
Elige la incógnita como la quantity que quieres encontrar. Si el problema dice "un número", llama x a ese número. Si dice "la edad de Pedro", llama x a la edad de Pedro. Evita usar demasiadas variables; intenta expresar todo en términos de una sola.

### Ejemplo resuelto
Un número aumentado en 15 es el triple de otro número. La suma de ambos es 40. ¿Cuáles son los números? Llamo x al primer número y y al segundo. Ecuaciones: x + 15 = 3y, x + y = 40. De la segunda: x = 40 - y. Sustituyendo: 40 - y + 15 = 3y → 55 = 4y → y = 13.75. Entonces x = 40 - 13.75 = 26.25. Verificación: 26.25 + 15 = 41.25 = 3 × 13.75. Correcto.

### Ejemplo resuelto 2
Pedro tiene el doble de años que María. Dentro de 10 años, Pedro tendrá 1.5 veces la edad de María. ¿Cuántos años tienen? Llamo x a la edad de María y y a la edad de Pedro. Ecuaciones: y = 2x, y + 10 = 1.5(x + 10). Sustituyendo: 2x + 10 = 1.5x + 15 → 0.5x = 5 → x = 10. Pedro tiene y = 20. Verificación: Pedro tiene 20, María 10. Dentro de 10: Pedro 30, María 20. 30 = 1.5 × 20. Correcto.

### Ecuaciones con porcentajes
Si un precio aumenta un 20%, el nuevo precio es 1.2 veces el original. Si disminuye un 15%, el nuevo es 0.85 veces el original. Ejemplo: Un producto cuesta $100. Si aumenta un 25% y luego disminuye un 20%, ¿cuál es el precio final? 100 × 1.25 × 0.80 = 125 × 0.80 = 100. El precio final es $100.

### Ecuaciones con mezclas
Problemas de mezcla: cantidad₁ × concentración₁ + cantidad₂ × concentración₂ = cantidad_total × concentración_final. Ejemplo: Mezclar 30 litros de jugo al 40% con jugo puro para obtener al 60%. 30×0.40 + x×1 = (30+x)×0.60. 12 + x = 18 + 0.60x. 0.40x = 6. x = 15 litros.

### Ecuaciones con trabajo
Si A completa un trabajo en a días y B en b días, juntos lo completan en ab/(a+b) días. Ejemplo: A lo hace en 6 días, B en 12 días. Juntos: 6×12/(6+12) = 72/18 = 4 días.

### Verificación
Siempre verifica tu respuesta sustituyendo en la ecuación original. Si la ecuación se satisface, la respuesta es correcta. Si no, revisa tu planteo. También verifica que la respuesta tenga sentido en el contexto del problema (edades positivas, distancias no negativas, etc.).

### Ejemplo con verificación
Un rectángulo tiene un perímetro de 40 cm. Su largo es 3 cm más que su ancho. ¿Cuáles son las dimensiones? Llamo x al ancho. El largo es x + 3. Perímetro: 2(x + x + 3) = 40 → 2(2x + 3) = 40 → 4x + 6 = 40 → 4x = 34 → x = 8.5. Ancho = 8.5 cm, largo = 11.5 cm. Verificación: 2(8.5 + 11.5) = 2(20) = 40. Correcto.

### Consejos prácticos
Lee el problema varias veces antes de plantear. Identifica las cantidades conocidas y desconocidas. Establece claramente qué representa cada variable. Escribe ecuaciones que relacionen las cantidades. Resuelve paso a paso. Verifica siempre tu respuesta. Si el problema involucra dos incógnitas, busca un sistema de dos ecuaciones.`,

  "edades": `## Edades
### Tipos de problemas
Los problemas de edades involucran calcular edades pasadas, futuras o comparar edades entre personas. La clave es que todas las personas envejecen al mismo ritmo: si hoy Pedro tiene 20 años, dentro de 5 años tendrá 25. La diferencia de edades entre dos personas nunca cambia.

### Diferencia constante
Si Pedro tiene 30 años y María tiene 20, la diferencia es 10 años. Dentro de 10 años: Pedro 40, María 30. La diferencia sigue siendo 10. Antes de 10 años: Pedro 20, María 10. La diferencia siempre es 10. Esta propiedad es fundamental para resolver problemas de edades.

### Ejemplo resuelto
Pedro tiene el triple de años que Juan. Hace 4 años, Pedro tenía el cuádruple de años que Juan. ¿Cuántos años tienen? Llamo x a la edad actual de Juan. Pedro tiene 3x. Hace 4 años: Pedro tenía 3x-4, Juan tenía x-4. Ecuación: 3x - 4 = 4(x - 4). 3x - 4 = 4x - 16. 12 = x. Juan tiene 12 años, Pedro tiene 36. Verificación: Pedro tiene el triple (36 = 3×12). Hace 4 años: Pedro 32, Juan 8. 32 = 4×8. Correcto.

### Ejemplo resuelto 2
Ana tiene 25 años. Su hermana tiene 5 años más que ella. ¿Cuántos años tenía Ana cuando su hermana tenía la edad que Ana tiene ahora? Hermana tiene 30. Cuando la hermana tenía 25, Ana tenía 20 (porque la diferencia es 5). Ana tenía 20 años.

### Problemas con más personas
Si A es el doble de B, B es el triple de C, y la suma de sus edades es 74: a = 2b, b = 3c. Sustituyendo: a = 6c, b = 3c. Suma: 6c + 3c + c = 74. 10c = 74. c = 7.4. B = 22.2, A = 44.4. Verificación: 44.4 + 22.2 + 7.4 = 74. Correcto.

### Ecuaciones con edades
Para problemas complejos, define variables para las edades actuales y usa las relaciones dadas para formar ecuaciones. Si hay n personas, necesitas n ecuaciones independientes. Ejemplo: "La suma de las edades de tres hermanos es 36. El mayor tiene el doble del menor, y el del medio tiene 2 años más que el menor." Si el menor tiene x, el del medio x+2, y el mayor 2x. Suma: x + (x+2) + 2x = 36. 4x + 2 = 36. 4x = 34. x = 8.5. Menor: 8.5, del medio: 10.5, mayor: 17. Verificación: 8.5 + 10.5 + 17 = 36. Correcto.

### Edades en el pasado
Si Pedro tiene 25 hoy y hace x años tenía el doble de lo que tenía Juan hoy: Pedro hoy tiene 25. Hace x años: 25 - x. Juan hoy tiene j. Ecuación: 25 - x = 2j. Sin más información, no se puede resolver. Necesitas una relación adicional.

### Edades en el futuro
Si dentro de 10 años la suma de edades será 80, hoy la suma es 80 - 2×10 = 60 (porque hay dos personas). Si hay tres personas hoy y dentro de 10 años la suma será 90, hoy la suma es 90 - 3×10 = 60.

### Truco de multiplicación
Cuando un problema dice "hace x años, A tenía el doble de B", recuerda que ambos han envejecido x años desde entonces. Si A tenía 2B entonces, hoy A tiene 2B + x. Pero hoy B tiene B + x. Si la relación actual es diferente, necesitas una ecuación adicional.

### Ejemplo con truco
Hace 6 años, María tenía el triple de lo que tenía Pedro. Hoy María tiene el doble de Pedro. ¿Cuántos años tienen? Hace 6 años: María = 3(Pedro - 6). Hoy: María = 2Pedro. María hoy = 3(Pedro - 6) + 6 = 3Pedro - 12. Igualando: 2Pedro = 3Pedro - 12. Pedro = 12. María = 24. Verificación: Hace 6 años: María 18, Pedro 6. 18 = 3×6. Correcto.

### Consejos prácticos
Dibuja una línea de tiempo para visualizar las edades en diferentes momentos. Usa una tabla para organizar las edades de cada persona. Recuerda que la diferencia de edades es constante. Para problemas con más de dos personas, establece todas las relaciones antes de resolver. Verifica siempre que las edades sean positivas y tengan sentido.`,

  "cronometria": `## Cronometría
### Concepto fundamental
La cronometría estudia la relación entre tiempo, velocidad y distancia. Las fórmulas fundamentales son: distancia = velocidad × tiempo (d = v×t), velocidad = distancia/tiempo (v = d/t), tiempo = distancia/velocidad (t = d/v). Estas fórmulas son la base para resolver problemas de viajes, trenes, autos y cualquier movimiento.

### Unidades de velocidad
Kilómetros por hora (km/h) y metros por segundo (m/s). Conversión: 1 m/s = 3.6 km/h. Para convertir km/h a m/s: dividir entre 3.6. Para convertir m/s a km/h: multiplicar por 3.6. Ejemplo: 72 km/h = 72/3.6 = 20 m/s. 25 m/s = 25×3.6 = 90 km/h.

### Ejemplo resuelto
Un auto viaja a 60 km/h durante 2.5 horas. ¿Qué distancia recorre? d = v×t = 60 × 2.5 = 150 km. Verificación: en 2 horas recorre 120 km, en 0.5 horas recorre 30 km. Total: 150 km. Correcto.

### Ejemplo resuelto 2
Un tren de 200 m de longitud cruza un poste en 10 segundos. ¿Cuál es su velocidad? Velocidad = distancia/tiempo = 200/10 = 20 m/s. En km/h: 20 × 3.6 = 72 km/h. Verificación: 72 km/h = 20 m/s. En 10 segundos recorre 200 m (la longitud del tren). Correcto.

### Dos cuerpos en movimiento
Cuando dos cuerpos se mueven en la misma dirección, su velocidad relativa es la diferencia. Cuando se mueven en direcciones opuestas, su velocidad relativa es la suma. Para encuentros: tiempo = distancia/velocidad relativa. Ejemplo: Dos autos se encuentran a 300 km. Uno viaja a 50 km/h y el otro a 70 km/h. Velocidad relativa = 50 + 70 = 120 km/h. Tiempo = 300/120 = 2.5 horas.

### Persecución
Un auto A va a 80 km/h y está 50 km detrás de un auto B que va a 60 km/h. ¿Cuándo alcanza B? Velocidad relativa = 80 - 60 = 20 km/h. Tiempo = 50/20 = 2.5 horas. Distancia que recorre A: 80 × 2.5 = 200 km. Distancia que recorre B: 60 × 2.5 = 150 km. A recorre 200 km y B recorre 150 km, la diferencia es 50 km. Correcto.

### Trenes cruzándose
Un tren A de 150 m va a 30 m/s. Un tren B de 100 m va a 20 m/s en dirección opuesta. ¿Tiempo para cruzarse completamente? Distancia total = 150 + 100 = 250 m. Velocidad relativa = 30 + 20 = 50 m/s. Tiempo = 250/50 = 5 segundos.

### Vuelta y retorno
Un auto viaja de A a B a 60 km/h y regresa a 40 km/h. ¿Velocidad promedio del viaje total? No es (60+40)/2 = 50 km/h. Velocidad promedio = distancia total / tiempo total. Si la distancia es d: tiempo ida = d/60, tiempo vuelta = d/40. Tiempo total = d/60 + d/40 = (2d + 3d)/120 = 5d/120 = d/24. Velocidad promedio = 2d/(d/24) = 48 km/h.

### Ejemplo de velocidad promedio
Un auto recorre los primeros 100 km a 50 km/h y los siguientes 100 km a 100 km/h. Tiempo total: 100/50 + 100/100 = 2 + 1 = 3 horas. Velocidad promedio = 200/3 ≈ 66.67 km/h. No es (50+100)/2 = 75 km/h.

### Agujas de reloj
Las agujas de un reloj se mueven a velocidades constantes: la de horas a 0.5°/min y la de minutos a 6°/min. Velocidad relativa = 5.5°/min. Para que se encuentren: ángulo inicial / 5.5 = minutos. Ejemplo: Si están superpuestas a las 12:00, se encuentran cada 360/5.5 ≈ 65.45 minutos.

### Consejos prácticos
Dibuja una línea de tiempo para visualizar los movimientos. Identifica si los cuerpos se mueven en la misma dirección o en direcciones opuestas. Para trenes cruzándose, suma las longitudes. Para persecución, resta las velocidades. Para velocidad promedio, nunca promedies velocidades; usa distancia total dividida entre tiempo total. Verifica las unidades antes de calcular.`,

  "promedios": `## Promedios
### Concepto
El promedio (media aritmética) es la suma de los valores dividida entre la cantidad de valores. Fórmula: Promedio = (x₁ + x₂ + ... + xₙ)/n. Es una medida de tendencia central que indica el valor típico de un conjunto de datos. No es afectado por valores extremos tanto como la mediana.

### Propiedades del promedio
Si se agregan n datos con un promedio de μ a un conjunto de m datos con promedio de ν, el promedio combinado es (mν + nμ)/(m+n). Si se añade un dato al conjunto, el nuevo promedio depende de la diferencia entre el nuevo dato y el promedio actual.

### Ejemplo resuelto
Los promedios de 5 exámenes son: 85, 90, 78, 92, 88. Promedio general = (85+90+78+92+88)/5 = 433/5 = 86.6. Si el estudiante quiere un promedio de 90 después de 6 exámenes, ¿cuánto necesita en el sexto? Necesita una suma total de 90×6 = 540. Ya tiene 433. Necesita 540 - 433 = 107. Pero 107 > 100, así que es imposible alcanzar 90 de promedio.

### Ejemplo resuelto 2
El promedio de 10 números es 25. Si se elimina un número igual a 40, ¿cuál es el nuevo promedio? Suma original = 25 × 10 = 250. Nueva suma = 250 - 40 = 210. Nuevo promedio = 210/9 ≈ 23.33.

### Promedio ponderado
Cuando algunos datos tienen más peso que otros. Fórmula: Promedio ponderado = Σ(wᵢ × xᵢ)/Σwᵢ. Ejemplo: Examen 1 vale 30%, Examen 2 vale 30%, Examen 3 vale 40%. Notas: 80, 85, 90. Promedio = (0.30×80 + 0.30×85 + 0.40×90)/(0.30+0.30+0.40) = (24 + 25.5 + 36)/1 = 85.5.

### Promedio de progresiones
El promedio de una progresión aritmética es igual al promedio del primer y último término. Promedio = (a₁ + aₙ)/2. Ejemplo: Promedio de 1, 2, 3, 4, 5. Promedio = (1+5)/2 = 3. Correcto: (1+2+3+4+5)/5 = 15/5 = 3.

### Promedio geométrico
Fórmula: Promedio geométrico = (x₁ × x₂ × ... × xₙ)^(1/n). Se usa para promediar tasas de crecimiento. Ejemplo: Crecimiento del 10%, 20%, 15%. Promedio geométrico = (1.10 × 1.20 × 1.15)^(1/3) = (1.518)^(1/3) ≈ 1.149. Crecimiento promedio ≈ 14.9%.

### Ejemplo con promedio geométrico
Si un investimento crece un 50% el primer año y disminuye un 25% el segundo año, ¿cuál es el cambio total? Factor de crecimiento: 1.50 × 0.75 = 1.125. Cambio total: 12.5% de aumento. Promedio geométrico anual: (1.125)^(1/2) ≈ 1.0607. Crecimiento promedio ≈ 6.07% anual.

### Promedio armónico
Fórmula: Promedio armónico = n/(1/x₁ + 1/x₂ + ... + 1/xₙ). Se usa para promediar velocidades. Ejemplo: Un auto viaja 100 km a 50 km/h y 100 km a 100 km/h. Velocidad promedio armónica: 2/(1/50 + 1/100) = 2/(0.02 + 0.01) = 2/0.03 ≈ 66.67 km/h. Verificación con la fórmula de velocidad promedio: 200/(2+1) = 200/3 ≈ 66.67 km/h. Correcto.

### Relación entre promedios
Para cualquier conjunto de datos positivos: Promedio armónico ≤ Promedio geométrico ≤ Promedio aritmético. La igualdad se cumple solo cuando todos los datos son iguales.

### Ejemplo con promedios
El promedio de 5 números es 40. Si se añaden 5 números más con promedio de 60, ¿cuál es el promedio general? Promedio combinado = (5×40 + 5×60)/(5+5) = (200 + 300)/10 = 50.

### Consejos prácticos
Para promedios simples, suma y divide. Para promedios ponderados, multiplica cada dato por su peso. El promedio geométrico es mejor para tasas de crecimiento. El promedio armónico es mejor para velocidades. Recuerda que el promedio aritmético no siempre representa bien el centro de datos con valores extremos. Verifica que tu respuesta tenga sentido en el contexto del problema.`,

  "operadores-matematicos": `## Operadores Matemáticos
### Operadores básicos
Los operadores matemáticos son símbolos que indican una operación. Los fundamentales son: + (suma), - (resta/negación), × (multiplicación), ÷ (división), ^ (potenciación), √ (radicación). Cada operador tiene propiedades algebraicas y un orden de precedencia.

### Precedencia de operadores
De mayor a menor precedencia: 1) Paréntesis, 2) Exponentes y raíces, 3) Multiplicación y división (izquierda a derecha), 4) Suma y resta (izquierda a derecha). Ejemplo: 2 + 3 × 4² = 2 + 3 × 16 = 2 + 48 = 50, no (2+3)×16 = 80.

### Operador de negación
El signo menos puede ser resta (binary) o negación (unary). -5² = -25 (negación del cuadrado de 5), pero (-5)² = 25 (cuadrado de -5). La negación tiene mayor precedencia que la potenciación.

### Ejemplo resuelto
Calcule -3² + (-3)². -3² = -9 (primero se calcula 3²=9, luego se niega). (-3)² = 9 (se eleva al cuadrado el número -3). Resultado: -9 + 9 = 0.

### Ejemplo resuelto 2
Calcule 2³ × 3 - 4 × (5 - 2). Primero paréntesis: 5-2=3. Luego exponentes: 2³=8. Luego multiplicaciones: 8×3=24, 4×3=12. Finalmente resta: 24-12=12.

### Operador módulo
El operador módulo (%) devuelve el residuo de la división. 17 % 5 = 2 (porque 17 = 3×5 + 2). 20 % 4 = 0 (división exacta). 7 % 10 = 7 (7 es menor que 10). Es útil para verificar divisibilidad y en problemas de calendario.

### Ejemplo con módulo
¿Qué día de la semana será dentro de 100 días si hoy es lunes? 100 % 7 = 2 (porque 100 = 14×7 + 2). Dos días después del lunes es miércoles. Verificación: 7×14 = 98, 100-98 = 2. Correcto.

### Propiedades distributivas
La multiplicación distribuye sobre la suma: a × (b + c) = a×b + a×c. La potenciación NO distribuye sobre la suma: (a + b)² ≠ a² + b² en general. (a + b)² = a² + 2ab + b².

### Ejemplo de error común
Calcule (3 + 4)². Incorrecto: 3² + 4² = 9 + 16 = 25. Correcto: 7² = 49. La diferencia es 2ab = 2×3×4 = 24. 25 + 24 = 49. Correcto.

### Potenciación
Propiedades: aᵐ × aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, (ab)ⁿ = aⁿbⁿ, a⁰ = 1 (si a ≠ 0), a⁻ⁿ = 1/aⁿ, a^(m/n) = ⁿ√(aᵐ). Ejemplo: 2³ × 2⁴ = 2⁷ = 128. (3²)³ = 3⁶ = 729.

### Radicación
La raíz n de a es el número que elevado a n da a. ⁿ√a = a^(1/n). Propiedades: ⁿ√(ab) = ⁿ√a × ⁿ√b, ⁿ√(a/b) = ⁿ√a / ⁿ√b. Ejemplo: √(4×9) = √4 × √9 = 2×3 = 6. √36 = 6. Verificación: 6² = 36.

### Ejemplo con raíces
Calcule √(49/16). √(49/16) = √49 / √16 = 7/4 = 1.75. Verificación: (7/4)² = 49/16. Correcto.

### Operaciones combinadas
Ejemplo: 5 + 3 × 2² - 8 ÷ 4. Exponentes: 2² = 4. Multiplicación y división: 3×4 = 12, 8÷4 = 2. Suma y resta: 5 + 12 - 2 = 15.

### Consejos prácticos
Memoriza el orden de precedencia PEMDAS/BODMAS. Para exponentes, recuerda que -x² = -(x²), no (-x)². Para módulo, piensa en el residuo de la división. Verifica siempre tus cálculos con valores simples. Los errores más comunes son: olvidar paréntesis, confundir precedencia, y no distribuir correctamente.`,

  "operadores-binarios": `## Operadores Binarios
### Definición
Un operador binario es una operación que toma dos operandos y produce un resultado. En informática y matemática, los más comunes son: AND (∧), OR (∨), XOR (⊕), NOT (¬), y los desplazamientos. En aritmética, los operadores binarios son +, -, ×, ÷, ^, %.

### Operaciones lógicas binarias
AND (∧): 1 solo si ambos operandos son 1. OR (∨): 1 si al menos un operando es 1. XOR (⊕): 1 si los operandos son diferentes. NOT (¬): invierte el bit. Estas operaciones se realizan bit a bit en binario.

### Tabla de verdad AND
| A | B | A ∧ B |
|---|---|-------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### Tabla de verdad OR
| A | B | A ∨ B |
|---|---|-------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

### Tabla de verdad XOR
| A | B | A ⊕ B |
|---|---|-------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### Ejemplo resuelto
Calcule 13 ∧ 11 en binario. 13 = 1101, 11 = 1011. AND bit a bit: 1∧1=1, 1∧0=0, 0∧1=0, 1∧1=1. Resultado: 1001 = 9. Verificación: los bits que están en 1 en ambos números son el bit 0 (valor 1) y el bit 3 (valor 8). 1+8 = 9. Correcto.

### Ejemplo resuelto 2
Calcule 13 ∨ 11 en binario. 13 = 1101, 11 = 1011. OR bit a bit: 1∨1=1, 1∨0=1, 0∨1=1, 1∨1=1. Resultado: 1111 = 15. Verificación: los bits que están en 1 en al menos uno: bits 0, 1, 2, 3. 1+2+4+8 = 15. Correcto.

### Ejemplo con XOR
Calcule 13 ⊕ 11. 13 = 1101, 11 = 1011. XOR: 1⊕1=0, 1⊕0=1, 0⊕1=1, 1⊕1=0. Resultado: 0110 = 6. Verificación: los bits que están en 1 en exactamente uno: bits 1 y 2. 2+4 = 6. Correcto.

### Desplazamiento de bits
Desplazamiento a la izquierda (<<): multiplica por 2ⁿ. Ejemplo: 5 << 2 = 5 × 4 = 20. Desplazamiento a la derecha (>>): divide entre 2ⁿ (truncando). Ejemplo: 20 >> 2 = 20 ÷ 4 = 5.

### Propiedades de operadores lógicos
- Conmutatividad: A ∧ B = B ∧ A, A ∨ B = B ∨ A
- Asociatividad: (A ∧ B) ∧ C = A ∧ (B ∧ C)
- Distributividad: A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)
- Leyes de De Morgan: ¬(A ∧ B) = ¬A ∨ ¬B, ¬(A ∨ B) = ¬A ∧ ¬B

### Ejemplo con De Morgan
Si A = 1, B = 0: ¬(A ∧ B) = ¬(1 ∧ 0) = ¬0 = 1. ¬A ∨ ¬B = 0 ∨ 1 = 1. Correcto.

### Operador ternario
El operador ternario (? :) evalúa una condición y devuelve un valor u otro. Forma: condición ? valor_si_verdadero : valor_si_falso. Ejemplo: x > 0 ? "positivo" : "no positivo". Si x = 5, resultado: "positivo".

### Ejemplo con operador ternario
Calcule el valor de: (5 > 3) ? (2 + 3) : (2 × 3). 5 > 3 es verdadero, así que resultado: 2 + 3 = 5.

### Operadores de comparación
Igualdad (==), desigualdad (!=), mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=). Estos operadores devuelven 0 (falso) o 1 (verdadero). Ejemplo: 5 > 3 = 1, 5 == 5 = 1, 5 != 3 = 1.

### Ejemplo combinado
Calcule: (3 AND 5) OR (2 XOR 4). 3 = 011, 5 = 101. 3 AND 5 = 001 = 1. 2 = 010, 4 = 100. 2 XOR 4 = 110 = 6. 1 OR 6 = 001 OR 110 = 111 = 7.

### Consejos prácticos
Convierte siempre a binario antes de operar. Dibuja tablas de verdad para verificar. Recuerda que AND filtra bits, OR combina bits, XOR detecta diferencias. Los desplazamientos son multiplicaciones/divisiones rápidas por potencias de 2. Las leyes de De Morgan son útiles para simplificar expresiones lógicas complejas.`,

  "conteo-de-figuras": `## Conteo de Figuras
### Métodos de conteo
El conteo de figuras consiste en determinar cuántos triángulos, rectángulos u otras figuras hay en una figura compuesta. Los métodos más comunes son: conteo directo, conteo por sistemas, fórmulas para figuras regulares, y el principio de inclusión-exclusión.

### Triángulos en una figura
Para contar triángulos, identifica la base y la altura. Si hay n puntos en la base, los triángulos con vértice en un punto fijo arriba son: n(n-1)/2. Para figuras más complejas, cuenta por tamaño: pequeños, medianos, grandes, etc.

### Ejemplo resuelto
En una fila de 5 puntos, ¿cuántos triángulos se forman con un punto fijo arriba? n = 5. Triángulos = 5×4/2 = 10. Verificación: los triángulos son: (1,2), (1,3), (1,4), (1,5), (2,3), (2,4), (2,5), (3,4), (3,5), (4,5). Total: 10. Correcto.

### Rectángulos en una cuadrícula
En una cuadrícula de m×n cuadros, el número total de rectángulos es C(m+1,2) × C(n+1,2) = [m(m+1)/2] × [n(n+1)/2]. Ejemplo: Cuadrícula 3×2. Rectángulos = [3×4/2] × [2×3/2] = 6 × 3 = 18.

### Ejemplo resuelto 2
¿Cuántos rectángulos hay en una cuadrícula 4×3? Usando la fórmula: [4×5/2] × [3×4/2] = 10 × 6 = 60 rectángulos. Verificación contando por tamaño: 1×1: 12, 1×2: 9, 1×3: 6, 2×1: 8, 2×2: 6, 2×3: 4, 3×1: 4, 3×2: 3, 3×3: 2, 4×1: 3, 4×2: 2, 4×3: 1. Suma: 12+9+6+8+6+4+4+3+2+3+2+1 = 60. Correcto.

### Cuadrados en una cuadrícula
En una cuadrícula n×n, el número de cuadrados es: Σk² desde k=1 hasta n = n(n+1)(2n+1)/6. Ejemplo: Cuadrícula 3×3. Cuadrados = 1² + 2² + 3² = 1 + 4 + 9 = 14. Usando la fórmula: 3×4×7/6 = 84/6 = 14. Correcto.

### Triángulos en una cuadrícula
Más complejo. En una cuadrícula m×n, el número de triángulos se calcula contando todos los posibles conjuntos de 3 puntos que forman un triángulo (no colineales). Fórmula: C(mn,3) - (número de trío colineales).

### Ejemplo con triángulos en cuadrícula
Cuadrícula 2×2 (4 puntos). C(4,3) = 4 triángulos posibles. Pero los 3 puntos de cada fila o columna son colineales. Hay 2 filas y 2 columnas, cada una con 3 puntos colineales. Pero en 2×2, cada fila y columna tiene solo 2 puntos. Los 3 puntos colineales son: fila 1: solo 2 puntos, fila 2: solo 2 puntos, columna 1: solo 2 puntos, columna 2: solo 2 puntos. No hay 3 puntos colineales en 2×2. Total: 4 triángulos.

### Figuras con líneas
Cuando hay líneas que se cruzan, cuenta por regiones. Ejemplo: 4 líneas que se cruzan todas entre sí (sin paralelas, sin tres concurrentes). Número de regiones: 1 + n + C(n,2) = 1 + 4 + 6 = 11. Fórmula general: (n² + n + 2)/2.

### Ejemplo con líneas
5 líneas que se cruzan todas entre sí. Regiones = (25 + 5 + 2)/2 = 32/2 = 16. Verificación: la fórmula es (n² + n + 2)/2. Para n=5: (25+5+2)/2 = 16. Correcto.

### Polígonos en una figura
Para contar polígonos, clasifica por número de lados. Ejemplo: en un octágono regular, ¿cuántos triángulos se forman al conectar todos los vértices? C(8,3) = 56 triángulos.

### Consejos prácticos
Clasifica las figuras por tamaño para evitar duplicados. Usa fórmulas cuando la figura sea regular. Para figuras irregulares, conta directamente usando un sistema organizado. Marca las figuras ya contadas para no repetir. Verifica tu respuesta con un método diferente si es posible. Los errores más comunes son: contar figuras dos veces y olvidar figuras compuestas.`,

  "areas-sombreadas-y-perimetros": `## Áreas Sombreadas y Perímetros
### Fórmulas fundamentales
Área del rectángulo: A = base × altura. Área del triángulo: A = (base × altura)/2. Área del círculo: A = πr². Perímetro del rectángulo: P = 2(base + altura). Perímetro del círculo: P = 2πr. Circunferencia: C = 2πr = πd.

### Áreas compuestas
Para calcular el área de una figura compuesta, divide la figura en formas simples cuyas áreas conozcas. Resta áreas cuando sea necesario (por ejemplo, un agujero en una figura). Suma áreas cuando las partes no se superponen.

### Ejemplo resuelto
Un rectángulo de 10 × 6 tiene un círculo de radio 2 en su interior. ¿Cuál es el área sombreada (el rectángulo menos el círculo)? Área rectángulo = 10 × 6 = 60. Área círculo = π × 2² = 4π ≈ 12.57. Área sombreada = 60 - 12.57 = 47.43.

### Ejemplo resuelto 2
Un triángulo con base 8 y altura 5 está inscrito en un rectángulo de 8 × 5. ¿Cuál es el área del rectángulo que no está cubierta por el triángulo? Área rectángulo = 40. Área triángulo = (8×5)/2 = 20. Área restante = 40 - 20 = 20.

### Perímetros compuestos
El perímetro es la distancia alrededor de una figura. Para figuras compuestas, suma los lados exteriores. Los lados interiores que están dentro de la figura no se incluyen en el perímetro.

### Ejemplo con perímetro
Un rectángulo de 8 × 5 tiene un cuadrado de 2 × 2 cortado en una esquina. ¿Cuál es el perímetro resultante? Perímetro original = 2(8+5) = 26. Al cortar el cuadrado, se eliminan 2+2=4 unidades de perímetro exterior, pero se agregan 2+2=4 unidades de perímetro interior. El perímetro total sigue siendo 26.

### Región sombreada en círculos
Cuando hay dos círculos superpuestos, el área sombreada puede ser la intersección o la diferencia. Para dos círculos con radios r₁ y r₂ y distancia entre centros d: área de intersección requiere integrales o fórmulas especiales. Para círculos concentricos: área sombreada = π(R² - r²).

### Ejemplo con anillo
Un anillo tiene radio exterior R = 5 y radio interior r = 3. Área = π(5² - 3²) = π(25 - 9) = 16π ≈ 50.27. Perímetro exterior = 2π(5) = 10π. Perímetro interior = 2π(3) = 6π. Perímetro total del anillo = 10π + 6π = 16π.

### Triángulos en figuras compuestas
A veces un triángulo está parcialmente sombreado. Divides el triángulo en partes más pequeñas o usas proporciones. Ejemplo: Un triángulo con base 10 y altura 8 tiene una línea paralela a la base a 3 unidades de ella. El área del trapecio resultante es: A = (b₁ + b₂) × h / 2. La base superior es proporcional: b₂ = 10 × (8-3)/8 = 10 × 5/8 = 6.25. Área del trapecio = (10 + 6.25) × 3 / 2 = 16.25 × 1.5 = 24.375.

### Ejemplo resuelto 3
Un cuadrado de lado 10 tiene un triángulo en cada esquina (cada uno con base 3 y altura 4). ¿Cuál es el área sombreada (el cuadrado menos los 4 triángulos)? Área cuadrado = 100. Área de un triángulo = (3×4)/2 = 6. Área total de 4 triángulos = 24. Área sombreada = 100 - 24 = 76.

### Propiedades de áreas
Si duplicas las dimensiones de una figura, el área se cuadruplica (×2² = ×4). Si triplicas las dimensiones, el área se novuplica (×3² = ×9). En general, si las dimensiones se multiplican por k, el área se multiplica por k².

### Ejemplo con escala
Un rectángulo tiene área 50. Si sus lados se duplican, el área será 50 × 4 = 200. Verificación: si originalmente es 5 × 10, luego es 10 × 20 = 200. Correcto.

### Consejos prácticos
Dibuja la figura y marca las dimensiones. Divide figuras complejas en formas simples. Para áreas sombreadas, resta el área no sombreada del总面积. Para perímetros, solo cuenta los lados exteriores. Recuerda que π ≈ 3.14159. Usa τ (tau) ≈ 6.28318 para circunferencias. Verifica que tus dimensiones sean consistentes (mismas unidades).`,

  "analisis-combinatorio": `## Análisis Combinatorio
### Principio multiplicativo
Si un evento puede ocurrir de m maneras y otro de n maneras, los dos eventos juntos pueden ocurrir de m × n maneras. Ejemplo: 3 camisas y 4 pantalones: 3 × 4 = 12 outfits posibles. Este principio se extiende a más eventos.

### Principio aditivo
Si un evento puede ocurrir de m maneras y otro de n maneras, y son mutuamente excluyentes (no pueden ocurrir juntos), hay m + n maneras en total. Ejemplo: elegir un platillo de 3 entrantes o 5 postres: 3 + 5 = 8 opciones.

### Permutaciones
El número de formas de ordenar n elementos distintos es n! (factorial). n! = n × (n-1) × (n-2) × ... × 1. 0! = 1. Permutaciones de r elementos de n: P(n,r) = n!/(n-r)!. Ejemplo: P(5,3) = 5!/(5-3)! = 120/2 = 60.

### Ejemplo resuelto
¿Cuántas palabras de 3 letras se pueden formar con las letras A, B, C, D sin repetición? P(4,3) = 4!/(4-3)! = 24/1 = 24. Verificación: ABC, ABD, ACB, ACD, ADB, ADC, BAC, BAD, BCA, BCD, BDA, BDC, CAB, CAD, CBA, CBD, CDA, CDB, DAB, DAC, DBA, DBC, DCA, DCB. Total: 24. Correcto.

### Combinaciones
El número de formas de elegir r elementos de n sin importar el orden: C(n,r) = n!/[r!(n-r)!]. Ejemplo: C(5,2) = 5!/[2!3!] = 120/[2×6] = 10. Las combinaciones son útiles cuando el orden no importa (equipos, comités, etc.).

### Ejemplo resuelto 2
¿Cuántos subcomités de 3 personas se pueden formar de un grupo de 8? C(8,3) = 8!/[3!5!] = 40320/[6×120] = 40320/720 = 56. Verificación: el número de formas de elegir 3 de 8 es 56.

### Permutaciones con repetición
Cuando hay elementos repetidos: n!/(n₁! × n₂! × ... × nₖ!). Ejemplo: ¿Cuántas palabras se pueden formar con las letras de "AALALA"? Total de letras: 6. A aparece 3 veces, L aparece 2 veces, una L. Permutaciones: 6!/(3!×2!×1!) = 720/(6×2×1) = 720/12 = 60.

### Combinaciones con repetición
El número de formas de elegir r elementos de n con repetición: C(n+r-1, r) = (n+r-1)!/[r!(n-1)!]. Ejemplo: ¿Cuántas formas de elegir 3 donas de 5 tipos? C(5+3-1, 3) = C(7,3) = 35.

### Ejemplo resuelto 3
¿Cuántas soluciones enteras no negativas tiene x + y + z = 10? C(10+3-1, 10) = C(12,10) = C(12,2) = 66. Verificación: C(12,2) = 12×11/2 = 66. Correcto.

### Principio de inclusión-exclusión
|A ∪ B| = |A| + |B| - |A ∩ B|. Para tres conjuntos: |A ∪ B ∪ C| = |A| + |B| + |C| - |A∩B| - |A∩C| - |B∩C| + |A∩B∩C|.

### Ejemplo con inclusión-exclusión
En un grupo de 50 personas: 30 hablan inglés, 25 hablan francés, 20 hablan español. 15 hablan inglés y francés, 10 hablan inglés y español, 8 hablan francés y español, 5 hablan los tres. ¿Cuántas personas hablan al menos un idioma? |E ∪ F ∪ S| = 30+25+20-15-10-8+5 = 47.

### Tabla de Pascal
Los números de Pascal son C(n,k) y se organizan en un triángulo. Cada número es la suma de los dos números directamente arriba. Fila 0: 1. Fila 1: 1 1. Fila 2: 1 2 1. Fila 3: 1 3 3 1. Fila 4: 1 4 6 4 1. Los números de Pascal son útiles para expandir (a+b)ⁿ y para contar combinaciones.

### Ejemplo con tabla de Pascal
C(5,2) se encuentra en la fila 5, posición 2: 1 5 10 10 5 1. C(5,2) = 10. Correcto.

### Permutaciones circulares
El número de formas de ordenar n elementos en un círculo es (n-1)!. Ejemplo: 5 personas en una mesa redonda: (5-1)! = 4! = 24 formas. Si el círculo puede girarse (sin referencia fija), es (n-1)!/2 si se cuenta la simetría por reflexión.

### Ejemplo con permutaciones circulares
4 personas en una mesa redonda: (4-1)! = 6 formas. Si se cuenta la dirección (horario y antihorario son iguales): 6/2 = 3 formas.

### Consejos prácticos
Identifica si el orden importa (permutación) o no (combinación). Para problemas con restricciones, usa inclusión-exclusión. Para problemas de distribución, usa combinaciones con repetición. Los factoriales crecen muy rápido: 10! = 3,628,800. Para cálculos grandes, simplifica antes de multiplicar. Verifica tu respuesta con un caso pequeño.`,

  "probabilidades": `## Probabilidades
### Definición
La probabilidad de un evento es la razón entre el número de casos favorables y el número total de casos posibles (cuando todos son equiprobables). P(A) = casos favorables / casos totales. El valor siempre está entre 0 (imposible) y 1 (seguro). P(A) = 1 - P(no A).

### Eventos simples
Un evento simple es un solo resultado posible. Ejemplo: lanzar un dado: los eventos simples son {1, 2, 3, 4, 5, 6}. Total de casos = 6. Si queremos sacar un 3: P(3) = 1/6.

### Ejemplo resuelto
¿Cuál es la probabilidad de sacar un número par al lanzar un dado? Números pares: {2, 4, 6}. Casos favorables = 3. Casos totales = 6. P(par) = 3/6 = 1/2.

### Ejemplo resuelto 2
¿Cuál es la probabilidad de sacar al menos un 6 al lanzar dos dados? P(no 6 en dado 1) = 5/6. P(no 6 en dado 2) = 5/6. P(no 6 en ambos) = (5/6)² = 25/36. P(al menos un 6) = 1 - 25/36 = 11/36.

### Probabilidad de la unión
P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Si A y B son mutuamente excluyentes: P(A ∪ B) = P(A) + P(B). Ejemplo: P(par o impar) = P(par) + P(impar) = 1/2 + 1/2 = 1. P(1 o 6) = 1/6 + 1/6 = 1/3.

### Probabilidad condicional
P(A|B) = P(A ∩ B)/P(B). Es la probabilidad de A dado que B ocurrió. Ejemplo: P(sacar 6 | sacar par) = P(6)/P(par) = (1/6)/(1/2) = 1/3. Solo el 6 es par y 6, así que 1 de los 3 pares.

### Ejemplo con condicional
Un dado está cargado: P(1)=P(2)=P(3)=1/6, P(4)=P(5)=1/8, P(6)=1/4. ¿P(sacar par)? P(par) = P(2)+P(4)+P(6) = 1/6 + 1/8 + 1/4 = 4/24 + 3/24 + 6/24 = 13/24.

### Eventos independientes
Dos eventos son independientes si la ocurrencia de uno no afecta la otra. P(A ∩ B) = P(A) × P(B). Ejemplo: Lanzar dos dados. P(6 en dado 1 y 3 en dado 2) = (1/6)(1/6) = 1/36.

### Probabilidad complementaria
P(no A) = 1 - P(A). Es más fácil calcular la probabilidad del complemento y restar. Ejemplo: P(al menos un 6 en dos dados) = 1 - P(ningún 6) = 1 - (5/6)² = 1 - 25/36 = 11/36.

### Ejemplo resuelto 3
¿Cuál es la probabilidad de que al menos una persona tenga cumpleaños el mismo día que otra en un grupo de 23? P(ningún cumpleaños coincide) = 365/365 × 364/365 × 363/365 × ... × 343/365 ≈ 0.4927. P(al menos un coincidence) = 1 - 0.4927 = 0.5073. Es mayor al 50% con solo 23 personas.

### Probabilidad total
P(A) = Σ P(A|Bᵢ) × P(Bᵢ). Ejemplo: Urna 1 tiene 3 rojas y 7 azules. Urna 2 tiene 5 rojas y 5 azules. Se elige una urna al azar y se saca una bola. P(roja) = P(roja|urna1)×P(urna1) + P(roja|urna2)×P(urna2) = (3/10)(1/2) + (5/10)(1/2) = 3/20 + 5/20 = 8/20 = 2/5.

### Valor esperado
El valor esperado es el promedio ponderado de los resultados. E(X) = Σ xᵢ × P(xᵢ). Ejemplo: Dado justo. E(X) = 1(1/6) + 2(1/6) + 3(1/6) + 4(1/6) + 5(1/6) + 6(1/6) = 21/6 = 3.5.

### Ejemplo con valor esperado
Un juego: si sale 6 ganas $10, si sale par ganas $2, si sale impar pierdes $1. ¿Vale la pena jugar? E(X) = 10(1/6) + 2(2/6) - 1(3/6) = 10/6 + 4/6 - 3/6 = 11/6 ≈ $1.83. En promedio, ganas $1.83 por juego.

### Varianza y desviación estándar
Var(X) = E(X²) - [E(X)]². Desviación estándar = √Var(X). Ejemplo: Dado justo. E(X²) = (1+4+9+16+25+36)/6 = 91/6. Var(X) = 91/6 - (3.5)² = 91/6 - 12.25 = 91/6 - 73.5/6 = 17.5/6 ≈ 2.917. σ ≈ 1.708.

### Consejos prácticos
Siempre verifica que las probabilidades sumen 1. Usa el complemento cuando "al menos" aparezca en el problema. Para eventos independientes, multiplica las probabilidades. Para eventos mutuamente excluyentes, suma las probabilidades. El valor esperado es útil para tomar decisiones: si E(X) > 0, el juego es favorable a largo plazo. Recuerda que la probabilidad de un evento cierto es 1 y de un evento imposible es 0.`
};
