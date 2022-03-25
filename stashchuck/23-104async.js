const p = di => new Promise( (rez,rej) => {
    setTimeout(()=>{
        console.log('Done:2ms');
        rej({message:'!'})        
    },di)
})

const a = async t => {
    //setTimeout(()=>console.log('1s'),1000)
    // throw new Error('WOW!')
    await p(100)  
    // await p(5000)
    return 'ASYNC'
    }
//console.log(a());    
a().then(rez=>console.log(rez))
    .catch(err=>console.error(err.message))
console.log('CONTINUE');