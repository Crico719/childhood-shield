const fs = require('fs');
const path = require('path');

// Try different paths
const possiblePaths = [
    path.join('src', 'routes', 'cursos', '$slug.tsx'),
    path.join('src', 'routes', 'cursos', 'index.tsx')
];

for (const p of possiblePaths) {
    try {
        const data = fs.readFileSync(p, 'utf8');
        console.log('File:', p);
        console.log('Has fisica:', data.includes('fisica'));
        console.log('Has download:', data.includes('download') || data.includes('PDF'));
        console.log('Has study guide:', data.includes('guia') || data.includes('estudio') || data.includes('study'));
        console.log('---');
    } catch (e) {
        console.log('Error reading', p, ':', e.message);
    }
}