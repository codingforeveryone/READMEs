# Array Methods Overview


## Introduction

An array is a native JavaScript data structure used for storing lists of things. Arrays are a type of [Object](/JavaScript/Objects.md).

```javascript
typeof [];                        // 'object'
[] instanceof Object;             // true
[] instanceof Array;              // true
Array.isArray([]);                // true
```
> ES2015 adds the method Array.isArray which makes type checking easier.

This README describes the nature of arrays, their behaviour, and Javascript's methods for manipulating them. We will begin with the basics of how to create, access, and modify arrays, before moving on to consider more complicated array methods, such as `map`, `reduce`, `filter`, `every`, `sum`, and `sort`. Finally, we shall examine some of the new array functionality offered by [ES2015](http://codingforeveryone.foundersandcoders.org/JavaScript/ECMAScript%206.html).

## Creating, Accessing and Modifying Arrays
### Creating an Array

Like other objects, arrays can be created via the object constructor method (object instantiation), or via literal notation. 

```javascript
// Object instantiation
var a = new Array();                // []
var b = new Array(1, 2, 3);         // [1, 2, 3]

// Array literal
var c = [];                         // []
var d = [1, 2, 3];                  // [1, 2, 3]
```

Array literal notation is considered best practice. In most cases, array literal and object instantiation perform equally efficiently, but see the first two answers to this [stack overflow question](http://stackoverflow.com/questions/931872/what-s-the-difference-between-array-and-while-declaring-a-javascript-ar) for some of the scenarios where the literal and the object instantiation are different.


### Accessing items in an Array
An array provides random access to the elements of the list via the item's position (index) within the list. Indexes start at zero.

```javascript
var arr = ['a', 'b', 'c', 'd'];

arr[0];                             // 'a'
arr[1];                             // 'b'
```

### Arrays can be changed after creation
Arrays are mutable, like other Objects, and unlike Numbers, Strings and Booleans.

```javascript
var arr = ['a', 'b', 'c', 'd'];

arr[0] = '1';      // Change an item: ['1', 'b', 'c', 'd']
arr[4] = 'e';      // Add an item:    ['1', 'b', 'c', 'd', 'e']
arr[6] = 'g';      // Items don't need to be consecutive:    ['1', 'b', 'c', 'd', 'e', , 'g']
```

Arrays provide some useful methods to add and delete values from an array:

+ ``` Array.prototype.push(element1, ..., elementN) ``` adds one or more elements to the end of an array and returns the new array length.

+ ``` Array.prototype.unshift(element1, ..., elementN) ``` adds one or more elements to the beginning of an array and returns the new array length.

+ ``` Array.prototype.pop() ``` removes the last element from an array and returns the element.

+ ``` Array.prototype.shift() ``` removes the first element from an array and returns the element.

```javascript
var arr = ['a', 'b', 'c', 'd'];

arr.push('e');    // Returns 5,   arr = ['a', 'b', 'c', 'd', 'e']
arr.unshift('a'); // Returns 4,   arr = ['a', 'b', 'c', 'd']
arr.pop();        // Returns 'e', arr = ['a', 'b', 'c', 'd']
arr.shift();      // Returns 'a', arr = ['b', 'c', 'd']
```

##Array Behaviour
### Arrays are passed by reference
In contrast to the primitive data types in JavaScript (Number, String and Boolean), which are passed by value, arrays, like Objects, are passed by reference. This means that when an array is assigned to more than one variable, changing either variable will change the original array (because the value of the array is not copied, but the variables are instead assigned a 'reference' to the array). By contrast, when a number is assigned to a second variable, it is copied, so that changing that variable changes the value of the copy, but leaves the original unchanged.

```javascript
// Array passed by reference
var a = [1, 2, 3];
var b = a;
b.push(4);

a;        // [1, 2, 3, 4]

// Number passed by value
var c = 10;
var d = c;
d = 15;

c;       // 10
```
###Consequences of passing by value
####Passing to functions
**Beware!** It's very easy to create a bug in your code if you forget that an array you have passed to a function is actually passed by value: anything that you do to the array within the function will also modify the array outside the function.
 
#### Checking equality

An equality check on a reference type checks if the values point to the same reference, so an equality check on an array will check if the two references point to the same array object. Two arrays can therefore hold the same value but not be evaluated as equal.

```javascript
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = a;

a === b;      // false
a === c;      // true
```

## Accessing arrays

###By modifying the array (the original array is changed)

```Array.prototype.splice(start, deleteCount, item1, ..., itemN)``` changes the content of an array by removing existing elements and/or adding new elements

```javascript
var a = ['a', 'b', 'c', 'd', 'e'];

// Remove elements with splice
a.splice(1, 2);                     // ['b', 'c']

a;                                  // ['a', 'd', 'e']

// Replace elements with splice
a.splice(1, 2, 'b', 'c');           // ['d', 'e']

a;                                  // ['a', 'b', 'c']
```

###By copying its values (the original array is not changed)

``` Array.prototype.slice([begin, [end]]) ``` returns a shallow copy of a portion of an array into a new array object. Note that copying stops at the index *before* that passed in the `end` parameter. If no end `end` parameter is passed, copying continues until the end of the array. Using a negative value as a parameter points to the sum of the array length and the negative value (i.e. starts counting from the end of the array).

```javascript
var a = ['a', 'b', 'c', 'd', 'e'];

a.slice(1, 3);         // ['b', 'c']

a.slice(1, -2);         // ['b', 'c']

a;                     // ['a', 'b', 'c', 'd', 'e']
```

Remember, copies are *shallow*. This means that only the primitive data types in the array are copied. Any arrays or objects nested within the copied array are still passed by value. 

```javascript
var a = ['w', 'x'];
var b = ['v', a, 'y'];   //['v', ['w', 'x'], 'y']

var c = b.slice(1, 2);   //  [['w', 'x']]

c[0] === a;              //  true
```
>A useful exercise is to write a function that will make a *deep* copy of an array, that is, copy an entire array, including all nested arrays, by value into a new variable, using loops and `Array.slice()`.

Some other useful ways to use ``` Array.prototype.slice ```:

```javascript
var a = ['a', 'b', 'c', 'd', 'e'];

// Copy entire array
var aa = a.slice();       // ['a', 'b', 'c', 'd', 'e']

// Get all elements except the first
var b = a.slice(1);       // ['b', 'c', 'd', 'e']

// Get all the values except the last one
var c = a.slice(0, -1);   // ['a', 'b', 'c', 'd']
```

### Traversing arrays

Often we want to do something to each value within an array. The simplest way to do this is with a for loop.

```javascript
var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
  console.log('Print ' + arr[i]);
}

// Outputs:
// Print 1
// Print 2
// Print 3
```

Or in ES2015, you can do:

```javascript
var arr = [1, 2, 3];

for (let val of arr) {
  console.log('Print ' + val);
}

// Outputs:
// Print 1
// Print 2
// Print 3
```

As traversing arrays is such a common task, there is a built-in Array method for doing so.

```Array.prototype.forEach(callback[, thisArg])``` executes the provided callback once for each element
present in the array in ascending order. It is not invoked for index properties that have been
deleted or are uninitialized (i.e. on sparse arrays).

The callback is a function which will be passed (i) the element value, (ii) the element index, (iii)
the array being traversed.

```javascript

var myArr = [1, 2, 3];

var myCallback = function (val, idx, arr) {
  console.log(val ' is item ' + idx + 'in array: ' + arr);
}

myArr.forEach(myCallback);

// Outputs:
// 1 is item 0 in [1, 2, 3]
// 2 is item 1 in [1, 2, 3]
// 3 is item 2 in [1, 2, 3]
```

Of course, you can also use an anonymous function:

```javascript
var myArr = [1, 2, 3];

myArr.forEach(function (val, idx, arr){
	console.log(val ' is item ' + idx + 'in array:' + arr); 
});
```

Which, with ES2015, can be written more succinctly with arrow functions:

```javascript
var myArray = [1, 2, 3];

myArr.forEach((val, idx, arr) => console.log(val ' is item ' + idx + 'in array:' + arr));
```

Because arrow functions work so well with array methods which take functions, we will use them from here on.

## More exotic array methods
###Map and reduce

Often we want to traverse arrays because we want to manipulate the data in the array. JavaScript
provides a number of methods which apply a function to each value, returning a new result.

The first array manipulation method to look at is ```Array.prototype.map(callback[, thisArg])```. See the
[definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) for full description.
This method applies the callback to each value and returns a new array (so does not change the
original array).

```javascript
var arr = [1, 2, 3];

arr.map(v => v + 1);  // [2, 3, 4]

arr;                  // [1, 2, 3]
```

The second array manipulation method to look at is ```Array.prototype.reduce(callback[, initialValue])```. See the
[definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
for full description. This applies a function to each value and collects the results into a new value.

The most common example used for reduce is summing values in an array, which could work like this:

```javascript
var arr = [1, 2, 3];

arr.reduce((prev, crnt) => prev + crnt);  // 6
```

However, one thing worth noting about ``` Array.prototype.reduce ``` is that it can be used to
implement a lot of other Array manipulation methods, such as ``` Array.prototype.map ```, ```
Array.prototype.filter ```, ```Array.prototype.some``` and ```Array.prototype.every```. For example,
here's how a map function could be implemented using ```Array.prototype.reduce```:

```javascript
function arrayMap(myArr, callback) {
  return myArr.reduce((acc, crnt) => acc.concat(callback(crnt)), []);
}

var arr = [1, 2, 3];

arrayMap(arr, v => v + 1);    // [2, 3, 4]
```

### More array manipulation methods

In addition to map and reduce, JavaScript provides various other array manipulation methods, all of
which work in a similar way to `forEach` `map` and `reduce` (i.e. they take a callback
which is applied to each element in the array). Next we'll have a look at some of the most useful
and also implement them using ```reduce```.

#### Filter
```Array.prototype.filter(callback[, thisArg])``` filters out all elements which return a falsy
value when called with the callback. See the [definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Whilst not strictly required, for the purposes of clarity, the callback should return a Boolean.

```javascript
var arr = [10, 15, 18, 30];

arr.filter(v => v % 5 === 0);   // [10, 15, 30];
```

`filter` implemented with ```reduce```:

```javascript
function filter(myArr, callback) {
  return myArr.reduce((acc, crnt) => callback(crnt) ? acc.concat(crnt) : acc, []);
}

var arr = [10, 15, 18, 30];

filter(arr, v => v % 5 === 0);  // [10, 15, 30]
```

#### Every
```Array.prototype.every(callback[, thisArg])``` returns true if all elements return a truthy value when called with the callback. See the [definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every). Like `filter`, for the purposes of clarity, the callback should return a Boolean.

```javascript
var arr1 = [10, 15, 20];
var arr2 = [10, 15, 18, 20];

arr1.every(v => v % 5 === 0);  // true
arr2.every(v => v % 5 === 0);  // false
```

`every` implemented with `reduce`:

```javascript
function every(myArr, callback) {
  return myArr.reduce((acc, crnt) => acc && callback(crnt), true);
}

var arr1 = [10, 15, 20];
var arr2 = [10, 15, 18, 20];

every(arr1, v => v % 5 === 0);  // true
every(arr2, v => v % 5 === 0);  // false
```

#### Some

```Array.protoype.some(callback[, thisArg)``` returns true if any element returns a truthy value
when called with the callback. See the [definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
As for `filter` and `every`, the callback should return a Boolean.

```javascript
var arr1 = [10, 15, 20];
var arr2 = [10, 15, 18, 20];
var arr3 = [4, 9, 13, 27];

arr1.some(v => v % 5 === 0);  // true
arr2.some(v => v % 5 === 0);  // true
arr3.some(v => v % 5 === 0);  // false
```

`some` implemented with `reduce`:

```javascript
function some(myArr, callback) {
  return myArr.reduce((acc, crnt) => acc || callback(crnt), false);
}

var arr1 = [10, 15, 20];
var arr2 = [10, 15, 18, 20];
var arr3 = [4, 9, 13, 27];

some(arr1, v => v % 5 === 0);  // true
some(arr2, v => v % 5 === 0);  // true
some(arr3, v => v % 5 === 0);  // false
```

#### Sort

Sorting algorithms are hard. In fact there's almost a whole [Khan Academy course](https://www.khanacademy.org/computing/computer-science/algorithms) on the subject. Whilst this is all very interesting, it's a lot to learn just to put some values into order. Fortunately arrays have a built in sort method:

```Array.prototype.sort([compareFunction])``` (see [definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)).

An important thing to note about ```Array.prototype.sort``` is that it sorts <u>in place</u>, which means the original array is changed. If you need to keep the original array, then you should make a copy of the original before sorting (see the description of `Array.prototype.slice` above for a way to make a copy).

By default, elements are converted to strings and then compared in Unicode point order (i.e. the order of the numerical representation of the characters in [Unicode](https://en.wikipedia.org/wiki/List_of_Unicode_characters)). This means sort is great for lists of strings:

```javascript
var arr = ['orange', 'kiwi', 'apple', 'pear', 'banana'];

var sortedArr = arr.sort(['orange', 'kiwi', 'apple', 'pear', 'banana']);  // ['apple', 'banana', 'pear', 'kiwi', 'orange']

sortedArr === arr;    // true
```

This doesn't work so well for numbers:

```javascript
var arr = [4, 2, 5, 7, 9, 11, 80];

arr.sort();   // [ 11, 2, 4, 5, 7, 80, 9 ]
```

This is where the compare function comes in. The compare function provides information to the sort method on how to sort the elements in the array. It takes in two values (lets call them ```a``` and ```b```) and returns a Number, which should be:

- <b>0</b> if the sort order of ```a``` and ```b``` should remain unchanged
- <b>less than 0</b> if ```a``` should have a lower sort index than ```b```
- <b>more than 0</b> if ```b``` should have a lower sort index than ```a```

Therefore to sort numbers in ascending order we can do:

```javascript
var arr = [ 11, 2, 4, 5, 7, 80, 9 ];

arr.sort((a, b) => a - b) //  [ 2, 4, 5, 7, 9, 11, 80 ]
```

And to sort in descending order:

```javascript
var arr = [ 11, 2, 4, 5, 7, 80, 9 ];

arr.sort((a, b) => b - a) //  [ 80, 11, 9, 7, 5, 4, 2 ]
```

#### Reverse

A method that fits well with sorting is reversing. For example, if you want to sort a list in reverse alphabetical order, you could write a compare function to do this in one step, but an easier solution (although not necessarily better), would be to first sort alphabetically and then reverse.

```Array.prototype.reverse()``` does this.  It worth noting that, like ```Array.prototype.sort```, ```reverse``` sorts in place.

```javascript
var arr = ['orange', 'kiwi', 'apple', 'pear', 'banana'];

arr.sort().reverse();     //  [ 'pear', 'orange', 'kiwi', 'banana', 'apple' ]
```

##Arrays in ES2015 (ES6) 
### Spread operator

ES2015 provides the new spread operator, which allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected (see [description](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)). As a side note, there is also the [rest operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters) which has the same syntax, so is worth looking at in order to understand the difference.

This can be used to combine arrays:

```javascript
var arr1 = [1, 2, 3];

var arr2 = [4, 5, 6];

var arr3 = [...arr1, ...arr2];   // [1, 2, 3, 4, 5, 6]

var arr4 = [...arr3, 7, 8, 9];  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```


### Destructuring

Another ES2015 feature which works well with the spread operator is destructuring assignment ([see description](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)). The destructuring assignment syntax makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals. So it can be combined with the spread operator to extract values like this:

```javascript
var [head, ...tail] = [1, 2, 3, 4, 5];

head;     // 1
tail;     // [2, 3, 4, 5]
```

##Related
[Objects](http://codingforeveryone.foundersandcoders.org/JavaScript/Objects.html)

[Array.reduce()](http://codingforeveryone.foundersandcoders.org/JavaScript/array-reduce.html)

[Array.map()](http://codingforeveryone.foundersandcoders.org/JavaScript/array-map.html)

[ECMAScript 6](http://codingforeveryone.foundersandcoders.org/JavaScript/ECMAScript%206.html)

##References

+ See [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) in the MDN, with a much fuller list of array methods.
