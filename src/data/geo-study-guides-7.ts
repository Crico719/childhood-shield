export const geoStudyGuides7: Record<string, string> = {
  "locus-geometrico": `## Locus Geométrico

Un **locus geométrico** es el conjunto de todos los puntos del plano que satisfacen una condición dada. Es fundamental conocer los loci más comunes para resolver problemas de construcción y localización.

### Locus de puntos equidistantes de dos puntos fijos

Dados dos puntos $A$ y $B$, el locus de puntos que están a la misma distancia de ambos es la **mediatriz** del segmento $AB$.

### Fórmula de la mediatriz

Si $A = (x_1, y_1)$ y $B = (x_2, y_2)$, la mediatriz se obtiene con:

$$y - \\frac{y_1 + y_2}{2} = -\\frac{x_2 - x_1}{y_2 - y_1}\\left(x - \\frac{x_1 + x_2}{2}\\right)$$

### Locus de puntos equidistantes de dos rectas paralelas

El locus es una recta paralela a ambas y situada exactamente a medio camino entre ellas.

### Locus de puntos equidistantes de dos rectas concurrentes

El locus son las **bisectrices** de los ángulos formados por las dos rectas.

### Ejemplo resuelto 1

**Problema:** Encuentra el locus de puntos equidistantes de $A(1, 2)$ y $B(5, 6)$.

**Solución:**

- Punto medio: $M = \\left(\\frac{1+5}{2}, \\frac{2+6}{2}\\right) = (3, 4)$
- Pendiente de $AB$: $m = \\frac{6-2}{5-1} = 1$
- Pendiente de la mediatriz: $m' = -1$
- Ecuación: $y - 4 = -1(x - 3) \\Rightarrow y = -x + 7$

### Ejemplo resuelto 2

**Problema:** Un punto $P$ se mueve de modo que su distancia al punto $C(3, 1)$ es siempre 5 unidades. ¿Cuál es el locus?

**Solución:**

El locus es una **circunferencia** de centro $C(3, 1)$ y radio $r = 5$:

$$(x - 3)^2 + (y - 1)^2 = 25$$

### Ejemplo resuelto 3

**Problema:** Encuentra el locus de puntos cuya distancia al eje $x$ es el triple de su distancia al punto $F(0, 4)$.

**Solución:**

Sea $P = (x, y)$. La distancia al eje $x$ es $|y|$ y la distancia a $F$ es $\\sqrt{x^2 + (y-4)^2}$:

$$|y| = 3\\sqrt{x^2 + (y-4)^2}$$

$$y^2 = 9x^2 + 9(y-4)^2$$

$$y^2 = 9x^2 + 9y^2 - 72y + 144$$

$$-8y^2 + 72y - 9x^2 = 144$$

$$\\frac{(y - 4.5)^2}{a^2} - \\frac{x^2}{b^2} = 1$$

Esto representa una **cónica** (hipérbola).

### Ejemplo resuelto 4

**Problema:** Encuentra el locus de puntos que subtenden un ángulo recto con los puntos $A(-2, 0)$ y $B(2, 0)$.

**Solución:**

Por el teorema de Thales, el locus es la **circunferencia** con diámetro $AB$:

$$(x)^2 + y^2 = 4 \\quad \\text{(excepto los puntos } A \\text{ y } B\\text{)}$$

### Resumen de loci fundamentales

| Condición | Locus |
|-----------|-------|
| Equidistante de dos puntos | Mediatriz |
| Equidistante de dos rectas paralelas | Recta paralela intermedia |
| Equidistante de dos rectas concurrentes | Bisectrices |
| Distancia constante a un punto | Circunferencia |
| Distancia constante a una recta | Paralelas a la recta |`,

  "tangentes-circunferencia": `## Tangentes a una Circunferencia

Una **recta tangente** a una circunferencia la toca en exactamente un punto y es perpendicular al radio en el punto de contacto.

### Condición de tangencia

Una recta $y = mx + b$ es tangente a la circunferencia $x^2 + y^2 = r^2$ si y solo si:

$$b = \\pm r\\sqrt{1 + m^2}$$

Para una circunferencia con centro $(h, k)$ y radio $r$, la recta $Ax + By + C = 0$ es tangente si:

$$\\frac{|Ah + Bk + C|}{\\sqrt{A^2 + B^2}} = r$$

### Tangente desde un punto exterior

Si el punto $P(x_0, y_0)$ está fuera de la circunferencia $x^2 + y^2 = r^2$, la longitud del segmento tangente es:

$$L = \\sqrt{x_0^2 + y_0^2 - r^2}$$

### Ángulo entre tangentes

Si dos tangentes se dibujan desde un punto exterior $P$ a una circunferencia de centro $O$ y radio $r$, y la distancia $PO = d$:

$$\\tan\\left(\\frac{\\alpha}{2}\\right) = \\frac{r}{\\sqrt{d^2 - r^2}}$$

### Ejemplo resuelto 1

**Problema:** Encuentra la ecuación de las tangentes a $x^2 + y^2 = 25$ que pasan por $P(8, 3)$.

**Solución:**

La ecuación polar es $8x + 3y = 25$. Combinando con la circunferencia:

La ecuación combinada: $x^2 + y^2 = 25$ con $y = \\frac{25 - 8x}{3}$

$9x^2 + (25 - 8x)^2 = 225$

$9x^2 + 625 - 400x + 64x^2 = 225$

$73x^2 - 400x + 400 = 0$

$x = \\frac{400 \\pm \\sqrt{160000 - 116800}}{146} = \\frac{400 \\pm \\sqrt{43200}}{146} = \\frac{400 \\pm 207.85}{146}$

### Ejemplo resuelto 2

**Problema:** ¿Es la recta $3x + 4y = 25$ tangente a $x^2 + y^2 = 9$?

**Solución:**

Distancia del centro $(0,0)$ a la recta:

$$d = \\frac{|3(0) + 4(0) - 25|}{\\sqrt{9 + 16}} = \\frac{25}{5} = 5$$

Como $d = 5 > 3 = r$, la recta **no** es tangente (no toca la circunferencia).

### Ejemplo resuelto 3

**Problema:** Halla la longitud de la tangente desde $P(5, 5)$ a la circunferencia $x^2 + y^2 = 9$.

**Solución:**

$$L = \\sqrt{5^2 + 5^2 - 9} = \\sqrt{25 + 25 - 9} = \\sqrt{41} \\approx 6.40$$

### Ejemplo resuelto 4

**Problema:** Encuentra las tangentes a $x^2 + y^2 = 16$ paralelas a $y = 2x + 5$.

**Solución:**

Las tangentes paralelas tienen la misma pendiente $m = 2$:

$$b = \\pm 4\\sqrt{1 + 4} = \\pm 4\\sqrt{5}$$

$$y = 2x + 4\\sqrt{5} \\quad \\text{y} \\quad y = 2x - 4\\sqrt{5}$$

### Ángulo entre tangentes desde un punto

Si la distancia del punto al centro es $d$ y el radio es $r$:

$$\\alpha = 2 \\arctan\\left(\\frac{r}{\\sqrt{d^2 - r^2}}\\right)$$

### Propiedades fundamentales

- La tangente es perpendicular al radio en el punto de contacto
- Los dos segmentos tangentes desde un punto exterior son iguales
- El ángulo entre una tangente y una cuerda iguala al ángulo en el segmento alternativo
- El centro está sobre la bisectriz del ángulo formado por las dos tangentes`,

  "poligonos-inscritos-circunscritos": `## Polígonos Inscritos y Circunscritos

### Polígono inscrito en una circunferencia

Un polígono es **inscrito** en una circunferencia si todos sus vértices están sobre ella. Se dice que la circunferencia es **circunscrita** al polígono.

### Polígono circunscrito a una circunferencia

Un polígono es **circunscrito** a una circunferencia si todos sus lados son tangentes a ella. La circunferencia es **inscrita** en el polígono.

### Triángulo inscrito

Para un triángulo con lados $a$, $b$, $c$ y área $A$, el radio de la circunferencia circunscrita es:

$$R = \\frac{abc}{4A}$$

Para un triángulo rectángulo, el centro de la circunferencia circunscrita es el punto medio de la hipotenusa.

### Triángulo circunscrito

El radio de la circunferencia inscrita en un triángulo con lados $a$, $b$, $c$ y semiperímetro $s = \\frac{a+b+c}{2}$ es:

$$r = \\frac{A}{s}$$

Donde $A$ es el área del triángulo.

### Cuadrilátero cíclico

Un cuadrilátero puede inscribirse en una circunferencia si y solo si **opuestos suman 180°**:

$$\\angle A + \\angle C = \\angle B + \\angle D = 180°$$

La diagonal divides al cuadriláculo en dos triángulos. El radio se calcula con:

$$R = \\frac{\\sqrt{(ab+cd)(ac+bd)(ad+bc)}}{4A}$$

### Ejemplo resuelto 1

**Problema:** Un triángulo tiene lados $a = 5$, $b = 6$, $c = 7$. Halla los radios de las circunferencias inscrita y circunscrita.

**Solución:**

Semiperímetro: $s = \\frac{5+6+7}{2} = 9$

Área (Heron): $A = \\sqrt{9 \\cdot 4 \\cdot 3 \\cdot 2} = \\sqrt{216} = 6\\sqrt{6}$

Radio inscrita: $r = \\frac{6\\sqrt{6}}{9} = \\frac{2\\sqrt{6}}{3} \\approx 1.63$

Radio circunscrita: $R = \\frac{5 \\cdot 6 \\cdot 7}{4 \\cdot 6\\sqrt{6}} = \\frac{210}{24\\sqrt{6}} = \\frac{35}{4\\sqrt{6}} = \\frac{35\\sqrt{6}}{24} \\approx 3.57$

### Ejemplo resuelto 2

**Problema:** Un cuadrilátero cíclico tiene ángulos $\\angle A = 70°$ y $\\angle B = 80°$. Halla los otros dos ángulos.

**Solución:**

$$\\angle C = 180° - 70° = 110°$$
$$\\angle D = 180° - 80° = 100°$$

### Ejemplo resuelto 3

**Problema:** Halla el radio de la circunferencia circunscrita a un triángulo rectángulo con catetos $a = 3$ y $b = 4$.

**Solución:**

Hipotenusa: $c = \\sqrt{9 + 16} = 5$

Área: $A = \\frac{3 \\cdot 4}{2} = 6$

$$R = \\frac{3 \\cdot 4 \\cdot 5}{4 \\cdot 6} = \\frac{60}{24} = 2.5$$

Para un triángulo rectángulo, $R = \\frac{c}{2}$ (la mitad de la hipotenusa).

### Ejemplo resuelto 4

**Problema:** Un triángulo tiene $a = 8$, $b = 15$, $c = 17$. Verifica que es rectángulo y halla $R$ y $r$.

**Solución:**

$8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✓ (rectángulo)

$s = \\frac{8+15+17}{2} = 20$, $A = \\frac{8 \\cdot 15}{2} = 60$

$$r = \\frac{60}{20} = 3, \\quad R = \\frac{17}{2} = 8.5$$

### Relaciones importantes

- Para un triángulo inscrito: $R \\geq 2r$ (desigualdad de Euler)
- La altura de un triángulo inscrito con un lado como diámetro es máxima cuando el tercer vértice está en la parte superior
- La relación entre área y radios: $A = rs = \\frac{abc}{4R}$`,

  "solidos-compostos": `## Sólidos Compuestos

Un **sólido compuesto** se forma combinando dos o más sólidos geométricos elementales (prismas, cilindros, pirámides, conos, esferas) mediante sumas o restas.

### Estrategia de resolución

1. **Identificar** los sólidos elementales que componen la figura
2. **Calcular** el volumen y área superficial de cada sólido por separado
3. **Sumar o restar** según el caso (sólidos unidos o huecos)
4. **Cuidar las superficies internas** que desaparecen al unir

### Sólidos compuestos por adición

Cuando dos sólidos se unen, las superficies de contacto desaparecen del cálculo de área superficial.

### Sólidos compuestos por sustracción

Cuando se perfora o talla un sólido dentro de otro, se resta el volumen del hueco.

### Ejemplo resuelto 1

**Problema:** Un cilindro de radio $r = 3$ cm y altura $h = 10$ cm tiene un cono coaxial vacío de radio $r = 3$ cm y altura $h = 10$ cm. Halla el volumen.

**Solución:**

$$V_{cilindro} = \\pi r^2 h = \\pi (9)(10) = 90\\pi$$

$$V_{cono} = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (9)(10) = 30\\pi$$

$$V = 90\\pi - 30\\pi = 60\\pi \\approx 188.50 \\text{ cm}^3$$

### Ejemplo resuelto 2

**Problema:** Un cubo de lado $a = 4$ tiene una esfera inscrita. Halla el volumen de la parte sólida.

**Solución:**

Radio de la esfera inscrita: $r = \\frac{a}{2} = 2$

$$V_{cubo} = a^3 = 64$$

$$V_{esfera} = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (8) = \\frac{32\\pi}{3}$$

$$V = 64 - \\frac{32\\pi}{3} \\approx 64 - 33.51 = 30.49$$

### Ejemplo resuelto 3

**Problema:** Un prisma triangular de base equilátera ($a = 6$) y altura $h = 8$ tiene un cilindro circular de radio $r = 2$ y la misma altura perforado en su interior. Halla el volumen y el área superficial total.

**Solución:**

Base del prisma (triángulo equilátero): $A_{base} = \\frac{\\sqrt{3}}{4}(36) = 9\\sqrt{3}$

$$V_{prisma} = 9\\sqrt{3} \\cdot 8 = 72\\sqrt{3}$$

$$V_{cilindro} = \\pi (4)(8) = 32\\pi$$

$$V = 72\\sqrt{3} - 32\\pi \\approx 124.71 - 100.53 = 24.18$$

Para el área superficial: se suma el área exterior del prisma y del cilindro interior (la superficie lateral del cilindro se convierte en superficie interna expuesta).

### Ejemplo resuelto 4

**Problema:** Un cono de radio $r = 4$ y altura $h = 12$ está coronado por una esfera de radio $r = 2$ colocada sobre su base superior cónica. Halla el volumen total.

**Solución:**

$$V_{cono} = \\frac{1}{3}\\pi (16)(12) = 64\\pi$$

$$V_{esfera} = \\frac{4}{3}\\pi (8) = \\frac{32\\pi}{3}$$

$$V_{total} = 64\\pi + \\frac{32\\pi}{3} = \\frac{224\\pi}{3} \\approx 234.57$$

### Consideraciones importantes

- Al restar sólidos, las superficies de contacto no se incluyen en el área exterior
- Los sólidos compuestos simétricos permiten simplificaciones
- Siempre verificar que las dimensiones sean compatibles (el sólido hueco no puede ser mayor que el sólido exterior)
- Unir un cilindro a una esfera produce formas como la de una cápsula`,

  "secciones-solidos": `## Secciones de Sólidos

Una **sección** es la intersección de un sólido con un plano. La forma de la sección depende de la orientación del plano respecto al sólido.

### Secciones de un cubo

| Plano | Sección resultante |
|-------|-------------------|
| Paralelo a una cara | Cuadrado |
| Paralelo a una arista | Rectángulo |
| Pasando por 3 vértices no coplanarios | Triángulo equilátero |
| Bisecando aristas opuestas | Hexágono regular |

### Secciones de un cilindro

- **Paralelo a la base:** Círculo
- **Perpendicular a la base:** Rectángulo
- **Oblicuo:** Elipse

### Secciones de un cono

- **Paralelo a la base:** Círculo
- **Oblicuo sin cortar la base:** Elipse
- **Paralelo a una generatriz:** Parábola
- **Paralelo al eje:** Hipérbola (o rectángulo si pasa por el vértice)

### Secciones de una esfera

Toda sección de una esfera es un **círculo**, sin importar la orientación del plano.

Radio de la sección a distancia $d$ del centro:

$$r_{sección} = \\sqrt{R^2 - d^2}$$

### Ejemplo resuelto 1

**Problema:** Un cilindro de radio $r = 5$ y altura $h = 12$ es cortado por un plano que forma un ángulo de 30° con la base. Halla las dimensiones de la sección elíptica.

**Solución:**

El eje mayor de la elipse se obtiene del triángulo rectángulo formado por la inclinación:

$$\\text{Eje mayor} = \\frac{2r}{\\cos 30°} = \\frac{10}{\\frac{\\sqrt{3}}{2}} = \\frac{20}{\\sqrt{3}} = \\frac{20\\sqrt{3}}{3} \\approx 11.55$$

$$\\text{Eje menor} = 2r = 10$$

Área de la sección: $A = \\pi \\cdot a \\cdot b = \\pi \\cdot \\frac{20\\sqrt{3}}{3} \\cdot 5 = \\frac{100\\pi\\sqrt{3}}{3} \\approx 181.38$

### Ejemplo resuelto 2

**Problema:** Un plano perpendicular al eje de un cono a una distancia $h/3$ del vértice ($h = 12$, $r = 6$) produce una sección circular. Halla el radio.

**Solución:**

Por semejanza de triángulos:

$$\\frac{r_{sección}}{r} = \\frac{h_{sección}}{h}$$

$$r_{sección} = \\frac{6 \\cdot 4}{12} = 2$$

Área: $A = \\pi (2)^2 = 4\\pi$

### Ejemplo resuelto 3

**Problema:** Un cubo de lado $a = 6$ es cortado por un plano que pasa por tres vértices no adyacentes. Halla el área de la sección triangular.

**Solución:**

Los tres vértices forman un triángulo equilátero cuyos lados son diagonales de las caras del cubo:

$$l = a\\sqrt{2} = 6\\sqrt{2}$$

$$A = \\frac{\\sqrt{3}}{4}l^2 = \\frac{\\sqrt{3}}{4}(72) = 18\\sqrt{3} \\approx 31.18$$

### Ejemplo resuelto 4

**Problema:** Un cilindro de radio $R = 4$ tiene perforado un cilindro coaxial de radio $r = 2$. Un plano perpendicular al eje produce una sección. Halla el área de la sección anular.

**Solución:**

$$A = \\pi R^2 - \\pi r^2 = \\pi(16 - 4) = 12\\pi \\approx 37.70$$

### Resumen de secciones cónicas

Las secciones oblicuas de un cono producen las tres **cónicas**:
- **Elipse:** plano corta ambas mitades del cono
- **Parábola:** plano paralelo a una generatriz
- **Hipérbola:** plano paralelo al eje o corta ambas mitades del cono doble`,

  "areas-superficiales-avanzado": `## Áreas y Superficies Avanzadas

El cálculo de áreas superficiales de sólidos complejos requiere combinar las fórmulas básicas y adaptarlas a cada geometría específica.

### Superficie lateral de un cono

$$A_L = \\pi r l$$

Donde $l$ es la **generatriz**: $l = \\sqrt{r^2 + h^2}$

### Superficie lateral de un cilindro

$$A_L = 2\\pi r h$$

### Superficie de una esfera

$$A = 4\\pi r^2$$

### Zona esférica (casquete esférico)

Una zona esférica es la superficie de una esfera cortada por dos planos paralelos. Si la altura de la zona es $h$ y el radio de la esfera es $R$:

$$A_{zona} = 2\\pi R h$$

Esta fórmula es notable: el área **no depende** de la posición del corte, solo de su altura.

### Superficie de revolución

Una curva $y = f(x)$ rotada alrededor del eje $x$ genera una superficie con área:

$$A = 2\\pi \\int_a^b f(x)\\sqrt{1 + [f'(x)]^2} \\, dx$$

### Ejemplo resuelto 1

**Problema:** Halla el área superficial de un cono con radio $r = 5$ y altura $h = 12$.

**Solución:**

Generatriz: $l = \\sqrt{25 + 144} = 13$

Área lateral: $A_L = \\pi (5)(13) = 65\\pi$

Área base: $A_B = \\pi (25) = 25\\pi$

Área total: $A_T = 65\\pi + 25\\pi = 90\\pi \\approx 282.74$

### Ejemplo resuelto 2

**Problema:** Un casquete esférico de altura $h = 4$ cm se corta de una esfera de radio $R = 5$ cm. Halla su área superficial.

**Solución:**

$$A = 2\\pi R h = 2\\pi (5)(4) = 40\\pi \\approx 125.66 \\text{ cm}^2$$

### Ejemplo resuelto 3

**Problema:** Halla la superficie generada al rotar la semicircunferencia $y = \\sqrt{9 - x^2}$ alrededor del eje $x$.

**Solución:**

Esto genera una esfera de radio $r = 3$:

$$A = 4\\pi (3)^2 = 36\\pi \\approx 113.10$$

Verificación con la integral:

$f'(x) = \\frac{-x}{\\sqrt{9-x^2}}$

$1 + [f'(x)]^2 = 1 + \\frac{x^2}{9-x^2} = \\frac{9}{9-x^2}$

$A = 2\\pi \\int_{-3}^{3} \\sqrt{9-x^2} \\cdot \\frac{3}{\\sqrt{9-x^2}} \\, dx = 6\\pi \\int_{-3}^{3} dx = 6\\pi(6) = 36\\pi$ ✓

### Ejemplo resuelto 4

**Problema:** Un tronco de cono tiene radios $R = 8$, $r = 3$ y generatriz $l = 13$. Halla el área lateral.

**Solución:**

$$A_L = \\pi(R + r)l = \\pi(8 + 3)(13) = 143\\pi \\approx 449.25$$

### Ejemplo resuelto 5

**Problema:** Halla el área de la zona esférica entre los paralelos 30° N y 30° S en una esfera de radio $R = 6400$ km.

**Solución:**

La distancia entre los paralelos (altura de la zona):

$$h = R(\\sin 30° - \\sin(-30°)) = 6400(0.5 + 0.5) = 6400 \\text{ km}$$

$$A = 2\\pi (6400)(6400) = 81{,}920{,}000\\pi \\approx 257{,}359{,}270 \\text{ km}^2$$

### Resumen de fórmulas

| Sólido | Área superficial |
|--------|-----------------|
| Esfera | $4\\pi r^2$ |
| Cono | $\\pi r l + \\pi r^2$ |
| Cilindro | $2\\pi r h + 2\\pi r^2$ |
| Zona esférica | $2\\pi R h$ |
| Tronco de cono | $\\pi(R+r)l + \\pi R^2 + \\pi r^2$ |`,

  "volumenes-avanzados": `## Volúmenes Avanzados

El cálculo de volúmenes de sólidos complejos se apoya en fórmulas elementales, el método de discos/arandelas, el método de capas cilíndricas y el principio de Cavalieri.

### Fórmulas elementales

| Sólido | Volumen |
|--------|---------|
| Prisma | $V = A_{base} \\cdot h$ |
| Cilindro | $V = \\pi r^2 h$ |
| Pirámide/Cono | $V = \\frac{1}{3} A_{base} \\cdot h$ |
| Esfera | $V = \\frac{4}{3}\\pi r^3$ |
| Tronco de cono | $V = \\frac{\\pi h}{3}(R^2 + Rr + r^2)$ |

### Método de discos

Para un sólido de revolución alrededor del eje $x$:

$$V = \\pi \\int_a^b [f(x)]^2 \\, dx$$

### Método de arandelas

Cuando el sólido tiene un hueco coaxial:

$$V = \\pi \\int_a^b \\left([f(x)]^2 - [g(x)]^2\\right) \\, dx$$

### Método de capas cilíndricas

Al rotar alrededor del eje $y$:

$$V = 2\\pi \\int_a^b x \\cdot f(x) \\, dx$$

### Principio de Cavalieri

Si dos sólidos tienen secciones transversales iguales en cada altura, tienen el mismo volumen.

### Ejemplo resuelto 1

**Problema:** Halla el volumen del sólido generado al rotar $y = x^2$ entre $x = 0$ y $x = 2$ alrededor del eje $x$.

**Solución:**

$$V = \\pi \\int_0^2 (x^2)^2 \\, dx = \\pi \\int_0^2 x^4 \\, dx = \\pi \\left[\\frac{x^5}{5}\\right]_0^2 = \\frac{32\\pi}{5} \\approx 20.11$$

### Ejemplo resuelto 2

**Problema:** Halla el volumen generado al rotar la región entre $y = x$ e $y = x^2$ alrededor del eje $x$.

**Solución:**

Intersecciones: $x = x^2 \\Rightarrow x = 0, x = 1$

$$V = \\pi \\int_0^1 \\left(x^2 - x^4\\right) dx = \\pi \\left[\\frac{x^3}{3} - \\frac{x^5}{5}\\right]_0^1 = \\pi\\left(\\frac{1}{3} - \\frac{1}{5}\\right) = \\frac{2\\pi}{15} \\approx 0.42$$

### Ejemplo resuelto 3

**Problema:** Halla el volumen de una esfera de radio $R$ usando el método de discos.

**Solución:**

Rotar $y = \\sqrt{R^2 - x^2}$ alrededor del eje $x$, de $-R$ a $R$:

$$V = \\pi \\int_{-R}^{R} (R^2 - x^2) \\, dx = \\pi \\left[R^2 x - \\frac{x^3}{3}\\right]_{-R}^{R}$$

$$= \\pi \\left[\\left(R^3 - \\frac{R^3}{3}\\right) - \\left(-R^3 + \\frac{R^3}{3}\\right)\\right] = \\pi \\cdot \\frac{4R^3}{3} = \\frac{4}{3}\\pi R^3$$

### Ejemplo resuelto 4

**Problema:** Halla el volumen del tronco de cono con radios $R = 6$, $r = 2$ y altura $h = 8$.

**Solución:**

$$V = \\frac{\\pi (8)}{3}(36 + 12 + 4) = \\frac{8\\pi}{3}(52) = \\frac{416\\pi}{3} \\approx 435.63$$

### Ejemplo resuelto 5

**Problema:** Halla el volumen generado al rotar la región bajo $y = \\sin x$ de $0$ a $\\pi$ alrededor del eje $x$.

**Solución:**

$$V = \\pi \\int_0^{\\pi} \\sin^2 x \\, dx = \\pi \\int_0^{\\pi} \\frac{1 - \\cos 2x}{2} \\, dx = \\frac{\\pi}{2}\\left[x - \\frac{\\sin 2x}{2}\\right]_0^{\\pi} = \\frac{\\pi^2}{2} \\approx 4.93$$

### Aplicaciones

- **Capas cilíndricas** son ideales cuando la rotación es alrededor de un eje distinto al de integración
- Los métodos de discos y arandelas funcionan mejor cuando la función está resuelta en función de $x$
- El principio de Cavalieri justifica por qué un cilindro con un cono removedo tiene volumen $\\frac{2}{3}\\pi r^2 h$`,

  "recta-plano-espacio": `## Recta y Plano en el Espacio

La geometría tridimensional estudia las relaciones entre rectas, planos y puntos en el espacio.

### Ecuación de un plano

Un plano se define por:

$$Ax + By + Cz + D = 0$$

El **vector normal** es $\\vec{n} = (A, B, C)$.

### Plano por tres puntos

Dados $P_1$, $P_2$, $P_3$ no colineales:

$$\\vec{n} = \\overrightarrow{P_1P_2} \\times \\overrightarrow{P_1P_3}$$

### Distancia de un punto a un plano

$$d = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$

### Recta en el espacio

Una recta se define por un punto $P_0$ y un vector director $\\vec{v} = (a, b, c)$:

$$\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$$

### Distancia entre dos rectas skew

Para rectas con puntos $P_1$, $P_2$ y vectores directores $\\vec{v_1}$, $\\vec{v_2}$:

$$d = \\frac{|\\overrightarrow{P_1P_2} \\cdot (\\vec{v_1} \\times \\vec{v_2})|}{|\\vec{v_1} \\times \\vec{v_2}|}$$

### Ángulo entre recta y plano

$$\\sin \\theta = \\frac{|\\vec{v} \\cdot \\vec{n}|}{|\\vec{v}||\\vec{n}|}$$

### Ejemplo resuelto 1

**Problema:** Halla la ecuación del plano que pasa por $A(1, 2, 3)$, $B(4, 0, 5)$ y $C(0, 3, 1)$.

**Solución:**

$$\\overrightarrow{AB} = (3, -2, 2)$$
$$\\overrightarrow{AC} = (-1, 1, -2)$$

$$\\vec{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 3 & -2 & 2 \\\\ -1 & 1 & -2 \\end{vmatrix}$$

$$= \\vec{i}(4-2) - \\vec{j}(-6+2) + \\vec{k}(3-2) = (2, 4, 1)$$

Ecuación: $2(x-1) + 4(y-2) + 1(z-3) = 0$

$$2x + 4y + z - 13 = 0$$

### Ejemplo resuelto 2

**Problema:** Halla la distancia del punto $P(1, -1, 2)$ al plano $2x - y + 2z = 5$.

**Solución:**

$$d = \\frac{|2(1) - (-1) + 2(2) - 5|}{\\sqrt{4 + 1 + 4}} = \\frac{|2 + 1 + 4 - 5|}{3} = \\frac{2}{3} \\approx 0.67$$

### Ejemplo resuelto 3

**Problema:** Halla la ecuación de la recta que pasa por $P(1, 0, -1)$ y es paralela a la intersección de los planos $x + y + z = 1$ y $2x - y + 3z = 4$.

**Solución:**

El vector director es perpendicular a ambas normales:

$$\\vec{v} = \\vec{n_1} \\times \\vec{n_2} = (1,1,1) \\times (2,-1,3) = (4, -1, -3)$$

Recta: $\\frac{x-1}{4} = \\frac{y}{-1} = \\frac{z+1}{-3}$

### Ejemplo resuelto 4

**Problema:** ¿Son paralelas, se cortan o son skew las rectas:

$L_1: \\frac{x-1}{2} = \\frac{y+1}{3} = \\frac{z}{1}$ y $L_2: \\frac{x}{1} = \\frac{y-2}{-1} = \\frac{z+3}{2}$

**Solución:**

Vectores directores: $\\vec{v_1} = (2,3,1)$, $\\vec{v_2} = (1,-1,2)$

$\\vec{v_1} \\times \\vec{v_2} = (7, -3, -5) \\neq \\vec{0}$ → no son paralelas.

Punto de $L_1$: $(1,-1,0)$; Punto de $L_2$: $(0,2,-3)$

$\\overrightarrow{P_1P_2} = (-1, 3, -3)$

$\\overrightarrow{P_1P_2} \\cdot (\\vec{v_1} \\times \\vec{v_2}) = -7 - 9 + 15 = -1 \\neq 0$

Las rectas son **skew** (no coplanarias).

### Resumen de relaciones

| Relación | Condición |
|----------|-----------|
| Recta paralela a plano | $\\vec{v} \\cdot \\vec{n} = 0$ |
| Recta perpendicular a plano | $\\vec{v} = k\\vec{n}$ |
| Planos paralelos | $\\vec{n_1} = k\\vec{n_2}$ |
| Planos perpendiculares | $\\vec{n_1} \\cdot \\vec{n_2} = 0$ |`,
};
