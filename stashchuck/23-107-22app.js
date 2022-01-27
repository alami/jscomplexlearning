const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
try {
    const data = await getData('https://jsonplaceholder.typicode.com/todos')
    console.log(data)
} catch (error) { console.log('ERR: '+error.message) }