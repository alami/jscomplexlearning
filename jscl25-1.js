const summ = function (a,  b) { console.log(this.prop + a + b) }
var a  = {
    prop:1 ,
    f: summ//function (a,  b) { console.log(this.prop + a + b) }
}
var b  = {
    prop:2,
    f: summ//function (a,  b) { console.log(this.prop + a + b) }
}
 // a.f(1,1)
 // b.f(2,2)
 //    a.f = a.f.bind(b,1,1)
 //    b.f = b.f.bind(a,2,2)
 //     a.f()
 //     b.f()
summ.call(a,1,1)
summ.call(b,2,2)
