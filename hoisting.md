Have you ever wondered why you can write calls to function statements before function statements in your code whereas you can’t do
the same with function expressions? 

For instance, with function statements you can do the following, you can put the call to them before themselves:

```javascript
love(); // produces ‘I love you’
function love(){
console.log(‘I love you’);
}```

On the other hand, with function expressions, the following doesn’t work:

```javascript
love(); //this produces an error
var love = function(){
console.log(‘I love you’);
}```

Further, if you console.log some variable before the variable is declared in your code, you will not get an error but simply
‘undefined’, which is not an error but a value.

```javascript
console.log(a); //produces ‘undefined’
var a = ‘what up man’;```

Whereas:

```javascript
var a = ‘what up man’;
console.log(a); // produces ‘what up man’
```

So how do we explain this behaviour? All this has to do with hoisting. You may have heard that hoisting is something that the
JavaScript engine does whereby the variables ‘are moved to the top’. While this may be visually the easiest way to imagine it,
it is not really what is happening. 

When you run your code, JavaScript engine executes it in two stages - the creation phase and the execution phase. This is very
important to understanding hoisting. Two stages – the creation phase and the execution phase.
What happens in the creation phase is called ‘hoisting’. This is JavaScript engine setting up memory space for all variables **AND**
function statements. I repeat, for variables **AND** function statements. Function statements are put into memory **IN THEIR ENTIRETY**.

However, as far as variables are concerned, the assignments to them (their values) are not put into memory. So regarding the following
code:

```javascript
swear();
console.log(a);
function swear(){
console.log(‘damn’)
}
var a = ‘I like’;```

What is going to be put into memory in the creation phase is that function statement in its entirety:

```javascript
function swear(){
console.log(‘damn’)
}```

And the variable a without its value (assignment): 

```javascript
var a```

The assignment (the value) to our variable ‘a’, which is ‘I like’, is not going to be put in memory during the creation phase,
instead, for the time being, it will be assigned the value ‘undefined’. Then, during the execution phase, as the JavaScript goes
through your code line by line, is when these assignments happen so it gets assigned the value ‘I like’, when it hits line 6.
All this means that when the execution phase is run after the creation phase, when the JavaScript engine hits the line with our
function call ‘swear()’ on line 1, because the function is already in memory in its entirety, it can execute it and we get ‘damn’
console.logged. However, when it hits the second line that console.logs ‘a’, at this point ‘a’ is still assigned the value of
‘undefined’, because it assigns it the value ‘I like’ on the last line where we haven’t got yet. So what gets console.logged is
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
AND function statements in their entirety. Here, we have a variable ‘like’. So ‘like’ is put into memory and assigned the value
‘undefined’. Then, during the execution phase, JavaScript hits line 1 and sees a function call. At this point, what is in memory
is: ‘like = undefined;’ so it gives you an error ‘like is not a function’. If, however, instead of on line 1 you call it on the
last line of the code, then during the execution phase, JavaScripts assigns ‘like’ its value which in this case is a function 
(remember that assignments happen during the execution phase) and then when it hits the last line it can call it.

Let me give you one more example which I found on w3schools that demonstrates hoisting rather nicely:

```javascript
console.log(x); //this produces ‘undefined’
x = 5;
console.log(x); //this produces 5
//some code here
var x;```

When we execute the code, we first go through the creation phase and then the execution phase. During the creation phase, 
variable ‘x’ is put into memory and assigned the value undefined. Now that the creation phase is over, the execution phase begins.
JavaScript goes through the code line by line and sees the first console.log. At this point, x = undefined so it
console.logs ‘undefined’. Then it sees the assignment of 5 to x. Remember, assignments happen during the execution phase.
So x is now 5. The it sees another console.log and console.logs 5 because at this point 5 has already been assigned to x.

I hope this document has shed some light on what hoisting is and how it works. Thank you for reading.
