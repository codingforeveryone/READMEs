# Writing your own kata – a step by step guide
Writing Codewars kata is hard. You’re producing something that you’re hoping will be fun and challenging for a community that while supportive, has high expectations for your work. This guide is a roadmap for beginners who are familiar with the Codewars framework but don't know where to start when it comes to writing their own kata. Writing a kata can be quite a long and involved process so don't try to read this guide all in one go. Just dip into the relevant bits when you're at each stage. All example code is in the [Founders & Coders](http://www.foundersandcoders.com/) language of choice, Javascript.
## Step 1 – Come up with an idea
According to Wikipedia, _“Kata (型 or 形 literally: "form"), a Japanese word, are the detailed choreographed patterns of movements practised in many traditional Japanese arts, most commonly known for their presence in the martial arts, such as aikido, judo, kendo and karate.”_

![sword kata](https://c1.staticflickr.com/5/4124/5216047112_51457061d5_b.jpg)

You should approach writing a kata with this frame of mind. Which language feature am I testing knowledge of? What skills will be required? If you’re short of inspiration, a good place to start is to think of a something you learned recently, then to try to apply it to a real life problem. Remember, you'll have to solve this kata yourself in a few minutes so always have in the back of your head what data structures and methods you might use, even if it's an outline at this stage - don't set yourself a challenge that's far beyond your current ability.

Try having a look at other people’s kata. Could you ask the user to do something similar but with a twist? Could you stitch two existing kata together to make something new and interesting? Or maybe a simplified version of something you've seen? You’re going to have to look through other people’s kata anyway if you follow golden rule #1!
#### Golden rule 1 – Search for duplicate kata
Don’t worry, you’re not on Stack Overflow so you won’t get actually crucified for posting a duplicate kata, but you may get mildly tarred and feathered. Duplications spring up naturally as authors try to use established concepts to test programming skill, for example sudoku or the Fibonacci sequence. And who can blame them? Imagine having coming up with a new game every time or defining your own sequence of numbers! To avoid duplication, make sure you follow golden rule #2.
#### Golden rule 2 – Give it a twist!
Martial arts kata are executed as a series of steps, turns, kicks, punches and sword slashes. So must your kata require the user to carry out a series of mental turns and calculation steps. There are other places on the web to practice syntax, your kata should make the user think. Here are some example twists:

* Instead of removing all the spaces from a string with a regex, reducing any instances of multiple spaces to just one space with a regex.
* Instead of returning an array of numbers in a range, returning an array of all the prime numbers in a range.
* Instead of returning an array, returning an array sorted in a particular way.

Finally make sure you have read through [Section 2 of the Conjured Codewars Codex](http://bkaestner.github.io/codewars-rules/#writing-a-kata) and the [Kata Best Practices](http://www.codewars.com/topics/kata-best-practices) section in the Codewars Docs which talk about other kata writing conventions.
## Step 2 – Draft description and name
So you’ve finally got an idea you want to run with. Well done you, that’s half the battle! I find a good step at this stage is to open up the new kata tab and to give your kata a provisional name and draft description.

![new kata](http://i.imgur.com/2o3NmnK.png "new kata")

This has two benefits:

* You can refer back to this draft description when you are writing the rest of the kata or if you want to go away and work on something else.
* Writing the kata requirements focuses your mind on what the kata will actually look like and can help guide the tests you are about to write. Ever heard of [rubber ducking](https://www.youtube.com/watch?v=huOPVqztPdc)? Forcing yourself to think out loud or in writing can help clarify ideas that are swirling around in your brain E.g. Do I want the user to return a number or a string? How many parameters should the function have? And what would a good name the function be?

At this stage it can be a summary. You can refine it as you go along but to start the next step you're going to know roughly what the user's function will return and what/how many arguments the function will take.
## Step 3 – Write basic tests
Now you know what you want your user to do it’s time for your first test. Test Driven Development (TDD) involves, among other things, following the practice of writing the test before you’ve written the solution.

The full test reference docs can be found [here](http://www.codewars.com/docs/js-slash-coffeescript-test-reference). In older kata you might see `Test.expect()`, which is now considered bad practice, so don't use that.

* For numbers, strings and booleans use `Test.assertEquals()`
* For arrays and objects use `Test.assertSimilar()`

They both take three arguments:

`Test.assertEquals(`the user’s solution, the correct answer, an optional message if the test fails`)`

Choose a simple input then figure out (in your head) what the output should be and slot these into your first test. For example if your function multiply() multiplies values it is given by two then your first test might look like this:
```javascript
Test.assertEquals(multiply(2), 4, 'Should return double the given argument!')
```
Write your first tests into the Test cases box on the bottom right-hand side then press the green Validate Solution button. Oh dear it failed! Now all we have to do is write something that passes!

![failed test](http://i.imgur.com/nvWyNTU.png)

Check out [Section 4 of the Conjured Codewars Codex](http://bkaestner.github.io/codewars-rules/#tested-testing-theories) for more details on testing. I've only just touched on it here.
## Step 4 – Write your solution
Write a function that fulfills the requirements of the test. Once you have validated your solution and made it turn green, then give yourself a pat on the back, you just completed the first two steps of TDD!

1. Red - Write a test for one aspect of the function.
2. Green - Update the solution so that this new test can be passed.
3. Refactor - Go back to your solution before writing the next test to see if you can make it clearer/simpler.
4. Repeat!

![tdd flow](http://hanwax.github.io/assets/tdd_flow.png)

Your vision for the kata is likely to change during this process because you’ve realised that what is in the description is too easy or too hard or just not interesting. Make sure you keep the draft description updated as you go along.
## Step 5 – Fixed test cases
A good set of tests should work together as a team. Imagine each test as an obstacle on an assault course, where the obstacles are getting steadily harder.

![obstacle course](https://upload.wikimedia.org/wikipedia/commons/6/63/Clyne_Farm's_assault_course_-_geograph.org.uk_-_791094.jpg)

Only a solution that can climb over every wall, crawl through every tunnel and swim through every stream should get through to the other side. If you write tests that only ask the solution to climb over walls then how do you know that it can crawl through tunnels? That’s why it’s important to follow golden rule #3.
#### Golden rule 3 – Test for edge cases
An edge case test can probably best be described as a test that if the user has missed part of the description, will trip them up. For example, let's return to our `multiply()` function from earlier. I now want it to double its given argument _unless_ the argument is an odd number, in which case I want it to triple its given argument. I would make sure that at least one of the tests covers a case where the argument is an odd number:
```javascript
Test.assertEquals(multiply(1), 3, 'Should return triple the given argument!')
```
Go through each element of the description to make sure that it has been covered in this way. The idea of making sure that every aspect of the solution is being tested is similar to another well-known TDD concept, [code coverage](https://en.wikipedia.org/wiki/Code_coverage). Beyond the scope of this guide, but worth checking out if you're interested!

![code coverage meme](http://cdn.meme.am/instances/500x/61965170.jpg)

Writing each test case so that it ‘only just’ passes can or is right on the 'edge' can catch out little errors. Once you’ve got the major bases covered then you’re ready to follow golden rule #4.
#### Golden rule 4 – Example tests
The general convention is that if a solution passes the example test fixtures it should stand a good chance of passing the full testing suite. If your kata has lots of solution submissions but very few correct answers, that might be a sign that you need better example tests.
## Step 6 – Full testing suite
If the user's solution passes the full tests, they have completed the kata and get the honour for doing so. It is your responsibility to make sure they can only get this honour if they have completed the kata to your satisfaction.

It's common practice to start the full test suite with the same fixed test fixtures you just used as example tests. Tests can be grouped and named using `Test.describe()` and `Test.it()`. Refer to [Section 4.1.1 of The Conjured Codewars Codex](http://bkaestner.github.io/codewars-rules/#group-your-tests) or look at other people's kata to see how to do this.

But as things stand, someone could hardcode a kata solution that passed all the tests because they can figure out what the test results should be and create a function that just feeds the tests those answers! In order to stop people doing that, you're going to need to apply golden rule #5.
#### Golden rule 5 – Random tests
Now we're getting to a part which can trip people up. Once you know what you're doing, random tests are easy but a lot of work can go into writing good random tests, so I won't be able to do it justice in this guide. I've tried to break the process into substeps but check out [Random Test Cases for Complete Beginners](/codewars/random-test-cases-for-complete-beginners.md) for more help.
### Step 6a – The test (correct) solution
Copy across your correct solution to just underneath the block of fixed tests but change the function name to something like `testSolution()`.
### Step 6b – Test fixture descriptions
Use `Test.describe()` and `Test.it()` to call this set of tests 'Random Tests'

![random_tests](http://i.imgur.com/rgDwAbF.png)
### Step 6c – The test loop
The random test needs to be called multiple times. Above, I have used a 'for' loop  to call `Test.assertEquals()` 40 times.
### Step 6d – Generate random variables
Now we need to use our heads because not just any old random variables will do. You need to generate random variables that emulate the variables that you would expect as arguments for the function you are testing. Take our `multiply()` function that multiplies the argument by 2 if even or 3 if odd. The Math object's random method, `Math.random()`, is probably going to give us something like 0.4357892345283 but we need the random variable to be an integer if the tests are going to work. Or if the function takes multiple number arguments, think about what ranges the random numbers need to cover. Going back to our obstacle course analogy, make sure each obstacle is covered and could come up in the random tests.

Random strings are tricky and this part can take some time if the variables you need to generate have specific requirements. Stuck? Go into the translation section of a kata you have completed that uses tests similar to the ones you want to implement. See how they've done it.

These variables are created inside the loop so that with each iteration we have a new set of random variables to run the tests with!
### Step 6e – Test the solutions
Now we test the result from the user's solution against the result from your correct solution using the same random variable(s).
```javascript
Test.assertEquals(multiply(i), testSolution(i), 'Should work for random tests!')
```
If the function that the user has defined is working properly, `Test.assertEquals()` should evaluate `userSolution(i)` and `yourSolution(i)` as equal. If not, they get an error message back saying 'Should work for random tests!'
### Step 6f – Print the input
Especially with random tests, you want to make sure that the user knows why their solution failed. By default, only the _output_ of user's and the correct solutions is printed, which can be of very little help with some katas, and can make troubleshooting difficult. It is therefore good practice to print the input that is being used in each test, like so:

``` javascript
Test.it('Testing for argument' + i, function(){
  Test.assertEquals(multiply(i), testSolution(i));
});
```

This would then appear in the following format during testing:
```
// Testing for 5
// Test passed: 15 == 15
```

## Step 7 – Final description
Phew, we've done all the hard stuff! Revisit your description to make sure that it includes everything that the user will need to complete the kata. Have you kept it up to date with any changes that occurred in the solution/test writing process? Does it follow [sections 2.1 to 2.6 of the Conjured Codewars Codex](http://bkaestner.github.io/codewars-rules/#writing-a-kata)? Check out the [Markdown Cheat Sheet](/programmer-skills/markdown-cheat-sheet.md) if you need a markdown reminder. Remember many people on the site don't have English as their first language. Now your description is perfect, time for golden rule #6
#### Golden rule 6 – Double-check your description
Check in the preview box to make sure the markdown is coming through correctly. Stand up, go away and do something else then come back to re-read your description. There's no spell or grammar check in the codewars editor so it's all down to you and your beady eyes!
## Step 8 – Estimated rank and tags
As far as I can tell, the ranking you give your kata at this stage doesn't have a huge impact, it's the community's input that determines your kata's ranking so don't worry to much as this stage and just use your best judgment.
![tags](http://i.imgur.com/kelXt9W.png)

For coming up with tags, go to the page that lets you search for kata. Have a look down the left-hand side at the bottom to see what the common tags are. Add the appropriate tags to your kata.
## Step 9 – Publish!
Well done, you just wrote a kata - give yourself a pat on the back! Now go through the golden rule checklist
* #1 - Have you searched for duplicate kata?
* #2 - Does you kata have an interesting twist?
* #3 - Have you tested for edge cases?
* #4 - Have you included example tests?
* #5 - Does the full test suite include random tests?
* #6 - Have you double-checked your description?

If the answer to all of these is yes, hit publish! Go to your published kata and copy the link into the [Coding for Everyone Codewars Gitter](https://gitter.im/codingforeveryone/codewars). Coding for everyone has a few active gitters. Post your kata into the one called Codewars rather than the js or general purpose chats.
## Step 10 – Stay involved
That's you all done right? NOPE! It's highly likely that users will be able to make suggestions or point out errors. If you change the tests, you invalidate any solutions that would fail the new testing suite. This is why you have a duty of stewardship, especially in the first 24/48 hours. Log in to see if you have any notifications and try to address issues quickly. Mark issues as resolved once you have dealt with them. Other users may post translations your kata. Follow [this](https://github.com/Codewars/codewars.com/wiki/Tutorial:-Approving-translations) tutorial if you're unsure how to approve them.

Your kata is now in beta stage. It will be approved once:

* Enough people have done it.
* Enough people have ranked it.
* A super-user (someone with really high honour) has approved it. If you are just waiting for a super-user to approve, post in the Coding for Everyone Gitter and someone will help you.
