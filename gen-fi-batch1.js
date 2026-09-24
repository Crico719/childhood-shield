const fs = require('fs');
const path = require('path');
const { writeBatch } = require('./gen-utils.js');
const DATA_DIR = path.resolve(__dirname, '../prepa-premium-uv/src/data');
const MD = path.join(__dirname, 'modules');

// Ensure output dirs
if (!fs.existsSync(MD)) fs.mkdirSync(MD, { recursive: true });
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

// Load existing kinematica module
const kin = JSON.parse(fs.readFileSync(path.join(MD, 'fi-kinematica.json'), 'utf8'));

const allFi = [...kin]; // Start with module 1

// Each module builder: (slug, tip, theory, exercises[]) => object
function m(slug, tip, theory, exercises) {
  return { slug, tip, theory, illustrations: [], exercises };
}
function th(level, title, lines) { return { level, title, lines }; }
let _id = 0;
function q(question, options, correctIndex, explanation, difficulty) {
  return { id: ++_id, question, options, correctIndex, explanation, difficulty };
}

// ============ MODULE 2: DINAMICA ============
_id = 0;
allFi.push(m("fi-dinamica","Segunda ley de Newton: F = m·a.",
  [th("basico","Fuerzas y Newton",["Una fuerza es una interacción que puede cambiar el movimiento.","La segunda ley: F = m·a.","El peso es fuerza gravitacional: P = m·g.","Si la fuerza neta es cero, el cuerpo no acelera.","La unidad de fuerza es el Newton (N = kg·m/s²)."]),
   th("intermedio","Aplicación de Newton",["La reacción normal equilibra la componente perpendicular del peso.","En plano inclinado, componente paralela es m·g·sin(θ).","La fricción estática se opone al inicio del movimiento.","La fricción cinética actúa durante el movimiento.","La fuerza neta es suma vectorial de todas las fuerzas."]),
   th("avanzado","Dinámica avanzada",["Tercera ley: acción y reacción son iguales y opuestas.","Fuerza centrípeta: F = m·v²/r mantiene el movimiento circular.","Sistemas no inertiales requieren fuerzas ficticias.","El peso aparente varía con la aceleración del sistema.","Las leyes de Newton son válidas para velocidades bajas."])],
  [q("¿Qué establece la segunda ley de Newton?",["E = mc²","F = m·a","v = d/t","P = m/V"],1,"La fuerza neta es igual a masa por aceleración.","basico"),
   q("¿Cuál es la unidad de fuerza?",["Kilogramo","Metro","Newton","Julio"],2,"El Newton (N) = 1 kg·m/s².","basico"),
   q("Un cuerpo de 8 kg con a = 5 m/s². ¿Fuerza neta?",["8 N","13 N","40 N","80 N"],2,"F = m·a = 8×5 = 40 N.","basico"),
   q("¿Qué es el peso?",["La masa por el volumen","La fuerza gravitacional sobre un objeto","Su aceleración","Su velocidad"],1,"P = m·g, la fuerza que ejerce la gravedad.","basico"),
   q("Si la fuerza neta es cero, ¿qué ocurre?",["El cuerpo acelera","Se detiene","Mantiene su movimiento","La masa cambia"],2,"Si F=0, la velocidad permanece.","basico"),
   q("¿Qué tipo de fuerza es la gravedad?",["Repulsiva","Magnética","Atractiva entre masas","Eléctrica"],2,"La gravedad atrae cualquier par de masas.","basico"),
   q("Un resorte comprimido se suelta. ¿Qué fuerza actúa?",["Centrífuga","Elástica restauradora","Magnética","Nula"],1,"La fuerza elástica restaura la forma original.","basico"),
   q("Bloque 5 kg, empuje 40 N, fricción 10 N. ¿Aceleración?",["2 m/s²","6 m/s²","8 m/s²","50 m/s²"],1,"F_neta = 30 N; a = 30/5 = 6 m/s².","intermedio"),
   q("Peso de un cuerpo de 60 kg en la Tierra",["60 N","294 N","588 N","9.8 N"],2,"P = 60×9.8 = 588 N.","intermedio"),
   q("¿Qué es la reacción normal?",["El peso del objeto","La fuerza perpendicular de la superficie","La fricción","La fuerza aplicada"],1,"Equilibra la componente perpendicular del peso.","intermedio"),
   q("Cuerpo 4 kg en plano inclinado 30°. Componente paralela:",["19.6 N","39.2 N","78.4 N","4 N"],0,"F_par = m·g·sin(30°) = 4×9.8×0.5 = 19.6 N.","intermedio"),
   q("¿Qué es la fricción cinética?",["Impide inicio del movimiento","Actúa durante el movimiento","Fuerza magnética","Centrípeta"],1,"Se opone al movimiento y depende de la normal.","intermedio"),
   q("Si duplicas F_neta, ¿qué pasa con a?",["Se duplica","No cambia","Se reduce a la mitad","Se cuadruplica"],0,"Por F=ma, si F duplica, a duplica.","intermedio"),
   q("Cuerpo 3 kg, F=15 N por 4 s desde reposo. ¿Distancia?",["8 m","40 m","60 m","120 m"],1,"a=5 m/s²; d = ½×5×16 = 40 m.","intermedio"),
   q("La fuerza centrípeta:",["Aleja del centro","Mantiene el movimiento circular hacia el centro","Es perpendicular al movimiento","Es siempre vertical"],1,"Apunta hacia el centro de la trayectoria circular.","avanzado"),
   q("Satélite 300 kg, 7000 m/s, radio 7×10⁶ m. ¿F centrípeta?",["2.1×10⁶ N","2.1×10¹⁰ N","3×10⁸ N","7×10⁶ N"],0,"F = 300×49×10⁶/(7×10⁶) = 2.1×10⁶ N.","avanzado"),
   q("Ascensor acelera hacia arriba. ¿Por qué más pesado?",["La masa aumenta","La reacción normal aumenta","La gravedad aumenta","El peso disminuye"],1,"N = m(g+a) > mg.","avanzado"),
   q("¿Qué dice la tercera ley de Newton?",["F = ma","La energía se conserva","Acción y reacción son iguales y opuestas","Todo cuerpo mantiene su movimiento"],2,"Las fuerzas aparecen en pares iguales y opuestos.","avanzado"),
   q("Elevador 900 kg desciende con a = 3 m/s². ¿Tensión del cable?",["6120 N","8820 N","9000 N","11520 N"],0,"T = m(g-a) = 900(9.8-3) = 6120 N.","avanzado"),
   q("Si masa triplica con misma F, ¿a cambia?",["Se triplica","No cambia","Se reduce a un tercio","Se reduce a un noveno"],2,"a = F/m; si m triplica, a baja a un tercio.","avanzado"),
   q("En sistema no inercial, ¿qué fuerza ficticia aparece?",["Gravitacional","Centrífuga","Eléctrica","Magnética"],1,"En sistemas acelerados aparecen fuerzas ficticias.","avanzado")
]));

// ============ MODULE 3: TRABAJO-ENERGIA ============
_id = 0;
allFi.push(m("fi-trabajo-energia","Trabajo = F·d·cos(θ). Energía cinética y potencial.",
  [th("basico","Trabajo mecánico",["Trabajo se produce cuando una fuerza mueve un objeto.","W = F·d·cos(θ), donde θ es el ángulo entre fuerza y desplazamiento.","Si θ = 90°, el trabajo es cero.","La unidad de trabajo es el Julio (J = N·m).","Si no hay desplazamiento, no hay trabajo."]),
   th("intermedio","Energía y sus formas",["La energía cinética es Ec = ½m·v².","La energía potencial gravitacional es Ep = m·g·h.","La energía potencial elástica es Ep = ½k·x².","El trabajo-neto iguala el cambio de energía cinética.","La energía no se crea ni se destruye, solo se transforma."]),
   th("avanzado","Conservación avanzada",["En sistema cerrado sin fricción, Ec + Ep = constante.","La energía mecánica se pierde como calor por fricción.","La potencia es la rapidez de trabajo: P = W/t.","La potencia instantánea es P = F·v.","El trabajo negativo reduce la energía cinética."])],
  [q("¿Qué es el trabajo mecánico?",["Una energía almacenada","Una fuerza que desplaza un objeto","La masa de un cuerpo","La velocidad de un objeto"],1,"El trabajo requiere fuerza y desplazamiento en la misma dirección.","basico"),
   q("Un cuerpo de 10 kg sube 5 m. Trabajo de la gravedad:",["-490 J","0 J","490 J","2450 J"],0,"W_g = -mgh = -10×9.8×5 = -490 J.","basico"),
   q("Si θ = 90° entre fuerza y movimiento, ¿el trabajo?",["Es máximo","Es cero","Es negativo","Se duplica"],1,"cos(90°) = 0, por lo que W = 0.","basico"),
   q("¿Cuál es la unidad del trabajo?",["Watt","Julio","Newton","Kilogramo"],1,"1 Julio = 1 Newton × 1 metro.","basico"),
   q("¿Qué es la energía cinética?",["La energía por posición","La energía del movimiento","La energía almacenada","La energía eléctrica"],1,"Ec = ½m·v² depende de la velocidad.","basico"),
   q("Un auto de 1000 kg va a 20 m/s. ¿Ec?",["20,000 J","100,000 J","200,000 J","400,000 J"],2,"Ec = ½×1000×400 = 200,000 J.","basico"),
   q("¿Qué es la energía potencial gravitacional?",["La del movimiento","La almacenada por altura","La de un resorte","La térmica"],1,"Ep = m·g·h depende de la posición vertical.","basico"),
   q("Un cuerpo de 5 kg está a 10 m. ¿Ep?",["49 J","98 J","490 J","980 J"],2,"Ep = 5×9.8×10 = 490 J.","basico"),
   q("Un bloque baja 3 m con fricción. Energía mecánica:",["Se conserva","Aumenta","Disminuye","Es cero"],2,"La fricción convierte energía mecánica en calor.","intermedio"),
   q("Trabajo neto = cambio de:",["Posición","Masa","Energía cinética","Aceleración"],2,"Teorema trabajo-energia: W_net = ΔEc.","intermedio"),
   q("¿Qué es la potencia?",["Energía almacenada","Rapidez de realizar trabajo","Fuerza por distancia","Masa por velocidad"],1,"P = W/t mide qué tan rápido se hace trabajo.","intermedio"),
   q("Motor levanta 200 N a 3 m en 6 s. ¿Potencia?",["100 W","600 W","1000 W","3600 W"],0,"W = 600 J; P = 600/6 = 100 W.","intermedio"),
   q("Un péndulo en su punto más alto, ¿qué tiene?",["Solo Ec","Solo Ep","Ec + Ep","Ninguna energía"],1,"En la máxima altura v=0, Ec=0; toda la energía es potencial.","intermedio"),
   q("Si duplicas la velocidad, ¿cómo cambia Ec?",["Se duplica","Se triplica","Se cuadruplica","No cambia"],2,"Ec = ½mv²; si v duplica, Ec se cuadruplica.","intermedio"),
   q("Resorte k = 200 N/m comprimido 0.1 m. ¿Ep?",["1 J","2 J","10 J","20 J"],1,"Ep = ½×200×0.01 = 1 J.","intermedio"),
   q("¿Qué es un sistema conservativo?",["Uno con fricción","Uno donde Em se conserva","Uno sin masa","Uno con movimiento circular"],1,"En sistemas conservativos no hay fuerzas disipativas.","avanzado"),
   q("Pendiente sin fricción, altura 5 m, masa 2 kg. ¿v al fondo?",["7 m/s","9.9 m/s","14 m/s","49 m/s"],1,"mgh = ½mv²; v = √(2gh) = √98 ≈ 9.9 m/s.","avanzado"),
   q("¿Cuándo la fuerza neta hace trabajo negativo?",["Cuando acelera","Cuando frena","Cuando no se mueve","En movimiento circular"],1,"El trabajo negativo reduce la energía cinética.","avanzado"),
   q("P = F·v para v constante. ¿Qué significa?",["Potencia es fuerza por distancia","Potencia es fuerza por velocidad","Potencia es energía por masa","Potencia es siempre cero"],1,"Potencia instantánea: P = F·v cuando la velocidad es constante.","avanzado"),
   q("Piedra 0.5 kg lanzada a 14 m/s vertical. ¿Altura máxima?",["10 m","14 m","19.6 m","28 m"],0,"h = v²/(2g) = 196/19.6 = 10 m.","avanzado")
]));

// ============ MODULE 4: CONSERVACION ============
_id = 0;
allFi.push(m("fi-conservacion","Ley de conservación: energía no se crea ni se destruye.",
  [th("basico","Ley de conservación",["La energía no se crea ni se destruye, solo se transforma.","En ausencia de fricción, Ec + Ep = constante.","Cuando un objeto cae, Ep se convierte en Ec.","La energía se conserva en todos los sistemas aislados.","La colisión elástica conserva la energía cinética total."]),
   th("intermedio","Aplicaciones",["El trabajo de la fricción no se recupera como energía mecánica.","La energía de un sistema puede disiparse como calor.","Las colisionesPerfectamente inelásticas pierden máxima Ec.","La eficiencia es la energía útil sobre la total suministrada.","Los sistemas abiertos intercambian energía con el entorno."]),
   th("avanzado","Principios fundamentales",["La conservación proviene de la simetría temporal.","En colisionesPerfectamente inelásticas se pierde la máxima Ec.","La eficiencia nunca puede ser del 100%.","El principio de conservación aplica a todas las formas de energía.","La energía se conserva en procesos nucleares."])],
  [q("¿Qué dice la ley de conservación de la energía?",["La energía se destruye con el calor","La energía no se crea ni se destruye","La masa se convierte en energía","La energía siempre aumenta"],1,"Primer principio: la energía total de un sistema aislado es constante.","basico"),
   q("Un péndulo sin fricción, ¿qué se conserva?",["Solo Ec","Solo Ep","La energía mecánica total","La velocidad"],2,"Sin fricción, Ec + Ep es constante.","basico"),
   q("Cuando un cuerpo cae libre, ¿qué transformación ocurre?",["Ep → Ec","Ec → Ep","Ec → calor","Ep → calor"],0,"La altura disminuye y la velocidad aumenta.","basico"),
   q("¿Qué se conserva en una colisión elástica?",["Solo momento lineal","Solo energía cinética","Energía cinética y momento lineal","Ninguna"],2,"En colisiones elásticas ambas cantidades se conservan.","basico"),
   q("¿Por qué no se conserva la Ec en colisiones reales?",["La masa cambia","Se pierde como calor y deformación","La gravedad actúa","La velocidad aumenta"],1,"Parte de la Ec se convierte en calor/deformación.","basico"),
   q("Un resorte comprimido lanza un bloque. ¿Qué transformación?",["Ep_elástica → Ec del bloque","Ec → Ep_elástica","Se destruye la energía","No pasa nada"],0,"La energía potencial elástica se convierte en cinética.","basico"),
   q("¿Qué es la energía disipativa?",["La que se conserva","La que se transforma en calor no recuperable","La potencial","La cinética"],1,"La fricción y resistencia del aire son disipativas.","basico"),
   q("Pelota 2 kg a 10 m de altura cae libre. ¿Ec al impactar?",["20 J","98 J","196 J","980 J"],2,"mgh = 2×9.8×10 = 196 J.","intermedio"),
   q("ChoquePerfectamente inelástico, ¿qué se conserva?",["Solo Ec","El momento lineal","La Ep","La masa total"],1,"El momento lineal se conserva SIEMPRE.","intermedio"),
   q("¿Qué fórmula representa la energía mecánica total?",["E = mc²","E = mgh + ½mv²","E = F·d","E = P/t"],1,"Em = Ep + Ec = mgh + ½mv².","intermedio"),
   q("Un objeto desliza por una rampa con fricción. ¿Qué pasa con Em?",["Se conserva","Disminuye","Aumenta","Es cero"],1,"La fricción convierte parte de la Em en calor.","intermedio"),
   q("Dos autos chocan y se quedan pegados. ¿Es elástico?",["Sí","No, es inelástico","Solo si están fríos","Depende"],1,"Si se quedan pegados, es perfectamente inelástico.","intermedio"),
   q("¿Qué es la eficiencia de una máquina?",["La fuerza que produce","Energía útil entre energía total suministrada","La velocidad","La masa"],1,"η = E_util / E_total × 100%.","intermedio"),
   q("Máquina con η=60% recibe 500 J. ¿Cuántos son útiles?",["200 J","300 J","500 J","800 J"],1,"E_util = 0.60 × 500 = 300 J.","intermedio"),
   q("¿Qué cantidades se conservan en una colisiónPerfectamente inelástica?",["Solo Ec","Solo momento lineal","Ambas","Ninguna"],1,"El momento se conserva siempre, la Ec no en este caso.","intermedio"),
   q("Caída libre con aire. ¿Qué se conserva?",["Solo Ec","Solo Em","Ninguna","El momento"],2,"Con resistencia del aire, parte de la Em se disipa.","avanzado"),
   q("¿Qué establece el teorema de Noether sobre conservación?",["Simetría de rotación → momento angular","Simetría temporal → conservación de energía","Simetría de escala → masa","Invariancia galileana → velocidad"],1,"La conservación de energía surge de la invariancia temporal.","avanzado"),
   q("Colisión inelástica: m1=3kg v1=5, m2=2kg v2=-3. ¿vf?",["1.8 m/s","3 m/s","5.4 m/s","7.5 m/s"],0,"vf = (15-6)/5 = 1.8 m/s.","avanzado"),
   q("Péndulo con fricción. Em inicial 10 J. ¿Em tras 10 oscilaciones?",["10 J","Más de 10 J","Menos de 10 J","Depende"],2,"La fricción reduce la Em continuamente.","avanzado"),
   q("¿En qué se convierte la energía de los frenos de un auto?",["Electricidad","Calor","Sonido","Luz"],1,"Los frenos convierten Ec en calor por fricción.","avanzado")
]));

// ============ MODULE 5: GRAVITACION ============
_id = 0;
allFi.push(m("fi-gravitacion","Ley de gravitación universal: F = G·m1·m2/r².",
  [th("basico","Gravedad terrestre",["La gravedad atrae cualquier par de masas.","g ≈ 9.8 m/s² en la superficie terrestre.","El peso es P = m·g, depende de la masa y la gravedad.","Caída libre: todos los cuerpos caen igual si no hay aire.","El peso varía según el planeta o altitud."]),
   th("intermedio","Gravitación universal",["F = G·m1·m2/r² describe la fuerza entre dos masas.","G = 6.67×10⁻¹¹ N·m²/kg² es la constante gravitacional.","A mayor distancia, la fuerza disminuye con el cuadrado.","La órbita de la Luna es caída libre continuada.","La primera ley de Kepler: órbitas elípticas."]),
   th("avanzado","Gravitación avanzada",["T² es proporcional a r³ para órbitas circulares.","La velocidad orbital es v = √(G·M/r).","La energía gravitacional es Ep = -G·m1·m2/r.","La velocidad de escape es v = √(2gR).","Einstein reemplazó la fuerza gravitacional por curvatura del espacio-tiempo."])],
  [q("¿Qué es la gravedad?",["Una fuerza repulsiva","Una fuerza atractiva entre masas","Una fuerza eléctrica","Una fuerza magnética"],1,"La gravedad atrae cualquier objeto con masa.","basico"),
   q("¿Cuánto vale g en la superficie terrestre?",["1.6 m/s²","9.8 m/s²","32 m/s²","980 m/s²"],1,"El valor estándar es 9.8 m/s².","basico"),
   q("Peso de 10 kg en la Tierra:",["10 N","98 N","100 N","980 N"],1,"P = mg = 10×9.8 = 98 N.","basico"),
   q("¿Qué sucede en caída libre?",["El más pesado cae más rápido","Todos caen igual","El liviano cae primero","Depende de la forma"],1,"Todos los cuerpos tienen la misma aceleración.","basico"),
   q("¿Por qué un astronauta flota en órbita?",["No hay gravedad","Está en caída libre continua","La masa disminuye","Falta oxígeno"],1,"La gravedad sigue actuando; está en caída libre.","basico"),
   q("Si g fuera el doble, ¿qué pasaría con tu peso?",["Perderías masa","Se duplicaría","Se reduciría","Nada"],1,"P = mg; si g duplica, el peso duplica.","basico"),
   q("Fuerza gravitacional sobre 5 kg en la Tierra:",["5 N","9.8 N","49 N","0 N"],2,"F = mg = 5×9.8 = 49 N.","basico"),
   q("Fórmula de la gravitación de Newton:",["F = ma","F = G·m1·m2/r²","F = kq1q2/r²","F = mv²/r"],1,"Fuerza proporcional a masas, inversa al cuadrado de la distancia.","intermedio"),
   q("Si duplicas la distancia entre masas, ¿cómo cambia F?",["Se cuadruplica","Se duplica","Se reduce a 1/4","Se reduce a 1/2"],2,"F es inversamente proporcional a r².","intermedio"),
   q("La órbita de la Luna es ejemplo de:",["MRU","Caída libre continuada","Choque elástico","Movimiento armónico"],1,"La Luna está cayendo continuamente hacia la Tierra.","intermedio"),
   q("¿Qué es la velocidad orbital?",["La de un planeta en el Sol","La velocidad para mantener órbita circular estable","La de escape","La del sonido"],1,"Velocidad necesaria para mantener una órbita circular.","intermedio"),
   q("En la Luna, g ≈ 1.6 m/s². Peso de 60 kg:",["60 N","96 N","588 N","980 N"],1,"P = 60×1.6 = 96 N.","intermedio"),
   q("Primera ley de Kepler dice que las órbitas son:",["Circulares","Elípticas","Parabólicas","Hipérbólicas"],1,"Los planetas se mueven en elipses con el Sol en un foco.","intermedio"),
   q("Gravitación entre dos personas de 70 kg a 1 m:",["Enorme","Muy pequeña pero real","Cero","Infinita"],1,"Del orden de nanonewtons, despreciable.","intermedio"),
   q("Segunda ley de Kepler: igual áreas en iguales tiempos implica:",["Velocidad constante","Velocidad mayor cerca del Sol","Velocidad constante solo en círculos","Que no aceleran"],1,"El planeta se mueve más rápido más cerca del Sol.","intermedio"),
   q("¿Qué es la velocidad de escape?",["La mínima para despegar","La mínima para escapar de la gravedad","La máxima alcanzable","La del sonido"],1,"v = √(2gR) para escapar de un cuerpo.","avanzado"),
   q("Satélite geoestacionario orbita a ~35786 km. ¿Periodo?",["12 horas","24 horas","7 días","1 mes"],1,"Geoestacionario = 1 día terrestre.","avanzado"),
   q("¿Qué descubrió Cavendish?",["La masa de la Tierra","La constante G","La velocidad de la luz","Neptuno"],1,"Midió la constante gravitacional G.","avanzado"),
   q("Si la Tierra se comprimiera al tamaño de una canica:",["Nada","La densidad y g superficial aumentarían enormemente","Se destruiría la gravedad","La luz no escaparía"],1,"La masa se mantiene, el radio baja, g aumenta enormemente.","avanzado"),
   q("¿Qué es la energía potencial gravitacional universal?",["E = mc²","Ep = -G·m1·m2/r","Ep = mgh","Ep = ½mv²"],1,"Ep = -G·m1·m2/r es negativa porque el sistema está ligado.","avanzado")
]));

// ============ MODULE 6: FLUIDOS ============
_id = 0;
allFi.push(m("fi-fluidos","Presión, principio de Pascal y Arquímedes.",
  [th("basico","Presión y fluidos",["La presión es fuerza por unidad de área: P = F/A.","En un fluido en reposo la presión aumenta con la profundidad.","P = P₀ + ρ·g·h en un fluido estático.","Los gases se comprimen; los líquidos casi no.","La presión atmosférica es P₀ ≈ 101,300 Pa."]),
   th("intermedio","Principios de fluidos",["Principio de Pascal: presión aplicada se transmite igual.","Empuje de Arquímedes: cuerpo sumergido recibe empuje igual al peso del fluido desplazado.","Empuje = ρ_fluido · V_desplazado · g.","Un cuerpo flota si su densidad es menor que la del fluido.","Los vasos comunicantes tienen el mismo nivel."]),
   th("avanzado","Bernoulli y continuidad",["Bernoulli: P + ½ρv² + ρgh = constante.","Mayor velocidad implica menor presión.","La ecuación de continuidad: A₁v₁ = A₂v₂.","En tuberías estrechas el fluido acelera.","El efecto Venturi reduce la presión en constricciones."])],
  [q("¿Qué es la presión?",["Fuerza total","Fuerza por unidad de área","Energía por masa","Velocidad de un fluido"],1,"P = F/A, se mide en Pascales.","basico"),
   q("¿Qué le pasa a la presión con la profundidad?",["Disminuye","Aumenta","No cambia","Depende del fluido"],1,"P = P₀ + ρgh; a mayor profundidad, mayor presión.","basico"),
   q("Agua a 3 m de profundidad. ¿Presión adicional?",["3000 Pa","29,400 Pa","101,300 Pa","9800 Pa"],1,"ΔP = ρgh = 1000×9.8×3 = 29,400 Pa.","basico"),
   q("La presión atmosférica equivale a:",["1 Pa","101,300 Pa","1,000,000 Pa","0 Pa"],1,"P₀ ≈ 101,300 Pa = 1 atm.","basico"),
   q("¿Qué es un fluido?",["Solo un sólido","Una sustancia que fluye: líquido o gas","Solo agua","Un material rígido"],1,"Los fluidos incluyen líquidos y gases.","basico"),
   q("Principio que explica la prensa hidráulica:",["Arquímedes","Pascal","Bernoulli","Ohm"],1,"Pascal: la presión se transmite sin cambio en fluido cerrado.","basico"),
   q("¿Qué dice Arquímedes?",["Presión es F/A","Un cuerpo sumergido recibe empuje igual al peso del fluido desplazado","Velocidad constante","Presión aumenta con velocidad"],1,"El empuje iguala el peso del fluido que el cuerpo desplaza.","basico"),
   q("Cilindro A de 2 cm², B de 10 cm². F en A = 10 N. ¿F en B?",["2 N","10 N","50 N","100 N"],2,"F_B = F_A × (A_B/A_A) = 10×5 = 50 N.","intermedio"),
   q("Cuerpo 0.5 m³ sumergido en agua. ¿Empuje?",["500 N","4900 N","9800 N","5000 N"],1,"E = ρ·V·g = 1000×0.5×9.8 = 4900 N.","intermedio"),
   q("¿Flota un bloque de densidad 0.8 g/cm³ en agua?",["Sí, menos denso que el agua","No, pesa","Depende del tamaño","Solo si es redondo"],0,"Si ρ_bloque < ρ_agua, flota parcialmente sumergido.","intermedio"),
   q("Ecuación de continuidad:",["P₁ + P₂ = constante","A₁v₁ = A₂v₂","F = ma para fluidos","P = constante"],1,"En fluido incompresible, el caudal es constante.","intermedio"),
   q("Agua en tubería se estrecha. ¿Velocidad?",["Disminuye","No cambia","Aumenta","Se hace cero"],2,"Al disminuir el área, la velocidad aumenta.","intermedio"),
   q("¿Por qué vuelan los aviones?",["Solo hélices","Diferencia de presión entre superficies del ala","Arquímedes","Presión del motor"],1,"El perfil del ala crea presión distinta arriba y abajo.","intermedio"),
   q("Tubería: A₁=10cm², v₁=2m/s, A₂=5cm². ¿v₂?",["1 m/s","2 m/s","4 m/s","8 m/s"],2,"v₂ = v₁×(A₁/A₂) = 2×2 = 4 m/s.","intermedio"),
   q("Efecto Venturi:",["Aumento de presión con profundidad","Disminución de presión a mayor velocidad","Conservación en fluidos","Empuje de Arquímedes"],1,"En secciones estrechas la velocidad sube y la presión baja.","avanzado"),
   q("A 11 km de altitud, la presión es:",["Mayor que al nivel del mar","Igual","Menor","Igual que a 5 km"],2,"Con la altitud la presión atmosférica disminuye.","avanzado"),
   q("Barómetro marca 760 mmHg. Equivale a:",["760 Pa","101,300 Pa","10,130 Pa","1013 Pa"],1,"760 mmHg = 1 atm = 101,300 Pa.","avanzado"),
   q("¿Por qué los barcos de acero flotan?",["El acero es liviano","El volumen desplazado pesa más que el barco","La forma","La presión"],1,"El barco desplaza suficiente agua para que el empuje iguale su peso.","avanzado"),
   q("Tubos de Pitot miden velocidad por:",["Temperatura","Diferencia de presión total y estática","Masa del avión","Altitud"],1,"La presión de impacto menos la estática da la velocidad.","avanzado"),
   q("¿Qué es el número de Reynolds?",["Relación inercia/viscosidad","Relación presión/volumen","Relación masa/fuerza","Relación fuerza/velocidad"],0,"Re = ρvL/μ; determina si el flujo es laminar o turbulento.","avanzado")
]));

// Save and generate
fs.writeFileSync(path.join(MD, 'fisica.json'), JSON.stringify(allFi, null, 0), 'utf8');
console.log(`Física: ${allFi.length} modules saved`);
batchAndWrite('fi', allFi);

// Also save for other courses (empty for now)
['quimica','biologia','economia','letras'].forEach(c => {
  const fp = path.join(MD, c + '.json');
  if (!fs.existsSync(fp)) fs.writeFileSync(fp, '[]', 'utf8');
});

function batchAndWrite(prefix, modules) {
  const batches = [];
  for (let i = 0; i < modules.length; i += 10) {
    batches.push(modules.slice(i, i + 10));
  }
  batches.forEach((batch, idx) => {
    writeBatch(prefix, idx + 1, `${prefix}Batch${idx + 1}`, batch);
  });
  const totalQ = modules.reduce((s, m) => s + m.exercises.length, 0);
  console.log(`  ${prefix}: ${modules.length} modules, ${totalQ} questions, ${batches.length} batches`);
}
