/* 
Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.
*/

function indexOf(head, value) {
  if (!head) {
    // We've reached the end of the linked list without finding the value
    return -1;
  }

  if (head.data === value) {
    // We've found the value; return the current index
    return 0;
  }

  // Continue traversing the linked list

  /*
  The indexOf function is a recursive function, which means it calls itself with a modified input until it reaches a stopping condition. In this implementation, the function takes two arguments: head and value. head is the current node in the linked list that we're examining, and value is the value we're searching for.

When we call indexOf(head.next, value) in the line const 
index = indexOf(head.next, value);, 
we're calling indexOf recursively with the next node in the linked list as the new head, and the same value as before. This effectively moves us one step closer to the end of the linked list, and allows us to continue searching for the desired value.

The recursive calls continue until we either find the desired value or reach the end of the linked list. When we find the desired value, we return the current index (which is 0 if we found the value in the current node, or the incremented index of the next node otherwise). If we reach the end of the linked list without finding the desired value, we return -1 to indicate that the value was not found.

I hope that helps clarify how the recursive calls work! Let me know if you have any more questions. */
  const index = indexOf(head.next, value);
  return index === -1 ? -1 : index + 1;
}
