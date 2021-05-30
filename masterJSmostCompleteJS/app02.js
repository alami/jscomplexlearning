//--- 02. 2. Dom - Selectors 1-----------------------
/*x = document.querySelector('h2').getAttribute("class")
    console.log(x)
    checked = document.querySelectorAll('li')[1].setAttribute('class','no-checked')
    console.log(document.querySelector('h2').style.backgroundColor='orangered')
var titleStyle =document.querySelector('h2').className = 'myStyle'
    console.log(document.querySelector('li').classList.toggle('listClass'))
var fstListEl = document.querySelector('li')
    console.log('1', fstListEl.parentElement)
    console.log('2', fstListEl.parentElement.parentElement)
    console.log('3', fstListEl.children)*/
//--- 03. 3. Dom - Selectors 2-----------------------
/*title = document.querySelector('h2')
console.log('class: '+title.className)
console.log('id: '+title.id)
title.style.backgroundColor='orangered'
title.style.padding='10px 20px'
title.style.color='black'
title.textContent = 'WOW'
title.innerText = 'WOW1'
title.innerHTML = '<i>Wow is Awesome</i>'
// document.querySelector('li:last-child').classList.add('listClass')
// document.querySelector('li:nth-child(2)').classList.add('listClass')
document.querySelector('li:nth-child(even)').classList.add('listClass')
var elements = document.getElementsByClassName('element')
var elementsArr = Array.from(elements)
    elementsArr.forEach(el => {console.log(el)})
var spanEl = document.querySelectorAll('.close')
    spanEl.forEach(el=>{console.log(el)})*/
//--- 04. 4. Dom - Creating New Html Element----------------------- 9 min
/*var listElement = document.createElement('li')
    listElement.className = 'element'
    listElement.setAttribute('id','elementId')
    listElement.textContent ='Going to the Zoo'
var span = document.createElement('span')
    span.className = 'close'
    span.textContent = 'X'
var ul = document.querySelector('ul')
listElement.appendChild(span)
ul.appendChild(listElement)*/
//--- 05. 5. Dom - Events-----------------------
var addBtn = document.querySelector('.addBtn')
/*addBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(' its clicked')})*/
/*function addItem(e) {
//    e.preventDefault()
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(e.target.className)
    console.log('X Y coordination: ', e.clientX, e.clientY)
}
addBtn.addEventListener('click', addItem)*/
//--- 06. 6. Dom - Events 2----------------------- 27 min
function createNewListElement() {
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(input.value))
    var span = document.createElement('span')
    span.className = 'close'
    span.appendChild(document.createTextNode('X'))
    // span.textContent = ' X'
    li.appendChild(span)
    ul.appendChild(li)
    input.value = ""
}
function inputSize () {
    if(input.value.length > 0) {
        return true
    }
    return false
}
var ul = document.querySelector('ul')
var input = document.querySelector('.input')
function addItem(e) {
    if(inputSize()) {
        createNewListElement()
    } else {
        console.log('Input can\'t be  empty')}
}
addBtn.addEventListener('click', addItem)
function addItemKeyDown (e) {
    if (e.keyCode === 13) {
        createNewListElement()
    } else {
        console.log('any other')
    }
}
input.addEventListener('keydown', addItemKeyDown)