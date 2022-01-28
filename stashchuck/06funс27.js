const a=5

function myFn() {
    function innerFn() {
        console.log(a)
    }
    innerFn()

}
myFn()
setTimeout( function (){console.log('Отложенное')}  ,2000)

const newPost = (post, addedAt = Date()) =>  ({
        ...post, addedAt
    })
const firstPost = { id:1, author: 'Bogrdan'}
console.log(newPost(firstPost))