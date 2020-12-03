//Global and local variables //
var x = 7;
function add_1() {
    document.write(13 + x + "<br>");
}
function add_2() {
    document.write(x + 20);
}
add_1();
add_2();

function add_numbers1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function add_numbers2() {
    document.write(X + 100);
}
add_numbers1();
add_numbers2();

//Get Date Method and if statements//
function getYear() {
    if (new Date().getMonth() > 11); {
    document.getElementById("Holidays").innerHTML = "Happy Holidays!";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 17) {
        Movie = "Are are old enough!";
    }
    else {
        Movie = "You are not old enough!";
    }
    document.getElementById("Movie_Age").innerHTML = Movie;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}