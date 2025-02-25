<?php

// import classes
$classesDir = array (
  get_template_directory() .'/classes/admin/',
  get_template_directory() .'/classes/frontend/',
);
foreach($classesDir as $directory){
  foreach (glob( $directory . "*.php") as $filename){
    include_once $filename;
  }
}

// import the functions
include_once(get_template_directory() .'/classes/functions.php');

new \NewWebMarcello\admin\ThemeSupport();
$args = [
    "metatag" => true,
    "link" => true,
    "remove_emoji" => true,
    "remove_wp_generator" => true,
    "remove_global_style" => true,
];
new \NewWebMarcello\frontend\Head($args);
new \NewWebMarcello\frontend\Menu();
new \NewWebMarcello\admin\Footer();
if ( is_admin() ){
  new \NewWebMarcello\admin\Menu();
}
new \NewWebMarcello\admin\Portfolio();
new \NewWebMarcello\admin\Login();
