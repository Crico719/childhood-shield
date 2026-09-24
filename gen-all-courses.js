#!/usr/bin/env node
// Master generator for ALL courses: aritmetica, algebra, ciencia
const fs = require('fs'), P = require('path');
let gid = 20000; // start IDs for new courses
const R = (a,b) => Math.floor(Math.random()*(b-a+1))+a;
const E = (q,o,a,e,d) => ({id:gid++,question:q,options:o,correctIndex:a,explanation:e,difficulty:d||'intermedio'});
const SH = a => {const b=[...a];for(let i=b.length-1;i>0;i--){const j=R(0,i);[b[i],b[j]]=[b[j],b[i]];}return b;};
const MO = (c,w) => {const o=SH([c,...w]);return{opts:o,idx:o.indexOf(c)};};

// Exercise generator for compact templates
function genExercises(slug, type, E, R, MO) {
  const ex = [];
  // Generic exercise generation based on topic patterns
  const addBasico = (q,o,ans,exp) => { ex.push(E(q,o,o.indexOf(ans),exp,'basico')); };
  const addInter = (q,o,ans,exp) => { ex.push(E(q,o,o.indexOf(ans),exp,'intermedio')); };
  const addAvanz = (q,o,ans,exp) => { ex.push(E(q,o,o.indexOf(ans),exp,'avanzado')); };

  // Generate 7 basico, 7 intermedio, 7 avanzado per topic
  const a=R(1,15),b=R(1,15),c=R(2,8),d=R(2,5);

  switch(type) {
    case 'eq-basicas': {
      const x=R(1,10);o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`${x}+3=${x+3}. x=`,o.opts,o.idx,x+'.'));
      const o2=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`2x=${2*x}. x=`,o2.opts,o2.idx,x+'.'));
      o=MO('Variable',['Constante','Numero','Letra']);ex.push(E('En 2x+1=5, x es:',o.opts,o.idx,'Variable.'));
      o=MO('Operacion inversa',['Igual','Sumar','Multiplicar']);ex.push(E('Para despejar +3:',o.opts,o.idx,'Restar 3.'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`${x}-5=${x-5}. x=`,o.opts,o.idx,x+'.'));
      o=MO('Una solucion',['Infinitas','Ninguna','Dos']);ex.push(E('Ecuacion lineal tiene:',o.opts,o.idx,'Una solucion.'));
      o=MO('Siempre verdadera',['Falso','Depende','A veces']);ex.push(E('a+b=b+a es:',o.opts,o.idx,'Siempre verdadera.'));
      const y=R(1,8);o=MO(String(y),[String(y+1),String(y-1)]);ex.push(E(`x/3=${y}. x=`,o.opts,o.idx,3*y+'.'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`x-${R(3,7)}=${x-R(3,7)}. x=`,o.opts,o.idx,x+'.','intermedio'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`${R(2,4)}x+${R(1,5)}=${R(2,4)*x+R(1,5)}. x=`,o.opts,o.idx,x+'.','intermedio'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`3x-${R(1,8)}=${3*x-R(1,8)}. x=`,o.opts,o.idx,x+'.','intermedio'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`(x-${R(1,3)})=0. x=`,o.opts,o.idx,R(1,3)+'.','intermedio'));
      o=MO('x+a=b',['x=b-a','x=a-b','x=b+a']);ex.push(E('Para x+a=b:',o.opts,o.idx,'x=b-a.'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`5x/${d}=${5*x/d}. x=`,o.opts,o.idx,x+'.','avanzado'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`(${R(2,3)}x+${R(1,5)})/${R(1,3)}=${R(2,3)*x+R(1,5)}/${R(1,3)}. x=`,o.opts,o.idx,x+'.','avanzado'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`${R(2,5)}(x-${R(1,3)})=0. x=`,o.opts,o.idx,R(1,3)+'.','avanzado'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`|x-${R(3,8)}|=${Math.abs(x-R(3,8))}. x=`,o.opts,o.idx,x+'.','avanzado'));
      o=MO('Infinitas',['Una','Ninguna','Dos']);ex.push(E('0x+0=0:',o.opts,o.idx,'Infinitas soluciones.'));
      o=MO('No tiene',['x=0','x=1','Infinitas']);ex.push(E('0x+5=0:',o.opts,o.idx,'No tiene solucion.'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`2(x-${R(1,5)})=${2*(x-R(1,5))}. x=`,o.opts,o.idx,x+'.','avanzado'));
      break;
    }
    case 'eq-lineales': {
      const x=R(1,8),y=R(1,8);const a1=R(1,3),b1=R(1,3),c1=a1*x+b1*y;
      let o=MO(String(x),[String(y),String(x+1)]);ex.push(E(`x+y=${x+y}, x-y=${x-y}. x=`,o.opts,o.idx,x+'.'));
      o=MO('Sustitucion',['Eliminacion','Grafica','Adivinacion']);ex.push(E('Metodo 1:',o.opts,o.idx,'Sustitucion.'));
      o=MO('Eliminar',['Sumar','Graficar','Adivinar']);ex.push(E('Metodo 2:',o.opts,o.idx,'Eliminar.'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E(`${a1}x+${b1}y=${c1}. x=`,o.opts,o.idx,x+'.','intermedio'));
      o=MO(String(y),[String(x),String(y+1)]);ex.push(E(`x+y=${x+y}, x-y=${x-y}. y=`,o.opts,o.idx,y+'.','intermedio'));
      o=MO('2 variables',['3','1','4']);ex.push(E('Sistema 2x2:',o.opts,o.idx,'2 incognitas.'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E(`x+y=${x+y}. x=`,o.opts,o.idx,x+'.','intermedio'));
      o=MO('Interseccion',['Paralelas','Coincidentes']);ex.push(E('Solucion grafica:',o.opts,o.idx,'Punto corte.'));
      o=MO('Sin solucion',['Una','Infinitas']);ex.push(E('Paralelas:',o.opts,o.idx,'Sin solucion.'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E(`${a1}x+${b1}y=${c1}. x=`,o.opts,o.idx,x+'.','avanzado'));
      o=MO(String(y),[String(x),String(y+1)]);ex.push(E(`${a1}x+${b1}y=${c1}. y=`,o.opts,o.idx,y+'.','avanzado'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E('Sistema resuelto, x=:',o.opts,o.idx,x+'.','avanzado'));
      o=MO(String(y),[String(x),String(y+1)]);ex.push(E('Sistema resuelto, y=:',o.opts,o.idx,y+'.','avanzado'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E('Verificar x='+x+', y='+y+':',o.opts,o.idx,'Sustituir.'));
      o=MO('Unica',['Ninguna','Infinitas']);ex.push(E('Si D!=0:',o.opts,o.idx,'Unica.'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E(`3x+2y=${3*x+2*y}, x+y=${x+y}. x=`,o.opts,o.idx,x+'.','avanzado'));
      o=MO(String(y),[String(x),String(y+1)]);ex.push(E(`3x+2y=${3*x+2*y}, x+y=${x+y}. y=`,o.opts,o.idx,y+'.','avanzado'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E('Sistema verbal: x=:',o.opts,o.idx,x+'.','avanzado'));
      o=MO('Dos',['Una','Tres','Cuatro']);ex.push(E('Variables en 2x2:',o.opts,o.idx,'Dos.'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E('Metodo Cramer, x=:',o.opts,o.idx,x+'.','avanzado'));
      break;
    }
    default: {
      // Generic 21-question generator for any topic
      for(let i=0;i<21;i++){
        const a1=R(1,20),b1=R(1,20);
        const ans=a1+b1;
        const opts=MO(String(ans),[String(ans+R(1,5)),String(ans-R(1,3)),String(ans*2)]);
        const d=i<7?'basico':i<15?'intermedio':'avanzado';
        ex.push(E(`${a1}+${b1}=`,opts.opts,opts.idx,a1+'+'+b1+'='+ans+'.',d));
      }
      break;
    }
  }
  return ex.slice(0,21);
}

// Load compact topic definitions
let allTopicDefs = [];
try { allTopicDefs = allTopicDefs.concat(require('./topic-definitions')); } catch(e) {}
try { allTopicDefs = allTopicDefs.concat(require('./topic-defs-p2')); } catch(e) {}
const compactDefs = require('./compact-topics');
const compactAlDefs = require('./compact-topics-al');

// Generate for each course
function generateCourse(courseName, topicDefs, exerciseGen) {
  const allTopics = [];
  gid = 20000; // reset per course

  for (const [s, t, p, b, i, a, type] of topicDefs) {
    const exArr = exerciseGen(s, type, E, R, MO);
    allTopics.push({
      s, t, p, b, i, a,
      ex: exArr.map(e => [e.question, e.options, e.correctIndex, e.explanation, e.difficulty])
    });
  }

  // Split into batches of 10
  const batchSize = 10;
  const batches = [];
  for (let i = 0; i < allTopics.length; i += batchSize) {
    batches.push(allTopics.slice(i, i + batchSize));
  }

  console.log(`\n=== ${courseName} ===`);
  console.log(`Total topics: ${allTopics.length}, Total exercises: ${gid - 20000}`);
  console.log(`Batches: ${batches.length}`);

  const batchFiles = [];
  for (let bi = 0; bi < batches.length; bi++) {
    const batch = batches[bi];
    const varName = `${courseName}Batch${bi+1}`;
    const fileName = `${courseName}-batch-${bi+1}.ts`;
    const filePath = `src/data/${fileName}`;

    const content = `import type { CourseModule } from "../../lib/course-content";

export const ${varName}: CourseModule[] = ${JSON.stringify(batch, null, 0).replace(/"slug"/g, '"slug"').replace(/"illustrationSummary"/g, '"illustrationSummary"')};
`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Wrote ${fileName}: ${batch.length} modules`);
    batchFiles.push(varName);
  }

  return { batchFiles, count: batches.length };
}

// Aritmetica - filter only aritmetica-* topics from compact-topics.js
const aritTopics = compactDefs.filter(t => t[0].startsWith('aritmetica')).map(t => [t[0],t[1],t[2],t[3],t[4],t[5],t[6]]);
// Also add hand-crafted topics from p1
// p1 topics are in ari-topics-p1.js with different format - skip for now since gen-all-topics.js handles them

// Algebra (from compact-topics-al.js, first 40 are algebra)
const alTopics = compactAlDefs.filter(t => t[0].startsWith('algebra-')).map(t => [t[0],t[1],t[2],t[3],t[4],t[5],t[6]]);
// Ciencia (from compact-topics-al.js, remaining are ciencia)
const ciTopics = compactAlDefs.filter(t => t[0].startsWith('ciencia-')).map(t => [t[0],t[1],t[2],t[3],t[4],t[5],t[6]]);

console.log('Algebra topics:', alTopics.length);
console.log('Ciencia topics:', ciTopics.length);

const aritResult = generateCourse('arit', aritTopics, genExercises);
const alResult = generateCourse('algebra', alTopics, genExercises);
const ciResult = generateCourse('ciencia', ciTopics, genExercises);

// Generate merge script
const mergeScript = `#!/usr/bin/env node
const fs = require('fs');
const path = 'src/lib/course-content.ts';
let content = fs.readFileSync(path, 'utf8');

function addImportAndAssign(courseName, batchFiles, varPrefix) {
  if (content.includes(batchFiles[0])) return;

  const importLines = batchFiles.map(f => \`import { \${f} } from "./data/\${f.replace(/Batch/, '-batch-').toLowerCase().replace(/([0-9]+)/, '-\$1')}"\\n\`).join('');

  const lines = content.split('\\n');
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImportIdx = i;
  }
  if (lastImportIdx >= 0) {
    lines.splice(lastImportIdx + 1, 0, importLines);
  } else {
    lines.unshift(importLines);
  }
  content = lines.join('\\n');

  const assignLine = \`\\ncourseContent["\${courseName}"] = [...\${batchFiles.join(', ...')}];\\n\`;
  content += assignLine;
}

addImportAndAssign('aritmetica', ${JSON.stringify(aritResult.batchFiles)});
addImportAndAssign('algebra', ${JSON.stringify(alResult.batchFiles)});
addImportAndAssign('ciencia', ${JSON.stringify(ciResult.batchFiles)});

fs.writeFileSync(path, content, 'utf8');
console.log('All courses merged into course-content.ts');
`;

fs.writeFileSync('merge-all.js', mergeScript, 'utf8');
console.log('\\nWrote merge-all.js');
