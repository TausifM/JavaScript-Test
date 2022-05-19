// Array Subsection Map Reduce Method
//let newArray = arr.map(callback(currentValue[,index[,array]])) {
// return element for newArray, after executing something
//}[, thisArg]);

// Return a NEW ARRAY containing the results of calling a
// function on every element in this array

// ========================IMP ======================
// 1. Ability to chain with other methods
// 2. after map method you can use sort, reduce, filter and so on.

const array1 = [1, 4, 5, 8, 9];

// I want the greater than 4,  num > 4
let newArray = array1.map((currentElem, index, arr) => {
  return currentElem > 4;
});
console.log(array1);
console.log(newArray); // [ false, false, true, true, true ]

// If want to know the index number and value
const array2 = [1, 4, 5, 8, 9];
let newArray2 = array2.map((currentElem, index, arr) => {
  return `Index no = ${index} and the value is ${currentElem} belong to ${arr}`;
});
console.log(newArray2);

// If we use forEach instead of map then it will gives that ARRAY not new ARRAY
const array3 = [1, 4, 5, 8, 9];
let newArray3 = array3.forEach((currentElem, index, arr) => {
  return `Index no = ${index} and the value is ${currentElem} belong to ${arr}`;
});
console.log(newArray3); // undefined

// ============================ Challenge Time ===========================

// 1. Find the square root of each element in an array ?
// let arr = [25, 36, 49, 64, 81]
// 2. Multiply each element by 2 and return only those
// elements which are greater than 10 ?
// let arr = [2,3,4,6,8]

// Sol 1 :
let arr = [25, 36, 49, 64, 81];

let arrSqr = arr.map((curentElem, index, arr) => Math.sqrt(curentElem));
console.log(arrSqr);

// Sol 2 :
let arr2 = [2, 3, 4, 6, 8];
let arr3 = arr2.map((currentElem) => currentElem * 2).filter((currentElem) => currentElem > 10);
console.log(arr3);


// ========================= Reduce Method =========================

// flatten an array means to convert the 3d or 2d array into a 
// single dimensional array
// The reduce method executes a reducer function (that you provide) on each
// element of the array, resulting in single output value.
// The reducer function takes four arguements

// 1. Accumulator
// 2. Current Value
// 3. Current Index
// 4. Source Array

// Use cases, after map you have to calculate SUM, Multiplication, etc

let arrrr = [5,6,2,3]
// Addition 
let sum = arrrr.reduce((accumulator, currentElem, index, arr) => {
    return accumulator += currentElem
} )
console.log(sum) // 16

let arrr = [5,6,2,3]
// Multiplication
let multiplication = arrr.reduce((accumulator, currentElem, index, arr) => {
    debugger;
    return accumulator *= currentElem
} )
console.log(multiplication)


