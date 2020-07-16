# Generating-sequences

Mathematical sequences occur so frequently in nature very often this transfers into computer programming problems. For example, the 
cicadas who appear periodically but only emerge after a prime number of years.  Or sunflowers which have either 34, 55 or 89 petals 
on their face, depending upon the size of the sunflower. Additionally, lilies and irises have three petals, buttercups and wild roses 
have five, delphiniums have eight petals, all related to the Fibonacci sequence. Or simply triangular numbers in bowling! 
We are surrounded by sequences which are regularly analysed within computer programming.

Being equipped to generate such sequences is vital. This article is dedicated to exploring the possible ways these sequences can be produced 
within a computer program using javascript:

Prime Numbers

A prime number is a natural number that has exactly two distinct natural number divisors: 1 and itself. There are several prime number
sieves in circulation, however, Sieve of Eratosthenes is a simple ancient algorithm.

By iterating through an array of numbers starting at the beginning and removing all subsequent numbers that are a factor of the prime.
The multiples of a given prime are generated as a sequence of numbers starting from that prime, with constant difference between
them that is equal to that prime. This is the sieve's key distinction from using trial division to sequentially test each 
candidate number for divisibility by each prime:

	function primes(num) {
		var x = [];
		for( var i =0; i<= num; i++) {
			x[i] = true;
		}
		x[0]= false;
		x[1]= false;
		x[2]= true;
		for ( var j = 2; j< num; j++) {
			for (var k = 2; j*k <= num; k++) {
				x[j*k] = false;
			}
		}
		
		primeValues = [];
		
	  for (var i = 0; i< num; i ++) {
	    if (x[i] == true) { 
	      primeValues.push(i);
	    }
	  }
	return primeValues;
	}

	primes(20);
	[2, 3, 5, 7, 11, 13, 17, 19]

Fibonnaci Sequence

In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation Fn = Fn-1 + Fn-2 with seed values 0,1.

	function fibonacci(nums) {
		
		var fibSequence = [];
		
		fibSequence[0] = 0;
		fibSequence[1] = 1;
		
		for (var i = 2; i < nums; i ++) {
			fibSequence[i] = fibSequence[i-1] + fibSequence[i-2];
		}
			
		return fibSequence;
	}
	
	fibonacci(8);
	[ 0, 1, 1, 2, 3, 5, 8, 13 ]
