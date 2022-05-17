// Conditional Ternary Operator
// The ternary operator is a shorthand for the if/else statement.
// The Conditional Ternary Opertor is the only JavaScript operator that takes three operands.
// The syntax is:
// condition ? true-value : false-value

const age = 17;
if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

(age >= 18) ? console.log("Adult") : console.log("Minor");
