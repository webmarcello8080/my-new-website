import macy from 'macy';
jQuery(function ($) {
   if ($('#masonry-wrapper').length > 0) {
      var bundler = macy({
         container: '#masonry-wrapper',
         trueOrder: false,
         waitForImages: false,
         margin: 24,
         columns: 3,
         breakAt: {
            768: 1
         }
      });
   }
});