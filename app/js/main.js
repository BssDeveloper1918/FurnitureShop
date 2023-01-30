// use strict
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  }); 
  
  $('.productone__thumb-slide').slick({
    asNavFor: '.productone__big-slide',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1, 
    vertical: true,
    draggable: false,
    arrows: true, 
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          vertical: true,
          slidesToShow: 3,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 550,
        settings: {
          vertical: false,
          slidesToShow: 3,
          slidesToScroll: 1, 
        }
      }
    ]
  });

  $('.productone__big-slide').slick({
    asNavFor: '.productone__thumb-slide',
    draggable: false, 
    arrows: false,
  });

  $(function(){
    var mixer = mixitup('.products__inner');
  }
  )
  $(function(){
    var mixer = mixitup('.design__inner');
  }
  )
  $(function(){
    
    $(".filter-price__input").ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data) {
        $('.filter-price__from').text(data.from);
       $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
       $('.filter-price__from').text(data.from);
       $('.filter-price__to').text(data.to);
     },
    })
  })
  
  $(function () {
    $(".products-star").rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true
    });
   });

   $(function() {
    $('.select-style, .productone__num').styler();
   });

  $('.productone-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.productone-tabs__top-item').removeClass('productone-tabs__top-item--active');
    $(this).addClass('productone-tabs__top-item--active');
    $('.productone-tabs__content-item').removeClass('productone-tabs__content-item--active');
    $($(this).attr('href')).addClass('productone-tabs__content-item--active');
  });
  
  $('.productone__related-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
        }
      }
    ]
  }); 
})