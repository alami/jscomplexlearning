const COORDS_LS = 'coords'   //https://openweathermap.org

function saveCoords(positionObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(positionObj))
}
function geoSuccessHandler(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const positionObj = {
        latitude,
        longitude
    }
    saveCoords(positionObj)
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