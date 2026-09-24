const fs = require("fs");
const c = fs.readFileSync("C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv\\src\\lib\\course-content.ts", "utf8");
// Find top-level keys: lines that match `  "slug": [` at the courseContent level
const lines = c.split("\n");
const courseKeys = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^\s+"([a-z0-9-]+)":\s*\[/);
  if (m && !lines[i].includes("slug:")) {
    courseKeys.push(m[1]);
  }
}
console.log("Course keys:", courseKeys);

// Count modules per course
for (const key of courseKeys) {
  const modCount = (c.match(new RegExp(`slug:\\s*"`, "g")) || []).length;
  console.log(`  Total modules in file: ${modCount}`);
  break;
}
