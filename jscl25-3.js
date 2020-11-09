const summ = function (a,  b) {
    console.log(this)
    return this.prop + a + b
}
var a  = {
    prop:1 ,
    f: summ
}
var b  = {
    prop:2,
    f: summ
}
summ()