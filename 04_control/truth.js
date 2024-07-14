// kin kin values ko ham false maante hai aur kinko true mante hai

const userEmail = "forces@gmail.com"

if(userEmail){
    console.log("got user email")
}else{
    console.log("please enter email")
}
//ab agar userEmail mai "" or [] empty string ya empty array pass kre toh kya aayega
//kin values ko false maanege aur kinko true

//falsy values: 0,-0, "", false, BigInt mai 0n,null, undefined, NaN(not a number)
// truthy values:
// '0',"false"," ", [],{}(empty object),function(){}

//  how to check empty object consider the object 
const user = {}
// use method (Object.keys(objectname)) this method return an array of keys of object check its length
if(Object.keys(user).length ===0){
    console.log("empty object")
}