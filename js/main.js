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
});