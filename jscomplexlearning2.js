function retCnt1(init) {
    var cnt=init
    return function () {
        return ++cnt
    }
}
f1 = retCnt1(0)
f2 = retCnt1(0)
// console.log(f1())
// console.log(f1())
// console.log(f1())
// console.log(f2())

function sum () {
    let result = 0;
    for (let i=0; i<arguments.length;i++) {
        result += arguments[i]
    }
    return result
}
const result = sum(2,2,5,7,9)
console.log(result)

function s1() {
    s2()
}
function s2() {
    s3()
}
function s3() {
    console.log('s3')
}
s1()

var input = 'Sergey Petrov'
var [name, lastname] = input.split(' ')
var [ , lastname] = input.split(' ')

function hi ([ ,name, secondname='' ]) {
    console.log(`Hi, I am ${name} ${secondname}`)
}
hi (input.split(' '))

user = {name:'Sergey', secondname: 'Petrovich'}
var {name, secondname} = user
console.log(`Hi, I am ${name} ${secondname}`)
