// const addTwo = (num1,num2)=>{
//     return num1 +num2;
// }

// if the computation is of single line only you can remove curly braces then
const addTwo= (num1,num2) => (num1+num2)
console.log(addTwo(2,4));
//2nd case mai hame return keyword nhi likna padta  
// iska use react mai bhar bhar k hoga

// lekin agar object return krna hai toh parnthesis mai wrap karna hi padega
const add = (num1)=> ({username: "roit"})
