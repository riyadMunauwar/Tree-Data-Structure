class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("Invalid index");
    }

    if (index === 0) {
      return this.prepend(value);
    }

    if (index === this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Invalid index");
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
      return this;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    if (index === this.length - 1) {
      this.tail = leader;
    }
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this;
  }

  print() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

// Example usage
const myLinkedList = new SinglyLinkedList();
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
console.log(myLinkedList.print()); // Output: [1, 2, 3]
myLinkedList.prepend(0);
console.log(myLinkedList.print()); // Output: [0, 1, 2, 3]
myLinkedList.insert(2, 1.5);
console.log(myLinkedList.print()); // Output: [0, 1, 1.5, 2, 3]
myLinkedList.remove(2);
console.log(myLinkedList.print()); // Output: [0, 1, 2, 3]
myLinkedList.reverse();
console.log(myLinkedList.print()); // Output: [3, 2, 1, 0]