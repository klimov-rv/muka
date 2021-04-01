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
  });