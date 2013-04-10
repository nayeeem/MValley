jQuery(document).ready(function($) {
        $('#tabs').tabs();
        $('a').each(function(){
			
			var href = $(this).attr('href');
			
			//check for links starting with http or https, making sure that links are to our own domain
			//this is required for public site which is not local host
			//if ((href.match(/^https?\:/i)) || (href.match(document.domain))){
			
				$(this).click(function() {
					
					var extLink = href.replace(/^https?\:\/\//i, '');
					
					//check weather it is a post link or not 
					//post links has a sub string ?p=
					//put the ancor text as category, this is actually the title of the post
					if (extLink.toLowerCase().indexOf("?p=") >= 0){
						_gaq.push(['_trackEvent', $(this).text(), 'Click', extLink]);
					        
					}

				});
			//}
        });
  	//ajax request the getPost php page
        var request = $.ajax({
               	url: "../naimul/wp-content/plugins/tab-mindvalley/getpost.php",
                type: "GET",           
                dataType: "html"
        });
 
        request.done(function(msg) {
		//msg has the list of all posts
	        $("#tabs-1").html(msg);
        });
 
        request.fail(function(jqXHR, textStatus) {
		//error message if request is failed
                alert( "Request failed: " + textStatus );
        });
});//end of ready method

	//setting the client id
        var clientId = '946430426079-9849kq3qntjqeu7eca7d2r8gsoi67sbd.apps.googleusercontent.com';
        //setting the url of the site
	var str ='www.kartapp.com/naimul/';
        // Enter the API key from the Google Develoepr Console - to handle any unauthenticated
        // requests in the code.
        // The provided key works for this sample only when run from
        // https://kartapp.com/naimul

        var apiKey = 'AIzaSyD1ONDX81rv0HYzIt352h-RoV7pbQxfG7A';
  
        // scope for analttics api
        var scopes = 'https://www.googleapis.com/auth/analytics';



        function handleClientLoad() {
             gapi.client.setApiKey(apiKey);
	     //simple access using api key
	     //no need to call window.setTimeout(checkAuth,1);
	`    //rather directly call the following line.
             //gapi.client.load('analytics', 'v3', makeApiCall); 	
             window.setTimeout(checkAuth,1);
         }

        function checkAuth() {
             gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
        }


        function handleAuthResult(authResult) {
             if (authResult) {
                  // The user has authorized access
                  // Load the Analytics Client.
	          gapi.client.load('analytics', 'v3', makeApiCall);
             } else {
                  // User has not Authenticated and Authorized
         	  alert("User don't have access."); 	
             }
         }

         // Use the Analytics Service Object to query the Core Reporting API
         function makeApiCall() {
	     var currentDate = new Date();
       	     var currentMonth = currentDate.getMonth()+1;
	     var currentDay = currentDate.getDate();
	     var currentYear = currentDate.getFullYear();
    	     var modCurrentMonth = (currentMonth<10 ? '0' : '') + currentMonth;
    	     var modCurrentDay = (currentDay<10 ? '0' : '') + currentDay;
	     //this is current date	
	     var curFullDate = currentYear + "-" + modCurrentMonth + "-" + modCurrentDay;

	     var difCurDate = new Date(currentYear , modCurrentMonth, modCurrentDay);

             var curDate = new Date(difCurDate);
	     curDate.setDate(curDate.getDate() - 7);
             var newDate = new Date(curDate);

	     var newDay = newDate.getDate();
	     var newMonth = newDate.getMonth();
	     var newYear = newDate.getFullYear();
    	     var modNewMonth = (newMonth<10 ? '0' : '') + newMonth;
    	     var modNewDay = (newDay<10 ? '0' : '') + newDay;
	     //this is a date seven days before the current date, means for last 7 days query
  	     var newFullDate = newYear + "-" + modNewMonth + "-" + modNewDay;

 	     var curDate = new Date(difCurDate);
	     curDate.setDate(curDate.getDate() - 30);
             var newDate = new Date(curDate);

	     var newDay = newDate.getDate();
	     var newMonth = newDate.getMonth();
	     var newYear = newDate.getFullYear();
    	     var modNewMonth = (newMonth<10 ? '0' : '') + newMonth;
    	     var modNewDay = (newDay<10 ? '0' : '') + newDay;
             //this date is 30 days before, means for last 30 days query 
	     var newFullDateThirty = newYear + "-" + modNewMonth + "-" + modNewDay;

	     //query for the last seven days top posts means those
             //posts that have highest clicks
             var apiQuery = gapi.client.analytics.data.ga.get({
                  'ids': 'ga:70949199',//this is the profile id from where fetching data
                  'start-date': newFullDate,
                  'end-date': curFullDate,
                  'metrics': 'ga:totalEvents',
                  'dimensions': 'ga:eventCategory,ga:eventAction,ga:eventLabel',
                  'sort': '-ga:totalEvents',
                  'max-results': 10
             });
             //executing the query
             apiQuery.execute(handleCoreReportingResults);
             //query for the last thirty days top posts means those
             //posts that have highest clicks  
             var apiQueryNext = gapi.client.analytics.data.ga.get({
                  'ids': 'ga:70949199', //this is the profile id from where fetching data
                  'start-date': newFullDateThirty,
                  'end-date': curFullDate,
                  'metrics': 'ga:totalEvents',
                  'dimensions': 'ga:eventCategory,ga:eventAction,ga:eventLabel',
                  'sort': '-ga:totalEvents',
                  'max-results': 10
             });
             //executing the query
  	     apiQueryNext.execute(handleCoreReportingResultsThirtyDays);


	}
        function handleCoreReportingResultsThirtyDays(results) {
             if (!results.error) {
             // success. call to show results
                  printRowsThirtyDays(results);
             } else {
                  alert('There was an error: ' + results.message);
             }
         }

         function handleCoreReportingResults(results) {
             if (!results.error) {
             // success. call to show results
                  printRows(results);
             } else {
                  alert('There was an error: ' + results.message);
             }
         }

         function printRows(results) {
             var title;
             var link;
             var ancor;
             if (results.rows && results.rows.length) {
                   var table = '<table>';
                   // put headers in table.
                   table += '<tr>';
                   for (var i = 0, header; header = results.columnHeaders[i]; ++i) {
	                 if(i==0 )	
	                       table += '<th>Post Titles</th>';
	                 if(i==3)
	                 table += '<th>Hits per Post</th>';	
                    }
                    table += '</tr>';

                    // put cells in table.
                    for (var i = 0, row; row = results.rows[i]; ++i) {
	                  table += '<tr>';
                          $.each(row, function(j, val) {
	                        if(j==0){
	                              title = val;
                                }
                                if(j==2){
                                      link = val;
                                      link = link.replace(str,"");
	                              ancor = '<a href="' + link + '">' + title + '</a>';
                                      table += '<td>' + ancor + '</td>'
                                }
    	                        if(j==3)
                                      table += '<td>' + val + '</td>';
                          });
  	                  table += '</tr>';
                    }
                    table += '</table>';
             } else {
                    output.push('<p>No Results Found</p>');
       }
       $("#tabs-2").html(table);	
      }

      function printRowsThirtyDays(results) {
             var title;
             var link;
             var ancor;
             if (results.rows && results.rows.length) {
                   var table = '<table>';
                   // put headers in table.
                   table += '<tr>';
                   for (var i = 0, header; header = results.columnHeaders[i]; ++i) {
	                 if(i==0 )	
	                       table += '<th>Post Titles</th>';
	                 if(i==3)
	                 table += '<th>Hits per Post</th>';	
                    }
                    table += '</tr>';

                    // put cells in table.
                    for (var i = 0, row; row = results.rows[i]; ++i) {
	                  table += '<tr>';
                          $.each(row, function(j, val) {
	                        if(j==0){
	                              title = val;
                                }
                                if(j==2){
                                      link = val;
                                      link = link.replace(str,"");
	                              ancor = '<a href="' + link + '">' + title + '</a>';
                                      table += '<td>' + ancor + '</td>'
                                }
    	                        if(j==3)
                                      table += '<td>' + val + '</td>';
                          });
  	                  table += '</tr>';
                    }
                    table += '</table>';
             } else {
                    output.push('<p>No Results Found</p>');
       }
       $("#tabs-3").html(table);	
    }

