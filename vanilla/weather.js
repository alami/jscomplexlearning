const COORDS_LS = 'coords'

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric `)
        .then(function (response) {
            return (response.json())
        }).then(function (json) {
        console.log(json)
    })
}

const API_KEY = 'bdf3d54816461204b5749e67607bcc56' //https://openweathermap.org
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
    getWeather(latitude, longitude)
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
        const locadedCoords = JSON.parse(coords)
        console.log(locadedCoords)
        getWeather(locadedCoords.latitude, locadedCoords.longitude)
    }
}

function init() {
    getCoords()
}
init()