var name = 'Sergey'
console.log(name)
// function sum (a,b) { return a+b; }
var someVar = 20;
var someOtherVar = 30;
function sum (a,b) {
    let result = a+b + someVar + someOtherVar;
    return result;
}
console.log(sum(2,3))

a=10 //-------------замыкание
function fn1(b,c) {
    function fn2(d,e) {
        return a+b+c+d+e
    }
    return fn2(3,4)
}
console.log(fn1(1,2))

var sum1 = function (a,b)    { return a+b }
var suma =          (a,b) => { return a+b }  //если 1 выражение - убрать {return..}
var sumb =          (a,b) =>  a+b
console.log(sumb(10,20))
var ar = [1,2,3,4]
console.log( ar.map (function (n) {return n*n }) )
console.log( ar.map ((n)=> n*n ) )           //если 1 параметр - убрать ()
console.log( ar.map (n=> n*n ) )

for(var ii=0;ii<3;ii++)  console.log(ii)
console.log(ii)