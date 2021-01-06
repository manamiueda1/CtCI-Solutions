// Loop Detection: Given a circular linked list, implement an algorithm that 
// returns the node at the beginning of the loop.

// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to 
// an earlier node, so as to make a loop in the linked list.

// EXAMPLE
// Input: A -> B -> C -> D -> E -> C [the same C as earlier]
// Output: C

// Hints: #50, #69, #83, #90 

let LinkedList = require('./Linked-List-Util/Linked-List.js');

let loopDetection = (head) => {
  // The null checking code will handle lists with no loops.
  if (!head || !head.next) return null
  
  let hare = head
  let tortoise = head
  
  do {
    hare = hare.next
    tortoise = tortoise.next
    if (!hare || !hare.next) return null
    hare = hare.next
  } while (hare !== tortoise)
  
  tortoise = head
  
  while (hare !== tortoise) {
    hare = hare.next
    tortoise = tortoise.next
  }
  
  return hare
};

/* TEST */
// A -> B -> C -> D -> E -> C

let a = new LinkedList();
let b = new LinkedList();
let c = new LinkedList();
let d = new LinkedList();
let e = new LinkedList();
let f = new LinkedList();

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = c;

console.log(loopDetection(a) === c, true);

let A = new LinkedList();
let B = new LinkedList();
let C = new LinkedList();
let D = new LinkedList();
let E = new LinkedList();
let F = new LinkedList();

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

console.log(loopDetection(A) === null, false);