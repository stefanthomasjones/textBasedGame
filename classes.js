

 class Animal {
    constructor(name) {
        this.name = name
    }
  get welcome(){
    return this.name
  } 
}

export class Dog extends Animal {
    constructor(name) {
        super(name) 
        this.health = 100
    }
}

export class Cat extends Animal {
    constructor(name) {
        super(name) 
        this.health = 80
    }
}

export class Rabbit extends Animal {
    constructor(name) {
        super(name) 
        this.health = 40
    }
}

