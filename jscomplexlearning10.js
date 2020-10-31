console.log('before setTimeout')

setTimeout(function (){
 console.log('таймер на 0.5 сек start')
 console.log('before for')
 for (let i=0; i< 1000000000; i++) a = i/i
 console.log('after for')
 console.log('таймер на 0.5 сек finish')
}, 500)

setTimeout(function (){
 console.log('таймер на 1 сек')
}, 1000)



