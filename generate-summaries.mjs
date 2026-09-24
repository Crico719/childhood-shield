import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const courseContentPath = 'C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\course-content.ts';
const content = readFileSync(courseContentPath, 'utf-8');

// Extract all module slugs with their positions
const slugRegex = /slug: "([^"]+)"/g;
const modules = [];
let match;
while ((match = slugRegex.exec(content)) !== null) {
  // Find which subject this module belongs to
  const beforeSlug = content.substring(0, match.index);
  let subject = 'unknown';
  if (beforeSlug.includes('"geometria": [')) subject = 'geometria';
  if (beforeSlug.includes('"cokito-rm": [')) subject = 'cokito-rm';
  if (beforeSlug.includes('historiaModulesPart')) subject = 'historia';
  
  modules.push({ slug: match[1], subject, index: match.index });
}

console.log(`Found ${modules.length} modules`);

// Generate summaries based on slug and subject
function generateSummary(slug, subject) {
  const summaries = {
    // GEOMETRÍA
    'linea-recta-y-angulos': 'Diagrama de dos rectas que se cortan formando ángulos. Se muestran los ángulos complementarios (suman 90°), suplementarios (suman 180°) y opuestos por el vértice (iguales). Los colores identifican cada tipo de ángulo.',
    'triangulos': 'Representación de un triángulo con sus tres vértices, lados y ángulos internos. Se marca la altura, la mediana y los puntos notables. Los colores distinguen cada elemento geométrico.',
    'poligonos': 'Figuras geométricas con múltiples lados: triángulo, cuadrilátero, pentágono y hexágono. Se muestran los ángulos internos y la relación con el número de lados.',
    'cuadrilateros': 'Diagrama comparativo de cuadriláteros: rectángulo, rombo, trapecio y cuadrilátero general. Cada figura muestra sus propiedades de lados paralelos y ángulos.',
    'circunferencia': 'Circunferencia con centro O, radio r, diámetro d y cuerda. Se marcan los arcos, ángulos inscritos y la relación entre sus elementos.',
    'puntos-notables': 'Triángulo con sus cuatro puntos notables: ortocentro (H), baricentro (G), circuncentro (O) e incentro (I). La recta de Euler conecta tres de ellos.',
    'prop-y-semejanza': 'Dos triángulos semejantes con sus lados proporcionales. Se muestra la razón de semejanza k y la relación entre ángulos correspondientes.',
    'relaciones-metricas': 'Triángulo rectángulo con las relaciones métricas: cateto = hipotenusa × seno del ángulo opuesto. Se marcan las proyecciones y la altura.',
    'poligonos-regulares': 'Pentágono y hexágono regulares con radios de circunferencias circunscrita e inscrita. Se muestran los apotemas y la fórmula del área.',
    'areas': 'Comparación visual de áreas: triángulo, rectángulo, trapecio y circunferencia. Cada figura muestra su fórmula de área correspondiente.',
    'rectas-y-planos': 'Representación 3D de rectas y planos en el espacio. Se muestran las relaciones: paralelas, que se cortan y oblicuas.',
    'prisma-y-cilindro': 'Prisma hexagonal y cilindro con sus dimensiones: altura, radio, arista. Se muestran las áreas de las bases y laterales.',
    'piramide-y-cono': 'Pirámide cuadrangular y cono con sus vértices, aristas y alturas. Se marca la relación entre la altura y el apotema.',
    'esfera': 'Esfera con centro O, radio R, y puntos sobre la superficie. Se muestran los círculos máximos y la fórmula del volumen.',
    'la-recta': 'Recta en el plano cartesiano con pendiente m, punto de intersección con el eje Y y ángulo de inclinación.',
    'circunferencia-y-parabola': 'Circunferencia y parábola superpuestas. Se muestran los focos, vértices y ejes de simetría de cada curva.',
    'elipse-e-hiperbola': 'Elipse con focos F₁, F₂ y ejes mayores/menores. Al lado, hipérbola con sus asíntotas y focos.',
    // GEOMETRÍA BATCH 1
    'pitagoras-y-aplicaciones': 'Triángulo rectángulo con catetos a, b e hipotenusa c. Se muestra la relación a² + b² = c² con cuadrados sobre cada lado.',
    'teorema-de-tales': 'Triángulo con una recta paralela a la base que corta los lados en proporción. Se marcan los segmentos proporcionales.',
    'semejanza-avanzada': 'Dos triángulos semejantes con la razón de semejanza k. Se muestra la relación entre áreas (k²) y perímetros (k).',
    'criterios-de-congruencia': 'Pares de triángulos congruentes con los criterios LAL, LAA y ASA. Cada par muestra los elementos iguales.',
    'area-triangulos-avanzado': 'Triángulo con diferentes métodos de cálculo de área: base-altura, semiperímetro de Herón y coordenadas.',
    'circunferencia-circunscrita-inscrita': 'Triángulo con sus tres circunferencias notables: circunscrita (pasa por vértices), inscrita (toca lados) y los radios correspondientes.',
    'potencia-de-un-punto': 'Punto exterior a una circunferencia con secantes y tangentes. Se muestra la fórmula de potencia: PA × PB = PT².',
    'angulos-inscritos-centrales': 'Circunferencia con ángulo central e inscrito que subtenden el mismo arco. Se marca la relación: central = 2 × inscrito.',
    // GEOMETRÍA BATCH 2
    'transformaciones-isometricas': 'Figura original con sus transformaciones: traslación, rotación y reflexión. Cada transformación se muestra en un color diferente.',
    'simetria-ejes-y-puntos': 'Figuras con ejes de simetría axial y centro de simetría. Se marcan los puntos correspondientes.',
    'homotecia': 'Dos figuras semejantes relacionadas por homotecia con centro O y razón k. Se muestran las rectas concurrentes.',
    'coordenadas-cartesianas': 'Plano cartesiano con puntos A(x₁,y₁) y B(x₂,y₂). Se muestra la distancia entre ellos y el punto medio.',
    'area-coordenadas': 'Polígono en el plano cartesiano con el método de las coordenadas (shoelace) para calcular su área.',
    'recta-en-coordenadas': 'Recta en el plano cartesiano con su ecuación y = mx + b, pendiente m y punto de corte con el eje Y.',
    'circunferencia-coordenadas': 'Circunferencia en el plano cartesiano con centro (h,k) y radio r. Se muestra la ecuación canónica.',
    'distancia-punto-recta': 'Punto P y recta r en el plano. Se muestra la distancia perpendicular y la fórmula de cálculo.',
    // GEOMETRÍA BATCH 3
    'razones-trigonometricas': 'Triángulo rectángulo con los ángulos y los lados. Se muestran las razones: seno, coseno y tangente.',
    'identidades-trigonometricas': 'Círculo trigonométrico con las identidades fundamentales: pitágorica, tangente y de doble ángulo.',
    'suma-diferencia-trig': 'Diagrama de las fórmulas de suma y diferencia para seno y coseno. Se muestran los ángulos α y β.',
    'ley-de-senos': 'Triángulo general con los lados a, b, c y ángulos A, B, C. Se muestra la relación a/sen(A) = b/sen(B) = c/sen(C).',
    'ley-de-cosenos': 'Triángulo con dos lados y el ángulo comprendido. Se muestra la fórmula del coseno para el tercer lado.',
    'area-con-trigonometria': 'Triángulo con dos lados y el ángulo entre ellos. Se muestra la fórmula A = ½ab·sen(C).',
    'ecuaciones-trigonometricas': 'Gráfica de seno y coseno con las soluciones de ecuaciones trigonométricas marcadas.',
    'aplicaciones-trigonometricas': 'Problema práctico: avión con ángulo de elevación y distancia. Se muestra la aplicación de razones trigonométricas.',
    // GEOMETRÍA BATCH 4
    'vectores-en-el-plano': 'Vectores en el plano cartesiano con componentes, magnitud y dirección. Se muestran los ejes X e Y.',
    'operaciones-vectores': 'Vectores sumados por el método del paralelogramo y la resta por el método del triángulo.',
    'producto-escalar': 'Dos vectores con el ángulo θ entre ellos. Se muestra la fórmula del producto escalar: a·b = |a||b|cos(θ).',
    'rectas-vectorial': 'Recta con vector director y punto. Se muestran las ecuaciones paramétricas y vectorial.',
    'elipse-analitica': 'Elipse con ejes mayor y menor, focos F₁, F₂ y excentricidad. Se muestra la ecuación estándar.',
    'hiperbola-analitica': 'Hipérbola con sus dos ramas, asíntotas y focos. Se marca la relación c² = a² + b².',
    'parabola-analitica': 'Parábola con foco F, directriz y vértice. Se muestra la ecuación y² = 4px.',
    'locus-geometrico': 'Lugar geométrico formado por puntos que cumplen una condición. Se muestran ejemplos: circunferencia, elipse, hipérbola.',
    // GEOMETRÍA BATCH 5
    'tangentes-circunferencia': 'Punto exterior con dos tangentes a una circunferencia. Se marca el ángulo rectángulo con el radio.',
    'poligonos-inscritos-circunscritos': 'Polígono regular inscrito y circunscrito en una circunferencia. Se muestran los radios.',
    'solidos-compostos': 'Combinación de prismas y cilindros. Se muestran las dimensiones de cada sólido.',
    'secciones-solidos': 'Prisma y cono cortados por planos. Se muestran las secciones resultantes.',
    'areas-superficiales-avanzado': 'Sólidos con sus áreas superficiales desglosadas: bases, lateral y total.',
    'volumenes-avanzados': 'Sólidos de revolución y compuestos con sus fórmulas de volumen.',
    'recta-plano-espacio': 'Recta y plano en el espacio tridimensional con sus relaciones: paralela, que corta y contenida.',
    'angulos-en-el-espacio': 'Ángulos diedros entre planos y ángulos entre rectas y planos en el espacio.',
    // GEOMETRÍA BATCH 6
    'teorema-ptolomeo': 'Cuadrilátero cíclico con diagonales y lados. Se muestra la relación: AC × BD = AB × CD + AD × BC.',
    'teorema-stewart': 'Triángulo con una ceviana. Se muestra la relación entre la ceviana y los lados del triángulo.',
    'circunferencia-nueve-puntos': 'Triángulo con los 9 puntos notables: puntos medios, pies de alturas y puntos de Euler.',
    'triangulo-de-euler': 'Triángulo con la recta de Euler que conecta el ortocentro, baricentro y circuncentro.',
    'inversiva-geometria': 'Inversión respecto a una circunferencia. Se muestran puntos y sus inversos.',
    'numeros-complejos-geometria': 'Plano complejo con números complejos representados como vectores. Se muestra la rotación.',
    'coordenadas-polares': 'Punto en coordenadas polares (r, θ) y su conversión al sistema cartesiano.',
    'curvas-notables': 'Espiral de Arquímedes, cardioide y lemniscata con sus ecuaciones polares.',
    // GEOMETRÍA BATCH 7
    'metodos-resolucion-geometrica': 'Diagrama de flujo mostrando los métodos de resolución: coordinados, trigonométricos y clásicos.',
    'problemas-compuestos-geometrica': 'Problema que combina múltiples conceptos geométricos: triángulos, circunferencias y áreas.',
    'optimizacion-geometrica': 'Figuras con áreas o perímetros máximos/mínimos bajo restricciones.',
    'fractales-introduccion': 'Conjunto de Mandelbrot y triángulo de Sierpinski mostrando autosimilitud.',
    'estimacion-geometrica': 'Métodos de estimación de áreas por aproximación de figuras conocidas.',
    // COKITO-RM
    'relaciones-de-parentesco': 'Árbol genealógico con las relaciones de parentesco: directo, colateral y por matrimonio.',
    'relaciones-de-tiempo': 'Línea de tiempo con fechas, intervalos y operaciones temporales.',
    'verdades-y-mentiras': 'Tabla lógica con proposiciones verdaderas y falsas. Se muestran las reglas de deducción.',
    'orden-de-informacion': 'Secuencia de eventos con el orden lógico establecido por las premisas.',
    'razonamiento-inductivo': 'Patrón numérico con casos específicos que llevan a una generalización.',
    'sistemas-de-numeracion': 'Comparación de sistemas: decimal, binario, hexadecimal y sus conversiones.',
    'criptoaritmetica': 'Operación aritmética donde cada letra representa un dígito diferente.',
    'sucesiones': 'Secuencia numérica con la regla de formación y los primeros términos.',
    'analogias-y-distribuciones': 'Relaciones de correspondencia entre elementos de dos conjuntos.',
    'series': 'Suma de términos de una sucesión con las propiedades de convergencia.',
    'sumatorias': 'Notación sigma con las propiedades de las sumatorias.',
    'cuatro-operaciones': 'Operaciones aritméticas fundamentales con propiedades y trucos de cálculo.',
    'metodos-practicos': 'Técnicas de cálculo rápido: redondeo, distribución y factorización.',
    'planteo-de-ecuaciones': 'Traducción de problemas verbales a ecuaciones matemáticas.',
    'edades': 'Problemas de edades con relaciones entre personas.',
    'cronometria': 'Problemas de tiempo: duración, inicio, final y zonas horarias.',
    'promedios': 'Cálculo de media, mediana y moda con datos agrupados.',
    'operadores-matematicos': 'Símbolos y operadores: +, -, ×, ÷, potencia, raíz.',
    'operadores-binarios': 'Operaciones en sistema binario: AND, OR, NOT, XOR.',
    'conteo-de-figuras': 'Figuras geométricas superpuestas con técnicas de conteo.',
    'areas-sombreadas-y-perimetros': 'Figuras con áreas sombreadas y cálculo de perímetros.',
    'analisis-combinatorio': 'Permutaciones, combinaciones y el principio de conteo.',
    'probabilidades': 'Eventos con probabilidades calculadas por frecuencia y classical.',
    // COKITO-RM BATCH 1
    'teoria-de-conjuntos': 'Diagrama de Venn con operaciones de conjuntos: unión, intersección, complemento y diferencia.',
    'diagramas-de-venn': 'Representación visual de 2 y 3 conjuntos con las regiones sombreadas.',
    'algebra-booleana': 'Circuitos lógicos con operadores AND, OR, NOT y sus equivalentes.',
    'tablas-de-verdad': 'Tabla de verdad para proposiciones compuestas con todas las combinaciones.',
    'logica-condicional': 'Diagrama de flujo del condicional: si P entonces Q, contrapositiva, inversa.',
    'logica-bicondicional': 'Equivalencia lógica: si y solo si. Tabla de verdad y propiedades.',
    'cuantificadores-logica': 'Cuantificador universal (∀) y existencial (∃) con sus negaciones.',
    'paradojas-logicas': 'Representación del mentiroso y otras paradojas lógicas clásicas.',
    // COKITO-RM BATCH 2
    'divisibilidad-residuos': 'Tabla de residuos y criterios de divisibilidad para 2, 3, 5, 7, 11.',
    'mcm-mcd': 'MCM y MCD calculados por el método de Euclides y por factorización.',
    'congruencias-modulares': 'Recta numérica con congruencias módulo n y residuos.',
    'primalidad-factorizacion': 'Criba de Eratóstenes y descomposición en factores primos.',
    'propiedades-potencias': 'Leyes de exponentes con ejemplos: multiplicación, división, potencia de potencia.',
    'igualdades-notables': 'Identidades algebraicas: (a+b)², (a-b)², (a+b)(a-b), a³+b³.',
    'desigualdades-elementales': 'Desigualdad triangular y AM-GM en el plano cartesiano.',
    'raices-y-radicales': 'Simplificación y racionalización de expresiones con radicales.',
    // COKITO-RM BATCH 3
    'problemas-mezclas': 'Diagrama de mezclas con concentraciones iniciales y finales.',
    'problemas-trabajo-tiempo': 'Tasas de trabajo combinadas de múltiples trabajadores.',
    'problemas-velocidad': 'Diagrama de movimiento: distancia, velocidad y tiempo con corriente.',
    'problemas-financieros': 'Gráfica de interés simple vs compuesto con el tiempo.',
    'porcentajes-tantos': 'Diagrama de descuentos, aumentos y variación porcentual.',
    'proporcionalidad': 'Gráficas de proporcionalidad directa e inversa.',
    'problemas-densidad': 'Relación masa-volumen-densidad con ejemplos prácticos.',
    'problemas-edad-avanzados': 'Línea de tiempo con edades de múltiples personas en diferentes momentos.',
    // COKITO-RM BATCH 4
    'sucesiones-aritmeticas': 'Gráfica de una progresión aritmética con razón constante.',
    'sucesiones-geometricas': 'Gráfica de una progresión geométrica con razón y suma infinita.',
    'sucesiones-recursivas': 'Definición recursiva de Fibonacci con los primeros términos.',
    'sucesiones-recurrentes': 'Relación de recurrencia con solución paso a paso.',
    'patrones-numericos': 'Secuencia con patrón visible y fórmula general.',
    'conjeturas-induccion': 'Verificación de casos y formulación de hipótesis.',
    'secuencias-dos-variables': 'Dos sucesiones acopladas con sus relaciones.',
    'progresiones-avanzadas': 'Diferencias parciales y progresiones polinómicas.',
    // COKITO-RM BATCH 5
    'permutaciones-simples': 'Elementos ordenados con la fórmula P(n) = n! y ejemplos.',
    'combinaciones-simples': 'Selección de elementos sin orden con C(n,k) y triángulo de Pascal.',
    'permutaciones-repeticion': 'Distribución de elementos con repetición: nᵏ.',
    'combinaciones-repeticion': 'Método de barras y barras para combinaciones con repetición.',
    'inclusion-exclusion': 'Diagrama de Venn de 3 conjuntos con la fórmula de inclusión-exclusión.',
    'principio-casos': 'Diagrama de flujo con casos excluyentes y el principio de suma/producto.',
    'problemas-colocacion': 'Objetos en posiciones con restricciones y sus soluciones.',
    'polinomios-generadores': 'Función generadora con coeficientes que representan una secuencia.',
    // COKITO-RM BATCH 6
    'media-mediana-moda': 'Gráfica de barras con media, mediana y moda marcadas.',
    'varianza-desviacion': 'Distribución con varianza baja y alta, mostrando la dispersión.',
    'percentiles-cuartiles': 'Diagrama de caja con Q1, Q2, Q3 y valores atípicos.',
    'razonamiento-verbal-avanzado': 'Silogismo con premisas y conclusión lógica.',
    'razonamiento-abstracto': 'Secuencia de figuras con patrón de incremento.',
    'razonamiento-espacial': 'Rotación mental de un cubo y plegado de papel.',
    'problemas-compuestos-rm': 'Problema que combina lógica, combinatoria y aritmética.',
    // HISTORIA - batch 1-6
    'civilizaciones-preincaicas': 'Línea de tiempo de las civilizaciones preincaicas: Chavín, Paracas, Nazca, Moche, Wari, Chimú.',
    'tahuantinsuyo': 'Mapa del Tahuantinsuyo con sus cuatro suyos: Chinchaysuyu, Antisuyu, Collasuyu, Cuntisuyu.',
    'conquista-espanola': 'Cronología de la conquista española: Cajamarca, guerras civiles, resistencia incaica.',
    'virreinato-del-peru': 'Mapa del Virreinato del Perú con sus divisiones administrativas y ciudades principales.',
    'independencia-del-peru': 'Línea de tiempo de la independencia: Túpac Amaru II, San Martín, Bolívar, Batalla de Ayacucho.',
    'republica-temprana': 'Gobiernos de la República temprana: Balboa, Gamarra, Castilla y la consolidación del Estado.',
    'guano-y-salitre': 'Económía guanera y salitrera: exportaciones, guerras y el conflicto con Chile.',
    'oncenio-y-guerra': 'Gobierno de Leguía y el inicio de la Guerra del Pacífico.',
    'aprismo-y-guerra': 'APRA, Sánchez Cerro y la Guerra con Ecuador de 1941.',
    'segundo-militarismo': 'Segundo gobierno militar: Odría, reorganización y modernización.',
    'primer-belaunder': 'Primer gobierno de Belaúnde: modernización, desarrollo y losולים.\'',
    'velasco-y-reforma': 'Gobierno de Velasco: reforma agraria, nacionalizaciones y cambios sociales.',
    'terrorismo-y-dictadura': 'Sendero Luminoso, MRTA y la dictadura de Fujimori.',
    'transicion-democratica': 'Transición a la democracia: Kuczynski, Toledo, García.',
    'peru-contemporaneo': 'Perú contemporáneo: crecimiento económico, desafíos sociales.',
    'derechos-humanos': 'Comisión de la Verdad y Reconciliación, derechos humanos en el Perú.',
    'revolucion-francesa': 'Cronología de la Revolución Francesa: toma de la Bastilla, terror, imperio napoleónico.',
    'revoluciones-industriales': 'Primera y segunda revolución industrial: vapor, electricidad, fábricas.',
    'imperialismo-y-colonialismo': 'Imperialismo europeo en África y Asia, colonias y dependencia.',
    'primera-guerra-mundial': 'Causas, desarrollo y consecuencias de la Primera Guerra Mundial.',
    'revolucion-rusa': 'Revolución Rusa de 1917: bolcheviques, leninismo, URSS.',
    'segunda-guerra-mundial': 'Causas, frentes y consecuencias de la Segunda Guerra Mundial.',
    'guerra-fria-y-globalizacion': 'Guerra Fría: OTAN vs Pacto de Varsovia, caída del muro, globalización.',
  };
  
  if (summaries[slug]) return summaries[slug];
  
  // Generate generic summary based on subject
  const slugReadable = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  switch (subject) {
    case 'geometria':
      return `Diagrama geométrico que ilustra el concepto de ${slugReadable}. Se muestran las figuras, ángulos y relaciones con colores diferenciados para facilitar la comprensión visual.`;
    case 'cokito-rm':
      return `Representación visual del tema de ${slugReadable}. Se presentan los conceptos clave con ejemplos numéricos y diagramas explicativos.`;
    case 'historia':
      return `Línea de tiempo o mapa histórico del tema ${slugReadable}. Se muestran las fechas, eventos y personajes principales con código de colores.`;
    default:
      return `Ilustración del tema: ${slugReadable}. Diagrama explicativo con elementos visuales clave.`;
  }
}

// Generate summaries for all modules
const summaryMap = {};
for (const mod of modules) {
  summaryMap[mod.slug] = generateSummary(mod.slug, mod.subject);
}

console.log(`Generated ${Object.keys(summaryMap).length} summaries`);

// Save summaries to a JSON file for the assembly script
writeFileSync(
  'C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\illustration-summaries.json',
  JSON.stringify(summaryMap, null, 2),
  'utf-8'
);

console.log('Saved to illustration-summaries.json');
