# CS50 Video Notes

## [HTTP](https://youtu.be/KWxwYbaAWxs?t=55m8s) (55:08-1:04:40)

#### HTTP
- HTTP = Hypertext Transfer Protocol
-	This is the language / protocol that web browers and web servers speak (a "protocol" just refers to a set of conventions)
-	GET is a word stored inside the envelope – a request might look like:
```
GET / HTTP/1.1
Host: www.google.com
...
```
-	The first line tells us to get the default page, and that the language is HTTP version 1.1
-	The second is a specification to the recipient of the website being requested
-	The response might look something like:
```
HTTP/1.1 200 OK
Content-Type: text/html
...
```
-	The first line confirms that the website speaks that HTTP version also -> 200 is a status code which means "OK"
-	The second line specifies what content the user will be receiving

#### Other Status Codes
-	200	= OK
-	301	= Moved Permanently (most browsers automatically redirect)
-	302	= Found (page at a new location temporarily)
-	401	= Unauthorized (typically requires login)
-	403	= Forbidden (the resource is found, but you are not allowed access)
-	404	= Not Found
-	500	= Internal Server Error


-	301 and 302 mean redirect -> whenever you're redirected from an address you type in, this is because the browser has received an envelope containing 301 or 302 and a URL
-	500 generally means there's a bug in the code and the server can't handle it

#### Query Strings
-	Web servers typically take input through the URL – any time you do anything interactive with a webpage (searching, logging in etc.) you're effectively submitting a form that sends info from you to the server -> the server then parses this URL by character
-	Question marks in URLs are followed by key value pairs (separated by ampersands)
```
GET /search?q=cats HTTP/1.1
Host: www.google.com
...
```

#### POST
- If the info being entered always ended up in the URL this would cause problems, particularly with sensitive info like passwords -> instead this is can be sent using POST, which is also used to submit non-text info like images
```
POST /login.php HTTP/1.1
Host: www.facebook.com
...
email=malan@harvard.edu&password=12345
```
-	The first line sends you to a file called "login.php" which allows users to login
-	The additional input, rather than going immediately after the filename, is located lower in the request (deeper in the envelope) where no one can see it and it isn't remembered
-	Additionally, if the website is using HTTPS, this will all be encrypted so that no one can actually see the request at all


## [AJAX](https://www.youtube.com/watch?v=FtefVGIgAfA) (0:00-10:49)

- AJAX = Asynchronous JavaScript and XML (XML is another markup language)
- This allows us to update a page's content dynamically by **requesting more information from the server** without having to reload the page

#### JavaScript Object: XMLHttpRequest
- To do this we first need to create a special JS object called an XMLHttpRequest:
```
var xhttp = new XMLHttpRequest();
```
- We then need to define this object's *onreadystatechange* behaviour - when a request is made to a webpage, it goes through a number of 'states':
  - Request not yet sent
  - Request sent, but not acted upon
  - Request acted upon
  - Request sent back to you
  - Request fully loaded in your page
- This behaviour will typically be assigned to an anonymous function that is called when the asynchronous HTTP request has **completed**
- We check for completion using the XMLHttpRequest's *readyState* property, which changes from 0 (request not yet initialised) to 1, 2, 3, and finally 4 (request finished, response ready), and also the *status* property
- If the readyState property is 4, and the status property is 200 (OK) we will be able to asynchronously update the page with new data from the server, without having to reload its entire content

#### Opening and Sending
- This request then needs to be opened up and sent
- Posting involves making an HTTP request programmatically (instead of through the web browser), which will retrieve data from the requested URL

#### Complete Example
```
function ajax_request(name)
{
	var aj = new XMLHttpRequest();

    aj.onreadystatechange = function() {
		if (aj.readystate == 4 && aj.status == 200) {
            $('#infodiv').html(aj.responseText);
		}
	};

	aj.open('GET', name + '.html', true);
	aj.send();
}
```
