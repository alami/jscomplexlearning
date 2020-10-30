console.time('1')
//for (let i=1; i<2; i++) sleep (1000)
console.timeEnd( '1')

function sleep(milliseconds) {
 var start = new Date().getTime();
 for (var i = 0; i < 1e7; i++)
  if ((new Date().getTime() - start) > milliseconds) break;
}
//-------------------------praktika
function retBadArgs (fn, ...args) {
 console.log(args)
 //args.forEach((item, index, array) => {sum(item, index, array)})
 args.forEach(sum)
}
function sum (item, index, array) {
 console.log(`item ${item}, index ${index}, of array ${array}`)
}
retBadArgs(sum, 11,22)



