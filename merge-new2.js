const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../prepa-premium-uv/src/lib/course-content.ts');
let content = fs.readFileSync(file, 'utf8');

const courses = [
  { prefix: 'fi', name: 'fisica', count: 7 },
  { prefix: 'qu', name: 'quimica', count: 5 },
  { prefix: 'bi', name: 'biologia', count: 5 },
  { prefix: 'le', name: 'letras', count: 6 },
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

const lastAssignment = content.lastIndexOf("courseContent[");
if (lastAssignment > 0) {
  const lineEnd = content.indexOf('\n', lastAssignment);
  if (lineEnd > 0) {
    content = content.slice(0, lineEnd + 1) + assignmentBlock + '\n';
  }
}

fs.writeFileSync(file, content, 'utf8');
console.log('course-content.ts updated!');
