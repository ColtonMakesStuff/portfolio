
//Code for the little popup menu when the sceen is smaller. I was able to figure this one out with just a little bit of googling
let noMenu = document.getElementById("menuButton")
let popup = document.getElementById("menuBox")

function openPopup () {
   popup.classList.add("open-popup");
   noMenu.classList.add("noMenu");
}
 popup.addEventListener("mouseleave", function() {
    closeMenu();
 });
 function closeMenu() {
    popup.classList.remove("open-popup");
    noMenu.classList.remove("noMenu");
 }

// start of code for slides. after many many many many attempts I ended up using a youtube video by coding show to get the basic knolwlege of how radio buttons worked and the tailored it to my needs
 var counter = 1;
setInterval(function (){
document. getElementById('radio' + counter) .checked=true;
counter++;
if (counter > 4){
counter = 1;
}
}, 10000);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}