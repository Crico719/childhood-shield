import type { CourseModule } from "C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content";

export const rmBatch3: CourseModule[] = [
  {
    slug: "problemas-mezclas",
    tip: "En problemas de mezclas, identifica siempre las cantidades de soluto y solvente. La concentración es soluto/total × 100%. Al mezclar, el soluto total se conserva: usa la ecuación C₁V₁ + C₂V₂ = C_fV_f.",
    theory: [
      {
        level: "basico",
        title: "Conceptos de mezclas y concentración",
        lines: [
          "Una **mezcla** es la combinación de dos o más sustancias sin que se produzca una reacción química.",
          "El **soluto** es la sustancia que se disuelve y el **solvente** es el medio que la disuelve.",
          "La **concentración** mide la proporción de soluto en la solución total.",
          "Fórmula: **Concentración = (masa de soluto / masa de solución) × 100%**.",
          "La masa de solución es la masa de soluto más la masa del solvente.",
          "Si hay 20 g de sal en 80 g de agua, la concentración es 20/100 = 20%."
        ]
      },
      {
        level: "intermedio",
        title: "Mezcla de dos soluciones",
        lines: [
          "Al mezclar dos soluciones, el soluto total antes es igual al soluto total después.",
          "Fórmula: **C₁V₁ + C₂V₂ = C_f(V₁ + V₂)**, donde C es concentración y V es volumen.",
          "Si mezclas 100 mL al 10% con 200 mL al 30%, la concentración final es 23.3%.",
          "Para calcular cuánto de cada solución necesitas, plantea un sistema de ecuaciones.",
          "El punto de equilibrio es la concentración resultante después de la mezcla completa.",
          "Verifica que la concentración resultante esté entre las dos concentraciones originales."
        ]
      },
      {
        level: "avanzado",
        title: "Mezclas con evaporación y dilución",
        lines: [
          "Si evaporas agua de una solución, el soluto no cambia, solo aumenta la concentración.",
          "Para hallar cuánta agua evaporar: **C₁V₁ = C_fV_f**, despejando V_f = C₁V₁/C_f.",
          "Si añades soluto puro: **C_f = (C₁V₁ + m_soluto) / V_f**.",
          "En dilución, la fórmula es **C₁V₁ = C₂V₂** (conservación del soluto).",
          "Si añades agua a una solución, solo cambia el volumen y la concentración.",
          "Siempre convierte todo a las mismas unidades antes de aplicar cualquier fórmula de mezcla."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <rect x="20" y="60" width="70" height="110" rx="6" fill="#dbeafe" fill-opacity="0.5" stroke="#2563eb" stroke-width="2"/>
        <rect x="20" y="110" width="70" height="60" rx="0" fill="#2563eb" fill-opacity="0.3"/>
        <text x="55" y="98" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold" text-anchor="middle">C₁=10%</text>
        <text x="55" y="52" font-family="Arial" font-size="10" fill="#333" text-anchor="middle">V₁=100mL</text>
        <text x="110" y="130" font-family="Arial" font-size="22" fill="#16a34a" font-weight="bold">+</text>
        <rect x="140" y="60" width="70" height="110" rx="6" fill="#fef3c7" fill-opacity="0.5" stroke="#f59e0b" stroke-width="2"/>
        <rect x="140" y="100" width="70" height="70" rx="0" fill="#f59e0b" fill-opacity="0.3"/>
        <text x="175" y="90" font-family="Arial" font-size="11" fill="#f59e0b" font-weight="bold" text-anchor="middle">C₂=40%</text>
        <text x="175" y="52" font-family="Arial" font-size="10" fill="#333" text-anchor="middle">V₂=300mL</text>
        <text x="225" y="130" font-family="Arial" font-size="22" fill="#16a34a" font-weight="bold">=</text>
        <rect x="250" y="60" width="35" height="110" rx="6" fill="#dcfce7" fill-opacity="0.5" stroke="#16a34a" stroke-width="2"/>
        <rect x="250" y="90" width="35" height="80" rx="0" fill="#16a34a" fill-opacity="0.3"/>
        <text x="267" y="82" font-family="Arial" font-size="9" fill="#16a34a" font-weight="bold" text-anchor="middle">Cf</text>
        <text x="267" y="52" font-family="Arial" font-size="10" fill="#333" text-anchor="middle">Vf=400</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Mezcla de soluciones</text>
        <text x="150" y="192" font-family="Arial" font-size="10" fill="#8b5cf6" text-anchor="middle">C₁V₁ + C₂V₂ = C_fV_f</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Se disuelven 15 g de sal en 85 g de agua. ¿Cuál es la concentración de la solución resultante?",
        options: ["15%", "17.6%", "20%", "12.5%"],
        correctIndex: 0,
        explanation: "Concentración = (masa soluto / masa solución) × 100% = (15 / (15 + 85)) × 100% = 15/100 × 100% = 15%.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Se mezclan 200 mL de una solución al 10% con 300 mL de una solución al 40%. ¿Cuál es la concentración de la mezcla?",
        options: ["28%", "25%", "22%", "30%"],
        correctIndex: 0,
        explanation: "C_f = (C₁V₁ + C₂V₂)/(V₁ + V₂) = (10×200 + 40×300)/(200+300) = (2000 + 12000)/500 = 14000/500 = 28%.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Tienes 500 mL de una solución al 20%. ¿Cuántos mL de agua debes evaporar para que la concentración suba al 50%?",
        options: ["250 mL", "200 mL", "300 mL", "150 mL"],
        correctIndex: 2,
        explanation: "El soluto se conserva: C₁V₁ = C_fV_f → 20×500 = 50×V_f → V_f = 10000/500 = 200 mL. Agua a evaporar = 500 − 200 = 300 mL.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "problemas-trabajo-tiempo",
    tip: "La tasa de trabajo es el trabajo completado por unidad de tiempo. Si A tarda 'a' horas y B tarda 'b' horas, juntos completan el trabajo en ab/(a+b). Recuerda: trabajo = tasa × tiempo.",
    theory: [
      {
        level: "basico",
        title: "Conceptos de trabajo y tiempo",
        lines: [
          "El **trabajo** se mide como la cantidad de tarea completada en un período de tiempo.",
          "La **tasa de trabajo** es la fracción del trabajo total que se completa en una unidad de tiempo.",
          "Si Pedro tarda 6 horas en pintar un muro, su tasa es 1/6 del trabajo por hora.",
          "Cuando dos personas trabajan juntas, sus tasas se **suman**.",
          "Si Ana tarda 4 horas y Juan tarda 6 horas, juntos tasan 1/4 + 1/6 = 5/12 por hora.",
          "El tiempo para trabajar juntos se calcula como **T = 1/(tasa₁ + tasa₂)**."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y situaciones típicas",
        lines: [
          "Si A tarda 'a' horas y B tarda 'b' horas, juntos tardan **ab/(a+b)** horas.",
          "Si trabajan en tareas complementarias (uno construye y otro destruye), se **restan** las tasas.",
          "Si trabajan primero uno y luego el otro, se suman los tiempos individuales.",
          "Si ambos empiezan y terminan juntos, usan la tasa combinada.",
          "Si trabajan alternados (turnos de 1 hora), calcula cuánto se completa en cada turno.",
          "Con más de dos trabajadores: **T = 1/(1/a + 1/b + 1/c + ...)**."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas con eficiencia y tuberías",
        lines: [
          "Si un trabajador es 20% más eficiente, su tasa es 1.2 veces la tasa del otro.",
          "Si la tubería A llena en 4h y la B vacía en 6h, la tasa neta es 1/4 − 1/6 = 1/12 por hora.",
          "Si un equipo de N personas tarda T horas, al agregar 2 personas el tiempo baja proporcionalmente.",
          "La tasa de un grupo es el número de trabajadores multiplicado por la tasa individual.",
          "Si la tasa de trabajo depende del tiempo (aceleración), la fórmula base no aplica directamente.",
          "Convierte siempre las tasas a la misma unidad antes de combinarlas."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Trabajo combinado</text>
        <rect x="30" y="50" width="100" height="50" rx="6" fill="#dbeafe" fill-opacity="0.5" stroke="#2563eb" stroke-width="2"/>
        <text x="80" y="80" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold" text-anchor="middle">A: 1/4 h⁻¹</text>
        <text x="80" y="42" font-family="Arial" font-size="10" fill="#333" text-anchor="middle">Tardan 4h</text>
        <text x="155" y="82" font-family="Arial" font-size="18" fill="#16a34a" font-weight="bold">+</text>
        <rect x="170" y="50" width="100" height="50" rx="6" fill="#fef3c7" fill-opacity="0.5" stroke="#f59e0b" stroke-width="2"/>
        <text x="220" y="80" font-family="Arial" font-size="11" fill="#f59e0b" font-weight="bold" text-anchor="middle">B: 1/6 h⁻¹</text>
        <text x="220" y="42" font-family="Arial" font-size="10" fill="#333" text-anchor="middle">Tardan 6h</text>
        <text x="150" y="130" font-family="Arial" font-size="16" fill="#dc2626" font-weight="bold" text-anchor="middle">▼</text>
        <rect x="50" y="140" width="200" height="50" rx="6" fill="#dcfce7" fill-opacity="0.5" stroke="#16a34a" stroke-width="2"/>
        <text x="150" y="160" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold" text-anchor="middle">Juntos: 1/4 + 1/6 = 5/12 h⁻¹</text>
        <text x="150" y="180" font-family="Arial" font-size="10" fill="#333" text-anchor="middle">Tiempo = 12/5 = 2.4 horas</text>
      </svg>`
    ],
    exercises: [
      {
        id: 4,
        question: "Carlos puede pintar un cuarto en 6 horas y María puede pintar el mismo cuarto en 4 horas. ¿Cuánto tardarían trabajando juntos?",
        options: ["2.4 horas", "5 horas", "2 horas", "3 horas"],
        correctIndex: 0,
        explanation: "Tasa de Carlos = 1/6 por hora, tasa de María = 1/4 por hora. Juntos: 1/6 + 1/4 = 5/12 por hora. Tiempo = 1/(5/12) = 12/5 = 2.4 horas.",
        difficulty: "basico"
      },
      {
        id: 5,
        question: "Una tubería llena un tanque en 8 horas y otra lo vacía en 12 horas. Si ambas abren a la vez, ¿cuántas horas tarda en llenarse el tanque?",
        options: ["24 horas", "20 horas", "10 horas", "4.8 horas"],
        correctIndex: 0,
        explanation: "Tasa neta = 1/8 − 1/12 = 3/24 − 2/24 = 1/24 por hora. Tiempo = 1/(1/24) = 24 horas.",
        difficulty: "intermedio"
      },
      {
        id: 6,
        question: "Juan solo tarda 12 días en pintar un muro. Después de trabajar 4 días solo, llama a Pedro y juntos terminan en 5 días más. ¿Cuánto tardaría Pedro solo en pintar todo el muro?",
        options: ["12 días", "15 días", "20 días", "24 días"],
        correctIndex: 2,
        explanation: "Juan hizo 4/12 = 1/3 del muro solo. Resta 2/3. En 5 días juntos completaron 2/3, así que su tasa combinada es (2/3)/5 = 2/15 por día. Tasa de Pedro = 2/15 − 1/12 = 8/60 − 5/60 = 3/60 = 1/20 por día. Pedro solo tardaría 20 días.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "problemas-velocidad",
    tip: "Recuerda la fórmula base: Velocidad = Distancia / Tiempo. En problemas de río, suma o resta la velocidad del agua según si vas a favor o en contra. Siempre verifica las unidades antes de resolver.",
    theory: [
      {
        level: "basico",
        title: "Velocidad, distancia y tiempo",
        lines: [
          "La **velocidad** es la distancia recorrida por unidad de tiempo: **v = d/t**.",
          "La **distancia** se calcula como: **d = v × t**.",
          "El **tiempo** se calcula como: **t = d/v**.",
          "Unidades comunes: km/h, m/s. Para convertir m/s a km/h multiplica por 3.6.",
          "La **velocidad promedio** es la distancia total dividida entre el tiempo total.",
          "Velocidad constante significa que el objeto recorre la misma distancia en intervalos iguales."
        ]
      },
      {
        level: "intermedio",
        title: "Movimiento con río y encuentros",
        lines: [
          "Un barco en un río tiene velocidad en agua calma **v_b** y el río tiene velocidad **v_r**.",
          "Velocidad a favor de la corriente: **v_f = v_b + v_r**.",
          "Velocidad en contra de la corriente: **v_c = v_b − v_r**.",
          "El tiempo total de ida y vuelta es **T = d/v_f + d/v_c**, donde d es la distancia de un trayecto.",
          "Problemas de **encuentro**: cuando dos objetos se acercan, sus velocidades se **suman**.",
          "Problemas de **persecución**: cuando uno persigue a otro, se **restan** las velocidades."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos de velocidad",
        lines: [
          "En movimiento circular, la velocidad lineal es **v = rω**, donde r es el radio y ω la velocidad angular.",
          "Un objeto con movimiento acelerado uniforme: **d = v₀t + ½at²** y **v = v₀ + at**.",
          "Velocidad relativa: si se mueven en sentidos opuestos, la velocidad relativa es la **suma**.",
          "Si se mueven en el mismo sentido, la velocidad relativa es la **diferencia**.",
          "La velocidad promedio en ida y vuelta a diferentes velocidades NO es el promedio simple de ambas.",
          "Dibuja un diagrama con flechas de velocidad antes de plantear ecuaciones."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Barco en río con corriente</text>
        <rect x="20" y="70" width="260" height="50" rx="8" fill="#dbeafe" fill-opacity="0.4" stroke="#2563eb" stroke-width="1.5"/>
        <path d="M 30 85 Q 60 75 90 85 Q 120 95 150 85 Q 180 75 210 85 Q 240 95 270 85" fill="none" stroke="#2563eb" stroke-width="1.5"/>
        <rect x="120" y="72" width="35" height="14" rx="3" fill="#f59e0b"/>
        <line x1="137" y1="72" x2="137" y2="60" stroke="#8b5cf6" stroke-width="2"/>
        <polygon points="132,60 137,50 142,60" fill="#8b5cf6"/>
        <text x="137" y="46" font-family="Arial" font-size="9" fill="#8b5cf6" text-anchor="middle">v_b</text>
        <line x1="160" y1="78" x2="200" y2="78" stroke="#16a34a" stroke-width="2"/>
        <polygon points="200,78 193,74 193,82" fill="#16a34a"/>
        <text x="180" y="73" font-family="Arial" font-size="9" fill="#16a34a" font-weight="bold">v_r</text>
        <text x="150" y="115" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold" text-anchor="middle">A favor: v_f = v_b + v_r</text>
        <rect x="20" y="135" width="260" height="50" rx="8" fill="#fef2f2" fill-opacity="0.4" stroke="#dc2626" stroke-width="1.5"/>
        <rect x="145" y="137" width="35" height="14" rx="3" fill="#f59e0b"/>
        <polygon points="155,151 150,157 145,151" fill="#f59e0b"/>
        <line x1="120" y1="144" x2="85" y2="144" stroke="#dc2626" stroke-width="2"/>
        <polygon points="85,144 92,140 92,148" fill="#dc2626"/>
        <text x="102" y="139" font-family="Arial" font-size="9" fill="#dc2626" font-weight="bold">v_r</text>
        <text x="150" y="178" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold" text-anchor="middle">En contra: v_c = v_b − v_r</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7,
        question: "Un auto viaja a 80 km/h durante 3 horas y luego a 100 km/h durante 2 horas. ¿Cuál es su velocidad promedio?",
        options: ["88 km/h", "90 km/h", "85 km/h", "92 km/h"],
        correctIndex: 0,
        explanation: "Distancia total = 80×3 + 100×2 = 240 + 200 = 440 km. Tiempo total = 3 + 2 = 5 h. Velocidad promedio = 440/5 = 88 km/h.",
        difficulty: "basico"
      },
      {
        id: 8,
        question: "Un barco tiene velocidad de 15 km/h en agua calma y el río fluye a 5 km/h. Si debe recorrer 60 km río abajo y regresar río arriba, ¿cuánto tarda en total?",
        options: ["6 horas", "8 horas", "9 horas", "12 horas"],
        correctIndex: 2,
        explanation: "Río abajo: v_f = 15 + 5 = 20 km/h, t₁ = 60/20 = 3 h. Río arriba: v_c = 15 − 5 = 10 km/h, t₂ = 60/10 = 6 h. Total = 3 + 6 = 9 horas.",
        difficulty: "intermedio"
      },
      {
        id: 9,
        question: "Dos autos parten de ciudades separadas 300 km. Uno viaja a 60 km/h y el otro a 90 km/h en sentidos opuestos. ¿Cuánto tardan en encontrarse?",
        options: ["3 horas", "2.5 horas", "2 horas", "4 horas"],
        correctIndex: 2,
        explanation: "Velocidad relativa de aproximación = 60 + 90 = 150 km/h. Tiempo = distancia / velocidad relativa = 300/150 = 2 horas.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "problemas-financieros",
    tip: "En interés simple, los intereses se calculan SIEMPRE sobre el capital inicial. En interés compuesto, se calculan sobre el capital acumulado. Memoriza: I = C×r×t y M = C(1+r)^t.",
    theory: [
      {
        level: "basico",
        title: "Interés simple y conceptos financieros",
        lines: [
          "El **capital** (C) es la cantidad de dinero inicial que se invierte o se toma prestada.",
          "La **tasa de interés** (r) es el porcentaje que se cobra por el uso del dinero, generalmente anual.",
          "El **interés simple** se calcula SIEMPRE sobre el capital original: **I = C × r × t**.",
          "El **monto final** con interés simple es: **M = C + I = C(1 + r×t)**.",
          "Si el capital es S/ 1000, la tasa es 5% anual y el tiempo es 3 años: I = 1000 × 0.05 × 3 = S/ 150.",
          "Un **descuento** simple es el interés que se resta del monto futuro para obtener el valor presente."
        ]
      },
      {
        level: "intermedio",
        title: "Interés compuesto y cuotas",
        lines: [
          "El **interés compuesto** se calcula sobre el capital acumulado (capital + intereses anteriores).",
          "Fórmula: **M = C(1 + r)^t**, donde t es el número de períodos.",
          "Si inviertes S/ 1000 al 10% compuesto anual por 3 años: M = 1000(1.10)³ = S/ 1331.",
          "La diferencia entre simple y compuesto crece con el tiempo: a mayor plazo, mayor la diferencia.",
          "Las cuotas iguales se calculan con: **Cuota = M × r / [(1+r)^t − 1]**.",
          "Un descuento compuesto se calcula como: **Descuento = M − M/(1+r)^t**."
        ]
      },
      {
        level: "avanzado",
        title: "Tasa efectiva y valor presente",
        lines: [
          "La **tasa nominal** es la tasa declarada sin considerar la capitalización dentro del año.",
          "La **tasa efectiva anual** (TEA): **TEA = (1 + r/n)^n − 1**, donde n = períodos por año.",
          "Si la tasa nominal es 12% semestral, la TEA = (1 + 0.06)² − 1 = 12.36%.",
          "El **valor presente** de un monto futuro M es: **VP = M / (1+r)^t**.",
          "Para comparar inversiones, convierte SIEMPRE a la misma tasa efectiva anual.",
          "Si te dan tasa mensual, conviértela a anual: TEA = (1 + r_mensual)^12 − 1."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Interés Simple vs Compuesto</text>
        <line x1="50" y1="170" x2="280" y2="170" stroke="#333" stroke-width="1.5"/>
        <line x1="50" y1="40" x2="50" y2="170" stroke="#333" stroke-width="1.5"/>
        <text x="165" y="188" font-family="Arial" font-size="9" fill="#333" text-anchor="middle">Tiempo</text>
        <line x1="50" y1="155" x2="80" y2="143" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="80" y1="143" x2="110" y2="131" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="110" y1="131" x2="140" y2="119" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="140" y1="119" x2="170" y2="107" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="170" y1="107" x2="200" y2="95" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="200" y1="95" x2="230" y2="83" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="230" y1="83" x2="260" y2="71" stroke="#2563eb" stroke-width="2.5"/>
        <path d="M 50 155 Q 80 138 110 118 Q 140 98 170 78 Q 200 60 230 44 Q 250 35 260 30" fill="none" stroke="#dc2626" stroke-width="2.5"/>
        <text x="262" y="28" font-family="Arial" font-size="9" fill="#dc2626" font-weight="bold">Compuesto</text>
        <text x="262" y="69" font-family="Arial" font-size="9" fill="#2563eb" font-weight="bold">Simple</text>
        <circle cx="50" cy="155" r="3" fill="#333"/>
        <text x="100" y="180" font-family="Arial" font-size="8" fill="#333" text-anchor="middle">Año 1</text>
        <text x="160" y="180" font-family="Arial" font-size="8" fill="#333" text-anchor="middle">Año 2</text>
        <text x="220" y="180" font-family="Arial" font-size="8" fill="#333" text-anchor="middle">Año 3</text>
        <rect x="60" y="45" width="170" height="25" rx="4" fill="#f0fdf4" fill-opacity="0.7" stroke="#16a34a" stroke-width="1"/>
        <text x="145" y="62" font-family="Arial" font-size="10" fill="#16a34a" font-weight="bold" text-anchor="middle">I = C × r × t (Simple)</text>
      </svg>`
    ],
    exercises: [
      {
        id: 10,
        question: "Se invierten S/ 2000 al 8% de interés simple anual. ¿Cuánto dinero habrá después de 5 años?",
        options: ["S/ 2800", "S/ 2080", "S/ 2400", "S/ 2600"],
        correctIndex: 0,
        explanation: "I = C × r × t = 2000 × 0.08 × 5 = S/ 800. Monto = 2000 + 800 = S/ 2800.",
        difficulty: "basico"
      },
      {
        id: 11,
        question: "Una inversión de S/ 5000 al 10% de interés compuesto anual crecerá a S/ 6655 en cuántos años?",
        options: ["3 años", "2 años", "4 años", "5 años"],
        correctIndex: 0,
        explanation: "M = C(1+r)^t → 6655 = 5000(1.10)^t → 1.331 = (1.10)^t. Como (1.10)³ = 1.331, entonces t = 3 años.",
        difficulty: "intermedio"
      },
      {
        id: 12,
        question: "Se invierten S/ 5000 al 20% de interés compuesto anual. ¿Cuánto dinero se acumula después de 2 años?",
        options: ["S/ 7200", "S/ 7000", "S/ 6800", "S/ 7500"],
        correctIndex: 0,
        explanation: "M = C(1+r)^t = 5000(1.20)² = 5000 × 1.44 = S/ 7200.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "porcentajes-tantos",
    tip: "Si algo sube 20% y luego baja 20%, NO vuelves al precio original (quedas en 96%). Para calcular el porcentaje de cambio usa: (nuevo − original)/original × 100%.",
    theory: [
      {
        level: "basico",
        title: "Conceptos de porcentaje",
        lines: [
          "Un **porcentaje** es una fracción cuyo denominador es 100: 25% = 25/100 = 0.25.",
          "Para calcular el tanto por ciento: **(parte / total) × 100%**.",
          "Para calcular un porcentaje de un número: **Número × (porcentaje/100)**.",
          "Un **aumento** del 20% significa que el nuevo valor es el 120% del original.",
          "Un **descuento** del 25% significa que se paga el 75% del precio original.",
          "Para recuperar el original tras un descuento: **Precio original = Precio con descuento / (1 − r)**."
        ]
      },
      {
        level: "intermedio",
        title: "Aumentos, descuentos y variación",
        lines: [
          "Si un precio sube 20% y luego baja 20%, el resultado es 0.80 × 1.20 = 0.96 del original.",
          "La variación porcentual: **Δ% = [(nuevo − original) / original] × 100%**.",
          "Si A es 25% más que B, entonces B es 20% menos que A (NO 25% menos).",
          "Para comparar porcentajes de base diferente, calcula cada uno sobre la misma referencia.",
          "Un descuento sucesivo del 10% y 20% equivale a un descuento único del 28%.",
          "La **base** es el valor sobre el cual se calcula el porcentaje. Identificarla es clave."
        ]
      },
      {
        level: "avanzado",
        title: "Porcentajes encadenados y tasas de crecimiento",
        lines: [
          "Si un producto sube x% y necesitas bajar y% para volver al precio: **y = 100x/(100+x)**.",
          "Si sube 50%, necesitas bajar 100×50/150 = 33.33% para recuperar el precio.",
          "La tasa de crecimiento compuesto: **CAGR = (VF/VI)^(1/n) − 1**.",
          "Si una población crece 5% anual, después de 2 años es (1.05)² = 1.1025 veces el original.",
          "El porcentaje de ganancia sobre costo: **G% = (precio venta − precio costo) / precio costo × 100%**.",
          "Para descuentos encadenados, multiplica los factores: 0.9 × 0.85 × 0.8 = 0.612 → 38.8% de descuento total."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Efecto de aumentos y descuentos</text>
        <rect x="30" y="55" width="60" height="95" rx="6" fill="#dbeafe" fill-opacity="0.4" stroke="#2563eb" stroke-width="2"/>
        <rect x="30" y="75" width="60" height="75" rx="0" fill="#2563eb" fill-opacity="0.2"/>
        <text x="60" y="120" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold" text-anchor="middle">S/100</text>
        <text x="60" y="48" font-family="Arial" font-size="9" fill="#333" text-anchor="middle">Original</text>
        <text x="110" y="105" font-family="Arial" font-size="14" fill="#16a34a" font-weight="bold">+20%</text>
        <rect x="130" y="45" width="60" height="105" rx="6" fill="#dcfce7" fill-opacity="0.4" stroke="#16a34a" stroke-width="2"/>
        <rect x="130" y="58" width="60" height="92" rx="0" fill="#16a34a" fill-opacity="0.2"/>
        <text x="160" y="112" font-family="Arial" font-size="11" fill="#16a34a" font-weight="bold" text-anchor="middle">S/120</text>
        <text x="160" y="38" font-family="Arial" font-size="9" fill="#333" text-anchor="middle">+20%</text>
        <text x="205" y="105" font-family="Arial" font-size="14" fill="#dc2626" font-weight="bold">−20%</text>
        <rect x="225" y="58" width="50" height="92" rx="6" fill="#fef2f2" fill-opacity="0.4" stroke="#dc2626" stroke-width="2"/>
        <rect x="225" y="75" width="50" height="75" rx="0" fill="#dc2626" fill-opacity="0.2"/>
        <text x="250" y="122" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold" text-anchor="middle">S/96</text>
        <text x="250" y="52" font-family="Arial" font-size="9" fill="#333" text-anchor="middle">−4%</text>
        <text x="150" y="175" font-family="Arial" font-size="11" fill="#8b5cf6" font-weight="bold" text-anchor="middle">1.20 × 0.80 = 0.96 ≠ 1.00</text>
        <line x1="30" y1="165" x2="275" y2="165" stroke="#e2e8f0" stroke-width="1"/>
      </svg>`
    ],
    exercises: [
      {
        id: 13,
        question: "Un producto que costaba S/ 200 tiene un descuento del 15%. ¿Cuál es su precio con descuento?",
        options: ["S/ 170", "S/ 185", "S/ 175", "S/ 160"],
        correctIndex: 0,
        explanation: "Precio con descuento = 200 × (1 − 0.15) = 200 × 0.85 = S/ 170.",
        difficulty: "basico"
      },
      {
        id: 14,
        question: "La población de una ciudad pasó de 50,000 a 57,500 habitantes. ¿Cuál fue el porcentaje de aumento?",
        options: ["15%", "12%", "10%", "7.5%"],
        correctIndex: 0,
        explanation: "Δ% = [(57500 − 50000) / 50000] × 100% = (7500/50000) × 100% = 15%.",
        difficulty: "intermedio"
      },
      {
        id: 15,
        question: "Un producto sube 25% de precio. ¿Cuánto debe bajar el nuevo precio para volver al precio original?",
        options: ["25%", "20%", "30%", "15%"],
        correctIndex: 1,
        explanation: "Si el precio sube 25%, el nuevo es 1.25 veces el original. Para volver: y = 100×25/(100+25) = 2500/125 = 20%. Verificación: 1.25 × 0.80 = 1.00.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "proporcionalidad",
    tip: "En proporcionalidad directa, ambos términos crecen juntos (y/x = k). En inversa, uno sube cuando el otro baja (x×y = k). Identifica primero el tipo antes de plantear la regla de tres.",
    theory: [
      {
        level: "basico",
        title: "Proporcionalidad directa e inversa",
        lines: [
          "Dos magnitudes son **directamente proporcionales** si al duplicar una, la otra también se duplica.",
          "Fórmula: **y = k × x**, donde k es la constante de proporcionalidad.",
          "Dos magnitudes son **inversamente proporcionales** si al duplicar una, la otra se reduce a la mitad.",
          "Fórmula: **y = k / x** o **x × y = k**, donde k es constante.",
          "Si 5 personas consumen 20 kg de arroz en 4 días, la cantidad es directa con personas e inversa con días.",
          "Identificar si es directa o inversa es el paso MÁS IMPORTANTE antes de plantear cualquier regla de tres."
        ]
      },
      {
        level: "intermedio",
        title: "Regla de tres simple",
        lines: [
          "La **regla de tres simple** relaciona dos cantidades directa o inversamente proporcionales.",
          "Si es directa: a/b = c/d → **d = (b × c) / a**.",
          "Si es inversa: a×b = c×d → **d = (a × b) / c**.",
          "Ejemplo directo: si 3 libros cuestan S/ 45, ¿cuánto cuestan 7 libros? → d = (45 × 7)/3 = S/ 105.",
          "Ejemplo inverso: si 6 obreros hacen un trabajo en 10 días, ¿cuántos días con 15 obreros? → d = (6 × 10)/15 = 4 días.",
          "Verifica: ¿al aumentar una variable, la otra aumenta (directa) o disminuye (inversa)?"
        ]
      },
      {
        level: "avanzado",
        title: "Regla de tres compuesta",
        lines: [
          "La **regla de tres compuesta** involucra 3 o más magnitudes simultáneamente.",
          "Plantea una tabla con las cantidades conocidas y la incógnita, y determina la relación de cada una.",
          "Si 8 obreros trabajan 6 horas y ganan S/ 120 en 5 días, ¿cuánto ganan 12 obreros en 4 horas y 3 días?",
          "Todas son directas: (8×6×5)/(12×4×3) = 120/x → x = (12×4×3×120)/(8×6×5) = S/ 144.",
          "Si alguna relación es inversa, multiplicas en lugar de dividir en el denominador.",
          "Dibuja una flecha ↑ o ↓ junto a cada variable para indicar si es directa o inversa antes de plantear."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Proporcionalidad Directa vs Inversa</text>
        <line x1="50" y1="100" x2="130" y2="100" stroke="#333" stroke-width="1"/>
        <line x1="50" y1="40" x2="50" y2="100" stroke="#333" stroke-width="1"/>
        <text x="28" y="75" font-family="Arial" font-size="8" fill="#2563eb" transform="rotate(-90 28 75)" text-anchor="middle">y</text>
        <text x="90" y="112" font-family="Arial" font-size="8" fill="#2563eb" text-anchor="middle">x</text>
        <text x="35" y="38" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">Directa</text>
        <line x1="50" y1="95" x2="80" y2="78" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="80" y1="78" x2="110" y2="60" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="50" cy="95" r="3" fill="#2563eb"/>
        <circle cx="110" cy="60" r="3" fill="#2563eb"/>
        <line x1="170" y1="100" x2="250" y2="100" stroke="#333" stroke-width="1"/>
        <line x1="170" y1="40" x2="170" y2="100" stroke="#333" stroke-width="1"/>
        <text x="148" y="75" font-family="Arial" font-size="8" fill="#dc2626" transform="rotate(-90 148 75)" text-anchor="middle">y</text>
        <text x="210" y="112" font-family="Arial" font-size="8" fill="#dc2626" text-anchor="middle">x</text>
        <text x="155" y="38" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">Inversa</text>
        <path d="M 175 50 Q 200 60 220 78 Q 235 90 248 97" fill="none" stroke="#dc2626" stroke-width="2.5"/>
        <circle cx="175" cy="50" r="3" fill="#dc2626"/>
        <circle cx="248" cy="97" r="3" fill="#dc2626"/>
        <line x1="30" y1="130" x2="270" y2="130" stroke="#e2e8f0" stroke-width="1"/>
        <text x="150" y="150" font-family="Arial" font-size="10" fill="#16a34a" font-weight="bold" text-anchor="middle">Directa: y/x = k (constante)</text>
        <text x="150" y="167" font-family="Arial" font-size="10" fill="#8b5cf6" font-weight="bold" text-anchor="middle">Inversa: x × y = k (constante)</text>
        <text x="150" y="188" font-family="Arial" font-size="10" fill="#f59e0b" font-weight="bold" text-anchor="middle">Regla de tres: identifica → plantea → resuelve</text>
      </svg>`
    ],
    exercises: [
      {
        id: 16,
        question: "Si 4 máquinas producen 600 piezas en 5 horas, ¿cuántas piezas producirán 6 máquinas en 8 horas?",
        options: ["1440", "900", "1200", "1800"],
        correctIndex: 0,
        explanation: "Máquinas y tiempo son directamente proporcionales a la producción. Regla de tres compuesta: (4×5)→600; (6×8)→x. x = (600×6×8)/(4×5) = 28800/20 = 1440 piezas.",
        difficulty: "basico"
      },
      {
        id: 17,
        question: "Si 12 obreros terminan un trabajo en 20 días trabajando 6 horas diarias, ¿cuántos días tardarán 8 obreros trabajando 5 horas diarias?",
        options: ["36 días", "30 días", "32 días", "38 días"],
        correctIndex: 0,
        explanation: "Obreros y horas son directas al trabajo; días es inversa. (12×6)→20 días; (8×5)→d días. d = (12×6×20)/(8×5) = 1440/40 = 36 días.",
        difficulty: "intermedio"
      },
      {
        id: 18,
        question: "Si 5 camiones transportan 150 toneladas en 10 viajes, ¿cuántos viajes necesitan 8 camiones para transportar 240 toneladas si cada camión lleva 3 toneladas por viaje?",
        options: ["10 viajes", "15 viajes", "12 viajes", "8 viajes"],
        correctIndex: 0,
        explanation: "Capacidad por camión = 150/(5×10) = 3 ton/viaje. Toneladas = camiones × viajes × ton/viaje. 240 = 8 × v × 3 → v = 240/24 = 10 viajes.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "problemas-densidad",
    tip: "La densidad es masa entre volumen: ρ = m/V. Si conoces dos de las tres variables, despeja la tercera. Recuerda: 1 mL = 1 cm³ y la densidad del agua es 1 g/cm³. Un objeto flota si su densidad es menor que la del líquido.",
    theory: [
      {
        level: "basico",
        title: "Conceptos de densidad",
        lines: [
          "La **densidad** (ρ) es la masa por unidad de volumen: **ρ = m/V**.",
          "Unidades comunes: g/cm³, kg/m³, g/mL. Para convertir g/cm³ a kg/m³ multiplica por 1000.",
          "La densidad del agua es **1 g/cm³** o **1000 kg/m³** (a 4°C).",
          "Un objeto **flota** si su densidad es menor que la del líquido donde se sumerge.",
          "Un objeto **se hunde** si su densidad es mayor que la del líquido.",
          "La densidad es una propiedad característica de cada sustancia y no depende de la cantidad."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y aplicaciones",
        lines: [
          "Para calcular la masa: **m = ρ × V** (masa = densidad × volumen).",
          "Para calcular el volumen: **V = m/ρ** (volumen = masa / densidad).",
          "Un cuerpo sumergido experimenta un **empuje** igual al peso del líquido desplazado.",
          "Empuje: **E = ρ_liquido × V_desplazado × g**, donde g es la gravedad.",
          "Si un cuerpo flota, su masa equals la masa del líquido desplazado: **m = ρ_liquido × V_sumergido**.",
          "Para mezclas: la densidad promedio es **ρ_prom = (m₁ + m₂) / (V₁ + V₂)**."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos de densidad",
        lines: [
          "Si un cuerpo tiene partes con diferente densidad, su densidad total es **ρ = Σmᵢ / ΣVᵢ**.",
          "La fracción sumergida de un cuerpo que flota es **ρ_cuerpo / ρ_liquido**.",
          "Si una esfera de radio R se sumerge, el volumen desplazado es **V = (4/3)πR³**.",
          "Densidad relativa = **ρ_sustancia / ρ_agua**. Es un número adimensional.",
          "En equilibrio flotante: el peso equals el empuje: **mg = ρ_liquido × V_sumergido × g**.",
          "Cuando mezcles sustancias de diferentes densidades, calcula la masa total y el volumen total por separado."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Densidad: Flota o se hunde</text>
        <rect x="40" y="60" width="90" height="115" rx="6" fill="#dbeafe" fill-opacity="0.3" stroke="#2563eb" stroke-width="2"/>
        <rect x="40" y="95" width="90" height="80" rx="0" fill="#2563eb" fill-opacity="0.3"/>
        <text x="85" y="155" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold" text-anchor="middle">Agua</text>
        <text x="85" y="172" font-family="Arial" font-size="8" fill="#2563eb" text-anchor="middle">ρ = 1 g/cm³</text>
        <rect x="60" y="52" width="50" height="42" rx="4" fill="#f59e0b" fill-opacity="0.7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="85" y="78" font-family="Arial" font-size="9" fill="#333" font-weight="bold" text-anchor="middle">Madera</text>
        <text x="85" y="44" font-family="Arial" font-size="9" fill="#16a34a" font-weight="bold" text-anchor="middle">FLOTA</text>
        <text x="118" y="65" font-family="Arial" font-size="8" fill="#16a34a">ρ=0.6</text>
        <rect x="170" y="60" width="90" height="115" rx="6" fill="#dbeafe" fill-opacity="0.3" stroke="#2563eb" stroke-width="2"/>
        <rect x="170" y="95" width="90" height="80" rx="0" fill="#2563eb" fill-opacity="0.3"/>
        <text x="215" y="155" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold" text-anchor="middle">Agua</text>
        <text x="215" y="172" font-family="Arial" font-size="8" fill="#2563eb" text-anchor="middle">ρ = 1 g/cm³</text>
        <rect x="190" y="110" width="50" height="48" rx="4" fill="#8b5cf6" fill-opacity="0.7" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="215" y="138" font-family="Arial" font-size="9" fill="#fff" font-weight="bold" text-anchor="middle">Hierro</text>
        <text x="215" y="103" font-family="Arial" font-size="9" fill="#dc2626" font-weight="bold" text-anchor="middle">SE HUNDE</text>
        <text x="248" y="107" font-family="Arial" font-size="8" fill="#dc2626">ρ=7.8</text>
        <text x="150" y="40" font-family="Arial" font-size="11" fill="#8b5cf6" font-weight="bold" text-anchor="middle">ρ = m / V</text>
      </svg>`
    ],
    exercises: [
      {
        id: 19,
        question: "Un bloque de metal tiene una masa de 270 g y un volumen de 100 cm³. ¿Cuál es su densidad?",
        options: ["2.7 g/cm³", "0.37 g/cm³", "27 g/cm³", "270 g/cm³"],
        correctIndex: 0,
        explanation: "ρ = m/V = 270/100 = 2.7 g/cm³ (esta es la densidad del aluminio).",
        difficulty: "basico"
      },
      {
        id: 20,
        question: "Un objeto de densidad 0.8 g/cm³ se sumerge en agua (ρ = 1 g/cm³). ¿Qué fracción de su volumen queda sumergida?",
        options: ["80%", "20%", "50%", "100%"],
        correctIndex: 0,
        explanation: "La fracción sumergida = ρ_objeto/ρ_liquido = 0.8/1 = 0.8 = 80%. El objeto flota con el 80% bajo el agua.",
        difficulty: "intermedio"
      },
      {
        id: 21,
        question: "Se mezclan 200 cm³ de un líquido con densidad 0.5 g/cm³ con 300 cm³ de otro con densidad 1.2 g/cm³. ¿Cuál es la densidad de la mezcla?",
        options: ["0.92 g/cm³", "0.85 g/cm³", "0.7 g/cm³", "1.0 g/cm³"],
        correctIndex: 0,
        explanation: "Masa total = 200×0.5 + 300×1.2 = 100 + 360 = 460 g. Volumen total = 200 + 300 = 500 cm³. ρ_mix = 460/500 = 0.92 g/cm³.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "problemas-edad-avanzados",
    tip: "En problemas de edades, define la edad de UNA persona como variable base y expresa las demás en función de ella. Recuerda que la diferencia de edad entre dos personas NUNCA cambia con el tiempo.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales de edades",
        lines: [
          "Define **x** como la edad actual de una persona y expresa las demás edades en función de x.",
          "La **diferencia de edad** entre dos personas es **constante** a lo largo del tiempo.",
          "Si Ana tiene el doble de la edad de Luis, y Luis tiene 10 años, Ana tiene 20 años.",
          "Dentro de 'n' años, la edad será **edad actual + n**.",
          "Hace 'n' años, la edad era **edad actual − n**.",
          "Siempre verifica que las edades resultantes sean **positivas** y **lógicas**."
        ]
      },
      {
        level: "intermedio",
        title: "Relaciones entre dos personas",
        lines: [
          "Si la suma de edades es S y una es n años mayor, las edades son **(S−n)/2** y **(S+n)/2**.",
          "Si hace 5 años el padre tenía el triple del hijo: **padre − 5 = 3(hijo − 5)**.",
          "La edad del padre siempre es mayor que la del hijo. Verifica este dato final.",
          "Si dentro de n años la suma será S_future, hoy la suma es **S_future − 2n**.",
          "No confundas 'dentro de n años' con 'hace n años'. Cada uno afecta a TODOS los involucrados.",
          "Verifica sustituyendo las edades encontradas en el enunciado original."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas con múltiples personas y relaciones",
        lines: [
          "Con 3 o más personas, establece **una sola variable base** y expresa todas las edades con ella.",
          "Si A es el doble de B, B es 3 años mayor que C, y la suma es 50: A=2B, B=C+3, A+B+C=50.",
          "Sustituyendo: 2B + B + (B−3) = 50 → 4B = 53 → B = 13.25. Si no da entero, verifica el enunciado.",
          "Si hace n años la suma de edades de k personas era S: la suma actual es **S + k×n**.",
          "Problema clásico: relacionar edades en pasado y presente usando ecuaciones simultáneas.",
          "Dibuja una tabla de edades (pasado, presente, futuro) para organizar la información antes de plantear."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Relación de edades en el tiempo</text>
        <line x1="30" y1="100" x2="270" y2="100" stroke="#333" stroke-width="2"/>
        <circle cx="80" cy="100" r="22" fill="#2563eb" fill-opacity="0.2" stroke="#2563eb" stroke-width="2"/>
        <circle cx="80" cy="100" r="15" fill="#2563eb"/>
        <text x="80" y="105" font-family="Arial" font-size="12" fill="#fff" font-weight="bold" text-anchor="middle">P</text>
        <text x="80" y="138" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold" text-anchor="middle">Padre</text>
        <text x="80" y="152" font-family="Arial" font-size="9" fill="#333" text-anchor="middle">edad = x</text>
        <circle cx="170" cy="100" r="14" fill="#dc2626" fill-opacity="0.2" stroke="#dc2626" stroke-width="2"/>
        <circle cx="170" cy="100" r="10" fill="#dc2626"/>
        <text x="170" y="104" font-family="Arial" font-size="9" fill="#fff" font-weight="bold" text-anchor="middle">M</text>
        <text x="170" y="138" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold" text-anchor="middle">Madre</text>
        <text x="170" y="152" font-family="Arial" font-size="9" fill="#333" text-anchor="middle">edad = x − 3</text>
        <circle cx="250" cy="100" r="10" fill="#16a34a" fill-opacity="0.2" stroke="#16a34a" stroke-width="2"/>
        <circle cx="250" cy="100" r="7" fill="#16a34a"/>
        <text x="250" y="103" font-family="Arial" font-size="8" fill="#fff" font-weight="bold" text-anchor="middle">H</text>
        <text x="250" y="138" font-family="Arial" font-size="10" fill="#16a34a" font-weight="bold" text-anchor="middle">Hijo</text>
        <text x="250" y="152" font-family="Arial" font-size="9" fill="#333" text-anchor="middle">edad = x/3</text>
        <text x="80" y="82" font-family="Arial" font-size="8" fill="#2563eb" text-anchor="middle">Hace n años</text>
        <text x="170" y="82" font-family="Arial" font-size="8" fill="#dc2626" text-anchor="middle">Hoy</text>
        <text x="250" y="82" font-family="Arial" font-size="8" fill="#16a34a" text-anchor="middle">En n años</text>
        <rect x="40" y="168" width="220" height="25" rx="5" fill="#f0fdf4" fill-opacity="0.7" stroke="#16a34a" stroke-width="1"/>
        <text x="150" y="185" font-family="Arial" font-size="10" fill="#8b5cf6" font-weight="bold" text-anchor="middle">La diferencia de edad NUNCA cambia</text>
      </svg>`
    ],
    exercises: [
      {
        id: 22,
        question: "Carlos tiene el triple de la edad de su hijo. Dentro de 10 años, Carlos tendrá el doble de la edad de su hijo. ¿Cuántos años tiene el hijo actualmente?",
        options: ["10 años", "15 años", "8 años", "12 años"],
        correctIndex: 0,
        explanation: "Hijo = x, Carlos = 3x. En 10 años: 3x + 10 = 2(x + 10) → 3x + 10 = 2x + 20 → x = 10. El hijo tiene 10 años.",
        difficulty: "basico"
      },
      {
        id: 23,
        question: "La suma de las edades de un padre y su hijo es 52. Hace 8 años, el padre tenía el triple de la edad del hijo. ¿Cuántos años tiene el padre?",
        options: ["35 años", "30 años", "40 años", "32 años"],
        correctIndex: 0,
        explanation: "Padre = x, hijo = 52 − x. Hace 8 años: x − 8 = 3(52 − x − 8) → x − 8 = 3(44 − x) → x − 8 = 132 − 3x → 4x = 140 → x = 35. Verificación: hijo = 17. Hace 8: padre = 27, hijo = 9. 27 = 3 × 9. Correcto.",
        difficulty: "intermedio"
      },
      {
        id: 24,
        question: "Cuatro hermanos tienen edades que suman 60 años. El mayor tiene el triple del menor. El segundo tiene 4 años más que el menor. El tercero tiene el doble del menor. ¿Cuántos años tiene el segundo hermano?",
        options: ["12 años", "10 años", "14 años", "16 años"],
        correctIndex: 0,
        explanation: "Menor = m. Segundo = m + 4. Tercero = 2m. Mayor = 3m. Suma: m + (m + 4) + 2m + 3m = 60 → 7m + 4 = 60 → 7m = 56 → m = 8. El segundo tiene 8 + 4 = 12 años. Verificación: 8 + 12 + 16 + 24 = 60.",
        difficulty: "avanzado"
      }
    ]
  }
];
