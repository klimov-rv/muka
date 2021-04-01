var slider0 = new Swiper('#prod-slider', {
    slidesPerView: 1, 
    loop: true,  
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
      },
      420: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false,
      }, 
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
      }
    }
  });