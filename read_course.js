const fs = require('fs');

// Read the file using the exact path from the directory listing
const data = fs.readFileSync('src/routes/cursos/$slug.tsx', 'utf8');

console.log('=== File: $slug.tsx ===');
console.log('File size:', data.length, 'bytes');
console.log('---');

// Check for key content
const checks = {
    'fisica': data.includes('fisica'),
    'Física': data.includes('Física'),
    'Fisica': data.includes('Fisica'), 
    'física': data.includes('física'),
    'download': data.includes('download'),
    'PDF': data.includes('PDF'),
    'descargar': data.includes('descargar'),
    'guia': data.includes('guia'),
    'estudio': data.includes('estudio'),
    'study': data.includes('study')
};

for (const [key, value] of Object.entries(checks)) {
    console.log('Has ' + key + ':', value);
}

// Print first 500 chars
console.log('--- First 500 chars ---');
console.log(data.substring(0, 500));

// Print last 500 chars
console.log('--- Last 500 chars ---');
console.log(data.substring(data.length - 500));

// Search for fisica context
const fisicaIndex = data.indexOf('fisica');
if (fisicaIndex !== -1) {
    console.log('--- fisica found at index', fisicaIndex, '---');
    console.log(data.substring(fisicaIndex - 30, fisicaIndex + 80));
}

// Search for download/PDF context
const downloadIndex = data.indexOf('download');
if (downloadIndex !== -1) {
    console.log('--- download found at index', downloadIndex, '---');
    console.log(data.substring(downloadIndex - 30, downloadIndex + 80));
}

// Search for guia/estudio context  
const estudioIndex = data.indexOf('estudio');
if (estudioIndex !== -1) {
    console.log('--- estudio found at index', estudioIndex, '---');
    console.log(data.substring(estudioIndex - 30, estudioIndex + 80));
}