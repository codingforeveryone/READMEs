#Inheritance and JavaScript

Most modern object oriented programming (OOP) languages support the concept of inheritance.  Think of inheritance as a child inheriting the functionality of its parent, where the child can add its own specifics.  In this tutorial, I outline the difference between the version of inheritance found in C#, C++ or Java ("classical inheritance") and that found in Javascript ("prototypal inheritance"), and describe how prototypal inheritance in Javascript works. For a more detailed discussion of how to access and define prototypes, see [More on Javascript prototypes](/JavaScript/prototypes-more.md)
 
##Classical inheritance

Classical inheritance depends on the concept of classes.  Classes may be thought of as blueprints.    

So for example in C#, C++ or Java we may have a Vehicle class, a parent blueprint, which will have a steering wheel, engine and wheels.  This Vehicle can be specified further with the following classes of Car and Lorry, child blueprints, which can be specified further and so on.  The important thing is that Car and Lorry both inherit from the Vehicle class.  

 ![Javascript output](/images/ClassesExample.png)

Another way to look at this is that Car “_is A_” Vehicle and Hatchback “_is A_” Car.  Inheritance of a class from a parent class exemplifies the "_Is A_" relationship.  This is known as classical inheritance.

However, JavaScript **DOES NOT SUPPORT** classical inheritance. It has no real concept of classes (the `class` keyword in [ECMAScript 6](/JavaScript/ECMAScript%206.html) is [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)).  This is very important, especially if you have learned another class-based language.  JavaScript is a Class-Free Object Oriented Language.  It uses prototypal inheritance, which is where an object inherits from another object.  This allows for a more flexible system of inheritance, since any object can be set up to inherit from any other. With a class-based system, the type distinction between objects and classes ensures that objects can only inherit from classes. 

##Prototypal inheritance

Prototypal inheritance is determined by the prototype property of an object.  A prototype may be thought of as an object from which other objects inherit properties. The prototype itself may inherit from another object, so effectively it is a chain of objects. Therefore, object properties that are defined within the prototype object are inherited by all instances that reference it.  This can be a bit confusing so it may be demonstrated as follows.

####An object and and an assigned property 			
![Javascript output](/images/objprop1.png)

In code, the property can be accessed by `obj.prop1`  

Besides properties which are assigned, all objects in JavaScript have a prototype property, which holds a reference to another object, the prototype. The protoype can also have a property. This property will be inherited, as shown in the example below.

####An object and an inherited property

![Javascript output](/images/objpropproto.png)

Then what happens if we call `obj.prop2`?
We are actually calling the prototype property _prop2_.  It looks like _prop2_ is on the _obj_, however it is actually on _proto{}_.

Now the prototype may also point to another prototype, in turn pointing to another prototype, forming a prototype chain.

####A prototype chain

 ![Javascript output](/images/protochain.png)

Now, in this example, what happens if we call `obj.prop3`?
We will actually call the property from _proto2{}_, itself a property of _proto{}_.  We are calling down the prototype chain.  We are seeing where we have access to the property amongst a sequence of objects.

We can also have another object referencing _proto{}_, _obj2_:

####Multiple inheritance

![Javascript output](/images/twoobjectschain.png)

Now if we call `obj2.prop1`, what happens?  
Then, `obj.prop1` is accessing the same property.  `obj1` and `obj2` are effectively sharing the same property, not directly, but via the prototype chain.

 
##Example

In code terms here is an example. Let's start by defining an object, `person` and assigning it some properties.

```javascript
var person = {  
	firstName: 'Default', 
	lastName: 'Default',  
	getFullName: function(){  
		return this.firstName + ' ' + this.lastName;
	}
}
```
Now let's add another object called `ben`.

```javascript
var ben = {  
	firstName: 'Ben',  
	lastName: 'Smith',
}
```

The next step is for demonstration purposes only and should not be used. It can, however, be done in most modern browsers. We can set the prototype of the `ben` object to the `person` object by using the inbuilt `__proto__` accessor. For information about `__proto__`, see [More on Javascript prototypes](/Javascript/prototypes-more.md).

```javascript
ben.__proto__.person;
```
Ben now inherits from `person`. If we try to access a property or method on `ben` which does not exist, the search will move to `person`. Let's try:

```javascript
console.log(ben.getFullName()); //prints 'Ben Smith'
console.log(ben.firstName); //prints 'Ben', NOT 'Default'
```

What happens if we create a new object that only has a first name?

```
var colin = {  
	firstName: 'Colin'
}

colin.__proto__.person;

console.log(colin.getFullName()); //prints 'Colin Default'
```

So we can see that if a an object and its prototype have properties with the same name, the property will only be inherited from the prototype if it is missing in the object.

The above was for example purposes only.  So to conclude, **Prototypal Inheritance happens when an object's prototype attribute points to another object to inherit it’s attributes and methods.**

##Related

[More on Javascript prototypes](/JavaScript/prototypes-more.md)

##References

Youtube videos ([here](https://www.youtube.com/watch?v=qMO-LTOrJaE) and [here](https://www.youtube.com/watch?v=doXpW5AD60Q))

Two articles ([Prototypal](http://javascript.crockford.com/prototypal.html) and [Inheritance](http://javascript.crockford.com/inheritance.html)) by Douglas Crockford

[Prototypal inheritance examples](http://stackoverflow.com/questions/2064731/good-example-of-javascripts-prototype-based-inheritance) on Stackoverflow

[Inheritance and the prototype chain](https://developer.mozilla.org/en/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) on MDN.

[Detailed comparison of prototypal and classical inheritance](http://aaditmshah.github.io/why-prototypal-inheritance-matters/) by Aadit M. Shah.



 
