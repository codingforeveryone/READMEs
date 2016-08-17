# Hoisting

Have you ever wondered why you can write calls to function declarations before function declarations in your code whereas you can’t do
the same with function expressions? Then you have wondered about hoisting. Here we cover the basics of what hoisting does and how it works.
## Examples of hoisting

First, let us understand the differences between function declarations and function expressions.

A Function Declaration defines a named function variable without requiring variable assignment. It’s useful to think of them as brothers of Variable Declarations, just as Variable Declarations must start with 'var', Function Declarations must begin with 'function'.

A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment). Functions defined via Functions Expressions can be named or anonymous. 

For instance, with function declarations you can put the call to them before themselves:

```javascript
love(); // produces ‘I love you’
function love(){
console.log(‘I love you’);
}
```

On the other hand, with function expressions, the following doesn’t work:

```javascript
love(); //this produces an error
var love = function(){
console.log(‘I love you’);
}
```

Further, if you console.log some variable before the variable is declared in your code, you will not get an error but simply
‘undefined’, which is not an error but a value.

```javascript
console.log(a); //produces ‘undefined’
var a = ‘what up man’;
```

Whereas:

```javascript
var a = ‘what up man’;
console.log(a); // produces ‘what up man’
```

So how do we explain this behaviour? All this has to do with hoisting. You may have heard that hoisting is something that the
JavaScript engine does whereby the variables ‘are moved to the top’. While this may be visually the easiest way to imagine it,
it is not really what is happening. 

## Explanation
### Creation phase and execution phase
When you run your code, JavaScript engine executes it in two stages - the creation phase and the execution phase. This is very
important to understanding hoisting. Two stages – the creation phase and the execution phase.
What happens in the creation phase is called ‘hoisting’. This is the JavaScript engine setting up memory space for all variables **AND**
function declarations. I repeat, for variables **AND** function declarations. function declarations are put into memory **IN THEIR ENTIRETY**.

However, as far as variables are concerned, the assignments to them (their values) are not put into memory. So regarding the following
code:

```javascript
swear();
console.log(a);
function swear(){
console.log(‘damn’)
}
var a = ‘I like’;
```

What is going to be put into memory in the creation phase is that function statement in its entirety:

```javascript
function swear(){
console.log(‘damn’)
}
```

And the variable a without its value (assignment): 

```javascript
var a
```

The assignment (the value) to our variable ‘a’, which is ‘I like’, is not going to be put in memory during the creation phase. Instead, for the time being, it will be assigned the value ‘undefined’. Then, during the execution phase, when these assignments happen, as the JavaScript engine goes through your code line by line it gets assigned the value ‘I like’, when it hits line 6.

### Implications

All this means that when the execution phase is run after the creation phase, when the JavaScript engine hits the line with our
function call ‘swear()’ on line 1, because the function is already in memory in its entirety, it can execute it and we get ‘damn’
console.logged. However, when it hits the second line that console.logs ‘a’, at this point ‘a’ is still assigned the value of
‘undefined’, because it assigns it the value ‘I like’ on the last line, which we haven’t got to yet. So what gets console.logged is
‘undefined’.

And that is also why you can’t make a call to function expressions before function expressions in your code. For example:

```javascript
like(); //produces an error
var like = function(){
console.log(‘I like very much’);
}
//last line here
```

The same reasoning as above applies here. During the creation phase, what is put into memory are variables without their values
AND function declarations in their entirety. Here, we have a variable ‘like’. So ‘like’ is put into memory and assigned the value
‘undefined’. Then, during the execution phase, JavaScript hits line 1 and sees a function call. At this point, what is in memory
is: ‘like = undefined;’ so it gives you an error ‘like is not a function’. If, however, instead of on line 1 you call it on the
last line of the code, then during the execution phase, JavaScripts assigns ‘like’ its value which in this case is a function 
(remember that assignments happen during the execution phase) and then when it hits the last line it can call it.

## Recap
Let me give you two different example that demonstrates hoisting rather nicely:          
Example 1:
```javascript
function family(){
    function person() {
        return "John";
    }
    return person();
    function person() {
        return "Tom";
    }
}
console.log(family());
```

Example 2:
```javascript
function money(){
    return coins();
    var coins = function() {
        return 3;
    };
    var coins = function() {
        return 8;
    };
}
console.log(money());
```

So, the answer to Ex. 1 would be ```"Tom" ``` and the answer to Ex. 2 would be ```TypeError: coins is not a function ```

Explanation for Ex. 1 - So we know that we are dealing with function declarations in this example, therefore we can say that the functions and their body is hoisted, so after the interpreter is finished with the code, it runs in this order.
```javascript
//**Simulated processing sequence for Ex. 1**
function family(){
    //define person once
    function person() {
        return "John";
    }
    //redefine person as "Tom"
    function person() {
        return "Tom";
    }
    return person(); //"Tom"
}
console.log(family());
```

Explanation for Ex. 2 - Here we can see that function expressions are used, so no functions are hoisted. However if there were no hoisting in this example whatsoever, the error would be ```TypeError: coins is not a defined ```. What occurs is variable hoisting, thus coins is declared up front but it's value is undefined. Everything else runs to order.
```javascript
//**Simulated processing sequence for Ex. 2**
function money(){
    //a declaration for each function expression
    var coins = undefined;
    var coins = undefined;
    return coins(); //TypeError: "coins not a function"
    //neither Function Expression is reached
}
console.log(money());
```

## Expressions or Declarations?

Function Declarations are hugely forgiving, calling a function before its declaration isn’t a problem since hoisting will declare the function before it is called, but this does not promote good programming practice. In the long run that may produce unexpected results if used incorrectly.

In most instances you can use a Function Expression assigned to a variable instead. If a Function Declaration is used, as long as you place them at the top of the scope you shouldn’t reach any unexpected results.


## Related
[JavaScript scope](http://codingforeveryone.foundersandcoders.org/JavaScript/JavaScript-Scope.html)

## References

[Hoisting on W3Schools](http://www.w3schools.com/js/js_hoisting.asp)

[Function Definitions on W3Schools](http://www.w3schools.com/Js/js_function_definition.asp)

[var keyword](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/var) on MDN 
