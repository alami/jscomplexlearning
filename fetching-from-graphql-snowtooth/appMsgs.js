/*  1)
module.exports.firstMsg = 'Hello World'
module.exports.secondMsg = 'This is second Msg'
module.exports.MsgObject = {"id":1, "morning":"Good Morning"}*/
// 2)
module.exports = function () {return "this is 2nd msg"}

// 3)экспорт функций-конструкторов, используемых, с "new" для создания объектов.
module.exports = function () {this.first =  "this is 3d msg"}

