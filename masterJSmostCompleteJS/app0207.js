// --- 07. 7. Dom - Mouse Events------------------- 9 min
var addBtn = document.querySelector('.addBtn')
var header = document.querySelector('.header')
/*
function catchEnter(e) {
    console.log('The Event TYpe is: '+e.type)
    if (e.type === 'mousemove') {
        console.log(`X: ${e.offsetX} & Y: ${e.offsetY} `)
    }
}
header.addEventListener('mouseenter', catchEnter)
header.addEventListener('mouseleave', catchEnter)
header.addEventListener('mouseup', catchEnter)
header.addEventListener('mousedown', catchEnter)
header.addEventListener('mousemove', catchEnter)*/

// --- 08. 8. Dom- Keyboard Events-----------------
var input = document.querySelector('input')
// input.addEventListener('keydown', catchEvent)
// input.addEventListener('keyup', catchEvent)
// input.addEventListener('focus', catchEvent)
// input.addEventListener('blur', catchEvent)
// input.addEventListener('cut', catchEvent)
// input.addEventListener('paste', catchEvent)
function catchEvent(e) {
    console.log(e)
    console.log(`Event type: ${e.type}`)
    console.log(`Character: ${e.target.value} KeyCode: ${e.keyCode}`)
}
// --- 09. 9. Event Bubbling And Delegation--------
var body = document.querySelector('.body')
addBtn.addEventListener('click',(e)=>{
    console.log('addBtn: ${e.type}')
})
header.addEventListener('click',(e)=>{
    console .log('header: ${e.type}')
})
body.addEventListener('click',(e)=>{
    console.log('Body: ${e.type}')
})

var ul = document.querySelector('#myUL')
function removeItem(e) {
    console.log(e.target.parentElement)
    e.stopPropagation()
    if (e.target.classList.contains('close')) {
        console.log('Deleted...')
        e.target.parentElement.remove()
    }
}
ul.addEventListener('click',removeItem)
