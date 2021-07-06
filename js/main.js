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
  $('.form').each(function() {
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Пожалуйста, введите свое имя",
        minlength: "Имя должно быть не короче двух букв",
      },
      email: {
        required: "Введите адрес эл. почты",
        email: "Ваш emeil должен содержать name@domain.com",
      },
      phone: {
        required: "Пожалуйста, оставьте свой номер телефона",
        minlength: "Номер должен состоять из 10 цифр",
      },

      comment: {
        required: "Пожалуйста, оставьте комментарий",
        minlength: "Минимальное количество символово - 100",
      },
    }
  })
  })

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


});