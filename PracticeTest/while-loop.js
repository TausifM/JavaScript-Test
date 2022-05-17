// ====While Statement=====
// The while statement creates a loop that executes a specified statement
// as long as the test condition evaluates to true

let num = 0;
while (num <= 10) {
  // Block Scope
  console.log(num); // Infinite Loop with out below post operator it goes into infinite loop
  num++;
}

// ====Do While Loop=====
// In do while loop either condition will statisfied or not
// Loop will executed for one time
let num1 = 0;
do {
  console.log(num1);
  num1++;
} while (num1 <= 10);

// =========FOR LOOP============
// let num2 = 10; num2<10; num2++
// for (initializer; condition; iteration) {
//   // Code to be executed
// }

// =============================================================================//

// Challenge : JS program to print table for given number 
// (8, 9, 12, 15) using for loop ?

for(let num4 =1; num4 <=10; num4 ++){
    let tableOf = 8; // 9, 12, 15
    console.log(tableOf + " * " + num4 + " = " + tableOf * num4)
}
