// async function asyncFn () { }

const asyncFnNoWait = async () => {  //-------всегда возвращает PROMISE
    // return 'Success!'
    throw new Error('There was an error!')
}

asyncFnNoWait()
    .then((a)=>console.log(a))          //ничего не знает о resolve
    .catch(a=>'ERR: '+console.log(a.message)) // и reject


const asyncFn = async () => {
    await fetch  // ------- wait another PROMISE
        ('https://jsonplaceholder.typicode.com/todos')
}