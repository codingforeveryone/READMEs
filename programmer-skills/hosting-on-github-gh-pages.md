## HostingOnGitHub - gh-pages

This tutorial explains how to host static pages on github. At the end of this you will be able to host for free you pages on github and to assign **customs URLs to them**.

The service is called Github Pages, and is very easy to use from your current github account.
There are several  good tutorials on github, so in this guide I  will try to answer to all the questions I still had after going through those.  
I encourage you to start from [here](https://pages.github.com/). That tutorial explains how to create a **user page**. A user page is not what you will probably be using most often, but it is the easiest to set up ( they are all easy) and a good starting point. The next paragraph is about the differences between **user pages** and **project pages**

NOTE: to be able to use the project pages you need to be familiar with branches. [here](https://www.atlassian.com/git/tutorials/using-branches/git-branch) a good tutorial

### Two types of pages
There are two types of pages you can create, **user pages** and **project pages**.  
The main difference is that you can have only one user page per github account, and it is usually used as a blog/site about you.  It will be available at http://__yourUsername__.github.io.  
Instead, you can have as many **Project pages** as you want on the same github account and they are used for, well, your projects.

### Set up a user page
Create a new repo using github interface and give it this name: __yourUsername__.github.io. So it will look something like this:  
`https://github.com/username/username.github.io`

It can be public or private, and you can initialise it with a readme.md or not (do it).

Now clone it on your machine in the folder you want:  
`$ git clone https://github.com/username/username.github.io.git`  

In your folder you need to have a file named index.html, copy paste it in the repo folder or create a simple one to test, like this:  
`$ echo “Hello, world” > index.html`

Now add, commit and push to the master:  
`$ git add index.html`  
`$ git commit index.html -m “Hello world commit”`  
`$ git push origin master`  

Done!
Your page will be available at http://__yourUsername__.github.io.


### Set up a project page
Create a new repo and call it what you want.
It can be public or private, and you can initialise it with a readme.md or not (do it).

Now clone it on your machine in the folder you want:  
`$ git clone https://github.com/yourUsername/repoName`

Create a new branch called gh-pages. This is a special name that github uses to build and publish:  
`$ git branch gh-pages`

And switch to it:  
`$ git checkout`  

The shorthand for this would be:  
`$ git checkout -b gh-pages`  
The `-b` is an option to create a branch while switching to it. 

Now you can create a new file into this branch to test:  
`$ echo “Hello, world” > index.html`

If you have your files you need to put them in the gh-pages branch. There are different ways of doing this and I will not cover working with branches in this tutorial. However this is one way to do it to try.  
For example, if you have a file index.html somewhere on your machine, but not yet in the repo folder.
Copy paste it into the repo folder. Or use `cp path of file`

Switch to gh-pages branch with:  
`$ git checkout gh-pages`

Now add, commit and push to  gh-pages:  
`$ git add index.html`  
`$ git commit -m “Index commit”`  
`$ git push origin gh-pages`

Done! Your site will be accessible at http://__yourUsername__.github.io/repoName


### Using customs urls

All of what has been covered until now it's pretty cool, but it wouldn't be as useful as it is,  if you couldn't then use a custom URL. Which means to change **yourUsername.github.io/repoName** to something like **www.myWebsite.com**.  

The practical steps to do it are covered by [this short tutorial](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/) from gitHub.

The main difficulty here for me was to understand how to set up DNS records.
If you are using a subdomain, like **www.myWebsite.com**, or **myName.myFamilyName.com**, use a CNAME type of DNS record by your DNS provider. 

If you are using an apex domain, like **myWebsite.com**, you can set it up with an A or ANAME type of DNS record, by your DNS provider.
Be aware that using apex domain is highly discourage on github as you will have some serious load time issues. 



### Jekyll

If you start to read documentations about gh-pages you will come across often to references to Jekyll. So what is it? It is the engine that powers gh-pages, but for the pourpose of this tutorial, it's a totally different way of using gh-pages then what has been shown in this tutorial. Instead of upload valid html/css pages you will have to upload a valid jekyll website, or, to make things easier, to use the online generator that is found on gitHub. (To be tecnically accurate, an html site is a valid Jekyll site, and on github even html pages are processed by Jekyll, which doesn not apply any changes to them. However just for clarity, I make the distinction between the two as a Jeckyll site is practically different to make and as a different structure)

While uploading a valid Jekyll  website require you to understand a little better how Jekyll works, the online generator is very easy to use. In essence, all you need is to write content in a markup language, like *Markdown* (see the irony?) or *Textile*, and Jekyll will translate it into valid html, and apply templates. The templates are based on the *Liquid* templating language, but if you use the online generator you don't need to know it either, as you can select those via a graphic interface. 

So, why use Jekyll over plain html/css? Because with it you can do things that would normally require a database and a content managment system.
In its own documentation Jekyll is defined  as a blog-aware, static site generator.  
Blog-aware means that creating a blog is a feature embedded in Jekyll, which means that you can create a blog without the need for a database and without the need for a content managment system.
I'll stop here as Jekyll would require a tutorial for itself. If you are interested in the topic you can find a good resource [here](https://jekyllrb.com/docs/resources/)








