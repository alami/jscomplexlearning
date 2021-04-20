const COORDS_LS = 'coords'


function geoSuccessHandler(position) {
    console.log(position)
}
function geoErrorHandler() {
    console.log('Error in finding of position !')
}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(geoSuccessHandler, geoErrorHandler)
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