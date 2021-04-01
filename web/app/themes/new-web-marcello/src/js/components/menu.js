jQuery(function ($) {

   $('#menu-toggle').click(function () {

      if ($(this).hasClass('open')) {
         $('#full-screen').animate({ left: "-100%" }, 1000);
         $('body').css("overflow", "auto");
      } else {
         $('#full-screen').animate({ left: "0px" }, 1000);
         $('body').css("overflow", "hidden");
      }

      $(this).toggleClass('open');
   });

   $('.sub-menu').click(function (event) {
      event.stopPropagation();
   })

   $('.menu-item-has-children').click(function (event) {
      event.preventDefault();
      $(this).find('.sub-menu').slideToggle();
   })

});