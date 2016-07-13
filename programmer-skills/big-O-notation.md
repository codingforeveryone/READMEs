###Big-O notation explained  

The Big-O notation is used to classify algorithms based on how their runtime grows relative to the input size, when the input gets arbitrarily large. 
How much slower is the algorithm if the input has 10 000 items instead of 1?
 
#####Formal Big-O notation definition from [wikipedia](https://en.wikipedia.org/wiki/Big_O_notation)
 
>Let f and g be two functions defined on some subset of the real numbers. One writes  
>f(x)=O(g(x)) as  x&rarr;&infin;,  
>if and only if there is a positive constant M such that for all sufficiently large values of x, 
>the absolute value of f(x) is at most M multiplied by the absolute value of g(x). That is, f(x) = O(g(x)) 
>if and only if there exists a positive real number M and a real number x<sub>0</sub> such that  
> |f(x)|&le;M|g(x)| for all x&ge; x<sub>0</sub>.
 
 
Let's discuss the big-O notation through several examples

###O(1)
                                                          
O(1) represents an algorithm that has the same runtime regardless of the size of the input data set.

An easy example is when we check whether the first element of the array is null. The algorithm always checks 
the first element in the array, regardless of the array's size.

```javascript
function isFirstItemNull(array)
{
	return array[0] === null;
}
```

###O(N)

O(N) describes an algorithm whose runtime will grow linearly and in direct proportion to the size of the input data set. For example  if the algorithm includes a single iteration
 over the data set, the perfromance is O(N). 

Our test algorithm checks whether an item is in the array or not.
```javascript
function containsItem(array, item){
	for (var element in array)
	{
		if (item === array[element]) return true;
	}
	return false;
}
```

###O(N<sup>2</sup>)
The performance is O(N<sup>2</sup>) when the runtime is directly proportional to the square of the size of the input data set.
Almost every algorithm which includes a nested iteration over the data set has O(N<sup>2</sup>) performance.
E.g.: bubble sort (worst case), Shell sort, quicksort (worst case), selection sort or insertion sort.

The everyCombination function lists every possible ordered pair made from the elements of an array.
It iterates through the array and for every element (item) it lists all of the ordered pairs starting with (item), using an inner loop. 

Sample output: If our array is [1,2], then the returned array containing all the possible combinations is [[1,1],[1,2],[2,1],[2,2]]. 
 
```javascript
function everyCombination(array)
{
	var result = [];
	for (var item in array)
	{
		for (var inner in array)
		{
			result.push( [array[item], array[inner]] )
		}
	}
	return result;
}
```
Another example for O(N<sup>2</sup>) algorithms is when we check whether all items are unique in an array. The number of comparisons is 
(N-1) + (N-2) + (N-3)...+ 2+1 = N(N-1)/2.

```javascript
function isUnique(array)
{
	for (var i = 0; i < array.length-1; i++)
	{
		for (var j = i+1; j< array.length; j++)
		{
			if (array[i]==array[j] ) return false;
		}
	}
	return true;
}
```

###O(2<sup>N</sup>)
O(2<sup>N</sup>) corresponds to an algorithm where adding a  new item to the data set doubles the number of steps.
In case of O(2<sup>N</sup>) algrithms the number of steps grow exponentially.

A well-known example is the naive recursive calculation of the Fibonnaci-series.
In general:
f(n) = f(n-1) + f(n-2) = f(n-2) + f(n-3) + f(n-3) + f(n-4) =
= f(n-3) + f(n-4) + f(n-4) + f(n-5) + f(n-4) + f(n-5) + f(n-5) + f(n-6) = ...

```javascript
	function fibonacci(n)
	{
		if (n===0 || n===1) return 1;
		else return ( fibonacci(n-1) + fibonacci(n-2) );
	}
```

###O(log N)
O(log N) algorithms are highly efficient for handling huge data sets. It has little effect on the runtime whether or data set has a 1000 or 10 000 entries.

A well known example of O(log N) algorithms is binary search,  it is used to find items
in already sorted data sets. Binary search is a good algorithm for finding 
names in the phone book, or for the egg dropping problem(There is a building of 100 floors. If an egg is dropped from the Nth floor or above it will break. 
If it’s dropped from any floor below, it won't break. Find N!). 

Binary search looks for a target value by comparing the middle item of an array.

Binary search algorithm:   
1. find the middle element,  
2. if the middle item equals to the target value, then stop,  
3. Otherwise:  
	* the target value is smaller than the middle element. Repeat from step 1 for the left-subarray, before the middle element,  
	* the target value is bigger than the middle element. Repeat from step 1 for the right-subarray, after the middle element.  

	
Using binary search we halve the data set in every iteration circle. Thus if one doubles the size of the data set, it has very little effect on the runtime. 
Considering worst case scenarios, to find an element
 in a twice as big data set as the orignal requires just one more iteration cycle.
	
```javascript
function binarySearch(array, target)
{
	var start = 0;
	var stop = array.length -1;
	var middleIndex;
		while (start <= stop)
		{
		middleIndex = Math.floor( (start+stop)/2 );
		console.log(middleIndex);
		if (array[middleIndex] == target){
			return middleIndex;
		}else if (array[middleIndex] > target )
		{
			stop = middleIndex-1;
		}else
		{
			start = middleIndex+1;
		}
	}
	return -1;
}
```

###Summary comparison of different runtimes:
![bigO](http://i.stack.imgur.com/ia6VB.png) 
 
*Fig. 1 is taken from [Stackoverflow](http://stackoverflow.com/questions/4317414/polynomial-time-and-exponential-time)*

###References
1. <https://justin.abrah.ms/computer-science/big-o-notation-explained.html>
2. <https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity>
3. <https://en.wikipedia.org/wiki/Big_O_notation>
4. Big-O notations for common data structures and algorithms <http://bigocheatsheet.com/>