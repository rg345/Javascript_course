function loginUserName(username){
    if(username){
        console.log(`${username} has logged in the system`)
    }else{
        console.log("Please enter your name")
    }
}
// loginUserName()
// in case empty string pass krte hai toh undefined aayega null nhinode 03_basics/01_function.js

// _______________________________________________________________________________________________
// normally jab bhi ham shopping cart jaisa kuch implement krete hai toh hame pta nhi hota ki usme kitni values aayegi 
// isliye function mai rest operator ka use krenge "..." ye ek array return krega jitni values hogi isme unki
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,300,400))

function priceCalculate(val1, val2, ...num1){
    return num1;
}
console.log(priceCalculate(199,300,422,53,2))
//is case mai 199 assign hogi val1 ko aur 300 assign hogi val2 ko baaki bachi values num1 ko assign hogi
// object bhi pass kr skte function mai ,lekin ye ensure krna padega ki function mai jo properties access kr rhe vo actually object mai available hai bhi ya nhi

//function likhne k bhi 2 tareeke hai
addOne(5);
function addOne(num){
    console.log(num+1)
    return num+1;
}
// yaha agar pehle likh rhe toh chal jaayega lekin agar ise kisi var mai daalte hai toh fir ye nhi chalega
const addTwo= function(num){
    return num+2;
}
console.log(addTwo(3))
// 2nd case mai function call baad mai hi likhna padega
