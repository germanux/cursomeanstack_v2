"use strict";

const miBuff = Buffer.from("Hola munda", "utf8");
const miBuff2 = Buffer.alloc(20);
let miBuff3 = Buffer.alloc(50);

miBuff2[2] = miBuff[0];
miBuff2[4] = miBuff[1];
miBuff2[6] = miBuff[2];
miBuff2[8] = miBuff[3];

console.log("Contenido buffer: " + miBuff.toString());
console.log("Buffer en bruto: ");
console.log(miBuff);

console.log("Contenido buffer 2: " + miBuff2.toString());
console.log("Buffer en bruto: ");
console.log(miBuff2);

miBuff.copy(miBuff3, 0);
miBuff2.copy(miBuff3, 6);

console.log("Contenido buffer 3: " + miBuff3.toString());
console.log("Buffer en bruto: ");
console.log(miBuff3);