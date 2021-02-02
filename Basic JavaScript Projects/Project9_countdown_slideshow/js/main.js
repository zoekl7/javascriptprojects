function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
        alert("Time's up!");
    }
        }
    tick();
}

//Slide show //

var slideIndex = 1;
Slides();

// Next/previous controls//
function plusSlides(n) {
  Slides(slideIndex += n);
}

// Thumbnail image controls//
function currentSlide(n) {
  Slides(slideIndex = n);
}

function Slides(n) {
  var i;
  var Slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dots");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  Slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}