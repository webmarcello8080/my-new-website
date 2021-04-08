jQuery(function ($) {

   $('.single-bar').each(function () {
      $(this).progress();
   });
});

(function ($) {
   $.fn.progress = function () {
      var percent = this.data("percent");
      this.css("width", percent + "%");
   };
}(jQuery));