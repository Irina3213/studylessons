$(function () {
  $(".fairy-tail__slider, .our-trip__slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

Fancybox.bind('[data-fancybox="gallery"]', {});

$("menu, .our-trip__body").on("click", "a", function (even) {
  event.preventDefault();

  var id = $(this).attr("href"),
    top = $(id).offset().top;

  $("body, html").animate({ scrollTop: top }, 1500);
});
