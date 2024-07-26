// const coding = [ "ruby", "python","javascript","cpp","swift","go"]
// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values);
// ye undefined hi return krta hai values k liye for each loop kabhi kuch return nhi krta toh agar hame values se kuch kaam nhhi hua toh kaise krenge kuch return krna hua toh

// uske liye method hota hai filter, ek numbers ka array lete hai usse samjhete hai
const arr = [1,2,3,4,5,6,7,8]

const num = arr.filter((item)=> item>4)
// console.log(num)
// all right this is workinng but if i do like this item>4 in next line it is not working then
// vo isliye kyuki jab aab { } shuru krte hai toh aap scope start kr dete hai uss case mai explicitly return krna padega
const nums  = arr.filter((item)=>{
    return item>4
})
console.log(nums)