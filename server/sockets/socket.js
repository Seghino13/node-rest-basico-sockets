const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario conectado');

    //Envio de data al cleinte
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('EL usuario se ha desconetado');
    });

    //Escuchar informacion del cliente
    client.on('enviarMensaje', (data, callback) => {
        client.broadcast.emit('enviarMensaje', data);
        console.log(data);
        // console.log(data);
        // if (data.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mallllllll'
        //     });
        // }

    });
});