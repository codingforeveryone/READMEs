# The Linked List
This tutorial presents a solution to a problem taken from chapter four of "Eloquent Javascript" concerning a special kind of data structure called a linked list. Since the book doesn't provide solutions, these are my own.

I haven't understood yet how often linked lists are used in web development, but it was a good exercise to write one and I learned a lot. If someone is reading Eloquent Javascript and solving the exercises, we could compare our solutions.

##What is a linked list?
If you are not familiar with lists, they look something like this:
```Javascript
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```
A list is a nested set of objects, where one object holds the reference to the next one.

![pic](http://eloquentjavascript.net/img/linked-list.svg)

The objects are sometimes referred to as "nodes" and the references as "pointers". Each node holds a value and a pointer to the next node, apart from the final node, whose pointer is null.

Eloquent Javascript challenges us to write various functions to implement linked lists.

##1. Convert an array to a list
The first task is to create a function that creates a list, starting from an array of integers:
```Javascript
function arrayToList (arr){
  var list = {
    value: arr[arr.length-1],
    rest: null
  }
  for (var i = arr.length-1; i >= 0; i-- ){
      list = {
      value: arr[i],
      rest: list 
    }
  }
  return list
}
```
The first function was easy to write without recursion. You can see that lists are easier to write from the last value backwards. That is why the array is traversed backwards.

##2. Convert a list to an array

The second task is to create a function that transforms a list into an array:
```Javascript
function listToArray(list){
  var res = []
  function traverse(list){
    if(list.rest == null) {
      return res
    } else {
      res.push(list.value)
      return traverse(list.rest)
    }
  }
  traverse(list)
  return res
}
```
Here, we use do use recursion: `traverse` adds the value of the current node to the array, then calls itself with the pointer to the next node as argument. The "base case" (when we stop the recursion) is when the pointer is null.

##3. Prepend a node
The third task is to write a function that will prepend a node to an existing list:
```Javascript
function prepend(value, list){
  return {
    value:value,
    rest: list
  }
}
```

##4. Get the *nth* value
The last task is to create a function that, given an integer and a list, returns the value held by the list at the position corresponding to the integer:
```Javascript
function nth(pos,list){
  var counter = 0
  function reach(list){
    if (pos == counter) {
      return list.value
    } else {
      counter++
      return reach(list.rest)
    }
  }
  return reach(list)
}
```
This works similarly to converting a list to an array, except instead of adding each value to the array, we increment the counter. Here, the base case, when we return the value, is when the counter matches the desired number (`pos`).

##Related

##References
[Linked list exercise in Eloquent Javascript](http://eloquentjavascript.net/04_data.html#h_nSTX34CM1M)
[More fun with linked lists](http://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392)