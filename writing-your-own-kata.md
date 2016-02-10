<h1>Writing your own kata – a step by step guide</h1>
<p>Writing codewars kata is hard. You’re producing something that you’re hoping will be fun and challenging for a community that while supportive, has high expectations for your work. This guide is a roadmap for beginners who want to write their own kata. It’s basically my opinion on what makes a good kata and a method for going about doing it rather than an official guide. Soon your discussion section will be filled with lots of “Nice kata mate!” and not “Needs random tests + description unclear”.</p>
<p>Who is this guide for? Code warriors who are familiar with the Codewars framework but don't know where to start when it comes to writing their own kata. This guide could be used by anyone who wants to write a kata but is aimed primarily at the [Founders & Coders](http://www.foundersandcoders.com/) (FAC) community, so all example code is in Javascript, the community's language of choice.</p>
<h2>Step 1 – Come up with an idea</h2>
<p>According to Wikipedia, *“Kata (型 or 形 literally: "form"), a Japanese word, are the detailed choreographed patterns of movements practised in many traditional Japanese arts, most commonly known for their presence in the martial arts, such as aikido, judo, kendo and karate.”*</p>
![sword kata](https://c1.staticflickr.com/5/4124/5216047112_51457061d5_b.jpg)
<p>Much in the same way that a martial arts kata requires a series of moves to be carried out in a controlled environment in order to hone one’s body and mind for combat, so codewars kata can be seen as exercises to help programmers improve their skills and knowledge of the language they are working in. You should approach writing a kata with this frame of mind. Which language feature am I testing knowledge of? What skills will be required?</p>
<p>If you’re short of inspiration, a good place to start is to think of a something you learned recently, such as sorting an array or regular expressions, then to try to use that to solve a real life problem you might have had. Remember, you'll have to solve this kata yourself in a few minutes so always have in the back of your head what data structures and methods you might use, even if it's an outline at this stage - don't set yourself a challenge that's far beyond your current ability.</p>
<p>Try having a look at other people’s kata. Could you ask the user to do something similar but with a twist? Could you stitch two existing kata together to make something new and interesting? Or maybe a simplified version of something you've seen? You’re going to have to look through other people’s kata anyway if you follow golden rule #1!</p>
<h5>Golden rule 1 – Search for duplicate kata</h5>
<p>Don’t worry, you’re not on Stack Overflow so you won’t get actually crucified for posting a duplicate kata, but you may get mildly tarred and feathered. And certainly as the number of kata on the site increases, this rule will become ever more important. But what is and is not a duplicate?</p>
<p>Duplications spring up naturally as authors try to use established concepts to test programming skill, for example sudoku or the Fibonacci sequence. And who can blame them? Imagine having coming up with a new game every time or defining your own sequence of numbers! The problem arises when the solution for one kata can be pretty much copy-pasted into another one, or lifted straight from a well-known textbook. Not much of a challenge anymore! As well as to avoid duplication, it's important to make your kata challenging by adding your own twist or angle and following golden rule #2.</p>
![karate kata gif](https://45.media.tumblr.com/tumblr_m67my3RMlA1rvcjd7o1_400.gif)
<h5>Golden rule 2 – Give it a twist!</h5>
<p>Martial arts kata are executed as a series of steps, turns, kicks, punches and sword slashes. So must your kata require the user to carry out a series of mental turns and calculation steps. There are other places on the web to practice syntax. In more advanced kata, the twist is often the requirement for optimisation through a time limit. At a beginner level it might take the form of:<p>
<ul>
<li>Fulfilling multiple requirements from the same method e.g. instead of removing all the spaces from a string with a regex, reducing any instances of multiple spaces to just one space with a regex.</li>
<li>Additional computation e.g. instead of returning an array of numbers in a range, returning an array of all the prime numbers in a range.</li>
<li>Formatting requirements e.g. instead of returning an array, returning an array sorted in a particular way.</li>
</ul>
<p>Finally, read through [Section 2 of the Conjured Codewars Codex](http://bkaestner.github.io/codewars-rules/#writing-a-kata) and the [Kata Best Practices](http://www.codewars.com/topics/kata-best-practices) section in the Codewars Docs which talk about important conventions that I have not covered in detail here.</p>
<h2>Step 2 – Draft description and name</h2>
<p>So you’ve finally got an idea you want to run with. Well done you, that’s half the battle! I find a good step at this stage is to open up the new kata tab and to give your kata a provisional name and draft description.</p>
![new kata](http://i.imgur.com/2o3NmnK.png "new kata")
<p></p>
<p>This has two benefits:</p>
<ul>
<li>You can refer back to this draft description as you are writing the rest of the kata so it’s useful as an aide-memoir both for the writing process and generally should you decide to go and work on something else and then come back.</li>
<li>Writing the kata requirements focusses your mind on what the kata will actually look like and can help guide the tests you are about to write. Ever heard of [rubber ducking](https://www.youtube.com/watch?v=huOPVqztPdc)? Forcing yourself to think out loud or in writing can help clarify ideas that are swirling around in your brain E.g. Do I want the user to return a number or a string? How many parameters should the function have? And what would a good name the function be?</li>
</ul>
<p>At this stage it can be a summary of what the user will be asked to do. You can refine it as you go along and finalise before you publish but to be able to start the next step you're going to need to have an idea of what you're going to ask the user's function to return and what/how many arguments the function will take.</p>
<h2>Step 3 – Write basic tests</h2>
<p>Now you know what you want your user to do it’s time for your first test. Test Driven Development (TDD) involves, among other things, following the practice of writing the test before you’ve written the solution. But first to introduce the tests themselves:</p>
<p>The full test reference docs can be found [here](http://www.codewars.com/docs/js-slash-coffeescript-test-reference). In older kata you might see `Test.expect`, which is now considered bad practice, so as a general rule you will be using `Test.assertEquals` and `Test.assertSimilar`. They both take three arguments:</p>
<p>`Test.assertEquals(`the user’s solution, the correct answer, an optional message if the test fails`)`</p>
<p>`Test.assertEquals()` asserts that the first two arguments it is passed evaluate to have the same value. This works for strings, numbers and booleans, but not for arrays or objects. An array of numbers does not have a 'value'. To test arrays and objects we use `Test.assertSimilar()`. Some other testing frameworks use `deepEqual()` for objects - it's the same idea. I'm going to use `Test.assertEquals` in the examples below but just remember assertSimilar for arrays and objects, assertEquals for everything else.</p>
<p>Choose a simple input then figure out (in your head) what the output should be and slot these into your first test. For example if your function `multiply` multiplies values it is given by two then your first test might look like this:</p>
<p>```Test.assertEquals(multiply(2), 4, “Should return double the given argument!”)```</p>
<p>Write your first tests into the Test cases box on the bottom right-hand side. Now it hit the green validate solution button. Oh dear it failed! Now all we have to do is write something that passes!</p>
![failed test](http://i.imgur.com/nvWyNTU.png)
<p></p>
<p>Check out [Section 4 of the Conjured Codewars Codex](http://bkaestner.github.io/codewars-rules/#tested-testing-theories) for more details on testing. I've only just touched on it here.</p>
<h2>Step 4 – Write your solution</h2>
<p>Now, like you’ve been doing so far on codewars, write a function that fulfils the requirements of the test. Once you have validated your solution and made it turn green, then give yourself a pat on the back, you just completed the first two steps of TDD! When writing your solution and tests try following the TDD cycle of:</p>
<ul>
<li>Red - Write a test for one aspect of the function.</li>
<li>Green - Update the solution so that this new test can be passed.</li>
<li>Refactor - Go back to your solution before writing the next test to see if you can make it clearer/simpler.</li>
<li>Repeat!</li>
</ul>
![tdd flow](http://hanwax.github.io/assets/tdd_flow.png)
<p></p>
<p>Your vision for the kata is likely to change during this process because you’ve realised that what is in the description is too easy or too hard or just not interesting. Make sure you keep the draft description updated as you go along.</p>
<h2>Step 5 – Fixed test cases</h2>
<p>A good set of tests should work together as a team. Imagine each test as an obstacle on an assault course, where the obstacles are getting steadily harder</p>
![obstacle course](https://upload.wikimedia.org/wikipedia/commons/6/63/Clyne_Farm's_assault_course_-_geograph.org.uk_-_791094.jpg)
<p></p>
<p>Only a solution that can climb over every wall, crawl through every tunnel and swim through every stream should get through to the other side. If you write tests that only ask the solution to climb over walls then how do you know that it can crawl through tunnels? That’s why it’s important to follow golden rule #3.</p>
<h5>Golden rule 3 – Test for edge cases</h5>
<p>An edge case test can probably best be described as a test that if the user has missed part of the description, will trip them up. For example, let's return to our `multiply` function from earlier. I now want it to double its given argument *unless* the argument is an odd number, in which case I want it to triple its given argument. I would make sure that at least one of the tests covers a case where the argument is an odd number:</p>
<p>`Test.assertEquals(multiply(1), 3, “Should return triple the given argument!”)`</p>
<p>Go through each element of the description to make sure that it has been covered in this way. The idea of making sure that every aspect of the solution is being tested is similar to another well-known TDD concept, [code coverage](https://en.wikipedia.org/wiki/Code_coverage). Beyond the scope of this guide, but worth checking out if you're interested!</p>
![code coverage meme](http://cdn.meme.am/instances/500x/61965170.jpg)
<p></p>
<p>You should write each test case so that it ‘only just’ passes. This stops users getting through the tests if they have made a minor error. For example let's say we have a kata that mentions 10 minutes in its description. We should have a test in there that fails if you forget that 10 minutes is 0.1666 of an hour NOT 0.1 of an hour. Look for opportunities to pick out the edges like this and once you’ve got the major bases covered then you’re ready to follow golden rule #4.</p>
<h5>Golden rule 4 – Example tests</h5>
<p>The general convention is that if a solution passes the example test fixtures it should stand a good chance of passing the full testing suite. It might get picked off by the random tests or require a rethink because it runs too slowly and the full tests require optimisation but with your random tests you should be giving your users a very clear indication of what you’re looking for. Some kata have no example tests. Some kata have very few examples, then the full testing suit has totally unexpected demands. Don’t do this. It’s annoying. Write carefully edged example tests with helpful error messages that enable the user to build their function piece by piece in the same way you have done.</p>
<h2>Step 6 – Full testing suite</h2>
<p>If the user's solution passes the full tests, they have completed the kata and get the honour for doing so. It is your responsibility to make sure they can only get this honour if they have completed the kata to your satisfaction.</p>
<p>It's common practice to start the full test suite with the same fixed test fixtures you just used as example tests. Tests can be grouped and named using `Test.describe` and `Test.it`. Refer to [Section 4.1.1 of The Conjured Codewars Codex](http://bkaestner.github.io/codewars-rules/#group-your-tests)  or look at other people's kata to see how to do this.</p>
<p>But as things stand, someone could hardcode a kata solution that passed all the tests because they can figure out what the test results should be and create a function that just feeds the tests those answers! In order to stop people doing that, you're going to need to apply golden rule #5.</p>
<h5>Golden rule 5 – Random tests</h5>
<p>Now we're getting to a part which can trip people up. Once you know what you're doing, random tests are easy. Let's take it slow with some sub-steps:</p>
<h3>Step 6a – The test (correct) solution</h3>
<p>Copy across your correct solution to just underneath the block of fixed tests but change the function name to something like `testSolution`.</p>
<h3>Step 6b – Test fixture descriptions</h3>
<p>Use `Test.describe` and `Test.it` to call this set of tests 'Random Tests'</p>
![random_tests](http://i.imgur.com/rgDwAbF.png)
<h3>Step 6c – The test loop</h3>
<p>The random test needs to be called multiple times. Above, I have used a 'for' loop  to call `Test.assertEquals` 40 times.</p>
<h3>Step 6d – Generate random variables</h3>
<p>Now we need to use our heads because not just any old random variables will do. You need to generate random variables that emulate the variables that you would expect as arguments for the function you are testing. Take our `multiply` function that multiplies the argument by 2 if even or 3 if odd. The Math object's random method, `Math.random()`, is probably going to give us something like 0.4357892345283 but we need the random variable to be an integer if the tests are going to work. Or if the function takes multiple number arguments, think about what ranges the random numbers need to cover. Going back to our obstacle course analogy, make sure each obstacle is covered and could come up in the random tests.</p>
<p>If the function takes a string, you will need to generate a random string of an appropriate length with appropriate characteristics. Does the string need to emulate sentence structure, with spaces, commas and fullstops? Do substrings such as a word that is being filtered or counted need to show up? How many times will they show up?</p>
<p>Random strings are tricky and this part can take some time if the variables you need to generate have specific requirements. Stuck? Go into the translation section of a kata you have completed that uses tests similar to the ones you want to implement. See how they've done it.</p>
<p>These variables are created inside the loop so that with each iteration we have a new set of random variables to run the tests with!</p>
<h3>Step 6e – Test the solutions</h3>
<p>Now we test the result from the user's solution against the result from your correct solution using the same random variable(s). `Test.assertEquals(multiply(i), testSolution(i), 'Should work for random tests!')` If the function that the user has defined is working properly, `Test.assertEquals` should evaluate userSolution(i) and yourSolution(i) as equal. If not, they get an error message back saying 'Should work for random tests!'</p>
<h2>Step 7 – Final description</h2>
<p>Phew, we've done all the hard stuff! Now just need to add the polish. Revisit your description to make sure that it includes everything that the user will need to complete the kata. Have you kept it up to date with any changes that occured in the solution/test writing process? Does it follow [sections 2.1 to 2.6 of the Conjured Codewars](http://bkaestner.github.io/codewars-rules/#writing-a-kata)?  Remember many people on the site don't have English as their first language. Think of them when writing your description. Now your description is perfect, time for golden rule #6</p>
<h5>Golden rule 6 – Double-check your description</h5>
<p>Check in the preview box to make sure the markdown is coming through correctly. Stand up, go away and do something else then come back to re-read your description. There's no spell or grammar check in the codewars editor so it's all down to you and your beady eyes!</p>
<h2>Step 8 – Estimated rank and tags</h2>
<p>Rankings on Codewars, as you have probably discovered, are highly subjective. Have you ever completed a 6 kyu in 5 minutes because you were familiar with the concept but got stuck on a 7 kyu for ages because it was testing something that you didn't know but other warriors had ranked as 'easy'? That's certainly quite a common experience. As far as I can tell, the ranking you give your kata at this stage doesn't have a huge impact, it's the community's input that determines your kata's ranking so don't worry to much as this stage and just use your best judgment.</p>
![tags](http://i.imgur.com/kelXt9W.png)
<p></p>
<p>For coming up with tags, go to the page that lets you search for kata. Have a look down the left-hand side at the bottom to see what the common tags are. Add the appropriate tags to your kata.</p>
<h2>Step 9 – Publish!</h2>
<p>Well done, you just wrote a kata! Give yourself a pat on the back! Now go through the golden rule checklist</p>
<ul>
	<li>#1 - Have you searched for duplicate kata?</li>
	<li>#2 - Does you kata have an interesting twist?</li>
	<li>#3 - Have you tested for edge cases?</li>
	<li>#4 - Have you included example tests?</li>
	<li>#5 - Does the full test suite include random tests?</li>
	<li>#6 - Have you double-checked your description?</li>
</ul>
<p>If the answer to all of these is yes, hit publish! Go to your published kata and copy the link into one of the Coding for Everyone Gitters. The ones below seem to be the most most popular ones for publishing kata but just check first to see where people are active as this might change in the future:<p>
<ul>
	<li>https://gitter.im/codingforeveryone</li>
	<li>https://gitter.im/codingforeveryone/js</li>
	<li>https://gitter.im/codingforeveryone/codewars</li>
</ul>
<h2>Step 10 – Stay involved</h2>
<p>That's you all done right? NOPE! It's highly likely that users will be able to make suggestions or point out errors. If you change the tests, you invalidate any solutions that would fail the new testing suite. This is why you have a duty of stewardship, especially in the first 24/48 hours. Log in to see if you have any notifications and try to address an issues quickly. Mark issues as resolved once you have dealt with them. Other users may post translations your kata. Follow [this](https://github.com/Codewars/codewars.com/wiki/Tutorial:-Approving-translations) tutorial if you're unsure how to approve them.</p>
<p>Your kata is now in beta stage. It will be approved once:</p>
<ul>
<li>Enough people have done it.</li>
<li>Enough people have ranked it.</li>
<li>A super-user (someone with really high honour) has approved it. If you are just waiting for a super-user to approve, post in the Coding for Everyone Gitter and someone will help you.</li>
</ul>
