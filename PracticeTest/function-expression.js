/* setTimeout(function () {
    console.log("I wait 2 sec");
}, 2000);
 */
let counter = 0;
function timeout() {
  setTimeout(function () {
    console.log("hi " + counter++);
    timeout();
  }, 2000);
}
timeout();
(function () {
  console.log("Immediately Invoked Function Expression (IIFE)");
})();

// ======================= FUNCTION EXPRESSION ============

// Function expressions simply means
// Create a function and put it into the variable funExp

function sum(a, b) {
  let total = a + b;
  console.log(total);
}

const funExp = sum(10, 20);
funExp;

// In the above code we are just console log the total but for assign the total
// we have to use RETURN KEYWORD

// ========================RETURN KEYWORD ===============
// When JS reaches a return statement the function will stop executing
// Function often compute a return value
// The RETURN value is 'returned' back to the "caller"

function sum(a, b) {
  return (total = a + b);
}

const funExp1 = sum(0, 25);
console.log(funExp1);

// =============== Anonymous Function ===============

// A function expression is similar to and has the same syntax
// as a function declaration one can define "named"
// function expressions. (where the name of the expression might be used
// in the call stack for example)
// or "anonymous " function expressions.

const funExp2 = function (a, b) {
  return (total = a + b);
};
const sum2 = funExp2(10, 20);
console.log("the sum is " + sum2);