import {spawn} from 'child_process'
import inquirer from 'inquirer'
const width=1920  
const height=1080     
const path="c:\Users\User\Downloads\work\jscomplexlearning\\typescript\\ski-joke-kanatka.mp4" ;     
const name="2" ; 
(async function convert() {

const res = spawn('ffmpeg', [
  '-i ',path,
  '-c:v ','libx264',
  '2.mp4'
])
res.stdout.on('data', (data:any)=>{
  console.log(data.toString())
})
res.stdout.on('data', (data:any)=>{
  console.log(data.toString())
})
res.on('close', ()=>{
  console.log('Ready')
})

})()