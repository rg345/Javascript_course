let score = "33";
//let score =33
console.log(typeof(score))
console.log(typeof score)

// here we know the datatype of var but if we are getting some value which user is submitting 
//through some form then you dont know the data type of that 33 is a number "22" is a string

let stringToNumber = Number(score)
console.log(typeof(stringToNumber))

// but even if the string is invalid number like "344abe" then Number(score) will convert this 
//into number that is NaN so always check for this

// null converted to NaN
//conversion String() , Boolean() like boolean of empty string will be false
// "rohit" => true;
let number = "";
let isBool = Boolean(number);
console.log(isBool)