window.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // var swiper = new Swiper(".slider-section", {
  //   slidesPerView: 1,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "fraction",
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });
  // 
  var swiper = new Swiper(".slider-section", {
    wrapperClass: 'slider-section__wrapper',
    slideClass: 'slider-section__slide',
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".production-slider", {
    slideClass: 'production-slider__slide',
    wrapperClass: 'production-slider__wrapper',
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const sliderGroup = () => {
    const sliderRec = document.querySelector('.articles__slider');
    const nextBtn = document.querySelector('.arrow-next');
    const prevBtn = document.querySelector('.arrow-prev');

    if (sliderRec) {
      const swiper = new Swiper(sliderRec, {
        // slidePagination: '';
        slidesPerView: 3,
        slidesPerGroup: 3,
        gap: 30,

        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        breakpoints: {
          320: {
            spaceBetween: 15,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
          },
          850: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
          },
        },
      });
    }
  };
  sliderGroup();

  const modals = () => {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelector(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');

      if (modalEl) {
        openBtnEl.addEventListener('click', e => {
          if (e.target) {
            e.preventDefault()
          }

          modalEl.classList.add('active');
          body.classList.add('no-scroll');
        });

        closeEl.forEach(el => {
          el.addEventListener('click', e => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          })
        });

        modalEl.addEventListener('click', e => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        })
      };
    };

    bindModal('.top-section__link', '.popup--product', '.popup__close');
    bindModal('.contacts__title', '.popup--form', '.popup__close');
  };
  modals();
});