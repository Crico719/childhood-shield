const fs = require('fs');
const fp = 'C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\gen-fi-modules-add2.js';
let c = fs.readFileSync(fp, 'utf8');

let count = 0;
while (true) {
  const m = c.match(/th\(("(?:basico|intermedio|avanzado)"),("[^"]+"),"/);
  if (!m) break;
  const idx = c.indexOf(m[0]);
  const insertAt = idx + m[0].length - 1;
  c = c.substring(0, insertAt) + '[' + c.substring(insertAt);
  count++;
}
console.log('Fixed ' + count + ' instances of missing [');

// Now fix missing ] before ])
// Find pattern: th("level","title",["line1",...,"lineN"]),
// Make sure each has ] before ])
const lines = c.split('\n');
let fixed = [];
for (let line of lines) {
  // If line has th() with [ but line ends with "]),  missing ]
  if (line.includes('th("') && line.includes(',["')) {
    // Check if ] is present before ])
    // Pattern: ..."lastLine"]), should be ..."lastLine"]), with ] closing the [
    if (line.match(/"\),(\s*)$/) && !line.match(/"\],(\s*)$/)) {
      line = line.replace(/"\),(\s*)$/, '"],),$1');
    }
  }
  fixed.push(line);
}

c = fixed.join('\n');
fs.writeFileSync(fp, c, 'utf8');

// Verify balance
const openP = (c.match(/\(/g) || []).length;
const closeP = (c.match(/\)/g) || []).length;
const openB = (c.match(/\[/g) || []).length;
const closeB = (c.match(/\]/g) || []).length;
console.log('Parens: ' + openP + ' open, ' + closeP + ' close, diff: ' + (openP - closeP));
console.log('Brackets: ' + openB + ' open, ' + closeB + ' close, diff: ' + (openB - closeB));
