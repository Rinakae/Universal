$(document).ready(function() {
  $('.comments__button').click(function(){
    $('.item-comment:nth-child(n+4):nth-child(-n+6)').css({'display' : 'block'});
  });

  $('.news-block__bookmark').click(function(){
    $(this).toggleClass('news-block__bookmark-mb');
  });

  $('.hero__bookmark').click(function(){
    $(this).toggleClass('hero__bookmark-mb');
  });

 $(document).ready(function () {
    $('a.to-top__link').click(function () {
      var elementClick = $(this).attr('href');
      var destination = $(elementClick).offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination }, 800);
      return false;
    });
  });



});