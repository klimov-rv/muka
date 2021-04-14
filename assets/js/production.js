 
  var tabSlider0 = new Swiper('#tab-0', {
    slidesPerView: 3,
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
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
      }
    }
  });
  
  var tabSlider1 = new Swiper('#tab-1', {
    slidesPerView: 3,
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
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
      }
    }
  });
  var tabSlider2 = new Swiper('#tab-2', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: '#tab-2 .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '#tab-2 .swiper-button-next',
      prevEl: '#tab-2 .swiper-button-prev',
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
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
      }
    }
  });

  var tabSlider3 = new Swiper('#tab-3', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: '#tab-3 .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '#tab-3 .swiper-button-next',
      prevEl: '#tab-3 .swiper-button-prev',
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
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
      }
    }
  });

  var tab2Slider0 = new Swiper('#tab2-0', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: '#tab2-0 .swiper-pagination',
      type: 'fraction', 
    },
    navigation: {
      nextEl: '#tab2-0 .swiper-button-next',
      prevEl: '#tab2-0 .swiper-button-prev',
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
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
      }
    }
  });
  
  var tab2Slider1 = new Swiper('#tab2-1', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: '#tab2-1 .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '#tab2-1 .swiper-button-next',
      prevEl: '#tab2-1 .swiper-button-prev',
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
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
      }
    }
  });
  var tab2Slider2 = new Swiper('#tab2-2', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: '#tab2-2 .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '#tab2-2 .swiper-button-next',
      prevEl: '#tab2-2 .swiper-button-prev',
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
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
      }
    }
  });

  var tab2Slider3 = new Swiper('#tab2-3', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: '#tab2-3 .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '#tab2-3 .swiper-button-next',
      prevEl: '#tab2-3 .swiper-button-prev',
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
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
      }
    }
  });

  $(window).load(function() {
    document.getElementById("defaultOpen2").click();
  })
  

  function openMegaTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("megatabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("megatablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      tabSlider0.update();
      tabSlider1.update();
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
   