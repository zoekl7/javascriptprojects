//ternary operation//
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").Value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}
//Utilizing New and This keywords and constructor//
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}


function NewThis() {
    document.getElementById("New_and_This").innerHTML = 
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + 
    " manufactured in " + Jack.Vehicle_Year;
}

//Nested function//
document.getElementById("Counting").innerHTML = add();
function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();
    return counter;
}

