function getNumber(btn) {
  let solution = document.getElementById("displayText").innerText;

  if (btn == "enter") {
    // results
    document.getElementById("displayText").innerText = eval(solution);
  } else {
    // add number to display
    let number = document.getElementById(btn).value;
	document.getElementById("hiddenOp").value = number;
    document.getElementById("displayText").innerText = solution + number;
  }
}

function clearDisplay() {
  document.getElementById("displayText").innerText = "";
}
