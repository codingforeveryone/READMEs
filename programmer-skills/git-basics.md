# Git Basics


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

Show changes in tracked files  
```bash
$ git diff
```

Add files to your repository  
```bash
$ git add <files>
```

Add all files from your current directory  
```bash
$ git add .
```

Commit all local changes in tracked files  
```bash
$ git commit -a -m <"a descriptive message">
```

Amend changes to your last commit  
```bash
$ git commit --amend
```

### Commit history

Show all commits, order from newest to oldest  
```bash
$ git log
```

Show all of your commits in a tree-like view
```bash
$ git log --graph --online --all
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

List all remote branches  
```bash
$ git remote -v
```

Add new remote repository  
```bash
$ git remote add <shortname> <url>
```

Publish local changes on a remote branch  
```bash
$ git push <remote> <branch>
```

Download changes and merge into HEAD  
```bash
$ git pull <remote> <branch>
```

### Merge and rebase

Merge a branch into your current HEAD  
```bash
$ git merge <branch>
```

Rebase your current HEAD onto <branch>  
```bash
$ git rebase <branch>
```

### Undo

Discard all local changes  
```bash
$ git reset --hard HEAD
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
