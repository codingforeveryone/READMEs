# Start Developing with JavaScript

## A little bit of history

JavaScript, also known as ECMAScript is a programming language created by
[Brendam Eich](https://en.wikipedia.org/wiki/Brendan_Eich) for the
Netscape browser in 1995. JavaScript was created to give some dynamism
to the static web pages of the late 90's. Nowadays, many of the most important websites
are huge JavaScript applications. Some of them are Gmail,
Youtube, Netflix, Airbnb...

There are two main environments where JavaScript can be executed, browsers
like Internet Explorer, Chrome or Firefox and [Nodejs](https://nodejs.org),
which let you execute JavaScript in the command line or like a server language
in substitution of *php*, *java*, *ruby*, or others.

## Code Editors and IDEs
In order to start coding, we will need a tool to write our code within. This tool should help us be more productive when writing code; avoid mistakes; and make use of proper highlighting to expose any potential syntax errors.

In this README I'm going to talk about two main kinds of code editors:
- Online Code Editors
- Desktop Code Editors

### Online Code Editors

Sometimes, it's tricky to setup your environment to start developing small projects, or concept proofs. Maybe you only want to be able to
share a small snippet with other people. To accomplish those things we
have some online code editors available like [jsbin](https://jsbin.com),
[jsfiddle](https://jsfiddle.net/), or [codepen](http://codepen.io/).
There you can write your code and run it without leaving the browser.
There are also other tools with more features. For instance, [cloud9](https://c9.io/) allows you to run code from other languages - and even run a web server in nodejs.


#### How to start with jsbin
- Open a browser and go to [http://jsbin.com](http://jsbin.com)

  ![jsbin](/images/jsbin.png)

- Select panels you are going to need for your code

  ![panels](/images/jsbin_panels.png)

- Choose the language you are going to code with

  ![choose language](/images/jsbin_choose_lang.png)

- Write your code

  ![write code](/images/jsbin_code.png)

- Check your syntax errors

  ![check errors](/images/jsbin_errors.png)

- Fix your code

  ![fix errors](/images/jsbin_fix.png)

- Run your code

  ![run](/images/jsbin_run.png)

- And share it

  ![share](/images/jsbin_share.png)

### Desktop Code Editors

One of the first things you are going to need is a code editor. A code
editor is a tool like *the notepad* which allows you to write code, but
it comes with extra tools like code highlighting, autocompletion or small
snippets to avoid repeating some tasks.

Let's take a look at some of them:

- [Visual Studio Code](https://code.visualstudio.com/). This is a free
  open source code editor from MicroSoft. It has a lot of packages
  and plugins.
- [Atom](https://atom.io/). This is a free and open source code editor
  developed by GitHub.
  It has a lot of packages and plugins for everything you might need.
- [Brackets](http://brackets.io/). Another free and open source code
  editor developed by Adobe. It comes with Live Preview, which is a good
  feature for newbies, it allows you to preview every change you made on
  your code files in the browser.
- [Sublime Text](https://www.sublimetext.com/). One of the most famous
  code editors. It has a bunch of packages and plugins. It isn't free,
  but you can download a trial version which is completely functional.

#### How to start with Brackets
I have selected Brackets to make this tutorial because I think built-in
live preview is a cool tool for newbies, so this feature is going to make it
easier to start crafting websites.


- Donwnload Brackets from its website [brackets.io](http://brackets.io/).

- Open it. You should see this Brackets starting guide written in **html**:

  ![brackets first run](/images/brackets_first_run.png)

- To open the live preview, click on the button with a lightning on the right:

  ![live preview button detail](/images/brackets_live_preview_button.png)

- Your default browser should show up the starting guide:

  ![live preview](/images/brackets_live_preview.png)

- Now you can edit the html and css code of the starting guide and you will
see these changes in the browser.
  I.e. we can change the background color of the body in the `main.css`
  file. As soon as we make these changes, our browser will update and display them:

  ![live preview changed](/images/brackets_live_preview_changes.png)




Now we are going to create our first website in which we will execute JavaScript:

- Close current working files. Click on `File > Close All`.

- Create a new document and then save it with an `.html` extension in
  some place of your file system.

- Copy the following code there:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Our first website</title>
  </head>
  <body>
    <script>
    function wave(name) {
      return 'Hello World, my name is ' + name;
    }

    alert(wave('Gabriel'));
    </script>
  </body>
</html>
```

- Change where you see `alert(wave('Gabriel'))` and write there your
  name where `'Gabriel'` is.

- Save it and click on the live preview button.

- You should see an empty website showing up an alert with your name
  like this:

![alert with your name](/images/brackets_alert.png)

This is an easy way to start trying JavaScript snippets, but would be
better if we split our html with JavaScript into two files. One for html,
and the other for JavaScript code.

- Create a JavaScript file called `myscript.js` and save it in the same
  folder where you saved your html. Enter the following lines of code into the file:

```javascript
function wave(name) {
    return 'Hello World, my name is ' + name
}

alert(wave('Gabriel'))
```

You might have noticed that we have forgotten some semicolons, don't worry I
did it intentionally because Brackets will tell us our syntax errors.

- Click on the warning button:

  ![brackets warning button](/images/brackets_warning_button.png)

- Check code errors:

  ![code errors](/images/brackets_code_errors.png)

- Modify code to avoid those errors.

- Modify your html to make a reference to that JavaScript file, note that the Javascript file (in this case "myscript.js" should reside in the same folder as your html file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Our first website</title>
  </head>
  <body>
    <script src="myscript.js"></script>
  </body>
</html>
```

#### Running Javascript code and viewing output in your browser

You can view the output of your Javascript file using the browser's developer tool, and interact with the code that you have written. This is helpful when you're trying to debug, profile your site, or just learn in general what your code does.

- Try to copy and paste the following code to your Javascript file (i.e myscript.js):

```
var a = "Hello World!";
function b() {
    console.log("Howdy!");
}
b();
```

- Save and click the Live Preview button again to bring up the browser. **Side note**: It's safe to say that this works for any code editor that you use, as long as you're opening an html file (that has a Javascript file being linked to) with a web browser. 

- To bring up the browser's developer tool, press ```Cmd + Opt + I ``` on Mac or ```Ctrl + Shift + I``` on Windows.

- You should see something like this:

![Javascript output](/images/developer_tool_js_output.png)

- Type ```a``` in the developer tool console and you should see "Hello World!" as output.

![Javascript output](/images/developer_tool_js_output_hello.png)

- There are many use cases for browser's developer tool, and interacting with Javascript code is just the tip of the iceberg. To learn more you can check out these guides from [Google Chrome](https://developer.chrome.com/devtools), [Firefox](https://developer.mozilla.org/en/docs/Tools) and [Safari](https://developer.apple.com/safari/tools/).


Now you should learn more about linters, but you can keep coding
JavaScript.

## Code Linters
There are tools for reviewing your code, specifically looking for syntax error
and bad practices. The two most popular are:

- [jslint](http://www.jslint.com/)
- [jshint](http://jshint.com/)

Both of them have online tools for checking your code, but there are also plugins for almost every code editor, as well as for the command line.
