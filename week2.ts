function GreeterFunction(name: string) {
  return `Hello, ${name}`;
};

interface City {
  name: string;
  population: number;
  country: string;
}

const helsinki: City = {
  name: "Helsinki",
  population: 600000,
  country: "Finland",
};

let cityObject: City = helsinki;

class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let animal1: Animal = new Animal("Cat", 2);
let animal2: Animal = new Animal("Dog", 3);

class Animal2 {
  name: string;
  age: number;
  sound: string;

  constructor(name: string, age: number, sound: string) {
    this.name = name;
    this.age = age;
    this.sound = sound;
  }

  makeSound(): string {
    return `I am a ${this.name} and I sound like ${this.sound}`;
  }
}

let snake: Animal2 = new Animal2("Snake", 4, "hiss");
let lion: Animal2 = new Animal2("Lion", 8, "roar");

export { GreeterFunction, cityObject, animal1, animal2, snake, lion };
