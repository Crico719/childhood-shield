import { readFileSync } from 'fs';
const c = readFileSync('C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\course-content.ts', 'utf-8');
const problematic = [1, 2, 3, 1701, 1702, 1703];
for (const id of problematic) {
  const regex = new RegExp(`id: ${id}[\\s\\S]{0,100}`, 'g');
  let m;
  while ((m = regex.exec(c)) !== null) {
    const lineNum = c.substring(0, m.index).split('\n').length;
    const slugMatch = c.substring(Math.max(0, m.index - 300), m.index).match(/slug: "([^"]+)"/g);
    const slug = slugMatch ? slugMatch[slugMatch.length - 1] : 'unknown';
    console.log(`ID ${id} at line ${lineNum} in module ${slug}`);
  }
}
