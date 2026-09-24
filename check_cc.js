const fs = require('fs');
const data = fs.readFileSync('src/lib/course-content.ts', 'utf8');

const idx = data.indexOf("courseContent['fisica']");
console.log('courseContent[fisica] at:', idx);
if (idx !== -1) {
    console.log('Context:', data.substring(idx - 20, idx + 100));
} else {
    console.log('Not found, searching for courseContent[fisica]');
    const idx2 = data.indexOf('courseContent.fisica');
    console.log('courseContent.fisica at:', idx2);
    if (idx2 !== -1) {
        console.log('Context2:', data.substring(idx2 - 20, idx2 + 100));
    }
}