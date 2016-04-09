# Working with exceptions

This readme will cover the usage of the following functions: throw, try, catch, finally.

## Why is exception handling useful
Exceptions are a way to deal with errors that can occur when your code is executed.  

To explain the concept I will start with a simple example.  
```javascript
function unreliableFunction(a,b){  
  var x = Math.random()  
  if (x<= 0.5){  
    console.log(a*b)  
    return a*b  
  }  
  else  
    console.log(y)  
}  
```  

This function is an unrealible one. When invoked, half of the times it will return the products of the 2 parameters. The rest of the times it will try to log in the console the value y. Since y was not declared anywhere, this will cause an error. In this case the error is handled by the environment and I will see something like this as output:

![img1](/images/s1.png)

## try {}... finally {}
What would happen if this function was part of a bigger program? If the unreliableFunction fails, the code that comes after the function call would not be executed. See this example:
 
```javascript
function unreliableFunction(a,b){  
  var x = Math.random()  
  if (x<= 0.5){  
    console.log(a*b)  
    return a*b  
  }  
  else  
    console.log(y)  
}  
unreliableFuncion(2,3)
console.log("the program has reached the end")
```  

Fifty percent of the times, when the unreliableFunction doesn't fail this will be the output:
![img2](/images/s2.png)

You can see that the code following the function call has been executed.  
When the functions fails this will be the output:
![img3](/images/s3.png)


It may be the case that the last line of code is essential to my program, so how do I make sure that it is executed even if the function fails? In javascript I can use the construct `try {} ... finally {}`
```javascript
function unreliableFunction(a,b){  
  var x = Math.random()  
  if (x<= 0.5){  
    console.log(a*b)  
    return a*b  
  }  
  else  
    console.log(y)  
}  
try {
    unreliableFuncion(2,3)
} finally{
    console.log("the program has reached the end")
}
```  
If the unreliableFunction doesn't fail the output will be as before. Instead when it fails I will see something like this:
![img3](/images/s4.png)

You can see the last line of the code has been executed even if the function before failed.  There is an important observation to make at this point: **Why is the error sent to the console after the last line of the program is executed and not before?** Understanding the answer to this question is at the core of understanding how exceptions work in JS. Before answering the question I will show you the same example where the error message is displayed in the console **before** the last line of code is executed:

```javascript
function unreliableFunction(a,b){  
  var x = Math.random()  
  if (x<= 0.5){  
    console.log(a*b)  
    return a*b  
  }  
  else  
    console.log(y)  
}  
try {
    unreliableFuncion(2,3)
} catch(e) {
    console.log(e.message)   
} finally{
    console.log("the program has reached the end")
}
```

This will output the following:
![img5](/images/s5.png)

When something goes wrong inside unrealiableFunction, JS will raise an exception. In practical terms, an exception is a value.  JS will create a new Object using its standard constructor Error(), and it will assign to Error.message the type of error that was encoutered. In this case "y is not defined".  Raising an exeption is somewhat similar to a _return_ from a function. In the case of an exception the program will jump out of the  current function and also of all the functions that came before in the execution stack. This is called _unwinding the stack_. When this happens the exception traverses the execution stack and if nothing intercepts it, it is handled by the environment. This is why in the last example the error message was displayed **after** the last line of code was run. It was the environment that output that error message to console, after the code in the finally block was executed. The extra line that you see below the error message are the functions that compose the execution stack.

However, leaving an exception to the environment is not the only way possible. I could tell the code to "catch" an exception and to deal with it from inside the code without letting it reach the environment. This is what happened inside the last example and it is accomplished by this bit of code:  
```javascript
} catch(e) {
    console.log(e.message)   
}
```


## throw 
In this example I use the statement `console.log(y)` to create an error, because y is not defined. However, I could decide to raise an exception explicitly using _throw_.
Here is the same example as before using throw:
```javascript
function unreliableFunction(a,b){
  var x = Math.random()
  if (x<= 0.5){
    console.log(a*b)
    return a*b
  }
  else 
    throw new Error("y is not defined")
}

try {
    unreliableFunction(2,3)
} finally {
    console.log("the program has reached the end")
```

This code replicates the exact output of the previous example. throw is followed by a new object, that is created via the Error() constructor and stored inside it is the message "y is not defined". In this case it doesn't make much sense to use this particular message since I am not invoking console.log() on an undefined variable y, but I kept it to show that I am doing the exact same thing as before, just in an explicit way. 


## Selective catching
Catching exceptions for problems that might really occur during execution is eventually what you want to use exceptions for. 
The problem is that once you place a _catch_ body in your code, it will catch all the exceptions: those generated by JS for improper usage of he language (calling an undefined variable, trying to access a property of an undefined object, and so on) and also the ones generated by you with the command _throw_.  JS does not have a native way to support selective catching, but it is not difficult to implement it. 
One way could be to use the error messages to differentiate, however this method is unreliable since it relies on information intented for human consumption. As soon as the messages are changed or translated the code will stop working. 
A safer way is to define your own object to be used in raising exceptions.
Check this example:
```javascript
function MyError(msg){
    this.message = msg
}

function unreliableFunction(a,b){
  var x = Math.random()
  if (x <= 0.33 ){
    console.log(a*b)
    return a*b
  }
  else if (x > 0.33 && x<= 0.66)
    throw new MyError("this is the error that I want")
  
  else if (x > 0.66)
        console.log(y)
}

try {
    unreliableFunction(2,3)
} catch(e){
    if (e instanceof MyError)
        console.log(e.message)
    else
        throw e
}
```

In this example I have made the unreliableFunction even more unreliable. Now one third of the times it will work, one third throw an exception that I expect, and one third of the time it will be a language related exception. I am interested in catching and handling only the former. To do so I define my own object MyError. In the _catch_ block I will  check if the object caught was created using my constructor. In case it wasn't I throw it further. All errors created by JS will use the standard Error constructor and will be sent further to the environment, while the ones using MyError, will be handled inside the _catch_ block. 




#References

[Chapter 8 of Eloquent Javascript](http://eloquentjavascript.net/08_error.html)

















