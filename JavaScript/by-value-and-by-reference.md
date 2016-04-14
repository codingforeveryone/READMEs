By Value:

Suppose we have var num that contains a primitive: 
```
var num = 8;
```
At this point, ‘var num =’ creates a new space in memory that contains number 8. It has an address just like you have an address where
you live. Numbers, strings and Booleans are primitive values/primitives. 

Next we have:
```
var num2 = num;
```
What is happening now is that ‘num2 =’ creates another space in memory (this is important, there are two separate spaces in memory now)
and that memory space gets a copy of whatever the memory space of ‘var num’ contains, in this example number 8. 
So if you now console.log(num2) 8.

The same process takes place for the other primitives and is what is called ‘by value’. There are two separate addresses in memory and
one contains a copy of the other. They are now on their own and don’t affect each other. So if we change the value of ‘num’ to 9:
```
var num = 9;
```
the variable ‘num2’ is unchanged and would still console.log 8, whereas ‘num’ will now console.log 9.

HOWEVER
Things work differently with objects.

By Reference:

Suppose we have an object:
```
var person = {name: ‘Sheldon’};
```
And we also type another variable and make that equal to ‘person’:
```
var person2 = person;
```
At this point, because we are not dealing with primitives but with objects, no new memory space was created and so no copy of the
object was created and put in it. Instead, ‘person2’ is now pointing at the same memory space as ‘person’ and that memory space
contains an object. We basically now have two names (person and person2) for the same thing (for that one object). So you can access
and change that one object through either of those two variables. 

If we console.log person.name, the same will come up as when we console.log person2.name Sheldon

If we change the name via that ‘person2’:
```
person2.name = ‘Wollowitz’;
```
Now both person.name and person2.name will console.log ‘Wollowitz’. It doesn’t matter which of them two variables we use to change the
name because they are both pointing at the same object.

This is called By Reference.

Just remember that primitives are by value (new memory space is created with a copy of the original value in it) and objects are by
reference (we simply point to the same spot in memory, so we now have two names for the same thing). 
