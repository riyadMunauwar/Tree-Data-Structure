class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item, priority) {
      const queueItem = { item, priority };
  
      // Find the correct index to insert the new item
      let i;
      for (i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > priority) {
          break;
        }
      }
  
      // Insert the new item at the correct index
      this.items.splice(i, 0, queueItem);
  
      return this.items.length;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Priority Queue Underflow";
      }
      return this.items.shift().item;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0].item;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    isFull() {
      // Priority queues don't have a fixed size, so this always returns false
      return false;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  
    print() {
      console.log(this.items.map(({ item, priority }) => `[${item}, ${priority}]`));
    }
  }
  
  // Example usage
  const priorityQueue = new PriorityQueue();
  console.log(priorityQueue.enqueue("low priority task", 2)); // Output: 1
  console.log(priorityQueue.enqueue("high priority task", 1)); // Output: 2
  console.log(priorityQueue.enqueue("medium priority task", 3)); // Output: 3
  console.log(priorityQueue.dequeue()); // Output: "high priority task"
  console.log(priorityQueue.peek()); // Output: "low priority task"
  console.log(priorityQueue.isEmpty()); // Output: false
  console.log(priorityQueue.isFull()); // Output: false
  console.log(priorityQueue.size()); // Output: 2
  priorityQueue.clear();
  console.log(priorityQueue.isEmpty()); // Output: true
  priorityQueue.print(); // Output: []