// let a = (7 * undefined) / "panama";
// console.log(a);

function beforeTryCatch() {
  let obj = undefined;
  console.log(obj.b);
  console.log(
    "If the prevision line of code through exceptions you'll never see this"
  );
}
//beforeTryCatch();

/* function afterTryCatch() {
  try {
    let obj = undefined;
    console.log(obj.b);
    console.log(
      "If the prevision line of code through exceptions you'll never see this"
    );
  } catch (error) {
    console.log("I caught an exception :  " + error.message);
  } finally {
    console.log("this will happened no matter what");
  }
  console.log("My application is still running");
}
afterTryCatch(); */
//result : -
// I caught an exception :  Cannot read property 'b' of undefined
// My applicatio is still running

function performCalculation(obj) {
  if (!obj.hasOwnProperty("b")) {
    throw new Error("Object missing Property");
  }
  //continue with calculation
  return 6;
}
function performHigherOperation() {
  let obj = {};
  let value = 0;
  try {
    value = performCalculation(obj);
  } catch (error) {
    console.log(error.message);
  }
  if (value == 0) {
    //contingency
    //retry logic
  }
}
performHigherOperation();
