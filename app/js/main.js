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
 
})