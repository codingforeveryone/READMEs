#Modulo
Modulo is one of the many Javascript operators. 

It is represented by the `%` symbol and it evaluates the remainder of a division.

E.g., six fits entirely into 15 twice, with three left over (the remainder).

###Example 1

```javascript
var result = 11 % 3;

console.log(result); //prints 2
```

`3` goes into `11` in its entirety, _three_ times (3 &times; 3 = 9). This leaves a remainder of two. Making `result` equal `2` (11 - 9 = 2).

![Remainder of division](/images/remainder.png)

###Example 2

```javascript
var resultTwo = 25 % 3.5;
```

In this example `resultTwo` equals `0.5` as `3.5` goes into `25` _seven_ times (3.5 &times; 7 = 24.5), leaving a remainder of `0.5`.

##Katas

Here is a kata I created to practise using modulo:

[Paperboy](http://www.codewars.com/kata/56ed5f13c4e5d6c5b3000745)

Here are some example katas that can be solved with the modulo operator:

[Fizz Buzz](http://www.codewars.com/kata/5300901726d12b80e8000498)

[Normalizing out of range array indexes](http://www.codewars.com/kata/5285bf61f8fc1b181700024c)

##Other Important Uses

The modulo operator can be used in a number of other useful cases:

You can use it to test whether an integer is odd or even:

```javascript
function oddOrEven(n) {
 if (n % 2 === 0) return "even"
 if (n % 2 === 1) return "odd"
}
```
Or whether a number is an integer:

```javascript
function isInteger(n) {
 if (n % 1 === 0) return "Integer"
 if (n % 1 !== 0) return "Not Integer"
}
```

In, for example, prime number generation it can be used to test whether a candidate integer y has a divisor x:

```javascript
function isDivisor(y, x) {
 if (y % x !== 0) return "Not divisor"
 if (y % x === 0) return "Divisor"
}
```

##Documentation

Here's a link to the documentation of the modulo operator:

[Remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder)


 
 
