#String `replace()` Method

###Introduction

Sometimes in JavaScript we may want to replace all or part of a string with something else. We can do this with the `replace()` method, which searches a string for a specified pattern, and returns a new string that has had the matches substituted with a replacement.

###Syntax

The syntax of the `replace()` method is as follows:

``` javascript
str.replace(regexp|substr, newSubStr|function)
```

In other words, the pattern can be either a regular expression or a specific string, and the replacement can be either a string or a function.

Note that `replace()` does **not** change the original string.

###Simple strings

In this example, we replace a specific string ('yellow') with a replacement string ('red'):

```javascript
var greeting = 'Hello, do you like yellow?';
var myString = greeting.replace('yellow', 'red');

console.log (myString);
// 'Hello, do you like red?'
```

###Specifying a string as a parameter

The replacement string can include a number of replacement patterns:

Pattern | Effect
--- | --- | ---
$& | Inserts the matched substring
$` | Inserts the portion of the string that precedes the matched substring
$' | Inserts the portion of the string that follows the matched substring

Note that the special character `$` can be escaped using `$$`.

Example:

```javascript
var greeting = 'Hello, do you like yellow?';
var myString = greeting.replace('yellow', 'the colour $&');

console.log (myString);
// 'Hello, do you like the colour yellow?'
```

###Regular expressions

Using `replace()` with specific strings, we can only replace a single occurrence of the target string, and we cannot match in a case-independent manner. Both of these shortcomings can be solved using regular expressions.

```javascript
var sentence = 'I do like yellow; YELLOW is my favourite colour.';
var myString = sentence.replace(/yellow/gi, 'red');

console.log (myString)
// 'I do like red; red is my favourite colour.'
```

Regular expressions allow more sophisticated replacements. In the following example, we replace each 'inner' character of each word with an asterisk.

```javascript
var sentence = 'Hello, do you like yellow?';
var myString = sentence.replace(/\B.\B/g, '*');

console.log (myString);
// 'H***o, do y*u l**e y****w?'
```

###Using captured groups

In the case of regular expressions, different portions of the matched pattern can be referred to using replacement patterns. The notation here is `$n` or `$nm`, where `n` and `nm` are decimal digits and refer to the `n`th (or `nm`th) captured group (submatch) in the regular expression.

In the following example, we use replacement patterns to swap the words 'you' and 'do':

```javascript
var sentence = 'Hello, you do like yellow?';
var myString = sentence.replace(/(you)\s(do)/, '$2 $1');

console.log (myString);
// 'Hello, do you like yellow?'
```

###Using inline functions

In addition to using a specific string or a replacement pattern, the second parameter of the `replace()` method can also be a function. In this case, the function's return value will be used as the replacement string. This allows the `replace()` method to be integrated with various other JavaScript features, and can be very powerful.

The function takes in the following arguments:

Name | Supplied value
--- | --- | ---
match | The matched substring
p1, p2 etc. | The nth captured group (submatch)
offset | The offset of the matched substring
string | The whole string being examined

In the following example, we use an inline function to implement the method `.toLowerCase` within a call to `replace()`. We apply the method to all the characters except for the first character in the string, by specifying an appropriate regular expression:

```javascript
var sentence = 'HELLO, DO YOU LIKE YELLOW?';
var myString = sentence.replace(/(?!^).*/, x => x.toLowerCase());

console.log (myString);
// 'Hello, do you like yellow?'
```

###Related
- [String dissection and manipulation](string-dissection-and-manipulation.md)
- [Regular Expression Beginners' Guide](regular-expressions-beginners-guide.md)

###References

- [W3Schools](http://www.w3schools.com/jsref/jsref_replace.asp)
- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Using string replace in Javascript](https://davidwalsh.name/string-replace-javascript)
