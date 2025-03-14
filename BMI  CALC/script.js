let BMI = 0;
let p = document.getElementById('BMI');

function calculateBMI() {
    let height = Number(document.getElementById('height').value);
    let weight = Number(document.getElementById('weight').value);
    BMI = weight / (height / 100) ** 2;
    displayBMI();
}

function displayBMI() {
    p.innerHTML = "";
    p.innerHTML += `${BMI.toFixed(2)}`;
    console.log(`BMI: ${BMI.toFixed(2)}`);
    BMI = 0;
}

displayBMI();