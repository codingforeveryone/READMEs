# Git Basics

## Git and GitHub Summary
### Version Control and Branches
Git is a tool used for version control: it allows you to store past versions of a project. To store the current state of your work in the project history, you must _commit_ your work. A commit is like a digital snapshot in time of your folders and files.
When working, you may want to add a new feature to your project. _Branches_ are used to safeguard your current code from being broken by that new feature you're adding. Each branch is the sum of the commits that forms it. Branches are timelines of commits that diverge from your _master branch_ (generally speaking, the "main" branch) at a specified point in time.
If your new feature works, then your test branch can be fused into your _master branch_ via a _merge_ command. At that point, the commits from the test branch become an inseparable part of the master branch's history. It is then safe to delete your test branch and continue working on your master branch.

### Group Work with GitHub
You can use git commands to _push_ your local work up to GitHub (i.e. "the cloud"), where it can be _cloned_ down to other coders' computers, or _forked_ over to their own GitHub accounts online. Git and GitHub are invaluable tools for working with others on group projects. Individual coders work on their own branches and then submit _pull requests_ to merge their branches into the group project's master branch. Pull requests are used to solicit peer review on proposed branch merges before they are permanently committed into the master branch.

## Installing git on Linux
To install git on linux, type the following into terminal.

Up to Fedora 21:

$ yum install git

Fedora 22 and later:

$ dnf install git

Debian or Ubuntu:

$ apt-get install git

If you get an error, try adding sudo in front as this will give you access to install git.

To verify which version of git you have installed, type the following into terminal:

$ git -- version


### Installing git on Mac
If you are on a mac, git may already be installed. To verify type this in the [terminal](https://en.wikipedia.org/wiki/Terminal_(OS_X)):  
```bash
$ git --version
```

If a version is displayed, you have it. If not, proceed to download git from [the official page](http://git-scm.com/downloads).
This will download a DMG file. Double click on it and follow the steps. At the end open a terminal and verify with git --version if it is there.

Now you need to set the username and user.email associated with git. This is relevant because services like github, or bitbucket will check your user.email, when you push something. If user.email is different from that set on github, you might encounter some problems.

Username:  
```bash
$ git config --global user.name "your username"
```

User.email:  
```bash
$ git config --global user.email "yourEmailUsedOnGithub@gmail.com"
```

Last step is to set up a ssh key. This is useful because otherwise you will be asked to enter your username and password often in the terminal when you use most git commands.

The steps are best described [here](https://help.github.com/articles/generating-an-ssh-key/).



## CHEAT SHEET

### Creating or cloning a repository

Create a new local repository  
```bash
$ git init
```

Clone an existing repository  
```bash
$ git clone http://URL/REPOSITORY.git
```

### Local changes

Show changed files  
```bash
$ git status
```

Show changes in tracked files (that haven't been staged yet)  
```bash
$ git diff
```

Add files to your staging area  
```bash
$ git add <files>
```

Add all files from your current directory  
```bash
$ git add .
```

Commit all local changes to the files in your staging area (i.e. files that have already been added)
```bash
$ git commit -m <"descriptive message">
```

Add all tracked files to the staging area _and_ commit all local changes to these files
```bash
$ git commit -a -m <"descriptive message">
```

Amend changes to your last commit  
```bash
$ git commit --amend
```

### Commit history

Show all commits, ordered from newest to oldest  
```bash
$ git log
```

Show all of your commits in a tree-like view
```bash
$ git log --graph --oneline --all
```

### Branches

Create a new branch  
```bash
$ git branch <new-branch>
```

Switch branch  
```bash
$ git checkout <branch>
```

Create a new branch and switch to it  
```bash
$ git checkout -b <branch>
```

Delete a local branch  
```bash
$ git branch -d <branch>
```

### Update and publish

List the URLs of all remote repositories  
(e.g. the remote repo that you cloned from is called `origin` by default)
```bash
$ git remote -v
```

Add new remote repository  
```bash
$ git remote add <shortname> <url>
```

Push committed changes on your local branch up to a remote server  
```bash
$ git push <remote> <branch>
```

Pull all files from a branch of the remote repository, and merge this into the current local branch  
```bash
$ git pull <remote> <branch>
```

### Merge and rebase

Merge a branch into your current HEAD (commit history will read: commits from checked out branch first, then merged branch commits)
```bash
$ git merge <branch>
```

Rebase a branch into your current HEAD (commit history will read chronologically, regardless of which branch they were from)  
```bash
$ git rebase <branch>
```

### Undo

Unstages files i.e. resets back to previous commit  
```bash
$ git reset HEAD
```

Discard local changes in a specific file  
```bash
$ git checkout <file>
```

## Good Resources

- Ebooks:
  - [Git Pro](https://git-scm.com/book/en/v2)
- Online Courses:
  - [Try Git](https://www.codeschool.com/courses/try-git)
  - [Learn Git Branching](http://pcottle.github.io/learnGitBranching/)
  - [Git - The simple guide](http://rogerdudler.github.io/git-guide/)
  - [Git workflow to collaborate on open source projects](http://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/)
