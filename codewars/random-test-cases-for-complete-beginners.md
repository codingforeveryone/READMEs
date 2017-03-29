# Random Test Cases for Complete Beginners

If you are having to create your very first random test cases for your kata and have not any idea of what they are or how to produce
them, this document might help you.

![Imgur](http://i.imgur.com/g4hUKdO.png?1)

Random test cases are what it says on the tin – the user’s solution will be tested against a randomly generated input several times.
Suppose we have made a kata asking the user to add a number `a` to a number `b`. His or her solution may be this:

```javascript
function add(a, b){
  return a+b;
}
```

We now need to generate random test cases to test if the user’s solution returns the correct output. In this case, we need to generate
a random number for argument `a` and another random number for argument `b`.

Step by step:

1. First of all, just copy and paste your own solution into the ‘Test cases’ tab and slightly modify its name. For instance instead of
`add`, name it `addCheck`.

2. Then, below your `addCheck` function, you will need a regular ‘for loop’. You will need this to regulate how many times the random
tests will be performed. For example the following ‘for loop’ will perform them 200 times.

```javascript
for(var i = 0; i < 200; i++){
//tests here
}
```

  Let’s now concentrate on the ‘//tests here’ part in the above ‘for loop’.

3. You will almost certainly need to know how to generate a random number before you attempt anything else. A random number in
JavaScript can be generated thus:

```javascript
var random = Math.random();
```

The variable random will now be a random number between 0  and 1, for example: 0.03526814002543688. `Math.random()` can be equal to 0, but cannot be equal to 1.

If you do `Math.random() * 100`, you will get 3. 526814002543688 instead of the number above.
If you do `Math.round(Math.random() * 100)`, you will get `4` instead of the number above, as `3.5…`. will be rounded to `4`.

So the code in our ‘for loop’ could look like this (pay attention to the last line):

```javascript
for(var i = 0; i < 200; i++){
  var random1 = Math.round(Math.random() * 10);  //this might produce 7
  var random2 = Math.round(Math.random() * 10);  // this might produce 5
  Test.assertEquals(add(random1, random2), addCheck(random1, random2))
}
```

Now, i = 0 and our loop runs for the first time. Variable `random1` is number **7** and variable `random2` is number **5**. Therefore, 7 and 5
are placed as arguments to `add`, as well as arguments to `addCheck`. If both functions return the same result, in our
case `12 (5 + 7 = 12)`, then we passed the first of the 200 tests. Our loop will run 199 times more, generating random numbers,
passing them as argumenst to `add` and `addCheck` and comparing the two outputs.

You might be thinking that if you only slightly changed the function’s name (from `add` to `addCheck`) and nothing else,
then it is obvious that they will produce exactly the same results and therefore pass all the tests, since they are exactly the same
except the name. Well, don’t forget that the `addCheck` function’s output will be compared not against your output, but against the
user’s output.

Obviously,
you will not always need to generate random numbers. Sometimes you will need to generate strings, arrays and so on and so forth.

I sometimes felt that generating these random test cases was a kata to solve in itself.

I hope this short introduction gave you an idea of what random test cases are, and how and where to create them. Please note that I
will update this document as time goes on.

## Further Random Number Examples

Are you looking to generate a random integer greater than 0 and less than but not including `x`? Try `Math.floor(Math.random() * x)`.

*For integers `0 <= x < 100`, use `Math.floor(Math.random() * 100)`.*

Are you looking to generate a random integer greater than or equal to `x` but less than `y`? Try adding the lower bound `x` to a random object generating the remaining variable number (which is equal to `y - x`) e.g. `Math.floor(Math.random() * (y - x)) + x`.

*For integers `40 <= x < 100`, use `Math.floor(Math.random() * 60) + 40`.*

N.B. If you are wondering why we use floor here instead of round, it is because it assures that each result is equally likely to occur. Although this is often not important for kata random test cases, it is more standard to require a random variable which is uniformally distributed (i.e. an equal chance of getting any of the possibilities).

## Generating Random Strings

The following function generates a random string 5 characters long.

```javascript
function makestring() {
   var array = [];
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   for( var i=0; i < 5; i++ ) {
       array.push(possible[(Math.floor(Math.random() * possible.length))]);
   }
   return array.join("");
}
```

you can generate random strings within a range by adding a length variable and using that in place of the 5 in the for loop.  The following code generates a random string of a length between 1 and 10 characters:

```javascript
function makestring() {
    var array = [];
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var length = Math.ceil(Math.random() * 10)

    for( var i=0; i < length; i++ ) {
        array.push(possible[(Math.floor(Math.random() * possible.length))]);
    }

    return array.join("");
}
```

You will probably want to set a minimum value as well and pass the maximum and minimum values in to the string generator as arguments:

```javascript
function makestring(min, max) {
    var array = [];
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var length = Math.ceil((Math.random() * max) + min)

    if (max < min) return "Maximum argument should be greater than minimum!";

    for( var i=0; i < length; i++ ) {
        array.push(possible[(Math.floor(Math.random() * possible.length))]);
    }

    return array.join("");
}
```

You can of course, use the random number generators above to generate random integers to be passed in to the makestring function.

## Random Tests - Codewars - A Full Example

In the following snippet, you can see how you can add a random test for your kata. Assuming the user solution to your kata is as follows:

```javascript
function sumUser(a, b) {
    return a + b;
}
```

Then you would add the following code block under "Test Cases":

```javascript
// Your predefined solution:
function sumKataAuthor(a, b) {
    return a + b;
}

// A function generating a random number in a range between min and max:
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// Run test 10 times (or as many times as you like!):
for (var i = 0; i < 10; i++) {

  // Generate random input numbers between 0 and 100 for each test:
  var a = getRandomNumber(0, 100);
  var b = getRandomNumber(0, 100);

  // Adding console.log of the inputs used in the test may help
  // the user understand and debug their solution:
  console.log('input a was:', a,', input b was:', b);

  // Compare user's function with a working solution:
  Test.assertEquals(sumUser(a, b), sumKataAuthor(a, b));
}
```

## Random Tests - Best Practices

Once you've gotten the hang on how to write basic random test cases, here are a few "best practices" that you should consider.

### I. Ensure that the reference solution/algorithm is inaccessible to the user undertaking the Kata

In the basic examples shown above, both the user solution and the reference solution exist in the **global scope**.  This means that if the user ever finds out the name of your reference solution (function), he/she could easily just utilize your reference solution in his/her function, like such:

```javascript
// User Solution
function add(a, b) {
  return addCheck(a, b); // The user cheated without actually implementing the algorithm himself/herself
}

// some code ...

// Reference Solution (in Test Cases)
function addCheck(a, b) {
  return a + b;
}

// 100 Random Tests
for (var i = 0; i < 100; i++) {
  var a = Math.floor(101 * Math.random()); // Random integer between 0 and 100 both inclusive
  var b = Test.randomNumber(); // The CW-2 JavaScript testing framework provides this method for generating a random integer from 0 to 100 inclusive so you don't need to use Math.random() yourself
  var expected = addCheck(a, b); // Best Practice - always evaluate the expected result first - explained later
  var actual = add(a, b);
  Test.assertEquals(actual, expected);
}
```

As you might have expected, this results in the user passing all the test cases without actually implementing the algorithm required in the Kata.  There are a number of ways to prevent this, e.g. using regular expression checks on the user solution to detect for the name of the reference solution, but the **simplest** way is to just enclose your test cases in a closure:

```javascript
// User Solution
function add(a, b) {
  return addCheck(a, b); // Now this won't work and will probably throw an error - see explanation below
}

// some code ...

// Test Cases section - wrapping all assertions and the reference solution in a closure that is defined and executed immediately

(function () {
  // Your reference solution - now invisible to the user
  function addCheck(a, b) {
    return a + b;
  }
  // 100 Random Tests
  for (var i = 0; i < 100; i++) {
    var a = Test.randomNumber(); // JavaScript CW-2 testing framework built-in method - explained above
    var b = Test.randomNumber();
    var expected = addCheck(a, b);
    var actual = add(a, b);
    Test.assertEquals(actual, expected);
  }
})();
```

If you then try to execute this on Codewars, you will realise that the user solution (which attempted a cheat by using your reference directly) will throw an error instead.  This is because by placing your reference solution and the test cases in a closure, you limit the definition of your reference solution in the closure that it is defined in (see [Function Scope in JavaScript](https://www.w3schools.com/js/js_scope.asp)).  As the user solution is defined in the global scope and not the scope of your closure, it will not be able to find a (global) variable called `addCheck` when it attempts to call it as a function which sabotages the user's attempt to cheat.

Additionally, if you find this method a bit complicated, note that using the [spec methods](http://www.codewars.com/docs/js-slash-coffeescript-test-reference) throughout your test cases and only defining your reference solution in the section where random tests are involved would achieve the same anti-cheat effect:

```javascript
Test.describe("add(a, b)", function () {
  Test.it("should work for some fixed tests", function () {
    // Don't forget to add fixed assertions even with your random tests!
    // It's best to have at least 5 distinct fixed assertions on top of random tests
    // You'll need them anyway when you're testing *your own* solution as you author your Kata so don't throw them away :)
    Test.assertEquals(add(1, 2), 3);
    Test.assertEquals(add(3, 4), 7);
    Test.assertEquals(add(5, 10), 15);
    Test.assertEquals(add(23, 37), 60);
    Test.assertEquals(add(100, -77), 23);
  });
  Test.it("should work for random tests", function () {
    // Define your reference soluution **here**, *not* in the global scope
    function addCheck(a, b) {
      return a + b;
    }
    // 100 random assertions
    for (var i = 0; i < 100; i++) {
      var a = Test.randomNumber();
      var b = Test.randomNumber();
      var expected = addCheck(a, b);
      var actual = add(a, b);
      Test.assertEquals(actual, expected);
    }
  });
});
```
### II. Always evaluate the expected value before the user-returned value in your random assertions

Although it is generally considered best practice for the user undertaking the Kata to keep his/her function **pure** (i.e. does not modify the variable passed in), it is usually not a hard requirement for the user solution to do so.  This means that when you are writing your random test cases, they should account for the fact that the user's solution may not be pure and **still allow such solutions to pass** as long as the correct return value is returned every time.  In order to ensure that, you should **always** evaluate the result from your reference solution **before** passing the input into the user solution:

```javascript
// Your reference solution
function addCheck(a, b) {
  return a + b;
}

// 100 random tests
for (var i = 0; i < 100; i++) {
  var a = Test.randomNumber();
  var b = Test.randomNumber();
  // Always evaluate the expected result first
  var expected = addCheck(a, b);
  var actual = add(a, b);
  // Then pass both evaluated results into the assertion method
  Test.assertEquals(actual, expected);
}
```

This may not seem important when your Kata only deals with primitive values (since a direct assignment to a function argument immediately gets rid of the reference to the variable passed in) but the problems start to become apparent when your Kata deals with arrays and objects.  **Keep in mind that the reference solution you use, however, MUST be pure.**  Otherwise, the randomly generated input will be modified by your reference solution before they get passed in to the user solution which would very likely cause the two functions to return different values which would cause the random tests to *unfairly* fail.

Note that this best practice method of generating random tests should be used in conjunction with other best practices (e.g. placing the code example above in a closure).
