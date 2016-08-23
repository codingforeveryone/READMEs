Introduction to HTTP
====================

Hypertext Transfer Protocol (HTTP) is one of the main foundations of web communication. As a developer it is prudent to be familiar with it. HTTP works on the basis of a *client* sending a *request* to a *server*, which in return provides a *response*. For example, a web browser is a client program on the user's computer that may request information from any web server in the world.

Servers respond to requests according to specifications. Browsers interpret these specific responses differently. So it is imperative that front- and back-end HTTP is configured correctly.

Competing browsers behave differently with their own individual behaviours, though they will in general follow the specifications.

Overview of HTTP
----------------

HTTP provides an agreed way for communicating between the front-end and the back-end. It does this by defining the format and type of requests and responses. Requests are specified by their HTTP 'method', or 'verb', an optional series of configuration headers and an optional body. Servers communicate by issuing HTTP 'status codes' in their responses, along with headers and an optional body.

###Examples

Below is an example request, courtesy of [Tutsplus](http://code.tutsplus.com/tutorials/http-headers-for-dummies--net-8039):

```
GET /tutorials/other/top-20-mysql-best-practices/ HTTP/1.1
Host: net.tutsplus.com
User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 (.NET CLR 3.5.30729)
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Cookie: PHPSESSID=r2t5uvjq435r4q7ib3vtdjq120
Pragma: no-cache
Cache-Control: no-cache
```

The first line is the **request line**. It's made up of the HTTP verb (`GET` in this case), the path to the resource requested (`/tutorials/other/top-20-mysql-best-practices/`) and the protocol version (`HTTP/1.1`). Everything else is HTTP headers provided by the client. The host (`net.tutsplus.com`) is required by HTTP/1.1 but everything below that is optional. The other headers can be thought of as primarily configuration settings for what the client can receive in the response.

An example response to the above request is as follows:

```
HTTP/1.x 200 OK
Transfer-Encoding: chunked
Date: Sat, 28 Nov 2009 04:36:25 GMT
Server: LiteSpeed
Connection: close
X-Powered-By: W3 Total Cache/0.8
Pragma: public
Expires: Sat, 28 Nov 2009 05:36:25 GMT
Etag: "pub1259380237;gz"
Cache-Control: max-age=3600, public
Content-Type: text/html; charset=UTF-8
Last-Modified: Sat, 28 Nov 2009 03:50:37 GMT
X-Pingback: http://net.tutsplus.com/xmlrpc.php
Content-Encoding: gzip
Vary: Accept-Encoding, Cookie, User-Agent
 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Top 20+ MySQL Best Practices - Nettuts+</title>
<!-- ... rest of the html ... -->
```

The first line (known as the response line) specifies the protocol (`HTTP/1.x`) and the HTTP status code (`200 OK`). Following that are another series of HTTP headers, a blank line and then finally the response body (HTML, in this case).

###State

It is important to remember that HTTP requests are *stateless*. This means that the server will treat each request individually and has no way of knowing, for example, that the same client made a request thirty seconds ago. Of course, this is not very useful for anything but the most simplistic websites, so over time developers have found ways around this limitation (see sections on cookies and sessions below).

###Idempotence

Idempotence is a complex word for a simple concept. Simply put, an operation is idempotent if making repeated calls will return the same result. You can think of it being like a pure function that returns the same values for a particular set of arguments, no matter how many times it is called.

For our current purposes, it's enough to remember that methods such as `GET` should be idempotent while methods such as `POST` are not idempotent. A useful example from [BlackPepper](http://www.blackpepper.co.uk/idempotent-or-not-idempotent/) provides some clarification: you would expect a `GET `request to a bank account to return the current balance of the bank account, but posting a request to add £10 to the balance would modify the resource each time.

Key parts of HTTP
-----------------

###Headers

Headers are a series of colon-separated key-value pairs defining the parameters of the transaction. There are quite a few defined parameters, the most important of which are set out below. It is also possible to define custom headers if you find it useful in your application.
###Methods

HTTP methods are the 'verb' that specify the action to carry out. Details of some important headers are set out below, with thanks to [Tutsplus](http://code.tutsplus.com/tutorials/http-headers-for-dummies--net-8039).

####Request headers

#####Host

`Host: net.tutsplus.com`

Required in HTTP/1.1. Requests are sent to a particular IP address, but the server at that address might host multiple websites, so the domain name needs to be specified.

#####User-Agent

`User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5 (.NET CLR 3.5.30729)`

As you can see, this provides quite a lot of detail about the user agent (i.e. the client).

#####Accept-Language

`Accept-Language: en-us,en;q=0.5`

This states the user's language setting. The first value (`en-us` here) is the default value and each subsequent value (comma-separated) has a `q` preference rating (0 is low, 1 is high).

#####Accept-Encoding

`Accept-Encoding: gzip,deflate`

This indicates to the server that the client can decompress any responses, allowing the server to save bandwidth. An easy optimisation you can do is to ensure that any servers you write compress responses where possible.

#####If-Modified-Since

`If-Modified-Since: Sat, 28 Nov 2009 06:38:19 GMT`

Here, the client browser has a cached version of the resource from Nov 2009 and is asking the server whether the requested resource has changed since then. If it hasn't, the server will send a `304 Not Modified` (see status codes below) response and the browser can use its cached version. This is faster than resending the entire resource.

#####Cookie

`Cookie: PHPSESSID=r2t5uvjq435r4q7ib3vtdjq120; foo=bar`

These are the domain's cookies in name=value pairs separated by semicolons. The server can set a cookie on one request and then retrieve it on a later request, so they are a way for the server to save small amounts of state between requests. Note that cookies stored on the client are not secure and so storing e.g. passwords is not advised. Cookies can be used to implement *sessions* by passing in a unique ID with each request (`PHPSESSID` in this example). The server uses this ID to look up any data it has stored about the client from previous requests. Note the security risk of [session hijacking](https://www.owasp.org/index.php/Session_hijacking_attack).

#####Authorization

`Authorization: Basic bXl1c2VyOm15cGFzcw==`

This provides a very unsecure way of authenticating a user. Login details are passed to the server in the header but they are only encoded, rather than encrypted, so they can be easily intercepted and accessed.

####Response headers

#####Cache-Control

`Cache-Control: max-age=3600, public`

`Cache-Control: no-cache`

This specifies what caching should be implemented by the servers along the route (remember that web requests will be routed through numerous servers). In the first example servers are requested to cache the resource for 3600 seconds. In the second they are prevented from caching anything. Enabling caching is another easy optimisation to improve your website's performance.

#####Content-Type

`Content-Type: text/html; charset=UTF-8`

This specifies the 'mime-type' of the document e.g. text, image, pdf, etc. This is a rich source of security holes.

#####Content-Length

`Content-Length: 89123`

If you're sending a file to the client, specifying the length enables the browser to know how much it's received and how much remains. If you've ever downloaded files and seen an indeterminate progress bar like this:

![Broken progress bar](https://css-tricks.com/wp-content/uploads/2013/08/indeterminate-progress-bar.png)

Then it's because the `Content-Length` header isn't specified.

#####E-Tag

`Etag: "pub1259380237;gz"`

The server may provide a tag value with each resource it serves. If the browser requests the same resource later, it can provide the tag in the `If-None-Match` header and ask the server whether the tag matches the resource's current tag. If they're the same the browser can use its cached version, if not the server sends the new version. This is another way of caching.

#####Last-Modified

`Last-Modified: Sat, 28 Nov 2009 03:50:37 GMT`

As mentioned above in `If-Modified-Since`, this is a way of caching resources based on whether it's changed since the date specified.

#####Location

`Location: http://net.tutsplus.com/`

This is used with `301` and `302` responses (see below) to tell the browser where to redirect its request to.

#####Set-Cookie

`Set-Cookie: skin=noskin; path=/; domain=.amazon.com; expires=Sun, 29-Nov-2009 21:42:28 GMT`

This sets a cookie that the browser will send in the `Cookie` header for requests to the specified domain.

#####Content-Encoding

`Content-Encoding: gzip`

This tells the client what way the response body is encoded (compressed, in this example).

###HTTP Methods

####GET

This is, funnily enough, used to 'get' or retrieve resources such as HTML, JavaScript, CSS, images and so on. As a general rule, `GET` requests should not modify the resource in any way (i.e. they are 'idempotent', see above for further details).

####POST

This method may be familiar from writing forms. `POST` is used to send data to the server. The resource at the path specified in the request will deal with the data. The data is sent in the body of the request with the encoding method specified in an additional header called `Content-Type` so that the server knows how to decode the information. A `Content-Length` header is also required so that the server knows when it has received all of the information (a large amount of data might be split across multiple requests).

The response code `201: Created` indicates that the resource has been created but browsers might not 'take the hint' and redirect to the resource, so you may prefer to explicitly return a redirect code.

####PUT

`PUT` places some provided data at the exact path specified in the request. If something already exists at that path the server will replace whatever is there.

Note the distinction between `PUT` and `POST`: with `POST` the path specified in the request will handle the data and the server can put the data where it likes. A `PUT` request is basically a request to update the resource at the specified path with the data provided.

The server should respond with a `200` or `204` response if the resource was updated successfully.

####HEAD

This is the same as `GET`, except the response only includes the status code and headers. Any resource requested is not actually provided in response. This may be useful in certain circumstances as it allows you to check the validity of the path without actually having to send the resource.

####DELETE

An obvious one - the client has requested the server to delete the resource at the path specified. This is useful in RESTful APIs, but obviously you will want to check that the user is authorised to delete the resource.

A `200` or `204` response indicates that the resource was successfully deleted.

####TRACE

The server will return the request message in the response. Used for debugging.

####OPTIONS

The client is requesting information about available ways of communicating with the server about the specified resource.

You are most likely to encounter such requests as 'preflight' requests. This happens when the client will send an `OPTIONS` request to a server to determine whether it is safe to send the actual request. For example, cross-site requests require preflighting in this way.

####CONNECT

For use with proxies, not relevant to us.

####PATCH

`PATCH` should be used to upate partial resources e.g. updating a single field in a resource (where using `POST` would replace the entire resource with the single field provided). Most relevant for use as part of a RESTful API.

###Status codes

You will have noticed that the example response above included a status code. They are usually accompanied by a human-readable phrase e.g. `200 OK`. There are many status codes, so don't expect to have to know them all, but it is useful to know how they are split into different groups and the main ones from each group.

####1xx

These are known as 'informational' codes, indicating that the request was received and a provisional response has been supplied.

#####100 Continue

The server has received and approved the request headers and giving permission to the client to send the request body. This is useful when the client wants to post a large amount of data. The client first sends the headers. The server validates the headers and if it is content to receive the data sends the `100 Continue` response.

####2xx

These are success codes, indicating that the request was received and correctly processed :blush:.

#####200 OK

All is well. If a resource was requested it will be provided.

#####201 Created

The request has been fulfilled and a new resource has been created. Its location is specified in a `Location` header or the request URL itself.

#####204 No Content

The request has been fulfilled and the server has no response body to send (headers will be sent). This could be used in a web app to indicate that an action was completed without navigating away from the current page.

####3xx

These indicate some kind of 'redirection'.

#####301 Moved Permanently

The requested resource has been moved to a new URL. The client's browser should use the enclosed URLs when requesting this resource in future. Note that if this is given in response to a `POST` request, for 'historical reasons' browsers will generally switch to a `GET` method when following the redirect.

#####302 Found

A temporary redirection. Future requests may continue using the original URL, not the temporary one returned in the request. As with `302`, browsers are liable to change the original request method on redirect.

#####303 See Other

This is primarily intended for responding to `POST` requests. Remember that a server may respond to a `POST` request by storing the resource wherever it wants. It provides a `303 See Other` response to let the client know the resource's URL so that the user may bookmark it etc. 

#####304 Not Modified

This is used along with caching headers to indicate that the resource has not been modified and the client's cached version should be used.

#####307 Temporary Redirect

This status code is similar to `302` but corrects the error that browsers may switch HTTP methods. A client browser may not switch method to follow a `307` redirect.

#####308 Permanent Redirect

As with `307`, this is similar to `301` but browsers may not switch methods.

####4xx

These codes indicate some kind of error with the request.

#####400 Bad Request

The request was malformed in some way and the server could not understand it.

#####401 Unauthorized

The request needs to be authenticated. The response will include a `WWW-Authenticate` header specifying how to authenticate.

#####403 Forbidden

The server understood what you requested but refuses to authorise it. It may give the reason in the response payload but it is not required to.

#####404 Not Found

The famous one! The client has requested a resource that the server doesn't know how to find.

#####418 I'm a Teapot

Any attempt to brew coffee with a teapot should result in the error code `418 I'm a teapot`. The resulting entity body MAY be short and stout.

#####429 Too Many Requests

The server is rate-limiting the client's requests and too many have been sent. The server may optionally provide a `Retry-After` headers saying how long to wait.

####5xx

This group of responses indicates an error with the server.

#####500 Internal Server Error

The server has encountered a problem and can't fulfil the request. Normally this happens if the route handler has a bug in it.

#####503 Service Unavailable

The server can't deal with your request due to temporary overload or scheduled maintenance. It might respond with a `Retry-After` header to let the client know how long to wait.

Related
=======

Now that you have a better understanding of how HTTP works, you can apply it to [setting up a local server](http://codingforeveryone.foundersandcoders.org/programmer-skills/setting-up-a-local-server.html).

References
==========

https://httpstatuses.com/

http://code.tutsplus.com/tutorials/http-headers-for-dummies--net-8039

[The actual specification](https://www.w3.org/Protocols/rfc2616/rfc2616.txt), if you're feeling brave!

TODO
====
How browsers deal with requests etc at a lower level, any important quirks.

CORS and security more broadly

Low level TCP/IP details

Secure authentication

Cookies

Sessions

REST

Sockets

HTTP/2?
