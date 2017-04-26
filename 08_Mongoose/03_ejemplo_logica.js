var apiLibro = require("./03_ejemplo_crud");

apiLibro.saveLibro({
    titulo: "El guardian entre el centeno",
    autor: "El autor del libro"
});
apiLibro.saveLibro({
    titulo: "El señor de los anillos",
    autor: "JRR Tolkien"
});
apiLibro.saveLibro({
    titulo: "El lobo estepario",
    autor: "Hermann Hesse"
});
var libros;
libros = apiLibro.getLibros(2, (arrayLibros) => {

    console.log("libros: " + arrayLibros);
});
/*
var libro;
libro = apiLibro.getLibroById("5900825867b004169c98bc26");
console.log("libro: " + libro);
apiLibro.updateLibro(libro, "autor", "Nuevo autor");

libro = apiLibro.getLibroById("5900825867b004169c98bc26");
console.log("libro: " + libro);*/