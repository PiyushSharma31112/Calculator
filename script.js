const display = document.querySelector(".result")

function appendToDisplay(input) {
    display.value += input;
}
 
function claculate() {
    display.value = eval(display.value)
}

function clearDisplay() {
    display.value = "";
}
