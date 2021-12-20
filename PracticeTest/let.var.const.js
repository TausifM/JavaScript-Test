var greeting = "hi";
var times = 4;
if (times > 3) {
  var greeting = "say hello instead";
  console.log(greeting);
}
console.log(greeting); //say hello instead

/*  So, since times > 3 returns true, greeting is redefined  to
 "say Hello instead". While this is not a problem if you 
 knowingly want greeting to be redefined, it becomes a 
 problem when you do not realize that a variable greeter 
 has already been defined before.
 */
// Let
let greeting = "say Hi";
let times = 4;

if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
}
console.log(hello); // hello is not defined

/* let can be updated but not re-declared.
Just like var,  a variable declared with let can be updated within
its scope. Unlike var, a let variable cannot be re-declared
within its scope. So while this will work: */

let greeting = "say Hi";
greeting = "say Hello instead";

let greeting = "say Hi";
if (true) {
  let greeting = "say Hello instead";
  console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"

/* const cannot be updated or re-declared
This means that the value of a variable declared with const remains
the same within its scope. It cannot be updated or re-declared.
So if we declare a variable with const, we can neither do this: */
const greeting = "say Hi";
greeting = "say Hello instead"; // error: Assignment to constant variable.

const greeting = "say Hi";
const greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
