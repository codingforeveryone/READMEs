# XMLHttpRequest

## Introduction

Clicking a link on a webpage will cause your browser to load data from the website's server. But what if you want your webpage to load data without the user having to click anything? For example, you might want to update a data feed at a regular interval or speed up your webpage's performance by preemptively loading data before the user requests it. In order to make requests programmatically via JavaScript you use the _XMLHttpRequest_ (XHR) API.

The XHR API can be used to transfer data between a webpage and its web server. The API is somewhat poorly named, as it can transfer more than just XML data (e.g. JSON or plain text) and does not necessarily need to use the HTTP protocol. XHR initially became popular around 2004/5, when it formed a key part of the Web 2.0 technology _Ajax_. This allowed for much more dynamic and responsive websites that changed without the user having to click links.

## Usage

This README will not give a comprehensive account of the full API, but will give an introduction to its common uses. Full details can be found in the reference section.

### Create the XMLHttpRequest object

```javascript
var xhr = new XMLHttpRequest();
```

### Open the request

```javascript
xhr.open("GET", "/path/to/resource", [true, user, password]);
```

The `open` method specifies the request details. The first parameter is the request method (e.g. "GET" or "POST") and the second is the path to the requested resource.

XMLHttpRequest follows the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), which means that only requests to the same origin as the web application are allowed.

The third specifies whether the request is asynchronous. This is `true` by default so the parameter is optional. It is unlikely that you would want to make a synchronous request anyway, as this would hold up the rest of the script waiting for the request to complete.

A username and password can also optionally be provided if you are trying to access a resource that requires authentication.

### Handle the response

If you are sending an asynchronous request, you must define a handler on the `onreadystatechange` method that will be called every time the `readyState` of the XMLHttpRequest (see below) changes.

```javascript
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("content").innerHTML = xhr.responseText;
    }
};
```
The `readyState` property holds the current state of the request and will be one of the following:

0 - request not initialised

1 - server connection established

2 - request received

3 - processing request

4 - request received and response ready

More information on `readyState` is available [here](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState).

The `status` property holds the status of the HTTP response (e.g. `200 OK`, `404 Not Found`). If the `readyState` is 4 and the `status` is 200 you can be confident that the response is ready and correct.

The `responseText` property stores the server's response as a string. This means that if the server has provided structured text such as JSON the client is responsible for parsing and handling the string appropriately.

### Send the request

```javascript
xhr.send();
```

If you are making a POST request you can also provide a string to the `send` method that will be sent to the server. You should use the `setRequestHeader` method to specify the content type in the request header:

```javascript
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("name=CodingForEveryone&location=London");
```
## Fetching binary data

You might be wondering how to request non-textual data such as images. The XHR API can be used to send binary data, but it requires a slightly hacky overriding of the MIME type:

```javascript
xhr.open("GET", "/image.jpg");
xhr.overrideMimeType("text/plain; charset=x-user-defined");
```

## Event handlers

You can use the `addEventListener` method to add a handler for any of the events specified [here](https://xhr.spec.whatwg.org/#event-handlers) e.g.:

```javascript
xhr.addEventListener("error", function(event) { console.log("Error"); });
xhr.addEventListener("progress", function(event) {
    if(event.lengthComputable) {
        var percentComplete = event.loaded / event.total;
    }
});
```

Note that event handlers should be defined before calling `open` on the XHR object.

## Related

XMLHttpRequest can be used as part of Ajax to create much more dynamic websites. [This guide](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) is a useful introduction.

[This article](http://www.peej.co.uk/articles/rich-user-experience.html) covers using XHR with REST.

You might prefer to use the slightly simpler interface provided by libraries such as jQuery. You can read more about jQuery's `.ajax` method [here](http://api.jquery.com/jquery.ajax/).

## References

[A short introduction to XHR](http://www.tutorialspoint.com/ajax/what_is_xmlhttprequest.htm)

[MIME types](https://en.wikipedia.org/wiki/Media_type)

[How to use the API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)