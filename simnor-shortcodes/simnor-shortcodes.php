<?php
/*
Plugin Name: Simnor Shortcodes
Plugin URI: http://simonmakes.com/plugins/simnor-shortcodes/
Description: A user friendly shortcodes plugin.
Version: 1.0
Author: Simon North
Author URI: http://simonmakes.com

/* Variables */
$sn_simnor_shortcodes_path = dirname(__FILE__);
$sn_simnor_shortcodes_main_file = dirname(__FILE__).'/simnor-shortcodes.php';
$sn_simnor_shortcodes_directory = plugin_dir_url($sn_simnor_shortcodes_main_file);
$sn_simnor_shortcodes_name = "Simnor Shortcodes";

/* Includes */
include($sn_simnor_shortcodes_path.'/includes/shortcodes.php');

/* Add shortcodes.css file */
wp_enqueue_style('simnor_shortcodes', $sn_simnor_shortcodes_directory.'/includes/shortcodes.css');
wp_register_script('simnor_shortcodes_js', $sn_simnor_shortcodes_directory.'/includes/shortcodes.js', 'jquery');
wp_enqueue_script('jquery');
wp_enqueue_script('simnor_shortcodes_js');

/* Add button to TinyMCE */
function simnor_shortcodes_addbuttons() {

   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
     return;
 
   if ( get_user_option('rich_editing') == 'true') {
     add_filter("mce_external_plugins", "add_simnor_shortcodes_tinymce_plugin");
     add_filter('mce_buttons', 'register_simnor_shortcodes_button');
   }
}
 
function register_simnor_shortcodes_button($buttons) {
   array_push($buttons, "|", "simnor_shortcodes_button");
   return $buttons;
}
 
function add_simnor_shortcodes_tinymce_plugin($plugin_array) {
	global $sn_simnor_shortcodes_directory;
	$plugin_array['simnor_shortcodes'] = $sn_simnor_shortcodes_directory.'includes/tinymce_button.js';
	return $plugin_array;
}
 
add_action('init', 'simnor_shortcodes_addbuttons');