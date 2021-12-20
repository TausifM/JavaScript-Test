var count = 3;
if (count == 4) {
  console.log("Count is 4");
} else if (count > 4) {
  console.log("Count is > 4");
} else if (count < 4) {
  console.log("Count < 4");
} else {
  console.log("Count is not equal to 4 ");
}

let hero = "Superman";
// search or type Uppercase it cannot
// search but .toLowerCase will make it lowerCase
switch (hero.toLowerCase()) {
  case "superman":
    console.log("super strength");
    console.log("x-ray vision");
    break;
  case "batman":
    console.log("Intelligence");
    console.log("fighting skill");
    break;
  default:
    console.log("member of JLA");
}

// Ternary Operator
let a = 1,
  b = "1";
let result = a == b ? "equal" : "inequal";
console.log(result);
// this will return equal with string
let a = 1,
  b = "1";
//let result = a === b ? "equal" : "inequal";
let result = a !== b ? "notequal" : "equal";

console.log(result);
// this will return inequal.

//Mobile not exceed than 10 number
if (phoneNo > 10 || phoneNo < 10) {
  alert.console.error("Number should be 10");
}
