let display = "";
let currentValue = 0;
let tempValue = 0;
let operatorType = "";
let clearMe = false;
let editing = false;

function pressButton(buttonValue) {
    if (clearMe) {
        clearDisplay();
        clearMe = false;
    }
    if (operatorType != "" || editing === true) {
        display = "";
        editing = false;
    }
        
  display += buttonValue;
  document.getElementById("displayText").innerText = display;
  currentValue = display;
}

function operators(type) {
  tempValue = currentValue;
  currentValue = 0;
  editing = true;
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
    switch (operatorType) {
      case "add":
        tempValue = parseInt(tempValue) + parseInt(currentValue);
        break;
      case "subtract":
        tempValue = parseInt(tempValue) - parseInt(currentValue);
        break;
      case "multiply":
        tempValue = parseInt(tempValue) * parseInt(currentValue);
        break;
      case "divide":
        tempValue = parseInt(tempValue) / parseInt(currentValue);
        break;
    }
    operatorType = "";
    document.getElementById("displayText").innerText = tempValue;
    currentValue = 0;
    tempValue = 0;
    clearMe = true;
    editing = false;
}

function clearDisplay() {
  display = "";
  document.getElementById("displayText").innerText = "0";
}
