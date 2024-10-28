// super is used in class declarations to:

// Call the parent/superclass constructor
// Access parent/superclass methods and properties 

class Animal{
    constructor(name){
        this.name = name;
    }
    sound(){
        return `${this.name} makes a sound`
    }
}

class Dog extends Animal{
    constructor(name,voice){
        super(name);
        this.voice = voice;

    }
    speak(){
        return `${this.sound()} of barking`;
    }

}
const ani = new Animal("ani")
const tom = new Dog("tom","UwU");
console.log(tom.speak());

console.log(tom instanceof Animal )