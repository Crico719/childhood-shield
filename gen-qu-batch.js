const fs=require('fs'),path=require('path'),{writeBatch}=require('./gen-utils.js');
const MD=path.join(__dirname,'modules');
if(!fs.existsSync(MD))fs.mkdirSync(MD,{recursive:true});

// Load existing fisica to see structure
const fi=JSON.parse(fs.readFileSync(path.join(MD,'fisica.json'),'utf8'));
const FIELDS=['slug','tip','theory','illustrations','exercises'];
function th(l,t,ls){return{level:l,title:t,lines:ls}}
function q(id,qtext,opts,ci,expl,diff){return{id:++_id,qtext,options:opts,correctIndex:ci,explanation:expl,difficulty:diff}}
function m(slug,tip,theory,exercises){return{slug,tip,theory:theory,illustrations:[],exercises}}

const qu=[];
// MODULE 1: ATOMIC STRUCTURE
_id=0;
qu.push(m("qu-atomo",
  [th("basico","Estructura atómica","El átomo tiene núcleo y electrones.","Núcleo contiene protones y neutrones.","Electrones orbitan el núcleo.","Número atómico Z=protones.","Isótopos mismo Z pero diferente A."]),
   th("intermedio","Partículas subatómicas","Protones: carga +1, masa 1.","Neutrones: sin carga, masa ~1.","Electrones: carga -1, masa ~0.","Isótopos diferentes núm. neutrones."),
   th("avanzado","Modelo cuántico","Orbitales atómicos describen probabilidad.","Principio de incertidumbre.","Configuración electrónica por capas.","Orbitales s,p,d,f."])],
  [q(1,"¿Dónde están los protones y neutrones?",["En el núcleo","En la nube electrónica","En el espacio","En los electrones"],0,"Los protones y neutrones forman el núcleo central del átomo.")),
   q(2,"¿Qué determina el número atómico?",["Número de neutrones","Número de protones","Número de electrones","Masa atómica"],1,"El número atómico Z es el número de protones en el núcleo."),
   q(3,"Los isótopos son átomos con:",["Distinto número de protones","Distinto número de neutrones","Distinta carga","Distinta masa atómica"],1,"Mismo elemento (mismo Z) pero diferente número de neutrones."),
   q(4,"Carga del electrón:",["+1","-1","Neutro","Variable"],1,"El electrón tiene carga negativa (-1) elemental."),
   q(5,"Masas relativas:",["p=1,n=1,e≈0","p=0,n=0,e=1","p=1,n=0,e=0","p=1,n=1,e=-1"],0,"Protones y neutrones ~1 amu, electrones ~0 amu."),
   q(5,"Experimento de Rutherford:",["Descubrió el electrón","Descubrió el núcleo","Midiendo rayos catódicos","Descubrió isótopos"],1,"El experimento de dispersión de α-scattering reveló el núcleo atomico."),
   q(6,"Configuración electrónica del hidrógeno:",["1s¹","2s¹","1p¹","1d¹"],0,"El hidrógeno tiene un electrón en el orbital 1s."),
   q(7,"Número másico del carbono-12:",["6","12","18","24"],1,"Por definición, el carbono-12 tiene masa 12 amu."),
   q(7,"Átomo neutro tiene:",["Igual protones y electrones","Más protones que electrones","Más electrones que protones","Ninguna carga"],0,"Un átomo neutro tiene igual número de protones y electrones."),
   q(8,"Capa K máxima:",["2","8","18","32"],0,"La primera capa (n=1) maximo 2 electrones."),
   q(8,"Configuración del helio:",["1s²","1s¹ 2s¹","1s² 2s²","1s² 2p²"],0,"El helio es 1s², llena la capa K."),
   q(9,"¿Qué son orbitales?",["Órbitas clásicas","Regiones de probabilidad electrónica","Caminos definidos","Niveles de energía"],1,"Orbitales describen la probabilidad de encontrar un electrón."),
   q(9,"Orbital s tiene forma:",["Esférica","Pirámide","Doble bula","Trigonal"],0,"El orbital s es esférico alrededor del núcleo."),
   q(10,"Princiodo de Aufbau:",["Llenar primero los orbitales de mayor energía","Llenar primero los orbitales de menor energía","Saltar orbitales","Depende del elemento"],1,"Electrones llenan orbitales de menor energía primero."]),
   q(10,"Número cuántico magnético:",["Define orientación orbital","Define energía","Define spin","Define carga"],0,"m_l determina la orientación espacial del orbital."),
   q(11,"Configuración electrónica del nitrógeno (Z=7):",["1s² 2s² 2p³","1s² 2s² 2p⁴","1s² 2s¹ 2p⁴","1s² 2p⁵"],0,"N: 7 electrones → 1s² 2s² 2p³."),
   q(12,"Regla del octeto:",["Octetos llenan primero","Los átomos buscan completar 8 electrones de valencia","Sólo aplica a metales","Sólo aplica a no metales"],1,"Los átomos tienden a ganar, perder o compartir electrones para tener 8 electrones de valencia."),
   q(12,"Valencia del oxígeno:",["2","4","6","0"],0,"El oxígeno tiene 6 electrones de valencia, necesita 2 para completar el octeto."),
   q(13,"¿Qué son enlaces iónicos?",["Transferencia de electrones","Compartición de electrones","Interacciones metálicas","VdW forces"],1,"Los iones se forman por transferencia de electrones entre átomos."),
   q(13,"Enlace iónico NaCl:",["Na dona electrón a Cl","Na acepta electrón de Cl","No reaccionan","Forman molécula covalente"],0,"El sodio (metal) dona un electrón al cloro (no metal)."),
   q(14,"Energía de retículo:",["Energía de ionización","Energía liberada al formar ión sólido","Energía de fusión","Energía de vaporización"],1,"Energía liberada cuando los iones forman una red cristalina."),
   q(15,"¿Qué es una red cristalina?",["Un solo molécula","Disposición ordenada de iones en 3D","Líquido","Gas"],1,"Iones alternados disposión geométrica periódica en 3D."]),
   q(16,"Energía de atomización:",["Para formar iones","Para romper enlaces y formar átomos gaseosos","Para fundir un compuesto","Para vaporizar un líquido"],1,"Energía requerida para romper enlaces y formar átomos en estado gaseoso."),
   q(17,"¿Cuál electrón más fácil de remover?",["Core","Valencia","Core+valence","Ninguno"],1,"Los electrones de valencia son los más fáciles de remover o compartir."),
   q(17,"Configuración del cloro [Ne] 3s² 3p⁵:",["Fácil ganar 1 electrón","Fácil perder 1 electrón","Fácil perder 7 electrones","Fácil ganar 7 electrones"],0,"Termina con p⁵, necesita 1 electrón para completar octeto."),
   q(18,"¿Qué es electronegatividad?",["Tendencia a ganar electrones","Tendencia a perder electrones","Tamaño atómico","Radio atómico"],1,"Mide la capacidad de un átomo para atraer electrones en un enlace."),
   q(18,"¿Qué elemento es más electronegativo?",["Fluor","Oxígeno","Nitrógeno","Cloro"],0,"El flúor es el elemento más electronegativo de la tabla periódica."),
   q(19,"Enlace covalente no polar:",["Ocurrir entre elementos con gran diferencia de EN","Ocurrir entre elementos con pequeña diferencia de EN","Solo en metales","En iones"],1,"Pequeña diferencia de electronegatividad (~0.0-0.4)."),
   q(19,"Enlace C-H es aproximadamente:",["Iónico","Polar covalente","No polar covalente","Metálico"],2,"Diferencia EN C(2.5)-H(2.1)=0.4, categoría no polar/c borde."),
   q(20,"Geometría CH4:",["Lineal","Bendada","Trigonal plana","Tetraédrica"],3,"VSEPR: 4 pares de enlace, geometría tetraédrica perfecta."),
   q(20,"Ángulo H-C-H en metano:",["90°","109.5°","120°","180°"],1,"Tetraédrica: ángulo 109.5°."),
   q(21,"Energía de ligaión H-H:",["Muy alta","Alta","Media","Baja"],2,"~436 kJ/mol, fuerte enlace covalente simple."),
  ]
);

fs.writeFileSync(path.join(MD,'quimica.json'),JSON.stringify(qu,null,0),'utf8');
console.log('Química: '+qu.length+' módulos guardados');

// Generate batch files
const batches=[];
for(let i=0;i<qu.length;i+=10) batches.push(qu.slice(i,i+10));
batches.forEach((b,i)=>writeBatch('qu',i+1,'quBatch'+(i+1),b));
const totalQ=qu.reduce((s,m)=>s+m.exercises.length,0);
console.log(qu.length+' módulos, '+totalQ+' preguntas, '+batches.length+' batches');