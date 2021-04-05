//	AOS
AOS.init({
  easing: 'ease-in-out-sine',
  once: true
});

//	Mmenu
var menu = new MmenuLight(
  document.querySelector('#menu'),
  'all'
);

var navigator = menu.navigation({
});

var drawer = menu.offcanvas({
});

document.querySelector('a[href="#menu"]')
  .addEventListener('click', evnt => {
    evnt.preventDefault();
    drawer.open();
  });

//	шапка

function scroll() {
  if ($(this).scrollTop() > 130) {
    $(".header-wrapper").addClass("scrolled")
  } else {
    $(".header-wrapper").removeClass("scrolled")
  }
}
 
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", scroll);
  window.addEventListener("scroll", scroll);
});

$(".js-hamburger").click(function () {
  $(this).toggleClass("is-active");
  $("#main-menu__list").toggleClass("is-active");
});