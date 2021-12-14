/* for (i = 0; i < 10; i++) {
  console.log(i);
}
 */
/* 
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < a.length; i++) {
  console.log(a[i]);
}
//Proper way to iterate with one variable through array;
 */
/* let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let b = 0; b < a.length; b++) {
  const c = a[b];
  console.log(c);
} */
let x = 1;
while (x < 10) {
  console.log(x++);
  if (x == 7) {
    break;
  }
}
