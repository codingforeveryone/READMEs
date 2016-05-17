## Debugging

### Introduction

Javascript can be hard to learn and everyone makes mistakes when writing it. These mistakes in a program are called ‘bugs’ and the process of finding and dealing with them is called ‘debugging.’

A bug may be as simple to correct as a typo, or it may be the result of a subtle misunderstanding in how your code works that can take many hours of involved deduction and testing to identify. But in essence either:

* The script runs but it does not do what the programmer expected it to.
* The script cannot be executed and a runtime error occurs.
* The script interacts with other programs that are flawed, or encounters a situation not originally anticipated by the programmer.

Dealing with the latter kind of error gracefully has been addressed, in part, in this [readme](http://codingforeveryone.foundersandcoders.org/JavaScript/raising-exceptions.html). This readme is a beginner’s guide to finding bugs in your code.

### Practical Tips

#### 1. Take breaks

Debugging long scripts for more subtle errors can be demoralising. If you find yourself getting frustrated take a break and come back to the problem when you are calm and collected. You will without a doubt perform better.

#### 2. Be patient

Debugging is intimately connected with learning to program. You make a mistake, you study it, and you correct it. Take your time as this is an opportunity to improve your code and learn something new:

* Remember debugging is a process of working out what your code **actually does** as opposed to what you intended it to do. Once you work out what your code does, and why it does it, you are well on your way to debugging it.
* Do not be afraid to re-write parts or the entirety of your script. Strip it back to the minimum of what you need.
* Be methodical. Take notes of what you have and have not tested.
* Focus on analysing your code and coming up with theories of why the problem might be happening. Test your theories, do not just randomly change variables.
* Research all aspects of the language you are using and use search engines to look up any problems you are facing. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide), [Stack Overflow](http://stackoverflow.com), or these [readme’s](http://codingforeveryone.foundersandcoders.org/) are good resources to consider.
* If stuck, try writing out by hand what your script does line by line OR
* Describe the situation to another programmer OR
* Last resort: upload your code to [Jsbin](https://jsbin.com/?html,output) and link it to a query on [Stack Overflow](http://stackoverflow.com) or another programming forum.

#### 3. Style Guidelines

It is important as a prevantative measure that your code be legible and maintainable to make it easier to debug. This is what [style guidelines](http://www.w3schools.com/js/js_conventions.asp) are for.

* Indentation: Always use 4 spaces for indentation of code blocks and add spaces around operators `= + * / -` and after commas `,`.
* Naming conventions: Try to make your variable/function names descriptive and relevant to the tasks they perform. Use camelCase in naming them and be consistent.
* Modular Code: Do not write your code all at once. Break the program down into modules or steps. Write them one at a time, and test that each step works before moving onto the next. Group related statements or tasks into functions.
* Comments: Every time you finish a step or module write a brief comment that explains what it does.
```javascript
//This function takes a number of newspapers as argument and returns their cheapest overall cost value based upon the cost per bundle size.
function cheapestQuote(newspapers) {
    var total = 0, bundle = [40, 20, 10, 5, 1],
    cost = [3.85, 1.93, 0.97, 0.49, 0.10];
    for (i = 0; i < bundle.length; i++) {
        total += calcCost(newspapers, bundle[i], cost[i]);
        newspapers = newspapers % bundle[i];
    }
    return total;
}
//calcCost returns to two decimal places the cost of the current number of remaining newspapers divided by the bundle size.
function calcCost(newspapers, bundle, cost) {
    if (newspapers < bundle) return 0;
    return +((Math.floor(newspapers / bundle) * cost).toFixed(2));
}
```
Ask yourself: will I be able to read this code and grasp quickly what it does in two months from now?
```javascript
function doestufftostuff(stuff){var basket=[40,20,10,5,1],case=[3.85,1.93,0.97,0.49,0.10],t=0;
for(i=0;i<5;i++){if(stuff<basket[i])t+=0;t+=+((Math.floor(stuff/basket[i])*case[i]).toFixed(2));}
return t;}
```
### Debugging workflow

Javascript will do little to aid you in debugging your script. You have to find bugs the hard way: by running the program and seeing whether it does the right thing.

A rough workflow is as follows:

1. Look at the error message.
2. Check how far the script is running and isolate the problem area of the code.
3. Use breakpoints where things are going wrong.

And be prepared to repeat the whole process if the above solved one error just to uncover another.

**Note:** The examples in this readme use Safari but the principles are the same across browsers. See the resources section of this readme for guides on how to use the console of each browser.

#### 1. The Error object

If a Javascript statement generates an error, an Error object is created and an exception is thrown. The interpreter will 'unwind the stack' and search for error-handling code in each execution context of the script. If none is found the script is terminated.

It is outside the scope of this readme to go into all the details of Error constructors and their properties [(see here)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error). But there are seven main standardised types of errors you will encounter:
* Error: Generic error. The other errors are all based upon this error.
* SyntaxError: This is caused by incorrect use of the rules of the language. It is often the result of a simple typo.
* ReferenceError: This is caused by a variable that is not declared or is out of scope.
* TypeError: This is caused by an unexpected data type that cannot be coerced. This often is caused by trying to use an object or method that does not exist.
* RangeError: This is caused if you call a function using numbers outside of its accepted range.
* URIError: This is caused by encodeURI(), decodeURI(), and similar methods being used incorrectly.
* EvalError: This is caused by the eval() function being used incorrectly.

When an error object is created by a runtime error it will contain the following properties:

* name: the type of execution
* message: description of the error
* fileName: name of the javascript file
* lineNumber: line number of error

##### Error Console

When your script returns an error you can see all this information in the JavaScript console/ Error console of the browser. This is very useful for debugging.

To bring up the browser's developer tool, press Cmd + Opt + I on Mac or Ctrl + Shift + I on Windows. Go to the tab labelled console and you should see something like this:

![img](/images/Debugging-img-1.png)

1. On the left, you can see this is a `SyntaxError`, accompanied with the message that an unexpected idenfifier `show_pattern` was found.
2. On the right, you can see that the error happened in a file called `colour_squares_2.js` on line 3.

![img](/images/Debugging-img-2.png)

Opening the file `colour_squares_2.js`, all we need to do is go to line 3 and we can quickly see the problem. The keyword `var` has been misspelt `va`. Error resolved.

#### 2. Isolate the problem

The information given by the error message is often not enough to debug your script.

What if the line on which the error occurred is not the problem statement, but merely where a bogus value, that has already been passed through x many functions, has raised the first problem? Or, what if no error occurs but the code simply does not do what you expect it to?

The console has functionality available to help you isolate the problem areas of your code.

##### Logging data to the console

You can type code directly into the console and it will show you the result:

![img](/images/Debugging-img-3.png)

Browsers also have a console object, which has several methods available for your code. One of the most useful is `console.log()` that writes data from your script to the console that can then be viewed like the above.

A few strategic placements of `console.log()` can quickly help you identify the problem areas of your code.

1. `console.log()` notes can show you how far your script has run.
2.  Writing out variables from your code to the console lets you see what value the interpreter holds for them. If they are not what you expect, you know there is a problem.

Here we only need a maximum of three logs to check the health of the program:
```javascript
function cheapestQuote(newspapers) {
    console.log(newspapers);
    var total = 0, bundle = [40, 20, 10, 5, 1],
    cost = [3.85, 1.93, 0.97, 0.49, 0.10];
    for (i = 0; i < bundle.length; i++) {
        console.log(bundle[i],cost[i]);
        total += calcCost(newspapers, bundle[i], cost[i]);
        console.log(total);
        newspapers = newspapers % bundle[i];
    }
    return total;
}

function calcCost(newspapers, bundle, cost) {
    if (newspapers < bundle) return 0;
    return +((Math.floor(newspapers / bundle) * cost).toFixed(2));
}

cheapestQuote(236);
```
All the values of all the variables are logged. If any of them were not what was expected we would quickly know where the problem is:

![img](/images/Debugging-img-4.png)

1. On the left you can see the values of the variables being logged to the console.
2. On the right you can see the name of the function, the name of the js file, and the line number the `console.log` was called within (and that we hence know the script runs up to.)

You can also write the values of variables into the console, call functions from the console to check if they are returning what you would expect them to, and check if objects exist and have the methods/properties you think they do:

![img](/images/Debugging-img-5.png)

In this way you can methodically test each part of your script and narrow down onto the problem area.

**Note:** You can comment out `// or /* */` parts of your script to focus on running and testing individual parts.

#### 3. Breakpoints

Another important developer tool available from the console is breakpoints. Using a breakpoint you can pause the execution of a script on any line. Then you can inspect the values stored in variables at that point in time, and see if any problems emerge.

##### Setting breakpoints

To set a breakpoint, from the debugger tab in the console just click on the line number of your script you want to set as a breakpoint. In Safari these lines numbers will become dark blue if the breakpoint is active and light blue if set as inactive.

After setting the breakpoints refresh the page with the console window open and the execution of the script will pause at the breakpoint. If you now hover over the variables in your script, shown in the debugger tab, their current values at this point of execution will appear (an array in this example):

![img](/images/Debugging-img-6.png)

##### Multiple breakpoints

If you set multiple break-points, you can step through them one-by-one. You will see that the debugger lets you step through the code line by line and inspect values of variables as your script progresses.

##### Stepping in/out of functions

When you are doing this, if the debugger comes across a function it will move onto the next line after the function. This is called 'stepping over a function.'

It is possible to tell the interpreter to step into a function. The debugger will then move to the first line in that function.

You can also tell it to step out of a function, in which case the rest of the function will be executed as the debugger moves to its parent function:

![img](/images/Debugging-img-7.png)

(left to right)

* Disable breakpoints
* Pause/continue script execution
* Step over function
* Step into function
* Step out of function.

##### Conditional breakpoints

You can indicate that a breakpoint should be triggered only if a condition that you specify is met. The condition can use existing variables.

To do this just right click the breakpoint line and number and select edit breakpoint. You can enter the condition into the condition field.

![img](/images/Debugging-img-8.png)

##### Debugger keyword

You can create a breakpoint in your code using the `debugger` keyword. When the developer tools are open, this will automatically create a breakpoint.

You can also place the `debugger` keyword within a conditional statement so that it only triggers the breakpoint if the condition is met.
```javascript
var height = 7, width = 14;
var area = height * width;

if (area < 100) {
    debugger;
}
```
Remember to remove these statements before your code goes live as this could stop the page running if a user has developer tools open.

### Related

Subjects with readmes are linked to.

* [Start Developing with JavaScript](http://codingforeveryone.foundersandcoders.org/programmer-skills/start-to-develop-js.html)
* [Exceptions handling](http://codingforeveryone.foundersandcoders.org/JavaScript/raising-exceptions.html)/ Assertions
* Jslint/ Jshint
* [Basic Performance Testing](http://codingforeveryone.foundersandcoders.org/JavaScript/basic-performance-testing.html)/ Suites
* Console object/methods
* Error object/constructor
* Call Stack/ Execution Contexts/ [Control Flow](http://codingforeveryone.foundersandcoders.org/JavaScript/scope-and-hoisting.html)/ [Hoisting](http://codingforeveryone.foundersandcoders.org/JavaScript/hoisting.html)
* Unwinding the Stack
* Strict Mode
* Common errors

### Resources

* [Error -- MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
* [Style Guidelines -- W3Schools](http://www.w3schools.com/js/js_conventions.asp)
* [Stack Overflow](http://stackoverflow.com)
* [Jsbin](https://jsbin.com/?html,output)
* [Eloquent JS by Marijn Haverbeke, Chapter 8](http://eloquentjavascript.net/08_error.html)
* [JavaScript and Jquery by Jon Duckett, Chapter 10.](http://www.amazon.co.uk/JavaScript-JQuery-Interactive-Front-end-Development/dp/1118531647/ref=sr_1_3?ie=UTF8&qid=1460235338&sr=8-3&keywords=jon+duckett)
* [Firefox Browser Console Guide](https://developer.mozilla.org/en/docs/Tools/Browser_Console)
* [Google Chrome Console Guide](https://developer.chrome.com/devtools/docs/console)
* [Internet Explorer Console Guide](https://msdn.microsoft.com/en-us/library/gg589530(v=vs.85)
* [Safari Console Guide](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html)
* [Opera Console Guide](http://www.opera.com/dragonfly/documentation/)
