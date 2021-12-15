let a, b, c, d, e;
let names = ["tausif", "sheikh", "axy", "ryb", "main"];
[a, b, e, d, c] = names;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

/* let others;
[a, b, ...others] = names;
console.log(a);
console.log(b);
//console.log(names);
console.log(others); */

let year, model;
({ year, model } = {
  make: "bmw",
  model: "15556",
  year: 2012,
  value: 50000,
});
console.log(year);
console.log(model);
