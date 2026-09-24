export const geoStudyGuides3: Record<string, string> = {
"elipse-e-hiperbola": `## Elipse e Hiperbola

### Definición de la Elipse

La elipse es el lugar geométrico de los puntos del plano tales que la suma de sus distancias a dos puntos fijos llamados focos es constante. Esta constante se denomina $2a$, donde $a$ es el semieje mayor. La elipse tiene dos ejes: el eje mayor de longitud $2a$ y el eje menor de longitud $2b$. La relación fundamental entre los ejes y la distancia focal $c$ es:

$$a^2 = b^2 + c^2$$

Donde $c$ es la distancia del centro a cada foco. El excentricidad $e = c/a$ mide la elongación de la elipse, con $0 < e < 1$.

### Ecuación Canónica de la Elipse

Centrada en el origen con eje mayor horizontal:

$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$

Si el eje mayor es vertical, se intercambian $a^2$ y $b^2$ en el denominador. Los vértices se encuentran en $(\\pm a, 0)$ y $(0, \\pm b)$ según la orientación.

### Definición de la Hiperbola

La hiperbola es el lugar geométrico de los puntos tales que la diferencia absoluta de sus distancias a dos focos es constante. Esta constante es $2a$, donde $a$ es la distancia del centro a cada vértice. La relación con el semieje imaginario $b$ es:

$$c^2 = a^2 + b^2$$

La excentricidad $e = c/a > 1$ para la hiperbola. Las asíntotas tienen ecuaciones $y = \\pm(b/a)x$.

### Ecuación Canónica de la Hiperbola

Con transversal horizontal:

$$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$$

Con transversal vertical:

$$\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1$$

Los vértices están en $(\\pm a, 0)$ o $(0, \\pm a)$ respectivamente.

### Ejemplo Resuelto 1: Elipse

Determinar la ecuación de una elipse con focos en $(\\pm 3, 0)$ y semieje menor $b = 4$.

**Solución:** Tenemos $c = 3$ y $b = 4$. Usando $a^2 = b^2 + c^2$:

$$a^2 = 16 + 9 = 25 \\implies a = 5$$

La ecuación es:

$$\\frac{x^2}{25} + \\frac{y^2}{16} = 1$$

Los vértices del eje mayor son $(\\pm 5, 0)$.

### Ejemplo Resuelto 2: Hiperbola

Hallar la ecuación de una hiperbola con vértices en $(\\pm 4, 0)$ y asíntotas $y = \\pm\\frac{3}{4}x$.

**Solución:** Tenemos $a = 4$ y de las asíntotas $b/a = 3/4$, entonces $b = 3$. Verificamos:

$$c^2 = 16 + 9 = 25 \\implies c = 5$$

La ecuación es:

$$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$$

La excentricidad es $e = 5/4 = 1.25$.

### Ejemplo Resuelto 3: Punto en la Elipse

Verificar si el punto $(3, \\frac{16}{5})$ pertenece a la elipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$.

**Solución:** Sustituimos $x = 3$ y $y = 16/5$:

$$\\frac{9}{25} + \\frac{(16/5)^2}{16} = \\frac{9}{25} + \\frac{256/25}{16} = \\frac{9}{25} + \\frac{16}{25} = \\frac{25}{25} = 1$$

El punto satisface la ecuación, por lo tanto pertenece a la elipse.

### Propiedades Fundamentales

La distancia focal de un punto $P$ sobre la elipse a un foco se calcula como $d = a - ex_0$ o $d = a + ex_0$ donde $x_0$ es la coordenada $x$ del punto. Para la hiperbola, las distancias focales son $|a - ex_0|$ y $|a + ex_0|$. El recta directriz tiene ecuación $x = \\pm a/e$.`,

"pitagoras-y-aplicaciones": `## Pitágoras y Aplicaciones

### El Teorema de Pitágoras

En todo triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos. Si los catetos miden $a$ y $b$, y la hipotenusa $c$:

$$a^2 + b^2 = c^2$$

Este teorema es la base de la geometría euclidiana y tiene cientos de aplicaciones en trigonometría, cálculo y ciencias aplicadas.

### Consecuencias Directas

Si un triángulo tiene lados $a$, $b$, $c$ con $c$ el mayor, entonces: es rectángulo si $a^2 + b^2 = c^2$, obtusángulo si $a^2 + b^2 < c^2$, y acutángulo si $a^2 + b^2 > c^2$. Esta prueba se conoce como la prueba del tipo de triángulo.

### Triplos Pitagóricos

Un triple pitagórico son tres enteros positivos $(a, b, c)$ que satisfacen $a^2 + b^2 = c^2$. Los más conocidos son $(3, 4, 5)$, $(5, 12, 13)$ y $(8, 15, 17)$. Si $(a, b, c)$ es triple, entonces $(ka, kb, kc)$ también lo es para cualquier $k > 0$.

### Ejemplo Resuelto 1: Encontrar el lado faltante

Un triángulo rectángulo tiene catetos de longitud 7 y 24. Hallar la hipotenusa.

**Solución:** Aplicamos Pitágoras directamente:

$$c^2 = 7^2 + 24^2 = 49 + 576 = 625$$
$$c = \\sqrt{625} = 25$$

La hipotenusa mide 25 unidades.

### Ejemplo Resuelto 2: Distancia entre dos puntos

Calcular la distancia entre los puntos $A(1, 2)$ y $B(4, 6)$.

**Solución:** La distancia se calcula con la fórmula derivada de Pitágoras:

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
$$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

### Ejemplo Resuelto 3: Altura del triángulo rectángulo

En un triángulo rectángulo con catetos $a = 6$ y $b = 8$, hallar la altura relativa a la hipotenusa.

**Solución:** Primero hallamos la hipotenusa:

$$c = \\sqrt{36 + 64} = \\sqrt{100} = 10$$

El área del triángulo puede calcularse de dos formas:

$$A = \\frac{1}{2} \\cdot a \\cdot b = \\frac{1}{2} \\cdot 6 \\cdot 8 = 24$$

$$A = \\frac{1}{2} \\cdot c \\cdot h \\implies 24 = \\frac{1}{2} \\cdot 10 \\cdot h \\implies h = \\frac{48}{10} = 4.8$$

### Aplicación: Teorema de la Altura

En un triángulo rectángulo, la altura $h$ relativa a la hipotenusa cumple:

$$\\frac{1}{h^2} = \\frac{1}{a^2} + \\frac{1}{b^2}$$

También: $h^2 = p \\cdot q$ donde $p$ y $q$ son los segmentos en que la altura divide la hipotenusa.

### Aplicación: Medianas y Pitágoras

En un triángulo rectángulo, la mediana relativa a la hipotenusa es igual a la mitad de la hipotenusa:

$$m_c = \\frac{c}{2}$$

Esto se demuestra notando que el punto medio de la hipotenusa es equidistante de los tres vértices del triángulo rectángulo.

### Aplicación en Coordenadas

El teorema de Pitágoras permite definir la métrica euclidiana. La distancia entre dos puntos $(x_1, y_1)$ y $(x_2, y_2)$ es la longitud del segmento que los une, calculada mediante la diferencia en cada coordenada. Esta métrica se extiende a tres dimensiones con $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$.`,

"teorema-de-tales": `## Teorema de Tales

### Enunciado del Teorema

Si se trazan rectas paralelas que cortan a dos transversales, entonces los segmentos determinados sobre una transversal son proporcionales a los segmentos correspondientes sobre la otra. Si las rectas $L_1 \\parallel L_2 \\parallel L_3$ cortan a la transversal $T_1$ en $A$, $B$, $C$ y a la transversal $T_2$ en $D$, $E$, $F$, entonces:

$$\\frac{AB}{BC} = \\frac{DE}{EF}$$

### Casos Especiales del Teorema

**Caso del triángulo:** Si una recta paralela a un lado de un triángulo corta a los otros dos lados, crea un triángulo semejante al original. En el triángulo $ABC$ con $DE \\parallel BC$ donde $D$ está en $AB$ y $E$ en $AC$:

$$\\frac{AD}{DB} = \\frac{AE}{EC}$$

**Caso del haz de rectas concurrentes:** Las rectas concurrentes que interceptan paralelas generan segmentos proporcionales.

### Proporcionalidad Directa

El teorema establece que hay proporcionalidad directa entre los segmentos. Si $AB = k \\cdot BC$, entonces $DE = k \\cdot EF$. La constante de proporcionalidad se mantiene entre ambas transversales.

### Ejemplo Resuelto 1: Triángulo con paralela

En el triángulo $ABC$, el punto $D$ está en $AB$ tal que $AD = 4$ y $DB = 6$. Si $DE \\parallel BC$ con $E$ en $AC$, y $AC = 15$, hallar $AE$.

**Solución:** Por el teorema de Tales:

$$\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{4}{6} = \\frac{AE}{15 - AE}$$

$$4(15 - AE) = 6AE \\implies 60 - 4AE = 6AE \\implies 10AE = 60$$
$$AE = 6$$

### Ejemplo Resuelto 2: Rectas paralelas

Tres rectas paralelas cortan a una transversal en puntos que determinan segmentos de 3 cm y 5 cm. Si la otra transversal intercepta un segmento de 9 cm correspondiente al primero, hallar el segundo segmento.

**Solución:** Por proporcionalidad:

$$\\frac{3}{5} = \\frac{9}{x} \\implies 3x = 45 \\implies x = 15 \\text{ cm}$$

### Ejemplo Resuelto 3: Bisectriz y Tales

En el triángulo $ABC$, la bisectriz del ángulo $A$ corta a $BC$ en $D$. Si $AB = 8$, $AC = 12$ y $BC = 10$, hallar $BD$ y $DC$.

**Solución:** Por el teorema de la bisectriz (consecuencia de Tales):

$$\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{8}{12} = \\frac{2}{3}$$

Como $BD + DC = 10$:

$$BD = \\frac{2}{5} \\cdot 10 = 4, \\quad DC = \\frac{3}{5} \\cdot 10 = 6$$

### Recta que une puntos medios

Un caso importante es cuando la recta une los puntos medios de dos lados de un triángulo. Esta recta es paralela al tercer lado y mide exactamente la mitad:

$$DE = \\frac{1}{2} BC$$

Este resultado se conoce como el segmento que une puntos medios.

### Aplicación en Coordenadas

Si $A(x_1, y_1)$ y $B(x_2, y_2)$, el punto $P$ que divide al segmento $AB$ en razón $m:n$ tiene coordenadas:

$$P = \\left(\\frac{mx_2 + nx_1}{m+n}, \\frac{my_2 + ny_1}{m+n}\\right)$$

Esta fórmula es una consecuencia directa del teorema de Tales aplicado a los ejes coordenados.`,

"semejanza-avanzada": `## Semejanza Avanzada

### Criterios de Semejanza

Dos triángulos son semejantes si cumplen al menos uno de los siguientes criterios:

**AAA (ángulo-ángulo-ángulo):** Si tres ángulos de un triángulo son iguales a tres ángulos de otro, los triángulos son semejantes. Basta con dos ángulos iguales (AA) ya que el tercero queda determinado.

**LAL (lado-ángulo-lado):** Si dos lados de un triángulo son proporcionales a dos lados de otro y los ángulos comprendidos son iguales.

**LLL (lado-lado-lado):** Si los tres lados de un triángulo son proporcionales a los tres lados de otro.

### Razón de Semejanza

Si los triángulos $ABC$ y $A'B'C'$ son semejantes con razón $k$, entonces:

$$\\frac{A'B'}{AB} = \\frac{B'C'}{BC} = \\frac{A'C'}{AC} = k$$

La razón de áreas es el cuadrado de la razón de semejanza:

$$\\frac{\\text{Área}(A'B'C')}{\\text{Área}(ABC)} = k^2$$

### Propiedades de Figuras Semejantes

Las alturas, medianas, bisectrices y radios de circunferencia son proporcionales con la misma razón $k$. Si la razón de semejanza es $k$, entonces las longitudes se multiplican por $k$, las áreas por $k^2$ y los volúmenes por $k^3$.

### Ejemplo Resuelto 1: Triángulos semejantes

Los triángulos $ABC$ y $DEF$ tienen $\\angle A = \\angle D = 50°$, $\\angle B = \\angle E = 60°$ y $AB = 6$, $DE = 9$. Hallar la razón de semejanza y las áreas si $\\text{Área}(ABC) = 12$.

**Solución:** La razón de semejanza es:

$$k = \\frac{DE}{AB} = \\frac{9}{6} = 1.5$$

La razón de áreas es $k^2 = 2.25$:

$$\\text{Área}(DEF) = 2.25 \\times 12 = 27$$

### Ejemplo Resuelto 2: Aplicación del criterio LAL

En los triángulos $ABC$ y $PQR$, $AB/PQ = AC/PR = 3/4$ y $\\angle A = \\angle P = 70°$. Si $BC = 10$, hallar $QR$.

**Solución:** Por el criterio LAL, los triángulos son semejantes con razón $k = 3/4$:

$$\\frac{BC}{QR} = \\frac{3}{4} \\implies \\frac{10}{QR} = \\frac{3}{4} \\implies QR = \\frac{40}{3} \\approx 13.33$$

### Ejemplo Resuelto 3: Semejanza en trapecios

En un trapecio $ABCD$ con $AB \\parallel CD$, las diagonales se cortan en $O$. Demostrar que $\\triangle AOB \\sim \\triangle COD$.

**Solución:** Como $AB \\parallel CD$, los ángulos alternos internos son iguales: $\\angle OAB = \\angle OCD$ y $\\angle OBA = \\angle ODC$. Por el criterio AA, los triángulos son semejantes. La razón es:

$$\\frac{AO}{CO} = \\frac{BO}{DO} = \\frac{AB}{CD}$$

### Triángulo Semejante al Original

Cuando un triángulo tiene una paralela a un lado, genera un triángulo semejante al original. Si $DE \\parallel BC$ con $D$ en $AB$ y $E$ en $AC$, entonces $\\triangle ADE \\sim \\triangle ABC$ con razón:

$$k = \\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}$$

### Semejanza y Cocientes Trigonométricos

En un triángulo rectángulo, las razones trigonométricas se definen por la semejanza. Los catetos opuesto y adyacente a un ángulo determinado son proporcionales en todos los triángulos rectángulos con ese mismo ángulo, lo que fundamenta las funciones seno, coseno y tangente.`,

"criterios-de-congruencia": `## Criterios de Congruencia

### Definición de Congruencia

Dos triángulos son congruentes si tienen la misma forma y el mismo tamaño. Esto significa que todos sus lados correspondientes son iguales y todos sus ángulos correspondientes son iguales. La congruencia se denota como $\\triangle ABC \\cong \\triangle DEF$.

### Criterio LLL (Lado-Lado-Lado)

Si los tres lados de un triángulo son iguales a los tres lados de otro triángulo, entonces los triángulos son congruentes. Este es el criterio más básico y se verifica midiendo los tres lados de cada triángulo.

### Criterio LAL (Lado-Ángulo-Lado)

Si dos lados y el ángulo comprendido entre ellos de un triángulo son iguales a los elementos correspondientes de otro, los triángulos son congruentes. Es fundamental que el ángulo esté comprendido entre los dos lados dados.

### Criterio ALA (Ángulo-Lado-Ángulo)

Si dos ángulos y el lado comprendido entre ellos de un triángulo son iguales a los elementos correspondientes de otro, los triángulos son congruentes. Equivalente a AAA加上un lado.

### Criterio AAL (Ángulo-Ángulo-Lado)

Si dos ángulos y un lado no comprendido entre ellos son iguales a los correspondientes de otro triángulo, los triángulos son congruentes. El lado puede ser cualquiera de los dos no comprendidos.

### Ejemplo Resuelto 1: Criterio LLL

Los triángulos $ABC$ y $DEF$ tienen $AB = DE = 5$, $BC = EF = 7$ y $AC = DF = 8$. Demostrar que son congruentes.

**Solución:** Por el criterio LLL, como los tres lados del primer triángulo son iguales a los tres lados del segundo:

$$AB = DE = 5, \\quad BC = EF = 7, \\quad AC = DF = 8$$

Los triángulos son congruentes: $\\triangle ABC \\cong \\triangle DEF$.

### Ejemplo Resuelto 2: Criterio LAL

En los triángulos $ABC$ y $PQR$, $AB = PQ = 6$, $AC = PR = 9$ y $\\angle A = \\angle P = 45°$. Verificar la congruencia.

**Solución:** Tenemos dos lados iguales y el ángulo comprendido entre ellos también igual. Por el criterio LAL:

$$\\triangle ABC \\cong \\triangle PQR$$

Como consecuencia, $BC = QR$ y todos los ángulos restantes son iguales.

### Ejemplo Resuelto 3: Criterio AAL

En $\\triangle ABC$, $\\angle A = 50°$, $\\angle B = 70°$ y $BC = 8$. En $\\triangle DEF$, $\\angle D = 50°$, $\\angle F = 60°$ y $EF = 8$. ¿Son congruentes?

**Solución:** Primero calculamos el ángulo faltante en cada triángulo:

$$\\angle C = 180° - 50° - 70° = 60°$$
$$\\angle E = 180° - 50° - 60° = 70°$$

Tenemos: $\\angle A = \\angle D$, $\\angle B = \\angle E$ y $BC = EF$ (lado opuesto al ángulo $A$ y $D$). Por AAL, los triángulos son congruentes.

### Caso No Válido: AAA

El criterio AAA (tres ángulos iguales) no garantiza congruencia, solo semejanza. Dos triángulos pueden tener los mismos ángulos pero diferentes tamaños. Sin embargo, si junto con AAA se conoce un lado, entonces los triángulos son congruentes.

### Caso No Válido: ASS

El criterio ASS (dos lados y un ángulo no comprendido) no es válido en general. Puede producir dos triángulos distintos, el caso ambiguo de la ley de senos. Solo funciona cuando el ángulo dado es recto (criterio de hipotenusa-cateto) o cuando el lado opuesto al ángulo es mayor que el lado adyacente.

### Congruencia de Triángulos Rectángulos

Para triángulos rectángulos existen criterios especiales: el criterio de hipotenusa-cateto (HL) establece que si la hipotenusa y un cateto de un triángulo rectángulo son iguales a los de otro, los triángulos son congruentes. Este es un caso especial del criterio ASS que funciona porque el ángulo es de 90°.`,

"area-triangulos-avanzado": `## Área de Triángulos Avanzado

### Fórmula General del Área

El área de un triángulo con base $b$ y altura $h$ correspondiente es:

$$A = \\frac{1}{2} \\cdot b \\cdot h$$

La altura es la distancia perpendicular del vértice opuesto a la línea que contiene la base.

### Fórmula de Herón

Si se conocen los tres lados $a$, $b$, $c$ de un triángulo, el semiperímetro es $s = \\frac{a+b+c}{2}$ y el área es:

$$A = \\sqrt{s(s-a)(s-b)(s-c)}$$

Esta fórmula es especialmente útil cuando no se conoce la altura.

### Área con Dos Lados y el Ángulo Comprendido

Si se conocen dos lados $a$, $b$ y el ángulo comprendido $C$ entre ellos:

$$A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$$

Esta fórmula se deriva de la definición de seno en el triángulo.

### Área en Coordenadas

Dado un triángulo con vértices $A(x_1, y_1)$, $B(x_2, y_2)$, $C(x_3, y_3)$:

$$A = \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$

También se puede expresar con el determinante:

$$A = \\frac{1}{2} \\left| \\begin{array}{ccc} x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\\\ x_3 & y_3 & 1 \\end{array} \\right|$$

### Ejemplo Resuelto 1: Fórmula de Herón

Calcular el área de un triángulo con lados $a = 5$, $b = 6$, $c = 7$.

**Solución:** Calculamos el semiperímetro:

$$s = \\frac{5 + 6 + 7}{2} = 9$$

Aplicamos la fórmula de Herón:

$$A = \\sqrt{9(9-5)(9-6)(9-7)} = \\sqrt{9 \\cdot 4 \\cdot 3 \\cdot 2} = \\sqrt{216} = 6\\sqrt{6} \\approx 14.7$$

### Ejemplo Resuelto 2: Dos lados y ángulo

Un triángulo tiene lados de 8 cm y 12 cm con un ángulo de 30° entre ellos. Hallar el área.

**Solución:** Aplicamos la fórmula:

$$A = \\frac{1}{2} \\cdot 8 \\cdot 12 \\cdot \\sin 30° = \\frac{1}{2} \\cdot 8 \\cdot 12 \\cdot \\frac{1}{2} = 24 \\text{ cm}^2$$

### Ejemplo Resuelto 3: Área en coordenadas

Hallar el área del triángulo con vértices $A(1, 1)$, $B(4, 1)$, $C(2, 5)$.

**Solución:** Aplicamos la fórmula del determinante:

$$A = \\frac{1}{2} |1(1-5) + 4(5-1) + 2(1-1)|$$
$$A = \\frac{1}{2} |-4 + 16 + 0| = \\frac{1}{2} |12| = 6$$

### Relación entre Áreas y Semejanza

Si dos triángulos son semejantes con razón $k$, la razón de sus áreas es $k^2$. Si $\\triangle ABC \\sim \\triangle DEF$ con $k = DE/AB$, entonces:

$$\\frac{\\text{Área}(DEF)}{\\text{Área}(ABC)} = k^2$$

### Área y Bisectrices

La bisectriz de un ángulo de un triángulo divide al lado opuesto en segmentos proporcionales a los lados adyacentes. Si la bisectriz del ángulo $A$ corta a $BC$ en $D$:

$$\\frac{BD}{DC} = \\frac{AB}{AC}$$

Los triángulos $ABD$ y $ACD$ tienen la misma altura respecto a $BC$, por lo que sus áreas son proporcionales a $BD$ y $DC$.

### Máxima Área de un Triángulo

Para un triángulo con dos lados dados $a$ y $b$, el área es máxima cuando el ángulo comprendido es de 90°. Esto se deduce de $A = \\frac{1}{2}ab\\sin C$ ya que $\sin C$ alcanza su máximo值en $C = 90°$.`,

"circunferencia-circunscrita-inscrita": `## Circunferencia Circunscrita e Inscrita

### Circunferencia Circunscrita

La circunferencia circunscrita de un triángulo es la circunferencia que pasa por los tres vértices del triángulo. Su centro, llamado circuncentro, es el punto de intersección de los tres mediatrices de los lados del triángulo.

### Radio de la Circunferencia Circunscrita

El radio $R$ de la circunferencia circunscrita de un triángulo con lados $a$, $b$, $c$ y área $A$ se calcula con la fórmula:

$$R = \\frac{abc}{4A}$$

También, usando la ley de senos: $R = \\frac{a}{2\\sin A} = \\frac{b}{2\\sin B} = \\frac{c}{2\\sin C}$.

### Ubicación del Circuncentro

En un triángulo acutángulo, el circuncentro está dentro del triángulo. En un triángulo rectángulo, está en el punto medio de la hipotenusa. En un triángulo obtusángulo, está fuera del triángulo.

### Circunferencia Inscrita

La circunferencia inscrita es la circunferencia que es tangente a los tres lados del triángulo. Su centro, el incentro, es el punto de intersección de las tres bisectrices de los ángulos del triángulo.

### Radio de la Circunferencia Inscrita

El radio $r$ de la circunferencia inscrita se calcula con:

$$r = \\frac{A}{s}$$

Donde $A$ es el área del triángulo y $s$ es el semiperímetro $s = \\frac{a+b+c}{2}$.

### Ejemplo Resuelto 1: Circunferencia circunscrita

Hallar el radio de la circunferencia circunscrita de un triángulo con lados $a = 6$, $b = 8$, $c = 10$.

**Solución:** Primero calculamos el semiperímetro y el área:

$$s = \\frac{6+8+10}{2} = 12$$

$$A = \\sqrt{12(12-6)(12-8)(12-10)} = \\sqrt{12 \\cdot 6 \\cdot 4 \\cdot 2} = \\sqrt{576} = 24$$

Aplicamos la fórmula del radio circunscrito:

$$R = \\frac{6 \\cdot 8 \\cdot 10}{4 \\cdot 24} = \\frac{480}{96} = 5$$

### Ejemplo Resuelto 2: Circunferencia inscrita

Calcular el radio de la circunferencia inscrita de un triángulo con lados $a = 5$, $b = 12$, $c = 13$.

**Solución:** Calculamos el semiperímetro y el área:

$$s = \\frac{5+12+13}{2} = 15$$

Como el triángulo es rectángulo ($5^2 + 12^2 = 13^2$):

$$A = \\frac{1}{2} \\cdot 5 \\cdot 12 = 30$$

El radio inscrito es:

$$r = \\frac{30}{15} = 2$$

### Ejemplo Resuelto 3: Relación entre radios

En un triángulo equilátero de lado $a$, hallar los radios circunscrito e inscrito.

**Solución:** Para un triángulo equilátero, el área es:

$$A = \\frac{a^2\\sqrt{3}}{4}$$

El semiperímetro es $s = 3a/2$. El radio circunscrito:

$$R = \\frac{a^3}{4 \\cdot \\frac{a^2\\sqrt{3}}{4}} = \\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3}$$

El radio inscrito:

$$r = \\frac{\\frac{a^2\\sqrt{3}}{4}}{\\frac{3a}{2}} = \\frac{a\\sqrt{3}}{6}$$

Se verifica que $R = 2r$ para el triángulo equilátero.

### Relaciones Fundamentales

El incentro siempre está dentro del triángulo. La distancia del circuncentro a cada vértice es $R$. Los puntos de tangencia de la circunferencia inscrita con los lados determinan segmentos iguales desde cada vértice: si los lados son $a$, $b$, $c$, los segmentos son $s-a$, $s-b$, $s-c$.`,

"potencia-de-un-punto": `## Potencia de un Punto

### Definición de Potencia

Sea una circunferencia $\\Gamma$ con centro $O$ y radio $r$, y sea $P$ un punto cualquiera del plano. La potencia del punto $P$ respecto a la circunferencia se define como:

$$\\text{pot}(P) = OP^2 - r^2$$

Si $P$ está fuera de la circunferencia, la potencia es positiva. Si $P$ está sobre la circunferencia, la potencia es cero. Si $P$ está dentro, la potencia es negativa.

### Recta Secante

Si una recta que pasa por $P$ corta a la circunferencia en los puntos $A$ y $B$, entonces:

$$\\text{pot}(P) = PA \\cdot PB$$

Para una recta secante externa, $PA$ y $PB$ son las distancias de $P$ a los puntos de intersección, ambas medidas en la misma dirección.

### Recta Tangente

Si $PT$ es un segmento tangente desde $P$ hasta la circunferencia (con $T$ el punto de tangencia):

$$\\text{pot}(P) = PT^2$$

Esto se obtiene de la fórmula de la secante cuando los dos puntos de intersección coinciden.

### Teorema de la Potencia

Para dos circunferencias que se cortan, los puntos de intersección determinan rectas con la misma potencia respecto a ambas circunferencias. El eje radical es el lugar geométrico de los puntos con igual potencia respecto a dos circunferencias.

### Ejemplo Resuelto 1: Recta secante

Desde un punto $P$ exterior a una circunferencia de radio $r = 5$, se traza una secante que corta a la circunferencia en $A$ y $B$ tal que $PA = 3$ y $PB = 12$. Verificar la potencia.

**Solución:** La potencia es:

$$\\text{pot}(P) = PA \\cdot PB = 3 \\cdot 12 = 36$$

Verificamos con la fórmula $OP^2 - r^2$: necesitamos la distancia $OP$.

### Ejemplo Resuelto 2: Tangente y secante

Un punto $P$ está a 13 cm del centro de una circunferencia de radio 5 cm. Calcular la longitud de la tangente desde $P$.

**Solución:** La potencia del punto es:

$$\\text{pot}(P) = OP^2 - r^2 = 13^2 - 5^2 = 169 - 25 = 144$$

La longitud de la tangente es:

$$PT = \\sqrt{\\text{pot}(P)} = \\sqrt{144} = 12 \\text{ cm}$$

### Ejemplo Resuelto 3: Dos secantes

Desde un punto $P$ exterior, se trazan dos secantes a una circunferencia. La primera corta en $A$ y $B$ con $PA = 4$, $PB = 12$. La segunda corta en $C$ y $D$ con $PC = 3$. Hallar $PD$.

**Solución:** Por el teorema de la potencia, ambas secantes tienen la misma potencia:

$$PA \\cdot PB = PC \\cdot PD$$
$$4 \\cdot 12 = 3 \\cdot PD \\implies PD = \\frac{48}{3} = 16$$

### Potencia y Coordenadas

Si la circunferencia tiene ecuación $(x-a)^2 + (y-b)^2 = r^2$ y el punto es $P(x_0, y_0)$, la potencia es:

$$\\text{pot}(P) = (x_0-a)^2 + (y_0-b)^2 - r^2$$

Esto se obtiene sustituyendo las coordenadas de $P$ en la ecuación de la circunferencia.

### Aplicación: Eje Radical

Dados dos circunferencias $\\Gamma_1$ y $\\Gamma_2$, el eje radical es la recta formada por todos los puntos con igual potencia respecto a ambas circunferencias. Si las circunferencias se cortan, el eje radical es la recta que pasa por sus puntos de intersección. Si no se cortan, es una recta perpendicular a la línea de centros.

### Recta Tangente Común

Cuando se trazan tangentes desde un punto exterior a dos circunferencias, los puntos de tangencia determinan rectas que están relacionadas por la potencia. Las tangentes comunes externas se encuentran en el eje radical, y su longitud se calcula mediante las potencias respectivas.`
};
