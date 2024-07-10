const myArr = [1,2,3,4]
const myArr2 = new Array(2,3,4)

const myArr3 = ['sherlock','holmes']

// in js a single array can contain all datatypes arr = [1,"holmes",true,5]

// console.log(myArr3[1])

//array operations

// myArr.push(num)
// myArr.pop()

// myArr.unshift(9) // adds 9 to the front of the array myArr.shift() to remove that element at front
// myArr.includes(num) returns false if not present
// .indexOf(num) for invalid -1;

// const newArr= myArr.join() -> converts array into a string  newArr is a string
//console.log(newArr) -> 0,1,2,3

const arr = [4,5,6,7,8]
const sliced = arr.slice(1,3)
// 1 index se shuru karo including 1 , 3 tak jao excluding 3
console.log(arr)
console.log(sliced)

const spliced = arr.splice(1,3)
//slice mai original array mai koi changes nhi hote 
//splice mai splice(x,y) kara toh x index se leke y index tak k elements hata deta hai
// splice k baad array bachegi 4,8
console.log(spliced)
console.log(arr)
