import macy from 'macy';
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
