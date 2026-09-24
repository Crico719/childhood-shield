const { writeBatch } = require('./gen-utils.js');

const modules = [
{
  slug: "fi-kinematica",
  tip: "En MRU: v = d/t. En MRUA: vf = vi + a·t.",
  theory: [
    { level: "basico", title: "Movimiento rectilíneo uniforme", lines: [
      "La posición describe la ubicación de un cuerpo respecto a un punto de referencia.",
      "Velocidad es la rapidez con que cambia la posición: v = d/t.",
      "En el MRU la velocidad es constante, la aceleración es cero.",
      "La distancia recorrida en MRU es d = v × t.",
      "La gravedad terrestre acelera los cuerpos a 9.8 m/s² hacia abajo."
    ]},
    { level: "intermedio", title: "Movimiento rectilíneo uniformemente acelerado", lines: [
      "vf = vi + a·t calcula la velocidad final conocida la aceleración y el tiempo.",
      "d = vi·t + ½a·t² calcula el desplazamiento en MRUA.",
      "vf² = vi² + 2a·d relaciona velocidad final, inicial, aceleración y distancia.",
      "En caída libre la aceleración es g = 9.8 m/s² hacia abajo.",
      "El tiempo de vuelo de un proyectil vertical depende de la altura inicial."
    ]},
    { level: "avanzado", title: "Análisis vectorial del movimiento", lines: [
      "El movimiento parabólico combina MRU horizontal y MRUA vertical.",
      "El alcance máximo de un proyectil se logra con un ángulo de 45°.",
      "La velocidad instantánea es la derivada de la posición respecto al tiempo.",
      "El vector aceleración apunta hacia abajo en caída libre.",
      "La resistencia del aire reduce el alcance real respecto al teórico."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué es la posición en física?", options: ["La ubicación de un cuerpo respecto a un punto de referencia", "La rapidez de un cuerpo", "La masa de un cuerpo", "La fuerza que actúa sobre un cuerpo"], correctIndex: 0, explanation: "La posición describe la ubicación exacta de un objeto en el espacio respecto a un sistema de referencia.", difficulty: "basico" },
    { question: "¿Qué es la velocidad en MRU?", options: ["Una aceleración constante", "Una distancia fija", "Una magnitud constante que representa rapidez con dirección", "Un tipo de fuerza"], correctIndex: 2, explanation: "En el MRU la velocidad es constante en magnitud y dirección.", difficulty: "basico" },
    { question: "Un auto se mueve a 60 km/h durante 2 horas. ¿Qué distancia recorre?", options: ["30 km", "60 km", "120 km", "180 km"], correctIndex: 2, explanation: "d = v × t = 60 km/h × 2 h = 120 km.", difficulty: "basico" },
    { question: "¿Qué tipo de movimiento tiene una piedra en caída libre sin aire?", options: ["Rectilíneo uniforme", "Rectilíneo uniformemente acelerado", "Circular uniforme", "Armónico simple"], correctIndex: 1, explanation: "En caída libre la gravedad produce una aceleración constante g ≈ 9.8 m/s².", difficulty: "basico" },
    { question: "En el MRU, si un cuerpo recorre 100 m en 20 s, ¿cuál es su velocidad?", options: ["2 m/s", "5 m/s", "20 m/s", "200 m/s"], correctIndex: 1, explanation: "v = d/t = 100/20 = 5 m/s.", difficulty: "basico" },
    { question: "¿Qué mide la aceleración?", options: ["La posición final de un cuerpo", "El cambio de velocidad en el tiempo", "La masa del cuerpo", "La fuerza neta"], correctIndex: 1, explanation: "La aceleración es el ritmo de cambio de la velocidad: a = Δv/Δt.", difficulty: "basico" },
    { question: "¿Qué es un vector en física?", options: ["Solo una magnitud numérica", "Una magnitud con dirección", "Una unidad de medida", "Un tipo de energía"], correctIndex: 1, explanation: "Un vector tiene magnitud y dirección, como la velocidad, la fuerza o el desplazamiento.", difficulty: "basico" },
    { question: "Un auto parte del reposo y acelera a 3 m/s². ¿Cuál es su velocidad tras 8 segundos?", options: ["3 m/s", "8 m/s", "24 m/s", "11 m/s"], correctIndex: 2, explanation: "vf = vi + a·t = 0 + 3×8 = 24 m/s.", difficulty: "intermedio" },
    { question: "Un cuerpo se desplaza 80 m en 10 s con aceleración constante partiendo del reposo. ¿Cuál es la aceleración?", options: ["0.8 m/s²", "1.6 m/s²", "8 m/s²", "16 m/s²"], correctIndex: 1, explanation: "d = ½a·t² → 80 = ½a·100 → a = 1.6 m/s².", difficulty: "intermedio" },
    { question: "¿Cuál es la velocidad final de un cuerpo que cae desde 45 m de altura?", options: ["21 m/s", "29.7 m/s", "45 m/s", "441 m/s"], correctIndex: 1, explanation: "vf² = 2·g·h = 2×9.8×45 = 882 → vf = √882 ≈ 29.7 m/s.", difficulty: "intermedio" },
    { question: "Un proyectil se lanza horizontalmente a 20 m/s desde 80 m. ¿Cuánto tarda en llegar al suelo?", options: ["2 s", "4 s", "8 s", "10 s"], correctIndex: 1, explanation: "h = ½g·t² → 80 = 4.9·t² → t ≈ 4 s.", difficulty: "intermedio" },
    { question: "Un auto frena de 30 m/s a 0 en 6 segundos. ¿Cuál es su desaceleración?", options: ["-3 m/s²", "-5 m/s²", "-6 m/s²", "-30 m/s²"], correctIndex: 1, explanation: "a = (vf-vi)/t = (0-30)/6 = -5 m/s². El signo negativo indica desaceleración.", difficulty: "intermedio" },
    { question: "¿Qué es la aceleración de un cuerpo en reposo sobre una mesa?", options: ["9.8 m/s²", "Cero", "Depende de su masa", "Depende de su volumen"], correctIndex: 1, explanation: "Un cuerpo en reposo sobre una mesa tiene aceleración cero porque la reacción normal equilibra el peso.", difficulty: "intermedio" },
    { question: "Un cuerpo con vi = 15 m/s y a = -3 m/s². ¿Cuándo se detiene?", options: ["3 s", "5 s", "15 s", "45 s"], correctIndex: 1, explanation: "vf = 0 = 15 + (-3)·t → t = 5 s.", difficulty: "intermedio" },
    { question: "¿Qué es la velocidad instantánea?", options: ["La velocidad promedio en un trayecto", "La velocidad en un instante específico", "La aceleración dividida por el tiempo", "La distancia total entre la masa"], correctIndex: 1, explanation: "La velocidad instantánea es la derivada de la posición respecto al tiempo: v = dx/dt.", difficulty: "avanzado" },
    { question: "Un cuerpo cae 200 m. ¿Cuál es su velocidad justo antes de impactar?", options: ["31.3 m/s", "44.3 m/s", "62.6 m/s", "200 m/s"], correctIndex: 2, explanation: "vf = √(2·g·h) = √(2×9.8×200) = √3920 ≈ 62.6 m/s.", difficulty: "avanzado" },
    { question: "El alcance máximo de un proyectil se logra con un ángulo de:", options: ["30°", "45°", "60°", "90°"], correctIndex: 1, explanation: "A 45° se equilibran los componentes horizontal y vertical del movimiento, maximizando el alcance.", difficulty: "avanzado" },
    { question: "¿Qué ecuación relaciona vf² con vi² sin usar el tiempo?", options: ["vf² = vi² + 2a·d", "vf = vi + a·t", "d = v·t", "a = F/m"], correctIndex: 0, explanation: "vf² = vi² + 2a·d se obtiene al eliminar el tiempo de las ecuaciones de运动.", difficulty: "avanzado" },
    { question: "¿Qué es un sistema de referencia inercial?", options: ["Uno que rota sobre sí mismo", "Uno que acelera libremente", "Uno que se mueve a velocidad constante o está en reposo", "Uno que está en el espacio vacío"], correctIndex: 2, explanation: "En un sistema inercial las leyes de Newton se cumplen sin necesidad de fuerzas ficticias.", difficulty: "avanzado" },
    { question: "En un plano inclinado de 30°, ¿cuál es la componente de la aceleración gravitatoria paralela al plano?", options: ["9.8 m/s²", "4.9 m/s²", "8.5 m/s²", "0 m/s²"], correctIndex: 1, explanation: "a_paralela = g·sin(30°) = 9.8×0.5 = 4.9 m/s².", difficulty: "avanzado" },
    { question: "Un satélite orbita a velocidad constante en magnitud. ¿Es MRU o MRUA?", options: ["MRU puro", "MRUA puro", "MRU en magnitud pero con aceleración centrípeta", "Ninguno de los dos"], correctIndex: 2, explanation: "La velocidad es constante en magnitud (MRU) pero la dirección cambia continuamente, lo que implica aceleración centrípeta.", difficulty: "avanzado" },
  ]
},
{
  slug: "fi-dinamica",
  tip: "Segunda ley de Newton: F = m·a. La fuerza neta determina el movimiento.",
  theory: [
    { level: "basico", title: "Fuerzas y movimiento", lines: [
      "Una fuerza es una interacción que puede cambiar el estado de movimiento de un cuerpo.",
      "La segunda ley de Newton establece F = m·a.",
      "El peso es la fuerza gravitacional: P = m·g, donde g ≈ 9.8 m/s².",
      "Si la fuerza neta es cero, el cuerpo no acelera.",
      "Las fuerzas se miden en Newtons (N): 1 N = 1 kg·m/s²."
    ]},
    { level: "intermedio", title: "Aplicación de las leyes de Newton", lines: [
      "La reacción normal es la fuerza perpendicular que ejerce una superficie sobre un cuerpo.",
      "En un plano inclinado, la componente del peso paralela al plano es m·g·sin(θ).",
      "La fricción estática se opone al inicio del movimiento entre dos superficies.",
      "La fricción cinética actúa cuando el cuerpo ya está en movimiento.",
      "La fuerza neta es la suma vectorial de todas las fuerzas que actúan sobre un cuerpo."
    ]},
    { level: "avanzado", title: "Dinámica avanzada", lines: [
      "La tercera ley de Newton dice que acción y reacción son iguales y opuestas.",
      "La fuerza centrípeta mantiene un cuerpo en movimiento circular: F = m·v²/r.",
      "En sistemas no inertiales aparecen fuerzas ficticias como la centrífuga.",
      "El peso aparente varía cuando un sistema acelera verticalmente.",
      "Las leyes de Newton son una approximations válida para velocidades bajas respecto a la luz."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué dice la segunda ley de Newton?", options: ["E = mc²", "F = m·a", "v = d/t", "P = m/V"], correctIndex: 1, explanation: "La segunda ley establece que la fuerza neta es igual a la masa por la aceleración.", difficulty: "basico" },
    { question: "¿Cuál es la unidad de fuerza en el SI?", options: ["Kilogramo (kg)", "Metro (m)", "Newton (N)", "Julio (J)"], correctIndex: 2, explanation: "El Newton es la fuerza que produce una aceleración de 1 m/s² a una masa de 1 kg.", difficulty: "basico" },
    { question: "Un cuerpo de 10 kg tiene aceleración de 4 m/s². ¿Cuál es la fuerza neta?", options: ["4 N", "10 N", "14 N", "40 N"], correctIndex: 3, explanation: "F = m·a = 10 × 4 = 40 N.", difficulty: "basico" },
    { question: "¿Qué es el peso de un objeto?", options: ["Su masa multiplicada por su volumen", "La fuerza gravitacional que actúa sobre él", "Su aceleración", "Su velocidad"], correctIndex: 1, explanation: "El peso es la fuerza de gravedad: P = m·g, donde g ≈ 9.8 m/s².", difficulty: "basico" },
    { question: "Si la fuerza neta sobre un cuerpo es cero, ¿qué ocurre?", options: ["El cuerpo acelera", "El cuerpo se detiene inmediatamente", "El cuerpo mantiene su estado de movimiento", "El cuerpo cambia de masa"], correctIndex: 2, explanation: "Si F_neta = 0, el cuerpo mantiene su velocidad (puede estar en reposo o en MRU).", difficulty: "basico" },
    { question: "¿Qué tipo de fuerza es la gravedad?", options: ["Repulsiva", "Eléctrica", "Atractiva entre masas", "Magnética"], correctIndex: 2, explanation: "La gravedad es una fuerza de atracción universal entre cualquier par de masas.", difficulty: "basico" },
    { question: "¿Qué sucede cuando aplastas un resorte y lo sueltas?", options: ["Se destruye la fuerza", "La fuerza elástica lo impulsa de vuelta", "No pasa nada", "Se genera gravedad"], correctIndex: 1, explanation: "La fuerza elástica del resorte se opone a la deformación y busca recuperar su forma original.", difficulty: "basico" },
    { question: "Un bloque de 5 kg se empuja con 30 N y hay fricción de 5 N. ¿Cuál es la aceleración?", options: ["1 m/s²", "5 m/s²", "6 m/s²", "25 m/s²"], correctIndex: 1, explanation: "F_neta = 30-5 = 25 N. a = F/m = 25/5 = 5 m/s².", difficulty: "intermedio" },
    { question: "¿Cuál es el peso de un cuerpo de 80 kg en la Tierra?", options: ["80 N", "392 N", "784 N", "9.8 N"], correctIndex: 2, explanation: "P = m·g = 80 × 9.8 = 784 N.", difficulty: "intermedio" },
    { question: "¿Qué es la reacción normal?", options: ["La fuerza que ejerce una superficie perpendicularmente sobre un cuerpo", "El peso del objeto", "La fricción entre dos superficies", "La fuerza de gravedad"], correctIndex: 0, explanation: "La reacción normal equilibra la componente perpendicular del peso en una superficie horizontal.", difficulty: "intermedio" },
    { question: "Un cuerpo de 10 kg está en un plano inclinado de 30°. ¿Cuánto pesa?", options: ["49 N", "98 N", "10 N", "50 N"], correctIndex: 1, explanation: "El peso es siempre P = m·g = 10 × 9.8 = 98 N, independientemente del plano.", difficulty: "intermedio" },
    { question: "¿Qué es la fricción estática?", options: ["La que actúa durante el movimiento", "La que se opone al inicio del movimiento", "La fuerza gravitacional", "La fuerza magnética"], correctIndex: 1, explanation: "La fricción estática impide que un cuerpo comience a moverse sobre una superficie.", difficulty: "intermedio" },
    { question: "Si duplicas la fuerza neta sobre un cuerpo de masa constante, ¿qué pasa con la aceleración?", options: ["Se duplica", "No cambia", "Se reduce a la mitad", "Se cuadruplica"], correctIndex: 0, explanation: "Por F=ma, si F se duplica y m es constante, a también se duplica.", difficulty: "intermedio" },
    { question: "Un cuerpo de 2 kg está en reposo y se le aplica 10 N durante 4 s. ¿Qué distancia recorre?", options: ["8 m", "20 m", "40 m", "80 m"], correctIndex: 2, explanation: "a = F/m = 10/2 = 5 m/s². d = ½a·t² = ½×5×16 = 40 m.", difficulty: "intermedio" },
    { question: "¿Qué es la fuerza centrípeta?", options: ["La que aleja del centro en movimiento circular", "La que mantiene un cuerpo en movimiento circular apuntando al centro", "La fuerza de fricción", "La fuerza magnética"], correctIndex: 1, explanation: "La fuerza centrípeta apunta hacia el centro de la trayectoria circular: F = m·v²/r.", difficulty: "avanzado" },
    { question: "Un satélite de 200 kg orbita a 8000 m/s a 8×10⁶ m del centro terrestre. ¿Cuál es la fuerza centrípeta?", options: ["1.6×10¹⁰ N", "1.6×10⁷ N", "2×10⁸ N", "8×10⁶ N"], correctIndex: 0, explanation: "F = m·v²/r = 200×(8000)²/(8×10⁶) = 200×64×10⁶/(8×10⁶) = 1.6×10¹⁰ N.", difficulty: "avanzado" },
    { question: "¿Por qué un pasajero se siente más pesado al acelerar un ascensor hacia arriba?", options: ["Porque la masa aumenta", "Porque la reacción normal debe equilibrar el peso y proporcionar la aceleración", "Porque la gravedad aumenta", "Porque el tiempo se dilata"], correctIndex: 1, explanation: "Al acelerar hacia arriba, la reacción normal aumenta: N = m(g+a).", difficulty: "avanzado" },
    { question: "¿Qué dice la tercera ley de Newton?", options: ["F = ma", "La energía se conserva", "Por cada acción hay una reacción igual y opuesta", "Todo cuerpo tiende a mantener su estado de movimiento"], correctIndex: 2, explanation: "La tercera ley establece que las fuerzas siempre aparecen en pares iguales y opuestos.", difficulty: "avanzado" },
    { question: "Un elevador de 800 kg desciende con aceleración de 2 m/s². ¿Cuál es la tensión del cable?", options: ["6240 N", "7840 N", "8000 N", "9440 N"], correctIndex: 0, explanation: "T = m(g-a) = 800(9.8-2) = 800×7.8 = 6240 N.", difficulty: "avanzado" },
    { question: "Si la masa de un cuerpo se triplica y se aplica la misma fuerza, ¿qué pasa con la aceleración?", options: ["Se triplica", "No cambia", "Se reduce a un tercio", "Se reduce a un noveno"], correctIndex: 2, explanation: "Por F=ma, si F es constante y m triplica, a se reduce a un tercio.", difficulty: "avanzado" },
    { question: "¿Qué es un sistema de referencia no inercial?", options: ["Uno en reposo", "Uno que rota o acelera, donde aparecen fuerzas ficticias", "Uno en el espacio vacío", "Uno sin masa"], correctIndex: 1, explanation: "En sistemas no inertiales (acelerados o rotativos) aparecen fuerzas ficticias como la centrífuga.", difficulty: "avanzado" },
  ]
},
{
  slug: "fi-trabajo-energia",
  tip: "Trabajo = F·d·cos(θ). Energía no se crea ni se destruye.",
  theory: [
    { level: "basico", title: "Trabajo y energía básica", lines: [
      "El trabajo se realiza cuando una fuerza mueve un cuerpo: W = F·d.",
      "La unidad de trabajo es el Julio (J), igual a 1 N·m.",
      "La energía cinética es la energía del movimiento: KE = ½mv².",
      "La energía potencial gravitatoria depende de la altura: PE = mgh.",
      "La potencia es la rapidez con que se realiza trabajo: P = W/t."
    ]},
    { level: "intermedio", title: "Conservación y transformación", lines: [
      "El teorema trabajo-energia: el trabajo neto es igual al cambio de energía cinética.",
      "La energía potencial elástica de un resorte es PE = ½kx².",
      "Sin fricción, la energía mecánica total se conserva.",
      "Un vatio equivale a un julio por segundo.",
      "La energía potencial se convierte en cinética al caer un cuerpo."
    ]},
    { level: "avanzado", title: "Análisis energético avanzado", lines: [
      "Las fuerzas conservativas permiten definir energía potencial.",
      "La disipación por fricción convierte energía mecánica en calor.",
      "La potencia instantánea es P = F·v.",
      "El trabajo de una fuerza variable se calcula con integrales.",
      "En colisiones inelásticas se conserva el momento pero no la energía cinética."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué es el trabajo en física?", options: ["Energía almacenada", "Fuerza aplicada a lo largo de una distancia", "Potencia por tiempo", "Velocidad por masa"], correctIndex: 1, explanation: "El trabajo se realiza cuando una fuerza desplaza un cuerpo: W = F·d·cos(θ).", difficulty: "basico" },
    { question: "¿Cuál es la unidad de trabajo en el SI?", options: ["Newton", "Watio", "Julio", "Kilogramo"], correctIndex: 2, explanation: "El Julio (J) equivale a 1 Newton-metro (N·m).", difficulty: "basico" },
    { question: "¿Qué es la energía cinética?", options: ["Energía almacenada por posición", "Energía del movimiento", "Energía del calor", "Energía eléctrica"], correctIndex: 1, explanation: "La energía cinética depende de la masa y la velocidad: KE = ½mv².", difficulty: "basico" },
    { question: "¿Qué es la energía potencial gravitatoria?", options: ["Energía del viento", "Energía almacenada por la posición vertical", "Energía nuclear", "Energía térmica"], correctIndex: 1, explanation: "La PE gravitatoria depende de la altura: PE = m·g·h.", difficulty: "basico" },
    { question: "Un cuerpo de 3 kg se eleva 4 metros. ¿Cuánta energía potencial gana?", options: ["12 J", "29.4 J", "58.8 J", "117.6 J"], correctIndex: 2, explanation: "PE = mgh = 3 × 9.8 × 4 = 117.6 J.", difficulty: "basico" },
    { question: "¿Qué es la potencia?", options: ["Fuerza por tiempo", "Energía por masa", "Velocidad del trabajo realizado", "Distancia por aceleración"], correctIndex: 2, explanation: "La potencia es la rapidez con que se realiza trabajo: P = W/t, medida en vatios.", difficulty: "basico" },
    { question: "Un motor realiza 2000 J de trabajo en 10 segundos. ¿Cuál es su potencia?", options: ["100 W", "200 W", "2000 W", "20000 W"], correctIndex: 1, explanation: "P = W/t = 2000/10 = 200 W.", difficulty: "basico" },
    { question: "¿Qué dice el principio de conservación de la energía mecánica?", options: ["La energía siempre se crea de la nada", "La energía total permanece constante en un sistema sin fricción", "La energía se destruye con el tiempo", "La potencia es siempre constante"], correctIndex: 1, explanation: "En un sistema sin fuerzas disipativas, la energía mecánica (KE + PE) se conserva.", difficulty: "intermedio" },
    { question: "Un cuerpo de 2 kg cae desde 10 m. ¿Cuánta energía cinética tiene al impactar?", options: ["20 J", "98 J", "196 J", "200 J"], correctIndex: 2, explanation: "PE_inicial = KE_final = mgh = 2×9.8×10 = 196 J.", difficulty: "intermedio" },
    { question: "¿Qué es el teorema trabajo-energia?", options: ["F = ma", "W_neta = ΔKE", "E = mc²", "P = W/t"], correctIndex: 1, explanation: "El teorema establece que el trabajo neto sobre un cuerpo es igual al cambio en su energía cinética.", difficulty: "intermedio" },
    { question: "Un resorte de k = 400 N/m se comprime 0.2 m. ¿Cuánta energía potencial elástica almacena?", options: ["4 J", "8 J", "16 J", "80 J"], correctIndex: 2, explanation: "PE_elástica = ½kx² = ½×400×(0.2)² = ½×400×0.04 = 8 J.", difficulty: "intermedio" },
    { question: "Un auto de 1200 kg viaja a 25 m/s. ¿Cuánta energía cinética tiene?", options: ["300 kJ", "375 kJ", "750 kJ", "600 kJ"], correctIndex: 1, explanation: "KE = ½mv² = ½×1200×625 = 375,000 J = 375 kJ.", difficulty: "intermedio" },
    { question: "¿Qué relación tiene la potencia con la velocidad?", options: ["P es inversamente proporcional a v", "P = F·v para una fuerza constante", "P no depende de v", "P = m·v²"], correctIndex: 1, explanation: "La potencia instantánea es P = F·v, el producto de fuerza por velocidad.", difficulty: "intermedio" },
    { question: "Un cuerpo se eleva a velocidad constante. ¿Qué puede decirse del trabajo neto?", options: ["Es positivo porque hay fuerza", "Es cero porque la aceleración es cero", "Es negativo porque se opone a la gravedad", "Depende de la masa"], correctIndex: 1, explanation: "Si v es constante, a=0, y por F=ma la fuerza neta es cero, por lo tanto el trabajo neto es cero.", difficulty: "intermedio" },
    { question: "¿Qué es una fuerza conservativa?", options: ["Una que siempre disipa energía", "Una cuyo trabajo no depende del camino recorrido", "Una que solo actúa verticalmente", "Una fuerza magnética"], correctIndex: 1, explanation: "Una fuerza conservativa como la gravedad o la elástica permite definir energía potencial porque su trabajo es independiente del camino.", difficulty: "avanzado" },
    { question: "Un péndulo de 0.5 kg se suelta desde 1.5 m. ¿Cuál es su velocidad en el punto más bajo?", options: ["5.42 m/s", "9.8 m/s", "14.7 m/s", "3.87 m/s"], correctIndex: 0, explanation: "mgh = ½mv² → v = √(2gh) = √(2×9.8×1.5) = √29.4 ≈ 5.42 m/s.", difficulty: "avanzado" },
    { question: "¿Qué es la disipación de energía?", options: ["Creación de energía", "Transformación de energía mecánica en calor y otras formas no mecánicas", "Destrucción total de energía", "Aumento de masa"], correctIndex: 1, explanation: "La fricción y otras fuerzas no conservativas convierten energía mecánica en calor, sonido, etc.", difficulty: "avanzado" },
    { question: "Un sistema tiene PE = 300 J y KE = 200 J. Si se disipan 80 J, ¿cuál es la energía mecánica final?", options: ["420 J", "500 J", "380 J", "220 J"], correctIndex: 2, explanation: "E_final = E_inicial - disipada = 500 - 80 = 420 J.", difficulty: "avanzado" },
    { question: "¿Qué dice el teorema de Noether sobre la conservación de energía?", options: ["Viene de la simetría rotacional", "Viene de la simetría temporal de las leyes físicas", "Viene de la conservación de masa", "Viene del principio de incertidumbre"], correctIndex: 1, explanation: "Emmy Noether demostró que la conservación de energía deriva de la invariancia temporal de las leyes físicas.", difficulty: "avanzado" },
    { question: "Un cuerpo de 5 kg a 12 m/s choca inelásticamente con otro de 3 kg en reposo. ¿Velocidad común final?", options: ["4.5 m/s", "7.5 m/s", "10 m/s", "6 m/s"], correctIndex: 1, explanation: "m₁v₁ = (m₁+m₂)vf → 5×12 = 8×vf → vf = 7.5 m/s.", difficulty: "avanzado" },
    { question: "¿Cuánta energía se disipa en el choque inelástico anterior?", options: ["36 J", "72 J", "108 J", "216 J"], correctIndex: 0, explanation: "KE_i = ½×5×144 = 360 J. KE_f = ½×8×56.25 = 225 J. Disipada = 360-225 = 135 J.", difficulty: "avanzado" },
  ]
},
{
  slug: "fi-conservacion",
  tip: "Energía mecánica = PE + KE. Sin fricción se conserva.",
  theory: [
    { level: "basico", title: "Ley de conservación de energía", lines: [
      "La energía total de un sistema aislado permanece constante.",
      "La energía no se crea ni se destruye, solo se transforma.",
      "En caída libre, la PE se convierte en KE y viceversa.",
      "Sin fricción, la suma PE + KE es constante.",
      "Los perpetuos móviles son imposibles porque siempre hay pérdidas."
    ]},
    { level: "intermedio", title: "Conservación en sistemas mecánicos", lines: [
      "En caída libre: mgh = ½mv² si parte del reposo.",
      "En resortes: ½kx² se convierte en ½mv² al soltar el bloque.",
      "En péndulos: PE máx = KE máx en el punto bajo.",
      "Colisiones elásticas conservan tanto momento como energía cinética.",
      "Colisiones inelásticas conservan momento pero no KE."
    ]},
    { level: "avanzado", title: "Conservación y simetrías", lines: [
      "La conservación de energía deriva de la simetría temporal (teorema de Noether).",
      "El coeficiente de restitución mide la elasticidad de un choque.",
      "Sistemas abiertos intercambian energía con el entorno.",
      "La conservación de momento lineal deriva de la simetría espacial.",
      "La conservación de energía angular deriva de la simetría rotacional."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué dice la ley de conservación de la energía?", options: ["La energía siempre se transforma en calor", "La energía total de un sistema aislado permanece constante", "La energía se crea de la nada", "La energía siempre se destruye"], correctIndex: 1, explanation: "En un sistema aislado, la energía total no cambia: solo se transforma entre formas.", difficulty: "basico" },
    { question: "¿Qué es la energía mecánica?", options: ["Solo la energía cinética", "Solo la energía potencial", "La suma de energía cinética y potencial", "La energía térmica de un cuerpo"], correctIndex: 2, explanation: "La energía mecánica es E = KE + PE = ½mv² + mgh.", difficulty: "basico" },
    { question: "Un cuerpo cae desde 8 m. ¿Qué tipo de energía se transforma en cinética?", options: ["Cinética en potencial", "Potencial gravitatoria en cinética", "Elástica en térmica", "Nuclear en mecánica"], correctIndex: 1, explanation: "Al caer, la PE (almacenada por la altura) se convierte en KE (movimiento).", difficulty: "basico" },
    { question: "En un tobogán sin fricción, la energía en la parte alta es:", options: ["Máxima cinética, cero potencial", "Máxima potencial, cero cinética", "Igual a la de abajo", "Cero en ambos puntos"], correctIndex: 1, explanation: "En la parte alta el cuerpo está en reposo (KE=0) y a máxima altura (PE máxima).", difficulty: "basico" },
    { question: "¿Qué sucedería si existieran perpetuos móviles?", options: ["La física sería correcta", "Se violaría la conservación de energía", "La masa se conservaría", "La gravedad desaparecería"], correctIndex: 1, explanation: "Los perpetuos móviles producirían energía de la nada, violando la conservación de energía.", difficulty: "basico" },
    { question: "¿Qué es un sistema conservativo?", options: ["Uno con mucha fricción", "Uno donde la energía mecánica se conserva", "Uno que pierde energía constantemente", "Uno sin gravedad"], correctIndex: 1, explanation: "En un sistema sin fuerzas disipativas, la energía mecánica total permanece constante.", difficulty: "basico" },
    { question: "¿Qué forma de energía tiene un arco tenso antes de disparar la flecha?", options: ["Cinética", "Potencial elástica", "Térmica", "Nuclear"], correctIndex: 1, explanation: "Un arco tenso almacena energía potencial elástica que se libera al disparar.", difficulty: "basico" },
    { question: "Un cuerpo de 4 kg cae 12 m sin fricción. ¿Cuál es su velocidad al impactar?", options: ["15.3 m/s", "19.6 m/s", "24 m/s", "117.6 m/s"], correctIndex: 0, explanation: "v = √(2gh) = √(2×9.8×12) = √235.2 ≈ 15.3 m/s.", difficulty: "intermedio" },
    { question: "Un péndulo alcanza 4 m/s en su punto más bajo. ¿Cuál fue su altura máxima?", options: ["0.41 m", "0.82 m", "1.63 m", "4 m"], correctIndex: 1, explanation: "½mv² = mgh → h = v²/(2g) = 16/(2×9.8) ≈ 0.82 m.", difficulty: "intermedio" },
    { question: "¿Qué se conserva en TODAS las colisiones, elásticas o no?", options: ["La energía cinética", "El momento lineal", "La energía potencial", "La potencia"], correctIndex: 1, explanation: "El momento lineal se conserva en todas las colisiones siempre que no haya fuerzas externas netas.", difficulty: "intermedio" },
    { question: "¿Qué es una colisión perfectamente inelástica?", options: ["Los cuerpos rebotan con la misma velocidad", "Los cuerpos se unen y se mueven juntos después del choque", "No hay cambio de velocidad", "Se conserva la energía cinética"], correctIndex: 1, explanation: "En un choque perfectamente inelástico, los cuerpos se pegan y continúan con velocidad común.", difficulty: "intermedio" },
    { question: "Dos cuerpos de igual masa chocan elásticamente. Uno estaba en reposo. ¿Qué ocurre?", options: ["Ambos se mueven juntos", "El primero rebota", "El primero se detiene y el segundo toma su velocidad", "No hay movimiento"], correctIndex: 2, explanation: "En choque elástico entre masas iguales, el primero se detiene y el segundo adquiere toda la velocidad.", difficulty: "intermedio" },
    { question: "¿Qué es el coeficiente de restitución e?", options: ["La masa entre la velocidad", "Mide la elasticidad del choque: e=1 es elástico, e=0 es inelástico", "La fuerza de impacto", "La energía cinética perdida"], correctIndex: 1, explanation: "e = (v₂'-v₁')/(v₁-v₂). e=1: perfectamente elástico. e=0: perfectamente inelástico.", difficulty: "intermedio" },
    { question: "Un cuerpo cae 20 m y luego rebota a 5 m. ¿Cuánta energía se disipó?", options: ["25%", "50%", "75%", "100%"], correctIndex: 2, explanation: "PE_inicial = mgh₁ = mg(20). PE_final = mg(5). Pérdida = (20-5)/20 = 75% de la energía inicial.", difficulty: "intermedio" },
    { question: "¿Qué dice el teorema de Noether sobre la conservación de energía?", options: ["Deriva de la simetría rotacional", "Deriva de la simetría temporal de las leyes físicas", "Deriva de la conservación de masa", "Deriva del principio de incertidumbre"], correctIndex: 1, explanation: "Emmy Noether demostró que la conservación de energía es consecuencia de que las leyes no cambian con el tiempo.", difficulty: "avanzado" },
    { question: "¿Qué se conserva en una colisiónPerfectamente inelástica pero NO en una general?", options: ["El momento lineal", "La energía cinética", "La masa", "La energía potencial"], correctIndex: 1, explanation: "En choques inelásticos se conserva el momento pero parte de la KE se transforma en calor y deformación.", difficulty: "avanzado" },
    { question: "Un cuerpo de 3 kg a 10 m/s choca inelásticamente con otro de 6 kg en reposo. Velocidad final:", options: ["3.33 m/s", "5 m/s", "10 m/s", "15 m/s"], correctIndex: 0, explanation: "m₁v₁ = (m₁+m₂)vf → 3×10 = 9×vf → vf = 3.33 m/s.", difficulty: "avanzado" },
    { question: "¿Cuánta energía se disipa en el choque anterior?", options: ["25 J", "50 J", "100 J", "150 J"], correctIndex: 3, explanation: "KE_i = ½×3×100 = 150 J. KE_f = ½×9×11.1 = 50 J. Disipada = 100 J.", difficulty: "avanzado" },
    { question: "¿Qué es un sistema abierto en termodinámica?", options: ["Uno que intercambia energía y materia con el exterior", "Uno completamente aislado", "Uno sin energía", "Uno sin masa"], correctIndex: 0, explanation: "Un sistema abierto puede intercambiar tanto energía como materia con su entorno.", difficulty: "avanzado" },
    { question: "¿Por qué un objeto que rebota nunca alcanza su altura original?", options: ["Porque la masa aumenta", "Porque parte de la energía se disipa como calor y sonido", "Porque la gravedad cambia", "Porque el tiempo se detiene"], correctIndex: 1, explanation: "En cada rebote, la energía mecánica se disipa por fricción, deformaciones y producción de sonido.", difficulty: "avanzado" },
    { question: "Un resorte lanza un bloque de 0.5 kg. k = 800 N/m y se comprime 0.15 m. Velocidad máxima:", options: ["3 m/s", "6 m/s", "12 m/s", "18 m/s"], correctIndex: 2, explanation: "½kx² = ½mv² → v = x√(k/m) = 0.15×√(800/0.5) = 0.15×40 = 6 m/s.", difficulty: "avanzado" },
    { question: "¿Qué es la energía mecánica en un sistema con fricción constante?", options: ["Siempre creciente", "Decreciente linealmente con el tiempo", "Constante", "Creciente y decreciente cíclicamente"], correctIndex: 1, explanation: "La fricción disipa energía mecánica constantemente, reduciéndola linealmente si la fuerza de fricción es constante.", difficulty: "avanzado" },
  ]
},
{
  slug: "fi-gravitacion",
  tip: "F = G·m₁·m₂/r². Todo cuerpo con masa atrae a otros.",
  theory: [
    { level: "basico", title: "Ley de gravitación universal", lines: [
      "Newton descubrió que todo cuerpo con masa atrae a otro.",
      "La fuerza gravitacional es directamente proporcional al producto de las masas.",
      "La fuerza es inversamente proporcional al cuadrado de la distancia.",
      "El peso es la gravedad por la masa: P = m·g.",
      "La Tierra atrae los objetos y los objetos atraen a la Tierra."
    ]},
    { level: "intermedio", title: "Órbitas y Kepler", lines: [
      "G = 6.674×10⁻¹¹ N·m²/kg² es la constante gravitacional.",
      "Kepler: los planetas se mueven en órbitas elípticas con el Sol en un foco.",
      "La tercera ley de Kepler: T² ∝ a³, donde a es el semieje mayor.",
      "Un satélite está en caída continua alrededor de la Tierra.",
      "La velocidad de escape es v = √(2GM/r)."
    ]},
    { level: "avanzado", title: "Gravitación avanzada", lines: [
      "El potencial gravitatorio es negativo: V = -GM/r.",
      "Los agujeros negros tienen radius de Schwarzschild r = 2GM/c².",
      "La relatividad general reemplaza la gravedad por la curvatura del espacio-tiempo.",
      "Las anomalías orbitales de Mercurio se explican con relatividad general.",
      "Las fuerzas de marea surgen por la diferencia gravitatoria en un cuerpo extenso."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué dice la ley de gravitación universal?", options: ["Los cuerpos se repelen proporcionalmente a su masa", "Todo cuerpo con masa atrae a otro con fuerza F = G·m₁·m₂/r²", "La gravedad solo actúa sobre la Tierra", "La fuerza gravitacional es constante"], correctIndex: 1, explanation: "Newton estableció que dos masas se atraen con fuerza F = G·m₁·m₂/r².", difficulty: "basico" },
    { question: "¿Qué es la constante gravitacional G?", options: ["Una variable dependiente de la masa", "Una constante universal muy pequeña (~6.67×10⁻¹¹)", "El número pi", "La velocidad de la luz"], correctIndex: 1, explanation: "G ≈ 6.674×10⁻¹¹ N·m²/kg², una constante extremadamente pequeña.", difficulty: "basico" },
    { question: "Si duplicas la masa de un cuerpo, ¿cómo cambia su peso?", options: ["Se duplica", "No cambia", "Se reduce a la mitad", "Se cuadruplica"], correctIndex: 0, explanation: "P = m·g, si m duplica, P también se duplica.", difficulty: "basico" },
    { question: "Si duplicas la distancia entre dos masas, ¿cómo cambia la fuerza gravitacional?", options: ["Se duplica", "Se reduce a la mitad", "Se reduce a la cuarta parte", "No cambia"], correctIndex: 2, explanation: "F ∝ 1/r², si r duplica, F se reduce a ¼ (cuarta parte).", difficulty: "basico" },
    { question: "¿Qué movimiento describe un planeta alrededor del Sol?", options: ["Circular perfecto", "Elíptico", "Rectilíneo", "Espiral"], correctIndex: 1, explanation: "Kepler descubrió que los planetas se mueven en órbitas elípticas.", difficulty: "basico" },
    { question: "¿Por qué no sentimos la gravedad de otros objetos cercanos?", options: ["Porque G es muy pequeña y las masas humanas son pequeñas", "Porque la gravedad no existe fuera de la Tierra", "Porque el aire nos protege", "Porque la Luna contrarresta esa fuerza"], correctIndex: 0, explanation: "G es tan pequeña que solo cuerpos con masas enormes generan gravedad perceptible.", difficulty: "basico" },
    { question: "¿Cuál es la dirección de la fuerza gravitacional?", options: ["Repulsiva", "Siempre atractiva, hacia el otro cuerpo", "Perpendicular al movimiento", "Tangencial a la órbita"], correctIndex: 1, explanation: "La gravedad es siempre atractiva: tira de los cuerpos uno hacia el otro.", difficulty: "basico" },
    { question: "¿Qué es una órbita geoestacionaria?", options: ["Una órbita polar", "Una donde el satélite permanece sobre un punto fijo de la Tierra", "Una órbita lunar", "Una órbita alrededor del Sol"], correctIndex: 1, explanation: "Un satélite geoestacionario orbita a ~36,000 km con periodo igual a 24 horas.", difficulty: "intermedio" },
    { question: "Según Kepler, ¿qué relación tienen los periodos T y los semiejes mayores a?", options: ["T² = a²", "T ∝ a³", "T² ∝ a³", "T = a"], correctIndex: 2, explanation: "La tercera ley de Kepler: T² es proporcional a a³.", difficulty: "intermedio" },
    { question: "¿Qué es la velocidad de escape de un planeta?", options: ["La velocidad de un satélite", "La velocidad mínima para escapar de su campo gravitatorio", "La velocidad del sonido", "La velocidad de rotación"], correctIndex: 1, explanation: "v_escape = √(2GM/r). Para la Tierra es ≈ 11.2 km/s.", difficulty: "intermedio" },
    { question: "Un satélite sube a una órbita mayor. ¿Qué pasa con su velocidad orbital?", options: ["Aumenta", "Disminuye", "No cambia", "Se duplica"], correctIndex: 1, explanation: "A mayor altitud, menor velocidad orbital: v = √(GM/r).", difficulty: "intermedio" },
    { question: "¿Por qué los satélites no caen a la Tierra?", options: ["Porque la gravedad no los afecta", "Porque están en caída continua pero su velocidad tangencial mantiene la órbita", "Porque tienen motores encendidos", "Porque están fuera de la atmósfera"], correctIndex: 1, explanation: "Un satélite está en caída libre pero su velocidad tangencial lo mantiene en órbita.", difficulty: "intermedio" },
    { question: "Un planeta tiene el doble de masa y el triple de radio que la Tierra. ¿Cómo es su g?", options: ["g/3", "2g/9", "g/9", "4g/3"], correctIndex: 1, explanation: "g_planeta = G·(2M)/(3R)² = 2GM/9R² = 2g/9.", difficulty: "intermedio" },
    { question: "¿Qué es un pozo de potencial gravitatorio?", options: ["Un agujero físico en la Tierra", "Una representación de la energía potencial en función de la distancia", "Una órbita estable", "Una región sin gravedad"], correctIndex: 1, explanation: "El potencial V = -GM/r representa cuánta energía necesita un cuerpo para escapar.", difficulty: "intermedio" },
    { question: "¿Qué es un agujero negro?", options: ["Un vacío en el espacio", "Un objeto con tanta masa concentrada que nada escapa más allá de su horizonte", "Una estrella muerta sin gravedad", "Un agujero en la Tierra"], correctIndex: 1, explanation: "Un agujero negro tiene tanta masa concentrada que su velocidad de escape supera la de la luz.", difficulty: "avanzado" },
    { question: "¿Cuál es el radio de Schwarzschild de un agujero negro?", options: ["r = GM/c²", "r = 2GM/c²", "r = 2GM²/c", "r = GM·c²"], correctIndex: 1, explanation: "El radio de Schwarzschild es r_s = 2GM/c², proporcional a la masa.", difficulty: "avanzado" },
    { question: "¿Qué es la anomalía del perihelio de Mercurio?", options: ["Un error de medición", "Un avance del perihelio inexplicable por la gravitación newtoniana", "Una inclinación anómala", "Un cambio de dirección"], correctIndex: 1, explanation: "La órbita de Mercurio rota más de lo previsto por Newton; la relatividad general lo explica.", difficulty: "avanzado" },
    { question: "¿Cómo afecta la relatividad general a los GPS?", options: ["Los relojes se adelantan ~38 μs/día por efectos relativistas", "No hay efecto significativo", "Los relojes se atrasan horas", "Los satélites se detienen"], correctIndex: 0, explanation: "La relatividad especial y general causan desfases de ~38 microsegundos diarios que se corrigen.", difficulty: "avanzado" },
    { question: "¿Qué es la fuerza de marea?", options: ["La fuerza que marea los océanos solamente", "La diferencia gravitatoria entre puntos de un cuerpo extenso", "La fuerza centrífuga", "La tensión superficial"], correctIndex: 1, explanation: "Las fuerzas de marea surgen porque la gravedad varía con la distancia, estirando los cuerpos.", difficulty: "avanzado" },
    { question: "¿Qué es el horizonte de eventos de un agujero negro?", options: ["El borde de la galaxia", "El punto de no retorno donde v_escape = c", "La distancia máxima de un telescopio", "La superficie del agujero"], correctIndex: 1, explanation: "El horizonte de eventos es la superficie donde v_escape = c, más allá de la cual nada regresa.", difficulty: "avanzado" },
  ]
},
{
  slug: "fi-fluidos",
  tip: "Presión = F/A. Un cuerpo sumergido pierde peso igual al fluido desplazado.",
  theory: [
    { level: "basico", title: "Fluidos y presión básica", lines: [
      "Un fluido es una sustancia que fluye: líquidos y gases.",
      "La presión es fuerza por unidad de área: P = F/A.",
      "La presión aumenta con la profundidad en un fluido.",
      "La atmósfera ejerce presión sobre todo lo que la rodea.",
      "El agua es prácticamente incompresible."
    ]},
    { level: "intermedio", title: "Principios de fluidos", lines: [
      "Presión hidrostática: P = ρ·g·h.",
      "Principio de Pascal: la presión se transmite igualmente en un fluido confinado.",
      "Principio de Arquímedes: un cuerpo sumergido pierde peso igual al peso del fluido desplazado.",
      "Un cuerpo flota si su densidad promedio es menor que la del fluido.",
      "El volumen de fluido desplazado iguala al volumen sumergido del cuerpo."
    ]},
    { level: "avanzado", title: "Dinámica de fluidos", lines: [
      "Ecuación de Bernoulli: P + ½ρv² + ρgh = constante.",
      "Efecto Venturi: en secciones estrechas, la velocidad sube y la presión baja.",
      "El número de Reynolds predice si el flujo es laminar o turbulento.",
      "La viscosidad es la resistencia interna de un fluido a fluir.",
      "En tuberías anchas la velocidad es menor y la presión mayor."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Qué es un fluido?", options: ["Solo líquidos", "Una sustancia que fluye: líquidos y gases", "Solo gases", "Sólidos viscosos"], correctIndex: 1, explanation: "Los fluidos se deforman continuamente bajo esfuerzo cortante e incluyen líquidos y gases.", difficulty: "basico" },
    { question: "¿Qué es la presión?", options: ["Energía por unidad de masa", "Fuerza por unidad de área", "Fuerza por unidad de tiempo", "Volumen por unidad de masa"], correctIndex: 1, explanation: "La presión es P = F/A, medida en Pascales (Pa = N/m²).", difficulty: "basico" },
    { question: "¿Qué unidad mide la presión en el SI?", options: ["Newton", "Julio", "Pascal", "Watio"], correctIndex: 2, explanation: "El Pascal (Pa) es la unidad del SI: 1 Pa = 1 N/m².", difficulty: "basico" },
    { question: "Un cuerpo ejerce 100 N sobre 0.2 m². ¿Cuál es la presión?", options: ["20 Pa", "50 Pa", "500 Pa", "2000 Pa"], correctIndex: 1, explanation: "P = F/A = 100/0.2 = 500 Pa.", difficulty: "basico" },
    { question: "¿Qué le pasa a la presión con la profundidad en un líquido?", options: ["Aumenta", "Disminuye", "No cambia", "Se duplica cada 10 m"], correctIndex: 0, explanation: "La presión hidrostática aumenta con la profundidad: P = ρ·g·h.", difficulty: "basico" },
    { question: "¿Qué ejerce presión sobre nuestro cuerpo constantemente?", options: ["Solo el agua", "La atmósfera terrestre", "La Luna", "Los planetas"], correctIndex: 1, explanation: "La atmósfera ejerce ~101,325 Pa a nivel del mar sobre todo objeto.", difficulty: "basico" },
    { question: "¿Por qué los globos explotan a gran altura?", options: ["La gravedad desaparece", "La presión externa disminuye y el gas interno se expande", "La temperatura aumenta mucho", "El globo se encoge"], correctIndex: 1, explanation: "A gran altitud, la presión atmosférica baja, permitiendo que el gas del globo se expanda.", difficulty: "basico" },
    { question: "¿Qué es la presión hidrostática?", options: ["La presión atmosférica", "La presión debida al peso de una columna de fluido", "La presión en vacío", "La presión de un gas ideal"], correctIndex: 1, explanation: "P = ρ·g·h, dependiendo de la densidad y la altura de la columna de fluido.", difficulty: "intermedio" },
    { question: "¿Qué dice el principio de Pascal?", options: ["Los fluidos no transmiten presión", "La presión aplicada se transmite con igual magnitud a todo el fluido confinado", "La presión depende del volumen", "Solo funciona en agua"], correctIndex: 1, explanation: "Una presión aplicada en un punto de un fluido confinado se transmite sin disminución a todo el fluido.", difficulty: "intermedio" },
    { question: "¿Qué dice el principio de Arquímedes?", options: ["Los cuerpos siempre se hunden", "Un cuerpo sumergido pierde peso igual al peso del fluido desplazado", "Los fluidos no tienen peso", "La presión es constante"], correctIndex: 1, explanation: "La fuerza de flotación sobre un cuerpo sumergido es igual al peso del fluido que desplaza.", difficulty: "intermedio" },
    { question: "Un cuerpo de 5 kg con volumen 0.002 m³ se sumerge en agua (ρ=1000 kg/m³). ¿Cuánto pesa en el agua?", options: ["30.4 N", "49 N", "50 N", "29.6 N"], correctIndex: 3, explanation: "F_arq = ρ·V·g = 1000×0.002×9.8 = 19.6 N. P_aparente = 49 - 19.6 = 29.4 N.", difficulty: "intermedio" },
    { question: "¿Por qué un barco de acero flota?", options: ["El acero es ligero", "Su densidad promedio (con aire) es menor que la del agua", "La gravedad es menor en el mar", "Tiene motores que lo sostienen"], correctIndex: 1, explanation: "El barco desplaza agua suficiente para que su densidad promedio incluyendo aire sea menor que la del agua.", difficulty: "intermedio" },
    { question: "¿Qué es un manómetro?", options: ["Un termómetro", "Un instrumento que mide presión", "Un barómetro", "Un velocímetro"], correctIndex: 1, explanation: "Un manómetro mide la presión de un gas o líquido en un recipiente.", difficulty: "intermedio" },
    { question: "Un líquido de densidad 800 kg/m³ tiene 0.5 m de profundidad. ¿Cuál es la presión hidrostática en el fondo?", options: ["3920 Pa", "400 Pa", "800 Pa", "4900 Pa"], correctIndex: 0, explanation: "P = ρgh = 800×9.8×0.5 = 3920 Pa.", difficulty: "intermedio" },
    { question: "¿Qué es la ecuación de Bernoulli?", options: ["La ley de gravedad de Newton", "Relaciona presión, velocidad y altura en un fluido en movimiento", "Una ecuación de estado", "La ley de Coulomb"], correctIndex: 1, explanation: "Bernoulli: P + ½ρv² + ρgh = constante a lo largo de una línea de corriente.", difficulty: "avanzado" },
    { question: "¿Por qué los aviones vuelan según el principio de Bernoulli?", options: ["Por motores de cohetes", "El aire más rápido sobre el ala genera menor presión, creando sustentación", "Por flotabilidad", "Por la gravedad"], correctIndex: 1, explanation: "El perfil del ala genera diferencia de velocidad arriba y abajo, creando diferencia de presión.", difficulty: "avanzado" },
    { question: "¿Qué es el efecto Venturi?", options: ["El agua se calienta en tuberías", "La velocidad aumenta y la presión baja en la sección estrecha de una tubería", "La tubería se rompe", "El fluido se detiene"], correctIndex: 1, explanation: "En la sección convergente, la velocidad aumenta y la presión disminuye según Bernoulli.", difficulty: "avanzado" },
    { question: "¿Qué es la viscosidad?", options: ["La presión del fluido", "La densidad del fluido", "La resistencia interna de un fluido a fluir", "La temperatura del fluido"], correctIndex: 2, explanation: "La viscosidad mide la fricción interna: el agua tiene baja viscosidad, la miel alta.", difficulty: "avanzado" },
    { question: "¿Qué número predice si el flujo es laminar o turbulento?", options: ["Número de Mach", "Número de Reynolds", "Número de Prandtl", "Número de Froude"], correctIndex: 1, explanation: "Re > ~2300 indica flujo turbulento; Re < ~2000 indica flujo laminar.", difficulty: "avanzado" },
    { question: "Un fluido circula por una tubería que se ensancha. ¿Qué pasa con su velocidad y presión?", options: ["Velocidad sube, presión baja", "Velocidad baja, presión sube", "Ambas suben", "Ambas bajan"], correctIndex: 1, explanation: "Por A₁v₁ = A₂v₂, al aumentar el área baja la velocidad, y por Bernoulli sube la presión.", difficulty: "avanzado" },
    { question: "¿Por qué el aire sopla más fuerte en los pasos estrechos entre edificios?", options: ["Porque hay más aire", "Porque al reducirse el área, la velocidad aumenta (efecto Venturi)", "Porque la temperatura sube", "Porque la presión es mayor"], correctIndex: 1, explanation: "El aire se comprime al pasar por el estrechamiento, aumentando su velocidad.", difficulty: "avanzado" },
  ]
},
{
  slug: "fi-presion",
  tip: "La presión atmosférica es ~101,325 Pa a nivel del mar.",
  theory: [
    { level: "basico", title: "Presión atmosférica", lines: [
      "La atmósfera terrestre ejerce presión sobre todo lo que la rodea.",
      "A nivel del mar, la presión atmosférica es 101,325 Pa (1 atm).",
      "La presión disminuye con la altitud.",
      "Un barómetro mide la presión atmosférica.",
      "La presión absoluta es presión atmosférica más presión manométrica."
    ]},
    { level: "intermedio", title: "Medición y aplicaciones", lines: [
      "El barómetro de mercurio usa P = ρgh para medir presión.",
      "Un barómetro aneroide usa una cápsula de vacío que se deforma.",
      "La presión manométrica mide la diferencia con la atmosférica.",
      "Los neumáticos de auto usan presión para soportar el peso del vehículo.",
      "En alturas elevadas, la presión menor dificulta respirar."
    ]},
    { level: "avanzado", title: "Presión avanzada", lines: [
      "La presión se transmite isotrópicamente en un fluido estático (Pascal).",
      "En fluids en movimiento, la presión varía con la velocidad (Bernoulli).",
      "La presión osmótica depende de la concentración de solutos.",
      "La presión de vapor es la presión de equilibrio líquido-vapor.",
      "Los experimentos de Torricelli demostraron que la atmósfera tiene presión finita."
    ]}
  ],
  illustrations: [],
  exercises: [
    { question: "¿Cuál es la presión atmosférica estándar a nivel del mar?", options: ["1013.25 Pa", "10,132.5 Pa", "101,325 Pa", "1,013,250 Pa"], correctIndex: 2, explanation: "La presión atmosférica estándar es 101,325 Pa = 1 atm ≈ 760 mmHg.", difficulty: "basico" },
    { question: "¿Qué instrumento mide la presión atmosférica?", options: ["Termómetro", "Barómetro", "Manómetro", "Anemómetro"], correctIndex: 1, explanation: "El barómetro mide la presión atmosférica, mientras que el manómetro mide presión de gases.", difficulty: "basico" },
    { question: "¿Qué le pasa a la presión atmosférica cuando subes de altitud?", options: ["Aumenta", "Disminuye", "No cambia", "Se duplica cada 1000 m"], correctIndex: 1, explanation: "A mayor altitud, menos columna de aire por encima, por lo que la presión disminuye.", difficulty: "basico" },
    { question: "¿Qué es la presión manométrica?", options: ["La presión total absoluta", "La diferencia entre la presión absoluta y la atmosférica", "La presión en vacío", "La presión del sol"], correctIndex: 1, explanation: "P_manométrica = P_absoluta - P_atmosférica.", difficulty: "basico" },
    { question: "Un neumático tiene presión manométrica de 2.5 atm. ¿Cuál es la presión absoluta?", options: ["2.5 atm", "3.5 atm", "1.5 atm", "4 atm"], correctIndex: 1, explanation: "P_abs = P_man + P_atm = 2.5 + 1 = 3.5 atm.", difficulty: "basico" },
    { question: "¿Por qué a gran altitud los aviones tienen cabinas presurizadas?", options: ["Para mantener la temperatura", "Para compensar la menor presión atmosférica", "Para evitar vientos", "Por estética"], correctIndex: 1, explanation: "A grandes altitudes la presión es baja, lo que dificulta la respiración sin presurización.", difficulty: "basico" },
    { question: "¿Qué es una atmósfera (atm)?", options: ["Una unidad de temperatura", "Una unidad de presión equivalente a 101,325 Pa", "Una unidad de fuerza", "Una unidad de energía"], correctIndex: 1, explanation: "1 atm = 101,325 Pa = 760 mmHg ≈ 14.7 psi.", difficulty: "basico" },
    { question: "Un barómetro de mercurio tiene 760 mm de columna. ¿Cuál es la presión?", options: ["760 Pa", "7600 Pa", "101,325 Pa", "760,000 Pa"], correctIndex: 2, explanation: "P = ρgh = 13,600×9.8×0.76 ≈ 101,325 Pa.", difficulty: "intermedio" },
    { question: "¿Qué es un barómetro aneroide?", options: ["Usa mercurio", "Usa una cápsula de vacío que se deforma con la presión", "Mide temperatura", "Mide humedad"], correctIndex: 1, explanation: "El barómetro aneroide usa una cápsula metálica sellada que se deforma con los cambios de presión.", difficulty: "intermedio" },
    { question: "En un octógono de agua con 3 m de profundidad, ¿cuál es la presión absoluta en el fondo? (P_atm = 101325 Pa)", options: ["29,400 Pa", "101,325 Pa", "130,725 Pa", "30,200 Pa"], correctIndex: 2, explanation: "P_abs = P_atm + ρgh = 101,325 + 1000×9.8×3 = 130,725 Pa.", difficulty: "intermedio" },
    { question: "¿Qué es la tensión superficial?", options: ["La presión de un líquido", "La tendencia de la superficie de un líquido a comportarse como una membrana elástica", "La viscosidad del agua", "La densidad del líquido"], correctIndex: 1, explanation: "La tensión superficial es causada por las fuerzas cohesivas entre moléculas del líquido.", difficulty: "intermedio" },
    { question: "¿Por qué un clip de metal flota sobre agua?", options: ["Es ligero", "La tensión superficial soporta su peso", "El agua lo empuja hacia arriba", "El clip es magnético"], correctIndex: 1, explanation: "Si el clip se coloca cuidadosamente, la tensión superficial del agua lo sostiene.", difficulty: "intermedio" },
    { question: "¿Qué demostró el experimento de Torricelli?", options: ["La Tierra es redonda", "La atmósfera tiene presión finita y el vacío es posible", "La gravedad existe", "El mercurio es tóxico"], correctIndex: 1, explanation: "Torricelli creó el primer vacío en un tubo de mercurio, demostrando la presión atmosférica.", difficulty: "intermedio" },
    { question: "En un gas a temperatura constante, si se duplica la presión, ¿qué pasa con el volumen?", options: ["Se duplica", "Se reduce a la mitad", "No cambia", "Se cuadruplica"], correctIndex: 1, explanation: "Por la ley de Boyle: P·V = constante a T constante. Si P duplica, V se reduce a la mitad.", difficulty: "intermedio" },
    { question: "¿Qué es la presión de vapor?", options: ["La presión del vapor de agua en la atmósfera", "La presión de equilibrio entre líquido y su vapor en un recipiente cerrado", "La presión en una caldera", "La presión del vapor en un motor"], correctIndex: 1, explanation: "La presión de vapor es la presión a la cual el líquido y su vapor están en equilibrio.", difficulty: "avanzado" },
    { question: "¿Qué es la presión osmótica?", options: ["La presión del agua en ósmosis", "La presión necesaria para detener el flujo de solvente a través de una membrana semipermeable", "La presión en los riñones", "La presión atmosférica modificada"], correctIndex: 1, explanation: "La presión osmótica depende de la concentración de solutos: π = MRT.", difficulty: "avanzado" },
    { question: "¿Qué experimento realizó Pascal con una botella llena de agua y un tubo largo?", options: ["Demostró que el agua hierve a 100°C", "Demostró que la presión depende de la altura de la columna de fluido", "Demostró que el agua se congela a 0°C", "Demostró que el agua es incompresible"], correctIndex: 1, explanation: "Pascal insertó un tubo largo en una botella y al llenarla, la presión del tubo estalló la botella, demostrando P = ρgh.", difficulty: "avanzado" },
    { question: "¿Qué es el实验 de Pascal de la pera?", options: ["Demostró que la presión se transmite igualmente en todas direcciones", "Demostró que el agua fluye hacia arriba", "Demostró que el mercurio es pesado", "Demostró que el aire tiene peso"], correctIndex: 0, explanation: "Pascal perforó una pera en varios puntos y al sumergirla, el agua salió por todos los agujeros con igual fuerza.", difficulty: "avanzado" },
    { question: "¿Qué es la cavitación en hidrodinámica?", options: ["La formación de burbujas de vapor por baja presión en líquidos en rápido movimiento", "La limpieza de tuberías", "La corrosión del metal", "El aumento de temperatura del fluido"], correctIndex: 0, explanation: "Cuando la presión local baja del punto de vapor, se forman burbujas que colapsan violentamente.", difficulty: "avanzado" },
  ]
},
];

writeBatch('fi', 1, 'fiBatch1', modules.slice(0, 10));
writeBatch('fi', 2, 'fiBatch2', modules.slice(10, 20));
console.log('Física part 1 (20 modules) done');
