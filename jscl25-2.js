const summ = function (a,  b) { return this.prop + a + b }
var a  = {
    prop:1 ,
    f: summ
}
var b  = {
    prop:2,
    f: summ
}

// console.log(summ.call(a,1,1))
// console.log(summ.call(b,2,2))

console.log(summ.apply(a,[1,1]))
console.log(summ.apply(b,[2,2]))
