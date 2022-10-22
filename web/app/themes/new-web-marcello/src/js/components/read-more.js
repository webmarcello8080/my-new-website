jQuery(function ($) {
   // resize the slide-read-more Div
   var box = $(".slide-read-more");
   var minimumHeight = 200; // max height in pixels
   var initialHeight = box.innerHeight();
   // reduce the text if it's longer than 200px
   if (initialHeight > minimumHeight) {
      box.css('height', minimumHeight);
      $(".read-more-button").show();
   }

   AddReadMore();
   SliderReadMore();

   function SliderReadMore() {
      $(".slide-read-more-button").on('click', function () {
         // get current height
         var currentHeight = box.innerHeight();

         // get height with auto applied
         var autoHeight = box.css('height', 'auto').innerHeight();

         // reset height and revert to original if current and auto are equal
         var newHeight = (currentHeight | 0) === (autoHeight | 0) ? minimumHeight : autoHeight;

         box.css('height', currentHeight).animate({
            height: (newHeight)
         })
         $('html, body').animate({
            scrollTop: box.offset().top
         });
         $(".slide-read-more-button").toggle();
      });
   }

   function AddReadMore() {
      //This limit you can set after how much characters you want to show Read More.
      var carLmt = 280;
      // Text to show when text is collapsed
      var readMoreTxt = " ...read more";
      // Text to show when text is expanded
      var readLessTxt = " read less";


      //Traverse all selectors with this class and manupulate HTML part to show Read More
      $(".add-read-more").each(function () {
         if ($(this).find(".first-section").length)
            return;

         var allstr = $(this).text();
         if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
            $(this).html(strtoadd);
         }
      });

      //Read More and Read Less Click Event binding
      $(document).on("click", ".read-more,.read-less", function () {
         $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
      });
   }
});