class User {
    constructor(username,email, password){
        this.username = username.toUpperCase() ;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}@#zeih`
    }
}

const chai = new User('chai', 'chai@gmai.com',466);

console.log(chai.encryptPassword());
console.log(chai.username)