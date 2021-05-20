jQuery(function ($) {
   var first_post_p = $('.post-entry-content').find("p:first");
   var first_page_p = $('.entry-content').find("p:first");

   if (first_post_p.length > 0) {
      first_post_p.addClass('first-letter');
   }
   if (first_page_p.length > 0) {
      first_page_p.addClass('first-letter');
   }
});