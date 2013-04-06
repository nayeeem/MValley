<?php  
require_once('../../../wp-blog-header.php');
require_once('../../../wp-load.php');

//$post is the whole post object
//$wpdb is the global instance of wpdb class
global $wpdb;
global $post;


//query all the posts and keep the results in the $result variable
$str = "SELECT $wpdb->posts.* FROM $wpdb->posts WHERE post_type = 'post' AND post_status = 'publish'";
$result = $wpdb->get_results($str);

//process the result
echo "<table><tr><th>LIST OF ALL POSTS</th></tr>";
foreach($result as $post):
	setup_postdata($post);

echo "<tr><td>";
echo "<a href='";
echo the_permalink();
echo "'>";
echo the_title();
echo "</a></td></tr>";

endforeach;
echo "</table>";


?>
