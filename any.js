const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 6,
      spaceBetween: 35,
      centeredSlides: true,
    },

    1301: {
      slidesPerView: 6,
      spaceBetween: 40,
      centeredSlides: true,
    },
  },
});
