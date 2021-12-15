//this keyword means the way function is called.
/* let car = {
    make: "BMW",
    model: "75411",
    year: 2010,
    getPrice: function () {
      return 5000;
    },
    printDescription: function () {
      console.log(this.make + " " + this.model);
    },
  };
  car.printDescription();
 */

/* function first() {
  return this;
}
console.log(first() === global); */
// this is Node's global object
//because thta's where the first method was called.

/* function second() {
  "use strict";
  return this;
}
console.log(second() === global);
console.log(second() === undefined); */

// An object can be passed as the first argument to call
// or apply and this will be bound to it.
/* let myObject = { value: "My object" };
//value is set on the global object
global.value = "Global object";
function third(name) {
  //Return something different depending on how
  // we call this method
  return this.value + " " + name;
}
console.log(third());
//both call and apply allow you to explicitly set what you want to represent
// "this" . The difference is in how the additional
//arguement to the function are set.
console.log(third.call(myObject, "tausif"));
console.log(third.apply(myObject, ["tausif"])); */

function fifth() {
  console.log(this.firstName + " " + this.lastName);
}
let customer1 = {
  firstName: "Tausif",
  lastName: "Sheikh",
  print: fifth,
};
let customer2 = {
  firstName: "xyz",
  lastName: "abc",
  print: fifth,
};

customer2.print();
customer1.print();
