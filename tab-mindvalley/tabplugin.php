<?php  
/* 
    Plugin Name: MindValley Plugin 
    Description: Tabbed Google analytics into WordPress 
    Author: Naim 
    Version: 1.0 
*/  



function mv_init() {  
    add_shortcode('mv-shortcode', 'mv_function');  
} 

add_action('init', 'mv_init');

function mv_function($type='mv_function') {  



    $result='<div id="tabs">';
    $result.='<ul>';
    $result.='<li><a href="#tabs-1" onclick="jobOne(this)">All Posts</a></li>';
        $result.='<li><a href="#tabs-2" onclick="handleClientLoad()">Last 7 days</a></li>';
        $result.='<li><a href="#tabs-3" onclick="handleClientLoad()">Last 30 days</a></li>';
        $result.='</ul>';
        $result.='<div id="tabs-1">';

        $result.='<p>Tab 1 content.</p>';
        $result.='</div>';
        $result.='<div id="tabs-2">';
        $result.='<p>Tab 2 content</p>';
        $result.='</div>';
        $result.='<div id="tabs-3">';
        $result.='<p>Tab 3 content</p>';
        $result.='</div>';
	$result.='</div>';
    return $result;
}  
