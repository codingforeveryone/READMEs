## Recursive Functions

A recursive function is a function that, at some point during it's execution, calls itself. This type of function can be very useful for iterating over data where the total number of elements/objects is not readily apparent, such as in a linked list; or branching is required to access all elements, as in an array whose elements may be arrays which may contain further arrays as elements.

#### Anatomy of a Recursive function

A recursive function will typically first check if a condition is satisfied. If the condition is met, the function will return a value or perform some other task. If the condition is not met, the function will return a call to itself with **modified** arguments. This cycle will continue until the condition is met, returning any target value back through the stack to the initial call.

##### Example 1
```javascript
function searchList(list, named){
  if (list==null){return 'Not Found'};
  return list.name == named ? list.status : searchList(list.next, named)
}

var sunnyVale = {name: 'Ricky',
status: 'Resident',
next: {name: 'Bubbles',
status: 'Resident',
next:{name: 'Julian',
status: 'Resident',
next:{name: 'Lahey',
status: 'Park Supervisor',
next: {name: 'Randy',
status: 'Assistant Park Supervisor',
next: null}}}}};

searchList(sunnyVale, 'Lahey'); //returns 'Park Supervisor'
searchList(sunnyVale, 'Randy'); //returns 'Assistant Park Supervisor'
searchList(sunnyVale, 'Julian'); //returns 'Resident'
searchList(sunnyVale, 'Bubbs'); //returns 'Not Found'
```
In example above, the function ```searchList``` takes 2 arguments, a linked list called ```list```; and a string called ```named```. ```searchList``` first checks if ```list``` is null (which would mean we have come to the end of the list) and returns ```'Not Found'``` if so. The function then checks if the list property ```name``` equals the variable ```named``` we are looking for. If ```list.name``` matches ```named```, it is returned. If not, ```searchList``` calls itself with ```list.next``` as the list to check. This continues like a loop until the right ```name``` is found, or the list ends.

##### Example 2
```javascript
function sum(num, add){
  if (add===0){return num}
  else {
    num += 1;
    return sum(num, add-1)
  }
}
sum(9,10); //returns 19
```
In this example, function ```sum``` adds two numbers. It does this by adding 1 to ```num``` and returning a call to ```sum``` with the argument ```add``` decremented by 1. When ```add``` is 0, ```num``` (having been incremented by 1 ```add``` number of times) is returned.

#### Drawbacks
Recursive functions have two main drawbacks. One is that repeatedly calling a function is less efficient when a standard ```for``` or ```while``` loop will do the job. The other is that each recursive call adds another function to the stack, consuming more and more memory each time. Calling ```sum``` from Example 2 like this: ```sum(9,100000);``` would result in a 'Range' or 'Too much recursion' error as the stack would overflow.  

Consult the links below for a tutorial on *Tail Call Optimisation* for further information.

##### Links
* [Understanding recursion in functional JavaScript Programming](http://www.integralist.co.uk/posts/js-recursion.html) TCO using *Trampolining*  
* [Wikipedia entry on the call stack](https://en.wikipedia.org/wiki/Call_stack)
* [Wikipedia entry on stack overflow](https://en.wikipedia.org/wiki/Stack_overflow)
