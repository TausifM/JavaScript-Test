/* let a;
console.log(a);
console.log(typeof a); //undefined
 */

let pattern = /xyz/;
let value = "this is just a test";
let result = value.match(pattern);
console.log(result); // null
console.log(typeof result); // object

if (result === null) {
  console.log("no match found");
} // if null then return no match found
