//Class

// const car1 = {
//   brand: 'bmw',
//   maxSpeed: 200,
//   startEngine() {
//     console.log(`Start ${this.brand}`)
//   }
// }

// const car2 = {
//   brand: 'udi',
//   maxSpeed: 220,
//   startEngine() {
//     console.log(`Start ${this.brand}`)
//   }
// }

// function createCar(brand, maxSpeed) {
//   const car = {
//     brand,
//     maxSpeed,
//     startEngine() {
//       console.log(`Start ${this.brand}`);
//     },
//   };
//   return car;
// }

// const car1 = createCar("bmw", 200);
// const car2 = createCar("audi", 220);

// car1.startEngine();
// car2.startEngine();

// function Car(brand, maxSpeed) {
//   this.brand = brand;
//   this.maxSpeed = maxSpeed;
//   this.startEngine = function () {
//     console.log(`Start ${this.brand}`);
//   };
// }

// // Car.prototype.startEngine = function () {
// //   console.log(`Start ${this.brand}`);
// // };

// const car1 = new Car("bmw", 220);
// const car2 = new Car("audi", 200);

// console.log(car1);
// console.log(car2);

// car1.startEngine();

// class Car {
//   constructor(brand, maxSpeed) {
//     //{}
//     this.brand = brand; //{brand: 'bmw'}
//     this.maxSpeed = maxSpeed; //{brand: 'bmw', maxSpeed: 220}
//   }
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   }
//   // showMaxSpeed = () => {
//   //   console.log(`Max speed ${this.maxSpeed}`);
//   // };
//   //return {brand: 'bmw', maxSpeed: 220}
// }

// const car1 = new Car("bmw", 220);
// const car2 = new Car("audi", 200);

// console.log(car1);
// console.log(car2);

// car1.showMaxSpeed();

// class Car {
//   #brand;
//   constructor(brand, maxSpeed) {
//     if (brand.length < 3) {
//       throw new Error("brand must have 3 or more letters");
//     }
//     this.#brand = brand;
//     this.maxSpeed = maxSpeed;
//   }
//   startEngine() {
//     console.log(`Start ${this.#brand}`);
//   }
//   getBrand() {
//     return this.#brand.toUpperCase();
//   }
//   setBrand(newBrand) {
//     if (newBrand.length < 3) {
//       throw new Error("brand must have 3 or more letters");
//     }
//     this.#brand = newBrand;
//   }
//   set brand(newBrand) {
//     if (newBrand.length < 3) {
//       throw new Error("brand must have 3 or more letters");
//     }
//     this.#brand = newBrand;
//   }
//   get brand() {
//     //
//     return this.#brand.toUpperCase();
//   }
// }

// const car1 = new Car("bmw", 220);
// const car2 = new Car("audi", 200);

// car1.brand = "toyota";

// console.log(car1.brand);
// car1.brand = "";
// // car1.setBrand("t");

// console.log(car1.getBrand());
// console.log(car2);

// car1.showMaxSpeed();

// class MyClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   static create(name, age) {
//     if (typeof name !== "string") {
//       throw new Error("Имя должно быть строкой");
//     }
//     if (typeof age !== "number" || age < 0) {
//       throw new Error("Возраст должен быть положительным числом");
//     }

//     return new MyClass(name, age);
//   }
// }

// // MyClass.create(12, 432);

// const obj = new MyClass("fdsdafz", 34);

// obj.create("fsdf", 234);

class Car {
  #brand;
  constructor(brand, maxSpeed) {
    if (brand.length < 3) {
      throw new Error("brand must have 3 or more letters");
    }
    this.#brand = brand;
    this.maxSpeed = maxSpeed;
  }
  startEngine() {
    console.log(`Start ${this.#brand}`);
  }
  getBrand() {
    return this.#brand.toUpperCase();
  }
  setBrand(newBrand) {
    if (newBrand.length < 3) {
      throw new Error("brand must have 3 or more letters");
    }
    this.#brand = newBrand;
  }
  set brand(newBrand) {
    if (newBrand.length < 3) {
      throw new Error("brand must have 3 or more letters");
    }
    this.#brand = newBrand;
  }
  get brand() {
    //
    return this.#brand.toUpperCase();
  }
}

const car1 = new Car("bmw", 220);
const car2 = new Car("audi", 200);

car1.brand = "toyota";

console.log(car1.brand);

class SuperCar extends Car {
  constructor(name, ifCanFly) {
    super(name);
    //{}
    console.log(this);
    this.ifCanFly = ifCanFly;
  }
  startFly() {}
}

const superCar = new SuperCar("passat", true);

// superCar.startEngine();
