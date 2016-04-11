## ECMAScript 6

#### Introduction

ECMAScript (or ES) is the standardised scripting-language specification that Javascript is based upon. The current version of Javascript that is supported in modern browsers is ES5, which was published in 2009. ES6 was finalised in June 2015. Browser support for ES6 is still incomplete but [in progress](https://kangax.github.io/compat-table/es6/), and so it will become increasingly important to learn.

ES6 is purely additive to Javascript but it is a significant and extensive upgrade. This readme will introduce you to a few of the new main features.

#### Features covered:

* Arrow Functions
* Block-Scoping
* Constants
* Extended Parameter Handling
* Binary and Octal Literals
* Template Literals

#### Arrow Functions

Arrows are an anonymous function shorthand using the `=>` syntax. They support both statement block bodies as well as expression bodies which return the value of the expression. The arrow function’s basic syntax is as follows:
```javascript
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
         // equivalent to:  => { return expression; }
singleParam => { statements } or (singleParam) => { statements }
// A function with no parameters requires parentheses:
() => { statements }
() => ({ foo: 1 }); // returns an object expression.
```
##### Short syntax
One main reason for introducing arrow functions is their shorter anonymous function syntax. Consider how much more elegant the following arrow function is than the standard function syntax:
```javascript
var arr = [5, 6, 13, 0, 1, 18, 23];

var double = arr.map(v => v * 2);
var double = arr.map(function(v) {
    return v * 2;
});
//returns [10,12,26,0,2,36,46];
```
##### Lexical this
The other main reason for introducing arrow functions is that they share the same lexical `this` as their surrounding code. Standard functions define their own this value, which makes arrow functions the more intuitive option in handling object contexts:
```javascript
//arrow function
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // Here this properly refers to the person object
  }, 1000);
}

//standard function
function Person() {
  var self = this; //this has to be stored in variable self to be used in function below.
  self.age = 0;

  setInterval(function growUp() {
    self.age++;
  }, 1000);
}
```
#### Block-Scoping

In ES5, variables are either globally or locally function scoped. In other languages like C/C#/Java it is also possible to block-scope variables. ES6 enables this feature for Javascript.

Block-scope variables can be achieved through the use of the new keyword `let`. For most practical purposes `let` works like the `var` keyword, with the exception that `let` variables have as their scope the code block in which they are defined. `var` variables in contrast have as their scope their entire enclosing function:
```javascript
function letTest() {
    let x = 31;  //console.log(x) prints 31.
    var a = 45;
    if (true) {
        var a = 56;
        let a = 36;  //invalid: a is already defined.
        let x = 71;  //different variable. console.log(x) prints 71.
    }
    //console.log(x) prints 31.
    //console.log(a) prints 56.
}
```
##### Loops
`let` can be used in place of `var` in loops to limit the variable’s scope to the loop:
```javascript
var num = 0; //num is globally scoped

for (let i = 0; i < 10; i++) { //i is block scoped
  num += i;
  num *= i;
}
```
##### Functions
You can also use `let` to block-scope functions:
```javascript
{
    let foo = function () { return 1 }
    //foo() === 1
    {
        let foo = function () { return 2 }
        //foo() === 2
    }
    //foo() === 1
}
```
#### Constants

Constants are single-assignment variables, which means that once assigned a value the variable identifier cannot be re-assigned or redeclared new values.

Constants can be declared through the keyword `const` and must be assigned a value in the same declaration statement. `Const`, like `let`, is block-scoped, and cannot share its name with a function or variable in the same scope.
```javascript
//The common convention with constants is to use all uppercase when declaring them.

Const FOO; // fails: missing = in declaration

const HELLO_WORLD = “Hello World!”; // console.log(HELLO_WORLD) will print “Hello World!”

HELLO_WORLD = “Goodbye World!”; // fails: cannot be re-assigned a value

const HELLO_WORLD = “Goodbye World!”; // fails: cannot be redeclared

var HELLO_WORLD = “Hello World!”; // fails: name is reserved for constant
```
#### Extended Parameter Handling

##### Default

You can now give function parameters default values:
```javascript
function f (x, y = 7, z = 42) {
    return x + y + z
}
f(1) === 50
```
##### Rest

You can now use the rest parameter syntax to represent an indefinite number of arguments as an array.

If the last named argument is prefixed with `…`, it becomes an array whose elements from `0` to `a.length` are supplied by the arguments passed to the function:
```javascript
function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9
```
Rest differs from the arguments object in that it is an actual Array instance, meaning methods like sort, map, forEach or pop can be applied on it directly:
```javascript
function multiply(multiplier, ...a) {
  return a.map((element) => multiplier * element);
}

var arr = multiply(2, 1, 2, 3); //here 1, 2, 3 will be converted into the array a.
console.log(arr); // [2, 4, 6]
```
##### Spread

You can also now bind consecutive parameters to an array using the spread operator `…` introduced above:
```javascript
function f(x, y, z) {
  return x + y + z;
}
f(...[1,2,3]) === 6
```
Or:
```javascript
var args = [0,1,2];
f(…args) === 6
```
The spread operator can also be used with arrays:
```javascript
var arr1 = ['2', '3'];
var arr2 = ['1', ...arr1, '4', '5'];
//  arr2 = [‘1’, ‘2’, ‘3’, ‘4’, ‘5’];

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(…arr2);
//  arr1 = [0, 1, 2, 3, 4, 5];
```

**Note:** Default, Rest and Spread parameters can also be used with arrow functions, as well as destructuring within the parameter list.

####Binary and Octal Literals

ES6 supports new literal forms for binary (```0b```) and octal (```0o```) representations. A number preceded by ```0b``` or ```0o``` will be read as a binary or octal number respectively.

```javascript
0b110010100 === 404 //  true
0o624 === 404 //  true
```
#### Template Literals

Template literals are String literals that allow embedded expressions. You can use
them for multi-line strings and string interpolation (see below).

Template literals are enclosed by back-ticks and can contain placeholders 
indicated by the dollar sign and curly braces `${expression}`:
```javascript
`String text ${expression}`
```
##### Multi-line Strings

With template literals this:
```javascript
`string text line 1
 string text line 2`
```
Achieves the same effect as this:
```javascript
"string text line 1\n"+
"string text line 2"
```
##### String interpolation

To embed expressions within strings you would normally do this:
```javascript
var width = 5;
var height = 15;
var string = "The area is " + (width * height);
//The area is 75
```
Now with template literals you can achieve the same effect with tidier code using the placeholder `${expression}`:
```javascript
var width = 5;
var height = 15;
var string = `The area is ${width * height}`;
//The area is 75
```
##### Tagged Template Literals

If the template literal is 'tagged' you can modify the output of it using a function.
The first argument will contain an array of strings, and the second and subsequent 
arguments will contain the values of the processed substitution expressions:
```javascript
//Note that the use of the function name tag here is arbitrary. Any function name can be used.
var width = 5;
var height = 15;

function tag(strings, ...values) {
    strings[0] === "Hello "
    strings[1] === " world "
    values[0] ===  20
    values[1] ===  75
  return `The area is ${width * height}`
}

tag`Hello ${ a + b } world ${ a * b }`;
// The area is 75
```
Tagged template literals have the `raw` property. This is available on their
first function argument and allows you to access the raw strings as they were entered:
```javascript
function tag(strings, ...values) {
    strings.raw[0] === "example string" 
}

tag`example string`;
```
A `String.raw()` method also exists, which can create raw strings just like the default
template function and string concatenation would create:
```javascript
var width = 5;
var height = 15;
String.raw`The area is ${width * height}!`;
// "The area is 75!"
```
#### Related

To be added here, or in separate readmes.

* Classes & Modules/ Module Loaders
* [Destructuring](http://codingforeveryone.foundersandcoders.org/JavaScript/array-methods-overview.html#destructuring)
* Enhanced Object literals
* For…of Operator
* Generators
* Map/ set & weakmap/ weakset
* New Built-in Methods
* Promises
* Proxies/ Reflections
* Symbols
* Typed Arrays
* Unicode

#### Resources

[Full specifications for ES6](http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations)

[List of ES6 Features with examples](http://es6-features.org/#MapDataStructure)

[Github Summary of ES6 Features](https://github.com/lukehoban/es6features#default--rest--spread)

[Arrow Functions — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

[Const — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const)

[Let — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let)

[Rest Parameters — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters)

[Spread Operator — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)

[Template Literals - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
