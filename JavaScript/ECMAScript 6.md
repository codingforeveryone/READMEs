## ECMAScript 6

#### Introduction

ECMAScript (or ES) is the standardised scripting-language specification that Javascript is based upon. The current version of Javascript that is supported in modern browsers is ES5, which was published in 2009. ES6 was finalised in June 2015. Browser support for ES6 is still incomplete but [in progress](https://kangax.github.io/compat-table/es6/), and so it will become increasingly important to learn.

If you would like to play around with ES6, [repl.it](https://repl.it/languages/javascript) is a great online code editor that fully supports ES6. To set up ES6 compiling in your editor or build system of choice, we recommend installing the [Babel compiler](https://babeljs.io/).

ES6 is purely additive to Javascript but it is a significant and extensive upgrade. This readme will introduce you to a few of the new main features.

#### Features covered:

* [Arrow Functions](#arrow-functions)
* [Block-Scoping](#block-scoping)
* [Constants](#constants)
* [For-of statement](#for-of-statement)
* [Maps](#maps)
* [Sets](#sets)
* [WeakMaps and WeakSets](#weakmaps-and-weaksets)
* [Extended Parameter Handling](#extended-parameter-handling)
* [Binary and Octal Literals](#binary-and-octal-literals)
* [Template Literals](#template-literals)
* [Destructuring](#destructuring)

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
The other main reason for introducing arrow functions is that they share the same lexical `this` as their surrounding code. Standard functions define their own `this` value, which makes arrow functions the more intuitive option in handling object contexts:
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
#### Block scoping

In ES5, variables are either globally or locally function scoped. In other languages like C/C#/Java it is also possible to block scope variables. ES6 enables this feature for Javascript.

Block scope variables can be achieved through the use of the new keyword `let`. For most practical purposes `let` works like the `var` keyword, with the exception that `let` variables have as their scope the code block in which they are defined. `var` variables in contrast have as their scope their entire enclosing function:
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
You can also use `let` to block scope functions:
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

Constants can be declared through the keyword `const` and must be assigned a value in the same declaration statement. `Const`, like `let`, is block scoped, and cannot share its name with a function or variable in the same scope.
```javascript
//The common convention with constants is to use all uppercase when declaring them.

const FOO; // fails: missing = in declaration

const HELLO_WORLD = “Hello World!”; // console.log(HELLO_WORLD) will print “Hello World!”

HELLO_WORLD = “Goodbye World!”; // fails: cannot be re-assigned a value

const HELLO_WORLD = “Goodbye World!”; // fails: cannot be redeclared

var HELLO_WORLD = “Hello World!”; // fails: name is reserved for constant
```

It is important to note that whilst the _assignment_ of constants is immutable, the value of a constant can still change. In the following example, `FOO` is assigned an empty object, but the properties of the object can still be altered:

```javascript
const FOO = {};
FOO.bar = 42;
console.log(FOO.bar);
// 42
```

#### For-of statement

The `for-of` statement is a new way of iterating over iterable objects, including Array, Map, Set and String.
The following syntax is used:
```javascript
for (variable of iterable) {
  statement
}
```

The `for-of` loop is significantly more concise than the traditional `for` loop:

```javascript
var fruitArray = ['orange', 'apple', 'banana'];

// for-of loop
for (let fruit of fruitArray) {
  console.log (fruit);
}

// traditional for loop
for (var i = 0; i < fruitArray.length; i++) {
  console.log (fruitArray[i]);
}

// 'orange'
// 'apple'
// 'banana'
```

This approach is also more versatile than the `forEach` method, which does not allow breaking out of the loop or returning from an enclosing function.

Importantly, the `for-of` loop is not the same as the `for-in` loop.
The `for-in` loop works on any object, and loops over the names of the object's properties.
In contrast, the `for-of` loop works only on iterable objects (i.e. collections), and is for looping over data.

#### Maps

Maps are data structures for storing key-value pairs. Any value, including objects and primitive values, can be used as either a key or a value.

Mapping in JavaScript has traditionally been done using Objects, an approach that has several shortcomings compared to using maps:
- Objects have prototypes, and thus default keys
- The keys of an object can only be strings or symbols
- Tracking the size of an object is not as straight-forward as with maps

Refer to the [MDN article on maps](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map) for a more thorough guide on when maps versus objects should be used.

A map can be set up using an iterable object such as an Array, whose elements are key-value pairs (2-element arrays):

```javascript
let map = new Map ([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);
```

Values can be set using `set(key, value)` and retrieved using `get(key)`:

```javascript
map.set (4, 'four');
map.get (4);
// console.log prints 'four'
```

To iterate over a map, we can use the new `for-of` loop structure. Method `entries()` iterates over key-value pairs, whereas methods `keys()` and `values()` iterate over keys and values, respectively. The elements are iterated in their order of insertion.

```javascript
for (let [key, value] of map.entries()) {
  console.log (key, value);
}
// 1, 'one'
// 2, 'two'
// etc.

for (let key of map.keys()) {
   console.log (key);
}
// 1
// 2
// etc.

for (let value of map.values()) {
   console.log (value);
}
// 'one'
// 'two'
// etc.
```

Other useful map methods include:
- `size` counts the number of entries in the map
- `has(key)` checks whether the given key exists in the map
- `delete(key)` deletes a specific entry from the map
- `clear()` removes all entries from the map

The `map()` and `filter()` methods cannot be used on maps, however, it is possible to convert a map into an array of [key, value] pairs, and apply the `map()` or `filter()` method to the resulting array.

#### Sets

Sets are used for storing _unique_ values of any type, either primitive values or objects. This has traditionally been done using the keys of an object, or by storing arbitrary set elements in an array.

A set can be created by passing an array to its constructor:

```javascript
let set = new Set (['red', 'green', 'blue']);
```

To iterate over a set in insertion order, the `for-of` loop can be used:
```javascript
for (let value of set) {
  console.log (value);
}
// 'red'
// 'green'
// 'blue'
```

It is important to note that sets do not allow duplicates to be added:
```javascript
let set = new Set(1,2,3,3,3);
console.log (set.size);
// 3
```

The methods that can be applied to sets include `add()`, `has()`, `delete()` and `clear()`.

#### WeakMaps and WeakSets

WeakMaps and WeakSets are variants of Maps and Sets that do not prevent their keys from being 'garbage-collected'. This means that, if an object is destroyed, its corresponding entry is removed from the WeakMap or WeakSet, and the memory is freed.

Keys of WeakMaps and WeakSets must be objects, but the values of WeakMaps can be arbitrary values. The API of a WeakMap includes `get()`, `set()`, `has()` and `delete()` methods, whereas the one of a WeakSet includes `add()`, `has()` and `delete()` methods.

It is not possible to iterate over WeakMaps and WeakSets, or to determine their `size`.

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

#### Binary and Octal Literals

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

#### Destructuring

Destructuring is a way of extracting data stored in objects and arrays into distinct variables according to a specified pattern. It can be used in locations that receive data, such as the left-hand sides of assignments or when handling return values from functions.

##### Syntax

```javascript
var foo, bar;
[foo, bar] = [1, 2];
console.log(foo); // 1
console.log(bar); // 2

var rest;
[foo, bar, ...rest] = [1, 2, 3, 4, 5];
console.log(foo); // 1
console.log(bar); // 2
console.log(rest); // [3, 4, 5]

({foo, bar} = {foo:1, bar:2})
console.log(foo); // 1
console.log(bar); // 2
```

##### Description

Destructuring assignments use a similar syntax to objects and arrays. Instead of using the syntax to package data into an object or array, however, they are used to define which elements to extract from a source variable.

##### Destructuring arrays
Variables can be assigned values via destructuring either at declaration or at a later point. Variables in a deconstruction assignment can also be assigned default values, in case the value pulled from the array is `undefined`. And by omitting a variable name, it is possible to ignore return values that you're not interested in.

```javascript
var baz = [1, 2, 3, 4, 5];
var [foo, bar] = baz;
console.log(foo); // 1
console.log(bar); // 2

var foo, bar;
[foo, bar] = [1, 2];
console.log(foo); // 1
console.log(bar); // 2

var a, b;
[a=4, b=6] = [1];
console.log(a); // 1
console.log(b); // 6

function f() { return [1, 2, 3] };
var [x, , y] = f();
console.log(x); // 1
console.log(y); // 3
```

Destructuring expressions can be used to swap the values of two variables without the use of a temporary variable:

```javascript
var foo = 1;
var bar = 2;

[foo, bar] = [bar, foo];
console.log(foo); // 2
console.log(bar); // 1
```

Destructuring can also be used to simplify the handling of arrays returned from functions:

```javascript
function f() { return [1, 2]; }
var [a, b] = f();
console.log(foo); // 1
console.log(bar); // 2
```

##### Destructuring objects
As with arrays, destructuring objects can be used to assign values to variables either at declaration or separately, and variables can be assigned a default in case the pulled value is `undefined`. However, when assigning a value to a variable separate from its declaration, it is necessary to wrap the assignment statement in brackets - otherwise, the assignment statement will be interpreted as a block.

```javascript
var baz = {foo: 12, bar: true};
var {foo, bar} = baz;
console.log(foo); // 12
console.log(bar); // true

var x, y;
({x, y} = {x:1, y:2});
console.log(x); // 1
console.log(y); // 2

var {a=3, b=7} = {a: 1};
console.log(a); // 1
console.log(b); // 7
```

Destructuring expressions can also be used to extract variables from an object and assign them to variables with a different name than the original property:

```javascript
var baz = {foo: 12, bar: true};
var {foo: a, bar: b} = baz;
console.log(a); // 12
console.log(b); // true  
```

#### Related

To be added here, or in separate readmes.

* Classes & Modules / Module Loaders
* Enhanced Object literals
* Generators
* New Built-in Methods
* Promises
* Proxies / Reflections
* Symbols
* Typed Arrays
* Unicode

#### Resources

[Full specifications for ES6](http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations)

[List of ES6 Features with examples](http://es6-features.org/#MapDataStructure)

[Github Summary of ES6 Features](https://github.com/lukehoban/es6features#default--rest--spread)

[ES6 Interactive Guide & Tutorial](http://stack.formidable.com/es6-interactive-guide/#/)

[Arrow Functions — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

[Let — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let)

[Const — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const)

[For...of - MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of)

[Map - MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map)

[Set - MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set)

[Rest Parameters — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters)

[Spread Operator — MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)

[Template Literals - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

[Destructuring assignment - MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
