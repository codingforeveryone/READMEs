#Markdown CheatSheet

[![Join the chat at https://gitter.im/codingforeveryone/READMEs](https://badges.gitter.im/codingforeveryone/READMEs.svg)](https://gitter.im/codingforeveryone/READMEs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


This is a simple tutorial  to provide a refresher to Markdown and a reference to the most frequently used syntax.  
Here there is a short [interactive markdown tutorial](http://markdowntutorial.com/) to try.   
This is a link to [John Gruber site](https://daringfireball.net/projects/markdown/syntax), the creator of markdown, for a more exhaustive list of the syntax.  
Below you can find a small cheat sheet with some syntax present in the interactive tutorial, for quick reference.

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


Beware that what is shown above **will not work on GitHub** due to Github Markdown Limitation.
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
 * unordered lists  
 use \* followed by a space and your text
 * ordered lists  
 use 1. followed by a space and  your text

* code
 * \` var foo = 'bar'; \`  --> `var foo = 'bar';` 
 * wrap your code between \`\`\`  to preserve its format. Optionally you can indicate its language. I.e:
 
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
* Tables
 * Each header cell must be seperated by at least three dashes.  
 * The outer pipes ('|') are optional.
 * [Mardown table generator](http://www.tablesgenerator.com/markdown_tables) is a useful tool to make your life easier.
 
 ```
|    table      |     example   |  :D   |     
| ------------- |:-------------:| -----:|
| col 1 is      | left-aligned  |   :)  | 
| left-aligned  | is default    |   O_o |    
| col 2 is      | centered      |   ;D  |     
| col 3 is      | right-aligned |   :P  |     
 ```
 
|    table      |     example   |  :D   |     
| ------------- |:-------------:| -----:|  
| col 1 is      | left-aligned  |   :)  |   
| left-aligned  | is default    |   O_o |    
| col 2 is      | centered      |   ;D  |     
| col 3 is      | right-aligned |   :P  |  
 
 ```
 *This* | *is* | *also*
:---: | :--- :| :---:
valid | although | not
so | pretty! | :) 
 ```
 *This* | *is* | *also*
:---: | :---: | :---:
valid | although | not
so | pretty! | :)
 
* Quotes
 * Texts can be quoted with \<.

 ```
>Rudyard Kipling: If
>If you can dream—and not make dreams your master;   
>    If you can think—and not make thoughts your aim;   
>If you can meet with Triumph and Disaster 
>    And treat those two impostors just the same;   
>If you can bear to hear the truth you’ve spoken 
>    Twisted by knaves to make a trap for fools, 
>Or watch the things you gave your life to, broken, 
>    And stoop and build ’em up with worn-out tools.
 ```
 
>Rudyard Kipling: If  
>If you can dream—and not make dreams your master;   
>    If you can think—and not make thoughts your aim;     
>If you can meet with Triumph and Disaster   
>    And treat those two impostors just the same;     
>If you can bear to hear the truth you’ve spoken   
>    Twisted by knaves to make a trap for fools,   
>Or watch the things you gave your life to, broken,   
>    And stoop and build ’em up with worn-out tools.  
 
* Task lists
	* Tasks can be markes as complete or incomplete. 
	
	* \[ \] list a task prefacing a list item.   
	
	* \[x\] marks a task as completed.  
	
```
	- [x] Find a topic
	- [x] Write a README
	- [ ] Push my commits to GitHub
	- [ ] Open a new pull request
```

- [x] Find a topic  
- [x] Write a README  
- [ ] Push my commits to GitHub
- [ ] Open a new pull request     
* Ignore markdown Formatting by using the '\' escape character.

	```
	Let's \*solve\* a \_Kata\_!
	```

	Let's \*solve\* a \_Kata\_!
	
	
### Further readings

- [Markdown basics by John Gruber](https://daringfireball.net/projects/markdown/basics)
- [Gitbook - Markdown](https://www.gitbook.com/book/gitbookio/markdown/details)
- [Ghost - The ultimate guide to markdown](https://blog.ghost.org/markdown/)

### Practicing markdown

- [Dillinger.io](http://dillinger.io)
- [Stackedit.io](https://stackedit.io)
- [Codecademy](https://www.codecademy.com/courses/web-intermediate-en-Bw3bg/2/1)


