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

 
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  
  document.addEventListener("keydown", function(event) {
   if (event.key == "Escape") {
     closeModal(event);
   }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");    
    
  }

  // обработка форм
  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      ignore: [],
      rules: {
        select: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        comment: {
          required: true,
          minlength: 100,
        },
        box: {
          onecheck: true,
        },
      },
      messages: {
        select: {
          required: 'Выберите тему письма',
        },
        email: {
          required: 'Пожалуйста, введите Ваш Email',
          email: 'Формат почты должен быть name@domain.com',
        },
        message: {
          required: 'Пожалуйста, напишите сообщение',
        },
        comment: {
          required: 'Оставьте свой комментарий',
          minlength: 'Количество символов не менее 100',
        },
        box: {
          required: 'Необходимо ваше согласие',
        },
      },
    });
  });


  $('.phone').each(function(){
$(this).mask('+7 (999) 999-99-99');
});

var tabsItem = $(".recom__block");
var contentItem = $(".main-article__text");
tabsItem.on('click', function (event) {
  var activeContent = $(this).attr("data-target");
  tabsItem.removeClass("recom__block--active");
  contentItem.removeClass("main-article__text--active");
  $(activeContent).addClass("main-article__text--active");
  $(this).addClass("recom__block--active");
});

var menuButton = document.querySelector(".header__button-menu");
  menuButton.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.toggle("mobile-menu__visible");
  });

});