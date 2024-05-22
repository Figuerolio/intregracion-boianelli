import { Server } from 'socket.io';

const initSocket = (httpServer) => {   
    const io = new Server(httpServer);

    io.on('connection', client => {
        // client.emit('eventLog', messages);
        console.log(`Cliente conectado, id ${client.id} desde ${client.handshake.address}`);
    
        client.on('newEvent', data => {
            console.log(data);
            // io.emit('messageArrived', data);
        });
    });

    return io;
}

export default initSocket;
