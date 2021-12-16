/* let hi = () => {
  console.log("Hi How are you !");
};
hi();
 */

/* 
let hi = (name, year) => {
  console.log(`how are you ${year}, ${name}`);
};
hi("tausif", 2020);
 */

/* let add = (a, b) => {
  return a + b;
};
console.log(add(7, 3)); */

/* let names = ["tausif", "sheikh", "map", "method"];

names.map((name) => {
  console.log(`how are you ${name}`);
});
 */

/* let names = ["tausif", "sheikh", "map", "method"];
let i = 0;
names.map((name) => {
  i++, console.log(`how are you ${name} ${i}`);
});
 */

let names = ["tausif", "sheikh", "map", "method"];
var transformed = names.map((name) => {
  return `how are you ${name}`;
});
console.log(transformed);
// arrow function is simple version of function expressions
