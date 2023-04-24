  function getSlidesToShow() {
    // Adjust the screen width breakpoint if needed
    if (window.innerWidth <= 768) {
      return 3; // Number of slides to show on mobile screens
    } else {
      return 5; // Number of slides to show on larger screens
    }
  }

 jQuery(function () {
    $('.slick-slider').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      speed: 800,
      slidesToShow: getSlidesToShow(),
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      pauseOnDotsHover: false,
    });

    // Reinitialize the slider when the window is resized
    $(window).on('resize', function () {      
      $('.slick-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 800,
        slidesToShow: getSlidesToShow(),
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        variableWidth: true,
      });
    });
});

