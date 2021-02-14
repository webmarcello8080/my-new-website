<?php

// import classes
foreach (glob( get_template_directory() . "/classes/*.php") as $filename)
{
  include_once $filename;
}

new \NewWebMarcello\CustomTheme();
new \NewWebMarcello\Header();
