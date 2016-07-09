# Sorting algorithms
Sorting algorithms arrange data in a particular order. There are many ways to classify these algorithms:

####1.Comparison sorts
All the discussed algorithms are comparison sorts. The algorithm is a comparison sort if the algorithm only reads the array of elements through a single comparison operation (e.g: greater than or equal to).
Algorithms not based on comparison (such as [counting sort](https://en.wikipedia.org/wiki/Counting_sort)) are not covered in this tutorial.

####2. Memory usage 
* In-place sorting: when the algorithm requires constant amount of additional space. E.g.: bubble sort.
* Not-in-place sorting, e.g.: merge sort.

####3. Stable and Non-stable  

* an algorithm is stable if it maintains the relative order of items with equals values,

![Stable](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sorting_stability_playing_cards.svg/220px-Sorting_stability_playing_cards.svg.png)  
*Fig1. is taken from [Wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm)*    
* an algorithm is non-stable if it doesn't maintain the relative order of items with equals values.

###Comparison of sorting algorithm's performance
  
Method | Best | Average | Worse | Memory | Stable |
----|----|----|----|----|----|
Bubble sort |O(n)|O(n<sup>2</sup>)|O(n<sup>2</sup>)|O(1)|yes|
Selection sort|O(n<sup>2</sup>)|O(n<sup>2</sup>)|O(n<sup>2</sup>)|O(1)|no|
Insertion sort|O(n)|O(n<sup>2</sup>)|O(n<sup>2)</sup>|O(1)|yes|
Quick sort|O(nlogn)|O(nlogn)|O(n<sup>2</sup>)|O(logn)|*|
merge sort|O(nlogn)|O(nlogn)|O(nlogn)|O(n)|yes|
heap sort|O(nlogn)|O(nlogn)|O(nlogn)|O(1)|no|
<caption>*Depends on the implementation.</caption>

### Bubble sort
Bubble sort is a descriptive name, since bubbles float to the surface just as grater elements „bubble” to the end of the array.
Bubble sort is rarely used in practice, but almost every introducton to sorting algorithms starts with bubble sort.

Main sorting principle: the algorithm compares each pair of adjacent elements and swaps them if they are not in order.
After the first iteration the highest value is at the end of the array. Thus, the next iteration doesn’t need to include the last element. 
So the second for cycle restricts the inner loop to exclude already sorted values. 

Figure 2. explains the bubble sort algorithm:

![BubbleSort](http://www.algolist.net/img/sorts/bubble-sort-1.png)  
*Fig2. Picture is taken from  [algolist.net](http://www.algolist.net/Algorithms/Sorting/Selection_sort).*  



#####Javascript implementation of bubble sort:

```javascript
function bubbleSort(test){
    console.log(test);
    for (var i = test.length; i > 1; i--){
        for (var j = 0; j < i -1; j++){
            if( test[j] > test[j+1])
            {
                var temp = test[j];
                test[j] = test[j+1];
                test[j+1]= temp;
            }
        }
    }
    return test;
}
```

###Selection Sort

Algorihm: the idea behind the algorithm is to imaginary devide the array into two parts: sorted and unsorted parts.  
1. The sorted part is empty, while the unsorted part contains all the values.  
2. Find the smallest element in the unsorted part, and add it to the sorted part. (In practice: swap the  first value in the unsorted part
with the smallest value, then the minimal element is included in the sorted part. At every step the number of sorted elements are increased by one,
 while the number of unsorted ones are decreased by 1.)  
3. Repeat step 2 until the unsorted array is not empty.

Figure 3. explains the selection sort algorithm:

![SelectionSort](http://www.cs.rmit.edu.au/online/blackboard/chapter/05/documents/contribute/chapter/09/images/selection-sort.gif)  
*Fig3. Picture is taken from  this [page](http://www.cs.rmit.edu.au/online/blackboard/chapter/05/documents/contribute/chapter/09/images/selection-sort.gif)*   

#####Javascript implementation of selection sort:

```javascript
function selectionSort(test){
	for (var  j = 0; j < test.length-1; j++)
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

###Insertion Sort
Algorithm: the idea behind the algorithm is to imaginarily devide the array into rwo parts: sorted and unsorted part.  
1. If it is the first element, it is regarded as sorted.  
2. Select the next element in the array.  
3. Compare the selected element with all elements in the sorted sub-array.  
4. Shift all the elements in the sorted sub-array that are greater than the value to be inserted.  
5. Insert the element.  
6. Repeat steps 2-5 until the whole array is sorted..  

Figure 4. explains the insertion sort algorithm:

![InsertionSort](http://www.algolist.net/img/sorts/insertion-sort-1.png)   
*Fig4. Picture is taken from  [algolist](http://www.algolist.net/Algorithms/Sorting/Selection_sort)*    

#####Javascript implementation of insertion sort:

```javascript
function insertionSort(test){
	for (var i = 1; i < test.length; i++)
	{
		var j = i;
		while ( j > 0 && test[j-1] > test[j])
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

###Quicksort

Quicksort is a divide and conquer algorithm. The algorithm can be borken down to two basic operations:
 swapping items and partitioning a section of the array.


Algorithm in steps:  
1. Choose the pivot value (you compare all other elements against the pivot at first).    
2. Partition: rearrange the array in such a way that it is divided into two parts. 
All the elements smaller than the pivot element go before the pivot that is the left part. All the
elements greater than the pivot go after the pivot element that is the right part.
All the elements in the left and right sub-arrays must satisfy *left ≤ pivot ≤ right* inequality.  
3. Sort both parts of the array. Recursively invoke quicksort to the rigth and left part.

Partition algorithm:  
1. Define two variables:  
&emsp;&emsp;left: pointing at the first item in the array,  
&emsp;&emsp;right: pointing at the last item in  the array.  
2. While the value at array[left] is less than the pivot value, add 1 to left.
Continue until you reach an item which is greater or equal to the pivot value.    
3.While the value at array[right] is greater than the pivot value, substract one from right.
Continue until you reach an item which is lesser or equal to the pivot value.    
4.If array[left] is less than or equal to array[right], then swap the two values.  
5. Add 1 to left,and substract one to right.  
6. if left and right indices point to the same element (array[left]==array[right]) STOP, otherwise start again from step 1.

There are many approaches to choose the pivot item.
* select the first item in the array. If the array is already sorted, this choice has the worst performance.
* select the middle item in the array. The latter implementation will follow this approach.

Figure 5. explains the quicksort algorithm:  
![Quicsort](http://www.tutorialspoint.com/data_structures_algorithms/images/quick_sort_partition_animation.gif)    	  
*Fig5. is taken from  [Tutorialspoint](http://www.tutorialspoint.com/data_structures_algorithms)* 

#####Javascript implementation of quicksort:

```javascript
function swap(array,index1,index2){
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

function partition(array,left,right){
	var pivot = Math.floor( (left + right)/2 );
	var i = left;
	var j = right;
	while ( i < j)
	{
		while ( array[i] < array[pivot]){
			i++;
		}
		while ( array[j] > array[pivot] )
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


function quickSort(array,left,right){
	var index;
	if (array.length > 1) {

        index = partition(array, left, right);

        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }

        if (index < right) {
            quickSort(array, index, right);
        }

    }

    return array;
}
```

###Merge Sort

The idea behind merge sort is that it's easier to merge two smaller already sorted lists than to sort a single bigger unsorted list.

Algorithm:   
1. if the list has only one element, it is considered sorted, return it.  
2. divide the list into two halves until every list has only 1 element.  
3. merge the smaller lists into new lists in sorted order until you have one sorted list. 

Figure 6. explains the merge sort algorithm:

![MergeSort](http://www.java2novice.com/images/merge_sort.png)   
*Fig6. Picture is taken from [Java2novice](href="www.java2novice.com)*   


#####Javascript implementation of merge sort:

```javascript
function merge(left_array, right_array){
	var result = [];
	var right_index = 0;
	var left_index = 0;
	while (left_index < left_array.length && right_index < right_array.length)
	{
		if (left_array[left_index] < right_array[right_index])
		{
			result.push( left_array[left_index] );
			++left_index;
		}else{
			result.push( right_array[right_index] );
			++right_index;
		}
	}
	return result.concat(left_array.slice(left_index)).concat(right_array.slice(right_index));
}

function mergeSort(array){
	if (array.length < 2) return array;
	var middle = Math.floor( array.length/2 );
	var left_array = array.slice(0,middle);
	var right_array = array.slice(middle);
	
	return merge(mergeSort(left_array),mergeSort(right_array));
}
```

###References
1. <http://www.tutorialspoint.com/data_structures_algorithms/sorting_algorithms.htm>  
2. <http://ddeville.me/2010/10/sorting-algorithms-comparison>   
3. <http://www.algolist.net/Algorithms/>  
4. <https://en.wikipedia.org/wiki/Sorting_algorithm> 
