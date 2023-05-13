// disable scrolling
document.body.style.overflow = "hidden";

window.addEventListener("load", function() {
setTimeout(function() {
    // fadeout loading page after 3.5s
    document.getElementById("loader").classList.add("fadeout");
    // delete laoding page by setting display: none after 3.5s
    document.getElementById("loader").style.display = "none";
    // activate scrolling after 3.5s
    document.body.style.overflow = "auto";
}, 3500);
});

// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}