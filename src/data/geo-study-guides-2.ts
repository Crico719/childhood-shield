export const geoStudyGuides2: Record<string, string> = {
  "poligonos-regulares": `## Polígonos Regulares
### Definición y propiedades
Un polígono regular es un polígono cuyos lados son todos de igual longitud y cuyos ángulos interiores son todos congruentes. Los polígonos regulares poseen simetría rotacional de orden n, donde n es el número de lados, y también simetría axial con n ejes de simetría. Entre los más estudiados se encuentran el triángulo equilátero, el cuadrado, el pentágono regular y el hexágono regular. La suma de los ángulos interiores de cualquier polígono de n lados se calcula con la fórmula:

**S = (n - 2) × 180°**

Por lo tanto, cada ángulo interior de un polígono regular de n lados mide:

**α = [(n - 2) × 180°] / n**

### Ejemplo resuelto: Hexágono regular
Consideremos un hexágono regular de lado 6 cm. Primero calculamos la suma de los ángulos interiores:

S = (6 - 2) × 180° = 4 × 180° = 720°

Cada ángulo interior mide:

α = 720° / 6 = 120°

La suma de los ángulos exteriores de cualquier polígono siempre es 360°, por lo que cada ángulo exterior del hexágono mide 60°.

### Apotema y área
El apotema de un polígono regular es la distancia desde el centro hasta el punto medio de cualquier lado. Para un polígono regular de n lados y lado a, el apotema se calcula como:

**h = a / [2 × tan(180°/n)]**

La fórmula del área de un polígono regular es:

**A = (P × h) / 2**

donde P es el perímetro (P = n × a) y h es el apotema.

### Ejemplo resuelto: Área del hexágono regular
Para el hexágono regular de lado 6 cm, primero calculamos el apotema:

h = 6 / [2 × tan(180°/6)] = 6 / [2 × tan(30°)] = 6 / [2 × 0.5774] = 6 / 1.1548 ≈ 5.196 cm

El perímetro es P = 6 × 6 = 36 cm. Entonces el área es:

A = (36 × 5.196) / 2 = 187.056 / 2 ≈ 93.53 cm²

Alternativamente, podemos usar la fórmula directa para el área de un hexágono regular:

**A = (3√3 / 2) × a²**

A = (3 × 1.7321 / 2) × 36 = (5.1963 / 2) × 36 = 2.5981 × 36 ≈ 93.53 cm²

### Polígonos regulares conjugados y estrellados
Un polígono regular estrellado se obtiene uniendo cada vértice con otros vértices saltándose un número fijo de puntos intermedios. Lanotación de Schläfli {n/k} describe un polígono regular con n vértices conectados cada k posiciones. Cuando k = 1 se obtiene el polígono convexo ordinario. Para un pentágono regular estrellado {5/2}, el pentagrama, cada ángulo interior en los vértices del triángulo resultante mide 36°. El área de un pentagrama se puede calcular dividiéndolo en un pentágono central más cinco triángulos isósceles. Estos polígonos estrellados aparecen frecuentemente en diseños arquitectónicos y en la naturaleza, particularmente en la estructura de algunas flores y cristales. La comprensión de sus propiedades geométricas resulta fundamental para el diseño de rosetas, vitrales y patrones decorativos de distintas tradiciones culturales.`,
  "areas": `## Áreas de Figuras Planas
### Conceptos fundamentales
El área de una figura plana es la medida de la extensión de su superficie bidimensional, expresada en unidades cuadradas. Para calcular áreas se emplean fórmulas específicas según la forma geométrica. Las unidades estándar incluyen centímetros cuadrados (cm²), metros cuadrados (m²) y kilómetros cuadrados (km²). La conversión entre unidades se realiza aplicando factores de escala al cuadrado: 1 m² = 10 000 cm² y 1 km² = 1 000 000 m².

### Triángulo
El área de un triángulo se calcula con la fórmula:

**A = (b × h) / 2**

donde b es la base y h es la altura perpendicular a esa base. También se puede usar la fórmula de Herón cuando se conocen los tres lados a, b y c:

**A = √[s(s-a)(s-b)(s-c)]** donde s = (a + b + c) / 2

### Ejemplo resuelto: Triángulo con Herón
Un triángulo tiene lados de 5 cm, 7 cm y 8 cm. Calculamos el semiperímetro:

s = (5 + 7 + 8) / 2 = 20 / 2 = 10 cm

Aplicamos la fórmula:

A = √[10 × (10-5) × (10-7) × (10-8)] = √[10 × 5 × 3 × 2] = √300 = 10√3 ≈ 17.32 cm²

### Paralelogramo, rombo y trapecio
El área de un paralelogramo es:

**A = b × h** (base por altura perpendicular)

El rombo, siendo un paralelogramo especial, también puede calcularse como:

**A = (d₁ × d₂) / 2**

donde d₁ y d₂ son las diagonales. El área del trapecio es:

**A = [(b₁ + b₂) × h] / 2**

donde b₁ y b₂ son las bases paralelas y h es la altura.

### Ejemplo resuelto: Trapecio
Un trapecio tiene bases de 10 cm y 6 cm, y una altura de 4 cm:

A = [(10 + 6) × 4] / 2 = (16 × 4) / 2 = 64 / 2 = 32 cm²

### Cuadriláteros y polígonos
El área del rectángulo es **A = base × altura**. El cuadrado es un caso especial: **A = lado²**. Para polígonos irregulares se puede dividir la figura en triángulos y sumar sus áreas individuales. Este método de triangulación es especialmente útil en topografía y diseño asistido por computadora. También se puede aplicar la fórmula del polígono cuando se conocen las coordenadas de sus vértices:

**A = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|** para un triángulo, extendible a más vértices mediante la fórmula de la superficie del tessaract.

### Círculo y sectores
El área del círculo es **A = πr²**, donde r es el radio. Un sector circular de ángulo θ (en grados) tiene área:

**A_sector = (θ/360°) × πr²**

Un segmento circular se obtiene restando el área del triángulo formado por los radios y la cuerda del área del sector correspondiente. La fórmula del área del segmento es:

**A_segmento = (r²/2)(θ - sen θ)** donde θ está en radianes.

### Ejemplo resuelto: Sector circular
Un sector tiene un radio de 10 cm y un ángulo central de 72°:

A_sector = (72/360) × π × 10² = (1/5) × 100π = 20π ≈ 62.83 cm²

La precisión en el cálculo de áreas es fundamental en ingeniería civil, arquitectura y disciplinas del diseño.`,
  "rectas-y-planos": `## Rectas y Planos en el Espacio
### Rectas en el espacio tridimensional
Una recta en el espacio se puede representar mediante su ecuación paramétrica, simétrica o vectorial. La forma paramétrica más común usa un punto P₀(x₀, y₀, z₀) y un vector director **v** = (a, b, c):

**x = x₀ + at, y = y₀ + bt, z = z₀ + ct**

donde t es un parámetro real. La ecuación simétrica se obtiene despejando t de cada componente:

**(x - x₀)/a = (y - y₀)/b = (z - z₀)/c**

### Ejemplo resuelto: Ecuación de una recta
La recta que pasa por el punto (1, 2, 3) con vector director (2, -1, 4) tiene ecuaciones paramétricas:

x = 1 + 2t, y = 2 - t, z = 3 + 4t

Su ecuación simétrica es:

(x - 1)/2 = (y - 2)/(-1) = (z - 3)/4

### Planos en el espacio
Un plano se define por su ecuación general:

**Ax + By + Cz + D = 0**

El vector normal al plano es **n** = (A, B, C). Una forma alternativa es la ecuación de punto-normal, usando un punto P₀ en el plano:

**A(x - x₀) + B(y - y₀) + C(z - z₀) = 0**

### Ejemplo resuelto: Ecuación del plano
Hallar la ecuación del plano que contiene el punto (1, 0, -2) y tiene normal (3, -2, 1):

3(x - 1) - 2(y - 0) + 1(z + 2) = 0
3x - 3 - 2y + z + 2 = 0
3x - 2y + z - 1 = 0

### Posiciones relativas
La distancia entre un punto P₁(x₁, y₁, z₁) y un plano Ax + By + Cz + D = 0 es:

**d = |Ax₁ + By₁ + Cz₁ + D| / √(A² + B² + C²)**

La distancia entre dos rectas paralelas con vectores directores proporcionales se calcula proyectando un vector que conecte un punto de cada recta sobre la normal compartida. Dos planos son paralelos si sus normales son proporcionales: (A₁/B₁) = (A₂/B₂) = (A₃/C₃). Se intersectan formando un ángulo θ dado por:

**cos θ = |n₁ · n₂| / (|n₁| × |n₂|)**

### Ejemplo resuelto: Distancia punto-plano
Calcular la distancia del punto (2, 3, -1) al plano 3x - 2y + z - 1 = 0:

d = |3(2) - 2(3) + 1(-1) - 1| / √(9 + 4 + 1) = |6 - 6 - 1 - 1| / √14 = |-2| / √14 = 2/√14 ≈ 0.5345

La intersección de rectas y planos es clave en cálculo vectorial, óptica geométrica y modelado computacional tridimensional.`,
  "prisma-y-cilindro": `## Prisma y Cilindro
### Prisma: definición y tipos
Un prisma es un sólido geométrico delimitado por dos bases poligonales congruentes y paralelas, unidas por caras laterales que son paralelogramos. Los prismas se clasifican según la forma de su base (triangular, rectangular, hexagonal, etc.) y según la orientación de las aristas laterales respecto a las bases. Un prisma es recto cuando las aristas laterales son perpendiculares a las bases, y oblicuo en caso contrario. El volumen de cualquier prisma es:

**V = Ab × h**

donde Ab es el área de la base y h es la altura perpendicular entre las bases.

### Ejemplo resuelto: Prisma triangular
Un prisma triangular recto tiene como base un triángulo de base 6 cm y altura 4 cm, con una altura de prisma de 10 cm. El área de la base es:

Ab = (6 × 4) / 2 = 12 cm²

El volumen es:

V = 12 × 10 = 120 cm³

La superficie lateral se obtiene sumando las áreas de las caras laterales. Si el perímetro de la base es P, la superficie lateral de un prisma recto es:

**SL = P × h**

La superficie total es:

**ST = SL + 2 × Ab**

### Cilindro: definición y propiedades
Un cilindro es un sólido delimitado por dos bases circulares congruentes y paralelas, unidas por una superficie lateral continua. Es el caso límite de un prisma cuando el número de lados de la base tiende a infinito. El cilindro recto tiene ejes perpendiculares a las bases. Su volumen es:

**V = πr²h**

donde r es el radio de la base circular y h es la altura.

### Superficie del cilindro
La superficie lateral del cilindro recto se puede desenrollar y forma un rectángulo de base 2πr (circunferencia) y altura h:

**SL = 2πrh**

La superficie total incluye las dos bases:

**ST = 2πrh + 2πr² = 2πr(h + r)**

### Ejemplo resuelto: Cilindro completo
Un cilindro tiene radio 5 cm y altura 12 cm. Calculamos:

Volumen: V = π × 5² × 12 = 300π ≈ 942.48 cm³

Superficie lateral: SL = 2π × 5 × 12 = 120π ≈ 376.99 cm²

Superficie total: ST = 120π + 2π × 25 = 120π + 50π = 170π ≈ 534.07 cm²

### Aplicaciones prácticas
Los prismas y cilindros aparecen frecuentemente en la ingeniería y la arquitectura. Las vigas de construcción suelen tener forma de prisma rectangular, y los tanques de almacenamiento son cilindros. El cálculo del volumen es esencial para determinar la capacidad de recipientes, mientras que la superficie se necesita para calcular materiales de revestimiento. En el caso de un cilindro oblicuo, el volumen sigue siendo V = Ab × h, donde h es la distancia perpendicular entre planos de las bases, no la longitud de las aristas laterales.`,
  "piramide-y-cono": `## Pirámide y Cono
### Pirámide: definición
Una pirámide es un sólido geométrico formado por una base poligonal y caras laterales triangulares que convergen en un vértice común llamado ápice. Se clasifica según su base (triangular, cuadrada, pentagonal, etc.) y puede ser recta cuando el ápice está perpendicularmente sobre el centro de la base, u oblicua en caso contrario. La altura de la pirámide es la distancia perpendicular desde el ápice hasta el plano de la base.

### Volumen de la pirámide
El volumen de cualquier pirámide es un tercio del volumen del prisma correspondiente:

**V = (Ab × h) / 3**

donde Ab es el área de la base y h es la altura perpendicular.

### Ejemplo resuelto: Pirámide cuadrada
Una pirámide cuadrada tiene una base de lado 8 cm y altura 9 cm. El área de la base es Ab = 8² = 64 cm². El volumen es:

V = (64 × 9) / 3 = 576 / 3 = 192 cm³

La superficie lateral se calcula sumando las áreas de las caras triangulares. Para una pirámide recta con base cuadrada, la altura de cada cara lateral es la apotema de la pirámide:

**ap = √(h² + (a/2)²)**

Donde a es el lado de la base. Para nuestro ejemplo:

ap = √(81 + 16) = √97 ≈ 9.85 cm

Superficie lateral: SL = 4 × (8 × 9.85 / 2) = 4 × 39.4 ≈ 157.6 cm²

Superficie total: ST = SL + Ab = 157.6 + 64 = 221.6 cm²

### Cono: definición y propiedades
Un cono es un sólido delimitado por una base circular y una superficie lateral continua que se reduce desde la circunferencia de la base hasta un punto (vértice o ápice). Es el caso límite de una pirámide cuando el número de lados de la base tiende a infinito. El cono recto tiene su vértice sobre el centro de la base. Su volumen es:

**V = (πr²h) / 3**

donde r es el radio de la base y h es la altura.

### Superficie del cono
La superficie lateral del cono se calcula usando la generatriz l (distancia del vértice a un punto de la circunferencia de la base):

**SL = πrl**

donde l = √(r² + h²) es la generatriz. La superficie total es:

**ST = πrl + πr² = πr(l + r)**

### Ejemplo resuelto: Cono completo
Un cono tiene radio 3 cm y altura 4 cm. Calculamos la generatriz:

l = √(3² + 4²) = √(9 + 16) = √25 = 5 cm

Volumen: V = (π × 9 × 4) / 3 = 12π ≈ 37.70 cm³

Superficie lateral: SL = π × 3 × 5 = 15π ≈ 47.12 cm²

Superficie total: ST = 15π + 9π = 24π ≈ 75.40 cm²

### Cono truncado
Un cono truncado (o frustrum) se obtiene al cortar un cono con un plano paralelo a la base. Su volumen es:

**V = (πh/3)(R² + Rr + r²)**

donde R es el radio de la base mayor, r el de la menor y h la altura del tronco. Esta figura aparece en embudos, vasos y diversas piezas mecánicas.`,
  "esfera": `## Esfera
### Definición y propiedades fundamentales
Una esfera es el conjunto de todos los puntos del espacio que están a una distancia igual (radio r) de un punto fijo llamado centro. Es la superficie de revolución generada al rotar una semicircunferencia alrededor de su diámetro. La esfera es la única superficie cerrada que tiene la propiedad de que todos los puntos de su superficie están equidistantes del centro. La ecuación cartesiana de una esfera centrada en el origen es:

**x² + y² + z² = r²**

Si el centro es C(h, k, l):

**(x - h)² + (y - k)² + (z - l)² = r²**

### Volumen de la esfera
El volumen de una esfera se calcula con la fórmula:

**V = (4/3)πr³**

Esta fórmula se puede derivar mediante el método de los discos en cálculo integral, integrando semicírculos rotados alrededor del eje x.

### Ejemplo resuelto: Volumen
Una esfera tiene radio 6 cm. Su volumen es:

V = (4/3) × π × 6³ = (4/3) × π × 216 = 288π ≈ 904.78 cm³

Si el diámetro mide 10 cm, entonces r = 5 cm:

V = (4/3) × π × 125 = (500/3)π ≈ 523.60 cm³

### Superficie de la esfera
La superficie de una esfera es:

**S = 4πr²**

Esta fórmula fue descubierta por Arquímedes, quien demostró que la superficie de una esfera es exactamente igual a la superficie lateral del cilindro circunscrito (radio r, altura 2r), cuya superficie lateral es 2πr × 2r = 4πr².

### Ejemplo resuelto: Superficie
Para una esfera de radio 6 cm:

S = 4 × π × 36 = 144π ≈ 452.39 cm²

### Capa esférica y segmento esférico
Una capa esférica (o casquete esférico) es la porción de una esfera cortada por dos planos paralelos. Su volumen es:

**V = (πh/6)(3r₁² + 3r₂² + h²)**

donde r₁ y r₂ son los radios de las secciones circulares y h es la distancia entre los planos. Un caso particular es el hemisferio (h = r), cuyo volumen es V = (2/3)πr³.

### Ejemplo resuelto: Casquete esférico
Una esfera de radio 10 cm tiene un casquete de altura 4 cm cortado por un plano. Primero hallamos el radio de la sección:

r₁² = r² - (r - h)² = 100 - 36 = 64 → r₁ = 8 cm

V = (π × 4/6)(3 × 64 + 3 × 100 + 16) = (2π/3)(192 + 300 + 16) = (2π/3)(508) ≈ 1064.58 cm³

### Volumen de una esfera con una taladra
Si se perfora un cilindro coaxial de radio a a través de una esfera de radio r, el volumen restante (aro esférico o anillo de Viviani) se puede calcular restando el volumen del cilindro más los dos casquetes del volumen total de la esfera. Estas figuras aparecen en aplicaciones de ingeniería mecánica y diseño de componentes esféricos.`,
  "la-recta": `## La Recta
### Definición y elementos
Una recta es un conjunto de puntos que se extiende indefinidamente en ambas direcciones, siendo la figura geométrica unidimensional más básica. Los elementos fundamentales que definen una recta son sus puntos y la dirección que determina. En geometría analítica, una recta se describe completamente mediante su pendiente y un punto por el que pasa, o mediante dos puntos distintos.

### Recta en el plano cartesiano
La ecuación general de una recta en el plano es:

**Ax + By + C = 0**

donde A, B y C son constantes reales y A y B no son simultáneamente cero. La forma más utilizada es la ecuación explícita:

**y = mx + b**

donde m es la pendiente y b es la intersección con el eje y (ordenada al origen). La pendiente se calcula como:

**m = (y₂ - y₁) / (x₂ - x₁)**

### Ejemplo resuelto: Ecuación de una recta
Hallar la ecuación de la recta que pasa por los puntos (2, 3) y (6, -1):

m = (-1 - 3) / (6 - 2) = -4 / 4 = -1

Usando el punto (2, 3): y - 3 = -1(x - 2) → y = -x + 2 + 3 → y = -x + 5

### Formas de la ecuación
La forma punto-pendiente es: **y - y₁ = m(x - x₁)**
La forma interceptos es: **x/a + y/b = 1** donde a y b son las intersecciones con los ejes.
La forma paramétrica es: **x = x₀ + at, y = y₀ + bt**

### Paralelismo y perpendicularidad
Dos rectas son paralelas si y solo si tienen la misma pendiente: **m₁ = m₂**
Dos rectas son perpendiculares si el producto de sus pendientes es menos uno: **m₁ × m₂ = -1**

### Ejemplo resuelto: Recta perpendicular
Hallar la recta perpendicular a y = 2x + 3 que pasa por (4, 1):

m₁ = 2, entonces m₂ = -1/2

y - 1 = (-1/2)(x - 4) → y = -x/2 + 2 + 1 → y = -x/2 + 3

### Distancia entre puntos y rectas
La distancia entre dos puntos P₁(x₁, y₁) y P₂(x₂, y₂) es:

**d = √[(x₂ - x₁)² + (y₂ - y₁)²]**

La distancia desde un punto (x₀, y₀) a la recta Ax + By + C = 0 es:

**d = |Ax₀ + By₀ + C| / √(A² + B²)**

### Ejemplo resuelto: Distancia a una recta
Calcular la distancia desde (1, 2) a la recta 3x + 4y - 12 = 0:

d = |3(1) + 4(2) - 12| / √(9 + 16) = |3 + 8 - 12| / 5 = |-1| / 5 = 0.2

### Ángulo entre rectas
El ángulo θ entre dos rectas con pendientes m₁ y m₂ se calcula como:

**tan θ = |(m₂ - m₁) / (1 + m₁m₂)|**

cuando las rectas no son perpendiculares. Si m₁m₂ = -1 el ángulo es 90°.

### Ejemplo resuelto: Ángulo entre rectas
Dos rectas tienen pendientes m₁ = 1 y m₂ = √3. Entonces:

tan θ = |(√3 - 1) / (1 + √3)| = |(√3 - 1) / (1 + √3)|

Racionalizando: (√3 - 1)² / (3 - 1) = (4 - 2√3) / 2 = 2 - √3 ≈ 0.2679 → θ = 15°

La comprensión profunda de las propiedades de las rectas es el fundamento de la geometría analítica y del cálculo diferencial.`,
  "circunferencia-y-parabola": `## Circunferencia y Parábola
### Circunferencia: definición y ecuaciones
La circunferencia es el lugar geométrico de los puntos del plano que están a una distancia constante r (radio) de un punto fijo C(h, k) llamado centro. Su ecuación cartesiana es:

**(x - h)² + (y - k)² = r²**

Cuando el centro está en el origen (0, 0), se simplifica a:

**x² + y² = r²**

La ecuación general de la circunferencia es: **x² + y² + Dx + Ey + F = 0**, donde el centro es (-D/2, -E/2) y el radio r = √(D²/4 + E²/4 - F).

### Ejemplo resuelto: Ecuación de la circunferencia
Hallar la ecuación de la circunferencia con centro (3, -2) y radio 5:

(x - 3)² + (y + 2)² = 25

Expandiendo: x² - 6x + 9 + y² + 4y + 4 = 25 → x² + y² - 6x + 4y - 12 = 0

### Tangentes a la circunferencia
La ecuación de la tangente a la circunferia en un punto (x₁, y₁) sobre ella es:

**(x₁ - h)(x - h) + (y₁ - k)(y - k) = r²**

La distancia desde el centro a la recta tangente es igual al radio. Una recta Ax + By + C = 0 es tangente si:

**d = |Ah + Bk + C| / √(A² + B²) = r**

### Ejemplo resuelto: Tangente
La circunferencia x² + y² = 25 tiene tangente horizontal en el punto (3, 4). Verificamos que 3² + 4² = 25, y la tangente en este punto es 3x + 4y = 25.

### Parábola: definición
Una parábola es el lugar geométrico de los puntos del plano que están equidistantes de un punto fijo F (foco) y una recta fija d (directriz). La parábola tiene un eje de simetría que pasa por el foco y es perpendicular a la directriz. El vértice V está en el punto medio entre el foco y la directriz.

### Ecuación de la parábola
Para una parábola con vértice en el origen y foco en el eje positivo:

**y² = 4px**

donde p es la distancia del vértice al foco (y a la directriz). El foco está en (p, 0) y la directriz es x = -p.

Si la parábola abre hacia arriba (vértice en origen):

**x² = 4py**, foco en (0, p), directriz y = -p

### Ejemplo resuelto: Parábola
Una parábola tiene foco en (0, 3) y directriz y = -3. Entonces p = 3 y la ecuación es:

x² = 4(3)y → x² = 12y

El vértice está en (0, 0) y el parámetro focal es 4p = 12.

### Parábola desplazada
Para vértice en (h, k):

**(y - k)² = 4p(x - h)** o **(x - h)² = 4p(y - k)**

El foco se desplaza a (h + p, k) o (h, k + p) respectivamente, y la directriz a x = h - p o y = k - p.

### Propiedades métricas de la parábola
La longitud del eje focal (segmento de la parábola perpendicular al eje que pasa por el foco) es |4p|. La distancia focal es p. La parábola tiene la propiedad反射ora: cualquier rayo paralelo al eje se refleja hacia el foco. La ecuación de una cuerda focal (recta que pasa por el foco) con pendiente m es y - p = mx (para y² = 4px).

### Ejemplo resuelto: Cuerda focal
Para y² = 16x (p = 4, foco en (4, 0)), una cuerda focal con pendiente 1 es y = x - 4. Sustituyendo en la ecuación:

(x - 4)² = 16x → x² - 8x + 16 = 16x → x² - 24x + 16 = 0

Las soluciones son x = 12 ± √128 = 12 ± 8√2, dando los puntos (12 + 8√2, 8 + 8√2) y (12 - 8√2, -8 + 8√2).

La circunferencia y la parábola son curvas cónicas fundamentales con amplias aplicaciones en óptica, telecomunicaciones y trayectorias balísticas.`,
};
