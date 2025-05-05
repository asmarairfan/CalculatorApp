const num = document.getElementById('section1');
const buttons = Array.from(document.querySelectorAll('.button'));
const Dbuttons = Array.from(document.querySelectorAll('.Dbutton'));
let currentbutton = null;

function buttonclick(event) {
    const button = event.target;
    if (currentbutton) {
        currentbutton.classList.remove('hover');
    }
    button.classList.add('hover');
    currentbutton = button;
}
function buttondisplay(event) {
    const button = event.target;
    num.innerText = num.innerText + button.innerText;
}

buttons.forEach(button => {
    button.addEventListener("click", buttonclick);
});

Dbuttons.forEach(button => {
    button.addEventListener("click", buttondisplay)
});

const clearButton = document.getElementById('Cbutton');
clearButton.addEventListener('click', function () {
    num.innerText = "";
    result.innerText = "";
})

const bkButton = document.getElementById('backspace');
bkButton.addEventListener('click', function () {
    num.innerText = num.innerText.slice(0, -1);
})

const equalButton = document.getElementById('equals');
const result = document.getElementById('section2');
equalButton.addEventListener('click', function () {

    const expression = num.innerText;

    try {
        const calculatedResult = eval(expression);

        if (isFinite(calculatedResult)) {
            result.innerText = calculatedResult;
        } else if (expression === "") {
            alert("Please enter a value");
        } else {
            result.innerText = 'Error';
            alert("Division by zero error!")
        }
    } catch (error) {
        result.innerText = 'Error';
        alert("Syntax error!")
    }

});

