let display = ""; // calculator display
let currentValue = 0; // first value
let tempValue = false; // second value
let operatorType = ""; // operator
let clearMe = false; // set to clear display on button press
let editing = false; // entering the second number
const dogs = ["dog.jpg", "dog1.jpg", "dog2.jpg", "dog3.jpg"];

changeDog();

function pressButton(buttonValue) {
  // press button
  if (clearMe) {
    // clear everything
    clearDisplay();
    clearMe = false;
  }
  if (editing) {
    // clear display for second number
    display = "";
    editing = false;
  }
  // concat the numbers
  display += buttonValue;
  // set display
  document.getElementById("displayText").innerText = display;
  // store current value
  currentValue = display;
}

function operators(type) {
  // pressed an operator
  if (tempValue) {
    pressEnter();
  }
  tempValue = currentValue; // store first number
  editing = true; // set to enter second value
  operatorType = type; // set operatorType
}

function pressEnter() {
  // equals button
  switch (
    operatorType // check operator type
  ) {
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
    default:
      break;
  }
  operatorType = ""; // clear operatorType
  document.getElementById("displayText").innerText = tempValue; // set display
  currentValue = tempValue; // reset
  clearMe = true; // clear value on press
  editing = false; // clear editing
}

function clearDisplay() {
  // clear the display
  display = "";
  document.getElementById("displayText").innerText = "0";
}

function changeDog() {
  // change background when clicking header
  let dog = dogs[getRandomInt(0, dogs.length)];
  document.getElementById("calculator").style.backgroundImage =
    "url('assets/" + dog + "')";
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
