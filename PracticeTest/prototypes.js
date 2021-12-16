// JavaScript Prototypal inheritence is actually OLOO
// OLOO means objects linking to other objects
let originalCar = {
  make: "BMW",
  model: "75411",
  year: 2010,
};
let newCar = Object.create(originalCar);
newCar.make = "audi";

console.log(newCar.make);
console.log(newCar.whatever); // undefined because not in newCar object and
// not in its Object prototype.
console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);
originalCar.door = 4;
console.log(newCar.door);

console.log(newCar.hasOwnProperty("door"));
console.log(originalCar.hasOwnProperty("door"));
