let names = ["tausif", "sheikh", "map", "method"];
let others = ["abc", "defg", "hij", "klmn"];

let lost = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 40];
let fibonacci = [1, 2, 3, 22, 2, 2, 3, 3, 45, 45, 4];

var combine = lost.concat(fibonacci);
//console.log(combine);

// console.log(fibonacci.join("~"));

//push, pop
/* console.log(lost.shift());
console.log(lost);

lost.unshift(1, 2, 3, 4);
console.log(lost); */
/* 
console.log(names);
console.log(names.reverse());
console.log(names.sort()); // alphabetical order
 */

// console.log(others.indexOf("abc")); //0
// console.log(combine.lastIndexOf(1)); //9

//map
var filtered = combine.filter((x) => {
  if (x <= 15) return x;
});
console.log(filtered);

// names.forEach((name) => console.log(`how rae ${name}`));
// console.log(filtered.every((num) => num < 10));
// console.log(filtered.every((num) => num < 16));

console.log(fibonacci.some((num) => num > 20)); //true
console.log(fibonacci.some((num) => num > 100)); // false
