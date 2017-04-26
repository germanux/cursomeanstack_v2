var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/db_ejemplo");

var Schema = mongoose.Schema;

var LibroSchema = new Schema({
    titulo: {
        type: String,
        required: [true, "Este campo está requerido!"],
        // required: true
        validate: {
            validator: (valor) => {
                return /^[A-Z]/.test(valor);
            },
            message: "`{VALUE}` de `{PATH}` tipo `{TYPE}` No empieza por mayusculas"
        }
    },
    autor: String,
    sinopsis: {
        type: String,
        trim: true
    },
    fecha: Date,
    categoria: {
        type: String,
        enum: {
            values: ["aventuras", "terror", "novela"],
            message: "Campo CATEGORIA NO VALIDO"
        },
        required: true
    },
    campos_biblioteca: {
        ejemplares: {
            type: Number,
            min: [10, "Menos de 10 no merece la pena vender"]
        },
        reservas: Number,
        ultima_reserva: {
            type: Date,
            default: Date.now
        }
    }
});
LibroSchema.add({ estado: String });

var Libro = mongoose.model("Libro", LibroSchema);

var docLOTR = new Libro({
    titulo: "Lord   of   the   rings - Comunidad  ",
    autor: "JRR    Tolkien",
    sinopsis: "   KLJ   kljlñks   fklajs fklasfjsdj asjlkfa    ",
    estado: "Nuevo estado",
    campo_que_no_existe: "Un valor",
    fecha: new Date("1957-03-05 07:00:00"),
    categoria: "categoria no valida",
    campos_biblioteca: { ejemplares: 11 }
});
var docLOTR_2 = new Libro({
    titulo: "lord   of   the   rings - Dos torres  ",
    autor: "JRR    Tolkien",
    sinopsis: "   KLJ   kljlñks   fklajs fklasfjsdj asjlkfa    ",
    estado: "Nuevo estado",
    campo_que_no_existe: "Un valor",
    fecha: new Date("1957-03-05 07:00:00"),
    categoria: "terror",
    campos_biblioteca: {
        ejemplares: 9
    }
});
docLOTR.save(alGuardar);
docLOTR_2.save(alGuardar);

function alGuardar(error) {
    if (error) {
        // console.error("Error al guardar: ", error);
        Libro.schema.eachPath((campo) => {
            if (error.errors[campo]) {
                console.error(error.errors[campo].message);
            }
        })
    } else {
        console.log("Guardado con id: " + docLOTR._id);
        Libro.find((error, data) => {
            // console.log(data);
        });
    }
};