var currentInput = "";
var result = "";
var pressButton = function (value) {
    currentInput += value;
    updateDisplay();
};
var calculate = function () {
    try {
        result = eval(currentInput);
        updateDisplay();
    }
    catch (error) {
        result = 'Erro';
        updateDisplay();
    }
};
var clearAll = function () {
    currentInput = '';
    result = '';
    updateDisplay();
};
var updateDisplay = function () {
    var display = document.getElementById("display");
    display.value = result || currentInput;
};
