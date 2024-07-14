if(2!=="2"){
    console.log("=== checks both value and data type")
}

// Nullish Colaesecing Operator ?? : specifically for null and undefined
let val1 = 5 ?? 10
// ye use karte hai jab database se data fetch kr rhe ho toh agar null value aa jati hai toh dusri non null value assign kr dega
let val2 = null ?? 10 ?? 20
let val3 = null ?? null
console.log(val1)
console.log(val2)
console.log(val3)