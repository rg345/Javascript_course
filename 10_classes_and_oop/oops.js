const user ={
    name: "rohit",
    short: "rgunw",age:19,
    getUser: function(){
        console.log("got user details from the database")
        // return "access is successful"
        console.log(this)
    }
}
//ye jo name age hai ye toh ho gyi properties, object is collection of properties and methods, for creating methods
console.log(user.name)
user.getUser()
console.log(user.getUser())
//check for my comment 13:00 The reason of getting undefined is because there is a syntactical mistake we have written console.log(user.getUserDetails()); this line does 2 things, first it calls the method getUserDetails on object user, and in that method there we are logging line "got user details from the database" this line is also printed in the output, secondly it is also logging the return value of getUserDetails but our method is not returning some value, so it implicitly logs "undefined" in the output.