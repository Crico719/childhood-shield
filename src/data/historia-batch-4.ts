export const historiaBatch4 = [
  {
    slug: "guerra-pacifico",
    tip: "La Guerra del Pacífico (1879-1883) enfrentó a Perú y Bolivia contra Chile por el control del salitre en el desierto de Atacama.",
    theory: [
      {
        level: "basico",
        title: "Causas de la Guerra del Pacífico",
        lines: [
          "La Guerra del Pacífico se libró entre 1879 y 1883 principalmente por el control de los depósitos de salitre y guano.",
          "Bolivia impuso un impuesto de 10 centavos por quintal de salitre a la empresa chilena Compañía de Salitres de Antofagasta.",
          "Chile respondió militarmente invadiendo el puerto boliviano de Antofagasta en febrero de 1879.",
          "Perú se unió al conflicto debido al Tratado de Alianza Defensiva firmado con Bolivia en 1873.",
          "El desierto de Atacama contenía valiosos yacimientos de salitre que eran la principal fuente de ingresos de la región.",
          "La riqueza del guano y el salitre atrajo la ambición de las potencias europeas y de Chile hacia el territorio."
        ]
      },
      {
        level: "intermedio",
        title: "Batallas navales y terrestres",
        lines: [
          "La Batalla de Iquique el 21 de mayo de 1879 marcó el inicio del conflicto naval entre las dos naciones.",
          "El monitor Huáscar fue capturado por Chile en la Batalla de Angamos, dejando a Perú sin su principal buque de guerra.",
          "La Batalla de Arica del 7 de junio de 1880 significó la caída de la Plaza Fuerte de Arica y la pérdida de un bastión defensivo clave.",
          "El Combate de Los Ángeles mostró la resistencia peruana en los valles altos del sur del país.",
          "Las fuerzas chilenas avanzaron por tierra hacia el norte del Perú tras controlar el litoral.",
          "La artillería peruana demostró valentía pero no pudo compensar la superioridad logística y numérica del ejército chileno."
        ]
      },
      {
        level: "avanzado",
        title: "Tratado de Ancón y fin del conflicto",
        lines: [
          "El Tratado de Ancón se firmó el 20 de octubre de 1883 y puso fin oficialmente a la Guerra del Pacífico.",
          "Perú cedió la provincia de Tarapacá a Chile de forma permanente mediante el Tratado de Ancón.",
          "Las provincias de Arica y Tacna quedaron bajo administración chilena por un período de diez años con plebiscito posterior.",
          "El conflicto causó la muerte de más de 10.000 soldados peruanos y la devastación económica del sur del país.",
          "El Tratado de Lima de 1929 resolvió la disputa por Tacna, devolviéndola al Perú mientras Arica quedó para Chile.",
          "La guerra dejó secuelas políticas profundas que desestabilizaron los gobiernos civiles peruanos durante décadas."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f0e6d3"/>
        <text x="150" y="25" font-size="14" font-weight="bold" text-anchor="middle" fill="#4a3728">Guerra del Pacífico 1879-1883</text>
        <rect x="20" y="45" width="120" height="70" fill="#b8860b" rx="3"/>
        <text x="80" y="70" font-size="10" text-anchor="middle" fill="#fff">Salitre</text>
        <text x="80" y="85" font-size="10" text-anchor="middle" fill="#fff">Desierto de Atacama</text>
        <rect x="160" y="45" width="120" height="70" fill="#1e90ff" rx="3"/>
        <text x="220" y="70" font-size="10" text-anchor="middle" fill="#fff">Batalla Naval</text>
        <text x="220" y="85" font-size="10" text-anchor="middle" fill="#fff">Iquique 1879</text>
        <line x1="140" y1="80" x2="160" y2="80" stroke="#c0392b" stroke-width="2" marker-end="url(#arrow)"/>
        <defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#c0392b"/></marker></defs>
        <rect x="20" y="130" width="260" height="55" fill="#d4a574" rx="3"/>
        <text x="150" y="150" font-size="10" text-anchor="middle" fill="#4a3728">Tratado de Ancón (1883)</text>
        <text x="150" y="165" font-size="9" text-anchor="middle" fill="#4a3728">Perú cede Tarapacá • Tacna y Arica bajo administración chilena</text>
        <text x="150" y="180" font-size="9" text-anchor="middle" fill="#4a3728">Pérdida territorial irreparable para el Perú</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7073,
        question: "¿Cuál fue la causa principal de la Guerra del Pacífico?",
        options: [
          "El control del río Amazonas",
          "El control del salitre en el desierto de Atacama",
          "La disputa por la isla de Pascua",
          "El comercio de coca y hojas de coca"
        ],
        correctIndex: 1,
        explanation: "La principal causa fue el control de los yacimientos de salitre en el desierto de Atacama, un recurso altamente valioso para la agricultura europea.",
        difficulty: "basico"
      },
      {
        id: 7074,
        question: "¿En qué fecha ocurrió la Batalla de Arica y qué significó para el Perú?",
        options: [
          "7 de junio de 1879, inicio de la guerra",
          "7 de junio de 1880, caída de la Plaza Fuerte de Arica",
          "21 de mayo de 1879, victoria peruana en el mar",
          "20 de octubre de 1883, firma del Tratado"
        ],
        correctIndex: 1,
        explanation: "La Batalla de Arica del 7 de junio de 1880 significó la caída de la Plaza Fuerte de Arica, un bastión defensivo estratégico del Perú.",
        difficulty: "intermedio"
      },
      {
        id: 7075,
        question: "¿Qué estableció el Tratado de Ancón de 1883?",
        options: [
          "La alianza permanente entre Perú y Bolivia",
          "La cesión de la provincia de Tarapacá a Chile de forma permanente",
          "La devolución de Tacna al Perú inmediatamente",
          "La independencia total de Chile del Reino Unido"
        ],
        correctIndex: 1,
        explanation: "El Tratado de Ancón estableció la cesión permanente de la provincia de Tarapacá a Chile y la administración temporal de Arica y Tacna.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "guerra-pacifico-consecuencias",
    tip: "Las consecuencias de la Guerra del Pacífico devastaron al Perú: perdió Tarapacá, sufrió ocupación y tardó décadas en recuperarse económicamente.",
    theory: [
      {
        level: "basico",
        title: "Pérdidas territoriales del Perú",
        lines: [
          "Perú perdió la provincia de Tarapacá de forma permanente tras la firma del Tratado de Ancón en 1883.",
          "La región sur del país quedó devastada por las batallas y la ocupación militar chilena.",
          "Arica y Tacna quedaron bajo administración chilena durante más de 40 años antes de resolverse el conflicto.",
          "El Plebiscito de Tacna fue demorado por ambas naciones durante décadas sin llegar a una solución.",
          "El Tratado de Lima de 1929 finalmente devolvió Tacna al Perú pero Arica quedó definitivamente en manos chilenas.",
          "La pérdida territorial significó también la pérdida de importantes recursos mineros y de la riqueza del salitre."
        ]
      },
      {
        level: "intermedio",
        title: "Consecuencias económicas y sociales",
        lines: [
          "La ocupación chilena de Lima duró tres años y provocó el saqueo de archivos, museos y la Biblioteca Nacional.",
          "La economía peruana quedó devastada al perder las principales fuentes de riqueza del guano y el salitre.",
          "Muchos campos destruidos y ciudades arrasadas obligaron a una reconstrucción lenta y costosa.",
          "La deuda externa del Perú aumentó dramáticamente para financiar la reconstrucción del país.",
          "La confiscación de bienes peruanos durante la ocupación generó un profundo resentimiento nacional.",
          "La guerra provocó un éxodo masivo de la población del sur hacia Lima y otras regiones del país."
        ]
      },
      {
        level: "avanzado",
        title: "Reconstrucción y legado",
        lines: [
          "El gobierno de Nicolás de Piérola inició la reconstrucción del Estado peruano tras la devastación de la guerra.",
          "La Guerra del Pacífico marcó el fin de la era del guano y obligó al Perú a diversificar su economía.",
          "El resentimiento nacional chileno-peruano se mantuvo como un tema central de la política exterior peruana.",
          "La pérdida del salitre impulsó al Perú a buscar nuevas fuentes de riqueza en la minería de otros minerales.",
          "La reconstrucción moral y política del país tomó más de una generación y transformó la identidad nacional.",
          "El conflicto dejó una huella profunda en la literatura, el arte y la memoria colectiva del Perú."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f5f0e8"/>
        <text x="150" y="25" font-size="14" font-weight="bold" text-anchor="middle" fill="#4a3728">Consecuencias de la Guerra del Pacífico</text>
        <rect x="20" y="45" width="130" height="55" fill="#c0392b" rx="3"/>
        <text x="85" y="65" font-size="10" text-anchor="middle" fill="#fff">Pérdida territorial</text>
        <text x="85" y="80" font-size="9" text-anchor="middle" fill="#fff">Tarapacá cedida permanentemente</text>
        <rect x="160" y="45" width="120" height="55" fill="#2980b9" rx="3"/>
        <text x="220" y="65" font-size="10" text-anchor="middle" fill="#fff">Economía devastada</text>
        <text x="220" y="80" font-size="9" text-anchor="middle" fill="#fff">Pérdida del guano y salitre</text>
        <rect x="20" y="115" width="260" height="70" fill="#27ae60" rx="3"/>
        <text x="150" y="135" font-size="10" text-anchor="middle" fill="#fff">Reconstrucción nacional</text>
        <text x="150" y="150" font-size="9" text-anchor="middle" fill="#fff">Piérola inicia la recuperación del Estado</text>
        <text x="150" y="165" font-size="9" text-anchor="middle" fill="#fff">Tratado de Lima 1929: Tacna vuelve al Perú</text>
        <text x="150" y="180" font-size="9" text-anchor="middle" fill="#fff">Arica permanece bajo soberanía chilena</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7076,
        question: "¿Qué provincia perdió el Perú de forma permanente tras el Tratado de Ancón?",
        options: [
          "Tacna",
          "Arica",
          "Tarapacá",
          "Moquegua"
        ],
        correctIndex: 2,
        explanation: "La provincia de Tarapacá fue cedida a Chile de forma permanente mediante el Tratado de Ancón de 1883.",
        difficulty: "basico"
      },
      {
        id: 7077,
        question: "¿Cuándo se firmó el Tratado de Lima que resolvió la disputa por Tacna?",
        options: [
          "1883",
          "1890",
          "1910",
          "1929"
        ],
        correctIndex: 3,
        explanation: "El Tratado de Lima se firmó en 1929, devolviendo Tacna al Perú mientras Arica quedó bajo soberanía chilena.",
        difficulty: "intermedio"
      },
      {
        id: 7078,
        question: "¿Qué impacto económico tuvo la ocupación chilena de Lima sobre el Perú?",
        options: [
          "La economía peruana mejoró gracias al comercio con Chile",
          "Se produjo el saqueo de archivos, museos y la Biblioteca Nacional",
          "Chile invirtió en infraestructura peruana",
          "La población peruana se benefició de nuevas tecnologías chilenas"
        ],
        correctIndex: 1,
        explanation: "La ocupación de Lima por tres años provocó el saqueo de archivos, museos y la Biblioteca Nacional, además de la confiscación de bienes.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "generacion-900",
    tip: "La Generación del 900 fue un movimiento intelectual y político que surgió contra la oligarquía y el sistema de gobierno de la República Aristocrática.",
    theory: [
      {
        level: "basico",
        title: "Manuel González Prada y el movimiento",
        lines: [
          "Manuel González Prada fue el principal líder intelectual de la Generación del 900 en el Perú.",
          "Este movimiento intelectual surgió a principios del siglo XX como respuesta a la oligarquía gobernante.",
          "González Prada criticó duramente la corrupción del gobierno y la explotación de los trabajadores.",
          "El movimiento buscaba una reforma social profunda que incluyera derechos para los indígenas.",
          "Las ideas de la Generación del 900 influyeron en movimientos posteriores como el Aprismo.",
          "González Prada utilizó su pluma para denunciar la injusticia social y la opresión del pueblo."
        ]
      },
      {
        level: "intermedio",
        title: "Anarquismo y movimientos sociales",
        lines: [
          "El anarquismo llegó al Perú a través de inmigrantes italianos y españoles que formaron sociedades de resistencia.",
          "Los sindicatos anarquistas organizaron las primeras huelgas obreras en Lima y los centros mineros del sur.",
          "La Sociedad de Artesanos-Unión Brión fundada en 1896 fue una de las primeras organizaciones obreras importantes.",
          "Los periódicos anarquistas como El Obrero o La Humanidad difundieron las ideas de emancipación del trabajador.",
          "El gobierno oligárquico respondió con represión brutal a las protestas obreras y campesinas.",
          "Estos movimientos sentaron las bases para la organización sindical moderna en el Perú."
        ]
      },
      {
        level: "avanzado",
        title: "Reformas y legado",
        lines: [
          "González Prada propuso la educación laica, gratuita y obligatoria como pilar de la transformación social.",
          "El movimiento insistió en la necesidad de Reforma Agraria para dar tierras a los campesinos indígenas.",
          "Las ideas de la Generación del 900 se conectaron con el Aprismo de Haya de la Torre en los años 20.",
          "La lucha contra la oligarquía terrateniente se convirtió en el eje central de la política peruana del siglo XX.",
          "El legado de González Prada inspiró a generaciones posteriores de intelectuales y políticos progresistas.",
          "El movimiento marcó el inicio de la conciencia de clase en la sociedad peruana y el despertar político."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f0f0f0"/>
        <text x="150" y="25" font-size="14" font-weight="bold" text-anchor="middle" fill="#333">Generación del 900</text>
        <circle cx="75" cy="85" r="35" fill="#8b4513"/>
        <text x="75" y="80" font-size="8" text-anchor="middle" fill="#fff">González</text>
        <text x="75" y="92" font-size="8" text-anchor="middle" fill="#fff">Prada</text>
        <rect x="135" y="50" width="70" height="70" fill="#8b0000" rx="3"/>
        <text x="170" y="75" font-size="8" text-anchor="middle" fill="#fff">Anarquismo</text>
        <text x="170" y="88" font-size="8" text-anchor="middle" fill="#fff">y Sindicatos</text>
        <text x="170" y="100" font-size="8" text-anchor="middle" fill="#fff">Huelgas</text>
        <rect x="215" y="50" width="70" height="70" fill="#006400" rx="3"/>
        <text x="250" y="75" font-size="8" text-anchor="middle" fill="#fff">Reformas</text>
        <text x="250" y="88" font-size="8" text-anchor="middle" fill="#fff">Sociales</text>
        <text x="250" y="100" font-size="8" text-anchor="middle" fill="#fff">Educación</text>
        <line x1="110" y1="85" x2="135" y2="85" stroke="#333" stroke-width="2"/>
        <line x1="205" y1="85" x2="215" y2="85" stroke="#333" stroke-width="2"/>
        <rect x="20" y="135" width="260" height="50" fill="#daa520" rx="3"/>
        <text x="150" y="155" font-size="10" text-anchor="middle" fill="#333">Legado: Conciencia de clase y despertar político</text>
        <text x="150" y="170" font-size="9" text-anchor="middle" fill="#333">Reforma Agraria • Educación laica • Derechos indígenas</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7079,
        question: "¿Quién fue el principal líder intelectual de la Generación del 900 en el Perú?",
        options: [
          "Víctor Raúl Haya de la Torre",
          "Manuel González Prada",
          "Jos Carlos Mariátegui",
          "Nicolás de Piérola"
        ],
        correctIndex: 1,
        explanation: "Manuel González Prada fue el principal líder intelectual de la Generación del 900, usando su pluma para criticar la oligarquía.",
        difficulty: "basico"
      },
      {
        id: 7080,
        question: "¿Qué movimiento político surgió en el Perú a través de inmigrantes italianos y españoles?",
        options: [
          "El socialismo",
          "El liberalismo",
          "El anarquismo",
          "El aprismo"
        ],
        correctIndex: 2,
        explanation: "El anarquismo llegó al Perú con inmigrantes italianos y españoles que formaron sociedades de resistencia y organizaron huelgas.",
        difficulty: "intermedio"
      },
      {
        id: 7081,
        question: "¿Cuál fue una de las principales propuestas de González Prada para la transformación del Perú?",
        options: [
          "La creación de un ejército permanente",
          "La educación laica, gratuita y obligatoria",
          "El fortalecimiento de la Iglesia Católica",
          "La centralización total del gobierno en Lima"
        ],
        correctIndex: 1,
        explanation: "González Prada propuso la educación laica, gratuita y obligatoria como pilar fundamental de la transformación social del Perú.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "oligarquia-exportadora",
    tip: "La República Aristocrática (1895-1930) fue una etapa de dominio de la oligarquía exportadora que modernizó la economía pero excluyó a las mayorías.",
    theory: [
      {
        level: "basico",
        title: "La paz civil de Piérola",
        lines: [
          "Nicolás de Piérola asumió el poder en 1895 tras la Revolución Civil de 1894 contra el gobierno de Cáceres.",
          "Piérola estableció la paz civil y puso fin a las guerras internas que habían plagado al Perú desde la Guerra del Pacífico.",
          "Su gobierno modernizó la administración pública y estableció un sistema tributario más eficiente.",
          "Piérola creó la Corte de Cuentas y profesionalizó la recaudación de impuestos del Estado.",
          "Su gestión sentó las bases para el crecimiento económico que viviría el Perú en las primeras décadas del siglo XX.",
          "La oligarquía costeña comenzó a dominar la política nacional a partir de la estabilidad alcanzada con Piérola."
        ]
      },
      {
        level: "intermedio",
        title: "Modernización económica",
        lines: [
          "La economía peruana creció significativamente gracias a las exportaciones de azúcar, algodón y caucho.",
          "El Banco de Perú y Londres fue fundado en 1897 y se convirtió en una de las principales instituciones financieras.",
          "La construcción del ferrocarril central andino conectó la sierra con la costa y facilitó el comercio.",
          "La inversión extranjera, especialmente británica, fluyó hacia las minas y las plantaciones costeñas.",
          "La modernización económica benefició principalmente a la oligarquía terrateniente de la costa.",
          "El crecimiento del comercio internacional posicionó al Perú como exportador de materias primas estratégicas."
        ]
      },
      {
        level: "avanzado",
        title: "El Oncenio de Leguía",
        lines: [
          "Augusto Bernardino Leguía gobernó por segunda vez de 1919 a 1930, un período conocido como el Oncenio.",
          "Leguía implementó reformas modernizadoras como la Ley de Consagración de Haciendas que benefició a la oligarquía.",
          "El Oncenio significó una centralización extrema del poder con el cierre del Congreso y la concentración de facultades.",
          "Leguía construyó obras públicas importantes como edificios, carreteras y sistemas de riego en todo el país.",
          "Su gobierno terminó con la crisis económica de 1929 y una revolución que lo derrocó en agosto de 1930.",
          "El Oncenio marcó el apogeo y la caída de la República Aristocrática como sistema político dominante."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8f4e8"/>
        <text x="150" y="25" font-size="13" font-weight="bold" text-anchor="middle" fill="#4a3728">República Aristocrática (1895-1930)</text>
        <rect x="20" y="45" width="120" height="60" fill="#4169e1" rx="3"/>
        <text x="80" y="65" font-size="9" text-anchor="middle" fill="#fff">Paz Civil</text>
        <text x="80" y="78" font-size="8" text-anchor="middle" fill="#fff">Piérola 1895</text>
        <text x="80" y="90" font-size="8" text-anchor="middle" fill="#fff">Estabilidad política</text>
        <rect x="160" y="45" width="120" height="60" fill="#228b22" rx="3"/>
        <text x="220" y="65" font-size="9" text-anchor="middle" fill="#fff">Economía exportadora</text>
        <text x="220" y="78" font-size="8" text-anchor="middle" fill="#fff">Azúcar, algodón, caucho</text>
        <text x="220" y="90" font-size="8" text-anchor="middle" fill="#fff">Banco de Perú y Londres</text>
        <rect x="20" y="120" width="260" height="65" fill="#8b4513" rx="3"/>
        <text x="150" y="140" font-size="10" text-anchor="middle" fill="#fff">Oncenio de Leguía (1919-1930)</text>
        <text x="150" y="155" font-size="9" text-anchor="middle" fill="#fff">Modernización • Centralización del poder • Obras públicas</text>
        <text x="150" y="170" font-size="9" text-anchor="middle" fill="#fff">Crisis económica 1929 • Derrocamiento 1930</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7082,
        question: "¿Qué presidente estableció la paz civil en el Perú en 1895 tras la Revolución Civil?",
        options: [
          "Augusto Bernardino Leguía",
          "Nicolás de Piérola",
          "Andrés Avelino Cáceres",
          "Manuel Prado"
        ],
        correctIndex: 1,
        explanation: "Nicolás de Piérola asumió el poder en 1895 y estableció la paz civil, poniendo fin a las guerras internas.",
        difficulty: "basico"
      },
      {
        id: 7083,
        question: "¿Cuáles fueron los principales productos de exportación de la República Aristocrática?",
        options: [
          "Petróleo, cobre y zinc",
          "Azúcar, algodón y caucho",
          "Oro, plata y estaño",
          "Café, cacao y tabaco"
        ],
        correctIndex: 1,
        explanation: "La economía exportadora de la República Aristocrática se basó principalmente en azúcar, algodón y caucho.",
        difficulty: "intermedio"
      },
      {
        id: 7084,
        question: "¿Cómo se conoce el segundo gobierno de Leguía y por qué terminó?",
        options: [
          "La Convención, por conflicto con el Congreso",
          "El Oncenio, por la crisis económica de 1929 y una revolución",
          "La República Nueva, por elecciones libres",
          "El Consulado, por muerte natural"
        ],
        correctIndex: 1,
        explanation: "El Oncenio (1919-1930) terminó con la crisis económica de 1929 y una revolución que derrocó a Leguía en agosto de 1930.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "crisis-1929",
    tip: "La crisis de 1929 golpeó duramente al Perú: cayeron las exportaciones, aumentó el desempleo y surgieron nuevos movimientos políticos como el APRA.",
    theory: [
      {
        level: "basico",
        title: "Impacto de la Gran Depresión en el Perú",
        lines: [
          "La Gran Depresión de 1929 afectó gravemente la economía peruana al caer la demanda internacional de sus productos de exportación.",
          "Los precios del algodón, azúcar y caucho se desplomaron, causando quiebras de empresas y desempleo masivo.",
          "Las exportaciones peruanas se redujeron a la mitad en apenas dos años, devastando la economía nacional.",
          "El desempleo se disparó en las ciudades costeñas, especialmente en Lima, Callao y Trujillo.",
          "Los campesinos y obreros fueron los más afectados por la crisis económica y la caída de los salarios.",
          "La crisis expuso las debilidades de un modelo económico dependiente de la exportación de materias primas."
        ]
      },
      {
        level: "intermedio",
        title: "Inestabilidad política y social",
        lines: [
          "La crisis de 1929 provocó la caída del gobierno de Leguía en agosto de 1930 mediante una revolución liderada por Sánchez Cerro.",
          "Luis Miguel Sánchez Cerro asumió el poder prometiendo restaurar la democracia y mejorar las condiciones del pueblo.",
          "El descontento social creció rápidamente entre los trabajadores urbanos y los campesinos de la sierra.",
          "Los partidos políticos de izquierda ganaron influencia entre las masas descontentas por la crisis económica.",
          "La inestabilidad política se manifestó en constantes cambios de gobierno y conspiraciones militares.",
          "La crisis impulsó la organización de sindicatos y partidos políticos que representaban a los trabajadores."
        ]
      },
      {
        level: "avanzado",
        title: "Surgimiento del APRA y el Socialismo",
        lines: [
          "Víctor Raúl Haya de la Torre fundó el APRA en 1930 como respuesta a la crisis y al modelo oligárquico.",
          "El Partido Socialista peruano, liderado por José Carlos Mariátegui, también ganó fuerza durante la crisis de 1929.",
          "Mariátegui publicó los Siete Ensayos de Interpretación de la Realidad Peruana en 1928, analizando la sociedad peruana.",
          "Ambos movimientos buscaban una transformación profunda del sistema político y económico del Perú.",
          "La crisis de 1929 demostró que el modelo oligárquico era insostenible y necesitaba reformas estructurales.",
          "El surgimiento de nuevas fuerzas políticas marcó el fin de la República Aristocrática y el inicio de una nueva era."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f5f5f5"/>
        <text x="150" y="25" font-size="14" font-weight="bold" text-anchor="middle" fill="#333">Crisis de 1929 en el Perú</text>
        <rect x="20" y="45" width="260" height="55" fill="#8b0000" rx="3"/>
        <text x="150" y="65" font-size="10" text-anchor="middle" fill="#fff">Gran Depresión: Caída de exportaciones</text>
        <text x="150" y="80" font-size="9" text-anchor="middle" fill="#fff">Algodón, azúcar, caucho: precios desplomados</text>
        <text x="150" y="93" font-size="9" text-anchor="middle" fill="#fff">Desempleo masivo y quiebras empresariales</text>
        <rect x="20" y="115" width="120" height="55" fill="#4169e1" rx="3"/>
        <text x="80" y="135" font-size="9" text-anchor="middle" fill="#fff">APRA 1930</text>
        <text x="80" y="150" font-size="8" text-anchor="middle" fill="#fff">Haya de la Torre</text>
        <text x="80" y="162" font-size="8" text-anchor="middle" fill="#fff">Reformismo social</text>
        <rect x="160" y="115" width="120" height="55" fill="#228b22" rx="3"/>
        <text x="220" y="135" font-size="9" text-anchor="middle" fill="#fff">Socialismo</text>
        <text x="220" y="150" font-size="8" text-anchor="middle" fill="#fff">Mariátegui</text>
        <text x="220" y="162" font-size="8" text-anchor="middle" fill="#fff">Siete Ensayos</text>
        <rect x="20" y="178" width="260" height="15" fill="#333" rx="2"/>
        <text x="150" y="190" font-size="9" text-anchor="middle" fill="#fff">Fin de la República Aristocrática</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7085,
        question: "¿Cómo afectó la crisis de 1929 a las exportaciones peruanas?",
        options: [
          "Las exportaciones aumentaron un 50%",
          "Las exportaciones se redujeron a la mitad en dos años",
          "No hubo efecto en las exportaciones",
          "Las exportaciones se diversificaron hacia Europa"
        ],
        correctIndex: 1,
        explanation: "La crisis de 1929 causó una reducción del 50% en las exportaciones peruanas en apenas dos años por la caída de precios internacionales.",
        difficulty: "basico"
      },
      {
        id: 7086,
        question: "¿Qué partido político surgió como respuesta a la crisis de 1929?",
        options: [
          "El Partido Civil",
          "El Partido Constitucional",
          "El APRA",
          "El Partido Demócrata"
        ],
        correctIndex: 2,
        explanation: "El APRA fue fundado por Víctor Raúl Haya de la Torre en 1930 como respuesta a la crisis y al modelo oligárquico.",
        difficulty: "intermedio"
      },
      {
        id: 7087,
        question: "¿Qué obra escribió José Carlos Mariátegui que analizaba la realidad peruana?",
        options: [
          "El Capital en el Perú",
          "Los Siete Ensayos de Interpretación de la Realidad Peruana",
          "La Historia de la República del Perú",
          "El Manifiesto Comunista Peruano"
        ],
        correctIndex: 1,
        explanation: "Mariátegui publicó los Siete Ensayos de Interpretación de la Realidad Peruana en 1928, una obra fundamental del pensamiento social latinoamericano.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "segundo-ingenieros",
    tip: "El APRA se fundó en 1930 y la Revolución de Trujillo de 1932 fue un intento fallido de Haya de la Torre de tomar el poder por la fuerza.",
    theory: [
      {
        level: "basico",
        title: "Víctor Raúl Haya de la Torre",
        lines: [
          "Víctor Raúl Haya de la Torre fue el fundador del APRA y una de las figuras políticas más importantes del siglo XX peruano.",
          "Haya de la Torre fundó el Partido Aprista Peruano en 1930 durante su exilio en México.",
          "El APRA se presentó como un movimiento antiimperialista y de liberación nacional para las Américas.",
          "Haya de la Torre propuso la unión de los países latinoamericanos frente al imperialismo estadounidense.",
          "El APRA ganó rápidamente apoyo entre los estudiantes, obreros y sectores medios urbanos.",
          "La ideología aprista combinaba elementos del socialismo democrático con el nacionalismo latinoamericano."
        ]
      },
      {
        level: "intermedio",
        title: "La Revolución de Trujillo de 1932",
        lines: [
          "En julio de 1932, los apristas lanzaron una revolución armada en Trujillo contra el gobierno de Sánchez Cerro.",
          "Los rebeldes tomaron la ciudad de Trujillo y proclamaron la revolución aprista contra el régimen militar.",
          "El ejército peruano respondió con una represión brutal que sofocó la rebelión en apenas tres días.",
          "La represión militar dejó miles de muertos y prisioneros, incluyendo ejecuciones sumarias de prisioneros apristas.",
          "La batalla de Chanchoco fue el enfrentamiento decisivo que terminó con la revolución trujillana.",
          "Haya de la Torre se asiló en la embajada colombiana durante varios años para evitar ser ejecutado."
        ]
      },
      {
        level: "avanzado",
        title: "Consecuencias políticas",
        lines: [
          "La Revolución de Trujillo marcó al APRA como partido perseguido y prohibido durante varios gobiernos militares.",
          "Sánchez Cerro fue asesinado en 1933, lo que desencadenó una ola de violencia política en el país.",
          "El gobierno de Oscar R. Benavides (1933-1939) proscribió al APRA y persiguió a sus dirigentes.",
          "Haya de la Torre no pudo asumir la presidencia hasta 1962, cuando ganó las elecciones pero fue derrocado por un golpe militar.",
          "La tragedia de Trujillo dejó una cicatriz profunda en la historia del APRA y en la política peruana.",
          "El partido aprista se convirtió en una de las fuerzas políticas más importantes y持久 de América Latina."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f0f8ff"/>
        <text x="150" y="25" font-size="14" font-weight="bold" text-anchor="middle" fill="#00008b">APRA y Revolución de Trujillo</text>
        <circle cx="70" cy="85" r="35" fill="#8b0000"/>
        <text x="70" y="75" font-size="7" text-anchor="middle" fill="#fff">Haya de la</text>
        <text x="70" y="85" font-size="7" text-anchor="middle" fill="#fff">Torre</text>
        <text x="70" y="95" font-size="7" text-anchor="middle" fill="#fff">1930</text>
        <rect x="130" y="50" width="150" height="70" fill="#4169e1" rx="3"/>
        <text x="205" y="70" font-size="9" text-anchor="middle" fill="#fff">Fundación APRA 1930</text>
        <text x="205" y="85" font-size="8" text-anchor="middle" fill="#fff">Antiimperialismo</text>
        <text x="205" y="97" font-size="8" text-anchor="middle" fill="#fff">Liberación Nacional</text>
        <text x="205" y="110" font-size="8" text-anchor="middle" fill="#fff">Socialismo Democrático</text>
        <rect x="20" y="135" width="260" height="55" fill="#8b0000" rx="3"/>
        <text x="150" y="155" font-size="10" text-anchor="middle" fill="#fff">Revolución de Trujillo - Julio 1932</text>
        <text x="150" y="170" font-size="9" text-anchor="middle" fill="#fff">Insurrección armada • Represión militar brutal</text>
        <text x="150" y="183" font-size="9" text-anchor="middle" fill="#fff">Miles de muertos • Haya asilado en embajada</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7088,
        question: "¿En qué año se fundó el Partido Aprista Peruano?",
        options: [
          "1928",
          "1929",
          "1930",
          "1932"
        ],
        correctIndex: 2,
        explanation: "El Partido Aprista Peruano fue fundado por Víctor Raúl Haya de la Torre en 1930 durante su exilio en México.",
        difficulty: "basico"
      },
      {
        id: 7089,
        question: "¿Qué ocurrió durante la Revolución de Trujillo de 1932?",
        options: [
          "Los apristas tomaron Lima y establecieron un gobierno",
          "Los rebeldes tomaron Trujillo pero fueron derrotados en tres días por el ejército",
          "El gobierno derrotó una rebelión en Arequipa",
          "Haya de la Torre asumió la presidencia del país"
        ],
        correctIndex: 1,
        explanation: "La revolución aprista en Trujillo fue sofocada por el ejército en tres días, con miles de muertos y prisioneros ejecutados.",
        difficulty: "intermedio"
      },
      {
        id: 7090,
        question: "¿Qué pasó con Haya de la Torre tras la Revolución de Trujillo?",
        options: [
          "Fue ejecutado inmediatamente por el ejército",
          "Se exilió a Europa y no regresó al Perú",
          "Se asiló en la embajada colombiana durante años",
          "Fue encarcelado en el penal del Callao"
        ],
        correctIndex: 2,
        explanation: "Haya de la Torre se asiló en la embajada colombiana en Lima durante varios años para evitar ser ejecutado por el gobierno militar.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "gobierno-del-45",
    tip: "El gobierno de José Luis Bustamante y Rivero (1945-1948) intentó equilibrar la democracia con la influencia del APRA, pero terminó en un golpe militar.",
    theory: [
      {
        level: "basico",
        title: "Elección de Bustamante y Rivero",
        lines: [
          "José Luis Bustamante y Rivero fue elegido presidente en 1945 con el apoyo del Partido Aprista Peruano.",
          "El APRA junto con el Frente Democrático Nacional ganaron las elecciones contra la coalición conservadora.",
          "Bustamante era un diplomático de carrera que buscaba gobrar de forma moderada y conciliadora.",
          "Su gobierno inició con la esperanza de una nueva etapa de estabilidad política y reformas sociales.",
          "El estilo moderado de Bustamante contrastaba con las demandas radicales del APRA y la oligarquía.",
          "El nuevo gobierno enfrentó la difícil tarea de conciliar los intereses de sectores opuestos."
        ]
      },
      {
        level: "intermedio",
        title: "Alianza y conflicto con el APRA",
        lines: [
          "El APRA esperaba que Bustamante implementara reformas sociales profundas y favoreciera a los trabajadores.",
          "Bustamante se negó a legalizar el Partido Aprista y mantuvo la proscripción impuesta por gobiernos anteriores.",
          "El conflicto entre el gobierno y el APRA se intensificó a medida que avanzaba el mandato presidencial.",
          "El APRA organizó huelgas y protestas contra el gobierno que Bustamante reprimió con fuerza.",
          "La corrupción administrativa y la inestabilidad económica debilitaron aún más al gobierno de Bustamante.",
          "La alianza inicial entre el gobierno y el APRA se rompió definitivamente en 1947."
        ]
      },
      {
        level: "avanzado",
        title: "Golpe militar de 1948",
        lines: [
          "El 29 de octubre de 1948, el general Manuel A. Odría lideró un golpe militar que derrocó a Bustamante y Rivero.",
          "El golpe fue apoyado por la oligarquía, los militares conservadores y sectores anticomunistas del país.",
          "El pretexto del golpe fue la supuesta influencia comunista en el gobierno y la incapacidad de mantener el orden.",
          "Bustamante se exilió en Argentina donde vivió hasta su muerte en 1989.",
          "El golpe de Odría inició una dictadura militar que duraría ocho años (1948-1956).",
          "El gobierno de Bustamante fue el último intento exitoso de democracia civil antes del militarismo de mediados del siglo XX."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#fafafa"/>
        <text x="150" y="25" font-size="13" font-weight="bold" text-anchor="middle" fill="#333">Gobierno de Bustamante y Rivero</text>
        <text x="150" y="42" font-size="10" text-anchor="middle" fill="#666">(1945-1948)</text>
        <rect x="20" y="55" width="120" height="65" fill="#228b22" rx="3"/>
        <text x="80" y="75" font-size="9" text-anchor="middle" fill="#fff">Elección 1945</text>
        <text x="80" y="88" font-size="8" text-anchor="middle" fill="#fff">Apoyo del APRA</text>
        <text x="80" y="100" font-size="8" text-anchor="middle" fill="#fff">Democracia moderada</text>
        <rect x="160" y="55" width="120" height="65" fill="#daa520" rx="3"/>
        <text x="220" y="75" font-size="9" text-anchor="middle" fill="#333">Conflicto APRA</text>
        <text x="220" y="88" font-size="8" text-anchor="middle" fill="#333">Proscripción del partido</text>
        <text x="220" y="100" font-size="8" text-anchor="middle" fill="#333">Huelgas y represión</text>
        <rect x="20" y="135" width="260" height="50" fill="#8b0000" rx="3"/>
        <text x="150" y="155" font-size="10" text-anchor="middle" fill="#fff">Golpe Militar 29 de octubre de 1948</text>
        <text x="150" y="170" font-size="9" text-anchor="middle" fill="#fff">Gen. Manuel A. Odría derroca a Bustamante</text>
        <text x="150" y="183" font-size="9" text-anchor="middle" fill="#fff">Inicio de la dictadura odrísta (1948-1956)</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7091,
        question: "¿Quién fue elegido presidente del Perú en 1945 con el apoyo del APRA?",
        options: [
          "Manuel A. Odría",
          "Luis Miguel Sánchez Cerro",
          "José Luis Bustamante y Rivero",
          "Manuel Prado"
        ],
        correctIndex: 2,
        explanation: "José Luis Bustamante y Rivero fue elegido en 1945 con el apoyo del Partido Aprista Peruano y el Frente Democrático Nacional.",
        difficulty: "basico"
      },
      {
        id: 7092,
        question: "¿Por qué se rompió la alianza entre Bustamante y el APRA?",
        options: [
          "Bustamante implementó todas las reformas apristas",
          "Bustamante se negó a legalizar el Partido Aprista y reprimió sus protestas",
          "El APRA apoyó al gobierno conservador",
          "Bustamante exilió a todos los miembros del APRA"
        ],
        correctIndex: 1,
        explanation: "La alianza se rompió cuando Bustamante mantuvo la proscripción del APRA y reprimió las huelgas y protestas organizadas por el partido.",
        difficulty: "intermedio"
      },
      {
        id: 7093,
        question: "¿Qué evento puso fin al gobierno democrático de Bustamante y Rivero?",
        options: [
          "Una elección democrática en 1948",
          "Un golpe militar liderado por Manuel A. Odría en octubre de 1948",
          "Una revolución popular en 1947",
          "La muerte natural del presidente"
        ],
        correctIndex: 1,
        explanation: "El golpe militar del 29 de octubre de 1948 liderado por Odría derrocó a Bustamante e inició una dictadura de ocho años.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "dictadura-odria",
    tip: "La dictadura de Manuel A. Odría (1948-1956) se caracterizó por la represión política, el crecimiento económico y el exilio de sus opositores.",
    theory: [
      {
        level: "basico",
        title: "La Junta Militar y la represión",
        lines: [
          "Manuel A. Odría gobernó el Perú de 1948 a 1956 mediante una dictadura militar represiva.",
          "La Junta Militar gobernó inicialmente antes de que Odría fuera elegido en elecciones amañadas en 1950.",
          "Odría persiguió a los opositores políticos, especialmente a los apristas y los comunistas.",
          "El penal del Callao se llenó de prisioneros políticos durante los primeros años de la dictadura.",
          "Muchos intelectuales, artistas y políticos se exiliaron en México, Europa y otros países de América.",
          "La prensa fue censurada y los partidos políticos fueron prohibidos durante el gobierno de Odría."
        ]
      },
      {
        level: "intermedio",
        title: "Crecimiento económico y obras públicas",
        lines: [
          "Paradójicamente, la dictadura de Odría coincidió con un período de crecimiento económico significativo.",
          "El precio del algodón y otros productos de exportación subió internacionalmente, beneficiando al Perú.",
          "Odría impulsó grandes obras públicas como edificios, carreteras, hospitales y sistemas de riego.",
          "El gobierno fomentó la inversión extranjera en la industria minera y petrolera del país.",
          "La bonanza económica permitió al régimen mantener el apoyo de sectores empresariales y militares.",
          "El crecimiento económico se concentró en las ciudades costeñas, perpetuando la desigualdad regional."
        ]
      },
      {
        level: "avanzado",
        title: "El bonapartismo y el fin de la dictadura",
        lines: [
          "El gobierno de Odría fue denominado bonapartismo por combinar represión política con populismo económico.",
          "Odría realizó una gira internacional en 1953 que lo posicionó como candidato presidencial para el período 1956-1962.",
          "La oposición se organizó en la Coalición Nacional Unida liderada por Manuel Prado para competir en las elecciones.",
          "Las elecciones de 1956 se realizaron con una participación limitada y bajo presión del régimen.",
          "Odría terminó su mandato en 1956 y fue sucedido por Manuel Prado tras un período de transición.",
          "La dictadura dejó una huella de represión pero también de crecimiento económico que marcó al Perú."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f5f5f5"/>
        <text x="150" y="25" font-size="14" font-weight="bold" text-anchor="middle" fill="#333">Dictadura de Odría (1948-1956)</text>
        <rect x="20" y="45" width="120" height="65" fill="#8b0000" rx="3"/>
        <text x="80" y="65" font-size="9" text-anchor="middle" fill="#fff">Represión</text>
        <text x="80" y="78" font-size="8" text-anchor="middle" fill="#fff">Junta Militar</text>
        <text x="80" y="90" font-size="8" text-anchor="middle" fill="#fff">Penal del Callao</text>
        <text x="80" y="102" font-size="8" text-anchor="middle" fill="#fff">Exilio forzado</text>
        <rect x="160" y="45" width="120" height="65" fill="#228b22" rx="3"/>
        <text x="220" y="65" font-size="9" text-anchor="middle" fill="#fff">Crecimiento</text>
        <text x="220" y="78" font-size="8" text-anchor="middle" fill="#fff">Obras públicas</text>
        <text x="220" y="90" font-size="8" text-anchor="middle" fill="#fff">Inversión extranjera</text>
        <text x="220" y="102" font-size="8" text-anchor="middle" fill="#fff">Bonanza algodonera</text>
        <rect x="20" y="125" width="260" height="60" fill="#4169e1" rx="3"/>
        <text x="150" y="145" font-size="10" text-anchor="middle" fill="#fff">Bonapartismo: Represión + Populismo económico</text>
        <text x="150" y="160" font-size="9" text-anchor="middle" fill="#fff">Elecciones amañadas 1950 • Censura de prensa</text>
        <text x="150" y="175" font-size="9" text-anchor="middle" fill="#fff">Transición 1956: Manuel Prado asume el gobierno</text>
      </svg>`
    ],
    exercises: [
      {
        id: 7094,
        question: "¿Cómo se caracterizó principalmente la dictadura de Manuel A. Odría?",
        options: [
          "Por la democracia plena y las libertades civiles",
          "Por la represión política y la persecución de opositores",
          "Por la nacionalización de todas las empresas extranjeras",
          "Por la abolición del ejército peruano"
        ],
        correctIndex: 1,
        explanation: "La dictadura de Odría se caracterizó por la represión política, la censura de prensa y la persecución de opositores políticos.",
        difficulty: "basico"
      },
      {
        id: 7095,
        question: "¿Qué fenómeno económico benefició al régimen de Odría a pesar de su represión?",
        options: [
          "La caída del precio del algodón",
          "El crecimiento de la industria textil nacional",
          "La bonanza económica por alza de precios internacionales de exportación",
          "La reducción de la deuda externa del Perú"
        ],
        correctIndex: 2,
        explanation: "El régimen se benefició del alza de precios internacionales de productos como el algodón, lo que permitió crecimiento económico y obras públicas.",
        difficulty: "intermedio"
      },
      {
        id: 7096,
        question: "¿Quién sucedió a Odría en la presidencia del Perú en 1956?",
        options: [
          "Manuel Prado",
          "Víctor Raúl Haya de la Torre",
          "Ricardo Pérez Godoy",
          "Fernando Belaúnde"
        ],
        correctIndex: 0,
        explanation: "Manuel Prado fue elegido en las elecciones de 1956 y sucedió a Odría en la presidencia del Perú tras el fin de la dictadura.",
        difficulty: "avanzado"
      }
    ]
  }
];
