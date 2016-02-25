## JavaScript Math Object
The Math object allows you to perform mathematical tasks on numbers. Below is a beginners guide to the syntax and methods available.

*Math is not a constructor. All properties/methods of Math can be called by using Math as an object, without creating it.*

## Finding Integers

**`Math.round()`** - Round a number to the nearest integer.
```javascript
Math.round(2.5); // 3
```
**`Math.floor()`** - Round a number downward to its nearest integer.
```javascript
Math.floor(1.6); // 1
```
**`Math.ceil()`** - Round a number upward to it's nearest integer.
```javascript
Math.ceil(1.4) // 2
```
**`Math.max()`** - Return the number with the highest value from one or more numbers. Syntax `Math.max(n1,n2,n3,...,nX)`.
```javascript
Math.max(14, 10, 5, 20) // 20
```
**`Math.min()`** - Return the number with the lowest value from one or more numbers. Syntax `Math.min(n1,n2,n3,...,nX)`.
```javascript
Math.max(14, 10, 5, 20) // 5
```

## Random Numbers

**`Math.random()`** - Returns a random number between 0 (included) and 1 (excluded). 
```javascript
Math.random() // e.g 0.39622215856797993
```
Commonly used in tandem with `Math.round()` for generating random tests cases for Codewars. See [Random Test Cases for Complete Beginners](https://github.com/codingforeveryone/READMEs/blob/master/random-test-cases-for-complete-beginners.md).

## Exponentiation

The process of using exponents is called "raising to a power", where the exponent is the "power".

**`Math.pow(x, y)`** - Return the value of the number `x` to be the power of `y`.
```javascript
Math.pow(5, 4) // 625
```
**`Math.pow(x, y)`** - Return the value of the number `x` to be the power of `y`. (`x`^`y`)
```javascript
Math.pow(5, 4) // 625
```



