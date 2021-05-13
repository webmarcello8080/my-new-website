<?php
/*
 * Template Name: News Search Engine Template
 * Description: A Page Template able to display the news Search Enigine form on the front-end.
 */

get_header(); ?>

   <div class="wrap">
      <div id="primary" class="content-area">
         <main id="main" class="site-main" role="main">

            <?php while ( have_posts() ) : the_post(); ?>
               <header class="entry-header">
                  <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
               </header><!-- .entry-header -->
               <div class="entry-content">
                  <?php the_content(); ?>
               </div><!-- .entry-content -->
               <div class="news-search-engine-content">
                  <?php require_once(PLUGIN_NSE_PATH . 'views/admin-form.php'); ?>
               </div>
            <?php endwhile; // end of the loop. ?>

         </main><!-- #main -->
      </div><!-- #primary -->
   </div>

<?php get_footer(); ?>