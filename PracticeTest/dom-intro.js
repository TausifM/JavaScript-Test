(function () {
  function clickHandler(message) {
    console.log("hi.... " + message);
  }
  //get a refference to myButton
  let myButton = document.getElementById("myButton");
  myButton.addEventListener("click", function () {
    clickHandler(" hi from IFFE");
  });
})();
