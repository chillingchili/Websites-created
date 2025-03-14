let arr = [0];
let k = 0;
document.querySelectorAll('.calcBtn').forEach(num => {
    num.addEventListener('click', () => {
        console.log(num.textContent);
        if (num.textContent == 'Clear') {
            clearDisplay();
            arr = [0];
            display();
        } else if (num.textContent == '=') {
            getAnswer();
        } else {
            addDisplay(num.textContent);
        }

    })
});

let d = document.getElementById('display');
let firstInput = true;

function getAnswer() {
    let expression = arr.join("");
    let result = eval(expression);
    clearDisplay();
    addDisplay(result);
}

function display() {
    d.innerHTML = arr.join(" ");
}

function addDisplay(number) {
    if (firstInput) {
        arr = [];
        firstInput = false;
    }
    arr.push(number);
    display();
}

function clearDisplay() {
    arr = [];
    firstInput = true;
    display();
}

display();