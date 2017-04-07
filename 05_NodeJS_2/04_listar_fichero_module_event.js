"use strict";
let fs = require("fs");
let path = require("path");
let moduleEvents = require("events");

let EmisorDeEventos = moduleEvents.EventEmitter;
let miEmisor = new EmisorDeEventos();

module.exports = function(directorio, extension) {
    let funCallbackReadDir = function(error, ficheros) {
        if (error) {
            miEmisor.emit("alfiltrar", error, null);
            miEmisor.emit("onerror", error);
        } else {
            let siTieneExtension = function(fichero) {
                return path.extname(fichero) === extension;
            }
            ficheros = ficheros.filter(siTieneExtension);
            miEmisor.emit("alfiltrar", null, ficheros);
        }
    }
    fs.readdir(directorio, funCallbackReadDir);
}
module.exports.on = function(nombreEvento, funcionCallBack) {
    miEmisor.on(nombreEvento, funcionCallBack);
}