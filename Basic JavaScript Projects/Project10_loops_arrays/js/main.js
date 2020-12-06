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