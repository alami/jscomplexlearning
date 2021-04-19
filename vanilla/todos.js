const TODOS_LS = 'toDos';
let toDos = [];

let toDoform = document.querySelector('.js-toDoForm');
let toDoinput = toDoform.querySelector('input');
let toDolist = document.querySelector('.js-toDoList');

function something(toDo) {
    showToDos(toDo.name)
}
function loadToDos () {
    const loaded_todos = localStorage.getItem(TODOS_LS)
    if (loaded_todos !== null) {
        const parsedToDos = JSON.parse(loaded_todos)
        parsedToDos.forEach (something)
    }
}
function saveToDos () {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}
function showToDos(text) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const delBtn = document.createElement('button')
    const newId =  toDos.length + 1

    delBtn.innerHTML = "Del"
    delBtn.addEventListener('click', deleteToDo)
    span.innerHTML = text
    li.appendChild(span)
    li.appendChild(delBtn)
    li.id = newId
    toDolist.appendChild(li)

    const toDoObject = {
        name: text,
        id: newId
    }
    toDos.push(toDoObject)
    saveToDos()
}

function submitTodosHandler (event) {
    event.preventDefault()
    const currentValue = toDoinput.value
    showToDos(currentValue)
    toDoinput.value = ''
}
function deleteToDo (event) {
    const btn = event.target
    const li = btn.parentNode
    toDolist.removeChild(li)
    // console.log(event.target.parentNode)
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos
    saveToDos()
}

function init() {
    loadToDos();
    toDoform.addEventListener('submit', submitTodosHandler)
}
init();