"use strict";
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    breed;
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}
const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound();
console.log(`Breed: ${myDog.breed}`);
