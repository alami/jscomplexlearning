//  https://meyerweb.com/eric/tools/css/reset/
// https://github.com/agolosnichenko
// https://github.com/EasyCoders-ru/paintjs
const canvas = document.getElementById('jsCanvas');
let painting = false

function StopPainting(event){
    painting = false
}
function onMouseMove(event){
    x = event.offsetX
    y = event.offsetY
    console.log(x,y)
}
function onMouseDown(event){
    painting = true
}
function onMouseUp(event){
    StopPainting(event)
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', StopPainting);
}