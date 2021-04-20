const COORDS_LS = 'coords'


function geoSuccessHandler(position) {
    console.log(position)
}
function geoSuccessHandler() {
    console.log('Error in finding of position !')
}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(geoSuccessHandler, geoSuccessHandler)
}
function getCoords() {
    const coords = localStorage.getItem(COORDS_LS)
    if (coords === null) {
        askForCoords ()
    } else {

    }
}

function init() {
    getCoords()
}
init()