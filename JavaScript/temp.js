function Node(value, rest) {
  this.value = value;
  this.rest = rest || null; // default value of null
}

function LinkedList(arr) {
    if (!arr) {
      this.head = null; // default head for empty lists
    } else {
      var list = new Node( arr[ arr.length - 1 ])
      for ( var i = arr.length - 2; i >= 0; i-- ) {
        list = new Node( arr[i], list )
      }
      this.head = list;
    }
}

LinkedList.prototype.toArray = function toArray() {
  if (this.head === null) {
    return [];
  } else {
    var res = [];
    traverse(this.head);
    return res;
  }

  function traverse(head){
    res.push(head.value)
    if(head.rest !== null) {
      traverse(head.rest);
    }
  }

};

LinkedList.prototype.prepend = function prepend(value) {
  var n = new Node(value, this.head);
  this.head = n;
};

LinkedList.prototype.nth = function nth(index) {
  var counter = 0;

  function reach(head) {
    if (head == null) {
      throw "Index out of range";
    }
    if (index === counter) {
      return head.value;
    } else {
      counter++;
      return reach(head.rest);
    }
  }

  return reach(this.head);
};