// this  (call apply bind constructors)

// !'use strict' {}
// 'use strict' {}, undefined, null

// 1. Global Scope
// 2. functions (simple | arrow)
// 3. call apply bind
// 4. function constructor

// const a = {
//   number: 23,
//   f() {
//     console.log(this)
//   }
// }

// a.f()
// 'use strict'

// function a() {
//   console.log(this)
// } 
// a()

// var color = 'black'

// const car = {
//   color: 'red',
//   a() {
//     console.log(this.color);
//   },
//   showColor() {
//     // this
//     this.a();
//   }
// }

// car.showColor()

// let car1 = {
//   maxSpeed: 200,
//   showMaxSpeed() {
//     console.log(this.maxSpeed);
//   },
//  };
 
 
//  let car2 = {
//   maxSpeed: 260,
//  };

// //  car1.showMaxSpeed()
// car1.showMaxSpeed.call(car2) //260
// car1.showMaxSpeed.apply(car2) //260
// const bindedShowMaxspeed = car1.showMaxSpeed.bind(car2) //
// bindedShowMaxspeed()

// const scooter = {
//   maxSpeed: 60
//  }
 
 
//  const car1 = {
//   maxSpeed: 200,
//   showMaxSpeed() {
//     //
//     (
//       () => {
//         console.log(this.maxSpeed);
//       }
//     )()
//   },
//  };

//  car1.showMaxSpeed.call(scooter)

// const scooter = {
//   maxSpeed: 60,
//  };

//  const scooter2 = {
//   maxSpeed: 80,
//  };
 
//  const bike = {
//   maxSpeed: 180,
//  };
 
//  const car1 = {
//   maxSpeed: 200,
//   showMaxSpeed(a, b) {
//     console.log(this.maxSpeed);
//   },
//  };
 
//  car1.showMaxSpeed(10, 20)
 
//  car1.showMaxSpeed
//       .bind(scooter)
//       .bind(scooter2)
//       .apply(bike); 

// function Car(color) {
//   // {}
//   this.color = color
//   //return {}
// }

// function showColor () {
//   console.log(this.color)
// }

// const bmw = new Car('red')
// bmw.showBmwColor = showColor

// bmw.showBmwColor()

// const foo = (id) => {
//   console.log(id)
// }

// <Button onClick={foo.bind(null, id)} />

// const car = {
//   color: 'red',
//   showColor() {
//     console.log(this.color);
//   },
//  };

 
//  setTimeout(car.showColor.bind(car), 1000);

// const car = {
//   brand: 'ferrari',
//   color: 'red',
//   showColor() {
//     return `Car color ${this.color}`;
//   },
//   showBrand: () => {
//     return `Car brand ${this.brand}`;
//   },
//  };
// //  console.log(car.showColor());
//  console.log(car.showBrand());

// const scooter = {
//   color: 'pink'
// }

// const car = {
//   color: 'red',

//   firstShowColor() {
//     console.log('1', this.color);
//   },

//   secondShowColor: () => {
//     console.log('2', this.color);
//   },

//   thirdShowColor() {
//     // this
//     const a = () => {
//       console.log('3', this.color);
//     };
//     a()
//   },
//  };

// //  car.firstShowColor()
// // car.secondShowColor()
// car.thirdShowColor()

// const car = { color: 'red' };


// function foo() {
//  console.log(this.color);
// }


// const bindedFoo = foo.bind(car);
// bindedFoo(); 

// const car = {
//   color: 'red',
//   showColor() {
//     console.log(`1: ${this.color}`);
//   },
//  };
 
 
//  function CarConstructor1(color) {
//   // {color: 'black', showColor() {console.log(`2: ${this.color}`)} }
//   this.color = color;
//   this.showColor = function () {
//     console.log(`2: ${this.color}`);
//   };
//  }

//  const car1 = new CarConstructor1('red')
//  const car2 = new CarConstructor1('black')
//  const car3 = new CarConstructor1('pink')
 
//  car1.showColor()
//  car2.showColor()
//  car3.showColor()

//  console.log(car1)
 
//  const Car1 = CarConstructor1.bind(car);
//  const newCar = new Car1('black');


//  newCar.showColor()
//  console.log(car.color)
