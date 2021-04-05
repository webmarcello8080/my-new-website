<?php
// get background images
$smallest_square_background = file_get_contents( get_template_directory() . "/dist/images/smallest-square-background.svg");
$mid_square_background = file_get_contents( get_template_directory() . "/dist/images/mid-square-background.svg");
?>
<footer id="footer" class="bg-primary">
   <div class="container-lg footer-wrapper text-white">
      <div class="row">
         <div class="col-md-5 footer-left-section">
            <div class="footer-area-one-wrapper d-flex h-100 justify-content-center align-items-center mr-5 px-5">
               <?php dynamic_sidebar( 'footer_area_one' ); ?>
            </div>
         </div>
         <div class="col-md-7 my-3 footer-right-section">
            <div class="col-12 pb-5 pt-3 mb-5 footer-area-two-wrapper">
               <?php dynamic_sidebar( 'footer_area_two' ); ?>
            </div>
            <div class="row">
               <div class="col-md-4 mb-3">
                  <?php dynamic_sidebar( 'footer_area_three' ); ?>
               </div>
               <div class="col-md-4 mb-3">
                  <?php dynamic_sidebar( 'footer_area_four' ); ?>
               </div>
               <div class="col-md-4 mb-3">
                  <?php dynamic_sidebar( 'footer_area_five' ); ?>
               </div>
            </div>
         </div>
      </div>
   </div>
  <div class="mid-square-background img-fluid"><?= $mid_square_background ?></div>
  <div class="smallest-square-background"><?= $smallest_square_background ?></div>
</footer>