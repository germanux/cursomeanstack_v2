var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LibroSchema = new Schema({
    titulo: String,
    autor: String,
    campos_biblioteca: {
        ejemplares: Number,
        ultima_reserva: {
            type: Date,
            default: Date.now
        }
    }
});
var ReservaSchema = new Schema({});

module.exports = {
    Libro: mongoose.model("Libro", LibroSchema),
    Reserva: mongoose.model("Reserva", ReservaSchema)
}