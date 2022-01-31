// function sayHi() {
//   console.log(name); // undefined
//   // console.log(age); // ReferenceError: Cannot access 'age' before initialization
//   var name = "xyz";
//   //let age = 21;
// }
// sayHi();
//========================================xxxxxxxxxxxxxx=====================
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// } // 3 3 3
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// } // 0 1 2
//========================================xxxxxxxxxxxxxx=====================
// const a = { x: 1, y: 2 };
// const b = a;
// b.x = 3;
// console.log(a); // { x: 3, y: 2 }
// console.log(b); // { x: 3, y: 2 }
//========================================xxxxxxxxxxxxxx=====================
// let a = 10;
// var a = 20;
// console.log(a); // SyntaxError: Identifier 'a' has already been declared
//========================================xxxxxxxxxxxxxx=====================
// x = 30;
// console.log(x);
// var x; // 30
//========================================xxxxxxxxxxxxxx=====================
var x = 0;
var y = 4;

if (x) {
  console.log(x); // not initialized
}
if (y) {
  console.log(y); //4
}
//========================================xxxxxxxxxxxxxx=====================
// let temp = {
//   a: 10,
//   b: 20,
//   sum() {
//     return this.a + this.b;
//   },
//   multi: () => {
//     return this.a * this.b;
//   },
// };
// console.log(temp.sum()); //30
// console.log(temp.multi()); // NaN
//========================================xxxxxxxxxxxxxx=====================
// console.log(+true); //1
// console.log(!"abc"); // false
//========================================xxxxxxxxxxxxxx=====================
// let c = { greeting: "hey" };
// let d;
// d = c;
// c.greeting = "hello";
// console.log(d.greeting); // hello
//========================================xxxxxxxxxxxxxx=====================
// let a = 3;
// let b = new Number(3);
// console.log(a == b); // true
// console.log(a === b); // false
//========================================xxxxxxxxxxxxxx=====================
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(10, "2")); // 102 - string
//========================================xxxxxxxxxxxxxx=====================
//console.log(typeof []); // object
//========================================xxxxxxxxxxxxxx=====================
// let x = 0;
// console.log(x++); // 0
//========================================xxxxxxxxxxxxxx=====================
// console.log(eval("10*10+5")); // 105 - number
// console.log(typeof eval); // function
// console.log(typeof eval()); // undefined
//========================================xxxxxxxxxxxxxx=====================
// const obj = {
//   a: "one",
//   a: "two",
// };
// console.log(obj); // two
//========================================xxxxxxxxxxxxxx=====================
// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i); // 1 2 4
// }
//========================================xxxxxxxxxxxxxx=====================
// console.log((() => 0)()); // 0
//========================================xxxxxxxxxxxxxx=====================
// console.log(typeof typeof 1); //  string
//========================================xxxxxxxxxxxxxx=====================
// console.log(true === 1); // false
//========================================xxxxxxxxxxxxxx=====================
// let x = [..."xyz"];
// console.log(x); // [ 'x', 'y', 'z' ]
//========================================xxxxxxxxxxxxxx=====================
// console.log(3 + 4 + "5"); // 75 - string
//========================================xxxxxxxxxxxxxx=====================
// var num = 8;
// var num = 10;
// console.log(num); // 10
//========================================xxxxxxxxxxxxxx=====================
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]); // 456
//========================================xxxxxxxxxxxxxx=====================
// (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x); // 1
//   }
//   console.log(x); // undefined
//   console.log(y); // 2
// })();
//========================================xxxxxxxxxxxxxx=====================

// console.log(
//   [
//     [0, 1],
//     [2, 3],
//   ].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2]
//   )
// ); // [ 1, 2, 0, 1, 2, 3 ]
//========================================xxxxxxxxxxxxxx=====================
// setInterval(() => console.log("Hi"), 1000);
// It returns a unique id. This id can be used to clear that interval with the clearInterval() function
//========================================xxxxxxxxxxxxxx=====================
// const bird = { size: "small" };
// const mouse = { name: "xyz", small: true };
// console.log(bird);
// console.log(mouse); // All are valid
//========================================xxxxxxxxxxxxxx=====================
