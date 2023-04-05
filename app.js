const firstInput = document.querySelector('.input01')
const secondInput = document.querySelector('.input02')
let firstName = document.querySelector('.firstName')
let secondName = document.querySelector('.secondName')

let resultPercentage = document.querySelector('.percentage')

const btnCalculate = document.querySelector('.calculate')
const btnReset = document.querySelector('.calculateAgain')
const resultSection = document.querySelector('#result')
const resultGif = document.querySelector('.result-gif')

function generatePercentage() {
    let percentage = Math.random() * 100;
    return percentage;
}

function calculate(ev) {
    if (firstInput.value != '' || secondInput.value != '') {
        firstName.innerText = firstInput.value
        secondName.innerText = secondInput.value

        let finalPercentage = Math.floor(generatePercentage());

        resultPercentage.innerText = finalPercentage;

        if (finalPercentage <= 10) {
            resultGif.src = 'assets/sad.gif'
        } else if (finalPercentage <= 30) {
            resultGif.src = 'assets/soso.gif'
        } else if (finalPercentage <= 50) {
            resultGif.src = 'assets/eee.gif'
        } else if (finalPercentage <= 80) {
            resultGif.src = 'assets/dance.gif'
        } else if (finalPercentage <= 90) {
            resultGif.src = 'assets/yeah.gif'
        } else if (finalPercentage <= 100) {
            resultGif.src = 'assets/marry.gif'
        }
 
        btnCalculate.style.display = 'none'
        resultSection.style.display = 'block'

        firstInput.disabled = true;
        secondInput.disabled = true;    
    } else {
        alert('Insira os nomes para poder realizar o cálculo!')
    }
}

function reset() {
    firstInput.value = ''
    secondInput.value = ''

    btnCalculate.style.display = 'block'
    resultSection.style.display = 'none'    

    firstInput.disabled = false;
    secondInput.disabled = false;
}
