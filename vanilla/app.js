//  https://meyerweb.com/eric/tools/css/reset/
// https://github.com/agolosnichenko
// https://github.com/EasyCoders-ru/paintjs
const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d')
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave');

const INITIAL_COLOR = '#2c2c2c'
const CANVAS_SIZE = 700
canvas.width = CANVAS_SIZE
canvas.height = CANVAS_SIZE

ctx.lineWidth = 2.5
ctx.strokeStyle  = INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR

    let painting = false
let filling = false

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
    ctx.fillStyle = color
}
function handleRangeChange(event) {
    const rangeValue = event.target.value
    ctx.lineWidth = rangeValue
}
function handleModeClick() {
    if (filling === true) {
        filling = false
        mode.innerText = 'Заливка'
    } else {
        filling = true
        mode.innerText = 'Рисование'

    }
}

function handleCanvasClick(event) {
    if (filling) {
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE)
    }
}
if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', StopPainting);
    canvas.addEventListener('mouseleave', StopPainting);
    canvas.addEventListener('click', handleCanvasClick);
}

Array.from(colors).forEach(color => color.addEventListener('click',handleColorClick))

if (range) {
    range.addEventListener('input', handleRangeChange)
}

if (mode) {
    mode.addEventListener('click', handleModeClick)
}