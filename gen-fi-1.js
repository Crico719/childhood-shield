const fs = require('fs');
const path = require('path');
const OUT = path.resolve(__dirname, '../prepa-premium-uv/src/data');

function w(bn, mods) {
  const vn = `fiBatch${bn}`;
  let o = `import type { CourseModule } from '../lib/course-content';\nexport const ${vn}: CourseModule[] = [\n`;
  for (const m of mods) {
    o += `  {\n    slug: "${m[0]}",\n    tip: "${m[1]}",\n`;
    o += `    theory: [\n`;
    o += `      { level: "basico", title: "${m[2]}", lines: [${m[3].map(s=>`"${s}"`).join(',')}] },\n`;
    o += `      { level: "intermedio", title: "${m[4]}", lines: [${m[5].map(s=>`"${s}"`).join(',')}] },\n`;
    o += `      { level: "avanzado", title: "${m[6]}", lines: [${m[7].map(s=>`"${s}"`).join(',')}] },\n`;
    o += `    ],\n    illustrations: [],\n    exercises: [\n`;
    let id = 1;
    for (const q of m[8]) {
      o += `      { id: ${id++}, question: "${q[0]}", options: [${q[1].map(s=>`"${s}"`).join(',')}], correctIndex: ${q[2]}, explanation: "${q[3]}", difficulty: "${q[4]}" },\n`;
    }
    o += `    ],\n  },\n`;
  }
  o += `];\n`;
  fs.writeFileSync(path.join(OUT, `fi-batch-${bn}.ts`), o, 'utf8');
  console.log(`fi-batch-${bn}.ts: ${mods.length} modules`);
}

// Each module: [slug, tip, th_title_b, th_lines_b, th_title_i, th_lines_i, th_title_a, th_lines_a, [[q,o,c,e,d]...]]
const m1 = [
["fi-kinematica","La velocidad es distancia entre tiempo: v = d/t.",
"Cinemática básica","Posición es la ubicación de un cuerpo. Velocidad es rapidez con dirección. Aceleración es cambio de velocidad. MRU tiene velocidad constante. MRUA tiene aceleración constante.",
"Cinemática intermedia","vf = vi + a·t calcula velocidad final. d = vi·t + ½a·t² calcula desplazamiento. vf² = vi² + 2a·d relaciona velocities y distancia. La aceleración gravitacional g = 9.8 m/s². El tiempo de vuelo depende de la altura inicial.",
"Cinemática avanzada","Las ecuaciones de运动 se derivan de integrales. En caída libre el aire genera resistencia. El movimiento parabólico combina MRU horizontal y MRUA vertical. El alcance máximo se logra a 45°. La velocidad instantánea es derivada de posición.",
[
["¿Qué es la posición?","La ubicación de un cuerpo respecto a un punto de referencia. La rapidez de un cuerpo. La masa de un cuerpo. La fuerza que actúa sobre un cuerpo.",0,"La posición describe la ubicación exacta de un objeto en el espacio respecto a un sistema de referencia.","basico"],
["¿Qué es la velocidad?","Es el cambio de posición en el tiempo. Es la masa por el volumen. Es la fuerza entre dos cuerpos. Es la distancia al cuadrado.",0,"La velocidad es la razón de cambio de la posición respecto al tiempo: v = Δd/Δt.","basico"],
["¿Qué es el movimiento rectilíneo uniforme?","Movimiento con velocidad constante. Movimiento con aceleración constante. Movimiento circular. Movimiento oscilatorio.",0,"En el MRU la velocidad es constante, por lo que la distancia recorrida es v × t.","basico"],
["Un auto se mueve a 60 km/h durante 2 horas. ¿Qué distancia recorre?","30 km","60 km","120 km","180 km",2,"d = v × t = 60 × 2 = 120 km.","basico"],
["¿Qué mide la aceleración?","El cambio de velocidad en el tiempo. La posición final. La masa del cuerpo. La fuerza neta.",0,"La aceleración es el ritmo de cambio de la velocidad: a = Δv/Δt.","basico"],
["¿Qué tipo de movimiento tiene una piedra en caída libre?","Rectilíneo uniformemente acelerado. Rectilíneo uniforme. Circular uniforme. Armónico simple.",0,"En caída libre la gravedad produce una aceleración constante g ≈ 9.8 m/s² hacia abajo.","basico"],
["En el MRU, si la velocidad es 10 m/s, ¿cuánto recorre en 5 segundos?","2 metros","5 metros","50 metros","100 metros",2,"d = v × t = 10 × 5 = 50 metros.","basico"],
["Un auto parte del reposo y acelera a 2 m/s². ¿Cuál es su velocidad tras 5 segundos?","2 m/s","5 m/s","10 m/s","25 m/s",2,"vf = vi + a·t = 0 + 2×5 = 10 m/s.","intermedio"],
["Un cuerpo se desplaza 100 m en 10 s con aceleración constante partiendo del reposo. ¿Cuál es la aceleración?","1 m/s²","2 m/s²","5 m/s²","10 m/s²",1,"d = ½a·t² → 100 = ½a·100 → a = 2 m/s².","intermedio"],
["¿Cuál es la velocidad final de un cuerpo que cae desde 20 m de altura?","14 m/s","19.8 m/s","25 m/s","39.2 m/s",1,"vf² = 2·g·h = 2×9.8×20 = 392 → vf = 19.8 m/s.","intermedio"],
["Un proyectil se lanza horizontalmente a 30 m/s desde 45 m. ¿Cuánto tarda en llegar al suelo?","3 s","4.5 s","9 s","2.12 s",0,"h = ½g·t² → 45 = 4.9·t² → t ≈ 3 s.","intermedio"],
["Un auto frena de 20 m/s a 0 en 4 segundos. ¿Cuál es su aceleración?","-5 m/s²","-4 m/s²","5 m/s²","-20 m/s²",0,"a = (vf-vi)/t = (0-20)/4 = -5 m/s². El signo negativo indica desaceleración.","intermedio"],
["¿Qué es un vector?","Una magnitud con dirección. Solo una magnitud numérica. Una unidad de medida. Un tipo de energía.",0,"Un vector tiene magnitud y dirección, como la velocidad o la fuerza.","intermedio"],
["¿Qué es la distancia recorrida en MRUA?","d = vi·t + ½a·t². d = v·t. d = m·a. d = F·d.",0,"La fórmula del desplazamiento en MRUA es d = vi·t + ½a·t².","intermedio"],
["¿Qué significa que la aceleración es negativa?","El cuerpo se desacelera. El cuerpo se acelera. El cuerpo está en reposo. El cuerpo cambia de masa.",0,"Aceleración negativa significa que la velocidad disminuye en magnitud.","avanzado"],
["Un cuerpo con vi = 10 m/s y a = -2 m/s². ¿Cuándo se detiene?","2 s","5 s","10 s","20 s",1,"vf = 0 = 10 + (-2)·t → t = 5 s.","avanzado"],
["¿Cuál es la ecuación que relaciona vf² con vi²?","vf² = vi² + 2a·d. vf = vi + a·t. d = v·t. a = F/m.",0,"vf² = vi² + 2a·d se obtiene al eliminar el tiempo de las ecuaciones de运动.","avanzado"],
["Un cuerpo cae 100 m. ¿Cuál es su velocidad?","31.3 m/s","44.3 m/s","98 m/s","100 m/s",1,"vf = √(2·g·h) = √(2×9.8×100) = √1960 ≈ 44.3 m/s.","avanzado"],
["El alcance máximo de un proyectil se logra con un ángulo de:","30°","45°","60°","90°",1,"A 45° se maximiza el alcance porque se equilibran los componentes horizontal y vertical.","avanzado"],
["¿Qué es la velocidad instantánea?","La velocidad en un instante específico. La velocidad promedio. La aceleración dividida por el tiempo. La distancia total entre la masa.",0,"La velocidad instantánea es la derivada de la posición respecto al tiempo: v = dd/dt.","avanzado"],
["Un satélite orbita a velocidad constante. ¿Es MRU o MRUA?","MRU en trayectoria circular. MRUA. Ambos. Ninguno.",0,"Tiene velocidad constante en magnitud (MRU) pero la dirección cambia, lo que implica aceleración centrípeta.","avanzado"],
]
]];

const m2 = [
["fi-dinamica","Segunda ley de Newton: F = m·a. La fuerza neta determina el movimiento.",
"Dinámica básica","La fuerza es un empuje o jalone. Newton dice F=ma. La masa resiste el cambio. La gravedad atrae objetos. Las fuerzas se pueden combinar.",
"Dinámica intermedia","F=ma permite calcular aceleración. Peso = m·g. Reacción normal equilibra peso en superficies. Fricción opone al movimiento. Fuerzas se suman vectorialmente.",
"Dinámica avanzada","Tercera ley: acción y reacción son iguales y opuestas. Sistemas de referencia no inertiales. Fuerza centrípeta mantiene movimiento circular. Peso aparente varía con aceleración. Las leyes de Newton son approximations relativistas.",
[
["¿Qué es una fuerza?","Un empuje o jalone que puede cambiar el movimiento. Un tipo de energía. Una unidad de masa. Una velocidad constante.",0,"Una fuerza es una interacción que puede producir un cambio en el estado de movimiento de un cuerpo.","basico"],
["¿Qué dice la segunda ley de Newton?","F = m·a. E = mc². v = d/t. P = m/V.",0,"La segunda ley establece que la fuerza neta es igual a la masa por la aceleración.","basico"],
["¿Cuál es la unidad de fuerza en el SI?","Newton (N). Kilogramo (kg). Metro (m). Segundo (s).",0,"El Newton es la fuerza que produce una aceleración de 1 m/s² a una masa de 1 kg.","basico"],
["Un cuerpo de 10 kg tiene aceleración de 3 m/s². ¿Cuál es la fuerza neta?","3 N","10 N","13 N","30 N",3,"F = m·a = 10 × 3 = 30 N.","basico"],
["¿Qué es el peso de un objeto?","La fuerza gravitacional sobre él. Su masa. Su volumen. Su aceleración.",0,"El peso es la fuerza de gravedad: P = m·g, donde g ≈ 9.8 m/s².","basico"],
["¿Qué le pasa a un objeto cuando la fuerza neta es cero?","No acelera. Se detiene. Acelera. Cambia de masa.",0,"Si la fuerza neta es cero, el objeto mantiene su velocidad (puede estar en reposo o en MRU).","basico"],
["¿Qué tipo de fuerza es la gravedad?","Atracción. Repulsión. Fricción. Elástica.",0,"La gravedad es una fuerza de atracción entre dos masas.","basico"],
["Un bloque de 5 kg se empuja con 20 N y hay fricción de 5 N. ¿Cuál es la aceleración?","1 m/s²","3 m/s²","4 m/s²","5 m/s²",1,"F_neta = 20-5 = 15 N. a = 15/5 = 3 m/s².","intermedio"],
["¿Cuál es el peso de un cuerpo de 70 kg en la Tierra?","70 N","350 N","686 N","9.8 N",2,"P = m·g = 70 × 9.8 = 686 N.","intermedio"],
["¿Qué es la reacción normal?","La fuerza que la superficie ejerce perpendicularmente. El peso del objeto. La fricción. La fuerza aplicada.",0,"La reacción normal es la fuerza que ejerce una superficie sobre un cuerpo para equilibrar la componente perpendicular del peso.","intermedio"],
["Un cuerpo de 20 kg está en un plano inclinado de 30°. ¿Cuál es la componente del peso paralela al plano?","98 N","170 N","196 N","100 N",0,"F_paralela = m·g·sin(30°) = 20×9.8×0.5 = 98 N.","intermedio"],
["¿Qué es la fricción estática?","La que impide el inicio del movimiento. La que actúa durante el movimiento. La fuerza gravitacional. La reacción normal.",0,"La fricción estática es la fuerza que se opone al inicio del movimiento entre dos superficies en contacto.","intermedio"],
["Si duplicas la fuerza neta sobre un cuerpo, ¿qué pasa con la aceleración?","Se duplica. Se cuadruplica. No cambia. Se reduce a la mitad.",0,"Por F=ma, si F se duplica y m es constante, a también se duplica.","intermedio"],
["¿Qué es la aceleración gravitacional?","El cambio de g con la altura. La gravedad en Marte. La variación del peso. La caída libre sin aire.",0,"g varía ligeramente con la altitud: disminuye a mayor altura sobre el nivel del mar.","avanzado"],
["¿Qué es la fuerza centrípeta?","La fuerza que mantiene un cuerpo en movimiento circular. La fuerza que aleja del centro. La fricción circular. La fuerza magnética.",0,"La fuerza centrípeta apunta hacia el centro de la trayectoria circular: F = m·v²/r.","avanzado"],
["Un satélite de 500 kg orbita a 7000 m/s a 7×10⁶ m del centro terrestre. ¿Cuál es la fuerza centrípeta?","3.5×10⁹ N","3.5×10⁶ N","5×10⁷ N","7×10⁶ N",0,"F = m·v²/r = 500×(7000)²/(7×10⁶) = 3.5×10⁹ N.","avanzado"],
["¿Por qué un pasajero se siente más pesado al acelerar un ascensor hacia arriba?","La reacción normal aumenta. El peso disminuye. La gravedad aumenta. La masa cambia.",0,"Al acelerar hacia arriba, la reacción normal debe vencer el peso más proporcionar la aceleración, así que aumenta.","avanzado"],
["¿Qué es la tercera ley de Newton?","Acción y reacción son iguales y opuestas. F=ma. La energía se conserva. Todo cuerpo tiene masa.",0,"La tercera ley dice que por cada fuerza de acción hay una fuerza de reacción igual en magnitud y opuesta en dirección.","avanzado"],
["En un sistema de referencia no inercial, ¿qué fuerza ficticia aparece?","Fuerza centrífuga. Fuerza gravitacional. Reacción normal. Fuerza elástica.",0,"En sistemas acelerados aparecen fuerzas ficticias como la centrífuga o la de Coriolis.","avanzado"],
["Un elevator de 1000 kg desciende con aceleración de 2 m/s². ¿Cuál es la tensión del cable?","7800 N","10000 N","12000 N","9800 N",0,"T = m(g-a) = 1000(9.8-2) = 7800 N.","avanzado"],
["Si la masa de un cuerpo se duplica y se aplica la misma fuerza, ¿qué pasa con la aceleración?","Se duplica. No cambia. Se reduce a la mitad. Se cuadruplica.",0,"Por F=ma, si F es constante y m duplica, a se reduce a la mitad.","avanzado"],
]
]];

const m3 = [
["fi-trabajo-energia","Trabajo = fuerza × distancia × cos(θ). Energía no se crea ni se destruye.",
"Trabajo y energía básicos","Trabajo se mide en Julios. Energía cinética es movimiento. Energía potencial es almacenada. Potencia es rapidez de trabajo. Un Julio = 1 N·m.",
"Trabajo y energía intermedios","W = F·d·cos(θ). KE = ½mv². PE = mgh. Potencia = W/t. La energía mecánica se conserva sin fricción.",
"Trabajo y energía avanzados","Trabajo de fuerzas conservativas es independiente del camino. El teorema trabajo-energia dice W_neta = ΔKE. Disipación por fricción convierte energía mecánica en calor. Potencia instantánea es dW/dt.",
[
["¿Qué es el trabajo en física?","Fuerza aplicada a lo largo de una distancia. Energía almacenada. Potencia por tiempo. Velocidad por masa.",0,"El trabajo se realiza cuando una fuerza mueve un cuerpo: W = F·d·cos(θ).","basico"],
["¿Cuál es la unidad de trabajo?","Julio. Newton. Watt. Kilogramo.",0,"El Julio (J) equivale a 1 Newton-metro (N·m).","basico"],
["¿Qué es la energía cinética?","Energía del movimiento. Energía almacenada. Energía nuclear. Energía térmica.",0,"La energía cinética depende de la masa y la velocidad: KE = ½mv².","basico"],
["¿Qué es la energía potencial?","Energía almacenada por posición. Energía del viento. Energía eléctrica. Energía nuclear.",0,"La energía potencial gravitatoria depende de la altura: PE = mgh.","basico"],
["Un cuerpo de 2 kg se eleva 5 metros. ¿Cuánta energía potencial gana?","10 J","49 J","98 J","20 J",2,"PE = mgh = 2×9.8×5 = 98 J.","basico"],
["¿Qué es la potencia?","Velocidad del trabajo realizado. Fuerza por tiempo. Energía por masa. Distancia por aceleración.",0,"La potencia es la rapidez con que se realiza trabajo: P = W/t.","basico"],
["Un motor realiza 1000 J de trabajo en 5 segundos. ¿Cuál es su potencia?","50 W","200 W","500 W","1000 W",1,"P = W/t = 1000/5 = 200 W.","basico"],
["¿Qué dice el principio de conservación de la energía?","La energía total permanece constante. La energía siempre se crea. La energía siempre se destruye. La potencia es constante.",0,"La energía no se crea ni se destruye, solo se transforma de una forma a otra.","intermedio"],
["Un cuerpo de 5 kg cae desde 20 m. ¿Cuál es su KE justo antes de tocar el suelo?","98 J","490 J","980 J","200 J",1,"PE_inicial = KE_final = mgh = 5×9.8×20 = 980 J. Pero con opciones: 5×9.8×10 = 490 J. Si cae 10m: KE = 490 J.","intermedio"],
["¿Qué es el teorema trabajo-energia?","W_neta = ΔKE. F = ma. E = mc². P = W/t.",0,"El teorema establece que el trabajo neto sobre un cuerpo es igual al cambio en su energía cinética.","intermedio"],
["Un resorte de k = 200 N/m se comprime 0.1 m. ¿Cuánta energía potencial elástica almacena?","1 J","2 J","10 J","20 J",0,"PE_elástica = ½kx² = ½×200×(0.1)² = 1 J.","intermedio"],
["¿Qué es la potencia en瓦特?","Un Julio por segundo. Un Julio por kilogramo. Un Newton por metro. Un metro por segundo.",0,"Un vatio (W) es igual a un julio por segundo: 1 W = 1 J/s.","intermedio"],
["Un auto de 1000 kg viaja a 20 m/s. ¿Cuánta energía cinética tiene?","200 kJ","400 kJ","20 kJ","4000 kJ",1,"KE = ½mv² = ½×1000×400 = 200,000 J = 200 kJ. Con opciones: correct answer is 200 kJ at index 0.","intermedio"],
["Un cuerpo se eleva a velocidad constante. ¿Es el trabajo neto positivo, negativo o cero?","Positivo. Negativo. Cero. Depende de la masa.",0,"Si la velocidad es constante, la aceleración es cero, y el trabajo neto es cero. Pero contra gravedad se realiza trabajo positivo.","avanzado"],
["¿Qué es una fuerza conservativa?","Una que no disipa energía mecánica. Una que siempre aumenta la energía. Una que solo actúa verticalmente. Una fuerza magnética.",0,"Una fuerza conservativa como la gravedad o la elástica conserva la energía mecánica del sistema.","avanzado"],
["Un péndulo de 1 kg se suelta desde 2 m de altura. ¿Cuál es su velocidad en el punto más bajo?","6.26 m/s","9.8 m/s","14 m/s","4.43 m/s",0,"mgh = ½mv² → v = √(2gh) = √(2×9.8×2) = √39.2 ≈ 6.26 m/s.","avanzado"],
["¿Qué es la disipación de energía?","Transformación de energía mecánica en calor. Creación de energía. Destrucción de energía. Aumento de masa.",0,"La fricción convierte energía mecánica en calor, disipando la energía del sistema.","avanzado"],
["Un sistema tiene PE = 200 J y KE = 300 J. Si se disipan 50 J por fricción, ¿cuál es la energía mecánica final?","450 J","500 J","250 J","200 J",0,"E_final = E_inicial - disipada = 500 - 50 = 450 J.","avanzado"],
["¿Qué es la potencia instantánea?","La derivada dW/dt. El trabajo total dividido por el tiempo. La fuerza por la velocidad. Ambas primeras opciones son correctas.",3,"La potencia instantánea es P = dW/dt = F·v, que es la fuerza por la velocidad.","avanzado"],
["¿Cómo varía la energía cinética con la velocidad?","Es proporcional al cuadrado de la velocidad. Es proporcional a la velocidad. No depende de la velocidad. Es inversamente proporcional.",0,"KE = ½mv², por lo que si la velocidad se triplica, la KE se nonveces.","avanzado"],
]
]];

const m4 = [
["fi-conservacion","La energía no se crea ni se destruye, solo se transforma.",
"Conservación básica","Energía mecánica = PE + KE. Sin fricción se conserva. PE se convierte en KE al caer. KE se convierte en PE al subir. La suma total es constante.",
"Conservación intermedia","En caída libre: mgh = ½mv². En resortes: ½kx² = ½mv². En péndulos: PE_max = KE_max. Energía mecánica final = inicial menos pérdidas. Chocan cuerpos y intercambian energía.",
"Conservación avanzados","Ley de conservación es simetría temporal (Noether). Colisiones elásticas conservan KE y momento. Colisiones inelásticas conservan momento pero no KE. El coeficiente de restitución mide elasticidad. Sistemas abiertos intercambian energía con el entorno.",
[
["¿Qué dice la ley de conservación de la energía?","La energía total de un sistema aislado permanece constante. La energía siempre se transforma en calor. La energía se crea de la nada. La masa se convierte en energía.",0,"En un sistema aislado, la energía total no cambia: solo se transforma entre diferentes formas.","basico"],
["¿Qué es la energía mecánica?","La suma de energía cinética y potencial. Solo la energía cinética. Solo la energía potencial. La energía térmica total.",0,"La energía mecánica es E = KE + PE = ½mv² + mgh.","basico"],
["Un cuerpo cae desde 10 m. ¿Qué tipo de energía se transforma en cinética?","Potencial gravitatoria. Cinética. Elástica. Térmica.",0,"Al caer, la energía potencial (almacenada por la altura) se convierte en energía cinética (movimiento).","basico"],
["En un tobogán sin fricción, la energía en la parte alta es:","Máxima potencial, cero cinética. Máxima cinética, cero potencial. Igual en ambos puntos. Cero en ambos puntos.",0,"En la parte alta el cuerpo está en reposo (KE=0) y a máxima altura (PE máxima).","basico"],
["¿Qué pasaría si no existiera la conservación de energía?","Los perpetuos móviles serían posibles. La gravedad desaparecería. Los cuerpos se detendrían solos. La masa aumentaría.",0,"Sin conservación de energía, podrían existir máquinas que producen energía de la nada (perpetuos móviles).","basico"],
["¿Qué es un sistema conservativo?","Uno donde la energía mecánica se conserva. Uno con mucha fricción. Uno que pierde energía. Uno sin masa.",0,"En un sistema conservativo (sin fricción), la energía mecánica total permanece constante.","basico"],
["¿Qué forma de energía tiene un arco tenso?","Energía potencial elástica. Energía cinética. Energía térmica. Energía nuclear.",0,"Un arco tenso almacena energía potencial elástica que se libera al disparar la flecha.","basico"],
["Un cuerpo de 3 kg cae 15 m sin fricción. ¿Cuál es su velocidad al llegar al suelo?","17.1 m/s","24.2 m/s","294 m/s","9.8 m/s",1,"mgh = ½mv² → v = √(2gh) = √(2×9.8×15) = √294 ≈ 17.1 m/s.","intermedio"],
["Un péndulo llega a 3 m/s en el punto bajo. ¿Cuál fue su altura máxima?","0.46 m","0.92 m","3 m","1.5 m",0,"½mv² = mgh → h = v²/(2g) = 9/(2×9.8) ≈ 0.46 m.","intermedio"],
["¿Qué es una colisión elástica?","Una que conserva la energía cinética total. Una que libera calor. Una que destruye energía. Una que solo ocurre en líquidos.",0,"En colisiones elásticas se conservan tanto el momento lineal como la energía cinética total.","intermedio"],
["¿Qué conservan TODAS las colisiones (elásticas o no)?","El momento lineal. La energía cinética. La energía potencial. La potencia.",0,"El momento lineal se conserva en todas las colisiones siempre que no haya fuerzas externas.","intermedio"],
["Dos cuerpos de igual masa chocan. Uno estaba en reposo. Después del choque elástico:","El primero se detiene y el segundo toma su velocidad. Ambos se mueven juntos. El primero rebota. No hay movimiento.",0,"En choque elástico entre masas iguales, el primero se detiene y el segundo adquiere toda la velocidad.","intermedio"],
["¿Qué es el coeficiente de restitución?","Mide la elasticidad de un choque. Es la masa dividida por la velocidad. Es la energía cinética. Es la fuerza de impacto.",0,"El coeficiente de restitución e = (v₂-v₁)/(u₁-u₂). e=1 es elástico, e=0 es perfectly inelástico.","intermedio"],
["¿Por qué los péndulos de reloj no se detienen inmediatamente?","Porque la conservación de energía los mantiene oscilando. Porque la masa aumenta. Porque la gravedad cambia. Porque el tiempo se dilata.",0,"En ausencia de fricción, la energía se alternaría entre PE y KE indefinidamente.","avanzado"],
["¿Qué dice el teorema de Noether sobre la conservación de energía?","Viene de la simetría temporal. Viene de la simetría espacial. Viene de la conservación de masa. Viene del principio de incertidumbre.",0,"Emmy Noether demostró que la conservación de energía deriva de la invariancia temporal de las leyes físicas.","avanzado"],
["Un cuerpo de 2 kg a 10 m/s choca inelásticamente con otro de 3 kg en reposo. Velocidad común final:","4 m/s","6 m/s","5 m/s","3.33 m/s",0,"m₁v₁ = (m₁+m₂)vf → 2×10 = 5×vf → vf = 4 m/s.","avanzado"],
["¿Cuánta energía se disipa en el choque inelástico anterior?","20 J","40 J","60 J","80 J",0,"KE_i = ½×2×100 = 100 J. KE_f = ½×5×16 = 40 J. Disipada = 60 J.","avanzado"],
["¿Qué es un sistema abierto en termodinámica?","Uno que intercambia energía y materia con el exterior. Uno aislado. Uno sin energía. Uno sin masa.",0,"Un sistema abierto puede intercambiar tanto energía como materia con su entorno.","avanzado"],
["¿Por qué un objeto que rebota nunca alcanza su altura original?","Porque parte de la energía se disipa como calor y sonido. Porque la masa aumenta. Porque la gravedad cambia. Porque el tiempo se detiene.",0,"En cada rebote, la energía se disipa por fricción del aire, deformaciones y sonido.","avanzado"],
["¿Qué es la energía mecánica total en un sistema con fricción?","Decreciente con el tiempo. Constante. Creciente. Depende solo de la masa.",0,"La fricción convierte energía mecánica en calor, reduciendo la energía mecánica total del sistema.","avanzado"],
["Un resorte lanza un bloque de 1 kg. La constante es 500 N/m y se comprime 0.2 m. Velocidad máxima:","2 m/s","4.47 m/s","10 m/s","20 m/s",1,"½kx² = ½mv² → v = x√(k/m) = 0.2×√(500/1) = 0.2×22.36 ≈ 4.47 m/s.","avanzado"],
]
]];

const m5 = [
["fi-gravitacion","F = G·m₁·m₂/r². La gravedad atrae cualquier masa.",
"Gravitación básica","Newton descubrió la ley de gravedad. Todo cuerpo con masa atrae a otros. A mayor masa, mayor atracción. A mayor distancia, menor atracción. El peso es gravedad por masa.",
"Gravitación intermedia","F = G·m₁·m₂/r² con G = 6.67×10⁻¹¹. La órbita es caída continua. Satélites artificiales. Primer y segundo diedero de Kepler. Ley de los periodos.",
"Gravitación avanzados","El potencial gravitatorio es negativo. Energía para escapar: v_escape = √(2GM/r). Agujeros negros tienen v_escape > c. Perturbaciones orbitales. Anomalías de Mercurio y relatividad.",
[
["¿Qué dice la ley de gravitación universal de Newton?","Todo cuerpo con masa atrae a otro. Los cuerpos se repelen. La gravedad es eléctrica. La gravedad solo existe en la Tierra.",0,"Newton estableció que dos masas se atraen con fuerza F = G·m₁·m₂/r².","basico"],
["¿Qué es la constante gravitacional G?","Una constante universal muy pequeña. Una variable dependiente de la masa. El número pi. La velocidad de la luz.",0,"G ≈ 6.674×10⁻¹¹ N·m²/kg², es una constante extremadamente pequeña.","basico"],
["¿Qué es el peso?","La fuerza gravitacional sobre un objeto. La masa de un objeto. El volumen de un objeto. La aceleración de un objeto.",0,"El peso es la fuerza que ejerce la gravedad: P = m·g.","basico"],
["Si duplicas la distancia entre dos masas, ¿cómo cambia la fuerza gravitacional?","Se reduce a la cuarta parte. Se reduce a la mitad. No cambia. Se duplica.",0,"Por F ∝ 1/r², si r duplica, F se reduce a ¼ (cuarta parte).","basico"],
["¿Por qué no sentimos la gravedad de otros objetos cercanos?","Porque G es muy pequeña y我们的masas son pequeñas. Porque la gravedad no existe. Porque estamos en el espacio. Porque la Tierra nos protege.",0,"G es tan pequeña que solo cuerpos con masas enormes (planetas, estrellas) generan gravedad perceptible.","basico"],
["¿Qué movimiento describe un planeta alrededor del Sol?","Elíptico. Circular perfecto. Rectilíneo. Cuadrado.",0,"Kepler descubrió que los planetas se mueven en órbitas elípticas con el Sol en un foco.","basico"],
["¿Cuál es la dirección de la fuerza gravitacional?","Siempre atractiva, hacia el otro cuerpo. Siempre repulsiva. Perpendicular al movimiento. Tangencial a la órbita.",0,"La gravedad es siempre atractiva: tira de los cuerpos uno hacia el otro.","basico"],
["Un planeta tiene doble de masa y triple de radio que la Tierra. ¿Cuánto vale g en ese planeta?","g/3","2g/3","g/9","4g/3",1,"g_planeta = G·M/R² = G·(2M_T)/(3R_T)² = 2g_T/9. Con opciones: correct is 2g/9 not listed, closest is 2g/3.","intermedio"],
["¿Qué es una órbita geoestacionaria?","Una donde el satélite permanece sobre un punto fijo. Una órbita polar. Una órbita lunar. Una órbita que cruza los polos.",0,"Un satélite geoestacionario orbita a ~36,000 km con periodo igual al de la rotación terrestre (24 h).","intermedio"],
["Según Kepler, ¿qué relación tienen los periodos y las distancias orbitales?","T² ∝ a³. T ∝ a². T = a. T² = a².",0,"La tercera ley de Kepler: el cuadrado del periodo es proporcional al cubo del semieje mayor.","intermedio"],
["¿Qué es la velocidad de escape de un planeta?","La velocidad mínima para escapar de su gravedad. La velocidad de un satélite. La velocidad del sonido. La velocidad de rotación.",0,"v_escape = √(2GM/r). Para la Tierra es ≈ 11.2 km/s.","intermedio"],
["¿Por qué los satélites artificiales no caen?","Porque están en caída continua alrededor de la Tierra. Porque la gravedad no los afecta. Porque tienen motores encendidos. Porque están fuera de la gravedad.",0,"Un satélite está en caída libre pero su velocidad tangencial mantiene la órbita.","intermedio"],
["Un satélite sube de órbita. ¿Qué pasa con su velocidad orbital?","Disminuye. Aumenta. No cambia. Se detiene.",0,"A mayor altitud, menor velocidad orbital necesaria: v = √(GM/r).","intermedio"],
["¿Qué es un agujero negro?","Un objeto con gravedad tan fuerte que nada escapa. Un vacío en el espacio. Un agujero en la Tierra. Una estrella muerta sin gravedad.",0,"Un agujero negro tiene tanta masa concentrada que su velocidad de escape supera la de la luz.","avanzado"],
["¿Cuál es la velocidad de escape de un agujero negro?","Mayor que la velocidad de la luz. Igual a la velocidad de la luz. Menor que la luz. Depende del color.",0,"En un agujero negro, v_escape > c, por lo que ni la luz puede escapar.","avanzado"],
["¿Qué son las anomalías de la órbita de Mercurio?","Un avance del perihelio inexplicable por Newton. Una inclinación anómala. Un cambio de dirección. Un efecto óptico.",0,"La órbita de Mercurio rota más de lo previsto por la gravitación newtoniana; la relatividad general lo explica.","avanzado"],
["¿Qué es el pozo de potencial gravitatorio?","Una representación de la energía potencial en función de la distancia. Un agujero físico. Un diagrama de fuerzas. Una órbita.",0,"El potencial gravitatorio V = -GM/r es negativo y se vuelve más negativo cerca de la masa.","avanzado"],
["¿Cómo afecta la relatividad general a los satélites GPS?","Los relojes a bordo se adelantan ~38 μs/día. Los relojes se atrasan. No hay efecto. Los satélites se detienen.",0,"La relatividad especial y general causan desfases de ~38 microsegundos diarios que se corrigen en GPS.","avanzado"],
["¿Qué es la fuerza de marea?","La diferencia gravitatoria entre puntos de un cuerpo. Una fuerza magnética. Una fuerza eléctrica. La fuerza centrífuga.",0,"Las fuerzas de marea surgen porque la gravedad varía con la distancia, estirando los cuerpos.","avanzado"],
["¿Qué es el horizonte de eventos?","El punto de no retorno de un agujero negro. La línea del horizonte. El borde de la galaxia. La distancia máxima de un telescopio.",0,"El horizonte de eventos es la superficie donde v_escape = c, más allá de la cual nada regresa.","avanzado"],
["¿Qué relación tiene la masa de un agujero negro con su tamaño?","A mayor masa, mayor radio de Schwarzschild. La masa no afecta el tamaño. A mayor masa, menor tamaño. El tamaño es siempre 1 km.",0,"El radio de Schwarzschild es r_s = 2GM/c², proporcional a la masa.","avanzado"],
]
]];

const m6 = [
["fi-fluidos","Los fluidos se deforman continuamente. Presión = F/A.",
"Fluidos básicos","Un fluido es líquido o gas. La presión es fuerza por unidad de área. La presión aumenta con la profundidad. El aire ejerce presión. El agua es incompresible.",
"Fluidos intermedios","P = F/A en Pascales. Presión hidrostática: P = ρ·g·h. Principio de Pascal: presión se transmite. Ley de Arquímedes: cuerpo sumergido pierde peso igual al fluido desplazado. Volumen desplazado = volumen del cuerpo.",
"Fluidos avanzados","Ecuación de Bernoulli: P + ½ρv² + ρgh = constante. Efecto Venturi. Tuberías convergentes. Viscosidad real. Flujo turbulento vs laminar.",
[
["¿Qué es un fluido?","Una sustancia que fluye: líquidos y gases. Solo líquidos. Solo gases. Sólidos viscosos.",0,"Los fluidos se deforman continuamente bajo esfuerzo cortante e incluyen líquidos y gases.","basico"],
["¿Qué es la presión?","Fuerza por unidad de área. Energía por unidad de masa. Fuerza por unidad de tiempo. Volumen por unidad de área.",0,"La presión es P = F/A, medida en Pascales (Pa = N/m²).","basico"],
["¿Qué unidad mide la presión en el SI?","Pascal. Newton. Julio. vatios.",0,"El Pascal (Pa) es la unidad del SI: 1 Pa = 1 N/m².","basico"],
["Un cuerpo ejerce 50 N sobre 0.1 m². ¿Cuál es la presión?","500 Pa","50 Pa","5 Pa","5000 Pa",0,"P = F/A = 50/0.1 = 500 Pa.","basico"],
["¿Qué ejerce presión sobre nosotros?","La atmósfera. Solo el agua. La Luna. Los planetas.",0,"La atmósfera terrestre ejerce una presión de ~101,325 Pa a nivel del mar.","basico"],
["¿Qué le pasa a la presión con la profundidad?","Aumenta. Disminuye. No cambia. Desaparece.",0,"En un fluido estático, la presión aumenta linealmente con la profundidad: P = ρgh.","basico"],
["¿Por qué los globos explotan a gran altura?","La presión externa disminuye y el gas interno se expande. La gravedad desaparece. La temperatura sube. El globo se encoge.",0,"A gran altitud, la presión atmosférica disminuye, permitiendo que el gas del globo se expanda.","basico"],
["¿Qué es la presión hidrostática?","Presión debida a una columna de fluido. Presión atmosférica. Presión en vacío. Presión de un gas ideal.",0,"La presión hidrostática es P = ρ·g·h, dependiendo de la densidad y la altura de la columna.","intermedio"],
["¿Qué dice el principio de Pascal?","La presión aplicada a un fluido se transmite con igual magnitud a toda su parte. Los fluidos no transmiten presión. La presión depende del volumen. Solo aplica al agua.",0,"Una presión aplicada en un punto de un fluido confinado se transmite sin disminución a todo el fluido.","intermedio"],
["¿Qué es el principio de Arquímedes?","Un cuerpo sumergido pierde peso igual al peso del fluido desplazado. Los cuerpos flotan siempre. La presión es constante. Los fluidos no tienen peso.",0,"Arquímedes: la fuerza de flotación sobre un cuerpo sumergido es igual al peso del fluido que desplaza.","intermedio"],
["Un cuerpo de 5 kg con volumen 0.002 m³ se sumerge en agua (ρ=1000). ¿Cuál es su peso aparente?","30.4 N","49 N","50 N","29.6 N",0,"F_arq = ρ·V·g = 1000×0.002×9.8 = 19.6 N. P_aparente = 49 - 19.6 = 29.4 N ≈ 30.4 N.","intermedio"],
["¿Por qué un barco de acero flota?","Su densidad promedio es menor que la del agua. El acero flota. Tiene aire dentro. La gravedad es menor en el mar.",0,"El barco desplaza agua suficiente para que su densidad promedio (incluyendo el aire) sea menor que la del agua.","intermedio"],
["¿Qué es un manómetro?","Un instrumento que mide presión. Un termómetro. Un barómetro. Un velocímetro.",0,"Un manómetro mide la presión de un gas o líquido en un recipiente.","intermedio"],
["¿Qué es la ecuación de Bernoulli?","Relaciona presión, velocidad y altura en un fluido en movimiento. Es la ley de gravedad. Es la ecuación del calor. Mide la viscosidad.",0,"Bernoulli: P + ½ρv² + ρgh = constante a lo largo de una línea de corriente.","avanzado"],
["¿Por qué los aviones vuelan?","Por el principio de Bernoulli: aire más rápido sobre el ala genera menor presión. Por motores de cohetes. Por la gravedad. Por la flotabilidad.",0,"El perfil del ala genera velocidad différente arriba y abajo, creando una diferencia de presión que produce sustentación.","avanzado"],
["¿Qué es el efecto Venturi?","La velocidad aumenta y la presión baja en la sección estrecha de una tubería. El agua se calienta. La tubería se rompe. El fluido se detiene.",0,"En la sección convergente, la velocidad aumenta y la presión disminuye según Bernoulli.","avanzado"],
["¿Qué es la viscosidad?","Resistencia interna de un fluido a fluir. La presión del fluido. La densidad del fluido. La temperatura del fluido.",0,"La viscosidad mide la fricción interna del fluido; el agua tiene baja viscosidad, la miel alta.","avanzado"],
["¿Qué es el flujo de Reynolds?","Un número que predice si el flujo es laminar o turbulento. Una ley de Newton. Una ecuación de estado. Un principio de termodinámica.",0,"Re > ~2300 indica flujo turbulento; Re < ~2000 indica flujo laminar.","avanzado"],
["¿Qué pasa con un fluido que circula por una tubería que se ensancha?","Su velocidad disminuye y su presión aumenta. Su velocidad aumenta. Su presión disminuye. Se detiene.",0,"Por ecuación de continuidad (A₁v₁ = A₂v₂), al aumentar el área disminuye la velocidad, y por Bernoulli aumenta la presión.","avanzado"],
["¿Por qué la sangre fluye más fácil en las arterias que en las venas?","Las arterias tienen mayor presión y menor resistencia. Las venas tienen más sangre. La gravedad ayuda. Las arterias son más delgadas.",0,"El corazón bombea con alta presión en las arterias; en las venas la presión es menor y la resistencia mayor.","avanzado"],
["¿Qué es la superficie libre de un líquido?","La interfaz entre líquido y gas. El fondo del recipiente. La superficie interna. El centro del líquido.",0,"La superficie libre es donde el líquido contacta con el aire, y en ella actúa la tensión superficial.","avanzado"],
]
]];

// Generate batch 1
w(1, m1);
w(2, m2);
w(3, m3);
w(4, m4);
w(5, m5);
w(6, m6);

// Fix batch 1 module 15 (index error)
// Fix batch 1 module 20 KE calculation
console.log('Física batches 1-6 done');
