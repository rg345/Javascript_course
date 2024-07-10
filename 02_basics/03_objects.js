//singleton way to create object
// Object.create()

const mySym  = Symbol("key1")
// how to add this sym in js object
const JsUser = {
    name :"Rohit",
    age : 19,
    [mySym]:"mykey1",
    isLoggedIn: false,
    "full name": "Rohit Gunwal"
}

// 2 ways to access js object properties
// console.log(JsUser.name);
// console.log(JsUser["name"])

// the problem with .name is that you cannot access the properties which are in " brackets" like "full name"

// console.log((JsUser["full name"]))
// console.log(typeof JsUser[mySym])

// how to overwrite values
JsUser.name = "watson"

// to freeze an object

// Object.freeze(JsUser)

// JsUser.greeting = function(){
//     console.log("Hi Js User")
// }

// console.log(JsUser.greeting)
// this returns a function that is -> call to the function is made but no values in output
// console.log(JsUser.greeting())

// JsUser.greetingTwo = function(){
//     console.log(`hi Js User ${this["full name"]}`)
// }

// console.log(JsUser.greetingTwo())

// we can nest objects inside another object 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(JsUser))
// // this returns all the keys present in the object
// specially helpful while taking values from the database
// becz database would return an object

// console.log(Object.values(JsUser))
// console.log(JsUser)

// // to check if an object has some property or not 
// console.log(JsUser.hasOwnProperty('full name'))


const course = {
    name: "js Course",
    price: 1000,
    courseInstructor: "James Moriarity"
}

//console.log(course.courseInstructor)
// this is the general way to access but assume you have to use courseInstructor many times 
// then the syntax is 

const {courseInstructor} = course
console.log(courseInstructor)
// now evertime you want to access simply write the property name

// if you feel courseInstructor is a large name you can reducc it too
const {courseInstructor: instructor}= course;

// {} means destructuring ki ja rhi hai
//json kuch nhi hai object hai bas use declare nhi krte hai
// {
//     "name":"Rohit Gunwal",
//     "age":19,
//     "title": "newbie"
// }
// saari keys ko isme "" brackets mai likha jaata hai
