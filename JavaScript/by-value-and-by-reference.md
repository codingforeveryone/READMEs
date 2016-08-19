#By Value and by Reference

###By Value

Suppose we have a variable called `num` that contains a primitive:

```javascript
var num = 8;
```

This creates a new space in memory that contains the number `8`. It has an address just like people have addresses where they live. Numbers, Strings and Booleans are primitive values (primitives).

If we then assign a new variable with the value of `num`:

```javascript
var num2 = num;
```

This creates another, new, space in memory (this is important, there are two separate spaces in memory now) and that memory space gets a copy of whatever the memory space of `num` contains, in this example the number `8`.

```javascript
console.log(num);
//-----> 8
console.log(num2);
//-----> 8
```

The same process takes place for the other primitives and is what is called 'by value'. There are two separate addresses in memory and one contains a copy of the other value. They are now on their own and don’t affect each other. So if we change the value of `num` to `9` the variable `num2` is unaffected:

```javascript
var num = 9;
console.log(num);
//-----> 9
console.log(num2);
//-----> 8
```

**However** - Things work differently with objects.

###By Reference

Suppose we have an object:

```javascript
var person = { name: 'Sheldon' };
```

And we also initialize another variable and make it equal to `person`:

```javascript
var person2 = person;
```

At this point, because we are dealing with objects rather than primitives no new memory space is created and no copy of the object is created and stored there. Instead, `person2` is now pointing at the same memory space as `person` and that memory space contains an object. We effectively now have two names (`person` and `person2`) for the same object. So we can access and change that one object through either of these two variables.

The same result will be returned if we log the name property of either the `person` or `person2` object.

```javascript
console.log(person.name);
//-----> Sheldon
console.log(person2.name);
//-----> Sheldon
```

And if we change the `name` property via, for example, the `person2` variable then logging via either variable will reflect the change.

```javascript
person2.name = 'Wollowitz';
console.log(person.name);
//-----> Wollowitz
console.log(person2.name);
//-----> Wollowitz
```

It doesn’t matter which of the two variables we use to change the name property because they are both pointing at the same object.

This is called 'By Reference'.

Just remember that primitives are by value (new memory space is created with a copy of the original value in it) and objects are by
reference (we simply point to the same spot in memory, so we now have two names for the same thing).
