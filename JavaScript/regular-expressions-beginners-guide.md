# Regular Expressions - A Beginners Guide
Regular expressions are very powerful tools for performing pattern matches. Once you master the pattern language, most validation tasks become trivial. You can perform complex tasks that once required lengthy procedures with just a few lines of code using regular expressions.

Although not strictly necessary while in the early stages of learning Javascript (very few, if any level 8-5 Kata cannot be completed without RegExp), a basic understanding will make a lot of your solutions significantly easier and shorter! This ReadMe will look at the very basic concepts and elements that make up Regular Expressions.

## Creating a regular expression
You construct a regular expression in one of two ways:

Using a regular expression literal, which consists of a pattern enclosed between slashes optionally followed by a modifier (sometimes called a "flag"), as follows:

```javascript
var re = /ab+c/i;
```
Regular expression literals provide compilation of the regular expression when the script is loaded. When the regular expression will remain constant, use this for better performance.

Or calling the constructor function of the RegExp object, as follows:

```javascript 
var re = new RegExp("ab+c");
```

Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input. When using the constructor notation you have to escape every \ that you have in your regex e.g.  ```var myRegex = /\bHello\b/g``` is similar to var ```myRegex = new RegExp('\\bHello\\b', 'g')```. 

## Pattern Notation

### Bracket Character Classes

| Symbol | Description                                                                                                                                                                                                                       | Example                                                                                 |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [xyz]  | Match any one character enclosed in the character set. You may use a hyphen to denote range. For example. /[a-z]/ matches any letter in the alphabet, /[0-9]/ any single digit.                                                   | /[AN]BC/ matches "ABC" and "NBC" but not "BBC" since the leading “B” is not in the set. |
| [^xyz] | Match any one character not enclosed in the character set. The caret inverts the character set. The caret used within a character class is not to be confused with the caret that denotes the beginning of a string.  | /[^AN]BC/ matches "BBC" but not "ABC" or "NBC".                                         |

### Further Character Classes

Note that unless the "/g" flag is passed, the match of the regular expression is the first possible matching string. For more on "/g", see [*Modifiers*](#modifiers) below.

| Symbol | Description                                                                            | Example                                |
|--------|----------------------------------------------------------------------------------------|----------------------------------------|
| \w     | Match any alphanumeric character including the underscore. Equivalent to [a-zA-Z0-9_]. | /\w/ matches "2" in "200%"           |
| \W     | Match any single non-word character. Equivalent to [^a-zA-Z0-9_].                      | /\W/ matches "%" in "200%"             |
| \d     | Match any single digit. Equivalent to [0-9].                                           | /\d/ matches "3" in "No 342222"   |
| \D     | Match any non-digit. Equivalent to [^0-9].                                             | /\D/ matches "N" in "No 342222"       |
| \s     | Match any single whitespace space character (e.g. spaces, tabs, newlines).                                                      | /\s/ matches " ” in "No 342222"        |
| \S     | Match any single non-whitespace character.                                                  | /\S/ matches "N" in "No 342222" |

### Position Matching

| Symbol | Description                                                                                                | Example                                                   |
|--------|------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| ^n     | Matches n when it occurs at the beginning of a string.                                                           | /^The/ matches "The" in "The night" but not "In The Night" |
| n$     | Matches n when it occurs at the end of a string.                                                                 | /and$/ matches "and" in "Land" but not "landing"          |
| m(?=n)    | Matches any string m that is followed by a specific string n.                                                 | /The(?=night)/ matches "The" in "Thenight" but not "Thesun"    |
| m(?!n)    | Matches any string m that is not followed by a specific string n.                                             | /The(?!night)/ matches "The" in "Thesun" but not "Thenight"    |
| \b     | Matches any word boundary (test characters must exist at the beginning or end of a word within the string). | /ly\b/ matches "ly" in "This is really cool."             |
| \B     | Matches any non-word boundary.                                                                             | /\Bor/ matches “or” in "normal" but not "origami."        |

### Quantifiers

| Quantifier | Description                                                   | Example                                                                 |
|------------|---------------------------------------------------------------|-------------------------------------------------------------------------|
| n+         | Matches n one or more times                | /fe+d/ matches both "fed" and "feed".                                    |
| n*         | Matches n zero or more times | /we*/ matches "w" in "why" and "wee" in "between", but nothing in "bad" |
| n?         | Matches n zero or one times  | /a\s?b/ matches "ab" or "a b".                                          |
| n{X}       | Matches a sequence of X n's           | /\d{5}/ matches 5 digits.                                               |
| n{X,Y}     | Matches a sequence of X to Y n's      | /\d{2,4}/ matches at least 2 but no more than 4 digits.                 |
| n{X,}      | Matches a sequence of at least X n's  | /\s{2,}/ matches at least 2 whitespace characters.                      |

### Modifiers

To be used in syntax /pattern/modifiers;

| Modifier | Description                                    | Example                                                                     |
|----------|------------------------------------------------|-----------------------------------------------------------------------------|
| i        | Ignore the case of characters.                 | /The/i matches "the" and "The" and "tHe"                                    |
| g        | Global search for all occurrences of a pattern | /ain/g matches both "ain"s in "No pain no gain", instead of just the first. |
| gi       | Global search, ignore case.                    | /it/gi matches all "it"s in "It is our IT department"                       |
| m        | Perform multiline matching                     |     ^ and $ match at the start or end of any line within the input string instead of the start or end of the entire string                                                                        |

## Function Applications

Below is an example list of functions that can incorporate regular expressions. There are many, many instances where RegExp is useful beyond those below!

### Using String.search()

Use a regular expression to do a case-insensitive search for "fac" in a string:

```javascript
var str = "Monday meetups at fac";
var n = str.search(/fac/i);
```

`String.search()` returns the index of the first match, or -1 if there is no match. In this case, the result in n will be 18.

### Using String.replace()

Use a case insensitive regular expression to replace Python with Javascript in a string:

```javascript
var	str = "Python rocks!";
var res = str.replace(/python/i, "Javascript");
```

The result in res will be: Javascript rocks!

### Using RegExp.test()

It searches a string for a pattern, and returns true if there is match, false if there is not.

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
### Using RegExp.exec()

It searches a string for a specified pattern, and returns the found text. If no match is found, it returns null.

The following example searches a string for the character "e":

```javascript
/e/.exec("The best things in life are free!");
```

Since there is an "e" in the string, the output of the code above will be: e

### Using String.match()

Like `exec()`, this method searches a string for a specified pattern, and returns the match. The main difference is that whilst `exec()` will only return the first match in the string, `match()`, when used with the 'g' flag, will return an array with all the matches found.

```javascript
("The best things in life are free!").match(/.e/g);
```

The above code will return an array of all the matches: `[ 'he', 'be', 'fe', 're', 're' ]`

### Using String.match().length()

A personal favourite; use this to count the number of occurances of a pattern in a string.

The following example find the number of white spaces in a string:

```javascript
"hi there how are you".match(/\s/g).length;
```

Since there are 4 spaces in the string, the output of the code above will be: 4

## Using Parenthesized Substring Matches

A slightly more advanced, yet incredibly useful, technique. Including parentheses (a pair of brackets) in a regular expression pattern causes the corresponding submatch (the pattern within the brackets) to be remembered. For example, /a(b)c/ matches the characters 'abc' and remembers 'b'. The nine most recent matches are stored and can be recalled using the notation $n (where n is an integer from 1-9).

The following script uses the replace() method to switch the words in the string. For the replacement text, the script uses the $1 and $2 in the replacement to denote the first and second parenthesized substring matches.

```javascript
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

The (\w+) matches and stores a pattern of alphanumeric characters up until a white space or the end of string. So $1 = "John" and $2 = "Smith".  Therefore the `newstr` replaces any occurance of "John Smith" with "$2, $1" (or "Smith, John"). So console log will print "Smith, John".

## Non-Capturing Groups

In order to group different bits of a regular expression together, but not remember them, non-capturing groups are used. The notation for non-capturing groups is `(?:x)`, where x is the the expression to be matched.

Compare the following two regular expressions (without and with a non-capturing group):

```javascript
var re1 = /foo{2}/g;                // equivalent to /fooo/g
var re2 = /(?:foo){2}/g;            // equivalent to /foofoo/g
var str = "foofooo";

console.log(str.match(re1));   // ['fooo']
console.log(str.match(re2));   // ['foofoo']
```

_Warning: do not confuse non-capturing groups with [lookaheads](http://codingforeveryone.foundersandcoders.org/JavaScript/regular-expressions-lookaheads.html)!_

## Alternation

Searching for different alternatives can be achieved within a regular expression using the vertical bar symbol (`|`). The beginning and the end of the alternation sequence need to be clearly specified, such as with capturing or (preferably) non-capturing groups.

In the following example of a simple e-mail validator, alternation is used to allow three different address domains:

```javascript
var re = /^\w+@\w+\.(?:com|fr|nl)$/;
var email = "the_boss@the_company.fr";

re.test(email);   // true
```

## Greedy and Lazy Quantifiers

By default, all quantifiers (*, +, ?, and {}) are 'greedy', meaning that they match a string the maximum number of times. It is possible to make a quantifier non-greedy (or 'lazy'), so that it matches the minimum number of times, by following it with a question mark (?).

In the example below, we search for strings within inverted commas using both a greedy and a lazy quantifier. Whereas the greedy search returns a single match, corresponding to all of the text between the first and the last occurrence of the inverted comma, the lazy search returns several matches, each corresponding to a single word within inverted commas.

```javascript
var greedy = /'.*'/g;
var lazy = /'.*?'/g;
var str = "This 'section' is about the terms 'greedy' and 'lazy'."

console.log(str.match(greedy));   // [ ''section' is about the terms 'greedy' and 'lazy'' ]
console.log(str.match(lazy));   // [ ''section'', ''greedy'', ''lazy'' ]
```

## Regex Tester

Regular Expressions 101 is an excellent platform for testing and debugging your regular expressions. The tested expression is broken down into components and each component explained, which can be very useful if you're trying to understand an expression that you've found in someone else's code.

[Regex 101](https://regex101.com/)

## Regex Crossword

Regex Crossword is a crossword puzzle game, where the crossword clues are defined using regular expressions. Everybody can play and it is a great way for newcomers to learn regular expressions and for experts to practice their skills.

[Regex Crossword](https://regexcrossword.com/)

## Codewars Practice Kata

Want to get stuck into the above? Try the following kata on codewars:

[Regex count lowercase letters](http://www.codewars.com/kata/regex-count-lowercase-letters)

[Regex validation of 24 hours time](http://www.codewars.com/kata/regex-validation-of-24-hours-time)

[Regex validate pin code](http://www.codewars.com/kata/regex-validate-pin-code)

[Validdate regex](http://www.codewars.com/kata/validdate-regex)

[Regex password validation](http://www.codewars.com/kata/regex-password-validation)

##Related

[String dissection and manipulation](http://codingforeveryone.foundersandcoders.org/JavaScript/string-dissection-and-manipulation.html)

## References

There are a number of regular expression tutorials on the web, the above is a simplfied and combined version of the following resources:

[W3Schools JavaScript RegExp Reference](http://www.w3schools.com/jsref/jsref_obj_regexp.asp)

[W3Schools JavaScript Regular Expressions](http://www.w3schools.com/js/js_regexp.asp)

[Javscript.info regular expressions tutorial](http://javascript.info/tutorial/regular-expressions-javascript)

[Javascriptkit Introductory Guide to regular expressions](http://www.javascriptkit.com/javatutors/re.shtml)

[Mozilla Developer Network Regular Expressions](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions)

