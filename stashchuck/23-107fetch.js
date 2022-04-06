const ftch = async () => {
    const r1 = await fetch('https://jsonplaceholder.typicode.com/todos/3')
    const r2 = await r1.json()
//    throw new Error('WOW!')
    return r2
}
async function asnk () {
try {
    r3 = await ftch() //-----> .then(r=>console.log(r))    
    console.log(r3);
} catch (error) {  //-----> .catch (err=>.....)
    console.log(error.message)
} }

asnk()
console.log('CONTINUE')