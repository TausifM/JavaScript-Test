/* //Dont Do THIS GLOBAL SCOPE
var myVariable = "I m at global scope";
//THIS EITHER
var myFunction = function () {
    console.log("me too")
} */
/* function one() {
  return "one";
}
let value = one;
console.log(typeof value);
console.log(typeof one);
console.log(value()); //this is invokation method */

/* function two() {
  return function () {
    console.log("two");
  };
}
let myFunction = two();
myFunction(); */
function three() {
  return function () {
    return "three";
  };
}
console.log(three()()); // only signle () return [Function (anonymous)]
