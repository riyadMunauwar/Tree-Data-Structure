class DoublyCircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = this.head;
        newNode.prev = this.head;
      } else {
        newNode.prev = this.tail;
        newNode.next = this.head;
        this.tail.next = newNode;
        this.head.prev = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    prepend(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = this.head;
        newNode.prev = this.head;
      } else {
        newNode.next = this.head;
        newNode.prev = this.tail;
        this.head.prev = newNode;
        this.tail.next = newNode;
        this.head = newNode;
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
      const follower = leader.next;
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = follower;
      follower.prev = newNode;
      this.length++;
      return this;
    }
  
    remove(index) {
      if (index < 0 || index >= this.length) {
        throw new Error("Invalid index");
      }
  
      if (index === 0) {
        this.head = this.head.next;
        this.head.prev = this.tail;
        this.tail.next = this.head;
        if (this.length === 1) {
          this.tail = null;
        }
        this.length--;
        return this;
      }
  
      if (index === this.length - 1) {
        this.tail = this.tail.prev;
        this.tail.next = this.head;
        this.head.prev = this.tail;
        this.length--;
        return this;
      }
  
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      unwantedNode.next.prev = leader;
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
  }