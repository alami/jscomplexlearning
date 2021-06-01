function outlog(data) {
    let out =document.querySelector('#out')
    for (const [key, value] of Object.entries(data.data)) {
        out.innerHTML = `${key}<br>`
        for (const [key1, value1] of Object.entries(data.data.Lift)) {
            out.innerHTML += ` &nbsp; ${key1}: ${value1}<br>`
        }
    }
}
function outlog2(data) {
    let out =document.querySelector('#out')
    for (const [key, value] of Object.entries(data.data)) {
        out.innerHTML = `${key}<br>`
        for (const [key1, value1] of Object.entries(data.data.setLiftStatus)) {
            out.innerHTML += ` &nbsp; ${key1}: ${value1}<br>`
        }
    }
}
const url = "https://snowtooth.moonhighway.com/";
