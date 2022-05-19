// ====================EcmaScript====================

// In 1996 JavaScript was created by Brendan Eich.
// In 1997 ECMAScript was created by the ECMA TC39 working group. Which result in EcmaScript
// JavaScript is submitted to ECMA International for standardization.
// ECMAScript is a specification for the JavaScript programming language.
// 2015 ECMAScript version is ES6

// ES6 features are:
// Arrow Function
// Class
// Default Parameter
// Spread Operator
// Rest Operator
// Object Property Shorthand
// let and const
// Template Literals
// Promises
// Iterators
// Generators
// Modules
// Async/Await

// ===============let , const vs var ================

function biodata() {
  let name = "Tausif"; // var is function scope and let is block scope
  let age = 25;
  console.log(name);
  console.log(age);
  // function scope
  if (true) {
    let lastName = "Sheikh";
    let age = 25;
    console.log("inner name " + lastName);
    console.log("inner age " + age);
    // Block Scope
  }
  console.log("outer name " + lastName); // Reference Error with let
}
biodata();


// ==================== Template Literals ================

for(let num4 =1; num4 <=10; num4 ++){
    let tableOf = 8; // 9, 12, 15
    console.log(tableOf + " * " + num4 + " = " + tableOf * num4)
    // Below is template literal
    console.log(`${tableOf} * ${num4} = ${tableOf * num4}`)
}

// ==================== Default Parameter ================

// Default function parameter allow named parameter to be 
// initialized with a default value if no value or undefined is passed

