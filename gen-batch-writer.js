const fs = require('fs');
const path = require('path');
const { writeBatch } = require('./gen-utils.js');
const DATA_DIR = path.join(__dirname, '../prepa-premium-uv/src/data');

// Helper functions
function th(level, title, lines) { return { level, title, lines }; }
function q(id, question, options, correctIndex, explanation, difficulty) {
  return { id, question, options, correctIndex, explanation, difficulty };
}
function mod(slug, tip, theory, exercises) {
  return { slug, tip, theory, illustrations: [], exercises };
}

// Load all JSON module data files
const fiDir = path.join(__dirname, 'modules');
if (!fs.existsSync(fiDir)) fs.mkdirSync(fiDir, { recursive: true });

function loadModules(filename) {
  const fp = path.join(fiDir, filename);
  if (!fs.existsSync(fp)) return [];
  return JSON.parse(fs.readFileSync(fp, 'utf8'));
}

function saveModules(filename, data) {
  fs.writeFileSync(path.join(fiDir, filename), JSON.stringify(data, null, 0), 'utf8');
}

function batchAndWrite(prefix, modules) {
  const batches = [];
  for (let i = 0; i < modules.length; i += 10) {
    batches.push(modules.slice(i, i + 10));
  }
  batches.forEach((batch, idx) => {
    writeBatch(prefix, idx + 1, `${prefix}Batch${idx + 1}`, batch);
  });
  const totalQ = modules.reduce((s, m) => s + m.exercises.length, 0);
  console.log(`  Total: ${modules.length} modules, ${totalQ} questions in ${batches.length} batches`);
}

// Check if user wants to just regenerate batch files from existing JSON
const mode = process.argv[2] || 'all';

if (mode === 'batches' || mode === 'all') {
  // Try to write batch files for each course
  const courses = {
    fi: 'fisica.json',
    qu: 'quimica.json',
    bi: 'biologia.json',
    ec: 'economia.json',
    le: 'letras.json'
  };
  
  for (const [prefix, filename] of Object.entries(courses)) {
    const mods = loadModules(filename);
    if (mods.length > 0) {
      console.log(`\n${prefix}: Writing ${mods.length} modules...`);
      batchAndWrite(prefix, mods);
    }
  }
}
