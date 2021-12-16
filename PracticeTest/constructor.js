/* let car = {
  make: "BMW",
  model: "75411",
  year: 2010,
};
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
let myCar = new Car("bmw", "75411", 2010);
console.log(myCar);
 */
function MyFunction() {
  console.log("I am simple function");
}
let myFunction = new MyFunction();
console.log(typeof myFunction);

//cannot do anything with this particular
// object ... it's certainly NOT a function
// reference anymore
// capital MyFunction is According to the book
//"Javascript: the good parts", you should only
//capitalise the first character of the name of
//a function when you need to construct the object by "new" keyword.

//This is called "the Constructor Invocation Pattern", a way to inherits.
//myFunction();
