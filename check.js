const f=require('fs').readFileSync('C:/Users/USUARIO/OneDrive/Documents/Default Project/src/data/geo-extra-exercises-6.ts','utf8');
const ids=[...f.matchAll(/id: (\d+)/g)].map(m=>parseInt(m[1]));
console.log('Total:', ids.length);
const expected = [];
for(let i=0;i<10;i++){
  const start = 600 + i*21;
  for(let j=0;j<21;j++) expected.push(start+j);
}
const missing = expected.filter(x => !ids.includes(x));
console.log('Missing IDs:', missing.join(', '));
console.log('Unexpected IDs:', ids.filter(x => !expected.includes(x)).join(', '));
