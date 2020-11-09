var F =function (name) {
    this.setName(name)
}

var F2 =function (name, age) {
    this.setName(name)
    this.setAge(age)
}

F.prototype.setName = function (name) {this.name = name}
F.prototype.getName = function () {return this.name}

F2.prototype = F.prototype
F2.prototype.setAge = function (age) {this.age = age }
F2.prototype.getAge = function () { return this.age }

var obj1 = new F('Serge')
var obj2 = new F2('Andre', 30)

console.log(obj1.getName())
console.log(obj2.getName())
console.log(obj2.getAge())

//==///
obj1.setAge(26)
console.log(obj1.getAge())
