# Closures

### Introduction

Closures have a reputation for being one of JavaScript's most difficult concepts to grasp. However, if you're already comfortable with how JavaScript deals with functions and [scope][1], you're already halfway there.

---- 

### Scope 

As you should know before attempting to understand closures, JavaScript variables are accessible within:

**global scope** when defined outside of any function or declared without the `var` keyword
**local scope** when defined inside a function
**lexical scope** when defined as part of a nested function chain
**block scope** when defined with ES6 keywords `let` or `const`

Consider the following example of a nested function:

```javascript
var a = 1;
function outer(){
  var b = 2;
  function inner(){
    var c = 3;
    return a + b + c;
  }
  return inner();
}

var d = outer();

d; // 6
```

The variable `a` has **global scope** so can be accessed anywhere.

The variable `b` has **local scope**, local to the function `outer()` - it can only be accessed inside of it. Similarly, variable `c` is local to the function `inner()` and can only be accessed inside of it.

However, due to **lexical scope**, `inner()` also has access to variables `b` and `a` because they are defined within the its parent functions - `outer()` and the global space.

Running this code, we set `a` and then call `outer()`, which sets `b` and calls `inner()`, which sets `c` and adds `a`, `b` and `c` together, returning a value of `6` because it has access to all 3 variables. Finally, the value of `6` is returned by `outer()` and assigned to `d`.

Now onto closures. (We can ignore **block scope** for now.)

---- 

### Closures

According to [MDN][2]:

> Closures are functions that [...] 'remember' the environment in which they were created.

In the example above, if we tried to call `inner()` from the global space, we would get an error telling us that the function is not defined. This is because - like variables - functions are also affected by scope. `inner()` is local to the function `outer()` and can't be used outside of it.

With a small tweak, we can make `inner()` available to the global space without changing the scope of the variables involved:

```javascript
var a = 1;
function outer(){
  var b = 2;
  var inner = function(){
    var c = 3;
    return a + b + c;
  }
  return inner;
}

var d = outer();

b; // undefined
d(); // 6
```

Here, we've replaced the function declaration of `inner()` with a function expression, and then returned the function stored in `inner`, rather than its return value.

When we assign the function to `d`, calling `d()` from the global space has the same effect as calling `inner()`, except this time we get the returned value of `6`, instead of an error. If we try to access `b` from the same space, we still get an error like last time.

This is unusal because now `d()` has access to all 3 variables `a`, `b` and `c` in the global space, but any new function will not. Although it is defined in the global space, `d()` has **'remembered' the original environment (scope) in which it was created**.

---- 

### Why... do I need to know this?

#### Avoid exposing data you don't need to

Closures are useful when you want to set a variable to use in a function that shouldn't be accessed or changed by other functions, either intentionally or accidentally.

Rather than using an object with properties and methods, you can use a closure to make sure that the properties don't get altered.

#### Object

```javascript
var human = {
  greeting : 'Hello!',
  sayHello : function(){
               console.log(this.greeting);
             }

human.greeting = 'Go away.';
human.sayHello(); // outputs 'Go away.' :( 
```

#### Closure (with [immediately invoked function expression][3])

```javascript
var sayHello = (function(){
  var greeting = 'Hello!';
  var greet = function(){
    console.log(greeting);
  }
  return greet;
})();

var greeting = 'Go away.';
sayHello(); // outputs 'Hello!' :)
```

---- 

#### Maintaining state
  
In the code below, the closure sets up an `i` value of `0` and updates the value every time the function is called. This allows iteration through an array one element at a time - the function 'remembers' the state of `i` at the last iteration.

```javascript
var array = ['a','b','c','d','e','f','g'];

function iterate(arr){
  var i = 0;
  var iterator = function(){ 
    return arr[i++];
  }
  return iterator;
};

var next = iterate(array);

next(); // returns 'a'
next(); // returns 'b'
next(); // returns 'c'
next(); // returns 'd'
...
```

---- 

### Related

[JavaScript Scope: A Beginners Perspective][4]  
[Variable scope and hoisting][5]
[Hoisting][6]

### Resources

- [Closures - JavaScript | MDN][7]
- [what's the point of closures? - Journey Into JavaScript][8]
- [JavaScript Scope - Lexical Scoping, Closures & Controlling Context][9]
- [Closure (computer programming) - Wikipedia][10]
- [Explaining JavaScript scope and closures - Robert's Talk][11]
- [Ben Alman » Immediately-Invoked Function Expression (IIFE)][12]
- [Alwin Solanky's post in codingforeveryone/today-i-learned][13]


[1]:	https://github.com/codingforeveryone/READMEs/blob/master/JavaScript/JavaScript-Scope.md
[2]:	https://developer.mozilla.org/en/docs/Web/JavaScript/Closures
[3]:	https://developer.mozilla.org/en-US/docs/Glossary/IIFE
[4]:	https://github.com/codingforeveryone/READMEs/blob/master/JavaScript/JavaScript-Scope.md
[5]:	https://github.com/codingforeveryone/READMEs/blob/master/JavaScript/scope-and-hoisting.md
[6]:	https://github.com/codingforeveryone/READMEs/blob/master/JavaScript/hoisting.md
[7]:	https://developer.mozilla.org/en/docs/Web/JavaScript/Closures
[8]:	https://journeyintojavascript.quora.com/whats-the-point-of-closures
[9]:	https://spin.atomicobject.com/2014/10/20/javascript-scope-closures/
[10]:	https://en.wikipedia.org/wiki/Closure_(computer_programming)
[11]:	https://robertnyman.com/2008/10/09/explaining-javascript-scope-and-closures/
[12]:	http://benalman.com/news/2010/11/immediately-invoked-function-expression/
[13]:	https://github.com/codingforeveryone/today-i-learned/blob/master/oojs/closures.md