// Delete Middle Node: Implement an algorithm to delete a node in the middle 
// (i.e., any node but the first and last node, not necessarily the exact middle) 
// of a singly linked list, given only access to that node.

// EXAMPLE
// lnput:the node c from the linked lista->b->c->d->e->f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f

// Hints: #72 

const LinkedList = require("./Linked-List-Util/Linked-List-X.js");
const printList = require("./Linked-List-Util//Print-List.js");

let deleteMidNode = function(node) {

  if(node !== null && node.next !== null) {
    node.value = node.next.value;
    node.next = node.next.next;
    }
};

/* TEST */

let list = new LinkedList();
for (let item of [1, 2, 3, 4, 5, 6]) {
  list.append(item);
}

// printList(list.head);
deleteMidNode(list.head.next);
printList(list.head);