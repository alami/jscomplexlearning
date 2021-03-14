// const http = require("http");
// const express = require( "express");
const ws = require( "ws");

// const app = express();
// const server = http.createServer(app);  //---создаем обычный http сервер,
                       // а потом привязываем к нему при создании websocket сервер.
const wsServer = new ws.Server({ port: 9000});//server });
console.log('Сервер запущен на 9000 порту');

wsServer.on('connection', wsc => {
    wsc.on('message', msg => {
        wsServer.clients.forEach(client => client.send(msg));
    });
    wsc.on("error", e => wsc.send(e));
    wsc.send('Hi there, I am a WebSocket server');
});

const dispatchEvent = (message, ws) => {
    const json = JSON.parse(message);
    switch (json.event) {
        case "chat-message":
            webSocketServer.clients.forEach(client => client.send(message));break;
        default: ws.send((new Error("Wrong query")).message);
    }
}

