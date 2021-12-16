(function () {
  function incrementCounter() {
    counter = counter + 1;
  }
  function updateUI() {
    const colors = [
      { name: "Alizarin", value: "#e74c3c" },
      { name: "Belize Hole", value: "#2980b9" },
      { name: "Emerald", value: "#2ecc71" },
      { name: "Midnight Blue", value: "#2c3e50" },
      { name: "Sun flower", value: "#f1c40f" },
      { name: "Pumpkin", value: "#d35400" },
    ];
    let result = document.getElementById("resultDiv");
    result.innerText = counter;
    if (counter > 0) {
      result.style.fontSize = counter + "em"; // em = "emphemeral unit"
    }
    // divide first into second, return the remainder
    // access that element of thr colors array to grab
    // the color object

    let remainder = counter % colors.length;
    result.style.color = colors[remainder].value;

    // clear out all existing child color divs
    let colorDiv = document.getElementById("colorDiv");
    colorDiv.innerHTML = "";
    // re add the child color divs
    for (i = 0; i < colors.length; i++) {
      var node = document.createElement("div");
      var textnode = document.createTextNode(colors[i].value);
      node.appendChild(textnode);
      node.style.backgroundColor = colors[i].value;
      // alternatively i could have made this into css
      // style and added that to the node.classlist ...
      node.style.width = "150px";
      node.style.height = "50px";
      node.style.cssFloat = "left";
      node.style.paddingLeft = "10px";
      node.style.paddingTop = "10px";
      if (i == remainder) {
        node.style.height = "45px";
        // example of adding a class to the node
        // classlist
        node.classList.add("selected");
      }
      colorDiv.appendChild(node);
    }
  }
  function handleClick() {
    incrementCounter();
    updateUI();
  }
  let counter = 0;
  let myButton = document.getElementById("myButton");
  myButton.addEventListener("click", function () {
    incrementCounter();
    updateUI();
  });
  updateUI();
})();
