### The Linked list

This problem is taken from chapter four of "Eloquent Javascript". Since the book doesn't provide solutions, these are my own.

I haven't understood yet how often linked list are used in web development, but it was a good exercise to write it and I learned a lot . If someone is reading Eloquent Javascript and solving the exercises, we could compare our solutions. 

If you are not familiar with lists, the look something like this:
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
A list is a nested set of objects, where one object hold reference to the next one. 
![pic](http://eloquentjavascript.net/img/linked-list.svg)

The first task is to create a function that creates a list, starting from an array of integer:
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
The second tasks is to create a function that transforms a list into an array:
```Javascript
function listToArray(list){
  var res = []
  function traverse(list){
    if(list.rest == null) return res;
    else{
      res.push(list.value)
      return traverse(list.rest)
    }
  }
  traverse(list)
  return res
}
```
The third tasks is to prepend a node to an existing list:
```Javascript
function prepend(value, list){
  return {
    value:value,
    rest: list
  }
}
```

The last tasks is to creat a function that, given an integer and a list, returns the value held by the list at the position corrisponding to the integer:
```Javascript
function nth(pos,list){
  var counter = 0;
  function reach(list){
    if (pos == counter) return list.value
    else{
      counter++
      return reach(list.rest)
    }
  }
  return reach(list)
}
```
