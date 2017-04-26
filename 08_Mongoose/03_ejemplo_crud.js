var mongoose = require("mongoose");
mongoose.connect("localhost:27017/db_ejemplo");
var Modelo = require("./03_ejemplo_modelo");
var Libro = Modelo.Libro;

function getLibros(limit, funcionCallBack) {
    var array = [];
    array = Libro.find().limit(limit).toArray();
    funcionCallBack(array);
}

function getLibroById(_id) {
    Libro.findById(_id, (error, libro) => {
        console.log(libro.titulo);
        return libro;
    })
}

function saveLibro(libro) {
    (new Libro(libro)).save((error) => {
        console.log("Libro guardado");
    })
}

function updateLibro(_id, campo, valor) {
    var libro = getLibroById(_id);
    libro[campo] = valor;
    saveLibro(libro);
}
module.exports = {
    getLibros: getLibros,
    getLibroById: getLibroById,
    saveLibro: saveLibro,
    updateLibro: updateLibro
}