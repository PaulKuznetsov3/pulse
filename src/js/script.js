$(document).ready(function(){
    $('.corousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="image/slids/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="image/slids/right.png"></button></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                    }
            }
                
        ]
      });
  });
      