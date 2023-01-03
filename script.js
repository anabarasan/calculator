const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const btnClear = document.querySelector('[data-clear]');
const btnDelete = document.querySelector('[data-delete]');

const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        let number = button.innerText;
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        let operator = button.innerText;
    });
});

btnClear.addEventListener('click', () => {
    console.log("All Clear");
});

btnDelete.addEventListener('click', () => {
    console.log("Delete");
});