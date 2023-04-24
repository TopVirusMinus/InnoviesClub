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
    speed: 1200,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
r  });

  // Update the slidesToShow option when the window is resized
  $(window).on('resize', function () {
    var newSlidesToShow = getSlidesToShow();
    $('.slick-slider').slick('slickSetOption', 'slidesToShow', newSlidesToShow, true);
  });
});
