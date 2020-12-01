function numbers() {
    document.write(typeof 7.3)
    typeof 7.3;
}
//infinity//
function Test() {
    document.getElementById("Test").innerHTM = 1.7976931348623157E308;
    document.write(1.7976931348623157E308);
}

//Boolean//
document.write(9>5);

//Console Log//
console.log(3 + 4);

//Coercion//
document.write("7" + 3);

//Comparisons//
document.write(7 == 3);
document.write(7 == 7);

A = 7;
B = 7;
document.write(A === B);

Q = "Cat";
W = "Dog";
document.write(Q === W);

S = 5;
D = "5";
document.write(S === D);

R = 5;
R = "7";
document.write(R === R);

document.write(5 > 3 && 7 > 4);
document.write(5 > 7 && 3 > 7);

document.write(5 > 7 || 7 > 3);
document.write(5 > 7 || 7 > 13);

function notfunction() {
    document.getElementById("Not").innerHTML = !(5 > 7);
}

function nottest() {
    document.getElementById("Nope").innerHTML = !(7 > 5);
}