const fs=require("fs"),P=require("path");
const D="C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\src\\data";
let gid=50001;
const I=()=>gid++;
const M=(s,ti,tp,th,ex)=>({slug:s,illustrationSummary:`Diagrama de ${ti} con conceptos principales.`,tip:tp,studyGuide:`## ${ti}\n\n${th.map(t=>`### ${t.title}\n${t.lines.join('. ')}`).join('\n\n')}`,theory:th,illustrations:[`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold" text-anchor="middle">${ti}</text><rect x="30" y="40" width="240" height="120" fill="none" stroke="#2563eb" stroke-width="2" rx="8"/><text x="150" y="105" font-family="Arial" font-size="11" fill="#666" text-anchor="middle">Conceptos y fórmulas</text></svg>`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><circle cx="150" cy="100" r="50" fill="#2563eb20" stroke="#2563eb" stroke-width="2"/><text x="150" y="105" font-family="Arial" font-size="11" fill="#2563eb" text-anchor="middle">Ejemplo</text></svg>`],exercises:ex});
const E=(q,o,a,e,d)=>({id:I(),question:q,options:o,correctIndex:a,explanation:e,difficulty:d});
function W(n,m){const v="aritBatch"+n;let c=`import type { CourseModule } from "../../lib/course-content";\n\nexport const ${v}: CourseModule[] = ${JSON.stringify(m)};\n`;fs.writeFileSync(P.join(D,`arit-batch-${n}.ts`),c,"utf8");console.log(`Wrote arit-batch-${n}.ts: ${m.length} modules, ${(c.length/1024).toFixed(0)}KB`);}

// Load topic data
const topics = require("./ari-topics.js");
const batchSize = 10;
for(let i=0;i<topics.length;i+=batchSize){
  const batch = topics.slice(i,i+batchSize).map(t=>{
    const exs=[];
    for(const d of["basico","basico","basico","basico","basico","basico","basico","intermedio","intermedio","intermedio","intermedio","intermedio","intermedio","intermedio","avanzado","avanzado","avanzado","avanzado","avanzado","avanzado","avanzado"]){
      const bank=t.ex[d];
      const q=bank[exs.length%bank.length];
      exs.push(E(q.q,q.o,q.a,q.e,d));
    }
    return M(t.slug,t.title,t.tip,t.th,exs);
  });
  W(Math.floor(i/batchSize)+1,batch);
}
console.log(`Total IDs used: ${gid-50001}`);
