/**
 * Add your websites custom javascript inside following block.
 */
document.addEventListener('DOMContentLoaded', () => {

  // mobile burger menu
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  // make slides show if exist in the page
  var slideIndex = 0;
  showSlides();
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if(slides && slides.length>0){
      
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      
      var dots = document.getElementsByClassName("slidedot");
      if(dots && dots.length>0){
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" slideactive", "");
        }
        dots[slideIndex-1].className += " slideactive";
      }
      slides[slideIndex-1].style.display = "block"; 
      setTimeout(showSlides, 2000); // Change image every 2 seconds
      
    }
  }
  
});

