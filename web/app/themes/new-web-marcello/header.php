   <?php $header = new \NewWebMarcello\Header(); ?>
   <header>
      <div class="container">
         <div class="row">
            <div class="col-2 burger-menu text-center">
               <div id="menu-toggle">
                  <div id="hamburger">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div id="cross">
                     <span></span>
                     <span></span>
                  </div>
               </div>
            </div>

            <div class="col-8 logo-wrapper text-center">
               <?php $header->get_logo() ?>
            </div>
         </div>
      </div>
   </header>