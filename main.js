"use strict";
// OOP Oblect Oriented Programing
class Lion {
    constructor(name) {
        this.name = name;
    }
    Eat() {
        console.log(this.name, "Eating...");
    }
    Roar() {
        console.log(this.name, "Roaoring...");
    }
    Walk() {
        console.log(this.name, "Walking...");
    }
    Hunt() {
        console.log(this.name, "Hunting");
    }
}
let l1 = new Lion("Oscar");
let l2 = new Lion("Babbar");
l1.Roar();
l1.Walk();
l1.Hunt();
l1.Eat();
l2.Roar();
l2.Walk();
l2.Hunt();
l2.Eat();
