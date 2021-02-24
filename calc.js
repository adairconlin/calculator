let grandArray = [],
    methodArray = [];
let numberStr = "",
    numberStrTwo = "",
    answer = "";

//number buttons
document.querySelectorAll(".numBtn").forEach(function(num) { 
    num.addEventListener("click", function() {
        if(methodArray.length > 0) {
            numberStrTwo +=num.textContent;
            document.getElementById("secondnum").innerHTML = numberStrTwo;
        } else {
            numberStr+= num.textContent;
            document.getElementById("firstnum").innerHTML = numberStr;
        }
    })
});

//arith buttons
document.querySelectorAll(".arithBtn").forEach(function(arith) {
    arith.addEventListener("click", function() {;
        if(methodArray.length > 0) {
            methodArray = [];
            methodArray.push(this.innerHTML);
            document.getElementById("symbol").innerHTML = methodArray[0];
        } else {
            grandArray.push(numberStr);
            numberStr = "";
            methodArray.push(this.innerHTML);
            document.getElementById("symbol").innerHTML = methodArray[0];
        }
    })
});

//equals button
document.querySelector(".equalBtn").addEventListener("click", function() {
    grandArray.push(numberStrTwo);

    if(methodArray[0] == "+") {
        additionFunction();
    } else if(methodArray[0] == "-") {
        subtractionFunction();
    } else if(methodArray[0] == "*") {
        multiFunction();
    } else if(methodArray[0] == "÷") {
        divideFunction();
    }

    document.getElementById("firstnum").innerHTML = answer;
    document.getElementById("symbol").innerHTML = "";
    document.getElementById("secondnum").innerHTML = "";

    numberStr = "";
    numberStrTwo = "";
    methodArray = [];
    grandArray = [];
});

//addition
function additionFunction() {
    answer = parseFloat(grandArray[0]) + parseFloat(grandArray[1]);
}
//subtraction
function subtractionFunction() {
    answer = parseFloat(grandArray[0]) - parseFloat(grandArray[1]);
}
//multiplication
function multiFunction() {
    answer = parseFloat(grandArray[0]) * parseFloat(grandArray[1]);
}
//division
function divideFunction() {
    answer = parseFloat(grandArray[0]) / parseFloat(grandArray[1]);
}

//clear button
document.querySelectorAll(".clearBtn").forEach(function(arith) {
    arith.addEventListener("click", function() {
        numberStr = "";
        grandArray = [];
        methodArray = [];
        document.getElementById("symbol").innerHTML = "";
        document.getElementById("firstnum").innerHTML = "";
        document.getElementById("secondnum").innerHTML = "";
    })
});
