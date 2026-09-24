const fs = require('fs');
const content = fs.readFileSync('src/lib/course-content.ts', 'utf8');
const slugs = ['matematicas','razonamiento-matematico','razonamiento-verbal','fisica','quimica','biologia','literatura','historia','geografia','cokito-rm','geometria','aritmetica','algebra','ciencia','comprension-lectora','derecho-ciudadania','economia-basica','ingles'];
slugs.forEach(s => {
  const has1 = content.includes("courseContent[\"" + s + "\"]");
  const has2 = content.includes("courseContent['" + s + "']");
  const has = has1 || has2;
  console.log(s + ': ' + (has ? 'TIENE' : 'VACIO'));
});
