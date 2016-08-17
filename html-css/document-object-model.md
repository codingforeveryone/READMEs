
# A primer on Document Object Model (DOM)

It all starts when you visit a webpage, there are a few things going on in the background whenever a web page is displayed in the browser.

1. When you visit a URL, the browser will fetch the HTML file from the destination along with the assets needed (i.e css, js, images etc).

2. The browser will then parse the HTML file and produce a representation, or a structure of that file.

3. It then goes to a process where the browser renders the visual attributes for each section of this structure and give them a size and coordinate.

4. With the model of the HTML file created, the browser then paints it in the display pixel by pixel.

5. This model that we just described, is the DOM (aka Document Object Model).

## How does the DOM look like

When the DOM is created, it is represented by a [Tree structure](https://en.wikipedia.org/wiki/Tree_structure).

Here's an example, the following HTML syntax

```
<!doctype html>
<html>
     <head>
     	<title>Welcome</title>
     </head>
     <body>
     	<h1>This is my homepage</h1>
        <p>I hope you like it</p>
     </body>
</html>
```

will produce the following tree structure, and each page element is represented by a tree node (**Note**: This is a simplification of what the actual tree structure is):

![DOM tree structure](/images/dom/dom-tree-small.png)

You can also visually see the DOM using the browser's developer tool. Simply bring up a browser (eg Google Chrome or Firefox) and press ```Cmd + Opt + I``` on Mac or ```Ctrl + shift + I``` on Windows.

![Visual DOM tree structure](/images/dom/visual-dom-tree.png)



## The DOM is also referred to as an API

An application programming interface [(API)](https://en.wikipedia.org/wiki/Application_programming_interface) is simply just a means for one computer program to communicate with another computer program. In this context, the DOM API allows the interaction and manipulation of the html document in the browser through Javascript code.

## Interacting with the DOM

There are several ways to interact with the DOM, they are inclusive of but not limited to:

##### 1. Traverse the DOM tree structure

If you go over to the console in the browser development tool, and type in ```document```, you can see its immediate child nodes being logged. The ```document``` node sits right at the top of the tree (aka the root node).

![DOM document](/images/dom/document.png)


Every parent node has a ```childNodes``` method that can be called to retrieve its child nodes in an array.


![DOM document's child node](/images/dom/document-childnode.png)


and you can traverse further into the tree structure


![DOM document's grand child node](/images/dom/document-child-child.png)


just as a parent node has a ```childNodes``` method, the child nodes themselves have a ```parentNode``` method to find its parent, although they will have only one.


![Parent node](/images/dom/parent-node.png)


##### 2. Finding a specific sub-section of web page

We can reach any node on the page by means of ```childNodes``` and ```parentNode```, but we can already tell that doing so can be very repetitive. Fortunately the DOM allows us to find a specific node of the page more easily.

Now update the HTML syntax to the following:

```
<!doctype html>
<html>
     <head>
     	<title>Welcome</title>
     </head>
     <body>
     	<h1 id="blue">This is my homepage</h1>
        <p class="yellow">I hope you like it</p>
     </body>
</html>
```

**Find node by Id**: Just as the title imply we can find a node on the page using ```document.getElementById```

![Get by ID](/images/dom/get-by-id.png)

**Find node by Class name**: You can also find a node on the page using ```document.getElementsByClassName```

![Get by class name](/images/dom/get-by-classname.png)

**Find node by html tag (i.e body, head, h1, p etc)**: Try and find the node by ```document.getElementsByTagName```

![Get by tag](/images/dom/get-by-tag.png)

Of course, there are several other ways in which you can find nodes on the page, feel free to explore them:

![Get options](/images/dom/get-option.png)

#### **querySelector** and **querySelectorAll**
```querySelector``` is an alternative to ```getElementBy``` and is the do-it-all method when it comes to element selection.  It can be used in place of any of the ```getElementBy``` methods.  The querySelector method allows us to use the CSS selector syntax that we already know and love to select elements.  ```querySelector``` will return the **first** match only and ```querySelectorAll``` will return **all** matches.

Basic syntax is: ```document.querySelector("< CSS selector >")  ```


**Select by class**
```
document.querySelector(".className")
```
**Select by id**
```
document.querySelector("#idName")
```
**Select by tag**
```
document.querySelector("tagName")
```

These are the most basic examples of ```querySelector```.  Because the arguments it takes are literally just CSS selectors, this enables us to be very specific with selections.  For instance, the following statement will select only ```anchor``` tags where ```src``` attribute is ```"myimage.jpg"```
```
document.querySelectorAll("a[src='myimage.jpg']")
```
This statement will select the third ```li``` in the second ```ul```:
```
document.querySelector("ul:nth-of-type(2) li:nth-of-type(3)")
```



##### 3. Manipulating the DOM elements

While we can certainly inspect the DOM elements and its structure, we can also change it. Below we are changing the text in the ```<h1>``` from "This is my homepage" to "This is David's homepage" using ```element.textContent```.

![Before node manipulation](/images/dom/manipulate-before.png)

![After node manipulation](/images/dom/manipulate-after.png)

*Please note: the reference to* ```a.innerText``` *in this image should be* ```a.textContent```

It is widely regarded as best practice to use ```textContent``` over ```innerText```.  Internet Explorer introduced ```innerText``` and the intention is similar to ```textContent``` but with the following differences:

* While ```textContent``` gets the content of all elements, including ```<script>``` and ```<style>``` elements, the IE-specific property ```innerText``` does not.
* ```innerText``` is aware of style and will not return the text of hidden elements, whereas ```textContent``` will.
* As ```innerText``` is aware of CSS styling, it will trigger a reflow, whereas ```textContent``` will not.
* Unlike ```textContent```, altering ```innerText``` in Internet Explorer (up to version 11 inclusive) not just removes child nodes from the element, but also permanently destroys all descendant text nodes (so it is impossible to insert the nodes again into any other element or into the same element anymore).

Often times the manipulation of the DOM is done using Javascript. We can simply update our HTML syntax again to show an example:


```
<!doctype html>
<html>
     <head>
     	<title>Welcome</title>
     </head>
     <body>
     	<h1 id="blue">This is my homepage</h1>
        <p class="yellow">I hope you like it</p>
         <script>
        	var a = document.getElementById('blue');
        	a.textContent = "This is her homepage";
        </script>
     </body>
</html>
```

In the code above we just added some simple Javascript to change the text in the ```<h1>```

Here's the output from the console:

![Her homepage](/images/dom/her-homepage.png)

You can see that even though the ```<h1>``` text was defined "This is my homepage" originally, it was later modified to "This is her homepage" by the javascript code.

There are many other aspects of our HTML file that can be updated with JavaScript Code, I will demonstrate some of the most common:

**Style** - note this is covered in more depth in [this](https://github.com/codingforeveryone/READMEs/blob/master/html-css/manipulating-inline-styles.md) existing ReadME.
```style``` will add inline style attributes to the element **inside** the HTML file.  Note the use of camelCase as opposed to kebab-case.
```
<element>.style.color = "blue";
<element>.style.fontSize = "15px";
```

**Class** - Using the ```classList``` method; you can add, remove and toggle classes on HTML elements, which can be referenced in CSS.  This method is generally recommended over adding inline styles wherever possible.

*Add & Remove*:
```
<element>.classList.add("someclass")
<element>.classList.remove("someclass")
```
*Toggle* - (If class is not assigned to the element it will add it, otherwise it will remove):
```
<element>.classList.toggle("someclass")
```

**Attribute** - The ```setAttribute``` method takes two arguments - the attribute name, and value it is to be set to.

```
<element>.setAttribute("attributeName", "valueToSet")
```  
```
i.e.  document.querySelector("h1").setAttribute("href", "http://www.google.com")
```


##### 4. Event triggered DOM manipulation
Perhaps the most important aspect when dealing with the DOM and JavaScript is event triggered actions.  Without triggers all the long hours spent writing brilliant code are pointless, we need something to tell it to run!  I have listed four very basic and common events calls.  This is by no means comprehensive and it simply intended to demonstrate the general idea.  

The ```eventListener``` method can be attached to an element.  This method takes two arguments - an event, and a function.  The listener will wait for the specified event to occur, at which point the second argument - the function, will be executed. The basic syntax is as follows:
```
<element>.addEventListener("event", function)
```

**"click" event** - Function runs any time the specified element is clicked on
```
<element>.addEventListener("click" function(){
  //do something
  })
```

**"change" event** - Function runs any time an element is changed.  For example if an input is populated with some text.
```
numInput.addEventListener("change", function(){
  //do something
  i.e.
  <someElement>.textContent = this.value;
});
```

**"mouseover" event** - Function runs any time the mouse pointer hovers over an element.
```
<element>.addEventListener("mouseover" function(){
  //do something
  })
```

**"mouseout" event** - Function runs any time the mouse pointer moves off from an element is was hovering over.
```
<element>.addEventListener("mouseout" function(){
  //do something
  })
```

A complete list of available events can be found on MDN [here](https://developer.mozilla.org/en-US/docs/Web/Events).

## Other example uses cases of the DOM

- [Adding](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) or [removing](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) HTML elements on the web page
- Creating [events](https://www.youtube.com/watch?v=qXkZbTXbBwM&index=4&list=PL18600E7CA651B16B) listener, i.e do something on the web page when people click, hover or type something.
- Create [animation](http://www.w3schools.com/js/js_htmldom_animate.asp)
- Do something once a web page is [loaded](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)
- [Change the attribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) of the HTML elements
- [Manipulate text](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [Changing the visual outlook](http://www.w3schools.com/js/js_htmldom_css.asp)or the style (eg. color) of the page document

## Summary

- The DOM is a model created by the browser to represent the web page document being visited.
- This model can be viewed, interacted with, and be manipulated.
- The DOM is also an API where HTML & Javascript can be used to change its visible content.
- The DOM is created with a tree structure, where each node in the tree has a ```childNodes``` and ```parentNode``` method, to depict the relationship between the elements on the page document.

## Further links to read & watch

- [Eloquent Javascript - DOM](http://eloquentjavascript.net/13_dom.html)
- [CSS Tricks - DOM](https://css-tricks.com/dom/)
- [MDN - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [Douglas Crockford - The theory of DOM](https://www.youtube.com/watch?v=Y2Y0U-2qJMs)
