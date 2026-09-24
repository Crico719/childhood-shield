import { readFileSync } from 'fs';
const c = readFileSync('C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\course-content.ts', 'utf-8');

// Find sections by looking at the courseContent object keys
const geoStart = c.indexOf('"geometria": [');
const cokitoStart = c.indexOf('"cokito-rm": [');
const historiaStart = c.indexOf('const historiaModulesPart1');

const geoSection = c.substring(geoStart, cokitoStart);
const cokitoSection = c.substring(cokitoStart, historiaStart);

const geoSlugs = [...geoSection.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
const cokitoSlugs = [...cokitoSection.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
const historiaSlugs = [...c.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]).filter(s => !geoSlugs.includes(s) && !cokitoSlugs.includes(s));

console.log(`geometria: ${geoSlugs.length} modules`);
console.log(`cokito-rm: ${cokitoSlugs.length} modules`);
console.log(`historia: ${historiaSlugs.length} modules`);
console.log(`\nGeometría slugs: ${geoSlugs.join(', ')}`);
console.log(`\nCokito slugs: ${cokitoSlugs.join(', ')}`);
