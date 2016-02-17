# Git Basics

## CHEAT SHEET

### Creating or cloning a repository

Create a new local repository:

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

Show in a tree-like view all your commits

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

### Merge and rebaes

Merge a branch into your current HEAD

```bash
$ git merge <branch>
```

Rebase your current HEAD onto <branch>

```bash
$ git rebash <branch>
```

### Undo

Discart all local changes

```bash
$ git reset --hard HEAD
```

Discart local changes in a specific file

```bash
$ git checkout <file>
```

## Good Resources

- Ebooks:
  - [Git Pro](https://git-scm.com/book/en/v2)
- Online Courses:
  - [Try Git](https://www.codeschool.com/courses/try-git)
  - [Learn Git Branching](http://pcottle.github.io/learnGitBranching/)
