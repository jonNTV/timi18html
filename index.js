const display = document.querySelector(".display");

let firstNumber = null;
let selectedOperator = null;

function clearAll() {
    display.value = 0;
    asfmsklfmasklfmasmklasdfmaslfsaf
};

function updateDisplay(num){
    display.value = num;
}

function deleteLast(){
    if(display.value === "0" ){
        return
    }

    if(display.value.length === 1){
        updateDisplay(0)
    } else {
        updateDisplay(display.value.slice(0,-1));
    }
};

function selectOperator(operator) {
    firstNumber = Number(display.value);
    selectedOperator = operator;
    updateDisplay(0);
};

function selectNumber(num) {

    if(display.value === "0"){
        updateDisplay(num)
    } else {
        updateDisplay(display.value + num);
    }
};

function calculateNumbers() {
    let result;
    const secondNumber = Number(display.value);
    if(selectedOperator === "-"){
        result = firstNumber - secondNumber;
    } else if (selectedOperator === "+"){
        result = firstNumber + secondNumber;
    } else if (selectedOperator === "*"){
        result = firstNumber * secondNumber;
    } else if (selectedOperator === "/"){
        result = firstNumber / secondNumber;
    } else if (selectedOperator === "%"){
        result = firstNumber * (secondNumber / 100);
    }

    
    updateDisplay(result)
};