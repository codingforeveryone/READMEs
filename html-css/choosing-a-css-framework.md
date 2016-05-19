# Choosing a CSS Framework

CSS frameworks are great! They let you get off to the best start when building a new website, giving you standardised code that'll make sure your site is responsive, cohesive, and functional, with minimum effort. Bootstrap's status as the most popular and well-known CSS framework out there means it often gets chosen for a project without much consideration. However, Bootstrap isn't always the most appropriate choice. It became the most used framework because it can do pretty much everything - while that's useful, you probably don't need everything! 

This guide will help you think about what functionality you actually need from a framework for your project, and help you choose one (or more) based on this criteria. So, let's get started:

(NOTE: The recommendations given here are based on what I've personally used. There are countless frameworks out there, and you don't have to stick to the ones I've listed!)

## The Basics

These frameworks are as minimal as possible - they'll do one job, and they'll do it well.

### The Grid
Modern web design is based around the grid. [CreativeBloq have written a good beginners guide to grid theory](http://www.creativebloq.com/web-design/grid-theory-41411345), but you can think about it as the arrangement of columns that make up most of the websites you visit - ads, navigation, main content, etc. Pretty much every site is based around this system, and unless you like tedious calculations, you'll want a framework to set it up for you. It might be that this is all you need! For instance, if you already have a detailed design laid out for your site, just using a grid will let you implement the design without having to wrestle with pre-set CSS.

Grid-only frameworks are best for experienced designers who want to implement their vision with minimal fuss, and are willing to do a lot of work themselves.

#### What should I choose?
[Toast](https://daneden.github.io/Toast/) is one of the most simple frameworks out there - it'll give you a responsive grid, and that's pretty much it. That makes it really easy to use, maximising browser compatibility and minimising the risk of conflicts with your design. However, the alternative CSS-based grid Flexbox has become a popular choice for web layout, making Toast seem outdated in comparison; [Flexbox Grid](http://flexboxgrid.com/) is a more modern alternative.

### Reset
A reset framework eliminates inconsistencies between browsers so all your users will (hopefully) see exactly what you intended. It's a good idea to implement one into any project that you expect will reach a fair number of users, so you don't end up spending hours squashing browser specific bugs down the line.

#### What should I choose?
[Normalize.css](https://necolas.github.io/normalize.css/) is by far the most popular reset framework, and even comes included in more heavy-duty frameworks like Bootstrap or Boilerplate. While you may run into problems when designing on top of it, its extensive documentation means you shouldn't be stuck for long.

### Typography

Great web typography doesn't just involve picking a nice font family and calling it a day; a typographic framework will do the fine-tuning for you. A typical typographic framework will create a fixed line height, standardise element padding and ensure your headings are responsive at least. More complex frameworks will choose fonts and styling for you, which is a great time-saver. 

#### What should I choose?
If you want to choose your own fonts, [Typebase.css](https://devinhunt.github.io/typebase.css/) provides a framework that ensures readability without interfering with design. If, however, you want typography entirely styled for you, you'll want to choose a heavier framework that includes typesetting in its features.


## Lightweight

These combine the functionality of multiple one-job frameworks into one package. They may use a grid, style typography and include some basic style elements like buttons or forms. However, they won't include a full UI framework or the extensive functionality of heavier frameworks. Lightweight frameworks are best for small-scale projects or developers who don't want to rely on stock design elements. Their main benefit is in their simplicity - by using a lightweight framework, you know you're not including potentially redundant or even conflicting code in your project.

#### What should I choose?
There are hundreds of lightweight frameworks out there, but my favourite is [Skeleton](http://getskeleton.com/). In less than 400 lines of code, it'll give you a grid, nicely styled typography, buttons, forms, lists and tables, as well as a convenient list of media queries. Combine it with Normalize if you like and, for a lot of projects, this will be more than enough to get started.

## Heavyweight

Lightweight frameworks will set up a canvas for you to work on. Sometimes, though, you want it to resemble Lego - components that you can fit together to produce something quickly and easily. Heavier frameworks can be great for beginner developers, particularly those who aren't confident in their design skills, as they'll give you an entire suite of components and functionality you can fit together to realise a project without having to make everything from scratch. However, this also means including a lot of stuff you probably won't need, which can create problems both through creating unnecessary bloat in your project and potentially causing conflicts with code that you write. Many feature-rich frameworks try to combat this by being modular, allowing you to pick and choose the components to install.

Before choosing a heavier framework, think carefully about what functionality your project does and doesn't need. They can also be quite complex, so make sure to read the documentation!

#### What should I choose?
[Bootstrap](https://getbootstrap.com/) and [Foundation](http://foundation.zurb.com/) are two of the biggest names when it comes to CSS frameworks. Foundation can be used for pretty much everything - it even has versions specifically designed for use in emails and apps. However, that wide functionality comes at a cost, and it can be hard to get to grips with, especially if you're used to working in plain CSS rather than in Sass (a CSS-based extension). To their credit, ZURB (Foundation's creators) have tried to combat this by offering tutorials, excellent documentation and even paid-for online classes. For most projects, though, you're better off looking elsewhere, particularly if you're just starting out. 

If you're in need of a framework with everything built in, then, Bootstrap is probably the way to go. By default, it comes with pretty much everything you could ever need. It's relatively easy to learn and its popularity means there's weeks worth of content written on using it. Do beware though - once you learn to recognise a website built in Bootstrap, you can never unsee it.

* * *

There's nothing worse than getting weeks into working on a project and realising that the framework you've built it on just isn't suitable. By following this guide and taking the time to think about what framework would be the best before you get started, you'll be able to work faster, spend less time squashing bugs, and produce greater stuff with ease.
