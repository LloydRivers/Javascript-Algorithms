// Linked list: 1 -> 2 -> 3 -> null

/* 
In JavaScript, a class is a special type of function that defines a blueprint for creating objects. It allows you to define a set of properties and methods that the objects created from the class will have. 

Define a Node class to represent each node in the linked list.
*/

class Node {
  /*
     In JavaScript, a constructor is a function that is called when you create a new object using the new keyword. Constructors are used to initialize the object's properties and set its initial state. In this code, the Node class defines a constructor function that takes a value parameter and sets two properties on the new object that is being created: 
  */
  constructor(value, next = null) {
    /*
     The this keyword refers to the object that is being created by the constructor. 

     In this case, this.value and this.next are properties that are being set on the new Node object that is being created.

     So when you create a new Node object like this: 
     const node = new Node(42);
     The constructor function is called with the argument 42, and it creates a new object with a value property of 42 and a next property of null.

     console.log(node);
     Output: Node { value: 42, next: null }
    */
    this.value = value; // The value of the node.
    this.next = next; // A reference to the next node in the list.
  }
}

// Define a LinkedList class to represent the linked list itself.
class LinkedList {
  constructor() {
    // A reference to the first node in the list.
    this.head = null;

    // A reference to the last node in the list.
    this.tail = null;

    // The number of nodes in the list.
    this.length = 0;
  }

  // Insert a new node at the beginning of the list.
  addToHead(value) {
    // Create a new node with the given value and set it as the head of the list.
    this.head = new Node(value, this.head);

    // Increase the length of the list.
    this.length++;
  }

  // add a new node to the end of the list.
  addToTail(value) {
    // Create a new node with the given value
    const node = new Node(value);

    // If the list is empty, set the head and tail to the new node
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // If the list is not empty
      // Check if the tail is null
      if (!this.tail) {
        // Set the tail to the head
        this.tail = this.head;
      }
      // Set the next property of the current tail to the new node
      this.tail.next = node;
      // Update the tail to be the new node
      this.tail = node;
    }

    // Increase the length of the list
    this.length++;
  }

  // Remove the node at the given index from the list and return its value.
  remove(index) {
    if (index < 0 || index >= this.length) {
      // If the index is out of bounds, throw an error.
      throw new Error("Index out of bounds");
    }

    let current = this.head; // Start at the head of the list.
    let previous = null; // Keep track of the previous node we visited.

    for (let i = 0; i < index; i++) {
      /*
       This is the main loop that traverses the linked list. It starts at the head of the list (current = this.head) and keeps moving to the next node (current = current.next) until it reaches the node at the given index. The loop uses two variables: current (the current node being visited) and previous (the node visited before current). */

      previous = current;
      current = current.next;

      /*  
      During each iteration of the loop, we update previous to be equal to current, and current to be equal to the next node in the list.

       At the end of the loop, current will be pointing to the node at the given index, and previous will be pointing to the node before it. This allows us to insert a new node between previous and current.
       */
    }

    if (previous) {
      // If the node to remove is not the head of the list, set the previous node's next property to the current node's next property.
      previous.next = current.next;
    } else {
      // If the node to remove is the head of the list, set the head to the current node's next property.
      this.head = current.next;
    }

    if (!current.next) {
      // If the node to remove is the tail of the list, set the tail to the previous node.
      this.tail = previous;
    }

    this.length--; // Decrease the length of the list.

    return current.value; // Return the value of the removed node.
  }

  // Get the value of the node at the given index in the list.
  get(index) {
    if (index < 0 || index >= this.length) {
      // If the index is out of bounds, throw an error.
      throw new Error("Index out of bounds");
    }

    let current = this.head; // Start at the head of the list.

    for (let i = 0; i < index; i++) {
      // Traverse the list until we reach the node at the given index.
      current = current.next;
    }

    return current.value; // Return the value of the node.
  }
}

// Here's an example of how we can use the LinkedList class:

const list = new LinkedList(); // Create a new linked list.
// list.addToHead(1); // Add a node with the value 1 to the start of the list.
// list.addToTail(2); // Add a node with the value 2 to the end of the list.

list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
list.addToTail(4);
list.addToTail(5);
console.log("list", list);
