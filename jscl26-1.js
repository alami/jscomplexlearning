var F =function (name) {
    //this.name = name
    this.setName = function (name) { this.name = name}
    this.getName = function () { return  this.name}
    this.setName(name)
}

var obj = new F('Serge')
console.log(obj)
console.log(obj.constructor)

var obj1 = new F('Andre')
console.log(obj1.getName())
obj1.setName('Vasya')
console.log(obj1.getName())
