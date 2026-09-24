const historiaModulesPart1: CourseModule[] = [
  {
    slug: "civilizaciones-preincaicas",
    tip: "En el examen, memoriza la ubicaci\u00f3n geogr\u00e1fica y caracter\u00edstica principal de cada civilizaci\u00f3n: Nazca=L\u00edneas, Moche=cer\u00e1mica, Wari=imperio temprano, Chim\u00fa=Chan Chan.",
    theory: [
      {
        level: "basico",
        title: "Las seis grandes civilizaciones preincaicas",
        lines: [
          "Chav\u00edn (1200-400 a.C.): civilizaci\u00f3n matriz ubicada en la sierra norte (Chav\u00edn de Hu\u00e1ntar). Su deidad principal fue el Lanz\u00f3n monol\u00edtico.",
          "Paracas (800 a.C.-100 d.C.): se desarroll\u00f3 en la pen\u00ednsula de Paracas (Ica). Destac\u00f3 por sus textiles momia y trepanaciones craneanas.",
          "Nazca (100 a.C.-800 d.C.): floreci\u00f3 en la costa sur. Son famosas las L\u00edneas de Nazca y los acueductos de Cahuachi.",
          "Moche (100-700 d.C.): se ubic\u00f3 en la costa norte (Valle de Moche, La Libertad). Produjo la cer\u00e1mica retrato m\u00e1s realista del antiguo Per\u00fa.",
          "Wari (550-1000 d.C.): imperio centralista que domin\u00f3 la sierra y costa centrales desde su capital en Ayacucho (Huari).",
          "Chim\u00fa (900-1470 d.C.): imperio coste\u00f1o con capital en Chan Chan (La Libertad). Fue el \u00faltimo gran rival del Tahuantinsuyo."
        ]
      },
      {
        level: "intermedio",
        title: "Caracter\u00edsticas espec\u00edficas de cada civilizaci\u00f3n",
        lines: [
          "Chav\u00edn: desarrollo de la religi\u00f3n teocr\u00e1tica, agricultura en terrazas y uso de la coca. Su estilo art\u00edstico se expandi\u00f3 por toda la costa y sierra.",
          "Paracas: dominaron la metalurgia (oro, plata, cobre), la trepanaci\u00f3n craneana con 40% de supervivencia y el te\u00f1ido de textiles con tintes naturales.",
          "Nazca: crearon un sistema de acueductos subterr\u00e1neos (puquios) que a\u00fan funciona. Sus cer\u00e1micas policromas representan seres sobrenaturales (Cantorales).",
          "Moche: construyeron huacas monumentales (Sol y Luna). Practicaron el sacrificio ritual (Sacrificio de los Llanos de Moche) y la agricultura por irrigaci\u00f3n.",
          "Wari: implementaron un sistema de caminos estatales (precursores del Qhapaq \u00d1an). Usaron el mitmaq (reubicaci\u00f3n forzada de poblaciones).",
          "Chim\u00fa: perfeccionaron la metalurgia (oro lunar), el sistema de canales de irrigaci\u00f3n y la artesan\u00eda en talleres centralizados de Chan Chan."
        ]
      },
      {
        level: "avanzado",
        title: "Relaciones, decadencia e influencias entre civilizaciones",
        lines: [
          "Chav\u00edn ejerci\u00f3 influencia teol\u00f3gica sobre las culturas coste\u00f1as posteriores (Paracas y Nazca), pero no fue un imperio pol\u00edtico territorial.",
          "Paracas y Nazca comparten zona geogr\u00e1fica; los nazcas habr\u00edan sucedido a los paracas, adoptando su tecnolog\u00eda textil y a\u00f1adiendo innovaciones cer\u00e1micas.",
          "Los Moche declinaron por factores clim\u00e1ticos (El Ni\u00f1o) y conflictos internos. Se fragmentaron en reinos emergentes (Sic\u00e1n, Chim\u00fa).",
          "Wari y Tiwanaku fueron los primeros imperios panregionales: Wari controlaba la costa y sierra central; Tiwanaku, el altiplano collao.",
          "Chim\u00fa, heredero de los Moche, expandi\u00f3 su dominio por toda la costa norte y central hasta ser conquistado por Pachac\u00fatec alrededor de 1470.",
          "El Tahuantinsuyo integr\u00f3 y super\u00f3 todas estas tradiciones: administraci\u00f3n wari, metalurgia chim\u00fa, arte nazca y agricultura andina."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Civilizaciones Preincaicas</text>',
      '  <rect x="20" y="40" width="80" height="30" fill="#dbeafe" rx="6"/>',
      '  <text x="60" y="60" text-anchor="middle" fill="#1e40af" font-size="9" font-family="sans-serif">Chav\u00edn</text>',
      '  <rect x="110" y="40" width="80" height="30" fill="#dbeafe" rx="6"/>',
      '  <text x="150" y="60" text-anchor="middle" fill="#1e40af" font-size="9" font-family="sans-serif">Paracas</text>',
      '  <rect x="200" y="40" width="80" height="30" fill="#dbeafe" rx="6"/>',
      '  <text x="240" y="60" text-anchor="middle" fill="#1e40af" font-size="9" font-family="sans-serif">Nazca</text>',
      '  <rect x="20" y="80" width="80" height="30" fill="#fef3c7" rx="6"/>',
      '  <text x="60" y="100" text-anchor="middle" fill="#92400e" font-size="9" font-family="sans-serif">Moche</text>',
      '  <rect x="110" y="80" width="80" height="30" fill="#fef3c7" rx="6"/>',
      '  <text x="150" y="100" text-anchor="middle" fill="#92400e" font-size="9" font-family="sans-serif">Wari</text>',
      '  <rect x="200" y="80" width="80" height="30" fill="#fef3c7" rx="6"/>',
      '  <text x="240" y="100" text-anchor="middle" fill="#92400e" font-size="9" font-family="sans-serif">Chim\u00fa</text>',
      '  <text x="150" y="140" text-anchor="middle" fill="#475569" font-size="9" font-family="sans-serif">Per\u00edodo: 1200 a.C. - 1470 d.C.</text>',
      '  <text x="150" y="160" text-anchor="middle" fill="#475569" font-size="9" font-family="sans-serif">Ubicaci\u00f3n: Costa y Sierra del Per\u00fa</text>',
      '  <text x="150" y="185" text-anchor="middle" fill="#64748b" font-size="8" font-family="sans-serif">Todas fueron integradas al Tahuantinsuyo</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3001, question: "\u00bfQu\u00e9 civilizaci\u00f3n preincaica construy\u00f3 las famosas L\u00edneas de Nazca en la costa sur del Per\u00fa?", options: ["Chav\u00edn", "Moche", "Nazca", "Chim\u00fa"], correctIndex: 2, explanation: "Las L\u00edneas de Nazca fueron construidas por la cultura Nazca (100 a.C.-800 d.C.) en la meseta de Nazca, Ica. Representan animales, plantas y figuras geom\u00e9tricas.", difficulty: "basico" },
      { id: 3002, question: "La civilizaci\u00f3n Moche se caracteriz\u00f3 principalmente por:", options: ["Las L\u00edneas de Nazca", "La cer\u00e1mica retrato y las huacas Sol y Luna", "El sistema de mitmaq", "La construcci\u00f3n de Chan Chan"], correctIndex: 1, explanation: "Los Moche destacaron por su cer\u00e1mica retrato de gran realismo y por construir las Huacas del Sol y de la Luna en el valle de Moche, La Libertad.", difficulty: "intermedio" },
      { id: 3003, question: "\u00bfCu\u00e1l de las siguientes afirmaciones sobre el imperio Wari es correcta?", options: ["Fue un imperio coste\u00f1o con capital en Chan Chan", "Implement\u00f3 el sistema de mitmaq y caminos estatales", "Se desarroll\u00f3 exclusivamente en la sierra sur", "Sus dioses fueron representados en cer\u00e1mica policroma"], correctIndex: 1, explanation: "El Wari (550-1000 d.C.) fue el primer imperio centralista andino. Desde Huari (Ayacucho) extendi\u00f3 caminos estatales y us\u00f3 el mitmaq (reubicaci\u00f3n forzada) para controlar territorios.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "tahuantinsuyo",
    tip: "Pachac\u00fatec expandi\u00f3 el imperio, T\u00fapac Inca lo consolid\u00f3, Atahualpa lo perdi\u00f3. Memoriza la estructura social: Sapa Inca \u2192 Curacas \u2192 Hatun Runa \u2192 Yanakuna.",
    theory: [
      {
        level: "basico",
        title: "El Tahuantinsuyo: el imperio incaico",
        lines: [
          "El Tahuantinsuyo (\u201clas cuatro regiones\u201d) fue el imperio m\u00e1s grande de Am\u00e9rica precolombina, abarcando desde Colombia hasta Chile.",
          "Su capital fue Cusco, el ombligo del mundo (Qosqo), desde donde se gobernaron cuatro suyus: Chinchaysuyu, Antisuyu, Collasuyu y Cuntisuyu.",
          "Pachac\u00fatec (1438-1471) es considerado el fundador del Tahuantinsuyo. Derrot\u00f3 a los chancas y expandi\u00f3 el imperio hacia el norte y sur.",
          "T\u00fapac Inca Yupanqui (1471-1493) consolid\u00f3 la expansi\u00f3n, llegando hasta el r\u00edo Atrato (Colombia) y la zona central de Chile.",
          "Huayna C\u00e1pac (1493-1527) fue el \u00faltimo gran Sapa Inca. Muri\u00f3 de una epidemia europea, lo que desat\u00f3 la guerra civil entre Atahualpa y Hu\u00e1scar.",
          "El imperio colaps\u00f3 en 1532 cuando Pizarro captur\u00f3 a Atahualpa en Cajamarca, fragmentando un poder que se sosten\u00eda en la figura del Sapa Inca."
        ]
      },
      {
        level: "intermedio",
        title: "Organizaci\u00f3n social, econ\u00f3mica y pol\u00edtica del Tahuantinsuyo",
        lines: [
          "La pir\u00e1mide social estaba encabezada por el Sapa Inca (hijo del Sol), seguido por los Awki (pr\u00edncipes), los Curacas (jefes locales) y el Hatun Runa (pueblo).",
          "Los Yanakuna eran servidores personales del Inca, libres de tributo. Los Mitimaes eran comunidades reubicadas para controlar territorios estrat\u00e9gicos.",
          "El sistema econ\u00f3mico se basaba en la reciprocidad (ayni) y la redistribuci\u00f3n: el Estado almacenaba excedentes en qollqas (dep\u00f3sitos) para redistribuirlos en \u00e9pocas de escasez.",
          "La mit'a era el trabajo obligatorio al Estado, que se pagaba en trabajo, no en dinero. Los trabajadores recib\u00edan alimento y coca a cambio.",
          "Los quipus eran dispositivos de cuerdas con nudos para registrar informaci\u00f3n num\u00e9rica y posiblemente narrativa. Solo los quipucamayocs sab\u00edan interpretarlos.",
          "El aillu era la unidad social b\u00e1sica: un grupo de parentesco que compart\u00eda tierras, trabajo y ritual. Todos los incas pertenec\u00edan a un aillu."
        ]
      },
      {
        level: "avanzado",
        title: "Red de caminos, tambos, mitmaes y sistemas de control",
        lines: [
          "El Qhapaq \u00d1an (red de caminos) ten\u00eda m\u00e1s de 30,000 km, incluyendo puentes colgantes sobre r\u00edos y camachacuyes (caminos de altura).",
          "Los tambos eran estaciones de descanso y dep\u00f3sito cada 15-20 km a lo largo de los caminos. Los m\u00e1s grandes eran los tampus reales para el Sapa Inca.",
          "El sistema de mitmaes permit\u00eda al Estado reubicar poblaciones enteras para evitar rebeliones, poblar nuevas regiones o ejecutar proyectos agr\u00edcolas.",
          "La mit'a incaica era rotativa y obligatoria: duraba meses y abarcaba desde la agricultura hasta la construcci\u00f3n de obras p\u00fablicas (caminos, puentes, tambos).",
          "El sistema de ceques (l\u00edneas rituales) conectaba los huacas (lugares sagrados) desde el Coricancha en Cusco, estructurando el territorio en clave sagrada.",
          "El Tahuantinsuyo se sostuvo por la interacci\u00f3n entre centralismo incaico y autonom\u00eda local: los curacas manten\u00edan poder siempre que pagaran tributo y aceptaran al Sapa Inca."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Estructura del Tahuantinsuyo</text>',
      '  <polygon points="150,35 185,65 115,65" fill="#fbbf24" stroke="#d97706" stroke-width="1"/>',
      '  <text x="150" y="58" text-anchor="middle" fill="#78350f" font-size="8" font-weight="bold" font-family="sans-serif">Sapa Inca</text>',
      '  <rect x="110" y="70" width="80" height="20" fill="#fde68a" rx="4"/>',
      '  <text x="150" y="84" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">Curacas</text>',
      '  <rect x="95" y="95" width="110" height="20" fill="#fef3c7" rx="4"/>',
      '  <text x="150" y="109" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">Hatun Runa (Pueblo)</text>',
      '  <rect x="80" y="120" width="140" height="20" fill="#fffbeb" rx="4"/>',
      '  <text x="150" y="134" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">Yanakuna / Mitimaes</text>',
      '  <text x="150" y="162" text-anchor="middle" fill="#475569" font-size="9" font-family="sans-serif">4 Suyus: Chinchay, Anti, Cunti, Colla</text>',
      '  <text x="150" y="182" text-anchor="middle" fill="#64748b" font-size="8" font-family="sans-serif">Capital: Cusco (Qosqo)</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3010, question: "\u00bfQui\u00e9n es considerado el fundador del Tahuantinsuyo tras la derrota de los chancas?", options: ["T\u00fapac Inca Yupanqui", "Pachac\u00fatec", "Huayna C\u00e1pac", "Atahualpa"], correctIndex: 1, explanation: "Pachac\u00fatec (1438-1471) derrot\u00f3 a los chancas y transform\u00f3 el Curacazgo del Cusco en un vasto imperio, siendo reconocido como el verdadero fundador del Tahuantinsuyo.", difficulty: "basico" },
      { id: 3011, question: "\u00bfCu\u00e1l era el sistema de trabajo obligatorio al Estado incaico que se pagaba en trabajo y no en dinero?", options: ["Ayllu", "Minka", "Mit'a", "Ayni"], correctIndex: 2, explanation: "La mit'a era el trabajo obligatorio y rotativo que cada comunidad deb\u00eda al Estado inca. A diferencia de la minka (trabajo comunal voluntario), la mit'a era impuesta por el poder central.", difficulty: "intermedio" },
      { id: 3012, question: "El sistema de mitmaes cumpl\u00eda la funci\u00f3n pol\u00edtica de:", options: ["Registrar informaci\u00f3n en quipus", "Reubicar poblaciones para controlar territorios y prevenir rebeliones", "Distribuir excedentes agr\u00edcolas en los qollqas", "Establecer rutas comerciales entre los suyus"], correctIndex: 1, explanation: "Los mitmaes eran comunidades desplazadas por orden del Inca hacia zonas estrat\u00e9gicas. Esta pol\u00edtica evitaba concentraciones de poder local y facilitaba la integraci\u00f3n de nuevos territorios.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "conquista-espanola",
    tip: "La batalla de Cajamarca (1532) fue decisiva. Solo 168 espa\u00f1oles capturaron al Inca. Memoriza fechas: 1532-conquista, 1533-ejecuci\u00f3n de Atahualpa, 1535-fundaci\u00f3n de Lima.",
    theory: [
      {
        level: "basico",
        title: "La llegada de Pizarro y la captura de Atahualpa",
        lines: [
          "Francisco Pizarro lleg\u00f3 al Per\u00fa en 1532 con 168 soldados, 27 caballos y armas de fuego. Parti\u00f3 de San Miguel de Piura hacia la sierra.",
          "En Cajamarca, el 16 de noviembre de 1532, Pizarro embosc\u00f3 al ej\u00e9rcito inca y captur\u00f3 al Sapa Inca Atahualpa en el Patio de la Recepci\u00f3n.",
          "Atahualpa ofreci\u00f3 una habitaci\u00f3n llena de oro y dos de plata como rescate. Los espa\u00f1oles la recolectaron pero no lo liberaron.",
          "El 26 de julio de 1533, Atahualpa fue ejecutado en la plaza de Cajamarca mediante garrote, bajo la acusaci\u00f3n de idolatr\u00eda y usurpaci\u00f3n del trono.",
          "Tras la ejecuci\u00f3n, Pizarro march\u00f3 hacia Cusco, entrando el 15 de noviembre de 1533 sin resistencia significativa, ali\u00e1ndose con los partidarios de Hu\u00e1scar.",
          "El 18 de enero de 1535, Pizarro fund\u00f3 la Ciudad de los Reyes (Lima) como capital del nuevo territorio, rompiendo con la tradici\u00f3n cusque\u00f1a."
        ]
      },
      {
        level: "intermedio",
        title: "Guerras civiles espa\u00f1olas y alianzas ind\u00edgenas",
        lines: [
          "La guerra civil inca (Atahualpa vs. Hu\u00e1scar) debilit\u00f3 profundamente al Tahuantinsuyo. Pizarro explot\u00f3 esta divisi\u00f3n ali\u00e1ndose con los seguidores de Hu\u00e1scar.",
          "Diego de Almagro, socio de Pizarro, se rebel\u00f3 por el reparto de territorios. La guerra culmin\u00f3 con su ejecuci\u00f3n en Cusco en 1538.",
          "Manco Inca lider\u00f3 una gran rebeli\u00f3n en 1536-1537, asediando Cusco durante meses. Fue derrotado y huy\u00f3 a Vilcabamba, donde estableci\u00f3 un neoestado inca.",
          "Las guerras civiles espa\u00f1olas (Pizarro vs. Almagro) paralizaron la colonizaci\u00f3n durante a\u00f1os, permitiendo que la resistencia inca se mantuviera en Vilcabamba.",
          "Los curacas colaboraron activamente con los espa\u00f1oles, aportando miles de guerreros (especialmente en la lucha contra Manco Inca). Su lealtad era estrat\u00e9gica.",
          "El neoestado de Vilcabamba resisti\u00f3 hasta 1572, cuando el virrey Toledo captur\u00f3 y ejecut\u00f3 a T\u00fapac Amaru I, \u00faltimo Inca de Vilcabamba."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto demogr\u00e1fico, mestizaje y resistencia cultural",
        lines: [
          "Se estima que la poblaci\u00f3n del Per\u00fa cay\u00f3 de aproximadamente 9-12 millones en 1530 a menos de 1 mill\u00f3n en 1620, principalmente por epidemias (viruela, sarampi\u00f3n, gripe).",
          "El mestizaje racial y cultural fue un proceso complejo: no solo biol\u00f3gico, sino tambi\u00e9n deusi\u00f3n de cosmovisiones, religiones y pr\u00e1cticas agr\u00edcolas.",
          "La imposici\u00f3n del catolicismo convivi\u00f3 con la resistencia religiosa andina: los ind\u00edgenas practicaban su religi\u00f3n en secreto o la sincretizaban con el cristianismo.",
          "El sistema de encomiendas distribuy\u00f3 poblaciones ind\u00edgenas entre espa\u00f1oles, generando explotaci\u00f3n laboral que deriv\u00f3 en levantamientos y la posterior creaci\u00f3n de reducciones.",
          "El quipu fue prohibido y muchos fueron quemados por los curas, pero su uso persisti\u00f3 en comunidades andinas hasta el siglo XVIII.",
          "La conquista no fue un evento puntual sino un proceso de m\u00e1s de 40 a\u00f1os de resistencia, adaptaci\u00f3n y transformaci\u00f3n mutua entre espa\u00f1oles e ind\u00edgenas."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="bold" font-family="sans-serif">Conquista Espa\u00f1ola del Per\u00fa</text>',
      '  <line x1="50" y1="50" x2="250" y2="50" stroke="#e2e8f0" stroke-width="2"/>',
      '  <circle cx="80" cy="50" r="6" fill="#2563eb"/>',
      '  <text x="80" y="73" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1532</text>',
      '  <text x="80" y="83" text-anchor="middle" fill="#475569" font-size="7" font-family="sans-serif">Cajamarca</text>',
      '  <circle cx="135" cy="50" r="6" fill="#dc2626"/>',
      '  <text x="135" y="73" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1533</text>',
      '  <text x="135" y="83" text-anchor="middle" fill="#475569" font-size="7" font-family="sans-serif">Ejecuci\u00f3n</text>',
      '  <circle cx="190" cy="50" r="6" fill="#f59e0b"/>',
      '  <text x="190" y="73" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1535</text>',
      '  <text x="190" y="83" text-anchor="middle" fill="#475569" font-size="7" font-family="sans-serif">Lima</text>',
      '  <circle cx="240" cy="50" r="6" fill="#16a34a"/>',
      '  <text x="240" y="73" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1572</text>',
      '  <text x="240" y="83" text-anchor="middle" fill="#475569" font-size="7" font-family="sans-serif">Vilcabamba</text>',
      '  <text x="150" y="115" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Impacto Demogr\u00e1fico</text>',
      '  <rect x="40" y="125" width="100" height="16" fill="#dcfce7" rx="4"/>',
      '  <text x="90" y="137" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">1530: ~9-12 millones</text>',
      '  <rect x="160" y="125" width="100" height="16" fill="#fee2e2" rx="4"/>',
      '  <text x="210" y="137" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">1620: ~1 mill\u00f3n</text>',
      '  <text x="150" y="165" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Mortalidad estimada: 80-90%</text>',
      '  <text x="150" y="188" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">Resistencia: Vilcabamba (1536-1572)</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3020, question: "\u00bfEn qu\u00e9 fecha Pizarro captur\u00f3 al Sapa Inca Atahualpa en Cajamarca?", options: ["16 de noviembre de 1532", "26 de julio de 1533", "18 de enero de 1535", "15 de noviembre de 1533"], correctIndex: 0, explanation: "El 16 de noviembre de 1532, Pizarro embosc\u00f3 a Atahualpa en la Plaza de Cajamarca, captur\u00e1ndolo con solo 168 soldados frente a un ej\u00e9rcito de miles.", difficulty: "basico" },
      { id: 3021, question: "\u00bfQui\u00e9n lider\u00f3 la gran rebeli\u00f3n inca contra los espa\u00f1oles en 1536-1537, asediando Cusco?", options: ["Atahualpa", "Hu\u00e1scar", "Manco Inca", "T\u00fapac Amaru I"], correctIndex: 2, explanation: "Manco Inca, originalmente aliado de los espa\u00f1oles, lider\u00f3 una rebeli\u00f3n masiva en 1536 que asedi\u00f3 Cusco durante meses. Fue derrotado y huy\u00f3 a Vilcabamba.", difficulty: "intermedio" },
      { id: 3022, question: "La ca\u00feda del neoestado de Vilcabamba en 1572 signific\u00f3:", options: ["El inicio de la colonizaci\u00f3n espa\u00f1ola", "La ejecuci\u00f3n de Atahualpa en Cajamarca", "La captura y ejecuci\u00f3n de T\u00fapac Amaru I, \u00faltimo inca de Vilcabamba", "La fundaci\u00f3n de la Ciudad de los Reyes"], correctIndex: 2, explanation: "El virrey Toledo captur\u00f3 a T\u00fapac Amaru I en 1572 y lo ejecut\u00f3 p\u00fablicamente en Cusco, poniendo fin a m\u00e1s de 40 a\u00f1os de resistencia inca organizada.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "virreinato-del-peru",
    tip: "El Virreinato del Per\u00fa abarcaba casi toda Sudam\u00e9rica. Los virreyes m\u00e1s importantes: Toledo (reformas), Lima (expansi\u00f3n), Amat (ilustraci\u00f3n).",
    theory: [
      {
        level: "basico",
        title: "El Virreinato del Per\u00fa: estructura y gobierno colonial",
        lines: [
          "El Virreinato del Per\u00fa fue creado en 1542 por Carlos V. Inicialmente abarcaba casi toda Sudam\u00e9rica, excepto Brasil, Venezuela y la regi\u00f3n del R\u00edo de la Plata.",
          "La capital era la Ciudad de los Reyes (Lima), que desde 1560 fue sede de la Real Audiencia y centro administrativo del imperio espa\u00f1ol en Sudam\u00e9rica.",
          "El virrey era el representante directo del rey y ten\u00eda poder ejecutivo, judicial y militar. Los primeros virreyes enfrentaron rebeliones como la de Gonzalo Pizarro.",
          "Blasco N\u00fa\u00f1ez Vira fue el primer virrey (1544-1546), pero fue derrocado por Gonzalo Pizarro, quien gobern\u00f3 hasta su ejecuci\u00f3n en 1548.",
          "El Toledo (1569-1581) realiz\u00f3 reformas fundamentales: estableci\u00f3 la reducci\u00f3n de indios, reorganiz\u00f3 la mit'a y fund\u00f3 pueblos de espa\u00f1oles.",
          "El virreinato se dividi\u00f3 en gobernaciones, corregimientos y encomiendas, creando una jerarqu\u00eda administrativa que controlaba la explotaci\u00f3n de recursos y mano de obra ind\u00edgena."
        ]
      },
      {
        level: "intermedio",
        title: "Econom\u00eda colonial: miner\u00eda, mita y comercio",
        lines: [
          "Potos\u00ed (actual Bolivia) fue la mina de plata m\u00e1s grande del mundo. Su cerro de plata financi\u00f3 el imperio espa\u00f1ol durante m\u00e1s de dos siglos.",
          "La mita colonial, establecida por Toledo, obligaba a los ind\u00edgenas a trabajar en las minas de Potos\u00ed durante cuatro meses al a\u00f1o, causando alt\u00edsima mortalidad.",
          "El comercio se realizaba a trav\u00e9s del sistema de flotas: barcos que viajaban de Sevilla a Portobelo (Panam\u00e1) y de all\u00ed por tierra al Pac\u00edfico.",
          "El sistema de monopolio comercial (Casa de Contrataci\u00f3n) prohib\u00eda el comercio directo entre las colonias y otros pa\u00edses europeos.",
          "Los obrajes eran talleres textiles donde ind\u00edgenas y mestizos trabajaban en condiciones de explotaci\u00f3n, produciendo telas para todo el virreinato.",
          "La econom\u00eda colonial era fundamentalmente extractiva: se extra\u00edan metales preciosos y productos agr\u00edcolas, sin desarrollar industria local."
        ]
      },
      {
        level: "avanzado",
        title: "Reformas borb\u00f3nicas, ilustraci\u00f3n y conspiraciones",
        lines: [
          "Las reformas borb\u00f3nicas (siglo XVIII) buscaron modernizar la administraci\u00f3n colonial, aumentar la recaudaci\u00f3n y romper el monopolio lime\u00f1o.",
          "La creaci\u00f3n del Virreinato del R\u00edo de la Plata (1776) desmembr\u00f3 territorios del Per\u00fa, debilitando su hegemon\u00eda pol\u00edtica y econ\u00f3mica.",
          "La expulsi\u00f3n de los jesuitas (1767) gener\u00f3 un vac\u00edo educativo y de atenci\u00f3n a las poblaciones ind\u00edgenas de la Amazon\u00eda y la sierra.",
          "La Ilustraci\u00f3n lleg\u00f3 al Per\u00fa a trav\u00e9s de universidades y viajes cient\u00edficos (La Condamine, 1740). Intelectuales como Pablo de Olavide promovieron reformas.",
          "La conspiraci\u00f3n de los Tres Abogados (1780) y la rebeli\u00f3n de T\u00fapac Amaru II (1780-1783) desafiaron frontalmente el sistema colonial.",
          "Las reformas borb\u00f3nicas, paradojicamente, al descontentar tanto a criollos como a ind\u00edgenas, sembraron las semillas de la independencia."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#7c3aed" font-size="12" font-weight="bold" font-family="sans-serif">Virreinato del Per\u00fa</text>',
      '  <rect x="25" y="38" width="120" height="60" fill="#ede9fe" rx="6"/>',
      '  <text x="85" y="53" text-anchor="middle" fill="#5b21b6" font-size="9" font-weight="bold" font-family="sans-serif">Estructura</text>',
      '  <text x="85" y="66" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Rey \u2192 Virrey \u2192 Gobernador</text>',
      '  <text x="85" y="78" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">\u2192 Corregidor \u2192 Encomendero</text>',
      '  <text x="85" y="90" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">\u2192 Curaca \u2192 Ind\u00edgena</text>',
      '  <rect x="155" y="38" width="120" height="60" fill="#fef3c7" rx="6"/>',
      '  <text x="215" y="53" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold" font-family="sans-serif">Econom\u00eda</text>',
      '  <text x="215" y="66" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Mita minera (Potos\u00ed)</text>',
      '  <text x="215" y="78" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Monopolio comercial</text>',
      '  <text x="215" y="90" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Flotas de Sevilla</text>',
      '  <text x="150" y="120" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Reformas Borb\u00f3nicas (s. XVIII)</text>',
      '  <rect x="30" y="130" width="70" height="35" fill="#dbeafe" rx="4"/>',
      '  <text x="65" y="143" text-anchor="middle" fill="#1e40af" font-size="7" font-family="sans-serif">Expulsi\u00f3n</text>',
      '  <text x="65" y="155" text-anchor="middle" fill="#1e40af" font-size="7" font-family="sans-serif">Jesuitas 1767</text>',
      '  <rect x="115" y="130" width="70" height="35" fill="#fee2e2" rx="4"/>',
      '  <text x="150" y="143" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">T\u00fapac Amaru</text>',
      '  <text x="150" y="155" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">1780-1783</text>',
      '  <rect x="200" y="130" width="70" height="35" fill="#dcfce7" rx="4"/>',
      '  <text x="235" y="143" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">Nuevo Virreinato</text>',
      '  <text x="235" y="155" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">R\u00edo Plata 1776</text>',
      '  <text x="150" y="190" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">1542-1824: 282 a\u00f1os de dominio espa\u00f1ol</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3030, question: "\u00bfEn qu\u00e9 a\u00f1o fue creado el Virreinato del Per\u00fa y por qui\u00e9n?", options: ["1532 por Francisco Pizarro", "1542 por Carlos V", "1560 por Felipe II", "1776 por Carlos III"], correctIndex: 1, explanation: "El Virreinato del Per\u00fa fue creado en 1542 por Real Cédula de Carlos V, como parte de las Reformas de Nueva Cástilla, con capital en la Ciudad de los Reyes (Lima).", difficulty: "basico" },
      { id: 3031, question: "Potos\u00ed, la famosa mina de plata, fue administrada a trav\u00e9s del sistema de:", options: ["Encomiendas", "Corregimientos", "Mita colonial", "Obrajes"], correctIndex: 2, explanation: "La mita colonial, establecida por el virrey Toledo, obligaba a los ind\u00edgenas a trabajar en las minas de Potos\u00ef de forma rotativa, causando una alt\u00edsima mortalidad.", difficulty: "intermedio" },
      { id: 3032, question: "La rebeli\u00f3n de T\u00fapac Amaru II (1780-1783) fue consecuencia directa de:", options: ["La expulsi\u00f3n de los jesuitas", "Las reformas borb\u00f3nicas y la explotaci\u00f3n del sistema de mita", "La creaci\u00f3n del Virreinato del R\u00edo de la Plata", "La guerra de los Siete A\u00f1os"], correctIndex: 1, explanation: "T\u00fapac Amaru II lider\u00f3 la rebeli\u00f3n m\u00e1s grande contra el sistema colonial, motivado por las reformas borb\u00f3nicas que aumentaron la explotaci\u00f3n ind\u00edgena, especialmente a través de la mita minera.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "independencia-del-peru",
    tip: "San Mart\u00edn proclam\u00f3 la independencia el 28 de julio de 1821. Bol\u00edvar la consolid\u00f3 en 1824. La batalla de Ayacucho (1824) fue la definitiva.",
    theory: [
      {
        level: "basico",
        title: "Proclamaci\u00f3n y batallas de la independencia",
        lines: [
          "José de San Martín llegó al Perú en 1820 desde Chile con el Ejército de los Andes, desembarcando en Paracas y marchando hacia Lima.",
          "El 28 de julio de 1821, San Martín proclamó la independencia del Perú en la Plaza de Armas de Lima, declarando al país como Estado Libre.",
          "San Martín se autoproclamó Protector del Perú y promulgo leyes libertarias como la abolición de la mita y la libertad de vientres.",
          "En 1822, San Martín y Simón Bolívar se reunieron en la conferencia de Guayaquil, tras la cual San Martín renunció y se exilió a Europa.",
          "Bolívar asumió el liderazgo y consolidó la independencia con la batalla de Junín (1824) y la batalla de Ayacucho (1824), ambas victorias decisivas.",
          "La batalla de Ayacucho (9 de diciembre de 1824) fue la última gran batalla de las guerras de independencia sudamericanas. El virrey La Serna se rindió."
        ]
      },
      {
        level: "intermedio",
        title: "San Martín vs. Bolívar: estrategias y differencias",
        lines: [
          "San Martín optó por una estrategia diplomática y gradual: buscó la independencia sin violencia extrema y propuso una monarquía constitucional para el Perú.",
          "Bolívar, en cambio, defendía la república y la unificación de América del Sur en una sola nación (Gran Colombia). Su enfoque era más militar.",
          "La conferencia de Guayaquil (26-27 de julio de 1822) resolvió la disputa a favor de Bolívar: San Martín cedió el control del Perú y se retiró.",
          "El Congreso de Angostura (1819) fue donde Bolívar delineó su proyecto político para la unidad sudamericana, incluyendo un ejecutivo fuerte y bicameral.",
          "La Constitución de 1826, impulsada por Bolívar, estableció una presidencia vitalicia, pero fue rechazada por los peruanos que preferían un sistema más republicano.",
          "La tensión entre las visiones de San Martín (monarquía moderada) y Bolívar (república centralizada) definió los primeros débates políticos de la república."
        ]
      },
      {
        level: "avanzado",
        title: "Causas económicas, sociales y la influencia de la Ilustración",
        lines: [
          "Las causas económicas incluían el monopolio comercial español, las reformas borbónicas que gravaban a los criollos y la exclusión del comercio libre.",
          "Los criollos, descendientes de españoles nacidos en América, sentían que las reformas borbónicas les quitaban privilegios económicos y políticos.",
          "La Ilustración difundió ideas de soberanía popular, separación de poderes y derechos del hombre, influyendo en los líderes independentistas.",
          "La revolución francesa (1789) y la independencia de EE.UU. (1776) fueron modelos ideológicos para los libertadores sudamericanos.",
          "La rebelión de Túpac Amaru II (1780), aunque indígena, demostró la fragilidad del sistema colonial y sembró el descontento que los criollos canalizaron en 1810.",
          "El comercio ilícito de los criollos con Inglaterra y EE.UU. les mostró las ventajas de un sistema económico abierto, incompatible con el monopolio español."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#16a34a" font-size="12" font-weight="bold" font-family="sans-serif">Independencia del Per\u00fa</text>',
      '  <line x1="30" y1="50" x2="270" y2="50" stroke="#e2e8f0" stroke-width="2"/>',
      '  <circle cx="60" cy="50" r="5" fill="#2563eb"/>',
      '  <text x="60" y="72" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1820</text>',
      '  <text x="60" y="82" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Llegada San Mart\u00edn</text>',
      '  <circle cx="120" cy="50" r="5" fill="#16a34a"/>',
      '  <text x="120" y="72" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1821</text>',
      '  <text x="120" y="82" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Proclamac.Independencia</text>',
      '  <circle cx="180" cy="50" r="5" fill="#f59e0b"/>',
      '  <text x="180" y="72" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1822</text>',
      '  <text x="180" y="82" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Guayaquil</text>',
      '  <circle cx="240" cy="50" r="5" fill="#dc2626"/>',
      '  <text x="240" y="72" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1824</text>',
      '  <text x="240" y="82" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Ayacucho</text>',
      '  <text x="150" y="110" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Batalla de Ayacucho (1824)</text>',
      '  <text x="150" y="128" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Ej\u00e9rcito Unido Libertador: 5,780</text>',
      '  <text x="150" y="143" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Realistas: 9,310 (rindi\u00f3n)</text>',
      '  <text x="150" y="168" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">\u00daltima gran batalla de Am\u00e9rica del Sur</text>',
      '  <text x="150" y="188" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">Comandante: Antonio Jos\u00e9 de Sucre</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3040, question: "\u00bfEn qu\u00e9 fecha se proclam\u00f3 la independencia del Per\u00fa y qui\u00e9n lo hizo?", options: ["9 de diciembre de 1824, Sim\u00f3n Bol\u00edvar", "28 de julio de 1821, Jos\u00e9 de San Mart\u00edn", "26 de julio de 1822, Antonio Sucre", "7 de abril de 1825, Andrés de Santa Cruz"], correctIndex: 1, explanation: "El 28 de julio de 1821, José de San Martín proclamó la independencia del Perú en la Plaza de Armas de Lima, estableciendo un gobierno provisional.", difficulty: "basico" },
      { id: 3041, question: "La conferencia de Guayaquil (1822) entre San Martín y Bolívar resultó en:", options: ["La alianza militar contra los realistas", "San Martín cedió el liderazgo a Bolívar y se retiró", "La creación de la Gran Colombia", "La firma de la Constitución de 1826"], correctIndex: 1, explanation: "En Guayaquil, las diferencias entre San Martín (monarquía moderada) y Bolívar (república) llevaron a que San Martín cediera el control y se exiliara a Europa.", difficulty: "intermedio" },
      { id: 3042, question: "La influencia de la Ilustración en la independencia peruana se manifestó principalmente en:", options: ["El uso de armas modernas europeas", "La difusión de ideas de soberanía popular y derechos del hombre", "La alianza militar con Francia", "La creación de un ejército profesional"], correctIndex: 1, explanation: "La Ilustración proporcionó el marco teórico de soberanía popular, separación de poderes y derechos naturales que justificaron la ruptura con el dominio español.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "republica-temprana",
    tip: "La Rep\u00fablica temprana (1826-1872) fue inestable: caudillos, guerras con Colombia y Bolivia. Memoriza: Guerra con Colombia (1828-1829), Guerra del Pac\u00edfico (1879-1883).",
    theory: [
      {
        level: "basico",
        title: "Primeros gobiernos y la inestabilidad republicana",
        lines: [
          "Después de Ayacucho (1824), Perú tuvo múltiples gobiernos inestables: caudillos militares, presidentes provisionales y constituciones cambiantes.",
          "Agustín Gamarra y Andrés de Santa Cruz fueron dos de los primeros líderes que intentaron consolidar la república, pero ambos enfrentaron oposición armada.",
          "Santa Cruz creó la Confederación Perú-Bolivia (1836-1839), un proyecto unionista que fue destruido por Chile y Argentina en la Guerra de la Confederación.",
          "La Guerra contra la Confederación (1836-1839) terminó con la derrota en la batalla de Yungay y la disolución forzosa de la unión.",
          "En la década de 1840-1850, los caudillos como Ramón Castilla (1845-1849, 1855-1862) intentaron modernizar el Estado sin abandonar el autoritarismo.",
          "La constitución de 1860, impulsada por Castilla, fue la más estable del siglo XIX y sirvió como marco político durante décadas."
        ]
      },
      {
        level: "intermedio",
        title: "Guerras externas y la consolidación territorial",
        lines: [
          "La guerra con la Gran Colombia (1828-1829) se disputó por el control del norte. La batalla de Portete de Tarqui (1829) definieron las fronteras.",
          "El Tratado de Pascuales (1829) estableció las fronteras entre Perú y la Gran Colombia, marcando el inicio de la configuración territorial republicana.",
          "La Guerra contra la Confederación Perú-Bolivia (1836-1839) fue instigada por Chile, que temía una alianza que lo rodeara. La batalla de Yungay fue decisiva.",
          "La Guerra hispano-sudamericana (1864-1866) involucró a Perú, Chile, Bolivia y Ecuador contra España. El bombardeo del Callao (1866) unificó temporalmente a los países.",
          "La década de 1860-1870 fue de relativa estabilidad bajo Castilla, con la abolición de la esclavitud (1854) y la llegada del ferrocarril.",
          "La prosperidad del guano en las décadas de 1840-1860 generó riqueza pero también corrupción, preparando el terreno para la Guerra del Pacífico."
        ]
      },
      {
        level: "avanzado",
        title: "Guano, salitre y el inicio de la Guerra del Pacífico",
        lines: [
          "El guano (excremento de aves marinas) fue el principal recurso económico del Perú entre 1840-1880, generando enormes ingresos fiscales por la venta en Europa.",
          "La isla de Lobos, el guano de Pisco y las islas de Chincha fueron las principales fuentes. A fines del siglo XIX, el recurso se agotó progresivamente.",
          "El salitre (nitrato de sodio) en Tarapacá era otra fuente de riqueza: se usaba como fertilizante y explosivo, siendo codiciado por Chile y Bolivia.",
          "La Guerra del Pacífico (1879-1883) comenzó por disputas sobre el salitre. Chile invadió Tarapacá tras la alianza secreta con Bolivia (Tratado de 1874).",
          "La batalla de Tacna y Arica (1880) y la captura de Lima (1881) fueron los momentos decisivos que sellaron la derrota peruana.",
          "El Tratado de Ancón (1883) cedió Tarapacá a Chile. La Guerra del Pacífico fue el trauma más grande de la República temprana y definió la política exterior peruana."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#d97706" font-size="12" font-weight="bold" font-family="sans-serif">Rep\u00fablica Temprana (1826-1872)</text>',
      '  <line x1="30" y1="50" x2="270" y2="50" stroke="#e2e8f0" stroke-width="2"/>',
      '  <circle cx="60" cy="50" r="5" fill="#2563eb"/>',
      '  <text x="60" y="70" text-anchor="middle" fill="#1e293b" font-size="6" font-family="sans-serif">1829</text>',
      '  <text x="60" y="79" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Colombia</text>',
      '  <circle cx="120" cy="50" r="5" fill="#dc2626"/>',
      '  <text x="120" y="70" text-anchor="middle" fill="#1e293b" font-size="6" font-family="sans-serif">1839</text>',
      '  <text x="120" y="79" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Yungay</text>',
      '  <circle cx="180" cy="50" r="5" fill="#f59e0b"/>',
      '  <text x="180" y="70" text-anchor="middle" fill="#1e293b" font-size="6" font-family="sans-serif">1866</text>',
      '  <text x="180" y="79" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Callao</text>',
      '  <circle cx="240" cy="50" r="5" fill="#dc2626"/>',
      '  <text x="240" y="70" text-anchor="middle" fill="#1e293b" font-size="6" font-family="sans-serif">1879</text>',
      '  <text x="240" y="79" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Pac\u00edfico</text>',
      '  <text x="150" y="105" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Guano y Salitre</text>',
      '  <rect x="40" y="115" width="100" height="30" fill="#fef3c7" rx="4"/>',
      '  <text x="90" y="130" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">Guano: 1840-1880</text>',
      '  <text x="90" y="140" text-anchor="middle" fill="#92400e" font-size="7" font-family="sans-serif">Islas de Chincha</text>',
      '  <rect x="160" y="115" width="100" height="30" fill="#fef3c7" rx="4"/>',
      '  <text x="210" y="130" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">Salitre: 1879-1883</text>',
      '  <text x="210" y="140" text-anchor="middle" fill="#92400e" font-size="7" font-family="sans-serif">Tarapac\u00e1</text>',
      '  <text x="150" y="170" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">Caudillos: Gamarra, Santa Cruz, Castilla</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3050, question: "\u00bfQué acontecimiento militar puso fin a la Confederación Perú-Bolivia en 1839?", options: ["La batalla de Junín", "La batalla de Yungay", "La batalla de Ayacucho", "La batalla de Portete de Tarqui"], correctIndex: 1, explanation: "La batalla de Yungay (20 de enero de 1839) fue decisiva para la derrota de la Confederación Perú-Bolivia, liderada por Santa Cruz, por las fuerzas chilenas y peruanas opositoras.", difficulty: "basico" },
      { id: 3051, question: "La guerra con la Gran Colombia (1828-1829) se resolvió con:", options: ["La batalla de Ayacucho", "El Tratado de Pascuales", "La proclamación de Lima", "La batalla de Callao"], correctIndex: 1, explanation: "El Tratado de Pascuales (1829) definió las fronteras entre Perú y la Gran Colombia, poniendo fin al conflicto por el control del norte del país.", difficulty: "intermedio" },
      { id: 3052, question: "La Guerra del Pacífico (1879-1883) fue provocada fundamentalmente por:", options: ["La disputa por el control de Lima", "La codicia chilena sobre el salitre de Tarapacá", "La alianza de Perú con Bolivia contra Chile", "La rebelión de los caudillos del sur"], correctIndex: 1, explanation: "Chile invadió Tarapacá por el control del salitre, recurso valioso como fertilizante y explosivo. La Guerra del Pacífico fue el conflicto más devastador de la República temprana.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "guano-y-salitre",
    tip: "El guano generó fortunas (1840-1880). La Guerra del Pacífico (1879-1883) contra Chile nos costó Tarapacá, Arica y Tacna. Memoriza: Batalla de San Francisco, Batalla de Angamos.",
    theory: [
      {
        level: "basico",
        title: "Época del guano y la causa de la Guerra del Pacífico",
        lines: [
          "El Perú vivió una época de prosperidad gracias a la exportación de guano (excremento de aves marinas) entre 1840 y 1880.",
          "Las islas de Chincha, Lobos y Pisco fueron las principales fuentes de guano, que se vendía a precios altísimos en Europa como fertilizante.",
          "El salitre (nitrato de sodio) en Tarapacá era igualmente valioso: se usaba como fertilizante agrícola y componente de explosivos.",
          "Chile invadió Tarapacá en 1879, desatando la Guerra del Pacífico (1879-1883) que resultó en la pérdida territorial más grande de Perú.",
          "La Guerra del Pacífico se desarrolló en tres frentes: terrestre (desierto de Atacama), naval (costa del Pacífico) y la defensa de Lima.",
          "La captura de Lima en enero de 1881 por el ejército chileno marcó el fin efectivo de la resistencia peruana y el inicio de la ocupación."
        ]
      },
      {
        level: "intermedio",
        title: "Batallas principales y el Pacto de Tacna-Arica",
        lines: [
          "La batalla de Iquique (1879) fue el primer enfrentamiento naval importante: el Huáscar peruanó, pero Arturo Prat se convirtió en héroe chileno.",
          "La batalla de Angamos (1879) fue decisiva: Chile capturó al monitor Huáscar, asegurando el dominio naval del Pacífico sur.",
          "La batalla de San Francisco (1879) fue la primera gran batalla terrestre en el desierto de Atacama, donde las fuerzas peruanas fueron superadas por la movilidad chilena.",
          "La batalla de Miraflores (1881), en los suburbios de Lima, fue la última resistencia organizada antes de la caþda de la capital.",
          "El Pacto de Tacna-Arica (1929) estableció que Chile devolvería Tacna a Perú después de un plebiscito, pero Arica quedaría definitivamente en manos chilenas.",
          "La Ocupación chilena del Perú (1881-1883) incluyó la confiscación de propiedades, la imposición de un gobierno títere y la resistencia civil."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto económico, pérdida territorial y tratados",
        lines: [
          "Perú perdió Tarapacá, Arica y Tacna (después de 50 años de ocupación chilena). La pérdida de salitre significó la ruina económica prolongada.",
          "El Tratado de Ancón (1883) cedió Tarapacá a Chile en propiedad absoluta, sin compensación ni plebiscito, bajo coacción militar.",
          "La deuda de guerra y la pérdida de recursos generaron una crisis fiscal que duró décadas, financiándose con préstamos que hipotecaron la economía nacional.",
          "El Tratado de Río de Janeiro (1904) consolidó la pérdida de Arica y estableció límites definitivos en la frontera norte, sin consultar a la población peruana.",
          "La Comisión Mixta de Límites (1900-1930) intentó resolver disputes fronterizas restantes pero generó tensiones persistentes con Bolivia y Ecuador.",
          "La Guerra del Pacífico dejó una herida nacional que impulsó el revisionismo territorial y moldeó la política exterior peruana durante todo el siglo XX."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="bold" font-family="sans-serif">Guerra del Pac\u00edfico</text>',
      '  <line x1="30" y1="50" x2="270" y2="50" stroke="#e2e8f0" stroke-width="2"/>',
      '  <circle cx="60" cy="50" r="5" fill="#2563eb"/>',
      '  <text x="60" y="70" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1879</text>',
      '  <text x="60" y="80" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Invasi\u00f3n</text>',
      '  <circle cx="120" cy="50" r="5" fill="#f59e0b"/>',
      '  <text x="120" y="70" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1879</text>',
      '  <text x="120" y="80" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Angamos</text>',
      '  <circle cx="180" cy="50" r="5" fill="#dc2626"/>',
      '  <text x="180" y="70" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1881</text>',
      '  <text x="180" y="80" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Caida Lima</text>',
      '  <circle cx="240" cy="50" r="5" fill="#16a34a"/>',
      '  <text x="240" y="70" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1883</text>',
      '  <text x="240" y="80" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Anc\u00f3n</text>',
      '  <text x="150" y="108" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Territorio Perdido</text>',
      '  <rect x="40" y="118" width="100" height="28" fill="#fee2e2" rx="4"/>',
      '  <text x="90" y="132" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">Tarapac\u00e1 (1883)</text>',
      '  <text x="90" y="142" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Propiedad absoluta</text>',
      '  <rect x="160" y="118" width="100" height="28" fill="#fee2e2" rx="4"/>',
      '  <text x="210" y="132" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">Arica (1929)</text>',
      '  <text x="210" y="142" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Definitivo Chile</text>',
      '  <rect x="100" y="155" width="100" height="20" fill="#fef3c7" rx="4"/>',
      '  <text x="150" y="169" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">Tacna (1929)</text>',
      '  <text x="150" y="192" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">P\u00e9rdida: ~180,000 km\u00b2 de territorio</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3060, question: "\u00bfQué recurso natural generó las principales fortunas del Perú entre 1840 y 1880?", options: ["El caucho", "El guano", "La plata de Cerro de Pasco", "El cobre de Cerro Verde"], correctIndex: 1, explanation: "El guano, excremento de aves marinas acumulado en islas costeñas, fue la principal fuente de riqueza del Perú en la segunda mitad del siglo XIX, vendiéndose como fertilizante en Europa.", difficulty: "basico" },
      { id: 3061, question: "La batalla de Angamos (1879) fue decisiva porque:", options: ["Perú capturó el Huáscar chileno", "Chile aseguró el dominio naval al capturar el Huáscar", "Se firmó el Tratado de Pascuales", "Se liberó Lima del sitio chileno"], correctIndex: 1, explanation: "En Angamos, la armada chilena capturó al monitor Huásar, asegurando el dominio naval del Pacífico sur y facilitando las operaciones terrestres en Tarapacá.", difficulty: "intermedio" },
      { id: 3062, question: "El Tratado de Ancón (1883) tuvo como consecuencia principal:", options: ["La devolución de Tacna a Perú", "La cesión absoluta de Tarapacá a Chile", "La creación de una zona neutral", "El plebiscito sobre Arica"], correctIndex: 1, explanation: "El Tratado de Ancón cedió Tarapacá a Chile en propiedad absoluta, sin compensación, bajo presión militar chilena. La situación de Tacna y Arica se resolvería después.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "oncenio-y-guerra",
    tip: "El Oncenio de Leguía (1919-1930) modernizó Lima pero fue autoritario. La Gran Depresión de 1929 lo derrocó. Memoriza: Nuevo Civilismo, Leguía, Sánchez Cerro.",
    theory: [
      {
        level: "basico",
        title: "El Oncenio: modernización y autoritarismo de Leguía",
        lines: [
          "Augusto B. Leguía gobernó el Perú durante 11 años (1919-1930), un período conocido como el Oncenio, el más largo del siglo XX.",
          "Leguía llegó al poder por segunda vez en 1919, prometiendo modernizar la economía y la infraestructura del país.",
          "Bajo su gobierno se construyó el Palacio de Gobierno actual (Casa de Pizarro), el Edificio Giuffre y el Teatro Municipal de Lima.",
          "Leguía implementó el sistema de Consignaciones, que otorgaba monopolios de exportación a empresas extranjeras a cambio de préstamos.",
          "Su gobierno fue autoritario: cerró el Congreso, persiguió opositores y utilizó la censura de prensa para silenciar críticas.",
          "La Gran Depresión de 1929 provocó una crisis económica que debilitó a Leguía, facilitando su derrocamiento en agosto de 1930."
        ]
      },
      {
        level: "intermedio",
        title: "Contexto político: Nuevo Civilismo, aprismo y oposición",
        lines: [
          "El Nuevo Civilismo (1912-1919) fue un movimiento político que buscaba una república más inclusiva y moderna, liderado por Augusto Bernardino Leguía.",
          "Leguía, originalmente civilista, rompió con su partido y se alió con sectores militares y oligárquicos para perpetuarse en el poder.",
          "El Partido Aprista Peruano (APRA), fundado en 1924 por Víctor Raúl Haya de la Torre en México, surgió como la principal fuerza de oposición al Oncenio.",
          "Haya de la Torre propuso un programa reformista: industrialización, reforma agraria, educación pública y alianza con las clases medias y obreras.",
          "La oposición al Oncenio incluyó a intelectuales, estudiantes universitarios y sectores medios que veían a Leguía como un dictador disfrazado.",
          "El golpe de estado de Luis Sánchez Cerro en agosto de 1930 puso fin al Oncenio, pero no resolvió la inestabilidad política crónica del país."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto económico de la Depresión y nuevos movimientos sociales",
        lines: [
          "La Gran Depresión (1929) colapsó los precios del algodón y la plata, principales exportaciones peruanas, provocando desempleo masivo y quiebras bancarias.",
          "El sistema de Consignaciones de Leguía transferó riqueza nacional a empresas extranjeras como Grace y W.R. Grace, debilitando la economía interna.",
          "La crisis económica aceleró la movilización social: los sindicatos crecieron, los estudiantes se politizaron y los partidos de izquierda ganaron fuerza.",
          "El aprismo, nacido en el exilio, se convirtió en el primer movimiento político de masas en el Perú, con base en la clase media y los obreros.",
          "La crisis del Oncenio marcó el fin de la oligarquía limeña como único actor político: los sectores medios y populares entraron definitivamente en escena.",
          "El período 1930-1950 fue de inestabilidad crónica: Sánchez Cerro, Benavides, Prado y el movimiento del 4 de julio de 1936 reflejaron esta transición."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#7c3aed" font-size="12" font-weight="bold" font-family="sans-serif">Oncenio de Legu\u00eda</text>',
      '  <rect x="30" y="38" width="240" height="25" fill="#ede9fe" rx="6"/>',
      '  <text x="150" y="55" text-anchor="middle" fill="#5b21b6" font-size="9" font-weight="bold" font-family="sans-serif">1919-1930: 11 a\u00f1os de gobierno</text>',
      '  <rect x="30" y="70" width="110" height="55" fill="#dcfce7" rx="6"/>',
      '  <text x="85" y="85" text-anchor="middle" fill="#166534" font-size="8" font-weight="bold" font-family="sans-serif">Modernizaci\u00f3n</text>',
      '  <text x="85" y="97" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Palacio de Gobierno</text>',
      '  <text x="85" y="107" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Edificio Giuffre</text>',
      '  <text x="85" y="117" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Obras p\u00fablicas</text>',
      '  <rect x="160" y="70" width="110" height="55" fill="#fee2e2" rx="6"/>',
      '  <text x="215" y="85" text-anchor="middle" fill="#991b1b" font-size="8" font-weight="bold" font-family="sans-serif">Autoritarismo</text>',
      '  <text x="215" y="97" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Cierre del Congreso</text>',
      '  <text x="215" y="107" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Censura de prensa</text>',
      '  <text x="215" y="117" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Persecuci\u00f3n pol\u00edtica</text>',
      '  <text x="150" y="148" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Crisis y Ca\u00edda</text>',
      '  <rect x="50" y="155" width="90" height="22" fill="#fef3c7" rx="4"/>',
      '  <text x="95" y="170" text-anchor="middle" fill="#92400e" font-size="7" font-family="sans-serif">Gran Depresi\u00f3n 1929</text>',
      '  <rect x="160" y="155" width="90" height="22" fill="#fee2e2" rx="4"/>',
      '  <text x="205" y="170" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Golpe S\u00e1nchez Cerro</text>',
      '  <text x="150" y="195" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">APRA: primer partido de masas (1924)</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3070, question: "\u00bfCuánto duró el gobierno de Augusto B. Leguía durante su Oncenio?", options: ["6 años", "8 años", "11 años", "15 años"], correctIndex: 2, explanation: "El Oncenio de Leguía duró 11 años (1919-1930), siendo el período de gobierno más largo del siglo XX en el Perú.", difficulty: "basico" },
      { id: 3071, question: "El sistema de Consignaciones del Oncenio consistía en:", options: ["La venta de terrenos estatales a particulares", "El otorgamiento de monopolios de exportación a empresas extranjeras", "El reparto de tierras a campesinos", "La creación de cooperativas agrícolas"], correctIndex: 1, explanation: "El sistema de Consignaciones permitía a empresas como W.R. Grace controlar la exportación de productos peruanos a cambio de préstamos que endeudaban al Estado.", difficulty: "intermedio" },
      { id: 3072, question: "La Gran Depresión de 1929 afectó a Perú principalmente por:", options: ["La caída de precios del algodón y la plata", "La invasión de tropas extranjeras", "La pérdida de territorios en la frontera norte", "La rebelión armada de los campesinos"], correctIndex: 0, explanation: "La Gran Depresión colapsó los precios internacionales del algodón y la plata, principales exportaciones peruanas, provocando desempleo masivo y quiebras bancarias que debilitaron al régimen.", difficulty: "avanzado" }
    ]
  }
];

export default historiaModulesPart1;
