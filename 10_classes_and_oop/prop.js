// The static keyword in JavaScript creates methods that belong to the class itself, not to instances of the class. Here's the key points about your code:

// When a method is static:
class User {
    static createId(){
        return `123`
    }
}

// 1. This works - calling directly on class
console.log(User.createId())  // "123"

// 2. This doesn't work - won't work on instances
const hitesh = new User("hitesh")
// console.log(hitesh.createId())  // TypeError: hitesh.createId is not a function

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

// static methods ko class inherit kr skti hai, lekin class k instances nhi, jaise Teacher.createId() will work but iphone.createId() won't because teacher is a class which can inherit static functions, but iphone is an instance of class teacher, so it will not work for that
// 3. Static methods are not inherited by instances
const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId())  // TypeError: iphone.createId is not a function