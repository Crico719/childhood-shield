const fs = require('fs');
const path = require('path');
const OUT = path.resolve(__dirname, '../prepa-premium-uv/src/data');
const { writeBatch } = require('./gen-utils.js');

// Simple approach: define modules as JSON-like structures
// Each module: { slug, tip, theory:[{level,title,lines:[]}], exercises:[{question,options:[],correctIndex,explanation,difficulty}] }

const m = [];

// Helper to build a module
function mod(slug, tip, th, ex) {
  return { slug, tip, theory: th, illustrations: [], exercises: ex };
}

// Helper for theory
function th(lvl, title, lines) {
  return { level: lvl, title, lines };
}

// Helper for question
function q(q_text, opts, ci, expl, diff) {
  return { question: q_text, options: opts, correctIndex: ci, explanation: expl, difficulty: diff };
}

// ====== BATCH 1: Modules 1-10 ======
m.push(mod("fi-kinematica","En MRU: v = d/t. En MRUA: vf = vi + a·t.",
  [th("basico","Movimiento rectilíneo uniforme",["La posición describe la ubicación de un cuerpo respecto a un punto de referencia.","Velocidad es la rapidez con dirección: v = d/t.","En el MRU la velocidad es constante y la aceleración es cero.","La distancia recorrida es d = v × t.","La aceleración mide el cambio de velocidad: a = Δv/Δt."]),
   th("intermedio","MRUA",["vf = vi + a·t calcula la velocidad final.","d = vi·t + ½a·t² calcula el desplazamiento.","vf² = vi² + 2a·d relaciona velocidad y distancia sin tiempo.","En caída libre la aceleración es g = 9.8 m/s².","El tiempo de vuelo vertical depende de la altura inicial."]),
   th("avanzado","Proyectiles",["El movimiento parabólico combina MRU horizontal y MRUA vertical.","El alcance máximo se logra con un ángulo de 45°.","La velocidad instantánea es la derivada de la posición: v = dx/dt.","En caída libre con aire, la velocidad terminal se alcanza cuando la resistencia iguala al peso.","Las componentes vectoriales se analizan independientemente."])],
  [q("¿Qué describe la posición en física?",["La ubicación de un cuerpo respecto a un punto de referencia","La rapidez de un cuerpo","La masa de un cuerpo","La fuerza sobre un cuerpo"],0,"La posición describe la ubicación exacta de un objeto respecto a un sistema de referencia.","basico"),
   q("¿Qué es la velocidad en MRU?",["Una magnitud constante y dirección fija","Una aceleración cero","Una fuerza nula","Un tipo de movimiento circular"],0,"En el MRU la velocidad es constante en magnitud y dirección.","basico"),
   q("Un auto viaja a 80 km/h durante 3 horas. ¿Qué distancia recorre?",["40 km","80 km","160 km","240 km"],3,"d = v × t = 80 × 3 = 240 km.","basico"),
   q("¿Qué tipo de movimiento tiene una piedra en caída libre?",["Rectilíneo uniforme","Rectilíneo uniformemente acelerado","Circular uniforme","Armónico simple"],1,"En caída libre la gravedad produce aceleración constante g ≈ 9.8 m/s².","basico"),
   q("En el MRU, si un cuerpo recorre 150 m en 30 s, ¿cuál es su velocidad?",["3 m/s","5 m/s","30 m/s","150 m/s"],1,"v = d/t = 150/30 = 5 m/s.","basico"),
   q("¿Qué mide la aceleración?",["La posición final","El cambio de velocidad en el tiempo","La masa del cuerpo","La fuerza total"],1,"La aceleración es el ritmo de cambio de la velocidad: a = Δv/Δt.","basico"),
   q("¿Qué es un vector en física?",["Solo una magnitud numérica","Una magnitud con dirección","Una unidad de medida","Un tipo de energía"],1,"Un vector tiene magnitud y dirección, como la velocidad o la fuerza.","basico"),
   q("Un auto parte del reposo y acelera a 4 m/s². ¿Velocidad tras 6 s?",["4 m/s","6 m/s","10 m/s","24 m/s"],3,"vf = vi + a·t = 0 + 4×6 = 24 m/s.","intermedio"),
   q("Un cuerpo se desplaza 120 m en 10 s con a constante desde reposo. ¿Cuál es a?",["1.2 m/s²","2.4 m/s²","12 m/s²","24 m/s²"],1,"d = ½a·t² → 120 = ½a·100 → a = 2.4 m/s².","intermedio"),
   q("¿Velocidad final de un cuerpo que cae desde 80 m?",["28 m/s","39.6 m/s","80 m/s","98 m/s"],1,"vf² = 2·g·h = 2×9.8×80 = 1568 → vf = 39.6 m/s.","intermedio"),
   q("Un proyectil se lanza horizontal a 25 m/s desde 45 m. ¿Tiempo al suelo?",["2 s","3 s","4.5 s","5 s"],1,"h = ½g·t² → 45 = 4.9·t² → t ≈ 3 s.","intermedio"),
   q("Un auto frena de 25 m/s a 0 en 5 s. ¿Desaceleración?",["-2.5 m/s²","-5 m/s²","-25 m/s²","-125 m/s²"],1,"a = (vf-vi)/t = (0-25)/5 = -5 m/s².","intermedio"),
   q("¿Qué es un ejemplo de MRU en la vida real?",["Un auto en autopista a velocidad constante","Una pelota cayendo","Un péndulo","Un planeta orbitando"],0,"Un auto con crucero mantenido es un buen ejemplo de MRU.","intermedio"),
   q("Un cuerpo con vi = 20 m/s y a = -4 m/s². ¿Cuándo se detiene?",["2 s","5 s","10 s","20 s"],1,"0 = 20 + (-4)·t → t = 5 s.","intermedio"),
   q("Velocidad instantánea de x = 3t² + 2t en t = 2 s",["8 m/s","12 m/s","14 m/s","16 m/s"],2,"v = dx/dt = 6t + 2; en t=2: v = 14 m/s.","avanzado"),
   q("Un cuerpo cae 300 m. ¿Velocidad al impactar?",["54.2 m/s","76.7 m/s","98 m/s","300 m/s"],1,"vf = √(2·g·h) = √(2×9.8×300) = √5880 ≈ 76.7 m/s.","avanzado"),
   q("Alcance máximo de proyectil con v₀ = 20 m/s a 45°",["20 m","40 m","40.8 m","80 m"],2,"R = v₀²·sin(2θ)/g = 400×1/9.8 ≈ 40.8 m.","avanzado"),
   q("¿Qué ecuación relaciona vf² con vi² sin usar tiempo?",["vf² = vi² + 2a·d","vf = vi + a·t","d = v·t","a = F/m"],0,"vf² = vi² + 2a·d se obtiene al eliminar el tiempo de las ecuaciones.","avanzado"),
   q("En plano inclinado de 30°, componente paralela de g:",["9.8 m/s²","4.9 m/s²","8.5 m/s²","0 m/s²"],1,"a_paralela = g·sin(30°) = 9.8×0.5 = 4.9 m/s².","avanzado"),
   q("¿Qué es un sistema de referencia inercial?",["Uno que acelera","Uno que rota","Uno en reposo o velocidad constante","Uno en el vacío"],2,"En un sistema inercial las leyes de Newton se cumplen sin fuerzas ficticias.","avanzado"),
   q("Un satélite con v constante en magnitud, ¿es MRU?",["Sí, completamente MRU","No, tiene aceleración centrípeta","Solo MRUA","Ninguno"],1,"La dirección cambia, por lo que hay aceleración centrípeta aunque la magnitud sea constante.","avanzado")]))

console.log("Module 1 added: " + m[0].exercises.length + " questions");

// We'll add more modules in separate files to keep size manageable
// Export for merge script
fs.writeFileSync(path.join(__dirname, 'gen-fi-modules.json'), JSON.stringify(m), 'utf8');
console.log("Wrote gen-fi-modules.json with " + m.length + " modules");
