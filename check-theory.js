const fs = require("fs");
const c = JSON.parse(fs.readFileSync("C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project\\modules\\fisica.json", "utf8"));
let empty = 0;
let total = 0;
c.forEach((m, i) => {
  total++;
  const hasTheory = m.theory && m.theory.length > 0;
  const hasLines = hasTheory && m.theory.every(t => t.lines && t.lines.length > 0);
  if (!hasLines) {
    empty++;
    console.log("Module " + (i + 1) + " empty theory");
  }
});
console.log("Total modules: " + total + ", Empty theory: " + empty);