# Developing a Jekyll app hosted on GitHub Pages

## Table of contents
1. [Introduction](#introduction)
2. [Starting a new site hosted on GitHub Pages](#initial)
    1. [Organisation or User site](#organisation)
    2. [Project site](#project)
3. [Building a Jekll site locally](#build)
4. [The structure of a Jekyll app](#structure)
5. [Front Matter](#frontmatter)
6. [Liquid Templating](#liquid)
7. [Resources](#resources)


## Introduction <a name="introduction"></a>

[Jekyll](https://github.com/jekyll/jekyll/blob/master/README.markdown) is the static site generator that powers GitHub Pages. Written in Ruby, its aim is to enable effective static sites with minimum configuration while allowing common code to be separated out into modules. Being able to host directly from a GitHub repo mitigates the need to deal with a separate hosting solution.

## Starting a new site hosted on GitHub Pages <a name="initial"></a>

There are two general methods of [hosting a site using GitHub Pages](https://help.github.com/articles/user-organization-and-project-pages/): Hosting a user/ organisation site, and hosting a project page. The main distinction currently is that a user/ organisation site must be in a repo named E.g. `<username>.github.io` and may publish on the `master` branch, whereas a project site may be hosted in any repo and has more flexibility regarding branch usage.

#### Organisation or User site <a name="organisation"></a>

Here's a summary of the [really simple instructions](https://pages.github.com/) provided by GitHub: First create a new repo based on your username or organisation name + ".github.io" E.g. `codingforeveryone.github.io` Then just clone the repo and push some example content:

```bash
~ $ git clone https://github.com/username/username.github.io
~ $ cd username.github.io
~ $ echo "Hello World" > index.html
~ $ git add --all
~ $ git commit -m "Initial commit"
~ $ git push -u origin master
```

And that's it, the "Hello World" site should shortly be published on `username.github.io`. All we did there was create a repo, clone it locally, direct some text to index.html (we could have created and edited this in a text editor instead) and then push the changes back to GitHub. Any changes to code within a repo using the naming convention `<username>.github.io` will prompt a new build of a site based on the repo contents. **Note** The above example involved pushing straight to the master branch, which is [not usually considered good practice](http://stackoverflow.com/questions/5713563/reasons-for-not-working-on-the-master-branch-in-git).

#### Project site <a name="project"></a>

[Project pages](https://help.github.com/articles/creating-project-pages-from-the-command-line/) are potentially even simpler! If we happened to already have a repo without the above naming convention, let's say named "basic-html", which already contained a static site built with html and css then publishing this on GitHub Pages would be as simple as going to the repo settings, scrolling down to "GitHub Pages" and setting "Source" to our current working branch, E.g. `master`. The project site would then be published under `username.github.io/basic-html`. GitHub also [supports](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/) publishing the site from a `/docs` folder within the repo or on the gh-pages branch, intended for publishing a project site while keeping other project files untouched.

## Building a Jekll site locally <a name="build"></a>

GitHub Pages is powered by Jekyll and so in fact if you followed along with the above you already have a Jekyll static site, and can start adding content using Jekyll with no futher setup. However we will want to be able to test our Jekyll site locally before publishing it. For this we will want to be able to build it locally.

Jekyll requires Ruby v1.9.3 or above and RubyGems, see the [offical docs](http://jekyllrb.com/docs/installation/) for specifics, versions, and platform info (particularly if you're using Windows). If you have RubyGems then to install Jekyll run:

```bash
~ $ gem install jekyll
```

If we don't have an index.html in our repo root yet then create one with some basic hello world text E.g.


```html
<html>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

We should then be able to have Jekyll build this into a static site by running:

```bash
~ $ jekyll s
```

This is a shortened version of the `jekyll serve` command, see the [official documentation](https://jekyllrb.com/docs/usage/) for more information on what is actually happening here.

Jekyll should provide some output, most usefully telling us that it's serving the site locally to http://127.0.0.1:4000/ - Where we should see our index page. Just an index page doesn't show off the power of Jekyll though so we'll need to do some more configuration.

## The structure of a Jekyll app <a name="structure"></a>

Check out the [official directory structure documentation](https://jekyllrb.com/docs/structure/) for an overview of how files are laid out in a Jekyll app. Below is an example of a simple app which we'll go through step by step:


```html
.
│─  .gitignore
│─  _config.yml
│─  index.html    
│─  about.html
│─  contact.html
│
└───_includes
│    │─  footer.html
│    │─  header.html
│    └─  head.html
│   
└───_layouts
│    │─  default.html
│    └─  post.html
│   
└───_posts
│   │─  2007-10-29-title-of-post.md
│   │─  2007-10-29-title-of-another-post.md
│   └─  2007-11-04-title-of-post.md
│
└───css
│    └─  styles.css
│
└───javascripts
│    └─  an_example_script.js
│
└───_site
```

#### General directory structure

The first thing to notice with a Jekyll site is that some files and folders are prefixed with an underscore. These files and folders are part of how Jekyll builds the site from our source code, files and folders that are not prefixed with an underscore or are not prepended with a <a href="#frontmatter">YAML front matter block</a> will be copied into the site as-is.

There are different ways to structure a site, for example our extra pages (about.html) could be moved to their own folders. Check out some [examples of sites using Jekyll](https://jekyllrb.com/docs/sites/) for some great live examples.


#### The `_site` folder
This is where Jekyll builds our static site based on the collection of markdown, textile, configuration files, etc that we provide. As this is rebuilt regularly based on our content it's recommended to add it to our .gitignore and keep it out of version control:

```bash
~ $ echo "_site" >> .gitignore
```


#### `_config.yml`
[Global site settings](https://jekyllrb.com/docs/configuration/) are held here, many of the more advanced features of Jekyll are set up here.

#### `_layouts` and `_includes`
The [`_includes`](http://jekyllrb.com/docs/templates/#includes) folder contains fragments of website structure that are separated out so as to be easy to re-use and maintain. The `_layouts` folder is used to store standard templates for use in different kinds of pages. As an example we may have the following included fragments and layout:

```
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
```

This could allow us to avoid having to include the same header and footer on each of our pages, instead we can store that code inside the included fragment. This is a very powerful feature particularly when we start writing more complex code making use of the Liquid Templating Engine where we are able to encapsulate and easily re-use more complex structural elements.

![includes example](/images/includes.png)

#### `_posts` and collections
Posts are the main "blog" functionality of Jekyll. The [Introduction to Collections](http://jekyll.tips/jekyll-casts/introduction-to-collections/) page at jekyll.tips explains really simply when to use pages, posts, or collections based on the type of information that is being presented:

```
+-------------------------------------+         +----------------+
| Can the things be logically grouped?|---No--->|    Use pages   |
+-------------------------------------+         +----------------+
                |
               Yes
                |
                V
+-------------------------------------+         +----------------+
|      Are they grouped by date?      |---No--->|Use a collection|
+-------------------------------------+         +----------------+
                |
               Yes
                |
                V
+-------------------------------------+
|            Use posts                |
+-------------------------------------+
```

## Front Matter <a name="frontmatter"></a>
[Front Matter](https://jekyllrb.com/docs/frontmatter/) is a [YAML](http://www.yaml.org/start.html) formatted block at the start of a page (or post etc) which provides extra information that can be used in a Jekyll template.

```html
---
layout: default
title: About
permalink: /about/
---
<div class="container">
  <h1>Coding For Everyone</h1>
  <p>A free weekly coding meetup for any level of experience.</p>
</div>
```

The YAML block above (distinguished by the triple dashes `---`) tells Jekyll that we want the present page:

+ **To use the "default" `layout`** - a template defined in our `_layouts` folder
+ **To set the `page.title` variable to "About"** - This is useful because we may want to set our page titles from within one of our `_includes` rather than in each page, by setting this variable in each page's front matter we can then control the title for each page; a default title can be set in the `_config.yml`
+ **To set the page `permalink` to "/about/"** - This prevents our urls containing filenames like about.html - The same effect can also be achieved by separating page files out into their own folders

## Liquid Templating <a name="liquid"></a>
[Liquid](https://shopify.github.io/liquid/) is the templating language that Jekyll uses. This can be used for a [wide array of purposes](https://jekyllrb.com/docs/templates/). For example take the below code written using some Liquid tags:  


![liquid example](/images/liquid.png)


This is some fairly standard code taken from a `header.html` from an `_includes` folder, containing the structure of a navigation bar. Most of the expressions used here make use of the `site` object and its properties that is made available as part of every Jekll site. A few things are happening here:

+ The above code segment is wrapped in a comment tag so that it can be displayed on this Jekyll site, these would not be present in the actual file
+ The first `<li>` element is set to link to the [base url](https://byparker.com/blog/2014/clearing-up-confusion-around-baseurl/) of our site, which can be configured in `_config.yml`
+ The text of the above link is set to the site's title, also set in `_config.yml`
+ We are iterating through a list the pages our site contains (this list is automatically constructed by Jekyll) using the `my_page` variable to represent the current pages
+ If the current page has a `title` variable declared in its front matter a list item is created for it.
+ The URL of the added page is set to it's url, filtered to prepend the site's base url.
+ The title of the added page is set to the pages title as defined in the page's [front matter](#frontmatter)

The upshot is that a list that can be used as a navbar is created on every page that uses a layout which includes this `header.html` fragment.

## Related
+ [Hosting On GitHub](http://codingforeveryone.foundersandcoders.org/programmer-skills/hosting-on-github-gh-pages.html) provides a more in depth tutorial of how to host a site on GitHub where this README only provides a summary
+ Liquid templating could be explored in much greater detail. In fact Liquid templating could be split off into a new README as it would be better to break it down into sub-sections and example cases
+ There are many more resources that could be added to the References section
+ More examples could be added to the front matter section


## References <a name="references"></a>
+ [Ben Balter's Style Guide](http://ben.balter.com/jekyll-style-guide/)
+ [Jekyll Tips](http://jekyll.tips/) - A collection of screencasts and general usage tips
