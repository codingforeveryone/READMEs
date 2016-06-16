# The Codewars Platform

## Introduction

Codewars is a great way to learn (and teach) code! The Codewars platform is quite carefully developed and designed, and usually functions well, although it does have some limitations. The following is a quick guide of some of the information that you will find useful to know about the Codewars platform. Note that not all of this is available on the Codewars website and some of it is a little subjective.

## Kata Ranking

Every kata is assigned a 'kyu' rank, based on its difficulty. The ranks so far implemented, from the lowest (easiest) to the highest (hardest) are:
- 8 and 7 kyu (beginner, white belt color)
- 6 and 5 kyu (novice, yellow belt color)
- 4 and 3 kyu (competent, blue belt color)
- 2 and 1 kyu (proficient, purple belt color)

The ranking is determined by the community, and is somewhat controversial. What is difficult for some warriors may be easy for others, and 'difficulty' can be understood in different ways (amount of work needed to solve the problem, the complexity of the algorithm involved, etc.)

The ranking is also said to reflect the kata subject area. However, this is rarely considered when ranking a kata (e.g. regular expressions are only supposed to appear in katas of 4 kyu or higher, and yet there are plenty of 8 kyu regex katas).

You may find that some older katas, created in the early days of Codewars, are higher-rated than their newer counterparts.

## Kata discussion page

Once you solve a kata, you get full access to its discussion page (including the content marked as 'spoiler'), as well as to everyone else's solutions to that kata.

The discussion page is a great way to let others know of any comments you may have, ask questions, mark issues or even just thank the user for their kata. It is possible to mark your comment as 'Question', 'Suggestion' or 'Issue'.

You can use markdown in your comments, the same way as in GitHub. This is particularly useful when pasting code into your comment. Make sure to mark your comment as spoiler if it contains information about the kata that might give out clues about the solution.

It is also good practice to browse through others' solutions, expecially those marked with 'best practice' or 'clever'. These may be more efficient, concise or readable than your solution, and you will learn a lot by studying them. You are also able to comment on individual solutions, or ask the author for an explanation.

Similar solutions are grouped together, however, the algorithm behind this is rather poor so identical solutions often appear as separate. (The solutions need to be more or less exactly the same, except for whitespaces.)

## The beta process

After a beta kata is created, it goes through a community approval process, to ensure that it is of sufficient quality and that all issues have been resolved.

When you solve a beta kata, you will be able to estimate its difficulty rank (provided you have at least 50 honor, see below) and to mark it as ready. Alternatively, you may report any minor or major issues with the kata that you noticed.

Note that marking a beta kata as ready is equivalent to upvoting an official kata.

In order for a beta kata to be published as an official kata, it needs:
- 5 approval votes (i.e. be marked as ready 5 times)
- a sufficient number of difficulty ranks to achieve a consensus
- an approval from a moderator or a 'superuser' (user with 3000 honor, see below)

Most of the issues reported for the kata need to be resolved before it is published as an official kata. If any issue is kept unresolved, the number of approval votes needed for the kata to be published increases.

Try to be as clear as you can (and polite!) when raising an issue or addressing an issue that someone has raised about your kata. It is useful to mention what translation of the kata you are referring to.

## User Ranking

You are given a rank as a user, which advances based on the difficulty of the kata you complete. You need to complete 10 kata of the next rank to advance to that rank. Completing kata of higher or lower rank will reduce or increase, respectively, the number of kata that you will have to complete to advance.

Advancing to a higher rank also earns you honor (see below).

## The Honor System

You earn honor each time you complete a kata. The amount you earn depends on the belt color of the kata:
- white: +1 honor
- yellow: +2 honor
- blue: +5 honor
- purple: +10 honor

Solving a beta kata earns you an additional +2 honor per kata.

Likewise, you earn honor each time you author a kata. The honor is awarded when the kata is published as an official kata. Each kata earns you +3 honor, and additional honor depending on the belt color determined by the community (not the one assigned by yourself):
- white: +2 honor
- yellow: +4 honor
- blue: +10 honor
- purple: +40 honor

Ranking up earns you honor depending on the rank achieved:
- 7 kyu: +15 honor
- 6 kyu: +20 honor
- 5 kyu: +25 honor
- 4 kyu: +30 honor
- 3 kyu: +50 honor
- 2 kyu: +75 honor
- 1 kyu: +100 honor

Additional honor can be obtained in the following ways:
- by other people marking your beta kata as 'ready', or upvoting your published kata (+1 per upvote)
- by other people upvoting your comments or marking your solutions as 'best practice' or 'clever' (+1 per upvote)
- by people signing up to Codewars through your referrals link

Downvotes of your comments will decrease your honor (-1 per downvote).

Unfortunately, the honor system can be a bit buggy, and will not always immediately give you the right amount of honor. You usually get the honor you are missing when the system refreshes, e.g. the next time you solve a kata. 

Another limitation of Codewars is that there are no notifications for honor earned, and the honor history is not logged, which may sometimes leave you feel confused about why you have earned (or even lost) a certain amount of honor.

## Privileges

The honor also determines the 'privileges' that you get as a user.

- 25 honor: Ability to author a kata
- 50 honor: Ability to vote on beta katas
- 75 honor: Ability to mark comments as having spoiler code
- 100 honor: Ability to estimate the ranking of your own beta katas
- 200 honor: Ability to mark major issues on beta katas
- 350 honor: Ability to moderate comments marked as having spoilers
- 500 honor: Kata voting power increases to +2 honor per upvote
- 1000 honor: Kata voting power increases to +3 honor per upvote
- 1500 honor: Ability to contribute to katas
- 2000 honor: Kata voting power increases to +4 honor per upvote
- 3000 honor: Ability to approve a kata

## Resources

- [Codewars docs](https://www.codewars.com/docs/ranking-and-honor-1)
- [Codewars forum](https://www.codewars.com/topics)
- [List of privileges](http://blog.markpearl.co.za/CodeWars-Privileges-Unlock)
