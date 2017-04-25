var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient,
    ObjectId = mongodb.ObjectId,
    test = require("assert"),
    url = "mongodb://localhost:27017/db_hotel";

MongoClient.connect(url, alConectarDBActualizar);

function alConectarDBActualizar(err, db) {

    test.equal(null, err);

    db.collection("clientes").update({ "_id": ObjectId("58ff214da3d0171358bcb8ff") }, { "$set": { "email": "nuevo_email_ana@empresa.com" } });
    db.collection("clientes").update({ "_id": ObjectId("58ff214da3d0171358bcb901") }, { "$unset": { "email": "" } });

    db.collection("clientes").update({ "_id": ObjectId("58ff214da3d0171358bcb8ff") }, { "$rename": { "email": "nuevo_campo_email" } });

    db.collection("reservas").update({ "_id": ObjectId("58ff1442b305c0086811ee28") }, { "$inc": { "numero_habitaciones": 3 } });

    var reserva = db.collection("reservas").findOne({ "_id": ObjectId("58ff1442b305c0086811ee28") },
        function(err, document) {
            console.log("email: " + document.email + ", hab: " + document.numero_habitaciones);
        });

    var reserva = db.collection("reservas").find({ "_id": ObjectId("58ff1442b305c0086811ee28") })
        .toArray(function(err, documents) {

            console.log("email: " + documents[0].email +
                ", hab: " + documents[0].numero_habitaciones);
        })
}

function alConectarDBInsertar(err, db) {
    var documentoReserva = {
        nombre: "Primera Persona del Singular",
        email: "email@ejemplo.com",
        fecha_inicio: "25/04/2017",
        fecha_fin: "30/04/2017",
        tipo_habitacion: 1,
        numero_habitaciones: 1,
        con_desayuno: false
    };
    db.collection("reservas").insert(documentoReserva);
    console.log(db.collection("reservas").find());

    var arrayColeccion = [
        { nombre: "Ana Perez", email: "anap@empresa.com" },
        { nombre: "Luis Fernandez", email: "lfer@empresa.com" },
        { nombre: "Javier Gutierrez", email: "jguti@empresa.com" }
    ];
    db.collection("clientes").insert(arrayColeccion);
}