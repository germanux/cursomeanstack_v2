"use strict";
let moduloFiltrado = require("./04_listar_fichero_module_event.js");
let directorio = "./"; // process.argv[2];
let extension = ".js"; // process.argv[3];

function queHacerCuandoDevuelvaLosFicheros(error, arraryDeFicheros) {
    if (error) {
        console.log("Error en Listar Fichero" + error);
    } else {
        arraryDeFicheros.forEach((fichero) => {
            console.log("Fichero: " + fichero);
        });
    }
}

function funAlHaberError(error) {
    console.log("Error en Listar Fichero" + error);
}
moduloFiltrado.on("alfiltrar", queHacerCuandoDevuelvaLosFicheros);
// moduloFiltrado.on("onerror", funAlHaberError);

moduloFiltrado(directorio, extension);