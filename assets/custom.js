/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/


(function() {
  // Add custom code below this line
  
  // Wait for the document to be ready
  document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the header element
    var header = document.querySelector('.header__desktop__lower');
    
    // Get references to the elements whose heights we want to calculate
    var announcementWrapper = document.querySelector('.announcement__wrapper--top');
    var desktopUpper = document.querySelector('.header__desktop__upper');
  
    // Function to calculate the combined height of the elements
    function calculateCombinedHeight() {
      // Check if announcementWrapper exists, if not, use 0 as its height
      var announcementHeight = announcementWrapper ? announcementWrapper.clientHeight : 0;
      return announcementHeight + desktopUpper.clientHeight;
    }
  
    // Calculate the combined height initially
    var combinedHeight = calculateCombinedHeight();
  
    // Add a scroll event listener to the window
    window.addEventListener('scroll', function () {
      // Check if the user has scrolled the combined height or more
      if (window.scrollY >= combinedHeight) {
        // If yes, add the 'new-sticky-header' class
        header.classList.add('new-sticky-header');
      } else {
        // If not, remove the 'new-sticky-header' class
        header.classList.remove('new-sticky-header');
      }
    });
  });

  // ^^ Keep your scripts inside this IIFE function call to 
  // avoid leaking your variables into the global scope.
})();

var sliders = document.querySelectorAll('.custom-product-slider .glide');

for (var i = 0; i < sliders.length; i++) {
  var glide = new Glide(sliders[i], {
    type: 'slider',
    perView: 4,
    bound: true,
    rewind: false
  });
  
  glide.mount();
}

function toggleNewsletterButton() {
  var checkbox = document.getElementById("subscribe-checkbox");
  var button = document.querySelector(".newsletter-new .newsletter__submit");

  if (checkbox.checked) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "true");
  }
}