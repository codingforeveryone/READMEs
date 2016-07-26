# Sorting algorithms

At a risk of stating the obvious, sorting algorithms arrange lists of data in a particular order. There are various types of sorting algorithms, such as counting, radix and comparison sorts. This tutorial is concerned with comparison sorts, which usually sort list elements using a single comparison operation (eg: `>=` ).

You are probably familiar with the JavaScript array method `Array.prototype.sort()`. You can read all about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

As the Mozilla Developer Network documentation explains:
>The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.

As you probably know, the sort method takes your array and compares the elements according to their Unicode values. It coerces numbers to strings and then compares them, and it makes a bit of a mess of numbers! To overcome this, you can pass a comparison function argument to the sort method, which will allow numerical sorting. Using the arguments `a` and `b` you can sort in ascending or descending order, and using bracket and dot notation you can sort multidimensional arrays and arrays of objects.

So far so good. But one day, you find yourself in front of a whiteboard, and the interviewer says 'write me a sort function suitable for small to medium datasets of moderate complexity, including different data types and floating-point numbers. Your time starts now.'

You can't use the built-in sort function. What are you going to do? What do you need to know?

###Types of data
- Comparison sorts allow sorting of different data types and fine control over how the list is sorted.
- Comparison sorts can adapt to complex orders such as the order of floating-point numbers.

So this is probably going to be a good fit for your whiteboard problem.

###Memory use
- Some sorting algorithms use 'in-place sorting', which means the algorithm requires only a small constant amount of additional space. An example of this is the bubble sort.
- Others, such as the merge sort, use an auxillary data structure while sorting.

###Stable and non-stable
- An algorithm is stable if it maintains the relative order of items with equal values, such as the 5 of hearts and the 5 of spades from a deck of playing cards (pictured below). Bubble sort is an example of a stable algorithm.
- An algorithm is non-stable if it doesn't maintain the relative order of items with equal values.

![Stable](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sorting_stability_playing_cards.svg/220px-Sorting_stability_playing_cards.svg.png)  
*Fig1. is taken from [Wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm)*    


###Comparison of sorting algorithms' performance

The big-o notation is widely used to measure the efficiency of algorithms. When can  this be important? When you handle data sets with millions of entries scaling matters.

For further inromation read the README on the big-O notation.  
  
Method | Best | Average | Worst | Memory | Stable |
----|----|----|----|----|----|
Bubble sort |O(n)|O(n<sup>2</sup>)|O(n<sup>2</sup>)|O(1)|yes|
Selection sort|O(n<sup>2</sup>)|O(n<sup>2</sup>)|O(n<sup>2</sup>)|O(1)|no|
Insertion sort|O(n)|O(n<sup>2</sup>)|O(n<sup>2)</sup>|O(1)|yes|
Quick sort|O(nlogn)|O(nlogn)|O(n<sup>2</sup>)|O(logn)|*|
Merge sort|O(nlogn)|O(nlogn)|O(nlogn)|O(n)|yes|
Heap sort|O(nlogn)|O(nlogn)|O(nlogn)|O(1)|no|
<caption>*Implementation-dependent.</caption>

### Bubble sort

Bubble sort is so called because greater elements "bubble" to the end of the array just as bubbles float to the surface of a liquid.
Bubble sort is rarely used in practice due to its poor performance, but almost every introduction to sorting algorithms starts with bubble sort as it is easy to understand and implement.

The algorithm compares each pair of adjacent elements and swaps them if they are not in order.

After the first iteration the highest value is at the end of the array. Thus, the next iteration doesn’t need to include the last element.

Figure 2. explains the bubble sort algorithm:

![BubbleSort](http://www.algolist.net/img/sorts/bubble-sort-1.png)  
*Fig2. is taken from  [algolist.net](http://www.algolist.net/Algorithms/Sorting/Selection_sort).*  

#####JavaScript implementation of bubble sort:

```JavaScript
function bubbleSort(test){
    for (var i = test.length; i > 1; i--){
        for (var j = 0; j < i -1; j++){
            if (test[j] > test[j+1])
            {
                var temp = test[j];
                test[j] = test[j+1];
                test[j+1] = temp;
            }
        }
    }
    return test;
}
```

###Selection sort

The idea behind the algorithm is to divide the array into two parts: a sorted part and an unsorted part.

1. Initially, the sorted part is empty while the unsorted part contains all the values.
2. Find the smallest element in the unsorted part, and add it to the sorted part. (In practice: swap the first value in the unsorted part with the smallest value. This smallest value then forms the beginning of the sorted part. At every step the number of sorted elements are increased by one, while the number of unsorted ones are decreased by one.)
3. Repeat step 2 until the unsorted array is empty.

Figure 3. explains the selection sort algorithm:

![SelectionSort](http://www.cs.rmit.edu.au/online/blackboard/chapter/05/documents/contribute/chapter/09/images/selection-sort.gif)  
*Fig3.  is taken from  this [page](http://www.cs.rmit.edu.au/online/blackboard/chapter/05/documents/contribute/chapter/09/images/selection-sort.gif)*   

#####JavaScript implementation of selection sort:

```JavaScript
function selectionSort(test) {
	for (var j = 0; j < test.length-1; j++)
	{
		var iMin = j;
		for (var i = j+1; i < test.length; i++)
		{
			if (test[i] < test[iMin])
			{
				iMin = i;
			}
		}
		if (iMin != j)
		{
			var temp = test[j];
			test[j] = test[iMin];
			test[iMin] = temp;
		}
	}
	return test;
}
```

###Insertion sort
The idea behind insertion sort is to divide the array into two parts: a sorted part and an unsorted part.

1. If it is the first element, it is regarded as sorted.
2. Select the next element in the array.
3. Compare the selected element with all elements in the sorted sub-array.
4. Shift all the elements in the sorted sub-array that are greater than the value to be inserted.  
5. Insert the element.  
6. Repeat steps 2-5 until the whole array is sorted.

Figure 4. explains the insertion sort algorithm:

![InsertionSort](http://www.algolist.net/img/sorts/insertion-sort-1.png)   
*Fig4.  is taken from  [algolist](http://www.algolist.net/Algorithms/Sorting/Selection_sort)*    

#####JavaScript implementation of insertion sort:

```JavaScript
function insertionSort(test) {
	for (var i = 1; i < test.length; i++)
	{
		var j = i;
		while (j > 0 && test[j-1] > test[j])
		{
			var temp = test[j-1];
			test[j-1] = test[j];
			test[j] = temp;
			j--;
		}
	}
	return test;
}
```

###Quick sort

Quick sort is a 'divide and conquer' algorithm. The algorithm can be broken down to two basic operations:
 swapping items and partitioning a section of the array.

The steps of the algorithm are:

1. Choose the pivot value (you compare all other elements against the pivot at first).    
2. Partition: rearrange the array in such a way that it is divided into two parts. All the elements smaller than the pivot element go before the pivot (known as the 'left part'). All the elements greater than the pivot go after the pivot element (known as 'the right part'). All the elements in the left and right sub-arrays must satisfy *left ≤ pivot ≤ right* inequality.
3. Sort both parts of the array. Recursively invoke quick sort in the right and left parts.

Partition algorithm:  

1. Define two variables: `left` (pointing at the first item in the array) and `right` (pointing at the last item in the array).
2. While the value at `array[left]` is less than the pivot value, add one to `left`. Continue until you reach an item which is greater or equal to the pivot value.
3. While the value at `array[right]` is greater than the pivot value, substract one from right. Continue until you reach an item which is lesser than or equal to the pivot value.
4. If `array[left]` is less than or equal to `array[right]`, then swap the two values.
5. Add one to `left`, and substract one from `right`.
6. If left and right indices point to the same element (`array[left] === array[right]`) then stop, otherwise start again from step 1.

There are many approaches to choosing the pivot item, e.g.:
* Select the first item in the array. If the array is already sorted, this choice has the worst performance.
* Select the middle item in the array. The implementation below will follow this approach.


Figure 5. explains the quick sort algorithm:  
![Qicksort](http://www.algolist.net/img/sorts/quick-sort.png)  
*Fig5. is taken from [Algolist](http://www.algolist.net/img/sorts/quick-sort.png)*

Figure 6. shows ananimation of the quick sort algorithm:
![Quicsort](http://www.tutorialspoint.com/data_structures_algorithms/images/quick_sort_partition_animation.gif)    	  
*Fig6. is taken from  [Tutorialspoint](http://www.tutorialspoint.com/data_structures_algorithms)* 

#####JavaScript implementation of quick sort:

```JavaScript
function swap(array,index1,index2) {
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

function partition(array,left,right) {
	var pivot = Math.floor((left + right) / 2);
	var i = left;
	var j = right;
	while (i < j)
	{
		while (array[i] < array[pivot])
        {
			i++;
		}
		while (array[j] > array[pivot])
		{
			j--;
		}
		if (i <= j)
		{
			swap(array, i, j);
			i++;
			j--;
		}
		
	}
	return i;
}

function quickSort(array, left, right) {
	var index;
	if (array.length > 1)
    {
        index = partition(array, left, right);
        if (left < index - 1)
        {
            quickSort(array, left, index - 1);
        }
        if (index < right)
        {
            quickSort(array, index, right);
        }

    }
    return array;
}
```

###Merge sort

The idea behind merge sort is that it's easier to merge two smaller, already sorted lists than to sort a single, bigger unsorted list.

The steps of the algorithm are:

1. If the list has only one element, it is considered sorted so return it.
2. Divide the list into two halves until every list has only 1 element.
3. Merge the smaller lists into new lists in sorted order until you have one sorted list.



Figure 7. explains the merge sort algorithm:

![MergeSort](http://www.java2novice.com/images/merge_sort.png)   
*Fig7. is taken from [Java2novice](href="www.java2novice.com)*   


#####JavaScript implementation of merge sort:

```JavaScript
function merge(left_array, right_array) {
	var result = [];
	var right_index = 0;
	var left_index = 0;
	while (left_index < left_array.length && right_index < right_array.length)
	{
		if (left_array[left_index] < right_array[right_index])
		{
			result.push(left_array[left_index]);
			++left_index;
		} else
        {
			result.push(right_array[right_index]);
			++right_index;
		}
	}
	return result.concat(left_array.slice(left_index)).concat(right_array.slice(right_index));
}

function mergeSort(array) {
	if (array.length < 2) { return array; }
	var middle = Math.floor(array.length/2);
	var left_array = array.slice(0, middle);
	var right_array = array.slice(middle);
	
	return merge(mergeSort(left_array), mergeSort(right_array));
}
```

###Heapsort  

It is an inplace sorting algorithm implemented using the heap datastructure. Thus, we first have to explore what is a heap and how to build one. 


####The heap data structure

The heap data structure is an array that can be interpreted as a complete binary tree.
Each element of the array is represented as a node in the binary tree.
Every new level is filled from left to right. Only the last level can have missing elements.
When we use an array to represent a heap it has two important characteristics:
* the length of the array, which is equal to the total number of elements.
* the heapsize, the number of elements in the heap. (Note: during the heapsort algorithm the number of elements in the heap changes dynamically. )


There are two types of heap:  
1. Max heap: 	
&emsp;&emsp;`array[parent(i)]` &ge; `array[i]` is true if `i` is not the root element.  
2. Min heap:  
&emsp;&emsp;`array[parent(i)]` &le; `array[i]` is true if `i` is not the root element.  
For clarity we will always use a max heap in this note. We will refer to (1.) as heap property.


Figure 8. explains the relation between an array and the corresponding heap:  
![heap as an array](http://www.stoimen.com/blog/wp-content/uploads/2012/08/4.-Heap-as-an-Array.png)  
*Fig 8. taken from [here](http://www.stoimen.com/blog/2012/08/07/computer-algorithms-heap-and-heapsort-data-structure/)*  
 
The JavaScript code for finding a node's parent and child elements:  
 ```javascript
function parent(i){
	return Math.ceil( i / 2)-1;
}

function leftChild(i){
	return 2*i+1;
}

function rightChild(i){
return 2*i+2;
}
```

The functions in our implementation:   
1. heapSort: we invoke it on the array to be sorted.  
2. buildHeap: builds a heap from an array.  
3. heapify: tests whether all nodes satisfy the heap property.  
4. swap: swaps elements if they violate the heap property. 

The heapsort algorithm:      
1. Build a max/min heap from the array to be sorted, now  `heapsize = array.length`  
2. While `heapsize > 1`  
&emsp;Swap the first element (mininum or maximum value depending on your implementation) with last one,  
&emsp; reduce the `heapsize` by one,  then heapify the heap.  
3. The array is sorted.  

####Building the heap  

The items in the lowest tree level have no child nodes to compare against, thus they are considered sorted. Good for us! 
We start from `Math.floor( array.length / 2) ` counting backwards. 

![Random array to heap](http://www.stoimen.com/blog/wp-content/uploads/2012/08/7.-Random-Array-to-Heap.png)   
*Fig 9. is taken from [here](http://www.stoimen.com/blog/2012/08/07/computer-algorithms-heap-and-heapsort-data-structure/)*   

####Heapify

When we are building a max heap with our heapify function, we have to compare parent nodes with its children.  
1. If the parent node has the greatest value, then do nothing.  
2. If one of the child nodes is greater than the parent node, then swap the greater child node with its parent node.  
3. If both of the child nodes are greater than the parent node, then swap the biggest of the child nodes with the parent node.    

Figure 10. explains heapify:

![heapify explained](http://www.stoimen.com/blog/wp-content/uploads/2012/08/6.-Heapify-Part-1.png)  
*Fig 10. is taken from [here](http://www.stoimen.com/blog/2012/08/07/computer-algorithms-heap-and-heapsort-data-structure/)*  
	


```javascript
function swap(array,i,j)
{
	var temp = array[i];
	array[i] = array[j];
    array[j] = temp;
	return array;
}
```

```javascript
function heapify(array,heapSize,i){
	console.log("heapSize",heapSize)
	var l = leftChild(i);
	var r = rightChild(i);
	var largest;
	if (l < heapSize && array[l]>array[i])
		largest = l;
	else
		largest = i;
	if (r < heapSize && array[r] > array[largest])
		largest = r;
	if (largest != i){
		swap(array,i,largest);		
		return heapify(array, heapSize,largest);
	}
}
```

```javascript
function buildHeap(array,heapSize){
	for (var i= Math.floor(heapSize / 2) -1; i >=0; i--){
		console.log("within buildheap",array,i);
		heapify(array,heapSize,i);
	}
}
``` 

#### Sorting

Now the elements are in a proper heap, but they are not necessarily sorted (the heap property only guarantees that every parent node is
greater than its children's, we know nothing about the relations of elements on different branches!).
We will collect the largest elements at the end of our array in a sorted state, and store the other elements in a heap at the front of our array.
At start, we have no large elements at the end, and the heap at the front occupies all space. We will denote the size of the heap with heapsize,
this is array.length at the beginning, and we will decrement it by one at each iteration step.

At any given iteration, the largest element remaining in the heap is its root, physically stored as the first element in the array. The array(length-heapsize-1)
element is the physically last element still stored in the heap (elements with higher indices are the large elements, already sorted). We swap the root with
array(length-heapsize-1). Now the set of large elements already sorted is larger by one new element. The problem is that the remaining heap might not be a
heap because the new 
root element might be smaller than some of its children thus violating the heap property. We can fix this by calling heapify! 

```javascript
function heapSort(array){
	var heapSize = array.length;
	buildHeap(array,heapSize);
	console.log('afterbuildheap',array);
	while (heapSize > 1){
		swap(array,0, --heapSize);
		heapify(array,heapSize,0);
	}
	return array;
}
```
#### Heapsort finished


###References
1. [Tutorialspoint: Data structures and algorithms](http://www.tutorialspoint.com/data_structures_algorithms/sorting_algorithms.htm)
2. [ddeville: Sorting algorithms comparison](http://ddeville.me/2010/10/sorting-algorithms-comparison) 
3. [Algolist:Algoritms](http://www.algolist.net/Algorithms/)
4. [Wikipedia: Sorting algorithms](https://en.wikipedia.org/wiki/Sorting_algorithm)
5. [Heapsort 1](http://staff.ustc.edu.cn/~csli/graduate/algorithms/book6/chap07.htm)
6. [Heapsort 2](http://condor.depaul.edu/ntomuro/courses/402/notes/heap.html) 
7. [Heap data structure] (http://www.tutorialspoint.com/data_structures_algorithms/heap_data_structure.htm)  
8. [Heapsort 3] (http://www.stoimen.com/blog/2012/08/07/computer-algorithms-heap-and-heapsort-data-structure/)  
