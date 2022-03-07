// main slide
const swiper = new Swiper(".swiper-box-1 .swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  // If we need pagination
  pagination: {
    el: ".swiper-box-1 .swiper-pagination",
    clickable: true
  }
});

// review slide
const swiper2 = new Swiper(".swiper-box-2 .swiper", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: ".swiper-box-2 .swiper-pagination",
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-box-2 .swiper-button-next",
    prevEl: ".swiper-box-2 .swiper-button-prev"
  }
});