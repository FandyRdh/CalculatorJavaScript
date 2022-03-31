const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const calculatorScreen = document.querySelector(".calculator-screen");
const valueCalculates = document.querySelector(".valueCalculate");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '';
let vCalculates = '';


numbers.forEach((number) => {
    number.addEventListener("click", (event) => { 
        inputNumber(event.target.value)   
        updateScreen(currentNumber);
        updateValueCalculate(vCalculates);
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => { 
        inputOperator(event.target.value);
        updateValueCalculate(vCalculates);
    })
})


// EventListener
equalSign.addEventListener("click", () => { 
    calculate();
    updateScreen(currentNumber);
})

clearBtn.addEventListener("click", () => { 
    clearAll();
    updateScreen(currentNumber);
    vCalculates = '';
    updateValueCalculate(vCalculates);
})

decimal.addEventListener("click", (event) => { 
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
    updateValueCalculate(vCalculates);
})


// Function
const inputDecimal = (dot) => {
     if(currentNumber.includes('.')){
         return
     }
     currentNumber += dot;
     vCalculates += dot;
 }

const clearAll = () =>{
    prevNumber = '';
    calculationOperator = '';
    vCalculates = '';
    currentNumber = '0';
}

const updateScreen = (number) =>{
    calculatorScreen.value = number;
}

const updateValueCalculate = (v1) =>{
    valueCalculates.value = v1;
}

const inputNumber = (number) => {
    if(currentNumber === "0"){
        currentNumber = number;
        vCalculates = number;
    }else{
        currentNumber += number;        
        vCalculates += " "+number;
    }
}


// addOnFeature by FandyRdh
const inputOperator = (operator) => {
    if(calculationOperator === ""){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    

    // VCalculation
    if(vCalculates.includes("*") || vCalculates.includes("+") || vCalculates.includes("-") || vCalculates.includes("/") || vCalculates.includes("%") || vCalculates.includes("^")){ 
        vCalculates = prevNumber+" "+operator;
    }
    else{
        vCalculates +=" "+operator;
    }
    currentNumber = "";
    updateScreen("");      
}

// countDecimals
Number.prototype.countDecimals = function () {
    if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

    var str = this.toString();
    if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
        return str.split("-")[1] || 0;
    } else if (str.indexOf(".") !== -1) {
        return str.split(".")[1].length || 0;
    }
    return str.split("-")[1] || 0;
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
        case "^":
            result = prevNumber ** currentNumber;
            break;
        case "%":
            result = (prevNumber/ 100) * currentNumber;
            break;
        default:
            break;
    }

    // limit decimal value
    if(result.countDecimals()>= 8 ){
        currentNumber = result.toFixed(10);
    }else{
        currentNumber = result;
    }
    calculationOperator = '';
}





