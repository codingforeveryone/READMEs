# Using JavaScript to manipulate inline styles of DOM elements
#

To first understand how to use JavaScript to access elements in the HTML document, take a look at this tutorial [here](http://codingforeveryone.foundersandcoders.org/html-css/document-object-model.html).
The tutorial explains how to traverse the DOM and use methods like *.getElementByID()*, *.getElementsByClassName()*, and *.getElementsByTagName()*, and how to manipulate inner text content with *.innerText*.


Styles properties can also be accessed, added, modified or deleted with JavaScript.

This tutorial will cover how to manipulate *inline* styles
##
### Understanding inline, embedded & external styling
##
##

In a html document there are three ways to apply styling to an element.

**Inline** styles are rules nested directly inside an element tag, for example;

```html
<p style=“color: blue;”> Here is some text <p>
```

This will set the color of the text to blue.

**Embedded** styles are rules declared inside the head of the document, for example;

```html
<head>
    <meta content=“text/html; charset-utf-8” http-equiv=“Content-Type”>
    <title>Untitled</title>
    <style>
        p {
            color: blue;	
        }
    </style>
</head>
<body>
    <p> Here is some text <p>
</body>
```

This will also set the color of the text to blue.

**External** stylesheets can be used to declare rules in an external css document that can be loaded in when the page loads.
For example, a css document saved as *main.css* could be created with the following rule declared inside;
```css
   p {
	    color: blue;	
    }
```
and imported into the head element of the document like so;
```html
<head>
    <meta content=“text/html; charset-utf-8” http-equiv=“Content-Type”>
    <title>Untitled</title>
    <link href="main.css" rel="stylesheet" type="text/css">
</head>
<body>
    <p> Here is some text <p>
</body>
```

This also will set the color of text to blue.

### Use cases

All three accomplish the same, but in order to decide what method to use one must understand their importance;

Consider this example;

Let's say that in the main.css file their was a rule to color the text blue;
```css
   p {
	    color: blue;	
    }
```
And in the document an emdedded style is used to color the text orange;
```html
    <style>
        p {
            color: orange;	
        }
    </style>
```
And in the actual **<p>** tag an inline style is used to color the text red;
```html
<p style=“color: red;”> Here is some text <p>
```

What color will the text be when the document loads?
The browser can only render one style, and to decide which style it uses it considers the importance of the three approaches to determine the outcome;

1. **Inline** rules are considered most important. When the browser encounters these rules they generally *override* conflicting rules in embedded and external styles. 
2. **Embedded** rules are the second most important. If a conflicting rule is found in an external css file and there are no conflicting inline styles, the embedded rule will be applied.
3. **External** rules are the least important. If neither conflicting inline or embedded styles are declared, the external rules in the css file will be applied.

For our example the outcome color of the text will be **red**.

In general, it's best practice to use external css stylesheets to style content as you can have greater control of styling, and it helps to seperate presentation from content when building a website. The browser can also cache an external stylesheet too, so it can be stored in the users browser when revisiting the site to help with load times. 

It could also be useful to combine embedded and external styles if you want to create some overriding rules specific to a unique page on a site, like changing the background image for example.

Inline styles could be also useful to override all styles for a 'quick and dirty fix' for a style, and because of this it can be powerful to use JavaScript to modify inline styles as you're almost guaranteed they will override existing styles. The only exception is when the !important rule is added to the end of the rule in external/embedded rules;
```
    p {
        color: red !important;
    }
```
If written in an externall css file, this would override inline styles.

More imformation about importance and the cascading nature of CSS can be found [here](http://www.expression-web-tutorial.com/Types_CSS_Styles.html#.V0WZeZMrJMA)

##
## JavaScript Inline Manipulation
##
##


To set style properties of an element, you can use the following notation;
```
element.style.cssproperty = value;
```
where *element* is the element in the DOM, *cssproperty* is the name of the property (written in camelCase), and *value* is the value.


For example, in CSS the following could be written to change the background color of a button to blue;
```css
    button {
        background-color: blue;
    }
```
In JavaScript it would be written like this;
```javascript
    var button = document.getElementsByTagName("button")[0];
    button.style.backgroundColor = "blue";
```

Notice that instead of **'background-color'** we use **'backgroundColor'** to call the property, css properties are called in camel case otherwise JavaScript would think we are trying to subtract 'color' from 'background'.

You can also get property values too;
```javascript
var bgcolor = button.style.backgroundColor;
console.log(bgcolor);
// "blue"
```

**Example**

So let's say you've created a page with a button on, and you want to change the background color of the button when it is clicked to a random color. After creating an onclick event handler to the button, the html could look like this;

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Color Button</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    
    <body>
    <button onclick="colorChange()">Click Me</button>  
    </body>
    
</html>
```

To manipulate the color in JavaScript we need to do three things;
1. Access the first (and only) button in the DOM;
```javascript
    var button = document.getElementsByTagName("button")[0];
```
2. Create a function called randomColor that returns a random color.
```javascript
    function randomColor() {
        var colorarray = ["red","blue","green","yellow","orange","pink","purple"];
        return colorarray[Math.floor(Math.random()*colorarray.length)];
    }
```
3. Create a function called colorChange that calls the randomColor function, then applies an inline style rule to the button when clicked.
```javascript
    function colorChange() {
        button.style.backgroundColor = randomColor();
    }
```

Putting it all together the page would look like this (see demo [here](https://jsfiddle.net/njsfield/ykdkjxcs/));
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Color Button</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
    
<body>
    <button onclick="colorChange()">Click Me</button>  
</body>
    
<script>
    var button = document.getElementsByTagName("button")[0];
    
    function colorChange() {
        button.style.backgroundColor = randomColor();
    }
    function randomColor() {
        var colorarray = ["red","blue","green","yellow","orange","pink","purple"];
        return colorarray[Math.floor(Math.random()*colorarray.length)];
    }
</script>   
    
</html>
```
When the html page is rendered, after clicking the element you'll notice in the developer tools (e.g Chrome DevTools) the element now has an inline style, and it dynamically changes when the button is clicked.


### Multiple Properties

You can use JavaScript to add multiple inline style rules, and the result will be a single inline style declaration with multiple rules.
For example, we could modify the colorChange() function to set the height too;
```javascript
    function colorChange() {
        button.style.backgroundColor = randomColor();
        button.style.height = "50px";
    }
```
And the result would be;
```html
    <button onclick="colorChange()" style="height: 50px; background-color: purple;">Click Me</button>
```
See demo [here](https://jsfiddle.net/njsfield/12f3415k/).

If you wanted to use JavaScript to set multiple styles at once, you can use the **setAttribute** method.
This method takes the name of an attribute (in this case 'style') and a string of values;
```javascript
    button.setAttribute('style', 'background-color:' + randomColor() + '; height: 50px;');
```
Here you use the standard notation for declaring css rules with '-' instead of camelcase.


**Note** every time you use .setAttribute it **overrides** the existing inline styling, whereas the .style method can be used multiple times to build up the inline style rule.

To remove inline styling alltogether, you can use the removeAttribute('style') method;
```javascript
    button.removeAttribute('style');
```
Which is similar to
```javascript
    button.setAttribute('style', "");
```

## CSS properties

See [here](http://www.w3schools.com/jsref/dom_obj_style.asp) for a list of other style properties to alter with JavaScript.

#
## Resources
#
[Cascade & Inheritance](https://www.w3.org/TR/CSS2/cascade.html#x12)

[Using JavaScript to manipulate embedded CSS](http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript)

[Accessing and manipulating stylesheets](https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript)

[Using !important](https://css-tricks.com/when-using-important-is-the-right-choice/)

[Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)


 
