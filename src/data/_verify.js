var fs = require('fs');
var c = fs.readFileSync('C:/Users/USUARIO/OneDrive/Documents/Default Project/src/data/geo-extra-batch-e.ts', 'utf8');
console.log('Lines:', c.split('\n').length);
console.log('Has import:', c.includes('import type'));
console.log('Has export:', c.includes('export const'));
var m = c.match(/"[a-z][\w-]*":\s*\[/g);
console.log('Slugs:', m ? m.length : 0);
// Count exercises per slug
var idMatches = c.match(/id:\s*\d+/g);
console.log('Total exercises:', idMatches ? idMatches.length : 0);
// Check IDs range
if (idMatches) {
  var ids = idMatches.map(function(x) { return parseInt(x.replace('id: ', '').replace('id:', '').trim()); });
  console.log('ID range:', Math.min.apply(null, ids), '-', Math.max.apply(null, ids));
}
