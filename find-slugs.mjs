import { readFileSync } from "fs";
const need = ["recta-en-coordenadas","circunferencia-coordenadas","distancia-punto-recta","ley-de-senos","ley-de-cosenos","area-con-trigonometria","problemas-compuestos-geometrica","fractales-introduccion","guerras-civiles-xix","locus-geometrico"];
const DATA = "C:/Users/USUARIO/OneDrive/Documents/Default Project/src/data";
const files = ["geo-extra-exercises-4.ts","geo-extra-exercises-5.ts","geo-extra-exercises-6.ts","geo-extra-exercises-7.ts","historia-extra-exercises-2.ts"];
for (const f of files) {
  try {
    const code = readFileSync(`${DATA}/${f}`, "utf8");
    const found = need.filter(s => code.includes(`"${s}"`));
    if (found.length > 0) console.log(`${f}: ${found.join(", ")}`);
  } catch(e) {}
}
