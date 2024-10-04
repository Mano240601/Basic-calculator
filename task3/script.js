function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function deleteLast() {
    var currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function calculate() {
    try {
        const expression = document.getElementById("result").value;
        // Use a safer method to evaluate the expression
        const output = Function(`'use strict'; return (${expression})`)();
        document.getElementById("result").value = output;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '/') {
        display(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearScreen();
    }
});
