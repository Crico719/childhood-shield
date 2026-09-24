export const geoStudyGuides9: Record<string, string> = {
  "curvas-notables": `## Curvas Notables

Las curvas notables son familias de curvas que aparecen frecuentemente en geometría y análisis matemático. Se denominan "notables" por su relevancia en la resolución de problemas geométricos, su presencia en modelos físicos y su papel fundamental en el estudio de secciones cónicas.

### Definición General

Una curva notable se define como el lugar geométrico de puntos que satisfacen una condición específica respecto a un punto fijo (foco) y una recta fija (directriz). Cada curva notable posee parámetros característicos que determinan su forma y tamaño.

### Las Secciones Cónicas

Las secciones cónicas se obtienen al cortar un cono recto con un plano. Según el ángulo de inclinación del plano respecto al eje del cono, se distinguen tres curvas fundamentales:

- **Elipse:** El plano corta al cono formando un ángulo menor que el de la generatriz. La ecuación canónica es x²/a² + y²/b² = 1, donde a es el semieje mayor y b el semieje menor. La relación entre ambos se establece como b² = a²(1 − e²), siendo e la excentricidad (0 < e < 1). La suma de las distancias de cualquier punto de la elipse a los dos focos es constante e igual a 2a.

- **Parábola:** El plano es paralelo a una generatriz del cono. Su ecuación canónica es y² = 4px, donde p es la distancia del vértice al foco. La excentricidad es e = 1. Todo punto de la parábola equidista del foco y de la directriz. El eje de simetría pasa por el foco y es perpendicular a la directriz.

- **Hipérbola:** El plano corta ambas partes del cono. La ecuación canónica es x²/a² − y²/b² = 1. Los parámetros se relacionan mediante c² = a² + b², donde c es la distancia del centro a cada foco. La excentricidad satisface e > 1. La diferencia de distancias a los focos es constante e igual a 2a.

### Propiedades Geométricas Comunes

Todas las secciones cónicas comparten la propiedad de que pueden definirse mediante la relación distancia a un foco sobre distancia a una directriz. Esta relación es precisamente la excentricidad. Las asíntotas de la hipérbola se expresan como y = ±(b/a)x, y determinan el comportamiento asintótico de la curva.

### Ejemplo Resuelto

Se pide hallar la ecuación de una elipse con focos en F₁(−3, 0) y F₂(3, 0) que pasa por el punto P(0, 4).

**Paso 1:** Identificar que 2c = 6, por lo tanto c = 3.

**Paso 2:** Calcular 2a usando la propiedad de la elipse: PF₁ + PF₂ = 2a.

PF₁ = √((−3−0)² + (0−4)²) = √(9 + 16) = 5
PF₂ = √((3−0)² + (0−4)²) = √(9 + 16) = 5

Por lo tanto: 2a = 5 + 5 = 10, entonces a = 5.

**Paso 3:** Calcular b² = a² − c² = 25 − 9 = 16, entonces b = 4.

**Resultado:** La ecuación es x²/25 + y²/16 = 1.

### Aplicaciones

Las curvas notables tienen aplicaciones en órbitas planetarias (elipses), reflectores de luz (parábolas) y trayectorias hiperbólicas de partículas subatómicas. En arquitectura, los arcos parabólicos distribuyen eficientemente las cargas.`,

  "metodos-resolucion-geometrica": `## Métodos de Resolución Geométrica

Los métodos de resolución geométrica comprenden técnicas sistemáticas para resolver problemas que involucran figuras, construcciones y relaciones espaciales. Estos métodos combinan razonamiento deductivo con herramientas de construcción clásicas.

### Método de Coordenadas

El método de coordenadas (o analítico) consiste en representar los elementos geométricos mediante ecuaciones en un sistema de ejes cartesianos. Cada punto se identifica con un par (x, y), y las figuras se expresan como igualdades algebraicas. Este método transforma problemas geométricos en problemas algebraicos que se resuelven mediante operaciones algebraicas y cálculo.

### Método Vectorial

El método vectorial representa las magnitudes geométricas como vectores. Un vector se define por su módulo, dirección y sentido. Las operaciones fundamentales son:

- **Suma de vectores:** Se realiza mediante la regla del paralelogramo o la regla del triángulo.
- **Producto escalar:** a⃗ · b⃗ = |a⃗| |b⃗| cos θ, donde θ es el ángulo entre ambos vectores.
- **Producto vectorial:** a⃗ × b⃗ = |a⃗| |b⃗| sin θ · n̂, siendo n̂ el vector unitario normal al plano que contiene a ambos vectores.

El producto escalar es especialmente útil para calcular ángulos y proyecciones, mientras que el producto vectorial permite determinar áreas y verificar perpendicularidad.

### Método Trigonométrico

Este método emplea relaciones trigonométricas entre lados y ángulos de triángulos y polígonos. Las fórmulas fundamentales incluyen la ley de senos: a/sen A = b/sen B = c/sen C = 2R (donde R es el radio de la circunferencia circunscrita), y la ley de cosenos: c² = a² + b² − 2ab cos C. Estas relaciones permiten resolver triángulos desconocidos completamente.

### Método por Semejanza

Los triángulos semeján tienen sus ángulos iguales y sus lados proporcionales. Si ΔABC ~ ΔDEF, entonces AB/DE = BC/EF = AC/DF = k, donde k es el coeficiente de semejanza. Este método se aplica para resolver problemas que involucran figuras con la misma forma pero diferente tamaño, como en problemas de sombras y escalas.

### Ejemplo Resuelto

En un triángulo ABC, los lados miden a = 7, b = 8 y c = 9. Hallar el ángulo C.

**Paso 1:** Aplicar la ley de cosenos:
c² = a² + b² − 2ab cos C
81 = 49 + 64 − 2(7)(8) cos C

**Paso 2:** Despejar cos C:
81 = 113 − 112 cos C
112 cos C = 113 − 81 = 32
cos C = 32/112 = 2/7

**Paso 3:** Calcular C:
C = arccos(2/7) ≈ 73,4°

### Método por Transformaciones

Las transformaciones geométricas incluyen traslaciones, rotaciones, reflexiones y homotecias. Cada transformación se representa con una matriz de transformación. Por ejemplo, una rotación de ángulo θ se representa como:

R(θ) = [cos θ  −sin θ]
       [sin θ   cos θ]

Estas transformaciones son isometías cuando conservan distancias y ángulos. Se aplican para simplificar problemas de simetría y congruencia de figuras.

### Elección del Método

La elección del método adecuado depende de la naturaleza del problema. Los problemas con medidas y ángulos se resuelven preferentemente con trigonometría. Los problemas de posición relativa conviene abordarlos con vectores. Las construcciones precisas requieren métodos por semejanza o transformaciones.`,

  "problemas-compuestos-geometrica": `## Problemas Compuestos de Geometría

Los problemas compuestos de geometría son ejercicios que integran múltiples conceptos y métodos en una sola situación problemática. Su resolución exige identificar las relaciones entre diversas figuras, aplicar varias fórmulas de manera coordinada y descomponer el problema en partes más simples.

### Estructura de un Problema Compuesto

Un problema compuesto típico combina al menos dos de los siguientes elementos: polígonos con circunferencias, triángulos con rectas notables, o figuras tridimensionales con secciones planas. La clave está en reconocer las intersecciones, tangencias y relaciones de proporcionalidad entre las figuras involucradas.

### Estrategia de Resolución

1. **Lectura y comprensión:** Identificar todas las figuras y datos proporcionados.
2. **Representación gráfica:** Dibujar un diagrama claro y escalado que muestre todas las relaciones geométricas.
3. **Identificación de figuras auxiliares:** Buscar triángulos rectángulos, paralelogramos o arcos circulares que simplifiquen el problema.
4. **Aplicación secuencial de fórmulas:** Resolver paso a paso, verificando que cada resultado alimente correctamente al siguiente.
5. **Comprobación:** Validar que la solución sea coherente con los datos del enunciado.

### Tipos Frecuentes de Problemas Compuestos

- **Polígono inscrito en circunferencia con diagonales:** Se combinan relaciones de potencia de punto con trigonometría.
- **Figuras con circunferencias tangentes:** Se aplican teoremas de tangentes, potencia de punto y semejanza.
- **Prismas y pirámides con secciones:** Se utilizan relaciones de semejanza en las secciones y cálculo de áreas laterales y totales.
- **Problemas con el teorema de Ptolomeo:** En un cuadrilátero cíclico, el producto de las diagonales es igual a la suma de los productos de los lados opuestos: AC · BD = AB · CD + BC · AD.

### Ejemplo Resuelto

Un cuadrado ABCD de lado 6 tiene una circunferencia inscrita y otra circunscrita. Hallar el área de la región comprendida entre ambas circunferencias.

**Paso 1:** Radio de la circunferencia inscrita.
El lado del cuadrado es 2r_inscrita, por lo tanto:
r_inscrita = 6/2 = 3

**Paso 2:** Radio de la circunferencia circunscrita.
La diagonal del cuadrado es d = 6√2, y el diámetro de la circunferencia circunscrita es igual a la diagonal:
r_circunscrita = (6√2)/2 = 3√2

**Paso 3:** Calcular las áreas de ambas circunferencias:
A_inscrita = π(3)² = 9π
A_circunscrita = π(3√2)² = π · 18 = 18π

**Paso 4:** Calcular el área de la región entre ambas:
Área = A_circunscrita − A_inscrita = 18π − 9π = 9π ≈ 28,27 unidades²

### Técnicas de Simplificación

- **Simetría:** Si el problema presenta simetría, dividir en regiones equivalentes.
- **Substitución de valores:** Sustituir medidas numéricas en fórmulas generales.
- **Uso de áreas complementarias:** Calcular áreas de figuras sencillas y restar.

### Errores Comunes

No asumir que una figura es inscrita sin verificar las condiciones de tangencia. Olvidar que los radios de una circunferencia inscrita y circunscrita en un polígono regular se calculan con fórmulas distintas. Confundir la base con la altura en polígonos inclinados.`,

  "optimizacion-geometrica": `## Optimización Geométrica

La optimización geométrica consiste en encontrar, dentro de un conjunto de soluciones posibles, la que maximiza o minimiza una determinada magnitud geométrica como área, perímetro, volumen o distancia. Esta disciplina combina herramientas de geometría con técnicas de cálculo diferencial.

### Planteamiento del Problema

Todo problema de optimización geométrica comienza con la identificación de la variable independiente (la cantidad que se puede modificar) y la función objetivo (la magnitud que se desea optimizar). Se debe expresar la función objetivo en términos de una sola variable, aplicando las restricciones geométricas del problema.

### Método de Cálculo Diferencial

Una vez obtenida la función f(x) que representa la magnitud a optimizar:

1. **Calcular la derivada:** f'(x).
2. **Igualar a cero:** f'(x) = 0 para encontrar puntos críticos.
3. **Clasificar el punto crítico:** Usar el criterio de la segunda derivada: si f''(x₀) > 0, hay mínimo local; si f''(x₀) < 0, hay máximo local.
4. **Verificar fronteras:** Comparar los valores de f en los puntos críticos con los valores en los extremos del dominio.

### Casos Clásicos de Optimización Geométrica

**Problema del rectángulo de área máxima con perímetro fijo:**
Dado un perímetro P, se busca el rectángulo de mayor área. Si los lados son x e y, entonces 2x + 2y = P, de donde y = P/2 − x. El área es A(x) = x(P/2 − x) = Px/2 − x². Derivando e igualando a cero: A'(x) = P/2 − 2x = 0, entonces x = P/4 y y = P/4. El rectángulo óptimo es un cuadrado.

**Problema del cilindro de volumen máximo con superficie fija:**
Un cilindro abierto por arriba tiene superficie lateral y base. Si el radio es r y la altura h, con superficie fija S = πr² + 2πrh, se despeja h = (S − πr²)/(2πr). El volumen V = πr²h se expresa en función de r, se deriva y se iguala a cero.

**Problema de la distancia mínima entre un punto y una recta:**
La distancia perpendicular es la menor posible entre un punto y una recta. Si el punto es (x₀, y₀) y la recta es Ax + By + C = 0, la distancia mínima es d = |Ax₀ + By₀ + C|/√(A² + B²).

### Ejemplo Resuelto

Se dispone de 100 metros de valla para cercar un recinto rectangular adosado a un muro existente (que hace de un lado). Hallar las dimensiones que maximizan el área.

**Paso 1:** Definir variables. Sea x la longitud del lado perpendicular al muro e y el lado paralelo al muro.

**Paso 2:** Restricción: 2x + y = 100, entonces y = 100 − 2x.

**Paso 3:** Función de área: A(x) = x · y = x(100 − 2x) = 100x − 2x².

**Paso 4:** Derivar e igualar a cero:
A'(x) = 100 − 4x = 0
x = 25 metros

**Paso 5:** Verificar con segunda derivada: A''(x) = −4 < 0, confirma que es máximo.

**Paso 6:** Calcular y: y = 100 − 2(25) = 50 metros.

**Resultado:** Las dimensiones óptimas son 25 m × 50 m, con área máxima de 1.250 m².

### Consideraciones Geométricas

La isoperimetría establece que, entre todas las figuras de igual perímetro, el círculo encierra la mayor área. Este principio fundamental justifica por qué las soluciones óptimas de muchos problemas geométricos involucran figuras circulares o cuadradas. La simetría es una característica recurrente en las soluciones de problemas de optimización geométrica.`,

  "fractales-introduccion": `## Fractales: Introducción

Los fractales son estructuras geométricas que exhiben autosimilitud, es decir, contienen réplicas de sí mismas a diferentes escalas. Fueron formalizados en el siglo XX por matemáticos como Benoît Mandelbrot, aunque patrones fractales aparecieron en obras artísticas y naturales mucho antes.

### Definición y Propiedades Fundamentales

Un fractal es un conjunto geométrico que presenta las siguientes propiedades esenciales:

- **Autosimilitud:** Al ampliar cualquier porción del fractal, se observa una estructura similar al todo. Puede ser autosimilitud exacta (copia idéntica) o estadística (misma distribución de patrones).
- **Dimensión fractal:** A diferencia de las figuras euclidianas, los fractales poseen una dimensión que no necesariamente es un número entero. Se define mediante la dimensión de Hausdorff-Besicovitch:
  D = lim(ε→0) log N(ε) / log(1/ε)
  donde N(ε) es el número de elementos de tamaño ε necesarios para cubrir el conjunto.
- **Frontera de longitud infinita:** Muchos fractales delimitan regiones con perímetro infinito pero área finita.

### Construcción del Triángulo de Sierpinski

El triángulo de Sierpinski se construye mediante el siguiente proceso iterativo:

1. Comenzar con un triángulo equilátero de lado L.
2. Unir los puntos medios de cada lado, formando cuatro triángulos congruentes.
3. Eliminar el triángulo central invertido.
4. Repetir el proceso recursivamente en cada uno de los tres triángulos restantes.

Tras n iteraciones, el número de triángulos pequeños es N = 3ⁿ, y el lado de cada uno mide s = L/2ⁿ. La dimensión fractal resulta:

D = log 3 / log 2 ≈ 1,585

Esto indica que el triángulo de Sierpinski tiene una dimensión intermedia entre una superficie (dimensión 2) y una curva (dimensión 1).

### Conjunto de Mandelbrot

El conjunto de Mandelbrot se define en el plano complejo mediante la iteración de la función f(z) = z² + c, donde z y c son números complejos. Un punto c pertenece al conjunto si, comenzando con z₀ = 0, la sucesión zₙ₊₁ = zₙ² + c permanece acotada. En la práctica, se verifica si |zₙ| > 2 para algún n. Los puntos del conjunto se representan en negro, y los externos se colorean según cuántas iteraciones necesitan para escapar.

### Ejemplo Resuelto

Calcular la dimensión fractal del conjunto de Cantor, construido eliminando el tercio central de un segmento repetidamente.

**Paso 1:** En cada paso, un segmento se divide en 3 partes iguales y se eliminan las porciones laterales dejando 2 de las 3. Por lo tanto, N = 2.

**Paso 2:** Cada segmento resultante mide 1/3 del anterior, por lo tanto ε se reduce por un factor de 3.

**Paso 3:** Aplicar la fórmula de dimensión fractal:
D = log N / log(1/ε) = log 2 / log 3 ≈ 0,631

**Resultado:** La dimensión del conjunto de Cantor es aproximadamente 0,631, lo cual refleja que es más que un punto (dimensión 0) pero menos que una recta continua (dimensión 1).

### Fractales en la Naturaleza

Los fractales modelan numerosos fenómenos naturales: la estructura de los pulmones, el patrón de ramificación de los árboles, las formaciones de las nubes, la geometría de las costas y los sistemas circulatorios. La autosimilitud estadística explica por qué estos patrones se repiten a diversas escalas.

### Generación por Sistemas de Funciones Iteradas

Los fractales se generan mediante sistemas de funciones iteradas (IFS, por sus siglas en inglés). Un IFS consta de un conjunto de transformaciones contractantes f₁, f₂, ..., fₙ tales que el fractal es el único conjunto invariante bajo la unión de estas funciones: F = ∪fᵢ(F). El teorema de Hutchinson garantiza la existencia y unicidad de este conjunto atractor.`
};
