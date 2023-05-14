// Elementos del DOM
const display = document.querySelector('.display');
const calculator = document.querySelector('.calculator-grid');
const btnAllClear = document.querySelector('.all-clear');
const btnResultado = document.querySelector('.resultado');

// Variables auxiliares para almacenar valores
let num1 = '';
let num2 = '';
let operator = '';

// Llamado a Eventos al click
btnAllClear.addEventListener('click', boton => {
    resetAll();
    console.log('apretaste AC')
});

btnResultado.addEventListener('click', boton => {
    console.log('apretaste Resultado');
    display.innerHTML = ` ${parseInt(num1)}${operator}${parseInt(num2)} `;
});

calculator.addEventListener('click', function(event) {
    const element = event.target;

    if (!element.matches('button')) return;

    if (element.classList.contains('numero')) {

        if (!operator) {
            num1 += parseInt(element.textContent);
        }
        else {
            num2 += parseInt(element.textContent);
        }
        display.innerText += element.textContent;
        console.log('apretaste un numero')
       }

    if (element.classList.contains('operador')) {
        display.innerText = '';
        console.log('apretaste un operador')
    }    
});

// Funciones

const resetAll = function() {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '0000';
}