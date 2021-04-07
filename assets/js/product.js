// синхронизация превью и мейн слайдеров галереи товара
$(document).ready(function () {
  var $galleryThumbs = ".gallery-wrapper .js-gallery-thumbs";
  var $galleryMain = ".gallery-wrapper .js-product-gallery-main";
  galleryInit($galleryThumbs, $galleryMain);
});
