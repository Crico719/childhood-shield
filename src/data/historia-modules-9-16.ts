const historiaModulesPart2: CourseModule[] = [
  {
    slug: "aprismo-y-guerra",
    tip: "APRA (Alianza Popular Revolucionaria Americana) fue fundado en 1924. Sánchez Cerro derrocó a Leguía (1930) y enfrentó al aprismo. La Guerra con Ecuador fue en 1941.",
    theory: [
      {
        level: "basico",
        title: "APRA, Sánchez Cerro y la Guerra con Ecuador",
        lines: [
          "El APRA fue fundado por Víctor Raúl Haya de la Torre en 1924 en México como movimiento continental antiimperialista.",
          "En 1930, Luis Sánchez Cerro lideró un golpe de estado que derrocó al gobierno de Augusto B. Leguía.",
          "Sánchez Cerro enfrentó una fuerte oposición del APRA, lo que generó un enfrentamiento político violento.",
          "La Guerra con Ecuador estalló en julio de 1941 por disputas territoriales en la frontera amazónica.",
          "El conflicto terminó con la firma del Protocolo de Río de Janeiro en 1942, favorable al Perú.",
          "El Perú obtuvo territorios significativos en la Amazonía, consolidando su soberanía en la frontera norte."
        ]
      },
      {
        level: "intermedio",
        title: "Ideología aprista y persecución política",
        lines: [
          "Haya de la Torre propuso un programa de reformas antiimperialistas basado en la nacionalización de recursos estratégicos.",
          "El APRA defendía la alianza de clases media y obrera contra las oligarquías tradicionales y el dominio económico extranjero.",
          "Durante el gobierno de Sánchez Cerro, los miembros del APRA fueron sistemáticamente perseguidos y encarcelados.",
          "Sánchez Cerro fue asesinado en 1933 en Lima, un episodio que marcó profundamente la historia del partido aprista.",
          "El Protocolo de Río de Janeiro de 1942 estableció límites definitivos entre Perú y Ecuador, aunque Ecuador no los aceptó plenamente.",
          "La guerra de 1941 tuvo como consecuencia la expulsión de colonos ecuatorianos de zonas en disputa y la consolidación territorial peruana."
        ]
      },
      {
        level: "avanzado",
        title: "Movimientos sociales y reformismo vs. conservadurismo",
        lines: [
          "El aprismo representó una alternativa reformista en un contexto de dominio oligárquico en América Latina durante la primera mitad del siglo XX.",
          "El enfrentamiento entre APRA y las fuerzas conservadoras reflejó tensiones sobre modernización, participación popular y soberanía económica.",
          "Haya de la Torre propuso el concepto de 'dictadura del comercio exterior' como mecanismo para controlar la economía nacional.",
          "El reformismo aprista se articuló en torno a la defensa de los trabajadores y la reivindicación de los sectores medios urbanos.",
          "El conservadurismo representado por las élites limeñas y terratenientes resistió cualquier intento de redistribución de tierras o poder político.",
          "Este enfrentamiento definió la vida política peruana durante décadas y sentó las bases de la polarización entre izquierda y derecha."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">APRA y Guerra con Ecuador (1930-1941)</text>',
      '  <rect x="20" y="45" width="120" height="30" fill="#dbeafe" rx="6"/>',
      '  <text x="80" y="65" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold" font-family="sans-serif">APRA (1924)</text>',
      '  <line x1="80" y1="75" x2="80" y2="100" stroke="#93c5fd" stroke-width="2"/>',
      '  <rect x="20" y="100" width="120" height="30" fill="#fef3c7" rx="6"/>',
      '  <text x="80" y="120" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold" font-family="sans-serif">Golpe Sánchez Cerro (1930)</text>',
      '  <line x1="140" y1="60" x2="180" y2="60" stroke="#93c5fd" stroke-width="2" marker-end="url(#arrow)"/>',
      '  <rect x="180" y="45" width="100" height="30" fill="#fecaca" rx="6"/>',
      '  <text x="230" y="65" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold" font-family="sans-serif">Guerra 1941</text>',
      '  <text x="230" y="110" text-anchor="middle" fill="#1e293b" font-size="9" font-family="sans-serif">Protocolo de Río</text>',
      '  <text x="230" y="125" text-anchor="middle" fill="#1e293b" font-size="9" font-family="sans-serif">(1942)</text>',
      '  <defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2563eb"/></marker></defs>',
      '</svg>'
    ],
    exercises: [
      { id: 4001, question: "¿Quién fundó el APRA en 1924?", options: ["Víctor Raúl Haya de la Torre", "Luis Sánchez Cerro", "Augusto B. Leguía", "Alan García"], correctIndex: 0, explanation: "Haya de la Torre fundó el APRA en México en 1924 como movimiento antiimperialista continental.", difficulty: "basico" },
      { id: 4002, question: "¿En qué año se firmó el Protocolo de Río de Janeiro tras la guerra con Ecuador?", options: ["1941", "1942", "1945", "1938"], correctIndex: 1, explanation: "El Protocolo de Río de Janeiro se firmó en 1942, tras la Guerra de 1941, definiendo los límites entre ambos países.", difficulty: "intermedio" },
      { id: 4003, question: "¿Cuál fue el concepto económico central propuesto por Haya de la Torre?", options: ["Dictadura del comercio exterior", "Liberalización económica total", "Industrialización por sustitución de importaciones", "Economía planificada soviética"], correctIndex: 0, explanation: "Haya de la Torre propuso la 'dictadura del comercio exterior' para controlar los recursos económicos nacionales frente al imperialismo.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "segundo-militarismo",
    tip: "Odría gobernó 1948-1956. Su esposa Manuelita gobernó de facto 1950-1955. Memoriza: 1948-golpe, 1950-Manuelita, 1955-revolución libertadora.",
    theory: [
      {
        level: "basico",
        title: "Golpe de Odría y gobierno autoritario",
        lines: [
          "En 1948, Manuel A. Odría dio un golpe de estado derrocando al gobierno de José Luis Bustamante y Rivero.",
          "Odría instauró un régimen autoritario conocido como el 'Ochenio' (1948-1956).",
          "Su gobierno se caracterizó por la represión de opositores, la censura de prensa y la persecución política.",
          "Entre 1950 y 1955, Odría delegó el poder a su esposa, Manuelita Odría, mientras gobernaba desde las sombras.",
          "Manuelita Odría impulsó obras públicas, educación y la mejora de la infraestructura urbana.",
          "Odría cayó en 1955 tras una 'revolución libertadora' encabezada por el general Ricardo Pérez Godoy."
        ]
      },
      {
        level: "intermedio",
        title: "Economía, relaciones exteriores y movimientos estudiantiles",
        lines: [
          "Durante el Ochenio, el Perú experimentó un crecimiento económico basado en la exportación de minerales y productos agropecuarios.",
          "Las relaciones internacionales del Perú se orientaron hacia una política de no injerencia y acercamiento a Estados Unidos.",
          "Los movimientos estudiantiles fueron reprimidos con violencia, destacando la Masacre de la Plaza San Martín en 1954.",
          "El gobierno de Odría implementó políticas de desarrollo industrial sustitutivo para reducir la dependencia de importaciones.",
          "La censura de prensa fue una de las características más notorias, con cierre sistemático de medios opositores.",
          "El fin del Ochenio marcó el regreso a un proceso electoral, aunque no plenamente democrático."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto en la democracia y comparación con otros golpes",
        lines: [
          "El Ochenio consolidó un modelo de gobierno autoritario-militar que se repetiría en la historia peruana posterior.",
          "La experiencia de Odría demostró la fragilidad de las instituciones democráticas frente a las ambiciones personales del poder militar.",
          "La 'revolución libertadora' de 1955 sentó precedentes para futuros movimientos cívico-militares en el Perú.",
          "La dictadura de Odría se comparó con otros regímenes autoritarios latinoamericanos como el de Trujillo en Rep. Dominicana.",
          "El legado del Ochenio dejó una huella profunda en la percepción social sobre los gobiernos militares en el Perú.",
          "El retorno a la democracia en 1956 fue un proceso gradual que no resolvió las tensiones sociales acumuladas."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#7c3aed" font-size="12" font-weight="bold" font-family="sans-serif">Segundo Militarismo: Odría (1948-1956)</text>',
      '  <rect x="20" y="50" width="80" height="25" fill="#ede9fe" rx="6"/>',
      '  <text x="60" y="67" text-anchor="middle" fill="#5b21b6" font-size="9" font-weight="bold" font-family="sans-serif">Golpe 1948</text>',
      '  <line x1="100" y1="62" x2="130" y2="62" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrow2)"/>',
      '  <rect x="130" y="50" width="80" height="25" fill="#fce7f3" rx="6"/>',
      '  <text x="170" y="67" text-anchor="middle" fill="#9d174d" font-size="9" font-weight="bold" font-family="sans-serif">Manuelita 1950</text>',
      '  <line x1="210" y1="62" x2="240" y2="62" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrow2)"/>',
      '  <rect x="240" y="50" width="50" height="25" fill="#fee2e2" rx="6"/>',
      '  <text x="265" y="67" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">Caída 1955</text>',
      '  <rect x="20" y="100" width="260" height="80" fill="#f1f5f9" rx="8"/>',
      '  <text x="150" y="120" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Características del Ochenio</text>',
      '  <text x="30" y="138" fill="#475569" font-size="9" font-family="sans-serif">• Represión de opositores</text>',
      '  <text x="30" y="153" fill="#475569" font-size="9" font-family="sans-serif">• Censura de prensa</text>',
      '  <text x="30" y="168" fill="#475569" font-size="9" font-family="sans-serif">• Desarrollo económico</text>',
      '  <defs><marker id="arrow2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7c3aed"/></marker></defs>',
      '</svg>'
    ],
    exercises: [
      { id: 4010, question: "¿En qué año dio su golpe de estado Manuel A. Odría?", options: ["1946", "1948", "1950", "1952"], correctIndex: 1, explanation: "Odría dio su golpe de estado el 27 de octubre de 1948, derrocando al gobierno de Bustamante y Rivero.", difficulty: "basico" },
      { id: 4011, question: "¿Qué acontecimiento marcó la represión estudiantil durante el Ochenio?", options: ["Masacre de la Plaza San Martín (1954)", "Matanza de Trujillo (1932)", "Violencia en Puno (2023)", "Golpe de Velasco (1968)"], correctIndex: 0, explanation: "La Masacre de la Plaza San Martín en 1954 fue un episodio emblemático de la represión estudiantil durante el Ochenio.", difficulty: "intermedio" },
      { id: 4012, question: "¿Cuál fue el legado más significativo del Ochenio para la democracia peruana?", options: ["Consolidó un modelo de gobierno autoritario-militar repetible", "Estableció una constitución democrática duradera", "Impulsó la industrialización completa del país", "Eliminó la corrupción política"], correctIndex: 0, explanation: "El Ochenio consolidó un patrón de gobierno autoritario-militar que se repetiría en la historia peruana posterior.", difficulty: "avanzado" }
    ]
  },
"@

$part2 = @"
  {
    slug: "primer-belaunde",
    tip: "Belaúnde (1963-1968) promovió la democracia y la industrialización. Fue derrocado por Velasco en 1968. Memoria: Reforma agraria anunciada, contradicción con la izquierda.",
    theory: [
      {
        level: "basico",
        title: "Elecciones de 1963, gobierno y golpe de Velasco",
        lines: [
          "En 1963, Fernando Belaúnde Terry fue elegido presidente con el apoyo de la coalición Acción Popular-MDP.",
          "Su gobierno promovió la democratización, la educación y la industrialización del país.",
          "Belaúnde anunció una reforma agraria que fue criticada por ser insuficiente por la izquierda.",
          "El 3 de octubre de 1968, el general Juan Velasco Alvarado dio un golpe de estado contra Belaúnde.",
          "El golpe fue motivado por la crisis económica y la percepción de incapacidad gubernamental.",
          "Belaúnde fue exiliado a Argentina y el Perú inició una nueva etapa de gobierno militar reformista."
        ]
      },
      {
        level: "intermedio",
        title: "Coalición AP-UDP y contradicciones del gobierno",
        lines: [
          "La coalición Acción Popular-MDP (Movimiento Democrático Popular) unió fuerzas reformistas de distintos sectores.",
          "El APRA se opuso a Belaúnde acusándolo de no cumplir sus promesas de reforma agraria y social.",
          "La contradicción principal fue la falta de voluntad política para una reforma agraria profunda.",
          "La izquierda exigía nacionalizaciones y redistribución de tierras, mientras Belaúnde buscaba un equilibrio.",
          "El fracaso de las negociaciones con los militares reformistas condujo al golpe de estado de 1968.",
          "El golpe de Velasco contó con apoyo de sectores que veían la reforma agraria como urgente e inevitable."
        ]
      },
      {
        level: "avanzado",
        title: "Reformismo civil vs. fuerzas armadas y contexto latinoamericano",
        lines: [
          "El primer gobierno de Belaúnde representó el último intento serio de reformismo civil en Perú antes de 1980.",
          "El contexto latinoamericano de los años 60 influyó profundamente en la crisis política peruana.",
          "La Revolución Cubana (1959) inspiró movimientos de izquierda en toda América Latina, incluido el Perú.",
          "Los militares reformistas peruanos vieron en el golpe la oportunidad de implementar cambios estructurales.",
          "La contradicción entre reformismo civil y proyecto militar reformista definió la transición política de 1968.",
          "El golpe de Velasco marcó el inicio de un proyecto de transformación social sin precedentes en la historia peruana."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#059669" font-size="12" font-weight="bold" font-family="sans-serif">Primer Gobierno de Belaúnde (1963-1968)</text>',
      '  <rect x="20" y="50" width="80" height="30" fill="#d1fae5" rx="6"/>',
      '  <text x="60" y="70" text-anchor="middle" fill="#065f46" font-size="9" font-weight="bold" font-family="sans-serif">Elección 1963</text>',
      '  <line x1="100" y1="65" x2="130" y2="65" stroke="#059669" stroke-width="2" marker-end="url(#arrow3)"/>',
      '  <rect x="130" y="50" width="80" height="30" fill="#ecfdf5" rx="6"/>',
      '  <text x="170" y="70" text-anchor="middle" fill="#065f46" font-size="9" font-weight="bold" font-family="sans-serif">Gobierno</text>',
      '  <line x1="210" y1="65" x2="240" y2="65" stroke="#059669" stroke-width="2" marker-end="url(#arrow3)"/>',
      '  <rect x="240" y="50" width="50" height="30" fill="#fee2e2" rx="6"/>',
      '  <text x="265" y="70" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">Golpe 1968</text>',
      '  <rect x="20" y="100" width="260" height="80" fill="#f1f5f9" rx="8"/>',
      '  <text x="150" y="118" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Tensiones del gobierno</text>',
      '  <text x="30" y="136" fill="#475569" font-size="9" font-family="sans-serif">• Reforma agraria insuficiente</text>',
      '  <text x="30" y="151" fill="#475569" font-size="9" font-family="sans-serif">• Oposición del APRA</text>',
      '  <text x="30" y="166" fill="#475569" font-size="9" font-family="sans-serif">• Crisis económica y golpe militar</text>',
      '  <defs><marker id="arrow3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#059669"/></marker></defs>',
      '</svg>'
    ],
    exercises: [
      { id: 4020, question: "¿En qué año fue elegido Fernando Belaúnde Terry como presidente del Perú?", options: ["1960", "1963", "1966", "1968"], correctIndex: 1, explanation: "Belaúnde fue elegido en 1963 con el apoyo de la coalición Acción Popular-MDP.", difficulty: "basico" },
      { id: 4021, question: "¿Cuál fue la contradicción principal del gobierno de Belaúnde con la izquierda?", options: ["Reforma agraria percibida como insuficiente", "Falta de educación pública", "Censura de prensa total", "Persecución del APRA"], correctIndex: 0, explanation: "La izquierda criticó la reforma agraria de Belaúnde como insuficiente, exigiendo cambios más profundos en la distribución de tierras.", difficulty: "intermedio" },
      { id: 4022, question: "¿Qué significado histórico tuvo el golpe de Velasco en el contexto latinoamericano?", options: ["Marcó el inicio de un proyecto de transformación social sin precedentes", "Fue una simple restauración del orden conservador", "No tuvo relación con movimientos reformistas continentales", "Consolidó el poder de la oligarquía terrateniente"], correctIndex: 0, explanation: "El golpe de Velasco representó un proyecto reformista radical que buscó transformar la estructura social del Perú, en sintonía con movimientos similares en la región.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "velasco-y-reforma",
    tip: "Velasco (1968-1975) hizo la reforma agraria más grande de América Latina. Expropió haciendas y las repartió a campesinos. Fue derrocado por Morales Bermúdez.",
    theory: [
      {
        level: "basico",
        title: "Reforma agraria, expropiaciones y cambios sociales",
        lines: [
          "En 1968, el general Juan Velasco Alvarado dio un golpe de estado instaurando un gobierno militar reformista.",
          "Su principal obra fue la Reforma Agraria de 1969, que expropió grandes haciendas para redistribuirlas a campesinos.",
          "La reforma buscó eliminar el latifundio como estructura de explotación social y económica en el campo.",
          "Se crearon cooperativas agrícolas y se impulsó la organización comunal de los productores rurales.",
          "Velasco también nacionalizó empresas extranjeras en sectores clave como la minería y la industria.",
          "Los cambios sociales incluyeron la creación de sindicatos campesinos y la mejora de las condiciones de vida rurales."
        ]
      },
      {
        level: "intermedio",
        title: "Modelos económicos: Velasco vs. Morales Bermúdez",
        lines: [
          "El gobierno de Velasco implementó un modelo económico mixto con fuerte intervención estatal en la economía.",
          "Se crearon empresas estatales para controlar sectores estratégicos como el petróleo, la siderurgia y la pesca.",
          "En 1975, Morales Bermúdez dio un contra-golpe contra Velasco, derrocándolo argumentando su enfermedad.",
          "Morales Bermúdez implementó un modelo de liberalización económica, abriendo el mercado a la inversión privada.",
          "La transición de un modelo estatista a uno más abierto generó tensiones sociales y económicas significativas.",
          "El fin del gobierno militar en 1980 marcó el retorno a la democracia bajo el gobierno civil de Belaúnde."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto a largo plazo: latifundio vs. minifundio y producción agrícola",
        lines: [
          "La reforma agraria peruana fue una de las más ambiciosas de América Latina, transformando radicalmente la estructura agraria.",
          "Sin embargo, la redistribución creó minifundios que redujeron la productividad agrícola en comparación con las grandes haciendas.",
          "El latifundio fue eliminado como sistema, pero no se logró una producción agrícola eficiente y competitiva.",
          "Las cooperativas agrícolas tuvieron resultados mixtos, con problemas de gestión y falta de capacitación técnica.",
          "El impacto a largo plazo incluyó la migración rural-urbana masiva hacia las ciudades costeras del Perú.",
          "La reforma agraria sentó bases para la lucha por la tierra que continuaría durante décadas."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#ea580c" font-size="12" font-weight="bold" font-family="sans-serif">Reforma Agraria: Velasco (1968-1975)</text>',
      '  <rect x="20" y="45" width="100" height="30" fill="#fed7aa" rx="6"/>',
      '  <text x="70" y="65" text-anchor="middle" fill="#9a3412" font-size="9" font-weight="bold" font-family="sans-serif">Golpe 1968</text>',
      '  <line x1="120" y1="60" x2="150" y2="60" stroke="#ea580c" stroke-width="2" marker-end="url(#arrow4)"/>',
      '  <rect x="150" y="45" width="100" height="30" fill="#fef3c7" rx="6"/>',
      '  <text x="200" y="65" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold" font-family="sans-serif">Reforma 1969</text>',
      '  <line x1="250" y1="60" x2="275" y2="60" stroke="#ea580c" stroke-width="2" marker-end="url(#arrow4)"/>',
      '  <rect x="20" y="95" width="260" height="85" fill="#f1f5f9" rx="8"/>',
      '  <text x="150" y="115" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Transformación Agraria</text>',
      '  <text x="30" y="133" fill="#475569" font-size="9" font-family="sans-serif">Latifundio → Minifundio + Cooperativas</text>',
      '  <text x="30" y="148" fill="#475569" font-size="9" font-family="sans-serif">Nacionalización de empresas extranjeras</text>',
      '  <text x="30" y="163" fill="#475569" font-size="9" font-family="sans-serif">Migración rural-urbana masiva</text>',
      '  <defs><marker id="arrow4" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ea580c"/></marker></defs>',
      '</svg>'
    ],
    exercises: [
      { id: 4030, question: "¿En qué año se implementó la Reforma Agraria en el Perú?", options: ["1968", "1969", "1970", "1975"], correctIndex: 1, explanation: "La Reforma Agraria se implementó en 1969 bajo el gobierno de Velasco Alvarado.", difficulty: "basico" },
      { id: 4031, question: "¿Cuál fue uno de los problemas estructurales de la Reforma Agraria?", options: ["Creación de minifundios con baja productividad", "Exceso de inversión extranjera en el campo", "Falta de organización campesina", "No se expropiaron haciendas"], correctIndex: 0, explanation: "La reforma creó minifundios que redujeron la productividad agrícola en comparación con las grandes haciendas expropiadas.", difficulty: "intermedio" },
      { id: 4032, question: "¿Qué modelo económico implementó Morales Bermúdez tras derrocar a Velasco?", options: ["Modelo de liberalización económica", "Modelo estatista más radical", "Modelo de economía planificada", "Modelo de autarquía económica"], correctIndex: 0, explanation: "Morales Bermúdez implementó un modelo de liberalización económica, abriendo el mercado a la inversión privada tras el estatismo de Velasco.", difficulty: "avanzado" }
    ]
  },
"@

$part3 = @"
  {
    slug: "terrorismo-y-dictadura",
    tip: "El terrorismo (1980-2000) mató a más de 69,000 personas. Fujimori dio el autogolpe en 1992. Memoriza: Sendero Luminoso (Abimael Guzmán), MRTA, Comisión de la Verdad.",
    theory: [
      {
        level: "basico",
        title: "Sendero Luminoso, MRTA y violencia 1980-2000",
        lines: [
          "El Sendero Luminoso fue una organización maoísta liderada por Abimael Guzmán que inició la lucha armada en 1980.",
          "El MRTA (Movimiento Revolucionario Túpac Amaru) fue otro grupo insurgente de orientación marxista-leninista.",
          "Entre 1980 y 2000, la violencia terrorista mató a más de 69,000 personas, principalmente en zonas rurales.",
          "Sendero Luminoso atacó infraestructura, instituciones del Estado y comunidades campesinas.",
          "El MRTA realizó secuestros y atentados, destacando la toma de la embajada de Japón en 1996.",
          "La lucha contra el terrorismo provocó violaciones de derechos humanos por parte de las fuerzas del Estado."
        ]
      },
      {
        level: "intermedio",
        title: "Autogolpe de Fujimori, Montesinos y el régimen autoritario",
        lines: [
          "En 1992, Alberto Fujimori dio un autogolpe disolviendo el Congreso y suspendiendo la Constitución.",
          "El autogolpe fue justificado como medida para combatir el terrorismo y la corrupción política.",
          "Vladimiro Montesinos fue la figura clave detrás del aparato de inteligencia y represión del régimen.",
          "Fujimori implementó políticas económicas neoliberales, incluyendo la privatización de empresas estatales.",
          "La lucha contra Sendero Luminoso logró la captura de Abimael Guzmán en septiembre de 1992.",
          "El régimen de Fujimori terminó en 2000 tras la revelación de los vladivideos y la crisis política subsiguiente."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto en derechos humanos, memoria y reconciliación",
        lines: [
          "El conflicto armado interno dejó un legado profundo de violaciones de derechos humanos en todo el país.",
          "La Comisión de la Verdad y Reconciliación (2001-2003) documentó más de 69,000 muertos y desaparecidos.",
          "Los casos emblemáticos incluyen la masacre de Barrios Altos (1991) y el caso de los penales (1992).",
          "La reconciliación nacional requiere reconocer el sufrimiento de las víctimas y garantizar no repetición.",
          "El juicio a Fujimori y Montesinos por crímenes de derechos humanos marcó un precedente histórico.",
          "La memoria histórica es fundamental para construir una sociedad más justa y democrática en el Perú."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="bold" font-family="sans-serif">Terrorismo y Dictadura (1980-2000)</text>',
      '  <rect x="20" y="45" width="120" height="30" fill="#fee2e2" rx="6"/>',
      '  <text x="80" y="65" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">Sendero Luminoso</text>',
      '  <rect x="160" y="45" width="120" height="30" fill="#fef3c7" rx="6"/>',
      '  <text x="220" y="65" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold" font-family="sans-serif">MRTA</text>',
      '  <rect x="20" y="95" width="260" height="90" fill="#f1f5f9" rx="8"/>',
      '  <text x="150" y="115" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Impacto del Conflicto</text>',
      '  <text x="30" y="133" fill="#475569" font-size="9" font-family="sans-serif">• 69,000+ víctimas mortales</text>',
      '  <text x="30" y="148" fill="#475569" font-size="9" font-family="sans-serif">• Autogolpe de Fujimori (1992)</text>',
      '  <text x="30" y="163" fill="#475569" font-size="9" font-family="sans-serif">• Captura de Guzmán (1992)</text>',
      '  <text x="30" y="178" fill="#475569" font-size="9" font-family="sans-serif">• Violaciones de derechos humanos</text>',
      '</svg>'
    ],
    exercises: [
      { id: 4040, question: "¿Quién fue el líder del Sendero Luminoso?", options: ["Abimael Guzmán", "Vladimiro Montesinos", "Alberto Fujimori", "Oscar Ramírez"], correctIndex: 0, explanation: "Abimael Guzmán fue el líder fundador del Sendero Luminoso, capturado en 1992.", difficulty: "basico" },
      { id: 4041, question: "¿En qué año Fujimori dio el autogolpe que disolvió el Congreso?", options: ["1990", "1992", "1995", "1998"], correctIndex: 1, explanation: "Fujimori dio el autogolpe el 5 de abril de 1992, disolviendo el Congreso y suspendiendo la Constitución.", difficulty: "intermedio" },
      { id: 4042, question: "¿Qué caso emblemático de derechos humanos involucró la masacre de Barrios Altos?", options: ["Grupo Colina y operaciones de inteligencia", "El MRTA y la embajada de Japón", "Sendero Luminoso y comunidades campesinas", "El ejército y zonas rurales"], correctIndex: 0, explanation: "La masacre de Barrios Altos (1991) fue perpetrada por el Grupo Colina, unidad de inteligencia vinculada al régimen de Fujimori.", difficulty: "avanzado" }
    ]
  },
"@

$part4 = @"
  {
    slug: "transicion-democratica",
    tip: "La transición (2001-2016) fue difícil: Paniagua limpió, Toledo creció, Humala moderó. Memoriza: Comisión de la Verdad, crisis 2008, corrupción generalizada.",
    theory: [
      {
        level: "basico",
        title: "Paniagua, Toledo y Humala",
        lines: [
          "Valentín Paniagua asumió la presidencia en 2001 tras la caída de Fujimori, liderando un gobierno de transición.",
          "Paniagua convocó elecciones y sentó las bases para la reconstrucción democrática del país.",
          "Alejandro Toledo fue elegido en 2001 y gobernó hasta 2006, implementando políticas de crecimiento económico.",
          "Toledo enfrentó protestas sociales y crisis políticas que afectaron gravemente su popularidad.",
          "Ollanta Humala fue elegido en 2011 con un discurso moderado, alejándose de su postura radical inicial.",
          "Humala implementó políticas sociales y mantuvo la estabilidad macroeconómica durante su gobierno."
        ]
      },
      {
        level: "intermedio",
        title: "Crecimiento económico, pobreza y corrupción",
        lines: [
          "Durante la transición, el Perú experimentó un crecimiento económico sostenido impulsado por los commodities.",
          "La pobreza disminuyó significativamente, pero la desigualdad persistió en zonas rurales y urbanas.",
          "La corrupción fue un problema crónico que afectó a todos los gobiernos durante la transición.",
          "El caso Odebrecht y otros escándalos de corrupción sacudieron al país a partir de 2016.",
          "La crisis de 2008, derivada de la crisis financiera global, afectó momentáneamente la economía peruana.",
          "La inestabilidad política y la corrupción generaron desconfianza ciudadana en las instituciones del Estado."
        ]
      },
      {
        level: "avanzado",
        title: "Legado, comparaciones y participación ciudadana",
        lines: [
          "La transición democrática dejó un legado mixto: crecimiento económico pero debilidad institucional persistente.",
          "La comparación con otros países latinoamericanos muestra que el Perú logró estabilidad política relativa.",
          "La participación ciudadana aumentó con movimientos sociales que demandaron transparencia y justicia.",
          "Las protestas contra la corrupción y la ineficiencia del Estado se intensificaron durante la transición.",
          "El legado de la transición incluye la consolidación de derechos civiles y la apertura política.",
          "La sociedad civil peruana se fortaleció como actor clave en la defensa de la democracia y los derechos humanos."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#0891b2" font-size="12" font-weight="bold" font-family="sans-serif">Transición Democrática (2001-2016)</text>',
      '  <rect x="15" y="45" width="80" height="25" fill="#cffafe" rx="6"/>',
      '  <text x="55" y="62" text-anchor="middle" fill="#155e75" font-size="8" font-weight="bold" font-family="sans-serif">Paniagua</text>',
      '  <line x1="95" y1="57" x2="110" y2="57" stroke="#0891b2" stroke-width="2" marker-end="url(#arrow5)"/>',
      '  <rect x="110" y="45" width="80" height="25" fill="#cffafe" rx="6"/>',
      '  <text x="150" y="62" text-anchor="middle" fill="#155e75" font-size="8" font-weight="bold" font-family="sans-serif">Toledo</text>',
      '  <line x1="190" y1="57" x2="205" y2="57" stroke="#0891b2" stroke-width="2" marker-end="url(#arrow5)"/>',
      '  <rect x="205" y="45" width="80" height="25" fill="#cffafe" rx="6"/>',
      '  <text x="245" y="62" text-anchor="middle" fill="#155e75" font-size="8" font-weight="bold" font-family="sans-serif">Humala</text>',
      '  <rect x="20" y="90" width="260" height="95" fill="#f1f5f9" rx="8"/>',
      '  <text x="150" y="110" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Balance de la Transición</text>',
      '  <text x="30" y="128" fill="#16a34a" font-size="9" font-family="sans-serif">+ Crecimiento económico sostenido</text>',
      '  <text x="30" y="143" fill="#16a34a" font-size="9" font-family="sans-serif">+ Reducción de pobreza</text>',
      '  <text x="30" y="158" fill="#dc2626" font-size="9" font-family="sans-serif">- Corrupción generalizada</text>',
      '  <text x="30" y="173" fill="#dc2626" font-size="9" font-family="sans-serif">- Debilidad institucional</text>',
      '  <defs><marker id="arrow5" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0891b2"/></marker></defs>',
      '</svg>'
    ],
    exercises: [
      { id: 4050, question: "¿Quién asumió la presidencia tras la caída de Fujimori en 2001?", options: ["Valentín Paniagua", "Alejandro Toledo", "Alan García", "Ollanta Humala"], correctIndex: 0, explanation: "Valentín Paniagua asumió la presidencia como presidente del Congreso tras la renuncia de Fujimori.", difficulty: "basico" },
      { id: 4051, question: "¿Cuál fue el principal problema estructural durante la transición democrática?", options: ["Crecimiento económico insuficiente", "Corrupción generalizada en todas las ramas del Estado", "Falta de elecciones libres", "Ausencia de partidos políticos"], correctIndex: 1, explanation: "La corrupción fue el problema más persistente durante la transición, afectando a todos los gobiernos y erosionando la confianza institucional.", difficulty: "intermedio" },
      { id: 4052, question: "¿Qué actor social se fortaleció como defensor de la democracia durante la transición?", options: ["La sociedad civil organizada", "Las fuerzas armadas", "La Iglesia Católica", "Los medios de comunicación"], correctIndex: 0, explanation: "La sociedad civil peruana se fortaleció como actor clave en la defensa de la democracia, los derechos humanos y la lucha contra la corrupción.", difficulty: "avanzado" }
    ]
  },
"@

$part5 = @"
  {
    slug: "peru-contemporaneo",
    tip: "El Perú contemporáneo (2016-2025) tiene crisis políticas frecuentes: Kuczynski renunció, Vizcarra fue vacado, Castillo fue vacado y arrestado.",
    theory: [
      {
        level: "basico",
        title: "Kuczynski, Vizcarra, Castillo y Boluarte",
        lines: [
          "Pedro Pablo Kuczynski fue elegido en 2016 pero renunció en 2018 ante la amenaza de vacancia por corrupción.",
          "Martín Vizcarra asumió la presidencia y fue vacado por el Congreso en 2020 en un proceso polémico.",
          "Manuel Merino asumió brevemente la presidencia pero renunció tras fuertes protestas ciudadanas.",
          "Francisco Sagasti lideró un gobierno de transición hasta las elecciones de 2021.",
          "Pedro Castillo fue elegido en 2021 con un discurso de transformación social pero enfrentó múltiples crisis.",
          "Castillo fue vacado y arrestado en diciembre de 2022, asumiendo Dina Boluarte la presidencia."
        ]
      },
      {
        level: "intermedio",
        title: "Crisis constitucional, vacancias y protestas",
        lines: [
          "El período 2016-2023 estuvo marcado por una crisis constitucional sin precedentes en la república.",
          "Las vacancias presidenciales de Vizcarra y Castillo reflejaron la profunda polarización política del país.",
          "Las protestas sociales contra Boluarte en 2022-2023 dejaron un saldo trágico de muertos y heridos.",
          "El Congreso fue percibido como un obstáculo para la gobernabilidad y la implementación de reformas.",
          "La inestabilidad presidencial generó incertidumbre económica y social en todo el territorio nacional.",
          "La crisis política cuestionó la vigencia de la Constitución de 1993 y el modelo institucional vigente."
        ]
      },
      {
        level: "avanzado",
        title: "Estabilidad institucional, reformas pendientes y participación ciudadana",
        lines: [
          "El Perú enfrenta un desafío fundamental de construir estabilidad institucional en un contexto de polarización extrema.",
          "Las reformas pendientes incluyen la modernización del Estado, la descentralización y la mejora de servicios públicos.",
          "La participación ciudadana se ha intensificado a través de protestas sociales y demandas de rendición de cuentas.",
          "La crisis contemporánea reveló las debilidades estructurales del sistema político peruano post-Fujimori.",
          "El debate sobre una nueva constitución refleja la búsqueda de un nuevo contrato social para el país.",
          "La superación de la crisis requiere diálogo, consenso y compromiso de todos los sectores de la sociedad."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#9333ea" font-size="12" font-weight="bold" font-family="sans-serif">Perú Contemporáneo (2016-2025)</text>',
      '  <rect x="10" y="45" width="60" height="25" fill="#f3e8ff" rx="6"/>',
      '  <text x="40" y="62" text-anchor="middle" fill="#6b21a8" font-size="7" font-weight="bold" font-family="sans-serif">Kuczynski</text>',
      '  <line x1="70" y1="57" x2="82" y2="57" stroke="#9333ea" stroke-width="2" marker-end="url(#arrow6)"/>',
      '  <rect x="82" y="45" width="60" height="25" fill="#fce7f3" rx="6"/>',
      '  <text x="112" y="62" text-anchor="middle" fill="#9d174d" font-size="7" font-weight="bold" font-family="sans-serif">Vizcarra</text>',
      '  <line x1="142" y1="57" x2="154" y2="57" stroke="#9333ea" stroke-width="2" marker-end="url(#arrow6)"/>',
      '  <rect x="154" y="45" width="60" height="25" fill="#fee2e2" rx="6"/>',
      '  <text x="184" y="62" text-anchor="middle" fill="#991b1b" font-size="7" font-weight="bold" font-family="sans-serif">Castillo</text>',
      '  <line x1="214" y1="57" x2="226" y2="57" stroke="#9333ea" stroke-width="2" marker-end="url(#arrow6)"/>',
      '  <rect x="226" y="45" width="65" height="25" fill="#fef3c7" rx="6"/>',
      '  <text x="258" y="62" text-anchor="middle" fill="#92400e" font-size="7" font-weight="bold" font-family="sans-serif">Boluarte</text>',
      '  <rect x="20" y="90" width="260" height="95" fill="#f1f5f9" rx="8"/>',
      '  <text x="150" y="110" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Crisis Institucional</text>',
      '  <text x="30" y="128" fill="#475569" font-size="9" font-family="sans-serif">• Vacancias presidenciales (2020, 2022)</text>',
      '  <text x="30" y="143" fill="#475569" font-size="9" font-family="sans-serif">• Protestas sociales masivas</text>',
      '  <text x="30" y="158" fill="#475569" font-size="9" font-family="sans-serif">• Debate constitucional</text>',
      '  <text x="30" y="173" fill="#475569" font-size="9" font-family="sans-serif">• Polarización política extrema</text>',
      '  <defs><marker id="arrow6" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9333ea"/></marker></defs>',
      '</svg>'
    ],
    exercises: [
      { id: 4060, question: "¿Por qué renunció Pedro Pablo Kuczynski en 2018?", options: ["Ante la amenaza de vacancia por corrupción", "Por razones de salud", "Tras perder las elecciones", "Por conflictos con el Congreso"], correctIndex: 0, explanation: "Kuczynski renunció en marzo de 2018 antes de que el Congreso votara su vacancia por presuntos pagos ilegales de Odebrecht.", difficulty: "basico" },
      { id: 4061, question: "¿Qué proceso constitucional se utilizó contra Vizcarra en 2020?", options: ["Vacancia presidencial por incapacidad moral permanente", "Juicio político por corrupción", "Referéndum revocatorio", "Destitución por la Corte Suprema"], correctIndex: 0, explanation: "Vizcarra fue vacado en noviembre de 2020 bajo la figura de 'incapacidad moral permanente', un mecanismo cuestionado jurídicamente.", difficulty: "intermedio" },
      { id: 4062, question: "¿Qué reveló la crisis política contemporánea sobre el sistema institucional peruano?", options: ["Debilidades estructurales del modelo post-Fujimori", "Fortaleza del sistema de contrapesos", "Éxito de la descentralización", "Consolidación del Estado de derecho"], correctIndex: 0, explanation: "La crisis contemporánea evidenció las debilidades estructurales del sistema político peruano, incluyendo la falta de equilibrio entre poderes y ausencia de cultura democrática.", difficulty: "avanzado" }
    ]
  },
"@

$part6 = @"
  {
    slug: "derechos-humanos",
    tip: "La Comisión de la Verdad (2001-2003) documentó 69,280 muertos. El caso de los penales fue emblemático. Memoriza: Comisión de la Verdad, informe final, reparaciones.",
    theory: [
      {
        level: "basico",
        title: "Qué fue la Comisión de la Verdad, mandato y hallazgos",
        lines: [
          "La Comisión de la Verdad y Reconciliación (CVR) fue creada en 2001 para investigar el conflicto armado interno.",
          "Su mandato fue establecer la verdad sobre las violaciones de derechos humanos cometidas entre 1980 y 2000.",
          "La CVR documentó 69,280 víctimas mortales y desaparecidos durante el período de violencia.",
          "El informe final fue presentado en agosto de 2003 y contuvo recomendaciones para la reconciliación nacional.",
          "La comisión estuvo presidida por Salomón Lerner Febres y contó con el apoyo de organizaciones de derechos humanos.",
          "Los hallazgos de la CVR revelaron la responsabilidad de Sendero Luminoso, el MRTA y las fuerzas del Estado."
        ]
      },
      {
        level: "intermedio",
        title: "Casos emblemáticos, penales y comunidades afectadas",
        lines: [
          "El caso de los penales (1992) involucró la ejecución extrajudicial de internos acusados de terrorismo.",
          "La masacre de Barrios Altos (1991) dejó 15 muertos y fue perpetrada por el Grupo Colina.",
          "Las comunidades campesinas de Ayacucho fueron las más afectadas por la violencia de Sendero Luminoso.",
          "El caso de los vladivideos reveló la corrupción sistémica del régimen de Fujimori y Montesinos.",
          "Los casos emblemáticos sirvieron como base para procesos judiciales contra responsables de violaciones.",
          "La CVR documentó desplazamientos forzados, violencia sexual y reclutamiento forzado de menores."
        ]
      },
      {
        level: "avanzado",
        title: "Justicia transicional, reparaciones y memoria histórica",
        lines: [
          "La justicia transicional busca equilibrar verdad, justicia y reparación en sociedades post-conflicto.",
          "El caso peruano ha sido reconocido internacionalmente como un modelo de comisión de la verdad.",
          "Las reparaciones incluyeron indemnizaciones económicas, programas de salud y educación para víctimas.",
          "La memoria histórica se ha convertido en un instrumento fundamental para la no repetición de la violencia.",
          "El debate sobre amnistías y prescripción de crímenes sigue siendo un tema controversial en el Perú.",
          "La sociedad civil peruana ha jugado un rol fundamental en la defensa de los derechos de las víctimas."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#b91c1c" font-size="12" font-weight="bold" font-family="sans-serif">Derechos Humanos y Comisión de la Verdad</text>',
      '  <rect x="20" y="45" width="260" height="30" fill="#fef2f2" rx="6"/>',
      '  <text x="150" y="65" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold" font-family="sans-serif">69,280 víctimas documentadas (1980-2000)</text>',
      '  <rect x="20" y="90" width="120" height="45" fill="#f1f5f9" rx="6"/>',
      '  <text x="80" y="108" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">CVR (2001-2003)</text>',
      '  <text x="80" y="125" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Verdad y Reconciliación</text>',
      '  <rect x="160" y="90" width="120" height="45" fill="#f1f5f9" rx="6"/>',
      '  <text x="220" y="108" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Casos Emblemáticos</text>',
      '  <text x="220" y="125" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Barrios Altos, Penales</text>',
      '  <rect x="20" y="150" width="260" height="35" fill="#ecfdf5" rx="6"/>',
      '  <text x="150" y="172" text-anchor="middle" fill="#065f46" font-size="9" font-weight="bold" font-family="sans-serif">Justicia Transicional + Reparaciones + Memoria</text>',
      '</svg>'
    ],
    exercises: [
      { id: 4070, question: "¿Cuántas víctimas documentó la Comisión de la Verdad y Reconciliación?", options: ["69,280", "50,000", "100,000", "30,000"], correctIndex: 0, explanation: "La CVR documentó 69,280 víctimas mortales y desaparecidos durante el conflicto armado interno (1980-2000).", difficulty: "basico" },
      { id: 4071, question: "¿Qué caso emblemático involucró la ejecución de internos en los penales?", options: ["La matanza de los penales (1992)", "La masacre de Putis (1983)", "El caso de Accomarca (1985)", "La toma de la embajada de Japón (1996)"], correctIndex: 0, explanation: "La matanza de los penales en 1992 involucró la ejecución extrajudicial de internos acusados de terrorismo por agentes del Estado.", difficulty: "intermedio" },
      { id: 4072, question: "¿Cuál es el principio fundamental de la justicia transicional en sociedades post-conflicto?", options: ["Equilibrar verdad, justicia y reparación", "Olvídar el pasado para avanzar", "Castigo severo sin excepciones", "Impunidad garantizada para los victimarios"], correctIndex: 0, explanation: "La justicia transicional busca equilibrar verdad, justicia y reparación, reconociendo que la paz social requiere abordar las violaciones del pasado de manera integral.", difficulty: "avanzado" }
    ]
  }
];

export default historiaModulesPart2;