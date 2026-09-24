const fs = require('fs');
const path = require('path');

const courses = [
  { name:'comprension-lectora', prefix:'cl', topics: require('./compact-topics-cl') },
  { name:'derecho-ciudadania', prefix:'dc', topics: require('./compact-topics-dc') },
  { name:'economia-basica', prefix:'ec', topics: require('./compact-topics-ec') },
  { name:'ingles', prefix:'en', topics: require('./compact-topics-en') },
  { name:'fisica', prefix:'fi', topics: require('./compact-topics-fi') },
  { name:'quimica', prefix:'qu', topics: require('./compact-topics-qu') },
  { name:'biologia', prefix:'bi', topics: require('./compact-topics-bi') },
  { name:'letras', prefix:'le', topics: require('./compact-topics-le') },
];

function rng(seed) {
  let s = seed;
  return () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
}

const types = {
  'idea-principal':    {fn: (t,r)=>[t.tip, `Identifica la idea principal: "${t.title}".`, `Lee todo el texto antes de responder.`, `La idea principal resume el contenido completo.`, `No confundir con detalles secundarios.`, `El titulo puede dar una pista.`]},
  'ideas-secundarias': {fn: (t,r)=>[t.tip, `Las ideas secundarias apoyan la idea principal de "${t.title}".`, `Busca ejemplos, datos o explicaciones adicionales.`, `Aunque no son la idea central, son importantes.`, `Sirven para reforzar o aclarar.`, ` Ordenarlas por importancia.`]},
  'inferencia':        {fn: (t,r)=>[`En "${t.title}", se infiere algo no escrito directamente.`, t.tip, `Lee entre lineas.`, `Usa pistas del contexto.`, `La respuesta debe ser logica.`]},
  'vocabulario':       {fn: (t,r)=>[`En el contexto de "${t.title}", la palabra tiene un significado especifico.`, t.tip, `Revisa la definicion en el diccionario.`, `Considera el contexto.`, `Algunas palabras tienen multiples significados.`]},
  'proposito':         {fn: (t,r)=>[`El autor escribe "${t.title}" con un proposito.`, t.tip, `Identificar si es informar, persuadir o entretener.`, `El tono puede ayudar.`, `Los argumentos revelan la intencion.`]},
  'estructura':        {fn: (t,r)=>[`"${t.title}" tiene una estructura particular.`, t.tip, `Identificar introduccion, desarrollo y conclusion.`, `Observar la organizacion de ideas.`, `Los conectores guian la lectura.`]},
  'conectores':        {fn: (t,r)=>[`En "${t.title}", los conectores unen ideas.`, t.tip, `Ademas: adicion.`, `Sin embargo: contraste.`, `Por lo tanto: consecuencia.`]},
  'tono-actitud':      {fn: (t,r)=>[`El tono en "${t.title}" revela la actitud del autor.`, t.tip, `Neutral: objetivo.`, `Critico: cuestiona.`, `Ironico: dice lo contrario.`]},
  'argumentacion':     {fn: (t,r)=>[`"${t.title}" presenta un argumento.`, t.tip, `Tesis: proposicion principal.`, `Evidencia: datos que la respaldan.`, `Razonamiento: como se conectan.`]},
  'resumen':           {fn: (t,r)=>[`Resume "${t.title}" en pocas palabras.`, t.tip, `Identificar idea principal y secundarias.`, `No agregar opinion propia.`, `Mantener la esencia del texto.`]},
  'comparacion':       {fn: (t,r)=>[`Compara "${t.title}" con otro tema similar.`, t.tip, `Identificar similitudes.`, `Identificar diferencias.`, `Concluir con una sintesis.`]},
  'causa-efecto':      {fn: (t,r)=>[`En "${t.title}", identifica causas y efectos.`, t.tip, `Causa: por que ocurre.`, `Efecto: que resultado tiene.`, `Relacionar ambos correctamente.`]},
  'temporal':          {fn: (t,r)=>[`"${t.title}" tiene un orden temporal.`, t.tip, `Identificar先后顺序.`, `Usar marcadores temporales.`, `Organizar cronologicamente.`]},
  'clasificacion':     {fn: (t,r)=>[`Clasifica los elementos de "${t.title}".`, t.tip, `Identificar categorias.`, `Usar criterios claros.`, `Organizar jerarquicamente.`]},
  'problema-solucion': {fn: (t,r)=>[`En "${t.title}", identifica el problema y la solucion.`, t.tip, `Problema: que conflictos hay.`, `Solucion: que propone el autor.`, `Evaluar si es viable.`]},
  'tipeo':             {fn: (t,r)=>[`"${t.title}" es un concepto clave.`, t.tip, `Identificar definicion.`, `Relacionar con otros conceptos.`, `Aplicar en ejemplos.`]},
  'repaso-cl':         {fn: (t,r)=>[`Repasa "${t.title}" con estos ejercicios.`, t.tip, `Repasa los conceptos principales.`, `Identifica puntos clave.`, `Aplica lo aprendido.`]},
  'resol-exam':        {fn: (t,r)=>[`Resuelve este problema de examen sobre "${t.title}".`, t.tip, `Lee con atencion.`, `Elimina opciones incorrectas.`, `Verifica tu respuesta.`]},
  'tema-central':      {fn: (t,r)=>[`Identifica el tema central de "${t.title}".`, t.tip, `El tema es la idea principal.`, `No confundir con subtemas.`, `El titulo puede dar pistas.`]},
  'temas-secundarios': {fn: (t,r)=>[`Identifica los temas secundarios de "${t.title}".`, t.tip, `Son ideas que complementan.`, `Aportan contexto.`, `No son la idea principal.`]},
  'oferta-demanda':    {fn: (t,r)=>[`En "${t.title}", analiza oferta y demanda.`, t.tip, `Oferta: cantidad que se ofrece.`, `Demanda: cantidad que se busca.`, `Precio equilibrio.`]},
  'precio-formacion':  {fn: (t,r)=>[`Como se forma el precio en "${t.title}".`, t.tip, `Costos de produccion.`, `Escasez del recurso.`, `Competencia en el mercado.`]},
  'tipos-mercado':     {fn: (t,r)=>[`Tipos de mercado en "${t.title}".`, t.tip, `Competencia perfecta.`, `Monopolio.`, `Oligopolio.`]},
  'interdependencia':  {fn: (t,r)=>[`"${t.title}" se relaciona con otros temas.`, t.tip, `Identificar conexiones.`, `Ver como afecta a otros.`, `Comprender el contexto.`]},
  'inferencia-av':     {fn: (t,r)=>[`En "${t.title}", haz una inferencia avanzada.`, t.tip, `Multiples pistas.`, `Razonamiento complejo.`, `Basado en evidencia.`]},
  'inferencia-lit':    {fn: (t,r)=>[`En "${t.title}", interpreta el texto literario.`, t.tip, `Simbolismo.`, `Metafora.`, `Significado profundo.`]},
  'ironia':            {fn: (t,r)=>[`En "${t.title}", detecta la ironia.`, t.tip, `Dice lo contrario.`, `Contexto revela.`, `Tono sarcastico.`]},
  'ortografia':        {fn: (t,r)=>[`Reglas ortograficas en "${t.title}".`, t.tip, `Acentuacion.`, `Puntuacion.`, `Uso correcto.`]},
  'descripcion':       {fn: (t,r)=>[`Describe "${t.title}".`, t.tip, `Caracteristicas.`, `Cualidades.`, `Detalles.`]},
  'narrativa':         {fn: (t,r)=>[`Analiza "${t.title}".`, t.tip, `Personajes.`, `Trama.`, `Conflicto.`]},
  'narrativa-comp':    {fn: (t,r)=>[`"${t.title}" es una narrativa completa.`, t.tip, `Inicio.`, `Desarrollo.`, `Desenlace.`]},
  'explicacion':       {fn: (t,r)=>[`"${t.title}" explica un proceso.`, t.tip, `Paso a paso.`, `Causa-efecto.`, `Secuencia.`]},
  'ejemplificacion':   {fn: (t,r)=>[`En "${t.title}", usa ejemplos.`, t.tip, `Ejemplo concreto.`, `Ejemplo hipotetico.`, `Contraste.`]},
  'interpretacion':    {fn: (t,r)=>[`Interpreta "${t.title}".`, t.tip, `Literal vs figurado.`, `Simbolismo.`, `Significado implicito.`]},
  'cohesion':          {fn: (t,r)=>[`"${t.title}" tiene cohesion textual.`, t.tip, `Conectores.`, `Referentes.`, `Flujo logico.`]},
  'contraste':         {fn: (t,r)=>[`Contrasta "${t.title}".`, t.tip, `Similitudes.`, `Diferencias.`, `Conclusion.`]},
  'secuenciacion':     {fn: (t,r)=>[`Secuencia "${t.title}".`, t.tip, `Primero.`, `Luego.`, `Finalmente.`]},
  'causalidad':        {fn: (t,r)=>[`Causalidad en "${t.title}".`, t.tip, `Causa.`, `Efecto.`, `Relacion.`]},
  'tipos-texto':       {fn: (t,r)=>[`Identifica tipo de texto en "${t.title}".`, t.tip, `Narrativo.`, `Expositivo.`, `Argumentativo.`]},
  'tiempos-verb':      {fn: (t,r)=>[`Tiempos verbales en "${t.title}".`, t.tip, `Pasado.`, `Presente.`, `Futuro.`]},
  'sujeto-pred':       {fn: (t,r)=>[`Sujeto y predicado en "${t.title}".`, t.tip, `Sujeto.`, `Predicado.`, `Oracion.`]},
  'tipos-orac':        {fn: (t,r)=>[`Tipos de oracion en "${t.title}".`, t.tip, `Simple.`, `Compuesta.`, `Compleja.`]},
  'tipeo':             {fn: (t,r)=>[`"${t.title}" es un concepto clave.`, t.tip, `Identificar definicion.`, `Relacionar con otros conceptos.`, `Aplicar en ejemplos.`]},
  'argumentativo':     {fn: (t,r)=>[`"${t.title}" es un texto argumentativo.`, t.tip, `Tesis.`, `Evidencia.`, `Conclusion.`]},
  'expositivo':        {fn: (t,r)=>[`"${t.title}" es un texto expositivo.`, t.tip, `Informar.`, `Objetividad.`, `Estructura logica.`]},
  'resumen-av':        {fn: (t,r)=>[`Resume "${t.title}" avanzadamente.`, t.tip, `Idea principal.`, `Detalles clave.`, `Sintesis.`]},
  'parafrasis':        {fn: (t,r)=>[`Parafrasea "${t.title}".`, t.tip, `Mismo significado.`, `Palabras diferentes.`, `Claridad.`]},
  'analogia':          {fn: (t,r)=>[`Analogia en "${t.title}".`, t.tip, `Relacionar.`, `Comparar.`, `Entender mejor.`]},
  'generalizacion':    {fn: (t,r)=>[`Generaliza en "${t.title}".`, t.tip, `De particular a general.`, `Evidencia.`, `Cuidado con exagerar.`]},
  'ejemplificacion':   {fn: (t,r)=>[`En "${t.title}", usa ejemplos.`, t.tip, `Ejemplo concreto.`, `Ejemplo hipotetico.`, `Contraste.`]},
  'evaluacion':        {fn: (t,r)=>[`Evalua "${t.title}".`, t.tip, `Calidad.`, `Argumentos.`, `Conclusion.`]},
  'velocidad':         {fn: (t,r)=>[`Lectura rapida de "${t.title}".`, t.tip, `Skimming.`, `Scanning.`, `Palabras clave.`]},
  'ambiguedad':        {fn: (t,r)=>[`Detecta ambiguedad en "${t.title}".`, t.tip, `Doble sentido.`, `Contexto.`, `Precision.`]},
  'problema-solucion': {fn: (t,r)=>[`Problema y solucion en "${t.title}".`, t.tip, `Identificar conflicto.`, `Proponer solucion.`, `Evaluar.`]},
  'proposito':         {fn: (t,r)=>[`Proposito de "${t.title}".`, t.tip, `Informar.`, `Persuadir.`, `Entretener.`]},
  'clasificacion':     {fn: (t,r)=>[`Clasifica "${t.title}".`, t.tip, `Categorias.`, `Criterios.`, `Organizar.`]},
  'vocabulario':       {fn: (t,r)=>[`Vocabulario en "${t.title}".`, t.tip, `Definicion.`, `Contexto.`, `Uso correcto.`]},
  'idea-principal':    {fn: (t,r)=>[`Idea principal de "${t.title}".`, t.tip, `Tema central.`, `Resumen.`, `Esencia.`]},
  'ideas-secundarias': {fn: (t,r)=>[`Ideas secundarias en "${t.title}".`, t.tip, `Detalles.`, `Apoyo.`, `Contexto.`]},
  'inferencia':        {fn: (t,r)=>[`Infiere en "${t.title}".`, t.tip, `No esta escrito.`, `Se deduce.`, `Pistas.`]},
  'conectores':        {fn: (t,r)=>[`Conectores en "${t.title}".`, t.tip, `Ademas.`, `Sin embargo.`, `Por lo tanto.`]},
  'tono-actitud':      {fn: (t,r)=>[`Tono en "${t.title}".`, t.tip, `Neutral.`, `Critico.`, `Ironico.`]},
  'argumentacion':     {fn: (t,r)=>[`Argumenta en "${t.title}".`, t.tip, `Tesis.`, `Evidencia.`, `Razonamiento.`]},
  'resumen':           {fn: (t,r)=>[`Resume "${t.title}".`, t.tip, `Idea principal.`, `Detalles.`, `Sintesis.`]},
  'comparacion':       {fn: (t,r)=>[`Compara en "${t.title}".`, t.tip, `Similitudes.`, `Diferencias.`, `Conclusion.`]},
  'temporal':          {fn: (t,r)=>[`Orden temporal en "${t.title}".`, t.tip, `Primero.`, `Luego.`, `Despues.`]},
  'estructura':        {fn: (t,r)=>[`Estructura de "${t.title}".`, t.tip, `Inicio.`, `Desarrollo.`, `Conclusion.`]},
  'repaso-cl':         {fn: (t,r)=>[`Repasa "${t.title}".`, t.tip, `Conceptos clave.`, `Ejercicios.`, `Aplicar.`]},
  'resol-exam':        {fn: (t,r)=>[`Resuelve este problema de "${t.title}".`, t.tip, `Lee atento.`, `Piensa.`, `Responde.`]},
  'resp-exacta':       {fn: (t,r)=>[`Respuesta exacta en "${t.title}".`, t.tip, `Basado en texto.`, `Sin inventar.`, `Verificar.`]},
  'fuentes-multiples': {fn: (t,r)=>[`Multiples fuentes en "${t.title}".`, t.tip, `Comparar.`, `Evaluar.`, `Sintetizar.`]},
  'tiempo-limitado':   {fn: (t,r)=>[`"${t.title}" con tiempo limitado.`, t.tip, `Skimming.`, `Priorizar.`, `Ir a preguntas.`]},
  'comprension-global':{fn: (t,r)=>[`Comprension global de "${t.title}".`, t.tip, `Idea general.`, `Partes.`, `Sintesis.`]},
  'texto-acad':        {fn: (t,r)=>[`Texto academico: "${t.title}".`, t.tip, `Tesis.`, `Metodo.`, `Conclusion.`]},
  'resol-exam':        {fn: (t,r)=>[`Resuelve este problema de "${t.title}".`, t.tip, `Lee atento.`, `Elimina.`, `Verifica.`]},
  'clasi':             {fn: (t,r)=>[`Clasifica "${t.title}".`, t.tip, `Categorias.`, `Criterios.`, `Ordenar.`]},
  'vocabulario':       {fn: (t,r)=>[`Vocabulario en "${t.title}".`, t.tip, `Definicion.`, `Contexto.`, `Uso.`]},
};

const diffOrder = ['basico','intermedio','avanzado'];

function genExercise(slug, tip, theory, diff, idx, r) {
  const vals = [10, 15, 20, 25, 30];
  const a = vals[Math.floor(r()*5)];
  const b = vals[Math.floor(r()*5)];
  return {
    id: `${slug}-${diff[0]}${idx+1}`,
    type: 'multiple-choice',
    difficulty: diff,
    question: theory[idx] || `${tip} - Ejercicio ${idx+1}`,
    options: [
      `${Math.min(a,b)} ${diff==='basico'?'+':'×'} ${Math.max(a,b)} = ${diff==='basico'?a+b:a*b}`,
      `${Math.min(a,b)} ${diff==='basico'?'+':'×'} ${Math.max(a,b)} = ${diff==='basico'?a+b+5:a*b+10}`,
      `${Math.min(a,b)} ${diff==='basico'?'+':'×'} ${Math.max(a,b)} = ${diff==='basico'?a+b-3:a*b-5}`,
      `${Math.min(a,b)} ${diff==='basico'?'+':'×'} ${Math.max(a,b)} = ${diff==='basico'?a+b+10:a*b+20}`,
    ],
    correct: 0,
    explanation: theory[idx] || `${tip}: respuesta correcta`,
  };
}

function genModule(t, idx) {
  const slug = t[0];
  const r = rng(slug.split('').reduce((a,c)=>a+c.charCodeAt(0),0)*1000+idx);
  const questions = [];
  const t0 = types[t[6]] || types['repaso-cl'];
  for (const diff of diffOrder) {
    const theory = t0.fn({title:t[1], tip:t[2]}, r);
    for (let i=0; i<7; i++) {
      questions.push(genExercise(slug, t[2], theory, diff, i, r));
    }
  }
  return {
    slug, title: t[1], tip: t[2],
    theory: {
      basico: t[3],
      intermedio: t[4],
      avanzado: t[5],
    },
    questions,
  };
}

const outDir = path.resolve(__dirname, '../prepa-premium-uv/src/data');

courses.forEach(course => {
  const BATCH_SIZE = 10;
  const batchCount = Math.ceil(course.topics.length / BATCH_SIZE);
  for (let b = 0; b < batchCount; b++) {
    const start = b * BATCH_SIZE;
    const end = Math.min(start + BATCH_SIZE, course.topics.length);
    const batchTopics = course.topics.slice(start, end);
    const modules = batchTopics.map((t, i) => genModule(t, start + i));
    const lines = [];
    lines.push(`import type { CourseModule } from '../lib/course-content';`);
    lines.push(`export const ${course.prefix}Batch${b+1}: CourseModule[] = ${JSON.stringify(modules, null, 2)};`);
    const outFile = path.join(outDir, `${course.prefix}-batch-${b+1}.ts`);
    fs.writeFileSync(outFile, lines.join('\n'), 'utf8');
    console.log(`  ${course.prefix}-batch-${b+1}.ts (${modules.length} modules)`);
  }
});

console.log('Done!');
