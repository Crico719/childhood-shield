const { writeBatch } = require('./gen-utils.js');
const fs = require('fs');
const path = require('path');

// Read the existing modules from part 1
const existing = require('./gen-fi-part1.js');
// That won't work because the existing script has side effects. Let me just write all modules directly.

// I'll define modules 8-20 (filling batch 1 to 10 and creating batch 2)
const modules = [
// MODULE 8: calor
{
  slug: "fi-calor", tip: "El calor fluye de mayor a menor temperatura.",
  theory: [
    { level: "basico", title: "Temperatura y calor", lines: [
      "La temperatura mide el promedio de energía cinética de las partículas.",
      "El calor es energía transferida por diferencia de temperatura.",
      "La escala Celsius usa 0° para el agua congelada y 100° para hervir.",
      "La escala Kelvin comienza en el cero absoluto: 0 K = -273.15°C.",
      "La capacidad calorífica indica cuánta energía necesita un cuerpo para subir 1°C."
    ]},
    { level: "intermedio", title: "Cálculos de calor", lines: [
      "Q = m·c·ΔT calcula el calor intercambiado.",
      "c es la capacidad calorífica específica: agua = 4186 J/(kg·°C).",
      "En una fusión o vaporización, Q = m·L, donde L es el calor latente.",
      "La calorimetría usa la conservación de energía para mezclas.",
      "Los termómetros usan dilatación, resistencia o radiación."
    ]},
    { level: "avanzado", title: "Termodinámica molecular", lines: [
      "La temperatura es proporcional a la energía cinética media: ½mv² = (3/2)kT.",
      "k = 1.38×10⁻²³ J/K es la constante de Boltzmann.",
      "El cero absoluto es inalcanzable por el tercer principio de la termodinámica.",
      "La entropía mide el desorden microscópico del sistema.",
      "Los procesos adiabáticos no intercambian calor con el exterior."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué mide la temperatura?", options: ["La cantidad total de energía", "El promedio de energía cinética de las partículas", "La masa de un cuerpo", "La presión de un gas"], correctIndex: 1, explanation: "La temperatura es una medida de la energía cinética promedio de las partículas de un sistema.", difficulty: "basico" },
    { question: "¿Qué es el calor en física?", options: ["Una fuerza", "Una unidad de masa", "Energía transferida por diferencia de temperatura", "Una forma de presión"], correctIndex: 2, explanation: "El calor es energía en tránsito entre sistemas a diferente temperatura.", difficulty: "basico" },
    { question: "¿A qué temperatura hierve el agua a nivel del mar?", options: ["0°C", "50°C", "100°C", "212°C"], correctIndex: 2, explanation: "A nivel del mar (1 atm), el agua hierve a 100°C = 373.15 K.", difficulty: "basico" },
    { question: "¿Cuál es el cero absoluto?", options: ["0°C", "-273.15°C", "-100°C", "0 K = -273.15°C"], correctIndex: 3, explanation: "El cero absoluto es -273.15°C = 0 K, la temperatura más baja posible.", difficulty: "basico" },
    { question: "¿Qué capacidad calorífica tiene el agua?", options: ["Baja", "Muy alta: 4186 J/(kg·°C)", "Cero", "Igual a la del hierro"], correctIndex: 1, explanation: "El agua tiene una capacidad calorífica muy alta, lo que la hace excelente como refrigerante.", difficulty: "basico" },
    { question: "¿Qué diferencia hay entre calor y temperatura?", options: ["Son lo mismo", "El calor es energía transferida, la temperatura es estado del sistema", "La temperatura es energía, el calor es masa", "El calor solo existe en gases"], correctIndex: 1, explanation: "El calor es energía en tránsito; la temperatura es una propiedad del estado del sistema.", difficulty: "basico" },
    { question: "El cero en la escala Kelvin equivale a:", options: ["0°C", "-273.15°C", "-100°C", "100°C"], correctIndex: 1, explanation: "0 K = -273.15°C, el cero absoluto donde cesa el movimiento térmico.", difficulty: "basico" },
    { question: "Un cuerpo de 2 kg con c = 500 J/(kg·°C) sube 10°C. ¿Cuánto calor absorbe?", options: ["5000 J", "10,000 J", "20,000 J", "1000 J"], correctIndex: 1, explanation: "Q = m·c·ΔT = 2×500×10 = 10,000 J.", difficulty: "intermedio" },
    { question: "¿Qué es el calor latente?", options: ["El calor para subir la temperatura", "El calor para cambiar de estado sin cambiar temperatura", "El calor del sol", "El calor de la friction"], correctIndex: 1, explanation: "El calor latente es la energía necesaria para un cambio de fase sin variación de temperatura.", difficulty: "intermedio" },
    { question: "¿Cuánta energía se necesita para vaporizar 1 kg de agua a 100°C?", options: ["4186 J", "2,260,000 J", "334,000 J", "100 J"], correctIndex: 1, explanation: "El calor latente de vaporización del agua es ~2,260,000 J/kg.", difficulty: "intermedio" },
    { question: "¿Qué es la dilatación térmica?", options: ["El cambio de color con la temperatura", "El cambio de volumen con la temperatura", "La pérdida de masa", "El cambio de presión"], correctIndex: 1, explanation: "Los materiales cambian de volumen al variar la temperatura, generalmente expandiéndose al calentarse.", difficulty: "intermedio" },
    { question: "¿Qué es un calorímetro?", options: ["Un instrumento que mide temperatura", "Un dispositivo que mide el intercambio de calor", "Un termostato", "Un barómetro"], correctIndex: 1, explanation: "El calorímetro mide cantidades de calor intercambiadas en procesos térmicos.", difficulty: "intermedio" },
    { question: "Si se mezclan dos sustancias a diferente temperatura, ¿cuándo se alcanza el equilibrio?", options: ["Cuando la más caliente se enfría a 0°C", "Cuando ambas alcanzan la misma temperatura", "Nunca", "Cuando la más fría se calienta a 100°C"], correctIndex: 1, explanation: "El calor fluye del cuerpo más caliente al más frío hasta alcanzar la misma temperatura (equilibrio térmico).", difficulty: "intermedio" },
    { question: "¿Qué es un material aislante térmico?", options: ["Uno que conduce muy bien el calor", "Uno que dificulta la transferencia de calor", "Uno que se calienta rápidamente", "Uno que es magnético"], correctIndex: 1, explanation: "Los aislantes como la lana de vidrio o el corcho tienen baja conductividad térmica.", difficulty: "intermedio" },
    { question: "¿Qué es la constante de Boltzmann?", options: ["Una constante gravitacional", "Una constante que relaciona temperatura con energía: k = 1.38×10⁻²³ J/K", "La velocidad de la luz", "La constante de Planck"], correctIndex: 1, explanation: "k_B relaciona la temperatura con la energía cinética media de las partículas.", difficulty: "avanzado" },
    { question: "¿Qué establece el tercer principio de la termodinámica?", options: ["La energía se conserva", "Es imposible alcanzar el cero absoluto en un número finito de pasos", "La entropía siempre aumenta", "El calor siempre fluye de frío a caliente"], correctIndex: 1, explanation: "El tercer principio establece que el cero absoluto es inalcanzable.", difficulty: "avanzado" },
    { question: "¿Qué es un proceso adiabático?", options: ["Uno con temperatura constante", "Uno sin intercambio de calor con el exterior", "Uno con volumen constante", "Uno con presión constante"], correctIndex: 1, explanation: "En un proceso adiabático, Q = 0: no hay transferencia de calor con el entorno.", difficulty: "avanzado" },
    { question: "¿Qué es la entropía?", options: ["La cantidad de calor", "Una medida del desorden microscópico de un sistema", "La presión de un gas", "La velocidad de una partícula"], correctIndex: 1, explanation: "La entropía (S) mide el número de microestados posibles: mayor desorden = mayor entropía.", difficulty: "avanzado" },
    { question: "¿Qué dice la segunda ley de la termodinámica sobre la entropía?", options: ["La entropía siempre disminuye", "La entropía de un sistema aislado nunca disminuye", "La entropía es constante", "La entropía solo cambia a 0 K"], correctIndex: 1, explanation: "En procesos espontáneos, la entropía total del universo aumenta o permanece igual.", difficulty: "avanzado" },
    { question: "¿Cuál es la energía cinética media a 300 K para una molécula de gas ideal?", options: ["300 J", "6.21×10⁻²¹ J", "1.38×10⁻²³ J", "3.52×10⁻²⁰ J"], correctIndex: 1, explanation: "KE = (3/2)kT = 1.5×1.38×10⁻²³×300 ≈ 6.21×10⁻²¹ J.", difficulty: "avanzado" },
    { question: "¿Qué es la conducción térmica?", options: ["Transferencia por movimiento de fluido", "Transferencia de energía por contacto directo entre partículas", "Transferencia por ondas electromagnéticas", "Transferencia por radiación solar"], correctIndex: 1, explanation: "La conducción ocurre por choques entre partículas de un material, de zona caliente a fría.", difficulty: "avanzado" },
    { question: "¿Qué es la convección?", options: ["Transferencia en sólidos", "Transferencia de calor por movimiento de fluidos (líquidos o gases)", "Transferencia por vacío", "Transferencia por radiación"], correctIndex: 1, explanation: "La convección ocurre cuando el fluido caliente sube y el frío baja, creando corrientes.", difficulty: "avanzado" },
  ]
},
// MODULE 9: transporte-calor
{
  slug: "fi-transporte-calor", tip: "El calor se transmite por conducción, convección y radiación.",
  theory: [
    { level: "basico", title: "Mecanismos de transferencia", lines: [
      "La conducción es transferencia por contacto directo entre partículas.",
      "La convección es transferencia por movimiento de fluidos.",
      "La radiación es transferencia por ondas electromagnéticas, sin medio.",
      "Los metales son buenos conductores del calor.",
      "Los materiales como el corcho o la lana son buenos aislantes."
    ]},
    { level: "intermedio", title: "Leyes de la transferencia", lines: [
      "Ley de Fourier: q = -k·(dT/dx), el flujo de calor es proporcional al gradiente.",
      "k es la conductividad térmica del material.",
      "La convección se describe con h·A·ΔT (coeficiente de convección).",
      "La radiación sigue la ley de Stefan-Boltzmann: P = σ·A·T⁴.",
      "σ = 5.67×10⁻⁸ W/(m²·K⁴) es la constante de Stefan-Boltzmann."
    ]},
    { level: "avanzado", title: "Transferencia avanzada", lines: [
      "Los materiales compuestos optimizan la transferencia según la aplicación.",
      "El número de Nusselt relaciona convección y conducción.",
      "La transferencia radiativa depende de la emisividad de la superficie.",
      "Los intercambiadores de calor usan conducción y convección combinadas.",
      "El aislamiento térmico reduce los tres mecanismos simultáneamente."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué es la conducción térmica?", options: ["Transferencia por movimiento de fluidos", "Transferencia de energía por contacto directo entre partículas", "Transferencia por ondas electromagnéticas", "Transferencia por gravedad"], correctIndex: 1, explanation: "La conducción ocurre por choques entre partículas contiguas, de zona caliente a fría.", difficulty: "basico" },
    { question: "¿Qué es la convección?", options: ["Transferencia en sólidos", "Transferencia por movimiento de fluidos", "Transferencia por vacío", "Transferencia por ondas"], correctIndex: 1, explanation: "La convección ocurre cuando el fluido caliente sube y el frío baja, formando corrientes.", difficulty: "basico" },
    { question: "¿Qué es la radiación térmica?", options: ["Transferencia por contacto", "Transferencia por movimiento de aire", "Transferencia por ondas electromagnéticas sin necesidad de medio", "Transferencia nuclear"], correctIndex: 2, explanation: "La radiación viaja por ondas EM y no necesita medio material (funciona en el vacío).", difficulty: "basico" },
    { question: "¿Por qué los metales son buenos conductores?", options: ["Porque son pesados", "Porque tienen electrones libres que transfieren energía rápidamente", "Porque son magnéticos", "Porque tienen alta densidad"], correctIndex: 1, explanation: "Los electrones libres en los metales transfieren energía cinética eficientemente.", difficulty: "basico" },
    { question: "¿Qué material es buen aislante térmico?", options: ["El cobre", "La lana de vidrio", "El aluminio", "El hierro"], correctIndex: 1, explanation: "La lana de vidrio tiene baja conductividad térmica, atrapando aire en sus fibras.", difficulty: "basico" },
    { question: "¿Cómo se transmite el calor en el espacio vacío?", options: ["Por conducción", "Por convección", "Por radiación", "No se transmite"], correctIndex: 2, explanation: "En el vacío solo la radiación puede transferir calor, ya que no hay materia para conducción ni convección.", difficulty: "basico" },
    { question: "¿Qué es la ley de Fourier?", options: ["El calor fluye de caliente a frío", "El flujo de calor es proporcional al gradiente de temperatura", "La temperatura es constante", "El volumen es constante"], correctIndex: 1, explanation: "Fourier: q = -k·(dT/dx), el flujo de calor depende de la conductividad y el gradiente térmico.", difficulty: "basico" },
    { question: "¿Qué es la conductividad térmica k?", options: ["La capacidad de un material para resistir el flujo de calor", "La rapidez con que un material conduce el calor", "La temperatura de un material", "La masa de un material"], correctIndex: 1, explanation: "k mide qué tan bien un material conduce el calor: alto k = buen conductor.", difficulty: "intermedio" },
    { question: "La ley de Stefan-Boltzmann dice que la potencia radiada es proporcional a:", options: ["T²", "T³", "T⁴", "T"], correctIndex: 2, explanation: "P = σ·A·T⁴, la potencia radiada es proporcional a la cuarta potencia de la temperatura absoluta.", difficulty: "intermedio" },
    { question: "¿Qué es la convección natural?", options: ["La que usa bombas mecánicas", "La que se produce por diferencias de densidad debidas a la temperatura", "La que solo ocurre en líquidos", "La que ocurre en el vacío"], correctIndex: 1, explanation: "El fluido caliente menos denso sube y el frío más denso baja, creando corrientes naturales.", difficulty: "intermedio" },
    { question: "¿Qué es un radiador de auto?", options: ["Un dispositivo de conducción", "Un intercambiador de calor que usa convección del aire", "Un aislante térmico", "Un generador de radiación"], correctIndex: 1, explanation: "El radiador enfría el refrigerante del motor transfiriendo calor al aire por convección forzada.", difficulty: "intermedio" },
    { question: "¿Qué es la emisividad de una superficie?", options: ["Su capacidad de reflejar radiación", "Qué tan eficientemente emite radiación térmica (0 a 1)", "Su temperatura", "Su conductividad"], correctIndex: 1, explanation: "Un cuerpo negro ideal tiene emisividad = 1; un espejo perfecto tiene emisividad = 0.", difficulty: "intermedio" },
    { question: "¿Por qué las telas oscuras se calientan más al sol?", options: ["Porque son más pesadas", "Porque absorben más radiación que las claras", "Porque tienen mayor masa", "Porque son conductoras"], correctIndex: 1, explanation: "Las telas oscuras tienen mayor absorptividad y emisividad que las claras.", difficulty: "intermedio" },
    { question: "¿Por qué los termos mantienen caliente el café?", options: ["Usan energía eléctrica", "Vidrio al vacío entre doble pared reduce conducción, convección y radiación", "El café genera su propio calor", "El tapón aísla el sonido"], correctIndex: 1, explanation: "El vacío en la doble pared elimina conducción y convección; la capa plateada reduce radiación.", difficulty: "intermedio" },
    { question: "¿Qué es un intercambiador de calor?", options: ["Un dispositivo que destruye calor", "Un dispositivo que transfiere calor entre dos fluidos sin mezclarlos", "Un aislante", "Un termostato"], correctIndex: 1, explanation: "Los intercambiadores transfieren calor eficientemente entre fluidos a diferente temperatura.", difficulty: "avanzado" },
    { question: "¿Qué es el número de Nusselt?", options: ["El número de Reynolds térmico", "La relación entre convección y conducción en un fluido", "La eficiencia de un radiador", "La densidad del fluido"], correctIndex: 1, explanation: "Nu = h·L/k, donde h es el coeficiente de convección y k la conductividad del fluido.", difficulty: "avanzado" },
    { question: "¿Cómo se reduce la pérdida de calor por radiación en una ventana?", options: ["Pintándola de negro", "Con recubrimientos de baja emisividad (low-E)", "Con cortinas gruesas", "Con ventilación"], correctIndex: 1, explanation: "Los recubrimientos low-E reducen la emisividad del vidrio, disminuyendo la pérdida por radiación.", difficulty: "avanzado" },
    { question: "¿Qué es la eficiencia de un radiador térmico?", options: ["Su capacidad de generar electricidad", "La relación entre la radiación emitida y la de un cuerpo negro a la misma temperatura", "Su temperatura máxima", "Su masa"], correctIndex: 1, explanation: "La emisividad ε = P_real/P_cuerpo_negro. Un radiador ideal tiene ε = 1.", difficulty: "avanzado" },
    { question: "¿Qué causa el efecto invernadero?", options: ["La radiación del sol directa", "Gases que absorben radiación infrarroja emitida por la Tierra", "El viento solar", "La rotación terrestre"], correctIndex: 1, explanation: "CO₂, metano y otros gases absorben la radiación IR que la Tierra emite, reteniendo calor.", difficulty: "avanzado" },
    { question: "¿Por qué la espuma de poliestireno es buen aislante?", options: ["Es metálica", "Tiene burbujas de aire atrapado que reducen conducción y convección", "Es transparente", "Es magnética"], correctIndex: 1, explanation: "El aire atrapado en las burbujas tiene baja conductividad y la estructura impide corrientes de convección.", difficulty: "avanzado" },
  ]
},
// MODULE 10: ciclo-termo
{
  slug: "fi-ciclo-termo", tip: "Los ciclos termodinámicos convierten calor en trabajo y viceversa.",
  theory: [
    { level: "basico", title: "Conceptos termodinámicos", lines: [
      "La termodinámica estudia la relación entre calor, trabajo y energía.",
      "Un sistema termodinámico es la porción de universo que se estudia.",
      "El trabajo en termodinámica se asocia con cambios de volumen: W = P·ΔV.",
      "Un ciclo termodinámico es un proceso que regresa al estado inicial.",
      "Las máquinas térmicas convierten calor en trabajo mecánico."
    ]},
    { level: "intermedio", title: "Leyes de la termodinámica", lines: [
      "Primera ley: ΔU = Q - W (conservación de energía interna).",
      "Segunda ley: el calor fluye espontáneamente de caliente a frío.",
      "No existe una máquina térmica perfecta (eficiencia 100%).",
      "La eficiencia máxima es la de Carnot: η = 1 - T_fría/T_caliente.",
      "Un proceso isotérmico tiene T constante, un adiabático no intercambia calor."
    ]},
    { level: "avanzado", title: "Ciclos y eficiencia", lines: [
      "El ciclo de Carnot es teóricamente el más eficiente entre dos temperaturas.",
      "El ciclo Otto se usa en motores de gasolina: compresión, combustión, expansión, escape.",
      "El ciclo Diesel usa ignición por compresión.",
      "El ciclo Rankine usa vapor de agua en centrales eléctricas.",
      "La eficiencia real siempre es menor que la de Carnot por irreversibilidades."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué estudia la termodinámica?", options: ["El movimiento de los cuerpos", "La relación entre calor, trabajo y energía", "Las ondas electromagnéticas", "Las reacciones químicas"], correctIndex: 1, explanation: "La termodinámica analiza el intercambio de energía en forma de calor y trabajo.", difficulty: "basico" },
    { question: "¿Qué dice la primera ley de la termodinámica?", options: ["El calor siempre fluye de frío a caliente", "La energía interna cambia según ΔU = Q - W", "La entropía siempre aumenta", "Todo sistema tiende al equilibrio"], correctIndex: 1, explanation: "La primera ley es conservación de energía: el cambio de energía interna es calor menos trabajo.", difficulty: "basico" },
    { question: "¿Qué es una máquina térmica?", options: ["Una que funciona con electricidad", "Una que convierte calor en trabajo mecánico", "Una que destruye energía", "Una que funciona en el vacío"], correctIndex: 1, explanation: "Las máquinas térmicas (motores, turbinas) convierten parte del calor en trabajo.", difficulty: "basico" },
    { question: "¿Qué dice la segunda ley de la termodinámica?", options: ["La energía se conserva", "El calor fluye espontáneamente de mayor a menor temperatura", "Todo sistema se expande", "La masa se conserva"], correctIndex: 1, explanation: "El calor nunca fluye espontáneamente de un cuerpo frío a uno caliente.", difficulty: "basico" },
    { question: "¿Por qué no existen perpetuos móviles del segundo tipo?", options: ["Porque la gravedad lo impide", "Porque siempre hay irreversibilidades que generan entropía", "Porque la masa se pierde", "Porque la velocidad tiene límite"], correctIndex: 1, explanation: "Los procesos reales son irreversibles y generan entropía, impidiendo conversión perfecta de calor en trabajo.", difficulty: "basico" },
    { question: "¿Qué es el trabajo en termodinámica?", options: ["Fuerza por distancia", "Cambio de volumen contra una presión: W = P·ΔV", "Energía almacenada", "Masa por aceleración"], correctIndex: 1, explanation: "En termodinámica, el trabajo está asociado con cambios de volumen del sistema.", difficulty: "basico" },
    { question: "¿Qué es un sistema termodinámico?", options: ["Todo el universo", "La porción de universo que se estudia", "Solo el calor", "Solo el trabajo"], correctIndex: 1, explanation: "El sistema es la porción de universo delimitada para su análisis; el resto es el entorno.", difficulty: "basico" },
    { question: "¿Qué es un proceso isotérmico?", options: ["Presión constante", "Temperatura constante", "Volumen constante", "Sin intercambio de calor"], correctIndex: 1, explanation: "En un proceso isotérmico la temperatura del sistema permanece constante.", difficulty: "intermedio" },
    { question: "¿Qué es un proceso adiabático?", options: ["Temperatura constante", "Sin intercambio de calor con el exterior", "Volumen constante", "Presión constante"], correctIndex: 1, explanation: "En un proceso adiabático Q = 0, no hay transferencia de calor.", difficulty: "intermedio" },
    { question: "La eficiencia de Carnot depende de:", options: ["La masa del gas", "Las temperaturas de las fuentes caliente y fría", "El volumen del recipiente", "La presión"], correctIndex: 1, explanation: "η_Carnot = 1 - T_fría/T_caliente (en Kelvin). Solo depende de las temperaturas.", difficulty: "intermedio" },
    { question: "Una máquina térmica opera entre 500 K y 300 K. ¿Cuál es su eficiencia de Carnot?", options: ["20%", "40%", "60%", "100%"], correctIndex: 1, explanation: "η = 1 - 300/500 = 1 - 0.6 = 0.4 = 40%.", difficulty: "intermedio" },
    { question: "¿Qué es un ciclo termodinámico?", options: ["Un proceso que destruye energía", "Un proceso que devuelve el sistema a su estado inicial", "Un proceso irreversible", "Un proceso que siempre aumenta la temperatura"], correctIndex: 1, explanation: "En un ciclo, el sistema pasa por varios estados y regresa al inicial, permitiendo trabajo repetitivo.", difficulty: "intermedio" },
    { question: "¿Qué es el ciclo Otto?", options: ["Un ciclo de refrigeración", "El ciclo de un motor de gasolina: compresión, combustión, expansión, escape", "Un ciclo de vapor", "Un ciclo nuclear"], correctIndex: 1, explanation: "El ciclo Otto se usa en motores de encendido por chispa (gasolina).", difficulty: "intermedio" },
    { question: "¿Qué es el ciclo de Carnot?", options: ["El más ineficiente posible", "El ciclo teóricamente más eficiente entre dos temperaturas", "Un ciclo con eficiencia 100%", "Un ciclo solo para gases ideales"], correctIndex: 1, explanation: "Carnot demostró que ningún motor puede ser más eficiente que el suyo entre las mismas temperaturas.", difficulty: "intermedio" },
    { question: "¿Qué es la energía interna de un gas ideal?", options: ["La energía cinética de sus partículas", "La suma de todas las energías cinéticas de las moléculas", "La presión por volumen", "El calor total"], correctIndex: 1, explanation: "U = (3/2)nRT para un gas ideal monoatómico, la suma de la energía cinética molecular.", difficulty: "avanzado" },
    { question: "¿Qué es un proceso isotérmico para un gas ideal?", options: ["ΔU = 0, Q = W", "Q = 0", "W = 0", "ΔU = Q"], correctIndex: 0, explanation: "Si T es constante, ΔU = 0 (gas ideal), entonces Q = W: todo el calor se convierte en trabajo.", difficulty: "avanzado" },
    { question: "¿Qué es el ciclo Diesel?", options: ["Igual al Otto pero con más compresión", "Usa ignición por compresión, sin bujía", "Solo funciona con diésel de petróleo", "Es un ciclo de refrigeración"], correctIndex: 1, explanation: "El ciclo Diesel comprime el aire tanto que la temperatura supera el punto de ignición del combustible.", difficulty: "avanzado" },
    { question: "¿Qué es el ciclo Rankine?", options: ["Un ciclo de gas ideal", "Usa vapor de agua para generar electricidad en centrales térmicas", "Un ciclo de refrigeración por compresión", "Un ciclo nuclear"], correctIndex: 1, explanation: "El ciclo Rankine usa agua como fluido de trabajo: calentamiento, vaporización, expansión en turbina, condensación.", difficulty: "avanzado" },
    { question: "¿Por qué la eficiencia real es siempre menor que la de Carnot?", options: ["Porque Carnot se equivocó", "Porque hay fricción, pérdidas de calor y otros procesos irreversibles", "Porque falta tecnología", "Porque la gravedad afecta"], correctIndex: 1, explanation: "Las irreversibilidades (fricción, transferencia de calor a ΔT finita) reducen la eficiencia real.", difficulty: "avanzado" },
    { question: "¿Qué es una bomba de calor?", options: ["Una que destruye calor", "Una máquina térmica que invierte el ciclo para mover calor de frío a caliente", "Un generador de frío absoluto", "Un radiador"], correctIndex: 1, explanation: "Las bombas de calor usan trabajo para mover calor de una zona fría a una caliente (calefacción inversa).", difficulty: "avanzado" },
  ]
},
// MODULE 11: electrostatica
{
  slug: "fi-electrostatica", tip: "Cargas del mismo signo se repelen, opuestas se atraen.",
  theory: [
    { level: "basico", title: "Carga eléctrica", lines: [
      "La materia está compuesta de átomos con carga positiva (núcleo) y negativa (electrones).",
      "Cargas del mismo signo se repelen; cargas opuestas se atraen.",
      "La unidad de carga es el Coulomb (C).",
      "Los electrones pueden transferirse entre materiales por fricción (efecto triboeléctrico).",
      "Un cuerpo neutro tiene igual número de cargas positivas y negativas."
    ]},
    { level: "intermedio", title: "Ley de Coulomb y campo eléctrico", lines: [
      "F = k·|q₁·q₂|/r² calcula la fuerza entre dos cargas puntuales.",
      "k = 9×10⁹ N·m²/C² es la constante de Coulomb.",
      "El campo eléctrico E = F/q mide la fuerza por unidad de carga.",
      "Las líneas de campo van de positivo a negativo.",
      "Un conductor en equilibrio tiene campo eléctrico cero en su interior."
    ]},
    { level: "avanzado", title: "Potencial y energía", lines: [
      "El potencial eléctrico V = k·q/r en un punto del campo.",
      "La diferencia de potencial es voltaje: ΔV = V₂ - V₁.",
      "La energía potencial eléctrica es U = k·q₁·q₂/r.",
      "El trabajo para mover una carga es W = q·ΔV.",
      "Los conductores son equipotenciales en equilibrio."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué cargas tiene un átomo en su núcleo?", options: ["Negativas", "Positivas (protones)", "Neutras", "Ambas en igual cantidad"], correctIndex: 1, explanation: "El núcleo contiene protones (carga +) y neutrones (sin carga); los electrones (carga -) orbitan alrededor.", difficulty: "basico" },
    { question: "¿Qué sucede cuando frotas una barra de vidrio con seda?", options: ["Se vuelve magnética", "El vidrio se carga positivamente por transferencia de electrones", "No pasa nada", "Se descarga"], correctIndex: 1, explanation: "La seda roba electrones al vidrio, dejándolo con carga positiva (efecto triboeléctrico).", difficulty: "basico" },
    { question: "¿Qué unidad mide la carga eléctrica?", options: ["Newton", "Julio", "Coulomb", "Watio"], correctIndex: 2, explanation: "El Coulomb (C) es la unidad de carga eléctrica en el SI.", difficulty: "basico" },
    { question: "¿Qué dice la ley de Coulomb?", options: ["La fuerza entre cargas es inversamente proporcional a r²", "La fuerza entre cargas es directamente proporcional al producto de las cargas", "Ambas son correctas", "La fuerza es constante"], correctIndex: 2, explanation: "F = k·|q₁·q₂|/r²: directamente proporcional al producto de cargas e inversamente proporcional al cuadrado de la distancia.", difficulty: "basico" },
    { question: "¿Qué es un conductor eléctrico?", options: ["Un material que no permite el paso de corriente", "Un material que permite el flujo libre de electrones", "Un aislante", "Un imán"], correctIndex: 1, explanation: "Los metales son buenos conductores porque tienen electrones libres que se mueven fácilmente.", difficulty: "basico" },
    { question: "Dos cargas idénticas se acercan. ¿Qué fuerza experimentan?", options: ["Atracción", "Repulsión", "Ninguna", "Depende de su masa"], correctIndex: 1, explanation: "Cargas del mismo signo se repelen según la ley de Coulomb.", difficulty: "basico" },
    { question: "¿Qué es la carga elemental?", options: ["La carga del protón solamente", "La carga del electrón: 1.6×10⁻¹⁹ C", "La carga de un átomo entero", "La carga de un ion"], correctIndex: 1, explanation: "La carga elemental es e = 1.6×10⁻¹⁹ C, la carga de un electrón o protón.", difficulty: "basico" },
    { question: "Dos cargas de +3 μC y -2 μC están a 0.1 m. ¿Cuál es la fuerza?", options: ["5.4 N atracción", "5.4 N repulsión", "0.54 N", "54 N"], correctIndex: 0, explanation: "F = 9×10⁹×3×10⁻⁶×2×10⁻⁶/(0.1)² = 5.4 N. Como son opuestas, es atracción.", difficulty: "intermedio" },
    { question: "¿Qué es el campo eléctrico?", options: ["Una fuerza constante", "La fuerza por unidad de carga en un punto del espacio", "Un tipo de onda", "Una corriente"], correctIndex: 1, explanation: "E = F/q: la fuerza que experimentaría una carga de prueba positiva en ese punto.", difficulty: "intermedio" },
    { question: "¿Hacia dónde apuntan las líneas de campo eléctrico?", options: ["De negativo a positivo", "De positivo a negativo", "Siempre hacia arriba", "En círculos"], correctIndex: 1, explanation: "Las líneas de campo eléctrico van de cargas positivas a negativas.", difficulty: "intermedio" },
    { question: "Un electrón está a 10⁻¹⁰ m de un protón. ¿Cuál es la fuerza de Coulomb?", options: ["2.3×10⁻⁸ N", "2.3×10⁻¹⁸ N", "9×10⁹ N", "1.6×10⁻¹⁹ N"], correctIndex: 0, explanation: "F = 9×10⁹×(1.6×10⁻¹⁹)²/(10⁻¹⁰)² = 9×10⁹×2.56×10⁻³⁸/10⁻²⁰ = 2.3×10⁻⁸ N.", difficulty: "intermedio" },
    { question: "¿Qué es un aislante eléctrico?", options: ["Un material que conduce electricidad", "Un material que no permite el flujo de electrones", "Un metal", "Un semiconductor"], correctIndex: 1, explanation: "Los aislantes como el caucho, vidrio o plástico no permiten el flujo de carga libre.", difficulty: "intermedio" },
    { question: "¿Qué es la inducción electrostática?", options: ["Crear carga por frotamiento", "Polarizar un conductor acercando una carga sin tocarlo", "Destruir carga", "Crear un imán"], correctIndex: 1, explanation: "Una carga cercana atrae cargas opuestas y reparte las del mismo signo en el conductor.", difficulty: "intermedio" },
    { question: "¿Qué es un campo electrostático uniforme?", options: ["Un campo que cambia con el tiempo", "Un campo con misma dirección y magnitud en todas partes", "Un campo circular", "Un campo nulo"], correctIndex: 1, explanation: "Entre las placas de un capacitor existe un campo casi uniforme.", difficulty: "intermedio" },
    { question: "¿Qué es el potencial eléctrico en un punto?", options: ["La fuerza por unidad de carga", "La energía potencial por unidad de carga: V = k·q/r", "La corriente", "La resistencia"], correctIndex: 1, explanation: "El potencial mide cuánta energía por carga tiene un punto del campo eléctrico.", difficulty: "avanzado" },
    { question: "¿Qué es el voltaje entre dos puntos?", options: ["La corriente entre dos puntos", "La diferencia de potencial: ΔV = V₂ - V₁", "La resistencia", "La potencia"], correctIndex: 1, explanation: "El voltaje es la diferencia de potencial eléctrico entre dos puntos del circuito.", difficulty: "avanzado" },
    { question: "Mover 2 μC de carga a través de 100 V requiere un trabajo de:", options: ["0.2 mJ", "2 mJ", "50 J", "200 J"], correctIndex: 0, explanation: "W = q·ΔV = 2×10⁻⁶×100 = 2×10⁻⁴ J = 0.2 mJ.", difficulty: "avanzado" },
    { question: "¿Por qué los rayos tienden a golpear objetos puntiagudos?", options: ["Porque son más altos", "Porque la carga se concentra en las puntas, generando campo intenso", "Porque son metálicos", "Porque atraen la lluvia"], correctIndex: 1, explanation: "En superficies curvas con radio pequeño, la densidad de carga es mayor, intensificando el campo.", difficulty: "avanzado" },
    { question: "¿Qué es un capacitor?", options: ["Un dispositivo que almacena energía en un campo magnético", "Dos conductores separados por un aislante que almacenan carga", "Un resistor", "Un inductor"], correctIndex: 1, explanation: "Un capacitor almacena energía eléctrica en el campo entre dos placas conductoras.", difficulty: "avanzado" },
    { question: "¿Qué es la constante dieléctrica?", options: ["La resistividad del material", "Un factor que reduce el campo eléctrico dentro de un material", "La conductividad", "La permeabilidad"], correctIndex: 1, explanation: "Un dieléctrico entre las placas de un capacitor aumenta su capacidad al reducir el campo interno.", difficulty: "avanzado" },
    { question: "¿Qué es un pararrayos?", options: ["Un dispositivo que atrae relámpagos y los dirige a tierra", "Un aislante eléctrico", "Un generador de electricidad", "Un medidor de voltaje"], correctIndex: 0, explanation: "El pararrayos proporciona una ruta de baja resistencia para que la descarga vaya a tierra de forma segura.", difficulty: "avanzado" },
  ]
},
// MODULE 12: circuitos
{
  slug: "fi-circuitos", tip: "Ley de Ohm: V = I·R. La corriente busca el camino de menor resistencia.",
  theory: [
    { level: "basico", title: "Circuitos eléctricos básicos", lines: [
      "La corriente eléctrica es el flujo de electrones por un conductor.",
      "La intensidad se mide en Amperios (A).",
      "La resistencia se mide en Ohmios (Ω).",
      "La ley de Ohm: V = I·R relaciona voltaje, corriente y resistencia.",
      "En un circuito en serie, la corriente es la misma en todos los componentes."
    ]},
    { level: "intermedio", title: "Circuitos serie y paralelo", lines: [
      "En serie: R_total = R₁ + R₂ + R₃ + ...",
      "En paralelo: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...",
      "La suma de voltajes en serie es igual al voltaje de la fuente.",
      "En paralelo, cada rama tiene el mismo voltaje.",
      "La potencia eléctrica es P = V·I = I²·R = V²/R."
    ]},
    { level: "avanzado", title: "Análisis de circuitos", lines: [
      "Las leyes de Kirchhoff: ΣI_entrada = ΣI_salida en un nodo.",
      "ΣV en cualquier lazo cerrado es cero (ley de voltajes de Kirchhoff).",
      "El teorema de Thevenin simplifica cualquier circuito a una fuente y resistencia.",
      "El teorema de Norton simplifica a una fuente de corriente en paralelo.",
      "Los circuitos RC tienen constantes de tiempo τ = R·C."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué es la corriente eléctrica?", options: ["El flujo de electrones por un conductor", "La resistencia al paso de electricidad", "La fuerza entre dos cargas", "La energía almacenada"], correctIndex: 0, explanation: "La corriente es el movimiento ordenado de electrones a través de un material conductor.", difficulty: "basico" },
    { question: "¿Qué dice la ley de Ohm?", options: ["V = I²·R", "V = I·R", "I = V²·R", "R = V+I"], correctIndex: 1, explanation: "La ley de Ohm establece que el voltaje es igual a la corriente por la resistencia: V = IR.", difficulty: "basico" },
    { question: "¿Qué unidad mide la resistencia eléctrica?", options: ["Amperio", "Voltio", "Ohmio", "Watio"], correctIndex: 2, explanation: "El Ohmio (Ω) es la unidad de resistencia eléctrica.", difficulty: "basico" },
    { question: "Un resistor de 10 Ω tiene 2 A de corriente. ¿Cuál es el voltaje?", options: ["5 V", "10 V", "20 V", "12 V"], correctIndex: 2, explanation: "V = IR = 2×10 = 20 V.", difficulty: "basico" },
    { question: "¿Qué es un circuito en serie?", options: ["Todos los componentes en una sola línea", "Los componentes en varias ramas separadas", "Un circuito sin resistencia", "Un circuito sin fuente"], correctIndex: 0, explanation: "En serie, la corriente pasa por todos los componentes secuencialmente, sin ramificaciones.", difficulty: "basico" },
    { question: "En un circuito en serie con 3 resistores de 2 Ω cada uno, ¿cuál es R_total?", options: ["2 Ω", "6 Ω", "0.67 Ω", "8 Ω"], correctIndex: 1, explanation: "En serie: R_total = R₁ + R₂ + R₃ = 2 + 2 + 2 = 6 Ω.", difficulty: "basico" },
    { question: "¿Qué es un cortocircuito?", options: ["Un circuito con mucha resistencia", "Una conexión directa entre los bornes de la fuente sin resistencia", "Un circuito abierto", "Un circuito con fusible"], correctIndex: 1, explanation: "Un cortocircuito tiene resistencia extremadamente baja, generando corriente peligrosamente alta.", difficulty: "basico" },
    { question: "Dos resistores de 6 Ω en paralelo. ¿Cuál es R_total?", options: ["12 Ω", "3 Ω", "6 Ω", "1 Ω"], correctIndex: 1, explanation: "1/R = 1/6 + 1/6 = 2/6 → R = 3 Ω.", difficulty: "intermedio" },
    { question: "¿Cuál es la potencia disipada por un resistor de 5 Ω con 3 A?", options: ["1 W", "15 W", "45 W", "0.6 W"], correctIndex: 2, explanation: "P = I²R = 9×5 = 45 W.", difficulty: "intermedio" },
    { question: "En paralelo, ¿qué es constante entre las ramas?", options: ["La corriente", "El voltaje", "La resistencia", "La potencia"], correctIndex: 1, explanation: "En un circuito paralelo, cada rama tiene el mismo voltaje que la fuente.", difficulty: "intermedio" },
    { question: "¿Qué ley dice que la suma de corrientes que entran a un nodo iguala las que salen?", options: ["Ley de Ohm", "Primera ley de Kirchhoff (ley de nodos)", "Ley de Coulomb", "Segunda ley de Kirchhoff"], correctIndex: 1, explanation: "La primera ley de Kirchhoff (conservación de carga): ΣI_entrada = ΣI_salida.", difficulty: "intermedio" },
    { question: "Una batería de 12 V alimenta un circuito de 4 Ω. ¿Cuánta corriente fluye?", options: ["0.33 A", "3 A", "48 A", "8 A"], correctIndex: 1, explanation: "I = V/R = 12/4 = 3 A.", difficulty: "intermedio" },
    { question: "¿Qué es un fusible?", options: ["Un generador de corriente", "Un dispositivo que se funde si la corriente supera un límite, abriendo el circuito", "Un resistor variable", "Un interruptor"], correctIndex: 1, explanation: "El fusible protege el circuito al interrumpir la corriente si excede el valor seguro.", difficulty: "intermedio" },
    { question: "¿Qué es la segunda ley de Kirchhoff?", options: ["ΣI = 0 en un nodo", "ΣV = 0 en un lazo cerrado", "V = IR", "P = VI"], correctIndex: 1, explanation: "En cualquier lazo cerrado, la suma de voltajes es cero: las subidas igualan las bajadas.", difficulty: "intermedio" },
    { question: "¿Qué es el teorema de Thevenin?", options: ["Todo circuito se puede simplificar a una fuente de voltaje y una resistencia en serie", "Todo circuito se puede simplificar a una fuente de corriente", "La corriente es cero", "El voltaje es constante"], correctIndex: 0, explanation: "Thevenin: cualquier circuito lineal entre dos terminales equivale a una fuente Vth en serie con Rth.", difficulty: "avanzado" },
    { question: "¿Qué es una constante de tiempo RC?", options: ["El tiempo que tarda un capacitor en cargarse al 63%: τ = R·C", "El tiempo que tarda en descargarse completamente", "La frecuencia del circuito", "El periodo de oscilación"], correctIndex: 0, explanation: "τ = RC es el tiempo en que el capacitor alcanza ~63% de su carga final en un circuito RC.", difficulty: "avanzado" },
    { question: "¿Qué es un puente de Wheatstone?", options: ["Un puente para peatones", "Un circuito para medir resistencias desconocidas con precisión", "Un generador de corriente alterna", "Un tipo de resistor"], correctIndex: 1, explanation: "El puente de Wheatstone equilibra resistencias conocidas para medir la desconocida.", difficulty: "avanzado" },
    { question: "Un capacitor de 100 μF se carga con 10 V. ¿Cuánta energía almacena?", options: ["0.005 J", "0.05 J", "0.5 J", "5 J"], correctIndex: 0, explanation: "E = ½CV² = ½×100×10⁻⁶×100 = 5×10⁻³ J = 0.005 J.", difficulty: "avanzado" },
    { question: "¿Qué es un divisor de voltaje?", options: ["Un circuito que reduce la corriente", "Una combinación de resistores que proporciona un voltaje de salida proporcional", "Un multiplicador de voltaje", "Un circuito de potencia"], correctIndex: 1, explanation: "V_out = V_in × R₂/(R₁+R₂) en un divisor con dos resistores en serie.", difficulty: "avanzado" },
    { question: "¿Qué es un circuito de corriente alterna (CA)?", options: ["Uno con corriente constante", "Uno donde la corriente cambia de dirección periódicamente", "Uno sin resistencia", "Uno con voltaje constante"], correctIndex: 1, explanation: "En CA, la corriente oscila (usualmente a 50 o 60 Hz) cambiando de dirección.", difficulty: "avanzado" },
    { question: "¿Qué es la impedancia en un circuito CA?", options: ["Solo la resistencia", "La oposición total al flujo de corriente alterna (R, XL, XC)", "La corriente máxima", "El voltaje pico"], correctIndex: 1, explanation: "Z = √(R² + (XL-XC)²) combina resistencia, reactancia inductiva y capacitiva.", difficulty: "avanzado" },
  ]
},
// MODULE 13: magnetismo
{
  slug: "fi-magnetismo", tip: "Los polos iguales se repelen, opuestos se atraen. Campo magnético entra por el sur y sale por el norte.",
  theory: [
    { level: "basico", title: "Magnetismo básico", lines: [
      "Un imán tiene dos polos: norte (N) y sur (S).",
      "Los polos iguales se repelen y los opuestos se atraen.",
      "La Tierra actúa como un gigantesco imán con polo magnético cercano al geográfico sur.",
      "Los materiales ferromagnéticos como el hierro son atraídos por imanes.",
      "Un imán siempre tiene ambos polos; no existen monopolos magnéticos."
    ]},
    { level: "intermedio", title: "Campo magnético y fuerzas", lines: [
      "El campo magnético B se mide en Teslas (T).",
      "Una corriente eléctrica genera un campo magnético a su alrededor.",
      "La fuerza sobre una carga en movimiento es F = qv×B.",
      "La fuerza sobre un conductor con corriente es F = BIL·sin(θ).",
      "Las líneas de campo magnético van del polo norte al sur exteriormente."
    ]},
    { level: "avanzado", title: "Electromagnetismo", lines: [
      "Ley de Ampère: una corriente genera campo magnético proporcional a I.",
      "La fuerza magnética no realiza trabajo sobre cargas en movimiento.",
      "Los motores eléctricos usan fuerza magnética para producir movimiento.",
      "Los generadores usan inducción magnética para producir electricidad.",
      "La materia magnética se clasifica en diamagnética, paramagnética y ferromagnética."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué polos de un imán se atraen?", options: ["Norte-norte", "Sur-sur", "Norte-sur", "Todos se atraen"], correctIndex: 2, explanation: "Los polos opuestos (N y S) se atraen; los iguales se repelen.", difficulty: "basico" },
    { question: "¿Qué esfera actúa como un enorme imán?", options: ["La Luna", "El Sol", "La Tierra", "Júpiter"], correctIndex: 2, explanation: "La Tierra tiene un campo magnético debido al movimiento del hierro fundido en su núcleo.", difficulty: "basico" },
    { question: "¿Los monopolos magnéticos existen?", options: ["Sí, siempre", "No, todo imán tiene ambos polos", "Solo en el espacio", "Solo en imanes artificiales"], correctIndex: 1, explanation: "Nunca se ha observado un monopolo magnético aislado: si cortas un imán, obtienes dos imanes.", difficulty: "basico" },
    { question: "¿Qué unidad mide el campo magnético?", options: ["Amperio", "Newton", "Tesla", "Coulomb"], correctIndex: 2, explanation: "El Tesla (T) es la unidad de campo magnético en el SI.", difficulty: "basico" },
    { question: "¿Qué material es fuertemente atraído por un imán?", options: ["El plástico", "El vidrio", "El hierro", "La madera"], correctIndex: 2, explanation: "El hierro es ferromagnético y es fuertemente atraído y magnetizado por imanes.", difficulty: "basico" },
    { question: "¿Hacia dónde apuntan las líneas de campo magnético fuera de un imán?", options: ["Del sur al norte", "Del norte al sur", "De arriba abajo", "En círculos cerrados"], correctIndex: 1, explanation: "Exteriormente las líneas van del polo N al polo S del imán.", difficulty: "basico" },
    { question: "¿Qué descubrió Oersted?", options: ["La corriente genera campo magnético", "El magnetismo genera corriente", "La luz es una onda", "La gravedad es proporcional a la masa"], correctIndex: 0, explanation: "Oersted descubrió que una aguja magnética se desvía cerca de un cable con corriente.", difficulty: "basico" },
    { question: "Un cable carries 5 A de corriente en un campo de 0.2 T perpendicular. ¿Fuerza por metro?", options: ["0.1 N/m", "0.5 N/m", "1 N/m", "25 N/m"], correctIndex: 2, explanation: "F/L = B·I·sin(90°) = 0.2×5×1 = 1 N/m.", difficulty: "intermedio" },
    { question: "¿Qué es la regla de la mano derecha para campos magnéticos?", options: ["Determina la dirección del campo alrededor de un conductor", "Mide la intensidad del campo", "Calcula la fuerza", "Determina la polaridad"], correctIndex: 0, explanation: "Si apuntas el pulgar en la dirección de la corriente, los dedos curvados muestran el campo.", difficulty: "intermedio" },
    { question: "¿Qué es un solenoide?", options: ["Un cable recto", "Una bobina de alambre que genera un campo magnético interno uniforme", "Un imán permanente", "Un capacitor"], correctIndex: 1, explanation: "Un solenoide es una bobina que genera un campo magnético casi uniforme en su interior.", difficulty: "intermedio" },
    { question: "¿Qué es la fuerza de Lorentz?", options: ["La fuerza gravitacional", "La fuerza eléctrica sobre una carga", "La fuerza combinada eléctrica y magnética: F = qE + qv×B", "La fuerza de fricción"], correctIndex: 2, explanation: "La fuerza de Lorentz combina las fuerzas eléctrica y magnética sobre una carga en movimiento.", difficulty: "intermedio" },
    { question: "¿Qué es un motor eléctrico?", options: ["Un generador de electricidad", "Un dispositivo que convierte energía eléctrica en rotación usando fuerza magnética", "Un resistor", "Un interruptor"], correctIndex: 1, explanation: "Un motor usa la fuerza magnética sobre conductores con corriente para producir movimiento rotatorio.", difficulty: "intermedio" },
    { question: "¿Qué es un electroimán?", options: ["Un imán permanente", "Un imán que se activa y desactiva con corriente eléctrica", "Un imán de tierra rara", "Un imán natural"], correctIndex: 1, explanation: "Un electroimán usa una bobina con núcleo de hierro que se magnetiza al pasar corriente.", difficulty: "intermedio" },
    { question: "¿Qué es la permeabilidad magnética?", options: ["La resistencia al campo magnético", "Qué tan fácil es magnetizar un material", "La densidad de un material", "La conductividad"], correctIndex: 1, explanation: "La permeabilidad mide la capacidad de un material para soportar líneas de campo magnético.", difficulty: "avanzado" },
    { question: "¿Qué es el fenómeno de Hall?", options: ["Un aumento de temperatura", "Una diferencia de voltaje transversal en un conductor con corriente en campo magnético", "Un campo eléctrico", "Una onda electromagnética"], correctIndex: 1, explanation: "El efecto Hall genera un voltaje perpendicular a la corriente y al campo magnético.", difficulty: "avanzado" },
    { question: "¿Cómo funciona un altavoz?", options: ["Usa calor para producir sonido", "Una corriente variable en un campo magnético mueve un diafragma", "Usa luz para crear sonido", "Convierte presión en electricidad"], correctIndex: 1, explanation: "La corriente del audio en un campo magnético genera fuerzas que mueven el cono del altavoz.", difficulty: "avanzado" },
    { question: "¿Qué son los materiales diamagnéticos?", options: ["Los que son fuertemente magnetizados", "Los que generan un campo débil que se opone al campo aplicado", "Los que no interactúan con campos", "Los que conducen magnetismo"], correctIndex: 1, explanation: "Los diamagnéticos (como el bismuto) generan un campo débil opuesto al campo externo.", difficulty: "avanzado" },
    { question: "¿Qué son los materiales ferromagnéticos?", options: ["Los que se magnetizan fácilmente y retienen magnetismo", "Los que no se magnetizan", "Los que se oponen al magnetismo", "Los que solo funcionan a bajas temperaturas"], correctIndex: 0, explanation: "Los ferromagnéticos como el hierro, níquel y cobalto se magnetizan fuertemente y retienen magnetismo.", difficulty: "avanzado" },
    { question: "¿Qué es la histéresis magnética?", options: ["Un aumento de temperatura", "La demora en el cambio de magnetización al variar el campo externo", "Un campo constante", "Una corriente permanente"], correctIndex: 1, explanation: "La histéresis muestra que la magnetización depende no solo del campo actual sino de su historia.", difficulty: "avanzado" },
    { question: "¿Qué es un transformador?", options: ["Un generador de corriente", "Un dispositivo que cambia voltajes AC usando inducción entre dos bobinas", "Un motor eléctrico", "Un resistor variable"], correctIndex: 1, explanation: "Un transformador usa inducción mutua entre bobina primaria y secundaria para subir o bajar voltaje.", difficulty: "avanzado" },
  ]
},
// MODULE 14: induccion
{
  slug: "fi-induccion", tip: "Un campo magnético variable induce una corriente eléctrica (Faraday).",
  theory: [
    { level: "basico", title: "Inducción electromagnética", lines: [
      "Un campo magnético variable genera una corriente eléctrica en un conductor.",
      "Este fenómeno se llama inducción electromagnética.",
      "Faraday descubrió que la fuerza electromotriz inducida es proporcional al cambio de flujo.",
      "Los generadores eléctricos usan inducción para producir electricidad.",
      "Los transformadores usan inducción para cambiar voltajes."
    ]},
    { level: "intermedio", title: "Ley de Faraday y Lenz", lines: [
      "ε = -dΦ_B/dt calcula la fuerza electromotriz inducida.",
      "Φ_B = B·A·cos(θ) es el flujo magnético.",
      "La ley de Lenz: la corriente inducida se opone al cambio que la produce.",
      "Un imán que se acerca a una bobina induce una corriente que lo repele.",
      "La rapidez del cambio determina la magnitud de la fuerza inducida."
    ]},
    { level: "avanzado", title: "Aplicaciones de la inducción", lines: [
      "Los generadores convierten energía mecánica en eléctrica por inducción.",
      "El frenado regenerativo recupera energía en frenadas eléctricas.",
      "Las bobinas de Tesla producen altos voltajes por inducción.",
      "La cocción por inducción calienta metales con campos variables.",
      "La inducción mutua permite transferencia de energía sin contacto."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué descubrió Faraday?", options: ["La gravedad", "Que un campo magnético variable induce corriente eléctrica", "La ley de Ohm", "La conservación de energía"], correctIndex: 1, explanation: "Faraday descubrió que el cambio de flujo magnético genera fuerza electromotriz (inducción).", difficulty: "basico" },
    { question: "¿Qué es el flujo magnético?", options: ["La fuerza del campo magnético", "La cantidad de líneas de campo que atraviesan un área", "La velocidad del campo", "La energía del campo"], correctIndex: 1, explanation: "Φ_B = B·A·cos(θ) mide cuántas líneas de campo pasan a través de un área.", difficulty: "basico" },
    { question: "¿Qué dice la ley de Lenz?", options: ["La corriente inducida aumenta el campo", "La corriente inducida se opone al cambio que la produce", "La corriente siempre fluye en la misma dirección", "No hay corriente inducida"], correctIndex: 1, explanation: "Lenz: la naturaleza se opone al cambio; la corriente inducida crea un campo que se opone a la variación.", difficulty: "basico" },
    { question: "Si un imán se acerca a una bobina, ¿qué corriente se induce?", options: ["Ninguna", "Una que repele al imán", "Una que atrae al imán", "Una corriente constante"], correctIndex: 1, explanation: "Por Lenz, la corriente inducida genera un campo que se opone al acercamiento del imán.", difficulty: "basico" },
    { question: "¿Qué es un generador eléctrico?", options: ["Un resistor", "Un dispositivo que produce electricidad por inducción electromagnética", "Un capacitor", "Un transformador"], correctIndex: 1, explanation: "Un generador convierte energía mecánica (rotación) en eléctrica usando inducción.", difficulty: "basico" },
    { question: "¿Qué es la fuerza electromotriz (fem)?", options: ["Una fuerza mecánica", "Una diferencia de potencial inducida que impulsa la corriente", "Una corriente constante", "Una resistencia"], correctIndex: 1, explanation: "La fem no es una fuerza sino un voltaje inducido que causa flujo de corriente.", difficulty: "basico" },
    { question: "¿Por qué una centrales eléctricas rotan un imán dentro de bobinas?", options: ["Para enfriar el agua", "Para generar cambio de flujo magnético y producir electricidad por inducción", "Para crear campos estáticos", "Para medir voltaje"], correctIndex: 1, explanation: "La rotación crea cambio de flujo en las bobinas, induciendo fem y produciendo electricidad.", difficulty: "basico" },
    { question: "Un imán cae a través de una bobina. ¿Qué fem se induce?", options: ["Cero siempre", "Una fem que varía con la velocidad del imán", "Una fem constante", "Una fem negativa siempre"], correctIndex: 1, explanation: "La fem inducida es proporcional a la rapidez de cambio del flujo: ε = -dΦ/dt.", difficulty: "intermedio" },
    { question: "¿Qué relación tiene la fem inducida con el número de vueltas de la bobina?", options: ["No depende", "Es proporcional al número de vueltas", "Es inversamente proporcional", "Es constante"], correctIndex: 1, explanation: "ε = -N·dΦ/dt: más vueltas = mayor fem inducida.", difficulty: "intermedio" },
    { question: "¿Qué es el transformador ideal?", options: ["Uno que pierde energía", "Uno que cambia voltaje sin perder potencia: P_entrada = P_salida", "Uno que genera energía", "Uno de corriente continua"], correctIndex: 1, explanation: "En un transformador ideal, V₁I₁ = V₂I₂: no hay pérdidas.", difficulty: "intermedio" },
    { question: "Un transformador tiene relación 10:1 con 220 V de entrada. ¿Cuál es la salida?", options: ["22 V", "2200 V", "220 V", "110 V"], correctIndex: 0, explanation: "V_salida = V_entrada × (N₂/N₁) = 220 × (1/10) = 22 V.", difficulty: "intermedio" },
    { question: "¿Qué es el frenado regenerativo?", options: ["Frenos de disco", "Recuperar energía cinética convirtiéndola en eléctrica durante la frenada", "Frenos hidráulicos", "Frenos de aire"], correctIndex: 1, explanation: "Los vehículos eléctricos usan el motor como generador durante la frenada para recargar baterías.", difficulty: "intermedio" },
    { question: "¿Por qué los conductores no se acercan entre sí cuando transportan corriente en la misma dirección?", options: ["Se acercan realmente", "No, se atraen; la inducción los acerca", "Se repelen", "La fuerza es nula"], correctIndex: 1, explanation: "Dos conductores paralelos con corriente en el mismo sentido se atraen por fuerza magnética.", difficulty: "intermedio" },
    { question: "¿Qué es la autoinducción?", options: ["Inducción entre dos bobinas", "Una bobina que induce fem en sí misma al cambiar su propia corriente", "Un campo constante", "Una corriente constante"], correctIndex: 1, explanation: "La autoinducción genera una fem que se opone al cambio de corriente en la propia bobina.", difficulty: "intermedio" },
    { question: "¿Qué es la inducción mutua?", options: ["La bobina se carga sola", "El campo de una bobina induce corriente en otra cercana", "Un campo constante", "Una corriente constante"], correctIndex: 1, explanation: "La inducción mutua es el principio de los transformadores: el campo variable de una bobina induce fem en otra.", difficulty: "avanzado" },
    { question: "¿Qué es la inductancia?", options: ["La resistencia de un conductor", "La propiedad de una bobina que se opone a cambios de corriente: L = N·Φ/I", "La capacidad de un capacitor", "La conductividad"], correctIndex: 1, explanation: "La inductancia (L) mide cuánta fem se induce por cambio de corriente: ε = -L·dI/dt.", difficulty: "avanzado" },
    { question: "¿Qué es un inductor?", options: ["Un resistor", "Una bobina que almacena energía en su campo magnético", "Un capacitor", "Un generador"], correctIndex: 1, explanation: "Un inductor almacena energía en su campo magnético: E = ½LI².", difficulty: "avanzado" },
    { question: "¿Qué es la corriente de Foucault?", options: ["Corriente en un resistor", "Corrientes parasitarias inducidas en conductores sólidos por campos variables", "Una corriente constante", "Una corriente en un capacitor"], correctIndex: 1, explanation: "Las corrientes de Foucault generan calor en el metal, útiles para frenado pero indeseables en transformadores.", difficulty: "avanzado" },
    { question: "¿Cómo funciona la cocción por inducción?", options: ["Con llama directa", "Con campos magnéticos variables que inducen corriente en la olla metálica", "Con calor radiant", "Con microondas"], correctIndex: 1, explanation: "Una bobina debajo de la vitrocerámica genera campos que inducen corriente en el fondo metálico de la olla.", difficulty: "avanzado" },
    { question: "¿Qué es la Ley de Faraday expresada matemáticamente?", options: ["ε = IR", "ε = -N·dΦ/dt", "F = qv×B", "B = μ₀I/(2πr)"], correctIndex: 1, explanation: "La fem inducida es igual al producto del número de vueltas por la tasa de cambio del flujo.", difficulty: "avanzado" },
  ]
},
];

writeBatch('fi', 1, 'fiBatch1', modules.slice(0, 10));
writeBatch('fi', 2, 'fiBatch2', modules.slice(10, 14));
console.log(`Generated ${modules.length} modules total`);
