# Basic Performance Testing

This guide will follow a worked example on how to go about comparatively performance testing functions. Performance testing is not a subject that should worry beginners, however, it is very interesting to look at and will become useful on complex projects.

The following is almost certainly not the only (or necessarily the best) way, however, it is fairly easy to understand and use.

## The Functions

We are tasked with performance testing two different ways of generating random strings 50 characters in length ([see random test cases guide](/codewars/random-test-cases-for-complete-beginners.md)).

Our original function took the following form:

```javascript
function makestring() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 50; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
```

This received feedback that it is extremely ineffcient to sum X strings as it generates X-1 intermediate objects; but it is instead always better to use an array and finally perform a .join("") over them. So we created the following:

```javascript
function makestring2() {
   var array = [];
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   for( var i=0; i < 50; i++ ) {
       array.push(possible.charAt(Math.floor(Math.random() * possible.length)));
   }
   return array.join("");
}
```

## Performance Test

Now rather than just accepting the advice, how do we actually test these?

Our chosen method is to make use of javascripts `new Date()` constructor. This gives the time since 01 January 1970 00:00:00 UTC. The number is specified in milliseconds. Therefore if we wrap a for loop repeating the function in two variables that equal `new Date()` and find the difference between these variables we should have the time taken to perform the function. To give a large enough data set, consider repeating the function 20,000 times.

```javascript
var start = new Date();  // log start timestamp
for (var i = 0; i < 20000; i++) {
    console.log(makestring());
}
var end =  new Date();  // log end timestamp
var diff = end - start;
console.log(diff.toString());
```

and for the second function:

```javascript
var start1 = new Date();  // log start timestamp
for (var i = 0; i < 20000; i++) {
    console.log(makestring1());
}
var end1 =  new Date();  // log end timestamp
var diff1 = end1 - start1;
console.log(diff1.toString());
```

## The Comparison

By comparing the time taken to perform each function you will be able to get a rough idea for performance. In this example, our `makestring()` takes approximately 2322 ms and our array function `makestring1()` takes approximately 323 ms. 

*Note: Values may not be constant between seperate runs, but will be in a similar range. Likewise consider moving `console.log(diff)` to end of function for ease of reading.*

Moving beyond this example, the same method should be applicable to any other set of functions. Wrap a loop repeating functions in date variables, find difference, compare!

## Appendix

### Complete Script

```javascript
function makestring() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 50; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function makestring2() {
   var array = [];
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   for( var i=0; i < 50; i++ ) {
       array.push(possible.charAt(Math.floor(Math.random() * possible.length)));
   }
   return array.join("");
}

var start = new Date();  // log start timestamp
for (var i = 0; i < 20000; i++) {
    console.log(makestring());
}
var end =  new Date();  // log end timestamp
var diff = end - start;

var start1 = new Date();  // log start timestamp
for (var i = 0; i < 20000; i++) {
    console.log(makestring2());
}
var end1 =  new Date();  // log end timestamp
var diff1 = end1 - start1;

console.log(diff.toString());
console.log(diff1.toString());
```






