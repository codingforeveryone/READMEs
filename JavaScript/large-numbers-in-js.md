## Arithmetic with large Numbers in JS

#### Intro

Consciously or otherwise, we rely heavily on large numbers in our every day lives.  Through their prevalence in [current encryption methods](https://www.youtube.com/watch?v=M7kEpw1tn50), they have become central to our well-being: as we increasingly place our personal information in the digital realm, we become ever more reliant upon them.  Applications of cryptography include ATM cards, computer passwords and broadcast encryption, amongst a host of others.  The ability to maintain precision whilst handling large numbers is therefore vital to our safety, security and ultimately freedom of expression.

<!--![Caesar Cipher](https://upload.wikimedia.org/wikipedia/commons/4/4a/Caesar_cipher_left_shift_of_3.svg)-->

<img style="margin:0px auto;display:block" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Caesar_cipher_left_shift_of_3.svg" width=70% align="middle"/>

#### Large Numbers in JS

As specified by the [ECMAScript standard](http://www.ecma-international.org/ecma-262/5.1/#sec-8.5), all arithmetic operations in JavaScript are done using double-precision floating-point arithmetic.  The "floating-point" format allows for a trade off between precision and range: a number is approximated to a fixed amount of "significant digits" (called the _Significand_) which is then scaled by an exponent.  Given a certain total amount of digits to play with, the decimal point (or binary point in computing) can "float" relative to the Significand, increasing the range of real numbers that can be represented.  Essentially, "floating-point" is a formulaic representation of a real number.  It occupies 64 bits of computer memory.  

This system has its limitations.  The binary floating-point format used by JS (binary64) has a standard specification:

* **Sign bit**: 1 bit

* **Exponent**: 11 bits

* **Significand precision**: 53 bits

Crucially, this gives us 15-17 significant decimal digits worth of precision.

For example:
```javascript
console.log(999999999999999) // 999999999999999
console.log(9999999999999999) // 10000000000000000

```

But what if we want to perform calculations on number strings with a larger number of digits?  Our real integer values will no longer be precisely represented by the number format and will suffer from rounding errors.

This is analogous to overflow: an inherent limitation of fixed-precision arithmetic.  Consider trying to add 1 more unit to a 4-digit Odometer's display which currently reads 9999, rather than incrementing up to 10,000, it would reset to 0000.  Similarly, a fixed-precision integer sometimes exhibits wraparound if the numbers involved grow too large to be represented at the fixed level of precision. Some processors overcome this problem via saturation (if a result can't be represented, it is replaced with the nearest representable value).

But what about circumstances where we need to avoid overflow and saturation?  The 53 bit limit becomes an issue whenever an API returns 64 bit numbers.  For example, the Twitter API encodes tweets in JSON as follows:

    > {"id": 10765432100123456789, "id_str": "10765432100123456789", ...}

The Twitter IDs detailed above are 64 bits long.  JSON is a text format (so it can represent integers of arbitrary size) but precision will be lost in JavaScript when the ID is parsed:

    > parseInt("10765432100123456789")
      10765432100123458000

Therefore to retain the precise value of an ID in JavaScript, it needs to be stored in a string or an array.

#### Workaround for Addition

How can we perform basic operations on Large Numbers in JS?  Here is a quick guide to one possible approach to performing addition (which incidentally may help in the Kata linked below):

First of all, we need our two numbers stored in arrays, allowing us to maintain precision.  Next, we need to ensure we allow for place value when combining our two arrays.  We do this by reversing the arrays.  This way, a[0] and b[0] are the least significant digits in their respective arrays and the place value is the same for both.  Now we can loop through the arrays, adding each matching pair.  But what if a pair sums to greater than 10?  We then need to store 1 in a 'carry' variable which can then be added during the next iteration where the place value has increased by a factor of 10 (so our 1 is now worth 10).  Also, if there's a 'carry' left over at the end, we need to add that too.  This method follows the same principle as basic addition with pen and paper!

```JavaScript

var a = []; // Your 1st number
var b = []; // Your 2nd number
var c = []; // Store the result in c
var carry = 0;                   // Declare carry variable
for (var i = 0; i < a.length; i++) {

    c[i] = a[i] + b[i] + carry;

    if(c[i] >= 10) { // Sum too large to fit into this place value
        carry = 1;           // Set carry value to be added into the next digit
        c[i] -= 10;   
    }
    else {
        carry = 0;           // Sum was less than 10, so there's nothing to carry forward
    }
}
if (carry) { // Add the final carry if necessary
    c[i] = carry;
}

```
#### Related

No doubt there are other approaches to adding Large Numbers together.  There is definitely scope for this article to be extended, both in terms of types of Operations and in terms of describing alternative methods for handling Large Numbers.  There is also potential to discuss and explore further real world Large Number applications.  Related topics include:

* Cryptography
* Privacy vs Security
* Using JavaScript libraries for arbitrary-precision decimal and non-decimal arithmetic

#### References

[Floating Point](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)

[Twitter Example](http://www.2ality.com/2012/07/large-integers.html)

[Twitter Dev Documentation](https://dev.twitter.com/overview/api/twitter-ids-json-and-snowflake)

[Arithmetic Operations](https://silentmatt.com/blog/2011/10/how-bigintegers-work/)

[A relevant Kata](https://www.codewars.com/kata/sum-strings-as-numbers)
