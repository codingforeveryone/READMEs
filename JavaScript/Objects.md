#Objects


##Introduction

![oop in js](http://www.newthinktank.com/wp-content/uploads/2015/09/Object-Oriented-JavaScript.png)

The following is a basic introduction to objects, covering what objects are, how to access their properties, how to create objects via the *object literal*, as well as by using *constructor functions*, and how to add new properties to an object.

##What is an object?

An object is a list which contains items. Each of these items is stored by a _name:value_ pair. The values can be either primitive data types or reference data types. [Click here](/programmer-skills/mutable-vs-immutable.md) to see the different behaviour of primitive and reference types.



Let's take a look at an object: 

`var person = {firstName: "Ben", lastName: "Howard", age: 45};`

In this example `firstName` and `lastName` are the _property names_ and the _values_ are `Ben` and `Howard`. 

##Accessing object property values

The property values are accessed by referring to their paired names. Property names can be either a number or a string. If the property name is a string, we can access its value with *dot notation* or *bracket notation*. If it is a number, we have to use bracket notation to access it. 

Dot notation:

```javascript
var person = {firstName: "Ben", lastName: "Howard", age: 45};
var family = {3: "Brothers", 5: "Sisters"};
console.log(person.firstName); // Ben
console.log(family.3); // SyntaxError. Does not work.
```
Bracket notation:

```javascript
console.log(person['firstName']); // Ben
console.log(family[3]); // Brothers
```
Note the required quotation marks around the string when using bracket notation.

Functions stored within objects are referred to as *methods* of the object. To invoke a method of an object we use dot notation along with the parentheses that we normally use when invoking a function:

```javascript
var person = {firstName: "Ben", greet: function(){return 'Hello!';}};
person.greet(); // Hello
```


##Creating objects

###The object literal
One way to create an object is the _object literal_. This is done by _name:value_ pairs inside curly braces as seen in the example given above:

`var person = {firstName: "Ben", lastName: "Howard", age: 45};`

Object literals can also be spread over more than one line which makes them easier to read:

```javascript 
var person = {
	firstName: "Ben", 
	lastName: "Howard", 
	age: 45,
	printAge: function() {
		console.log("I'm " + this.age + " years old."
	
};
```

###The object constructor
Another way to create objects is with the the _object constructor_. This does the same as the _object literal_ but it uses the `new` keyword to call the constructor:

```javascript 
var person = new Object();
person.firstName = "Ben"; 
person.lastName = "Howard"; 
person.age = 45;
```

In the first line we initialise the `person` object. In the following three lines we assign _name:value_ pairs to this object.	

Let's say we had ten different persons with different values. Using either of the previous ways of creating objects we would have to create that whole object ten different times. There are more efficient ways to do this: one of them is the _constructor pattern_. 

```javascript
function Person(firstName, lastName, age, profession) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age,
	this.profession = profession;
	
	this.showFullName = function() {
		console.log("My name is " + this.firsName + " " + this.lastName);
	}
}
```

When we use the `this` keyword we use it as a shortcut: it refers to the object of the executing code (the actual object you're creating or using).

Now we can create different person objects by initialising the `Person` object. Note that we use a capital letter for the first letter of the function when we use the constructor pattern (in this case `Person`). This is a convention that signals that the `new` keyword must be used when calling the function:

```javascript
var hobbit = new Person("Bilbo", "Baggins", 233, "Coding enthusiast");

hobbit.showFullName();
```
As we did with Bilbo we can create as many person objects (or hobbit objects) as we like. 

##Adding object properties
Remember that all instances of `Person` will inherit their properties from `Person`. If we wanted all the instances of `Person` to have a _height attribute_ then we would add it to the `Person` constructor. 

```javascript
function Person(firstName, lastName, age, profession, height) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age,
	this.profession = profession;
	this.height = height;
	
	this.showFullName = function() {
		console.log("My name is " + this.firsName + " " + this.lastName);
	}
}
```

If we wanted to add a property to one of the instances of `Person` then we would do it directly on the object itself:

```
hobbit.favouriteFood = "Elf bread";
```

Now Bilbo has his own property of `favouriteFood`, which is not an inherited one.


##Katas

Here is a kata I created where you can try your hand at adding a function to a constructor object:

[Paperboy 2](http://www.codewars.com/kata/56fa467e0ba33b8b1100064a)

A couple more katas using objects:

[Doggy Daycare](http://www.codewars.com/kata/56951add53eccacf44000030)

[Shop inventory manager](http://www.codewars.com/kata/shop-inventory-manager)

##Related

[Inheritance and Javascript](http://codingforeveryone.foundersandcoders.org/JavaScript/inheritance-and-javascript.html)

##References

For a more advanced introduction to objects in Javascript, see the articles [Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) and [Introduction to Object-Oriented Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript) on the Mozilla Development Network..
