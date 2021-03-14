//export const
myWs = new WebSocket("ws://localhost:9000");
myWs.onopen = function() {
    alert("Соединение установлено.");
};

myWs.onclose = function(event) {
    if (event.wasClean) {
        alert('Соединение закрыто чисто');
    } else {
        alert('Обрыв соединения, например, "убит" процесс сервера');
    }
    alert('Код: ' + event.code + ' причина: ' + event.reason);
};

myWs.onerror = function(error) {
    alert("Ошибка " + error.message);
};

//export const
wsSend = function(data) {
// readyState - true, если есть подключение
    if(!myWs.readyState){
        setTimeout(function (){
            wsSend(data);
        },100);
    } else {
        myWs.send(data);
    }
};
//const
sendMessage = (message) => myWs.send(JSON.stringify(
    { event: "chat-message", payload: { /*userName,*/ message }}));
