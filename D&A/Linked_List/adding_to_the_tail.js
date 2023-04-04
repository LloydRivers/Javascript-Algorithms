// Define the function with a single parameter `data`
function addToTail(data) {
  // Initialize `tail` to the current `head` of the list
  let tail = this.head;

  // If the list is empty, set `head` to a new node with `data`
  if (!tail) {
    this.head = new Node(data);
  } else {
    // Traverse the list to find the last node
    while (tail.getNextNode() !== null) {
      tail = tail.getNextNode();
    }
    // Create a new node with `data`, and set it as the `next` node for `tail`
    tail.setNextNode(new Node(data));
  }
}
