const fs = require('fs');
const fp = 'C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\gen-fi-modules-add.js';
let c = fs.readFileSync(fp, 'utf8');

// Strategy: each th() call for basico/intermedio/avanzado has this structure:
// th("level","title","line1","line2",...,"lineN"]),
// It should be:
// th("level","title",["line1","line2",...,"lineN"]),

// Find all lines that have th(" and bare strings (no [ after title)
// Replace each one

const lines = c.split('\n');
const fixed = [];

for (let line of lines) {
  // Check if this line contains a th() with bare strings
  // Pattern: th("basico","Title","line",...
  const regex = /th\(("(?:basico|intermedio|avanzado)"),("[^"]+"),/g;
  let match;
  let lastIdx = 0;
  let result = '';
  
  while ((match = regex.exec(line)) !== null) {
    // Check if next char is " (bare string) or [ (already has array)
    const afterMatch = line[match.index + match[0].length];
    
    if (afterMatch === '"') {
      // Need to add [ bracket
      result += line.substring(lastIdx, match.index + match[0].length);
      result += '[';
      lastIdx = match.index + match[0].length;
    }
  }
  
  if (result !== '') {
    result += line.substring(lastIdx);
    line = result;
  }
  
  // Now fix the closing: find "]), and replace last ", with "]),
  // The line ends with "...",...,"lastLine"]),
  // Need to add ] before the closing ])
  
  // Find pattern: "lastString"]),  (end of th line)
  // Replace with "lastString"]),  (already correct if [ was added)
  // Actually we need to close the [ bracket before ])
  
  // Check if line has [ but no matching ] before ])
  if (line.includes('th("') && line.includes(',["')) {
    // Has opening [ but check if ] is missing before ])
    // Pattern at end of th lines: ...,"line"]),  or ...,"line"]]),
    // If we see "line"]), it should be "line"]),  -- the ] closes the [
  }
  
  // Simpler: if line ends with "]),  and has [, check if ] exists before ])
  // Actually let me just ensure the th pattern is correct
  // th("level","title",["line1",...,"lineN"]),
  
  // Check: after title, do we have [,[" or just "," ?
  const thCheck = line.match(/th\(("(?:basico|intermedio|avanzado)"),("[^"]+"),\[/);
  if (thCheck) {
    // Has [ bracket - check if ] is present before ])
    // End of line should have "]), not just ]),
    if (line.match(/"\)\]\),/) || line.match(/"\]\),/)) {
      // Already correct
    } else if (line.match(/"\),(\s*)$/)) {
      // Missing ] before ])
      line = line.replace(/"\),(\s*)$/, '"],),$1');
    }
  } else if (line.match(/th\(("(?:basico|intermedio|avanzado)"),("[^"]+"),"[^"]+"/)) {
    // Has th with bare strings - need to add [ after title and ] before ])
    // Step 1: add [ after title comma
    line = line.replace(/th\(("[^"]+"),("[^"]+"),"/, 'th($1,$2,["');
    // Step 2: add ] before last ])  - the line ends with "lastLine"]),
    // Find last "]), and change to ""]),
    line = line.replace(/"\)(\s*)$/, '"],$1');
  }
  
  fixed.push(line);
}

const output = fixed.join('\n');
fs.writeFileSync(fp, output, 'utf8');

// Verify
const openP = (output.match(/\(/g) || []).length;
const closeP = (output.match(/\)/g) || []).length;
const openB = (output.match(/\[/g) || []).length;
const closeB = (output.match(/\]/g) || []).length;
console.log('Parens:', openP, closeP, 'diff:', openP - closeP);
console.log('Brackets:', openB, closeB, 'diff:', openB - closeB);
console.log('Fixed!');
