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
})