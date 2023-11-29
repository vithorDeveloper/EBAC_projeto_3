$(document).ready(function() {

  $('#produtos #gridProdutos').find(".carrossel").slick({

    centerMode: true,
    centerPadding: '15px',
    slidesToShow: 1,
    arrows: true,
    nextArrow: "<p type='button' class='slick-prev'></p>",
    prevArrow: "<p type='button' class='slick-next'></p>",

    responsive: [
      {
        breakpoint: 1023,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]

  })

})