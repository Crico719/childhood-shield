const fs = require('fs');
const path = 'C:/Users/USUARIO/OneDrive/Documents/Default Project/src/data/';
const files = ['rm-batch-1.ts','rm-batch-2.ts','rm-batch-3.ts','rm-batch-4.ts','rm-batch-5.ts','rm-batch-6.ts','rm-extra-exercises.ts','rm-extra-exercises-2.ts','rm-extra-exercises-3.ts'];
const allSlugs = new Set();
files.forEach(f => {
  try {
    const c = fs.readFileSync(path + f, 'utf8');
    const m = [...c.matchAll(/slug: "([^"]+)"/g)];
    if (m.length === 0) {
      // Try export pattern
      const m2 = [...c.matchAll(/"([a-z0-9-]+)":\s*\[/g)];
      m2.forEach(x => { if (!x[1].includes('/') && x[1].length > 3) allSlugs.add(x[1]); });
    } else {
      m.forEach(x => allSlugs.add(x[1]));
    }
    console.log(f + ':', m.length > 0 ? m.map(x=>x[1]).join(', ') : '(checking keys)');
  } catch(e) {}
});
console.log('\nAll unique slugs:', [...allSlugs].sort().join('\n'));
console.log('Total unique:', allSlugs.size);
