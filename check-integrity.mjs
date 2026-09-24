import { readFileSync } from 'fs';
const c = readFileSync('C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\course-content.ts', 'utf-8');
const slugs = [...c.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
console.log('Total modules:', slugs.length);
const dupes = slugs.filter((s,i) => slugs.indexOf(s) !== i);
if(dupes.length) { console.log('DUPLICATE SLUGS:', [...new Set(dupes)]); } else { console.log('No duplicate slugs.'); }
const ids = [...c.matchAll(/id: (\d+)/g)].map(m => +m[1]);
const dupeIds = ids.filter((s,i) => ids.indexOf(s) !== i);
if(dupeIds.length) { console.log('DUPLICATE IDS:', [...new Set(dupeIds)]); } else { console.log('No duplicate IDs.'); }
const unmatched = slugs.filter(s => s.includes('${'));
if(unmatched.length) console.log('Template issues:', unmatched.length);
