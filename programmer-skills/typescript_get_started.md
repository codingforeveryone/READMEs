# Getting started with TypeScript

## What is TypeScript?

![img1](/images/typescript_venn_small.png)

TypeScript is a free and open source language that has been developed and is maintained by Microsoft.  It is a higher order class-based object oriented programming language that expands the standard ECMAScript versions of JavaScript.  The Venn Diagram above illustrates how TypeScript fits into the scheme of ES5 and ES6.  Since TypeScript essentially expands on these ECMAScript standards, a JavaScript program will also be a valid TypeScipt program.

Unlike JavaScript libraries (such as jQuery.js or Underscore.js), TypeScript cannot be interpreted directly by browsers or node.js.  Instead, TypeScript code must be *transpiled* into either ES5 or ES6 in order to be run.

One of the defining features of TypeScript is that it uses (optional) static typing, meaning that as a variable is declared it can be provided with a type (e.g. number, boolean or string).  When compiled, the type of each variable will be verified and an exception will occur if an unexpected assignment occurs.  This will be familiar to programmers coming from other languages (such as C# or Java) that are stricter with types than JavaScript.

## Why use TypeScript?

### 1. It allows you to quickly compare ES6 and ES5

Since ES6 is valid TypeScript that can be transpiled into nice and readable ES5, a TypeScript environment makes a nice sandbox to compare ES5 and ES6.  While this functionality can also be achieved using a standalone transpiler called [Babel](https://babeljs.io/), the extra functionality of TypeScript means that it has many more beginner tutorials and instructions online.

Since the installation of TypeScript and Babel have similar levels of complexity (both involve NPM and require small amounts of configuration), TypeScript is generally preferred if all you are looking to do is play.

### 2. TypeScript has been embraced by Angular 2 and other libraries

For a variety of reasons, Angular 2 has chosen TypeScript as its main language for implementation.  If you plan to use Angular 2 (and it is a great framework for web app development), learning and using TypeScript makes sense.

### 3. Type Control helps intermediates and large collaborations

One of the most common types of bugs for both intermediates and large collaborations in JavaScript occur when a variable doesn't match the type expected when coded.  This occurs because JavaScript allows dynamic types and will even muddle along if it comes across a type it doesn't expect at run time (unless you are using strict mode).

This can be a nightmare when it comes to debugging as (especially in an instance where an error is not thrown, such as when a mathematical expression evaluates to NaN) large amounts of testing will be required to find the bug.  Strict typing helps avoid this by throwing a compilation error if an unexpected type is encountered.  While this may be annoying at first, it can save significant time in the long run.

The benefits of this are accentuated for intermediate coders (who often encounter these types of bugs through lack of experience) and large collaborations or codebases where you may be using code you haven't written (or even seen).

## The installation process

### Installing Node.js

The easiest way to install and access the TypeScript environment on your local machine is through NPM (the Node Package Manager).  If you haven't already got Node.js installed on your machine you will need to do so to access NPM.

Installing Node is easy, simply go to their website [here](https://nodejs.org/en/) and click on the left hand green button on the home page (this is the version recommended for most users).  Follow the installation wizard to complete the installation of Node.

Once Node is installed you will be able to access it through the command line.  To check whether node is installed open the command line (or git bash) and type ```node -v```.  If node has installed correctly, this should return the version number (e.g. ```v4.4.7```).

### Installing TypeScript for Command Line

Regardless of which OS you use, the command line prompt to install TypeScript is the same.  However, if you are working on Windows you will have to make sure that you have opened the command line with Administrator rights.  To do so, search for the Command Prompt program and open it by *right clicking* and selecting "Run as administrator".

The command to install TypeScript using npm is ```npm install -g typescript```.  

When the process has completed you can check whether the installation has been successful by typing the ```tsc``` prompt in the command line.  You should see a list of the options for using the tsc command, like follows:

![img2](/images/tsc_options.png)

### Configuring Sublime Text Editor

Many text editors will already come with TypeScript support (this is particularly the case if you use Visual Studio or Visual Studio Code).  However, some may need configuration to highlight TypeScript syntax.

In Sublime, you can install the syntax highlighting using the package manager (if you do not have the package manager installed, [this](https://scotch.io/bar-talk/the-complete-visual-guide-to-sublime-text-3-getting-started-and-keyboard-shortcuts) website has a good set of video tutorials for setting up a productive sublime environment).  The package you want is called TypeScript, once this is installed you will have nice syntax highlighting like below:

![img3](/images/tsc_sublime_view.png)

## Testing the environment

You have now installed TypeScript, so it is time to run a quick test to see how it works.  To do this create a new folder for your test project.

In this, create a file called tsconfig.json .  This will be the configuration file that will tell the transpiler how to run so you do not need to provide it with any complicated commands on the command line.

In this file add the following configuration which tells tsc to transpile ES5 code:

```
{
	"compilerOptions" : {
		"target": "es5"
	}
}
```

Now create a TypeScript file called test.ts.  In this file, you can write some ES6 or some TypeScript.  If you don't know what to write, you could try the code below:

```typescript
let greeting: string = "Hello World";
let myName: string = "Jess";

let myFunction = (x) => x.toUpperCase();
```

Now navigate to the project folder in the command line and type ```tsc -w```.  The TypeScript transpiler will now look for all .ts files in your current directory and transpile them into .js files written in ES 5.  The -w tells the transpiler to continue watching.  This means that if you save any changes to your test.ts file the transpiler should automatically update test.js .  To stop this watching press Ctr + C.

You can now see if the transpiling has worked.  Open test.js and you should see the following code (if you used the sample TypeScript code provided above):

```javascript
var greeting = "Hello World";
var myName = "Jess";
var myFunction = function (x) { return x.toUpperCase(); };
```

Notice how the ```let``` keyword has been changed to the ```var``` keyword and the arrow function notation has been expanded out.  Now change the target value in your json config file to "es6" and run tsc again.  The code in test.js should look something like this:

```javascript
let greeting = "Hello World";
let myName = "Jess";
let myFunction = (x) => x.toUpperCase();
```

You'll notice that the type declarations have disappeared from the original TypeScript but the code is otherwise syntactically similar.

Congratulations - you have just set up your TypeScript environment and used it to compare ES6 and ES5 code!

## Related

- Node.js
- NPM
- [ECMAScript 6](/JavaScript/ECMAScript 6.md)
- Angular 2

## Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/tutorial.html)
- [Angular 2 TypeScript QuickStart](https://angular.io/docs/ts/latest/quickstart.html)
- [Free Code Camp article on TypeScript](https://medium.freecodecamp.com/when-should-i-use-typescript-311cb5fe801b#.jv8za2n8x)
- [Node Homepage](https://nodejs.org/en/)
- [NPM Page for TypeScript](https://www.npmjs.com/package/typescript)