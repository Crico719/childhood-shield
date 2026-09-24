#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate all 70 Física modules as a JSON file."""
import json, os, sys

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'gen-fi-modules.json')

def q(question, options, correctIndex, explanation, difficulty):
    return {"question": question, "options": options, "correctIndex": correctIndex, "explanation": explanation, "difficulty": difficulty}

def th(level, title, lines):
    return {"level": level, "title": title, "lines": lines}

def mod(slug, tip, theory, exercises):
    return {"slug": slug, "tip": tip, "theory": theory, "illustrations": [], "exercises": exercises}

# Load existing if any
existing = []
if os.path.exists(OUT):
    with open(OUT, 'r', encoding='utf-8') as f:
        existing = json.load(f)

# Keep existing modules 1-6 (kinematica, dinamica, trabajo-energia, conservacion, gravitacion, fluidos)
# We'll replace everything from scratch
modules = []

# ============= MODULE 7: PRESION =============
modules.append(mod("fi-presion","Presión: P = F/A, presión en fluidos.",
  [th("basico","Concepto de presión",["La presión es la fuerza aplicada por unidad de superficie.","P = F/A, donde F es la fuerza y A es el área.","La unidad de presión es el Pascal: 1 Pa = 1 N/m².","1 atmósfera = 101,325 Pa ≈ 100,000 Pa.","La presión en un fluido depende de la profundidad."]),
   th("intermedio","Presión en fluidos",["Presión absoluta = presión atmosférica + presión del fluido.","P = P₀ + ρ·g·h donde ρ es la densidad del fluido.","La presión se transmite igual en todas las direcciones dentro de un fluido.","La presión atmosférica equivale a 760 mmHg.","Los manómetros miden presiones relativas."]),
   th("avanzado","Leyes de los gases",["Ley de Boyle: P₁V₁ = P₂V₂ a temperatura constante.","Ley de Charles: V₁/T₁ = V₂/T₂ a presión constante.","Ley de Gay-Lussac: P₁/T₁ = P₂/T₂ a volumen constante.","Ecuación ideal: PV = nRT.","La presión de un gas depende de la temperatura y el volumen."])],
  [q("¿Qué es la presión?",["Una fuerza","Fuerza por unidad de área","Un tipo de energía","Una medida de temperatura"],1,"La presión es la relación entre la fuerza y el área sobre la cual se aplica.","basico"]),
   q("Un bloque de 100 N apoya sobre 0.5 m². ¿Presión?",["50 Pa","100 Pa","200 Pa","500 Pa"],2,"P = F/A = 100/0.5 = 200 Pa.","basico"]),
   q("¿Cuánto vale 1 atmósfera en Pascales?",["100 Pa","1,000 Pa","101,325 Pa","1,000,000 Pa"],2,"1 atm = 101,325 Pa.","basico"]),
   q("Si duplicas el área con misma fuerza, ¿la presión?",["Se duplica","Se reduce a la mitad","No cambia","Se cuadruplica"],1,"P = F/A; si A duplica, P baja a la mitad.","basico"]),
   q("¿Qué instrumento mide la presión atmosférica?",["Termómetro","Barómetro","Voltímetro","Anemómetro"],1,"El barómetro mide la presión atmosférica.","basico"]),
   q("La presión dentro de un líquido aumenta con:",["La temperatura","La profundidad","El volumen","La forma"],1,"P = P₀ + ρgh; a mayor profundidad, mayor presión.","basico"]),
   q("¿Qué es la presión manométrica?",["La presión absoluta","La diferencia entre presión absoluta y atmosférica","La presión mínima","La presión del vacío"],1,"Es la presión relativa a la atmosférica.","basico"]),
   q("Agua a 5 m de profundidad. ¿Presión adicional sobre la atmosférica?",["49,000 Pa","50,000 Pa","98,000 Pa","101,325 Pa"],0,"ΔP = ρgh = 1000×9.8×5 = 49,000 Pa.","intermedio"]),
   q("Un pistón de 20 cm² recibe 80 N. ¿Presión?",["400 Pa","4,000 Pa","40,000 Pa","160,000 Pa"],2,"P = 80/(20×10⁻⁴) = 40,000 Pa.","intermedio"]),
   q("¿Qué dice la ley de Boyle?",["V₁/T₁ = V₂/T₂","P₁V₁ = P₂V₂","P₁/T₁ = P₂/T₂","PV = nRT"],1,"A temperatura constante, presión por volumen es constante.","intermedio"]),
   q("Gas a 2 atm y 3 L. ¿Volumen a 4 atm (T constante)?",["1.5 L","3 L","6 L","12 L"],0,"P₁V₁ = P₂V₂ → 2×3 = 4×V₂ → V₂ = 1.5 L.","intermedio"]),
   q("Termómetro marca -10 °C. ¿En Kelvin?",["-10 K","10 K","263 K","283 K"],2,"K = °C + 273 = -10 + 273 = 263 K.","intermedio"]),
   q("¿Qué mide un manómetro?",["Temperatura","Presión relativa de un gas","Velocidad del viento","Humedad"],1,"El manómetro mide la presión de un gas respecto a la atmosférica.","intermedio"]),
   q("Si un gas se comprime a la mitad de su volumen (T const), ¿presión?",["Se duplica","Se cuadruplica","Se reduce a la mitad","No cambia"],0,"Por Boyle: al reducir V a la mitad, P se duplica.","intermedio"]),
   q("¿Qué es el vacío perfecto?",["Presión cero absoluta","Una presión baja","Un gas muy frío","Un líquido espeso"],0,"Vacío perfecto: ninguna partícula de gas, P = 0 Pa.","avanzado"]),
   q("En la ley de los gases ideales, ¿qué es R?",["La resistencia","La constante universal de los gases","La rapidez","El radio"],1,"R = 8.314 J/(mol·K) es la constante de los gases ideales.","avanzado"]),
   q("¿A qué profundidad la presión del agua es el doble de la atmosférica?",["10.3 m","20.6 m","50 m","100 m"],0,"P_atm = ρgh → h = 101325/(1000×9.8) ≈ 10.3 m.","avanzado"]),
   q("Buceador a 30 m. ¿Presión total?",["3 atm","4 atm","30 atm","300 atm"],1,"P = 1 atm + 30×(1000×9.8/101325) ≈ 4 atm.","avanzado"]),
   q("¿Qué es la presión de vapor?",["La presión del vapor de agua","La presión a la cual un líquido hierve a una temperatura dada","La presión máxima alcanzable","La presión del aire"],1,"Es la presión parcial del vapor en equilibrio con su fase líquida.","avanzado"]),
   q("¿Por qué sube el nivel de mercurio en un barómetro?",["Por succión","Por la presión atmosférica que equilibra la columna","Por capilaridad","Por la gravedad del mercurio"],1,"La presión atmosférica empuja el mercurio hacia arriba hasta equilibrar P_atm = ρgh.","avanzado"])
])),

# ============= MODULE 8: CALOR =============
modules.append(mod("fi-calor","Calor: transferencia de energía por diferencia de temperatura.",
  [th("basico","Conceptos de calor y temperatura",["La temperatura mide la agitación promedio de las partículas.","El calor es la transferencia de energía entre cuerpos a diferente temperatura.","Los tres mecanismos de transferencia son: conducción, convección y radiación.","La unidad de calor es el Julio; también se usa la caloría (1 cal = 4.186 J).","El equilibrio térmico se alcanza cuando dos cuerpos tienen la misma temperatura."]),
   th("intermedio","Capacidad calorífica y dilatación",["La capacidad calorífica es C = Q/(ΔT).","El calor específico es c = Q/(m·ΔT).","Dilatación térmica: ΔL = α·L₀·ΔT.","Los materiales se expanden al calentarse y contraen al enfriarse.","El calor latente es la energía para cambio de fase sin cambio de temperatura."]),
   th("avanzado","Termodinámica y entropía",["Primera ley: ΔU = Q - W (energía interna = calor - trabajo).","La entropía mide el desorden de un sistema.","La segunda ley dice que la entropía total de un sistema aislado siempre aumenta.","Ninguna máquina térmica puede tener eficiencia del 100%.","El cero absoluto (0 K) es la temperatura mínima teórica."])],
  [q("¿Qué es la temperatura?",["La cantidad de calor","Una medida de la agitación de las partículas","La masa de un cuerpo","La energía potencial"],1,"La temperatura refleja la velocidad promedio de las moléculas.","basico"]),
   q("¿Qué es el calor?",["Una sustancia","Transferencia de energía por diferencia de temperatura","Una fuerza","Un tipo de luz"],1,"El calor fluye del cuerpo más caliente al más frío.","basico"]),
   q("¿Cuántos mecanismos de transferencia de calor hay?",["Uno","Dos","Tres","Cuatro"],2,"Conducción, convección y radiación.","basico"]),
   q("Un cuerpo a 80°C se pone en contacto con otro a 20°C. ¿Hacia dónde fluye el calor?",["Del frío al caliente","Del caliente al frío","No fluye","Depende de la masa"],1,"El calor siempre va del cuerpo de mayor a menor temperatura.","basico"]),
   q("1 caloría equivale a:",["1 julio","4.186 julios","100 julios","1000 julios"],1,"1 cal = 4.186 J, equivalente térmico de mecánica de Joule.","basico"]),
   q("¿Qué es la conducción del calor?",["Transferencia por fluidos","Transferencia por contacto directo entre partículas","Transferencia por ondas","Transferencia por movimiento de masas"],1,"En conducción, la energía pasa de partícula a partícula por contacto.","basico"]),
   q("¿Qué material es buen conductor del calor?",["Madera","Plástico","Metal","Aire"],2,"Los metales tienen electrones libres que facilitan la conducción.","basico"]),
   q("500 g de agua se calientan de 20°C a 50°C. ¿Calor absorbido?",["15,000 J","31,400 J","62,800 J","157,000 J"],2,"Q = mcΔT = 0.5×4186×30 = 62,790 J ≈ 62,800 J.","intermedio"]),
   q("¿Qué es el calor latente?",["Calor que cambia la temperatura","Calor para cambio de fase sin cambio de temperatura","El calor máximo posible","El calor del Sol"],1,"Durante fusión o vaporización, la temperatura se mantiene constante.","intermedio"]),
   q("1 kg de hielo a 0°C se derrite. Calor requerido:",["80 J","334,000 J","418,600 J","2,260,000 J"],1,"Q = m·L_fusión = 1×334,000 = 334,000 J.","intermedio"]),
   q("Dilatación de una barra de 2 m con α = 0.000012 /°C y ΔT = 60°C:",["0.00144 m","0.0144 m","0.144 m","1.44 m"],0,"ΔL = αL₀ΔT = 0.000012×2×60 = 0.00144 m.","intermedio"]),
   q("¿Qué es la capacidad calorífica?",["La cantidad de calor por unidad de masa","La cantidad de calor necesaria para elevar 1°C un cuerpo","La temperatura máxima","La dilatación del cuerpo"],1,"C = Q/ΔT, se mide en J/°C.","intermedio"]),
   q("¿Qué es la convección?",["Transferencia por contacto","Transferencia por movimiento de fluidos","Transferencia por ondas","No existe"],1,"El fluido caliente sube y el frío baja, creando corrientes de convección.","intermedio"]),
   q("¿Qué dice la primera ley de la termodinámica?",["La energía se crea","La energía interna cambia por calor o trabajo","La entropía siempre disminuye","El volumen es constante"],1,"ΔU = Q - W: la energía interna cambia con el calor recibido y el trabajo realizado.","intermedio"]),
   q("¿Qué es la radiación electromagnética en transferencia de calor?",["Contacto directo","Movimiento de fluidos","Ondas que no necesitan medio","Conducción en el vacío"],2,"La radiación (como la del Sol) puede propagarse en el vacío.","avanzado"]),
   q("¿Qué es la entropía?",["La energía interna","Una medida del desorden de un sistema","La temperatura","La presión"],1,"S = Q/T en procesos reversibles; mide el desorden microscópico.","avanzado"]),
   q("Segunda ley de la termodinámica:",["La entropía siempre disminuye","La entropía total de un sistema aislado siempre aumenta","La energía se destruye","El calor fluye del frío al caliente"],1,"En procesos espontáneos, la entropía del universo aumenta.","avanzado"]),
   q("Máquina térmica con T_caliente = 500 K y T_fría = 300 K. ¿Eficiencia máxima?",["20%","40%","60%","100%"],1,"η_max = 1 - T_f/T_c = 1 - 300/500 = 0.4 = 40%.","avanzado"]),
   q("¿Qué es el cero absoluto?",["0°C","-273.15°C = 0 K","-459°F","La temperatura del espacio"],1,"0 K = -273.15°C es la temperatura mínima posible teórica.","avanzado"]),
   q("¿Qué es un calorímetro?",["Un termómetro","Un instrumento para medir cantidades de calor","Un radiador","Un aislante"],1,"El calorímetro mide el intercambio de calor entre sustancias.","avanzado"])
])),

# ============= MODULE 9: TRANSPORTE DE CALOR =============
modules.append(mod("fi-transporte-calor","Conducción, convección y radiación en detalle.",
  [th("basico","Modos de transferencia",["Conducción: paso de energía de partícula a partícula por contacto.","Convección: transporte por movimiento de masas de fluido (líquido o gas).","Radiación: transmisión por ondas electromagnéticas.","Los buenos conductores térmicos son los metales.","Los aislantes retienen el calor (aire, corcho, lana)."]),
   th("intermedio","Ley de Fourier y Stefan-Boltzmann",["Flujo de calor por conducción: Q/t = k·A·ΔT/d.","k es la conductividad térmica del material.","Ley de Stefan-Boltzmann: P = ε·σ·A·T⁴.","ε es la emisividad (0 a 1) y σ = 5.67×10⁻⁸ W/(m²·K⁴).","Los cuerpos negros emiten y absorben radiación idealmente."]),
   th("avanzado","Aplicaciones avanzadas",["El efecto invernadero atrapa radiación infrarroja.","La convección natural depende del gradiente de densidad.","La conducción en sólidos se explica por fonones y electrones.","El vacío impide conducción y convección, solo queda radiación.","Los materiales aerogel son excelentes aislantes térmicos."])],
  [q("¿Qué es la conducción del calor?",["Transporte por movimiento de fluidos","Transporte de partícula a partícula por contacto","Transporte por ondas electromagnéticas","Transporte por radiación solar"],1,"En la conducción la energía se transfiere entre vecinos sin movimiento de materia.","basico"]),
   q("¿Qué tipo de material es buen conductor térmico?",["Madera","Aire","Cobre","Plástico"],2,"Los metales como el cobre tienen alta conductividad térmica.","basico"]),
   q("¿Qué tipo de material es buen aislante térmico?",["Oro","Aluminio","Corcho","Plomo"],2,"El corcho tiene baja conductividad térmica y atrapa aire.","basico"]),
   q("¿Qué es la convección?",["Transferencia por contacto","Transporte de calor por movimiento de fluidos","Radiación infrarroja","Conducción en gases"],1,"El fluido caliente se expande, sube y es reemplazado por fluido frío.","basico"]),
   q("¿Por qué el aire caliente sube?",["Porque es más ligero","Porque tiene más energía","Por su densidad menor","Todas las anteriores"],3,"El aire caliente tiene menor densidad que el frío.","basico"]),
   q("La radiación solar llega a la Tierra a través del:",["Aire comprimido","Vacío del espacio","Un tubo conductor","La atmósfera densa"],1,"La radiación electromagnética no necesita medio material.","basico"]),
   q("¿Qué instrumento mide la radiación térmica?",["Barómetro","Pirómetro","Calorímetro","Anemómetro"],1,"El pirómetro mide temperatura por radiación infrarroja.","basico"]),
   q("Flujo de calor por conducción depende de:",["Solo la temperatura","Área, conductividad, diferencia de temp y espesor","Solo la masa","La presión"],1,"Q/t = kAΔT/d incluye todas esas variables.","intermedio"]),
   q("Lámina de cobre (k=400), A=0.1m², ΔT=50°C, d=0.01m. ¿Flujo?",["20,000 W","200,000 W","2,000 W","200 W"],0,"Q/t = 400×0.1×50/0.01 = 20,000 W.","intermedio"]),
   q("Ley de Stefan-Boltzmann dice que la potencia radiada es proporcional a:",["T²","T³","T⁴","T"],2,"P = εσAT⁴, la radiación depende de la cuarta potencia de la temperatura absoluta.","intermedio"]),
   q("¿Qué es un cuerpo negro ideal?",["Un objeto pintado de negro","Uno que absorbe toda la radiación que recibe","Uno que no emite radiación","Uno que refleja todo"],1,"Un cuerpo negro absorbe el 100% de la radiación incidente.","intermedio"]),
   q("¿Qué es el efecto invernadero?",["Calentamiento por sol directo","Atrapa de radiación infrarroja por gases de la atmósfera","Enfriamiento del espacio","Conducción en el suelo"],1,"Los gases de efecto invernadero absorben y reemiten radiación infrarroja.","intermedio"]),
   q("¿Por qué las sartenes tienen mango de plástico/madera?",["Por estética","Porque son buenos aislantes térmicos","Porque son conductores","Porque son baratos"],1,"El mango aislante evita quemaduras al no conducir el calor.","intermedio"]),
   q("¿Qué aislante térmico tiene conductividad muy baja?",["Cobre","Aluminio","Aerogel","Acero"],2,"Los aerogel tienen k ≈ 0.015 W/(m·K), excelentes aislantes.","intermedio"]),
   q("En el vacío del espacio, ¿qué mecanismo de calor funciona?",["Conducción","Convección","Radiación","Ninguno"],2,"Solo la radiación puede propagarse sin medio material.","avanzado"]),
   q("¿Qué fenómeno explica la conducción en sólidos cristalinos?",["Movimiento de electrones","Vibraciones de la red cristalina (fonones)","Convección de átomos","Radiación atómica"],1,"Los fonones son vibraciones cuantizadas de la red que transportan energía.","avanzado"]),
   q("Superficie con emisividad ε = 0.3 radia menos que una con ε = 0.9 porque:",["Tiene menor temperatura","Refleja más radiación de la que absorbe","Tiene menor capacidad de emitir","Tiene más masa"],1,"Baja emisividad significa poca capacidad de emitir radiación.","avanzado"]),
   q("¿Qué gas es principal responsable del efecto invernadero natural?",["Oxígeno","Nitrógeno","Vapor de agua y CO₂","Hidrógeno"],2,"El vapor de agua y el CO₂ son los principales gases de efecto invernadero.","avanzado"]),
   q("¿Por qué las estaciones espaciales necesitan radiadores grandes?",["Para captar calor del Sol","Para disipar el calor generado internamente por radiación","Para calentar el interior","Para producir oxígeno"],1,"En el vacío solo pueden disipar calor por radiación.","avanzado"])
])),

# ============= MODULE 10: CICLO TERMICO =============
modules.append(mod("fi-ciclo-termo","Máquinas térmicas, ciclo de Carnot y eficiencia.",
  [th("basico","Máquinas térmicas",["Una máquina térmica convierte calor en trabajo.","El ciclo termodinámico return el sistema a su estado inicial.","Trabajo neto = área encerrada en el diagrama P-V.","La eficiencia es trabajo neto sobre calor absorbido.","Todo proceso real tiene pérdidas por fricción y calor residual."]),
   th("intermedio","Ciclo de Carnot","El ciclo de Carnot es el teóricamente más eficiente.","Consiste en 4 etapas: dos isotérmicas y dos adiabáticas.","Eficiencia de Carnot: η = 1 - T_fría/T_caliente.","Solo depende de las temperaturas de las fuentes.","Ninguna máquina real puede superar la eficiencia de Carnot."]),
   th("avanzado","Entropía y ciclos",["En un ciclo completo, ΔS_total ≥ 0.","Carnot reversible: ΔS_total = 0.","Los procesos irreversibles generan entropía adicional.","La eficiencia real siempre es menor que la de Carnot.","Motores Stirling y Otto son ciclos alternativos."])],
  [q("¿Qué es una máquina térmica?",["Un generador de electricidad","Un dispositivo que convierte calor en trabajo mecánico","Un refrigerador","Un medidor de calor"],1,"Las máquinas térmicas transforman energía térmica en trabajo.","basico"]),
   q("¿Qué es un ciclo termodinámico?",["Un proceso de una sola fase","Un conjunto de procesos que devuelven el sistema al estado inicial","Una reacción química","Un tipo de movimiento"],1,"En un ciclo el estado final coincide con el inicial.","basico"]),
   q("¿Qué es la eficiencia de una máquina térmica?",["La potencia sobre el tiempo","El trabajo neto dividido por el calor absorbido","El calor perdido sobre el ganado","La masa de combustible usada"],1,"η = W_net / Q_caliente.","basico"]),
   q("¿Puede una máquina térmica convertir todo el calor en trabajo?",["Sí, con buen diseño","No, siempre hay pérdidas","Solo en el vacío","Solo a 0°C"],1,"Siempre parte del calor se despide a la fuente fría.","basico"]),
   q("¿Qué relación existe entre eficiencia y temperaturas en Carnot?",["Mayor diferencia de T → mayor eficiencia","Mayor T calientes → menor eficiencia","La eficiencia no depende de T","Solo depende del combustible"],0,"η = 1 - T_f/T_c; a mayor diferencia, mayor eficiencia.","basico"]),
   q("¿Qué es el ciclo de Carnot?",["El más ineficiente","El teóricamente más eficiente posible","Un ciclo real","Un proceso no cíclico"],1,"Carnot establece el límite superior de eficiencia para máquinas de calor.","basico"]),
   q("¿Cuántas etapas tiene el ciclo de Carnot?",["Dos","Tres","Cuatro","Seis"],2,"Cuatro etapas: dos isotérmicas y dos adiabáticas.","basico"]),
   q("Máquina Carnot con T_c = 800 K y T_f = 300 K. ¿Eficiencia?",["37.5%","50%","62.5%","100%"],2,"η = 1 - 300/800 = 0.625 = 62.5%.","intermedio"]),
   q("Motor recibe 5000 J de calor, despide 3000 J. ¿Trabajo neto?",["2000 J","3000 J","5000 J","8000 J"],0,"W = Q_cal - Q_fría = 5000 - 3000 = 2000 J.","intermedio"]),
   q("Motor con η = 40% produce 800 J. ¿Cuánto calor absorbe?",["320 J","800 J","2000 J","3200 J"],2,"Q = W/η = 800/0.4 = 2000 J.","intermedio"]),
   q("¿Qué es un proceso adiabático?",["A presión constante","Sin intercambio de calor con el exterior","A volumen constante","A temperatura constante"],1,"Q = 0; no hay transferencia de calor.","intermedio"]),
   q("¿Qué es un proceso isotérmico?",["A volumen constante","A presión constante","A temperatura constante","Sin calor"],2,"La temperatura se mantiene durante todo el proceso.","intermedio"]),
   q("¿Qué es un proceso isobárico?",["A volumen constante","A presión constante","A temperatura constante","Adiabático"],1,"La presión se mantiene constante durante el proceso.","intermedio"]),
   q("¿Qué es un proceso isocórico?",["A presión constante","A volumen constante","A temperatura constante","Sin trabajo"],1,"En volumen constante no se realiza trabajo (W = PΔV = 0).","intermedio"]),
   q("En un ciclo, ¿el cambio de energía interna es?",["Igual al calor absorbido","Igual al trabajo realizado","Cero","Depende del gas"],2,"En un ciclo completo ΔU = 0 porque se vuelve al estado inicial.","avanzado"]),
   q("¿Por qué la eficiencia real siempre es menor que la de Carnot?",["Porque los motores son más pequeños","Por irreversibilidades: fricción, pérdidas de calor","Porque usan combustible fósil","Por la gravedad"],1,"Los procesos reales son irreversibles y generan entropía adicional.","avanzado"]),
   q("¿Qué es la entropía en un ciclo reversible?",["Aumenta","Disminuye","Es cero","Se duplica"],2,"En un ciclo reversible, ΔS_total = 0.","avanzado"]),
   q("¿Qué es un motor Stirling?",["Un motor eléctrico","Un motor térmico con ciclos de calentamiento y enfriamiento externos","Un motor de combustión interna","Un generador solar"],1,"El motor Stirling usa calentamiento y enfriamiento externos alternados.","avanzado"]),
   q("¿Qué es el teorema de Carnot aplicado a refrigeradores?",["La eficiencia es igual a la de un motor","El COP máximo depende de las temperaturas","No existe límite","Depende solo del gas"],1,"COP_ref = T_f/(T_c - T_f) define el rendimiento máximo de un refrigerador.","avanzado"]),
   q("¿Qué relationship existe entre ΔS y Q en un proceso reversible?",["ΔS = Q×T","ΔS = Q/T","ΔS = Q×T²","ΔS = Q/T²"],1,"En proceso reversible, ΔS = Q/T.","avanzado"])
])),

# Save
with open(OUT, 'w', encoding='utf-8') as f:
    json.dump(modules, f, ensure_ascii=False)

total_q = sum(len(m['exercises']) for m in modules)
print(f"Wrote {len(modules)} modules with {total_q} questions to {OUT}")
