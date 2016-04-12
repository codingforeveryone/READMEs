# Contribution Workflow

## Introduction

This document outlines the workflow and steps to go through when proposing new changes to the README repository. Those steps are necessary for changes to improve current READMEs as well as for adding new READMEs.
At first sight the process might seem complicated but it is a great exercise for contribution to future programming projects and
ensures that all added changes are checked.

## The Feature Branch Workflow

For contribution we are using a process called [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).
The basic concept of this workflow is that every change is treated as a new "feature" and made on dedicated branch for that change.
Once the change is ready a [pull request](https://help.github.com/articles/using-pull-requests/) has to be raised. This pull request will be checked by another person and then merged into the master branch.
After the merge the branch for that change has to be deleted, since it is not needed anymore.

The following picture visualizes this process of creating and merging a new branch for each feature / change:

![Feature Branch visualization](http://wiki.techniv.fr/images/3/3c/Git_Feature_Workflow.png)
![Feature Branch visualization](http://image.slidesharecdn.com/gitbranchmanagement-140301040840-phpapp02/95/git-branch-management-6-638.jpg)

In the next chapter we will go through the necessary steps and how to execute them through the command line in more detail.

## Specific steps to go through for each change

There are 4 main steps to go through for a new change to be implemented. The first 3 steps are done by the person who proposes the change, while the forth step has to be done by a different person to ensure quality.

1. [Create a new branch](contribution-workflow.md#1.-create-a-new-branch)
2. [Stage, commit & push changes to the branch](contribution-workflow.md#2.-stage,-commit-&-push-changes-to-the-branch)
4. [Create and assign a pull request](contribution-workflow.md#3.-create-and-assign-a-pull-request)
5. [Review & merge the changes](contribution-workflow.md#4.-review-&-merge-the-changes)

###1. Create a new branch

The first step to propose a new change is always to create a new branch for it. Before you create a new branch you should make sure your master is up-to-date by pulling all previous changes.

To create a new branch switch to the branch you can use the following command:
```bash
$ git checkout -b <name of the branch>
```
This is equal to first creating the branch and then switching to it with the following two commands:
```bash
$ git branch <name of the branch>
$ git checkout <name of the branch>
```

After creating and switching to branch locally you should push the branch to github and set upstream branch:
```bash
$ git push -u origin <name of the branch>
```
This will create the branch on github and enable you to easily push further changes to that branch

So how should you name your branch? Here's where the naming convention comes in.

####Naming convention for new branches

In order to clearly identify what the branch is used for, the branch should be named according to the following naming convention.

**"file name"/"type of change"/"short summary of change"**

Examples for possible branch names:
* README/add/intro-added
* ES6/correct/typos
* hoisting/add/headers-added

This kind of naming convention not only helps to see what branches are used for. It also impacts the review process because a simple typo correction can be approved and merge more quickly than a larger change.
Additionally it makes sure that

_NOTE: This naming convention makes sense for this repository because changes should be made to each README file on separate branches. For other projects you might want to choose different naming conventions._

####Naming convention


#####Types of changes

_to be added_

###2. Stage, commit & push the changes to the branch

For this use the basic git commands

```bash
$ git add "name of the file"
```

```bash
$ git commit -m "summary of changes made"
```

```bash
$ git push
```

For the first commit to the branch: remote

```bash
git push -u origin "name of the branch"
```

```bash
git push --set-upstream origin "name of the branch"
```

###3. Create pull request to master

A [pull request](https://help.github.com/articles/using-pull-requests/) is a request to transfer the changes from your branch to master. To issue the pull request we recommend using the github website.
On the READMEs repository you go through the following steps to issue your pull request:
1. Switch to your branch
2. Click on "New pull request"
3. Name & assign your pull request
4. Click on "Create pull request"

#### Assign the pull request

If possible always try to assign your pull request to a specific person. That makes sure someone gets notified to look at it.

Use Blame button to check who created the README or did the most edits recently.

###4. Review & merge the changes to master

**Important: ** This is not done by the same person who proposes the change.

## Related

## References