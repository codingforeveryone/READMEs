#JavaScript shortcuts

In this topic we're going to cover a few simple JavaScript shortcuts. Consider this code:

```javascript
function userName(name) {
	if (!name) {
		name = "Not applicable";
	}

	return name;
}

console.log(userName("")); // Not applicale
console.log(userName("Humphrey Bogart")); // Humphrey Bogart
```

This function checks to see if the value of `name` is _falsy_. If it is, it then assigns the value `Not applicable` before it returns. If it isn't, we return the passed value `name`.

Here's a recap of truthy and falsy values:

_Falsy_ values:

- `false`
- `undefined`
- `null`
- `NaN`
- `0`
- `""`

_Truthy_ values:

- `true`
- `{}`
- `[]`
- `89`
- `-5`
- `"string"`
- `new Date()`

**Shortcut:**

This much shorter code does the same as the example above:

```javascript
function userName(name) {
	name = name || "Not applicable";
	
	return name;
}

console.log(userName("")); // Not applicable
console.log(userName("James Stewart")); // James Stewart
```

- The `||` operator first checks the left to see wether the value of `name` is _truthy_.
- If `name` is _truthy_ then it returns the passed value `name`.
- If `name` is _falsy_ it gets assigned the value to the right (`Not applicable`) and returns that _value_. 

-

![Javascript shortcuts](http://wersm.com/wp-content/uploads/2013/01/shortcut-keyboard-howztech.jpg)

In this `if` statement we check if `driversLicense` is _truthy_, if it is it calls the `registerDriver` function and passes `driversLicense` as a parameter. If `driversLicense` does not evaluate to _truthy_, it calls the `declineDriver` function and passes in the `driverLicense` parameter. 

```javascript
if (driversLicense) {
	registerDriver(driversLicense);
}
else {
	declineDriver(driversLicense);
}
```

**Shortcut:**

```javascript
driversLicense && registerDriver(driversLicense) || declineDriver(driversLicense);
```

- It first checks the left to see if `driversLicense` is _truthy_ and if it is it then calls `registerDriver` with `driversLicense` passed as a paramater. 
- If `driversLicense` is _falsy_ it moves to the right and calls the `declineDriver` function with `driversLicense` passed as a paramater.
