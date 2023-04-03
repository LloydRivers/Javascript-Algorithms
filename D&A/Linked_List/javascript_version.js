// Linked list: 1 -> 2 -> 3 -> null

// Define the first node (head)
const head = {
  value: 1,
  next: null,
};

// Define the second node
const second = {
  value: 2,
  next: null,
};

// Define the third node
const third = {
  value: 3,
  next: null,
};

// Link the nodes together
head.next = second;
second.next = third;

// The linked list can be traversed from the head to the end by following the next references.
