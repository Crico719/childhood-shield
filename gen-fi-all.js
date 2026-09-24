const fs = require('fs');
const path = require('path');
const { writeBatch } = require('./gen-utils.js');

// Compact topic definitions: each has slug, tip, theory, and a question bank
// Questions are defined as arrays: [question, [opt0,opt1,opt2,opt3], correctIdx, explanation, difficulty]

// I'll define modules in groups of 10 and output batches directly
const allMods = [];

function mod(slug, tip, theory, exercises) {
  allMods.push({ slug, tip, theory, illustrations: [], exercises });
}

// ============ BATCH 1 (Modules 1-10) ============
// Already working from gen-fi-clean.js - load from JSON
const existing = JSON.parse(fs.readFileSync(path.join(__dirname, 'gen-fi-modules.json'), 'utf8'));
existing.forEach(m => allMods.push(m));

// ============ MODULE 2: DINAMICA ============
mod("fi-dinamica", "Segunda ley de Newton: F = m·a.",
  [
    { level: "basico", title: "Fuerzas y Newton", lines: [
      "Una fuerza es una interacción que puede cambiar el movimiento.",
      "La segunda ley: F = m·a.",
      "El peso es fuerza gravitacional: P = m·g.",
      "Si la fuerza neta es cero, el cuerpo no acelera.",
      "La unidad de fuerza es el Newton (N = kg·m/s²)."
    ]},
    { level: "intermedio", title: "Aplicación de Newton", lines: [
      "La reacción normal equilibra la componente perpendicular del peso.",
      "En plano inclinado, componente paralela es m·g·sin(θ).",
      "La fricción estática se opone al inicio del movimiento.",
      "La fricción cinética actúa durante el movimiento.",
      "La fuerza neta es suma vectorial de todas las fuerzas."
    ]},
    { level: "avanzado", title: "Dinámica avanzada", lines: [
      "Tercera ley: acción y reacción son iguales y opuestas.",
      "Fuerza centrípeta: F = m·v²/r mantiene el movimiento circular.",
      "Sistemas no inertiales requieren fuerzas ficticias.",
      "El peso aparente varía con la aceleración del sistema.",
      "Las leyes de Newton son válidas para velocidades bajas."
    ]}
  ],
  [
    ["¿Qué establece la segunda ley de Newton?",["E = mc²","F = m·a","v = d/t","P = m/V"],1,"La fuerza neta es igual a masa por aceleración.","basico"],
    ["¿Cuál es la unidad de fuerza?",["Kilogramo","Metro","Newton","Julio"],2,"El Newton (N) = 1 kg·m/s².","basico"],
    ["Un cuerpo de 8 kg con a = 5 m/s². ¿Fuerza neta?",["8 N","13 N","40 N","80 N"],2,"F = m·a = 8×5 = 40 N.","basico"],
    ["¿Qué es el peso?",["La masa por el volumen","La fuerza gravitacional sobre un objeto","Su aceleración","Su velocidad"],1,"P = m·g, la fuerza que ejerce la gravedad.","basico"],
    ["Si la fuerza neta es cero, ¿qué ocurre?",["El cuerpo acelera","Se detiene","Mantiene su movimiento","La masa cambia"],2,"Si F=0, la velocidad permanece.","basico"],
    ["¿Qué tipo de fuerza es la gravedad?",["Repulsiva","Magnética","Atractiva entre masas","Eléctrica"],2,"La gravedad atrae cualquier par de masas.","basico"],
    ["Un resorte comprimido se suelta. ¿Qué fuerza actúa?",["Centrífuga","Elástica restauradora","Magnética","Nula"],1,"La fuerza elástica restaura la forma original.","basico"],
    ["Bloque 5 kg, empuje 40 N, fricción 10 N. ¿Aceleración?",["2 m/s²","6 m/s²","8 m/s²","50 m/s²"],1,"F_neta = 30 N; a = 30/5 = 6 m/s².","intermedio"],
    ["Peso de un cuerpo de 60 kg en la Tierra",["60 N","294 N","588 N","9.8 N"],2,"P = 60×9.8 = 588 N.","intermedio"],
    ["¿Qué es la reacción normal?",["El peso del objeto","La fuerza perpendicular de la superficie","La fricción","La fuerza aplicada"],1,"Equilibra la componente perpendicular del peso.","intermedio"],
    ["Cuerpo 4 kg en plano inclinado 30°. Componente paralela:",["19.6 N","39.2 N","78.4 N","4 N"],0,"F_par = m·g·sin(30°) = 4×9.8×0.5 = 19.6 N.","intermedio"],
    ["¿Qué es la fricción cinética?",["Impide inicio del movimiento","Actúa durante el movimiento","Fuerza magnética","Centrípeta"],1,"Se opone al movimiento y depende de la normal.","intermedio"],
    ["Si duplicas F_neta, ¿qué pasa con a?",["Se duplica","No cambia","Se reduce a la mitad","Se cuadruplica"],0,"Por F=ma, si F duplica, a duplica.","intermedio"],
    ["Cuerpo 3 kg, F=15 N por 4 s desde reposo. ¿Distancia?",["8 m","40 m","60 m","120 m"],1,"a=5 m/s²; d = ½×5×16 = 40 m.","intermedio"],
    ["La fuerza centrípeta:",["Aleja del centro","Mantiene el movimiento circular hacia el centro","Es perpendicular al movimiento","Es siempre vertical"],1,"Apunta hacia el centro de la trayectoria circular.","avanzado"],
    ["Satélite 300 kg, 7000 m/s, radio 7×10⁶ m. ¿F centrípeta?",["2.1×10⁶ N","2.1×10¹⁰ N","3×10⁸ N","7×10⁶ N"],0,"F = 300×49×10⁶/(7×10⁶) = 2.1×10⁶ N.","avanzado"],
    ["Ascensor acelera hacia arriba. ¿Por qué más pesado?",["La masa aumenta","La reacción normal aumenta","La gravedad aumenta","El peso disminuye"],1,"N = m(g+a) > mg.","avanzado"],
    ["¿Qué dice la tercera ley de Newton?",["F = ma","La energía se conserva","Acción y reacción son iguales y opuestas","Todo cuerpo mantiene su movimiento"],2,"Las fuerzas aparecen en pares iguales y opuestos.","avanzado"],
    ["Elevador 900 kg desciende con a = 3 m/s². ¿Tensión?",["6120 N","8820 N","9000 N","11520 N"],0,"T = m(g-a) = 900(9.8-3) = 6120 N.","avanzado"],
    ["Si masa triplica con misma F, ¿a cambia?",["Se triplica","No cambia","Se reduce a un tercio","Se reduce a un noveno"],2,"a = F/m; si m triplica, a baja a un tercio.","avanzado"],
    ["En sistema no inercial, ¿qué fuerza ficticia aparece?",["Gravitacional","Centrífuga","Eléctrica","Magnética"],1,"En sistemas acelerados aparecen fuerzas ficticias.","avanzado"]
  ].map((q,i) => ({ id: i+1, question: q[0], options: q[1], correctIndex: q[2], explanation: q[3], difficulty: q[4] }))
);

// We have 2 modules so far. We need 70 total.
// Due to the massive size, let me generate the remaining 68 modules programmatically
// using topic data files

// For now, let's output what we have and set up the generation pipeline
const batches = [];
for (let i = 0; i < allMods.length; i += 10) {
  batches.push(allMods.slice(i, i + 10));
}

batches.forEach((batch, idx) => {
  writeBatch('fi', idx + 1, `fiBatch${idx + 1}`, batch);
});

console.log(`Total: ${allMods.length} modules, ${allMods.reduce((s,m) => s + m.exercises.length, 0)} questions`);
console.log(`Generated ${batches.length} batches`);
