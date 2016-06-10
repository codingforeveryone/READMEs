# ES6: Promises

Promises allow us to do asynchronous operations. At first, js is synchronous. Which means one operation at at time. We have to wait for an operation to complete for anoter one to start. 

Here comes promises. A promise is an operation that has not **yet** been completed but will be in the future. Initially it is pending. Then, it becomes either settled or rejected.

They're a bit like an event manager, with a few differences: 

* First, *it can only get settled/rejected once* 
* If a function has already settled(i.e fullfilled or rejected), and you call it later with the callback later, it'll be called with the right function. 

## Before ES6

Before ES6, there were promises, with external libraries. Now with ES6, they're here natively !

## Creating a promise 

To create a promise, you assign a new promise to a variable. The Promise constructor takes a function as its argument, and this fucntion has two parameters: resolve and reject. 

```javascript
var promise= new Promise(function(resolve,reject) {
// DO SOMETHING HERE 

if (/*EVERYTHING IS OKAY*/) {
    resolve("Everything is okay!");
}
else {
    reject(Error("There's something buggy on here"));
}

});

```

As with `throw`, it's advised to use `Error` as the `reject` argument. 

## Using a promise 

```javascript
promise.then(function(result) {
  console.log(result); // "Everything is okay!"
}, function(err) {
  console.error(err); // Error "There's something buggy on here"
});
```

As you can see, we use the `then` method with two function. One for resolve, one for reject. The two are optional, which means we can pass either one of the two as a parameter of `then`.

## Going further 

To read more about promises, here is the [MDN Article](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise).





