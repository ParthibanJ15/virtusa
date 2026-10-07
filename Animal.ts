class Animal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name);
    }

    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound();
console.log(`Breed: ${myDog.breed}`);