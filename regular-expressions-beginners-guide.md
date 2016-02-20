<h1>Regular Expressions - A Beginners Guide</h1>
Regular expressions are very powerful tools for performing pattern matches. Once you master the pattern language, most validation tasks become trivial. You can perform complex tasks that once required lengthy procedures with just a few lines of code using regular expressions.

Although not strictly necessary while in the early stages of learning Javascript (very few, if any level 8-5 Kata cannot be completed without RegExp), a basic understanding will make alot of your solutions significantly easier and shorter! This ReadMe will look at the very basic concepts and elements that make up Regular Expressions. 

<h2>Creating a regular expression</h2>
You construct a regular expression in one of two ways:

Using a regular expression literal, which consists of a pattern enclosed between slashes optionally followed by a modifier, as follows:

```
var re = /ab+c/i;
```
Regular expression literals provide compilation of the regular expression when the script is loaded. When the regular expression will remain constant, use this for better performance. .

Or calling the constructor function of the RegExp object, as follows:

```
var re = new RegExp("ab+c");
```
Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

<h2>Pattern Notation</h2>

<h3>Bracket Character Classes</h3>

| [xyz]  | Match any one character enclosed in the character set. You may use a hyphen to denote range. For example. /[a-z]/ matches any letter in the alphabet, /[0-9]/ any single digit.                                                   | /[AN]BC/ matches "ABC" and "NBC" but not "BBC" since the leading “B” is not in the set. |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [^xyz] | Match any one character not enclosed in the character set. The caret indicates that none of the characters. The caret used within a character class is not to be confused with the caret that denotes the beginning of a string.  | /[^AN]BC/ matches "BBC" but not "ABC" or "NBC".                                         |

