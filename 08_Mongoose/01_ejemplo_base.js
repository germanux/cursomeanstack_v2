var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/db_ejemplo");

var Libro = mongoose.model("Libro", {
    titulo: String,
    autor: String,
    paginas: Number
}, "libreria");
var Camion = mongoose.model("Camion", {
    marca: String,
    modelo: String,
    ruedas: Number
}, "camiones");

var nuevoLibro = new Libro({
    titulo: "El señor de los Anillos",
    autor: "J. R. Tolkien",
    paginas: 1999
});
nuevoLibro.save((error, data) => {
    if (error) {
        console.error("Error al guardar: ", error);
    } else {
        console.log("Libro guardado: " + data.titulo);
    }
});
var nuevoCamion = new Camion({
    marca: "Pegaso",
    modelo: "Modelo Pegaso V1",
    ruedas: 8
});
nuevoCamion.save((error, data) => {
    if (error) {
        console.error("Error al guardar: ", error);
    } else {
        console.log("Camion guardado: " + data.modelo);
    }
});