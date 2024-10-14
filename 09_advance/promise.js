const promiseOne = new Promise(function(resolve,reject){
    // do any async operation , they can be DB calls, cryptography, network calls, or generally some i/o operations
    setTimeout(function(){
        console.log('Async operation is completed.');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})
//.then apke promise se tabhi connect hoga jab app us function mai resolve likhenge , agar vo nhi likh rhe toh apka promise consume nhi hoga 

//upar wale promise ko 2 var bnake likhne ki bajay single var mai bhi likh skte hai, dusra ho skta hai jab async operation krke aa rhe ho toh kuch value return krni ho toh dhyan ye dena hai ki promise ko .then se resolve hi connect kr rha hai toh agar koi value pass krni hai toh vo resolve  mai hi pass kr denge, 

// normally resolve mai object pass kr dete hai

new Promise(function(resolve,reject){
    //doing any async operation
    setTimeout(function(){
        console.log('Async operation is being done here')
        //don't forget to add resolve here, without it you can't connect to .then later
        resolve()
    },1000)
}).then(function(){
    console.log('Promise 2 is being consumed')
})

const promiseThree = new Promise(function(resolve, reject){
    //async operation but this time some value/ data is being passed on 
    setTimeout(function(){
        console.log("data is being packed and will be delivered via resolve")
        resolve({
            name: "Rohit",
            age: 19,
            email: "rgunwal345@gmail.com"
        }

        )
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = true;
        if(!error){
            resolve({username:"Rohit", email:"rgunwal345@gmail.com"})
        }else{
            reject('ERROR: Some error occured')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user.username)
    return user.username
    //agar then se kuch return kr rhe hai toh vo jata kahan hai, yahan concept aata hai call back hell , firse then krenge aur vahan pr username milega hme When you return a value from a .then() callback, it becomes the resolved value for the next Promise in the chain.
   
}).then((username)=>{
    console.log(username)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
console.log("either promise is resolved or rejected")
})

//finally as a checkpoint kaam krta hai ki apke promsie k saath kuch to ho chuka hai

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        const error = true;
        if(!error){
            resolve({username:"Javascript", email:"rgunwal345@gmail.com"})
        }else{
            reject('ERROR: JS error occured')
        }
    },1000)  
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response)
}
// consumePromiseFive()
//async await k saath problem ye hai ki inse app directly errors ko handle nhi kr skte hai, uskeliye appko inhe try catch block mai wrap krna hi padega
async function consume2PromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consume2PromiseFive()

async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(response.json())
    // console.log(response)
    // const data = await response.json()
    // ye jo response.json kra hai ye bhi execute hone mai time leta hai agar aag soch rhe the ki time bas network calls, db calls mai lagta hai toh nhi aise kai aur operations hai jisme time lgta hai toh agar bina await likhe isko execute krwaoge toh data print nhi hoga
    // console.log(data)
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})