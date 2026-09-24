// Aritmetica topics 13-70 definitions
// Each: {s, t, p, b, i, a, gen(E,R,MO)}
// gen returns array of 21 E() exercise objects
module.exports = [
// 13
{s:'razon-proporcion',t:'Razon y Proporcion',p:'Simplifica razones con MCD.',
b:['**Razon** compara cantidades: a:b.','**Proporcion**: igualdad de razones.','a/b=c/d implica **a*d=b*c**.','Razon 6:4 = 3:2.','Fraccion, porcentaje o decimal.'],
i:['**Razon de tres**: x=bc/a.','**Partes**: dividir total en razon.','Total S en 3:2 son 3S/5 y 2S/5.','**Inversa**: a*b=constante.','**Compuesta**: tres+ magnitudes.'],
a:['**Semejanza**: lados proporcionales.','**Escalas** 1:100.','Mapas: real=mapa*escala.','Trigonometria.','Mezclas.'],
gen:(E,R,MO)=>{const ex=[];
const[r1,r2]=[R(2,8)*2,R(2,8)*2];let o=MO(`${r1/2}:${r2/2}`,[`${r1}:${r2}`,`${r2}:${r1}`,`${r1*2}:${r2*2}`]);ex.push(E(`Simplifique ${r1}:${r2}`,o.opts,o.idx,'MCD='+r1/2+'.'));
const[a,b]=[R(3,9),R(3,9)];o=MO(String(b),[String(a),String(a+b),String(a*b)]);ex.push(E(`a:b=${a}:${b}, a=${a*b}. b=`,o.opts,o.idx,'a/b*x=a*b/b=a.'));
const[aa,bb]=[R(2,5),R(2,5)];o=MO('1:4',['2:1','4:1','1:2']);ex.push(E('30min:2h simplificada:',o.opts,o.idx,'30:120=1:4.'));
o=MO(String(a*b),[String(a+b),String(a*b+2),String(a*b-2)]);ex.push(E(`Si a:b=${a}:${b}, 1a=${b}b, 3a=?b`,o.opts,o.idx,`3*${b}.`));
o=MO('1:2',['1:4','2:1','4:1']);ex.push(E('0.5:1 simplificada:',o.opts,o.idx,'1:2.'));
const[m,s1,s2]=[R(100,500),R(2,5),R(2,5)];const p=Math.round(m*s1/(s1+s2));o=MO(`S/${p},S/${m-p}`,[`S/${m-p},S/${p}`,`S/${m/2},S/${m/2}`,'S/'+m+',S/0']);ex.push(E(`S/${m} en ${s1}:${s2}:`,o.opts,o.idx,(s1+s2)+' partes.','intermedio'));
const m2=R(10,100)*1000;const cm=R(2,5);o=MO(`${cm*m2/100000}km`,[`${cm/100}km`,`${cm*m2}m`,`${cm/10}km`]);ex.push(E(`Mapa 1:${m2}, ${cm}cm:`,o.opts,o.idx,'Real=mapa*escala.','intermedio'));
o=MO('100:0',['3:4','0.5:2','-1:3']);ex.push(E('Razon NO valida:',o.opts,o.idx,'No se divide entre 0.','intermedio'));
o=MO(`${a}:${b}`,[`${b}:${a}`,`${a+b}:${a*b}`,`${a}:${a}`]);ex.push(E(`${a}:${b} simplificada:`,o.opts,o.idx,'MCD='+Math.min(a,b)+'.','intermedio'));
const[x,y,z,ts]=[R(2,4),R(2,4),R(2,4),R(30,90)];const tot=x+y+z;const by=Math.round(ts*y/tot);o=MO(String(by),[String(by+5),String(by-5),String(ts-by)]);ex.push(E(`a:b:c=${x}:${y}:${z}, suma=${ts}. b=`,o.opts,o.idx,tot+'p. ','intermedio'));
o=MO('1:9',['1:3','3:1','1:6']);ex.push(E('Razon radios 1:3, areas:',o.opts,o.idx,'Areas=razon^2.','avanzado'));
o=MO('8:27',['2:3','4:9','6:27']);ex.push(E('Razon lados 2:3, volumenes:',o.opts,o.idx,'Vol=razon^3.','avanzado'));
const mp=R(4,9);o=MO(String(Math.round(Math.sqrt(mp*(mp+R(1,4))))),[String(mp),String(mp+2),String(mp*2)]);ex.push(E(`Media proporcional de ${mp} y ${mp+2}:`,o.opts,o.idx,'b=sqrt(ab).','avanzado'));
o=MO(String(a*b),[String(a+b),String(a-b+1),String(a*b+1)]);ex.push(E(`A*B=${a*b}, A=${a}. B=`,o.opts,o.idx,'A/B=A.','avanzado'));
o=MO('10cm',['5cm','20cm','2.5cm']);ex.push(E('Escala 1:2, linea 5cm:',o.opts,o.idx,'5*2=10.','avanzado'));
o=MO('10kg',['8kg','12kg','6kg']);ex.push(E(`Mezcla ${aa}:${bb}, ${aa+bb}kg. Mayor:`,o.opts,o.idx,aa+'/.'+o.opts[0]+'.','avanzado'));
return ex.slice(0,21);},
},
// 14
{s:'regla-de-tres-simple',t:'Regla de Tres Simple',p:'Directa: cruz. Inversa: recto.',
b:['**Directa**: mas-mas.','**Inversa**: mas-menos.','x=bc/a (directa).','x=ab/c (inversa).','Identificar ANTES.'],
i:['1) Magnitudes.','2) Clasificar.','3) Directa: cruz.','4) Inversa: recto.','5) Despejar.'],
a:['Velocidad, tiempo.','Compras.','Velocidad inversa a tiempo.','Trabajo inverso a personas.','Directa+inversa.'],
gen:(E,R,MO)=>{const ex=[];
const[c,n]=[R(5,15)*10,R(2,8)];let o=MO(`S/${c}`,[`S/${c+10}`,`S/${c-10}`,`S/${c*2}`]);ex.push(E(`${n} libros S/${c}. ${n+R(1,3)} cuestan:`,o.opts,o.idx,'Directa: mas mas.'));
const[w,d]=[R(3,8),R(3,8)];o=MO(String(w*d),[String(w*d+10),String(w*d-10),String(w+d)]);ex.push(E(`${w} obreros ${d}d. Total:`,o.opts,o.idx,w+'*'+d+'='+w*d+'.'));
const[v,t2]=[R(40,80),R(2,5)];o=MO(`${t2}h`,[`${t2+1}h`,`${t2*2}h`,`${t2-1}h`]);ex.push(E(`Velocidad ${v}km/h ${t2}h. Distancia:`,o.opts,o.idx,v*t2+'km.'));
o=MO(String(Math.round(v*t2/(v*2))),[String(t2),String(t2*2),`${t2/2}h`]);ex.push(E(`${v*t2}km. A ${v*2}km/h:`,o.opts,o.idx,'Dist/vel.'));
const[kg,pu]=[R(3,8),R(10,30)];o=MO(`S/${pu*kg}`,[`S/${pu}`,`S/${pu+5}`,`S/${pu*2}`]);ex.push(E(`${kg}kg S/${pu*kg}, ${kg*2}kg:`,o.opts,o.idx,'Directa.'));
o=MO('32',['30','40','48']);ex.push(E('Si 5=20, 8=',o.opts,o.idx,'8*20/5=32.'));
o=MO('2h',['4.5h','3h','9h']);ex.push(E('A=6h, B=3h. Juntos:',o.opts,o.idx,'1/6+1/3=1/2.'));
o=MO('50',['100','25','75']);ex.push(E('5 obreros 50m 10d. 10 en 5d:',o.opts,o.idx,'Misma cantidad.'));
o=MO('6d',['8d','12d','16d']);ex.push(E('12 obreros 8d. 16 en:',o.opts,o.idx,'96/16=6.','intermedio'));
o=MO('25',['150','200','100']);ex.push(E('20kg S/100. 5kg:',o.opts,o.idx,'25/kg.','intermedio'));
o=MO('1.5h',['2h','3h','4h']);ex.push(E('180km a 60km/h. 90km/h:',o.opts,o.idx,'180/90=2.','intermedio'));
o=MO('7.2h',['6h','8h','4.8h']);ex.push(E('3 llaves 12h. 5 llaves:',o.opts,o.idx,'36/5=7.2.','intermedio'));
o=MO('6h',['4h','8h','3h']);ex.push(E('3 tanques 12h. 6 tanques:',o.opts,o.idx,'36/6=6.','intermedio'));
o=MO('162',['144','108','216']);ex.push(E('6 maq 8h 144. 9en 6h:',o.opts,o.idx,'Proporcional.','intermedio'));
o=MO('S/150',['S/100','S/200','S/250']);ex.push(E('A:B:C=2:3:5, S/500. B:',o.opts,o.idx,'3/10.','avanzado'));
o=MO('32',['30','40','48']);ex.push(E('Si 5=20, entonces 8=',o.opts,o.idx,'32.','avanzado'));
o=MO('16.7d',['14d','20d','12d']);ex.push(E('20d raciones 50 soldados. 60:',o.opts,o.idx,'50*20/60.','avanzado'));
o=MO('12.5d',['10d','15d','20d']);ex.push(E('5 obreros 10d. 2 van. 4 restantes:',o.opts,o.idx,'50/4=12.5.','avanzado'));
o=MO('16',['12','10','12.8']);ex.push(E('6 carpinteros 12 mesas 10d. 8en 8d:',o.opts,o.idx,'120/6=20. 20*8/10=16.','avanzado'));
return ex.slice(0,21);},
},
// 15
{s:'regla-de-tres-compuesta',t:'Regla de Tres Compuesta',p:'Multiples magnitudes: identifica directa o inversa.',
b:['3+ magnitudes.','Cada una directa o inversa.','Todas directas: cruz.','Una inversa: cruz/dividir.','Paso a paso.'],
i:['1) Magnitudes.','2) Clasificar.','3) Directas cruz.','4) Dividir inversas.','5) Despejar.'],
a:['Temp, presion, volumen.','Velocidad, peso.','Trabajo, personas, horas.','Presion, temp, volumen.','Leyes fisicas.'],
gen:(E,R,MO)=>{const ex=[];
o=MO('Directas',['Inversas','Mixtas','Independientes']);ex.push(E('Velocidad, tiempo, distancia:',o.opts,o.idx,'Todas directas.'));
o=MO('1/2h',['2h','4.5h','3h']);ex.push(E('A=6h llena, B=3h vacia. Juntas:',o.opts,o.idx,'1/6-1/4 negativa.'));
o=MO('40',['50','100','200']);ex.push(E('4 maq 5h 200. 2maq 2h:',o.opts,o.idx,'200*2/4*2/5=40.'));
o=MO('x4',['x2','x1/2','x1/4']);ex.push(E('F prop m, inverso m. Fx2 mx2:',o.opts,o.idx,'2/2=1.'));
o=MO('x3/2',['x2/3','x6','x3']);ex.push(E('Trabajo prop t, inverso n. Tx3 Px2:',o.opts,o.idx,'3/2.'));
o=MO('12',['7','4/3','3/4']);ex.push(E('Trabajo prop n*t. nx3 tx4:',o.opts,o.idx,'3*4=12.','avanzado'));
o=MO('2:1',['1:2','1:1','3:2']);ex.push(E('A=20% B=50%. Para 30%:',o.opts,o.idx,'(50-30):(30-20).','intermedio'));
o=MO('x1/9',['x1/3','x9','x1/6']);ex.push(E('Coulomb: r triplica F:',o.opts,o.idx,'1/9.','avanzado'));
o=MO('400',['200','800','100']);ex.push(E('5 maq 4h 100p. 10maq 8h:',o.opts,o.idx,'100*2*2=400.','intermedio'));
o=MO('x3',['x3/2','x6','x2/3']);ex.push(E('Presion prop T inverso V. Tx3 Vx2:',o.opts,o.idx,'3/2.','avanzado'));
o=MO('x4/3',['x12','x3/4','x1/3']);ex.push(E('Caudal prop area inverso largo. Ax4 Lx3:',o.opts,o.idx,'4/3.','avanzado'));
o=MO('18',['27','54','9']);ex.push(E('3 obreros 6d 18m. 9en 2d:',o.opts,o.idx,'18*9/3*2/6=18.','intermedio'));
o=MO('x2/3',['x6','x3/2','x2']);ex.push(E('Velocidad prop F inverso m. Fx2 Px3:',o.opts,o.idx,'2/3.','intermedio'));
o=MO('x1/2',['x2','x4','x1/4']);ex.push(E('Volumen prop T inverso P. Tx2 Px4:',o.opts,o.idx,'2/4=1/2.','intermedio'));
const tr=R(2,4);o=MO(`${tr}ha`,[`${tr+5}ha`,`${tr*2}ha`,`${tr-2}ha`]);ex.push(E(`${tr} tractores 5d ${tr*10}ha. ${tr+1} en 5d:`,o.opts,o.idx,'Tractores directos.','avanzado'));
o=MO('x2',['x4','x1/2','x4/3']);ex.push(E('Velocidad prop F inverso m. Fx4 mx2:',o.opts,o.idx,'4/2=2.','avanzado'));
o=MO('18m',['27m','54m','9m']);ex.push(E('3 obreros 6d 18m. 9en 2d:',o.opts,o.idx,'18*9/3*2/6.','intermedio'));
o=MO('x3/2',['x2/3','x3','x6']);ex.push(E('Presion prop T inverso V. Tx3 Vx2:',o.opts,o.idx,'3/2.','avanzado'));
o=MO('x2/3',['x6','x3/2','x2']);ex.push(E('Temp prop P inverso V. Px2 Vx3:',o.opts,o.idx,'2/3.','avanzado'));
o=MO('50',['100','75','25']);ex.push(E('3 maq 4h 100piezas. 6 maq:',o.opts,o.idx,'100*6/3=200.','avanzado'));
o=MO('1/2h',['2h','1h','4h']);ex.push(E('A=1h llena B=1h vacia. Juntas:',o.opts,o.idx,'Se vacia.','avanzado'));
return ex.slice(0,21);},
},
];
