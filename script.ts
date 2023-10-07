let currentInput: string = "";
let result: string = "";

const pressButton = (value: string) => {
    currentInput += value;
    updateDisplay();
}

const calculate = () => {
    try {
        result = eval(currentInput);
        updateDisplay();
    } catch (error) {
        result = 'Erro';
        updateDisplay();
    }
}

const clearAll = () => {
    currentInput = '';
    result = '';
    updateDisplay();
}

const updateDisplay = () => {
    const display = document.getElementById("display") as HTMLInputElement;
    display.value = result || currentInput;
}
