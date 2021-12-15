function sayHello(name) {
  return function () {
    console.log("how are you " + name);
  };
}
let tausif = sayHello("tausif");
tausif();
