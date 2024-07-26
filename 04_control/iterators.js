// high order array loops 
// for of loop
const arr = ["major","captain","colonel"]

for (const val of arr) {
// console.log(val)
}

// for in loop 
const user ={
    name: "jacob",
    rank: "major",
    unit: "9&11 PARA SF",
    age: 46
}
for (const key in user) {
    if (Object.hasOwnProperty.call(user, key)) {
        const element = user[key];
        console.log(element)
    }
}
//for each loop
const idols = ["major vivek jacob","colonel rajeev bharwan","meen bahadur thapa"]
idols.forEach(element => {
    console.log("Fu*king men of sheer wil and hardwork " + element)
})