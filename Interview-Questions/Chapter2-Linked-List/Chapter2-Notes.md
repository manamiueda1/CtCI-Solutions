# General Chapter 2 Notes

Chapter 2 starts on Page 103 (PDF) page 92 in the book
Hints start on page 653

# Additional Questions

Trees and Graphs (#4.3),
Object-Oriented Design (#7.12),
System Design and Scal­ability (#9.5),
Moderate Problems (#16.25),
Hard Problems (#17.12)

# Chapter 2 Notes

Linked List: Linked List is a data structure that represents a sequence of nodes.
Singly Linked List: each node points to the next node in the linked list.
Doubly Linked List: gives each node pointers to both the next node and the previous node.

Disadvantage: Unlike an array, a linked list does not provide constant time access to a particular "index" within the list.
This means that if you'd like to find the Kth element in the list, you will need to iterate through K elements.

Advantage: The benefit of a linked list is that you can add and remove items from the beginning of the list in constant
time. For specific applications, this can be useful.

# Creating a LinkedList

need to look up JavaScript version

# Deleting a Node from a Singly Linked List

Singly Linked List: given a node n, find the previous node prev and set prev.next equal to n.next.
Doubly Linked List: you must also update n. next to set n.next.prev equal to n.prev.
Important things to remember: 1. to check for the null pointer and 2. to update the head or tail pointer as necessary.

# The 'Runner'/Second Pointer Technique

What is it?
Iterate through the linked list with two pointers simultaneously, with one ahead of the other. The "fast" node might be ahead by a fixed amount, or it might be hopping multiple nodes for each one node that the "slow" node iterates through.

Example Problem:
suppose you had a linked list:
a1 ->a2 -> ••• ->an ->b1 ->b2 -> ••• -> bn and you wanted to rearrange it into a1 ->b1 ->a2 ->b2 -> ••• ->an ->bn.
You do not know the length of the linked list (but you do know that the length is an even number).
You could have one pointer p1 (the fast pointer) move every two elements for every one move that p2 makes. When p1 hits the end of the linked list, p2 will be at the midpoint. Then, move p1 back to the front and begin "weaving" the elements. On each iteration, p2 selects an element and inserts it after p1.

# Recursive Problems

A number of linked list problems rely on recursion. If you're having trouble solving a linked list problem, you should explore if a recursive approach will work.
