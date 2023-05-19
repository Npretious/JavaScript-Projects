//main.js

//countdown timer function
function countdown() {

    //gets the input from user
    var seconds = document.getElementById("seconds").value;

    //function to perform the countdown
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;

        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            alert("Time's up!");
        }
    }

    tick();
}

//image slideshow functions
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
        slideIndex = 1}
    if(n < 1) {
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}

