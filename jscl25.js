var a  = {
    prop:1 ,
    f: function () { console.log(this.prop) }
}
var b  = {
    prop:2,
    f: function () { console.log(this.prop) }
}
// a.f()
// b.f()
//var newFunc = a.f

// var newFunc = a.f.bind(b)
// newFunc()

// a.f = a.f.bind(b)
// a.f()

var newFunc = a.f.bind(b)
newFunc = newFunc.bind(a)
newFunc()