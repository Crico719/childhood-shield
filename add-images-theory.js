const fs = require("fs");
const path = require("path");
const MD = path.join(__dirname, "modules");
const fi = JSON.parse(fs.readFileSync(path.join(MD, "fisica.json"), "utf8"));

let _id = 0;
function q(id, question, options, correctIndex, explanation, difficulty) {
  return { id: ++_id, question, options, correctIndex, explanation, difficulty };
}
function th(l, t, lines) { return { level: l, title: t, lines }; }
function m(slug, tip, theory, exercises) { return { slug, tip, theory, illustrations: [], exercises }; }

// Define image URLs for each module (using placeholder image services or educational images)
// These are example physics-related image URLs
const moduleImages = [
  // Module 1-10: Kinematics
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/0?text=MRU+MRUA",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/1?text=Speed+Velocity",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/2?text=Acceleration",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/3?text=Equations+of+Motion",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/4?text=Free+Fall",
  // Module 11-20: Dynamics
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/5?text=Newton's+Laws",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/6?text=Force+Mass+Acceleration",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/7?text=Free+Body+Diagram",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/8?text=Friction",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/8?text=Circular+Motion",
  // Module 21-30: Work-Energy
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/8?text=Work+Energy+Theorem",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/9?text=Kinetic+Energy",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/10?text=Potential+Energy",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/11?text=Conservation+Energy",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/12?text=Power",
  // Module 31-40: Gravity & Fluids
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/12?text=Gravitation",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/13?text=Universal+Gravity",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/14?text=Fluid+Pressure",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/15?text=Archimedes",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/16?text=Bernoulli",
  // Module 41-50: Thermodynamics
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/16?text=Thermodynamics",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/17?text=Heat+Transfer",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/18?text=Entropy",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/19?text=Efficiency",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/20?text=Cycle+Carnot",
  // Module 51-60: Waves & Optics
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/20?text=Waves",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/21?text=Sound+Wave",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/22?text=Interference",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/23?text=Diffraction",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/24?text=Optics",
  // Module 61-70: Modern Physics
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/24?text=Modern+Physics",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/25?text=Relativity",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/26?text=Quantum",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/27?text=Nuclear",
  "https://via.placeholder.com/400x300/4F46E5/FFFFFF/28?text=Particle+Physics"
];

// Make sure we have enough images (repeat if needed)
while (moduleImages.length < 70) {
  moduleImages.push(...moduleImages);
}

// Add images to each module's theory
// We'll add an image line at the end of each theory section
for (let i = 0; i < fi.length; i++) {
  const module = fi[i];
  const imgIndex = i % moduleImages.length;
  const imgUrl = moduleImages[i];
  
  // Add image line to each theory section
  module.theory.forEach((section, sectionIdx) => {
    // Add image reference at the end of lines
    const newLines = [...section.lines, `Imagen ilustrativa: ${imgUrl}`];
    section.lines = newLines;
  });
}

// Also add illustrations array (optional)
fi.forEach((m, i) => {
  m.illustrations = [moduleImages[i % moduleImages.length]];
});

// Save updated JSON
fs.writeFileSync(path.join(MD, "fisica.json"), JSON.stringify(fi, null, 2), "utf8");
console.log("Física: " + fi.length + " módulos con imágenes agregadas a la teoría");
console.log("Primera imagen del módulo 1:", fi[0].illustrations[0]);
console.log("Primera línea teoría módulo 1:", fi[0].theory[0].lines[0]);