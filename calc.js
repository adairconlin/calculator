let grandArray = [],
    methodArray = [];
let numberStr = "",
    answer = "";

document.querySelectorAll(".numBtn").forEach(function(num) { 
    num.addEventListener("click", function() {
        if(answer > 0 && methodArray.length == 0) {
            numberStr = "";
            document.getElementById("firstnum").innerHTML = "";
            answer = num.textContent;
            numberStr += num.textContent;
            document.getElementById("firstnum").innerHTML = numberStr;
        } else if(methodArray.length > 0) {
            numberStr += num.textContent;
            document.getElementById("secondnum").innerHTML = numberStr;
        } else {
            numberStr += num.textContent;
            document.getElementById("firstnum").innerHTML = numberStr;
        }
    })
});

//arith buttons
document.querySelectorAll(".arithBtn").forEach(function(arith) {
    arith.addEventListener("click", function() {
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

//equal button
document.querySelector(".equalBtn").addEventListener("click", function() {
    grandArray.push(numberStr);
    methodFunction();

    document.getElementById("firstnum").innerHTML = answer;
    document.getElementById("symbol").innerHTML = "";
    document.getElementById("secondnum").innerHTML = "";

    methodArray = [];
    grandArray = [];
    numberStr = answer;
});

function methodFunction() {
    if(methodArray[0] == "+") {
        additionFunction();
    } else if(methodArray[0] == "-") {
        subtractionFunction();
    } else if(methodArray[0] == "*") {
        multiFunction();
    } else if(methodArray[0] == "÷") {
        divideFunction();
    }
}


function additionFunction() {
    answer = parseFloat(grandArray[0]) + parseFloat(grandArray[1]);
}

function subtractionFunction() {
    answer = parseFloat(grandArray[0]) - parseFloat(grandArray[1]);
}

function multiFunction() {
    answer = parseFloat(grandArray[0]) * parseFloat(grandArray[1]);
}

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