const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const addOnFeatures = document.querySelector(".addOnFeature");
const calculatorScreen = document.querySelector(".calculator-screen");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '';



numbers.forEach((number) => {
    number.addEventListener("click", (event) => { 
        inputNumber(event.target.value)   
        updateScreen(currentNumber);
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => { 
        inputOperator(event.target.value);
    })
})

equalSign.addEventListener("click", () => { 
    calculate();
    updateScreen(currentNumber);
})

clearBtn.addEventListener("click", () => { 
    clearAll();
    updateScreen(currentNumber);
})

addOnFeatures.addEventListener("click", () => { 
    alert("Sorry belum selesai hehehe, Silakan coba operasi hitung yang lain.");
})

decimal.addEventListener("click", (event) => { 
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})


 inputDecimal = (dot) => {
     if(currentNumber.includes('.')){
         return
     }
     currentNumber += dot;
 }

const clearAll = () =>{
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';

}

const updateScreen = (number) =>{
    calculatorScreen.value = number;
}

const inputNumber = (number) => {
    if(currentNumber === "0"){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

const inputOperator = (operator) => {
    if(calculationOperator === ""){
        prevNumber = currentNumber;
    }
    calculationOperator = operator
    currentNumber = "";
}

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber)  + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        case "%":
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}





