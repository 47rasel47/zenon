
$(document).ready(function() {
  // Magnific Popup Active
    $('.image-link-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
    });
    // Counter Active
    $('.counter-up').counterUp();
    // slick slider
    $('.testimonial').slick({
      arrows: false,
      dots:true,
      autoplay: true,
      autoplaySpeed: 2000,
    });

      });