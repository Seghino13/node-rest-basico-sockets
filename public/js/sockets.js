var socket = io();
//escuchar informacion
socket.on('connect', function() {
    console.log('conectado en el servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdio conexion con el servidor');
})

//Enviao de informacion
socket.emit('enviarMensaje', {
    usuario: 'Sergio',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Repuesta del server:::', resp);
})

//Escuchar data desde el servidor
socket.on('enviarMensaje', function(data) {
    console.log('Servidor__:::', data);

});