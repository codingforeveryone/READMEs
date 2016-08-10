# The Not So Good Parts of JavaScript

JavaScript is quite an amazing programming language, despite what some in the development community have to say about it.  It runs in web browsers, which is great as it's executed on the client side, as opposed to the server, making it faster for the end user.  It makes web pages feel 'alive' with its interactivity.  However there are also problems, the fact it runs on the web browser makes it a security issue, as this can be used to exploit the user's system.  This article is not a definitive guide of all the limitations of JavaScript, it does cover some of the more common points as a developer you should be aware of.

#### Multithreading

Firstly JavaScript does not support multithreading.  Multithreading is a way to manage multiple events, known as threads simultaneously, so that different stages of a program run at the same time without interfering with each other.  Most modern programming languages like Java and C# support multithreading, so intensive code maybe executed.  JavaScript runs in a single execution thread, this is a design feature which you cannot change.  However multithreading may be simulated, so code which would freeze up the browser can be run.  Using asynchronous timers which can run repetitive code at staggered times so the browser will have interpreter time to process separate iterations.  HTML5 Web workers are multithreaded and allow a single javascript thread to run, thus giving the appearance that it is multithreaded.

#### Separate Domain Access

Web pages hosted on different domains cannot be accessed using JavaScript.  This is based on the "Same origin policy", which prevents a document or script loaded from one origin, from getting or setting properties of a document from another origin. This policy dates all the way back to Netscape Navigator 2.0.  It helps to ensure that potentially malicious documents/scripts can be isolated.

A workaround is in place with HTML5 using postMessage interface, or using server side scripts using AJAX calls.  There are a few methods to do this the common ones are `document.domain` method which is an iframe method that sets the value of document.domain to a suffix of the current domain.
````
For example, assume a script in the document at `http://shop.company.com/dir/other.html`
which executes the following statement:

document.domain = "company.com";

After execution, the page would pass the origin check with http://company.com/dir/page.html.
However, by the same reasoning, company.com could not set document.domain to othercompany.com.

````
Using this you can execute javascript from an iframe.  Please note that this is not suitable for Firefox which will not allow a change to `document.domain`

Another notable method is `window.postMessage` which safely enables cross-origin communication.  Cross-window messaging security model is two-sided. The sender ensures that the receiving domain is targetDomain. The receiver checks that the message came from proper event.origin.

````
postMessage(data, targetDomain), where:

data - The message. According to the specification, it could be any object. But as of now, only strings are supported in major browsers.

targetDomain - Limit receiving iframe by given domain. Can contain ‘*’ which doesn’t put any restrictions.
````


#### Database Access

Accessing databases, in particular backend databases, is a problem without the help of a server side script like Ajax which performs the database access.  

For example if a user was to select an item in a dropdown list, which is implemented by JavaScript and these items are in a database.  A function could be used to show the dropdown details.  This function would do the following.
1. Check if item is selected.
2. Create an XMLHttpRequest object.
3. Create the function to be executed when the server response is ready.
4. Send the request off to a file on the server.

Then in turn the page on the server called by the JavaScript above is an ASP file called "getdetails.asp".  This file would run a query against a database, and returns the result in an HTML table


#### Writing files to the server

JavaScript cannot write to files on the server without the help of a server side script. Using Ajax, JavaScript can send a request to the server, which can read a file in XML or plain text format but it cannot write to a file unless the file called on the server actually runs as a script to do the file write for you.

````
$.ajax({
  type: 'POST',
  url: url,//url of receiver file on server
  data: data, //your data
  success: success, //callback when ajax request finishes
  dataType: dataType //text/json...
});

````

#### Other

JavaScript cannot close a window if it didn't open it, for obvious security reasons.  Also protection of page source or images, is not done by JavaScript.  Finally the option to disable JavaScript, many users disable it for security reasons.  If your site is highly scripted and the user has disabled JavaScript then it can be disadvantageous to both parties.

There are more limitations which are not mentioned here.  As a Developer it is good to be aware of pitfalls and work around them.

### Refernces

[About Tech](http://javascript.about.com/od/reference/a/cannot.htm)

[Sitepoint](https://www.sitepoint.com/multi-threading-javascript/)

[Microsoft Developer Network](https://msdn.microsoft.com/en-us/hh549259.aspx)

[Tutorials Point](http://www.tutorialspoint.com/javascript/javascript_overview.htm)

[Stack Overflow Same Origin Policy](http://stackoverflow.com/questions/3076414/ways-to-circumvent-the-same-origin-policy)

[window-postmessage](https://davidwalsh.name/window-postmessage)

[w3 schools AJAX](http://www.w3schools.com/ajax/ajax_database.asp)
