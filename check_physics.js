const fs = require('fs');
const path = require('path');

// Read the $slug.tsx file
const filePath = path.join('src', 'routes', 'cursos', '$slug.tsx');
const data = fs.readFileSync(filePath, 'utf8');

console.log('=== File: $slug.tsx ===');
console.log('Has fisica:', data.includes('fisica'));
console.log('Has physics (Física/Fisica):', data.includes('Física') || data.includes('Fisica') || data.includes('física'));
console.log('Has download:', data.includes('download') || data.includes('PDF') || data.includes('descargar'));

// Check for study guide
console.log('Has study guide:', data.includes('guia') || data.includes('estudio') || data.includes('study'));

// Show relevant sections
const fisicaIndex = data.indexOf('fisica');
if (fisicaIndex !== -1) {
    console.log('\\nPhysics section found at index', fisicaIndex);
    console.log('Context around fisica:', data.substring(fisicaIndex - 50, fisicaIndex + 100));
}

// Check for download/PDF links
const downloadMatches = data.match(/download|PDF|descargar/gi);
console.log('Download/PDF mentions:', downloadMatches ? downloadMatches.length + ' mentions' : 'none');

// Show a sample of the file content around important sections
const studyGuideIndex = data.indexOf('estudio') !== -1 ? data.indexOf('estudio') : -1;
if (studyGuideIndex !== -1) {
    console.log('\\nStudy guide section found at index', studyGuideIndex);
    console.log('Context:', data.substring(studyGuideIndex - 20, studyGuideIndex + 100));
}