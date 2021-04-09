jQuery(function ($) {
   $('.portfolio-carousel-img').on('click', function () {
      var original_url = $(this).data('original-url');
      window.open(original_url, "_blank");
   }
   );
});