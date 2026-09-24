#!/usr/bin/env node
// Generator for topics-remaining.js (Aritmetica topics 13-70)
const fs = require('fs');
let gid = 50026;

function ex(q, o, a, e, d) {
  return { id: gid++, question: q, options: o, correctIndex: a, explanation: e, difficulty: d || 'intermedio' };
}

function topic(s, t, p, b, i, a, exArr) {
  return { s, t, p, b, i, a, ex: exArr };
}

const topics = [];

// ===== 13. RAZON Y PROPORCION =====
topics.push(topic('razon-proporcion', 'Razon y Proporcion', 'Simplifica razones con MCD.',
  ['**Razon** compara dos cantidades: a:b o a/b.',
   '**Proporcion** = igualdad de razones: a/b=c/d.',
   'Si a/b=c/d entonces **a*d=b*c**.',
   'La razon de 6:4 se simplifica a 3:2.',
   'Puede expresarse como fraccion, porcentaje o decimal.'],
  ['**Razon de tres**: a/b=c/x entonces x=bc/a.',
   '**Partes proporcionales**: dividir total en razon a:b.',
   'Total S en razon 3:2 son partes 3S/5 y 2S/5.',
   '**Razon inversa**: a*b=constante.',
   '**Razon compuesta**: relacion entre tres magnitudes.'],
  ['**Semejanza**: razones de lados iguales.',
   '**Escalas** en dibujo tecnico: 1:100, 1:50.',
   '**Mapas**: distancia real = mapa x escala.',
   'Razones trigonometricas en triangulos.',
   'Problemas de mezclas y aleaciones.'],
  [
    ex('Simplifique 12:8', ['3:2','2:3','4:2','6:4'], 0, 'MCD=4. 12/4=3, 8/4=2.'),
    ex('6:9 es equivalente a', ['2:3','3:2','18:27','Ambas A y C'], 3, '6/3=2,9/3=3. 18/9=2,27/9=3.'),
    ex('25/50 como razon:', ['1:1','1:2','2:1','5:10'], 1, '25/25=1, 50/25=2.'),
    ex('a:b=3:5 y a=12, b=', ['15','20','25','8'], 1, '12/3=4, 5*4=20.'),
    ex('30min:2h simplificada:', ['1:4','1:2','30:2','4:1'], 0, '30:120=1:4.'),
    ex('Si 3:7=x:21, x=', ['3','7','9','21'], 2, '3*21/7=9.'),
    ex('0.5:2 simplificada:', ['1:4','1:2','2:8','5:20'], 0, '0.5:2=1:4.'),
    ex('Dividir S/500 en 3:2:', ['S/300 y S/200','S/250 y S/250','S/200 y S/300','S/150 y S/350'], 0, '3/5*500=300, 2/5*500=200.', 'intermedio'),
    ex('a/b=4/3, b/c=2/5, a/c=', ['8/15','4/5','20/15','8/5'], 0, '4/3*2/5=8/15.', 'intermedio'),
    ex('S/800 en razon 2:3:5:', ['S/160,S/240,S/400','S/200,S/300,S/300','S/100,S/200,S/500','S/267,S/267,S/267'], 0, '10 partes=80. 2*80=160.', 'intermedio'),
    ex('x:y=2:3, y:z=4:5, x:y:z=', ['8:12:15','2:3:5','4:6:5','8:12:10'], 0, '8:12, 12:15.', 'intermedio'),
    ex('Mapa 1:50000, 3cm = ?', ['1500cm','15km','1.5km','150m'], 2, '3*50000=150000cm=1.5km.', 'intermedio'),
    ex('Razon NO valida:', ['3:4','0.5:2','-1:3','100:0'], 3, 'No se divide entre 0.', 'intermedio'),
    ex('S/300 en razon 2:1:', ['S/200,S/100','S/150,S/150','S/100,S/200','S/250,S/50'], 0, '2/3*300=200, 1/3*300=100.', 'intermedio'),
    ex('a:b:c=2:3:4, suma=36. b=', ['8','12','16','9'], 1, '9 partes=36, p=4. b=12.', 'avanzado'),
    ex('Razon radios 1:3, areas:', ['1:3','1:6','1:9','1:27'], 2, 'Areas=razon^2=1:9.', 'avanzado'),
    ex('Razon lados 2:3, volumenes:', ['2:3','4:9','8:27','6:27'], 2, 'Volumen=razon^3=8:27.', 'avanzado'),
    ex('Media proporcional de 4 y 9:', ['5','6','6.5','7'], 1, 'b^2=36, b=6.', 'avanzado'),
    ex('A*B=48, A=8. B=', ['4','6','8','48'], 1, '48/8=6.', 'avanzado'),
    ex('Escala 1:2, linea 5cm mide:', ['2.5cm','5cm','10cm','2.5m'], 2, '5*2=10cm.', 'avanzado'),
    ex('Mezcla 5:3, 16kg. Mayor:', ['10kg','8kg','6kg','12kg'], 0, '5/8*16=10.', 'avanzado'),
  ]
));

// ===== 14. REGLA DE TRES SIMPLE =====
topics.push(topic('regla-de-tres-simple', 'Regla de Tres Simple', 'Si aumentan juntas es directa; si una sube y otra baja, inversa.',
  ['**Directa**: mas-mas o menos-menos.',
   '**Inversa**: mas-menos.',
   '**Directa**: a/b=c/x entonces x=bc/a.',
   '**Inversa**: a*b=c*x entonces x=ab/c.',
   'Identificar el tipo ANTES de resolver.'],
  ['1) Identificar magnitudes y tipos.',
   '2) Colocar en columnas.',
   '3) Si directa: multiplicar cruz.',
   '4) Si inversa: multiplicar recto.',
   '5) Despejar la incognita.'],
  ['Problemas de velocidad, tiempo, distancia.',
   'Compras y proporciones.',
   'Velocidad inversa al tiempo.',
   'Trabajo inverso al numero de trabajadores.',
   'Combina directa e inversa.'],
  [
    ex('8 libros cuestan S/160, 5 cuestan:', ['S/80','S/100','S/120','S/200'], 1, '160/8=20. 20*5=100.'),
    ex('6 panes S/18, 10 panes:', ['S/25','S/30','S/36','S/42'], 1, '18/6=3. 3*10=30.'),
    ex('4 personas 24r en 3d. 8en 1d:', ['8','16','24','32'], 1, '24*(8/4)*(1/3)=16.'),
    ex('5 obreros 50m en 10d. 10en 5d:', ['50','100','25','75'], 0, '50*(10/5)*(5/10)=50.'),
    ex('3 obreros 12m2 en 4d. 6en 2d:', ['6','12','18','24'], 1, '12*(6/3)*(2/4)=12.'),
    ex('5 maquinas 100 en 8h. 10en 4h:', ['50','100','200','25'], 1, '100*(10/5)*(4/8)=100.'),
    ex('20kg cuestan S/100, 30kg:', ['S/120','S/150','S/200','S/250'], 1, '5*30=150.'),
    ex('6 maquinas 8h producen 144. 9en 6h:', ['162','144','108','216'], 0, '144*(9/6)*(6/8)=162.', 'intermedio'),
    ex('Tanque: 3 llaves 12h. 5llaves:', ['7.2h','6h','8h','4.8h'], 0, '3*12=36. 36/5=7.2.', 'intermedio'),
    ex('Velocidad 60km/h 3h. A 90km/h:', ['2h','1.5h','4h','3h'], 0, '180/90=2.', 'intermedio'),
    ex('12 obreros 8d. 16 en:', ['6d','8d','12d','16d'], 0, '96/16=6.', 'intermedio'),
    ex('10 obreros 10d. 5 en:', ['2d','5d','10d','20d'], 1, '100/5=20.', 'intermedio'),
    ex('3 bombas 6h vacian. 5 bombas:', ['3.6h','2.5h','4h','3h'], 0, '18/5=3.6.', 'intermedio'),
    ex('120km a 40km/h. A 60km/h:', ['1.5h','2h','3h','4h'], 1, '120/60=2.', 'intermedio'),
    ex('A=6h, B=3h. Juntos:', ['4.5h','2h','3h','9h'], 1, '1/6+1/3=1/2, 2h.', 'avanzado'),
    ex('A:B:C=2:3:5, ganan S/500. B=', ['S/150','S/100','S/200','S/250'], 0, '10 partes=500. B=150.', 'avanzado'),
    ex('5 obreros 10d. 2 se van. 4 en:', ['10d','12d','15d','20d'], 2, '50/4=12.5.', 'avanzado'),
    ex('Tuberia A llena 6h, B vacia 4h:', ['12h se vacia','12h se llena','Nada','2.4h'], 0, '1/6-1/4=-1/12. Se vacia 12h.', 'avanzado'),
    ex('Si 5=20, entonces 8=', ['30','32','40','48'], 1, 'x/8=20/5, x=32.', 'avanzado'),
    ex('6 carpinteros 12 mesas 10d. 8en 8d:', ['12.8','10','16','12'], 2, '12*10/6=20, 20*8/10=16.', 'avanzado'),
    ex('20d raciones 50 soldados. 60 duran:', ['14d','16d','20d','12d'], 1, '50*20/60~16.7.', 'avanzado'),
  ]
));

// ===== 15. REGLA DE TRES COMPUESTA =====
topics.push(topic('regla-de-tres-compuesta', 'Regla de Tres Compuesta', 'Multiples magnitudes: identifica cada una como directa o inversa.',
  ['Tres o mas magnitudes en relacion.',
   'Cada magnitud puede ser directa o inversa.',
   '**Todas directas**: multiplicar cruz.',
   '**Una inversa**: multiplicar cruz y dividir por la inversa.',
   'Resolver paso a paso.'],
  ['1) Identificar todas las magnitudes.',
   '2) Clasificar cada una.',
   '3) Multiplicar las directas en cruz.',
   '4) Dividir entre las inversas.',
   '5) Igualar con la incognita.'],
  ['Problemas con temperatura, presion y volumen.',
   'Velocidad con peso y distancia.',
   'Trabajo con numero de personas y horas.',
   'Presion con temperatura y volumen.',
   'Leyes fisicas combinan directa e inversa.'],
  [
    ex('3 obreros 4h 12m. 6 obreros 2h:', ['4m','8m','12m','16m'], 0, '3*4=12p-h, 12p-h/6=2h.'),
    ex('4 maquinas 5h 200piezas. 2maq 2h:', ['50','100','200','40'], 0, '200*(2/4)*(2/5)=40.'),
    ex('5 personas 3d 30tareas. 10en 1d:', ['30','60','90','120'], 0, '30*(10/5)*(1/3)=10.'),
    ex('Velocidad tiempo distancia son:', ['Directas','Inversas','Mixtas','Independientes'], 0, 'Todas directas.'),
    ex('3 tanques 12h llenan. 6tanques 4h:', ['4h','6h','8h','3h'], 0, '3*12=36. 36/6=6h.'),
    ex('Obreros horas trabajo son:', ['Directas','Inversas','Iguales','Depende'], 0, 'Si, directas.'),
    ex('Si A prop directa B e inversa C, Bx2 Cx3:', ['A se mantiene','A x2/3','A x6','A x3/2'], 1, 'A=k*B/C. 2/3.'),
    ex('A prop B y C. BxC=N. Bx2 Cx3:', ['Nx6','Nx5','N','Nx2/3'], 2, 'B*C=k, A=k/C. Cx3, A/3.', 'intermedio'),
    ex('Velocidad prop F, inversa m. Fx2 Px3:', ['x2/3','x6','x3/2','x2'], 0, 'V=2/3.', 'intermedio'),
    ex('Volumen prop T, inverso P. Tx2 Px4:', ['x2','x1/2','x1/4','x8'], 0, '2/4=1/2.', 'intermedio'),
    ex('Trabajo prop t, inverso n. Tx3 Px2:', ['x3/2','x2/3','x6','x3'], 0, '3/2.', 'intermedio'),
    ex('3 obreros 6d 18m. 9obreros 2d:', ['18m','27m','54m','9m'], 0, '18*(9/3)*(2/6)=18.', 'intermedio'),
    ex('5 maq 4h 100p. 10maq 8h:', ['400','200','800','100'], 0, '100*(10/5)*(8/4)=400.', 'intermedio'),
    ex('Presion prop T inverso V. Tx3 Vx2:', ['x3/2','x2/3','x6','x3'], 0, '3/2.', 'avanzado'),
    ex('Trabajo prop n y t. nx3 tx4:', ['x12','x7','x4/3','x3/4'], 0, '3*4=12.', 'avanzado'),
    ex('A prop B inverso C D. Bx2 Cx3 Dx4:', ['x4/3','x8/3','x24','x2/3'], 1, '2/(3*4).', 'avanzado'),
    ex('Velocidad prop F inverso m. Fx4 mx2:', ['x2','x4','x8','x1/2'], 1, '4/2=2.', 'avanzado'),
    ex('3 tractores 5d 30ha. 5 tractor 3d:', ['30ha','45ha','54ha','18ha'], 0, '30*(5/3)*(3/5)=30.', 'avanzado'),
    ex('Luz intensidad inverso d^2. dx3:', ['x1/3','x1/9','x9','x1/6'], 1, '1/9.', 'avanzado'),
    ex('Caudal prop area inverso largo. Ax4 Lx3:', ['x4/3','x12','x3/4','x1/3'], 0, '4/3.', 'avanzado'),
    ex('Temp prop presion volumen. Tx2 Px3:', ['x2/3','x3/2','x6','x2'], 0, '2/3.', 'avanzado'),
  ]
));

// Write the file
const header = 'module.exports = [\n';
const body = topics.map(t => JSON.stringify(t)).join(',\n');
const footer = '\n];\n';
fs.writeFileSync('topics-remaining.js', header + body + footer, 'utf8');
console.log(`Wrote topics-remaining.js: ${topics.length} topics, ${gid - 50026} exercises`);
