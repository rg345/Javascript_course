// if you want a var explicitly of some type then use  
const score = 200
const num = new Number(100)

const price = 400;
// console.log(price.toString())
// console.log(price.toFixed(2))
// to fixed helps in decimal values that you want decimal value upto 3 places or 2 places
// ya agr exact value points mai ja rhi toh tab bhi use krte hai

const number = 23.886
const newNum = 123.886
// // console.log(number.toPrecision(3)); => 23.9
// console.log(newNum.toPrecision(3)) => 124 
// to precision will give precise value upto x decimal places

console.log(Math.floor(Math.random()*10 +1))