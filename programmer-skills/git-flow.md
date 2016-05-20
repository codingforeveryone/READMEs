Git Flow
===================


git-flow is both the name of a branching model for git(the git flow) and a software that uses that model. It will most likely make your life easier !
Before reading this READMEs, you should be familiar with git, as it is basically git, but with a new way of working with it.
If you're not familiar with git, please read [Git Basics](http://codingforeveryone.foundersandcoders.org/programmer-skills/git-basics.html)
----------
The Git Flow
-------------

The git flow is a whole new workflow for git, based on branches, which can make your repos more organized, and making you work with git more efficiently.  For example:

 - If you work on a feature with classic git workflow, you
   wouldn't want to work directly on your master branch or risk breaking
   everything in your production code. This workflow allows you to work
   another branches alongside your master branch(see below)

 - Another example would be if you want to send a pull request. If your
   pull request is accepted, it would be merged with the original repo,
   but only the most recent commit for each file will be here. What if
   you wanted history of every commit, for each feature you've worked on ?
   This workflow allows you to have a different branch for every
   different feature. When you're finished working on that feature, just
   merge it with "develop" and then delete that feature branch !

Here is a breakdown of branches in git flow:


**Branches:**

- **master**: Your production branch
- **develop**: As the name suggests, your development branch)
- **features**: A branch with every WIP features
- **release**:  A branch for making a few minor changes before production release


Git-flow software
-------------

While this branching model can make your repos more organized, it would be hard to do manually.
*That's what git-flow is for !*
It allows you to enjoy the power of this workflow, without having to do everything manually.
For example, to create a new feature branch, just
`git flow feature start nameofyourfeature`
If you're done and want to merge that feature with develop, just "finish" it
`git flow feature finish nameofyourfeature`



### Installing git-flow
On a mac, with homebrew
```bash
$ brew install git-flow
```

On linux
```bash
$ curl -OL https://raw.github.com/nvie/gitflow/develop/contrib/gitflow-installer.sh
$ chmod +x gitflow-installer.sh
$ sudo ./gitflow-installer.sh
```

On Windows, with cygwin:

```bash
 wget -q -O - --no-check-certificate https://github.com/nvie/gitflow/raw/develop/contrib/gitflow-installer.sh | bash
```

### Getting started

Same as with git commands, you use init to initialize a repo:

```git flow init```
It will ask you a few questions. Just keep the default values (recommended).

If you want to start a new feature,  use the feature start command

```git flow feature start ```
Intuitive, isn't it ? and to end it, same logic:

```git flow feature finish ```

To start a release :

```git flow release start RELEASENAME ```
It will create a new release branch for that feature.

And to finish it:

```git flow release finish RELEASENAME ```
It will merge the release branch with your development repo, and delete the branch, automatically !


Going Further
-------------

As you can see, git flow is a powerful workflow, and the git-flow software does all the boring work for us, automatically.

If you want to know more about git-flow features, you can read the [git-flow cheatsheet](http://danielkummer.github.io/git-flow-cheatsheet/).
