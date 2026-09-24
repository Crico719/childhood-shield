const fs = require('fs');
let content = fs.readFileSync('src/lib/data.ts', 'utf8');

// Remove courseLessons entries for deleted courses
const toRemove = ['cokito-rm', 'geometria', 'geografia'];
toRemove.forEach(slug => {
  const regex = new RegExp(`  "${slug}": \\[\\s*\\{[\\s\\S]*?\\},?\\s*\\],?\\n`, 'g');
  content = content.replace(regex, '');
});

// Remove any remaining blank lines from removal
content = content.replace(/\n\n\n+/g, '\n\n');

fs.writeFileSync('src/lib/data.ts', content, 'utf8');
console.log('Cleaned up courseLessons for:', toRemove.join(', '));
