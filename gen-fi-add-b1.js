const fs = require('fs');
const path = require('path');

const existingPath = path.join(__dirname, 'gen-fi-modules.json');
let existing = [];
if (fs.existsSync(existingPath)) {
  existing = JSON.parse(fs.readFileSync(existingPath, 'utf8'));
}

function q(text, opts, ci, expl, diff) {
  return { question: text, options: opts, correctIndex: ci, explanation: expl, difficulty: diff };
}
function th(lvl, title, lines) {
  return { level: lvl, title, lines };
}
function mod(slug, tip, theory, exercises) {
  return { slug, tip, theory, illustrations: [], exercises };
}

const batch1rest = [
  mod("fi-trabajo-energia","Trabajo = F·d·cos(θ), Energía cinética y potencial.",
    [th("basico","Trabajo mecánico",["Trabajo se produce cuando una fuerza mueve un objeto en la dirección de la fuerza.","W = F·d·cos(θ), donde θ es el ángulo entre fuerza y desplazamiento.","Si θ = 90°, el trabajo es cero porque la fuerza no produce desplazamiento en su dirección.","La unidad de trabajo es el Julio (J = N·m).","Si no hay desplazamiento, no hay trabajo."]),
     th("intermedio","Energía y sus formas",["La energía cinética es Ec = ½m·v².","La energía potencial gravitacional es Ep = m·g·h.","La energía potencial elástica es Ep = ½k·x².","El trabajo-neto iguala el cambio de energía cinética.","La energía no se crea ni se destruye, solo se transforma."]),
     th("avanzado","Conservación de la energía",["En un sistema cerrado sin fricción, la energía mecánica total se conserva.","Ec_initial + Ep_initial = Ec_final + Ep_final.","La energía mecánica se pierde como calor por fricción.","La potencia es la rapidez de trabajo: P = W/t.","La potencia instantánea es P = F·v."])],
    [q("¿Qué es el trabajo mecánico?",["La energía almacenada","Una fuerza que desplaza un objeto","La masa de un cuerpo","La velocidad de un objeto"],1,"El trabajo requiere fuerza y desplazamiento en la misma dirección.","basico"]),
     q("Un cuerpo de 10 kg sube 5 m. Trabajo de la gravedad:",["-490 J","0 J","490 J","2450 J"],0,"W_g = -mgh = -10×9.8×5 = -490 J (opuesto al movimiento).","basico"]),
     q("Si θ = 90° entre fuerza y movimiento, ¿el trabajo?",["Es máximo","Es cero","Es negativo","Se duplica"],1,"cos(90°) = 0, por lo que W = 0.","basico"]),
     q("¿Cuál es la unidad del trabajo?",["Watt","Julio","Newton","Kilogramo"],1,"1 Julio = 1 Newton × 1 metro.","basico"]),
     q("¿Qué es la energía cinética?",["La energía por posición","La energía del movimiento","La energía almacenada","La energía eléctrica"],1,"Ec = ½m·v² depende de la velocidad.","basico"]),
     q("Un auto de 1000 kg va a 20 m/s. ¿Ec?",["20,000 J","100,000 J","200,000 J","400,000 J"],2,"Ec = ½×1000×400 = 200,000 J.","basico"]),
     q("¿Qué es la energía potencial gravitacional?",["La del movimiento","La almacenada por altura","La de un resorte","La térmica"],1,"Ep = m·g·h depende de la posición vertical.","basico"]),
     q("Un cuerpo de 5 kg está a 10 m. ¿Ep?",["49 J","98 J","490 J","980 J"],2,"Ep = 5×9.8×10 = 490 J.","basico"]),
     q("Un bloque baja 3 m con fricción. Energía mecánica:",["Se conserva","Aumenta","Disminuye","Es cero"],2,"La fricción convierte energía mecánica en calor.","intermedio"]),
     q("Trabajo neto = cambio de:",["Posición","Masa","Energía cinética","Aceleración"],2,"Teorema trabajo-energia: W_net = ΔEc.","intermedio"]),
     q("¿Qué es la potencia?",["Energía almacenada","Rapidez de realizar trabajo","Fuerza por distancia","Masa por velocidad"],1,"P = W/t mide qué tan rápido se hace trabajo.","intermedio"]),
     q("Motor levanta 200 N a 3 m en 6 s. ¿Potencia?",["100 W","600 W","1000 W","3600 W"],0,"W = 600 J; P = 600/6 = 100 W.","intermedio"]),
     q("Un péndulo en su punto más alto, ¿qué tiene?",["Solo Ec","Solo Ep","Ec + Ep","Ninguna energía"],1,"En la máxima altura v = 0, Ec = 0; toda la energía es potencial.","intermedio"]),
     q("Si duplicas la velocidad, ¿cómo cambia Ec?",["Se duplica","Se triplica","Se cuadruplica","No cambia"],2,"Ec = ½mv²; si v duplica, Ec se cuadruplica.","intermedio"]),
     q("Resorte k = 200 N/m comprimido 0.1 m. ¿Ep?",["1 J","2 J","10 J","20 J"],1,"Ep = ½×200×0.01 = 1 J.","intermedio"]),
     q("¿Qué es un sistema conservativo?",["Uno con fricción","Uno donde la energía mecánica se conserva","Uno sin masa","Uno con movimiento circular"],1,"En sistemas conservativos no hay fuerzas disipativas.","avanzado"]),
     q("Pendiente sin fricción, altura 5 m, masa 2 kg. ¿v al fondo?",["7 m/s","9.9 m/s","14 m/s","49 m/s"],1,"mgh = ½mv²; v = √(2gh) = √(98) ≈ 9.9 m/s.","avanzado"]),
     q("¿Cuándo la fuerza neta hace trabajo negativo?",["Cuando acelera","Cuando frena","Cuando no se mueve","En movimiento circular"],1,"El trabajo negativo reduce la energía cinética (frenado).","avanzado"]),
     q("P = F·v para v constante. ¿Qué significa?",["La potencia es fuerza por distancia","La potencia es fuerza por velocidad","La potencia es energía por masa","La potencia es constante siempre"],1,"Potencia instantánea: P = F·v cuando la velocidad es constante.","avanzado"]),
     q("Piedra de 0.5 kg lanzada vertical a 14 m/s. ¿Altura máxima?",["10 m","14 m","19.6 m","28 m"],0,"h = v²/(2g) = 196/19.6 = 10 m.","avanzado"])
  ]
  ),

  mod("fi-conservacion","En sistemas cerrados, energía mecánica total se conserva.",
    [th("basico","Ley de conservación",["La energía no se crea ni se destruye, solo se transforma.","En ausencia de fricción, Ec + Ep = constante.","Cuando un objeto cae, Ep se convierte en Ec.","La velocidad máxima se alcanza cuando Ep = 0.","La energía se conserva en todos los sistemas aislados."]),
     th("intermedio","Aplicaciones",["En un resorte, la energía elástica se convierte en cinética y viceversa.","El trabajo de la fricción no se recupera como energía mecánica.","La energía de un sistema puede disiparse como calor.","Las colisiones elásticas conservan la energía cinética total.","Las colisiones inelásticas pierden energía cinética como calor/deformación."]),
     th("avanzado","Conservación avanzada",["La conservación de energía es consecuencia de la simetría temporal (teorema de Noether).","En colisionesPerfectamente inelásticas se pierde la máxima energía cinética.","La eficiencia es la energía útil sobre la energía total suministrada.","Los sistemas abiertos intercambian energía con el entorno.","El principio de conservación aplica a todas las formas de energía."])],
    [q("¿Qué dice la ley de conservación de la energía?",["La energía se destruye con el calor","La energía no se crea ni se destruye","La masa se convierte en energía","La energía siempre aumenta"],1,"Primer principio: la energía total de un sistema aislado es constante.","basico"]),
     q("Un péndulo sin fricción, ¿qué se conserva?",["Solo Ec","Solo Ep","La energía mecánica total","La velocidad"],2,"Sin fricción, Ec + Ep es constante.","basico"]),
     q("Cuando un cuerpo cae libre, ¿qué transformación ocurre?",["Ep → Ec","Ec → Ep","Ec → calor","Ep → calor"],0,"La altura disminuye (pierde Ep) y la velocidad aumenta (gana Ec).","basico"]),
     q("¿Qué se conserva en una colisión elástica?",["Solo momento lineal","Solo energía cinética","Energía cinética y momento lineal","Ninguna"],2,"En colisiones elásticas ambas cantidades se conservan.","basico"]),
     q("¿Por qué no se conserva la energía en una colisión real?",["La masa cambia","Se pierde como calor y deformación","La gravedad actúa","La velocidad aumenta"],1,"En colisiones reales parte de la Ec se convierte en calor/deformación.","basico"]),
     q("Un resorte comprimido lanza un bloque. ¿Qué ocurre con la energía?",["Se conserva mecánica si no hay fricción","Se pierde toda","Se duplica","Se destruye"],0,"En sistema ideal, Ep_elástica → Ec del bloque.","basico"]),
     q("¿Qué es la energía disipativa?",["La que se conserva","La que se transforma en calor no recuperable","La potencial","La cinética"],1,"La fricción y resistencia del aire son fuerzas disipativas.","basico"]),
     q("Una pelota de 2 kg a 10 m de altura se deja caer. ¿Ec al golpear?",["20 J","98 J","196 J","980 J"],2,"mgh = 2×9.8×10 = 196 J que se convierte en Ec.","intermedio"]),
     q("Choque perfectamente inelástico: ¿qué cantidad se conserva?",["Solo la energía cinética","El momento lineal","La energía potencial","La masa total"],1,"El momento lineal se conserva SIEMPRE, la Ec no en este caso.","intermedio"]),
     q("¿Qué fórmula representa la energía mecánica total?",["E = mc²","E = mgh + ½mv²","E = F·d","E = P/t"],1,"Em = Ep + Ec = mgh + ½mv².","intermedio"]),
     q("Un objeto desliza por una rampa con fricción. ¿Qué pasa con Em?",["Se conserva","Disminuye","Aumenta","Es cero"],1,"La fricción convierte parte de la Em en calor.","intermedio"]),
     q("Dos autos chocan y se quedan pegados. ¿Es elástico?",["Sí, siempre","No, es inelástico","Solo si están fríos","Depende del color"],1,"Si se quedan pegados, pierden Ec máxima; es perfectamente inelástico.","intermedio"]),
     q("¿Qué es la eficiencia de una máquina?",["La fuerza que produce","La energía útil entre la energía total suministrada","La velocidad de operación","La masa que puede levantar"],1,"η = E_util / E_total × 100%.","intermedio"]),
     q("Una máquita tiene η = 60%. Si recibe 500 J, ¿cuántos son útiles?",["200 J","300 J","500 J","800 J"],1,"E_util = 0.60 × 500 = 300 J.","intermedio"]),
     q("Caída libre con aire: ¿qué se conserva?",["Solo Ec","Solo Em","Ninguna cantidad se conserva","El momento"],2,"Con resistencia del aire, parte de la Em se disipa como calor.","avanzado"]),
     q("¿Qué establece el teorema de Noether sobre conservación de energía?",["Proviene de la simetría de rotación","Proviene de la simetría temporal","Proviene de la simetría de escala","Proviene de la invariancia galileana"],1,"La conservación de energía surge de la invariancia bajo traslación temporal.","avanzado"]),
     q("ColisiónPerfectamente inelástica con m1=3kg,v1=5 y m2=2kg,v2=-3. vf=?",["1.8 m/s","3 m/s","5.4 m/s","7.5 m/s"],0,"vf = (15-6)/5 = 1.8 m/s.","avanzado"]),
     q("Péndulo con fricción. Em en A = 10 J. Em después de 10 oscilaciones:",["10 J","Más de 10 J","Menos de 10 J","Depende"],2,"La fricción reduce la Em continuamente.","avanzado"]),
     q("¿En qué se convierte la energía de un freno de auto?",["En electricidad","En calor","En sonido","En luz"],1,"Los frenos convierten Ec en calor por fricción.","avanzado"]),
     q("Bloque resorte en superficie con fricción. Energía inicial = 50 J, fricción disipa 15 J. ¿Em final?",["15 J","35 J","50 J","65 J"],1,"Em_final = 50 - 15 = 35 J.","avanzado"])
  ]
  ),

  mod("fi-gravitacion","Ley de gravitación universal: F = G·m1·m2/r².",
    [th("basico","Gravedad terrestre",["La gravedad atrae cualquier par de masas.","g ≈ 9.8 m/s² en la superficie terrestre.","El peso es P = m·g, depende de la masa y la gravedad.","Caída libre: todos los cuerpos caen igual si no hay aire.","El peso varía según el planeta o altitud."]),
     th("intermedio","Ley de gravitación universal",["F = G·m1·m2/r² describe la fuerza entre dos masas.","G = 6.67×10⁻¹¹ N·m²/kg² es la constante gravitacional.","A mayor distancia, la fuerza disminuye con el cuadrado.","La gravedad entre personas es real pero despreciable.","La órbita de la Luna es caída libre continuada."]),
     th("avanzado","Gravitación avanzada",["Las órbitas elípticas de Kepler describen movimiento planetario.","T² es proporcional a r³ para órbitas circulares.","La velocidad orbital es v = √(G·M/r).","La energía gravitacional es Ep = -G·m1·m2/r.","Einstein reemplazó la fuerza gravitacional por la curvatura del espacio-tiempo."])],
    [q("¿Qué es la gravedad?",["Una fuerza repulsiva","Una fuerza atractiva entre masas","Una fuerza eléctrica","Una fuerza magnética"],1,"La gravedad atrae cualquier objeto con masa hacia otro.","basico"]),
     q("¿Cuánto vale g en la superficie terrestre?",["1.6 m/s²","9.8 m/s²","32 m/s²","980 m/s²"],1,"El valor estándar es 9.8 m/s².","basico"]),
     q("Peso de 10 kg en la Tierra:",["10 N","98 N","100 N","980 N"],1,"P = mg = 10×9.8 = 98 N.","basico"]),
     q("¿Qué sucede con los objetos en caída libre?",["El más pesado cae más rápido","Todos caen igual","El más liviano cae primero","Depende de la forma"],1,"En caída libre todos los cuerpos tienen la misma aceleración.","basico"]),
     q("¿Por qué un astronauta parece flotar en la órbita?",["No hay gravedad allá","Está en caída libre continua","La masa disminuye","El oxígeno falta"],1,"En órbita la gravedad sigue actuando; el astronauta está en caída libre.","basico"]),
     q("¿Qué pasaría si g fuera el doble?",["Perderías masa","Tu peso se duplicaría","Tu peso se reduciría","Nada cambiaría"],1,"P = mg; si g duplica, el peso duplica.","basico"]),
     q("Un objeto de 5 kg cae. ¿Fuerza gravitacional?",["5 N","9.8 N","49 N","0 N"],2,"F = mg = 5×9.8 = 49 N.","basico"]),
     q("Fórmula de la ley de gravitación de Newton:",["F = ma","F = G·m1·m2/r²","F = kq1q2/r²","F = mv²/r"],1,"La fuerza gravitacional es proporcional al producto de masas y inversa al cuadrado de la distancia.","intermedio"]),
     q("Si duplicas la distancia entre dos masas, ¿cómo cambia F_grav?",["Se cuadruplica","Se duplica","Se reduce a 1/4","Se reduce a 1/2"],2,"F es inversamente proporcional a r²; si r duplica, F baja a 1/4.","intermedio"]),
     q("La órbita de la Luna alrededor de la Tierra es ejemplo de:",["MRU","Caída libre continuada","Choque elástico","Movimiento armónico simple"],1,"La Luna está continuamente cayendo hacia la Tierra pero su velocidad lateral la mantiene en órbita.","intermedio"]),
     q("¿Qué es la velocidad orbital?",["La velocidad de un planeta en el Sol","Velocidad para mantener una órbita circular estable","La velocidad de escape","La velocidad del sonido"],1,"Es la velocidad necesaria para que un objeto mantenga una órbita circular.","intermedio"]),
     q("En la Luna, g ≈ 1.6 m/s². Peso de 60 kg:",["60 N","96 N","588 N","980 N"],1,"P = 60×1.6 = 96 N.","intermedio"]),
     q("¿Qué es la masa pero no el peso?",["La resistencia a cambio de movimiento","La fuerza gravitacional","La inercia","La aceleración"],0,"La masa es inercia; el peso es fuerza gravitacional.","intermedio"]),
     q("La primera ley de Kepler dice que las órbitas son:",["Circulares","Elípticas","Parabólicas","Hipérbólicas"],1,"Los planetas se mueven en elipses con el Sol en un foco.","intermedio"]),
     q("Gravitación entre dos personas de 70 kg a 1 m:",["Un peso enorme","Una fuerza muy pequeña pero real","Cero","Infinita"],1,"Es real pero del orden de nanonewtons, despreciable.","avanzado"]),
     q("¿Qué es la velocidad de escape?",["La mínima para despegar","La mínima para escapar de la gravedad de un cuerpo","La máxima alcanzable","La velocidad del sonido"],1,"v_escape = √(2gR) donde R es el radio del cuerpo.","avanzado"]),
     q("Satélite geoestacionario orbits at ~35786 km. ¿Qué periodo tiene?",["12 horas","24 horas","7 días","1 mes"],1,"Geoestacionario significa que tarda exactamente 1 día terrestre.","avanzado"]),
     q("Segunda ley de Kepler: igual areas en iguales tiempos significa:",["Velocidad constante","Velocidad mayor cerca del Sol","Velocidad constante solo en círculos","Que los planetas no aceleran"],1,"El planeta se mueve más rápido cuando está más cerca del Sol.","avanzado"]),
     q("¿Qué descubrió Cavendish con su experimento?",["La masa de la Tierra","La constante gravitacional G","La velocidad de la luz","La existencia de Neptuno"],1,"El experimento de la balanza de torsión midió G por primera vez.","avanzado"]),
     q("Si la Tierra comprimiera al tamaño de una canica, ¿qué pasaría?",["Nada","Su densidad sería enorme y la gravedad en superficie aumentaría","Se destruiría la gravedad","La luz no escaparía"],1,"La masa se mantiene pero el radio baja, aumentando g superficial enormemente.","avanzado"])
  ]
  ),

  mod("fi-fluidos","Presión, principio de Pascal y ley de Bernoulli.",
    [th("basico","Presión y fluidos",["La presión es fuerza por unidad de área: P = F/A.","En un fluido en reposo la presión aumenta con la profundidad.","P = P₀ + ρ·g·h en un fluido estático.","Los gases se comprimen; los líquidos casi no.","La presión atmosférica es P₀ ≈ 101,300 Pa."]),
     th("intermedio","Principios de fluidos",["Principio de Pascal: presión aplicada se transmite igual en todas las direcciones.","Principio de Arquímedes: cuerpo sumergido recibe empuje igual al peso del fluido desplazado.","Empuje = ρ_fluido · V_desplazado · g.","Un cuerpo flota si su densidad es menor que la del fluido.","Los vasos comunicantes tienen el mismo nivel de fluido."]),
     th("avanzado","Bernoulli y dinámica",["Bernoulli: P + ½ρv² + ρgh = constante a lo largo de una línea de corriente.","Mayor velocidad implica menor presión (efecto Venturi).","Los aviones vuelan por la diferencia de presión entre alas superior e inferior.","La ecuación de continuidad: A₁v₁ = A₂v₂.","En tuberías estrechas el fluido acelera."])],
    [q("¿Qué es la presión?",["Fuerza total","Fuerza por unidad de área","Energía por masa","Velocidad de un fluido"],1,"P = F/A, se mide en Pascales (Pa).","basico"]),
     q("¿Qué le pasa a la presión con la profundidad?",["Disminuye","Aumenta","No cambia","Depende del fluido"],1,"P = P₀ + ρgh; a mayor profundidad, mayor presión.","basico"]),
     q("Un tanque tiene agua a 3 m de profundidad. ¿Presión adicional?",["3000 Pa","29,400 Pa","101,300 Pa","9800 Pa"],1,"ΔP = ρgh = 1000×9.8×3 = 29,400 Pa.","basico"]),
     q("La presión atmosférica equivale a:",["1 Pa","101,300 Pa","1,000,000 Pa","0 Pa"],1,"P₀ ≈ 101,300 Pa = 1 atm.","basico"]),
     q("¿Qué es un fluido?",["Solo un sólido","Una sustancia que fluye, líquido o gas","Solo agua","Un material rígido"],1,"Los fluidos incluyen líquidos y gases.","basico"]),
     q("¿Qué principio explica el funcionamiento de una prensa hidráulica?",["Arquímedes","Pascal","Bernoulli","Ohm"],1,"Principio de Pascal: la presión se transmite sin cambio en un fluido cerrado.","basico"]),
     q("¿Qué dice el principio de Arquímedes?",["La presión es F/A","Un cuerpo sumergido recibe un empuje igual al peso del fluido desplazado","La velocidad del fluido es constante","La presión aumenta con la velocidad"],1,"El empuje es igual al peso del fluido que el cuerpo desplaza.","basico"]),
     q("Cilindro A área 2 cm², cilindro B área 10 cm². Fuerza en A = 10 N. ¿Fuerza en B?",["2 N","10 N","50 N","100 N"],2,"Por Pascal: F_B = F_A × (A_B/A_A) = 10×5 = 50 N.","intermedio"]),
     q("Cuerpo de 0.5 m³ sumergido en agua. Empuje:",["500 N","4900 N","9800 N","5000 N"],1,"E = ρ·V·g = 1000×0.5×9.8 = 4900 N.","intermedio"]),
     q("¿Flota un bloque de densidad 0.8 g/cm³ en agua?",["Sí, porque es menos denso que el agua","No, porque pesa","Depende del tamaño","Solo si es redondo"],0,"Si ρ_bloque < ρ_agua, flota parcialmente sumergido.","intermedio"]),
     q("¿Qué dice la ecuación de continuidad?",["P₁ + P₂ = constante","A₁v₁ = A₂v₂","F = ma para fluidos","La presión es constante"],1,"En un fluido incompresible, el caudal es constante.","intermedio"]),
     q("Agua en tubería se estrecha. ¿Qué pasa con la velocidad?",["Disminuye","No cambia","Aumenta","Se hace cero"],2,"Al disminuir el área, la velocidad aumenta por continuidad.","intermedio"]),
     q("¿Por qué los aviones vuelan?",["Por hélices solamente","Por diferencia de presión entre las superficies del ala","Por la fuerza de Arquímedes","Por la presión del motor"],1,"El perfil del ala crea presión distinta arriba y abajo.","intermedio"]),
     q("Tubería horizontal: A₁=10cm², v₁=2m/s, A₂=5cm². ¿v₂?",["1 m/s","2 m/s","4 m/s","8 m/s"],2,"v₂ = v₁×(A₁/A₂) = 2×2 = 4 m/s.","intermedio"]),
     q("¿Qué efecto Venturi describe?",["Aumento de presión con profundidad","Disminución de presión a mayor velocidad","Conservación de energía en fluidos","El empuje de Arquímedes"],1,"En secciones estrechas la velocidad sube y la presión baja.","avanzado"]),
     q("En el punto más alto de un avión (11 km), la presión es:",["Mayor que al nivel del mar","Igual","Menor","La misma que a 5 km"],2,"Con la altitud la presión atmosférica disminuye significativamente.","avanzado"]),
     q("Un barómetro mide 760 mmHg. Esto equivale a:",["760 Pa","101,300 Pa","10,130 Pa","1013 Pa"],1,"760 mmHg = 1 atm = 101,300 Pa.","avanzado"]),
     g("Trompeta: ¿por qué suena al soplar?",["Resonancia del aire","Efecto Venturi en la boquilla","Arquímedes","Fuerza centrífuga"],0,"La vibración de los labios crea resonancia en la columna de aire.","avanzado"]),
     q("¿Por qué los barcos de acero flotan?",["El acero es liviano","El volumen desplazado de agua pesa más que el barco","La forma los mantiene arriba","La presión los empuja"],1,"El barco desplaza suficiente agua para que el empuje iguale su peso.","avanzado"]),
     q("Tubos de Pitot miden velocidad de un avión por:",["Temperatura del aire","Diferencia de presión total y estática","La masa del avión","La altitud"],1,"La presión de impacto (total) menos la estática da la velocidad.","avanzado"])
  ]
);

// Replace the last question of fluidos that had a typo (g() instead of q())
batch1rest[3].exercises[18] = q("¿Qué efecto Venturi describe?",["Aumento de presión con profundidad","Disminución de presión a mayor velocidad","Conservación de energía en fluidos","El empuje de Arquímedes"],1,"En secciones estrechas la velocidad sube y la presión baja.","avanzado");
batch1rest[3].exercises[19] = q("En el punto más alto de un avión (11 km), la presión es:",["Mayor que al nivel del mar","Igual","Menor","La misma que a 5 km"],2,"Con la altitud la presión atmosférica disminuye significativamente.","avanzado");
batch1rest[3].exercises[20] = q("Un barómetro mide 760 mmHg. Equivale a:",["760 Pa","101,300 Pa","10,130 Pa","1013 Pa"],1,"760 mmHg = 1 atm = 101,300 Pa.","avanzado");

const updated = [...existing, ...batch1rest];
fs.writeFileSync(existingPath, JSON.stringify(updated), 'utf8');
console.log(`Updated: ${updated.length} modules, ${updated.reduce((s,m) => s + m.exercises.length, 0)} questions total`);
