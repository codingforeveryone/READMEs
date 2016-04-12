# Contribution Workflow

## Introduction

This document outlines the workflow and steps to go through when proposing new changes to the READMEs repository. The workflow counts for changes to improve current READMEs as well as for adding new READMEs.
At first sight the process might seem complicated but it is a great exercise to practice contribution to future programming projects and
ensures that all added changes are checked.

##The Feature Branch Workflow

The process used is called [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).
The basic concept of this workflow is that every change is treated as a new "feature" and made on branch dedicated to that change.
Once the change is ready a [pull request](https://help.github.com/articles/using-pull-requests/) is raised. This pull request will be checked by another person and then merged into the master branch.
After merging the branch is deleted.

The following picture visualizes the process of creating and merging a new branch for each feature or change:

![Feature Branch visualization](http://wiki.techniv.fr/images/3/3c/Git_Feature_Workflow.png)

In the next chapter we will go through the necessary steps and how to execute them through the command line.

##Steps to go through for each change

There are 4 main steps to go through for a new change to be implemented. The first 3 steps are done by the person who proposes the change, while the forth step has to be done by a different person to ensure quality.

1. [Create a new branch](contribution-workflow.md#1.-create-a-new-branch)
2. [Stage, commit & push changes to the branch](contribution-workflow.md#2.-stage,-commit-&-push-changes-to-the-branch)
4. [Create and assign a pull request](contribution-workflow.md#3.-create-and-assign-a-pull-request)
5. [Review & merge the changes](contribution-workflow.md#4.-review-&-merge-the-changes)

###1. Create a new branch

The first step is to create a new branch for the proposed change. Before you create the branch you should make sure your master is up-to-date by pulling all previous changes with git pull.

To create a new branch switch to the branch you can use the following command:
```bash
$ git checkout -b <name of the branch>
```
This is equal to first creating the branch and then switching to it with the following two commands:
```bash
$ git branch <name of the branch>
$ git checkout <name of the branch>
```

After creating and switching to the branch locally you should push the branch to github and set it as the default upstream branch:
```bash
$ git push -u origin <name of the branch>
```

More details on creating and managing branches can be found in the following [documentation](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches).

So how should you name your branch? Here's where the naming convention comes in.

####Naming convention for new branches

In order to clearly identify what the branch is used for, the branch should be named according to the following naming convention.

**"file name"/"type of change"/"short summary of change"**

Examples for possible branch names:
* README/add/intro-added
* ES6/correct/typos
* hoisting/enhance/structure-changed
* contribution-workflow/new

This kind of naming convention not only helps to see what branches are used for. It also impacts the review process because a simple typo correction can be approved and merge more quickly than a larger change.
Additionally it makes sure that

_NOTE: This naming convention makes sense for this repository because changes should be made to each README file on separate branches. For other projects you might want to choose different naming conventions._

###2. Stage, commit & push the changes to the branch

Those steps add your local changes to the branch. Here the basic terminal commands for the Mac command line are outlined.

More details on those commands can be found in the [Git Basics Tutorial](https://github.com/codingforeveryone/READMEs/blob/contribution-workflow/new/programmer-skills/git-basics.md) and the [official Github help pages](https://help.github.com/articles/adding-a-file-to-a-repository-from-the-command-line/).

Staging changes to the file:
```bash
$ git add <name of the file>
```

Commiting the staged changes:
```bash
$ git commit -m "summary of changes made"
```

Pushing the commited stages on the branch:
```bash
$ git push
```

For git push to correctly work the default upstream branch has to be set correctly already. Otherwise you have to use the following command once in order to set the upstream branch.

```bash
git push -u origin "name of the branch"
```

###3. Create pull request to master

A [pull request](https://help.github.com/articles/using-pull-requests/) is a request to transfer the changes from your branch to master. To issue the pull request we recommend using the github website.

On the repository you will go through the following steps to issue your pull request:

1. Switch to your branch
2. Click on "New pull request"
3. Name & assign your pull request
4. Click on "Create pull request"

This is quite straight-forward. You can see the steps in more detail on [Github help](https://help.github.com/articles/creating-a-pull-request/).

#### Assign the pull request

If possible always assign your pull request to a specific person. That makes sure someone gets notified to look at it.
The assigned person should either be the original creator of the README file or someone who recently contributed a lot.

Use the Blame button (at the top right of each file, next to the history) to check which person to assign your pull request to.

For completely new README files you created, you don't have assign anyone. Instead just post the link in the [README Gitter channel](https://gitter.im/codingforeveryone/READMEs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge).
Then anyone available can check and merge your new README.

###4. Review & merge the changes to master

**Important:** This is not done by the same person who proposed the change.

The last step for the change to be implemented is the review and merging of the pull request to master.
Here we will differentiate between different **types of changes** indicated by the **second part of the branch name**.

**For significant changes** such as the adding new paragraphs (type: add) or structural changes (type: enhance) the assigned person (mostly the creator) should check and merge the pull request. Other people can also check it and provide their comments but shouldn't merge it immediately. Only if the assigned person doesn't react to the pull request within at least 3 days, then other contributors are also allowed to check and merge it.

**For smaller changes** such as pure corrections of typos (type. correct) anyone can check and merge the pull request.

## Related

## References