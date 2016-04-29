As you know, objects are collections of name – value pairs. For example:
```
var boy = 
	name: ‘Bart’,
  last: 'Simpson',
  enemy: 'Lisa'
}
```
However, there is more to properties of an object than them just being a name and a value. Properties also have the following
attributes: ‘writable’, ‘enumerable’ and ‘configurable’. To display, for instance, the attributes of the name: ‘Bart’ property,
we can type the following code:

console.log(Object.getOwnPropertyDescriptor(boy, ‘name’))
This will be displayed:

{
value:	"Bart",
writable:	true,
enumerable:	true,
configurable:	true
}

We can see that all three are set to ‘true’ by default. Please remember that we are examining only the ‘name’ here in our ‘boy’ object.
But what do they do? Let’s examine each one separately.

Writable:

The writable attribute determines whether we can change that property from its current value. Our initial value of ‘name’ is ‘Bart’.

So long as ‘writable’ is set to ‘true’, we can change ‘name’ as normal:

boy.name = ‘Leonard’;

However, let’s set ‘writable’ to ‘false’:

Object.defineProperty(boy, ‘name’, {writable: false});

If you now examine our ‘name’ with the same code as before:

console.log(Object.getOwnPropertyDescriptor(boy, ‘name’))

This will now be displayed:
{
value:	"Bart",
writable:	false,
enumerable:	true,
configurable:	true
}

Once you set ‘writable’ of ‘name’ to ‘false’, and try to change the value of ‘name’:
Boy.name = ‘Leonard’;
‘name’ will still be set to ‘Bart’.

Of course, if you change the ‘name’ before you set ‘writable’ to ‘false’, then that second name will now become ‘unchangeable’ so to
speak.

WARNING!! You have to be very careful now because if the value of ‘name’ is another object (so not a primitive like a string), for
example: 

Name: {first: ‘Bart’, nickname: ‘Bandit’}

Setting ‘writable’ to ‘false’ wouldn’t prevent us from being able to change either ‘first’ or ‘nickname’.

In this case, a different approach is needed, you have to ‘freeze’ it:

Object.freeze(boy.name)

Now the whole ‘name’ object is frozen and we are unable to change anything in it.

Next we will examine ‘enumerable’:

As you know, we can display names in an object by using ‘for in’ loop: 

For(x in boy){
Console.log(x);
} //----> name
 //-----> last
 //-----> enemy

However, let’s set ‘enumerable’ to ‘false’:

Object.defineProperty(boy, 'name', {enumerable: false});

If we now use the ‘for in’ loop again, we get the following result:
//-----> last
//-----> enemy

Similarly, if you try to see object keys:

console.log(Object.keys(boy)) //-----> [‘last’, ‘enemy’] so you can see that ‘name’ is missing.

Similarly, JSON serialization is also affected:

console.log(JSON.stringify(boy)); //----->{"last":"Simpson","enemy":"Lisa"}

However, just because it is rendered ‘not-enumerable’, doesn’t mean it disappeared into the thin air, that is, you didn’t delete it.
So you can still look at it by simple:

console.log(boy.name); //-----> ‘Bart’

And finally, ‘configurable’:

Object.defineProperty(boy, ‘name’, {configurable: false});

First of all, once you make a property non-configurable, that is you set ‘configurable’ to ‘false’, you can’t change it back to ‘true’,
that is, you can’t make it configurable again.

But what does setting ‘configurable’ to ‘false’ do?
It prevents us from being able to change the ‘enumerable’ attribute. If you, for instance try to change the ‘enumerable’ from ‘true’
to ‘false’, you won’t be able to. 

It also prevents us from being able to ‘delete’ a property:

Delete boy.name //-----> error

Finally, setting ‘configurable’ to ‘false’ does not prevent you from being able to change the ‘writable’ attribute.

As you can see, properties of an object can be a lot more fun than you may have thought!!
