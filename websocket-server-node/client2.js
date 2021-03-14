
let myWs = new WebSocket('ws://localhost:9000')
myWs.onmessage = function (msg) {console.log('Msg:' + msg.data);};

myWs.send(JSON.stringify({action: 'PING'}));
myWs.send(JSON.stringify({action: 'ECHO', data: 'Сервер, ответь мне!'}));
myWs.close()