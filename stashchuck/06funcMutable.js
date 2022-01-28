const personOne = {
    name: 'Bob', age: 21
}
function increasePersonAge (person) {
    const updatedPerson = Object.assign( {}, person)
    updatedPerson.age++
    return updatedPerson
}
const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)


function fnWithCallback (callbackFunction) {
    callbackFunction()
}
fnWithCallback(anotherFunction)

function anotherFunction () {
    console.log('anotherFunction')
}

setTimeout(anotherFunction, 1000)
