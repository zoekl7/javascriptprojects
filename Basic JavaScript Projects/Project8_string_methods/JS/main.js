//concat() method//
function Sentence() {
    var first = "Here is ";
    var second = "a complete ";
    var third = "sentence! ";
    var whole = first.concat(second, third);
    document.getElementById("Concatenate").innerHTML = whole;
}

//slice method//
function pizzaslice() {
    var sentence = "Luke, I am your father.";
    var section = sentence.slice(0,4);
    document.getElementById("Slice").innerHTML = section;
}
//number methods//
function stringMethod() {
    var X = 73;
    document.getElementById("Numbers").innerHTML = X.toString();
}

//toPrecision method//
function precisionMethod() {
    var X = 73576.63775468754;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}