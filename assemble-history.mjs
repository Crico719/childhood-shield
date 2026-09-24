import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = 'C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib';
const dataDir = join(__dirname, 'src', 'data');

// Read existing course-content.ts
const courseContentPath = join(srcDir, 'course-content.ts');
const content = readFileSync(courseContentPath, 'utf-8');

// Read all batch files
const batchFiles = [
  'historia-batch-1.ts',
  'historia-batch-2.ts',
  'historia-batch-3.ts',
  'historia-batch-4.ts',
  'historia-batch-5.ts',
  'historia-batch-6.ts'
];

// Extract module arrays from each batch
const allNewModules = [];

for (const file of batchFiles) {
  const filePath = join(dataDir, file);
  const batchContent = readFileSync(filePath, 'utf-8');
  
  // Extract the array content between [ and ];
  // Match: export const historiaBatchN = [ ... ];
  const match = batchContent.match(/export\s+const\s+historiaBatch\d+\s*=\s*\[([\s\S]*?)\];/);
  if (match) {
    allNewModules.push(match[1].trim());
    console.log(`Loaded ${file} (${match[1].trim().length} chars)`);
  } else {
    console.error(`Could not parse ${file}`);
  }
}

// Create new part declaration and assignment
const newPartName = 'historiaModulesPart4';
const newModulesStr = allNewModules.join(',\n');

// Build the new lines to insert before the final assignment
const newPartDeclaration = `\nconst ${newPartName}: CourseModule[] = [\n${newModulesStr}\n];\n`;

// Replace the final assignment line to include new part
const oldAssignment = 'courseContent["historia"] = [...historiaModulesPart1, ...historiaModulesPart2, ...historiaModulesPart3];';
const newAssignment = `courseContent["historia"] = [...historiaModulesPart1, ...historiaModulesPart2, ...historiaModulesPart3, ...${newPartName}];`;

const newContent = content.replace(oldAssignment, newPartDeclaration + '\n' + newAssignment);

if (newContent === content) {
  console.error('ERROR: Could not find the assignment line to replace!');
  process.exit(1);
}

writeFileSync(courseContentPath, newContent, 'utf-8');

// Count modules
const moduleCount = (newContent.match(/slug: "/g) || []).length;
console.log(`\nAssembly complete!`);
console.log(`Total modules in course-content.ts: ${moduleCount}`);
console.log(`New modules added: ${newModulesStr.split('\n{').length - 1}`);
