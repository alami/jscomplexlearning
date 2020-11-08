VK.init({
    apiId: 5267932
})

function auth() {
    return new Promise((resolve, reject) => {
        VK.Auth.login(data => {
            if (data.session) {
                resolve()
            } else {
                reject(new Error('Не удалось авторизоваться'))
            }

        }, 2)
    })
}

function callAPI(method, params) {
    params.v = '5.76'
    return new Promise((resolve, reject) => {
        VK.api(method, params, (data) => {
            if (data.error) {
                reject(data.error)
            } else {
                resolve(data.response)
            }
        })
    })
}

auth()
    .then(() => {
        return callAPI('users.get', {name_case: 'gen'})
    })
    .then(([me]) => {
        const headerInfo = document.querySelector('#headerInfo')
        headerInfo.textContent = "Друзья на стр-це ${me.first_name} ${me.last_name}"

        return callAPI('friends.get', {fields: 'city, country, photo_100'})
    })
    .then(friends => {
        const template = document.querySelector('#user-template').textContent
        const render = Handlebars.compile(template)
        const html = render(friends.items)
        const results = document.querySelector('#results')

        results.innerHTML = html
    })
