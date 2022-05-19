// how to flattern an array
// converting 2d and 3d array into one dimensional array
const arr = [
  ["zone_1", "zone_2"],
  ["zone_3", "zone_4"],
  ["zone_5", "zone_6"],
];

let flatternArr = arr.reduce((accum, currVal) => {
  return accum.concat(currVal);
});
console.log(flatternArr); // [ 'zone_1', 'zone_2', 'zone_3', 'zone_4', 'zone_5', 'zone_6' ]

// For Flattern Array by using REDUCE, Their is a problem with it,
// Whwn Nested Array in the 2d NESTED array that is not flattern by REDUCE.
// For example 
const arr1 = [
    ["zone_1", "zone_2"],
    ["zone_3", "zone_4"],
    ["zone_5",["zone_6", "zone_7"]]
 ];
