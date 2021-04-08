jQuery(function ($) {
   $('#fixed-headers').on('scroll', function (ev) {
      $('thead th').css('transform', 'translateY(' + this.scrollTop + 'px)');
      $('tbody th').css('transform', 'translateX(' + this.scrollLeft + 'px)');
   });
});