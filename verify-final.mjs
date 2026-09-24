import { readFileSync } from 'fs';
const c = readFileSync('C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\course-content.ts', 'utf-8');

const geoStart = c.indexOf('"geometria": [');
const cokitoStart = c.indexOf('"cokito-rm": [');
const historiaStart = c.indexOf('const historiaModulesPart1');

const geoSection = c.substring(geoStart, cokitoStart);
const cokitoSection = c.substring(cokitoStart, historiaStart);
const historiaSection = c.substring(historiaStart);

const geoSlugs = [...geoSection.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
const cokitoSlugs = [...cokitoSection.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
const historiaSlugs = [...historiaSection.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);

console.log(`geometria: ${geoSlugs.length} modules`);
console.log(`cokito-rm: ${cokitoSlugs.length} modules`);
console.log(`historia: ${historiaSlugs.length} modules`);
console.log(`TOTAL: ${geoSlugs.length + cokitoSlugs.length + historiaSlugs.length}`);

// Check for duplicates
const allSlugs = [...geoSlugs, ...cokitoSlugs, ...historiaSlugs];
const dupes = allSlugs.filter((s, i) => allSlugs.indexOf(s) !== i);
if (dupes.length) {
  console.log(`\nDUPLICATE SLUGS: ${[...new Set(dupes)].join(', ')}`);
} else {
  console.log(`\nNo duplicate slugs across all subjects.`);
}

// Check file integrity - find closing bracket of courseContent
const lines = c.split('\n');
console.log(`\nTotal lines: ${lines.length}`);

// Verify key structural elements
const hasGeoEnd = c.includes('"cokito-rm": [');
const hasHistAssign = c.includes('courseContent["historia"] = [...');
console.log(`Has cokito-rm section: ${hasGeoEnd}`);
console.log(`Has historia assignment: ${hasHistAssign}`);
