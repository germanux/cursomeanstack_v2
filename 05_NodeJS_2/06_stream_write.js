"use strict";

let fs = require("fs");

let streamLectura = fs.createReadStream("explorer.exe");
let streamLectura2 = fs.createReadStream("explorer_2.exe");

let streamEscritura = fs.createWriteStream("explorer_escritura.exe");

streamLectura.setEncoding("utf8");
streamLectura2.setEncoding("utf8");

streamLectura.on("data", alLeerStream);
streamLectura.on("end", alFinStream);
streamLectura2.on("data", alLeerStream2);
streamLectura2.on("end", alFinStream2);

function alLeerStream(miBuff) {
    console.log("Tamaño 1: " + miBuff.length);
    streamEscritura.write(miBuff.toString());
    streamEscritura.write(miBuff.toString());
}

function alLeerStream2(miBuff) {
    console.log("Tamaño 2: " + miBuff.length);
    streamEscritura.write(miBuff.toString());
    streamEscritura.write(miBuff.toString());
}

function alFinStream(miBuff) {
    console.log("FIN LECTURA 1");
}

function alFinStream2(miBuff) {
    console.log("FIN LECTURA 2");
}