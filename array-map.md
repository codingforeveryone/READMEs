# Array `map()` method

The `map()` method creates a new array, without altering the original, by applying a function to each element of the array. The transformation (or processing) is done by a callback function, which is specified as the first parameter of the method. Higher-order functions such as `map()`, `reduce()` or `filter()` are an shorter, more readable alternative to iterating through an array with a loop.

## Example

Let's see one of the examples on the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Assume that you have an array `[1, 4, 9]` and you want to create a new array containing the square roots of the numbers in the array.

It is possible to loop through the array and construct a new array as shown below:

```javascript
var numbers = [1, 4, 9];
var roots = [];

for (var i = 0; i < numbers.length; i++) {
  roots.push(Math.sqrt(numbers[i]));
}
console.log(roots);
// [1, 2, 3]
```

However, by using the `map()` method, you can write the same operation as shown below:

```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots);
// [1, 2, 3]
```

This is much more concise.

## Callback function

In this example, the callback function is `Math.sqrt()`, which takes a number as a parameter and returns the square root of the number. The `map()` method applies this callback function to each of the elements in the array (`numbers`) and returns an array containing the result of the callback function.

![map() method](images/Array.map.png)

Often an anonymous function is used as a callback function. Just to illustrate the point, the same example can be written as shown below:

```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(function(n) {
  return Math.sqrt(n);
});
console.log(roots);
// [1, 2, 3]
```

In this example, the callback function is an anonymous function and each element of the array is passed to the function as a parameter (`n`). The function returns the result of `Math.sqrt` of the parameter, and the `map()` method returns an array containing the output of the callback function.

## Parameters of the callback function

The callback function can actually take 3 parameters. The first parameter is an element of the array, as in the example above. The second and the third parameters are the index of the element in the array and the array itself. So, the example above can also be written as shown below. The additional parameters are not particularly useful in this case, so the values are just displayed using `console.log`.

```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(function(n, i, arr) {
  console.log('n = ' + n + ', i = ' + i + ', arr = ' + arr);
  return Math.sqrt(n);
});
console.log(roots);
//n = 1, i = 0, arr = 1,4,9
//n = 4, i = 1, arr = 1,4,9
//n = 9, i = 2, arr = 1,4,9
//[1, 2, 3]
```

## The second parameter of the `map()` method

The `map()` method can take two parameters. The first parameter is a callback function, as we've seen above. The second parameter is optional and it is the value to be used as `this` in the callback function. When the second parameter is not specified, the default value of `this` is the `Window` object.

To illustrate how this parameter works, the same example can be rewritten as shown below:

```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(function(n) {
  return this.sqrt(n);
}, Math);
console.log(roots);
// [1, 2, 3]
```

As you can see, `Math` is specified as the second parameter, which is used as `this` in the callback function. (This is just an example of the usage and obviously there is not much point in using it in a simple case like this.)

## Points to remember

- The `map()` method returns a new array and the original array is not modified.
- The `map()` method takes a callback function as a parameter, and the optional second parameter to be used as `this` in the callback function.
- The callback function takes 3 parameters, the element of the array, the index of the element and the array itself.

## Further reading

- [Array.prototype.map() – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [From Map/Reduce to JavaScript Functional Programming](https://hacks.mozilla.org/2015/01/from-mapreduce-to-javascript-functional-programming/)
- [Eloquent Javascript Chapter 5 - Chapter 5 Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html)
- [Codecademy Advanced Array manipulation](https://www.codecademy.com/courses/javascript-advanced-en-eQcHT/0/1)








