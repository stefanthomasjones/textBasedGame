

 class Animal {
    constructor(name) {
        this.name = name
    }
  get welcome(){
    return console.log(this.name)
  } 
}

export class Dog extends Animal {
    constructor() {
        super() 
        this.health = 100
    }
}

export class Cat extends Animal {
    constructor() {
        this.health = 80
    }
}

export class Rabbit extends Animal {
    constructor() {
        this.health = 40
    }
}

