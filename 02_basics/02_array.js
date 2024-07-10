const arr1 = ["sherlock","holmes"]
const arr2 = ["watson","james","moriarity"]
console.log(arr1.concat(arr2))

//if you are simply pushing one array into another
// then the second one gets inserted like a array into the first

// instead you can use concat to join two arrays

// another better operator than concat is spread -> ...
// you can concatenate multiple arrays with help of this

console.log([...arr1,...arr2])