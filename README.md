MValley
=======
Read the file fully , then proceed to the
live site url is www.kartapp.com/naimul.

In the git hub repository the tab-mindvalley.rar is uploaded.

Following is the steps how to configure and install the “MindValley Plugin” :
1.  Create a web directory named “naimul” in the www root directory of the web server.
2.	Install wordpress in the “naimul” web directory.
3.	Extract the tab-mindvalley.rar file.
4.	Using Filezilla upload the tab-mindvalley folder to the /www/naimul/wp-content/plugins/tab-mindvalley of the webserver.
5.	Then inside /www/naimul/wp-content/themes/twentytwelve directory, there is a file called “header.php”.
6.	Download the file header.php using filezilla.
7.	Open the header.php using note pad.
8.	Add the following lines before the </head> line in the header.php file:
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
<script type="text/javascript" src="<?php echo plugins_url(); ?>/tab-mindvalley/js/tabs.js"></script>
<script src="https://apis.google.com/js/client.js"></script>	
9.	The above lines will add jquery functionality and for jquery tabs plugin and client.js is for google analytics core reporting client library. 
10.	 Then go to the link, http://kartapp.com/naimul/wp-login.php.
11.	 User Name: Admin and password: naim123.
12.	After login go to the Daskboard.
13.	Then in the Dashboard side bar, click on the Plugin link.
14.	Then Activate the Mindvalley Plugin.
15.	 Then create a page in the word press site and give title and in the text section of the page paste the following code:
[mv-shortcode]
16.	Then create a google account for using google analytics going to https://accounts.google.com.
17.	I am using the naimul.prodhan@gmail account.
18.	 Then go to the analytics page.
19.	I have created a property Id UA-39768188-1 and a profile named “ReportProfile” and the profile Id is 70949199.
20.	 In the Github repository, I have given a plugin named “google-analytics-for-wordpress.4.3.2.zip”.
21.	Extract this file and activate the plugin in wordpress, same as we did for Mindvalley Plugin.
22.	When you go to activate this plugin, it will ask you to select the profile from which the reporting data will be fetched.
23.	After logging with the credential that I give you, go to Dashboard and click Settings and then click Google Analytics.
24.	In the google analytics settings, you will find that I have given the required settings.
25.	Then going to the Google API Console, create a project. I have created a project and have got the following credentials:
Project name : API Project
Project Id : mindvalley007
Client Id: 946430426079-9849kq3qntjqeu7eca7d2r8gsoi67sbd.apps.googleusercontent.com
Client Secret: wfzM1ScySH76l8PQHUzNOJi5
API key: AIzaSyD1ONDX81rv0HYzIt352h-RoV7pbQxfG7A 
26.	Now go to www.kartapp.com/naimul
27.	Then go to Top Post tab and see that the plugin is working. [It will ask for google account user and password, user: naimul.prodhan@gmail.com, pass: apiitucti1234] This user and password will be valid for next5 days.]
Note: You can go to the page without user and pass but the hosting that I am using is down for a long time from Friday. That’s why I failed to update and test code to work without popup. I am giving you my email credentials. It is for showing you the assignment. Please, be ethical not seeing my email account. I will change password after five days. 




