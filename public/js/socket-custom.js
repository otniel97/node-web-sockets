let socket = io();

socket.on('connect', function() {
    console.log("Conectado al servidor");
});

// Escuchar información
socket.on('disconnect', function() {
    console.log("Conexión con el servidor perdida")
});

// Enviar información
socket.emit('enviarMensaje', {
    user: 'Otniel',
    message: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta servidor', resp)
});

socket.on('enviarMensaje', function(response) {
    console.log('Servidor: ', response);
});