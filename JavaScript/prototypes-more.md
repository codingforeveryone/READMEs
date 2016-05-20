#More on Javascript prototypes

This tutorial offers some more in depth observations on prototypes in Javascript. It is designed to pick up where [Inheritance and Javascript](http://codingforeveryone.foundersandcoders.org/JavaScript/inheritance-and-javascript.html) left off, and will teach you about the different ways to access and define object prototypes. To that end, we will examine the difference between the so-called "internal" prototype property of an object (`[[prototype]]`), the prototype "accessor" (`__proto__`), and the ordinary `prototype` property specific to Functions. 

##The internal prototype property (`[[prototype]]`)

The prototype property of an object is not like the normal "named" properties we may assign to an object. It is referred to as "internal". It is there for the Javascript engine to make use of, but you cannot reference it directly within your code. Properties like this are conventionally denoted with double brackets, as `obj.[[prototype]]`, **but this is not a valid Javascript expression**.

So, if we cannot access `[[prototype]]` directly, how do we set up objects so that they inherit the properties we want?

##Set the internal prototype of an object

###The `Object.create()` method

`Object.create()` returns a new object whose `[[prototype]]` property points to the object passed as the first argument. In other words, the object returned will inherit from the object passed. As we did in [Inheritance and Javascript](/JavaScript/inheritance-and-javascript), let's first define a `person` object:

```javascript
var person = {  
    firstName: 'Default', 
    lastName: 'Default',  
}
```
Now, let's create a new object that has `person` as its prototype:

```javascript
var ben = Object.create(person);
```

Now we can also define properties specific to `ben`. Let's

1. override the inherited value of 'Default', replacing it with 'Ben'.
2. add a new property, `middleName` not present in the prototype.

```javascript
ben.firstName = 'Ben';
ben.middleName = 'Joe';
```
Note that we can also define `ben`'s own (non-inherited) properties when we create it, by passing them as the second argument of `Object.create()`. The above code is equivalent to:

```javascript
var ben = Object.create(person, {
	firstName: 'Ben',
	middleName: 'Joe'
});
```


### The `__proto__` accessor

An accessor is another special kind of property. It holds a function through which internal properties can be accessed and changed. In other words, by referring to the `__proto__` property of an object, we are are invoking a function that will retrieve or change the internal `[[prototype]]` property. All objects are born with a `__proto__` accessor, just as they are born with a `[[prototype]]`, inherited from the original Object prototype.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) has the following warning regarding `__proto__`:

>Changing the [[Prototype]] of an object is, by the nature of how modern JavaScript engines optimize property accesses, a very slow operation, in every browser and JavaScript engine. The effects on performance of altering inheritance are subtle and far-flung, and are not limited to simply the time spent in obj.__proto__ = ... statement, but may extend to any code that has access to any object whose [[Prototype]] has been altered. If you care about performance you should avoid setting the [[Prototype]] of an object. Instead, create a new object with the desired [[Prototype]] using Object.create().

Nonetheless, we saw how it is possible to get and set the prototype of an object using `__proto__` in the example at the end of [Inheritance and Javascript](/Javascript/inheritance-and-javascript.md#example).

By the way, `__proto__` is pronounced "dunder proto".

###Constructor functions and the `new` keyword

Perhaps the best known way to establish the inheritance pattern of an object is by using *constructor functions*. Constructor functions emulate the way objects of classes are created in class-based languages. Usually, you would define a constructor function to take arguments and assign the arguments as variable values to the properties of the created object. Here, we'll take a simpler example, where the values of the properties will be the same for every new object constructed:

```javascript
var Person = function() {  
    this.firstName = 'Default'; 
    this.lastName = 'Default'; 
};
```
By calling the function with `new` we create a new object that **appears to** inherit these properties:

```javascript
var ben = new Person();
ben.firstName; //'Default'
ben.lastName; //'Default'
```
Why only "appears to"? Well, it's true that all objects created this way will be assigned the properties determined by the constructor. It is **as if** the properties had been inherited. But these properties are not retrieved from the new object's `[[prototype]]`. The constructor assigns them as own properties of the new object itself. We can check this by using the inbuilt `Object.hasOwnProperty()` method:

```javascript
ben.hasOwnProperty("firstName"); //true
```

There is a way to set up real prototypal inheritance with a constructor function. Let's look at it now.

###The `prototype` property of functions

All functions inherit from their internal `[[prototype]]` a property named `prototype`. That means just that, functions, unlike other objects, are born with a named `prototype` property. This `prototype` property stores a reference to the ``[[prototype]]`` of all objects that are constructed using the function and the `new` keyword. In other words, any objects constructed using the function will have as their prototype whatever the function's `prototype` property contains. Let's modify our constructor function so that the objects it creates will inherit `firstName` and `lastName` from their prototype:

```javascript
var Person = function() {  
	//nothing in here any more!
};

Person.prototype = {
	firstName: 'Default', 
    lastName: 'Default'
};
```
Now every time we create a new person like this...

```javascript
var ben = new Person();
```
...the created object (`ben`) will inherit `firstName` and `lastName` from its prototype:

```javascript
ben.firstName; //'Default'
ben.hasOwnProperty("firstName"); //false
```

####Performance implications
Replicating own properties through constructor functions and setting up inheritance from the prototype have different performance implications. Multiplying own properties may increase memory requirements, but the property of each object will be more rapidly accessed. Properties inherited from the prototype require less memory (because they are stored only in a single object, the prototype, not in the objects that reference it), but are accessed more slowly, because the Javascript engine must look up the prototype chain to find the property.

##Access the internal prototype of an object

Javascript gives us a number of options if all we want to do is read from an object's prototype, without setting it.

###Use `Object.getPrototypeOf(obj)`
This is perhaps the best way:

```javascript
Object.getPrototypeOf(ben).firstName; //'Default'
```

###Use `__proto__`

This is perhaps the simplest way, but not necessarily recommended:

```javascript
ben.__proto__.firstName; //'Default'
```

###Use `constructor.prototype`
If an object was constructed with the `new` keyword, you can check the `prototype` property of its constructor function. Note that a reference to the constructor will be stored in the `constructor` property of all objects created in this way:

```javascript
ben.constructor.prototype.firstName; //'Default'
Person.prototype.firstName; //'Default'
```

##Related

[Objects](http://codingforeveryone.foundersandcoders.org/JavaScript/Objects.html)

[Inheritance and Javascript](http://codingforeveryone.foundersandcoders.org/JavaScript/inheritance-and-javascript.html)

##References
[The different kinds of object properties](http://www.2ality.com/2012/10/javascript-properties.html)

[Stackoverflow thread](http://stackoverflow.com/questions/650764/how-does-proto-differ-from-constructor-prototype) on the difference between the `prototype` property of functions and `__proto__`.

[Another quite clear explanation](http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/)