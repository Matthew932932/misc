let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
  console.log("here1");
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

slideIndex = 0;
let timer = null;
showSlidesAuto();


function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  
  timer = setTimeout(showSlidesAuto, 3000); // Change image every 2 seconds
}

//const prevEl = document.querySelector('.prev')
//prevEl.addEventListener('click', plusSlides(-1))

const nextEl = document.querySelector("#next");
nextEl.addEventListener("click", (e) => {        // empty (e) again also fine if you don't want to see the event
  console.log(e.target.id);
  console.log("jackoff internal arrow func");
  plusSlides(1);
  clearTimeout(timer);
  timer = setTimeout(showSlidesAuto, 3000);
 });

const prevEl = document.querySelector("#prev");
prevEl.addEventListener("click", (e) => {        // empty (e) again also fine if you don't want to see the event
  console.log(e.target.id);
  console.log("jackoff internal arrow func");
  plusSlides(-1);
  clearTimeout(timer);
  timer = setTimeout(showSlidesAuto, 3000);
 });


