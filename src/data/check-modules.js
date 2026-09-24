const fs = require('fs');
const c = fs.readFileSync('C:/Users/USUARIO/OneDrive/Documents/Default Project/src/data/rm-extra-exercises.ts', 'utf8');
const m = c.match(/^  "[^"]+":/gm);
if (m) m.forEach(x => console.log(x));
console.log('\nTotal modules:', m ? m.length : 0);

const count = c.split('\n').length;
console.log('Total lines:', count);
