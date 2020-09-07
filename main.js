$(document).ready(function () {

  /*-----------  Owl Carousel  ---------*/
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });


  /*----------  Animate on scroll  -------*/
  AOS.init();


  /*---------  Scroll Up  -----------*/
  $(".move-up span").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });


  /*----------------------------  Add smooth scrolling to all links  -------------------------*/
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  
});
