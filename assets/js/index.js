
$('[data-fancybox]').fancybox({
  youtube: {
    controls: 0,
    showinfo: 0
  },
  vimeo: {
    color: 'f00'
  }
}); 

var greetingSlider = new Swiper('#greetingSlider', {
  slidesPerView: 1,
  loop: false,
  pagination: {
    el: '#greetingSlider .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '#greetingSlider .swiper-button-next',
    prevEl: '#greetingSlider .swiper-button-prev',
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

var facticonsSlider = new Swiper('#facticonsSlider', {
  slidesPerView: 1,
  loop: false,
  pagination: {
    el: '#facticonsSlider .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '#facticonsSlider .swiper-button-next',
    prevEl: '#facticonsSlider .swiper-button-prev',
  },
}); 

var $trig1 = $("#elToTrigger1");
var $trig2 = $("#elToTrigger2");

$trig1.bind('inview', function (event, visible) {
  if (visible) {
    $trig1.typed({
      strings: ["Из производимой на предприятии муки \n можно испечь по 1 батону в сутки на каждого \n жителя Нижегородской области."],
      typeSpeed: 1, 
    });
  }
});

$trig2.bind('inview', function (event, visible, topOrBottomOrBoth) {

  if (visible) {
    if (topOrBottomOrBoth == 'top') {
      // top part of element is visible
      $trig2.animate({ left: '+=30' }, "slow");
    } else if (topOrBottomOrBoth == 'bottom') {
      // bottom part of element is visible
    } else {
      // whole part of element is visible

      $trig2.animate({ left: '+=470' }, "slow");
      setTimeout((function() {
        $('.fact-icons .icons__item:nth-child(1)').animate({ opacity: 1 } ,{duration:300});
      }), 700); 
      setTimeout((function() {
        $('.fact-icons .icons__item:nth-child(2)').animate({ opacity: 1 } ,{duration:300});
      }), 1300); 
      setTimeout((function() {
        $('.fact-icons .icons__item:nth-child(3)').animate({ opacity: 1 } ,{duration:300});
      }), 1900);  
      $trig2.animate({ left: '+=310' }, "slow"); 
      $trig2.animate({ left: '+=510' }, "slow"); 
      $trig2.animate({ left: '+=100%' }, 730);
    }
  }
});
