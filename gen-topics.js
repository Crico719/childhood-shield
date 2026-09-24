#!/usr/bin/env node
// Master generator: creates topics-remaining.js with all 58 topics
// Combines hand-crafted (p1) + compact definitions (p2-4) with exercise generators
const fs = require('fs'), P = require('path');
let gid = 50026;
const R = (a,b) => Math.floor(Math.random()*(b-a+1))+a;
const E = (q,o,a,e,d) => ({id:gid++,question:q,options:o,correctIndex:a,explanation:e,difficulty:d||'intermedio'});
const SH = a => {const b=[...a];for(let i=b.length-1;i>0;i--){const j=R(0,i);[b[i],b[j]]=[b[j],b[i]];}return b;};
const MO = (c,w) => {const o=SH([c,...w]);return{opts:o,idx:o.indexOf(c)};};

// Load all parts
let allTopicDefs = [];
try { allTopicDefs = allTopicDefs.concat(require('./topic-definitions')); } catch(e) {}
try { allTopicDefs = allTopicDefs.concat(require('./topic-defs-p2')); } catch(e) {}

const compactDefs = require('./compact-topics');

// Exercise generator templates for each template_type
function genExercises(slug, type, E, R, MO) {
  const ex = [];
  switch(type) {
    case 'enteros': {
      const a=R(1,20),b=R(1,20);
      let o=MO(String(a+b),[String(a-b),String(b-a),String(a*b)]);ex.push(E(`${a}+${b}=`,o.opts,o.idx,a+b+'.'));
      o=MO(String(a-b),[String(b-a),String(a+b),String(-a+b)]);ex.push(E(`${a}-${b}=`,o.opts,o.idx,(a-b)+'.'));
      o=MO(String(-a*b),[String(a*b),String(-a-b),String(a-b)]);ex.push(E(`-${a}x${b}=`,o.opts,o.idx,'Menos x mas = menos.'));
      o=MO(String(a*b),[String(-a*b),String(a+b),String(a-b)]);ex.push(E(`${a}x${b}=`,o.opts,o.idx,a*b+'.'));
      o=MO(String(a+b),[String(-a-b),String(a-b),String(b-a)]);ex.push(E(`-${a}+${a+b}=`,o.opts,o.idx,b+'.'));
      o=MO('0',[String(a),String(-a)]);ex.push(E(`${a}+(-${a})=`,o.opts,o.idx,'Opuestos=0.'));
      const c=R(2,5);o=MO(String(a*c),[String(a+c),String(a*c+1)]);ex.push(E(`${a}x${c}=`,o.opts,o.idx,a*c+'.'));
      o=MO(String(-a+b),[String(a-b),String(-(a-b))]);ex.push(E(`-${a}+${b}=`,o.opts,o.idx,'Distinto signo.'));
      o=MO(String(-a-b),[String(a+b),String(-a+b)]);ex.push(E(`-${a}-${b}=`,o.opts,o.idx,'Ambos negativos.'));
      o=MO(String(a),[String(-a),'0','No existe']);ex.push(E(`|${-a}|=`,o.opts,o.idx,'Valor absoluto=positivo.'));
      o=MO(String(a*b),[String(-a*b),String(a+b)]);ex.push(E(`(-${a})x(-${b})=`,o.opts,o.idx,'Menos x menos = mas.'));
      o=MO(String(a*(b+1)),[String(a*b+1),String(a+b+1)]);ex.push(E(`${a}x(${b}+1)=`,o.opts,o.idx,'Distributiva.'));
      o=MO(String(-a),[String(a),'0','No existe']);ex.push(E(`Inverso aditivo de ${a}:`,o.opts,o.idx,'-a.'));
      o=MO('1',['-1',String(a)]);ex.push(E(`Inverso multiplicativo de ${a}:`,o.opts,o.idx,'1/'+a+'.','intermedio'));
      o=MO(String(a*b),[String(b*a),String(a+b)]);ex.push(E(`${a}x${b}=${b}x${a}. Prop:`,o.opts,o.idx,'Conmutativa.','intermedio'));
      o=MO(String((a+b)*c),[String(a*c+b*c),String(a+b*c),String(a*c+b)]);ex.push(E(`(${a}+${b})x${c}=`,o.opts,o.idx,'Distributiva.','intermedio'));
      o=MO(String(-a*b),[String(a*b),String(-a-b)]);ex.push(E(`-${a}x${b}=`,o.opts,o.idx,'Signo distinto.','intermedio'));
      const c2=R(1,5);o=MO(String(a+b+c2),[String(a+b-c2),String(a-b+c2)]);ex.push(E(`(${a}+${b})+c = ${a}+(b+c). Prop:`,o.opts,o.idx,'Asociativa.','avanzado'));
      o=MO(String(a*b),[String(-a*b),String(a+b)]);ex.push(E(`(-${a})x(-${b})=`,o.opts,o.idx,'Cierre.','avanzado'));
      o=MO(String(a+b),[String(b+a),String(a*b),String(a-b)]);ex.push(E(`a+b=b+a (${a}+${b}). Prop:`,o.opts,o.idx,'Conmutativa.','avanzado'));
      const c3=R(2,4);o=MO(String(a*b*c3),[String(a+b*c3),String(a*b+c3)]);ex.push(E(`(${a}x${b})x${c3}=${a}x(${b}x${c3}). Prop:`,o.opts,o.idx,'Asociativa multiplicativa.','avanzado'));
      break;
    }
    case 'potencias': {
      const a=R(2,5),n=R(2,4);
      let o=MO(String(Math.pow(a,n)),[String(a*n),String(a+n),String(Math.pow(a,n-1))]);ex.push(E(`${a}^${n}=`,o.opts,o.idx,'Multiplicar '+n+' veces.'));
      o=MO('1',['0',String(a)]);ex.push(E(`${a}^0=`,o.opts,o.idx,'cualquier^0=1.'));
      o=MO(String(1/Math.pow(a,n)),[String(-Math.pow(a,n)),String(Math.pow(a,n))]);ex.push(E(`${a}^(-${n})=`,o.opts,o.idx,'1/'+Math.pow(a,n)+'.'));
      o=MO(String(Math.pow(a,n)*a),[String(Math.pow(a,n)+a),String(Math.pow(a,n))]);ex.push(E(`${a}^${n}x${a}=`,o.opts,o.idx,'a^(n+1).'));
      o=MO(String(Math.pow(a,2)),[String(a*2),String(a+2)]);ex.push(E(`${a}^2=`,o.opts,o.idx,a*a+'.'));
      o=MO(String(Math.pow(10,3)),[String(30),String(10+3)]);ex.push(E('10^3=',o.opts,o.idx,'1000.'));
      o=MO(String(Math.pow(a,n-1)),[String(Math.pow(a,n)/a),String(a*n)]);ex.push(E(`${a}^${n}/${a}=`,o.opts,o.idx,'a^(n-1).'));
      o=MO(String(Math.pow(2,n+1)),[String(Math.pow(2,n)*2),String(Math.pow(2,n)+2)]);ex.push(E(`2^${n}x2=`,o.opts,o.idx,'2^(n+1).','intermedio'));
      o=MO(String(Math.pow(a,2*n)),[String(Math.pow(a,n)*2),String(a*n*n)]);ex.push(E(`(a^${n})^${n}=`,o.opts,o.idx,'a^(n*n).','intermedio'));
      const b=R(2,4);o=MO(String(Math.pow(a,n)*Math.pow(b,n)),[String(Math.pow(a+b,n)),String(a*n+b*n)]);ex.push(E(`${a}^${n}x${b}^${n}=`,o.opts,o.idx,'(ab)^n.','intermedio'));
      o=MO(String(Math.sqrt(4)),[String(2),String(16),String(8)]);ex.push(E('sqrt(4)=',o.opts,o.idx,'2^2=4.'));
      o=MO(String(Math.sqrt(9)),[String(3),String(81),String(18)]);ex.push(E('sqrt(9)=',o.opts,o.idx,'3^2=9.'));
      o=MO(String(Math.sqrt(16)),[String(4),String(256),String(32)]);ex.push(E('sqrt(16)=',o.opts,o.idx,'4^2=16.'));
      o=MO('2',[String(4),String(8),String(6)]);ex.push(E('sqrt(4)=',o.opts,o.idx,'2.','intermedio'));
      o=MO('3',[String(9),String(27),String(6)]);ex.push(E('cbrt(27)=',o.opts,o.idx,'3^3=27.','intermedio'));
      o=MO('5',[String(25),String(10),String(125)]);ex.push(E('sqrt(25)=',o.opts,o.idx,'5.','avanzado'));
      o=MO(String(Math.pow(2,n)),[String(2*n),String(2+n),String(Math.pow(2,n+1))]);ex.push(E(`2^${n}=`,o.opts,o.idx,'Potencia de 2.','avanzado'));
      o=MO(String(Math.pow(a,2)),[String(a*2),String(a+2),String(Math.pow(a,3))]);ex.push(E(`${a}^2=`,o.opts,o.idx,'Base^2.','avanzado'));
      o=MO('4',[String(2),String(16),String(8)]);ex.push(E('sqrt(16)=',o.opts,o.idx,'4.','avanzado'));
      o=MO(String(Math.pow(a,n)*a),[String(Math.pow(a,n+1)),String(a*n+a),String(Math.pow(a,n-1))]);ex.push(E(`${a}^${n}xa=`,o.opts,o.idx,'a^(n+1).','avanzado'));
      o=MO('2',[String(4),String(8),String(6)]);ex.push(E('cbrt(8)=',o.opts,o.idx,'2.','avanzado'));
      break;
    }
    case 'cientifica': {
      let o;const n=R(3,7);o=MO(`1x10^${n}`,[`10^${n}`,`1x10^${n-1}`,`${n}x10`]);ex.push(E(`${Math.pow(10,n)} en notacion:`,o.opts,o.idx,'1x10^'+n+'.'));
      o=MO('3x10^3',['3000','3x10^4','300x10']);ex.push(E('3000 en notacion:',o.opts,o.idx,'3x10^3.'));
      o=MO('5x10^-3',['0.005','0.05','5x10^3']);ex.push(E('0.005 en notacion:',o.opts,o.idx,'5x10^-3.'));
      o=MO('1x10^0',['0','10','1x10^1']);ex.push(E('1 en notacion:',o.opts,o.idx,'1x10^0.'));
      const a1=R(1,9),e1=R(-3,-1);o=MO(`1x10^${e1+2}`,[`1x10^${e1}`,`1x10^${e1+3}`]);ex.push(E(`${a1}x10^${e1}=?`,o.opts,o.idx,'Notacion.'));
      o=MO('0.5',['5','50','0.05']);ex.push(E('5x10^-1=',o.opts,o.idx,'0.5.'));
      o=MO('100',['10','1000','10000']);ex.push(E('1x10^2=',o.opts,o.idx,'100.'));
      o=MO('0.01',['0.1','1','0.001']);ex.push(E('1x10^-2=',o.opts,o.idx,'0.01.'));
      o=MO('2.5x10^3',['250','25000','25']);ex.push(E('2500 en notacion:',o.opts,o.idx,'2.5x10^3.','intermedio'));
      o=MO('3.0x10^5',['30000','300000','3000000']);ex.push(E('300000 en notacion:',o.opts,o.idx,'3x10^5.','intermedio'));
      o=MO('4.5x10^-2',['0.45','0.045','45']);ex.push(E('0.045 en notacion:',o.opts,o.idx,'4.5x10^-2.','intermedio'));
      o=MO('1.2x10^4',['1200','12000','120000']);ex.push(E('12000 en notacion:',o.opts,o.idx,'1.2x10^4.','intermedio'));
      o=MO('6x10^6',['600000','6000000','60000000']);ex.push(E('6000000 en notacion:',o.opts,o.idx,'6x10^6.','intermedio'));
      o=MO('2x10^4',['10000','2000','200000']);ex.push(E('20000 en notacion:',o.opts,o.idx,'2x10^4.','avanzado'));
      o=MO('7.5x10^-4',['0.0075','0.075','75']);ex.push(E('0.00075 en notacion:',o.opts,o.idx,'7.5x10^-4.','avanzado'));
      o=MO('9.1x10^2',['91','910','9100']);ex.push(E('910 en notacion:',o.opts,o.idx,'9.1x10^2.','avanzado'));
      o=MO('3.33x10^-1',['3.33','0.333','0.0333']);ex.push(E('0.333 en notacion:',o.opts,o.idx,'3.33x10^-1.','avanzado'));
      o=MO('4.7x10^5',['47000','470000','4700000']);ex.push(E('470000 en notacion:',o.opts,o.idx,'4.7x10^5.','avanzado'));
      o=MO('1.01x10^6',['101000','1010000','10100000']);ex.push(E('1010000 en notacion:',o.opts,o.idx,'1.01x10^6.','avanzado'));
      o=MO('8x10^-5',['0.00008','0.0008','0.008']);ex.push(E('0.00008 en notacion:',o.opts,o.idx,'8x10^-5.','avanzado'));
      break;
    }
    case 'lineales': {
      const x=R(1,10),a=R(2,6),b=R(1,10);const c=a*x+b;
      let o=MO(String(x),[String(x+1),String(x-1),String(c)]);ex.push(E(`${a}x+${b}=${c}. x=`,o.opts,o.idx,(c-b)/a+'='+x+'.'));
      o=MO(String(x),[String(x+1),String(x-1),String(x*2)]);ex.push(E(`2x=${2*x}. x=`,o.opts,o.idx,x+'.'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`x+${b}=${x+b}. x=`,o.opts,o.idx,(x+b)+'-'+b+'='+x+'.'));
      o=MO(String(x),[String(x+2),String(x-2),String(x+1)]);ex.push(E(`3x+${b}=${3*x+b}. x=`,o.opts,o.idx,x+'.'));
      o=MO('3x+6',['2x+3','x+6','3x+3']);ex.push(E('3(x+2)=',o.opts,o.idx,'Distributiva.'));
      o=MO(String(-b/a),[String(b/a),String(a),String(c)]);ex.push(E(`${a}x+${b}=0. x=`,o.opts,o.idx,'-'+b+'/'+a+'.'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`4x-${4*x-c}=0. x=`,o.opts,o.idx,x+'.'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`${a}x=${a*x}. x=`,o.opts,o.idx,x+'.','intermedio'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`${a}x-${b}=${a*x-b}. x=`,o.opts,o.idx,x+'.','intermedio'));
      o=MO('x=3',['x=2','x=4','x=5']);ex.push(E('2x-6=0. x=',o.opts,o.idx,'2x=6, x=3.','intermedio'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`${a}x+${b}=${c}. x=`,o.opts,o.idx,'Igualar.','intermedio'));
      o=MO('5x-10=0',['5x+10=0','x-2=0','5x=10']);ex.push(E('Factorizar 5(x-2)=0:',o.opts,o.idx,'x=2.','intermedio'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`5x+${5*b}=0. x=`,o.opts,o.idx,-b+'.','intermedio'));
      o=MO(String(x),[String(x+2),String(x-2)]);ex.push(E(`${a}x-${a*x-c}=0. x=`,o.opts,o.idx,x+'.','avanzado'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`${a}x+${b}=${c}. x=`,o.opts,o.idx,'Despejar.','avanzado'));
      o=MO('No tiene',['x=0','x=1','x=2']);ex.push(E('0x+5=0:',o.opts,o.idx,'Sin solucion.'));
      o=MO('Todas las reales',['No tiene','x=0','x=1']);ex.push(E('0x+0=0:',o.opts,o.idx,'Infinitas.'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`(${a}x+${b})/(${a})=${c/a}. x=`,o.opts,o.idx,x+'.','avanzado'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`2x+3=2(${x}+1)+1. x=`,o.opts,o.idx,x+'.','avanzado'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`${a}x+${b}=${c}. Verificar x=${x}.`,o.opts,o.idx,'Sustituir.','avanzado'));
      o=MO(String(x),[String(x+1),String(x-1)]);ex.push(E(`(${a}x-${a*x-c})/${a}=x. x=`,o.opts,o.idx,x+'.','avanzado'));
      break;
    }
    case 'cuadraticas': {
      const x1=R(1,5),x2=R(1,5),a=R(1,3);const b=-a*(x1+x2),c=a*x1*x2;
      let o=MO(String(x1),[String(x2),String(-x1),String(x1+1)]);ex.push(E(`x^2-${x1+x2}x+${x1*x2}=0. x1=`,o.opts,o.idx,x1+'.'));
      o=MO(String(b),[String(-b),String(b+1)]);ex.push(E(`a^2+bx+c=0. b=coef de x.`,o.opts,o.idx,'b es lineal.'));
      o=MO(String(b*b-4*a*c),[String(b*b+4*a*c),String(4*a*c-b*b)]);ex.push(E(`Discriminante a=${a},b=${b},c=${c}:`,o.opts,o.idx,'b^2-4ac.'));
      o=MO('2 raices',['1 raiz','0 raices','3 raices']);ex.push(E('D>0 entonces:',o.opts,o.idx,'2 raices reales.'));
      o=MO('1 raiz',['2 raices','0 raices','Infinitas']);ex.push(E('D=0 entonces:',o.opts,o.idx,'1 raiz doble.'));
      o=MO('0 raices reales',['2 raices','1 raiz','Infinitas']);ex.push(E('D<0 entonces:',o.opts,o.idx,'Sin raiz real.'));
      const x=R(1,6);o=MO(String(x),[String(x+1),String(x-1),String(x*x)]);ex.push(E(`x^2=${x*x}. x=`,o.opts,o.idx,x+'.'));
      o=MO(String(2*x1),[String(x1),String(x1+x2),String(x1*x2)]);ex.push(E(`Suma raices = -b/a. Para x^2-${x1+x2}x+${x1*x2}:`,o.opts,o.idx,'x1+x2='+(x1+x2)+'.'));
      o=MO(String(x1*x2),[String(x1+x2),String(x1-x2)]);ex.push(E(`Producto raices=c/a:`,o.opts,o.idx,'x1*x2='+(x1*x2)+'.'));
      o=MO(String(x1),[String(x2),String(-x1)]);ex.push(E(`(x-${x1})(x-${x2})=0. x=`,o.opts,o.idx,x1+'.','intermedio'));
      o=MO(String(2*x),[String(x),String(x*x)]);ex.push(E(`(x-${x})^2=0. x=`,o.opts,o.idx,x+'. doble.','intermedio'));
      o=MO(String(x1),[String(x2),String(-x1)]);ex.push(E(`x^2-${x1+x2}x+${x1*x2}=0. Una raiz:`,o.opts,o.idx,'Factorizar.','intermedio'));
      o=MO(String(x1),[String(x2),String(x1+1)]);ex.push(E(`x^2-${x1+x2}x+${x1*x2}=0. x1=`,o.opts,o.idx,x1+'.','intermedio'));
      o=MO(String(x1),[String(x2),String(x1+1)]);ex.push(E(`x^2-${x1+x2}x+${x1*x2}=0. x2=`,o.opts,o.idx,x2+'.','intermedio'));
      o=MO('x=3',['x=2','x=4','x=1']);ex.push(E('x^2-6x+9=0. x=',o.opts,o.idx,'(x-3)^2, x=3.','avanzado'));
      o=MO(String(x1),[String(x2),String(-x1)]);ex.push(E(`${a}x^2+${b}x+${c}=0. x1=`,o.opts,o.idx,x1+'.','avanzado'));
      o=MO(String(x1),[String(x2),String(-x1)]);ex.push(E('Formula general, una raiz:',o.opts,o.idx,'D=0.'));
      o=MO(String(x1),[String(x2),String(-x1)]);ex.push(E(`x^2-${x1+x2}x+${x1*x2}=0. x1=`,o.opts,o.idx,'Completar cuad.','avanzado'));
      o=MO('No tiene',['x=1','x=0','x=-1']);ex.push(E('x^2+1=0:',o.opts,o.idx,'D<0.'));
      o=MO(String(x1),[String(x2),String(x1+1)]);ex.push(E(`(${a}x-${a*x1})(${a}x-${a*x2})=0. x1=`,o.opts,o.idx,x1+'.','avanzado'));
      break;
    }
    case 'sistemas': {
      const x=R(1,6),y=R(1,6);
      const a1=R(1,3),b1=R(1,3),c1=a1*x+b1*y;
      const a2=R(1,3),b2=R(1,3),c2=a2*x+b2*y;
      let o=MO(`x=${x},y=${y}`,[`x=${y},y=${x}`,`x=${x+1},y=${y}`,`x=${x},y=${y+1}`]);ex.push(E(`${a1}x+${b1}y=${c1} y ${a2}x+${b2}y=${c2}:`,o.opts,o.idx,'Resolver.'));
      o=MO('2 variables',['3','1','4']);ex.push(E('Sistema 2x2 tiene:',o.opts,o.idx,'2 ecuaciones, 2 incognitas.'));
      o=MO('Interseccion',['Paralelas','Coincidentes','Ninguna']);ex.push(E('Solucion grafica:',o.opts,o.idx,'Punto de interseccion.'));
      o=MO('Sin solucion',['1 solucion','Infinitas','2 soluciones']);ex.push(E('Paralelas:',o.opts,o.idx,'Sin solucion.'));
      o=MO('Infinitas',['Sin solucion','1 solucion','2 soluciones']);ex.push(E('Coincidentes:',o.opts,o.idx,'Infinitas.'));
      o=MO('Igualar',['Sumar','Restar','Multiplicar']);ex.push(E('Metodo de sustitucion:',o.opts,o.idx,'Igualar.'));
      o=MO('Eliminar',['Sustituir','Graficar','Adivinar']);ex.push(E('Metodo de eliminacion:',o.opts,o.idx,'Eliminar.'));
      o=MO(String(x),[String(y),String(x+1),String(x-1)]);ex.push(E(`x+y=${x+y} y x-y=${x-y}. x=`,o.opts,o.idx,x+'.','intermedio'));
      o=MO(String(y),[String(x),String(y+1),String(y-1)]);ex.push(E(`x+y=${x+y} y x-y=${x-y}. y=`,o.opts,o.idx,y+'.','intermedio'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E(`${a1}x+${b1}y=${c1}. x=`,o.opts,o.idx,x+'.','intermedio'));
      o=MO(String(y),[String(x),String(y+1)]);ex.push(E(`${a2}x+${b2}y=${c2}. y=`,o.opts,o.idx,y+'.','intermedio'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E(`Sistema resuelto. x=`,o.opts,o.idx,x+'.','intermedio'));
      o=MO(String(y),[String(x),String(y+1)]);ex.push(E(`Sistema resuelto. y=`,o.opts,o.idx,y+'.','intermedio'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E(`2x+3y=${2*x+3*y} x+y=${x+y}. x=`,o.opts,o.idx,x+'.','avanzado'));
      o=MO(String(y),[String(x),String(y+1)]);ex.push(E(`2x+3y=${2*x+3*y} x+y=${x+y}. y=`,o.opts,o.idx,y+'.','avanzado'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E(`Verificar: x=${x}, y=${y}.`,o.opts,o.idx,'Sustituir.','avanzado'));
      o=MO('Unica',['Ninguna','Infinitas','Dos']);ex.push(E('Si D!=0:',o.opts,o.idx,'Unica solucion.'));
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E(`Sistema 3 var. x=`,o.opts,o.idx,x+'.','avanzado'));
      o=MO('Sustitucion',['Grafica','Adivinacion','Opcion'],2,`Metodos: sustitucion, eliminacion.`,'avanzado');
      o=MO(String(x),[String(y),String(x+1)]);ex.push(E(`Ecuacion verbal: x=`,o.opts,o.idx,x+'.','avanzado'));
      break;
    }
    case 'inecuaciones': {
      const x=R(1,10),a=R(1,5);
      let o=MO(`x>${x-a}`,[`x<${x-a}`,`x>=${x-a}`,`x<=${x-a}`]);ex.push(E(`${a}x>${a*(x-a)}+${a*x-(a*(x-a))}. x>`,o.opts,o.idx,'Resolver.'));
      o=MO('Invertir al mult neg',['No cambiar','Cambiar signo','Dividir']);ex.push(E('Al multiplicar por -1:',o.opts,o.idx,'Invertir signo.'));
      o=MO('Recta numerica',['Tabla','Grafica','Circulo']);ex.push(E('Graficar inecuacion:',o.opts,o.idx,'Recta numerica.'));
      o=MO(`x>${R(1,5)}`,[`x<${R(1,5)}`,`x>=${R(1,5)}`]);ex.push(E(`x-${R(1,3)}>0. x>`,o.opts,o.idx,'Despejar.'));
      o=MO('Parentesis abierto',['Cerrado','Depende','Lineal']);ex.push(E('Para x>3:',o.opts,o.idx,'Circulo abierto.'));
      o=MO('Cerrado',['Abierto','Depende','Lineal']);ex.push(E('Para x>=3:',o.opts,o.idx,'Circulo cerrado.'));
      const v=R(2,8);o=MO(`x>${v}`,[`x<${v}`,`x>=${v}`,`x<=${v}`]);ex.push(E(`2x>${2*v}. x>`,o.opts,o.idx,v+'.'));
      o=MO(`x<${v}`,[`x>${v}`,`x<=${v}`,`x>=${v}`]);ex.push(E(`-2x<${-2*v}. x>`,o.opts,o.idx,v+'.','intermedio'));
      o=MO('Si',['No','Depende','Solo positivas']);ex.push(E('Al multiplicar negativo se invierte?',o.opts,o.idx,'Si.'));
      o=MO(`x>${R(1,5)}`,[`x<${R(1,5)}`,`x>=${R(1,5)}`]);ex.push(E(`3x+2>${R(3,20)}. x>`,o.opts,o.idx,'Despejar.','intermedio'));
      o=MO(`${R(1,3)}<x<${R(4,8)}`,[`x<${R(1,3)}`,`x>${R(4,8)}`]);ex.push(E(`x>${R(1,3)} y x<${R(4,8)}:`,o.opts,o.idx,'Intervalo.','intermedio'));
      o=MO(`x<=${R(3,8)}`,[`x>=${R(3,8)}`,`x<${R(3,8)}`]);ex.push(E(`-${R(1,3)}x>=-${R(3,24)}. x<=`,o.opts,o.idx,'Dividir neg.','intermedio'));
      o=MO(`x>=${R(0,3)}`,[`x<=${R(0,3)}`,`x>${R(0,3)}`]);ex.push(E(`|x-${R(2,5)}|>=${R(1,3)}. x>=`,o.opts,o.idx,'Dos casos.','avanzado'));
      o=MO(`x>${R(1,5)}`,[`x<${R(1,5)}`]);ex.push(E(`x^2-${R(3,8)}x>0. x>`,o.opts,o.idx,'Factorizar.','avanzado'));
      o=MO(`${R(1,4)}<x<${R(5,9)}`,[`x<${R(1,4)}`,`x>${R(5,9)}`]);ex.push(E(`x^2-${R(5,10)}x+${R(4,20)}<0:`,o.opts,o.idx,'Entre raices.'));
      o=MO(`x<=${R(1,5)}`,[`x>=${R(1,5)}`,`x<${R(1,5)}`]);ex.push(E(`${R(1,3)}x+${R(1,5)}>=${R(5,20)}. x<=`,o.opts,o.idx,'Invertir.','avanzado'));
      o=MO('Abierto',['Cerrado','Punto','Linea']);ex.push(E('Circulo abierto en grafica:',o.opts,o.idx,'> o <.'));
      o=MO('Cerrado',['Abierto','Punto','Linea']);ex.push(E('Circulo cerrado en grafica:',o.opts,o.idx,'>= o <=.'));
      o=MO(`${R(1,3)}<=x<=${R(4,8)}`,[`x<${R(1,3)}`,`x>${R(4,8)}`]);ex.push(E(`Sistema de inecuaciones:`,o.opts,o.idx,'Interseccion.','avanzado'));
      o=MO(`x>=-${R(1,3)}`,[`x<=-${R(1,3)}`,`x>-${R(1,3)}`]);ex.push(E(`3x>=-${R(1,5)}. x>=`,o.opts,o.idx,'Dividir.','avanzado'));
      o=MO(`x>=${R(0,3)}`,[`x<=${R(0,3)}`]);ex.push(E(`|x|>=${R(1,5)}. x>=`,o.opts,o.idx,'Absoluto.','avanzado'));
      break;
    }
    case 'valorabs': {
      const v=R(1,10);
      let o=MO(String(v),[String(-v),String(0),String(v+1)]);ex.push(E(`|${v}|=`,o.opts,o.idx,v+'.'));
      o=MO(String(v),[String(-v),String(0)]);ex.push(E(`|-${v}|=`,o.opts,o.idx,v+'.'));
      o=MO('Positivo o cero',['Negativo','Siempre positivo','Cero']);ex.push(E('El valor absoluto es:',o.opts,o.idx,'Positivo o cero.'));
      o=MO(String(v),[String(-v),String(0)]);ex.push(E(`|${v}|=`,o.opts,o.idx,v+'.'));
      o=MO('0',['No definido',String(v)]);ex.push(E('|0|=',o.opts,o.idx,'0.'));
      o=MO(String(v),[String(-v),String(2*v)]);ex.push(E(`|-${v}|+0=`,o.opts,o.idx,v+'.'));
      o=MO('3',['-3','9','6']);ex.push(E('|-3|=',o.opts,o.idx,'3.'));
      o=MO(String(v),[String(-v),String(v*2)]);ex.push(E(`|${v}|-0=`,o.opts,o.idx,v+'.'));
      o=MO(String(2*v),[String(v),String(v+1)]);ex.push(E(`|${v}|+|${v}|=`,o.opts,o.idx,2*v+'.','intermedio'));
      o=MO(String(v+R(1,5)),[String(v-R(1,3)),String(v)]);ex.push(E(`|x|= ${v+R(1,5)}. x=`,o.opts,o.idx,'+/-'+(v+R(1,5))+'.','intermedio'));
      o=MO(String(v),[String(-v),String(0)]);ex.push(E(`|-${v}|=`,o.opts,o.idx,v+'.','intermedio'));
      o=MO('5',['-5','10','0']);ex.push(E('|3-8|=',o.opts,o.idx,'|-5|=5.'));
      o=MO(String(v),[String(-v),String(v+1)]);ex.push(E(`|x|=${v}. x=`,o.opts,o.idx,'+/-'+v+'.','intermedio'));
      o=MO('Si',['No','Depende','Solo negativos']);ex.push(E('|-a|=|a|?',o.opts,o.idx,'Si.'));
      o=MO('3',['-3','1','9']);ex.push(E('|-3|=|3|=',o.opts,o.idx,'3.','intermedio'));
      o=MO(String(v),[String(-v),String(v+1)]);ex.push(E(`|x|=${v}. Una solucion:`,o.opts,o.idx,v+'.','avanzado'));
      o=MO(`${v},${-v}`,[`${v},${v}`,`${-v},${-v}`]);ex.push(E(`|x|=${v}. Soluciones:`,o.opts,o.idx,'+/-'+v+'.','avanzado'));
      o=MO('0 o mas',['Siempre positivo','Menor que 0','Cero siempre']);ex.push(E('|x| es:',o.opts,o.idx,'>=0.','avanzado'));
      o=MO(String(v),[String(-v),String(0)]);ex.push(E(`|-(${v})|=`,o.opts,o.idx,v+'.','avanzado'));
      o=MO('No tiene',['x=0','x=1','x=-1']);ex.push(E('|x|=-5:',o.opts,o.idx,'Imposible.'));
      o=MO(String(v),[String(-v),String(v+1)]);ex.push(E(`|2x-${2*v}|=0. x=`,o.opts,o.idx,v+'.','avanzado'));
      break;
    }
    default: {
      // Generic: 21 random math questions
      for(let i=0;i<21;i++){
        const a=R(1,20),b=R(1,20),ans=a+b;
        const o=MO(String(ans),[String(ans+R(1,5)),String(ans-R(1,3)),String(ans*2)]);
        const d=i<7?'basico':i<15?'intermedio':'avanzado';
        ex.push(E(`${a}+${b}=`,o.opts,o.idx,a+'+'+b+'='+ans+'.',d));
      }
      break;
    }
  }
  return ex.slice(0,21);
}

// Build all topics
const allTopics = [];

// Add hand-crafted topics from p1 and p2
for (const def of allTopicDefs) {
  const exArr = def.gen(E, R, MO);
  allTopics.push({
    s:def.s, t:def.t, p:def.p, b:def.b, i:def.i, a:def.a,
    ex: exArr.map(e => [e.question, e.options, e.correctIndex, e.explanation, e.difficulty])
  });
}

// Add compact template topics
for (const [s, t, p, b, i, a, type] of compactDefs) {
  // Skip if already added
  if (allTopics.some(x => x.s === s)) continue;
  const exArr = genExercises(s, type, E, R, MO);
  allTopics.push({
    s, t, p, b, i, a,
    ex: exArr.map(e => [e.question, e.options, e.correctIndex, e.explanation, e.difficulty])
  });
}

console.log(`Total topics: ${allTopics.length}`);

// Write topics-remaining.js
const header = 'module.exports = [\n';
const body = allTopics.map(t => JSON.stringify(t)).join(',\n');
fs.writeFileSync('topics-remaining.js', header + body + '\n];\n', 'utf8');
console.log(`Wrote topics-remaining.js: ${allTopics.length} topics, ${gid-50026} exercises`);
