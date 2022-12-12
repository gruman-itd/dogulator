let display = "";
let currentValue = 0;
let operatorType = "";

function pressButton(buttonValue) {
  display += buttonValue;
  document.getElementById("displayText").innerText = display;
}

function operators(type) {
  switch (type) {
    case "add":
      operatorType = "add";
      break;
    case "subtract":
      operatorType = "subtract";
      break;
    case "multiply":
      operatorType = "multiply";
      break;
    case "divide":
      operatorType = "divide";
      break;
  }
}

function pressEnter() {
  if ((operatorType = !"")) {
    operatorType = "";
    document.getElementById("displayText").innerText = currentValue;
    currentValue = 0;
  }
}

function clearDisplay() {
  display = "";
  document.getElementById("displayText").innerText = "0";
}
