const fs = require("fs");
const c = fs.readFileSync("C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\course-content.ts", "utf8");
const r = /slug:\s*"([^"]+)"/g;
let m;
const slugs = [];
while ((m = r.exec(c))) {
  if (!slugs.includes(m[1])) slugs.push(m[1]);
}
console.log(JSON.stringify(slugs));
