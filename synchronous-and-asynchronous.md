# Synchronous and asynchronous in Javascript

One source of bugs when writing my first Javascript was failing to understand when I was using an **asynchronous** (async for short) instead of a **synchronous** (sync) function, and what the difference implies. Here I provide a conceptual overview of the distinction and a few tips on usage. On the way, we'll grapple with some other jargon: "call stack", "callback", "event queue" and "event loop".

## Sync

Confusingly, "synchronous" in Javascript means exactly the opposite of its non-technical meaning of "at the same time". In Javascript, synchronous means that each line of code will be executed only after the previous line has finished. For example, in the code below, `newVal` is printed only after the `sync` function has reached the end of its loop and returned the new value. That could take a bit of time, since it's a very long loop!

```javascript
function sync(val){
	while (val < 999999999999999999)
		val++;
	}
	return val;
}
var input = 0;
var newVal = sync(input);
console.log(newVal);
```

We can visualise synchronous code as a queue, where only the first person is served. The series of commands in our program form a queue, and only the command at the front of the queue is executed. Synchronous code is said to be "blocking" because the currently executing command blocks the execution of everything behind it in the queue. 

You may have heard the term "call stack". If we think of each function as its own little queue of commands, the call stack is the queue of such queues or "execution contexts". At the bottom or end of the call stack is always the main (or "global") execution context, and at the top or front is the function most recently called.

## Async

If all your code were executed synchronously, web browsing would be a painful experience. Imagine you have a function that requests information from a server, waits for it to be received, and then does something with that information (like renders it on a webpage). If the entire function executed synchronously, the browser would freeze ("block") for the whole time the information was downloading.

One solution to the problem of blocking would be to execute different pieces of code simultaneously on different "threads" of the processor. But the Javascript engine was designed to work only on a single thread, so it has a different solution. It makes use of asynchronous "callback" functions, together with events and something called an "event queue".

Consider again the example of requesting data from a server. Instead of holding up the call stack until the information is received, we make the request and Javascript tells other processes (not the Javascript engine itself, but maybe other threads within the web-browser) to take care of carrying it out. Then it is free to carry on processing the call stack. When the download is complete, an event is triggered and sent back to Javascript, telling it that it can perform an action on the data (render it to the webpage). This action we will have specified in advance using a "callback" (which means simply a function passed to another function) as in the example below:

```javascript
	function request_data(callback_function){
		//request data
		//on response event, execute callback_function(data)
	}
	function callback_function(data){
		//render data
	}
```

You might sometimes see the whole function `request_data` referred to as asynchronous. That's a bit misleading because in fact that function is executed synchronously within the call stack. It is the `callback_function` that is asynchronous. This will be executed only after the response event.

## Event queue and event loop

Wait! What if Javascript is still processing commands on the call stack when the response event is received? What if we are inundated with several such responses? Well, Javascript has another queue for this, the "event queue". When a callback is triggered, it will not be executed straight away, but will be added to the event queue and executed only when:

1. All synchronous code in the call stack has finished
2. All code previously placed on the event queue has finished

So the Javascript engine has two kinds of queue – the main sequence of synchronous code (the "call stack"), and a secondary "event queue". Whenever the main queue / call stack is empty, the function at the front of the secondary queue / event queue will be shunted onto the call stack and executed. The process which checks if the call stack is empty and does the shunting is called the "event loop". 

Note that the behaviour of the event queue itself is not "asynchronous". Even though functions on the event queue will wait until the call stack is empty, the queued async functions are transferred to the call stack one by one and executed synchronously when they arrive. If a function like the long while loop in `sync` were added to the event queue, it would still end up crashing the user interface whenever it came to be executed.

## Hazards and benefits

It is important to be aware when callbacks will be executed asynchronously and when not. This is usually predetermined within the Javascript function invoking the callback, but is sometimes settable by a property (for example, jQuery's `ajax()` request function has a property `async` that can be set to true or false). Sometimes, you may want to wrap a function that normally calls a callback asynchronously in your own blocking function, to ensure that the program waits for the function to complete before moving on (for example, if you wish to not issue too many data requests at once). If requesting data with an asynchronous callback, you must make sure that you manipulate that data entirely within the callback, or you will end up attempting to perform actions on data that has not yet been received.

Another area where it pays to be aware of asynchronous behaviour is Javascript's timer functions. Consider `setTimeout()`, which takes a callback and a delay as arguments, and executes the callback asynchronously after the delay. Because the callback passed to `setTimeout()` is taken out of the main program flow, the timer is not perfectly accurate. The callback will be added to the event queue after the delay has elapsed, but if the call stack or event queue are not empty, its execution will be further delayed until they are. This quirk does, however, have a useful side effect: we can call `setTimeout()` with 0 delay to ensure that the stack has cleared before we execute a function. Using this technique, we could regularly interrupt the massive loop in our earlier `sync` function and keep the user interface responsive while we execute it. 

Here's an interesting exercise, maybe: write a function which takes a callback and chops any loops above a certain length in the callback into chunks wrapped in `setTimeout()`. What other dangers, besides long loops, could we check for and address within the function?

## Further reading
* [John Resig on Javascript timers.](http://ejohn.org/blog/how-javascript-timers-work/)
* [Asynchronous and synchronous stackoverflow thread.](http://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean)
* [Philip Roberts' great talk on the event loop.](http://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)