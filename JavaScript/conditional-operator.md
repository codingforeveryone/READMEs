#Conditional Operator

###What is it?

The ternary operator (also called the conditional operator) allows us to return different values depending on the results of checks.
It can be a cleaner and shorter alternative to the `if...else` statement.

###General syntax

```javascript
var test = condition ? expr1 : expr2;
```

`if...else` equivalent:

```javascript
if (condition === true) {
    test = expr1;
} else {
    test = expr2;
}
```

In this case, we check for the condition called `condition`. If it is true, then the var `test` is equal to `expr1`. Else, it is equal to `expr2`.

###Simple example

```javascript
return  condition === true ? "condition check result is true" : "condition check result is false";
```

In this case, the first string is returned if the condition evaluates to `true`, otherwise the second string is returned. 

###Combining conditional operators

The ternary operator can also be used multiple times in a row:
```javascript
var a = 5, b = 5;
var compare = a > b ? "a is greater" : a < b ? "b is greater" : "a and b are equal";
console.log(compare); // logs "a and b are equal"
```

###Combining different operations

It is possible to use different operations for the two cases, and to use more than one operation per case. In this case, the operations should be separated from each other with a comma.

Example:
```javascript
function listTasks (time) {
  var list = [];
  time < 10 ? (
    console.log('Good morning!'),
    list.push('eat breakfast')
  ) : (
    console.log('Good day!'),
    list.push('do some work'),
    list.push('go for a walk')
  );
    return list;
}

listTasks(11);
// logs 'Good day!'
// returns ["do some work", "go for a walk"]
```
       
It's an awesome tool that'll add readability to your code. Special thanks to warrior @GiacomoSorbi who posted a kata about it on the gitter channel ;).

###Related:

[Kata:Training JS #7: if..else and ternary operator](http://www.codewars.com/kata/57202aefe8d6c514300001fd)   

[MDN Page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
