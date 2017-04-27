var socket = io.connect("/");

socket.on("estao", alRecibirEstado);
socket.on("actualizarFecha", alRecibirFecha);
socket.on("mensajes", mostrarMensajes);

function alRecibirEstado(data) {
    document.getElementById("clientesDiv").innerHTML = "Clientes conectados: " + data.numeroClientes;
}

function alRecibirFecha(data) {
    document.getElementById("fechaDiv").innerHTML = "Fecha actual: " + new Date(data.fechaActual).toString();
}

function mostrarMensajes(data) {
    var html = data.map(function(elem, index) {
        return (`
            <div>
                <strong>${elem.author}</strong>:
                <em>${elem.text}</em>
            </div>
        `);
    }).join("-");

    document.getElementById("divMensajes").innerHTML = html;
}

function enviarMensaje() {
    var nuevoMensaje = {
        author: document.getElementById("nombreUsuario").value,
        text: document.getElementById("texto").value
    };
    socket.emit("nuevo-mensaje", nuevoMensaje);
    return false;
}