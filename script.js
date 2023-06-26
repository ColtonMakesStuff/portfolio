
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

 var counter = 1;
setInterval(function (){
document. getElementById('radio' + counter) .checked=true;
counter++;
if (counter > 4){
counter = 1;
}
}, 10000);

// //  let bankLeft = document.getElementsByClassName("photo-section");
//  let slideRight = bankLeft["currentSlide"].nextElementSibling;
//  let currentSlide = 
 


// function changeSlidesRight() {
//     slideRight.classList.add("rightSlide");
//     slideLeft.classList.add("leftSlide");
//     slideCenter.cllassList.add("centerSlide")
//  }
//   function closeMenu() {
//      popup.classList.remove("open-popup");
//      noMenu.classList.remove("noMenu");
//   }


// function changeSlidesLeft() {
//     slideRight.classList.add("rightSlide");
//     slideLeft.classList.add("leftSlide");
//     slideCenter.cllassList.add("centerSlide")
//  }
// let photoBank = document.getElementsByClassName("photo-section");
// var i = 0;
// var photobanks = []

// // image list

// function changeimg(){
//     if(i < photoBank.length -1){
//         i.classList.add("open-popup");
//     } else {
//         i = 0;
//         }    
//     }

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