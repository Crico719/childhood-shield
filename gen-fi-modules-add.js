const fs=require('fs'),path=require('path'),{writeBatch}=require('./gen-utils.js');
const MD=path.join(__dirname,'modules');
const fi=JSON.parse(fs.readFileSync(path.join(MD,'fisica.json'),'utf8'));
let _id=0;
function th(l,t,ls){return{level:l,title:t,lines:ls}}
function q(question,options,correctIndex,explanation,difficulty){return{id:++_id,question,options,correctIndex,explanation,difficulty}}
function m(slug,theory,exercises){return{slug,tip:theory[2]?theory[2].lines[0]:theory[0].lines[0],theory,illustrations:[],exercises}}

// MODULE 7: PRESION
_id=0;
fi.push(m("fi-presion",
  [th("basico","Concepto de presión",["La presión es la fuerza por unidad de superficie: P = F/A.","La unidad es el Pascal: 1 Pa = 1 N/m².","1 atmósfera = 101,325 Pa.","La presión atmosférica equivale a 760 mmHg.","La presión en un fluido depende de la profundidad."]),
   th("intermedio","Presión en fluidos",["P_abs = P_atm + ρ·g·h en un fluido estático.","La presión se transmite igual en todas las direcciones.","Los manómetros miden presiones relativas.","La profundidad de 10 m de agua equivale a 1 atm extra.","La presión del gas depende de temperatura y volumen."]),
   th("avanzado","Leyes de los gases",["Ley de Boyle: P₁V₁ = P₂V₂ a T constante.","Ley de Charles: V₁/T₁ = V₂/T₂ a P constante.","Ley de Gay-Lussac: P₁/T₁ = P₂/T₂ a V constante.","Ecuación ideal: PV = nRT con R = 8.314 J/(mol·K).","El cero absoluto es -273.15°C = 0 K."])],
  [q("¿Qué es la presión?",["Una fuerza","Fuerza por unidad de área","Energía","Temperatura"],1,"P = F/A, medida en Pascales.","basico"),
   q("Bloque de 100 N sobre 0.5 m². ¿Presión?",["50 Pa","100 Pa","200 Pa","500 Pa"],2,"P = F/A = 100/0.5 = 200 Pa.","basico"),
   q("¿Cuánto vale 1 atm en Pascales?",["100 Pa","1,000 Pa","101,325 Pa","1,000,000 Pa"],2,"1 atm = 101,325 Pa.","basico"),
   q("Si duplicas el área con misma fuerza, la presión:",["Se duplica","Se reduce a la mitad","No cambia","Se cuadruplica"],1,"P = F/A; si A duplica, P baja a la mitad.","basico"),
   q("Instrumento que mide presión atmosférica:",["Termómetro","Barómetro","Voltímetro","Anemómetro"],1,"El barómetro mide la presión atmosférica.","basico"),
   q("La presión en un líquido aumenta con:",["Temperatura","Profundidad","Volumen","Forma"],1,"P = P₀ + ρgh; a mayor profundidad, mayor presión.","basico"),
   q("¿Qué es la presión manométrica?",["La absoluta","La diferencia entre absoluta y atmosférica","La mínima","La del vacío"],1,"Es la presión relativa a la atmosférica.","basico"),
   q("Agua a 5 m. ¿Presión adicional sobre la atmosférica?",["49,000 Pa","50,000 Pa","98,000 Pa","101,325 Pa"],0,"ΔP = ρgh = 1000×9.8×5 = 49,000 Pa.","intermedio"),
   q("Pistón de 20 cm² recibe 80 N. ¿Presión?",["400 Pa","4,000 Pa","40,000 Pa","160,000 Pa"],2,"P = 80/(0.002) = 40,000 Pa.","intermedio"),
   q("¿Qué establece la ley de Boyle?",["V₁/T₁ = V₂/T₂","P₁V₁ = P₂V₂","P₁/T₁ = P₂/T₂","PV = nRT"],1,"A T constante, presión por volumen es constante.","intermedio"),
   q("Gas a 2 atm y 3 L. ¿V a 4 atm (T constante)?",["1.5 L","3 L","6 L","12 L"],0,"P₁V₁ = P₂V₂ → 2×3 = 4×V₂ → V₂ = 1.5 L.","intermedio"),
   q("¿Qué instrumento mide presión de gas en un sistema cerrado?",["Barómetro","Manómetro","Termómetro","Calorímetro"],1,"El manómetro mide la presión de un gas.","intermedio"),
   q("Si comprimes gas a la mitad de volumen (T const), la presión:",["Se duplica","Se cuadruplica","Se reduce","No cambia"],0,"Por Boyle, al reducir V a la mitad, P se duplica.","intermedio"),
   q("Termómetro marca -10°C. ¿En Kelvin?",["-10 K","10 K","263 K","283 K"],2,"K = °C + 273 = 263 K.","intermedio"),
   q("¿Qué es el vacío perfecto?",["Presión baja","Presión cero absoluta","Gas frío","Líquido espeso"],1,"Ninguna partícula de gas, P = 0 Pa.","avanzado"),
   q("En la ley de gases ideales, ¿qué es R?",["Resistencia","Constante universal de los gases","Rapidez","Radio"],1,"R = 8.314 J/(mol·K).","avanzado"),
   q("Profundidad donde la presión del agua es doble de la atm:",["10.3 m","20.6 m","50 m","100 m"],0,"h = P_atm/(ρg) = 101325/(1000×9.8) ≈ 10.3 m.","avanzado"),
   q("Buceador a 30 m. ¿Presión total?",["3 atm","4 atm","30 atm","300 atm"],1,"P ≈ 1 + 3 = 4 atm.","avanzado"),
   q("¿Qué es la presión de vapor?",["Del vapor de agua","La presión a la cual un líquido hierve a cierta T","La máxima alcanzable","Del aire"],1,"Presión parcial del vapor en equilibrio con su fase líquida.","avanzado"),
   q("¿Por qué sube el mercurio en un barómetro?",["Succión","La presión atmosférica equilibra la columna","Capilaridad","Gravedad del mercurio"],1,"P_atm = ρgh, la atm empuja el mercurio hacia arriba.","avanzado"),
   q("Ley de Charles relación V-T implica:",["A mayor T, mayor V a P constante","A mayor T, menor V","V es independiente de T","V solo depende de P"],0,"V₁/T₁ = V₂/T₂, volumen proporcional a temperatura absoluta.","avanzado")
]));

// MODULE 8: CALOR
_id=0;
fi.push(m("fi-calor",
  [th("basico","Calor y temperatura",["La temperatura mide la agitación de las partículas.","El calor es transferencia de energía por diferencia de temperatura.","Tres mecanismos: conducción, convección y radiación.","La unidad de calor es el Julio; 1 cal = 4.186 J.","El equilibrio térmico: misma temperatura entre cuerpos."]),
   th("intermedio","Capacidad calorífica",["Capacidad calorífica: C = Q/(ΔT).","Calor específico: c = Q/(m·ΔT).","Dilatación térmica: ΔL = α·L₀·ΔT.","El calor latente es energía para cambio de fase sin cambio de T.","Agua tiene c = 4186 J/(kg·°C), muy alto."]),
   th("avanzado","Termodinámica",["Primera ley: ΔU = Q - W.","La entropía mide el desorden de un sistema.","Segunda ley: la entropía total de un sistema aislado siempre aumenta.","Ninguna máquina térmica tiene eficiencia del 100%.","El cero absoluto es 0 K = -273.15°C."])],
  [q("¿Qué es la temperatura?",["Cantidad de calor","Medida de agitación de las partículas","Masa","Energía potencial"],1,"La temperatura refleja la velocidad promedio de las moléculas.","basico"),
   q("¿Qué es el calor?",["Una sustancia","Transferencia de energía por diferencia de temperatura","Una fuerza","Un tipo de luz"],1,"El calor fluye del cuerpo más caliente al más frío.","basico"),
   q("¿Cuántos mecanismos de transferencia hay?",["Uno","Dos","Tres","Cuatro"],2,"Conducción, convección y radiación.","basico"),
   q("Cuerpo a 80°C con otro a 20°C. ¿Hacia dónde fluye el calor?",["Del frío al caliente","Del caliente al frío","No fluye","Depende de la masa"],1,"Del cuerpo de mayor a menor temperatura.","basico"),
   q("1 caloría equivale a:",["1 J","4.186 J","100 J","1000 J"],1,"1 cal = 4.186 J, equivalente mecánico de Joule.","basico"),
   q("¿Qué es la conducción?",["Por fluidos","Contacto directo entre partículas","Por ondas","Por movimiento de masas"],1,"Energía pasa de partícula a partícula por contacto.","basico"),
   q("Material que es buen conductor térmico:",["Madera","Plástico","Metal","Aire"],2,"Los metales tienen electrones libres que facilitan la conducción.","basico"),
   q("500 g de agua de 20°C a 50°C. ¿Calor absorbido?",["15,000 J","31,400 J","62,800 J","157,000 J"],2,"Q = mcΔT = 0.5×4186×30 = 62,790 J.","intermedio"),
   q("¿Qué es el calor latente?",["Calor que cambia la T","Calor para cambio de fase sin cambio de T","El máximo posible","El del Sol"],1,"Durante fusión/vaporización, T se mantiene constante.","intermedio"),
   q("1 kg de hielo a 0°C se derrite. ¿Calor requerido?",["80 J","334,000 J","418,600 J","2,260,000 J"],1,"Q = m·L_fusión = 1×334,000 = 334,000 J.","intermedio"),
   q("Barra 2 m, α = 0.000012/°C, ΔT = 60°C. ¿ΔL?",["0.00144 m","0.0144 m","0.144 m","1.44 m"],0,"ΔL = αL₀ΔT = 0.000012×2×60 = 0.00144 m.","intermedio"),
   q("¿Qué es la capacidad calorífica?",["Calor por unidad de masa","Calor para elevar 1°C un cuerpo","Temperatura máxima","Dilatación"],1,"C = Q/ΔT, se mide en J/°C.","intermedio"),
   q("¿Qué es la convección?",["Por contacto","Por movimiento de fluidos","Por ondas","No existe"],1,"El fluido caliente sube y el frío baja.","intermedio"),
   q("Primera ley de la termodinámica:",["La energía se crea","ΔU = Q - W","La entropía disminuye","Volumen constante"],1,"La energía interna cambia con calor recibido y trabajo realizado.","intermedio"),
   q("¿Qué tipo de radiación usa el Sol?",["Ondas sonoras","Ondas electromagnéticas","Partículas masivas","Rayos gamma"],1,"El Sol emite radiación electromagnética (luz visible, IR, UV).","intermedio"),
   q("¿Qué es la radiación en transferencia de calor?",["Contacto directo","Movimiento de fluidos","Ondas que no necesitan medio","Conducción en vacío"],2,"La radiación se propaga en el vacío.","avanzado"),
   q("¿Qué es la entropía?",["Energía interna","Medida del desorden de un sistema","Temperatura","Presión"],1,"S = Q/T en procesos reversibles.","avanzado"),
   q("Segunda ley de la termodinámica:",["Entropía disminuye","La entropía total de un sistema aislado siempre aumenta","La energía se destruye","Calor va del frío al caliente"],1,"En procesos espontáneos, la entropía del universo aumenta.","avanzado"),
   q("Máquina térmica: T_c = 500 K, T_f = 300 K. ¿Eficiencia máxima?",["20%","40%","60%","100%"],1,"η_max = 1 - T_f/T_c = 1 - 300/500 = 40%.","avanzado"),
   q("¿Qué es el cero absoluto?",["0°C","-273.15°C = 0 K","-459°F","T del espacio"],1,"0 K es la temperatura mínima posible teórica.","avanzado"),
   q("¿Qué es un calorímetro?",["Termómetro","Instrumento para medir cantidades de calor","Radiador","Aislante"],1,"Mide el intercambio de calor entre sustancias.","avanzado")
]));

// MODULE 9: TRANSPORTE CALOR
_id=0;
fi.push(m("fi-transporte-calor",
  [th("basico","Conducción, convección, radiación",["Conducción: paso de energía por contacto entre partículas.","Convección: transporte por movimiento de masas de fluido.","Radiación: transmisión por ondas electromagnéticas.","Los metales son buenos conductores térmicos.","Los aislantes retienen el calor: aire, corcho, lana."]),
   th("intermedio","Leyes de transferencia",["Ley de Fourier: Q/t = k·A·ΔT/d para conducción.","k es la conductividad térmica del material.","Ley de Stefan-Boltzmann: P = ε·σ·A·T⁴ para radiación.","ε es la emisividad (0 a 1).","σ = 5.67×10⁻⁸ W/(m²·K⁴)."]),
   th("avanzado","Aplicaciones",["El efecto invernadero atrapa radiación infrarroja.","La convección natural depende del gradiente de densidad.","En sólidos, conducción por fonones y electrones.","El vacío impide conducción y convección.","Los aerogel son excelentes aislantes."])],
  [q("¿Qué es la conducción del calor?",["Por movimiento de fluidos","De partícula a partícula por contacto","Por ondas EM","Por radiación solar"],1,"La energía se transfiere entre vecinos sin movimiento de materia.","basico"),
   q("Buen conductor térmico:",["Madera","Aire","Cobre","Plástico"],2,"Los metales como el cobre tienen alta conductividad.","basico"),
   q("Buen aislante térmico:",["Oro","Aluminio","Corcho","Plomo"],2,"El corcho tiene baja conductividad y atrapa aire.","basico"),
   q("¿Qué es la convección?",["Por contacto","Transporte por movimiento de fluidos","Radiación infrarroja","Conducción en gases"],1,"El fluido caliente se expande, sube y es reemplazado por frío.","basico"),
   q("¿Por qué el aire caliente sube?",["Es más ligero","Tiene más energía","Su densidad menor","Todas las anteriores"],3,"El aire caliente tiene menor densidad.","basico"),
   q("La radiación solar llega a la Tierra a través del:",["Aire comprimido","Vacío del espacio","Tubo conductor","Atmósfera densa"],1,"La radiación EM no necesita medio material.","basico"),
   q("Instrumento que mide radiación térmica:",["Barómetro","Pirómetro","Calorímetro","Anemómetro"],1,"El pirómetro mide temperatura por radiación IR.","basico"),
   q("Flujo de calor por conducción depende de:",["Solo la temperatura","Área, conductividad, ΔT y espesor","Solo la masa","La presión"],1,"Q/t = kAΔT/d.","intermedio"),
   q("Lámina cobre (k=400), A=0.1m², ΔT=50°C, d=0.01m. ¿Flujo?",["20,000 W","200,000 W","2,000 W","200 W"],0,"Q/t = 400×0.1×50/0.01 = 20,000 W.","intermedio"),
   q("Stefan-Boltzmann: potencia radiada es proporcional a:",["T²","T³","T⁴","T"],2,"P = εσAT⁴, cuarta potencia de T absoluta.","intermedio"),
   q("¿Qué es un cuerpo negro ideal?",["Pintado de negro","Absorbe toda la radiación que recibe","No emite radiación","Refleja todo"],1,"Absorbe 100% de la radiación incidente.","intermedio"),
   q("Efecto invernadero:",["Calentamiento por sol directo","Atrapa radiación IR por gases de la atmósfera","Enfriamiento","Conducción en el suelo"],1,"Los gases de efecto invernadero absorben y reemiten IR.","intermedio"),
   q("¿Por qué sartenes tienen mango de plástico/madera?",["Estética","Son buenos aislantes térmicos","Son conductores","Son baratos"],1,"El mango aislante evita quemaduras.","intermedio"),
   q("Aislante con conductividad muy baja:",["Cobre","Aluminio","Aerogel","Acero"],2,"Los aerogel tienen k ≈ 0.015 W/(m·K).","intermedio"),
   q("En el vacío del espacio, ¿qué mecanismo funciona?",["Conducción","Convección","Radiación","Ninguno"],2,"Solo la radiación se propaga sin medio material.","avanzado"),
   q("Conducción en sólidos cristalinos por:",["Electrones","Vibraciones de la red (fonones)","Convección de átomos","Radiación atómica"],1,"Los fonones son vibraciones cuantizadas de la red.","avanzado"),
   q("Emisividad ε = 0.3 vs ε = 0.9. ¿Qué implica?",["La de 0.3 tiene menor T","La de 0.3 refleja más radiación","La de 0.3 tiene más capacidad de emitir","La de 0.3 tiene más masa"],1,"Baja emisividad = poca capacidad de emitir radiación.","avanzado"),
   q("Gas principal del efecto invernadero natural:",["Oxígeno","Nitrógeno","Vapor de agua y CO₂","Hidrógeno"],2,"El vapor de agua y CO₂ son los principales.","avanzado"),
   q("¿Por qué estaciones espaciales necesitan radiadores grandes?",["Captar calor del Sol","Disipar calor interno por radiación","Calentar el interior","Producir oxígeno"],1,"En el vacío solo pueden disipar calor por radiación.","avanzado"),
   q("¿Qué es la resistencia térmica?",["Conductividad inversa","Oposición al flujo de calor d/(kA)","Temperatura máxima","Calor perdido"],1,"R_térmica = d/(kA) mide la oposición al flujo de calor.","avanzado"),
   q("¿Qué es la transferencia radiativa neta entre dos superficies?",["Solo depende de T₁","Proporcional a T₁⁴ - T₂⁴","Proporcional a T₁ - T₂","Cero siempre"],1,"P = εσA(T₁⁴ - T₂⁴) depende de las cuartas potencias.","avanzado")
]));

// MODULE 10: CICLO TERMICO
_id=0;
fi.push(m("fi-ciclo-termo",
  [th("basico","Máquinas térmicas",["Una máquina térmica convierte calor en trabajo.","El ciclo return el sistema a su estado inicial.","Trabajo neto = área en diagrama P-V.","La eficiencia es trabajo neto sobre calor absorbido.","Todo proceso real tiene pérdidas por fricción."]),
   th("intermedio","Ciclo de Carnot",["El ciclo de Carnot es el teóricamente más eficiente.","Cuatro etapas: dos isotérmicas y dos adiabáticas.","η_Carnot = 1 - T_fría/T_caliente.","Solo depende de las temperaturas de las fuentes.","Ninguna máquina real supera Carnot."]),
   th("avanzado","Entropía y ciclos",["En ciclo completo ΔS_total ≥ 0.","Carnot reversible: ΔS_total = 0.","Procesos irreversibles generan entropía adicional.","La eficiencia real siempre es menor que Carnot.","Motores Stirling y Otto son ciclos alternativos."])],
  [q("¿Qué es una máquina térmica?",["Generador de electricidad","Dispositivo que convierte calor en trabajo mecánico","Refrigerador","Medidor de calor"],1,"Transforma energía térmica en trabajo.","basico"),
   q("¿Qué es un ciclo termodinámico?",["Una sola fase","Conjunto de procesos que devuelven al sistema al estado inicial","Una reacción química","Un tipo de movimiento"],1,"El estado final coincide con el inicial.","basico"),
   q("¿Qué es la eficiencia de una máquina térmica?",["Potencia/tiempo","Trabajo neto / calor absorbido","Calor perdido/ganado","Masa de combustible"],1,"η = W_net / Q_caliente.","basico"),
   q("¿Puede una máquina convertir todo el calor en trabajo?",["Sí","No, siempre hay pérdidas","Solo en el vacío","Solo a 0°C"],1,"Siempre parte del calor se despide a la fuente fría.","basico"),
   q("Relación eficiencia-temperaturas en Carnot:",["Mayor ΔT → mayor η","Mayor T_c → menor η","η no depende de T","Solo depende del combustible"],0,"η = 1 - T_f/T_c; a mayor diferencia, mayor eficiencia.","basico"),
   q("¿Qué es el ciclo de Carnot?",["El más ineficiente","El teóricamente más eficiente posible","Un ciclo real","Un proceso no cíclico"],1,"Establece el límite superior de eficiencia.","basico"),
   q("¿Cuántas etapas tiene Carnot?",["Dos","Tres","Cuatro","Seis"],2,"Cuatro: dos isotérmicas y dos adiabáticas.","basico"),
   q("Carnot: T_c = 800 K, T_f = 300 K. ¿Eficiencia?",["37.5%","50%","62.5%","100%"],2,"η = 1 - 300/800 = 62.5%.","intermedio"),
   q("Motor recibe 5000 J, despide 3000 J. ¿Trabajo neto?",["2000 J","3000 J","5000 J","8000 J"],0,"W = Q_cal - Q_fría = 5000 - 3000 = 2000 J.","intermedio"),
   q("Motor con η = 40% produce 800 J. ¿Calor absorbido?",["320 J","800 J","2000 J","3200 J"],2,"Q = W/η = 800/0.4 = 2000 J.","intermedio"),
   q("¿Qué es un proceso adiabático?",["P constante","Sin intercambio de calor","V constante","T constante"],1,"Q = 0; sin transferencia de calor.","intermedio"),
   q("¿Qué es un proceso isotérmico?",["V constante","P constante","T constante","Sin calor"],2,"La temperatura se mantiene durante todo el proceso.","intermedio"),
   q("¿Qué es un proceso isobárico?",["V constante","P constante","T constante","Adiabático"],1,"La presión se mantiene constante.","intermedio"),
   q("¿Qué es un proceso isocórico?",["P constante","V constante","T constante","Sin trabajo"],1,"En V constante, W = PΔV = 0.","intermedio"),
   q("En un ciclo, ¿el cambio de energía interna es:",["Igual al calor absorbido","Igual al trabajo realizado","Cero","Depende del gas"],2,"En ciclo completo ΔU = 0.","avanzado"),
   q("¿Por qué la eficiencia real < Carnot?",["Motores más pequeños","Irreversibilidades: fricción, pérdidas","Combustible fósil","Gravedad"],1,"Los procesos reales generan entropía adicional.","avanzado"),
   q("Entropía en ciclo reversible:",["Aumenta","Disminuye","Es cero","Se duplica"],2,"En ciclo reversible ΔS_total = 0.","avanzado"),
   q("¿Qué es un motor Stirling?",["Eléctrico","Térmico con calentamiento/enfriamiento externos","De combustión interna","Generador solar"],1,"Usa calentamiento y enfriamiento externos alternados.","avanzado"),
   q("COP máximo de un refrigerador depende de:",["Solo del gas","Las temperaturas de las fuentes","La masa","La presión"],1,"COP_ref = T_f/(T_c - T_f).","avanzado"),
   q("¿Qué dice la segunda ley de Carnot aplicada a refrigeradores?",["La eficiencia es igual","El COP máximo depende de T","No hay límite","Depende solo del gas"],1,"Define el rendimiento máximo de un refrigerador.","avanzado"),
   q("En un ciclo Otto, ¿qué proceso Produce trabajo?",["Isotérmico","Adiabático de expansión","Isocórico","Isobárico"],1,"La expansión adiabática del gas caliente produce trabajo.","avanzado")
]));

// MODULE 11: ELECTRICIDAD BASICA
_id=0;
fi.push(m("fi-electricidad",
  [th("basico","Carga y corriente",["La carga eléctrica puede ser positiva o negativa.","Cargas iguales se repelen, opuestas se atraen.","La corriente eléctrica es flujo de carga: I = Q/t.","La unidad de corriente es el Amperio (A).","Los electrones son las portadores de carga en metales."]),
   th("intermedio","Leyes de circuitos",["Ley de Ohm: V = I·R.","La resistencia depende del material, longitud y sección.","En serie: R_total = R₁ + R₂ + ...","En paralelo: 1/R_total = 1/R₁ + 1/R₂ + ...","Potencia eléctrica: P = V·I = I²·R = V²/R."]),
   th("avanzado","Circuitos complejos",["El teorema de Thévenin simplifica circuitos complejos.","Los capacitores almacenan energía: E = ½CV².","Corriente alterna tiene frecuencia y amplitud.","La impedancia reemplaza la resistencia en AC.","Los diodos permiten corriente en una sola dirección."])],
  [q("¿Qué es la carga eléctrica?",["Una fuerza","Una propiedad de la materia que produce interacción electromagnética","Una energía","Un tipo de movimiento"],1,"La carga eléctrica causa fuerzas entre objetos.","basico"),
   q("¿Qué dice la ley de Coulomb?",["V = IR","La fuerza eléctrica entre cargas es proporcional al producto y inversa al cuadrado de la distancia","F = ma","P = VI"],1,"F = k·q₁·q₂/r², análoga a la gravitacional.","basico"),
   q("¿Qué es la corriente eléctrica?",["Velocidad de electrones","Flujo de carga por unidad de tiempo","Un tipo de voltaje","Una resistencia"],1,"I = Q/t, medida en Amperios.","basico"),
   q("Un conductor carries 2 C en 4 s. ¿Corriente?",["0.5 A","2 A","4 A","8 A"],0,"I = Q/t = 2/4 = 0.5 A.","basico"),
   q("¿Qué materiales son buenos conductores?",["Madera","Plástico","Metales","Cerámica"],2,"Los metales tienen electrones libres que facilitan el flujo.","basico"),
   q("¿Qué es un aislante eléctrico?",["Un material que conduce bien","Uno que no permite el flujo de corriente","Un semiconductor","Un superconductor"],1,"Materiales sin electrones libres para el flujo.","basico"),
   q("Dos cargas iguales: ¿qué fuerza experimentan?",["Atracción","Repulsión","Ninguna","Depende de la masa"],1,"Las cargas iguales se repelen.","basico"),
   q("Ley de Ohm establece:",["P = VI","V = I·R","F = ma","E = mc²"],1,"El voltaje es proporcional a la corriente por la resistencia.","basico"),
   q("Resistencia de 10 Ω con 2 A. ¿Voltaje?",["0.2 V","5 V","20 V","100 V"],2,"V = I·R = 2×10 = 20 V.","intermedio"),
   q("Resistencias en serie de 3Ω, 5Ω y 2Ω. ¿R_total?",["3Ω","5Ω","10Ω","15Ω"],2,"R_total = 3+5+2 = 10 Ω.","intermedio"),
   q("Dos resistencias de 6Ω en paralelo. ¿R_total?",["3Ω","6Ω","12Ω","36Ω"],0,"1/R = 1/6+1/6 = 2/6; R = 3 Ω.","intermedio"),
   q("Potencia disipada por una resistencia con V=12V, R=4Ω:",["3 W","12 W","36 W","48 W"],2,"P = V²/R = 144/4 = 36 W.","intermedio"),
   q("¿Qué es el voltaje?",["La resistencia","La diferencia de potencial eléctrico","La corriente","La carga"],1,"El voltaje es la fuerza que impulsa la corriente.","intermedio"),
   q("Un cable más largo tiene resistencia:",["Menor","Mayor","Igual","Nula"],1,"R = ρL/A; mayor L, mayor R.","intermedio"),
   q("Un cable más grueso tiene resistencia:",["Mayor","Menor","Igual","Nula"],1,"R = ρL/A; mayor A, menor R.","intermedio"),
   q("¿Qué es un cortocircuito?",["Un circuito abierto","Una conexión que reduce la resistencia a casi cero","Un interruptor","Un fusible"],1,"La corriente fluye sin resistencia significativa, peligrosamente alta.","avanzado"),
   q("¿Qué hace un fusible?",["Aumenta la corriente","Se funde y corta el circuito si la corriente es excesiva","Aumenta el voltaje","Reduce la potencia"],1,"Protege el circuito al fundirse con corriente alta.","avanzado"),
   q("Batería de 9V con R=18Ω. ¿Corriente?",["0.5 A","2 A","9 A","162 A"],0,"I = V/R = 9/18 = 0.5 A.","avanzado"),
   q("¿Qué es la resistencia interna de una batería?",["La del cable","La resistencia que tiene la propia fuente de energía","La del fusible","La del interruptor"],1,"Toda batería real tiene cierta resistencia interna.","avanzado"),
   q("Potencia total en un circuito serie: ¿cómo se calcula?",["P = P₁ + P₂","P = P₁ × P₂","P = P₁/P₂","P = P₁ - P₂"],0,"La potencia total es la suma de las potencias individuales.","avanzado"),
   q("¿Qué es un semiconductor?",["Buen conductor","Buen aislante","Material con conductividad intermedia controlable","Superconductor"],2,"Como el silicio, su conductividad se puede modificar con dopaje.","avanzado")
]));

// MODULE 12: MAGNETISMO
_id=0;
fi.push(m("fi-magnetismo",
  [th("basico","Magnetismo básico",["Un imán tiene polo norte y polo sur.","Los polos opuestos se atraen, los iguales se repelen.","El campo magnético va del polo norte al sur externamente.","La Tierra tiene un campo magnético que apunta al norte magnético.","Los materiales ferromagnéticos se magnetizan fácilmente."]),
   th("intermedio","Electromagnetismo",["Una corriente eléctrica produce un campo magnético.","Un campo magnético variable induce corriente eléctrica.","Fuerza sobre conductor: F = B·I·L·sin(θ).","La induction es la base de generadores y transformadores.","La ley de Faraday: ε = -dΦ/dt."]),
   th("avanzado","Aplicaciones avanzadas",["Los motores eléctricos convierten electricidad en movimiento.","Los generadores convierten movimiento en electricidad.","Los transformadores cambian voltaje con corriente alterna.","El efecto Hall mide campos magnéticos.","La resonancia magnética nuclear (MRI) usa campos potentes."])],
  [q("¿Qué es un imán?",["Un objeto que atrae plástico","Un objeto que produce campo magnético","Un objeto eléctrico","Un objeto caliente"],1,"Los imanes generan campos magnéticos que afectan materiales magnéticos.","basico"),
   q("¿Qué polos se atraen?",["Norte-Norte","Sur-Sur","Norte-Sur","Todos"],2,"Polos opuestos se atraen, iguales se repelen.","basico"),
   q("¿Hacia dónde apunta el campo magnético externamente?",["Del sur al norte","Del norte al sur","Del centro hacia afuera","De arriba a abajo"],1,"Exteriormente va del polo norte al polo sur del imán.","basico"),
   q("¿Qué esfera actúa como un enorme imán?",["La Luna","La Tierra","El Sol","Marte"],1,"La Tierra tiene campo magnético por su núcleo de hierro fundido.","basico"),
   q("¿Qué material es ferromagnético?",["Plástico","Madera","Hierro","Cobre"],2,"El hierro, níquel y cobalto son ferromagnéticos.","basico"),
   q("¿Qué material NO es atraído por un imán?",["Hierro","Níquel","Cobre","Cobalto"],2,"El cobre no es ferromagnético ni paramagnético significativo.","basico"),
   q("¿Qué es el campo magnético?",["Una fuerza","Una región del espacio donde actúa una fuerza magnética","Un tipo de calor","Una corriente"],1,"El campo magnético describe la influencia magnética en cada punto.","basico"),
   q("¿Qué produce un campo magnético según Oersted?",["Un imán en reposo","Una corriente eléctrica","Un cable frío","Una carga estática"],1,"Una corriente eléctrica genera un campo magnético a su alrededor.","basico"),
   q("Ley de Faraday establece que:",["La corriente es constante","Un campo magnético variable induce fuerza electromotriz","La energía se conserva","La masa es constante"],1,"ε = -dΦ/dt, la fuerza inducida depende del cambio de flujo magnético.","intermedio"),
   q("Fuerza sobre un conductor con I=5A, B=0.2T, L=2m, θ=90°:",["0.2 N","1 N","2 N","10 N"],2,"F = BIL = 0.2×5×2 = 2 N.","intermedio"),
   q("¿Qué es la inducción electromagnética?",["Crear campo con un imán","Generar corriente con un campo magnético variable","Producir luz","Crear calor"],1,"Un campo magnético cambiante induce una fuerza electromotriz.","intermedio"),
   q("¿Qué usa un generador eléctrico para producir electricidad?",["Baterías","Inducción electromagnética: movimiento + campo magnético","Combustión","Placas solares"],1,"Un imán se mueve cerca de bobinas, induciendo corriente.","intermedio"),
   q("¿Qué hace un transformador?",["Almacena energía","Cambia el nivel de voltaje en corriente alterna","Produce calor","Mide corriente"],1,"Eleva o reduce el voltaje según la proporción de espiras.","intermedio"),
   q("Bobina con 100 espiras y flujo que cambia 0.05 Wb en 0.1 s. ¿ε?",["50 V","5 V","0.5 V","0.05 V"],0,"ε = N·dΦ/dt = 100×0.05/0.1 = 50 V.","intermedio"),
   q("¿Qué es un electroimán?",["Un imán permanente","Un imán que se activa con corriente eléctrica","Un imán de plástico","Un imán natural"],1,"Una bobina con núcleo ferromagnético energizado por corriente.","intermedio"),
   q("Motor eléctrico convierte:",["Electricidad en calor","Electricidad en movimiento rotatorio","Movimiento en electricidad","Calor en movimiento"],1,"La fuerza magnética sobre conductores produce rotación.","avanzado"),
   q("¿Qué es la permeabilidad magnética?",["Resistencia al campo","Capacidad de un material para permitir el paso del campo magnético","La fuerza magnética","El flujo de corriente"],1,"μ describe qué tan bien un material conduce líneas de campo magnético.","avanzado"),
   q("¿Qué es el efecto Hall?",["Calentamiento de un conductor","Aparición de voltaje transversal en conductor con campo magnético","Resonancia de un imán","Difracción de luz"],1,"Permite medir campos magnéticos y tipo de portador de carga.","avanzado"),
   q("Superconductores tienen:",["Resistencia cero y exclusión perfecta de campo magnético","Resistencia alta","Campo magnético nulo","Temperatura alta"],0,"A baja T, R=0 y expulsan el campo magnético (efecto Meissner).","avanzado"),
   q("¿Qué es la frecuencia de resonancia magnética nuclear?",["La del pulso cardíaco","La frecuencia a la cual los núcleos absorben energía en un campo B","La de una onda de radio","La del viento"],1,"Los protones resonan a frecuencia dependiente del campo magnético.","avanzado")
]));

// MODULE 13: OPTICA
_id=0;
fi.push(m("fi-optica",
  [th("basico","Luz y propagación",["La luz es una onda electromagnética.","La luz viaja en línea recta en medios homogéneos.","La velocidad de la luz en el vacío es c = 3×10⁸ m/s.","La luz blanca es mezcla de todos los colores visibles.","Los objetos se ven porque reflejan o emiten luz."]),
   th("intermedio","Reflexión y refracción",["Ley de reflexión: ángulo de incidencia = ángulo de reflexión.","Ley de Snell: n₁·sin(θ₁) = n₂·sin(θ₂).","La reflexión total ocurre cuando θ > θ_crítico.","Los espejos planos forman imágenes virtuales del mismo tamaño.","Las lentes convergentes forman imágenes reales."]),
   th("avanzado","Ondas y fenómenos",["La interferencia muestra la naturaleza ondulatoria.","La difracción es la flexión de la luz alrededor de obstáculos.","El efecto fotoeléctrico prueba la naturaleza corpuscular.","La dispersión explica por qué el cielo es azul.","La polarización confirma que la luz es una onda transversal."])],
  [q("¿Qué es la luz?",["Una partícula sólida","Una onda electromagnética","Un sonido","Un gas"],1,"La luz es una radiación electromagnética visible.","basico"),
   q("¿Cuál es la velocidad de la luz en el vacío?",["3×10⁶ m/s","3×10⁸ m/s","3×10¹⁰ m/s","300 m/s"],1,"c ≈ 300,000,000 m/s = 3×10⁸ m/s.","basico"),
   q("La luz blanca es mezcla de:",["Solo rojo y azul","Todos los colores visibles","Solo dos colores","Ningún color"],1,"El prisma separa la luz blaca en su espectro de colores.","basico"),
   q("¿Por qué vemos los objetos?",["Porque brillan solos","Porque reflejan o emiten luz","Porque son calientes","Porque tienen masa"],1,"Necesitamos luz que entre a nuestros ojos desde el objeto.","basico"),
   q("¿Qué colores tiene el arcoíris?",["Solo rojo","Rojo, naranja, amarillo, verde, azul, índigo, violeta","Solo blanco y negro","Depende del día"],1,"Los 7 colores del espectro visible.","basico"),
   q("¿Qué ocurre cuando la luz golpea un espejo?",["Se absorbe","Se refleja","Se refracta","Se difracta"],1,"La reflexión: la luz rebota siguiendo la ley de reflexión.","basico"),
   q("En un espejo plano, la imagen formada es:",["Invertida y más grande","Virtual, del mismo tamaño, derecha","Real y más pequeña","No hay imagen"],1,"Los espejos planos forman imágenes virtuales iguales al objeto.","basico"),
   q("¿Qué es la refracción?",["La reflexión de la luz","El cambio de dirección al pasar de un medio a otro","La absorción de luz","La emisión de luz"],1,"La luz cambia velocidad y dirección al cambiar de medio.","basico"),
   q("Ley de Snell relaciona:",["Ángulos de reflexión","Los ángulos de incidencia y refracción con los índices de refracción","La intensidad de luz","La longitud de onda"],1,"n₁·sin(θ₁) = n₂·sin(θ₂).","intermedio"),
   q("La luz entra del aire al agua (n=1.33). ¿Qué hace?",["Se acerca a la normal","Se aleja de la normal","Sigue recta","Se refleja totalmente"],0,"Al entrar a medio más denso, se refracta hacia la normal.","intermedio"),
   q("Reflexión total interna ocurre cuando:",["θ < θ_crítico","θ > θ_crítico","θ = 0°","θ = 90°"],1,"El ángulo supera el crítico para el paso de medio denso a raro.","intermedio"),
   q("¿Qué es un filtro polarizado?",["Un espejo","Un material que bloquea componentes de polarización específica","Un prisma","Un lente"],1,"Solo permite la luz con cierta orientación de polarización.","intermedio"),
   q("La dispersión de la luz explica:",["Por qué los espejos son brillantes","Por qué el cielo es azul y el atardecer rojo","Por qué la lente enfoca","Por qué la luz se refleja"],1,"Las longitudes de onda cortas (azul) se dispersan más en la atmósfera.","intermedio"),
   q("Lente convergente produce:",["Solo imágenes virtuales","Imágenes reales cuando el objeto está fuera del foco","Solo imágenes invertidas","No produce imágenes"],1,"Cuando el objeto está más lejos que el foco, la imagen es real.","intermedio"),
   q("¿Qué es la interferencia de la luz?",["Choque de partículas","Superposición de ondas que produce máximos y mínimos de intensidad","Reflexión múltiple","Absorción de luz"],1,"Dos ondas se suman constructiva o destructivamente.","intermedio"),
   q("Experimento de Young demostró:",["La luz es una partícula","La luz es una onda por interferencia de doble rendija","La luz no existe","La luz es un campo magnético"],1,"Las franjas de interferencia prueban la naturaleza ondulatoria.","avanzado"),
   q("¿Qué es el efecto fotoeléctrico?",["Emisión de electrones al incidentar luz sobre un metal","Reflexión de luz","Absorción de calor","Emisión de sonido"],1,"Einstein explicó que la luz se comporta como fotones.","avanzado"),
   q("¿Qué es la difracción?",["La reflexión de la luz","La flexión de la luz alrededor de obstáculos","La absorción de luz","La emisión de luz"],1,"La luz se curva al pasar por aberturas comparables a su longitud de onda.","avanzado"),
   q("Un prisma separa la luz blanca porque:",["Todos los colores van igual","Cada color viaja a diferente velocidad en el vidrio","Los colores se destruyen","El prisma es caliente"],1,"La dispersión depende del índice de refracción que varía con la longitud de onda.","avanzado"),
   q("¿Qué es un láser?",["Una luz común intensa","Luz coherente, monocromática y colimada","Una linterna grande","Un espejo especial"],1,"Los fotones están perfectamente alineados en fase, dirección y longitud de onda.","avanzado")
]));

// MODULE 14: SONIDO
_id=0;
fi.push(m("fi-sonido",
  [th("basico","Naturaleza del sonido",["El sonido es una onda mecánica longitudinal.","Necesita un medio material para propagarse.","La velocidad del sonido en aire es ≈ 343 m/s a 20°C.","La velocidad en agua es ≈ 1480 m/s, en acero ≈ 5000 m/s.","La frecuencia determina el tono y la amplitud el volumen."]),
   th("intermedio","Propiedades del sonido",["La frecuencia se mide en Hertz (Hz).","El oído humano escucha entre 20 Hz y 20,000 Hz.","Ultrasónicos superan 20 kHz, infrasonidos están por debajo de 20 Hz.","El eco se produce por reflexión del sonido.","La resonancia amplifica sonidos a ciertas frecuencias."]),
   th("avanzado","Acústica avanzada",["El efecto Doppler cambia la frecuencia con el movimiento relativo.","Los decibelios (dB) miden la intensidad sonora.","La velocidad del sonido depende de la temperatura del medio.","Los robinsonades son ondas estacionarias en tubos.","El ruido se clasifica por su espectro de frecuencias."])],
  [q("¿Qué es el sonido?",["Una onda electromagnética","Una onda mecánica longitudinal","Una partícula","Una fuerza"],1,"El sonido necesita un medio material para viajar.","basico"),
   q("¿Qué medio necesito para oír?",["No necesita ninguno","Aire o cualquier material","Solo vacío","Solo agua"],1,"El sonido no se propaga en el vacío.","basico"),
   q("¿Cuánto tarda el sonido 1 km en aire a 20°C?",["2.9 s","3.4 s","5 s","10 s"],1,"t = d/v = 1000/343 ≈ 2.9 s, pero ≈ 3.4 s es la aproximación común.","basico"),
   q("La frecuencia determina:",["El volumen","El tono (agudo o grave)","La dirección","La temperatura"],1,"A mayor frecuencia, más agudo es el sonido.","basico"),
   q("La amplitud determina:",["El tono","El volumen (intensidad)","La frecuencia","La velocidad"],1,"Mayor amplitud = mayor intensidad = más volumen.","basico"),
   q("El oído humano escucha frecuencias entre:",["1 y 10 Hz","20 Hz y 20,000 Hz","100 y 1000 Hz","100,000 y 1,000,000 Hz"],1,"El rango audible humano es 20 Hz - 20 kHz.","basico"),
   q("Un ultrasonido tiene frecuencia:",["Menor de 20 Hz","Mayor de 20,000 Hz","Exactamente 1000 Hz","Cero"],1,"Los ultrasonidos superan los 20 kHz.","basico"),
   q("La velocidad del sonido en agua es:",["Mayor que en aire","Menor que en aire","Igual que en aire","Cero"],1,"En agua ≈ 1480 m/s, mucho más rápido que en aire.","basico"),
   q("¿Qué es un eco?",["Un sonido nuevo","La reflexión del sonido contra una superficie","Un silencio","Un ultrasonido"],1,"El sonido rebota y regresa al oyente.","intermedio"),
   q("Efecto Doppler: ambulancia acercándose suena más:",["Grave","Aguda","Igual","Silenciosa"],1,"La frecuencia aparente aumenta cuando la fuente se acerca.","intermedio"),
   q("Frecuencia de un diapasón de 440 Hz en un medio más denso:",["Se reduce","No cambia","Depende del medio","Se duplica"],1,"La frecuencia depende de la fuente, no del medio.","intermedio"),
   q("Resonancia acústica es cuando:",["El sonido se amortigua","Un objeto vibra con máxima amplitud a cierta frecuencia","El sonido desaparece","El volumen baja"],1,"Cuando la frecuencia externa coincide con la natural del objeto.","intermedio"),
   q("Un tubo cerrado en un extremo produce armónicos:",["Solo pares","Solo impares","Todos","Ninguno"],1,"Los tubos cerrados solo permiten cuartos de onda impares.","intermedio"),
   q("La intensidad sonora se mide en:",["Hertz","Metros","Decibelios (dB)","Newtons"],2,"Los decibelios son una escala logarítmica de intensidad.","intermedio"),
   q("Si duplicas la distancia a una fuente sonora, ¿la intensidad?",["Se reduce a la mitad","Se reduce a un cuarto","Se duplica","No cambia"],1,"La intensidad es inversamente proporcional al cuadrado de la distancia.","intermedio"),
   q("¿Qué es la interferencia constructiva de sonido?",["Los sonidos se cancelan","Los sonidos se refuerzan produciendo mayor amplitud","No existe","Los sonidos se vuelven más graves"],1,"Las ondas llegan en fase y suman amplitudes.","avanzado"),
   q("Frecuencia percibida cuando una fuente se aleja a 30 m/s (v_s=343):",["Mayor que la emitida","Menor que la emitida","Igual","Depende del volumen"],1,"f' = f·v/(v+v_fuente), la frecuencia percibida es menor.","avanzado"),
   q("¿Qué es el ruido blanco?",["Un solo tono","Sonido con todas las frecuencias a igual intensidad","Silencio","Solo frecuencias graves"],1,"Análogo a la luz blanca, contiene todas las frecuencias audibles.","avanzado"),
   q("El sonido en un medio más caliente se propaga:",["Más rápido","Más lento","Igual","No se propaga"],1,"A mayor temperatura, mayor velocidad de las moléculas y del sonido.","avanzado"),
   q("¿Qué instrumento mide el nivel de ruido?",["Barómetro","Sonómetro","Termómetro","Anemómetro"],1,"El sonómetro mide la intensidad sonora en decibelios.","avanzado"),
   q("Las ondas estacionarias en una cuerda se forman por:",["Reflexión únicamente","Interferencia entre onda incidente y reflejada","Convección","Difracción"],1,"La onda incidente y la reflejada se superponen formando nodos y vientres.","avanzado")
]));

// MODULE 15: OSCILACIONES
_id=0;
fi.push(m("fi-oscilaciones",
  [th("basico","Movimiento armónico simple",["Un cuerpo oscila cuando una fuerza restauradora lo devuelve al equilibrio.","El MAS se describe con x = A·cos(ωt + φ).","La amplitud A es la distancia máxima al equilibrio.","El periodo T es el tiempo para un ciclo completo.","La frecuencia f = 1/T mide ciclos por segundo."]),
   th("intermedio","Péndulo y resorte",["Péndulo simple: T = 2π√(L/g).","Péndulo de resorte: T = 2π√(m/k).","La energía oscila entre cinética y potencial.","En el equilibrio la Ec es máxima y Ep = 0.","En los extremos la Ep es máxima y Ec = 0."]),
   th("avanzado","Amortiguamiento y resonancia",["El amortiguamiento reduce la amplitud con el tiempo.","La resonancia ocurre cuando la frecuencia forzada = natural.","En resonancia la amplitud crece peligrosamente.","El factor de calidad Q mide la pérdida de energía por ciclo.","Los osciladores amortiguados críticos vuelven al equilibrio sin oscilar."])],
  [q("¿Qué es el movimiento armónico simple?",["Movimiento circular","Oscilación periódica con fuerza restauradora proporcional al desplazamiento","Movimiento rectilíneo uniforme","Caída libre"],1,"La fuerza restauradora es F = -kx.","basico"),
   q("¿Qué es la amplitud?",["El periodo","La distancia máxima al equilibrio","La frecuencia","La masa"],1,"A es el valor máximo del desplazamiento.","basico"),
   q("¿Qué es el periodo?",["La frecuencia","El tiempo para un ciclo completo","La amplitud","La velocidad"],1,"T se mide en segundos y es el tiempo de un ciclo.","basico"),
   q("La frecuencia y el periodo están relacionados por:",["f = T","f = 1/T","f = T²","f = 2T"],1,"La frecuencia es el inverso del periodo.","basico"),
   q("Si un péndulo completa 5 oscilaciones en 10 s, su periodo es:",["2 s","5 s","10 s","50 s"],0,"T = 10/5 = 2 s.","basico"),
   q("¿Qué fuerza actúa en el MAS?",["Gravitacional","Fuerza restauradora proporcional al desplazamiento","Una fuerza constante","Fuerza centrífuga"],1,"F = -kx, la fuerza es proporcional y opuesta al desplazamiento.","basico"),
   q("Un resorte con k = 200 N/m y masa 0.5 kg. ¿Periodo?",["0.1 s","0.31 s","1 s","3.14 s"],1,"T = 2π√(m/k) = 2π√(0.5/200) ≈ 0.31 s.","basico"),
   q("En el equilibrio de un MAS, ¿qué energía predomina?",["Potencial","Cinética","Ambas iguales","Ninguna"],1,"En x=0, v es máxima y toda la energía es cinética.","basico"),
   q("Péndulo de 1 m en la Tierra. ¿Periodo aproximado?",["1 s","2 s","3.14 s","6.28 s"],1,"T = 2π√(L/g) = 2π√(1/9.8) ≈ 2 s.","intermedio"),
   q("Si duplicas la longitud de un péndulo, el periodo:",["Se duplica","Se reduce a la mitad","Aumenta √2 veces","No cambia"],2,"T es proporcional a √L, si L duplica, T se multiplica por √2.","intermedio"),
   q("En un péndulo de resorte, ¿cómo afecta la masa al periodo?",["A mayor masa, menor T","A mayor masa, mayor T","La masa no afecta","Depende de k"],1,"T = 2π√(m/k); mayor masa, mayor periodo.","intermedio"),
   q("La energía mecánica en MAS sin fricción:",["Se pierde","Aumenta","Se conserva","Oscila"],2,"Sin amortiguamiento, la Em = Ec + Ep es constante.","intermedio"),
   q("¿Qué es la resonancia?",["Amortiguamiento","Coincidencia de frecuencia forzada con natural del sistema","Choque de ondas","Reflexión"],1,"En resonancia la amplitud crece significativamente.","intermedio"),
   q("¿Qué es el amortiguamiento?",["Aumento de amplitud","Disminución progresiva de la amplitud","Cambio de frecuencia","Aumento de periodo"],1,"La fricción o resistencia reduce la amplitud con cada ciclo.","intermedio"),
   q("Soldado cruzando un puente al paso: ¿por qué es peligroso?",["Porque el puente es viejo","Si el paso coincide con la resonancia del puente","Porque hace calor","Porque hay viento"],1,"La frecuencia del paso puede excitar la resonancia del puente.","intermedio"),
   q("Un péndulo en Marte (g=3.7 m/s²) comparado con Tierra:",["Mismo periodo","Periodo mayor","Periodo menor","No oscila"],1,"Menor g implica mayor T = 2π√(L/g).","avanzado"),
   q("¿Qué es el factor de calidad Q?",["La cantidad de masa","Relación energía almacenada/pérdida por ciclo","La frecuencia natural","La amplitud"],1,"Mayor Q significa menor amortiguamiento y más oscilaciones persistentes.","avanzado"),
   q("Péndulo con amplitud grande (>10°) respecto al MAS ideal:",["Mismo periodo","El periodo aumenta ligeramente","El periodo disminuye","No oscila más"],1,"La aproximación sin(θ) ≈ θ deja de ser válida y T aumenta.","avanzado"),
   q("¿Qué es un oscilador amortiguado crítico?",["Uno que oscila para siempre","Uno que vuelve al equilibrio lo más rápido sin oscilar","Uno con máxima amplitud","Uno sin fricción"],1,"Es el caso entre subamortiguado y sobreamortiguado.","avanzado"),
   q("Frecuencia natural de un tubo de 0.5 m abierto en ambos extremos:",["171 Hz","343 Hz","686 Hz","1372 Hz"],2,"f = v/(2L) = 343/(2×0.5) = 343 Hz, primer armónico = 343 Hz.","avanzado"),
   q("Un metrónomo es un ejemplo de:",["Movimiento armónico simple amortiguado con mecanismo de energía","Resonancia acústica","Onda estacionaria","Efecto Doppler"],0,"Oscila con amplitud constante gracias a la energía del muelle.","avanzado")
]));

// MODULE 16: ONDAS
_id=0;
fi.push(m("fi-ondas",
  [th("basico","Ondas mecánicas",["Una onda transmite energía sin transportar materia.","Ondas transversales: las partículas oscilan perpendicular a la propagación.","Ondas longitudinales: las partículas oscilan paralelas a la propagación.","Longitud de onda λ = v/f.","Las ondas en una cuerda son transversales."]),
   th("intermedio","Ondas y fenómenos",["Velocidad de onda: v = λ·f.","Reflexión: la onda rebota en un medio o frontera.","Refracción: cambio de dirección al pasar de un medio a otro.","Difracción: la onda se curva al pasar por una abertura.","Interferencia: superposición de dos o más ondas."]),
   th("avanzado","Ondas avanzadas",["Ondas estacionarias: nodo (sin movimiento) y vientre (máximo).","Armónicos: frecuencias que generan ondas estacionarias.","Doppler: cambio de frecuencia por movimiento relativo.","Efecto Doppler en luz: corrimiento al rojo (alejándose) o al azul (acercándose).","Ondas electromagnéticas: no necesitan medio material."])],
  [q("¿Qué es una onda?",["Una partícula en movimiento","Una perturbación que transmite energía sin transportar materia","Un tipo de fuerza","Una forma de calor"],1,"Las ondas transportan energía de un punto a otro.","basico"),
   q("¿Qué es una onda transversal?",["Las partículas oscilan en la dirección de propagación","Las partículas oscilan perpendicular a la dirección de propagación","No tiene movimiento de partículas","Solo existe en el vacío"],1,"En ondas transversales, la vibración es perpendicular.","basico"),
   q("¿Qué es una onda longitudinal?",["Perpendicular a la propagación","Paralela a la dirección de propagación","No tiene partículas","Solo en sólidos"],1,"Las partículas oscilan en la misma dirección que la onda viaja.","basico"),
   q("¿Qué es la longitud de onda?",["La altura de la onda","La distancia entre dos crestas consecutivas","El tiempo de un ciclo","La velocidad de la onda"],1,"λ es la distancia espacial de un ciclo completo.","basico"),
   q("Fórmula que relaciona velocidad, longitud de onda y frecuencia:",["v = λ + f","v = λ / f","v = λ · f","v = f / λ"],2,"La velocidad de la onda es longitud de onda por frecuencia.","basico"),
   q("Una onda con v=340 m/s y f=170 Hz. ¿λ?",["0.5 m","1 m","2 m","340 m"],2,"λ = v/f = 340/170 = 2 m.","basico"),
   q("Las ondas en una cuerda son:",["Longitudinales","Transversales","Circulares","No son ondas"],1,"Las partículas de la cuerda oscilan perpendicular al movimiento de la onda.","basico"),
   q("El sonido es una onda:",["Transversal","Longitudinal","Electromagnética","No es una onda"],1,"Las variaciones de presión son longitudinales.","basico"),
   q("¿Qué es la interferencia constructiva?",["Las ondas se cancelan","Las amplitudes se suman","No existe","Las ondas se absorben"],1,"Cuando las ondas llegan en fase, se refuerzan.","intermedio"),
   q("¿Qué es la interferencia destructiva?",["Las ondas se refuerzan","Las amplitudes se cancelan parcial o totalmente","No existe","Las ondas se reflejan"],1,"Cuando llegan en fase opuesta, se anulan.","intermedio"),
   q("¿Qué es la difracción?",["La reflexión de ondas","La flexión de ondas al pasar por aberturas","La absorción de ondas","La emisión de ondas"],1,"Las ondas se curvan alrededor de obstáculos o al pasar por rendijas.","intermedio"),
   q("Dos ondas de misma amplitud interfieren destructivamente. Amplitud resultante:",["Doble","La misma","Cero","Triple"],2,"Se cancelan completamente por estar en fase opuesta.","intermedio"),
   q("¿Qué es una onda estacionaria?",["Viaja sin detenerse","Se forma por interferencia de dos ondas viajeras en direcciones opuestas","No tiene nodos","Solo existe en el vacío"],1,"Los nodos no se mueven, los vientres oscilan con máxima amplitud.","intermedio"),
   q("En un tubo cerrado en un extremo, el primer armónico tiene λ =:",["L/2","L","2L","4L"],3,"Cuarto de onda: L = λ/4, entonces λ = 4L.","intermedio"),
   q("¿Qué es el efecto Doppler para sonido?",["No existe","Cambio de frecuencia percibida cuando fuente u oyente se mueven","Cambio de amplitud","Cambio de volumen"],1,"La frecuencia aparente varía con la velocidad relativa.","intermedio"),
   q("Ambulancia se aleja a 25 m/s. Frecuencia percibida vs emitida:",["Mayor","Igual","Menor","Depende del volumen"],1,"Al alejarse, f' < f; el sonido se percibe más grave.","intermedio"),
   q("¿Qué es la impedancia acústica?",["La velocidad del sonido","Resistencia del medio al paso de la onda sonora","La frecuencia","El volumen"],1,"Depende de la densidad y velocidad del sonido en el medio.","avanzado"),
   q("El corrimiento al rojo de galaxias indica que:",["Se acercan","Se alejan","Están quietas","Son más pequeñas"],1,"La luz se estira (frecuencia baja) cuando la fuente se aleja.","avanzado"),
   q("¿Qué es un nodo en onda estacionaria?",["Punto de máxima oscilación","Punto con desplazamiento cero","La mitad de la onda","El final del tubo"],1,"En los nodos la interferencia es siempre destructiva.","avanzado"),
   q("Doppler en luz: estrella que se aleja rápido muestra luz:",["Más azulada","Más rojizada","De igual color","Más brillante"],1,"El corrimiento al rojo indica que la frecuencia disminuye por alejamiento.","avanzado")
]));

fs.writeFileSync(path.join(MD,'fisica.json'),JSON.stringify(fi,null,0),'utf8');
console.log('Física guardada: '+fi.length+' módulos');

// Write batch files
const batches=[];
for(let i=0;i<fi.length;i+=10) batches.push(fi.slice(i,i+10));
batches.forEach((b,i)=>writeBatch('fi',i+1,'fiBatch'+(i+1),b));
const totalQ=fi.reduce((s,m)=>s+m.exercises.length,0);
console.log(fi.length+' módulos, '+totalQ+' preguntas, '+batches.length+' batches');
