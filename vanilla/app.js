//  https://meyerweb.com/eric/tools/css/reset/
// https://github.com/agolosnichenko
// https://github.com/EasyCoders-ru/paintjs
const canvas = document.getElementById('jsCanvas');

function onMouseMove(event){
    console.log(canvas)
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
}