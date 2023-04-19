const swiper = new Swiper('.swiper', {
   pagination: {
      el: '.swiper-custom-pagination',
      loop: true,
      clickable: true,
    },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
});