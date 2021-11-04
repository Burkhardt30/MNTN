$(function () {

  $('.footer__title').on('click', function() {
    $(this).toggleClass('footer__title--open-list');
    $(this).next().slideToggle();
  });

  $('.burger-btn').on('click', function(){
    $(this).toggleClass('burger-btn--cross');
    $('.header__menu-list').toggleClass('header__menu-list--open');
  });

  $('.widgets__slider-wrapper a, .header__logo-link, .footer__inter-logo, .footer__outer-logo').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top, }, 300);
  });

  $(document).on("scroll", function () {
    if
      ($(document).scrollTop() > 50) {
      $(".header__top").addClass("header__top--thin");
    }
    else {
      $(".header__top").removeClass("header__top--thin");
    }
  });

  window.addEventListener('load', function () {
    if
      ($(document).scrollTop() > 50) {
      $(".header__top").addClass("header__top--thin");
    }
    else {
      $(".header__top").removeClass("header__top--thin");
    }
  })

  $('.widgets__slider').slick({
    vertical: true,
    arrows: false,
    slidesToShow: 4,
    initialSlide: 3,
    speed: 300,
  });
  
  $('.widgets__dot').on('click', function() {
    $('.widgets__dot').removeClass('dot--active')
    $(this).addClass('dot--active')
    setTimeout(() => {
      $('.widgets__dot').removeClass('dot--active')
    }, 300);
  })

  $('.dot-0').on('click', function (e) {
    e.preventDefault()
    $('.widgets__slider').slick('goTo', 3);
  });
  $('.dot-1').on('click', function (e) {
    e.preventDefault()
    $('.widgets__slider').slick('goTo', 2);
  });
  $('.dot-2').on('click', function (e) {
    e.preventDefault()
    $('.widgets__slider').slick('goTo', 1);
  });
  $('.dot-3').on('click', function (e) {
    e.preventDefault()
    $('.widgets__slider').slick('goTo', 0);
  });
  
  $(document).on("scroll", function () {
    if (window.pageYOffset >= document.querySelector('#i03').offsetTop - 200 && $('.widgets__dot').hasClass('dot--active') === false) {
      $('.widgets__slider').slick('goTo', 0);
    } else
    if (window.pageYOffset >= document.querySelector('#i02').offsetTop - 200 && $('.widgets__dot').hasClass('dot--active') === false) {
      $('.widgets__slider').slick('goTo', 1);
    } else
    if (window.pageYOffset >= document.querySelector('#i01').offsetTop - 200 && $('.widgets__dot').hasClass('dot--active') === false) {
      $('.widgets__slider').slick('goTo', 2);
    } else
    if (window.pageYOffset >= 0 && $('.widgets__dot').hasClass('dot--active') === false) {
      $('.widgets__slider').slick('goTo', 3);
    }
    setTimeout(() => {
      if (window.pageYOffset >= document.querySelector('#i03').offsetTop - 200 && $('.widgets__dot').hasClass('dot--active') === false) {
        $('.widgets__slider').slick('goTo', 0);
      } else
      if (window.pageYOffset >= document.querySelector('#i02').offsetTop - 200 && $('.widgets__dot').hasClass('dot--active') === false) {
        $('.widgets__slider').slick('goTo', 1);
      } else
      if (window.pageYOffset >= document.querySelector('#i01').offsetTop - 200 && $('.widgets__dot').hasClass('dot--active') === false) {
        $('.widgets__slider').slick('goTo', 2);
      } else
      if (window.pageYOffset >= 0 && $('.widgets__dot').hasClass('dot--active') === false) {
        $('.widgets__slider').slick('goTo', 3);
      }
    }, 300);
  })

  window.addEventListener('load', function () {
    if (window.pageYOffset >= document.querySelector('#i03').offsetTop - 200 && $('.widgets__dot').hasClass('dot--active') === false) {
      $('.widgets__slider').slick('goTo', 0);
    } else
    if (window.pageYOffset >= document.querySelector('#i02').offsetTop - 200 && $('.widgets__dot').hasClass('dot--active') === false) {
      $('.widgets__slider').slick('goTo', 1);
    } else
    if (window.pageYOffset >= document.querySelector('#i01').offsetTop - 200 && $('.widgets__dot').hasClass('dot--active') === false) {
      $('.widgets__slider').slick('goTo', 2);
    } else
    if (window.pageYOffset >= 0 && $('.widgets__dot').hasClass('dot--active') === false) {
      $('.widgets__slider').slick('goTo', 3);
    }
  })



  
});
