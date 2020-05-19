

(function ($) {
  'use strict';

  /*--------------------------------------
	Owl Carousel Active coad here
----------------------------------------*/
  $('.review-active').owlCarousel({
    loop: true,
    autoPlay: true,
    autoPlayTimeout: 9000,
    autoPlayHoverPause: true,
    dots:false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1000: {
        items: 3.5,
      },
    },
  });

  //  animate plugin active
  new WOW().init();


})(jQuery);

// draw line active coad

var $line = $('svg').drawsvg();
      $line.drawsvg('animate');

