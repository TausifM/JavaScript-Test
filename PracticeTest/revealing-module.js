var counter = (function () {
  let count = 0;
  function print(message) {
    console.log(message + "---" + count);
  }
  function getCount() {
    return count;
  }
  function setCount(value) {
    count = value;
  }
  function incrementCount() {
    count += 1;
    print("After increment : ");
  }
  function resetCount() {
    count = 0;
    print("After reset: ");
  }
  //revels the public function
  //clearer presentation
  //However, overite the functions the propery values
  return {
    get: getCount,
    set: setCount,
    increment: incrementCount,
    reset: resetCount,
  };
})();
counter.increment();
counter.increment();
counter.increment();
//Accendentially created a closure;
//console.log(counter.value);
counter.set(7);
console.log(counter.get());
counter.reset();
