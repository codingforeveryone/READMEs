# Call(), Apply() & Bind()
___

#### In essence, the purpose of the Call(), Apply(), Bind() methods is to enable the ability to control what the ```this``` variable ends up being when a function is run.
___

##  What are call(), apply() & bind() methods?

```call```, ```apply``` & ```bind``` are simply methods which are created - by default - by the JavaScript engine as properties on every function object. Exactly the same way you can have methods as properties of a standard JavaScript object.  This is made possible because of the fact that technically, JavaScript functions are classed as objects.
___


## How are they used?
To start with, consider the code below.  We have an object called ```person```, which has ```firstname``` and ```lastname``` properties, as well as a method property ```getFullName``` which uses the ```this``` keyword to reference the parent object which is ```person```.   We know that calling ```person.getFullName()``` will return ```John Smith``` .

```
var person = {
   firstname: 'John',
   lastname: 'Smith',
   getFullName: function () {
      var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}
```
If we were to try calling ```this.getFullName``` from another function - as illustrated in the next code block - we would get an error reporting that ```this.getFullName``` is not a valid function. Note you can ignore the second ```console.log(num * num)``` as that will be covered later.


```
var printUser = function(num) {
  console.log(this.getFullName())
  console.log(num * num)
}

printUser()
```

### bind()   

#### ```aVar = aFunction.bind(anObject)```
</br>

Using the ```bind``` method we are able to make a copy of any function that we call ```bind``` on, which has its ```this``` variable pointing to an object that we specify.

The code below copies the ```printUser``` function, with the copy configured to have its ```this``` variable pointed at the ```person``` object.  The copy will be assigned to new variable ```printUserBound```.  The argument passed into the ```bind``` parenthesis is the name of the object that the ```this``` variable in the copied function will point to.


```
var printUserBound = printUser.bind(person)
```
We now have new function ```printUserBound``` which is an exact copy of ```printUser```, **except** when the line ```console.log(this.getFullName())``` is run ```this``` refers to the ```person``` object.  So it runs ```console.log(person.getFullName())``` and will successfully log ```John Smith```.  Running ```printUser()``` will still return an error as this function remains unchanged.

When invoking ```printUserBound``` we can also pass arguments into the parenthesis for the ```num``` argument.  For example, the following code would log both ```John Smith``` and the number ```4``` to the console.

```
printUserBound(2)
```

### call()
#### ```aFunction.call(anObject, arg1, arg2, ...argX)```
</br>

Typing ```.call()``` on the end of a function simply invokes it, the same way that ```()``` would.  However, inside ```call```s parenthesis, we can specify what any instances of ```this``` in the code will refer to.

```printUser.call(person)``` will invoke the ```printUser``` function with its ```this``` reference set to the ```person``` object.  Notice the function is run immediately.  It is not copied to a new variable as we saw with ```bind```.


### apply()
#### ```aFunction.apply(anObject, [anArray])```
</br>

Typing ```.apply()``` on the end of a function work exactly the same way as ```.call()``` with one difference - The arguments must be passed in an array.

```
printUser.apply(person, [arg1, arg2, ...argX])
```
___

## Common Use Cases

### Method Sharing
The ```call``` and ```apply``` methods can be leveraged to shorten and simplify our code drastically by sharing repeatable methods between multiple objects.  In the example below, I have created three objects for storing people, all of which we are going to assume require a method to print the first and last name.

```
var person1 =  {firstname: "Eve", lastname: "Wilson"};
var person2 =  {firstname: "John", lastname: "Smith"};
var person3 =  {firstname: "Joan", lastname: "Jones"}
```
We could add a method to each object which prints the first and last name, but that is a lot of methods to write and lot of code to repeat.  Using the method sharing technique we can create just one function and invoke that against any of the person objects by using ```call```.  This can also enable us to pass in additional arguments, as shown below. Remember that the first argument passed **always** has to be the object, followed by any arguments for the function that is being directly invoked by the ```call``` method.
```
var printName = function(coolIndicator) {
  console.log(this.firstname + " " + this.lastname + " " + coolIndicator)
}

printName.call(person1, "is cool")  //"Eve Wilson is cool"
printName.call(person2, "is not cool")  //"John Smith is not cool"
printName.call(person3, "is very cool")  //"Joan Jones is very cool"
```
This will work in exactly the same manner with the ```apply``` method, with the obvious exception that arguments will need to be passed in an array.

### Function Currying with ```bind```
Function currying is creating a copy of a function using ```bind``` and giving it some pre-set argument values.

To recap, the syntax is ```aVar = aFunction.bind(anObject)``` with ```aFunction``` being the function to copy, and ```anObject``` being the object to reference with the ```this``` variable.  The following example shows what happens if we also pass in an argument, in addition to the object reference, when creating the copy.


```
function multiply(num1, num2) {
  return a * b;
}

var multiplyByFive = multiply.bind(this, 5);
console.log(multiplyByFive(2)) //10
```

By doing this, the ```multiplyByFive``` function is created with the first argument ```num1``` always set to 5.  When we run it in the next line, the argument that is passed in is the second argument ```num2```, which in our case is 2.  So 2 is multiplied by the preset number 5, and we get 10.


___


## Related

* [MDN ```this``` spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [The keyword *this*](https://github.com/codingforeveryone/today-i-learned/blob/master/oojs/The-keyword-this.md)



## Resources

* [MDN ```bind``` spec](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
* [MDN ```call``` spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
* [MDN ```apply``` spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
* [Article - JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)
* [YouTube Tutorial](https://www.youtube.com/watch?v=c0mLRpw-9rI)
