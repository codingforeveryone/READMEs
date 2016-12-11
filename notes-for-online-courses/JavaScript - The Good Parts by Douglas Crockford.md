#Course Notes for "JavaScript: The Good Parts" by Douglas Crockford

##Programming Style & Your Brain

There are two main drivers in decision-making: Head and Gut.

The head favours deliberate decisions, while the Gut prefers instinct. The Gut will provide estimated data to the Head, which then
comes up with an elaborate output based on that imperfect input.

JS has really good parts and really bad parts; very polarized language in that way.

Avoid confusing code: it's best to adopt practices that reduce ambiguity in the way your code could be interpreted. Most coding resources
go into debugging rather than the initial writing of the code. So write good code in the first place! Take the time for some extra
keystrokes - it'll pay off in the maintenance portion of the software lifecycle.

###JSLint
JSLint is a tool Crockford developed to help spot typos and small errors (e.g. forgetting a semi-colon).


##And Then There Was JavaScript

JavaScript was written in 10 days! It also underwent a period of 10 YEARS (1999-2009) without a major update. ES3 --> ES5; ES4 was scrapped altogether.

JS is an object-oriented language where almost everything is an object. Object literals are important. JS is a prototype-based language,
rather than a class-based language. This means that we can create object prototypes and then create new objects (e.g. with the "new" constructor) that
inherit properties from a given object prototype.

###Numbers
There is only one number-type in JS: 64-bit floating point, aka "Double".

JS does not have "int" when defining numbers --> Good because ints cause arithmetic errors.

Number literals: you can use decimal notation, scientific notation, etc.

Associative Law does not always hold in JS because computer numbers are necessarily finite (due to bit limitations), whereas real-world numbers are not always finite.

Associativity tends to hold in JS arithmetic for numbers under 9 quadrillion.

Decimal fractions are approximate in JS. This is a problem with binary computing (not JS-specific). JS *should* have used a decimal, floating-point format.

Number methods: numbers are objects, and so we can run methods on them (e.g. "toFixed", "toPrecision", "valueOf", "toExponential", "toLocaleString", "toString").
You can even add your own Number Methods to the Number object (e.g. a truncation method).

Numbers are first class objects!

Math object: some of the math functions (e.g. "min", "max", "log", "ceil", "sin") are expensive (e.g. trig functions) and you don't always need them. It would be better for math functions and math constants (e.g. PI and E) to be Number Methods, but instead JS has them has methods on the _Math Object_.

NaN: stands for "Not a Number", but has a type of "Number". Result of an undefined or erroneous operation. It's not equal to anything - not even itself! NaN === NaN is false.

"=" as the assignment operator comes from Fortran. Inherited by JS.

JS has infinity, which is a value that represents all values that are bigger than the greatest number that JS can represent.

Number.MAX_Value is the biggest number that JS knows how to represent (around 9 quadrillion).

###Strings and Arrays

Boolean: two values, true and false.

Strings: basically means "text". Crockford doesn't know why they're called "strings".
Strings are immutable --> once they are created, they cannot be modified. To "modify" them, you actually create a new string.
Similar strings are equal (under "===").
Good convention for strings: use double-quote for external strings and single-quote for internal strings and characters.

"+" operator: + can concatenate or add.

parseInt function: takes a string and a radix. e.g. parseInt(str, 10). It will stop parsing once it sees a character which is not a digit in the base that it's working in. e.g. parseInt("12em") === 12.

There are problems with leading zeroes when using parseInt. e.g. parseInt("08") === 0. We defend against this by explicitly specifying the radix (usually 10). e.g. parseInt("08", 10) === 8.

Strings have a length property. It tells you how many characters are in the string.

Strings have lots of methods (they're objects, after all). e.g. "charAt", "split", "trim", "concat".

Array: a linear sequence of memory which is divided into equal-sized buckets which can be indexed by number, which allows for a very fast way of retrieving variables from a set.

^ JS doesn't have arrays like that ^. JS arrays are actually objects. Array _inherits_ from object in JS. Indexes are converted to strings and used as names for retrieving values. One advantage is that we don't need to provide a length or type when creating an array in JS.

Arrays have a special length property. Array length is 1 larger than the highest integer subscript in the array. It allows us to use "for" loops on arrays.

Dot notation should not be used with arrays. Use bracket notation with arrays, except when calling methods.

Array methods: e.g. concat, every, filter, forEach, map, reduce, splice, some, unshift, etc.

The "sort" array method by default sorts numbers as strings, which is usually bad.

Delete operator: allows you to delete elements from an array, but leaves a hole in the array. It's better to use the "splice" method, which doesn't leave the hole - the splice method is _slow_ though.

Appending things to the end of an array tends to be fast. Removing things from anywhere, except the end of an array, tends to be very slow.

###Objects
Use objects when the names are arbitrary strings. Use arrays when the names are sequential integers.

RegExp: pattern-matching function. RegExp notation is notoriously hard to read in JS.

All values in JS are objects, except null and undefined. Null is a value that isn't anything - it's a blank space.
Undefined is the default value for variables and parameters. It's the value of missing members in objects.

typeof operator: returns the type of any object in JS. Note that passing an array to the typeof operator returns an object. Also the "typof(null)" is an object, which is just wrong.

Array.isArray checks to see if an array is _actually_ an array (rather than just returning "object", like typeof would by itself).

Falsy values in JS: false, null, undefined, "" (empty string), 0, NaN. These, as conditions, cause an if-statement to take the false-branch.
Truthy values in JS: any value that's not a falsy value. These cause an if-statement to take the true-branch.

JS is a loosely typed language.

The === operator compares object referencs, not values. It asks, "do these two both point to the same object?" rather than "do these two have similar values?".

###Common JavaScript Statements

JS is a member of the C family, syntactically.
By convention: all variables, parameters, members and function names start with lowerCase. --> exceptions: constructors start with UpperCase, and global variables are ALL-CAPS!
Initial _ should be reserved for implementations.
$ should be reserved for machines.

Comments: // inline comments, or /* slashstar block comment */

Division of two integers does not always produce an integer, and does not always produce the exact correct real-world result.

% is the _remainder_ operator, not the _modulo_ operator. Remainder operator takes the sign of the first argument, rather than the second argument (that case would result in obtaining the modulo).

Bitwise operators: "& | ^ >> >>> <<" converts the operand to a 32-bit signed intege, and turns the result back into a 64-bit floating point.

Switch statement: is a multiway branch. The switch value can be either a number or a string. The case values can be expressions. Danger or switch statements is that cases fall through to the next case unless a disruptive statement (e.g. "break") ends the case.

Throw statement: it generates (throws) an error. You can use this to create custom errors. Technically speaking, one "throws an exception".

Catch statement: lets you handle the error.

Try statement: lets you test a block of code for errors.

Finally statement: lets you execute code, after try and catch, regardless of the result.

##Function the Ultimate

###Background on Functions
JS just has functions: this encompasses methods, classes, constructors and modules.

Function expression: creates a function object.

Function objects are first class: 1) can be passed as an argument to a function. 2) Can be returned from a function. 3) May be assigned to a variable. 3) May be stored in an object or array.
Function objects inherit from Function.prototype.

Every function has methods.

A variable declared anywhere within a function is visible _everywhere_ within the function.

Function statement: mandatory name. It's a short-hand for a var statement with a function value - e.g.:

function foo() {} --> expands to --> var foo = function foo() {}; --> which further expands to --> var foo = undefined; foo = function foo() {};

function expression vs. function statement: _if the first token in a statement is "function", then it is a function statement_.

One limitation of function statements: they have to be declared at the top level --> they can't be declared in the middle of a block. This is because of hoisting.

Scope: in JS, blocks don't have scope. Only functions have scope. Variables defined in a function are not visible outside that function.

Declare all var's at the top of the function. Declare all functions before you call them.

Return statement: you can either return an _expression_, or else you return _undefined_. Constructors have a default return value of _this_.

Each function receives two psuedo parameters: _arguments_ and _this_.

_arguments_: this is an array-like object that contains all of the arguments from the function invocation. It has a length property.

_this_: it's a pseudo parameter that contains a reference to the object of invocation. It allows a method to know what object it is concerned with. It allows a single function object to service many objects. It is the key to prototypal inheritance.

Invocation operator, "()" :  it binds the arguments.

Four ways to call a function: Function form, Method form, Constructor form, Apply form.

Method form: thisObject.methodName(arguments)

Function form: functionObject(arguments)

Constructor form: new FunctionValue(arguments)

Apply form: functionObject.apply(thisObject, arguments) or functionObject.call(thisObject, argument...)

_this_ refers to different things in the different forms of calling a function: function form --> _this_ is the global object or undefined. method form --> _this_ is the object. constructor form --> _this_ is the new object. apply fom --> _this_ is the argument.

_this_ gives methods access to their objects.

_this_ is bound at invocation time.

###Functions as Subroutines

Functions in programming evolved from subroutines (a piece of code that could be called from multiple locations).

Recursion: when a function calls itself. A function is defined in terms of itself.

Closure: the context of an inner function includes the scope of the outer function.
An inner function enjoys that context _even after the parent functions have returned_.
Function scope works like block scope.

Scope and Sets: inner functions have larger scope than outer functions.
