// ARTICLES

function flipCard(card) {
    card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
  }
  
  function flipCard(card) {
    const cardInner = card.querySelector('.card-inner');
    if (card.classList.contains('flipped')) {
      // Card is already flipped, remove the flipped class
      card.classList.remove('flipped');
    } else {
      // Card is not flipped, add the flipped class
      card.classList.add('flipped');
    }
  }
  
  // GALLERY
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
    let dots = document.getElementsByClassName("dot");
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
  }

// window.addEventListener('scroll', function() {
//     var scrollTop = window.scrollY;
//     var vineBorder = document.querySelector('.vine-border');
//     vineBorder.style.backgroundPositionY = -scrollTop + 'px';
// });
  
  
  
