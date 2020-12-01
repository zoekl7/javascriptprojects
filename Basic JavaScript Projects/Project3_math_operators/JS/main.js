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

var x = myFunction2(7, 3);
document.getElementById("Math2").innerHTML = x;

function myFunction2(a, b) {
    return a - b;
}

function subtraction_Function() {
    var Subtraction = 7 - 3;
    document.getElementById("Math2").innerHTML = "7 - 3 = " + Subtraction;
}

//secend method//
function addition_Function() {
    var addition = 7 - 3;
    document.getElementById("Math2").innerHTML = "7 - 3 = " + Subtraction;
}

//multiplication//

var x = myFunction3(7, 3);
document.getElementById("Math3").innerHTML = x;

function myFunction3(a, b) {
    return a * b;
}

//second method//
function multiplication() {
    var simple_Math = 7 * 3;
    document.getElementById("Math3").innerHTML = "7 x 3 = " + simple_Math;
}

//division// 

var x = myFunction4(21, 3);
document.getElementById("Math4").innerHTML = x;

function myFunction4(a, b) {
    return a / b;
}

//second method//
function division() {
    var simple_Math = 21 / 3;
    document.getElementById("Math4").innerHTML = "21 / 3 = " + simple_Math;
}

//Modulus operator//

var x = myFunction5(30, 5);
document.getElementById("Math5").innerHTML = x;

function myFunction5(a, b) {
    return a % b;
}

//second method//
function modulus_Operator() {
    var simple_Math = 30 % 5;
    document.getElementById("Math5").innerHTML = "When you divide 30 by 5 you have a remainder of: " + simple_Math;
}

//increment operator//
function myFunction6() {
var X = 7;
X++;
document.write(X);
}

//decrement operator//

var x = 7;
x--;
document.write(x);

//multiple math operations at once//
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

//Random number//

window.alert(Math.random() * 50);