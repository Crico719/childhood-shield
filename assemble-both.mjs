import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const srcDir = 'C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib';
const dataDir = 'C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\src\\data';
const courseContentPath = join(srcDir, 'course-content.ts');

const content = readFileSync(courseContentPath, 'utf-8');

// Find the geometry and cokito section boundaries
const geoStart = content.indexOf('"geometria": [');
const cokitoStart = content.indexOf('"cokito-rm": [');
const historiaStart = content.indexOf('const historiaModulesPart1');

// Find the closing of each section
// Geometry section: from "geometria": [ to just before "cokito-rm": [
// We need to find the last ] before cokitoStart
let geoEnd = cokitoStart;
// Back up to find the ], line
while (content.substring(geoEnd - 5, geoEnd).trim() !== ']' && geoEnd > geoStart) {
  geoEnd--;
}
// Now geoEnd points to the ] that closes the geometry array
// We want to insert before this ]
const geoCloseBracket = geoEnd;

// Cokito section: from "cokito-rm": [ to the closing };
// The cokito array closes before the }; that closes courseContent
let cokitoEnd = historiaStart;
while (content.substring(cokitoEnd - 5, cokitoEnd).trim() !== ']' && cokitoEnd > cokitoStart) {
  cokitoEnd--;
}
const cokitoCloseBracket = cokitoEnd;

console.log(`Geometry array closes at char ${geoCloseBracket}`);
console.log(`Cokito array closes at char ${cokitoCloseBracket}`);

// Extract existing geometry modules (for slug checking)
const geoSection = content.substring(geoStart, cokitoStart);
const existingGeoSlugs = [...geoSection.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
console.log(`Existing geometry modules: ${existingGeoSlugs.length}`);

// Extract existing cokito modules
const cokitoSection = content.substring(cokitoStart, historiaStart);
const existingCokitoSlugs = [...cokitoSection.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
console.log(`Existing cokito modules: ${existingCokitoSlugs.length}`);

// Read and extract modules from geo batches
function extractModules(filePath) {
  const batchContent = readFileSync(filePath, 'utf-8');
  // Find the array content between the first [ and last ];
  const firstBracket = batchContent.indexOf('[');
  const lastBracket = batchContent.lastIndexOf(']');
  if (firstBracket === -1 || lastBracket === -1) {
    console.error(`Could not parse ${filePath}`);
    return '';
  }
  return batchContent.substring(firstBracket + 1, lastBracket);
}

// Collect all new geometry modules
let newGeoModules = '';
for (let i = 1; i <= 7; i++) {
  const filePath = join(dataDir, `geo-batch-${i}.ts`);
  const modules = extractModules(filePath);
  newGeoModules += modules + ',\n';
  console.log(`Loaded geo-batch-${i}.ts`);
}

// Collect all new cokito modules
let newCokitoModules = '';
for (let i = 1; i <= 6; i++) {
  const filePath = join(dataDir, `rm-batch-${i}.ts`);
  const modules = extractModules(filePath);
  newCokitoModules += modules + ',\n';
  console.log(`Loaded rm-batch-${i}.ts`);
}

// Check for duplicate slugs
const newGeoSlugs = [...newGeoModules.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
const newCokitoSlugs = [...newCokitoModules.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);

const geoDupes = newGeoSlugs.filter(s => existingGeoSlugs.includes(s));
const cokitoDupes = newCokitoSlugs.filter(s => existingCokitoSlugs.includes(s));

if (geoDupes.length) {
  console.error(`DUPLICATE GEO SLUGS: ${geoDupes.join(', ')}`);
  process.exit(1);
}
if (cokitoDupes.length) {
  console.error(`DUPLICATE COKITO SLUGS: ${cokitoDupes.join(', ')}`);
  process.exit(1);
}

console.log(`\nNew geometry modules: ${newGeoSlugs.length}`);
console.log(`New cokito modules: ${newCokitoSlugs.length}`);

// Build the new file
// Part 1: Everything up to the geometry closing bracket
const beforeGeoClose = content.substring(0, geoCloseBracket);
// Part 2: New geo modules
// Part 3: From geometry close to cokito close
const betweenGeoAndCokitoClose = content.substring(geoCloseBracket, cokitoCloseBracket);
// Part 4: New cokito modules
// Part 5: From cokito close to end
const afterCokitoClose = content.substring(cokitoCloseBracket);

const newContent = beforeGeoClose + ',\n' + newGeoModules + betweenGeoAndCokitoClose + ',\n' + newCokitoModules + afterCokitoClose;

writeFileSync(courseContentPath, newContent, 'utf-8');

// Final counts
const totalGeo = [...newContent.matchAll(/"geometria"/g)].length;
const allSlugs = [...newContent.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
console.log(`\nAssembly complete!`);
console.log(`Total modules: ${allSlugs.length}`);
