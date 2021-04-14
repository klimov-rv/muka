
var slider0 = new Swiper('#productionSlider', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 35,
  autoplay: true,
  pagination: {
    el: '#productionSlider .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '#productionSlider .swiper-button-next',
    prevEl: '#productionSlider .swiper-button-prev',
  },
});

var slider1 = new Swiper('#labSlider', {
  slidesPerView: 1,
  loop: false,
  pagination: {
    el: '#labSlider .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '#labSlider .swiper-button-next',
    prevEl: '#labSlider .swiper-button-prev',
  },
});

var tabSlider0 = new Swiper('#tab-0', {
  slidesPerView: 4,
  spaceBetween: 20,
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
      spaceBetween: 20,
      loop: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: false,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: false,
    }
  }
});

var tabSlider1 = new Swiper('#tab-1', {
  slidesPerView: 4,
  spaceBetween: 20,
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
      spaceBetween: 20,
      loop: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: false,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: false,
    }
  }
});


var $trigger = $("#historyTrigger");

$trigger.bind('inview', function (event, visible, topOrBottomOrBoth) {
  if (visible) {

    if (topOrBottomOrBoth == 'top') {
      // top part of element is visible
      $trig2.animate({ left: '+=30' }, "slow");
    } else if (topOrBottomOrBoth == 'bottom') {
      // bottom part of element is visible
    } else {
      // whole part of element is visible
      $(function () {
        var $anchors = $('.history__list_li');

        (function _loop(idx) {
          $anchors.eq(idx).addClass('anim-history');
          setTimeout(function () {
            _loop((idx + 1) % $anchors.length);
          }, 900);
        }(0));
      });
    }

  }
});

