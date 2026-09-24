const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../prepa-premium-uv/src/lib/course-content.ts');
let content = fs.readFileSync(file, 'utf8');

const courses = [
  { prefix: 'cl', name: 'comprension-lectora', count: 8 },
  { prefix: 'dc', name: 'derecho-ciudadania', count: 7 },
  { prefix: 'ec', name: 'economia-basica', count: 7 },
  { prefix: 'en', name: 'ingles', count: 7 },
];

// Add imports after last existing import
const lastImportIdx = content.lastIndexOf("import ");
const lastImportLineEnd = content.indexOf('\n', lastImportIdx);
const importBlock = '\n' + courses.map(c => 
  Array.from({length: c.count}, (_, i) => 
    `import { ${c.prefix}Batch${i+1} } from './data/${c.prefix}-batch-${i+1}';`
  ).join('\n')
).join('\n');

content = content.slice(0, lastImportLineEnd + 1) + importBlock + content.slice(lastImportLineEnd + 1);

// Add courseContent assignments at the end
const assignmentBlock = '\n' + courses.map(c => {
  const batches = Array.from({length: c.count}, (_, i) => `${c.prefix}Batch${i+1}`).join(', ');
  return `courseContent['${c.name}'] = [...${batches}];`;
}).join('\n');

// Find last courseContent assignment or end of file
const lastAssignment = content.lastIndexOf("courseContent[");
if (lastAssignment > 0) {
  // Find end of that line/assignment
  const lineEnd = content.indexOf('\n', lastAssignment);
  if (lineEnd > 0) {
    content = content.slice(0, lineEnd + 1) + assignmentBlock + '\n';
  } else {
    content += assignmentBlock + '\n';
  }
} else {
  content += assignmentBlock + '\n';
}

fs.writeFileSync(file, content, 'utf8');
console.log('course-content.ts updated!');
console.log('Imports added for ' + courses.map(c => c.name).join(', '));
console.log('Assignments added for ' + courses.map(c => c.name).join(', '));
