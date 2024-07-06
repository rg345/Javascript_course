// const name = "rohit"
// const score = 50

// to concatenate strings the deprecated syntax is
// console.log(name + score +"in total")

// modern way todo this is to use backticks ` ` and inside it use the $ symbol
// console.log(`hi myself ${name}`)

// const gameName= new String ("rohitfch")
// console.log(gameName[0])
// console.log(gameName.__proto__) // returns {}
//it is not empty open it in browser to see complete string

// toUpperCase toLowerCase are other methods which can be used on strings

//charAt and indexOf to see which char pres at which index and index of any char
// console.log(gameName.indexOf('h'))
// console.log(gameName.charAt(3))

const newString = "     username";
console.log(newString.trim());
//it trims those spaces present in the front and back (if any)

//similarly trimStart removes the initial spaces
// and trimLeft trims the final spaces if any 

//to replace something in your url you can use url.replace
let link ="https://localhost//3000"
console.log(link.replace('host','buddy'))