// IIFE stands for immediately invoked function expression
//ham chahte hai ki jaise hi application run ho ye cheez turant start ho jaye
//dusra ho skta hai ki global var se apka func pollute ho jaaye,, global scope se pollution nhi chahte isliye function hi bana lete hai

// function chai(){
//     console.log(`db connected`)
// }
// chai()
// aisa likhen mai koi bhi dikkat nhi hai lekin agar ise iife mai convert krna hai toh simply aisa kar skte ki 
// jaise scope wale mai krte the vaise hi jo function hai use ek scope mai band kar denge

(function chai(){
    console.log( `DATABASE CONNECTED`);
})();

// simply first () mai func ki defn likhne wale hai second bracket ho gya () pehle wale function ka execution call

//note iife ko pta nhi hota ki use stop kab hona hai toh rokne k liye hamesha ; lgaye aakhir mai

//agar kuch pass krna ho toh func mai
( (name)=>{
    console.log(`db connected again ${name}`);
})('para sf')