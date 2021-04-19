let watch = document.querySelector('.js-watch');
let watchtitle = watch.querySelector('h1');

function clock () {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secund = date.getSeconds()
    watchtitle.innerHTML = `${day}.${month<10?`0${month}`:month} ${hours}:${minutes}:${secund<10?`0${secund}`:secund}`;
}
function init() {
    clock();
    setInterval(clock,1000);
}
init();