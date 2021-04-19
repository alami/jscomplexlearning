const USER_LS = 'currentUsername';
const SHOWING_CN = 'showing';
let form = document.querySelector('.js-form');
let input = form.querySelector('input');
let greetings = document.querySelector('.js-greetings');

function showGreeting (text) {
    greetings.classList.add (SHOWING_CN)
    form.classList.remove(SHOWING_CN)
    greetings.innerHTML = `Hi, ${text}`;
}
function saveUsername (username) {
    localStorage.setItem(USER_LS, username)
}
function submitHandler(event) {
    event.preventDefault()
    const inputValue = input.value
    showGreeting(inputValue)
    saveUsername(inputValue)
    // console.log(inputValue)
}

function askUsername() {
    form.classList.add(SHOWING_CN)
    form.addEventListener('submit', submitHandler)
}

function loadUsername() {
    const currentUsername = localStorage.getItem (USER_LS)
    if (currentUsername === null) {
        askUsername()
    } else {
        showGreeting (currentUsername)
    }
}
function init() {
    loadUsername();
}
init();