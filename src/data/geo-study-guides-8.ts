export const geoStudyGuides8: Record<string, string> = {
  "angulos-en-el-espacio": `## Ángulos en el Espacio

### Definición y tipos de ángulos

Un ángulo en el espacio tridimensional se forma por la intersección de dos semirrectas que comparten un vértice común. A diferencia de los planos, los ángulos espaciales pueden medirse entre rectas que no están en el mismo plano, lo que los clasifica en varias categorías fundamentales.

Los ángulos rectos miden exactamente 90°, los agudos están entre 0° y 90°, y los obtusos entre 90° y 180°. Los llanos son aquellos cuyos lados están en un mismo plano, mientras que los diedros son los formados por dos planos que se intersectan en una recta llamada arista.

### Ángulos entre rectas en el espacio

Para calcular el ángulo \\(\\theta\\) entre dos rectas directionales \\(\\vec{u}\\) y \\(\\vec{v}\\), se utiliza el producto escalar:

\\[\\cos\\theta = \\frac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{u}| \\cdot |\\vec{v}|}\\]

El valor absoluto garantiza que el ángulo resultante siempre sea agudo o recto. Si \\(\\vec{u} = (a_1, b_1, c_1)\\) y \\(\\vec{v} = (a_2, b_2, c_2)\\), entonces \\(\\vec{u} \\cdot \\vec{v} = a_1a_2 + b_1b_2 + c_1c_2\\).

### Ángulo entre recta y plano

Cuando una recta con vector director \\(\\vec{u}\\) corta a un plano con vector normal \\(\\vec{n}\\), el ángulo \\(\\alpha\\) entre ellos se obtiene mediante:

\\[\\sin\\alpha = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}\\]

Este resultado se deriva del complemento del ángulo que forma la recta con la normal al plano. Es importante distinguir este caso del anterior: aquí aparece el seno en lugar del coseno.

### Ángulo diedro

El ángulo diedro entre dos planos con vectores normales \\(\\vec{n_1}\\) y \\(\\vec{n_2}\\) se calcula como:

\\[\\cos\\phi = \\frac{\\vec{n_1} \\cdot \\vec{n_2}}{|\\vec{n_1}| \\cdot |\\vec{n_2}|}\\]

Para medir el ángulo interior de un diedro, se puede trazar un plano perpendicular a la arista que intersecte ambos planos, formando un ángulo plano cuya medición es el diedro.

### Ejemplo resuelto

Sean las rectas \\(r: \\frac{x-1}{2} = \\frac{y}{3} = \\frac{z+1}{1}\\) y \\(s: \\frac{x}{1} = \\frac{y-2}{-1} = \\frac{z}{4}\\). Sus vectores directores son \\(\\vec{u} = (2,3,1)\\) y \\(\\vec{v} = (1,-1,4)\\).

Calculamos \\(\\vec{u} \\cdot \\vec{v} = 2(1) + 3(-1) + 1(4) = 3\\).

Las magnitudes son \\(|\\vec{u}| = \\sqrt{4+9+1} = \\sqrt{14}\\) y \\(|\\vec{v}| = \\sqrt{1+1+16} = 3\\sqrt{2}\\).

Entonces \\(\\cos\\theta = \\frac{|3|}{\\sqrt{14} \\cdot 3\\sqrt{2}} = \\frac{3}{3\\sqrt{28}} = \\frac{1}{2\\sqrt{7}}\\), por lo que \\(\\theta = \\arccos\\left(\\frac{1}{2\\sqrt{7}}\\right) \\approx 67.8°\\).`,

  "teorema-ptolomeo": `## Teorema de Ptolomeo

### Enunciado del teorema

El teorema de Ptolomeo establece que para todo cuadrilátero cíclico inscrito en una circunferencia, el producto de las longitudes de sus diagonales es igual a la suma de los productos de las longitudes de los lados opuestos. Si \\(ABCD\\) es un cuadrilátero inscrito, entonces:

\\[AC \\cdot BD = AB \\cdot CD + BC \\cdot AD\\]

Este resultado fue enunciado por el matemático griego Claudio Ptolomeo en su obra Almagesto, y constituye una de las herramientas más poderosas en geometría euclidiana para resolver problemas de Longitudes en figuras circunscritas.

### Demostración mediante triángulos semejantes

La demostración clásica construye un punto \\(E\\) sobre la diagonal \\(AC\\) tal que \\(\\angle ABE = \\angle DBC\\). Como los ángulos inscritos que subtienden el mismo arco son iguales, \\(\\angle BAE = \\angle BDC\\) (ambos subtienden el arco \\(BC\\)).

Esto implica que \\(\\triangle ABE \\sim \\(\\triangle DBC\\) por ángulo-ángulo, de donde se obtiene \\(\\frac{AB}{DB} = \\{AE}{DC}\\), es decir, \\(AB \\cdot DC = DB \\cdot AE\\).

De manera análoga, se demuestra que \\(\\triangle ABD \\sim \\triangle EBC\\), lo que entrega \\(\\frac{AD}{EC} = \\frac{BD}{BC}\\), y por lo tanto \\(AD \\cdot BC = BD \\cdot EC\\).

### Casos especiales

**Paralelogramo inscrito:** Todo paralelogramo inscrito es un rectángulo. Si \\(AB = CD\\) y \\(BC = AD\\), la fórmula se reduce a \\(AC^2 = 2(AB^2 + BC^2)\\), que es el teorema de Pitágoras generalizado.

**Casos degenerados:** Cuando \\(B\\) y \\(C\\) coinciden, el teorema reduce a una identidad trivial. Cuando \\(D\\) se aproxima a \\(A\\), se obtiene el teorema de la cuerda, útil en problemas de Longitudes de arcos.

**Desigualdad de Ptolomeo:** Para cualquier cuadrilátero no cíclico se cumple \\(AC \\cdot BD \\leq AB \\cdot CD + BC \\cdot AD\\), con igualdad si y solo si el cuadrilátero es cíclico.

### Ejemplo resuelto

Consideremos un rectángulo inscrito en una circunferencia de radio \\(R = 5\\) con lados \\(AB = 6\\) y \\(BC = 8\\). Sus diagonales miden \\(AC = BD = \\sqrt{6^2 + 8^2} = 10\\), lo cual es consistente con ser diámetros.

Aplicando Ptolomeo: \\(AC \\cdot BD = 10 \\cdot 10 = 100\\).

El lado derecho es \\(AB \\cdot CD + BC \\cdot AD = 6 \\cdot 6 + 8 \\cdot 8 = 36 + 64 = 100\\).

Ambos miembros coinciden, verificando el teorema. Para un caso no trivial, considérese un trapecio isósceles inscrito con bases \\(AB = 2\\) y \\(CD = 6\\) y lados \\(BC = AD = 4\\). Se calcula \\(AC = BD = \\sqrt{4^2 - 2^2 + 6^2} = \\sqrt{28}\\), y Ptolomeo da \\(28 = 2 \\cdot 6 + 4 \\cdot 4 = 12 + 16 = 28\\).`,

  "teorema-stewart": `## Teorema de Stewart

### Enunciado del teorema

El teorema de Stewart relaciona las longitudes de los lados de un triángulo con la longitud de un ceviano. Sea \\(ABC\\) un triángulo y \\(D\\) un punto sobre el lado \\(BC\\) tal que \\(BD = m\\), \\(DC = n\\) y \\(AD = d\\). Entonces:

\\[b^2m + c^2n = a(d^2 + mn)\\]

donde \\(a = BC\\), \\(b = AC\\) y \\(c = AB\\). Esta fórmula permite calcular la longitud de cualquier ceviano conocidos los lados del triángulo y la posición del pie del ceviano sobre el lado opuesto.

### Demostración mediante la ley de cosinos

Aplicamos la ley de cosinos en \\(\\triangle ABD\\): \\(c^2 = d^2 + m^2 - 2dm\\cos\\angle ADB\\). En \\(\\triangle ADC\\): \\(b^2 = d^2 + n^2 + 2dn\\cos\\angle ADB\\) (ya que \\(\\angle ADC = 180° - \\angle ADB\\)).

Multiplicando la primera ecuación por \\(n\\) y la segunda por \\(m\\):
\\[c^2n = nd^2 + nm^2 - 2dmn\\cos\\angle ADB\\]
\\[b^2m = md^2 + mn^2 + 2dmn\\cos\\angle ADB\\]

Sumando ambas ecuaciones, los términos con \\(\\cos\\angle ADB\\) se cancelan:
\\[b^2m + c^2n = d^2(m + n) + mn(m + n) = (m+n)(d^2 + mn)\\]

Como \\(m + n = a\\), se obtiene el resultado.

### Casos especiales importantes

**Mediana:** Cuando \\(D\\) es el punto medio de \\(BC\\), \\(m = n = \\frac{a}{2}\\). La fórmula se reduce a \\(b^2 + c^2 = 2(m_a^2 + \\frac{a^2}{4})\\), que es el teorema de Apolonio.

**Bisectriz:** Si \\(AD\\) es la bisectriz interior, \\(\\frac{m}{n} = \\frac{c}{b}\\). Sustituyendo en Stewart y usando \\(m = \\frac{ac}{b+c}\\), \\(n = \\frac{ab}{b+c}\\), se obtiene \\(l_a = \\frac{2bc}{b+c}\\cos\\frac{A}{2}\\).

**Altura:** Cuando \\(AD\\) es la altura, \\(d = h_a\\) y \\(\\cos\\angle ADB = 0\\), lo que entrega \\(h_a^2 = c^2 - m^2 = b^2 - n^2\\), consistente con el teorema de Pitágoras en los triángulos rectángulos resultantes.

### Ejemplo resuelto

En \\(\\triangle ABC\\), \\(AB = 5\\), \\(AC = 7\\), \\(BC = 8\\), y \\(D\\) es un punto sobre \\(BC\\) con \\(BD = 3\\) y \\(DC = 5\\). Calculemos \\(AD = d\\).

Aplicando Stewart: \\(7^2 \\cdot 3 + 5^2 \\cdot 5 = 8(d^2 + 3 \\cdot 5)\\).

\\[147 + 125 = 8(d^2 + 15)\\]
\\[272 = 8d^2 + 120\\]
\\[8d^2 = 152\\]
\\[d^2 = 19\\]
\\[d = \\sqrt{19} \\approx 4.36\\]

Podemos verificar: \\(\\cos B = \\frac{5^2 + 8^2 - 7^2}{2 \\cdot 5 \\cdot 8} = \\frac{40}{80} = 0.5\\), luego en \\(\\triangle ABD\\): \\(AD^2 = 25 + 9 - 30(0.5) = 19\\), confirmando el resultado.`,

  "circunferencia-nueve-puntos": `## Circunferencia de los Nueve Puntos

### Definición y los nueve puntos

La circunferencia de los nueve puntos, también llamada circunferencia de Euler o de Feuerbach, es una circunferencia notable que pasa por nueve puntos especialmente significativos de cualquier triángulo. Estos puntos son: los tres puntos medios de los lados, los tres pies de las alturas, y los tres puntos medios de los segmentos que unen los vértices con el ortocentro.

Si \\(M_a, M_b, M_c\\) son los puntos medios, \\(H_a, H_b, H_c\\) los pies de las alturas, y \\(P_a, P_b, P_c\\) los puntos medios de \\(AH, BH, CH\\) (donde \\(H\\) es el ortocentro), entonces todos ellos están concíclicos.

### Centro y radio

El centro de la circunferencia de los nueve puntos, llamado \\(N\\), es el punto medio del segmento que une el circuncentro \\(O\\) y el ortocentro \\(H\\). En el sistema de coordenadas baricéntricas, \\(N\\) tiene coordenadas \\(\\left(\\frac{a^2(b^2+c^2-a^2)}{2S}, \\frac{b^2(c^2+a^2-b^2)}{2S}, \\frac{c^2(a^2+b^2-c^2)}{2S}\\right)\\) donde \\(S\\) es el doble del área del triángulo.

El radio de la circunferencia de los nueve puntos es exactamente la mitad del radio de la circunferencia circunscrita: \\(R_N = \\frac{R}{2}\\). Esta relación se demuestra observando que la homotecia de centro \\(H\\) y razón \\(\\frac{1}{2}\\) transforma la circunferencia circunscrita en la de los nueve puntos.

### Relación con la línea de Euler

Los cuatro centros notables \\(O, G, H, N\\) están alineados en la recta de Euler. Se cumple que \\(OG : GH = 1 : 2\\) (división de Euler) y \\(ON = NH = \\frac{OH}{2}\\). Además, \\(G\\) divide a \\(OH\\) en razón \\(1:2\\) desde \\(O\\), y \\(N\\) es el punto medio de \\(OH\\).

La distancia entre el circuncentro y el ortocentro se calcula como:
\\[OH^2 = 9R^2 - (a^2 + b^2 + c^2)\\]

### Teorema de Feuerbach

Uno de los resultados más notables sobre esta circunferencia es el teorema de Feuerbach: la circunferencia de los nueve puntos es tangente internamente a la circunferencia inscrita del triángulo, y tangente externamente a las tres circunferencias exinscritas. Esta tangencia ocurre en los llamados puntos de Feuerbach.

### Ejemplo resuelto

Consideremos \\(\\triangle ABC\\) con \\(A(0,6)\\), \\(B(-4,0)\\) y \\(C(8,0)\\).

Lados: \\(a = 12\\), \\(b = \\sqrt{64+36} = 10\\), \\(c = \\sqrt{16+36} = \\sqrt{52}\\).

Puntos medios: \\(M_a(2,0)\\), \\(M_b(4,3)\\), \\(M_c(-2,3)\\).

Ortocentro: \\(H(0, \\frac{16}{3})\\), Circuncentro: \\(O(2, \\frac{4}{3})\\).

Centro de los nueve puntos: \\(N = \\left(\\frac{0+2}{2}, \\frac{\\frac{16}{3}+\\frac{4}{3}}{2}\\right) = (2, \\frac{10}{3})\\).

Radio circunscrita: \\(R = \\frac{abc}{4K}\\) donde \\(K = 48\\), \\(R = \\frac{12 \\cdot 10 \\cdot \\sqrt{52}}{192} = \\frac{5\\sqrt{52}}{8}\\).

Radio de los nueve puntos: \\(R_N = \\frac{R}{2} = \\frac{5\\sqrt{52}}{16} = \\frac{5\\sqrt{13}}{8} \\approx 2.25\\).`,

  "triangulo-de-euler": `## Triángulo de Euler

### Definición

El triángulo de Euler, también denominado triángulo medial de segunda generación o triángulo orticéntrico, es el triángulo formado por los puntos medios de los segmentos que unen el ortocentro \\(H\\) de un triángulo \\(ABC\\) con cada uno de sus vértices. Si \\(P_a, P_b, P_c\\) son los puntos medios de \\(AH, BH, CH\\) respectivamente, entonces \\(P_aP_bP_c\\) es el triángulo de Euler.

Este triángulo está íntimamente relacionado con la circunferencia de los nueve puntos, ya que sus tres vértices son tres de los nueve puntos por los que pasa dicha circunferencia.

### Relación con el triángulo original

El triángulo de Euler es semejante al triángulo \\(ABC\\) con razón de semejanza \\(\\frac{1}{2}\\). Esto se demuestra porque cada lado del triángulo de Euler es paralelo y mitad del lado correspondiente del triángulo orticéntrico formado por los pies de las alturas.

Más precisamente, \\(P_aP_b\\) es el segmento medio del triángulo \\(ABH\\) (relativo al lado \\(AB\\)), por lo que \\(P_aP_b \\parallel AB\\) y \\(P_aP_b = \\frac{AB}{2} = \\frac{c}{2}\\). De igual forma, \\(P_bP_c = \\frac{a}{2}\\) y \\(P_aP_c = \\frac{b}{2}\\).

### Propiedades fundamentales

**Áreas:** El área del triángulo de Euler es \\(\\frac{1}{4}\\) del área de \\(ABC\\).

**Centroide:** El centroide del triángulo de Euler coincide con el centroide \\(G\\) del triángulo original, ya que ambas figuras comparten el mismo baricentro.

**Ortocentro:** El ortocentro del triángulo de Euler es el ortocentro \\(H\\) del triángulo original, escalado por un factor de \\(\\frac{1}{2}\\) respecto a \\(G\\).

**Circuncentro:** El circuncentro del triángulo de Euler es el punto medio de \\(OH\\), es decir, el centro de la circunferencia de los nueve puntos.

### Relación con la recta de Euler

Los vértices del triángulo de Euler se proyectan sobre los lados de \\(ABC\\) en puntos que también pertenecen a la circunferencia de los nueve puntos. La homotecia de centro \\(H\\) y razón \\(\\frac{1}{2}\\) transforma \\(ABC\\) en un triángulo similar cuyos vértices son los puntos medios de \\(AH, BH, CH\\).

### Ejemplo resuelto

Para \\(A(0,0)\\), \\(B(6,0)\\), \\(C(2,4)\\):

Ortocentro: \\(H(2, 2)\\) (se obtiene calculando la intersección de las alturas).

Puntos medios de los segmentos vertices-ortocentro:
- \\(P_a = \\text{midpoint de } AH = \\left(\\frac{0+2}{2}, \\frac{0+2}{2}\\right) = (1,1)\\)
- \\(P_b = \\text{midpoint de } BH = \\left(\\frac{6+2}{2}, \\frac{0+2}{2}\\right) = (4,1)\\)
- \\(P_c = \\text{midpoint de } CH = \\left(\\frac{2+2}{2}, \\frac{4+2}{2}\\right) = (2,3)\\)

Lados del triángulo de Euler: \\(P_aP_b = 3\\), \\(P_aP_c = \\sqrt{1+4} = \\sqrt{5}\\), \\(P_bP_c = \\sqrt{4+4} = 2\\sqrt{2}\\).

Lados de \\(ABC\\): \\(AB = 6\\), \\(AC = \\sqrt{4+16} = 2\\sqrt{5}\\), \\(BC = \\sqrt{16+16} = 4\\sqrt{2}\\).

Verificación: cada lado del Euler es exactamente la mitad del correspondiente en \\(ABC\\).`,

  "inversiva-geometria": `## Geometría Inversiva

### Definición de inversión

La inversión circular con centro \\(O\\) y radio \\(k\\) es una transformación que asocia a cada punto \\(P \\neq O\\) un punto \\(P'\\) tal que \\(O, P, P'\\) están alineados (en ese orden o inverso) y \\(OP \\cdot OP' = k^2\\). El punto \\(P'\\) se llama imagen de \\(P\\), y \\(k\\) es el poder de la inversión.

En coordenadas con \\(O\\) como origen, si \\(P = (x,y)\\), su imagen es \\(P' = \\frac{k^2}{x^2+y^2}(x,y)\\). Esta transformación es involutiva: aplicarla dos veces devuelve el punto original.

### Propiedades fundamentales

**Circunferencias y rectas:** La imagen de una circunferencia que pasa por \\(O\\) es una recta que no pasa por \\(O\\), y viceversa. La imagen de una circunferencia que no pasa por \\(O\\) es otra circunferencia.

**Ángulos:** La inversión preserva ángulos entre curvas (es una transformación conformal). Si dos circunferencias se cortan formando un ángulo \\(\\alpha\\), sus imágenes también se cortan formando el mismo ángulo.

**Poder de un punto:** El producto \\(OA \\cdot OB\\) es constante para todos los pares de puntos colineales con \\(O\\) que yacen sobre la misma circunferencia.

### Fórmula de distancia

Si \\(A'\\) y \\(B'\\) son las imágenes de \\(A\\) y \\(B\\), la distancia entre las imágenes es:

\\[A'B' = \\frac{k^2 \\cdot AB}{OA \\cdot OB}\\]

Esta fórmula permite calcular distancias transformadas sin encontrar las coordenadas de las imágenes.

### Construcciones con regla y compás

La inversión permite resolver problemas aparentemente imposibles, como trazar la imagen de un punto dado una circunferencia de inversión, o construir tangentes comunes a dos circunferencias. Para construir \\(P'\\) dado \\(P\\) y una circunferencia de inversión:

1. Si \\(P\\) está fuera de la circunferencia, trazar las tangentes desde \\(P\\) a la circunferencia, y \\(P'\\) es la intersección de las cuerdas de contacto.
2. Si \\(P\\) está dentro, trazar la perpendicular a \\(OP\\) hasta la circunferencia, y en los puntos de intersección trazar las tangentes cuya intersección es \\(P'\\).

### Ejemplo resuelto

Invertimos la circunferencia \\(\\mathcal{C}: (x-3)^2 + y^2 = 4\\) con centro \\(O(0,0)\\) y radio \\(k = 2\\).

La circunferencia \\(\\mathcal{C}\\) tiene centro \\(C(3,0)\\) y radio \\(r = 2\\). No pasa por \\(O\\) ya que \\(OC = 3 > 2\\).

El radio de la imagen es \\(r' = \\frac{k^2 \\cdot r}{OC^2 - r^2} = \\frac{4 \\cdot 2}{9 - 4} = \\frac{8}{5}\\).

El centro de la imagen está sobre \\(OC\\) a distancia \\(d' = \\frac{k^2 \\cdot OC}{OC^2 - r^2} = \\frac{4 \\cdot 3}{5} = \\frac{12}{5}\\) desde \\(O\\).

La imagen es \\(\\mathcal{C}': \\left(x - \\frac{12}{5}\\right)^2 + y^2 = \\frac{64}{25}\\).

Verificación: el punto \\((1,0)\\) de \\(\\mathcal{C}\\) se invierte en \\(\\left(\\frac{4}{1}, 0\\right) = (4,0)\\), y \\(\\left(4-\\frac{12}{5}\\right)^2 = \\left(\\frac{8}{5}\\right)^2 = \\frac{64}{25}\\). ✓`,

  "numeros-complejos-geometria": `## Números Complejos y Geometría

### Representación geométrica

Un número complejo \\(z = a + bi\\) se representa como un punto \\((a,b)\\) en el plano complejo o como un vector que parte del origen hacia ese punto. El módulo \\(|z| = \\sqrt{a^2 + b^2}\\) es la distancia al origen, y el argumento \\(\\arg(z) = \\arctan\\frac{b}{a}\\) es el ángulo con el eje real.

La forma polar \\(z = re^{i\\theta}\\) (o \\(z = r(\\cos\\theta + i\\sin\\theta)\\)) es particularmente útil para operaciones geométricas. Aquí \\(r = |z|\\) y \\(\\theta = \\arg(z)\\).

### Transformaciones geométricas

**Traslación:** Sumar un complejo \\(w\\) a \\(z\\) traslada el punto \\(z\\) por el vector \\((\\text{Re}(w), \\text{Im}(w))\\).

**Rotación:** Multiplicar \\(z\\) por \\(e^{i\\alpha}\\) rota el punto \\(z\\) un ángulo \\(\\alpha\\) alrededor del origen. Para rotar alrededor de un punto \\(z_0\\), se usa \\(z' = z_0 + (z - z_0)e^{i\\alpha}\\).

**Homotecia:** Multiplicar \\(z\\) por un real \\(k > 0\\) escala la distancia al origen por el factor \\(k\\).

**Reflexión:** El conjugado \\(\\bar{z}\\) refleja \\(z\\) respecto al eje real. La reflexión respecto a una recta \\(\\arg(w) = \\alpha\\) se obtiene con \\(z' = e^{2i\\alpha}\\bar{z}\\).

### Fórmulas de puntos notables

**Punto medio:** \\(M = \\frac{z_1 + z_2}{2}\\)

**Baricentro:** \\(G = \\frac{z_1 + z_2 + z_3}{3}\\)

**Circuncentro:** Se obtiene resolviendo \\(|z - z_1|^2 = |z - z_2|^2 = |z - z_3|^2\\).

**Ortocentro:** \\(H = z_1 + z_2 + z_3\\) (cuando el circuncentro está en el origen).

### Condición de puntos concíclicos

Cuatro puntos \\(z_1, z_2, z_3, z_4\\) están sobre una circunferencia o recta si y solo si el cociente \\(\\frac{(z_1 - z_3)(z_2 - z_4)}{(z_1 - z_4)(z_2 - z_3)}\\) es real. Este cociente se llama razón anarmónica o cruzada.

### Ejemplo resuelto

Dados \\(z_1 = 1 + i\\) y \\(z_2 = 3 - i\\), rotemos \\(z_1\\) 90° alrededor de \\(z_2\\).

Rotación de 90°: \\(e^{i\\pi/2} = i\\).

\\[z' = z_2 + (z_1 - z_2) \\cdot i = (3-i) + (1+i - 3+i) \\cdot i = (3-i) + (-2+2i)i\\]
\\[= (3-i) + (-2i + 2i^2) = (3-i) + (-2-2i) = 1 - 3i\\]

Verificación geométrica: \\(z_1 - z_2 = -2+2i\\) tiene módulo \\(2\\sqrt{2}\\) y ángulo \\(135°\\). Rotado 90° queda \\(2\\sqrt{2} \\cdot e^{i225°} = -2-2i\\). Sumando \\(z_2 = 3-i\\) se obtiene \\(1-3i\\).

Distancia \\(|z' - z_2| = |1-3i - 3+i| = |-2-2i| = 2\\sqrt{2}\\), igual a \\(|z_1 - z_2|\\), confirmando que la rotación preserva distancias.

Para encontrar el baricentro de \\(z_1, z_2, z_3 = -1+2i\\):
\\[G = \\frac{(1+i) + (3-i) + (-1+2i)}{3} = \\frac{3 + 2i}{3} = 1 + \\frac{2}{3}i\\]`,

  "coordenadas-polares": `## Coordenadas Polares

### Sistema de coordenadas polares

El sistema de coordenadas polares representa un punto \\(P\\) en el plano mediante un par \\((r, \\theta)\\), donde \\(r\\) es la distancia desde el origen (polo) y \\(\\theta\\) es el ángulo que forma el segmento \\(OP\\) con el eje polar (eje \\(x\\) positivo). La conversión con coordenadas cartesianas es:

\\[x = r\\cos\\theta, \\quad y = r\\sin\\theta\\]
\\[r = \\sqrt{x^2 + y^2}, \\quad \\theta = \\arctan\\frac{y}{x}\\]

La representación polar no es única: \\((r, \\theta)\\) es equivalente a \\((r, \\theta + 2k\\pi)\\) para cualquier entero \\(k\\), y \\((-r, \\theta)\\) equivale a \\((r, \\theta + \\pi)\\).

### Ecuaciones en coordenadas polares

Muchas curvas tienen expresiones notoriamente simples en polares:

**Circunferencia centrada en el polo:** \\(r = a\\)

**Circunferencia pasando por el polo:** \\(r = 2a\\cos\\theta\\) (centro en \\((a,0)\\)) o \\(r = 2a\\sin\\theta\\) (centro en \\((0,a)\\))

**Línea recta por el polo:** \\(\\theta = \\alpha\\)

**Lemaiscata (corazón):** \\(r = a(1 + \\cos\\theta)\\)

**Espiral de Arquímedes:** \\(r = a\\theta\\)

**Rosa:** \\(r = a\\cos(n\\theta)\\), con \\(n\\) pétalos si \\(n\\) es impar y \\(2n\\) si es par.

### Área en coordenadas polares

El área de una región acotada por una curva polar \\(r = f(\\theta)\\) entre \\(\\theta = \\alpha\\) y \\(\\theta = \\beta\\) se calcula como:

\\[A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2 \\, d\\theta = \\frac{1}{2}\\int_{\\alpha}^{\\beta} [f(\\theta)]^2 \\, d\\theta\\]

Para áreas entre dos curvas \\(r_1(\\theta)\\) y \\(r_2(\\theta)\\):
\\[A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} \\left[r_2^2(\\theta) - r_1^2(\\theta)\\right] d\\theta\\]

### Longitud de arco

La longitud de arco de una curva polar \\(r = f(\\theta)\\) desde \\(\\theta = \\alpha\\) hasta \\(\\theta = \\beta\\) es:

\\[L = \\int_{\\alpha}^{\\beta} \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} \\, d\\theta\\]

### Ejemplo resuelto

Calcular el área interior a la lemaiscata \\(r = 2(1 + \\cos\\theta)\\).

Por simetría respecto al eje polar, calculamos el área para \\(\\theta \\in [0, \\pi]\\) y multiplicamos por 2:

\\[A = \\frac{1}{2}\\int_0^{2\\pi} [2(1+\\cos\\theta)]^2 \\, d\\theta = 2\\int_0^{2\\pi} (1 + 2\\cos\\theta + \\cos^2\\theta) \\, d\\theta\\]

\\[= 2\\left[\\theta + 2\\sin\\theta + \\frac{\\theta}{2} + \\frac{\\sin 2\\theta}{4}\\right]_0^{2\\pi}\\]

\\[= 2\\left[2\\pi + 0 + \\pi + 0 - 0\\right] = 2(3\\pi) = 6\\pi\\]

Para la longitud de arco, \\(\\frac{dr}{d\\theta} = -2\\sin\\theta\\):

\\[L = 2\\int_0^{\\pi} \\sqrt{4(1+\\cos\\theta)^2 + 4\\sin^2\\theta} \\, d\\theta = 4\\int_0^{\\pi} \\sqrt{2 + 2\\cos\\theta} \\, d\\theta\\]

\\[= 4\\int_0^{\\pi} 2\\cos\\frac{\\theta}{2} \\, d\\theta = 8\\left[2\\sin\\frac{\\theta}{2}\\right]_0^{\\pi} = 16\\]`,
};
