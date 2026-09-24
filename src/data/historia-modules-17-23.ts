const historiaModulesPart3: CourseModule[] = [
  {
    slug: "revolucion-francesa",
    tip: "La Revolución Francesa (1789) cambió el mundo. Causas: desigualdad social, Ilustración, crisis económica. Memoriza: Toma de la Bastilla (14 jul 1789), Declaración de Derechos del Hombre.",
    theory: [
      {
        level: "basico",
        title: "Causas y detonantes de la Revolución Francesa",
        lines: [
          "Francia vivía bajo el Antiguo Régimen, dividido en tres estamentos: clero, nobleza y pueblo llano (97% de la población).",
          "Los primeros dos estamentos gozaban de privilegios fiscales, mientras el tercero soportaba la carga tributaria.",
          "La Ilustración (Voltaire, Rousseau, Montesquieu) promovió ideas de libertad, soberanía popular y separación de poderes.",
          "La crisis económica, derivada de la deuda por apoyar la independencia de EE.UU. y malas cosechas, provocó hambruna.",
          "El 14 de julio de 1789, el pueblo tomó la Bastilla, símbolo del poder absoluto monárquico, marcando el inicio de la Revolución.",
          "En agosto de 1789 se proclamó la Declaración de los Derechos del Hombre y del Ciudadano, base del constitucionalismo moderno."
        ]
      },
      {
        level: "intermedio",
        title: "Fases de la Revolución y ascenso de Napoleón",
        lines: [
          "Fase moderada (1789-1792): Asamblea Nacional y Constitución de 1791 que instauró la monarquía constitucional.",
          "Fase radical (1792-1794): Proclamación de la República, ejecución de Luis XVI y Reinado del Terror bajo Robespierre.",
          "El Comité de Salvación Pública, liderado por Robespierre, ejecutó a miles de sospechosos de ser enemigos de la Revolución.",
          "Fase termidoriana (1794-1799): Caída de Robespierre en Termidor y retorno a posiciones moderadas.",
          "Napoleón Bonaparte dio un golpe de Estado en 1799 (18 Brumario) y se proclamó Primer Cónsul.",
          "Napoleón consolidó el Estado moderno con el Código Civil (1804), el sistema métrico y la reorganización administrativa."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto mundial y comparación con la Revolución Americana",
        lines: [
          "La Revolución Francesa influyó directamente en los procesos de independencia latinoamericanos (Bolívar, San Martín).",
          "A diferencia de la Rev. Americana (1776), la francesa buscó transformar la estructura social interna, no solo la soberanía política.",
          "Ambas revoluciones compartieron los ideales ilustrados: libertad, igualdad y gobierno representativo.",
          "La Revolución Francesa generó las guerras napoleónicas, que reconfiguraron el mapa europeo y debilitaron el colonialismo español.",
          "En Haití (1791-1804), la primera revolución esclava exitosa fue directamente influenciada por los ideales franceses.",
          "El legado incluye el laicismo, los derechos humanos, el nacionalismo moderno y el modelo republicano de gobierno."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">La Revolución Francesa (1789)</text>',
      '  <rect x="30" y="45" width="70" height="110" fill="#fecaca" rx="6"/>',
      '  <text x="65" y="75" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">CLERO</text>',
      '  <text x="65" y="90" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">Privilegios</text>',
      '  <text x="65" y="102" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">fiscales</text>',
      '  <rect x="115" y="45" width="70" height="110" fill="#fed7aa" rx="6"/>',
      '  <text x="150" y="75" text-anchor="middle" fill="#9a3412" font-size="9" font-weight="bold" font-family="sans-serif">NOBLEZA</text>',
      '  <text x="150" y="90" text-anchor="middle" fill="#9a3412" font-size="8" font-family="sans-serif">Monopolio</text>',
      '  <text x="150" y="102" text-anchor="middle" fill="#9a3412" font-size="8" font-family="sans-serif">territorial</text>',
      '  <rect x="200" y="45" width="70" height="110" fill="#bbf7d0" rx="6"/>',
      '  <text x="235" y="75" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold" font-family="sans-serif">PUEBLO</text>',
      '  <text x="235" y="90" text-anchor="middle" fill="#166534" font-size="8" font-family="sans-serif">97%</text>',
      '  <text x="235" y="102" text-anchor="middle" fill="#166534" font-size="8" font-family="sans-serif">Sin derechos</text>',
      '  <line x1="150" y1="165" x2="150" y2="180" stroke="#dc2626" stroke-width="2"/>',
      '  <polygon points="145,180 155,180 150,190" fill="#dc2626"/>',
      '  <text x="150" y="198" text-anchor="middle" fill="#dc2626" font-size="8" font-family="sans-serif">14 jul 1789: Toma de la Bastilla</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5001,
        question: "¿Cuál fue el acontecimiento que marcó el inicio simbólico de la Revolución Francesa?",
        options: [
          "La ejecución de Luis XVI",
          "La Toma de la Bastilla el 14 de julio de 1789",
          "El golpe de Estado de Napoleón en 1799",
          "La proclamación del Imperio en 1804"
        ],
        correctIndex: 1,
        explanation: "La Toma de la Bastilla el 14 de julio de 1789 simbolizó el fin del poder absoluto monárquico y es considerada el detonante de la Revolución Francesa.",
        difficulty: "basico"
      },
      {
        id: 5002,
        question: "¿Quién lideró el Comité de Salvación Pública durante el Reinado del Terror (1793-1794)?",
        options: [
          "Napoleón Bonaparte",
          "Louis Antoine de Saint-Just",
          "Maximilien Robespierre",
          "Georges Danton"
        ],
        correctIndex: 2,
        explanation: "Robespierre presidió el Comité de Salvación Pública y ejecutó a miles de personas acusadas de ser enemigos de la Revolución durante el periodo conocido como el Terror.",
        difficulty: "intermedio"
      },
      {
        id: 5003,
        question: "¿En qué aspecto fundamental difirieron la Revolución Francesa (1789) y la Revolución Americana (1776)?",
        options: [
          "La americana usó la violencia y la francesa fue pacífica",
          "La francesa buscó transformar la estructura social interna, mientras la americana se centró en la soberanía política",
          "La americana fue comunista y la francesa fue liberal",
          "Ambas tuvieron las mismas consecuencias sociales"
        ],
        correctIndex: 1,
        explanation: "La Revolución Americana buscó la independencia de una metrópoli extranjera, mientras la Revolución Francesa intentó reestructurar toda la sociedad del Antiguo Régimen, incluyendo clases sociales, religión y economía.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "revoluciones-industriales",
    tip: "La Revolución Industrial comenzó en Inglaterra (1760). Causas: carbón, hierro, máquina de vapor. Memoriza: Watt (vapor), Arkwright (hiladora), Stephenson (ferrocarril).",
    theory: [
      {
        level: "basico",
        title: "Origen e inventos de la Revolución Industrial",
        lines: [
          "La Revolución Industrial comenzó en Inglaterra hacia 1760 y transformó la producción artesanal en manufactura mecanizada.",
          "Factores que explican su inicio en Inglaterra: abundancia de carbón y hierro, colonias como mercado, estabilidad política y Revolution Agrícola.",
          "James Watt perfeccionó la máquina de vapor (1769), fuente de energía que reemplazó al agua y al viento en las fábricas.",
          "Richard Arkwright inventó la hiladora hidráulica (1769), revolucionando la industria textil y concentrando a los trabajadores en fábricas.",
          "George Stephenson construyó la primera locomotora de vapor (1814) y abrió la primera línea de ferrocarril pública (1825).",
          "La mecanización del hilado (Jenny de Hargreaves, 1764) y del tejido (telar mecánico de Cartwright, 1785) transformaron la industria textil."
        ]
      },
      {
        level: "intermedio",
        title: "Consecuencias sociales: proletariado, burguesía y urbanización",
        lines: [
          "La industrialización creó dos nuevas clases sociales: la burguesía industrial (dueña de fábricas) y el proletariado (trabajadores asalariados).",
          "Las condiciones laborales eran precarias: jornadas de 14-16 horas, salarios bajos, trabajo infantil y fábricas insalubres.",
          "La urbanización acelerada generó hacinamiento, pobreza, epidemias de cólera y ausencia de servicios básicos en las ciudades industriales.",
          "Manchester, Birmingham y Leeds crecieron descontroladamente; de ciudades pequeñas pasaron a enormes centros industriales en pocas décadas.",
          "La respuesta obrera surgió con el movimiento cartista (reforma electoral) y los sindicatos (trade unions) en Inglaterra.",
          "El socialismo utópico (Saint-Simon, Fourier, Owen) propuso modelos de cooperación como alternativa a la explotación capitalista."
        ]
      },
      {
        level: "avanzado",
        title: "Segunda Revolución Industrial e impacto global",
        lines: [
          "La Segunda Revolución Industrial (1870-1914) introdujo la electricidad, el acero, los productos químicos y los motores de combustión interna.",
          "Thomas Edison (bombilla eléctrica), Benz y Daimler (automóvil) y la producción en masa de acero (proceso Bessemer) cambiaron la economía.",
          "La industria petrolera (Rockefeller) y la siderúrgica (Carnegie) concentraron enormes capitales en trusts y monopolios.",
          "La industrialización se expandió a Alemania, Francia, EE.UU., Japón (Meiji, 1868) y Rusia, reduciendo la ventaja británica inicial.",
          "En América Latina, la industrialización fue tardía y dependiente, centrada en la exportación de materias primas (café, caucho, minerales).",
          "El impacto global incluyó la desigualdad Norte-Sur, la demanda de materias primas coloniales y la transformación de las relaciones sociales."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Revolution Industrial (1760-1840)</text>',
      '  <rect x="20" y="45" width="80" height="50" fill="#e0e7ff" rx="6"/>',
      '  <text x="60" y="65" text-anchor="middle" fill="#3730a3" font-size="9" font-weight="bold" font-family="sans-serif">Máquina</text>',
      '  <text x="60" y="78" text-anchor="middle" fill="#3730a3" font-size="9" font-family="sans-serif">de Vapor</text>',
      '  <text x="60" y="89" text-anchor="middle" fill="#6366f1" font-size="8" font-family="sans-serif">Watt (1769)</text>',
      '  <rect x="110" y="45" width="80" height="50" fill="#fef3c7" rx="6"/>',
      '  <text x="150" y="65" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold" font-family="sans-serif">Hiladora</text>',
      '  <text x="150" y="78" text-anchor="middle" fill="#92400e" font-size="9" font-family="sans-serif">Mecánica</text>',
      '  <text x="150" y="89" text-anchor="middle" fill="#d97706" font-size="8" font-family="sans-serif">Arkwright (1769)</text>',
      '  <rect x="200" y="45" width="80" height="50" fill="#dcfce7" rx="6"/>',
      '  <text x="240" y="65" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold" font-family="sans-serif">Ferrocarril</text>',
      '  <text x="240" y="78" text-anchor="middle" fill="#166534" font-size="9" font-family="sans-serif">a Vapor</text>',
      '  <text x="240" y="89" text-anchor="middle" fill="#22c55e" font-size="8" font-family="sans-serif">Stephenson (1825)</text>',
      '  <line x1="60" y1="105" x2="60" y2="130" stroke="#6366f1" stroke-width="1.5"/>',
      '  <line x1="150" y1="105" x2="150" y2="130" stroke="#d97706" stroke-width="1.5"/>',
      '  <line x1="240" y1="105" x2="240" y2="130" stroke="#22c55e" stroke-width="1.5"/>',
      '  <rect x="30" y="130" width="240" height="35" fill="#f1f5f9" rx="4" stroke="#cbd5e1"/>',
      '  <text x="150" y="148" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">INGLATERRA: Carbón + Hierro + Capital + Colonias</text>',
      '  <text x="150" y="160" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">→ Fábricas → Ciudad → Proletariado → Burguesía</text>',
      '  <text x="150" y="190" text-anchor="middle" fill="#64748b" font-size="8" font-family="sans-serif">Origen: Inglaterra (1760) → Expansión global</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5010,
        question: "¿Qué invento de James Watt fue fundamental para el desarrollo de la Revolución Industrial?",
        options: [
          "El telar mecánico",
          "La locomotora de vapor",
          "La máquina de vapor perfeccionada",
          "El telégrafo eléctrico"
        ],
        correctIndex: 2,
        explanation: "James Watt perfeccionó la máquina de vapor en 1769, proporcionando una fuente de energía mecánica que revolucionó la producción en fábricas y minas.",
        difficulty: "basico"
      },
      {
        id: 5011,
        question: "¿Cuál fue una consecuencia social directa de la primera Revolución Industrial en las ciudades británicas?",
        options: [
          "La reducción de la jornada laboral a 8 horas",
          "La urbanización acelerada con hacinamiento, insalubridad y pobreza",
          "La creación del Estado de bienestar",
          "La abolición del trabajo infantil"
        ],
        correctIndex: 1,
        explanation: "La migración masiva del campo a la ciudad generó urbanización descontrolada con hacinamiento, epidemias, contaminación y condiciones laborales de explotación extrema.",
        difficulty: "intermedio"
      },
      {
        id: 5012,
        question: "¿Qué elementos caracterizaron a la Segunda Revolución Industrial (1870-1914) y la diferenciaron de la primera?",
        options: [
          "El uso del carbón y la máquina de vapor como pilares",
          "La introducción de la electricidad, el acero, los motores de combustión y los monopolios industriales",
          "El predominio del sector textil como industria principal",
          "La limitación del proceso a Inglaterra únicamente"
        ],
        correctIndex: 1,
        explanation: "La Segunda Revolución Industrial incorporó la electricidad, el acero, los motores de combustión interna y la producción en masa, expandiéndose a Alemania, EE.UU. y Japón.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "imperialismo-y-colonialismo",
    tip: "El imperialismo (1870-1914) dividió África y Asia. Causas: materias primas, mercados, rivalidades. Memoriza: Conferencia de Berlín (1884), 'carga del hombre blanco'.",
    theory: [
      {
        level: "basico",
        title: "Qué fue el imperialismo y regiones afectadas",
        lines: [
          "El imperialismo fue el dominio político, económico y cultural de las potencias europeas sobre pueblos de África, Asia y Oceanía.",
          "Se intensificó entre 1870 y 1914, cuando las potencias europeas competían por territorios en un proceso llamado 'reparto del mundo'.",
          "Las principales potencias imperialistas fueron: Gran Bretaña, Francia, Alemania, Bélgica, Italia, Países Bajos y Portugal.",
          "En África, el continente fue casi totalmente colonizado excepto Etiopía (que derrotó a Italia en Adwa, 1896) y Liberia.",
          "En Asia, Gran Bretaña dominaba la India, Francia controlaba Indochina, y Holanda mantenido las Indias Orientales (actual Indonesia).",
          "El imperialismo también se extendió a Oceanía (Australia, Nueva Zelanda, islas del Pacífico) y a América Latina (influencia económica)."
        ]
      },
      {
        level: "intermedio",
        title: "Causas económicas, políticas e ideológicas",
        lines: [
          "Causas económicas: búsqueda de materias primas (caucho, petróleo, minerales), mercados para productos manufacturados y destinos para inversiones.",
          "Causas políticas: rivalidad entre potencias (Britania vs Francia en África del Norte), prestigio nacional y equilibrio de poder europeo.",
          "Causas ideológicas: el darwinismo social justificaba la 'superioridad' de la raza blanca europea sobre otros pueblos.",
          "Rudyard Kipling expresó la ideología imperialista con su poema 'La carga del hombre blanco' (1899), que legitimaba la colonización.",
          "La Conferencia de Berlín (1884-1885) estableció las reglas para el reparto de África sin consultar a los pueblos africanos.",
          "El avance tecnológico (fusiles, vapor, medicinas tropicales) hizo posible la conquista militar de territorios lejanos."
        ]
      },
      {
        level: "avanzado",
        title: "Resistencia anticolonial, legado e impacto en Perú",
        lines: [
          "La resistencia anticolonial incluyó la Rebelión de los Mahdistas en Sudán (1881-1898), la Rebelión Taiping en China (1850-1864) y la Revuelta India de 1857.",
          "En África, movimientos como los zulúes, los ashanti y la resistencia etíope demostraron que la colonización enfrentó fuerte oposición.",
          "El legado del colonialismo incluye: fronteras artificiales, explotación económica, pérdida cultural y conflictos étnicos que persisten hasta hoy.",
          "En Perú, el imperialismo se manifestó como influencia económica británica y norteamericana, especialmente en la explotación minera y la Guerra del Pacífico (1879-1884).",
          "La dependencia económica de Perú respecto a materias primas (guano, salitre, caucho) fue agravada por el imperialismo comercial.",
          "El proceso de descolonización comenzó tras la Primera Guerra Mundial y culminó en las décadas de 1950-1960 con la independencia de numerosos países africanos y asiáticos."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Imperialismo y Colonialismo (1870-1914)</text>',
      '  <ellipse cx="80" cy="105" rx="55" ry="60" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>',
      '  <text x="80" y="95" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold" font-family="sans-serif">ÁFRICA</text>',
      '  <text x="80" y="108" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">90% colonizada</text>',
      '  <text x="80" y="120" text-anchor="middle" fill="#b45309" font-size="7" font-family="sans-serif">Berlín 1884</text>',
      '  <ellipse cx="220" cy="105" rx="55" ry="60" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/>',
      '  <text x="220" y="95" text-anchor="middle" fill="#1e40af" font-size="9" font-weight="bold" font-family="sans-serif">ASIA</text>',
      '  <text x="220" y="108" text-anchor="middle" fill="#1e40af" font-size="8" font-family="sans-serif">India, Indochina</text>',
      '  <text x="220" y="120" text-anchor="middle" fill="#2563eb" font-size="7" font-family="sans-serif">Esferas de influencia</text>',
      '  <line x1="135" y1="105" x2="165" y2="105" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2"/>',
      '  <rect x="25" y="170" width="60" height="18" fill="#fecaca" rx="3"/>',
      '  <text x="55" y="182" text-anchor="middle" fill="#991b1b" font-size="7" font-weight="bold" font-family="sans-serif">GB: India</text>',
      '  <rect x="95" y="170" width="60" height="18" fill="#bfdbfe" rx="3"/>',
      '  <text x="125" y="182" text-anchor="middle" fill="#1e40af" font-size="7" font-weight="bold" font-family="sans-serif">Fr: Indochina</text>',
      '  <rect x="165" y="170" width="60" height="18" fill="#bbf7d0" rx="3"/>',
      '  <text x="195" y="182" text-anchor="middle" fill="#166534" font-size="7" font-weight="bold" font-family="sans-serif">Hol: Indonesia</text>',
      '  <rect x="235" y="170" width="50" height="18" fill="#e9d5ff" rx="3"/>',
      '  <text x="260" y="182" text-anchor="middle" fill="#6b21a8" font-size="7" font-weight="bold" font-family="sans-serif">Bel: Congo</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5020,
        question: "¿En qué conferencia se establecieron las reglas para el reparto de África entre las potencias europeas?",
        options: [
          "Conferencia de Viena (1815)",
          "Conferencia de Berlín (1884-1885)",
          "Conferencia de París (1919)",
          "Conferencia de Yalta (1945)"
        ],
        correctIndex: 1,
        explanation: "La Conferencia de Berlín (1884-1885) estableció las normas para la colonización de África, fijando el principio de ocupación efectiva sin consultar a los pueblos africanos.",
        difficulty: "basico"
      },
      {
        id: 5021,
        question: "¿Cuál de las siguientes fue una causa ideológica del imperialismo europeo del siglo XIX?",
        options: [
          "El marxismo revolucionario",
          "El darwinismo social y la idea de 'carga del hombre blanco'",
          "El movimiento abolicionista europeo",
          "La Ilustración y los derechos humanos"
        ],
        correctIndex: 1,
        explanation: "El darwinismo social aplicó teorías biológicas a la sociedad para justificar la 'superioridad' de la raza blanca europea, legitimando la colonización como misión civilizadora.",
        difficulty: "intermedio"
      },
      {
        id: 5022,
        question: "¿Cómo se manifestó el imperialismo en Perú durante el siglo XIX?",
        options: [
          "Perú colonizó territorios africanos",
          "Perú se benefició económicamente del reparto colonial",
          "La influencia económica extranjera en la explotación minera y la Guerra del Pacífico agravaron la dependencia económica",
          "Perú se mantuvo completamente ajeno al imperialismo"
        ],
        correctIndex: 2,
        explanation: "En Perú, el imperialismo se reflejó en la dependencia de materias primas (guano, salitre), la inversión extranjera en minería y la pérdida territorial en la Guerra del Pacífico (1879-1884).",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "primera-guerra-mundial",
    tip: "La Primera Guerra Mundial (1914-1918) involucró a todas las grandes potencias. Causas: nacionalismo, imperialismos, alianzas. Memoriza: Tratado de Versalles (1919), Liga de Naciones.",
    theory: [
      {
        level: "basico",
        title: "Causas, bandos y desarrollo de la Gran Guerra",
        lines: [
          "La Primera Guerra Mundial (1914-1918) enfrentó a las potencias europeas en el conflicto bélico más grande hasta entonces.",
          "Causas: nacionalismo exacerbado, imperialismo competitivo, carrera armamentística y sistema de alianzas militares rígidas.",
          "El detonante fue el asesinato del archiduque Francisco Fernando de Austria-Hungría en Sarajevo (28 junio 1914).",
          "Bandos: Triple Entente (Francia, Gran Bretaña, Rusia) vs. Potencias Centrales (Alemania, Austria-Hungría, Imperio Otomano).",
          "Italia inicialmente era de las Potencias Centrales pero cambió de bando en 1915 (Pacto de Londres) y se unió a la Entente.",
          "EE.UU. entró en 1917 tras los ataques submarinos alemanes y el hundimiento del Lusitania (1915), decidiendo el resultado a favor de la Entente."
        ]
      },
      {
        level: "intermedio",
        title: "Batallas decisivas y nuevas tecnologías bélicas",
        lines: [
          "La Batalla del Marne (1914) detuvo la ofensiva alemana hacia París e inició la guerra de trincheras en el frente occidental.",
          "La Batalla del Somme (1916) y la de Verdún (1916) fueron las más sangrientas, con más de un millón de bajas combinadas.",
          "Se introdujeron nuevas armas mortales: ametralladoras, gas mostaza, tanques de guerra, aviones de combate y submarinos U-Boot.",
          "La guerra de trincheras se extendió por 700 km, desde el Canal de la Mancha hasta la frontera suiza, sin avances significativos.",
          "En el frente oriental, Rusia sufrió grandes derrotas, lo que contribuyó a la Revolución Rusa de 1917 y la salida de Rusia de la guerra.",
          "El armisticio se firmó el 11 de noviembre de 1918, con un balance de 10 millones de muertos y 20 millones de heridos."
        ]
      },
      {
        level: "avanzado",
        title: "Tratado de Versalles y creación de la Sociedad de Naciones",
        lines: [
          "El Tratado de Versalles (1919) impuso a Alemania: pérdidas territoriales, desarme, cláusula de culpabilidad y enormes reparaciones de guerra.",
          "Alemania perdió Alsacia y Lorena (a Francia), colonias en África y Oceanía, y se vio reducida militar y económicamente.",
          "Woodrow Wilson impulsó la creación de la Sociedad de Naciones (1920), primera organización internacional de mantenimiento de la paz.",
          "Irónicamente, EE.UU. no se unió a la Sociedad de Naciones por el rechazo del Senado, debilitando significativamente la organización.",
          "El Tratado de Versalles reconfiguró el mapa europeo: nacieron Polonia, Checoslovaquia, Yugoslavia y los estados bálticos.",
          "Las duras condiciones del tratado generó resentimiento en Alemania, facilitando el ascenso del nazismo y la Segunda Guerra Mundial."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Primera Guerra Mundial (1914-1918)</text>',
      '  <rect x="15" y="40" width="120" height="55" fill="#dcfce7" rx="6"/>',
      '  <text x="75" y="55" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold" font-family="sans-serif">TRIPLE ENTENTE</text>',
      '  <text x="75" y="68" text-anchor="middle" fill="#166534" font-size="8" font-family="sans-serif">Francia - GB - Rusia</text>',
      '  <text x="75" y="80" text-anchor="middle" fill="#22c55e" font-size="8" font-family="sans-serif">+ Italia (1915) + EE.UU. (1917)</text>',
      '  <rect x="165" y="40" width="120" height="55" fill="#fecaca" rx="6"/>',
      '  <text x="225" y="55" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">POTENCIAS CENTRALES</text>',
      '  <text x="225" y="68" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">Alemania - Austria-Hungría</text>',
      '  <text x="225" y="80" text-anchor="middle" fill="#ef4444" font-size="8" font-family="sans-serif">+ Imperio Otomano</text>',
      '  <line x1="135" y1="67" x2="165" y2="67" stroke="#dc2626" stroke-width="2"/>',
      '  <text x="150" y="63" text-anchor="middle" fill="#dc2626" font-size="8" font-weight="bold" font-family="sans-serif">VS</text>',
      '  <rect x="25" y="110" width="250" height="42" fill="#f1f5f9" rx="4" stroke="#cbd5e1"/>',
      '  <text x="150" y="125" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Batallas clave: Marne (1914) - Verdún (1916)</text>',
      '  <text x="150" y="138" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Somme (1916) - Nuevas armas: ametralladoras, gas, tanques</text>',
      '  <rect x="25" y="160" width="250" height="28" fill="#e0e7ff" rx="4" stroke="#818cf8"/>',
      '  <text x="150" y="178" text-anchor="middle" fill="#3730a3" font-size="9" font-weight="bold" font-family="sans-serif">Tratado de Versalles (1919) → Sociedad de Naciones</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5030,
        question: "¿Cuál fue el detonante directo de la Primera Guerra Mundial?",
        options: [
          "La invasión de Polonia por Alemania",
          "El asesinato del archiduque Francisco Fernando en Sarajevo (1914)",
          "La Revolución Rusa de 1917",
          "La caída del muro de Berlín"
        ],
        correctIndex: 1,
        explanation: "El asesinato del archiduque Francisco Fernando de Austria-Hungría el 28 de junio de 1914 en Sarajevo desencadenó la cadena de declaraciones de guerra que inició el conflicto.",
        difficulty: "basico"
      },
      {
        id: 5031,
        question: "¿Qué nuevas tecnologías bélicas se introdujeron durante la Primera Guerra Mundial y transformaron la guerra?",
        options: [
          "Espadas, arcos y catapultas",
          "Ametralladoras, gas mostaza, tanques, aviones y submarinos",
          "Armas nucleares y misiles balísticos",
          "Drones y guerra cibernética"
        ],
        correctIndex: 1,
        explanation: "La Primera Guerra Mundial introdujo armas como ametralladoras, gases tóxicos, tanques de guerra, aviones de combate y submarinos U-Boot, que incrementaron enormemente la devastación.",
        difficulty: "intermedio"
      },
      {
        id: 5032,
        question: "¿Por qué la Sociedad de Naciones, creada tras la Primera Guerra Mundial, resultó débil e ineficaz?",
        options: [
          "Porque solo contaba con países asiáticos",
          "Porque todas las potencias europeas se negaron a participar",
          "Porque EE.UU. no se unió al organismo, debilitando su capacidad de acción y legitimidad",
          "Porque fue reemplazada por la ONU antes de iniciar sus funciones"
        ],
        correctIndex: 2,
        explanation: "EE.UU. no se integró a la Sociedad de Naciones por el rechazo del Senado estadounidense, privando a la organización del respaldo de la potencia emergente más poderosa del momento.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "revolucion-rusa",
    tip: "La Revolución Rusa (1917) fue comunista. Febrero: cae el Zar. Octubre: Lenin toma el poder. Memoriza: Lenin (1917-1924), Stalin (1924-1953), URSS (1922-1991).",
    theory: [
      {
        level: "basico",
        title: "Causas y las dos revoluciones de 1917",
        lines: [
          "El Imperio Ruso era una monarquía absoluta con profundas desigualdades: una nobleza terrateniente y una masa campesina empobrecida.",
          "Nicolás II gobernaba de forma autocrática, sin parlamento efectivo, y entró en la Primera Guerra Mundial con graves derrotas.",
          "En febrero de 1917, huelgas y manifestaciones en Petrogrado obligaron a Nicolás II a abdicar (Revolución de Febrero).",
          "Se formó un Gobierno Provisional liderado primero por el príncipe Lvov y luego por Alexander Kérenski, que continuó en la guerra.",
          "En octubre de 1917, Lenin y los bolcheviques tomaron el Palacio de Invierno mediante un golpe armado (Revolución de Octubre).",
          "Lenin implementó los 'Dekretos de Paz y de Tierra', prometiendo retirada de la guerra y distribución de tierras entre los campesinos."
        ]
      },
      {
        level: "intermedio",
        title: "Lenin, guerra civil y ascenso de Stalin",
        lines: [
          "Lenin firmó el Tratado de Brest-Litovsk (1918) para sacar a Rusia de la Primera Guerra Mundial, cediendo enormes territorios.",
          "La guerra civil (1918-1921) enfrentó al Ejército Rojo (bolcheviques) contra el Ejército Blanco (monárquicos, liberales, extranjeros).",
          "El comunismo de guerra (1918-1921) nacionalizó industrias y confiscó cosechas, generando hambruna y crisis económica.",
          "Lenin implementó la NEP (Nueva Política Económica, 1921), permitiendo pequeñas empresas privadas para recuperar la economía.",
          "Tras la muerte de Lenin (1924), Stalin se consolidó en el poder mediante maniobras políticas, superando a Trotski y Bujarin.",
          "Stalin instauró el terror estatal (Grandes Purgas, 1936-1938), eliminando rivales políticos y creando el sistema de gulags (campos de trabajo forzado)."
        ]
      },
      {
        level: "avanzado",
        title: "La URSS, planificación económica e impacto mundial",
        lines: [
          "La URSS (Unión de Repúblicas Socialistas Soviéticas) se fundó en 1922 y existió hasta su disolución en 1991, con 15 repúblicas.",
          "Stalin implementó planes quinquenales (desde 1928) para la industrialización forzada y la colectivización agraria obligatoria.",
          "La colectivización forzada provocó la hambruna en Ucrania (Holodomor, 1932-1933), con millones de muertos.",
          "El modelo soviético influyó en movimientos comunistas mundiales: China (1949), Cuba (1959), Vietnam y numerosos países africanos.",
          "La URSS desafió la hegemonía estadounidense, iniciando la Guerra Fría (1947-1991), un enfrentamiento ideológico, político y militar sin guerra directa.",
          "La URSS se disolvió en 1991 tras la perestroika de Gorbachov, marcando el fin del bloque socialista y el inicio de la unipolaridad estadounidense."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Revolución Rusa y URSS (1917-1991)</text>',
      '  <rect x="15" y="40" width="85" height="55" fill="#fecaca" rx="6"/>',
      '  <text x="57" y="55" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">FEBRERO</text>',
      '  <text x="57" y="68" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">1917</text>',
      '  <text x="57" y="80" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Cae el Zar</text>',
      '  <text x="57" y="89" text-anchor="middle" fill="#ef4444" font-size="7" font-family="sans-serif">Gov. Provisional</text>',
      '  <rect x="110" y="40" width="85" height="55" fill="#bbf7d0" rx="6"/>',
      '  <text x="152" y="55" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold" font-family="sans-serif">OCTUBRE</text>',
      '  <text x="152" y="68" text-anchor="middle" fill="#166534" font-size="8" font-family="sans-serif">1917</text>',
      '  <text x="152" y="80" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">Lenin toma</text>',
      '  <text x="152" y="89" text-anchor="middle" fill="#22c55e" font-size="7" font-family="sans-serif">el poder</text>',
      '  <rect x="205" y="40" width="85" height="55" fill="#e0e7ff" rx="6"/>',
      '  <text x="247" y="55" text-anchor="middle" fill="#3730a3" font-size="9" font-weight="bold" font-family="sans-serif">URSS</text>',
      '  <text x="247" y="68" text-anchor="middle" fill="#3730a3" font-size="8" font-family="sans-serif">1922-1991</text>',
      '  <text x="247" y="80" text-anchor="middle" fill="#3730a3" font-size="7" font-family="sans-serif">Stalin → Stalinismo</text>',
      '  <text x="247" y="89" text-anchor="middle" fill="#6366f1" font-size="7" font-family="sans-serif">Planes quinquenales</text>',
      '  <line x1="100" y1="67" x2="110" y2="67" stroke="#64748b" stroke-width="1.5"/>',
      '  <polygon points="107,63 107,71 113,67" fill="#64748b"/>',
      '  <line x1="195" y1="67" x2="205" y2="67" stroke="#64748b" stroke-width="1.5"/>',
      '  <polygon points="192,63 192,71 198,67" fill="#64748b"/>',
      '  <rect x="25" y="110" width="250" height="75" fill="#f1f5f9" rx="4" stroke="#cbd5e1"/>',
      '  <text x="150" y="125" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Línea del tiempo</text>',
      '  <text x="150" y="140" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">1917 Lenin → 1922 URSS → 1924 Stalin → 1991 Disolución</text>',
      '  <text x="150" y="155" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Guerra civil (1918-21) → NEP → Planes quinquenales</text>',
      '  <text x="150" y="170" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Modelo soviético → Guerra Fría → Caída (1991)</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5040,
        question: "¿Qué gobierno asumió el poder en Rusia tras la Revolución de Febrero de 1917?",
        options: [
          "El gobierno bolchevique de Lenin",
          "Un gobierno republicano liderado por el Zar Nicolás II",
          "Un Gobierno Provisional que continuó participando en la Primera Guerra Mundial",
          "Un gobierno militar liderado por Stalin"
        ],
        correctIndex: 2,
        explanation: "La Revolución de Febrero derrocó al Zar Nicolás II e instauró un Gobierno Provisional que, bajo el liderazgo de Kérenski, decidió mantener la participación rusa en la Primera Guerra Mundial.",
        difficulty: "basico"
      },
      {
        id: 5041,
        question: "¿En qué consistió la NEP (Nueva Política Económica) implementada por Lenin en 1921?",
        options: [
          "La colectivización total de la agricultura y la industria",
          "La apertura al comercio privado a pequeña escala para recuperar la economía tras el comunismo de guerra",
          "La nacionalización de todas las tierras sin excepción",
          "El establecimiento de un sistema capitalista pleno"
        ],
        correctIndex: 1,
        explanation: "La NEP permitió la pequeña empresa privada y el comercio libre a pequeña escala, como medida pragmática para superar la crisis económica del comunismo de guerra (1918-1921).",
        difficulty: "intermedio"
      },
      {
        id: 5042,
        question: "¿Qué impacto tuvo el modelo soviético en la política mundial del siglo XX?",
        options: [
          "Solo influyó en los países europeos",
          "Influyó en movimientos comunistas globales (China, Cuba, Vietnam) y desencadenó la Guerra Fría contra EE.UU.",
          "No tuvo ninguna influencia fuera de la URSS",
          "Promovió únicamente la economía de mercado"
        ],
        correctIndex: 1,
        explanation: "El modelo soviético inspiró revoluciones comunistas en Asia, África y América Latina, y su rivalidad con EE.UU. definió la dinámica de la Guerra Fría (1947-1991).",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "segunda-guerra-mundial",
    tip: "La Segunda Guerra Mundial (1939-1945) fue la más grande. Bandos: Aliados vs Eje. Memoriza: Hitler (Alemania), Mussolini (Italia), Hiroshima (6 ago 1945).",
    theory: [
      {
        level: "basico",
        title: "Causas, bandos y principales batallas",
        lines: [
          "La Segunda Guerra Mundial (1939-1945) fue el conflicto más devastador de la historia, con más de 60 millones de muertos.",
          "Causas: ascenso de los totalitarismos (fascismo y nazismo), fracaso de la política de apaciguamiento, Tratado de Versalles y Gran Depresión.",
          "Bandos: Aliados (EE.UU., URSS, Gran Bretaña, Francia, China) vs. Eje (Alemania, Italia, Japón).",
          "Alemania invadió Polonia el 1 de septiembre de 1939, dando inicio a la guerra en Europa. Francia cayó en junio de 1940.",
          "La Batalla de Stalingrado (1942-1943) fue el punto de inflexión en el frente oriental, con la derrota alemana decisiva.",
          "El Día D (6 junio 1944) fue el desembarco de Normandía, la mayor operación anfibia de la historia, que abrió el frente occidental."
        ]
      },
      {
        level: "intermedio",
        title: "Holocausto, bombas atómicas y juicios de Núremberg",
        lines: [
          "El Holocausto fue el genocidio sistemático de 6 millones de judíos, además de gitanos, homosexuales, discapacitados y opositores políticos.",
          "Los campos de exterminio (Auschwitz, Treblinka, Dachau) implementaron la 'Solución Final' ordenada por Hitler en la Conferencia de Wannsee (1942).",
          "En el Pacífico, EE.UU. lanzó bombas atómicas sobre Hiroshima (6 agosto 1945) y Nagasaki (9 agosto 1945), causando más de 200.000 muertes.",
          "Japón se rindió el 2 de septiembre de 1945, poniendo fin a la Segunda Guerra Mundial.",
          "Los Juicios de Núremberg (1945-1946) juzgaron a los principales líderes nazis por crímenes de guerra, crímenes contra la humanidad y genocidio.",
          "Estos juicios sentaron las bases del derecho penal internacional y establecieron que 'obedecer órdenes' no exime de responsabilidad."
        ]
      },
      {
        level: "avanzado",
        title: "ONU, Derechos Humanos, reconstrucción y bipolaridad",
        lines: [
          "La ONU (Organización de las Naciones Unidas) fue fundada en 1945 para mantener la paz mundial, con sede en Nueva York.",
          "La Declaración Universal de los Derechos Humanos (1948, París) fue impulsada por Eleanor Roosevelt tras los horrores de la guerra.",
          "El Plan Marshall (1948) de EE.UU. destinó 13.000 millones de dólares para la reconstrucción de Europa occidental.",
          "Alemania fue dividida en dos: República Federal Alemana (occidental, capitalista) y República Democrática Alemana (oriental, socialista).",
          "La guerra terminó con el inicio de la bipolaridad mundial: EE.UU. (capitalismo, OTAN) vs. URSS (comunismo, Pacto de Varsovia).",
          "Japón fue ocupado por EE.UU., se democratizó bajo una nueva Constitución (1947) y se convirtió en potencia económica en la posguerra."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Segunda Guerra Mundial (1939-1945)</text>',
      '  <rect x="15" y="40" width="120" height="55" fill="#dcfce7" rx="6"/>',
      '  <text x="75" y="55" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold" font-family="sans-serif">ALIADOS</text>',
      '  <text x="75" y="68" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">EE.UU. - URSS - GB</text>',
      '  <text x="75" y="80" text-anchor="middle" fill="#22c55e" font-size="7" font-family="sans-serif">Francia - China + otros</text>',
      '  <text x="75" y="89" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">Victoria: mayo 1945 / sept 1945</text>',
      '  <rect x="165" y="40" width="120" height="55" fill="#fecaca" rx="6"/>',
      '  <text x="225" y="55" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">EJE</text>',
      '  <text x="225" y="68" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Hitler (Alemania)</text>',
      '  <text x="225" y="80" text-anchor="middle" fill="#ef4444" font-size="7" font-family="sans-serif">Mussolini (Italia)</text>',
      '  <text x="225" y="89" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Tojo (Japón)</text>',
      '  <line x1="135" y1="67" x2="165" y2="67" stroke="#dc2626" stroke-width="2"/>',
      '  <text x="150" y="63" text-anchor="middle" fill="#dc2626" font-size="8" font-weight="bold" font-family="sans-serif">VS</text>',
      '  <rect x="25" y="105" width="110" height="40" fill="#fef3c7" rx="4" stroke="#d97706"/>',
      '  <text x="80" y="120" text-anchor="middle" fill="#92400e" font-size="8" font-weight="bold" font-family="sans-serif">Holocausto</text>',
      '  <text x="80" y="132" text-anchor="middle" fill="#b45309" font-size="7" font-family="sans-serif">6M judíos asesinados</text>',
      '  <rect x="145" y="105" width="110" height="40" fill="#e0e7ff" rx="4" stroke="#6366f1"/>',
      '  <text x="200" y="120" text-anchor="middle" fill="#3730a3" font-size="8" font-weight="bold" font-family="sans-serif">Bomba Atómica</text>',
      '  <text x="200" y="132" text-anchor="middle" fill="#6366f1" font-size="7" font-family="sans-serif">Hiroshima 6/ago/1945</text>',
      '  <rect x="25" y="155" width="250" height="30" fill="#f1f5f9" rx="4" stroke="#cbd5e1"/>',
      '  <text x="150" y="174" text-anchor="middle" fill="#1e293b" font-size="8" font-weight="bold" font-family="sans-serif">ONU (1945) → DDHH (1948) → Bipolaridad → Guerra Fría</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5050,
        question: "¿Cuál fue el acontecimiento que inició la Segunda Guerra Mundial en Europa?",
        options: [
          "La invasión de Polonia por Alemania el 1 de septiembre de 1939",
          "El ataque a Pearl Harbor el 7 de diciembre de 1941",
          "La caída de Francia en junio de 1940",
          "El desembarco de Normandía en junio de 1944"
        ],
        correctIndex: 0,
        explanation: "Alemania invadió Polonia el 1 de septiembre de 1939, lo que provocó que Gran Bretaña y Francia le declararan la guerra, iniciando el conflicto en Europa.",
        difficulty: "basico"
      },
      {
        id: 5051,
        question: "¿Qué significado histórico tuvieron los Juicios de Núremberg (1945-1946)?",
        options: [
          "Fueron acuerdos de paz entre Aliados y el Eje",
          "Juzgaron a líderes nazis por crímenes de guerra y sentaron las bases del derecho penal internacional",
          "Establecieron la creación de la OTAN",
          "Redactaron la Constitución de la República Federal Alemana"
        ],
        correctIndex: 1,
        explanation: "Los Juicios de Núremberg establecieron los principios del derecho penal internacional: los crímenes de guerra, contra la humanidad y el genocidio son punibles, y la obediencia a órdenes no exime de responsabilidad.",
        difficulty: "intermedio"
      },
      {
        id: 5052,
        question: "¿Cómo contribuyó el Plan Marshall a la reconstrucción de Europa tras la Segunda Guerra Mundial y qué implicación geopolítica tuvo?",
        options: [
          "Fue un préstamo de la URSS a Europa del Este",
          "EE.UU. destinó 13.000 millones de dólares para reconstruir Europa occidental, fortaleciendo el capitalismo y conteniendo la influencia soviética",
          "Fue un acuerdo militar entre Gran Bretaña y Francia",
          "Fue un plan de la ONU para la reconstrucción de Japón"
        ],
        correctIndex: 1,
        explanation: "El Plan Marshall (1948) de EE.UU. ayudó a reconstruir Europa occidental, fortaleciendo la alianza capitalista y evitando que los países devastados cayeran bajo la influencia comunista soviética.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "guerra-fria-y-globalizacion",
    tip: "La Guerra Fría (1947-1991) fue EE.UU. vs URSS. Memoriza: Plan Marshall, OTAN, Pacto de Varsovia, caída del muro de Berlín (1989), disolución URSS (1991).",
    theory: [
      {
        level: "basico",
        title: "Qué fue la Guerra Fría, bandos y eventos clave",
        lines: [
          "La Guerra Fría (1947-1991) fue el enfrentamiento político, ideológico y militar entre EE.UU. (capitalismo) y URSS (comunismo) sin guerra directa.",
          "Bandos: OTAN (1949, alianza occidental liderada por EE.UU.) vs. Pacto de Varsovia (1955, alianza socialista liderada por URSS).",
          "La Doctrina Truman (1947) estableció la contención del comunismo como política exterior de EE.UU.",
          "El Plan Marshall (1948) ayudó a reconstruir Europa occidental e impidió la expansión comunista en la región.",
          "El Bloqueo de Berlín (1948-1949) fue la primera gran crisis: la URSS bloqueó el acceso terrestre a Berlín Occidental.",
          "Los eventos clave incluyen: crisis de los misiles de Cuba (1962), caída del Muro de Berlín (1989) y disolución de la URSS (1991)."
        ]
      },
      {
        level: "intermedio",
        title: "Crisis de los misiles, carrera espacial y descolonización",
        lines: [
          "La Crisis de los misiles de Cuba (1962) fue el momento más peligroso: la URSS instaló misiles nucleares en Cuba, a 150 km de EE.UU.",
          "Kennedy y Jrushchov negociaron la retirada de los misiles, evitando una guerra nuclear que habría devastado al mundo.",
          "La carrera espacial simbolizó la rivalidad: Sputnik (URSS, 1957), Gagarin en el espacio (URSS, 1961), llegada a la Luna (EE.UU., 1969).",
          "La descolonización (1945-1975) liberó decenas de países de África y Asia, pero muchos quedaron como zonas de influencia de EE.UU. o URSS.",
          "Guerras proxy: Corea (1950-1953), Vietnam (1955-1975), Afganistán (1979-1989), donde las superpotencias apoyaron bandos enfrentados.",
          "El Movimiento de los No Alineados (1961, Belgrado) intentó mantener la neutralidad entre las dos superpotencias, liderado por India, Egipto y Yugoslavia."
        ]
      },
      {
        level: "avanzado",
        title: "Globalización, organismos internacionales y multipolaridad",
        lines: [
          "La globalización se aceleró tras la caída de la URSS (1991): expansión del libre comercio, interconexión tecnológica y cultural a escala mundial.",
          "Organismos internacionales clave: ONU (paz), OEA (Américas), UE (integración europea), OMC (comercio), FMI y Banco Mundial (economía).",
          "La UE pasó de la CEE (1957) a la Unión Europea (1993), integrando economías, políticas y monedas de 27 países.",
          "El mundo multipolar actual incluye potencias emergentes: China, India, Brasil, Rusia y la UE, desafiando la unipolaridad estadounidense.",
          "Desafíos contemporáneos: terrorismo internacional (11-S, 2001), cambio climático, migraciones globales, desigualdad Norte-Sur y crisis alimentaria.",
          "En América Latina, la globalización trajo oportunidades de integración comercial pero también dependencia económica y vulnerabilidad financiera."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Guerra Fría y Globalización (1947-1991)</text>',
      '  <rect x="15" y="40" width="120" height="60" fill="#dcfce7" rx="6"/>',
      '  <text x="75" y="55" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold" font-family="sans-serif">EE.UU. (Occidente)</text>',
      '  <text x="75" y="68" text-anchor="middle" fill="#166534" font-size="8" font-family="sans-serif">Capitalismo liberal</text>',
      '  <text x="75" y="80" text-anchor="middle" fill="#22c55e" font-size="7" font-family="sans-serif">OTAN (1949)</text>',
      '  <text x="75" y="90" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">Plan Marshall</text>',
      '  <rect x="165" y="40" width="120" height="60" fill="#fecaca" rx="6"/>',
      '  <text x="225" y="55" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">URSS (Oriente)</text>',
      '  <text x="225" y="68" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">Comunismo soviético</text>',
      '  <text x="225" y="80" text-anchor="middle" fill="#ef4444" font-size="7" font-family="sans-serif">Pacto de Varsovia (1955)</text>',
      '  <text x="225" y="90" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Planes quinquenales</text>',
      '  <line x1="135" y1="70" x2="165" y2="70" stroke="#dc2626" stroke-width="2"/>',
      '  <text x="150" y="66" text-anchor="middle" fill="#dc2626" font-size="8" font-weight="bold" font-family="sans-serif">VS</text>',
      '  <rect x="25" y="115" width="250" height="45" fill="#f1f5f9" rx="4" stroke="#cbd5e1"/>',
      '  <text x="150" y="130" text-anchor="middle" fill="#1e293b" font-size="8" font-weight="bold" font-family="sans-serif">Eventos clave</text>',
      '  <text x="150" y="142" text-anchor="middle" fill="#475569" font-size="7" font-family="sans-serif">Cuba 1962 → Espacio 1969 → Berlín 1989 → URSS 1991</text>',
      '  <rect x="25" y="165" width="250" height="25" fill="#e0e7ff" rx="4" stroke="#818cf8"/>',
      '  <text x="150" y="181" text-anchor="middle" fill="#3730a3" font-size="8" font-weight="bold" font-family="sans-serif">Post-1991: Globalización → ONU → OEA → UE → Multipolaridad</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5060,
        question: "¿Qué organizaciones militares enfrentadas simbolizaron la división del mundo durante la Guerra Fría?",
        options: [
          "La ONU y la OEA",
          "La OTAN y el Pacto de Varsovia",
          "La OMC y el FMI",
          "La Unión Europea y la Liga Árabe"
        ],
        correctIndex: 1,
        explanation: "La OTAN (1949, liderada por EE.UU.) y el Pacto de Varsovia (1955, liderado por URSS) representaron la alianza militar de los dos bloques enfrentados durante la Guerra Fría.",
        difficulty: "basico"
      },
      {
        id: 5061,
        question: "¿Qué conflictos bélicos fueron considerados 'guerras proxy' durante la Guerra Fría?",
        options: [
          "La Primera y Segunda Guerra Mundial",
          "Las guerras de Corea, Vietnam y Afganistán, donde las superpotencias apoyaron bandos enfrentados",
          "Las guerras napoleónicas del siglo XIX",
          "Los conflictos en América del Sur del siglo XXI"
        ],
        correctIndex: 1,
        explanation: "Las guerras proxy fueron conflictos donde EE.UU. y URSS apoyaron bandos opuestos sin enfrentarse directamente: Corea (1950-1953), Vietnam (1955-1975) y Afganistán (1979-1989).",
        difficulty: "intermedio"
      },
      {
        id: 5062,
        question: "¿Cómo influyó la globalización en América Latina tras la caída de la URSS (1991)?",
        options: [
          "América Latina se aisló completamente del comercio mundial",
          "La globalización trajo oportunidades de integración comercial pero también dependencia económica y vulnerabilidad financiera",
          "Todos los países latinoamericanos se integraron a la Unión Europea",
          "La globalización eliminó completamente la pobreza en la región"
        ],
        correctIndex: 1,
        explanation: "La globalización en América Latina generó mayor acceso a mercados e inversiones, pero también incrementó la dependencia de materias primas, la vulnerabilidad financiera y la desigualdad interna.",
        difficulty: "avanzado"
      }
    ]
  }
];
