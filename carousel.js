$(document).ready(function () {
    $("#acer").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      items: 2,
      animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  smartSpeed: 1000,
        responsive: {
          0: {
            items: 0,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
    });
  });