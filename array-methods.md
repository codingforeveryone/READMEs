# Arrays


## What is an Array

An array is a native JavaScript data structure, which is used for lists of things.


## Create an Array
```javascript

// Object instantiation
var a = new Array();                // []
var b = new Array(1, 2, 3);         // [1, 2, 3]

// Array literal
var c = [];                         // []
var d = [1, 2, 3];                  // [1, 2, 3]
```

Array literal notation is considered best practice. In most cases array literal and object instantiation perform the same, but see the first two answers to this [stack overflow question](http://stackoverflow.com/questions/931872/what-s-the-difference-between-array-and-while-declaring-a-javascript-ar) for some of the scenarios where the literal and the object instantiation are different.

## Arrays are a sub-type of Object
Arrays are a type of Object. ES2015 adds the method Array.isArray which makes type checking easier.
```javascript
typeof [];                        // 'object'
[] instanceof Object;             // true
[] instanceof Array;              // true
Array.isArray([]);                // true
```

## Accessing items in an Array
An array provides random access to the elements of the list via the items position (index) within the list. Index start at zero.

```javascript
var arr = ['a', 'b', 'c', 'd'];

arr[0];                             // 'a'
arr[1];                             // 'b'
```

## Arrays can be changed after creation
Arrays are mutable, like Objects. Unlike Numbers, Strings and Booleans.

```javascript
var arr = ['a', 'b', 'c', 'd'];

arr[0] = '1';      // Change an item: ['1', 'b', 'c', 'd']
arr[4] = 'e';      // Add an item:    ['1', 'b', 'c', 'd', 'e']
arr[6] = 'g';      // Items don't need to be consecutive:    ['1', 'b', 'c', 'd', 'e', , 'g']
```

Arrays provide some useful methods to add and delete values from an array.

``` Array.prototype.push(element1, ..., elementN) ``` adds one or more elements to the end of an array and returns new array length

``` Array.prototype.unshift(element1, ..., elementN) ``` adds one or more elements to the beginning of an array and returns new array length

``` Array.prototype.pop() ``` removes the last element from an array and returns it

``` Array.prototype.shift() ``` removes the first element from an array and returns it

```javascript
var arr = ['a', 'b', 'c', 'd'];

arr.push('e');    // Returns 5,   arr = ['a', 'b', 'c', 'd', 'e']
arr.pop();        // Returns 'e', arr = ['a', 'b', 'c', 'd']
arr.shift();      // Returns 'a', arr = ['b', 'c', 'd']
arr.unshift('a')  // Returns 4,   arr = ['a', 'b', 'c', 'd']
```

## Arrays are passed by reference
Arrays, like Objects, are passed by reference. Unlike Number, String and Boolean data types, which are passed by value.

```javascript

// Array passed by reference
var a = [1, 2, 3]
var b = a
b[3] = 4

a;        // [1, 2, 3, 4]

// Number passed by value
var c = 10;
var d = c;
d = 15;

c;       // 10
```

## Arrays and equality

Equality checks on arrays are checking if the array is the same object. Not if the contents of the array are the same.

```javascript
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = a;

a === b;      // false
a === c;      // true
```

## Getting part of an array

_By modifying the array (i.e. the original array is changed):_

```Array.prototype.splice(start, deleteCount, item1, ..., itemN)``` changes the content of an array by removing existing elements and/or adding new elements

```javascript
var a = ['a', 'b', 'c', 'd', 'e'];

// Remove elements with splice
var b = a.splice(1, 2);             // ['b', 'c']

a;                                  // ['a', 'd', 'e']

// Replace elements with splice
var c = a.splice(1, 2, 'b', 'c');   // ['d', 'e']

a;                                  // ['a', 'b', 'c']
```

_By copying the values (i.e. the original array is not changed)_

``` Array.prototype.slice([begin, [end]]) ``` returns a shallow copy of a portion of an array into a new array object.

```javascript
var a = ['a', 'b', 'c', 'd', 'e'];

var b = a.slice(1, 3); // ['b', 'c']

a;                     // ['a', 'b', 'c', 'd', 'e']
```

Remember, copies are shallow:

```javascript
var a = ['w', 'x'];
var b = ['v', a, 'y', 'z'];

var c = b.slice(1, 2);    //  [['w', 'x']]

c[0] === a;               //  true
```

Some other useful ways to use ``` Array.prototype.slice ```:

```javascript
var a = ['a', 'b', 'c', 'd', 'e'];

// Copy array
var aa = a.slice();       // ['a', 'b', 'c', 'd', 'e']

// Get all elements except the first
var b = a.slice(1);       // ['b', 'c', 'd', 'e']

// Get all the values except the last one
var c = a.slice(0, -1);   // ['a', 'b', 'c', 'd']
```
