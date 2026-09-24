const fs = require('fs');
const path = require('path');
const { writeBatch } = require('./gen-utils.js');
const MD = path.join(__dirname, 'modules');
if (!fs.existsSync(MD)) fs.mkdirSync(MD, { recursive: true });

const qu = [];
let _id = 0;

function th(l, t, lines) { return { level: l, title: t, lines }; }
function q(id, question, options, correctIndex, explanation, difficulty) {
  return { id: ++_id, question, options, correctIndex, explanation, difficulty };
}
function m(slug, tip, theory, exercises) {
  return { slug, tip, theory, illustrations: [], exercises };
}

// MODULE 1: CONFIGURACIÓN DE LA MATERIA
_id = 0;
qu.push(m("qu-configuracion",
  [th("basico","Materia y sus propiedades","La materia es todo lo que ocupa espacio y tiene masa.","Las propiedades físicas incluyen masa, volumen, densidad.","Las propiedades químicas describen cómo reacciona la materia."),
   th("intermedio","Clasificación de la materia","Los elementos se organizan en la tabla periódica.","Los compuestos se forman por unión de elementos.","Las mezclas pueden ser homogéneas oheterogéneas."),
   th("avanzado","Modelo atómico moderno","Orbitales atómicos describen la probabilidad de encontrar electrones.","La configuración electrónica determina propiedades químicas.","El modelo cuántico reemplaza al modelo planetario.")]],
  [q(1,"¿Qué es la materia?",["Todo lo que ocupa espacio y tiene masa","Solo los elementos","Los compuestos químicos","Las mezclas"],0,"La materia es el sustento de todo lo existente en el universo.")),
   q(2,"Las propiedades físicas incluyen:",["Masa y volumen","Solo masa","Solo volumen","Energía y temperatura"],0,"Masa y volumen son propiedades físicas fundamentales."),
   q(3,"¿Cómo se clasifican los elementos?",["En la tabla periódica","Por su color","Por su estado a temperatura ambiente","Por su precio"],0,"Los elementos se organizan en la tabla periódica por número atómico."),
   q(4,"Una mezcla homogénea tiene:",["Composición variable","Composición uniforme","Componentes visibles","Fase distinta"],1,"En una mezcla homogénea la composición es uniforme en toda la muestra."),
   q(5,"Los compuestos se forman por:",["Reacción nuclear","Unión de elementos por enlaces químicos","Física apenas","No reaccionan"],1,"Los compuestos aparecen cuando dos o más elementos se unen químicamente."),
   q(6,"La tabla periódica organiza elementos por:",["Número atómico"," Masa atómica","Radio atómico","Electricidad"],1,"El número atómico (cantidad de protones) es la base de la organización."),
   q(5,"Estado noble más estable:",["Helio","Neón","Argón","Kriptón"],0,"Los gases nobles tienen capas de valencia completas, muy estables."),
   q(4,"Estado gaseoso a temperatura ambiente:",["Oxígeno","Agua","Madera","Acero"],0,"El oxígeno es un gas diatómico (O₂) a temperatura estándar."),
   q(6,"Isótopos del carbono:",["6C, 12C, 14C","6C, 13C, 15C","6C, 14N, 16O","Sólo 12C"],1,"Los isótopos tienen mismo Z (6 protones) pero diferentes masas atómicas (12, 13, 14)."),
   q(7,"Configuración electrónica del Neon (Z=10):",["1s² 2s² 2p⁶","1s² 2s² 2p⁴","1s² 2s² 2p²","1s² 2s¹ 2p⁵"],0,"Neón tiene 10 electrones: 2 en K y 8 en L, capa completa."),
   q(8,"Regla del octeto afirma que los átomos tienden a tener:",["2 electrones de valencia","8 electrones de valencia","18 electrones","Cero electrones"],1,"Los átomos tienden a completar o alcanzar 8 electrones en su capa de valencia para mayor estabilidad."),
   q(7,"¿Qué caracteriza a los gases nobles?",["Muy reactivos","Poco reactivos o nulos","Altamente radiactivos","De vida muy corta"],1,"Sus capas de valencia están completas, lo que los hace extremadamente estables."),
   q(8,"Enlace iónico típicamente ocurre entre:",["No metales entre sí","Metales entre sí","Un metal y un no metal","Solo en orgánicos"],1,"Un metal cede electrones a un no metal, formando cationes y aniones."),
   q(9,"La energía de ionización es:",["La energía para remover un electrón","La energía para añadir un electrón","La energía de fusión","La energía de enlace"],1,"Es la energía mínima necesaria para remover un electrón de capa de valencia de un átomo en estado gaseoso."),
   q(10,"¿Cuál tiene menor energía de ionización?",["Fluoro","Cloro","Sodio","Argón"],2,"El sodio tiene un electrón de valencia fácil de remover; el argón tiene capa completa."),
   q(11,"Electronegatividad es:",["Tendencia a perder electrones","Tendencia a ganar electrones","Tamaño atómico","Radio atómico"],1,"Mide la capacidad de un átomo para atraer electrones en un enlace químico."),
   q(12,"¿Qué elemento es más electronegativo?",["Flúor","Oxígeno","Nitrógeno","Cloro"],0,"El flúor es el elemento con mayor electronegatividad (3.98 en la escala de Pauling)."),
   q(13,"Un enlace covalente puro ocurre cuando:",["ΔEN > 1.7","ΔEN = 0","ΔEN = 1.0","ΔEN es infinito"],1,"Dos elementos idénticos o con diferencia de electronegatividad muy pequeña (~0.0-0.4)."),
   q(12,"La energía de retículo es:",["Energía para formar iones","Energía liberada al formar un sólido iónico","Energía para romper un compuesto covalente","Energía de combustión"],1,"Energía liberada cuando los iones forman una red cristalina ordenada."),
   q(14,"¿Cuál es la geometría típica del CH4?",["Lineal","Bendada","Tetraédrica","Plana"],3,"VSEPR: carbono sp³ híbrido, 4 pares de enlace, geometría tetraédrica perfecta."),
   q(13,"Ángulo HCH en metano:",["90°","109.5°","120°","180°"],1,"109.5° en geometría tetraédrica perfecta."),
   q(15,"La polaridad de una molécula depende de:",["Solo la diferencia EN","Solo la geometría","La diferencia EN y la geometría","La masa molecular"],2,"Es necesario considerar tanto la diferencia de electronegatividad como la geometría molecular."),
   q(16,"El agua H₂O es polar porque:",["Sólo tiene polaridades simples","Tiene geometría curva y dipolos que no se cancelan","Los enlaces son iónicos","No tiene dipolos"],1,"Geometría angular (V-shaped): los dipolos O-H no se cancelan y hay momento dipolar."),
   q(17,"El CO₂ es lineal y no polar porque:",["Los enlaces son iónicos","Los dipolos se cancelan por simetría","Tiene momento dipolar","Es tetraédrica"],1,"Los dos dipolos C=O son iguales y opuestos, se cancelan completamente."),
   q(18,"Fuerza entre iones según Coulomb:",["F ∝ q₁q₂/r","F ∝ q₁+q₂/r","F ∝ q₁-r²","F ∝ q₁×r"],0,"F = k·q₁·q₂/r², fuerza proporcional al producto de cargas e inversa al cuadrado de la distancia."),
   q(17,"energía de enlace O-H en agua:",["≈ 460 kJ/mol","≈ 230 kJ/mol","≈ 100 kJ/mol","≈ 800 kJ/mol"],0,"Aproximadamente 460 kJ/mol por enlace O-H."),
   q(19,"El pH mide:",["La concentración de OH⁻","La concentración de H⁺","La temperatura de la solución","La conductividad"],1,"El pH mide la concentración de iones hidrógeno H⁺ en solución acuosa."),
   q(20,"pH = 7 es:",["Ácido fuerte","Base fuerte","Neutro","No definido"],2,"pH 7 a 25°C es neutro, [H⁺] = [OH⁻] = 10⁻⁷ M."),
  ]
);

// MODULE 2: ÁTOMS Y ELEMENTOS
_id = 0;
qu.push(m("qu-atomos-elementos",
  [th("basico","Símbolos y números","El símbolo químico identifica un elemento.","El número atómico (Z) = protones.","El número másico (A) = protones + neutrones."),
   th("intermedio","Período y grupo","Período: filas horizontales.","Grupo: columnas verticales, mismas propiedades."),
   th("avanzado","Tendencias periódicas","Radio atómico, electronegatividad, energía de ionización varían periódicamente.")]],
  [q(1,"El símbolo químico representa:",["La masa atómica","El nombre del elemento","El número de neutrones","El número de protones"],1,"Identifica el elemento en la tabla periódica.")),
   q(2,"Número atómico Z = número de:",["Protones","Neutrones","Electrones","Isótopos"],0,"El número atómico es la cantidad de protones en el núcleo."),
   q(3,"Número másico A = protones +:",["Electrones","Neutrones","Isótopos","Protones"],3,"A = Z + N (neutrones)."),
   q(4,"¿Cuántos protones tiene el oxígeno (Z=8)?",["2","6","8","10"],2,"El oxígeno tiene 8 protones."),
   q(4,"El número másico del oxígeno más común es:",["16","18","14","12"],1,"El oxígeno-16 tiene 6 protones + 10 neutrones = 16."),
   q(5,"Isótopos son átomos con:",["Mismo Z, distinto A","Distinto Z, mismo A","Mismo elemento","Ninguna"],0,"Mismo número de protones (Z), diferente número de neutrones."),
   q(6,"El carbono-14 se usa en:",["Datación por carbono","Fabricación de acero","Colorantes","Fármacos"],1,"Datación radiocarbónica de materiales orgánicos hasta ~50,000 años."),
   q(7,"Configuración del sodio (Na, Z=11):",["1s² 2s² 2p⁶ 3s¹","1s² 2s² 2p⁶ 3s²","1s² 2s² 2p⁵","1s² 2s² 2p⁶ 3p¹"],0,"Na: [Ne] 3s¹, un electrón de valencia."),
   q(8,"Configuración del magnesio (Mg, Z=12):",["1s² 2s² 2p⁶ 3s²","1s² 2s² 2p⁶ 3s¹","1s² 2s² 2p⁵","1s² 2s² 2p⁶ 3p²"],0,"Mg: [Ne] 3s², dos electrones de valencia."),
   q(9,"Elemento del grupo 1 (ales alcalinos):",["Li, Na, K, Rb, Cs, Fr","Be, Mg, Ca, Sr, Ba, Ra","B, Al, Ga, In, Tl, Nh","C, Si, Ge, Sn, Pb, F"],0,"Grupo 1: un electrón de valencia, muy reactivos."),
   q(10,"Elemento del grupo 17 (ales halógenos):",["F, Cl, Br, I, At","O, S, Se, Te, Po","N, P, As, Sb, Bi","He, Ne, Ar, Kr, Xe, Rn"],1,"Grupo 17: siete electrones de valencia, muy electronegativos."),
   q(11,"¿Qué es el radio atómico?",["Tamaño del núcleo","Tamaño del átomo","Distancia entre enlaces","Longitud de onda"],1,"Radio que mide el tamaño del átomo en su estado neutral."),
   q(12,"Tendencia del radio atómico en un periodo:",["Aumenta de izquierda a derecha","Disminuye de izquierda a derecha","Se mantiene constante","Depende del isótopo"],1,"A medida que aumenta Z, la carga nuclear atrae más electrones, reduciendo el radio."),
   q(13,"Tendencia del radio atómico en un grupo:",["Aumenta hacia abajo","Disminuye hacia abajo","Se mantiene constante","Irregular"],1,"Se añaden capas electrónicas, aumentando el tamaño atómico."),
   q(14,"Primera energía de ionización tendencia en periodo:",["Aumenta de izquierda a derecha","Disminuye de izquierda a derecha","Se mantiene constante","No existe"],1,"Aumenta al añadir protones y electrones a la misma capa."),
   q(15,"¿Qué es la afinidad electrónica?",["Energía liberada al añadir electrón","Energía para remover electrón","Energía de fusión","Energía de enlace"],1,"Energía que se libera o requiere al añadir un electrón a un átomo neutral."),
   q(12,"¿Qué elemento tiene mayor afinidad electrónica?",["Flúor","Cloro","Oxígeno","Nitrógeno"],0,"El flúor tiene la mayor afinidad electrónica de la tabla periódica."),
   q(18,"Metales típicamente tienen:",["Baja electronegatividad","Alta electronegatividad","Poco radio atómico","Pocas capas de valencia"],1,"Los metales tienden a ceder electrones, baja electronegatividad."),
   q(19,"No metales típicamente tienen:",["Alta electronegatividad","Baja electronegatividad","Gran radio atómico","Muchas capas de valencia"],1,"Los no metales tienden a ganar electrones."),
   q(20,"Elemento del periodo 3, grupo 14:",["Silicio (Si)","Fósforo (P)","Azufre (S)","Cloro (Cl)"],0,"Periodo 3, grupo 14: silicio, es semiconductor."),
  ]
);

fs.writeFileSync(path.join(MD,'quimica.json'),JSON.stringify(qu,null,0),'utf8');
console.log('Química: '+qu.length+' módulos guardados');

// Generate batch files
const batches=[];
for(let i=0;i<qu.length;i+=10) batches.push(qu.slice(i,i+10));
batches.forEach((batch,i)=>writeBatch('qu',i+1,'quBatch'+(i+1),batch));
const totalQ=qu.reduce((s,m)=>s+m.exercises.length,0);
console.log(qu.length+' módulos, '+totalQ+' preguntas, '+batches.length+' batches');