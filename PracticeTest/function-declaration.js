/*function sayHello() {
  console.log("--------------");
  console.log("hello");
  console.log("--------------");
}
*/
//sayHello();
/*
let a = sayHello;
a();
a();
a();
*/
/* function sayHello(name) {
  console.log("--------------");
  console.log("hello " + name + "!");
  console.log("--------------");
}
sayHello("tausif");
sayHello("sitaram");
sayHello("interviewer");
 */
// Tax Calutaion

/* function calculateTax(amount) {
  let result = amount * 0.18;
  return result;
}
let tax = calculateTax(100);
console.log(tax); */

// Practical Example of Total Cart Price
const cartItems = [(quantity = 10), (price = 12000)];
const subTotal = cartItems.reduce((acc, i) => quantity * price, 0);
const tax = subTotal * 0.18;
const shippingCharges = subTotal > 1000 ? 0 : 200;
const totalPrice = subTotal + tax + shippingCharges;
function calulateTotalPrice() {
  const data = {
    subTotal,
    tax,
    shippingCharges,
    totalPrice,
  };
  console.log(data);
}
calulateTotalPrice();
