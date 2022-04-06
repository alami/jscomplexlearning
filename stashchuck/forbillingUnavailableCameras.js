function myreq (api,mycb) {
    const fetch = require("node-fetch");
    var urlencoded = new URLSearchParams();
    urlencoded.append("AdminLogin", "apiuser01");
    urlencoded.append("AdminPassword", "apiuserA1");

    var requestOptions = {
        method: 'POST',
        headers: {
            "Authorization": "Basic Og==",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("https://ipcam.uzcloud.uz/system-api/"+api, requestOptions
    )
        .then(response => response.json())
        .then(json => mycb(json))
        .catch(error => console.log(`ERROR: ${error}`))

}

GetUnavailableCameras = json => console.log(`Недоступные камеры: ${json.length}`)

myreq('GetUnavailableCameras',GetUnavailableCameras);


/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 */