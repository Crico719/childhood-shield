export const geoStudyGuides6: Record<string, string> = {
  "aplicaciones-trigonometricas": `
## Aplicaciones Trigonometricas

### Introducción

La trigonometría tiene múltiples aplicaciones en problemas reales como alturas inaccesibles, distancias entre objetos, ángulos de elevación y depresión. Estas aplicaciones se resuelven utilizando las razones trigonométricas fundamentales (seno, coseno, tangente) en triángulos rectángulos y no rectángulos.

### Ley de Senos

La ley de senos relaciona los lados de un triángulo con los senos de sus ángulos opuestos:

$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

Se utiliza cuando se conocen: dos ángulos y un lado (AAS o ASA), o dos lados y un ángulo opuesto a uno de ellos (SSA).

### Ley de Cosenos

La ley de cosenos generaliza el teorema de Pitágoras:

$$c^2 = a^2 + b^2 - 2ab \\cos C$$

Se aplica cuando se conocen: dos lados y el ángulo comprendido (SAS), o los tres lados (SSS) para encontrar un ángulo.

### Ángulos de Elevación y Depresión

El ángulo de elevación se mide desde la horizontal hacia arriba hasta un objeto. El ángulo de depresión se mide desde la horizontal hacia abajo. Ambos se miden respecto al nivel del o del observador.

### Ejemplo Resuelto 1

Un observador ve la cima de un edificio con un ángulo de elevación de 60°. Si está a 50 metros de la base, ¿cuál es la altura del edificio?

$$\\tan 60° = \\frac{h}{50}$$
$$h = 50 \\cdot \\tan 60° = 50\\sqrt{3} \\approx 86.6 \\text{ metros}$$

### Ejemplo Resuelto 2

Dos barcos A y B están a 10 km y 15 km del puerto P respectivamente. Si el ángulo APB es de 120°, ¿cuál es la distancia entre los barcos?

$$AB^2 = 10^2 + 15^2 - 2(10)(15)\\cos 120°$$
$$AB^2 = 100 + 225 - 300\\left(-\\frac{1}{2}\\right) = 325 + 150 = 475$$
$$AB = \\sqrt{475} = 5\\sqrt{19} \\approx 21.8 \\text{ km}$$

### Ejemplo Resuelto 3

Desde la cima de un acantilado de 80 m, el ángulo de depresión de un barco es de 35°. ¿Qué distancia hay horizontalmente?

$$\\tan 35° = \\frac{80}{d}$$
$$d = \\frac{80}{\\tan 35°} = \\frac{80}{0.7002} \\approx 114.3 \\text{ metros}$$

### Ejemplo Resuelto 4

En un triángulo con lados a = 8, b = 6 y ángulo C = 45°, hallar el lado c.

$$c^2 = 64 + 36 - 2(8)(6)\\cos 45°$$
$$c^2 = 100 - 96\\left(\\frac{\\sqrt{2}}{2}\\right) = 100 - 48\\sqrt{2} \\approx 32.1$$
$$c \\approx 5.67$$

### Fórmulas Clave

| Situación | Fórmula |
|---|---|
| Dos lados y ángulo comprendido | Ley de cosenos |
| Dos ángulos y un lado | Ley de senos |
| Triángulo rectángulo | Razones trigonométricas básicas |
| Área de un triángulo | $A = \\frac{1}{2}ab\\sin C$ |
| Distancia entre dos puntos | $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ |
`,
  "vectores-en-el-plano": `
## Vectores en el Plano

### Concepto de Vector

Un vector es una cantidad que tiene magnitud (longitud) y dirección. Se representa como un segmento orientado entre dos puntos P y Q, y se escribe como $\\vec{v} = \\overrightarrow{PQ}$. El vector cero $\\vec{0}$ tiene magnitud cero y dirección arbitraria.

### Componentes de un Vector

Si P tiene coordenadas $(x_1, y_1)$ y Q tiene $(x_2, y_2)$, entonces:

$$\\vec{v} = (x_2 - x_1, \\; y_2 - y_1) = (v_x, \\; v_y)$$

Donde $v_x$ es la componente horizontal y $v_y$ es la componente vertical.

### Magnitud de un Vector

La longitud o norma de un vector $\\vec{v} = (a, b)$ es:

$$|\\vec{v}| = \\sqrt{a^2 + b^2}$$

Esta fórmula se deriva directamente del teorema de Pitágoras aplicado al triángulo formado por las componentes.

### Vector Unitario

El vector unitario en la dirección de $\\vec{v}$ se obtiene dividiendo el vector entre su magnitud:

$$\\hat{u} = \\frac{\\vec{v}}{|\\vec{v}|}$$

### Vectores Colineales y Opuestos

Dos vectores son colineales si son paralelos al mismo línea, es decir, si $\\vec{u} = k\\vec{v}$ para algún escalar $k \\neq 0$. Dos vectores son opuestos si $\\vec{u} = -\\vec{v}$, lo que significa que tienen la misma magnitud pero dirección contraria.

### Dirección de un Vector

El ángulo $\\theta$ que forma un vector $\\vec{v} = (a, b)$ con el eje positivo de X es:

$$\\theta = \\arctan\\left(\\frac{b}{a}\\right)$$

Se debe considerar el cuadrante donde se encuentra el vector.

### Ejemplo Resuelto 1

Calcular las componentes del vector $\\overrightarrow{AB}$ donde A(1, 3) y B(4, 7).

$$\\vec{v} = (4 - 1, \\; 7 - 3) = (3, \\; 4)$$

### Ejemplo Resuelto 2

Hallar la magnitud del vector $\\vec{v} = (5, -12)$.

$$|\\vec{v}| = \\sqrt{25 + 144} = \\sqrt{169} = 13$$

### Ejemplo Resuelto 3

Encontrar el vector unitario de $\\vec{v} = (6, 8)$.

$$|\\vec{v}| = \\sqrt{36 + 64} = \\sqrt{100} = 10$$
$$\\hat{u} = \\left(\\frac{6}{10}, \\frac{8}{10}\\right) = \\left(\\frac{3}{5}, \\frac{4}{5}\\right)$$

### Ejemplo Resuelto 4

Determinar si los vectores $\\vec{a} = (2, -1)$ y $\\vec{b} = (-6, 3)$ son colineales.

Comprobamos: $(-6, 3) = k(2, -1)$. Entonces $-6 = 2k$ y $3 = -k$, de donde $k = -3$ en ambos casos. Son colineales.

### Propiedades Fundamentales

| Propiedad | Fórmula |
|---|---|
| Magnitud | $|\\vec{v}| = \\sqrt{a^2 + b^2}$ |
| Vector unitario | $\\hat{u} = \\vec{v} / |\\vec{v}|$ |
| Punto medio | $M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$ |
| Ángulo con eje X | $\\theta = \\arctan(b/a)$ |
| Colinealidad | $\\vec{u} = k\\vec{v}$ |
`,
  "operaciones-vectores": `
## Operaciones con Vectores

### Suma de Vectores

La suma de dos vectores se realiza componente a componente. Si $\\vec{u} = (u_1, u_2)$ y $\\vec{v} = (v_1, v_2)$:

$$\\vec{u} + \\vec{v} = (u_1 + v_1, \\; u_2 + v_2)$$

Geométricamente, la suma se puede representar con la regla del paralelogramo o la regla del triángulo.

### Resta de Vectores

La resta se define como la suma con el vector opuesto:

$$\\vec{u} - \\vec{v} = (u_1 - v_1, \\; u_2 - v_2)$$

Geométricamente, $\\vec{u} - \\vec{v}$ va del punto que representa $\\vec{v}$ al que representa $\\vec{u}$.

### Multiplicación por un Escalar

Si $k$ es un escalar y $\\vec{v} = (a, b)$:

$$k\\vec{v} = (ka, \\; kb)$$

Si $k > 0$, el vector mantiene la dirección. Si $k < 0$, invierte la dirección. La magnitud se multiplica por $|k|$.

### Propiedades de la Adición

La suma de vectores cumple las siguientes propiedades:

- Conmutativa: $\\vec{u} + \\vec{v} = \\vec{v} + \\vec{u}$
- Asociativa: $(\\vec{u} + \\vec{v}) + \\vec{w} = \\vec{u} + (\\vec{v} + \\vec{w})$
- Elemento neutro: $\\vec{u} + \\vec{0} = \\vec{u}$
- Elemento opuesto: $\\vec{u} + (-\\vec{u}) = \\vec{0}$

### Propiedades de la Multiplicación Escalar

- $k(\\vec{u} + \\vec{v}) = k\\vec{u} + k\\vec{v}$
- $(k + m)\\vec{u} = k\\vec{u} + m\\vec{u}$
- $k(m\\vec{u}) = (km)\\vec{u}$
- $1 \\cdot \\vec{u} = \\vec{u}$

### Expresión con Vectores Base

Todo vector puede expresarse como combinación lineal de los vectores unitarios $\\hat{i} = (1, 0)$ y $\\hat{j} = (0, 1)$:

$$\\vec{v} = (a, b) = a\\hat{i} + b\\hat{j}$$

### Ejemplo Resuelto 1

Dados $\\vec{a} = (3, -2)$ y $\\vec{b} = (-1, 5)$, calcular $\\vec{a} + \\vec{b}$.

$$\\vec{a} + \\vec{b} = (3 + (-1), \\; -2 + 5) = (2, \\; 3)$$

### Ejemplo Resuelto 2

Calcular $3\\vec{u} - 2\\vec{v}$ con $\\vec{u} = (1, 4)$ y $\\vec{v} = (-2, 3)$.

$$3\\vec{u} = (3, \\; 12)$$
$$2\\vec{v} = (-4, \\; 6)$$
$$3\\vec{u} - 2\\vec{v} = (3 - (-4), \\; 12 - 6) = (7, \\; 6)$$

### Ejemplo Resuelto 3

Un avión viaja con velocidad vectorial $\\vec{v}_a = (200, 60)$ km/h y el viento tiene velocidad $\\vec{v}_v = (-30, 10)$ km/h. Velocidad resultante:

$$\\vec{v}_r = (200 - 30, \\; 60 + 10) = (170, \\; 70) \\text{ km/h}$$

Magnitud: $|\\vec{v}_r| = \\sqrt{170^2 + 70^2} = \\sqrt{33800} \\approx 183.8$ km/h

### Ejemplo Resuelto 4

Expresar $\\vec{v} = (4, -3)$ como combinación de $\\hat{i}$ y $\\hat{j}$.

$$\\vec{v} = 4\\hat{i} - 3\\hat{j}$$

### Tabla Resumen

| Operación | Fórmula |
|---|---|
| Suma | $(u_1+v_1, \\; u_2+v_2)$ |
| Resta | $(u_1-v_1, \\; u_2-v_2)$ |
| Escalar | $(ka, \\; kb)$ |
| Norma | $\\sqrt{a^2+b^2}$ |
| Opuesto | $(-a, \\; -b)$ |
`,
  "producto-escalar": `
## Producto Escalar

### Definición

El producto escalar (o punto) de dos vectores $\\vec{u} = (u_1, u_2)$ y $\\vec{v} = (v_1, v_2)$ es un número real definido como:

$$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2$$

También se puede expresar en términos del ángulo $\\theta$ entre ambos vectores:

$$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\; |\\vec{v}| \\cos \\theta$$

### Propiedades del Producto Escalar

- Conmutativa: $\\vec{u} \\cdot \\vec{v} = \\vec{v} \\cdot \\vec{u}$
- Distributiva: $\\vec{u} \\cdot (\\vec{v} + \\vec{w}) = \\vec{u} \\cdot \\vec{v} + \\vec{u} \\cdot \\vec{w}$
- $\\vec{u} \\cdot \\vec{u} = |\\vec{u}|^2$
- $\\vec{u} \\cdot \\vec{0} = 0$
- Escalar: $(k\\vec{u}) \\cdot \\vec{v} = k(\\vec{u} \\cdot \\vec{v})$

### Ángulo entre Vectores

Para calcular el ángulo $\\theta$ entre dos vectores no nulos:

$$\\cos \\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\; |\\vec{v}|}$$
$$\\theta = \\arccos\\left(\\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\; |\\vec{v}|}\\right)$$

### Vectores Perpendiculares

Dos vectores son perpendiculares si y solo si su producto escalar es cero:

$$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$$

Esto es fundamental para verificar ortogonalidad en problemas geométricos.

### Vectores Paralelos

Dos vectores son paralelos si uno es múltiplo escalar del otro. Para $\\vec{u} = (a, b)$ y $\\vec{v} = (c, d)$:

$$\\vec{u} \\parallel \\vec{v} \\iff ad - bc = 0$$

### Proyección Escalar

La proyección escalar de $\\vec{u}$ sobre $\\vec{v}$ es:

$$\\text{proy}_{\\vec{v}} \\vec{u} = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|}$$

### Ejemplo Resuelto 1

Calcular el producto escalar de $\\vec{u} = (3, -1)$ y $\\vec{v} = (2, 5)$.

$$\\vec{u} \\cdot \\vec{v} = 3(2) + (-1)(5) = 6 - 5 = 1$$

### Ejemplo Resuelto 2

Hallar el ángulo entre $\\vec{a} = (1, \\sqrt{3})$ y $\\vec{b} = (2, 0)$.

$$|\\vec{a}| = \\sqrt{1 + 3} = 2, \\quad |\\vec{b}| = 2$$
$$\\vec{a} \\cdot \\vec{b} = 1(2) + \\sqrt{3}(0) = 2$$
$$\\cos \\theta = \\frac{2}{2 \\cdot 2} = \\frac{1}{2}$$
$$\\theta = 60°$$

### Ejemplo Resuelto 3

Verificar si $\\vec{p} = (4, -3)$ y $\\vec{q} = (6, 8)$ son perpendiculares.

$$\\vec{p} \\cdot \\vec{q} = 4(6) + (-3)(8) = 24 - 24 = 0$$

Como el producto escalar es cero, los vectores son perpendiculares.

### Ejemplo Resuelto 4

Calcular la proyección escalar de $\\vec{u} = (5, 2)$ sobre $\\vec{v} = (3, 4)$.

$$\\vec{u} \\cdot \\vec{v} = 15 + 8 = 23$$
$$|\\vec{v}| = \\sqrt{9 + 16} = 5$$
$$\\text{proy}_{\\vec{v}} \\vec{u} = \\frac{23}{5} = 4.6$$

### Resumen de Fórmulas

| Concepto | Fórmula |
|---|---|
| Producto escalar | $u_1v_1 + u_2v_2$ |
| Ángulo | $\\arccos(\\vec{u} \\cdot \\vec{v} / |\\vec{u}||\\vec{v}|)$ |
| Perpendicularidad | $\\vec{u} \\cdot \\vec{v} = 0$ |
| Proyección | $(\\vec{u} \\cdot \\vec{v}) / |\\vec{v}|$ |
`,
  "rectas-vectorial": `
## Rectas en Forma Vectorial

### Ecuación Vectorial de una Recta

La ecuación vectorial de una recta que pasa por el punto $P_0(x_0, y_0)$ con dirección $\\vec{v} = (a, b)$ es:

$$\\vec{r} = \\vec{r}_0 + t\\vec{v}$$

Donde $\\vec{r}_0 = (x_0, y_0)$ es el vector de posición del punto y $t$ es un parámetro real que varía libremente.

### Forma Paramétrica

Desarrollando componente a componente:

$$x = x_0 + at$$
$$y = y_0 + bt$$

Donde $t \\in \\mathbb{R}$ es el parámetro. Cada valor de $t$ determina un punto de la recta.

### Forma Canónica (Simétrica)

Si $a \\neq 0$ y $b \\neq 0$, se puede despejar $t$ de cada ecuación paramétrica:

$$\\frac{x - x_0}{a} = \\frac{y - y_0}{b}$$

Esta forma es útil para identificar rápidamente un punto y la dirección de la recta.

### Forma General

La ecuación general de una recta es:

$$Ax + By + C = 0$$

El vector normal a la recta es $\\vec{n} = (A, B)$, que es perpendicular a la dirección de la recta. Si la dirección es $\\vec{v} = (a, b)$, entonces $\\vec{n} \\cdot \\vec{v} = 0$, es decir, $Aa + Bb = 0$.

### Relación entre Formas

Dada la ecuación vectorial con $\\vec{v} = (a, b)$, la forma general se obtiene con:

$$A = b, \\quad B = -a, \\quad C = -(bx_0 - ay_0)$$

### Condición de Paralelismo

Dos rectas con direcciones $\\vec{v}_1$ y $\\vec{v}_2$ son paralelas si:

$$\\vec{v}_1 = k\\vec{v}_2$$

O equivalentemente, si $a_1 b_2 - a_2 b_1 = 0$.

### Condición de Perpendicularidad

Dos rectas son perpendiculares si sus direcciones cumplen:

$$\\vec{v}_1 \\cdot \\vec{v}_2 = 0 \\iff a_1 a_2 + b_1 b_2 = 0$$

### Ejemplo Resuelto 1

Escribir la ecuación vectorial de la recta por P(2, -1) con dirección $\\vec{v} = (3, 4)$.

$$\\vec{r} = (2, -1) + t(3, 4)$$

Forma paramétrica: $x = 2 + 3t$, $y = -1 + 4t$.

### Ejemplo Resuelto 2

Convertir a forma general: $x = 1 + 2t$, $y = 3 - 5t$.

Despejando $t$: $t = \\frac{x - 1}{2}$ y $t = \\frac{y - 3}{-5}$.

$$\\frac{x - 1}{2} = \\frac{y - 3}{-5}$$
$$-5(x - 1) = 2(y - 3)$$
$$-5x + 5 = 2y - 6$$
$$5x + 2y - 11 = 0$$

### Ejemplo Resuelto 3

Determinar si las rectas $L_1: \\vec{r} = (1, 2) + t(3, -1)$ y $L_2: \\vec{r} = (0, 5) + s(-6, 2)$ son paralelas.

$$\\vec{v}_1 = (3, -1), \\quad \\vec{v}_2 = (-6, 2)$$
$$(-6, 2) = -2(3, -1)$$

Como $\\vec{v}_2 = -2\\vec{v}_1$, las rectas son paralelas.

### Ejemplo Resuelto 4

Encontrar la ecuación de la recta por A(3, 2) y B(7, -1).

Dirección: $\\vec{v} = (7-3, -1-2) = (4, -3)$.

$$\\vec{r} = (3, 2) + t(4, -3)$$

Forma general: $3x + 4y - 17 = 0$.

### Tabla Comparativa

| Forma | Expresión |
|---|---|
| Vectorial | $\\vec{r} = \\vec{r}_0 + t\\vec{v}$ |
| Paramétrica | $x = x_0 + at$, $y = y_0 + bt$ |
| Canónica | $\\frac{x-x_0}{a} = \\frac{y-y_0}{b}$ |
| General | $Ax + By + C = 0$ |
`,
  "elipse-analitica": `
## Elipse en el Análisis Cartesiano

### Definición

Una elipse es el lugar geométrico de todos los puntos del plano tales que la suma de sus distancias a dos puntos fijos llamados focos es constante y mayor que la distancia entre los focos:

$$|PF_1| + |PF_2| = 2a$$

Donde $2a$ es la longitud del eje mayor.

### Elementos de la Elipse

- Centro: punto medio entre los focos
- Eje mayor: segmento de longitud $2a$ que pasa por los focos
- Eje menor: segmento de longitud $2b$ perpendicular al eje mayor en el centro
- Focos: puntos fijos $F_1$ y $F_2$ dentro de la elipse
- Excentricidad: $e = c/a$, donde $0 < e < 1$
- Vértices: puntos extremos del eje mayor

### Relación Fundamental

Los semiejes $a$ (mayor), $b$ (menor) y la distancia focal $c$ están relacionados por:

$$c^2 = a^2 - b^2$$

### Ecuación con Centro en el Origen

Eje mayor horizontal: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$

Eje mayor vertical: $\\frac{x^2}{b^2} + \\frac{y^2}{a^2} = 1$

### Ecuación con Centro en (h, k)

$$\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$$

### Coordenadas de los Focos

Eje horizontal: $F_1(h - c, \\; k)$ y $F_2(h + c, \\; k)$

Eje vertical: $F_1(h, \\; k - c)$ y $F_2(h, \\; k + c)$

### Radios Vectors

La distancia de un punto $P(x, y)$ de la elipse a cada foco se llama radio vector:

$$r_1 = a + ex, \\quad r_2 = a - ex$$

Se cumple que $r_1 + r_2 = 2a$.

### Rectas Tangentes

La ecuación de la tangente a la elipse en el punto $P(x_0, y_0)$ es:

$$\\frac{x \\cdot x_0}{a^2} + \\frac{y \\cdot y_0}{b^2} = 1$$

### Ejemplo Resuelto 1

Escribir la ecuación de la elipse con centro en el origen, focos en $(\\pm 3, 0)$ y vértice mayor en $(\\pm 5, 0)$.

$a = 5$, $c = 3$, entonces $b^2 = 25 - 9 = 16$, $b = 4$.

$$\\frac{x^2}{25} + \\frac{y^2}{16} = 1$$

### Ejemplo Resuelto 2

Para la elipse $\\frac{x^2}{36} + \\frac{y^2}{9} = 1$, hallar focos y excentricidad.

$a^2 = 36 \\Rightarrow a = 6$, $b^2 = 9 \\Rightarrow b = 3$.
$c^2 = 36 - 9 = 27$, $c = 3\\sqrt{3}$.

Focos: $(\\pm 3\\sqrt{3}, \\; 0)$. Excentricidad: $e = \\frac{3\\sqrt{3}}{6} = \\frac{\\sqrt{3}}{2} \\approx 0.866$.

### Ejemplo Resuelto 3

Encontrar la ecuación con centro en $(2, -1)$, eje mayor vertical de longitud 10 y eje menor de longitud 6.

$a = 5$, $b = 3$, eje vertical.

$$\\frac{(x-2)^2}{9} + \\frac{(y+1)^2}{25} = 1$$

### Ejemplo Resuelto 4

Verificar que el punto $(3, \\frac{16}{5})$ pertenece a $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$.

$$\\frac{9}{25} + \\frac{256/25}{16} = \\frac{9}{25} + \\frac{16}{25} = \\frac{25}{25} = 1$$

El punto pertenece a la elipse.

### Tabla de Elementos

| Elemento | Fórmula |
|---|---|
| Relación fundamental | $c^2 = a^2 - b^2$ |
| Excentricidad | $e = c/a$ |
| Radio vector | $r_1 = a + ex$ |
| Tangente | $\\frac{xx_0}{a^2} + \\frac{yy_0}{b^2} = 1$ |
| Área | $A = \\pi a b$ |
`,
  "hiperbola-analitica": `
## Hipérbola en el Análisis Cartesiano

### Definición

Una hipérbola es el lugar geométrico de todos los puntos del plano tales que el valor absoluto de la diferencia de sus distancias a dos focos es constante:

$$\\big| |PF_1| - |PF_2| \\big| = 2a$$

Donde $2a$ es la longitud del eje real.

### Elementos de la Hipérbola

- Centro: punto medio entre los focos
- Eje real: segmento de longitud $2a$ que contiene a los focos
- Eje imaginario: segmento de longitud $2b$ perpendicular al eje real
- Focos: puntos fijos $F_1$ y $F_2$ fuera del centro
- Vértices: puntos extremos del eje real
- Asíntotas: rectas que la hipérbola se aproxima indefinidamente
- Excentricidad: $e = c/a > 1$

### Relación Fundamental

$$c^2 = a^2 + b^2$$

A diferencia de la elipse, aquí se suma $a^2 + b^2$.

### Ecuación con Centro en el Origen

Eje real horizontal: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$

Eje real vertical: $\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1$

### Ecuación con Centro en (h, k)

$$\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$$

### Coordenadas de los Focos

Eje horizontal: $F_1(h - c, \\; k)$ y $F_2(h + c, \\; k)$

Eje vertical: $F_1(h, \\; k - c)$ y $F_2(h, \\; k + c)$

### Ecuaciones de las Asíntotas

Eje horizontal: $y - k = \\pm \\frac{b}{a}(x - h)$

Eje vertical: $y - k = \\pm \\frac{a}{b}(x - h)$

Si el centro es el origen, las asíntotas son $y = \\pm \\frac{b}{a}x$.

### Recta Tangente

La ecuación de la tangente a la hipérbola en el punto $P(x_0, y_0)$ es:

$$\\frac{x \\cdot x_0}{a^2} - \\frac{y \\cdot y_0}{b^2} = 1$$

### Radios Vectors

$$r_1 = |ex + a|, \\quad r_2 = |ex - a|$$

Para puntos en la rama derecha: $r_1 = ex + a$ y $r_2 = ex - a$.

### Ejemplo Resuelto 1

Escribir la ecuación de la hipérbola con vértices en $(\\pm 4, 0)$ y focos en $(\\pm 5, 0)$.

$a = 4$, $c = 5$, entonces $b^2 = c^2 - a^2 = 25 - 16 = 9$, $b = 3$.

$$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$$

Asíntotas: $y = \\pm \\frac{3}{4}x$.

### Ejemplo Resuelto 2

Para $\\frac{y^2}{25} - \\frac{x^2}{144} = 1$, hallar focos, vértices y asíntotas.

$a^2 = 25$, $a = 5$; $b^2 = 144$, $b = 12$; $c^2 = 25 + 144 = 169$, $c = 13$.

Vértices: $(0, \\pm 5)$. Focos: $(0, \\pm 13)$. Asíntotas: $y = \\pm \\frac{5}{12}x$.

### Ejemplo Resuelto 3

Determinar si el punto $(5, 3)$ pertenece a $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$.

$$\\frac{25}{16} - \\frac{9}{9} = 1.5625 - 1 = 0.5625 \\neq 1$$

El punto no pertenece a la hipérbola.

### Ejemplo Resuelto 4

Encontrar la ecuación con centro $(1, -2)$, eje real horizontal de longitud 8 y distancia focal 10.

$a = 4$, $c = 5$, $b^2 = 25 - 16 = 9$.

$$\\frac{(x-1)^2}{16} - \\frac{(y+2)^2}{9} = 1$$

### Tabla de Elementos

| Elemento | Fórmula |
|---|---|
| Relación fundamental | $c^2 = a^2 + b^2$ |
| Excentricidad | $e = c/a > 1$ |
| Asíntotas (centro en origen) | $y = \\pm \\frac{b}{a}x$ |
| Tangente | $\\frac{xx_0}{a^2} - \\frac{yy_0}{b^2} = 1$ |
| Área de rectángulo | $4ab$ |
`,
  "parabola-analitica": `
## Parábola en el Análisis Cartesiano

### Definición

Una parábola es el lugar geométrico de todos los puntos del plano que equidistan de un punto fijo llamado foco y de una recta fija llamada directriz:

$$|PF| = |PD|$$

Donde P es un punto de la parábola, F el foco y D la proyección sobre la directriz.

### Elementos de la Parábola

- Vértice: punto medio entre el foco y la directriz
- Foco: punto fijo dentro de la parábola
- Directriz: recta fuera de la parábola
- Eje de simetría: recta que pasa por el foco y es perpendicular a la directriz
- Parámetro $p$: distancia del vértice al foco (y del vértice a la directriz)

### Ecuación con Vértice en el Origen

Eje horizontal (abre a la derecha): $y^2 = 4px$

Eje horizontal (abre a la izquierda): $y^2 = -4px$

Eje vertical (abre hacia arriba): $x^2 = 4py$

Eje vertical (abre hacia abajo): $x^2 = -4py$

### Ecuación con Vértice en (h, k)

Eje horizontal: $(y - k)^2 = 4p(x - h)$

Eje vertical: $(x - h)^2 = 4p(y - k)$

### Coordenadas del Foco y Ecuación de la Directriz

Eje horizontal derecha: $F(h + p, \\; k)$, directriz $x = h - p$

Eje vertical arriba: $F(h, \\; k + p)$, directriz $y = k - p$

### Recta Tangente

La tangente a la parábola $y^2 = 4px$ en el punto $P(x_0, y_0)$ es:

$$y \\cdot y_0 = 2p(x + x_0)$$

Para la parábola $x^2 = 4py$:

$$x \\cdot x_0 = 2p(y + y_0)$$

### Distancia Focal

La distancia de un punto $P(x, y)$ al foco se llama distancia focal y equivale a la distancia a la directriz:

$$d = x + p \\quad \\text{(parábola } y^2 = 4px\\text{)}$$

### Propiedades Importantes

- La parábola tiene un solo eje de simetría
- No tiene centro ni asíntotas
- El diámetro conjugado de un punto P es paralelo al eje
- La subtangente en cualquier punto es bisectada por el vértice

### Ejemplo Resuelto 1

Escribir la ecuación de la parábola con vértice en el origen y foco en $(3, 0)$.

$p = 3$, abre a la derecha.

$$y^2 = 4(3)x = 12x$$

Directriz: $x = -3$.

### Ejemplo Resuelto 2

Encontrar foco, directriz y vértice de $x^2 = -8y$.

$4p = -8$, entonces $p = -2$ (abre hacia abajo).

Vértice: $(0, 0)$. Foco: $(0, -2)$. Directriz: $y = 2$.

### Ejemplo Resuelto 3

Determinar la ecuación con vértice en $(2, -3)$ y foco en $(5, -3)$.

Eje horizontal, $p = 3$, abre a la derecha.

$$(y + 3)^2 = 12(x - 2)$$

Directriz: $x = -1$.

### Ejemplo Resuelto 4

Encontrar la ecuación de la parábola con vértice en $(1, 4)$ y directriz $y = 1$.

Eje vertical, $p = 3$ (foco arriba del vértice).

$$(x - 1)^2 = 12(y - 4)$$

Foco: $(1, 7)$.

### Tabla Comparativa

| Orientación | Ecuación | Foco | Directriz |
|---|---|---|---|
| Derecha | $y^2 = 4px$ | $(p, 0)$ | $x = -p$ |
| Izquierda | $y^2 = -4px$ | $(-p, 0)$ | $x = p$ |
| Arriba | $x^2 = 4py$ | $(0, p)$ | $y = -p$ |
| Abajo | $x^2 = -4py$ | $(0, -p)$ | $y = p$ |
`,
};
