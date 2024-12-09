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

// slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

//const prevEl = document.querySelector('.prev')
//prevEl.addEventListener('click', plusSlides(-1))

function what(num) {
  console.log(num);
  plusSlides(1);
}

function hey() {
  console.log("hey");
}

const hey2 = () => {
  console.log("hey2");
};

const nextEl = document.querySelector("#next");
//nextEl.addEventListener('click', plusSlides(1));
//nextEl.addEventListener('click', what);
//nextEl.addEventListener('click', what(1));
//nextEl.addEventListener('click', hey());
//nextEl.addEventListener('click', hey);
//nextEl.addEventListener("click", hey2);

// **************!!!!!!!!!!Great lesson above. addEv wants a reference to a function. accidentally became clearer by calling the function with () 
//executes it and stops the litener. Really fairly poorly explained on both MDN and w3s. i'd argue not at all on w3s. it's covered as callback 
//essentially but laying it as such here makes it far easier to understand.

// nextEl.addEventListener("click", function (e) {
//   console.log("hey3");
// });

nextEl.addEventListener("click", (e) => {
  console.log("hey4");
  e.target.style.background = "blue";
  console.log(e.target.id);
});

// nextEl.addEventListener("click", function (e) {
//      plusSlides(1);

//    });
