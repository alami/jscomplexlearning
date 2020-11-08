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
auth().then(() => console.log('ok'))
