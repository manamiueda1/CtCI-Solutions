// Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. 
// The digits are stored in reverse order, such that the 1 's digit is at the head of the list. 
// Write a function that adds the two numbers and returns the sum as a linked list.

// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.

// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem.

// EXAMPLE
// lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
// Output: 9 -> 1 -> 2. That is, 912.

// Hints: #7, #30, #71, #95, #109 

var LinkedList = require('../Linked-List-Util/Linked-List.js');
var printList = require('../Linked-List-Util/Print-List.js');

var sumList = function(head1, head2) {
  
  var node1 = head1;
  var node2 = head2;
  var node3 = null;
  var head3 = null;
  
  var ones;
  var tens = 0;
  var sum;
  
  while (node1 !== null && node2 !== null) {
    if (node1 === null) {
      sum = node2.value;
    } else if (node2 === null) {
      sum = node1.value;
    } else {
      sum = node1.value + node2.value;
    }

    sum += tens;
    ones = sum % 10;
    if (node3 === null) {
      head3 = new LinkedList(ones);
      node3 = head3;
    } else {
      node3.next = new LinkedList(ones);
      node3 = node3.next;
    }

    tens = Math.floor(sum / 10);

    if (node1 !== null) {
      node1 = node1.next;
    }

    if (node2 !== null) {
      node2 = node2.next;
    }

  }
  if (tens > 0) {
    node3.next = new LinkedList(tens);
    node3 = node3.next;
  }

  return head3;
};

/* TEST */

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912

var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);

a.next = b;
b.next = c;

var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(2);

d.next = e;
e.next = f;

var newHead = sumList(a, d);

printList(newHead);

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 9). this case refers to 617 + 995
// Output: 2 -> 1 -> 9. the answer refers to 1612

// var a = new LinkedList(7);
// var b = new LinkedList(1);
// var c = new LinkedList(6);

// a.next = b;
// b.next = c;

// var d = new LinkedList(5);
// var e = new LinkedList(9);
// var f = new LinkedList(2);

// d.next = e;
// e.next = f;

// var newHead = sumList(a, d);

// printList(newHead);