
#JavaScript Scope: A Beginners Perspective


 
###Understanding scope is a fundamental part of learning any programming language, scope tells you where a variable is stored as well as where it can be accessed. Scope is also closely tied to a concept known as **[Hoisting](http://codingforeveryone.foundersandcoders.org/JavaScript/hoisting.html)**. 
 
------------

###Different Types of Scope

#####**Global Scope**
In JavaScript there are now three main types of scope: Global, Local, Lexical, and now with ECMAScript 6 there is Block Level. We will start off with the Global Scope. When you declare a variable globally you are ensuring that the particular variable is available everywhere and so every single function has access to that variable. Here is an example of a Globally scoped variable. 


**Example of Global Scoped variable:**
```
var global = 'everywhere';

  function scope(){
  
   var local = 'local'; //returns the string 'local'
   
}
console.log(global); //returns the string 'everywhere'
```

> Things to note: You have to be wary when declaring Global variables as they can interact or possibly override other variables, which can ruin scripts and make your code harder to debug. Also, if a variable isn't declared explicitly with the **var** keyword it automatically becomes a Global variable.

-----
#####**Local Scope**
So now that we've covered Global scope, let's move on to understanding a locally scoped environment, When you declare a Local variable, that variable or argument is only tied to that particular function, which means you can only use it in that environment. Essentially each function gives way to it's own unique environment. 

**Example of Locally Scoped variable:**

```
function scope(){
var local = 'local';  //returns 'local'
}
console.log(local); //returns undefined.

```

> Things To Note:  Since the variable is defined locally it has no reference to the parent or global scope, so when you try to use the variable outside the function you will get an undefined value. 

------
#####**Lexical Scope**

Lexical scope sounds a little tricky but it's actually pretty straightforward. When I think of 'lexical' in a programming environment I like to think that it means 'in relation to' or 'sharing'. You will see why: a lexical scope is basically a variable that is accessible within a nested function. 
**Example of Lexical Scoped variable:**

```
function outer(){
    var lexical = 'local';  //returns 'local'
    //Scope A
    function inner() {
        // Variable lexical is accessible here 
           //Scope B
           function inner() {
              // Variable lexical is accessible here 
               //Scope C
      }
   }
}
```

> Things To Note:  Lexically scoped variables are accessible down the scope chain but they will not work when trying to get values of variables hoisted above a function. 

------------
#####**Block Scope**
The advent of ECMAScript 6 has brought us some new keywords, `let` and `const`. Block level scope refers to a variable that has it's own scope, in other words a variable defined in an if statement will be tied to that particular statement and will not be accessible anywhere outside of it. So, when you declare a variable with the let or const keyword you are ensuring that the variable is block scoped. 

**Example of Block Scoped variable:**

```
function outer(){

   if(){
     let block = 'block scope' //Will return Block Scope
   }
        block = 'local scope' //Will return reference error
}

```

> Things To Note:   Block scoped variables also cannot be [hoisted](https://github.com/codingforeveryone/READMEs/blob/master/hoisting.md), the const variable has to have a value; if not it will throw a syntax error. Also, once a const has a declared value, it cannot be changed or an error will be thrown. 

------------


####References
#####[http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/](http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/)

#####[http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/](http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/)

#####[http://www.sitepoint.com/joys-block-scoping-es6/](http://www.sitepoint.com/joys-block-scoping-es6/)

#####[https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)

#####[http://ryanmorr.com/understanding-scope-and-context-in-javascript/](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)

[https://www.youtube.com/watch?v=aJixpk6Avxs](https://www.youtube.com/watch?v=aJixpk6Avxs)

[https://www.udemy.com/understand-javascript/](https://www.udemy.com/understand-javascript/)

-----------

