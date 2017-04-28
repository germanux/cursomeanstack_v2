var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var sockets = [];
io.origins("http://localhost:4200");
var chat = io.of("/chat");

chat.on("connection", (socket) => {
    console.log("Cliente conectado!!");
    sockets.push(socket);

    socket.on("mando-un-mensaje", (mensaje) => {
        console.log("Mensaje recibido: ", mensaje);

        mensaje.user = socket.id;

        // socket.emit("mando-un-mensaje", mensaje);
        // io.sockets.broadcast.emit("mando-un-mensaje", mensaje);

        chat.emit("mando-un-mensaje", mensaje);
    })
    socket.on("disconnect", (socket) => {
        console.log("socket desconectado!!");
    });
});
chat.on("disconnect", (socket) => {
    console.log("Cliente desconectado!!");
});

http.listen(3000, () => {
    console.log("Servidor iniciado *:3000");
})