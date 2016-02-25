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
**`Math.sqrt(x)`** - Returns the square root of number `x`.
```javascript
Math.sqrt(16) // 4
```
**`Math.exp(x)`** -Returns the value of E^x, where E is Euler's number (approximately 2.7183) and `x` is the number passed to it.
```javascript
Math.exp(1) // 2.718281828459045
```
**`Math.log(x)`** -Returns the natural logarithm (base E) of number `x`.
```javascript
Math.log(2) // 0.6931471805599453
```

## Trigonometry 

Trigonometry is a branch of mathematics that studies relationships involving lengths and angles of triangles. See more [here](Trigonometry (https://en.wikipedia.org/wiki/Trigonometry).

**`Math.sin(x)` & `Math.cos(x)`** - Returns the sine/cosine of angle `x` (**in radians not degrees!**). 
```javascript
Math.sin(3) // 0.1411200080598672
Math.cos(3) // -0.9899924966004454
```
Both methods return a value between -1 and 1. For more information on Sine & Cosine see [here](https://en.wikipedia.org/wiki/Sine).

**`Math.asin(x)` & `Math.acos(x)`** - Returns the arcsine/arccosine of number `x`. 
```javascript
Math.asin(0.5) // 0.5235987755982989
Math.acos(0.5) // 1.0471975511965979
```
The `asin()` method returns the arcsine of a number as a value between -PI/2 and PI/2 radians. The `acos()` method returns the arccosine of a number as a value value between 0 and PI radians. If the parameter `x` is outside the range -1 to 1, the method will return NaN. For more information on arcsine & arccosine see [here](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions).

