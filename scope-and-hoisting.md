#Variable scope and hoisting

-

Variable scope is the region where the variable is accesible from, or also, where it is visible.  

Variables have local scope or global scope and all variables declared outside of a function are in the global scope. This means they are available everywhere.

Unlike most languages which have block-level scope, JavaScript has what is called function-level scope. Variables which are declared inside a function are local variables (to the function they are in) and are only accesible inside that function or to a function inside the function. 

-

![Javascript Hoisting](http://captivatedev.com/wp-content/uploads/2011/04/VariableScope_thumb1.jpg)

###Function level scope

```javascript
var myName = "Marty McFly";

function printName(name) {
	var myName = "Biff Tannen";
	console.log(myName);
}

printName(); // logs Biff Tannen

console.log(myName); // logs Marty McFly
```

Only inside of the function are we able to access the value `Biff Tannen` as it is in the local scope of the `printName` function and not visible anywhere else but in the function. 

-

###No block-level scope

```javascript
var name = "Chunk";

if (name) {
	var name = "Mouth";
	console.log(name); // logs Mouth
}

console.log(name) // logs Mouth
```

We don't create a local context for the variable `name` inside the `if` statement. Javascript only does this with _functions_. When we `console.log(name)` it is still the global variable only that we re-assigned the value of `Mouth` to it inside of the `if` statement. 

-

###Not declaring variables

![Javascript Hoisting](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4RTdLDeAdSU3zqbT8LoCm2dYPCqIZzxmlKCSePWursKYl-sh-)

If we don't declare variables with the `var` keyword then automatically they become global variables. 

```javascript
var name = "E.T";

function printAlienName() {
	console.log(name);	
}

function printPersonName() {
	name = "Elliot";
	console.log(name);
}

printAlienName(); // logs E.T

printPersonName(); // logs Elliot

printAlienName(); // logs Elliot
```
Here when we use `name = "Elliot"` inside of the function we re-assign the global variable to `Elliot`. To avoid this all we need to do is the declare the variable inside `printPersonName()` like this:

```javascript
var name = "Elliot";
```

-

###Local variables have priority over global variables in functions

If we declare both a local and global variable with the same name, the local variable will always have priority when used inside the function. 

```javascript
var name = "Han Solo"

function printName(){
	var name = "R2-D2";
	console.log(name);
}

printName(); // logs R2-D2
```

When we run `printName` the search for `name` starts inside of the function when it finds it it doesn't look anywhere else.

-

We should always do what we can to keep global variables to an absolute minimum and avoid the following.

```javscript
var firstName = "Indiana";
var lastName = "Jones";

function printFullName() {
	console.log(firstName + " " + lastName);
}
```

In keeping them as local variables we can make sure they don't get reassigned down the track and cause unexpected results.

This is how we should run the same code:

```javascript 
function printFullName(){
	var firstName = "Indiana";
	var lastName = "Jones";
	
	console.log(firstName + " " + lastName);
}
```
-

###Variable Hoisting

![Javascript Hoisting](http://www.codingtutes.com/wp-content/uploads/2016/03/1456827053_maxresdefault-205x130.jpg)

Variable declarations inside of a function are hoisted and delared at the top of the function.

```javascript
function printName() {
	console.log("First Name: " + name);
	var name = "Miyagi";
	console.log("Last Name:" + name);
}

printName();
// First Name: undefined
// Last Name: Miyagi 
```

The variable `name` gets hoisted to the top of the function. It's as if the code had been written like this:

```
function printName() {
	var name;
	console.log("First Name: " + name);
	var name = "Miyagi";
	console.log("Last Name:" + name);
}
```

The variable `name` is hoisted but without the value assigned to it, which is why we get a `First Name: undefined`. Then the value is assigned when we declare the variable `name` and `Last Name: Myagi` is printed.

###Function declaration takes precedence over variable declaration

Lets first remember that neither variable nor function assignments (_values_) are hoisted, only variabe and function _declarations_. A function declaration overrides a variable declaration. 

Let's now take a look at how function declaration takes precedence. 

```javascript
function characterName() {
	console.log("Daniel");
}

var characterName;

console.log(typeof characterName); // logs function
```

Although if we were to assign a value to the variable (variable assignment) then this would take precedence.

```javascript
var characterName = "Falkor";

function characterName() {
	console.log("Bastian");
}

console.log(typeof characterName) // logs string
```