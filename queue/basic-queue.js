class Queue {
    constructor() {
      this.items = [];
      this.front = 0;
      this.rear = 0;
      this.size = 0;
    }
  
    enqueue(item) {
      this.items[this.rear] = item;
      this.rear++;
      this.size++;
      return this.size;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue Underflow";
      }
      const item = this.items[this.front];
      this.front++;
      this.size--;
      return item;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.front];
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    isFull() {
      return this.size === this.items.length;
    }
  
    length() {
      return this.size;
    }
  
    clear() {
      this.items = [];
      this.front = 0;
      this.rear = 0;
      this.size = 0;
    }
  
    print() {
      console.log(this.items.slice(this.front, this.rear));
    }
  }
  
  // Example usage
  const queue = new Queue();
  console.log(queue.enqueue(1)); // Output: 1
  console.log(queue.enqueue(2)); // Output: 2
  console.log(queue.enqueue(3)); // Output: 3
  console.log(queue.dequeue()); // Output: 1
  console.log(queue.peek()); // Output: 2
  console.log(queue.isEmpty()); // Output: false
  console.log(queue.isFull()); // Output: false
  console.log(queue.length()); // Output: 2
  queue.clear();
  console.log(queue.isEmpty()); // Output: true
  queue.print(); // Output: []