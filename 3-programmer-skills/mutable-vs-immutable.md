#Mutable vs immutable types

![Teenage mutant ninja turtles](https://qph.is.quoracdn.net/main-qimg-56e5d36cc0289ab4af84a96db2d05b18?convert_to_webp=true)

In javascript we have primitive types and reference types, which correspond to immutable and mutable types.

##Primitive Types

- **Number**: `14`, `4.12`
- **Boolean**: `_true`, `false`
- **String**: `"Hello world"`
- **null**
- **undefined**

##Reference Types

- **Object**:

```javascript
{
  name: "Ben",
  age: 20
}
```

- **Array**: `[23, 4, 55, 9]`
- **Function**: `myFunction()`

##Mutability

Reference types in Javascript are **mutable**. Consider this example:

```javascript
var ben = {
  age: 20
};

var another = ben; //ben is assigned to a new variable called another

console.log(ben.age); //prints 20
console.log(another.age); //prints 20

another.age = 35; //another's age is set to 35

console.log(ben.age); //prints 35
console.log(another.age); //prints 35
```

Notice that when we modify `another`, `ben` is also modified (or mutated).

Both variables are acting on the same object, so changing one will affect the other.

When this code runs:

```javascript
var another = ben;
```

... the variable `another` is **NOT** assigned a copy of `ben`. It points to the same object as `ben`.

An example with a function call:

```javascript
function modifyAge(obj) {
	obj.age = 10;
}

var sally = {
  age: 23
};

modifyAge(sally);

console.log(sally.age); //prints 10
```

When we pass `sally` to `modifyAge()`, we are not passing a copy of `sally` which is why when we print `sally` after calling `modifyAge()`, we can see how the original object has been updated.

##Immutability

The case is different for primitive types. Primitive types are **immutable**, they **CANNOT** be modified.

```javascript
var a = 5;

var b = a;

console.log(a); //prints 5
console.log(b); //prints 5

a++;

console.log(a); //prints 6
console.log(b); //prints 5
```

As opposed to what happens with reference types, when we change the value of `a` it has no effect on the variable `b`.

There is no change that can be applied to `a` that will affect `b` and vice versa. There is no connection between the two.

An example with a function call:

```javascript
function modifyValue(n) {
	n++;
}

var age = 53;

modifyValue(age);

console.log(age); //prints 53
```

In this example, an **immutable** type (a Number) is passed to the function `modifyValue()`. There, it is called `n`. But when `n` is modified, it has no effect on the original `age` variable.
