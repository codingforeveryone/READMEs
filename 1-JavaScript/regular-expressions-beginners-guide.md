# Regular Expressions - A Beginners Guide
Regular expressions are very powerful tools for performing pattern matches. Once you master the pattern language, most validation tasks become trivial. You can perform complex tasks that once required lengthy procedures with just a few lines of code using regular expressions.

Although not strictly necessary while in the early stages of learning Javascript (very few, if any level 8-5 Kata cannot be completed without RegExp), a basic understanding will make alot of your solutions significantly easier and shorter! This ReadMe will look at the very basic concepts and elements that make up Regular Expressions. 

## Creating a regular expression
You construct a regular expression in one of two ways:

Using a regular expression literal, which consists of a pattern enclosed between slashes optionally followed by a modifier, as follows:

```javascript
var re = /ab+c/i;
```
Regular expression literals provide compilation of the regular expression when the script is loaded. When the regular expression will remain constant, use this for better performance. .

Or calling the constructor function of the RegExp object, as follows:

```javascript 
var re = new RegExp("ab+c");
```

Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input. When using the constructor notation you have to scape every \ that you have in your regex e.g.  ```var myRegex = /\bHello\b/g``` is simmilar to var ```myRegex = new RegExp('\\bHello\\b', 'g')```. 

## Pattern Notation

### Bracket Character Classes

| Symbol | Description                                                                                                                                                                                                                       | Example                                                                                 |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [xyz]  | Match any one character enclosed in the character set. You may use a hyphen to denote range. For example. /[a-z]/ matches any letter in the alphabet, /[0-9]/ any single digit.                                                   | /[AN]BC/ matches "ABC" and "NBC" but not "BBC" since the leading “B” is not in the set. |
| [^xyz] | Match any one character not enclosed in the character set. The caret indicates that none of the characters. The caret used within a character class is not to be confused with the caret that denotes the beginning of a string.  | /[^AN]BC/ matches "BBC" but not "ABC" or "NBC".                                         |

### Further Character Classes

| Symbol | Description                                                                            | Example                                |
|--------|----------------------------------------------------------------------------------------|----------------------------------------|
| \w     | Match any alphanumeric character including the underscore. Equivalent to [a-zA-Z0-9_]. | /\w/ matches "200" in "200%"           |
| \W     | Match any single non-word character. Equivalent to [^a-zA-Z0-9_].                      | /\W/ matches "%" in "200%"             |
| \d     | Match any single digit. Equivalent to [0-9].                                           | /\d/ matches "342222" in "No 342222"   |
| \D     | Match any non-digit. Equivalent to [^0-9].                                             | /\D/ matches "No" in "No 342222"       |
| \s     | Match any single space character.                                                      | /\s/ matches " " in "No 342222"        |
| \S     | Match any single non-space character.                                                  | /\S/ matches "No342222" in "No 342222" |

### Position Matching

| Symbol | Description                                                                                                | Example                                                   |
|--------|------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| ^n     | Matches any string with n at the beginning of it                                                           | /^The/ matches "The" in "The night" by not "In The Night" |
| n$     | Matches any string with n at the end of it                                                                 | /and$/ matches "and" in "Land" but not "landing"          |
| ?=n    | Matches any string that is followed by a specific string n                                                 | /?=night/ matches "The" in "Thenight" but not "Thesun"    |
| ?!n    | Matches any string that is not followed by a specific string n                                             | /?!night/ matches "The" in "Thesun" but not "Thenight"    |
| \b     | Matches any word boundary (test characters must exist at the beginning or end of a word within the string) | /ly\b/ matches "ly" in "This is really cool."             |
| \B     | Matches any non-word boundary.                                                                             | /\Bor/ matches “or” in "normal" but not "origami."        |

### Quantifiers

| Quantifier | Description                                                   | Example                                                                 |
|------------|---------------------------------------------------------------|-------------------------------------------------------------------------|
| n+         | Matches any input that contains at least one n                | /fe+d/ matches both "fed" and "feed"                                    |
| n*         | Matches any input that contains zero or more occurrences of n | /we*/ matches "w" in "why" and "wee" in "between", but nothing in "bad" |
| n?         | Matches any input that contains zero or one occurrences of n  | /a\s?b/ matches "ab" or "a b".                                          |
| n{X}       | Matches any input that contains a sequence of X n's           | /\d{5}/ matches 5 digits.                                               |
| n{X,Y}     | Matches any input that contains a sequence of X to Y n's      | /\d{2,4}/ matches at least 2 but no more than 4 digits.                 |
| n{X,}      | Matches any input that contains a sequence of at least X n's  | /\s{2,}/ matches at least 2 whitespace characters.                      |

### Modifiers

To be used in syntax /pattern/modifiers;

| Modifier | Description                                    | Example                                                                     |
|----------|------------------------------------------------|-----------------------------------------------------------------------------|
| i        | Ignore the case of characters.                 | /The/i matches "the" and "The" and "tHe"                                    |
| g        | Global search for all occurrences of a pattern | /ain/g matches both "ain"s in "No pain no gain", instead of just the first. |
| gi       | Global search, ignore case.                    | /it/gi matches all "it"s in "It is our IT department"                       |
| m        | Perform multiline matching                     |                                                                             |

## Function Applications

Below is a example list of functions that can incorporate regular expressions. There are many many instances where RegExp is useful beyond the below!

### Using String search()

Use a regular expression to do a case-insensitive search for "fac" in a string:

```javascript
var str = "Monday meetups at fac";
var n = str.search(/fac/i);
```

The result in n will be: 18

### Using String replace()

Use a case insensitive regular expression to replace Python with Javascript in a string:

```javascript
var	str = "Python rocks!";
var res = str.replace(/python/i, "Javascript");
```

The result in res will be: Javascript rocks!

### Using test()

It searches a string for a pattern, and returns true or false, depending on the result.

The following example searches a string for the character "e":

```javascript
var patt = /e/;
patt.test("The best things in life are free!");
```

Since there is an "e" in the string, the output of the code above will be: true

You don't have to put the regular expression in a variable first. The two lines above can be shortened to one:

```javascript
/e/.test("The best things in life are free!");
```
### Using exec()

It searches a string for a specified pattern, and returns the found text. If no match is found, it returns null.

The following example searches a string for the character "e":

```javascript
/e/.exec("The best things in life are free!");
```

Since there is an "e" in the string, the output of the code above will be: e

### Using .match().length()

A personal favourite; use this to count the number of occurances of a pattern in a string.

The following example find the number of white spaces in a string:

```javascript
"hi there how are you".match(/\s/g).length;
```

Since there are 4 spaces in the string, the output of the code above will be: 4

## Using Parenthesized Substring Matches

A slightly more advanced, yet incredibly useful, technique. Including parentheses (a pair of brackets) in a regular expression pattern causes the corresponding submatch (the pattern within the brackets) to be remembered. For example, /a(b)c/ matches the characters 'abc' and remembers 'b'. The nine most recent mataches are stored under and can be recalled using the notation $n (where n is an integer from 1-9).

The following script uses the replace() method to switch the words in the string. For the replacement text, the script uses the $1 and $2 in the replacement to denote the first and second parenthesized substring matches.

```javascript
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

The (\w+) matches and stores a pattern of alphanumeric characters up until a white space or the end of string. So $1 = "John" and $2 = "Smith".  Therefore the newstr replaces any occurance of "John Smith" with "$2, $1" (or "Smith, John"). So console log will print "Smith, John".

## Regex Crossword

Regex Crossword is a crossword puzzle game, where the crossword clues are defined using regular expressions. Everybody can play and it is a great way for newcomers to learn regular expressions and for experts to practice their skills.

[Regex Crossword](https://regexcrossword.com/)

## Codewars Practise Kata

Want to get stuck into the above? Try the following kata on codewars:

[Regex count lowercase letters](http://www.codewars.com/kata/regex-count-lowercase-letters)

[Regex validation of 24 hours time](http://www.codewars.com/kata/regex-validation-of-24-hours-time)

[Regex validate pin code](http://www.codewars.com/kata/regex-validate-pin-code)

[Validdate regex](http://www.codewars.com/kata/validdate-regex)

[Regex password validation](http://www.codewars.com/kata/regex-password-validation)


## References

There are a number of regular expression tutorials on the web, the above is a simplied and combined version of the following resources:

[W3Schools JavaScript RegExp Reference](http://www.w3schools.com/jsref/jsref_obj_regexp.asp)

[W3Schools JavaScript Regular Expressions](http://www.w3schools.com/js/js_regexp.asp)

[Javscript.info regular expressions tutorial](http://javascript.info/tutorial/regular-expressions-javascript)

[Javascriptkit Introductory Guide to regular expressions](http://www.javascriptkit.com/javatutors/re.shtml)

[Mozilla Developer Network Regular Expressions](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions)

