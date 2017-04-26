var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/db_ejemplo");

var Schema = mongoose.Schema;

var LibroSchema = new Schema({
    titulo: String,
    autor: String,
    sinopsis: String,
    fecha: Date,
    categoria: String,
    campos_biblioteca: {
        ejemplares: Number,
        reservas: Number,
        ultima_reserva: Date
    }
});
LibroSchema.add({ estado: String });

// LibroSchema.add({ estado: String });

var Libro = mongoose.model("Libro", LibroSchema);

var docLOTR = new Libro({
    titulo: "Lord of the rings2",
    autor: "JRR Tolkien",
    sinopsis: "KLJ kljlñks fklajs fklasfjsdj asjlkfasdfsd",
    estado: "Nuevo estado",
    campo_que_no_existe: "Un valor",
    fecha: new Date("1957-03-05 07:00:00"),
    campos_biblioteca: {
        ejemplares: 9,
        ultima_reserva: Date.now()
    }
});
docLOTR.save(alGuardar);

function alGuardar(error) {
    if (error) {
        console.error("Error al guardar: ", error);
    } else {
        console.log("Guardado con id: " + docLOTR._id);
        Libro.find((error, data) => {
            console.log(data);
        });
    }
};
Libro.find((error, data) => {
    console.log(data);
});