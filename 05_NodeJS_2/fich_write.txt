process.on("exit",
    function(codigo) {
        console.log("Saliendo de marcha " + codigo);
    }
);

console.log("Titulo: ", process.title);
console.log("S.O. ", process.platform);
process.exit(3);
console.log("PID ", process.pid);