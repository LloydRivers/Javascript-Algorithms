// Create a new node with the given value
const new_node = {
  value: "new_value",
  next: null,
};

// Link the new node to the current head node
new_node.next = head;

// Set the head reference to point to the new node
head = new_node;

// Visual representation of the steps above
/*
               +-------+     +-------+     +-------+
     head ---> | node1 | --> | node2 | --> | node3 |
               +-------+     +-------+     +-------+
  
     // Step 1: Create a new node with value "new_value"
               +--------------------+
               | new_node           |
               | value: "new_value" |
               | next: null         |
               +--------------------+
  
     // Step 2: Link the new node to the current head node
               +--------------------+     +-------+
               | new_node           | --> | node1 |
               | value: "new_value" |     | next: |---------> | node2 |
               | next: ------------ |     +-------+           | next: |     ---------> | node3 |
               +--------------------+                        +-------+
  
     // Step 3: Set the head reference to point to the new node
               +----------+
     head ---> | new_node | --> +-------+     +-------+
               +-------------+  | node1 | --> | node2 |
                                +-------+     | next: | ---------> | node3 |
                                              +-------+
  */
