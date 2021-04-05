<?php get_header(); ?>

<?php get_template_part( 'template-parts/header/category-header' ); ?>

<?php get_template_part( 'template-parts/content/archive', get_post_type() ); ?>

<?php get_footer(); ?>