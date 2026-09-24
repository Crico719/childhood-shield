const fs = require('fs');
const filePath = 'C:/Users/USUARIO/OneDrive/Documents/Default Project/src/data/rm-extra-exercises.ts';

function ex(id, q, opts, ci, exp, diff) {
  const e = s => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const optsStr = opts.map(o => `"${e(o)}"`).join(', ');
  return `{ id: ${id}, question: "${e(q)}", options: [${optsStr}], correctIndex: ${ci}, explanation: "${e(exp)}", difficulty: "${diff}" }`;
}

const M = {};

M["relaciones-de-parentesco"] = [
ex(100,"Si Juan es el padre de Pedro y Pedro es hermano de María, ¿qué relación tiene Juan con María?",["Tío","Padre","Abuelo","Primo"],1,"Si Juan es padre de Pedro y Pedro es hermano de María, Juan también es padre de María.","basic"),
ex(101,"Ana es la esposa de Carlos. ¿Quién es el esposo de Ana?",["Pedro","Luis","Carlos","Miguel"],2,"Si Ana es la esposa de Carlos, Carlos es el esposo de Ana.","basic"),
ex(102,"Si Laura es hermana de Pedro e hija de Carmen, ¿quién es la madre de Laura?",["María","Carmen","Ana","Rosa"],1,"Si Laura es hermana de Pedro e hija de Carmen, Carmen es su madre.","basic"),
ex(103,"Roberto es el abuelo de Sofía. ¿Qué parentesco tiene Sofía con Roberto?",["Madre","Hija","Nieta","Sobrina"],2,"Si Roberto es el abuelo de Sofía, Sofía es su nieta.","basic"),
ex(104,"María es la tía de José. ¿Quién es el padre de José?",["El hermano de María","El esposo de María","El padre de María","El hijo de María"],0,"Si María es tía de José, el padre de José es hermano de María.","basic"),
ex(105,"Si Pedro y Juan son hermanos y Pedro es padre de Luis, ¿qué parentesco tiene Juan con Luis?",["Padre","Tío","Primo","Abuelo"],1,"Si Pedro y Juan son hermanos y Pedro es padre de Luis, Juan es tío de Luis.","basic"),
ex(106,"Carmen es la suegra de Miguel. ¿Quién es la esposa de Miguel?",["La hija de Carmen","La hermana de Carmen","La madre de Carmen","La tía de Carmen"],0,"Si Carmen es suegra de Miguel, la esposa de Miguel es hija de Carmen.","basic"),
ex(107,"Si el padre de María tiene tres hijos: Pedro, Juan y otro, ¿quién es el tercer hijo?",["Carlos","María","Luis","Roberto"],1,"El padre de María tiene tres hijos: Pedro, Juan y la propia María.","intermediate"),
ex(108,"Pedro es el cuñado de Laura. ¿Qué relación tiene Pedro con el esposo de Laura?",["Son hermanos","Son primos","No tienen relación","Padre e hijo"],0,"Si Pedro es cuñado de Laura, Pedro es hermano del esposo de Laura.","intermediate"),
ex(109,"Si Andrés es el yerno de Carmen, ¿cuál es la relación de Carmen con la esposa de Andrés?",["Suegra","Cuñada","Tía","Madre"],0,"Si Andrés es yerno de Carmen, la esposa de Andrés es hija de Carmen.","intermediate"),
ex(110,"María tiene un hijo llamado Pedro y Pedro tiene una hermana llamada Ana. ¿Quién es la madre de Ana?",["Otra mujer","María","La abuela","No se puede determinar"],1,"Si Pedro y Ana son hermanos y María es madre de Pedro, María también es madre de Ana.","intermediate"),
ex(111,"Si Carlos es el padre de la esposa de Juan, ¿qué parentesco tiene Carlos con Juan?",["Suegro","Cuñado","Padre","Tío"],0,"Si Carlos es padre de la esposa de Juan, Carlos es suegro de Juan.","intermediate"),
ex(112,"Luis es el hermano del padre de Pedro. ¿Quién es Luis para Pedro?",["Padre","Tío","Primo","Abuelo"],1,"Si Luis es hermano del padre de Pedro, Luis es tío de Pedro.","intermediate"),
ex(113,"Si la madre de Ana tiene dos hijas: Beatriz y Carmen, ¿quién es Carmen para Ana?",["Hermana","Prima","Tía","Sobrina"],0,"Si la madre de Ana tiene dos hijas Beatriz y Carmen, Carmen también es hermana de Ana.","intermediate"),
ex(114,"En una familia hay 5 hijos y se mencionan: Miguel, Teresa, Rosa y Juan. ¿Cómo se llama el quinto?",["Pedro","Carlos","María","Falta información"],3,"Solo se mencionan 4 hijos por nombre. No se puede determinar el quinto.","advanced"),
ex(115,"Si Pedro es el hijo del hermano de la madre de Juan, ¿qué parentesco tienen Pedro y Juan?",["Primos hermanos","Hermanos","Tío y sobrino","No tienen parentesco"],0,"El hermano de la madre de Juan es tío de Juan. El hijo de ese tío es primo hermano de Juan.","advanced"),
ex(116,"Carmen es la suegra de la hija de Roberto. ¿Quién es el yerno de Carmen?",["El esposo de la hija de Roberto","El hijo de Carmen","Roberto","El padre de Carmen"],0,"Si Carmen es suegra de la hija de Roberto, el esposo de esa hija es yerno de Carmen.","advanced"),
ex(117,"Si el esposo de la hermana de Pedro es Carlos, ¿qué parentesco tiene Carlos con Pedro?",["Cuñado","Hermano","Primo","Tío"],0,"El esposo de la hermana de Pedro es cuñado de Pedro.","advanced"),
ex(118,"Si María es la tía abuela de Pedro, ¿cuántas generaciones los separan?",["Una generación","Dos generaciones","Tres generaciones","Cuatro generaciones"],1,"La tía abuela está dos generaciones por encima de Pedro.","advanced"),
ex(119,"Si el padre de la esposa de Juan es hermano del padre de Pedro, ¿qué relación tienen Juan y Pedro?",["Primos políticos","Cuñados","No tienen parentesco directo","Hermanos"],2,"Los padres de sus esposas son hermanos, pero entre Juan y Pedro no hay parentesco directo.","advanced"),
ex(120,"Si Carlos es el suegro de la hermana de Pedro, ¿qué parentesco tiene Carlos con Pedro?",["Suegro","Cuñado","Tío","No tienen parentesco directo"],3,"Carlos es suegro de la hermana de Pedro, pero entre ellos no hay parentesco directo.","advanced"),
];

M["relaciones-de-tiempo"] = [
ex(100,"Si son las 3:00 y dentro de 2 horas hay una reunión, ¿a qué hora es?",["4:00","5:00","6:00","2:00"],1,"3:00 + 2 horas = 5:00.","basic"),
ex(101,"Un evento comenzó a las 10:00 y terminó a las 12:30. ¿Cuánto duró?",["1 hora","1.5 horas","2 horas","2.5 horas"],3,"De 10:00 a 12:30 hay 2.5 horas.","basic"),
ex(102,"Si hoy es martes, ¿qué día será dentro de 5 días?",["Domingo","Lunes","Sábado","Viernes"],2,"Martes + 5 días = Sábado.","basic"),
ex(103,"Si una tarea se entrega el lunes y hoy es jueves, ¿cuántos días faltan?",["2 días","3 días","4 días","5 días"],2,"De jueves a lunes hay 4 días.","basic"),
ex(104,"Una clase inicia a las 8:00 y dura 1 hora y 45 minutos. ¿A qué hora termina?",["9:45","9:30","9:15","10:00"],0,"8:00 + 1h45min = 9:45.","basic"),
ex(105,"Si nací en 1990 y estamos en 2024, ¿cuántos años tengo?",["33 años","34 años","35 años","32 años"],1,"2024 - 1990 = 34 años.","basic"),
ex(106,"¿Cuántas horas hay en 3 días?",["48 horas","72 horas","36 horas","24 horas"],1,"3 días × 24 horas = 72 horas.","basic"),
ex(107,"Si un vuelo sale a las 14:30 y dura 2 horas y 15 minutos, ¿a qué hora llega?",["16:30","16:45","17:00","16:15"],1,"14:30 + 2h15min = 16:45.","intermediate"),
ex(108,"Una reunión dura desde las 9:00 hasta las 11:40. ¿Cuántos minutos duró?",["140 minutos","160 minutos","180 minutos","150 minutos"],1,"De 9:00 a 11:40 son 160 minutos.","intermediate"),
ex(109,"Si el primer trimestre comienza el 1 de enero, ¿en qué fecha termina el tercer trimestre?",["30 de septiembre","31 de octubre","30 de octubre","31 de diciembre"],3,"El tercer trimestre termina el 31 de diciembre.","intermediate"),
ex(110,"Si alguien nació en julio y hoy es marzo, ¿cuántos años cumplirá pronto?",["24 años","25 años","26 años","27 años"],2,"Si nació en julio y estamos en marzo, cumplirá 26.","intermediate"),
ex(111,"¿Cuántas semanas hay en un semestre escolar de 5 meses?",["15 semanas","20 semanas","22 semanas","25 semanas"],1,"5 meses × 4 semanas = 20 semanas.","intermediate"),
ex(112,"Si un proyecto toma 3 meses y medio, ¿cuántos días aproximados dura?",["90 días","105 días","110 días","120 días"],1,"3.5 meses × 30 días = 105 días.","intermediate"),
ex(113,"Si las clases son de 7:00 a 13:00 con 30 min de recreo, ¿cuántas horas efectivas hay?",["5 horas","5.5 horas","6 horas","6.5 horas"],1,"6 horas - 30 min = 5.5 horas.","intermediate"),
ex(114,"Si un examen dura de 10:00 a 12:00 y terminas a las 11:45, ¿qué porcentaje usaste?",["75%","80%","85%","90%"],0,"105 de 120 minutos = 75%.","advanced"),
ex(115,"Si la Tierra tarda 365 días en orbitar el Sol, ¿cuántas horas orbita?",["8760 horas","8640 horas","9000 horas","8400 horas"],0,"365 × 24 = 8760 horas.","advanced"),
ex(116,"Si una tarea se entrega cada 3 días desde el 1 de marzo, ¿cuál es la fecha de la entrega 10?",["27 de marzo","28 de marzo","30 de marzo","1 de abril"],1,"Las entregas son: 1, 4, 7, 10, 13, 16, 19, 22, 25, 28.","advanced"),
ex(117,"Si un reloj se atrasa 2 minutos cada hora, ¿cuánto se atrasa en un día?",["24 minutos","48 minutos","36 minutos","60 minutos"],1,"2 min × 24 horas = 48 minutos.","advanced"),
ex(118,"Si el doble de la edad de Pedro en 5 años será 40, ¿cuántos años tiene?",["12 años","15 años","17 años","20 años"],1,"2(x+5)=40 → x=15.","advanced"),
ex(119,"Si hay 48 semanas entre dos cumpleaños, ¿cuántos meses de diferencia hay?",["9 meses","10 meses","11 meses","12 meses"],2,"48 semanas ÷ 4.34 ≈ 11 meses.","advanced"),
ex(120,"Si una clase dura 1h20min y hay 4 al día, ¿cuántas horas son?",["4 horas","5 horas","5.33 horas","6 horas"],2,"80 min × 4 = 320 min = 5.33 h.","advanced"),
];

// Write header
let out = 'import type { CourseExercise } from "../../lib/course-content";\n\nexport const rmExtraExercises: Record<string, CourseExercise[]> = {\n';

for (const [name, exercises] of Object.entries(M)) {
  out += `  "${name}": [\n`;
  for (const e of exercises) {
    out += `    ${e},\n`;
  }
  out += '  ],\n';
}

out += '};\n';

fs.writeFileSync(filePath, out, 'utf8');
console.log('Written ' + Object.keys(M).length + ' modules');
console.log('Lines: ' + out.split('\n').length);
