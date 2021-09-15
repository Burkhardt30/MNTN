$(function () {

  $('.header__slider').slick({
    vertical: true,
    arrows: false,
    slidesToShow: 4,
  });
  $('.dot-0').on('click', function(e){
    e.preventDefault()
    $('.header__slider').slick('goTo',3);
  });
  $('.dot-1').on('click', function(e){
    e.preventDefault()
    $('.header__slider').slick('goTo',2);
  });
  $('.dot-2').on('click', function(e){
    e.preventDefault()
    $('.header__slider').slick('goTo',1);
  });
  $('.dot-3').on('click', function(e){
    e.preventDefault()
    $('.header__slider').slick('goTo',0);
  });

});