# Setting Up a Local Server


![XAMPP and MAMP](images/setting-up-a-local-test-server.png)


If you're working on a website, it's always a good idea to use a local test server. This is a server that runs on your computer, so you can work on a copy of a website that only you can access. This means a local server will allow you to see how your changes will work in the browser, without affecting the website that users actually visit [until you push your changes to the live site](https://github.com/codingforeveryone/READMEs/blob/master/git-basics.md). That means you can make all the changes you want without worrying you're sending your users to a broken site!

## Installation

The easiest way to set up a local server is to install a programme that will do it all for you. [XAMPP](https://www.apachefriends.org/index.html) is a free and open-source programme that can be used on Windows, Linux or OS X. If you're using a Mac, however, you'll probably want to use [MAMP](https://www.mamp.info/en/), as it's a bit easier to use. If you're on Windows, you can also pay for [MAMP Pro for Windows](https://sites.fastspring.com/mamp/product/mamp-pro).

Both XAMPP and MAMP are easy to install, though MAMP will also install a trial version of their paid programme MAMP Pro - feel free to just ignore it, you probably don't need any of the extra features right now.

When you open the programme, you'll need to activate both the Apache and MySQL servers. On MAMP, this will happen automatically, while on XAMPP you'll have to click the Start button for each. 

Now to check everything is working properly! If you're using MAMP, just click the button that reads 'Open Start Page'; for XAMPP, open your browser and navigate to `http://localhost/`. If it works, you're good to go!

## Now What?

Anything you want to run through your local server has to live in its `htdocs` folder. You'll be able to find this inside your MAMP/XAMPP installation folder - check your Applications folder on Mac or Program Files on Windows. You should create any new sites in here or, if you already have a site saved elsewhere, just move it over. Now, you should be able to access it in your browser by navigating to `http://localhost/[name of your folder]`. You'll be able to see any changes you make to it by refreshing the page.

You can install any kind of CMS like WordPress or Drupal on your local server too - lots of people have written helpful guides on how to do this.


Running your own server might initially sound like a daunting prospect, but with the help of software like MAMP and XAMPP it's actually pretty simple. Enjoy squashing bugs and changing fonts worry-free!

### Further Reading

* [MAMP FAQs](https://www.mamp.info/en/documentation/)
* XAMPP FAQs for [Windows](https://www.apachefriends.org/faq_windows.html), [Linux](https://www.apachefriends.org/faq_linux.html) and [OS X](https://www.apachefriends.org/faq_osx.html)
* [Installing WordPress Locally on Your Mac with MAMP](https://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP)
* [How to Install XAMPP and WordPress Locally on PC/Windows](https://premium.wpmudev.org/blog/setting-up-xampp/)
* [Installing MAMP and Drupal Locally on a Mac](https://www.drupal.org/node/2109497)
* [Quick Install Drupal with XAMPP on Windows](https://www.drupal.org/node/2347717)
