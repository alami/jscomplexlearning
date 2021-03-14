const WebSocket = require('ws'); 
const wsServer = new WebSocket.Server({port: 9000});
console.log('Сервер запущен на 9000 порту');

wsServer.on('connection', (wsc)=>{
    console.log('User подключился');
    wsc.send('Вы подключились');    // отправка приветственного сообщения клиенту
    //--исп.только 2 обработчика событий на объект ws-соединения: 1)разрыв соединения
    wsc.on('close', () => {console.log('User отключился')})//      - отключение клиента
    wsc.on('message', (msg) =>{                     //2)обработчик сообщений от клиента
      console.log(msg);
      try {
        const jsonMessage = JSON.parse(msg);//т.к.сообщение-текст,сначала конверт в JSON
        switch (jsonMessage.action) {
            case 'ECHO':wsc.send("Сервер услышал: " + jsonMessage.data);break;
            case 'PING':setTimeout(()=>{wsc.send('PONG')}, 2000);break;
            default:    console.log('Неизвестная команда');break;
        }
      } catch (error) {console.log('Ошибка', error);}
    })
})

