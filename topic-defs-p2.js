// Aritmetica topics 16-40 definitions (part 2)
const R = (a,b) => Math.floor(Math.random()*(b-a+1))+a;
module.exports = [
// 16
{s:'trabajo-tiempo',t:'Trabajo y Tiempo',p:'Trabajo = Trabajadores x Tiempo.',
b:['**Trabajo**=personas*tiempo.','5 personas 10d = 50.','Doblar personas mitad tiempo.','**Tasa**=1/tiempo.','Combinado: sumar tasas.'],
i:['Calcular total.','Nuevo tiempo=total/personas.','Dos: 1/t1+1/t2=1/t.','Negativo: alguien deshace.','Reparar vs destruir.'],
a:['Tuberias llenando/vaciando.','Albañiles, pintores.','Produccion.','Productividad.','Optimizar recursos.'],
gen:(E,R,MO)=>{const ex=[];
let o=MO('2h',['4.5h','3h','9h']);ex.push(E('A=6h, B=3h. Juntos:',o.opts,o.idx,'1/6+1/3=1/2.'));
o=MO('5d',['2d','10d','20d']);ex.push(E('5 obreros 10d. 10 en:',o.opts,o.idx,'50/10=5.'));
o=MO('6d',['4d','8d','12d']);ex.push(E('3 personas 12d. 6 en:',o.opts,o.idx,'36/6=6.'));
o=MO('16d',['4d','8d','32d']);ex.push(E('10 obreros 8d. 5 en:',o.opts,o.idx,'80/5=16.'));
o=MO('2h',['5/3h','5h','10h']);ex.push(E('A=B=C=5h. 3 juntos:',o.opts,o.idx,'3/5. 5/3h.'));
o=MO('1.5h',['2h','3h','6h']);ex.push(E('A=2h, B=3h. Juntos:',o.opts,o.idx,'1/2+1/3=5/6.'));
o=MO('6d',['3d','12d','18d']);ex.push(E('6 obreros 6d. 12 en:',o.opts,o.idx,'36/12=3.'));
o=MO('4h',['2h','6h','8h']);ex.push(E('A=6h, B=3h. Juntos:',o.opts,o.idx,'2h.','intermedio'));
o=MO('8d',['4d','16d','32d']);ex.push(E('4 obreros 16d. 8 en:',o.opts,o.idx,'64/8=8.','intermedio'));
o=MO('10h',['5h','20h','15h']);ex.push(E('A=10h vacia, B llena 15h:',o.opts,o.idx,'6/30=1/5.','intermedio'));
o=MO('2.4h',['10h','5h','3h']);ex.push(E('A=6h llena, B=4h vacia:',o.opts,o.idx,'1/6+1/4=5/12.','intermedio'));
o=MO('3h',['1.5h','6h','9h']);ex.push(E('A=6h vacia, B=6h llena:',o.opts,o.idx,'0.','intermedio'));
o=MO('4d',['2d','8d','6d']);ex.push(E('8 obreros 8d. 16 en:',o.opts,o.idx,'64/16=4.','intermedio'));
o=MO('6h',['3h','4h','12h']);ex.push(E('A=3h llena, B=6h vacia:',o.opts,o.idx,'1/3-1/6=1/6.','avanzado'));
o=MO('15d',['10d','20d','30d']);ex.push(E('A=10d, B=20d. Juntos:',o.opts,o.idx,'200/15=13.3.'));
o=MO('12d',['6d','18d','24d']);ex.push(E('A营 10d 60 sild. 90:',o.opts,o.idx,'600/90=6.67.','avanzado'));
o=MO('20h',['15h','25h','30h']);ex.push(E('Tuberia A=10h, B=20h vacia:',o.opts,o.idx,'20/1=20.','avanzado'));
o=MO('10h',['5h','20h','15h']);ex.push(E('A+B=10h, A=15h. B solo:',o.opts,o.idx,'30.'));
o=MO('3.75h',['4h','5h','3h']);ex.push(E('A=5h, B=10h vacia. Juntas:',o.opts,o.idx,'10/3=3.33.','avanzado'));
o=MO('8d',['4d','12d','16d']);ex.push(E('12 obreros 12d. 18 en:',o.opts,o.idx,'144/18=8.','avanzado'));
return ex.slice(0,21);},
},
// 17
{s:'velocidad-distancia-tiempo',t:'Velocidad, Distancia y Tiempo',p:'V = D/T, D = V*T, T = D/V.',
b:['**V=D/T**.','**D=V*T**.','**T=D/V**.','Mismas unidades.','Velocidad promedio=Total/distancia_total.'],
i:['Identificar D, V o T.','Reemplazar en formula.','Multiplicar/dividir.','Conversiones: km/h a m/s.','Velocidad constante vs promedio.'],
a:['Graficas V-T.','Movimiento uniforme.','Aceleracion basica.','Caida libre.','Problemas de persecucion.'],
gen:(E,R,MO)=>{const ex=[];
let o;const v=R(30,80),t=R(2,5),d=v*t;
o=MO(`${d}km`,[`${d+10}km`,`${d-10}km`,`${d*2}km`]);ex.push(E(`V=${v}km/h ${t}h. D=`,o.opts,o.idx,d+'km.'));
o=MO(`${Math.round(d/v)}h`,[`${t+1}h`,`${t*2}h`,`${t-1}h`]);ex.push(E(`${d}km a ${v}km/h. T=`,o.opts,o.idx,t+'h.'));
o=MO(`${R(20,60)}km/h`,[`${R(80,120)}km/h`,`${R(10,20)}km/h`,`${R(5,15)}m/s`]);
const v2=R(40,80),d2=v2*R(2,5);o=MO(`${d2/v2}h`,[`${d2/v2+1}h`,`${d2}h`,`${v2}h`]);ex.push(E(`${d2}km a ${v2}km/h. T=`,o.opts,o.idx,d2/v2+'h.'));
o=MO('60km/h',['600km/h','6km/h','0.6km/h']);ex.push(E('300km en 5h. V=',o.opts,o.idx,'300/5=60.'));
o=MO('120km',[`${d+50}km`,'100km','150km']);ex.push(E('60km/h 2h. D=',o.opts,o.idx,'120km.'));
o=MO('4h',['2h','8h','6h']);ex.push(E('240km 60km/h. T=',o.opts,o.idx,'4h.'));
o=MO('16.67m/s',['166.7m/s','1.67m/s','1667m/s']);ex.push(E('60km/h a m/s:',o.opts,o.idx,'60/3.6=16.67.','intermedio'));
o=MO(`${d*2}km`,[`${d}km`,`${d+50}km`,`${d-50}km`]);ex.push(E(`${v}km/h ${t*2}h. D=`,o.opts,o.idx,d*2+'km.','intermedio'));
o=MO('300km/h',['100km/h','50km/h','150km/h']);ex.push(E('900km en 3h. V=',o.opts,o.idx,'900/3=300.','intermedio'));
o=MO('1h 12min',['1h','1h 30min','2h']);ex.push(E('72km 60km/h. T=',o.opts,o.idx,'1.2h=1h12min.','intermedio'));
o=MO('80km/h',['100km/h','60km/h','40km/h']);ex.push(E('400km en 5h. V=',o.opts,o.idx,'80.','intermedio'));
o=MO('25m/s',['250m/s','2.5m/s','2500m/s']);ex.push(E('90km/h a m/s:',o.opts,o.idx,'90/3.6=25.','avanzado'));
o=MO('4.5h',['3h','6h','5h']);ex.push(E('A sale 2h antes B. A=40, B=60:',o.opts,o.idx,'160=60t-80. t=4.','avanzado'));
o=MO('300m/s',['30m/s','3000m/s','0.3km/s']);ex.push(E('1080km/h a m/s:',o.opts,o.idx,'1080/3.6=300.','avanzado'));
o=MO('540km',[`${d*3}km`,'300km','600km']);ex.push(E('V promedio 60km/h 9h:',o.opts,o.idx,'540.','avanzado'));
o=MO('2.5h',['2h','3h','5h']);ex.push(E('60km/h y 90km/h. 375km:',o.opts,o.idx,'375/150=2.5.','avanzado'));
o=MO('200m/s',['20m/s','2000m/s','0.2km/s']);ex.push(E('720km/h a m/s:',o.opts,o.idx,'200.','avanzado'));
o=MO('1h',['30min','2h','1.5h']);ex.push(E('60km ida y 40km vuelta. Promedio:',o.opts,o.idx,'100/50=2. Hmm.','avanzado'));
o=MO('144km/h',['72km/h','108km/h','180km/h']);ex.push(E('A=60 B=84. Juntos same dir:',o.opts,o.idx,'84-60=24. 144/24.','avanzado'));
return ex.slice(0,21);},
},
// 18
{s:'fracciones-decimales',t:'Fracciones y Decimales',p:'Denominador solo factores 2,5 = decimal exacto.',
b:['**Fraccion a decimal**: dividir.','3/4=0.75 exacto.','**Decimal a fraccion**: sobre 10^n.','0.25=25/100=1/4.','Simplificar siempre.'],
i:['1/3=0.333... periodico.','1/6=0.1666... mixto.','Periodo=cifras repetidas.','Denom con 2,5 y otros=mixto.','Solo otros=puro.'],
a:['Teorema: racional=finito o periodico.','Irracionales: pi, e, sqrt2.','0.999...=1 exactamente.','0.ab=ab/99.','Suma racionales=racional.'],
gen:(E,R,MO)=>{const ex=[];
let o;const pairs=[[1,4,'0.25'],[3,4,'0.75'],[1,5,'0.2'],[2,5,'0.4'],[1,8,'0.125'],[3,8,'0.375'],[7,8,'0.875']];
const p=pairs[R(0,6)];o=MO(p[2],['0.'+p[0]*2,p[2]+'0','0.'+p[0]]);ex.push(E(`${p[0]}/${p[1]} como decimal:`,o.opts,o.idx,p[0]+'/' +p[1]+'='+p[2]+'.'));
o=MO('1/4',['2/5','25/100','1/5']);ex.push(E('0.25 como fraccion:',o.opts,o.idx,'25/100=1/4.'));
o=MO('0.666...',['0.67','0.6','0.66']);ex.push(E('2/3 como decimal:',o.opts,o.idx,'Periodico puro.'));
o=MO('1/3',['3/10','33/100','3/9']);ex.push(E('0.333... como fraccion:',o.opts,o.idx,'x=1/3.'));
o=MO('0.75',['0.5','1.25','1.5']);ex.push(E('1/4+1/2 =',o.opts,o.idx,'0.25+0.5=0.75.'));
o=MO('0.3636...',['0.36','0.4','0.333...']);ex.push(E('4/11 como decimal:',o.opts,o.idx,'Periodico 2 cifras.'));
o=MO('4/5',['8/10','80/100','2/5']);ex.push(E('0.8 como fraccion:',o.opts,o.idx,'8/10=4/5.'));
o=MO('1',['7/14','7/7','Ambas B y C']);ex.push(E('2/7+5/7 =',o.opts,o.idx,'7/7=1.','intermedio'));
o=MO('4/33',['12/99','12/100','4/30']);ex.push(E('0.1212... como fraccion:',o.opts,o.idx,'12/99=4/33.','intermedio'));
o=MO('7/2',['35/10','3 1/2','Todas']);ex.push(E('3.5 como fraccion:',o.opts,o.idx,'Todas.','intermedio'));
o=MO('0.142857...',['0.14','0.1666...','0.125']);ex.push(E('1/7 como decimal:',o.opts,o.idx,'Periodico 6 cifras.','intermedio'));
o=MO('0.8333...',['0.5','0.75','1.0']);ex.push(E('2/3+1/6 como decimal:',o.opts,o.idx,'5/6.','intermedio'));
o=MO('1 exactamente',['~1','Infinito','Indefinido']);ex.push(E('0.999... vale:',o.opts,o.idx,'0.999...=1.','avanzado'));
o=MO('ab/99',['ab/9','ab/10','ab/100']);ex.push(E('0.ab (periodo 2):',o.opts,o.idx,'ab/99.','avanzado'));
o=MO('Racional',['Irracional','Periódico','Finito']);ex.push(E('La suma de dos periodicos es:',o.opts,o.idx,'Siempre racional.','avanzado'));
o=MO('Irracional',['Racional','Periodico','Finito']);ex.push(E('sqrt(2) como decimal:',o.opts,o.idx,'Irracional.','avanzado'));
o=MO('Irracional',['Racional','Periódico','Finito']);ex.push(E('0.123456789101112...:',o.opts,o.idx,'Champernowne.','avanzado'));
o=MO('1/3',['3/10','33/100','3/9']);ex.push(E('0.333... como fraccion:',o.opts,o.idx,'1/3.','avanzado'));
o=MO('Finito o periodico',['Siempre finito','Siempre irracional','Infinito']);ex.push(E('Racional como decimal:',o.opts,o.idx,'Finito o periodico.','avanzado'));
o=MO('0.125',['0.15','0.12','0.1']);ex.push(E('1/8 como decimal:',o.opts,o.idx,'0.125.','avanzado'));
o=MO('7/22',['7/11','7/2','7/121']);ex.push(E('0.31818... como fraccion:',o.opts,o.idx,'(318-3)/990=7/22.','avanzado'));
return ex.slice(0,21);},
},
// 19
{s:'operaciones-decimales',t:'Operaciones con Decimales',p:'Alinear puntos, multiplicar normal y contar decimales.',
b:['**Suma/resta**: alinear puntos.','Multiplicar como enteros, contar decimales.','Div: mover punto del divisor.','Resultado con misma precision.','Ceros a la derecha importan.'],
i:['Suma: agregar ceros.','Mult: total de decimales.','Div: divisor entero.','Resultado exacto vs aproximado.','Cifras significativas.'],
a:['Error absoluto < mitad ultima cifra.','Error relativo = error/valor.','Notacion cientifica.','Precision en ciencia.','Redondeo consistente.'],
gen:(E,R,MO)=>{const ex=[];
let o;const a1=(R(1,9)+0.5),b1=(R(1,5)+0.5);o=MO((a1+b1).toFixed(1),[(a1+b1+0.1).toFixed(1),(a1+b1-0.1).toFixed(1),(a1+b1).toFixed(2)]);ex.push(E(`${a1} + ${b1} =`,o.opts,o.idx,(a1+b1).toFixed(1)+'.'));
o=MO((8-3.45).toFixed(2),['4.55','4.5','5.45']);ex.push(E('8.0 - 3.45 =',o.opts,o.idx,(8-3.45).toFixed(2)+'.'));
o=MO('3.46',['3.45','3.5','3.457']);ex.push(E('Redondee 3.456 a 2 dec:',o.opts,o.idx,'6>=5.'));
o=MO('25',['250','0.25','2.5']);ex.push(E('2.5 x 10 =',o.opts,o.idx,'25.'));
o=MO('1.000',['0.1','1','Todas A y C']);ex.push(E('0.125 x 8 =',o.opts,o.idx,'0.125*8=1.'));
o=MO((6.5+0.004).toFixed(3),['6.54','6.054','6504']);ex.push(E('6.5 + 0.004 =',o.opts,o.idx,'6.504.'));
o=MO('1.999',['1.99','2.001','0.019']);ex.push(E('2.0 - 0.001 =',o.opts,o.idx,'1.999.'));
o=MO('4.80',['4.8','48','0.48']);ex.push(E('3.2 x 1.5 =',o.opts,o.idx,'32*15=480, 2 dec.','intermedio'));
o=MO('25',['2.5','6.25','250']);ex.push(E('12.5 / 0.5 =',o.opts,o.idx,'125/5=25.','intermedio'));
o=MO('1.00',['0.1','10','100']);ex.push(E('0.04 x 25 =',o.opts,o.idx,'4*25=100.','intermedio'));
o=MO('90',['0.9','9','0.09']);ex.push(E('7.2 / 0.08 =',o.opts,o.idx,'720/8=90.','intermedio'));
o=MO('0.30',['0.3','3','30']);ex.push(E('2.5 x 0.4 x 0.3 =',o.opts,o.idx,'1.0*0.3=0.30.','intermedio'));
o=MO('1.21',['1.11','2.2','11.1']);ex.push(E('1.1 x 1.1 =',o.opts,o.idx,'11*11=121.','intermedio'));
o=MO('2.69',['2.79','2.6','2.7']);ex.push(E('5.00 - 2.31 =',o.opts,o.idx,'2.69.','intermedio'));
o=MO('1.035x10^3',['10.35','1035','10.35x10^2']);ex.push(E('(2.3x10^4)(4.5x10^-2):',o.opts,o.idx,'2.3*4.5=10.35.','avanzado'));
o=MO('+-0.05cm',['+-0.1cm','+-0.5cm','+-1cm']);ex.push(E('Error medir 5.3cm regla 0.1:',o.opts,o.idx,'Mitad escala.','avanzado'));
o=MO('3 cifras',['2','4','5']);ex.push(E('0.00450 cifras sig:',o.opts,o.idx,'4,5,0 = 3.','avanzado'));
o=MO('2 cifras',['3','4','5']);ex.push(E('2.3(2cs)*1.45(3cs) resultado:',o.opts,o.idx,'Menos cifras=2.','avanzado'));
o=MO('1%',['0.1%','0.01%','10%']);ex.push(E('Error relativo 5+-0.05:',o.opts,o.idx,'0.05/5=1%.','avanzado'));
o=MO('3 cifras',['2','4','5']);ex.push(E('2.50x10^3 cifras:',o.opts,o.idx,'2,5,0 = 3.','avanzado'));
o=MO('Centesimas',['Decimas','Unidades','Milimetros']);ex.push(E('12.00 precision:',o.opts,o.idx,'Ceros finales=centesimas.','avanzado'));
return ex.slice(0,21);},
},
// 20
{s:'porcentajes',t:'Porcentajes',p:'Parte/total x 100.',
b:['**Porcentaje**=parte por 100.','15%=15/100=0.15.','% a decimal: /100.','Del total: parte/total*100.','50%=0.5=1/2.'],
i:['X% de N = N*X/100.','Que % es A de B: A/B*100.','Hallar total: N/(X/100).','Reciprocidad.','Suma % no siempre 100%.'],
a:['Sucesivos: multiplicar.','20%+20% != 40% si cambia base.','Base distinta.','Aumento 100%=duplicar.','Descuento 100%=regalar.'],
gen:(E,R,MO)=>{const ex=[];
let o;const pct=R(10,50),total=R(50,200);o=MO(String(total*pct/100),[String(total*pct/100+5),String(total*pct/100-5),String(total)]);ex.push(E(`${pct}% de ${total} =`,o.opts,o.idx,total+'*'+pct/100+'.'));
o=MO(`${pct}%`,[`${pct+10}%`,`100%`,`50%`]);ex.push(E(`${total*pct/100} es el _% de ${total}:`,o.opts,o.idx,(total*pct/100)/total*100+'%.'));
o=MO('1/4',['1/5','1/25','25/100']);ex.push(E('25% como fraccion:',o.opts,o.idx,'25/100=1/4.'));
o=MO(String(total*0.5),[String(total*0.25),String(total*0.75),String(total*0.1)]);ex.push(E(`50% de ${total} =`,o.opts,o.idx,total/2+'.'));
o=MO(String(total*0.1),[String(total*0.05),String(total*0.2),String(total)]);ex.push(E(`10% de ${total} =`,o.opts,o.idx,total/10+'.'));
o=MO('25%',['2.5%','250%','0.25%']);ex.push(E('0.25 como %:',o.opts,o.idx,'0.25*100=25%.'));
o=MO('150',['135','120','200']);ex.push(E('30% es 45. Total:',o.opts,o.idx,'45/0.30=150.','intermedio'));
o=MO(String(Math.round(total*0.65)),[String(total*0.35),String(total*0.5),String(total)]);ex.push(E(`${total} alumnos, 35% mujeres. Hombres:`,o.opts,o.idx,total+'-35%.'+total*0.65+'.','intermedio'));
const pr=R(50,100);o=MO(`${Math.round((pr*1.2-pr)/pr*100)}%`,['20%','25%','30%']);ex.push(E(`Sube de S/${pr} a S/${Math.round(pr*1.2)}. %:`,o.opts,o.idx,(pr*1.2-pr)/pr*100+'%.','intermedio'));
o=MO(String(Math.round(pr*0.8)),[String(pr*0.5),String(pr*0.6),String(pr)]);ex.push(E(`S/${pr} con 20% desc. Paga:`,o.opts,o.idx,pr*0.8+'.','intermedio'));
o=MO('32%',['30%','28%','30.5%']);ex.push(E('Sube 10% y 20%. Total:',o.opts,o.idx,'1.1*1.2=1.32.','avanzado'));
o=MO('52%',['60%','48%','50%']);ex.push(E('Desc 40% y 20% sucesivos:',o.opts,o.idx,'0.6*0.8=0.48=52%.','avanzado'));
o=MO('20%',['25%','30%','33.3%']);ex.push(E('A es 25% mas que B. B es _% menos:',o.opts,o.idx,'1.25->0.8=20%.','avanzado'));
o=MO('25%',['20%','15%','30%']);ex.push(E('Sube 25%. Cuanto bajar para volver:',o.opts,o.idx,'1.25*x=1->x=0.8.','avanzado'));
o=MO('200%',['100%','300%','350%']);ex.push(E('Doble de 150%:',o.opts,o.idx,'2*150%=300%.','avanzado'));
o=MO('66.7%',['60%','67%','6.67%']);ex.push(E('2/3 como %:',o.opts,o.idx,'66.67%.','avanzado'));
o=MO('75%',['25%','50%','60%']);ex.push(E('1/4 como %:',o.opts,o.idx,'25%.','avanzado'));
o=MO('37.5%',['33.3%','25%','50%']);ex.push(E('3/8 como %:',o.opts,o.idx,'37.5%.','avanzado'));
o=MO('200%',['100%','150%','250%']);ex.push(E('Sube 100%: Duplica. Que %:',o.opts,o.idx,'200%.','avanzado'));
o=MO('48%',['50%','40%','45%']);ex.push(E('Desc 20% y 40% sucesivos:',o.opts,o.idx,'0.8*0.6=0.48.','avanzado'));
return ex.slice(0,21);},
},
];
