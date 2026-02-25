var input = document.getElementById("inp");

// When number or operator button is pressed
function press(value) {
    input.value += value;
}

// Clear all
function clearAll() {
    input.value = "";
}

// Delete last character
function delOne() {
    input.value = input.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        input.value = eval(input.value);
    } catch {
        input.value = "Error";
    }
}



