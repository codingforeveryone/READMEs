<h1>String Dissection And Manipulation</h1>
This basically mean dissecting , searching and splitting of a piece of string. Javascript provides us with many built in methods to so operations on string objects. In this section we will go through each one of them.

<h2>String Character Methods</h2>
<b>`charAt()` and `charCodeAt()`</b>- Both of these accepts a single argument, which is the character's zero based position.

```
var stringValue = "founders and coders";
console.log(stringValue.charAt(5));  // "e"
```


Now if we want the characters code instead of the actual character then using `charCodeAt()` would be the right choice.

```
console.log(stringValue.charCodeAt(9));  
// The output will be 101 which is the character code for lowercase "e".
```

Their is one another method available on String constructor called `fromCharCode()`. This methods takes one or more character code and convert them into a string. Reverse of `charCodeAt()`.

```
console.log(String.fromCharCode(104 , 101 , 108 ,108 , 111));
// This will result into a string "hello".
```

<h2>String Manipulation Methods</h2>
<b>1.`concat()`</b>-Concatenate one or more strings. Although the original string stays the same.It can take as many number of arguments as we want.

```
var newString = "Hello " ; 
var result = newString.concat("World" , "!"); // Hello World!
```

Although the `concat()` method is available but the `(+)` addition operator method is used often and actually  performs better in most cases.

<b>2.`slice()` , `substr()` , `substring()`</b> - These methods are used for creating string values from a substring. All of these accepts either one argument or two.
For `slice()` and `substring()` first argument is where the capture of the string begins and the second argument is the position before the capture stops.
For `substr()` the second argument is the number of characters return.
<i>If the second argument is not given it is assumed that the ending position is the length of the string.</i> 

```
var newString = "Hello World!"
console.log(newString.slice(3 , 7))// Output= "lo W"
console.log(newString.substring(3 , 7)) // Output = "lo W"
console.log(newString.substr(3 , 7)) // Output= "lo Worl"(7 Characters)
```

<h4>when the arguments are negative numbers</h4>
For `slice()` Negative argument is treated as string.length + Negative argument(for both arguments).<br>
For `substr()` the first negative argument is treated as the string.length + Negative argument. Where as the second negative argument is converted to Zero.<br>
For `substring()` all negative methods are converted to zero.<br>
```
var newString = "Hello World!"
console.log(newString.slice(3 , -4)) // Output= "lo W"(Converts to 11-4=7 -- (3,7))
console.log(newString.substring(3 , -4))//Output ="hel" (Converts to (3 , 0) which is equivalent to substring(3 , 0) this method expects the smaller number is the starting point and the larger is the ending.)
console.log(newString.substr(3 , -4))// Output= ""(Empty String Converts to (3 , 0) which means zero character 0 characters in the returning string.)
```

<h2>String Location Methods</h2>
<b>`indexOf()` & `lastIndexOf()`</b> Both these methods search for a given substring and returns the position. Takes two arguments although the second argument is optional that indicated the position to start searching.
For `indexOf()` search begins from the beginning of the string
For `lastIndexOf()` search begins from the end of the  string.
```
var newString = "Hello World!"
console.log(newString.indexOf("o" ,6)); // Output = 7(Search starts from the beginning and ignore every "o" before the starting position)
console.log(newString.lastIndexOf("o", 6)); // Output =4 (Search starts from the end towards the beginning.)
```

<i>Both of these return -1 if the string isn't found!</i>

<h2>Trim Method</h2>
<b>`trim()`</b> - Creates a copy of the string removing all leading and trailing white space.Supports two nonstandard methods called 
<b>`trimLeft()` and `trimRight()`</b> Remove whitespace from the beginning or end.
```
var newString = "       Hello World       "
var trimmedNewString = newString.trim();
console.log(trimmedNewString) // "Hello World"
```

<h2>String Case Methods</h2>
<b>`toLowerCase()` & `toUpperCase()`</b> Case conversions from lower to upper or upper to lower
```
var newString = "Hello World!";
console.log(newString.toLowerCase()) // "hello world"
```

```
var newString = "hello world";
console.log(newString.toUpperCase()) // "Hello World"
```

<h2>String Pattern Matching Methods</h2>
<b>1.`match()`</b> Used to pattern match with a string. It is same as calling the RegExp object's exec(). Accepts a single argument.
```
var text = "cat, bat, sat, fat";
var pattern = /.at/g ;
//same as pattern.exec(text)
var matches = text.match(pattern);
console.log(matches) // [ 'cat', 'bat', 'sat', 'fat' ]
```
<b>2.`search()`</b> Same as the method match() .Returns Index of first pattern occurrence in the string or -1 if it's not found.
```
var text = "cat , bat , mat , hat" ;
var position = text.search(/at/);// 1
```
<b>3.`replace()`</b> Used to replace substrings.This method accepts two arguments. First can be a RegExp object or a string and the second argument can be a string or function.
```
var text = "cat , bat , mat , hat";
var result = text.replace("at" , "tty") // "catty , batty , matty , hatty"
```
<b>4.`split`()</b> separates the string into an array of substrings based on a separator. Second argument is optional and assigned as the array's limit. It ensures that the return array will no longer than a certain size.

```
var newString = "cat,dog,sheep,fish"
var splitString =newString.split(",") //["cat" , "dog" , "sheep" , "fish"]
var splitLimit = newString.split("," , 2) // ["cat" , "dog"]
```

<h2>String Compare</h2>
`localeCompare()`- Compares one string to another and return one of these 3 values :<br>
<i>1.If string comes alphabetically before the argument return -1<br>
2.if both are equal return 0<br>
3. If string comes after the argument return +1</i><br>

```
var stringValue = “Javascript”;
alert(stringValue.localeCompare("brick")); //1(come before alphabetically)
alert(stringValue.localeCompare("Javascript")); //0(both are equal)
alert(stringValue.localeCompare(“zoo”)); //-1
```