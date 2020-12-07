function Loop() {
    var Numbers = "";
    var X = 0;
    while (X < 6) {
        Numbers += "<br> Number: " + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Numbers;
}

//For loop//
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

//object array//
function characters() {
    var char = [];
    char [0] = "Harry Potter";
    char [1] = "Gandalf";
    char [2] = "Bruce Wayne";
    document.getElementById("charname").innerHTML = "Name: " + char[1] + ".";
}

//Const keyword//
function constant_function() {
    const Animals = {type:"Reptile", brand:"Snake", color:"black"};
    Animals.color = "black";
    Animals.price = "$300";
    document.getElementById("Constant").innerHTML = "The cost of the " + Animals.type + " is " + Animals.price;
}

//let keyword//
var X = 30;
document.write(X);
{
    let X = 13;
    document.write("<br>" + X);
}
document.write("<br" + X);
