#Javascript Object Property Attributes - Writable, Enumerable, Configurable


Objects are collections of `name – value` pairs. For example:

```javascript
var boy = {
  name: 'Bart',
  last: 'Simpson',
  enemy: 'Lisa'
}
```

However, there is more to the properties of an object than just a name and value. Properties also have the following attributes: `writable`, `enumerable` and `configurable`. To display, for instance, the attributes of the `name: 'Bart'` property, we can type the following code:

```javascript
console.log(Object.getOwnPropertyDescriptor(boy, 'name'))
```

This will be displayed:

```javascript
{
value:	'Bart',
writable:	true,
enumerable:	true,
configurable:	true
}
```

We can see that all three are set to `true` by default. Please remember that we are examining only the `name` here in our `boy` object.

But what do they do? Let’s examine each one separately.

###Writable:

The `writable` attribute determines whether we can change a property from its current value. Our initial value of `name` is `'Bart'`.

So long as `writable` is set to `true`, we can change `name` as normal:

```javascript
boy.name = 'Leonard';
```

However, let’s set `writable` to `false`:

```javascript
Object.defineProperty(boy, 'name', { writable: false });
```

If we now examine our `name` with the same code as before:

```javascript
console.log(Object.getOwnPropertyDescriptor(boy, 'name'))
```

The following will be displayed:

```javascript
{
value: 'Bart',
writable:	false,
enumerable:	true,
configurable:	true
}
```

Once the `writable` attribute of the `name` property has been set to `false`, then trying to change the value of `name`:

```javascript
boy.name = 'Leonard';
```

Will result in `name`  still being set to `'Bart'`.

Of course, if the `name` property was changed before `writable` was set to `false`, then that second name will be the one that is ‘unchangeable’.

**WARNING** We have to be very careful now because if the value of `name` is another object (not a primitive like a string), for example:

```javascript
name: { first: 'Bart', nickname: 'Bandit' }
```

Setting `writable` to `false` wouldn’t prevent us from being able to change either `first` or `nickname`.

In this case, a different approach is needed, we have to 'freeze' it:

```javascript
Object.freeze(boy.name)
```

Now the whole `name` object is frozen and we are unable to change anything in it.


###Enumerable:

We can display names in an object by using [`for...in`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in) loop:

```javascript
for (x in boy) {
	console.log(x);
}
  //-----> name
  //-----> last
  //-----> enemy
```

However, let’s set `enumerable` to `false`:

```javascript
Object.defineProperty(boy, 'name', { enumerable: false });
```

If we now use the `for...in` loop again, we get the following result:

```javascript
//-----> last
//-----> enemy
```

Similarly, if we try to see object keys:

```javascript
console.log(Object.keys(boy)) //-----> [ ‘last’, ‘enemy’ ]
```

We can see that `name` is missing.

Similarly, JSON serialization is also affected:

```javascript
console.log(JSON.stringify(boy)); //----->{"last":"Simpson","enemy":"Lisa"}
```

However, just because it is rendered ‘not-enumerable’ doesn’t mean it has disappeared into thin air, that is, it hasn't been deleted.

We can still retrieve it, for example by running:

```javascript
console.log(boy.name); //-----> ‘Bart’
```

###Configurable:

```javascript
Object.defineProperty(boy, 'name', { configurable: false });
```

First of all, once a property is made non-configurable, that is `configurable` is set to `false`, it cannot be changed back to `true`, that is, it can’t be made configurable again.

But what does setting `configurable` to `false` do?

Once set to `false` it prevents us from being able to change the `enumerable` attribute. If we, for instance were to try to change `enumerable` from `true` to `false`, we wouldn't be able to.

It also prevents us from being able to `delete` a property:

```javascript
delete boy.name //-----> error
```

Finally, setting `configurable` to `false` does not prevent us from being able to change the `writable` attribute.

As we can see, the properties of an object can be a lot more fun than we may have thought at first glance!
