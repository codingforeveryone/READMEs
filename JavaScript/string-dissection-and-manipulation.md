#String Dissection And Manipulation
This tutorial covers dissecting, searching and splitting strings. Javascript provides us with many built in methods for working on string objects. In this tutorial we will go through each one of them.

##String Character Methods

#### 1. `charAt()`: access a specific character
`charAt()` accepts a single argument, which is the character's zero based position.

```javascript
var stringValue = "founders and coders";
console.log(stringValue.charAt(5));  // prints "e"
```

It's also possible to access a string as an array, e.g:

```javascript
var str = "HELLO WORLD";
str[0];                   // returns H
```

However, this method is unpredictable as numeric properties of a string is non-standard prior to ECMAScript 5 and doesn't work in all browsers (for example, IE 6 or 7). It is best to use `str.charAt(0)` instead when your code has to work in non-ECMAScript 5 environments. Alternatively, if you're going to be accessing a lot of characters in the string then you can turn a string into an array of characters using its `split()` method.

#### 2.`charCodeAt()` and `fromCharCode()`: convert to and from unicode value

Now, if we want the character's code (i.e. its [Unicode value](http://unicode-table.com/en/)) instead of the actual character, then using `charCodeAt()` would be the right choice. `charCodeAt()` also accepts a character's zero based position as its only argument.

```javascript
console.log(stringValue.charCodeAt(9));  
// prints 101, which is the character code for lowercase "e".
```

There is another method available on the String constructor called `fromCharCode()`. This method takes one or more character codes and converts them into a string: the reverse of `charCodeAt()`.

```javascript
console.log(String.fromCharCode(104 , 101 , 108 ,108 , 111));
// This will result into a string "hello".
```



##String Manipulation Methods

#### 1. `concat()`: concatenate one or more strings.

`Concat()` adds one more strings to another and returns the result, leaving the original string unchanged. It can take as many arguments as we want.

```javascript
var newString = "Hello " ; 
var result = newString.concat("World" , "!"); // Hello World!
```

Although the `concat()` method is available, the `(+)` addition operator method is often used and actually performs better in most cases.

####2.`slice()`, `substr()`, `substring()`: copy a substring

These methods are used for copying part of a string. They all accept either one argument or two.

For `slice()` and `substring()` the first argument is where the capture of the string begins and the second argument is the position immediately after the final captured element. For `substr()` the second argument is the number of characters to return. 

In all three methods, *if the second argument is not given it is assumed that the ending position is the length of the string.*

```javascript
var newString = "Hello World!"
console.log(newString.slice(3 , 7))// Output= "lo W"
console.log(newString.substring(3 , 7)) // Output = "lo W"
console.log(newString.substr(3 , 7)) // Output= "lo Worl"(7 Characters)
```

**When the arguments are negative numbers:**

+ For `slice()` a negative argument is treated as string.length + negative argument (for both arguments).<br>
+ For `substr()` the first negative argument is treated as the string.length + negative argument, whereas the second negative argument is converted to zero.<br>
+ For `substring()` all negative arguments are converted to zero.<br>

```javascript
var newString = "Hello World!"
console.log(newString.slice(3 , -4)) // Output= "lo W"(Converts to 11-4=7 -- (3,7))
console.log(newString.substring(3 , -4))//Output ="hel" (Converts to (3 , 0) which is equivalent to substring(3 , 0) this method expects the smaller number is the starting point and the larger is the ending.)
console.log(newString.substr(3 , -4))// Output= ""(Empty String Converts to (3 , 0) which means zero character 0 characters in the returning string.)
```

####3. `trim()`, `trimLeft()` and `trimRight()`: trim a string
`trim()` creates a copy of the string removing all leading and trailing white space. It supports two nonstandard methods called `trimLeft()` and `trimRight()`, which remove whitespace from the beginning or end.

```javascript
var newString = "       Hello World       ";
var trimmedNewString = newString.trim();
console.log(trimmedNewString) // "Hello World"
```

####4.`split()`: split a string
`Split()` separates the string into an array of substrings based on a separator. The second argument is optional and assigned as the array's limit. It ensures that the returned array will be no longer than a certain size.

```javascript
var newString = "cat,dog,sheep,fish";
var splitString =newString.split(",") //["cat" , "dog" , "sheep" , "fish"]
var splitLimit = newString.split("," , 2) // ["cat" , "dog"]
```
##String Location Methods

####1.`indexOf()` & `lastIndexOf()`: get index of substring
Both these methods search for a given character or substring and return its position. They can take two arguments, although the second argument is optional, and indicates the position to start searching.

Using `indexOf()`, the search begins from the beginning of the string.
Using `lastIndexOf()`, the search begins from the end of the  string.

```javascript
var newString = "Hello World!"
console.log(newString.indexOf("o" ,6)); // Output = 7(Search starts from the beginning and ignore every "o" before the starting position)
console.log(newString.lastIndexOf("o", 6)); // Output =4 (Search starts from the end towards the beginning.)
```

**Both `indexOf()` and `lastIndexOf()` return -1 if the string isn't found!**

####2.`startsWith()` & `endsWith()`: check starting or ending characters
These methods determine whether a string starts or ends with the characters of a specified string. They return true if the string starts or ends with the characters, and false if not.

```javascript
var newString = "Hello World!";
console.log(newString.startsWith("Hell")) // true
console.log(newString.endsWith("rld!")) // true
```

####3. `localeCompare()`: compare the location of two strings for a given sort order

The default sort order is the alphabet of your [locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation), but another locale can be passed as the second argument. `localeCompare()` compares a reference string to the string passed as argument and returns one of these three values:
+ -1 if the reference string comes alphabetically before the argument.
+ 0 if both are equal.
+ 1 if the reference string comes after the argument.

```javascript
var stringValue = “Javascript”;
alert(stringValue.localeCompare("brick")); //1 (come before alphabetically)
alert(stringValue.localeCompare("Javascript")); //0 (both are equal)
alert(stringValue.localeCompare(“zoo”)); //-1
```
##String Case Methods

####1. `toLowerCase()` & `toUpperCase()`
These are self explanatory! They convert case from lower to upper or upper to lower.

```javascript
var newString = "Hello World!";
console.log(newString.toLowerCase()) // "hello world"
```

```javascript
var newString = "hello world";
console.log(newString.toUpperCase()) // "HELLO WORLD"
```

##String Pattern Matching Methods

The following methods can be used with **Regular Expressions**, an advanced tool for defining string patterns. See [Regular Expressions - A Beginners Guide](/JavaScript/regular-expressions-beginners-guide.md).

####1.`match()`: return matching substrings
`match()` returns an array of strings that match the string or regular expression passed as argument. It is same as calling the RegExp object's `exec()`. It accepts a single argument.

```javascript
var text = "cat, bat, sat, fat";
var pattern = /.at/g ;
//same as pattern.exec(text)
var matches = text.match(pattern);
console.log(matches) // [ 'cat', 'bat', 'sat', 'fat' ]
```

#### 2. `search()`: return position of match
`search()` also takes a regular expression as argument, but instead of returning the matched string(s) it returns the index of the pattern's first occurrence in the string, or -1 if it's not found.

```javascript
var text = "cat , bat , mat , hat" ;
var position = text.search(/at/); // 1
```

####3.`replace()`: replace matching substrings
This method accepts two arguments. The first can be a RegExp object or a string and the second argument can be a string or function.

```javascript
var text = "cat , bat , mat , hat";
var result = text.replace("at" , "tty") // "catty , batty , matty , hatty"
```

##Related

##References



