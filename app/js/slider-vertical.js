const slider = document.querySelector('.slider-main');
const sliderNav = document.querySelector('.slider-nav');

let mySwiperNav = new Swiper('.slider-thumbs__nav', {
  slidesPerView: 4,
  spaceBetween: 10,
  direction: 'horizontal',
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  loopedSlides: 4,
  freeMode: true,

  breakpoints: {
    320: {
      direction: 'horizontal',
    },
    991: {
      direction: 'vertical',
    }
  }
});
let mySwiper = new Swiper('.slider-thumbs__main', {
  spaceBetween: 10,
  loopedSlides: 4,
  thumbs: {
    swiper: mySwiperNav
  }
});