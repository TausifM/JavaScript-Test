// Switch Statement
// Evaluate an expression , matching the expression's value to a
// case clause, and execute statements associated with that case.

// 1st without break statement
// Find the area of circle, triangle and rectangle ?
const area = "triangle";
const PI = 3.14,
  l = 5,
  b = 4,
  r = 3;

if (area == "circle") {
  console.log("Area of Circle is: " + PI * r ** 2);
} else if (area == "triangle") {
  console.log("Area of Triangle is: " + 0.5 * l * b); // l*b/2
} else if (area == "rectangle") {
  console.log("Area of Rectangle is: " + l * b);
} else {
  console.log("Invalid");
}

// In the above code, we have used the if-else statement. Thier is nested if-else statement.
// To overcome this problem, we can use switch statement.
switch (area) {
    case "circle":
        console.log("Area of Circle is: " + PI * r ** 2);
        break;
    case "triangle":
        console.log("Area of Triangle is: " + 0.5 * l * b); // l*b/2
        break;
    case "rectangle":
        console.log("Area of Rectangle is: " + l * b);
        break;
    default:
        console.log("Invalid");
}


