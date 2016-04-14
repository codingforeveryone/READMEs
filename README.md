# READMEs

[![Join the chat at https://gitter.im/codingforeveryone/READMEs](https://badges.gitter.im/codingforeveryone/READMEs.svg)](https://gitter.im/codingforeveryone/READMEs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

##Introduction
This is a place for creating, editing and using tutorials (READMEs). The idea is to help build a collection of tutorials as a way to consolidate your own learning and to help others. There are two ways to contribute:

1. Improve the existing tutorials.
2. Add a new tutorial.

But first you need to understand a bit about GitHub!

##Using GitHub

GitHub can be confusing at first. You need to understand at least the meaning of the terms *branch*, *master*, and *pull request* before you will be able to contribute. Check out the README on the [Contributor workflow](https://github.com/codingforeveryone/READMEs/blob/master/contribution-workflow.md) for more information.

Note that the existing READMEs are available at two locations, the [repository](https://github.com/codingforeveryone/READMEs) from where you can edit them and add new ones, and the [GitBook](http://codingforeveryone.foundersandcoders.org/index.html) which represents the files in a more convenient form for browsing. Cross-references within READMEs should point to the files in the GitBook, not the repository.

GitHub READMEs are written using a markup language called Markdown. You can familiarise yourself with Markdown using the [Markdown Cheat Sheet](http://codingforeveryone.foundersandcoders.org/programmer-skills/markdown-cheat-sheet.html).

##Improving the existing tutorials

This is the most important way to contribute to the READMEs as it helps to assure the quality of the content.  It is also easier for others to make more insightful contributions to high quality content than if the content was lower and more disorganised.  You should familiarise yourself with the existing content and consider how to improve it before attempting to write a new README.

###Editing
Do not be shy about suggesting changes to other people's work. The [Contributor workflow](https://github.com/codingforeveryone/READMEs/blob/master/contribution-workflow.md) ensures that authors have a chance to look over the changes you suggest and reject them if they do not feel they are appropriate.

You will see in the [Contributor workflow](https://github.com/codingforeveryone/READMEs/blob/master/contribution-workflow.md) that different kinds of changes should be labelled differently when you submit them. Some basic kinds of change and the branch names you should use for them are below:


|Type of correction|Branch name|
|----------------|:-------------:|
|Correcting grammatical mistakes or typos|*/correct*|
|Reorganising or clarifying material|*/enhance*|
|Adding new sections|*/add*|

You can make up your own name if these do not seem appropriate!

##Adding a new tutorial

###General guidelines
Make sure the topic is not already covered in other READMEs. Note that another README may cover your topic of interest despite having another title, as programming topics often overlap.  You will need to become familiar with the content of the other READMEs before writing a new one.  Keep the topic small, and aim to be simple and brief. Do not feel you need to write at length if an external resource has done it well: just summarise and link to it. In any case, your README should contain at least:

###Essential
1. An **Introduction** providing a single paragraph on the what, why and how of the topic.
2. A section called **Related**, listing related topics and linking to existing READMEs in the GitBook where appropriate. The 'Related' section **must** outline a related topic that is not covered in yours or other existing READMEs, or a suggesion on how the topic of your README could be extended. You should also raise your related topic as an issue and mention it on Gitter.  This will help other users to get ideas on what to write about.
3. A final section called **References**, linking to other helpful resources on the topic.

If you cannot fulfill all of the above requirements including the general guidelines, your README may not be merged into the master branch of this repository. If you are just looking to share a quick tip you learned, consider contributing it to the [Today I Learned](https://github.com/codingforeveryone/today-i-learned) repository. If you want to write about the subject anyway, to improve your own understanding, you may consider writing a blog post or an article on your own website if you have one, which you can link in the Gitter rooms.

Make sure you give your file a sensible name: sensible filenames are all lower-case, do not have spaces or non-ASCII characters and end with the .md file extension. Some further notes:

###Optional
4. If you think the topic can be clarified with a Code Wars kata, then create one and link to it.
5. Consider adding a nice illustrative diagram or screenshot.
6. **Bonus**: If you are feeling adventurous, create a screencast to accompany your README.

###Submitting a pull request

Before you submit a pull request for a new README, please make sure you have created it in the appropriate folder and added a link to it in SUMMARY.md. Submit the new file and revised SUMMARY.md as part of a single pull request. If you are unsure how to do this, consult the [Contributor workflow](https://github.com/codingforeveryone/READMEs/blob/master/contribution-workflow.md) README.

###Maintaining the GitBook

Files are placed in the wrong location and need moving, links are inaccurate or go out of date...If you see something that looks wrong, change it!

|Type of correction|Branch name|
|----------------|:-------------:|
|Maintenance|*/maintenance*|
