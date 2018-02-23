$(document).ready( function(){

  $('#home_').click( function(){
    $('html, body').animate({scrollTop: $('.home').offset().top -20}, 1000)
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
  });
  $('#galeria').click( function(){
    $('html, body').animate({scrollTop: $('.galeria').offset().top -50}, 1000)
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
  });
  $('#novidades_').click( function(){
    $('html, body').animate({scrollTop: $('.novidades').offset().top -50}, 1000)
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
  });
  $('#menupreco').click( function(){
    $('html, body').animate({scrollTop: $('.menu').offset().top -50}, 1000)
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
  });
  $('#sobre').click( function(){
    $('html, body').animate({scrollTop: $('.sobre').offset().top -50}, 1000)
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
  });
  $('#contato').click( function(){
    $('html, body').animate({scrollTop: $('.contato').offset().top -50}, 1000)
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
  });

  /* Mascara para telefone */
  // $('#telefone').mask("(00)0000-00009")

  $('#telefone').mask("(00)0000-00009")


  // // $('#id_data').mask('00/00/0000')
  // // $('#id_cep').mask('00.000-000')
  // // $('#id_cpf').mask('000.000.000-00', {reverse: true})
  //


});

// preloader
$(window).load(function(){
  $('.preloader').fadeOut(1000); // set duration in brackets

});

/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
    {
      mobile: false
    });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#gallery').parallax("100%", 0.3);
    $('#menu').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });

  // NIVO LIGHTBOX
  $('#gallery a').nivoLightbox({
    effect: 'fadeScale',
  });

});
