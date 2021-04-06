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