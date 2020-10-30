function s1() {
    console.log('до s2')
    s2()
    console.log('после s2')
}
function s2() {
    console.log('до s3')
    s3()
    console.log('после s3')
}
function s3() {
    console.log('s3')
    throw new Error('Ошибка!')
}
console.log('до s1')
try {
    s1()
} catch (e) {
    console.log(e.message)
}
console.log('после s1')
//---------------------------8.14-47
try {
    throw '!!!-------!!!'//необязательно  ERROR
} catch (e) {
    console.log(e)  //<---- это объект исключения
}
//----------------------------8.17-24
a=[1,2,3,4] //_всегда передается 1)рез-т предыдущей операции(начиная с 1го), 2)тек.элем
b=a.reduce((all,currect)=>{
    console.log(all,currect)
    return all += currect
},100)
console.log(`reduce(add) = ${b}`)
//-----------------8.29-13 Q: Symbol Iterator - не в любом объекте
for (const key of {
    foo: 1, bar:2, [Symbol.iterator]() {
        return {
            next() {
                if (this._first++<2)
                      return {value: this._first, done: false}
                else return {done: true}
            },
            _first: 0
        }
    }
}) {console.log(key)}
//-----------------8.36-07
let aa = {foo: 1, bar:2}
const ab = aa
const bb = {...aa}
bb.bar = 3
ab.bar = 1
console.log(aa,ab,bb)
//-----------------8.43-29
delete ab.bar
console.log(aa,ab,bb)
delete  a[1]
a.splice(1,1)
a.splice (1,0, "hello", "JS")
console.log(a)
//-------------54-39
const ss1 = {name: "Mary"}
const ss2 = {name: "Gary"}
const students = {}
students [ss1] = 5
students [ss2] = 1
//console.log(students, students [ss1])
//---------------------55-31
const studentss = new Map ()
studentss.set (ss1, 5)
studentss.set (ss2, 1)
console.log(studentss, studentss.get (ss1))

//----------------- 58-16
function addUserInput (ar, val) {
    if (!ar.includes (val)) ar.push (val)
}
addUserInput(a,10)
addUserInput(a,10)
addUserInput(a,11)
addUserInput(a,11)
addUserInput(a,11)
console.log(a)

const arrSet = new Set ([1,2,3,4,5])
arrSet.add(10)
arrSet.add(10)
arrSet.add(10)
console.log(arrSet)
for (const el of arrSet) console.log(el)
