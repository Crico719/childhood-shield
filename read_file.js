const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'routes', 'cursos', '$slug.tsx');

try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('SUCCESS - File read correctly');
    console.log('File length:', data.length);
    
    // Check for key content
    const checks = {
        'hasLoader': data.includes('loader'),
        'hasCourseContent': data.includes('courseContent'),
        'hasImportData': data.includes("import.*data"),
        'hasFisica': data.includes('fisica'),
        'hasDownloadHandler': data.includes('download') || data.includes('a.download'),
        'hasGuiaAvanzada': data.includes('guia-avanzada'),
        'hasCurrentContent': data.includes('currentContent'),
        'hasSlug': data.includes('slug')
    };
    
    for (const [key, value] of Object.entries(checks)) {
        console.log('Has ' + key + ':', value);
    }
    
    // Show relevant sections
    console.log('\n--- Looking for loader function ---');
    const loaderIdx = data.indexOf('loader');
    if (loaderIdx !== -1) {
        console.log('Loader found at index', loaderIdx);
        console.log(data.substring(loaderIdx, loaderIdx + 500));
    }
    
    console.log('\n--- Looking for download handler ---');
    const downloadIdx = data.indexOf('a.download');
    if (downloadIdx !== -1) {
        console.log('Download handler at index', downloadIdx);
        console.log(data.substring(downloadIdx, downloadIdx + 300));
    }
    
    console.log('\n--- Looking for guia-avanzada ---');
    const guiaIdx = data.indexOf('guia-avanzada');
    if (guiaIdx !== -1) {
        console.log('guia-avanzada at index', guiaIdx);
        console.log(data.substring(guiaIdx, guiaIdx + 100));
    }
    
} catch (e) {
    console.log('ERROR:', e.message);
    console.log('File path used:', filePath);
}