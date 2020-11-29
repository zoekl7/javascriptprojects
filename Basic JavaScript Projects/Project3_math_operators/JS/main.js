//first addition method//

var x = myFunction(7, 3);
document.getElementById("Math").innerHTML = x;

function myFunction(a, b) {
    return a + b;
}

//second method//

function addition_Function() {
    var addition = 7 + 3;
    document.getElementById("Math").innerHTML = "7 + 3 = " + addition;
}

//subtraction//

function subtraction_Function() {
    var Subtraction = 7 - 3;
    document.getElementById("Math").innerHTML = "7 - 3 = " + Subtraction;
}