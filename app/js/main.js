window.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper(".hero__preview", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
      delay: 5000,
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
  var swiper = new Swiper(".slider-section__preview", {
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

  const rangeSliderForPrice = () => {
    const rangeSlider = document.querySelectorAll('.range-slider');
    const rangeSlider2 = document.querySelectorAll('.range-slider2');

    rangeSlider.forEach(item => {
      if (item) {
        noUiSlider.create(item, {
          start: [10, 268],
          connect: true,
          step: 1,
          tooltips: [true, true],
          range: {
            'min': [10],
            'max': [500]
          }
        });
        const input0 = document.getElementById('input-0');
        const input1 = document.getElementById('input-1');

        const inputs = [input0, input1];

        item.noUiSlider.on('update', function (values, handle) {
          inputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider = (i, value) => {
          let arr = [null, null];
          arr[i] = value;

          item.noUiSlider.set(arr);
        };

        inputs.forEach((el, index) => {
          el.addEventListener('change', e => {
            setRangeSlider(index, e.currentTarget.value);
          });
          el.addEventListener('input', e => {
            setRangeSlider(index, e.currentTarget.value);
          });
        });
      };
    });

    // rangeSlider2.forEach(item => {
    //   if (item) {
    //     noUiSlider.create(item, {
    //       start: [100000, 2680000],
    //       connect: true,
    //       step: 1,
    //       tooltips: [true, true],
    //       range: {
    //         'min': [100000],
    //         'max': [5000000]
    //       }
    //     });
    //     const input3 = document.getElementById('input-3');
    //     const input4 = document.getElementById('input-4');

    //     const inputs2 = [input3, input4];

    //     item.noUiSlider.on('update', function (values, handle) {
    //       inputs2[handle].value = Math.round(values[handle]);
    //     });

    //     const setRangeSlider = (i, value) => {
    //       let arr = [null, null];
    //       arr[i] = value;

    //       item.noUiSlider.set(arr);
    //     };

    //     inputs2.forEach((el, index) => {
    //       el.addEventListener('change', e => {
    //         setRangeSlider(index, e.currentTarget.value);
    //       });
    //       el.addEventListener('input', e => {
    //         setRangeSlider(index, e.currentTarget.value);
    //       });
    //     });
    //   };
    // });

  };
  rangeSliderForPrice();

  const toggleFullSidebox = (accordion, accordionContent) => {
    const filters = document.querySelectorAll(accordion);

    filters.forEach(el => {
      el.addEventListener('click', e => {
        const target = e.currentTarget;
        const content = target.querySelector(accordionContent);

        target.classList.toggle('active');

        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };
  toggleFullSidebox('.filter-box', '.filter-box__drop');
  toggleFullSidebox('.process-box', '.process-box__list');
  toggleFullSidebox('.menu-box', '.menu-box__drop');

  const togglePopup = (popup, popupBtn) => {
    const popupParentEl = document.querySelector(popup);
    const popupBtnEl = document.querySelector(popupBtn);

    if (popupParentEl) {
      popupBtnEl.addEventListener('click', e => {
        popupParentEl.classList.toggle('active')
      })
    }
  }
  togglePopup('.catalog__search', '.filter-actions__btn--search');


  (function verticalSlider() {
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
  }());

  // 
  // (function toggleSelect() {
  //   $('#select').wSelect();
  // })()


  const showMenu = () => {
    const menuBtn = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.header__bottom');
    const body = document.querySelector('body');
    // const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.header__bottom-close');

    menuBtn.addEventListener('click', e => {
      menu.classList.toggle('active');
      // menuBtn.classList.toggle('active');
      // overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    // overlay.addEventListener('click', e => {
    // menu.classList.remove('active');
    // menuBtn.classList.remove('active');
    // overlay.classList.remove('active');
    // body.classList.remove('no-scroll');
    // });
    closeBtn.addEventListener('click', e => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      // overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  };
  showMenu();
});

// $('#select').append('<option value="four">four</option>').wSelect('reset');

const sliderGrid = new Swiper(".photos-cases__slider", {
  slidesPerGroup: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'fraction',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 2,
    }
  }
});