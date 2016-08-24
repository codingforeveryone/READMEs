# Under-the-Hood
 
 Fundamentally all characters are a higher level abstraction of a bit number. Subsequently every character has a corresponding number value. Many programming problems are made more accessible when viewed in this way. Furthermore, it also helps to lend understanding to built-in Javascript methods such as sort(); which is able to arrange characters of the same case in alphabetical order.
  
 Example of sort() being used:

	function arrange(values) {
		values.sort();
		return values;
	}
	arrange(["China", "Germany", "United States", "Great Britain", Brazil"]);

	//[ 'Brazil', 'China', 'Germany', 'Great Britain', 'United States' ]

In order to discover the unicode value of a particular character at a specified index in a string the charCodeAt() method is used:

	function findCharCode(string) {
		var newArray = [];
		for(var i = 0; i < string.length; i++) {
			newArray.push(string.charCodeAt(i));
		}
		return newArray;
	}
	findCharCode("GITHUB");
	
	//[71, 73, 84, 72, 85, 66]  
  
In contrast, the fromCharCode() method converts Unicode values into characters. Note: This is a static method of the String object,
and the syntax is always String.fromCharCode().

	function char(value) {
		var result = "";
		for (var i = 0; i < value.length; i++) {
			result += String.fromCharCode(value[i]);
		}
		return result;
	}
	char([97, 121, 108, 101, 114]);
	    
	//'ayler'
 	
Unicode Characters: 

		    D.V   Char   D.V   Char   D.V  Char   D.V   Char
		    32   SPACE   56     8     80    P     104    h
		    33     !     57     9     81    Q     105    i
		    34     "     58     :     82    R     106    j
		    35     #     59     ;     83    S     107    k
		    36     $     60     <     84    T     108    l
		    37     %     61     =     85    U     109    m
		    38     &     62     >     86    V     110    n
		    39     '     63     ?     87    W     111    o
		    40     (     64     @     88    X     112    p
		    41     )     65     A     89    Y     113    q
		    42     *     66     B     90    Z     114    r
		    43     +     67     C     91    [     115    s
		    44     ,     68     D     92    \     116    t
		    45     -     69     E     93    ]     117    u
		    46     .     70     F     94    ^     118    v
		    47     /     71     G     95    _     119    w
		    48     0     72     H     96    `     120    x
		    49     1     73     I     97    a     121    y
		    50     2     74     J     98    b     122    z
		    51     3     75     K     99    c
		    52     4     76     L    100    d
		    53     5     77     M    101    e
		    54     6     78     N    102    f
		    55     7     79     O    103    g

Key: D.V = Decimal Value