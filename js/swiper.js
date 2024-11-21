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
  navigation: {
    nextEl: '.stats-button-next',
    prevEl: '.stats-button-prev',
  },
  on: {
    init: function () {
      this.setTranslate(50)
    },
  },
});
