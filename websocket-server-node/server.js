const WebSocket = require('ws');   //---подкл библ ws для работы с WS
const wsServer = new WebSocket.Server({port: 9000});
    //--^констант-экземпляр класса WebSocket, с указанием порта на котором будет запущен
wsServer.on('connection', onConnect);
    //на событие --^--(подключение) вешаем обработчик функцию "onConnect"
function onConnect(wsClient) {      //<-- и  передаётся объект ws-соединения для клиента
    console.log('Новый пользователь');

    wsClient.send('Привет');    // отправка приветственного сообщения клиенту

          //Мы подключим только 2 обработчика событий на объект ws-соединения:
    wsClient.on('message', function(message) {
    console.log(message);     // 1) обработчик сообщений от клиента
        try {
            // сообщение пришло текстом, нужно конвертировать в JSON-формат
            const jsonMessage = JSON.parse(message);
            switch (jsonMessage.action) {
                case 'ECHO':
                    wsClient.send(jsonMessage.data);
                    break;
                case 'PING':
                    setTimeout(function() {
                        wsClient.send('PONG');
                    }, 2000);
                    break;
                default:
                    console.log('Неизвестная команда');
                    break;
            }
        } catch (error) {
            console.log('Ошибка', error);
        }
    })
    wsClient.on('close', function() { //2) на разрыв соединения - отключение клиента
        console.log('Пользователь отключился'); // отправка уведомления в консоль
    })
}

console.log('Сервер запущен на 9000 порту');
