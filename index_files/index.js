
$('[data-fancybox]').fancybox({
  youtube : {
      controls : 0,
      showinfo : 0
  },
  vimeo : {
      color : 'f00'
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

var slider0 = new Swiper('#tab-0', {
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

var slider1 = new Swiper('#tab-1', {
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


document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    slider0.update();
    slider1.update(); 
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".animate2_1").each(function() {  
      var objectBottom = $(this).offset().top + $(this).outerHeight();  
      if (objectBottom < windowBottom) {    
        $(this).animate({ left: '+=210' }, 130 ); 
      } else {   
      }
    });
  }).scroll();  
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {    
  if(isScrolledIntoView($('#banner-typed')))
  { 
    $("#banner-typed").typed({
      strings: ["Из производимой на предприятии муки можно испечь по 1 батону в сутки на каждого жителя Нижегородской области."],
      typeSpeed: 1, 
    });
  }    
});
 