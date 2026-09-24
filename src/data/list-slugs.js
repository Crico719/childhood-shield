const fs = require('fs');
const c = fs.readFileSync('C:/Users/USUARIO/OneDrive/Documents/Default Project/cokito-rm-modules.ts', 'utf8');
const m = [...c.matchAll(/slug: "([^"]+)"/g)];
m.forEach(x => console.log(x[1]));
console.log('Total:', m.length);
