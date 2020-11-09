var a  = {
    prop:1 ,
    f: function () {      //ф-ция в ф-ции
        var func = function () { //создадим и
//            console.log(this)  //чему равен внутри this? "windows|global"
            console.log(this.prop)  //..? => undefine
        }                    //--1
//      func() //сразу же вызовем
        func.call(this)
    }
}
a.f()

var a2  = {
    prop:1 ,
    f: function () {      //ф-ция в ф-ции
        var that = this
        var func = function () { //создадим и
            console.log(that.prop)  //..? => 1
        }
        func()
    }
}
a2.f()