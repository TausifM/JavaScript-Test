let names = ["tausif", "sheikh", "map", "method"];
let others = ["abc", "defg", "hij", "klmn"];

let lost = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 40];
let fibonacci = [1, 2, 3, 22, 2, 2, 3, 3, 45, 45, 4];

var combine = lost.concat(fibonacci);
console.log("concat lost and fibonnaci ", combine);

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
console.log("filter method", filtered);

// names.forEach((name) => console.log(`how are you ${name}`));
// console.log(filtered.every((num) => num < 10));
// console.log(filtered.every((num) => num < 16));

console.log(fibonacci.some((num) => num > 20)); //true
console.log(fibonacci.some((num) => num > 100)); // false

// ================== PUSH, SHIFT, UNSHIFT =================
// _____________________________________________________________________________

const animals = ["pigs", "dog", "sheep"];

const count = animals.shift("chicken");
const count1 = animals.unshift("chicken");

console.log("shift", count);
console.log("unshift", count1);
console.log("shift and unshift", animals);

// PUSH
animals.push("chicken", "cats", "cow");
console.log("after push", animals);

// 2 nd Examples
const myNumber = [1, 2, 3, 4];
myNumber.unshift(4, 6);
console.log(myNumber, "unshift adding in the first index no."); // [ 4, 6, 1, 2, 3, 4 ]

// POP - This method changes the length of the array
console.log(animals.pop()); // cow
console.log(animals, "pop - last data is erased");

// ================= IMP - SPLICE ===================

// Challenge
// _____________________________________________________________________________

// 1. Add DEC at the end of array ?
// 2. What is the return value of spilce method ?
// 3. Update march to March (update) ?
// 4. Delete June from Array ?

const month = ["Jan", "march", "April", "June", "July"];
const arrayObj = [
  { id: 1, name: "abc" },
  { id: 2, name: "efg" },
];

// Sol 1 :
// _____________________________________________________________________________

const newMonths = month.splice(5, 0, "Dec");
console.log(month, "Adding the String Dec at the end");

console.log(arrayObj, "Before arrayObj");
const newArrayObj = arrayObj.splice(2, 0, { id: 3, name: "hji" });
// If you want to add oin the huge data at the last you can do 
console.log(arrayObj.length, 0, { id: 3, name: "hji" })
console.log(arrayObj, "Adding the Object in the ArrayObject Data Type");

// ====================== TYPE OF INTERESTING FACTS ====================
console.log(typeof { id: 3, name: "hji" }) // Object
console.log(typeof []) // Object 
console.log(typeof new Object , "new Obj") // Object
console.log(typeof Object) // Function

// ============================== Challenge Solution ==================
// Sol 2: Return value of splice
// _____________________________________________________________________________
// What gthe return value of SPLICE METHOD 
console.log(newMonths) // []
console.log(newArrayObj)  // []

// As we got here empty ARRAY because it check if any data is deleted or not,
// We do not delete any data here thatswhy 
// Empty ARRAY comes in the new Variable
// SPLICE mostly used for delete

// Sol 3: Update march to March 
// _____________________________________________________________________________
// 1. Manual technic
// const updateMarch = month.splice(1,1, "March")
// console.log(month, 'March update')

// 2. include technic
const indexOfMarch = month.indexOf("march") // if present of it will return +ve number
// if not present the give -ve number
if(indexOfMarch !== -1){
  const updateMarch = month.splice(indexOfMarch, 1, "March")
}else{
  console.log("No such data found")
}
console.log(indexOfMarch)
console.log(month, "After Updating with indexOf")

// Sol :  4 => Delete June From Array ?
//____________________________________________________________________________

const indexOfMarch1 = month.indexOf("June") // if present of it will return +ve number

if(indexOfMarch1 !== -1){
  const updateMarch = month.splice(indexOfMarch1, 1) // June Deleted Here
  console.log(month) // [ 'Jan', 'March', 'April', 'July', 'Dec' ]
  console.log(updateMarch, "After deleting splice return deleted data") // June
}else{
  console.log("No such data found")
}