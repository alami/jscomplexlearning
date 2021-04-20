//  https://meyerweb.com/eric/tools/css/reset/
// https://github.com/agolosnichenko
// https://github.com/EasyCoders-ru/paintjs
const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d')
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');

canvas.width = 700
canvas.height = 700

ctx.lineWidth = 2.5
ctx.strokeStyle  = '#2c2c2c'

let painting = false

function StopPainting(event){
    painting = false
}
function StartPainting(event){
    painting = true
}
function onMouseMove(event){
    x = event.offsetX
    y = event.offsetY
    if (!painting) {
        ctx.beginPath()
        ctx.moveTo(x,y)
    } else {
        ctx.lineTo(x,y)
        ctx.stroke()
    }
}
function onMouseDown(event){
    painting = true
}
function handleColorClick(event) {
    const color = event.target.style.backgroundColor
    ctx.strokeStyle = color
}
function handleRangeChange(event) {
    const rangeValue = event.target.value
    ctx.lineWidth = rangeValue
}
if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', StopPainting);
    canvas.addEventListener('mouseleave', StopPainting);
}

Array.from(colors).forEach(color => color.addEventListener('click',handleColorClick))

if (range) {
    range.addEventListener('input', handleRangeChange)
}