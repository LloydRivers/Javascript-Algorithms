// Linked list: 1 -> 2 -> 3 -> null

/* 
In JavaScript, a class is a special type of function that defines a blueprint for creating objects. It allows you to define a set of properties and methods that the objects created from the class will have. 

Define a Node class to represent each node in the linked list.
*/
class Node {
  /*
     In JavaScript, a constructor is a function that is called when you create a new object using the new keyword. Constructors are used to initialize the object's properties and set its initial state. In this code, the Node class defines a constructor function that takes a value parameter and sets two properties on the new object that is being created: 
  */
  constructor(value) {
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
    this.next = null; // A reference to the next node in the list.
  }
}

// Define a LinkedList class to represent the linked list itself.
class LinkedList {
  constructor() {
    this.head = null; // A reference to the first node in the list.
    this.tail = null; // A reference to the last node in the list.
    this.length = 0; // The number of nodes in the list.
  }

  // Add a new node to the end of the list.
  add(value) {
    const node = new Node(value); // Create a new node with the given value.

    if (!this.head) {
      // If the list is empty, set the new node as both the head and the tail.
      this.head = node;
      this.tail = node;
    } else {
      // Otherwise, set the tail's next property to the new node, and then set the tail to the new node.
      this.tail.next = node;
      this.tail = node;
    }

    this.length++; // Increase the length of the list.
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
      // Traverse the list until we reach the node at the given index.
      previous = current;
      current = current.next;
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

list.add(1); // Add the value 1 to the list.
list.add(2); // Add the value 2 to the list.
list.add(3); // Add the value 3
