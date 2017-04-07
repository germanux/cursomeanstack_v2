"use strict";

let fs = require("fs");
let zlib = require("zlib");

let streamLectura = fs.createReadStream("fich_write.txt.gz");
let streamEscritura = fs.createWriteStream("fich_descomprimido.txt");

// streamLectura.setEncoding("utf8");
streamLectura.pipe(zlib.createGunzip()).pipe(streamEscritura);
streamLectura.unpipe();

let streamLectura2 = fs.createReadStream("fich_descomprimido.txt");
let streamEscritura2 = fs.createWriteStream("fich_write_new.txt.gz");

// streamLectura.setEncoding("utf8");
streamLectura2.pipe(zlib.createGzip()).pipe(streamEscritura2);