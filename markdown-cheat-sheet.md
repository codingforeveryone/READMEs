#Markdown CheatSheet

[![Join the chat at https://gitter.im/codingforeveryone/READMEs](https://badges.gitter.im/codingforeveryone/READMEs.svg)](https://gitter.im/codingforeveryone/READMEs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


This is a simple tutorial  to provide a refresher to Markdown and a reference to the most frequently used sintax.  
Here there is a short [interactive markdown tutorial](http://markdowntutorial.com/) to try.   
This is a link to [John Gruber site](https://daringfireball.net/projects/markdown/syntax), the creator of markdown, for a more exaustive list of the sintax.  
Below you can find a small cheat sheet with some sintax present in the interactive tutorial, for quick reference.

##### Further text formatting
If you want to achieve some effects that are not covered by basic Markdown syntax, you can **embed standard html tags** in Markdown and use inline css.

For example if you want to have text wrapping around an image you could do the following, replace:

```
![karate kata gif](https://45.media.tumblr.com/tumblr_m67my3RMlA1rvcjd7o1_400.gif)
```

with:

```
<img  src="https://45.media.tumblr.com/tumblr_m67my3RMlA1rvcjd7o1_400.gif" alt="karate kata gif" style="float: right; padding-left: 1%">
```


Beware that what showed above **will not work on GitHub** due to Github Markdown Limitation.
GitHub accepts html tags in the Markdown, but for consistency/safety reasons it strips the 'style' parameter.
See [here](http://stackoverflow.com/questions/20598628/do-style-tags-work-in-markdown) for a better explanation.


### CheatSheet

* italics
 * \_myWord\_   -->    _myWord_  
 * \_myWord1 myWord2\_   -->   _myWord1 myWord2_



* bold
 * \*\*myWord\*\*    -->   **myWord**
 * \*\*myWord1 myWord2\*\*   -->   **myWord1 myWord2**



* header  
The number of hashtags indicates what kind of header you are creating.
 * \#header1 
 * \#\#header2
 * \#\#\#header3 


* links
 * \[name]\(url\)

* images
 * \!\[name]\(url\)

* block quotes
 * use \> on the first line of the text you want to quote

* lists
 * unordened lists  
 use \* followed by a space and your text
 * ordered lists  
 use 1. followed by a space and  your text

* code
 * \` var foo = 'bar'; \`  --> `var foo = 'bar';` 
 * wrap your code between \`\`\`  to conservate its format. Optionally you can indicate its language. I.e:
 
  \`\`\`javascript
  
      var foo = 'bar';
      
       function repeat(str, times){
        
         return (''+Array(times + 1)).split(',').join(str);
        
       }
      
      repeat(foo, 5);
  
  \`\`\`

 turns into:
 
 ```javascript
 var foo = 'bar';

 function repeat(str, times){
  
   return (''+Array(times + 1)).split(',').join(str);
  
 }

repeat(foo, 5);
 ```
