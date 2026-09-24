export const geoStudyGuides5: Record<string, string> = {
  "distancia-punto-recta": `## Distancia de un Punto a una Recta

### Definición y Concepto Fundamental

La distancia de un punto a una recta se define como la longitud del segmento perpendicular que une el punto con la recta. Esta distancia es siempre el valor mínimo entre el punto y cualquier otro punto sobre la recta. Geométricamente, representa el camino más corto posible desde el punto hasta la línea.

Si tenemos un punto $P(x_0, y_0)$ y una recta dada por la ecuación general $Ax + By + C = 0$, la fórmula que calcula esta distancia es:

$$d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$$

Los valores absolutos en el numerador garantizan que la distancia sea siempre positiva o cero, ya que la distancia es una magnitud escalar no negativa.

### Desarrollo de la Fórmula

Para comprender el origen de la fórmula, partimos de la ecuación de la recta en su forma general. El numerador representa el valor que resulta al sustituir las coordenadas del punto en la expresión de la recta, y el denominador es la magnitud del vector normal $(A, B)$ a la recta. La división entre ambos términos normaliza el resultado, proporcionando la distancia perpendicular exacta.

Si la recta se presenta en la forma pendiente-intercepto $y = mx + b$, podemos reescribirla como $mx - y + b = 0$, donde $A = m$, $B = -1$ y $C = b$. Sustituyendo en la fórmula:

$$d = \\frac{|mx_0 - y_0 + b|}{\\sqrt{m^2 + 1}}$$

### Ejemplo Resuelto 1

Calcular la distancia del punto $P(3, -2)$ a la recta $4x - 3y + 6 = 0$.

**Paso 1:** Identificamos los coeficientes: $A = 4$, $B = -3$, $C = 6$.

**Paso 2:** Sustituimos las coordenadas del punto $(x_0, y_0) = (3, -2)$:

$$d = \\frac{|4(3) + (-3)(-2) + 6|}{\\sqrt{4^2 + (-3)^2}}$$

**Paso 3:** Resolvemos el numerador: $|12 + 6 + 6| = |24| = 24$.

**Paso 4:** Calculamos el denominador: $\\sqrt{16 + 9} = \\sqrt{25} = 5$.

**Resultado:** $d = \\dfrac{24}{5} = 4.8$ unidades.

### Ejemplo Resuelto 2

Encontrar la distancia del punto $Q(-1, 5)$ a la recta $y = 2x + 3$.

**Paso 1:** Convertimos a forma general: $2x - y + 3 = 0$.

**Paso 2:** Identificamos: $A = 2$, $B = -1$, $C = 3$.

**Paso 3:** Sustituimos el punto $(-1, 5)$:

$$d = \\frac{|2(-1) - (5) + 3|}{\\sqrt{2^2 + (-1)^2}} = \\frac{|-2 - 5 + 3|}{\\sqrt{5}} = \\frac{|-4|}{\\sqrt{5}} = \\frac{4}{\\sqrt{5}}$$

**Resultado:** $d = \\dfrac{4\\sqrt{5}}{5} \\approx 1.79$ unidades.

### Propiedades Importantes

- Si el punto está sobre la recta, la distancia es igual a cero.
- Rectas paralelas tienen la misma distancia a un punto dado, desplazada constantemente.
- La distancia entre dos rectas paralelas $Ax + By + C_1 = 0$ y $Ax + By + C_2 = 0$ es $d = \\dfrac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$.

### Aplicaciones Prácticas

Esta fórmula se utiliza en optimización de rutas, cálculo de áreas de triángulos usando la base y la altura, determinación de errores en regresión lineal, y en problemas de colisiones en física y computación gráfica. Dominarla permite resolver problemas complejos que involucran relaciones geométricas entre puntos y líneas.`,

  "razones-trigonometricas": `## Razones Trigonométricas

### Definición en Triángulos Rectángulos

Las razones trigonométricas son relaciones numéricas entre los lados de un triángulo rectángulo. Para un ángulo agudo $\\alpha$ en un triángulo rectángulo, las seis razones fundamentales se definen de la siguiente manera:

$$\\sin \\alpha = \\frac{\\text{cateto opuesto}}{\\text{hipotenusa}}$$

$$\\cos \\alpha = \\frac{\\text{cateto adyacente}}{\\text{hipotenusa}}$$

$$\\tan \\alpha = \\frac{\\text{cateto opuesto}}{\\text{cateto adyacente}}$$

Las razones recíprocas son: cosecante $(\\csc \\alpha = 1/\\sin \\alpha)$, secante $(\\sec \\alpha = 1/\\cos \\alpha)$ y cotangente $(\\cot \\alpha = 1/\\tan \\alpha)$.

### Relaciones Fundamentales

La relación pitagórica entre las razones fundamentales establece que:

$$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$$

A partir de esta identidad se derivan las siguientes expresiones obteniendo división entre los términos:

$$\\tan^2 \\alpha + 1 = \\sec^2 \\alpha$$

$$1 + \\cot^2 \\alpha = \\csc^2 \\alpha$$

Estas relaciones permiten encontrar una razón trigonométrica conociendo únicamente otra, siempre que se conozca el cuadrante donde se encuentra el ángulo.

### Razones en el Círculo Trigonométrico

Para ángulos en posición estándar, las razones se definen considerando un punto $P(x, y)$ sobre la circunferencia unitaria de radio $r = 1$:

$$\\sin \\theta = y, \\quad \\cos \\theta = x, \\quad \\tan \\theta = \\frac{y}{x}$$

El signo de cada razón depende del cuadrante: en el primer cuadrante todas son positivas; en el segundo solo el seno; en el tercero solo la tangente; en el cuarto solo el coseno. Para recordar este patrón se usa la regla mnemotéctica "Todos San Coseno Tangente".

### Valores Notables

Los valores más utilizados en trigonometría son:

| $\\alpha$ | $\\sin \\alpha$ | $\\cos \\alpha$ | $\\tan \\alpha$ |
|---|---|---|---|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $1/2$ | $\\sqrt{3}/2$ | $\\sqrt{3}/3$ |
| $45°$ | $\\sqrt{2}/2$ | $\\sqrt{2}/2$ | $1$ |
| $60°$ | $\\sqrt{3}/2$ | $1/2$ | $\\sqrt{3}$ |
| $90°$ | $1$ | $0$ | $\\text{no existe}$ |

### Ejemplo Resuelto 1

En un triángulo rectángulo, el cateto opuesto al ángulo $\\alpha$ mide 5 cm y la hipotenusa mide 13 cm. Calcular todas las razones trigonométricas.

**Solución:** Primero calculamos el cateto adyacente usando Pitágoras: $b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.

$$\\sin \\alpha = \\frac{5}{13}, \\quad \\cos \\alpha = \\frac{12}{13}, \\quad \\tan \\alpha = \\frac{5}{12}$$

$$\\csc \\alpha = \\frac{13}{5}, \\quad \\sec \\alpha = \\frac{13}{12}, \\quad \\cot \\alpha = \\frac{12}{5}$$

### Ejemplo Resuelto 2

Si $\\cos \\theta = \\dfrac{3}{5}$ y $\\theta$ está en el primer cuadrante, hallar $\\sin \\theta$ y $\\tan \\theta$.

**Solución:** Usamos la identidad pitagórica: $\\sin^2 \\theta = 1 - \\cos^2 \\theta = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$.

Como $\\theta$ está en el primer cuadrante, $\\sin \\theta = \\dfrac{4}{5}$.

Entonces $\\tan \\theta = \\dfrac{\\sin \\theta}{\\cos \\theta} = \\dfrac{4/5}{3/5} = \\dfrac{4}{3}$.

### Aplicaciones Prácticas

Las razones trigonométricas son esenciales en navegación para calcular distancias y rutas, en ingeniería para el análisis de fuerzas, en astronomía para medir distancias estelares, y en física para descomponer vectores en sus componentes. También son la base del análisis armónico y las señales periódicas.`,

  "identidades-trigonometricas": `## Identidades Trigonométricas

### Identidades Pitagóricas

Las identidades pitagóricas constituyen la base del álgebra trigonométrica. Se derivan directamente de la relación pitagórica aplicada al círculo unitario y son herramientas fundamentales para simplificar expresiones y resolver ecuaciones:

$$\\sin^2 \\theta + \\cos^2 \\theta = 1$$

Dividiendo todo por $\\cos^2 \\theta$:

$$\\tan^2 \\theta + 1 = \\sec^2 \\theta$$

Dividiendo todo por $\\sin^2 \\theta$:

$$1 + \\cot^2 \\theta = \\csc^2 \\theta$$

Estas tres identidades permiten expresar cualquier función trigonométrica en términos de otra, facilitando la simplificación de expresiones complejas.

### Identidades de Ángulo Doble

Las identidades de ángulo doble expresan las razones de un ángulo $2\\theta$ en función de las razones de $\\theta$:

$$\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$$

$$\\cos 2\\theta = \\cos^2 \\theta - \\sin^2 \\theta = 2\\cos^2 \\theta - 1 = 1 - 2\\sin^2 \\theta$$

$$\\tan 2\\theta = \\frac{2\\tan \\theta}{1 - \\tan^2 \\theta}$

La expresión de $\\cos 2\\theta$ tiene tres formas equivalentes, cada una útil según el contexto. La elección depende de qué razón trigonométrica se conozca o se quiera eliminar.

### Identidades de Ángulo Mitad

A partir de las identidades de ángulo doble se obtienen las de ángulo mitad:

$$\\sin \\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos \\theta}{2}}$$

$$\\cos \\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos \\theta}{2}}$$

$$\\tan \\frac{\\theta}{2} = \\frac{1 - \\cos \\theta}{\\sin \\theta} = \\frac{\\sin \\theta}{1 + \\cos \\theta}$$

El signo $\\pm$ se determina según el cuadrante donde se encuentre el ángulo $\\theta/2$.

### Identidades de Suma y Producto

Las identidades product-suma son útiles para transformar sumas de funciones en productos y viceversa:

$$\\sin A + \\sin B = 2\\sin\\left(\\frac{A+B}{2}\\right)\\cos\\left(\\frac{A-B}{2}\\right)$$

$$\\sin A - \\sin B = 2\\cos\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$$

$$\\cos A + \\cos B = 2\\cos\\left(\\frac{A+B}{2}\\right)\\cos\\left(\\frac{A-B}{2}\\right)$$

$$\\cos A - \\cos B = -2\\sin\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$$

### Ejemplo Resuelto 1

Simplificar la expresión $\\dfrac{\\sin^2 \\theta}{1 - \\cos \\theta}$.

**Solución:** Aplicamos la identidad pitagórica $\\sin^2 \\theta = 1 - \\cos^2 \\theta$:

$$\\frac{\\sin^2 \\theta}{1 - \\cos \\theta} = \\frac{1 - \\cos^2 \\theta}{1 - \\cos \\theta} = \\frac{(1 - \\cos \\theta)(1 + \\cos \\theta)}{1 - \\cos \\theta} = 1 + \\cos \\theta$$

### Ejemplo Resuelto 2

Demostrar que $\\dfrac{1 - \\cos 2\\theta}{\\sin 2\\theta} = \\tan \\theta$.

**Solución:** Sustituimos las identidades de ángulo doble en el numerador usamos $1 - \\cos 2\\theta = 2\\sin^2 \\theta$ y en el denominador $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$:

$$\\frac{1 - \\cos 2\\theta}{\\sin 2\\theta} = \\frac{2\\sin^2 \\theta}{2\\sin \\theta \\cos \\theta} = \\frac{\\sin \\theta}{\\cos \\theta} = \\tan \\theta \\quad \\blacksquare$$

### Estrategias de Simplificación

Para simplificar expresiones trigonométricas se recomienda: convertir todo a seno y coseno, factorizar cuando sea posible, aplicar identidades pitagóricas para reducir órdenes, y buscar patrones de ángulo doble o mitad. Practicar con múltiples problemas desarrolla la intuición para识别 which identity es más conveniente en cada caso.`,

  "suma-diferencia-trig": `## Suma y Diferencia de Ángulos Trigonométricos

### Fórmulas de Suma

Las fórmulas de suma permiten calcular las razones trigonométricas de la suma de dos ángulos $A$ y $B$ a partir de las razones individuales:

$$\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$$

$$\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$$

$$\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$$

Estas fórmulas se derivan geometricamente considerando la distancia entre puntos en el círculo unitario o mediante rotaciones de ángulos sucesivos. Son herramientas poderosas porque permiten descomponer ángulos complejos en combinaciones de ángulos simples cuyas razones son conocidas.

### Fórmulas de Diferencia

Las fórmulas de diferencia se obtienen sustituyendo $B$ por $-B$ en las fórmulas de suma, considerando que $\\sin(-B) = -\\sin B$ y $\\cos(-B) = \\cos B$:

$$\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B$$

$$\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$$

$$\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$$

La diferencia fundamental es el cambio de signo en el numerador de la tangente y en el término cruzado del seno y coseno.

### Aplicación a Ángulos Notables

Estas fórmulas permiten calcular razones de ángulos que no son estándar pero que se expresan como combinaciones de ángulos conocidos. Por ejemplo, $15° = 45° - 30°$ y $75° = 45° + 30°$:

$$\\sin 75° = \\sin(45° + 30°) = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$$

$$\\cos 15° = \\cos(45° - 30°) = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$$

### Fórmulas de Ángulo Doble Derivadas

De las fórmulas de suma se obtienen las de ángulo doble al hacer $A = B = \\theta$:

$$\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$$

$$\\cos 2\\theta = \\cos^2 \\theta - \\sin^2 \\theta = 2\\cos^2 \\theta - 1 = 1 - 2\\sin^2 \\theta$$

$$\\tan 2\\theta = \\frac{2\\tan \\theta}{1 - \\tan^2 \\theta}$$

### Ejemplo Resuelto 1

Calcular $\\sin 105°$ usando fórmulas de suma.

**Solución:** Descomponemos $105° = 60° + 45°$:

$$\\sin 105° = \\sin(60° + 45°) = \\sin 60° \\cos 45° + \\cos 60° \\sin 45°$$

$$= \\frac{\\sqrt{3}}{2} \\cdot \\frac{\\sqrt{2}}{2} + \\frac{1}{2} \\cdot \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{4} \\approx 0.966$$

### Ejemplo Resuelto 2

Si $\\sin A = \\dfrac{3}{5}$ con $A$ en el primer cuadrante, y $\\cos B = \\dfrac{5}{13}$ con $B$ en el cuarto cuadrante, hallar $\\cos(A + B)$.

**Solución:** Calculamos las razones faltantes: $\\cos A = \\dfrac{4}{5}$ y $\\sin B = -\\dfrac{12}{13}$.

$$\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B = \\frac{4}{5} \\cdot \\frac{5}{13} - \\frac{3}{5} \\cdot \\left(-\\frac{12}{13}\\right)$$

$$= \\frac{20}{65} + \\frac{36}{65} = \\frac{56}{65}$$

### Ejemplo Resuelto 3

Demostrar que $\\dfrac{\\tan 75° - \\tan 15°}{1 + \\tan 75° \\tan 15°} = 1$.

**Solución:** Reconocemos la fórmula de $\\tan(A - B)$ con $A = 75°$ y $B = 15°$:

$$\\frac{\\tan 75° - \\tan 15°}{1 + \\tan 75° \\tan 15°} = \\tan(75° - 15°) = \\tan 60° = \\sqrt{3}$$

Corrigiendo: el resultado es $\\sqrt{3}$, no 1. Esto demuestra la importancia de verificar los resultados.

### Consejos de Estudio

Memorizar las fórmulas de suma y diferencia es esencial. Una estrategia efectiva es recordar que el seno mantiene el orden del signo mientras que el coseno lo invierte. Practicar con ángulos como $15°, 75°, 105°, 165°$ fortalece la comprensión de su aplicación práctica.`,

  "ley-de-senos": `## Ley de Senos

### Enunciado y Fórmula

La Ley de Senos establece una relación proporcional entre los lados de un triángulo y los senos de sus ángulos opuestos. Para un triángulo con lados $a$, $b$, $c$ y ángulos opuestos $A$, $B$, $C$ respectivamente:

$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

También se expresa en forma recíproca:

$$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$$

La razón constante $\\dfrac{a}{\\sin A} = 2R$ donde $R$ es el radio del circuncírculo del triángulo, es decir, el radio de la circunferencia que pasa por los tres vértices del triángulo.

### Cuándo Aplicar la Ley de Senos

La Ley de Senos es especialmente útil en dos situaciones:

**Caso A-A-S o A-S-A:** Cuando se conocen dos ángulos y un lado no comprendido entre ellos. Se calcula el tercer ángulo usando la suma de ángulos internos y luego se aplica la proporción directamente.

**Caso Lado-Lado-Ángulo (caso ambiguo):** Cuando se conocen dos lados y un ángulo opuesto a uno de ellos. Este caso puede tener solución única, dos soluciones o ninguna solución, dependiendo de los valores involucrados.

### Derivación Geométrica

La fórmula se demuestra trazando una altura $h$ desde un vértice al lado opuesto. En el triángulo formado:

$$h = b \\sin A = a \\sin B$$

De aquí se obtiene directamente $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}$. Este mismo procedimiento se aplica trazando alturas desde los otros vértices para obtener todas las proporciones.

### Ejemplo Resuelto 1

En un triángulo $ABC$, se conoce $a = 10$ cm, $A = 30°$ y $B = 45°$. Hallar el lado $b$.

**Solución:** Aplicamos la Ley de Senos:

$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$$

$$\\frac{10}{\\sin 30°} = \\frac{b}{\\sin 45°}$$

$$\\frac{10}{0.5} = \\frac{b}{\\frac{\\sqrt{2}}{2}}$$

$$20 = \\frac{2b}{\\sqrt{2}}$$

$$b = \\frac{20\\sqrt{2}}{2} = 10\\sqrt{2} \\approx 14.14 \\text{ cm}$$

### Ejemplo Resuelto 2

Un triángulo tiene lados $a = 8$, $b = 6$ y ángulo $A = 45°$. Determinar todas las soluciones posibles.

**Solución:** Aplicamos la Ley de Senos para encontrar $\\sin B$:

$$\\frac{\\sin B}{b} = \\frac{\\sin A}{a} \\implies \\sin B = \\frac{6 \\sin 45°}{8} = \\frac{6 \\times 0.7071}{8} = \\frac{4.243}{8} = 0.5303$$

$$B_1 = \\arcsin(0.5303) \\approx 32°$$

$$B_2 = 180° - 32° = 148°$$

**Verificación del caso ambiguo:** Para $B_2 = 148°$: $A + B_2 = 45° + 148° = 193° > 180°$, por lo tanto $B_2$ no es válida. Solo existe una solución: $B \\approx 32°$.

### Ejemplo Resuelto 3

Calcular el radio del circuncírculo de un triángulo con $a = 7$, $A = 60°$.

**Solución:** Usamos la relación $2R = \\dfrac{a}{\\sin A}$:

$$2R = \\frac{7}{\\sin 60°} = \\frac{7}{\\frac{\\sqrt{3}}{2}} = \\frac{14}{\\sqrt{3}} = \\frac{14\\sqrt{3}}{3}$$

$$R = \\frac{7\\sqrt{3}}{3} \\approx 4.04 \\text{ unidades}$$

### Caso Ambiguo: Análisis Detallado

Cuando se tienen dos lados y un ángulo opuesto a uno de ellos, se calcula $\\sin B = \\dfrac{b \\sin A}{a}$. Si $\\sin B > 1$, no hay solución. Si $\\sin B = 1$, hay una solución (ángulo recto). Si $0 < \\sin B < 1$, hay dos valores posibles para $B$, pero solo aquellos cuya suma con $A$ sea menor a $180°$ son válidos.

### Aplicaciones Prácticas

La Ley de Senos se aplica en topografía para medir distancias inaccesibles, en navegación para calcular rutas entre puntos, en astronomía para determinar distancias entre cuerpos celestes, y en arquitectura para el diseño de estructuras trianguladas. Es una herramienta indispensable en cualquier campo que requiera mediciones angulares y lineales.`,

  "ley-de-cosenos": `## Ley de Cosenos

### Enunciado y Fórmula

La Ley de Cosenos generaliza el Teorema de Pitágoras para cualquier triángulo, no solo para los rectángulos. Para un triángulo con lados $a$, $b$, $c$ y ángulos opuestos $A$, $B$, $C$:

$$a^2 = b^2 + c^2 - 2bc \\cos A$$

$$b^2 = a^2 + c^2 - 2ac \\cos B$$

$$c^2 = a^2 + b^2 - 2ab \\cos C$$

Cuando el ángulo $A$ es recto $(\\cos 90° = 0)$, la fórmula se reduce al Teorema de Pitágoras: $a^2 = b^2 + c^2$. El término $-2bc \\cos A$ actúa como un factor de corrección que ajusta la relación pitagórica según la apertura del ángulo.

### Cuándo Aplicar la Ley de Cosenos

La Ley de Cosenos es el método preferido en dos situaciones:

**Caso L-A-L (Lado-Ángulo-Lado):** Cuando se conocen dos lados y el ángulo comprendido entre ellos. Se calcula directamente el lado opuesto al ángulo conocido.

**Caso L-L-L (Lado-Lado-Lado):** Cuando se conocen los tres lados pero ningún ángulo. Se despeja el ángulo de la fórmula para calcular cada uno.

### Despeje para Ángulos

Para calcular un ángulo cuando se conocen los tres lados, se reordena la fórmula:

$$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$$

$$A = \\arccos\\left(\\frac{b^2 + c^2 - a^2}{2bc}\\right)$$

El mismo procedimiento aplica para los ángulos $B$ y $C$ rotando convenientemente los símbolos.

### Ejemplo Resuelto 1

En un triángulo $ABC$, se conoce $b = 8$ cm, $c = 5$ cm y $A = 60°$. Hallar el lado $a$.

**Solución:** Aplicamos la Ley de Cosenos directamente:

$$a^2 = b^2 + c^2 - 2bc \\cos A$$

$$a^2 = 8^2 + 5^2 - 2(8)(5)\\cos 60°$$

$$a^2 = 64 + 25 - 80(0.5)$$

$$a^2 = 89 - 40 = 49$$

$$a = \\sqrt{49} = 7 \\text{ cm}$$

### Ejemplo Resuelto 2

Un triángulo tiene lados $a = 7$, $b = 8$ y $c = 5$. Calcular el ángulo $C$.

**Solución:** Despejamos el coseno del ángulo $C$:

$$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$$

$$\\cos C = \\frac{49 + 64 - 25}{2(7)(8)} = \\frac{88}{112} = \\frac{11}{14} \\approx 0.7857$$

$$C = \\arccos(0.7857) \\approx 38.2°$$

### Ejemplo Resuelto 3

Dos barcos parten de un puerto形成 un ángulo de $42°$. El primer barco viaja 15 km y el segundo 21 km. ¿Qué distancia los separa?

**Solución:** Tenemos un triángulo con dos lados y el ángulo comprendido. Aplicamos la Ley de Cosenos:

$$d^2 = 15^2 + 21^2 - 2(15)(21)\\cos 42°$$

$$d^2 = 225 + 441 - 630(0.7431)$$

$$d^2 = 666 - 468.15 = 197.85$$

$$d = \\sqrt{197.85} \\approx 14.07 \\text{ km}$$

### Relación con la Geometría del Triángulo

La Ley de Cosenos permite clasificar triángulos por sus ángulos usando solo los lados:

- Si $a^2 + b^2 > c^2$, el ángulo $C$ es agudo.
- Si $a^2 + b^2 = c^2$, el ángulo $C$ es recto.
- Si $a^2 + b^2 < c^2$, el ángulo $C$ es obtuso.

Esta clasificación es fundamental para determinar la naturaleza de un triángulo sin medir sus ángulos directamente.

### Comparación con la Ley de Senos

La Ley de Cosenos es preferible cuando se conoce el ángulo comprendido entre dos lados, mientras que la Ley de Senos es más eficiente cuando se conoce un par lado-ángulo opuesto. En problemas con tres lados conocidos, solo la Ley de Cosenos puede resolver el triángulo. Ambas leyes son complementarias y su elección depende de la información disponible.

### Aplicaciones Prácticas

La Ley de Cosenos tiene amplias aplicaciones en geodesia para medir distancias entre puntos en la superficie terrestre, en ingeniería civil para el cálculo de estructuras, en física para el análisis de movimiento oblicuo, y en GPS para determinar posiciones mediante trilateración. Su capacidad para trabajar con triángulos generales la convierte en una herramienta versátil en múltiples disciplinas.`,

  "area-con-trigonometria": `## Área de Triángulos con Trigonometría

### Fórmula Fundamental del Área

El área de un triángulo se puede calcular mediante trigonometría cuando se conocen dos lados y el ángulo comprendido entre ellos. La fórmula fundamental es:

$$A = \\frac{1}{2}ab \\sin C$$

donde $a$ y $b$ son dos lados del triángulo y $C$ es el ángulo comprendido entre ellos. Esta fórmula se deriva de la expresión clásica del área $A = \\dfrac{1}{2} \\times \\text{base} \\times \\text{altura}$, considerando que la altura $h = b \\sin C$ cuando el lado $a$ se toma como base.

La fórmula es simétrica y puede expresarse de tres formas equivalentes:

$$A = \\frac{1}{2}ab \\sin C = \\frac{1}{2}ac \\sin B = \\frac{1}{2}bc \\sin A$$

La elección de cuál usar depende de qué par de lados y ángulo comprendido se conozcan.

### Cálculo de Alturas Mediante Trigonometría

Las alturas de un triángulo se expresan fácilmente usando razones trigonométricas:

$$h_a = b \\sin C = c \\sin B$$

$$h_b = a \\sin C = c \\sin A$$

$$h_c = a \\sin B = b \\sin A$$

Estas expresiones permiten calcular cualquier altura sin necesidad de conocer las coordenadas de los vértices, únicamente con las longitudes de los lados y los ángulos.

### Área Usando la Ley de Senos

Combinando la fórmula del área con la Ley de Senos se obtiene una expresión en términos de un solo lado y los tres ángulos:

$$A = \\frac{a^2 \\sin B \\sin C}{2\\sin A}$$

Esta fórmula es particularmente útil cuando se conoce un lado y los tres ángulos del triángulo, o cuando se trabaja con el circuncírculo usando $a = 2R \\sin A$.

### Fórmula de Heron en Términos Trigonométricos

La fórmula de Heron relaciona el área con los tres lados: $A = \\sqrt{s(s-a)(s-b)(s-c)}$ donde $s = \\dfrac{a+b+c}{2}$ es el semiperímetro. Aunque no es directamente trigonométrica, se combina frecuentemente con razones trigonométricas para resolver problemas complejos.

### Ejemplo Resuelto 1

Calcular el área de un triángulo con $a = 12$ cm, $b = 8$ cm y $C = 30°$.

**Solución:** Aplicamos la fórmula directamente:

$$A = \\frac{1}{2}ab \\sin C = \\frac{1}{2}(12)(8)\\sin 30°$$

$$A = \\frac{1}{2}(96)(0.5) = \\frac{1}{2}(48) = 24 \\text{ cm}^2$$

### Ejemplo Resuelto 2

Un triángulo tiene lados $a = 10$, $b = 14$ y ángulo $A = 35°$. Hallar su área.

**Solución:** Primero encontramos el ángulo $B$ usando la Ley de Senos:

$$\\frac{\\sin B}{14} = \\frac{\\sin 35°}{10} \\implies \\sin B = \\frac{14(0.5736)}{10} = 0.803$$

$$B = \\arcsin(0.803) \\approx 53.4°$$

Calculamos el ángulo $C$: $C = 180° - 35° - 53.4° = 91.6°$.

$$A = \\frac{1}{2}(10)(14)\\sin 91.6° = 70(0.9996) \\approx 69.97 \\text{ unidades}^2$$

### Ejemplo Resuelto 3

Calcular el área de un triángulo equilátero de lado $a = 10$.

**Solución:** En un triángulo equilátero todos los ángulos son $60°$:

$$A = \\frac{1}{2}a^2 \\sin 60° = \\frac{1}{2}(100)\\frac{\\sqrt{3}}{2} = \\frac{100\\sqrt{3}}{4} = 25\\sqrt{3} \\approx 43.3 \\text{ unidades}^2$$

### Determinación del Área con Tres Ángulos y Un Lado

Cuando se conocen los tres ángulos y un lado, se usa la fórmula:

$$A = \\frac{a^2 \\sin B \\sin C}{2\\sin A}$$

**Ejemplo:** Triángulo con $a = 15$, $A = 40°$, $B = 60°$ (entonces $C = 80°$):

$$A = \\frac{225 \\times \\sin 60° \\times \\sin 80°}{2\\sin 40°} = \\frac{225(0.866)(0.985)}{2(0.643)} = \\frac{191.5}{1.286} \\approx 148.9$$

### Propiedades del Ángulo y el Área

El área de un triángulo con dos lados fijos es máxima cuando el ángulo comprendido es $90°$, ya que $\\sin 90° = 1$ es el valor máximo del seno. A medida que el ángulo se aleja de $90°$ hacia $0°$ o $180°$, el área disminuye hasta alcanzar cero, cuando el triángulo se degenera en una línea.

### Aplicaciones Prácticas

El cálculo de áreas con trigonometría es fundamental en topografía para medir superficies irregulares, en agricultura para calcular extensiones de terreno, en arquitectura para el diseño de plantas con formas triangulares, y en ingeniería para el cálculo de secciones transversales de vigas y estructuras. También se aplica en computación gráfica para el renderizado de superficies trianguladas en modelado 3D.`,

  "ecuaciones-trigonometricas": `## Ecuaciones Trigonométricas

### Concepto y Clasificación

Una ecuación trigonométrica es una igualdad que contiene al menos una función trigonométrica de la variable incógnita. Se clasifican en:

**Ecuaciones elementales:** De la forma $\\sin x = a$, $\\cos x = b$ o $\\tan x = c$, donde se busca directamente el ángulo.

**Ecuaciones factorizables:** Que pueden escribirse como producto de expresiones trigonométricas igualadas a cero.

**Ecuaciones cuadráticas:** De la forma $a\\sin^2 x + b\\sin x + c = 0$ o similar con coseno y tangente.

**Ecuaciones homogéneas:** Donde todos los términos tienen el mismo grado en funciones trigonométricas.

### Solución de Ecuaciones Elementales

Para resolver $\\sin x = a$ donde $-1 \\leq a \\leq 1$, la solución general es:

$$x = \\arcsin a + 2k\\pi \\quad \\text{o} \\quad x = \\pi - \\arcsin a + 2k\\pi, \\quad k \\in \\mathbb{Z}$$

Para $\\cos x = b$ donde $-1 \\leq b \\leq 1$:

$$x = \\pm\\arccos b + 2k\\pi, \\quad k \\in \\mathbb{Z}$$

Para $\\tan x = c$ con $c \\in \\mathbb{R}$:

$$x = \\arctan c + k\\pi, \\quad k \\in \\mathbb{Z}$$

La periodicidad de cada función determina el formato de la solución general.

### Ecuaciones con Ángulos Múltiplos

Cuando la ecuación involucra ángulos como $2x$, $3x$ o $x/2$, se resuelve la ecuación para el ángulo compuesto y luego se divide o multiplica para aislar la variable. Por ejemplo, para resolver $\\sin 2x = \\dfrac{1}{2}$:

$$2x = \\frac{\\pi}{6} + 2k\\pi \\quad \\text{o} \\quad 2x = \\frac{5\\pi}{6} + 2k\\pi$$

$$x = \\frac{\\pi}{12} + k\\pi \\quad \\text{o} \\quad x = \\frac{5\\pi}{12} + k\\pi$$

### Método de Sustitución

Muchas ecuaciones trigonométricas se reducen a ecuaciones algebraicas mediante sustitución. Si la ecuación es $2\\sin^2 x - \\sin x - 1 = 0$, se sustituye $u = \\sin x$:

$$2u^2 - u - 1 = 0 \\implies (2u + 1)(u - 1) = 0$$

$$u = -\\frac{1}{2} \\quad \\text{o} \\quad u = 1$$

$$\\sin x = -\\frac{1}{2} \\implies x = \\frac{7\\pi}{6} + 2k\\pi \\quad \\text{o} \\quad x = \\frac{11\\pi}{6} + 2k\\pi$$

$$\\sin x = 1 \\implies x = \\frac{\\pi}{2} + 2k\\pi$$

### Ejemplo Resuelto 1

Resolver $\\cos^2 x - \\sin^2 x = \\dfrac{1}{2}$ en $[0, 2\\pi)$.

**Solución:** Aplicamos la identidad de ángulo doble $\\cos 2x = \\cos^2 x - \\sin^2 x$:

$$\\cos 2x = \\frac{1}{2}$$

$$2x = \\frac{\\pi}{3} + 2k\\pi \\quad \\text{o} \\quad 2x = \\frac{5\\pi}{3} + 2k\\pi$$

$$x = \\frac{\\pi}{6} + k\\pi \\quad \\text{o} \\quad x = \\frac{5\\pi}{6} + k\\pi$$

En $[0, 2\\pi)$: $x = \\dfrac{\\pi}{6}$, $x = \\dfrac{5\\pi}{6}$, $x = \\dfrac{7\\pi}{6}$, $x = \\dfrac{11\\pi}{6}$.

### Ejemplo Resuelto 2

Resolver $2\\cos x + \\sqrt{3} = 0$ en $[0, 2\\pi)$.

**Solución:** Aislamos el coseno:

$$\\cos x = -\\frac{\\sqrt{3}}{2}$$

El coseno es negativo en los cuadrantes II y III. El ángulo de referencia es $\\dfrac{\\pi}{6}$:

$$x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6} \\quad \\text{o} \\quad x = \\pi + \\frac{\\pi}{6} = \\frac{7\\pi}{6}$$

### Ejemplo Resuelto 3

Resolver $\\sin x + \\cos x = 1$ en $[0, 2\\pi)$.

**Solución:** Elevamos ambos miembros al cuadrado:

$$\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = 1$$

$$1 + 2\\sin x \\cos x = 1$$

$$\\sin 2x = 0$$

$$2x = k\\pi \\implies x = \\frac{k\\pi}{2}$$

En $[0, 2\\pi)$: $x = 0, \\dfrac{\\pi}{2}, \\pi, \\dfrac{3\\pi}{2}$. Verificamos en la ecuación original: todas las soluciones excepto $x = \\dfrac{3\\pi}{2}$ son válidas. Al elevar al cuadrado se introducen soluciones espurias que deben descartarse.

### Verificación de Soluciones

Es indispensable verificar las soluciones en la ecuación original, especialmente cuando se realizan operaciones como elevar al cuadrado, multiplicar por expresiones que podrían ser cero, o aplicar identidades que restringen el dominio. Una solución válida debe satisfacer tanto la ecuación como las condiciones de dominio.

### Aplicaciones Prácticas

Las ecuaciones trigonométricas aparecen en el análisis de señales periódicas, oscilaciones mecánicas, circuitos eléctricos de corriente alterna, procesamiento de audio y video, y en la resolución de problemas de interferencia de ondas. Su dominio es esencial para cualquier campo que involucre fenómenos cíclicos o periódicos.`,
};
