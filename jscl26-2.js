var F =function (name) {
    this.setName(name)
}

console.log(F.prototype)
F.prototype.setName = function (name) {this.name = name}
F.prototype.getName = function () {return this.name}


var obj1 = new F('Andre')
console.log(obj1.getName())
obj1.setName('Vasya')
console.log(obj1.getName())

console.log(F.prototype === obj1.__proto__)