var numeroClientes = 0;
var mensajes = [{
    id: 1,
    text: "Primer mensaje del servidor",
    author: "Servidor"
}];
var clientes = {};

function getNumClientes() { return { "numeroClientes": numeroClientes }; }

function agregarCliente() { numeroClientes++; }

function quitarCliente() { numeroClientes--; }

var autores = 0;
var colores = ["red", "green", "blue", "yellow"];

function agregarMensaje(mensaje) {
    if (!clientes[mensaje.author]) {
        clientes[mensaje.author] = "#" + colores[autores] + "" + 0 + "" + 0;
        autores++;
    }
    mensaje.color = clientes[mensaje.author];
    mensajes.push(mensaje);
}

function getMensajes() { return mensajes; }

module.exports = {
    "getNumClientes": getNumClientes,
    agregarCliente: agregarCliente,
    quitarCliente: quitarCliente,
    agregarMensaje: agregarMensaje,
    getMensajes: getMensajes
}