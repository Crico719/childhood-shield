const fs=require('fs'),path=require('path'),{writeBatch}=require('./gen-utils.js');
const MD=path.join(__dirname,'modules');
const fi=JSON.parse(fs.readFileSync(path.join(MD,'fisica.json'),'utf8'));
let _id=0;
function th(l,t,ls){return{level:l,title:t,lines:ls}}
function q(question,options,correctIndex,explanation,difficulty){return{id:++_id,question,options,correctIndex,explanation,difficulty}}
function m(slug,theory,exercises){return{slug,tip:theory[2]?theory[2].lines[0]:theory[0].lines[0],theory,illustrations:[],exercises}}

// MODULE 17: ELECTROMAGNETISMO AVANZADO
_id=0;
fi.push(m("fi-electro-avanzado",
  [th("basico","Ley de Coulomb y campo eléctrico",["La fuerza eléctrica entre cargas: F = k·q₁·q₂/r².","k = 9×10⁹ N·m²/C² es la constante de Coulomb.","El campo eléctrico: E = F/q = k·Q/r².","Las líneas de campo van de positivo a negativo.","Un campo uniforme tiene líneas paralelas y equidistantes."]),
   th("intermedio","Potencial y capacitancia",["El potencial eléctrico: V = k·Q/r.","La diferencia de potencial causa movimiento de carga.","Un capacitor almacena carga: C = Q/V.","Energía en un capacitor: E = ½CV².","Capacitancia de placas paralelas: C = ε₀A/d."]),
   th("avanzado","Dieliéctricos y corriente",["Los dieliéctricos aumentan la capacitancia.","La corriente de desplazamiento completa las ecuaciones de Maxwell.","La conductividad σ = 1/ρ relates corriente y campo.","Ley de Ohm microscópica: J = σE.","En régimen alterno la impedancia Z sustituye a R."])],
  [q("¿Qué es la constante de Coulomb?",["Una velocidad","Una constante que relaciona fuerza eléctrica con cargas y distancia","Una resistencia","Una frecuencia"],1,"k = 9×10⁹ N·m²/C² en el vacío.","basico"),
   q("Dos cargas de 1 μC separadas 1 m. ¿Fuerza?",["9×10⁻³ N","9 N","9×10³ N","9×10⁹ N"],1,"F = k·q₁·q₂/r² = 9×10⁹×10⁻¹²/1 = 9×10⁻³ N.","basico"),
   q("¿Qué es el campo eléctrico?",["Una fuerza neta","La fuerza por unidad de carga que existe en un punto","Un voltaje","Una corriente"],1,"E = F/q, indica la fuerza que experimentaría una carga de prueba.","basico"),
   q("Las líneas de campo eléctrico van de:",["Negativo a positivo","Positivo a negativo","De arriba a abajo","En círculos"],1,"Convencionalmente de carga positiva a negativa.","basico"),
   q("¿Qué es el voltaje?",["Una corriente","La diferencia de potencial eléctrico entre dos puntos","Una resistencia","Una carga"],1,"Es la energía por unidad de carga entre dos puntos.","basico"),
   q("Un capacitor de 10 μF con 12 V. ¿Carga almacenada?",["0.12 μC","1.2 μC","12 μC","120 μC"],2,"Q = CV = 10×10⁻⁶×12 = 120 μC.","basico"),
   q("La energía almacenada en un capacitor es:",["E = CV","E = ½CV²","E = V/R","E = I²R"],1,"E = ½CV² representa la energía potencial eléctrica.","basico"),
   q("Si duplicas la distancia entre placas de un capacitor:",["C se duplica","C se reduce a la mitad","C no cambia","C se cuadruplica"],1,"C = ε₀A/d; si d duplica, C baja a la mitad.","basico"),
   q("¿Qué es la capacitancia?",["La resistencia al flujo de corriente","La capacidad de almacenar carga por voltaje","La velocidad de la luz","La fuerza entre cargas"],1,"C = Q/V mide cuánta carga almacena por voltaje.","basico"),
   q("Potencial eléctrico de una carga Q a distancia r:",["V = kQr","V = kQ/r","V = kQr²","V = kQ/r²"],1,"V = k·Q/r, disminuye con la distancia.","intermedio"),
   q("Capacitor de 5 μF cargado a 200 V. ¿Energía?",["0.1 J","1 J","10 J","200 J"],0,"E = ½CV² = ½×5×10⁻⁶×40000 = 0.1 J.","intermedio"),
   q("¿Qué es un dieliéctrico?",["Un conductor","Un material aislante que se coloca entre placas de un capacitor","Un semiconductor","Un imán"],1,"Aumenta la capacitancia al reducir el campo entre placas.","intermedio"),
   q("Constante dieléctrica del vacío ε₀ vale:",["1","8.85×10⁻¹² F/m","9×10⁹","3×10⁸"],1,"ε₀ = 8.85×10⁻¹² F/m es la permitividad del vacío.","intermedio"),
   q("El campo eléctrico dentro de un conductor en equilibrio es:",["Máximo","Cero","Uniforme","Depende de la carga"],1,"En equilibrio electrostático, E = 0 dentro del conductor.","intermedio"),
   q("¿Qué es un electroscopio?",["Mide resistencia","Detecta cargas eléctricas por repulsión de hojas metálicas","Mide voltaje","Cuenta electrones"],1,"Las hojas se abren al cargarse por repulsión.","intermedio"),
   q("Corriente en un capacitor en régimen continuo establecido:",["Es constante","Es cero después de cargado","Aumenta linealmente","Depende de la resistencia"],1,"En DC estable, un capacitor actúa como circuito abierto.","avanzado"),
   q("¿Qué es la impedancia de un capacitor en alterno?",["Z = RC","Z = 1/(ωC)","Z = ωC","Z = R + ωC"],1,"La reactancia capacitiva es Xc = 1/(ωC).","avanzado"),
   q("¿Qué dice la ley de Gauss para electricidad?",["∮E·dA = Q_enc/ε₀","V = IR","F = BIL","∮B·dA = 0"],0,"El flujo eléctrico a través de una superficie cerrada es proporcional a la carga interior.","avanzado"),
   q("En un circuito RC, ¿cuánto tarda en cargarse el capacitor?",["Instantáneamente","Tiempo finito dependiendo de τ = RC","Infinito tiempo","Depende de la temperatura"],1,"El tiempo característico es τ = RC.","avanzado"),
   q("¿Qué es el rayo catódico?",["Un tipo de luz","Flujo de electrones en un tubo de vacío","Una corriente alterna","Un campo magnético"],1,"Haces de electrones emitidos por un cátodo en tubo de vacío.","avanzado"),
   q("¿Qué experimento realizó Thomson con rayos catódicos?",["Descubrió el protón","Midió la relación carga/masa del electrón","Descubrió el neutrón","Midió la velocidad de la luz"],1,"En 1897 determinó q/m del electrón, primera partícula subatómica.","avanzado")
]));

// MODULE 18: MECANICA DE FLUIDOS AVANZADA
_id=0;
fi.push(m("fi-fluidos-avanz",
  [th("basico","Flujo de fluidos",["El caudal volumétrico es Q = A·v.","Un fluido incompresible mantiene Q constante.","La viscosidad se opone al movimiento del fluido.","Los fluidos ideales no tienen viscosidad.","El flujo laminar es ordenado; el turbulento es caótico."]),
   th("intermedio","Dinámica de fluidos",["Ecuación de Bernoulli: P + ½ρv² + ρgh = constante.","La ecuación de continuidad: A₁v₁ = A₂v₂.","En puntos altos de una tubería, la presión baja.","La viscosidad depende de la temperatura.","Número de Reynolds determina laminar vs turbulento."]),
   th("avanzado","Flujos especiales",["El número de Reynolds Re = ρvL/μ.","Re < 2000: flujo laminar; Re > 4000: turbulento.","La ecuación de Navier-Stokes describe el movimiento de fluidos.","El efecto Coandă: chorro se adhiere a superficies curvas.","Los fluidos no newtonianos cambian su viscosidad con la tensión."])],
  [q("¿Qué es el caudal volumétrico?",["La velocidad del fluido","El volumen de fluido que pasa por unidad de tiempo","La presión del fluido","La masa del fluido"],1,"Q = A·v, se mide en m³/s.","basico"),
   q("Si un tubo se estrecha, ¿qué pasa con la velocidad del fluido?",["Disminuye","No cambia","Aumenta","Se detiene"],2,"Por continuidad, al disminuir A, v aumenta.","basico"),
   q("¿Qué es la viscosidad?",["La densidad del fluido","La resistencia interna al flujo","La presión del fluido","La temperatura"],1,"La viscosidad es la 'fricción interna' del fluido.","basico"),
   q("¿Qué es un fluido ideal?",["Un fluido muy caliente","Un fluido sin viscosidad y en compresible","Un fluido muy denso","Un fluido que no fluye"],1,"En modelos teóricos se desprecia la viscosidad.","basico"),
   q("¿Qué diferencia hay entre flujo laminar y turbulento?",["Laminar es caótico","Laminar es ordenado, turbulento caótico","No hay diferencia","Depende de la presión"],1,"En laminar las capas se deslizan sin mezclar; en turbulento se mezclan.","basico"),
   q("Bernoulli relaciona:",["Solo presión y temperatura","Presión, velocidad y altura en un fluido","Masa y volumen","Fuerza y distancia"],1,"P + ½ρv² + ρgh = constante a lo largo de una línea de corriente.","basico"),
   q("¿Qué dice la ecuación de continuidad?",["P es constante","A₁v₁ = A₂v₂","La masa se conserva","La energía se conserva"],1,"Para fluido incompresible, el caudal es constante.","basico"),
   q("Agua fluye por tubería de 4 cm² a 2 m/s. Se estrecha a 2 cm². ¿v₂?",["1 m/s","2 m/s","4 m/s","8 m/s"],2,"v₂ = v₁(A₁/A₂) = 2×(4/2) = 4 m/s.","intermedio"),
   q("¿Qué mide el número de Reynolds?",["La temperatura","La relación entre fuerzas inerciales y viscosas","La presión","La masa"],1,"Re = ρvL/μ; determina si el flujo es laminar o turbulento.","intermedio"),
   q("Re < 2000 indica flujo:",["Turbulento","Laminar","Crítico","Imposible"],1,"Valores bajos de Re significan flujo laminar.","intermedio"),
   q("¿Qué es el tubo de Pitot?",["Un termómetro","Un instrumento que mide velocidad de fluido por presión","Un barómetro","Un manómetro"],1,"Mide la presión de impacto para determinar la velocidad.","intermedio"),
   q("¿Por qué los aviones vuelan según Bernoulli?",["Por hélices","La velocidad diferente sobre el ala crea diferencia de presión","Por gravedad negativa","Por arquitectura"],1,"Mayor velocidad arriba del ala = menor presión = sustentación.","intermedio"),
   q("Tubería horizontal: punto A a 3 m/s, punto B a 6 m/s. ¿Presión?",["Mayor en A que B","Mayor en B que A","Igual en ambos","Depende de la densidad"],0,"Mayor velocidad implica menor presión por Bernoulli.","intermedio"),
   q("¿Qué es la ecuación de Navier-Stokes?",["Ecuación de conservación de energía","Ecuación que describe el movimiento de fluidos viscosos","Ley de Ohm para fluidos","Ecuación de los gases ideales"],1,"Describe la dinámica de fluidos viscosos y es fundamental en mecánica de fluidos.","avanzado"),
   q("¿Qué es el efecto Coandă?",["Enfriamiento de fluidos","Un chorro de fluido se adhiere a una superficie curva cercana","Aumento de presión","Resonancia de fluidos"],1,"El chorro tiende a seguir la curvatura de una superficie cercana.","avanzado"),
   q("¿Qué son los fluidos no newtonianos?",["Fluidos con viscosidad constante","Fluidos cuya viscosidad cambia con la tensión aplicada","Fluidos ideales","Fluidos sin masa"],1,"Como la mezcla de maíz y agua: se endurecen al golpearlos.","avanzado"),
   q("¿Qué es la capa límite?",["La parte más caliente del fluido","Región delgada junto a la superficie donde la velocidad varía de 0 a la del flujo libre","La capa superior del fluido","El fondo del tubo"],1,"En la superficie la velocidad es cero (condición de no deslizamiento).","avanzado"),
   q("¿Por qué los peces son hidrodinámicos?",["Para verse bien","Para minimizar la resistencia viscosa al moverse en agua","Para nadar más rápido que la luz","Para producir electricidad"],1,"La forma reduce la resistencia del fluido y la generación de turbulencia.","avanzado"),
   q("¿Qué es la tensión superficial?",["La presión máxima","La fuerza por unidad de longitud en la superficie de un líquido","La viscosidad superficial","La temperatura de ebullición"],1,"Las moléculas en la superficie tienen menos vecinas, generando una 'piel'.","avanzado"),
   q("¿Qué es el número de Mach?",["Relación entre velocidad del objeto y la del sonido en el medio","Relación de masas","Relación de presiones","Relación de temperaturas"],1,"Ma = v/v_s; Ma > 1 indica movimiento supersónico.","avanzado")
]));

// MODULE 19: TERMODINAMICA AVANZADA
_id=0;
fi.push(m("fi-termo-avanzado",
  [th("basico","Procesos termodinámicos",["Proceso isotérmico: temperatura constante, ΔU = 0.","Proceso adiabático: Q = 0, ΔU = -W.","Proceso isobárico: presión constante, W = PΔV.","Proceso isocórico: volumen constante, W = 0.","Trabajo en un gas: W = ∫PdV = área bajo la curva en P-V."]),
   th("intermedio","Entropía y máquinas térmicas",["ΔS = Q/T en procesos reversibles.","La entropía de un gas ideal depende de T y V.","El ciclo Otto tiene dos adiabáticos y dos isocóricos.","El ciclo Diesel tiene dos adiabáticos, un isobárico y un isocórico.","La eficiencia del Otto depende de la relación de compresión."]),
   th("avanzado","Mecánica estadística",["La temperatura es proporcional a la energía cinética promedio.","E_kinética = (3/2)kT por molécula (grados de libertad translacionales).","La distribución de Maxwell-Boltzmann describe velocidades moleculares.","La entropía mide el número de microestados posibles: S = k·ln(Ω).","El tercer principio: S → 0 cuando T → 0 K."])],
  [q("En proceso isotérmico de un gas ideal, ΔU es:",["Positivo","Negativo","Cero","Depende de la presión"],2,"La energía interna de un gas ideal solo depende de T; si T es constante, ΔU = 0.","basico"),
   q("En proceso adiabático, ¿qué relación se cumple?",["PV = constante","PV^γ = constante","P/T = constante","V/T = constante"],1,"La relación adiabática es PV^γ = constante donde γ = Cp/Cv.","basico"),
   q("¿Qué es el trabajo en un proceso termodinámico?",["El calor transferido","El área bajo la curva P-V: W = ∫PdV","La entropía generada","La temperatura final"],1,"El trabajo es la integral de presión por cambio de volumen.","basico"),
   q("Proceso isocórico: ¿cuánto trabajo se realiza?",["W = PΔV","W = 0","W = nRT","W = Q"],1,"En volumen constante, ΔV = 0, por lo tanto W = 0.","basico"),
   q("Proceso isobárico: el trabajo es:",["W = PΔV","W = 0","W = nRT²","W = Q/T"],0,"Con presión constante, W = P(V₂ - V₁) = PΔV.","basico"),
   q("¿Qué es el calor específico a presión constante (Cp)?",["El calor para elevar 1 K a volumen constante","El calor para elevar 1 K a presión constante","La capacidad total","La entropía"],1,"Cp > Cv siempre, porque parte del calor hace trabajo de expansión.","basico"),
   q("Relación de Mayer: Cp - Cv =:",["0","R","R²","nR"],1,"Para un gas ideal, Cp - Cv = R = 8.314 J/(mol·K).","basico"),
   q("Para gas ideal monoatómico, Cv =:",["R","3R/2","5R/2","3R"],1,"Cv = (3/2)R porque tiene 3 grados de libertad translacionales.","intermedio"),
   q("Para gas ideal diatómico, Cv =:",["3R/2","5R/2","7R/2","R"],1,"5 grados de libertad: 3 trans + 2 rotacionales.","intermedio"),
   q("¿Qué es la distribución de Maxwell-Boltzmann?",["Describe la distribución de velocidades de moléculas en un gas","Describe la distribución de carga","Describe la distribución de energía en un circuito","Describe la distribución de masa"],1,"Más moléculas tienen velocidad media, pocas muy rápidas o muy lentas.","intermedio"),
   q("A mayor temperatura, la curva de Maxwell-Boltzmann:",["Se estrecha y sube","Se ensancha y baja","No cambia","Desaparece"],1,"Se ensancha (más rango de velocidades) y el pico baja y se desplaza a la derecha.","intermedio"),
   q("¿Qué grados de libertad tiene un gas monoatómico?",["1","2","3","6"],2,"3 translacionales: x, y, z.","intermedio"),
   q("Energía interna de 2 moles de gas monoatómico a 300 K:",["2490 J","4988 J","7482 J","9976 J"],2,"U = (3/2)nRT = 1.5×2×8.314×300 = 7482 J.","intermedio"),
   q("¿Qué dice el primer principio de la termodinámica?",["ΔU = Q + W","ΔU = Q - W","ΔU = W - Q","ΔU = Q × W"],1,"ΔU = Q - W: la energía interna cambia por calor y trabajo.","intermedio"),
   q("¿Qué es un gas ideal?",["Un gas real","Un gas que cumple PV = nRT en todas las condiciones","Un gas que no existe","Un gas a baja presión y alta temperatura"],1,"Es un modelo idealizado; los gases reales se aproximan a él.","intermedio"),
   q("¿Qué es la entropía de un gas ideal según Boltzmann?",["S = kT","S = k·ln(Ω) donde Ω es el número de microestados","S = Q/T siempre","S = PV/nR"],1,"S = k_B·ln(Ω) relaciona la entropía con la desorden microscópico.","avanzado"),
   q("El tercer principio de la termodinámica dice:",["La entropía siempre aumenta","La entropía tiende a cero cuando T → 0 K","La temperatura nunca llega a cero","La energía se conserva"],1,"En 0 K perfecto, un cristal perfecto tiene S = 0.","avanzado"),
   q("¿Qué es la eficiencia del ciclo Otto?",["η = 1 - 1/r^(γ-1)","η = T_c/T_f","η = W/Q²","η = PΔV"],0,"La eficiencia depende de la relación de compresión r y γ.","avanzado"),
   q("Un gas se expande isotermicamente. ¿Qué pasa con la presión?",["Aumenta","No cambia","Disminuye","Se duplica"],2,"Por Boyle: si V aumenta a T constante, P disminuye.","avanzado"),
   q("¿Qué es la energía libre de Helmholtz?",["F = U - TS","F = U + TS","F = Q - W","F = PV"],0,"F = U - TS representa la energía disponible para hacer trabajo a T constante.","avanzado")
]));

// MODULE 20: FISICA NUCLEAR
_id=0;
fi.push(m("fi-nuclear",
  [th("basico","Estructura del átomo",["El átomo tiene núcleo (protones y neutrones) y electrones.","El número atómico Z = número de protones.","El número másico A = protones + neutrones.","Los isópos tienen mismo Z pero diferente A.","Los electrones determinan las propiedades químicas."]),
   th("intermedio","Radiactividad",["Radiactividad alfa: emisión de núcleo de helio (⁴₂He).","Radiactividad beta: un neutrón se convierte en protón y electrón.","Radiactividad gamma: emisión de fotones de alta energía.","La vida media es el tiempo para que la mitad de átomos decaiga.","Ley de decaimiento: N = N₀·e^(-λt)."]),
   th("avanzado","Energía nuclear",["E = mc²: masa y energía son equivalentes.","El defecto de masa Δm = masa nucleares - masa real.","Energía de enlace: Δm·c² por nucleón.","La fisión: un núcleo pesado se divide en partes.","La fusión: dos núcleos ligeros se unen liberando energía."])],
  [q("¿Qué partes componen el núcleo atómico?",["Protones y electrones","Protones y neutrones","Neutrones y electrones","Solo protones"],1,"El núcleo contiene protones (carga +) y neutrones (sin carga).","basico"),
   q("¿Qué es el número atómico?",["La masa total","El número de protones en el núcleo","El número total de partículas","El número de electrones"],1,"Z define al elemento químico.","basico"),
   q("¿Qué es un isótopo?",["Átomos con diferente número de electrones","Átomos del mismo elemento con diferente número de neutrones","Átomos de diferente elemento","Átomos ionizados"],1,"Mismo Z, diferente A (diferente número de neutrones).","basico"),
   q("¿Qué es la radiactividad?",["Propiedad de emitir luz","Desintegración espontánea del núcleo atómico emitiendo partículas","Fisión del átomo","Unión de átomos"],1,"Los núcleos inestables emiten partículas para volverse más estables.","basico"),
   q("La radiactividad alfa emite:",["Un electrón","Un fotón","Un núcleo de helio (2p + 2n)","Un neutrón"],2,"Emisión de partícula alfa: ⁴₂He.","basico"),
   q("La radiactividad beta consiste en:",["Emisión de fotón","Un neutrón se convierte en protón y electrón","Emisión de dos electrones","Emisión de helio"],1,"Un neutrón → protón + electrón + antineutrino.","basico"),
   q("La radiactividad gamma emite:",["Partículas alfa","Electrones","Fotones de alta energía","Neutrones"],2,"Son rayos gamma, fotones electromagnéticos de alta energía.","basico"),
   q("¿Qué es la vida media?",["El tiempo de vida total","El tiempo para que la mitad de los átomos decaiga","El tiempo mínimo de vida","El tiempo máximo"],1,"t₁/₂ = ln(2)/λ ≈ 0.693/λ.","basico"),
   q("E = mc² significa que:",["La masa siempre es constante","La masa y la energía son equivalentes","La luz siempre es constante","La energía no existe"],1,"Einstein demostró la equivalencia masa-energía.","basico"),
   q("¿Qué es el defecto de masa?",["El error en la medición","La diferencia entre masa individual de nucleones y masa real del núcleo","La masa del electrón","La masa perdida en una reacción"],1,"Δm = Z·m_p + N·m_n - m_núcleo; el defecto corresponde a la energía de enlace.","intermedio"),
   q("¿Qué es la energía de enlace?",["La energía para separar electrones","La energía necesaria para separar todos los nucleones del núcleo","La energía cinética","La energía potencial gravitacional"],1,"Es la energía que mantiene unido al núcleo.","intermedio"),
   q("¿Qué es la fisión nuclear?",["Unión de núcleos ligeros","División de un núcleo pesado en núcleos más ligeros","Emisión de luz","Absorción de energía"],1,"Un neutrón golpea un núcleo pesado que se divide en dos.","intermedio"),
   q("¿Qué es la fusión nuclear?",["División de núcleos","Unión de núcleos ligeros para formar uno más pesado","Destrucción de átomos","Absorción de neutrones"],1,"Dos núcleos ligeros se unen liberando gran cantidad de energía.","intermedio"),
   q("La fusión nuclear es la fuente de energía del:",["Planeta Tierra","Sol y estrellas","Reactor nuclear","Motor de combustión"],1,"En el Sol, hidrógeno se fusiona en helio.","intermedio"),
   q("¿Qué es una cadena de fisión?",["Una serie de reacciones químicas","Un proceso donde cada fisión produce neutrones que causan más fisiónes","Una molécula","Un átomo"],1,"Cada fisión libera 2-3 neutrones que pueden provocar más fisiónes.","intermedio"),
   q("¿Qué es el uranio-235?",["Un elemento estable","Un isótopo fisible del uranio usado en reactores","Un elemento radiactivo natural","Un gas noble"],1,"El ²³⁵U se fisiona con neutrones lentos, usado en energía nuclear.","avanzado"),
   q("¿Qué es una criticalidad?",["Un desastre nuclear","Estado donde la cadena de fisión se autosostiene","El apagado de un reactor","La máxima potencia"],1,"En criticalidad, cada generación de neutrones produce la siguiente.","avanzado"),
   q("¿Qué es la bomba de hidrógeno?",["Bomba de agua","Dispositivo que usa fusión nuclear para producir energía explosiva","Bomba de gas","Bomba de aire"],1,"Usa fisión como detonante para iniciar una reacción de fusión.","avanzado"),
   q("La constante de decaimiento λ se relaciona con la vida media por:",["λ = t₁/₂","λ = ln(2)/t₁/₂","λ = t₁/₂/ln(2)","λ = 1/t₁/₂"],1,"λ = ln(2)/t₁/₂ ≈ 0.693/t₁/₂.","avanzado"),
   q("¿Qué es el Becquerel?",["Una unidad de energía","Una desintegración nuclear por segundo","Una unidad de masa","Una unidad de fuerza"],1,"1 Bq = 1 decaimiento/s.","avanzado")
]));

fs.writeFileSync(path.join(MD,'fisica.json'),JSON.stringify(fi,null,0),'utf8');
console.log('Física: '+fi.length+' módulos');
const batches=[];
for(let i=0;i<fi.length;i+=10) batches.push(fi.slice(i,i+10));
batches.forEach((b,i)=>writeBatch('fi',i+1,'fiBatch'+(i+1),b));
console.log(fi.length+' módulos, '+fi.reduce((s,m)=>s+m.exercises.length,0)+' preguntas, '+batches.length+' batches');
