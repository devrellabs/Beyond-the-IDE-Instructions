document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '0';
    let operator = null;
    let previousInput = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText;

            if (value >= '0' && value <= '9') {
                handleNumber(value);
            } else if (value === 'AC') {
                handleClear();
            } else if (value === '±') {
                handlePlusMinus();
            } else if (value === '%') {
                handlePercent();
            } else if (value === '.') {
                handleDecimal();
            } else if (value === '=') {
                handleEquals();
            } else {
                handleOperator(value);
            }

            updateDisplay();
        });
    });

    function handleNumber(value) {
        if (currentInput === '0') {
            currentInput = value;
        } else {
            currentInput += value;
        }
    }

    function handleClear() {
        currentInput = '0';
        operator = null;
        previousInput = null;
    }

    function handlePlusMinus() {
        currentInput = (parseFloat(currentInput) * -1).toString();
    }

    function handlePercent() {
        currentInput = (parseFloat(currentInput) / 100).toString();
    }

    function handleDecimal() {
        if (!currentInput.includes('.')) {
            currentInput += '.';
        }
    }

    function handleOperator(value) {
        if (operator !== null) {
            handleEquals();
        }
        operator = value;
        previousInput = currentInput;
        currentInput = '0';
    }

    function handleEquals() {
        if (operator === null || previousInput === null) {
            return;
        }

        const current = parseFloat(currentInput);
        const previous = parseFloat(previousInput);
        let result;

        switch (operator) {
            case '÷':
                result = previous / current;
                break;
            case '×':
                result = previous * current;
                break;
            case '−':
                result = previous - current;
                break;
            case '+':
                result = previous + current;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = null;
        previousInput = null;
    }

    function updateDisplay() {
        display.innerText = currentInput;
    }
});
