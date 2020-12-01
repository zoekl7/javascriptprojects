function my_Dictionary() {
    var Movies = {
        Action:"The Old Gaurd",
        Comedy:"Get Smart",
        SciFi:"Avengers",
        Fantasy:"Fantastic Beasts"
    };
    delete Movies.Fantasy;
    document.getElementById("Dictionary").innerHTML = Movies.Fantasy;
}