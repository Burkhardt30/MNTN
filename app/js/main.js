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
    $('body,html').animate({ scrollTop: top, }, 1500);
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

  $('.widgets__slider').slick({
    vertical: true,
    arrows: false,
    slidesToShow: 4,
    initialSlide: 3,
    speed: 1500,
    waitForAnimate: false,
  });
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

  // $(document).on('scroll', function () {
  //   setTimeout(function () {
  //     var postionStart = $('#body').offset().top,
  //       heightStart = $('#body').height();
  //     var scroll = $(document).scrollTop();
  //     if (scroll > postionStart && scroll < (postionStart + heightStart)) {
  //       $('.header__slider').slick('goTo', 3);
  //     }
  //   }, 1501);
  // });
  // $(document).on('scroll', function () {
  //   setTimeout(function () {
  //     var postion01 = $('#01').offset().top,
  //       height01 = $('#01').height();
  //     var scroll = $(document).scrollTop();
  //     if (scroll > postion01 && scroll < (postion01 + height01)) {
  //       $('.header__slider').slick('goTo', 2);
  //     }
  //   }, 1501);
  // });
  // $(document).on('scroll', function () {
  //   setTimeout(function () {
  //     var postion02 = $('#02').offset().top,
  //       height02 = $('#02').height();
  //     var scroll = $(document).scrollTop();
  //     if (scroll > postion02 && scroll < (postion02 + height02)) {
  //       $('.header__slider').slick('goTo', 1);
  //     }
  //   }, 1501);
  // });
  // $(document).on('scroll', function () {
  //   setTimeout(function () {
  //     var postion03 = $('#03').offset().top,
  //       height03 = $('#03').height();
  //     var scroll = $(document).scrollTop();
  //     if (scroll > postion03 && scroll < (postion03 + height03)) {
  //       $('.header__slider').slick('goTo', 0);
  //     }
  //   }, 1501);
  // });

});