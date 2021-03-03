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
    const calculator = (() => {
        arr = grandArray.map(Number);
        if(methodArray[0] == "+") {
            const add = (a, b) => a + b;
            answer = add(arr[0], arr[1]);
        } else if(methodArray[0] == "-") {
            const sub = (a, b) => a - b;
            answer = sub(arr[0], arr[1]);
        } else if(methodArray[0] == "*") {
            const mul = (a, b) => a * b;
            answer = mul(arr[0], arr[1]);
        } else if(methodArray[0] == "÷") {
            const div = (a, b) => a / b;
            answer = div(arr[0], arr[1]);
        }
    })();

    document.getElementById("firstnum").innerHTML = answer;
    document.getElementById("symbol").innerHTML = "";
    document.getElementById("secondnum").innerHTML = "";
    methodArray = [];
    grandArray = [];
    numberStr = answer;
});

//clear button
document.querySelectorAll(".clearBtn").forEach(function(arith) {
    arith.addEventListener("click", function() {
        numberStr = "";
        grandArray = [];
        methodArray = [];
        document.getElementById("firstnum").innerHTML = 0;
        document.getElementById("symbol").innerHTML = "";
        document.getElementById("secondnum").innerHTML = "";
    })
});