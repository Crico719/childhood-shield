const fs = require('fs');
const path = require('path');

// Try to read the file using readdir first to confirm it exists
const coursesDir = path.join('src', 'routes', 'cursos');
const files = fs.readdirSync(coursesDir);
console.log('Files in courses dir:', files);

for (const f of files) {
    const filePath = path.join(coursesDir, f);
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log('File:', f);
        console.log('  Has fisica:', data.includes('fisica'));
        console.log('Has download:', data.includes('download') || data.includes('PDF'));
        console.log('Has study guide:', data.includes('guia') || data.includes('estudio') || data.includes('study'));
        console.log('---');
    } catch (e) {
        console.log('Error reading', f, ':', e.message);
    }
}