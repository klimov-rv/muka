var slider0 = new Swiper('#productionSlider', {
  slidesPerView: 1,  
  loop: true,  
  pagination: {
    el: '#productionSlider .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '#productionSlider .swiper-button-next',
    prevEl: '#productionSlider .swiper-button-prev',
  }, 
});


var tabSlider0 = new Swiper('#tab-0', {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: '#tab-0 .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '#tab-0 .swiper-button-next',
    prevEl: '#tab-0 .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
    },
    420: {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: false,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: false,
    }
  }
});

var tabSlider1 = new Swiper('#tab-1', {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: '#tab-1 .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '#tab-1 .swiper-button-next',
    prevEl: '#tab-1 .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
    },
    420: {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: false,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: false,
    }
  }
});