const fs = require('fs');
const path = require('path');

const dir = path.join('C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\src\\data\\');
const files = fs.readdirSync(dir).filter(f => f.includes('extra-exercises'));

files.forEach(f => {
  try {
    const c = fs.readFileSync(path.join(dir, f), 'utf8');
    const re = /"([^"]+)":\s*\[/g;
    const keys = [];
    let m;
    while ((m = re.exec(c)) !== null) keys.push(m[1]);
    console.log(f + ': ' + c.length + ' bytes, ' + keys.length + ' modules');
    if (keys.length > 0) console.log('  Keys: ' + keys.join(', '));
  } catch(e) {
    console.log(f + ': ERROR ' + e.message);
  }
});
