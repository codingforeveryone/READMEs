
## Using Lookahead

| Symbol 	| Definition    			| Description																			|
|-----------|---------------------------|---------------------------------------------------------------------------------------|
| (?=foo)	| Positive Lookahead	    | Asserts that what immediately follows the current position in the string is foo 		|
| (?!foo)	| Negative Lookahead   		| Asserts that what immediately follows the current position in the string is not foo 	|

_This is a summarized version from the [Mastering Lookahead and Lookbehind](http://www.rexegg.com/regex-lookarounds.html) article on rexegg.com._

###Introduction

Lookaheads in regex is a bit more advanced and can get easily confusing in the beginning, they are however useful for several purposes, including simple string validation. So if you have not used regex at all yet, I advise that you play around with the basics first.

The important thing to understand about lookaheads is that at the end of a lookahead, the regex engine has not changed its position in the string. This makes it possible to chain several lookaheads, one after the other without changing position.

This will all become clear in the following example where we will perform a simple password validation with just one line of regex, instead of many lines of javascript.

We will not be using Negative Lookahead in the example, however it behaves the same way as positive lookaheads do, just with logic being that you 'lookahead' for a pattern not being in the string.

_Note: whenever the [rexex style guide](http://www.rexegg.com/regex-style.html) is mentioned it is referring to the one from rexegg.com._

###Password example

We are creating a password validation regex by going through each step on how to create this regular expression one by one. If at any point you feel like you do not understand something or think that you need more details, refer back to [this](http://www.rexegg.com/regex-lookarounds.html) link to the original article, where it is probably better explained. Just be careful that it is not javascript specific but for many other engines as well, and some of the code is not compatible.

#####Password requirements:

1. The Password must have between 6 and 10 word characters. `\w`
2. It has to contain at least 1 lowercase character. `[a-z]`
3. It has to contain **3** uppercase characters. `[A-Z]`
4. It has to contain at least 1 digit. `\d`


#####Starting with the first requirement

A string made up of 6 to 10 characters can be written like this `^\w{6,10}$`. Start at the beginning of the string `^`, match any word character 6 to 10 times `\w{6,10}` and make sure that after those 6 to 10 letters follows the end of the string `$`.

Within a lookahead the pattern becomes `(?=^\w{6,10}$)`, we will however move the `^` to the beginning of the pattern in order not to duplicate it for every lookahead, as we will always want our lookaheads to start at the beginning of the string, moving from left to right.

`^(?=\w{6,10}$)`

This expression validates that a string is 6 to 10 characters, it does however not match anything yet, we have only looked ahead and come back to the beginning of the string.

#####Second Requirement

We now have to check whether the password contains a lowercase letter. The easy way to check this would be to use `(?=.*[a-z])`, this is however inefficient due to backtracking.

Instead we will use an expression that makes use of the principle of contrast recommended by the regex style guide. The expression looks like this `[^a-z]*[a-z]`,
`[^a-z]` is the counterclass to `[a-z]`. So the expression above is saying: from the start of the string match 0 or more non lowercase letters and 1 lowercase letter. The pattern becomes:

`^(?=\w{6,10}$)(?=[^a-z]*[a-z])`

#####Third Requirement

The third requirement is similar to the second, however with the added difficulty of repeating the uppercase check 3 times.

We will do this using the quantifier `{3}`.
The lookahead will look like this: `(?=(?:[^A-Z]*[A-Z]){3})`.
_Note: `(:?)` means non capturing group, it is similar to `()`, just that it does not return the capture in the results._

So this lookahead will do the following 3 times: from the beginning of the string match 0 or more characters that are not uppercase letters `[^A-Z]*`, then match 1 uppercase letter `[A-Z]`. The pattern becomes:

`^(?=\w{6,10}$)(?=[^a-z]*[a-z])(?=(?:[^A-Z]*[A-Z]){3})`

#####Last Requirement

The last lookahead again uses the principle of contrast to check for 0 or more non digits `\D*` and 1 digit `\d`. `(?=\D*\d)` The pattern becomes:

`^(?=\w{6,10}$)(?=[^a-z]*[a-z])(?=(?:[^A-Z]*[A-Z]){3})(?=\D*\d)`

Now we have made sure the password is valid, and if that is all we wanted we can stop here. However, if we also wanted to match and return the string, we can easily do so now.

#####Matching the string

A simple `.*` would suffice to capture the entire string which, as we have asserted with our lookaheads, matches all of our criteria. The pattern becomes: 

`^(?=\w{6,10}$)(?=[^a-z]*[a-z])(?=(?:[^A-Z]*[A-Z]){3})(?=\D*\d).*`

However, to make the pattern more efficient we can use one of the patterns from the lookaheads to match the entire string. Which one does not matter as it can work with any, but the obvious one here would be `\w{6,10}$`, as it matches the entire string anyway. The pattern becomes: 

`^(?=[^a-z]*[a-z])(?=(?:[^A-Z]*[A-Z]){3})(?=\D*\d)\w{6,10}$`

This shows that when checking for n conditions we only need n-1 lookaheads at the most, often you can combine several conditions into a single lookahead.

One last thing to note is that, while the order of the lookaheads will not change the result, it is more efficient to use those lookaheads first that are most likely to fail. This makes use of the design to fail principle from the regex style guide.

#####Summary Overview

`^(?=[^a-z]*[a-z])(?=(?:[^A-Z]*[A-Z]){3})(?=\D*\d)\w{6,10}$`

1. `^`: start at the beginning of the string for each lookahead.
2. `(?=[^a-z]*[a-z])`: match 0 or more non lowercase letters, then 1 lowercase letter.
3. `(?=(?:[^A-Z]*[A-Z]){3})`: do the following 3 times: match 0 or more non uppercase letters, then 1 uppercase letter.
4. `(?=\D*\d)`: match 0 or more non digits, then 1 digit.
5. `\w{6,10}$`: match 6 to 10 word characters and then make sure what follows is the end of the string. This also returns the entire string.

#####Example In javascript

```javascript
var valid = "VaLiD123";
var invalid = "invalidPassword";
var regex = /^(?=[^a-z]*[a-z])(?=(?:[^A-Z]*[A-Z]){3})(?=\D*\d)\w{6,10}$/;

console.log(regex.test(valid));
// Outputs: true
console.log(regex.test(invalid));
// Outputs: false

```

###Regex Tester

This is an excellent testing platform where you can, for example, enter the regex we have just created and try out different passwords, to see what would match. Also i would suggest trying your own lookaheads or at least modify the one we have here to you can see exactly how it works. Be careful however with the way special characters are escaped in this tool compared to how you would write it in javascript. For example `\\n` in regex101.com is `\n` in javascript normally, when you create it in the `var regex = /regexHere/` way.

[Regex 101](https://regex101.com/#javascript)

###Codewars Practice Kata

[Password validator](http://www.codewars.com/kata/password-validator)

[Regex Password Validation](http://www.codewars.com/kata/regex-password-validation)

###Related

You should definitely read this first before coming back here, as if you do not understand the content of the link below, you will probably get lost here.

[Regular Expressions - A Beginners Guide](http://codingforeveryone.foundersandcoders.org/JavaScript/regular-expressions-beginners-guide.html)

As for how to **extend** this tutorial, i would say there are more advanced and complex ways of using lookaheads, even though we do not have lookbehinds in javascript yet (ES7 *fingers crossed), there are many other ways to demonstrate their uses. Another way would be to go the original article of this tutorial and summarize more advanced concepts, though many require lookbehind.

###References

[Mastering Lookahead and Lookbehind](http://www.rexegg.com/regex-lookarounds.html)

[Regex Style Guide](http://www.rexegg.com/regex-style.html)

[Lookahead and Lookbehind Zero-Length Assertions](http://www.regular-expressions.info/lookaround.html)

[Regular Expressions - MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions)

