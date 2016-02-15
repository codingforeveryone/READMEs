# Random Test Cases for Complete Beginners

If you are having to create your very first random test cases for your kata and have not any idea of what they are or how to produce
them, this document might help you. 

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

The variable random will now be a random number between 0 and 1, for example: 0.03526814002543688

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
except the name. Well, don’t forget that the ‘addCheck’ function’s output will be compared not against your output, but against the
user’s output.

Obviously, not for all test cases you need to generate numbers as sometimes you will need to generate strings, stings of random length
and so forth.

I sometimes felt that generating these random test cases was a kata to solve in itself. 

I hope this short introduction gave you an idea of what random test cases are and how and where to create them. Please note that I
will update this document as time  goes on.
