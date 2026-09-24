export const geoStudyGuides: Record<string, string> = {
  "linea-recta-y-angulos": `## Línea Recta y Ángulos

### Conceptos Fundamentales
Una línea recta es el lugar geométrico de todos los puntos que se encuentran en una dirección determinada, extendiéndose indefinidamente en ambos sentidos. Un rayo tiene un origen y se extiende infinitamente en una dirección. Un segmento tiene dos extremos bien definidos.

Los ángulos se forman cuando dos semirrectas comparten un mismo vértice. La medida de un ángulo se expresa en grados (sistema sexagesimal), radianes (sistema métrico) o gradianes. La conversión fundamental es: 180° = π rad = 200 gon.

Los ángulos notabless son: agudo (0° < α < 90°), recto (α = 90°), obtuso (90° < α < 180°), llano (α = 180°), cóncavo (180° < α < 360°) y periestol (α = 360°).

### Fórmulas y Derivaciones
La suma de ángulos de vértice común alrededor de un punto es 360°. Si dos rectas se cortan, los ángulos opuestos por el vértice son congruentes (congruencia vertical). Los ángulos complementarios suman 90° y los suplementarios suman 180°.

Cuando una transversal corta dos rectas paralelas se forman ángulos alternos internos congruentes, alternos externos congruentes, correspondientes congruentes y consecutivos internos suplementarios. Si dos rectas son cortadas por una transversal y los ángulos alternos internos son congruentes, entonces las rectas son paralelas (condición necesaria y suficiente).

Para rectas en el plano cartesiano con pendientes m₁ y m₂: son paralelas si m₁ = m₂ y son perpendiculares si m₁ · m₂ = -1. El ángulo θ entre dos rectas se calcula como: tan θ = |(m₂ - m₁) / (1 + m₁ · m₂)|.

### Aplicaciones en el Examen
**Ejemplo 1:** Si dos rectas se cortan y uno de los ángulos formados mide 72°, determine todos los ángulos.
Los ángulos opuestos por el vértice miden 72°. Los ángulos suplementarios miden 180° - 72° = 108°. Por lo tanto los cuatro ángulos son: 72°, 108°, 72° y 108°.

**Ejemplo 2:** Determine el ángulo entre las rectas y = 3x + 1 y y = (-1/3)x + 5.
Aplicamos: tan θ = |(-1/3 - 3) / (1 + 3·(-1/3))| = |(-10/3) / (0)| → Las rectas son perpendiculares, θ = 90°.

### Errores Comunes
- Confundir ángulos alternos internos con consecutivos internos: los primeros son iguales, los segundos suman 180°.
- Olvidar que la condición m₁ · m₂ = -1 solo aplica cuando ambas pendientes existen (rectas no verticales).
- Usar radianes y grados simultáneamente sin conversión previa en un mismo problema.
- Asumir que dos rectas sin intersección visible son paralelas sin verificar sus pendientes.

### Problema Modelo
**Enunciado:** En el punto M(2, 3) se traza una recta perpendicular a y = 2x - 5. Encuentre la ecuación de esta recta.

**Solución:**
La pendiente de la recta dada es m₁ = 2. Para la perpendicular: m₂ = -1/m₁ = -1/2.
Usando la forma punto-pendiente: y - 3 = (-1/2)(x - 2).
Desarrollando: y - 3 = -x/2 + 1, entonces y = -x/2 + 4.
Verificación: m₁ · m₂ = 2 · (-1/2) = -1 ✓. Sustituyendo x = 2: y = -1 + 4 = 3 ✓.`,

  "triangulos": `## Triángulos

### Conceptos Fundamentales
Un triángulo es un polígono de tres lados y tres vértices. Clasificación por lados: equilátero (tres lados iguales), isósceles (dos lados iguales) y escaleno (tres lados diferentes). Clasificación por ángulos: acutángulo (tres ángulos agudos), rectángulo (un ángulo recto) y obtusángulo (un ángulo obtuso).

La suma interna de los ángulos de cualquier triángulo es siempre 180°. El ángulo exterior en cada vértice es igual a la suma de los dos ángulos interiores no adyacentes (teorema del ángulo exterior). La suma de los tres ángulos exteriores, tomando uno por vértice, es 360°.

### Fórmulas y Derivaciones
**Perímetro:** P = a + b + c, donde a, b, c son los tres lados.

**Área con base y altura:** A = (b · h) / 2. La altura es el segmento perpendicular desde un vértice al lado opuesto (o su prolongación).

**Fórmula de Herón:** Si s = P/2 (semi-perímetro), entonces A = √[s(s-a)(s-b)(s-c)]. Se obtiene al combinar la ley de los cosenos con la fórmula de área.

**Ley de los Senos:** a/sen A = b/sen B = c/sen C = 2R, donde R es el radio de la circunferencia circunscrita.

**Ley de los Cosenos:** a² = b² + c² - 2bc·cos A. Es generalización del Teorema de Pitágoras (cuando A = 90°, cos 90° = 0).

**Baricentro (G):** Punto de intersección de las medianas. Divide cada mediana en razón 2:1 contando desde el vértice. Coordenadas: G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3).

### Aplicaciones en el Examen
**Ejemplo:** En un triángulo ABC, a = 7, b = 8 y C = 60°. Encuentre c y el área.
Por la ley de los cosenos: c² = 49 + 64 - 2(7)(8)cos 60° = 113 - 56 = 57, entonces c = √57.
Área = (1/2)(7)(8)sen 60° = 28 · (√3/2) = 14√3.

### Errores Comunes
- Aplicar la ley de los cosenos para calcular el lado opuesto al ángulo incorrecto: a² usa el ángulo A, no B ni C.
- Olvidar que la ley de los senos puede dar dos soluciones ambiguas (caso ASS).
- Confundir la mediana con la mediatriz: la mediana va del vértice al punto medio del lado opuesto.
- Usar Herón sin calcular primero el semi-perímetro s.

### Problema Modelo
**Enunciado:** Un triángulo tiene lados a = 5, b = 12 y c = 13. Determine el tipo de triángulo, su área y el radio de la circunferencia circunscrita.

**Solución:**
Verificación de Pitágoras: 5² + 12² = 25 + 144 = 169 = 13². Es un triángulo rectángulo con hipotenusa c = 13.
Área: A = (5 · 12)/2 = 30.
Semi-perímetro: s = (5 + 12 + 13)/2 = 15.
Radio circunscrito: R = abc/(4A) = (5·12·13)/(4·30) = 780/120 = 6.5.
En un triángulo rectángulo, R siempre equivale a la mitad de la hipotenusa: 13/2 = 6.5 ✓.`,

  "poligonos": `## Polígonos

### Conceptos Fundamentales
Un polígono es una figura plana cerrada formada por segmentos de recta (lados) que se encuentran en sus extremos (vértices). Clasificación: convexos (todos los ángulos internos menores de 180°) y cóncavos (al menos un ángulo interno mayor de 180°). Un polígono es regular si todos sus lados son iguales y todos sus ángulos internos son iguales.

Un polígono de n lados tiene n vértices, n lados y n diagonales. El número total de diagonales es: D = n(n-3)/2.

### Fórmulas y Derivaciones
**Suma de ángulos internos:** S = (n - 2) · 180°. Se deriva dividiendo el polígono en (n-2) triángulos trazando diagonales desde un vértice.

**Ángulo interno de un polígono regular:** α = (n-2)·180°/n.

**Ángulo externo de un polígono regular:** β = 360°/n. Se verifica que α + β = 180°.

**Área de un polígono regular:** A = (n · a² · cot(π/n))/4, donde a es la longitud del lado. Alternativamente usando la apotema r: A = (n · a · r)/2 = (P · r)/2, donde P es el perímetro.

**Apotema:** r = a/(2·tan(π/n)). Se obtiene del triángulo rectángulo formado por el apotema, la mitad de un lado y el radio del polígono.

**Radio del polígono:** R = a/(2·sen(π/n)).

### Aplicaciones en el Examen
**Ejemplo 1:** ¿Cuántos lados tiene un polígulo cuyo ángulo interno mide 140°?
α = 140° → 140 = (n-2)·180/n → 140n = 180n - 360 → 40n = 360 → n = 9. Es un nonágono.

**Ejemplo 2:** Área de un hexágono regular de lado 6 cm.
Apotema: r = 6/(2·tan 30°) = 6/(2·(1/√3)) = 3√3.
A = (6 · 6 · 3√3)/2 = 54√3 ≈ 93.53 cm².

### Errores Comunes
- Usar la fórmula n·180° en lugar de (n-2)·180° para la suma de ángulos internos.
- Confundir el apotema con el radio del polígono: el radio va del centro a un vértice, el apotema va del centro al punto medio de un lado.
- Olvidar que la suma de ángulos externos de cualquier polígulo (regular o irregular) es siempre 360°.
- Calcular el ángulo interno usando 360°/n (que es el externo) por error de memoria.

### Problema Modelo
**Enunciado:** Un polígulo regular de 8 lados (octágono) tiene un apotema de 10 cm. Calcule el lado, el área y el perímetro.

**Solución:**
Para n = 8: r = a/(2·tan(π/8)). Despejando a: a = 2r·tan(π/8) = 2(10)·tan(22.5°).
tan(22.5°) = √2 - 1 ≈ 0.4142, entonces a = 20(√2 - 1) ≈ 8.28 cm.
Perímetro: P = 8 · 8.28 = 66.24 cm.
Área: A = (P · r)/2 = (66.24 · 10)/2 = 331.2 cm².
Verificación con la fórmula directa: A = (8 · (8.28)² · cot(22.5°))/4 ≈ 331.2 cm² ✓.`,

  "cuadrilateros": `## Cuadriláteros

### Conceptos Fundamentales
Un cuadrilátero es un polígono de cuatro lados y cuatro vértices. La suma de sus ángulos internos es siempre 360° (se deriva de (4-2)·180° = 360°).

**Clasificación principal:**
- Paralelogramos: lados opuestos paralelos (rombo, rectángulo, cuadrado, romboide).
- Trapezoide: ningún par de lados paralelos.
- Trapecio: exactamente un par de lados paralelos (bases).
- Trapecio isósceles: bases paralelas y lados no paralelos iguales.

**Propiedades de los paralelogramos:** Los lados opuestos son congruentes, los ángulos opuestos son congruentes, los diagonales se bisecan entre sí.

### Fórmulas y Derivaciones
**Área del rectángulo:** A = base · altura = b · h.

**Área del rombo:** A = (d₁ · d₂)/2, donde d₁ y d₂ son las diagonales. Las diagonales del rombo son perpendiculares entre sí.

**Área del cuadrado:** A = a² (con lado a) o A = d²/2 (con diagonal d).

**Área del trapecio:** A = (b₁ + b₂) · h / 2. Se obtiene promediando las bases y multiplicando por la altura.

**Área del trapecio isósceles:** Admite fórmula con los lados oblicuos y los ángulos de inclinación: A = (b₁ + b₂)/2 · l · sen θ, donde l es el lado oblicuo y θ el ángulo con la base.

**Área general de cualquier cuadrilátero convexo:** A = (1/2)|d₁ · d₂ · sen θ|, donde θ es el ángulo entre las diagonales.

### Aplicaciones en el Examen
**Ejemplo 1:** Un rombo tiene diagonales de 10 cm y 24 cm. Encuentre el lado y el área.
Área = (10·24)/2 = 120 cm².
Las diagonales se bisecan perpendicularmente: el lado es hipotenusa de un triángulo rectángulo con catetos 5 y 12.
Lado = √(25 + 144) = √169 = 13 cm.

**Ejemplo 2:** Un trapecio tiene bases de 8 y 14 cm y altura 6 cm. Encuentre el área.
A = (8 + 14) · 6 / 2 = 22 · 3 = 66 cm².

### Errores Comunes
- Usar la fórmula del trapecio con las bases invertidas no afecta el resultado (la suma es commutativa), pero olvidar la altura sí genera error.
- Asumir que un rombo es automáticamente un cuadrado: solo si sus diagonales son iguales.
- Olvidar que en un paralelogramo las diagonales no necesariamente son perpendiculares (solo en el rombo).
- Confundir la diagonal con el lado en la fórmula del área del cuadrado.

### Problema Modelo
**Enunciado:** Un paralelogramo tiene lados de 10 cm y 17 cm, y una diagonal de 21 cm. Encuentre el área.

**Solución:**
En un paralelogramo, la suma de los cuadrados de las diagonales es igual a dos veces la suma de los cuadrados de los lados: d₁² + d₂² = 2(a² + b²).
21² + d₂² = 2(10² + 17²) → 441 + d₂² = 2(100 + 289) = 778.
d₂² = 337 → d₂ = √337.
Usamos la fórmula de área con semiperímetro de los triángulos: Aplicando la ley de los cosenos en el triángulo con lados 10, 17 y 21:
cos θ = (10² + 17² - 21²)/(2·10·17) = (100 + 289 - 441)/340 = -52/340 = -13/85.
Área = 10 · 17 · sen θ, donde sen θ = √(1 - (13/85)²) = √(1 - 169/7225) = √(7056/7225) = 84/85.
Área = 170 · (84/85) = 168 cm².`,

  "circumferencia": `## Circunferencia

### Conceptos Fundamentales
La circunferencia es el lugar geométrico de todos los puntos del plano que están a una distancia constante (radio r) de un punto fijo (centro O). El círculo es la región del plano delimitada por la circunferencia.

**Elementos principales:** Radio (r), diámetro (d = 2r), cuerda (segmento entre dos puntos de la circunferencia), arco (porción de la circunferencia entre dos puntos), tangente (recta que toca la circunferencia en un solo punto) y secante (recta que intersecta la circunferencia en dos puntos).

**Ecuación de la circunferencia:** (x - h)² + (y - k)² = r², donde (h, k) es el centro. Forma general: x² + y² + Dx + Ey + F = 0, con centro en (-D/2, -E/2) y r = √(D²/4 + E²/4 - F).

### Fórmulas y Derivaciones
**Longitud de arco:** L = r · θ (θ en radianes) o L = (n°/360°) · 2πr.

**Área del sector circular:** A = (r² · θ)/2 (θ en radianes) o A = (n°/360°) · πr².

**Área del segmento circular:** A_sector - A_triángulo = (r²θ)/2 - (r² sen θ)/2 = (r²/2)(θ - sen θ).

**Área del anillo (corona circular):** A = π(R² - r²), donde R es el radio exterior y r el radio interior.

**Ángulo inscrito:** Mide la mitad del arco que subtiende. Si un ángulo inscrito subtiende un diámetro, es un ángulo recto (Teorema de Tales).

**Ángulo central:** Su medida es igual al arco que subtiende. Relación: ángulo central = 2 × ángulo inscrito sobre el mismo arco.

**Ángulo entre tangente y cuerda:** Igual al ángulo inscrito que subtiende la misma cuerda.

### Aplicaciones en el Examen
**Ejemplo 1:** Un arco mide 7 cm en una circunferencia de radio 14 cm. Encuentre el ángulo central en grados.
L = rθ → 7 = 14θ → θ = 0.5 rad = 0.5 · (180/π) ≈ 28.65°.

**Ejemplo 2:** Encuentre la ecuación de la circunferencia que pasa por los puntos (1,1), (5,1) y (1,5).
El centro es el punto medio de la hipotenusa del triángulo rectángulo formado: O = ((1+5)/2, (1+5)/2) = (3,3).
Radio: r² = (3-1)² + (3-1)² = 8, entonces r = 2√2.
Ecuación: (x-3)² + (y-3)² = 8.

### Errores Comunes
- Usar grados en fórmulas que requieren radianes (longitud de arco, área de sector).
- Confundir el ángulo inscrito con el ángulo central: el inscrito es siempre la mitad.
- Olvidar que la tangente es perpendicular al radio en el punto de tangencia.
- En la ecuación general, confundir los signos de D y E al calcular el centro.

### Problema Modelo
**Enunciado:** Un tanque de agua tiene forma circular con radio 5 m. Se introduce un tubo que corta la circunferencia formando una cuerda de 8 m. Determine la distancia del centro al tubo y el área del segmento circular resultante.

**Solución:**
La distancia del centro a la cuerda (distancia perpendicular): d = √(r² - (c/2)²) = √(25 - 16) = √9 = 3 m.
El ángulo central: cos(θ/2) = d/r = 3/5, entonces θ/2 = arccos(0.6) ≈ 53.13° y θ ≈ 106.26° = 1.855 rad.
Área del sector: A_s = (5² · 1.855)/2 = 23.19 m².
Área del triángulo: A_t = (1/2) · 8 · 3 = 12 m².
Área del segmento: A = 23.19 - 12 = 11.19 m².`,

  "puntos-notables": `## Puntos Notables del Triángulo

### Conceptos Fundamentales
Los puntos notables son puntos de intersección de elementos constructivos de un triángulo. Cada uno tiene propiedades geométricas y algebraicas fundamentales.

**Baricentro (G):** Intersección de las medianas. Es el centro de gravedad del triángulo. Cada mediana divide al triángulo en dos regiones de igual área.

**Incentro (I):** Intersección de las bisectrices internas. Es el centro de la circunferencia inscrita (incírculo), tangente a los tres lados. Su distancia a cada lado es igual (radio inradius r).

**Ortocentro (H):** Intersección de las alturas. Puede estar dentro del triángulo (acutángulo), en el vértice del ángulo recto (rectángulo) o fuera del triángulo (obtusángulo).

**Circuncentro (O):** Intersección de las mediatrices. Es el centro de la circunferencia circunscrita, que pasa por los tres vértices. Equidista de los tres vértices.

**Centro de Euler:** Los puntos G, H y O son colineales y están en la recta de Euler, con HG = 2 · GO.

### Fórmulas y Derivaciones
**Coordenadas del baricentro:** G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3).

**Radio inradius:** r = A/s, donde A es el área y s el semi-perímetro.

**Coordenadas del incentro (usando lados como pesos):** I = (ax₁ + bx₂ + cx₃)/P, (ay₁ + by₂ + cy₃)/P), donde a, b, c son los lados opuestos a los vértices y P es el perímetro.

**Circunradius:** R = abc/(4A).

**Coordenadas del circuncentro:** Se resuelve el sistema de ecuaciones de las mediatrices, o usando la fórmula con determinantes basada en las coordenadas de los vértices.

**Relación de Euler entre R y r:** d² = R(R - 2r), donde d es la distancia entre el incentro y el circuncentro. Esto implica R ≥ 2r (desigualdad de Euler).

### Aplicaciones en el Examen
**Ejemplo 1:** Triángulo con vértices A(0,0), B(6,0) y C(0,8).
Baricentro: G = (2, 8/3).
Lados: a = √(36+64) = 10, b = 8, c = 6. Semi-perímetro: s = 12.
Área: A = (6·8)/2 = 24.
Inradius: r = 24/12 = 2.
Incentro: I = (10·0 + 8·6 + 6·0)/24, (10·0 + 8·0 + 6·8)/24) = (2, 2).
Circunradius: R = (10·8·6)/(4·24) = 480/96 = 5.
Circuncentro (hipotenusa): O = (3, 4) — punto medio de la hipotenusa.

### Errores Comunes
- Confundir las medianas con las mediatrices: las medianas van del vértice al punto medio del lado opuesto; las mediatrices son perpendiculares a los lados por sus puntos medios.
- Olvidar que el incentro siempre está dentro del triángulo, pero el ortocentro y circuncentro pueden estar fuera.
- Usar las coordenadas del incentro con los lados intercambiados: el peso a corresponde al vértice A (opuesto al lado a).
- Asumir que el baricentro es el mismo punto que el centroide de masas en objetos no homogéneos.

### Problema Modelo
**Enunciado:** En un triángulo equilátero de lado 6 cm, determine la distancia del baricentro a cada vértice y a cada lado.

**Solución:**
En un triángulo equilátero, baricentro, incentro, circuncentro y ortocentro coinciden en un solo punto.
Altura: h = 6·(√3/2) = 3√3.
El baricentro divide la mediana (que es también la altura) en razón 2:1.
Distancia a un vértice (circunradius): R = (2/3)h = 2√3 ≈ 3.46 cm.
Distancia a un lado (inradius): r = (1/3)h = √3 ≈ 1.73 cm.
Verificación: R + r = 3√3 = h ✓ y R = 2r ✓.`,

  "prop-y-semejanza": `## Proporcionalidad y Semejanza

### Conceptos Fundamentales
**Teorema de Tales:** Si una recta paralela a un lado de un triángulo corta a los otros dos lados, los segmentos formados son proporcionales. Consecuencia: un triángulo formado por una línea paralela a una base es semejante al triángulo original.

**Teorema de la base paralela:** En un triángulo, si D ∈ AB y E ∈ AC tale que DE ∥ BC, entonces AD/DB = AE/EC.

**Semejanza de triángulos:** Dos triángulos son semejantes si tienen los ángulos correspondientes iguales. Los criterios son: AA (dos ángulos iguales), LAL (dos lados proporcionales y el ángulo entre ellos) y LLL (tres lados proporcionales).

**Razón de semejanza (k):** Si el triángulo semejante tiene lados k veces mayores, entonces: perímetro se multiplica por k, áreas por k², volúmenes por k³.

### Fórmulas y Derivaciones
**Relaciones en un triángulo con paralela:** Si DE ∥ BC con AD/AB = k, entonces: DE = k · BC, el área del triángulo ADE = k² · área de ABC.

**Coeficiente de proporcionalidad directa:** a/a' = b/b' = c/c' = k, donde los primados corresponden al triángulo semejante.

**Área de un triángulo semejante:** A'/A = k², donde k es la razón de semejanza (k = lado nuevo/lado original).

**Recta de los puntos medios:** La recta que une los puntos medios de dos lados de un triángulo es paralela al tercer lado y mide exactamente la mitad.

**Triángulo medial:** El triángulo formado por los puntos medios de un triángulo tiene área igual a 1/4 del original y es semejante con k = 1/2.

**Apotema y radio en figuras semejantes:** Si k es la razón de semejanza, apotemas y radios se multiplican por k (son longitudes), no por k².

### Aplicaciones en el Examen
**Ejemplo 1:** En un triángulo ABC, D es punto medio de AB y E es punto medio de AC. Si BC = 10 cm, ¿cuánto mide DE?
Por el teorema de los puntos medios: DE = BC/2 = 5 cm.

**Ejemplo 2:** Dos triángulos semejantes tienen áreas de 25 cm² y 100 cm². Si el lado del primero es 5 cm, ¿cuánto mide el lado correspondiente del segundo?
k² = 100/25 = 4, entonces k = 2.
Lado del segundo: 5 · 2 = 10 cm.

**Ejemplo 3:** En un triángulo ABC, D ∈ AB tal que AD = 3 y DB = 2. Una paralela a BC por D corta a AC en E. Si BC = 10, calcule DE.
k = AD/AB = 3/5, entonces DE = (3/5)·10 = 6.

### Errores Comunes
- Usar la razón de áreas en lugar de la razón de longitudes (o viceversa): longitudes se comparan directamente, áreas al cuadrado.
- Olvidar que la semejanza requiere ángulos iguales, no solo lados proporcionales (triángulos con lados proporcionales pero ángulos diferentes NO son semejantes).
- Aplicar el teorema de Tales sin verificar que la recta sea efectivamente paralela al lado.
- Confundir la razón de semejanza k con su recíproco 1/k al determinar cuál triángulo es el original.

### Problema Modelo
**Enunciado:** En el triángulo ABC con AB = 12, BC = 18 y AC = 15, se traza una paralela a BC que corta AB en D y AC en E, tal que el área de ADE es 1/9 del área de ABC. Determine AD, AE, DE y el perímetro de ADE.

**Solución:**
A_DE/A_ABC = 1/9 = k², entonces k = 1/3.
AD = k · AB = (1/3) · 12 = 4.
AE = k · AC = (1/3) · 15 = 5.
DE = k · BC = (1/3) · 18 = 6.
Perímetro de ADE = 4 + 5 + 6 = 15.
Perímetro de ABC = 12 + 18 + 15 = 45.
Verificación: 15 = (1/3) · 45 ✓.`,

  "relaciones-metricas": `## Relaciones Métricas en el Triángulo Rectángulo

### Conceptos Fundamentales
En un triángulo rectángulo, la altura trazada desde el vértice del ángulo recto a la hipotenusa genera dos triángulos que son semejantes entre sí y semejantes al triángulo original. Estas semejanza producen las relaciones métricas fundamentales.

**Elementos:** Triángulo ABC con C = 90°, altura h = CD (D sobre AB), proyecciones p = AD y q = DB, catetos a = BC y b = AC, hipotenusa c = AB = p + q.

### Fórmulas y Derivaciones
**Teorema de Pitágoras (general):** a² + b² = c². Se demuestra usando semejanza: a² = c · q y b² = c · p.

**Relaciones métricas fundamentales:**
1. h² = p · q (la altura es media geomínica de las proyecciones).
2. a² = c · q (el cateto es media geomínica de la hipotenusa y su proyección).
3. b² = c · p (ídem para el otro cateto).
4. a · b = c · h (producto de catetos = hipotenusa por altura).
5. 1/h² = 1/a² + 1/b² (relación armónica de la altura con los catetos).

**Derivación de h² = p · q:**
Los triángulos ADC y CDB son semejantes (ángulos correspondientes iguales por ser ambos rectángulos y compartir ángulos agudos con el original).
ADC ∼ CDB → AD/CD = CD/DB → p/h = h/q → h² = p · q.

**Derivación de a² = c · q:**
CDB ∼ ACB → CB/AB = DB/CB → a/c = q/a → a² = c · q.

**Derivación de a · b = c · h:**
Área del triángulo = (a · b)/2 = (c · h)/2, entonces a · b = c · h.

### Aplicaciones en el Examen
**Ejemplo 1:** En un triángulo rectángulo, h = 6 y p = 4. Encuentre q, a, b y c.
q = h²/p = 36/4 = 9.
c = p + q = 13.
a² = c · q = 13 · 9 = 117 → a = √117 = 3√13.
b² = c · p = 13 · 4 = 52 → b = √52 = 2√13.
Verificación Pitágoras: a² + b² = 117 + 52 = 169 = 13² = c² ✓.

**Ejemplo 2:** Catetos a = 5, b = 12. Encuentre h, p y q.
c = √(25 + 144) = 13.
h = (a·b)/c = 60/13 ≈ 4.62.
q = a²/c = 25/13 ≈ 1.92.
p = b²/c = 144/13 ≈ 11.08.
Verificación: p + q = 169/13 = 13 = c ✓.

### Errores Comunes
- Aplicar h² = p · q sin verificar que h es efectivamente la altura al hipotenusa (no una ceviana arbitraria).
- Confundir p con q: p es la proyección del cateto b (adyacente al ángulo en A) y q es la proyección del cateto a.
- Olvidar que 1/h² = 1/a² + 1/b² es equivalente a h² = a²b²/(a²+b²).
- Usar a² = c · p en lugar de a² = c · q (el cateto a se proyecta sobre q, no sobre p).

### Problema Modelo
**Enunciado:** En un triángulo rectángulo, la altura divide la hipotenusa en segmentos de 3 cm y 12 cm. Determine todas las dimensiones del triángulo.

**Solución:**
Datos: p = 3, q = 12.
h² = p · q = 3 · 12 = 36 → h = 6 cm.
c = p + q = 3 + 12 = 15 cm.
a² = c · q = 15 · 12 = 180 → a = √180 = 6√5 ≈ 13.42 cm.
b² = c · p = 15 · 3 = 45 → b = √45 = 3√5 ≈ 6.71 cm.
Verificaciones:
Pitágoras: (6√5)² + (3√5)² = 180 + 45 = 225 = 15² ✓.
Producto: a · b = 6√5 · 3√5 = 90 = 15 · 6 = c · h ✓.
Relación armónica: 1/6² = 1/180 + 1/45 → 1/36 = 1/180 + 4/180 = 5/180 = 1/36 ✓.`,
};
