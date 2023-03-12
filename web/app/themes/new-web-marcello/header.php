<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-3E856EGMN6"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-3E856EGMN6');
	</script>
   <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="page" class="site">
   <?php get_template_part( 'template-parts/header/site-header' ); ?>
   <main id="main">