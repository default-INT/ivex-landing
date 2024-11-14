new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});

new Swiper('.swiper-stats', {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: true,
  initialSlide: 0,
  centeredSlides: true,
  on: {
    init: function () {
      this.setTranslate(50)
    },
  },
});
