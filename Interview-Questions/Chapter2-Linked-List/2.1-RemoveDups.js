// Remove Dups: Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

// Hints: #9, #40

const LinkedList = require("./Linked-List-Util/Linked-List-X");

function removeDuplicates(list) {
  const set = new Set();
  let cur = list.head;
  let prev = null;
  while (cur) {
    if (set.has(cur.value)) {
      // duplicate found!
      // de-link it from the list 
      // cur jumps next but previous stays by assigning prev.next to cur.next right behind cur (as always)
      // cur is reassigned to the next node 
      // elem.next becomes null to completely de-link it. it is not .next of any node and it's .next becomes null

      let elem = cur;
      prev.next = cur.next;
      cur = cur.next;
      elem.next = null;
    }
    else {
      // add to the set
      set.add(cur.value);
      prev = cur;
      cur = cur.next;
    }
  }
  // return list
  // return set
}

// quick test
let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.append(elem);
}
removeDuplicates(list);

console.log(list._toArray()); // [1, 5, 6, 8]