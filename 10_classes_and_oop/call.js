// function SetUsername(username){
//     this.username = username    // 'this' has no context here
// }

// function createUser(username, email, password){
//     SetUsername(username)       // Regular function call
//     this.email = email
//     this.password = password
// }

// const user = new createUser("chai", "chai@fb.com", "123")
// console.log(user)
// // Output: { email: "chai@fb.com", password: "123" }
// // Notice: username is missing!

function SetUsername(username){
    //complex DB calls
    this.username = username  // this now refers to the new object
    console.log("called");
}


function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

//iske output mai abki baar name bhi milega agar console log krenge toh
//isme problem ye aati thi ki agar koi kaam aap kisi func k throught krwa rhe hai toh aap variable ka scope kaise bhejenge usme, agar simply call krenge toh object mai appko vo attribute nhi milega kyuki vo kabhi initialise hi nhi hua tha, isliye explicitly call keyword likhte hai saath mai this bhi bhejte hai func mai ki iss value pr apko write krna hai

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); 