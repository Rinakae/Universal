$(document).ready(function () {
  const articleSider = new Swiper('.hot-slider', {
  // Optional parameters 
  loop: true,
  keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoplay: {
    delay: 3500,
  },

    // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },    
  
  });
  
});