$(document).ready(function () {
  const articleSider = new Swiper('.article-slider', {
  // Optional parameters 
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: '.article-slider__button--prev',
    nextEl: '.article-slider__button--next',
  },

  keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  
  });
  
});