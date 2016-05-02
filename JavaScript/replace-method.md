#The `replace()` method

Sometimes in Javascript we may want to replace all or part of a string with something else. We can do this with the `replace()` method, which searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

For example

```javascript
var greeting = "Hello, do you like yellow?";
var myString = greeting.replace("yellow", "red"); // replaces "yellow" with "red"
// myString contains "Hello, do you like red?"
```
This can be really useful if for instance you have a lot of text and want to replace certain words with others. 

For a very good and easy to understand post explaining how to use `replace()`, see:

<h4 style="text-align:center">[Using string replace in Javascript](https://davidwalsh.name/string-replace-javascript)</h1>




###Related
- [String dissection and manipulation](string-dissection-and-manipulation.md)
- [Regular Expression Beginners' Guide](regular-expressions-beginners-guide.md)


###References
- [W3Schools](http://www.w3schools.com/jsref/jsref_replace.asp)
- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

