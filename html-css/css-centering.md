# CSS Centering

Centering with css is a task that a front end developer has to perform frequently. There are many ways to center DOM elements and it will depend on many factors as DOM elements to be centered, parent-children structure, developer preferences, and other restrictions. Below I will summarize some of the most useful ways I have found.

When centering, we create a relationship between two elements, usually parent-children, so most of the centering techniques will make reference to styling both parent and children element.

## Using text-align: center
*This technique centers only horizontally*  
To align an element with the css attribute `text-align`, it must behave as an *inline* element. There are many elements that behave as *inline* by default, but you can style it as `inline-block` (or any other *inline*) and you can get the same results. In case you have other requirements that prevent the element to behave as *inline*, then you should go for another technique.

The HTML:
```HTML
<body>
  <div class="parent">
    <div class="child">
    </div>
  </div>
</body>
```

The CSS code:
```CSS
.parent {
  text-align: center
}

.child {
  display: inline-block
}
```
[*Play with this code on JSFiddle*](https://jsfiddle.net/dangonrei/vowvzfqa/)

Notice that the element centered is the one with the class `child`, and the parent is the one with the attribute `text-align`.

## Using margin: auto
*This technique centers only horizontally*  
To use this technique, we are going to need the element to behave as *block*. This one is one of the simplest, as you just need to give the value of `auto` to the margins of each side.

The HTML:
```HTML
<body>
  <div class="centered">
  </div>
</body>
```

The CSS code:
```CSS
.centered {
  margin-left: auto;
  margin-right: auto;
}
```

If you don't have any restriction on vertical margins, you can use the margin shorthand:
```CSS
.centered {
  margin: auto
}
```
[*Play with this code on JSFiddle*](https://jsfiddle.net/dangonrei/pdd6vwn4/)

## Using absolute positioning
You can use this technique whenever your design fulfills two requisites:
  * You know the size of the element. In case you don't know the size of your element, there are alternatives that can still suit you.
  * You can set the element position as `absolute`, and the parent's position as `relative`. If you cannot, you could probably nest your element in an outer `<div>` and use this technique with that div as the parent.

The HTML:
```HTML
<body>
  <div class="parent">
    <div class="centered">
    </div>
  </div>
</body>
```

For the code, let's suppose that the known width is `300px`, and the known height is `200px`. The CSS code:
```CSS
.parent {
  position: relative
}

.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -100px
}
```
[*Play with this code on JSFiddle*](https://jsfiddle.net/dangonrei/qh6y7vqo/)
**Explanation:**
  * `position: absolute` makes you able to set the position of the element freely, using the attributes top, left, right and bottom.
  * `left: 50%` sets the left border of the element exactly at a distance of **50% of its parent's width**. That is, the left border of the element gets placed just in the middle of its parent, horizontally.
  * `top: 50%` add the same logic as `left: 50%`, but this time vertically.
  * `margin-left: -150px` puts a *negative margin* to the element as big as **half of its width**. This forces the element to be placed in the center of its parent horizontally.
  * `margin-top: -100px` has the same purpose of `margin-left`, but this time using **half of its height**, placing it vertically in the center of its parent.

## Using translate
To use this technique you should be able to set the element position as `absolute`, and the parents position as `relative`. If you cannot, you could probably nest your element in an outer `<div>` and use this technique with that div as the parent.

The HTML:
```HTML
<body>
  <div class="parent">
    <div class="centered">
    </div>
  </div>
</body>
```

The CSS code:
```CSS
.parent {
  position: relative
}

.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
}
```
[*Play with this code on JSFiddle*](https://jsfiddle.net/dangonrei/a3zfkat0/)
**Explanation:** The attributes `position`, `left` and `top` are used with the same purpose as in [absolute positioning](#using-absolute-positioning). The `transform` attribute defined in the code, translates both vertical and horizontally the element by 50%. The difference is that, inside `transform`, the dimensions given in percentages **are relatives to the element dimensions**, and not to the parent's. Therefore, you are just moving to the left by half of the width and to the top by half of the height.
<br/>
<br/>
## Using flexbox
To use this technique, the parent of the centered element should behave as a *flexbox*. To do so, you should just be able to set the parent display as `flex` or `inline-flex`, depending on your design.  
**Note** that using a *flexbox* may produce unexpected results if you don't understand how they work.

The HTML:
```HTML
<body>
  <div class="parent">
    <div class="centered">
    </div>
  </div>
</body>
```

The CSS code:
```CSS
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
[*Play with this code on JSFiddle*](https://jsfiddle.net/dangonrei/abg85wa8/)
**Explanation:**
  * `display: flex` makes the parent behave as a flexbox, and allows you to use the following attributes.
  * `justify-content: center` set the content of the *flexbox* centered in the *main-axis*. By default the `flex-direction` is set to `row`, so you should expect it to center in width by default.
  * `align-items: center` set the content centered in the *cross axis*, so by default, you should expect it to center vertically its content.

The *flexbox* is a very powerful tool, that can be extremely helpful when used correctly. On the other hand, using it without having a basic knowledge of its behavior can lead to results difficult to understand. I strongly recommend learning the basics before using them.
<br/>
<br/>
## Related

- [Document Object Model](https://github.com/codingforeveryone/READMEs/blob/master/html-css/document-object-model.md)

## Resources

- [Flexbox documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
