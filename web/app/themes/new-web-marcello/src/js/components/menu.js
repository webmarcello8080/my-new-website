jQuery( function($) {

   $('#menu-toggle').click(function(){
      
      if($(this).hasClass('open')){
         $('#full-screen').animate({left:"-100%"},1000);
      }else{
         $('#full-screen').animate({left:"0px"},1000);
      }

      $(this).toggleClass('open');
   });

   $('.menu-item-has-children').click(function(event){
      event.preventDefault();
      $(this).find('.sub-menu').slideToggle(1000);
   })
   
});