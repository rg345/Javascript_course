//constructor function apko har baar ek naya instance deta hai jaise

function user(username,age,isLoggedIn){
    this.username = username;
    this.age = age;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = user("rohit",19,true)
const user2 = user("robo",19,false)
// console.log(userOne)
//agar user2 likhne k baad log userOne krenge aur hamare func mai return this hai toh abki baar User2 ki values print hogi, kyuki yahan ham jo changes kr rhe hai vo global context this mai hi ho rhe hai, agar ye rokna chahte hai toh jyada kuch nhi krna, chota sa change krna hai, const user3 = new user, new aapka constructor function hai, ye apka naya instanc laake deta hai

const user3 = new user('robo',18,true)
console.log(user3)