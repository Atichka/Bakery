import "./index.css";
import Swiper from 'swiper';

const swiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 16,
  fadeEffect: {
    crossFade: 'true'
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    // nextEl: '.swiper-button-next',
    nextEl: '.food__swiper-button-next',
    // prevEl: '.swiper-button-prev',
    prevEl: '.food__swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
