if (false) {
} else {
  console.log("false is falsy");
}
if (null) {
} else {
  console.log("null is falsy");
}
if (undefined) {
} else {
  console.log("undefined is falsy");
}
if (0) {
} else {
  console.log("0 is falsy");
}
if (NaN) {
} else {
  console.log("NaN is falsy");
}
if ("") {
} else {
  console.log(" '' is falsy");
}
if (" ") {
} else {
  console.log(' "" is a falsy ');
}

//Everything else is truthy

if (true) {
  console.log(" true is truthy");
}
if ({}) {
  console.log("  empty object is truthy");
}
if ([]) {
  console.log("  empty array is truthy");
}
if ("tausif") {
  console.log(" non-empty string is truthy");
}
if (new RegExp()) {
  console.log(" regular expression is truthy");
}
if (10) {
  console.log(" postive integer is truthy");
}
if (-10) {
  console.log(" negative integer is truthy");
}
if (1.23) {
  console.log(" positive floats is truthy");
}
if (-1.23) {
  console.log(" negative floats is truthy");
}
if (Infinity) {
  console.log(" postive infinity is truthy");
}
if (-Infinity) {
  console.log(" negative infinity is truthy");
}
