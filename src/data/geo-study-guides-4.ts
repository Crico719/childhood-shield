export const geoStudyGuides4: Record<string, string> = {
  "angulos-inscritos-centrales": `## Angulos Inscritos y Centrales

### Definicion

Un angulo central es aquel cuyo vertice se encuentra en el centro de la circunferencia. Un angulo inscrito tiene su vertice sobre la circunferencia y sus lados son cuerdas de la misma. Ambos tipos de angulos se relacionan con los arcos que interceptan, lo que permite resolver problemas de medicion y relacion entre figuras circulares.

### Propiedades Fundamentales

La medida de un angulo central es igual a la medida del arco que intercepta. Si un angulo central mide 80 grados, el arco que intercepta tambien mide 80 grados. En cambio, un angulo inscrito mide la mitad del arco que intercepta. Esto significa que el angulo central es siempre el doble del angulo inscrito que subtiende el mismo arco.

Cuando dos angulos inscritos subtienden el mismo arco, son iguales. Este principio se aplica frecuentemente en circulos con multiples puntos sobre la circunferencia, donde varios angulos pueden compartir un mismo arco.

### Formulas

Angulo central = Arco interceptado

Angulo inscrito = 1/2 × Arco interceptado

Angulo central = 2 × Angulo inscrito (mismo arco)

Angulos inscritos en el mismo arco = Angulo inscrito 1 = Angulo inscrito 2

### Ejemplo 1

En una circunferencia, un angulo central mide 140 grados. Calcular el arco interceptado y el angulo inscrito que subtiende el mismo arco.

Solucion: El arco interceptado es igual al angulo central, por lo tanto el arco mide 140 grados. El angulo inscrito que subtiende el mismo arco es la mitad del arco, entonces el angulo inscrito = 140 / 2 = 70 grados.

### Ejemplo 2

Dos angulos inscritos, ABC y ADC, subtienden el mismo arco AC en una circunferencia. Si el angulo ABC mide 35 grados, hallar el angulo ADC y el arco AC.

Solucion: Como ambos angulos inscritos subtienden el mismo arco, el angulo ADC tambien mide 35 grados. El arco AC es el doble del angulo inscrito, por lo tanto arco AC = 2 × 35 = 70 grados.

### Ejemplo 3

Un angulo inscrito mide 52 grados y un angulo central subtiende el mismo arco. Calcular la medida del angulo central.

Solucion: El angulo central es el doble del angulo inscrito. Angulo central = 2 × 52 = 104 grados. El arco interceptado tambien mide 104 grados.

### Ejemplo 4

En un semicirculo, un triangulo se inscribe con un lado como diametro. Calcular el angulo inscrito que se forma en la semicircunferencia.

Solucion: El diametro divide la circunferencia en dos arcos de 180 grados cada uno. El angulo inscrito que subtiende el arco semicircular es 180 / 2 = 90 grados. Todo angulo inscrito en un semicirculo es recto.

### Aplicaciones

Los angulos inscritos y centrales son fundamentales en geometria circular, navegacion, astronomia y diseno arquitectonico. Se utilizan para calcular posiciones en circulos, resolver problemas de trayectorias circulares y construir figuras geometricas dentro de circunferencias.`,

  "transformaciones-isometricas": `## Transformaciones Isometricas

### Definicion

Las transformaciones isometricas son movimientos geometricos que conservan las distancias, angulos y formas de las figuras. El termino isometrico significa igual medida, ya que las dimensiones no cambian despues de la transformacion. Las figuras resultantes son congruentes con las originales, lo que las distingue de transformaciones como las homotecias o dilataciones.

### Tipos de Transformaciones Isometricas

Las principales transformaciones isometricas son la traslacion, la rotacion y la reflexion. En la traslacion, todos los puntos de una figura se desplazan la misma distancia en la misma direccion. En la rotacion, la figura gira alrededor de un punto fijo llamado centro de rotacion. En la reflexion, la figura se invierte respecto a una linea llamada eje de reflexion.

### Propiedades

Las transformaciones isometricas conservan la longitud de segmentos, la amplitud de angulos, el area de poligonos y el perímetro. Tambien mantienen la orientacion relativa de los puntos en las traslaciones y rotaciones, mientras que la reflexion invierte la orientacion.

### Formulas

Traslacion: Punto (x, y) desplazado (a, b) se convierte en (x + a, y + b)

Rotacion 90 grados antihoraria: (x, y) se convierte en (-y, x)

Rotacion 180 grados: (x, y) se convierte en (-x, -y)

Rotacion 270 grados antihoraria: (x, y) se convierte en (y, -x)

Reflexion en el eje Y: (x, y) se convierte en (-x, y)

Reflexion en el eje X: (x, y) se convierte en (x, -y)

### Ejemplo 1

Trasladar el triangulo con vertices A(1, 2), B(3, 4) y C(5, 1) cinco unidades a la derecha y tres unidades hacia arriba.

Solucion: Se suman 5 a las coordenadas x y 3 a las coordenadas y. A'(6, 5), B'(8, 7), C'(10, 4). Los lados del triangulo original y el trasladado tienen la misma longitud.

### Ejemplo 2

Rotar el punto P(2, 3) 90 grados en sentido antihoraria respecto al origen.

Solucion: Aplicando la formula (-y, x), el punto P(2, 3) se convierte en P'(-3, 2). La distancia al origen se conserva: ambas miden raiz de 13 unidades.

### Ejemplo 3

Reflejar el punto Q(-4, 6) respecto al eje Y.

Solucion: Aplicando la formula (-x, y), el punto Q(-4, 6) se convierte en Q'(4, 6). El punto reflejado esta a la misma distancia del eje Y pero en el lado opuesto.

### Ejemplo 4

Reflejar el segmento con extremos R(1, 5) y S(4, 3) respecto al eje X.

Solucion: Los puntos reflejados son R'(1, -5) y S'(4, -3). La longitud del segmento original es raiz de 13 y la del segmento reflejado tambien es raiz de 13, confirmando que la transformacion es isometrica.

### Aplicaciones

Las transformaciones isometricas se aplican en diseno grafico, animacion por computadora, arquitectura, ingenieria mecanica y robotica. Permiten generar simetrias, patrones repetitivos y analizar movimientos de objetos en el espacio sin alterar sus dimensiones.`,

  "simetria-ejes-y-puntos": `## Simetria de Ejes y Puntos

### Definicion

La simetria es una propiedad geometrica que indica que una figura puede dividirse en partes iguales que son imagen una de otra mediante una transformacion. La simetria de ejes, tambien llamada simetria axial o reflexiva, ocurre cuando existe una linea tales que cada punto de la figura tiene un punto correspondiente equidistante de esa linea en el lado opuesto. La simetria de puntos, o simetria central, ocurre cuando cada punto de la figura tiene un punto correspondiente opuesto respecto a un punto fijo llamado centro de simetria.

### Simetria de Ejes

Una figura tiene simetria de ejes si existe un eje de simetria que la divide en dos mitades que son reflexiones la una de la otra. Un cuadrilatero regular como el cuadrado tiene cuatro ejes de simetria: dos diagonales y dos que unen los puntos medios de lados opuestos. Un rectangulo tiene dos ejes de simetria que unen los puntos medios de lados opuestos. Un circulo tiene infinitos ejes de simetria, ya que cualquier diametro funciona como eje.

### Simetria de Puntos

Una figura tiene simetria central si existe un punto tal que al reflexionar cada punto de la figura respecto a ese centro, se obtiene la misma figura. Un cuadrado tiene simetria central en el punto de interseccion de sus diagonales. Un rectangulo tambien tiene simetria central. Un circulo tiene simetria central en su centro. Un triangulo equilatero no tiene simetria central, pero si tiene simetria de ejes.

### Formulas

Simetria de eje: Si el eje es x = a, un punto (x, y) se refleja en (2a - x, y)

Simetria de eje: Si el eje es y = b, un punto (x, y) se refleja en (x, 2b - y)

Simetria central: Si el centro es (h, k), un punto (x, y) se refleja en (2h - x, 2k - y)

### Ejemplo 1

Hallar la imagen del punto A(3, 7) con respecto al eje de simetria x = 5.

Solucion: Aplicando la formula (2a - x, y), la imagen es A'(2(5) - 3, 7) = A'(7, 7). El eje x = 5 es el punto medio entre 3 y 7.

### Ejemplo 2

Hallar la imagen del punto B(-2, 4) con respecto al eje y = 1.

Solucion: Aplicando la formula (x, 2b - y), la imagen es B'(-2, 2(1) - 4) = B'(-2, -2). El eje y = 1 es el punto medio entre 4 y -2.

### Ejemplo 3

Encontrar la imagen del punto C(6, -3) con respecto al centro de simetria O(2, 1).

Solucion: Aplicando la formula (2h - x, 2k - y), la imagen es C'(2(2) - 6, 2(1) - (-3)) = C'(-2, 5). El punto O(2, 1) es el punto medio entre C y C'.

### Ejemplo 4

Determinar si un circulo con centro en (3, -2) y radio 4 tiene simetria de ejes y de puntos.

Solucion: El circulo tiene infinitos ejes de simetria, siendo cada diametro un eje posible. Tambien tiene simetria central en su centro (3, -2), ya que todo punto del circulo tiene su punto opuesto tambien en la circunferencia.

### Aplicaciones

La simetria se estudia en arte, arquitectura, biologia, cristalografia y diseno industrial. Permite crear patrones equilibrados, analizar estructuras moleculares y disenar figuras esteticamente armoniosas.`,

  "homotecia": `## Homotecia

### Definicion

La homotecia es una transformacion geometrica que produce una figura semejante a la original, ampliada o reducida, respecto a un punto fijo llamado centro de homotecia. Todos los puntos de la figura original se desplazan a lo largo de lineas que pasan por el centro de homotecia, y la relacion de semejanza esta determinada por un factor llamado ratio o coeficiente de homotecia.

### Propiedades Fundamentales

Cuando el coeficiente es mayor que uno, la figura resultante es mayor que la original. Cuando el coeficiente esta entre cero y uno, la figura resultante es menor. Cuando el coeficiente es negativo, la imagen se encuentra en el lado opuesto del centro de homotecia respecto al objeto original. Las figuras original e imagen son siempre semejantes, lo que significa que conservan los angulos pero no las longitudes de los lados.

### Formulas

Homotecia: Un punto (x, y) con centro de homotecia en (h, k) y coeficiente k se transforma en:

x' = h + k(x - h)

y' = k + k(y - k)

Donde (x', y') son las coordenadas del punto imagen.

### Ejemplo 1

Aplicar una homotecia con centro en el origen (0, 0) y coeficiente 2 al triangulo con vertices A(1, 3), B(4, 1) y C(2, 5).

Solucion: Para cada punto se multiplica las coordenadas por 2. A'(2, 6), B'(8, 2), C'(4, 10). Los lados del triangulo imagen son el doble de los lados del triangulo original.

### Ejemplo 2

Aplicar una homotecia con centro en O(1, 2) y coeficiente 3 al punto P(4, 5).

Solucion: x' = 1 + 3(4 - 1) = 1 + 9 = 10. y' = 2 + 3(5 - 2) = 2 + 9 = 11. La imagen es P'(10, 11). El punto P' se encuentra en la linea que pasa por O y P.

### Ejemplo 3

Aplicar una homotecia con centro en el origen y coeficiente -2 al punto Q(3, -4).

Solucion: x' = -2(3) = -6. y' = -2(-4) = 8. La imagen es Q'(-6, 8). El coeficiente negativo indica que Q' esta en el lado opuesto del origen respecto a Q.

### Ejemplo 4

Reducir el rectangulo con vertices R(0, 0), S(6, 0), T(6, 4) y U(0, 4) mediante una homotecia con centro en el origen y coeficiente 1/2.

Solucion: Cada coordenada se multiplica por 1/2. R'(0, 0), S'(3, 0), T'(3, 2), U'(0, 2). El rectangulo imagen tiene la mitad de las dimensiones del original.

### Semejanza y Homotecia

La homotecia es una de las transformaciones que generan semejanza entre figuras. Dos figuras semejantes tienen angulos iguales y lados proporcionales. El factor de proporcionalidad entre los lados correspondientes es igual al valor absoluto del coeficiente de homotecia. Esto permite resolver problemas de escalas, planos arquitectonicos y mapas.

### Aplicaciones

La homotecia se utiliza en arquitectura para crear planos a escala, en cartografia para elaborar mapas, en arte para crear efectos de profundidad y perspectiva, y en ingenieria para disear piezas mecanicas con diferentes tamanos manteniendo la proporcion de sus partes.`,

  "coordenadas-cartesianas": `## Coordenadas Cartesianas

### Definicion

El sistema de coordenadas cartesianas es un metodo para determinar la posicion de un punto en el plano mediante dos numeros ordenados que representan sus distancias a dos lineas perpendiculares llamadas ejes. Fue creado por René Descartes y constituye la base de la geometria analitica, que permite representar figuras geometricas mediante ecuaciones algebraicas.

### Estructura del Sistema

El plano cartesiano esta formado por dos ejes perpendiculares: el eje X, que es horizontal, y el eje Y, que es vertical. El punto donde se cruzan los ejes se llama origen y tiene coordenadas (0, 0). Cada punto del plano se identifica con un par ordenado (x, y), donde x indica la distancia horizontal al origen y y indica la distancia vertical.

### Cuadrantes

El plano se divide en cuatro cuadrantes. En el primer cuadrante, ambas coordenadas son positivas. En el segundo cuadrante, x es negativa e y es positiva. En el tercer cuadrante, ambas coordenadas son negativas. En el cuarto cuadrante, x es positiva e y es negativa.

### Formulas

Distancia entre dos puntos P(x1, y1) y Q(x2, y2):

d = raiz de [(x2 - x1)² + (y2 - y1)²]

Punto medio del segmento PQ:

M = ((x1 + x2)/2, (y1 + y2)/2)

Distancia de un punto al eje X: |y|

Distancia de un punto al eje Y: |x|

### Ejemplo 1

Hallar la distancia entre los puntos A(2, 3) y B(7, 7).

Solucion: d = raiz de [(7 - 2)² + (7 - 3)²] = raiz de [25 + 16] = raiz de 41 ≈ 6.40 unidades.

### Ejemplo 2

Encontrar las coordenadas del punto medio del segmento que une los puntos C(-1, 5) y D(3, -1).

Solucion: M = ((-1 + 3)/2, (5 + (-1))/2) = (2/2, 4/2) = (1, 2). El punto medio es (1, 2).

### Ejemplo 3

Determinar en que cuadrante se encuentra el punto E(-4, -6) y calcular su distancia a cada eje.

Solucion: Como ambas coordenadas son negativas, el punto esta en el tercer cuadrante. La distancia al eje X es |-6| = 6 unidades. La distancia al eje Y es |-4| = 4 unidades.

### Ejemplo 4

Calcular la distancia del punto F(5, -3) al origen.

Solucion: La distancia al origen se calcula como d = raiz de [5² + (-3)²] = raiz de [25 + 9] = raiz de 34 ≈ 5.83 unidades.

### Ejemplo 5

Un punto se encuentra a 4 unidades a la derecha del eje Y y 7 unidades por encima del eje X. Determinar sus coordenadas.

Solucion: La posicion horizontal es x = 4 (positiva porque esta a la derecha) y la posicion vertical es y = 7 (positiva porque esta arriba). El punto es (4, 7).

### Aplicaciones

Las coordenadas cartesianas son esenciales en graficas de funcion, fisica, economia, programacion de videojigos, navegacion GPS y cualquier campo que requiera representar datos o posiciones espaciales de forma precisa y cuantificable.`,

  "area-coordenadas": `## Area en Coordenadas

### Definicion

El calculo del area de poligonos en el plano cartesiano utiliza las coordenadas de sus vertices mediante formulas algebraicas que permiten determinar la superficie sin necesidad de conocer todas las medidas de sus lados y alturas. Estas formulas son especialmente utiles para triangulos, cuadrilateros y poligonos irregulares cuyos vertices estan ubicados en un sistema de coordenadas.

### Formula del Triangulo

Para un triangulo con vertices A(x1, y1), B(x2, y2) y C(x3, y3), el area se calcula aplicando el metodo del determinante:

Area = 1/2 |x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2)|

Esta formula funciona para cualquier triangulo, sea regular o irregular, y siempre devuelve un valor positivo debido al valor absoluto.

### Formula de la Shoelace (Zapato)

Para poligonos con multiples vertices, se utiliza la formula de la shoelace:

Area = 1/2 |x1y2 + x2y3 + x3y4 + ... + xn y1 - y1x2 - y2x3 - y3x4 - ... - yn x1|

Esta formula funciona para cualquier poligono simple, sin importar el numero de vertices, siempre que los vertices se enumeren en orden consecutivo, ya sea en sentido horario o antihorario.

### Ejemplo 1

Calcular el area del triangulo con vertices A(1, 2), B(4, 6) y C(7, 3).

Solucion: Area = 1/2 |1(6 - 3) + 4(3 - 2) + 7(2 - 6)| = 1/2 |1(3) + 4(1) + 7(-4)| = 1/2 |3 + 4 - 28| = 1/2 |-21| = 10.5 unidades cuadradas.

### Ejemplo 2

Hallar el area del triangulo con vertices D(0, 0), E(5, 0) y F(0, 8).

Solucion: Area = 1/2 |0(0 - 8) + 5(8 - 0) + 0(0 - 0)| = 1/2 |0 + 40 + 0| = 1/2 (40) = 20 unidades cuadradas. Este triangulo es rectangulo con base 5 y altura 8.

### Ejemplo 3

Calcular el area del cuadrilatero con vertices P(1, 1), Q(4, 1), R(4, 5) y S(1, 5) usando la formula de la shoelace.

Solucion: Area = 1/2 |(1)(1) + (4)(5) + (4)(5) + (1)(1) - (1)(4) - (1)(4) - (5)(1) - (5)(1)| = 1/2 |1 + 20 + 20 + 1 - 4 - 4 - 5 - 5| = 1/2 |24| = 12 unidades cuadradas. Es un rectangulo de base 3 y altura 4.

### Ejemplo 4

Determinar el area del triangulo con vertices G(-2, -3), H(4, -1) y J(1, 5).

Solucion: Area = 1/2 |(-2)(-1 - 5) + 4(5 - (-3)) + 1(-3 - (-1))| = 1/2 |(-2)(-6) + 4(8) + 1(-2)| = 1/2 |12 + 32 - 2| = 1/2 (42) = 21 unidades cuadradas.

### Consideraciones Importantes

Si los vertices de un poligono se enumeran en orden incorrecto, los resultados pueden ser negativos o incorrectos. Siempre se debe verificar el orden de los vertices y aplicar el valor absoluto. Ademas, si tres vertices son colineales, el area del triangulo sera cero.

### Aplicaciones

El calculo de area en coordenadas se utiliza en topografia, cartografia, diseno asistido por computadora, analisis geografico de informacion, planificacion urbana y determinacion de superficies de terrenos irregulares.`,

  "recta-en-coordenadas": `## Recta en Coordenadas

### Definicion

Una recta en el plano cartesiano es el conjunto de puntos que satisfacen una ecuacion lineal de la forma Ax + By + C = 0, o de forma equivalente y = mx + b. Estudiar rectas en coordenadas permite analizar pendientes, intersecciones, paralelismo y perpendicularidad usando algebra en lugar de solo herramientas geometricas.

### Formas de la Ecuacion de la Recta

La forma pendiente-intercepto es y = mx + b, donde m es la pendiente y b es la ordenada al origen. La forma punto-pendiente es y - y1 = m(x - x1), donde (x1, y1) es un punto por el que pasa la recta y m es la pendiente. La forma general es Ax + By + C = 0, donde A, B y C son constantes reales.

### Pendiente

La pendiente m de una recta que pasa por los puntos (x1, y1) y (x2, y2) se calcula como:

m = (y2 - y1) / (x2 - x1)

Una pendiente positiva indica que la recta sube de izquierda a derecha. Una pendiente negativa indica que la recta baja. Una pendiente cero indica una recta horizontal. Una pendiente indefinida indica una recta vertical.

### Formulas

Pendiente: m = (y2 - y1) / (x2 - x1)

Forma pendiente-intercepto: y = mx + b

Forma punto-pendiente: y - y1 = m(x - x1)

Rectas paralelas: m1 = m2

Rectas perpendiculares: m1 × m2 = -1

Distancia de un punto a una recta Ax + By + C = 0:

d = |Ax0 + By0 + C| / raiz de (A² + B²)

### Ejemplo 1

Encontrar la ecuacion de la recta que pasa por los puntos A(1, 3) y B(5, 7).

Solucion: Primero se calcula la pendiente: m = (7 - 3)/(5 - 1) = 4/4 = 1. Usando la forma punto-pendente con el punto A: y - 3 = 1(x - 1). Simplificando: y = x + 2.

### Ejemplo 2

Determinar si las rectas y = 3x + 5 e y = 3x - 2 son paralelas, perpendiculares o ninguno.

Solucion: Ambas rectas tienen pendiente m = 3. Como las pendientes son iguales, las rectas son paralelas.

### Ejemplo 3

Hallar la ecuacion de la recta perpendicular a y = 2x + 1 que pasa por el punto (4, -1).

Solucion: La pendiente de la recta dada es 2. La pendiente perpendicular es m2 = -1/2. Usando la forma punto-pendente: y - (-1) = -1/2(x - 4). Simplificando: y = -1/2x + 1.

### Ejemplo 4

Calcular la distancia del punto P(3, -2) a la recta 2x + 3y - 6 = 0.

Solucion: d = |2(3) + 3(-2) - 6| / raiz de (2² + 3²) = |6 - 6 - 6| / raiz de 13 = 6 / raiz de 13 ≈ 1.66 unidades.

### Ejemplo 5

Encontrar el punto de interseccion de las rectas y = 2x + 3 e y = -x + 6.

Solucion: Se igualan las ecuaciones: 2x + 3 = -x + 6. Resolviendo: 3x = 3, entonces x = 1. Sustituyendo en la primera ecuacion: y = 2(1) + 3 = 5. El punto de interseccion es (1, 5).

### Aplicaciones

Las ecuaciones de rectas se aplican en trayectorias de movimiento, analisis de datos estadisticos, graficas de funciones, optimizacion de rutas, ingenieria civil para calculo de pendientes y topografia para levantamientos planimetricos.`,

  "circunferencia-en-coordenadas": `## Circunferencia en Coordenadas

### Definicion

La ecuacion de una circunferencia en el plano cartesiano representa el conjunto de todos los puntos que estan a una distancia constante, llamada radio, de un punto fijo llamado centro. Esta ecuacion permite analizar propiedades de la circunferencia como intersecciones con rectas, tangentes y posiciones relativas entre figuras usando algebra.

### Forma Normal de la Ecuacion

La ecuacion normal de una circunferencia con centro en (h, k) y radio r es:

(x - h)² + (y - k)² = r²

Cuando el centro esta en el origen (0, 0), la ecuacion se simplifica a:

x² + y² = r²

### Forma General de la Ecuacion

La forma general es x² + y² + Dx + Ey + F = 0, donde D, E y F son constantes. Para convertir de la forma general a la forma normal, se completa el cuadrado en las variables x e y.

### Formulas

Ecuacion normal: (x - h)² + (y - k)² = r²

Centro: (h, k)

Radio: r = raiz de (h² + k² - F) en forma general

Punto medio del diametro: ((x1 + x2)/2, (y1 + y2)/2)

Longitud del diametro: d = 2r

Relacion recta y circunferencia: Si la distancia del centro a la recta es menor que r, hay dos puntos de interseccion. Si es igual a r, la recta es tangente. Si es mayor que r, no hay interseccion.

### Ejemplo 1

Escribir la ecuacion de la circunferencia con centro en (3, -2) y radio 5.

Solucion: Sustituyendo en la forma normal: (x - 3)² + (y - (-2))² = 5². Simplificando: (x - 3)² + (y + 2)² = 25.

### Ejemplo 2

Determinar el centro y el radio de la circunferencia x² + y² - 6x + 4y - 12 = 0.

Solucion: Se agrupan los terminos de x y de y: (x² - 6x) + (y² + 4y) = 12. Completando cuadrados: (x - 3)² - 9 + (y + 2)² - 4 = 12. Simplificando: (x - 3)² + (y + 2)² = 25. Centro: (3, -2), Radio: r = 5.

### Ejemplo 3

Hallar la ecuacion de la circunferencia cuyo diametro tiene extremos en A(1, 5) y B(7, 3).

Solucion: El centro es el punto medio: ((1 + 7)/2, (5 + 3)/2) = (4, 4). La longitud del diametro es raiz de [(7-1)² + (3-5)²] = raiz de [36 + 4] = raiz de 40. El radio es raiz de 40 / 2 = raiz de 10. Ecuacion: (x - 4)² + (y - 4)² = 10.

### Ejemplo 4

Determinar si la recta y = x + 1 es tangente a la circunferencia x² + y² = 5.

Solucion: Se sustituye y en la ecuacion de la circunferencia: x² + (x + 1)² = 5. Desarrollando: x² + x² + 2x + 1 = 5, entonces 2x² + 2x - 4 = 0. Simplificando: x² + x - 2 = 0. El discriminante es 1² - 4(1)(-2) = 9, que es positivo. La recta corta la circunferencia en dos puntos, por lo tanto no es tangente.

### Ejemplo 5

Encontrar los puntos de interseccion de la circunferencia (x - 1)² + (y - 2)² = 25 con el eje X.

Solucion: En el eje X, y = 0. Sustituyendo: (x - 1)² + (0 - 2)² = 25. Desarrollando: (x - 1)² + 4 = 25, entonces (x - 1)² = 21. Resolviendo: x = 1 ± raiz de 21. Los puntos son (1 + raiz de 21, 0) y (1 - raiz de 21, 0).

### Aplicaciones

La ecuacion de la circunferencia se utiliza en GPS y sistemas de posicionamiento, orbitas planetarias, diseno de engranajes, analisis de senales, robotica para calculo de areas de alcance y topografia para determinar limites de terrenos.`,
};
