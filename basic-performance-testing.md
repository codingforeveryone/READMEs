# Basic Performance Testing

This guide will follow a worked example on how to go about comparatively performance testing functions. Performance testing is not a subject that should worry beginners, however, it is very interesting to look at and will become useful on complex projects.

The following is almost certainly not the only (or necessarily the best) way, however, it is fairly easy to understand and use.

## The Functions

We are tasked with performance testing two different ways of generating random strings 50 characters in length ([see random test cases guide](https://github.com/codingforeveryone/READMEs/blob/basic-performance-testing/random-test-cases-for-complete-beginners.md)).

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

Now rather than take the advice, how do we actually test these?





