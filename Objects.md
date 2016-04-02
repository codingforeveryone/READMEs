#Objects
-

An object is a list which contains items and each of these items is stored by a _name-value_ pair. These can be both primitive data types and reference data types. Here is a link to see the different behaviour of primitive and reference types [Reference and primitive types](mutable-vs-immutable.md)

![oop in js](http://www.newthinktank.com/wp-content/uploads/2015/09/Object-Oriented-JavaScript.png)

Let's take a look at an object: 

`var person = {firstName: "Ben", lastName: "Howard", age: 45};`

In this example `firstName` and `lastName` are the _property names_ and the _values_ are `Ben` and `Howard`.   

Property names can be either a number or a string. If the property name is a number we have to use bracket notation to access it. 

```javascript
var person = {firstName: "Ben", lastName: "Howard", age: 45}
console.log(person.firstName) // Ben

var family = {3: "Brothers", 5: "Sisters"};
console.log(family[3]) // Brothers
```

##Creating objects
One way to create an object is the _object literal_. This is done by _name:value_ pairs inside curly braces as seen in the following example:

`var person = {firstName: "Ben", lastName: "Howard", age: 45};`

Objects can also be spread over more than one line which makes them easier to read:

```javascript 
var person = {
	firstName: "Ben", 
	lastName: "Howard", 
	age: 45
	printAge: function() {
		console.log("I'm " + this.age + " years old."
	
};
```

Another type is the the _object constructor_. This does the same as the _object literal_ but it uses the _new_ keyword to call the constructor:

```javascript 
var person = new Object();
person.firsName = "Ben"; 
person.lastName = "Howard"; 
person.age = 45;
```

In the fist line we first initialise the `person` object. The following three lines we assign _name:value_ pairs to this object.	

Let's say we had ten different families with different values, using either of the previous objects we would have to create that whole object ten different times. There are more efficient ways to do this, one of them is the _constructor pattern_. 

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

When we use the `this` keyword we use it as a shortcut, it refers to the object of the executing code (the actual object you're creating or using).

Now we can create different family objects by initiating the `Person` object. Note that we use a capital letter for the first letter of the function when we use the constructor pattern (in this case `Person`). This is a convention that signals that the `new` keyword must be used when calling the function:

```javascript
var hobbit = new Person("Bilbo", "Baggins", 233, "Coding enthusiast");

hobbit.showFullName();
```
As we did with Bilbo we can create as many _people objects_ (or hobbit objects) as we like. Remember that all instances of `Person` will inherit its properties from `Person`. If we wanted all the instances of `Person` to have a _height attribute_ then we would add it to the `Person` constructor. 

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

Now Bilbo has his own property of `favouriteFood` and not an inherited one.

To access a property of an object we do this:

```javascript
console.log(hobbit.favouriteFood); // prints "Elf bread"
```

To invoke a function (or method) of an object we do this:

```javascript
hobbit.anyFunction(); // runs anyFunction()
```

##Katas

Here is a kata I created were you need to add a function to a constructor object:

[Paperboy 2](http://www.codewars.com/kata/56fa467e0ba33b8b1100064a)

A couple more katas using objects:

[Doggy Daycare](http://www.codewars.com/kata/56951add53eccacf44000030)

[Shop inventory manager](http://www.codewars.com/kata/shop-inventory-manager)
