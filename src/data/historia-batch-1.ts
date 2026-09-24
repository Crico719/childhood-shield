export const historiaBatch1 = [
  {
    slug: "cultura-wari-tiahuanaco",
    tip: "Wari y Tiwanaku fueron los primeros imperios expansionistas del mundo andino, anteriores a los incas.",
    theory: [
      {
        level: "basico",
        title: "Los dos grandes imperios tempranos",
        lines: [
          "El Imperio Wari se desarrolló entre los años 550 y 1000 d.C. en la sierra central del Perú.",
          "Su capital se ubicaba en la ciudad de Wari, actualmente en el departamento de Ayacucho.",
          "El Imperio Tiwanaku surgió en la meseta del Collao, cerca del lago Titicaca, en Bolivia.",
          "Ambos imperios coexistieron durante varios siglos y dominaron vastos territorios.",
          "Los Wari controlaron la costa, sierra y parte de la selva del antiguo Perú.",
          "Tiwanaku extendió su influencia desde el sur de Perú hasta Bolivia, Chile y Argentina."
        ]
      },
      {
        level: "intermedio",
        title: "Administración y mitmaqkuna",
        lines: [
          "Wari implementó un sistema de colonización llamado mitmaqkuna para controlar los territorios conquistados.",
          "Los mitmaqkuna eran poblaciones trasladadas forzosamente a regiones lejanas para pacificarlas.",
          "Ambos imperios contaron con una red de centros administrativos distribuidos por su territorio.",
          "Los Wari desarrollaron un complejo sistema de caminos que conectaba sus diversas ciudades.",
          "Tiwanaku utilizó el sistema de terrazas agrícolas para alimentar a su extensa población.",
          "La administración centralizada permitió a ambos imperios manejar grandes excedentes de alimentos."
        ]
      },
      {
        level: "avanzado",
        title: "Economía, arte y decadencia",
        lines: [
          "La economía Wari se basaba en la agricultura intensiva, la metalurgia y el comercio a larga distancia.",
          "Los textiles Wari son considerados entre los más finos de la historia andina, con patrones complejos.",
          "Tiwanaku desarrolló una agricultura especializada con camellones o waru waru en el altiplano.",
          "Ambos imperios experimentaron un declive gradual alrededor del año 1000 d.C.",
          "El cambio climático y las sequías prolongadas debilitaron las estructuras políticas imperiales.",
          "La caída de estos imperios generó un período de señoríos regionales independientes en todo el territorio."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc"/>
        <rect x="20" y="20" width="120" height="160" rx="8" fill="#2563eb" opacity="0.15"/>
        <rect x="160" y="20" width="120" height="160" rx="8" fill="#dc2626" opacity="0.15"/>
        <text x="80" y="45" text-anchor="middle" font-size="14" font-weight="bold" fill="#2563eb">WARI</text>
        <text x="220" y="45" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626">TIWANAKU</text>
        <rect x="35" y="55" width="90" height="25" rx="4" fill="#2563eb"/>
        <text x="80" y="72" text-anchor="middle" font-size="10" fill="white">550-1000 d.C.</text>
        <rect x="175" y="55" width="90" height="25" rx="4" fill="#dc2626"/>
        <text x="220" y="72" text-anchor="middle" font-size="10" fill="white">500-1000 d.C.</text>
        <text x="80" y="105" text-anchor="middle" font-size="9" fill="#334155">Capital: Ayacucho</text>
        <text x="80" y="120" text-anchor="middle" font-size="9" fill="#334155">Costa y Sierra</text>
        <text x="80" y="135" text-anchor="middle" font-size="9" fill="#334155">Mitmaqkuna</text>
        <text x="80" y="150" text-anchor="middle" font-size="9" fill="#334155">Textiles finos</text>
        <text x="220" y="105" text-anchor="middle" font-size="9" fill="#334155">Capital: Lago Titicaca</text>
        <text x="220" y="120" text-anchor="middle" font-size="9" fill="#334155">Altiplano y sur</text>
        <text x="220" y="135" text-anchor="middle" font-size="9" fill="#334155">Waru waru</text>
        <text x="220" y="150" text-anchor="middle" font-size="9" fill="#334155">Cerámica monumental</text>
        <line x1="140" y1="90" x2="160" y2="90" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="150" y="85" text-anchor="middle" font-size="8" fill="#f59e0b">COEX</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7001,
        question: "¿En qué siglo se ubica el auge del Imperio Wari?",
        options: ["Siglos III-V d.C.", "Siglos VI-X d.C.", "Siglos XI-XIII d.C.", "Siglos XIV-XV d.C."],
        correctIndex: 1,
        explanation: "El Imperio Wari se desarrolló entre los años 550 y 1000 d.C., es decir, durante los siglos VI al X.",
        difficulty: "basico"
      },
      {
        id: 7002,
        question: "¿Qué eran los mitmaqkuna en el contexto del Imperio Wari?",
        options: [
          "Sacerdotes del templo principal",
          "Poblaciones trasladadas forzosamente para controlar territorios",
          "Soldados de élite del ejército Wari",
          "Artesanos especializados en metalurgia"
        ],
        correctIndex: 1,
        explanation: "Los mitmaqkuna eran grupos de personas desplazadas de sus comunidades originales y reubicadas en zonas conquistadas para pacificarlas y controlarlas.",
        difficulty: "intermedio"
      },
      {
        id: 7003,
        question: "¿Cuál fue una de las principales causas de la caída de los imperios Wari y Tiwanaku?",
        options: [
          "Invasiones extranjeras desde la costa",
          "Guerras internas por sucesión al trono",
          "Cambio climático y sequías prolongadas",
          "Terremotos que destruyeron sus ciudades"
        ],
        correctIndex: 2,
        explanation: "El cambio climático, especialmente las sequías prolongadas alrededor del año 1000 d.C., debilitó las estructuras agrícolas y políticas de ambos imperios.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "senorios-regionales",
    tip: "Tras la caída de Wari y Tiwanaku, surgieron múltiples señoríos independientes que dominaron distintas regiones del Perú.",
    theory: [
      {
        level: "basico",
        title: "El período de los señoríos",
        lines: [
          "Entre los años 1000 y 1400 d.C., el territorio peruano se fragmentó en múltiples señoríos regionales.",
          "Cada señorío controlaba un territorio específico y mantenía su propia organización política.",
          "Los principales señoríos se ubicaban en la costa, sierra y valles intermedios del Perú.",
          "Este período se conoce como el Horizonte Tardío o Intermedio Tardío.",
          "Los señoríos competían por territorios, recursos y rutas comerciales entre sí.",
          "La diversidad cultural de este período es una de las más ricas de la historia andina."
        ]
      },
      {
        level: "intermedio",
        title: "Los principales señoríos costeños",
        lines: [
          "Los Chanka dominaron el valle del Apurímac y son conocidos por su resistencia ante los incas.",
          "El Señorío de Chincha controlaba la costa central y mantuvo activas rutas comerciales marítimas.",
          "Los Ichma se asentaron en el valle de Lima, construyendo centros ceremoniales como Huaca Pucllana.",
          "El Señorío de Lambayeque (o Sicán) dominó la costa norte con una gran tradición metalúrgica.",
          "Los Tallán y los Piura se ubicaron en la zona noroccidental,靠近 el actual Piura.",
          "Cada señorío tenía su propia élite gobernante, sistema de reciprocidad y organizaciones militares."
        ]
      },
      {
        level: "avanzado",
        title: "Conflictos y organización política",
        lines: [
          "Los Chanka fueron uno de los señoríos más poderosos y se enfrentaron directamente al Imperio Inca.",
          "Según la crónica, los Chanka derrotaron a los incas antes de que Pachacútec tomara el poder.",
          "El Señorío de Chincha poseía una flota de balsas que comerciaba con el actual Ecuador.",
          "Los señoríos costeños desarrollaron sistemas de irrigación cada vez más complejos para la agricultura.",
          "La elite de cada señorío legitimaba su poder a través de linajes ancestrales y ceremonias religiosas.",
          "La caída de estos señoríos se produjo gradualmente bajo la expansión del Tahuantinsuyo."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f0fdf4"/>
        <text x="150" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">SEÑORÍOS REGIONALES</text>
        <text x="150" y="40" text-anchor="middle" font-size="9" fill="#334155">1000-1400 d.C.</text>
        <rect x="15" y="50" width="55" height="35" rx="5" fill="#2563eb" opacity="0.8"/>
        <text x="42" y="65" text-anchor="middle" font-size="8" fill="white" font-weight="bold">CHANKA</text>
        <text x="42" y="77" text-anchor="middle" font-size="7" fill="#e0f2fe">Apurímac</text>
        <rect x="80" y="50" width="55" height="35" rx="5" fill="#dc2626" opacity="0.8"/>
        <text x="107" y="65" text-anchor="middle" font-size="8" fill="white" font-weight="bold">CHINCHA</text>
        <text x="107" y="77" text-anchor="middle" font-size="7" fill="#fee2e2">Costa</text>
        <rect x="145" y="50" width="55" height="35" rx="5" fill="#16a34a" opacity="0.8"/>
        <text x="172" y="65" text-anchor="middle" font-size="8" fill="white" font-weight="bold">ICHMA</text>
        <text x="172" y="77" text-anchor="middle" font-size="7" fill="#dcfce7">Lima</text>
        <rect x="210" y="50" width="55" height="35" rx="5" fill="#f59e0b" opacity="0.8"/>
        <text x="237" y="65" text-anchor="middle" font-size="8" fill="white" font-weight="bold">LAMBAYEQUE</text>
        <text x="237" y="77" text-anchor="middle" font-size="7" fill="#fef3c7">Norte</text>
        <line x1="42" y1="85" x2="42" y2="105" stroke="#2563eb" stroke-width="2"/>
        <line x1="107" y1="85" x2="107" y2="105" stroke="#dc2626" stroke-width="2"/>
        <line x1="172" y1="85" x2="172" y2="105" stroke="#16a34a" stroke-width="2"/>
        <line x1="237" y1="85" x2="237" y2="105" stroke="#f59e0b" stroke-width="2"/>
        <rect x="20" y="108" width="260" height="75" rx="6" fill="#f1f5f9"/>
        <text x="150" y="128" text-anchor="middle" font-size="10" fill="#334155" font-weight="bold">Organización Política</text>
        <text x="150" y="148" text-anchor="middle" font-size="9" fill="#475569">• Línea gobernante por cada señorío</text>
        <text x="150" y="163" text-anchor="middle" font-size="9" fill="#475569">• Ejércitos propios y rituales religiosos</text>
        <text x="150" y="178" text-anchor="middle" font-size="9" fill="#475569">• Comercio y guerra entre señoríos</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7004,
        question: "¿En qué período se desarrolló la época de los señoríos regionales en el Perú?",
        options: [
          "200 a.C. al 200 d.C.",
          "200 al 600 d.C.",
          "1000 al 1400 d.C.",
          "1470 al 1533 d.C."
        ],
        correctIndex: 2,
        explanation: "Los señoríos regionales surgieron tras la caída de Wari y Tiwanaku, entre los años 1000 y 1400 d.C., durante el Intermedio Tardío.",
        difficulty: "basico"
      },
      {
        id: 7005,
        question: "¿Qué señorío controlaba el valle del Apurímac y se enfrentó a los incas?",
        options: ["Chincha", "Ichma", "Chanka", "Lambayeque"],
        correctIndex: 2,
        explanation: "Los Chanka dominaban el valle del Apurímac y son conocidos por haber derrotado a los incas antes del ascenso de Pachacútec al poder.",
        difficulty: "intermedio"
      },
      {
        id: 7006,
        question: "¿Qué característica distinguía al Señorío de Chincha de otros señoríos costeños?",
        options: [
          "Poseía la mayor red de terrazas agrícolas",
          "Mantenía una flota de balsas para el comercio marítimo",
          "Era el más grande en extensión territorial",
          "No tenía ejército propio"
        ],
        correctIndex: 1,
        explanation: "El Señorío de Chincha se distinguía por mantener una activa flota de balsas que comerciaba a larga distancia, incluso con el actual Ecuador.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "culturas-costeras-detalladas",
    tip: "Las culturas costeñas desarrollaron obras monumentales como las Huacas de Moche y las Líneas de Nazca sin usar la rueda ni animales de tiro.",
    theory: [
      {
        level: "basico",
        title: "Las grandes culturas de la costa",
        lines: [
          "Los Moche habitaron la costa norte del Perú entre 100 y 700 d.C., construyendo las Huacas del Sol y de la Luna.",
          "Los Nazca florecieron entre 100 a.C. y 800 d.C. en el valle del río Grande de Nazca.",
          "Los Chimú dominaron la costa norte entre 900 y 1470 d.C., con su gran capital en Chan Chan.",
          "Cada cultura desarrolló técnicas agrícolas y artísticas únicas adaptadas a su entorno.",
          "Las huacas Moche eran estructuras de adobe de enormes dimensiones para ceremonias religiosas.",
          "Los Nazca son mundialmente famosos por las Líneas y geoglífos del desierto de Nazca."
        ]
      },
      {
        level: "intermedio",
        title: "Obras e innovaciones destacadas",
        lines: [
          "Los Nazca construyeron los puquios, un sofisticado sistema de acueductos subterráneos para irrigación.",
          "Los Cantonales Nazca eran estructuras ceremoniales vinculadas al calendario agrícola y religioso.",
          "Los Moche realizaron sacrificios humanos rituales, como se evidencia en los hallazgos de Huaca de la Luna.",
          "Los Chimú perfeccionaron la orfebrería con técnicas como el repujado y la soldadura.",
          "Chan Chan fue la ciudad de adobe más grande del mundo, con 20 km² de extensión.",
          "Los Chimú también desarrollaron ingeniería hidráulica con canales de varios kilómetros de longitud."
        ]
      },
      {
        level: "avanzado",
        title: "Religión, arte y legado",
        lines: [
          "El arte Moche retrataba escenas cotidianas y ceremoniales con gran realismo en su cerámica.",
          "Las Líneas de Nazca representan animales, plantas y figuras geométricas visibles solo desde el aire.",
          "Los Nazca utilizaban pigmentos minerales que resistían la intemperie durante siglos en la superficie.",
          "La metalurgia Chimú incluía piezas de oro, plata y cobre con incrustaciones de piedras preciosas.",
          "El sacrificio de los Siete Interpretantes de San José de Moro es un ejemplo del ritual Moche.",
          "Todas estas culturas fueron finalmente absorbidas por el Imperio Inca en su expansión hacia el sur."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#fef3c7"/>
        <text x="150" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">CULTURAS COSTEÑAS</text>
        <rect x="10" y="35" width="85" height="150" rx="6" fill="#dc2626" opacity="0.15"/>
        <rect x="107" y="35" width="85" height="150" rx="6" fill="#2563eb" opacity="0.15"/>
        <rect x="205" y="35" width="85" height="150" rx="6" fill="#8b5cf6" opacity="0.15"/>
        <text x="52" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">MOCHE</text>
        <text x="150" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">NAZCA</text>
        <text x="247" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#8b5cf6">CHIMÚ</text>
        <rect x="20" y="65" width="65" height="20" rx="3" fill="#dc2626"/>
        <text x="52" y="79" text-anchor="middle" font-size="8" fill="white">100-700 d.C.</text>
        <rect x="117" y="65" width="65" height="20" rx="3" fill="#2563eb"/>
        <text x="150" y="79" text-anchor="middle" font-size="8" fill="white">100aC-800dC</text>
        <rect x="215" y="65" width="65" height="20" rx="3" fill="#8b5cf6"/>
        <text x="247" y="79" text-anchor="middle" font-size="8" fill="white">900-1470dC</text>
        <text x="52" y="105" text-anchor="middle" font-size="8" fill="#475569">• Huacas de adobe</text>
        <text x="52" y="118" text-anchor="middle" font-size="8" fill="#475569">• Sacrificios rituales</text>
        <text x="52" y="131" text-anchor="middle" font-size="8" fill="#475569">• Cerámica realista</text>
        <text x="150" y="105" text-anchor="middle" font-size="8" fill="#475569">• Líneas/Geoglífos</text>
        <text x="150" y="118" text-anchor="middle" font-size="8" fill="#475569">• Puquios</text>
        <text x="150" y="131" text-anchor="middle" font-size="8" fill="#475569">• Cantorales</text>
        <text x="247" y="105" text-anchor="middle" font-size="8" fill="#475569">• Chan Chan</text>
        <text x="247" y="118" text-anchor="middle" font-size="8" fill="#475569">• Orfebrería</text>
        <text x="247" y="131" text-anchor="middle" font-size="8" fill="#475569">• Canales</text>
        <line x1="52" y1="145" x2="150" y2="145" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="150" y1="145" x2="247" y2="145" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="150" y="180" text-anchor="middle" font-size="8" fill="#92400e">Todas absorbidas por el Imperio Inca</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7007,
        question: "¿Qué civilización construyó las Huacas del Sol y de la Luna?",
        options: ["Nazca", "Moche", "Chimú", "Wari"],
        correctIndex: 1,
        explanation: "Los Moche construyeron las imponentes Huacas del Sol y de la Luna en la costa norte del Perú entre los años 100 y 700 d.C.",
        difficulty: "basico"
      },
      {
        id: 7008,
        question: "¿Qué son los puquios de los Nazca?",
        options: [
          "Cerámicas decorativas ceremoniales",
          "Sistema de acueductos subterráneos para irrigación",
          "Templos construidos en el desierto",
          "Canales de navegación marítima"
        ],
        correctIndex: 1,
        explanation: "Los puquios eran un sofisticado sistema de acueductos subterráneos que los Nazca construyeron para transportar agua desde los ríos subterráneos hasta sus campos agrícolas.",
        difficulty: "intermedio"
      },
      {
        id: 7009,
        question: "¿Qué técnica metalúrgica desarrollaron los Chimú que fue pionera en Sudamérica?",
        options: [
          "Fundición a la cera perdida sin aleaciones",
          "Repujado y soldadura de metales preciosos",
          "Uso exclusivo del oro puro sin mezclar",
          "Trabajo con piedras semipreciosas solamente"
        ],
        correctIndex: 1,
        explanation: "Los Chimú perfeccionaron técnicas como el repujado y la soldadura de metales, creando piezas de orfebrería de gran complejidad y calidad.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "agricultura-andina",
    tip: "Los antiguos peruanos domesticaron más de 3,000 variedades de papa y desarrollaron el chuño hace más de 2,000 años.",
    theory: [
      {
        level: "basico",
        title: "Bases de la agricultura andina",
        lines: [
          "Los andes son uno de los centros de origen de la agricultura mundial, con miles de años de desarrollo.",
          "Los antiguos peruanos domesticaron la papa, la quinua, el maíz, la yuca y muchas otras plantas.",
          "La ganadería de camélidos (llamas y alpacas) fue fundamental para la economía andina.",
          "El sistema de andenes o terrazas agrícolas permitió cultivar en las empinadas laderas de los Andes.",
          "El waru waru o camellón era un sistema de campos elevados rodeados de canales en zonas húmedas.",
          "Estas técnicas permitieron producir excedentes para sostener grandes poblaciones en zonas difíciles."
        ]
      },
      {
        level: "intermedio",
        title: "Técnicas avanzadas de conservación",
        lines: [
          "El chuño es un producto deshidratado congelando las papas al aire libre durante las noches heladas.",
          "El proceso de chuño se realiza exposureando las papas a temperaturas bajo cero y al sol alternadamente.",
          "El chuño permite conservar las papas durante años, incluso décadas, sin estropearse.",
          "Los andenes maximizaban el uso del agua de lluvia y la luz solar en diferentes alturas.",
          "Los waru waru usaban el calor acumulado en los canales para proteger los cultivos de heladas.",
          "La rotación de cultivos y el uso de fertilizantes naturales mejoraban la productividad del suelo."
        ]
      },
      {
        level: "avanzado",
        title: "Legado y diversidad agrícola",
        lines: [
          "Se estima que los antiguos peruanos domesticaron más de 3,000 variedades de papa en distintas regiones.",
          "La quinua fue un alimento estratégico por su alto valor nutricional y resistencia a condiciones extremas.",
          "Los camélidos proporcionaban lana, carne, cuero y servían como animales de carga en las caravanas.",
          "El sistema de sayaña consistía en terrazas escalonadas que creaban microclimas favorables.",
          "La agricultura vertical permitía a una comunidad tener productos de distintas alturas ecológicas.",
          "El legado agrícola andino sigue vigente hoy, con comunidades que mantienen técnicas ancestrales."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f0fdf4"/>
        <text x="150" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">AGRICULTURA ANDINA</text>
        <path d="M 20 180 L 20 100 L 70 80 L 70 180" fill="#16a34a" opacity="0.3" stroke="#16a34a" stroke-width="1"/>
        <path d="M 50 180 L 50 90 L 100 70 L 100 180" fill="#16a34a" opacity="0.4" stroke="#16a34a" stroke-width="1"/>
        <path d="M 80 180 L 80 80 L 130 60 L 130 180" fill="#16a34a" opacity="0.5" stroke="#16a34a" stroke-width="1"/>
        <text x="75" y="195" text-anchor="middle" font-size="9" fill="#334155" font-weight="bold">ANDENES</text>
        <line x1="145" y1="40" x2="145" y2="180" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
        <rect x="160" y="45" width="120" height="35" rx="5" fill="#2563eb" opacity="0.8"/>
        <text x="220" y="60" text-anchor="middle" font-size="9" fill="white" font-weight="bold">CHUÑO</text>
        <text x="220" y="72" text-anchor="middle" font-size="8" fill="#e0f2fe">Congelación al aire libre</text>
        <rect x="160" y="90" width="120" height="35" rx="5" fill="#f59e0b" opacity="0.8"/>
        <text x="220" y="105" text-anchor="middle" font-size="9" fill="white" font-weight="bold">WARU WARU</text>
        <text x="220" y="117" text-anchor="middle" font-size="8" fill="#fef3c7">Campos + canales</text>
        <rect x="160" y="135" width="120" height="35" rx="5" fill="#8b5cf6" opacity="0.8"/>
        <text x="220" y="150" text-anchor="middle" font-size="9" fill="white" font-weight="bold">CAMELIDOS</text>
        <text x="220" y="162" text-anchor="middle" font-size="8" fill="#ede9fe">Llamas y alpacas</text>
        <text x="150" y="195" text-anchor="middle" font-size="8" fill="#16a34a">Más de 3,000 variedades de papa domesticadas</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7010,
        question: "¿Qué es el chuño?",
        options: [
          "Un tipo de fertilizante natural andino",
          "Papa deshidratada mediante ciclos de congelación al aire libre",
          "Un canal de irrigación subterráneo",
          "Una semilla ceremonial usada en rituales"
        ],
        correctIndex: 1,
        explanation: "El chuño es papa deshidratada mediante ciclos alternos de congelación nocturna al aire libre y secado solar, permitiendo su conservación por años.",
        difficulty: "basico"
      },
      {
        id: 7011,
        question: "¿Cómo funcionaba el sistema de waru waru para proteger los cultivos?",
        options: [
          "Usaban paredes de piedra para bloquear el viento",
          "El calor acumulado en los canales protegía las plantas de heladas nocturnas",
          "Sembraban solo en épocas de lluvia intensa",
          "Usaban fuego continuo para calentar el suelo"
        ],
        correctIndex: 1,
        explanation: "Los waru waru consistían en campos elevados rodeados de canales de agua que acumulaban calor durante el día y lo liberaban por la noche, protegiendo los cultivos del frío.",
        difficulty: "intermedio"
      },
      {
        id: 7012,
        question: "¿Qué es la agricultura vertical en los Andes?",
        options: [
          "Cultivar en terrazas muy empinadas sin escaleras",
          "Una comunidad controlando productos de distintas altitudes ecológicas",
          "Usar semillas adaptadas solo a grandes alturas",
          "Un sistema de riego por gravedad desde la cumbre"
        ],
        correctIndex: 1,
        explanation: "La agricultura vertical permitía que una misma comunidad controlara recursos de distintas zonas altitudinales, desde la costa hasta la sierra alta, accediendo a productos diversos.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "qhapaq-nan-caminos",
    tip: "El Qhapaq Ñan tenía más de 30,000 km y conectaba desde Colombia hasta Chile, siendo una de las mayores obras de ingeniería de la antigüedad.",
    theory: [
      {
        level: "basico",
        title: "El camino incaico",
        lines: [
          "El Qhapaq Ñan era la red de caminos construida por el Imperio Inca que recorría todo el Tahuantinsuyo.",
          "Su extensión total era de aproximadamente 30,000 kilómetros, desde Colombia hasta Chile.",
          "El camino conectaba las principales ciudades, centros administrativos y zonas productivas del imperio.",
          "Fue construido utilizando técnicas de ingeniería avanzada como puentes colgantes y túneles.",
          "El Qhapaq Ñan permitía el desplazamiento rápido de ejércitos, mensajeros y caravanas de llamas.",
          "Hoy está declarado Patrimonio Mundial de la Humanidad por la UNESCO desde 2014."
        ]
      },
      {
        level: "intermedio",
        title: "Tambos y chasquis",
        lines: [
          "Los tambos eran estaciones de descanso y aprovisionamiento distribuidas cada pocos kilómetros a lo largo del camino.",
          "En los tambos se almacenaban alimentos, herramientas y suministros para viajeros y ejércitos.",
          "Los chasquis eran mensajeros relé que transportaban información y objetos a gran velocidad por el camino.",
          "Cada chasquis recorría tramos de aproximadamente 6 kilómetros, cambiando de corredor en cada tambo.",
          "El sistema de chasquis permitía que un mensaje viajara más de 240 km en un solo día.",
          "Los tambos más grandes funcionaban como centros administrativos y almacenes del estado."
        ]
      },
      {
        level: "avanzado",
        title: "Ingeniería y organización del camino",
        lines: [
          "Los caminos tenían anchos de 1 a 5 metros y estaban pavimentados con piedra en las zonas más importantes.",
          "Se construyeron puentes colgantes de ichu y cuero sobre los ríos más caudalosos de los Andes.",
          "El camino de la costa y el camino de la sierra eran las dos rutas principales del Qhapaq Ñan.",
          "Los tzontes eran un sistema de cuerdas anudadas que servían para registrar información y transmitir datos.",
          "La red incluía túneles excavados en roca y escaleras talladas en las laderas de las montañas.",
          "La planificación del camino consideraba pendientes, drenaje de agua y estabilidad del terreno."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#faf5ff"/>
        <text x="150" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#7c3aed">QHAPAQ ÑAN</text>
        <text x="150" y="35" text-anchor="middle" font-size="9" fill="#334155">30,000 km de caminos incas</text>
        <line x1="30" y1="70" x2="270" y2="70" stroke="#8b5cf6" stroke-width="3"/>
        <circle cx="30" cy="70" r="6" fill="#dc2626"/>
        <text x="30" y="92" text-anchor="middle" font-size="8" fill="#334155">Colombia</text>
        <circle cx="90" cy="70" r="5" fill="#2563eb"/>
        <text x="90" y="92" text-anchor="middle" font-size="8" fill="#334155">Quito</text>
        <circle cx="150" cy="70" r="7" fill="#16a34a"/>
        <text x="150" y="92" text-anchor="middle" font-size="8" fill="#334155" font-weight="bold">Cusco</text>
        <circle cx="210" cy="70" r="5" fill="#f59e0b"/>
        <text x="210" y="92" text-anchor="middle" font-size="8" fill="#334155">La Paz</text>
        <circle cx="270" cy="70" r="6" fill="#dc2626"/>
        <text x="270" y="92" text-anchor="middle" font-size="8" fill="#334155">Chile</text>
        <rect x="30" y="108" width="240" height="78" rx="6" fill="#f1f5f9"/>
        <text x="150" y="125" text-anchor="middle" font-size="10" fill="#334155" font-weight="bold">Componentes del sistema</text>
        <rect x="45" y="133" width="60" height="42" rx="4" fill="#2563eb" opacity="0.15"/>
        <text x="75" y="149" text-anchor="middle" font-size="8" fill="#2563eb" font-weight="bold">TAMBOS</text>
        <text x="75" y="162" text-anchor="middle" font-size="7" fill="#475569">Almacenes</text>
        <text x="75" y="172" text-anchor="middle" font-size="7" fill="#475569">Cada pocos km</text>
        <rect x="120" y="133" width="60" height="42" rx="4" fill="#16a34a" opacity="0.15"/>
        <text x="150" y="149" text-anchor="middle" font-size="8" fill="#16a34a" font-weight="bold">CHASQUIS</text>
        <text x="150" y="162" text-anchor="middle" font-size="7" fill="#475569">Mensajeros</text>
        <text x="150" y="172" text-anchor="middle" font-size="7" fill="#475569">240km/día</text>
        <rect x="195" y="133" width="60" height="42" rx="4" fill="#f59e0b" opacity="0.15"/>
        <text x="225" y="149" text-anchor="middle" font-size="8" fill="#f59e0b" font-weight="bold">PUENTES</text>
        <text x="225" y="162" text-anchor="middle" font-size="7" fill="#475569">Colgantes</text>
        <text x="225" y="172" text-anchor="middle" font-size="7" fill="#475569">Ichu y cuero</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7013,
        question: "¿Cuál era la extensión aproximada del Qhapaq Ñan?",
        options: ["5,000 km", "15,000 km", "30,000 km", "50,000 km"],
        correctIndex: 2,
        explanation: "El Qhapaq Ñan tenía una extensión de aproximadamente 30,000 kilómetros, conectando territorios desde Colombia hasta Chile.",
        difficulty: "basico"
      },
      {
        id: 7014,
        question: "¿Qué función cumplían los chasquis en el sistema incaico?",
        options: [
          "Transportar grandes cargas de comercio",
          "Servir como guías turísticos para viajeros",
          "Relé de mensajeros que transmitían información rápidamente",
          "Vigilar los caminos para evitar invasiones"
        ],
        correctIndex: 2,
        explanation: "Los chasquis eran corredores relé que transportaban mensajes y objetos pequeños, cambiando de corredor en cada tambo, logrando cubrir más de 240 km por día.",
        difficulty: "intermedio"
      },
      {
        id: 7015,
        question: "¿Qué eran los tzontes en el contexto de la red vial inca?",
        options: [
          "Marcadores de piedra que indicaban distancias",
          "Sistema de cuerdas anudadas para registrar información",
          "Túneles excavados en la roca para cruzar montañas",
          "Puentes colgantes especialmente resistentes"
        ],
        correctIndex: 1,
        explanation: "Los tzontes eran un sistema de cuerdas con nudos especiales que servían para registrar y transmitir información numérica y datos administrativos.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "economia-incaica",
    tip: "La economía inca no tenía mercados ni dinero: todo era administrado por el Estado bajo el principio de reciprocidad y redistribución.",
    theory: [
      {
        level: "basico",
        title: "Principios de la economía inca",
        lines: [
          "La economía inca se basaba en la propiedad colectiva de la tierra y los recursos.",
          "No existían mercados ni dinero; el Estado controlaba toda la producción y distribución.",
          "El principio de reciprocidad guiaba las relaciones económicas entre personas y comunidades.",
          "La mit'a era un sistema de trabajo obligatorio que cada familia debía al Estado.",
          "A cambio de la mit'a, el Estado proporcionaba protección, alimentos y servicios a la población.",
          "Este sistema permitió grandes obras públicas como caminos, terrazas y templos."
        ]
      },
      {
        level: "intermedio",
        title: "Almacenamiento y redistribución",
        lines: [
          "Los qollqa eran almacenes estatales distribuidos por todo el imperio para guardar excedentes.",
          "En los qollqa se almacenaban alimentos, textiles, armas y herramientas para uso futuro.",
          "El sistema de redistribución significaba que el Estado repartía los alimentos en tiempos de escasez.",
          "Las terrazas agrícolas del Estado producían grandes cantidades de alimentos para los almacenes.",
          "Las acllas o escogidas trabajaban para el Estado produciendo chicha, alimentos y textiles.",
          "Los campos del sol y del Inca eran tierras dedicadas al mantenimiento de sacerdotes y al Estado."
        ]
      },
      {
        level: "avanzado",
        title: "Organización económica y desafíos",
        lines: [
          "El sistema de mit'a establecía que cada familia contribuyera con trabajo según su capacidad.",
          "La producción era planificada centralmente según las necesidades del imperio y sus poblaciones.",
          "Las comunidades ayllu mantenían tierras comunales que eran distribuidas periódicamente entre sus miembros.",
          "Los excedentes se destinaban al ejército, a las ceremonias religiosas y a los funcionarios estatales.",
          "El control estatal total sobre la economía era una fortaleza organizativa pero también una vulnerabilidad.",
          "Cuando los españoles llegaron, la destrucción del sistema inca provocó una crisis humanitaria generalizada."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#fef2f2"/>
        <text x="150" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">ECONOMÍA INCAICA</text>
        <rect x="100" y="35" width="100" height="40" rx="6" fill="#dc2626" opacity="0.9"/>
        <text x="150" y="52" text-anchor="middle" font-size="10" fill="white" font-weight="bold">ESTADO INCA</text>
        <text x="150" y="66" text-anchor="middle" font-size="8" fill="#fee2e2">Control total</text>
        <line x1="150" y1="75" x2="70" y2="100" stroke="#dc2626" stroke-width="2"/>
        <line x1="150" y1="75" x2="230" y2="100" stroke="#dc2626" stroke-width="2"/>
        <line x1="150" y1="75" x2="150" y2="100" stroke="#dc2626" stroke-width="2"/>
        <rect x="30" y="100" width="80" height="35" rx="5" fill="#2563eb" opacity="0.8"/>
        <text x="70" y="115" text-anchor="middle" font-size="8" fill="white" font-weight="bold">MIT'A</text>
        <text x="70" y="126" text-anchor="middle" font-size="7" fill="#e0f2fe">Trabajo obligatorio</text>
        <rect x="115" y="100" width="70" height="35" rx="5" fill="#16a34a" opacity="0.8"/>
        <text x="150" y="115" text-anchor="middle" font-size="8" fill="white" font-weight="bold">QOLLQA</text>
        <text x="150" y="126" text-anchor="middle" font-size="7" fill="#dcfce7">Almacenes</text>
        <rect x="190" y="100" width="80" height="35" rx="5" fill="#f59e0b" opacity="0.8"/>
        <text x="230" y="115" text-anchor="middle" font-size="8" fill="white" font-weight="bold">REDISTRIBUCIÓN</text>
        <text x="230" y="126" text-anchor="middle" font-size="7" fill="#fef3c7">Reparto estatal</text>
        <rect x="15" y="145" width="270" height="45" rx="6" fill="#f1f5f9"/>
        <text x="150" y="162" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="bold">NO EXISTÍAN:</text>
        <text x="150" y="178" text-anchor="middle" font-size="9" fill="#475569">Mercados · Dinero · Comercio privado</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7016,
        question: "¿Qué era la mit'a en el sistema económico inca?",
        options: [
          "Un impuesto pagado en oro",
          "Un sistema de trabajo obligatorio al servicio del Estado",
          "Un mercado donde se intercambiaban productos",
          "Una celebración religiosa anual"
        ],
        correctIndex: 1,
        explanation: "La mit'a era un sistema de trabajo colectivo obligatorio que cada familia debía prestar al Estado a cambio de protección y beneficios.",
        difficulty: "basico"
      },
      {
        id: 7017,
        question: "¿Qué función cumplían los qollqa en la economía incaica?",
        options: [
          "Eran mercados donde se vendían productos",
          "Eran almacenes estatales que guardaban excedentes para distribuirlos",
          "Eran templos dedicados a los dioses de la cosecha",
          "Eran escuelas donde se enseñaban técnicas agrícolas"
        ],
        correctIndex: 1,
        explanation: "Los qollqa eran almacenes estatales distribuidos por todo el imperio donde se guardaban alimentos, textiles y herramientas para distribuirlos según las necesidades.",
        difficulty: "intermedio"
      },
      {
        id: 7018,
        question: "¿Por qué la ausencia de mercados y dinero en el sistema inca fue una vulnerabilidad?",
        options: [
          "Porque los comerciantes extranjeros no podían participar",
          "Porque la destrucción del sistema estatal provocó crisis humanitaria al llegar los españoles",
          "Porque impedía el desarrollo de la agricultura",
          "Porque limitaba el número de funcionarios del Estado"
        ],
        correctIndex: 1,
        explanation: "Al no existir mercados ni dinero, la población dependía enteramente del sistema estatal; cuando los españoles lo destruyeron, no había mecanismos alternativos de subsistencia.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "guerra-civil-atahualpa",
    tip: "La guerra civil entre Huáscar y Atahualpa debilitó al Tahuantinsuyo justo antes de la llegada de los españoles, facilitando la conquista.",
    theory: [
      {
        level: "basico",
        title: "La sucesión incaica",
        lines: [
          "Tras la muerte de Huayna Capac en 1527, se desató una guerra civil por la sucesión al trono inca.",
          "Huáscar, hijo legítimo, se enfrentó a su medio hermano Atahualpa, hijo de una princesa quiteña.",
          "La guerra se desarrolló entre 1529 y 1532, enfrentando a dos ejércitos enormes del Tahuantinsuyo.",
          "Atahualpa finalmente derrotó a Huáscar y tomó el control del imperio en 1532.",
          "La guerra civil causó la muerte de cientos de miles de personas y debilitó profundamente al imperio.",
          "Este debilitamiento permitió que Francisco Pizarro y sus hombres conquistaran el imperio con facilidad."
        ]
      },
      {
        level: "intermedio",
        title: "La batalla de Quipaipán y sus consecuencias",
        lines: [
          "La batalla decisiva tuvo lugar en Quipaipán, cerca del Cusco, donde Atahualpa derrotó a Huáscar.",
          "Tras su victoria, Atahualpa ordenó ejecutar a Huáscar y a gran parte de la nobleza cusqueña.",
          "La crueldad de Atahualpa incluyó masacres de prisioneros y la eliminación sistemática de rivales.",
          "El imperio quedó dividido: Atahualpa controlaba el norte y Huáscar el sur antes de su captura.",
          "La población estaba profundamente dividida y resentida por los excesos de la guerra civil.",
          "Muchos pueblos sometidos por los incas vieron la guerra como una oportunidad para rebelarse."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto en la conquista española",
        lines: [
          "La guerra civil dejó al imperio sin un ejército unificado capaz de resistir la invasión española.",
          "Muchos pueblos conquistados por los incas apoyaron a los españoles como venganza por su opresión.",
          "El ceremonial de captura de Atahualpa en Cajamarca se facilitó por la desorganización del imperio.",
          "Las élites incas estaban tan divididas que algunos colaboraron activamente con los conquistadores.",
          "La distribución desigual del poder tras la guerra creó resentimientos que Pizarro explotó hábilmente.",
          "Sin la guerra civil, el Tahuantinsuyo habría tenido más posibilidades de resistir la conquista."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#fef2f2"/>
        <text x="150" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">GUERRA CIVIL INCA</text>
        <text x="150" y="36" text-anchor="middle" font-size="9" fill="#334155">Huáscar vs Atahualpa (1529-1532)</text>
        <rect x="20" y="50" width="110" height="55" rx="6" fill="#2563eb" opacity="0.8"/>
        <text x="75" y="70" text-anchor="middle" font-size="11" fill="white" font-weight="bold">HUÁSCAR</text>
        <text x="75" y="85" text-anchor="middle" font-size="8" fill="#e0f2fe">Hijo legítimo</text>
        <text x="75" y="96" text-anchor="middle" font-size="8" fill="#e0f2fe">Cusco / Sur</text>
        <rect x="170" y="50" width="110" height="55" rx="6" fill="#dc2626" opacity="0.8"/>
        <text x="225" y="70" text-anchor="middle" font-size="11" fill="white" font-weight="bold">ATAHUALPA</text>
        <text x="225" y="85" text-anchor="middle" font-size="8" fill="#fee2e2">Hijo Quiteño</text>
        <text x="225" y="96" text-anchor="middle" font-size="8" fill="#fee2e2">Norte / Quito</text>
        <line x1="130" y1="77" x2="170" y2="77" stroke="#f59e0b" stroke-width="3"/>
        <text x="150" y="74" text-anchor="middle" font-size="10" fill="#f59e0b">VS</text>
        <rect x="100" y="115" width="100" height="25" rx="4" fill="#f59e0b"/>
        <text x="150" y="132" text-anchor="middle" font-size="9" fill="white" font-weight="bold">QUIPAIPÁN 1532</text>
        <line x1="150" y1="140" x2="150" y2="150" stroke="#dc2626" stroke-width="2"/>
        <polygon points="145,148 155,148 150,155" fill="#dc2626"/>
        <rect x="40" y="155" width="220" height="35" rx="5" fill="#f1f5f9"/>
        <text x="150" y="170" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="bold">Consecuencias:</text>
        <text x="150" y="183" text-anchor="middle" font-size="8" fill="#475569">Imperio debilitado → Facilitó la conquista española</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7019,
        question: "¿Cuándo se libró la guerra civil entre Huáscar y Atahualpa?",
        options: ["1490-1500", "1510-1520", "1529-1532", "1540-1545"],
        correctIndex: 2,
        explanation: "La guerra civil inca se desarrolló entre 1529 y 1532, apenas unos años antes de la llegada de Francisco Pizarro al imperio.",
        difficulty: "basico"
      },
      {
        id: 7020,
        question: "¿En qué batalla decisiva Huáscar fue derrotado definitivamente por Atahualpa?",
        options: [
          "Batalla de Cajamarca",
          "Batalla de Quipaipán",
          "Batalla de Yahuarpampa",
          "Batalla de Ollantaytambo"
        ],
        correctIndex: 1,
        explanation: "La batalla de Quipaipán, cerca del Cusco en 1532, fue la batalla decisiva donde Atahualpa derrotó finalmente a Huáscar y tomó el control del imperio.",
        difficulty: "intermedio"
      },
      {
        id: 7021,
        question: "¿Por qué la guerra civil facilitó la conquista española del Tahuantinsuyo?",
        options: [
          "Porque los españoles tenían mejor tecnología militar",
          "Porque el imperio quedó sin ejército unificado y la población estaba dividida",
          "Porque los incas no conocían a los europeos",
          "Porque la guerra eliminó a todos los guerreros incas"
        ],
        correctIndex: 1,
        explanation: "La guerra civil dejó al imperio fragmentado, sin un ejército centralizado, y creó resentimientos que hicieron que muchos pueblos sometidos apoyaran a los españoles.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "resistencia-manco-inca",
    tip: "Manco Inca lideró la resistencia inca contra los españoles y fundó el Estado neoinca de Vilcabamba, que resistió hasta 1572.",
    theory: [
      {
        level: "basico",
        title: "La rebelión de Manco Inca",
        lines: [
          "Manco Inca fue nombrado Inca por los españoles tras la captura de Atahualpa en 1533.",
          "Inicialmente colaboró con los españoles, pero pronto se dio cuenta de sus verdaderas intenciones.",
          "En 1536, Manco Inca lideró una gran rebelión contra los españoles desde el Cusco.",
          "Miles de guerreros incas se unieron a la rebelión y sitieron la ciudad del Cusco durante meses.",
          "Aunque no logró recuperar el Cusco, Manco estableció un gobierno independiente en Vilcabamba.",
          "La resistencia inca continuó desde Vilcabamba por casi 40 años más."
        ]
      },
      {
        level: "intermedio",
        title: "El Estado neoinca de Vilcabamba",
        lines: [
          "Vilcabamba se convirtió en la capital del último estado inca independiente del dominio español.",
          "Manco Inca estableció allí un gobierno con sus propios funcionarios, sacerdotes y ejército.",
          "Los españoles organizaron varias expediciones para capturar a Manco, pero todas fracasaron.",
          "Tras la muerte de Manco en 1544, sus sucesores Sayri Túpac, Titu Cusi y Túpac Amaru continuaron.",
          "El Estado neoinca mantuvo relaciones diplomáticas con los españoles mientras resistía militarmente.",
          "Los españoles finally conquistaron Vilcabamba en 1572, capturando al último inca, Túpac Amaru."
        ]
      },
      {
        level: "avanzado",
        title: "Legado de la resistencia inca",
        lines: [
          "La resistencia de Vilcabamba demostró que los incas no fueron simplemente 'conquistados' sin luchar.",
          "Manco Inca logró reunir un ejército de más de 100,000 guerreros para su rebelión de 1536.",
          "La caída del Cusco ante Manco obligó a Pizarro a enviar refuerzos desde España.",
          "Laexecuteión de Túpac Amaru en 1572 marcó el fin simbólico del Imperio Inca.",
          "El legado de la resistencia inspiró movimientos indígenas posteriores, incluyendo la rebelión de 1780.",
          "Vilcabamba fue redescubierta en 1911 por Hiram Bingham, confirmando las crónicas históricas."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f5f3ff"/>
        <text x="150" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#7c3aed">RESISTENCIA INCA</text>
        <text x="150" y="36" text-anchor="middle" font-size="9" fill="#334155">Manco Inca y Vilcabamba</text>
        <rect x="30" y="50" width="80" height="45" rx="6" fill="#dc2626" opacity="0.8"/>
        <text x="70" y="68" text-anchor="middle" font-size="9" fill="white" font-weight="bold">1533</text>
        <text x="70" y="82" text-anchor="middle" font-size="7" fill="#fee2e2">Manco nombrado</text>
        <text x="70" y="90" text-anchor="middle" font-size="7" fill="#fee2e2">Inca por Pizarro</text>
        <line x1="110" y1="72" x2="130" y2="72" stroke="#f59e0b" stroke-width="2"/>
        <polygon points="125,67 135,72 125,77" fill="#f59e0b"/>
        <rect x="130" y="50" width="80" height="45" rx="6" fill="#dc2626" opacity="0.8"/>
        <text x="170" y="68" text-anchor="middle" font-size="9" fill="white" font-weight="bold">1536</text>
        <text x="170" y="82" text-anchor="middle" font-size="7" fill="#fee2e2">Gran rebelión</text>
        <text x="170" y="90" text-anchor="middle" font-size="7" fill="#fee2e2">Sitio del Cusco</text>
        <line x1="210" y1="72" x2="230" y2="72" stroke="#f59e0b" stroke-width="2"/>
        <polygon points="225,67 235,72 225,77" fill="#f59e0b"/>
        <rect x="230" y="50" width="55" height="45" rx="6" fill="#16a34a" opacity="0.8"/>
        <text x="257" y="68" text-anchor="middle" font-size="9" fill="white" font-weight="bold">VILCA</text>
        <text x="257" y="78" text-anchor="middle" font-size="9" fill="white" font-weight="bold">BAMBA</text>
        <text x="257" y="90" text-anchor="middle" font-size="7" fill="#dcfce7">Estado Inca</text>
        <rect x="25" y="110" width="250" height="80" rx="6" fill="#f1f5f9"/>
        <text x="150" y="128" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="bold">GOBERNANTES DE VILCABAMBA</text>
        <text x="70" y="148" text-anchor="middle" font-size="8" fill="#334155" font-weight="bold">Manco Inca</text>
        <text x="70" y="160" text-anchor="middle" font-size="7" fill="#475569">1536-1544</text>
        <text x="150" y="148" text-anchor="middle" font-size="8" fill="#334155" font-weight="bold">Sayri Túpac</text>
        <text x="150" y="160" text-anchor="middle" font-size="7" fill="#475569">1545-1557</text>
        <text x="230" y="148" text-anchor="middle" font-size="8" fill="#334155" font-weight="bold">Titu Cusi</text>
        <text x="230" y="160" text-anchor="middle" font-size="7" fill="#475569">1557-1571</text>
        <text x="150" y="180" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="bold">Túpac Amaru → Capturado y ejecutado 1572</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7022,
        question: "¿En qué año Manco Inca lideró la gran rebelión contra los españoles?",
        options: ["1533", "1536", "1540", "1545"],
        correctIndex: 1,
        explanation: "Manco Inca inició su gran rebelión contra los españoles en 1536, logrando reunir un ejército de más de 100,000 guerreros.",
        difficulty: "basico"
      },
      {
        id: 7023,
        question: "¿En qué ciudad se estableció el Estado neoinca independiente?",
        options: ["Cusco", "Machu Picchu", "Vilcabamba", "Ollantaytambo"],
        correctIndex: 2,
        explanation: "Vilcabamba se convirtió en la capital del último estado inca independiente, desde donde resistieron los sucesores de Manco Inca.",
        difficulty: "intermedio"
      },
      {
        id: 7024,
        question: "¿Qué evento marcó el fin definitivo del Imperio Inca?",
        options: [
          "La captura de Atahualpa en 1533",
          "La rebelión de Manco Inca en 1536",
          "La captura y ejecución de Túpac Amaru en 1572",
          "La caída del Cusco en 1534"
        ],
        correctIndex: 2,
        explanation: "Túpac Amaru, el último inca de Vilcabamba, fue capturado y ejecutado por los españoles en 1572, marcando el fin oficial del Imperio Inca.",
        difficulty: "avanzado"
      }
    ]
  }
];
