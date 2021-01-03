// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

// Hints: #8, #25, #41, #67, #126

const LinkedList = require("./Linked-List-Util/Linked-List-X");

var findKthToLast = function(k, list) {
  // do iteratively
  //define two pointers , fast and slow pointer
  let fast = list.head
  let slow = list.head

  //Move fast pointer k steps in the linkedlist while slow remains at head
  for(let i = 0; i < k; i++){
    if(fast === null) return null //k is larger than length of linked list
    fast = fast.next
  }
  // move both pointers at the same time, slow pointer will exit at kth node from the end
  while(fast !== null){
    fast = fast.next
    slow = slow.next
  }
  return slow
};

/* TESTS */
let list = new LinkedList();
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)

// console.log(findKthToLast(3, list)); // 3
// console.log(findKthToLast(10, list)); // null
// console.log(findKthToLast(-1, list)); // null
// console.log(findKthToLast(0, list)); // null
console.log(findKthToLast(2, list)); // 4
console.log(findKthToLast(1, list)); // 5