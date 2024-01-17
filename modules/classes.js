export class Animal {
  constructor(name, age, legs) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }
}

export class Dogs extends Animal {
  constructor(name, age, legs, fur, tail, muzzle) {
    super(name, age, legs);
    this.fur = fur;
    this.tail = tail;
    this.muzzle = muzzle;
  }
}

export class Cats extends Animal {
  constructor(name, age, legs, fur, tail, whiskers) {
    super(name, age, legs);
    this.fur = fur;
    this.tail = tail;
    this.whiskers = whiskers;
  }
}

export class Birds extends Animal {
  constructor(name, age, legs, wings, beak) {
    super(name, age, legs);
    this.wings = wings;
    this.beak = beak;
  }
}
