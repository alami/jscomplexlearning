const f = ans=>{setTimeout(()=>console.log(p),1000);return ans} 
const p = new Promise( (rez,rej) => {
    setTimeout(()=>{
        console.log('Done:2ms');
        rej(f('!'))        
    },2000)
})
p.then(dat=>console.log(dat))
.catch(err=>console.error(err))
console.log('continue');