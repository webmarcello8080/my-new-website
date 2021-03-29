<?php

// import classes
foreach (glob( get_template_directory() . "/classes/*.php") as $filename)
{
  include_once $filename;
}

new \NewWebMarcello\CustomTheme();
$args = [
    "metatag" => true,
    "link" => true,
    "remove_emoji" => true,
    "remove_wp_generator" => true,
];
new \NewWebMarcello\Head($args);
new \NewWebMarcello\Menu();
new \NewWebMarcello\Footer();
