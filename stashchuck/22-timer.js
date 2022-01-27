const timerPromise = () =>
    new Promise((resolve, reject) =>
      setTimeout( ()=>resolve(), 2000 )   )

const asyncFn = () => new Promise((resolve , reject) => {
    console.log('Timer starts')
    timerPromise()
        .then(data => console.log('Timer ended '))
})
asyncFn()