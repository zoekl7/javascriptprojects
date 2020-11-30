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
    document.getElementById("Math2").innerHTML = "7 - 3 = " + Subtraction;
}

//multiplication//
function multiplication() {
    var simple_Math = 7 * 3;
    document.getElementById("Math3").innerHTML = "7 x 3 = " + simple_Math;
}



//multiple math operations at once//
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}