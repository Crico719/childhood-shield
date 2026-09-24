const fs = require('fs');
const files = ['compact-topics-dc.js','compact-topics-ec.js','compact-topics-en.js'];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let lines = content.split('\n');
  let fixed = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Check if this is a topic header with inline values (7+ top-level elements)
    // Pattern: ['slug','title','tip.','.','.','.',],
    if (trimmed.startsWith("['") && trimmed.includes("','.','.','.',],")) {
      // Extract values
      const vals = [];
      let inQ = false, cur = '';
      let bracketDepth = 0;
      for (let c of trimmed) {
        if (c === '[' && !inQ) { bracketDepth++; if (bracketDepth === 1) continue; }
        if (c === ']' && !inQ) { bracketDepth--; if (bracketDepth === 0) { vals.push(cur); break; } continue; }
        if (c === "'" && !inQ) { inQ = true; cur = ''; continue; }
        if (c === "'" && inQ) { inQ = false; vals.push(cur); continue; }
        if (inQ) cur += c;
      }
      
      // Collect next 4 lines (3 theory arrays + template type)
      const basico = lines[i+1] ? lines[i+1].trim() : '';
      const intermedio = lines[i+2] ? lines[i+2].trim() : '';
      const avanzado = lines[i+3] ? lines[i+3].trim() : '';
      const templateLine = lines[i+4] ? lines[i+4].trim() : '';
      
      // Extract template type (remove quotes, brackets)
      const tmplType = templateLine.replace(/[[\]']/g, '').trim();
      
      // Extract theory values from the header line
      const tip = vals[2] || '.';
      const extra = vals.slice(3); // the dots
      
      // Build proper 3 theory arrays from extra values + basico/intermedio/avanzado lines
      // The basico/intermedio/avanzado lines have the actual theory content
      
      fixed.push(`  ['${vals[0]}','${vals[1]}','${tip}',`);
      // Add the next 3 lines as theory arrays
      fixed.push(basico);
      fixed.push(intermedio);
      fixed.push(avanzado);
      // Add template type
      fixed.push(`  '${tmplType}'],`);
      
      i += 5; // Skip all 5 lines
      continue;
    }
    
    fixed.push(line);
    i++;
  }
  
  fs.writeFileSync(f, fixed.join('\n'), 'utf8');
  console.log('Fixed: ' + f);
});

// Verify
files.forEach(f => {
  try {
    const m = require('./' + f);
    console.log(f + ': ' + m.length + ' topics OK');
  } catch(e) {
    console.log(f + ': STILL BROKEN - ' + e.message);
  }
});
