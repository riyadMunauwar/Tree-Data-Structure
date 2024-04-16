class CustomArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
  
    get(index) {
      return this.data[index];
    }
  
    set(index, value) {
      this.data[index] = value;
      return this;
    }
  
    push(value) {
      this.data[this.length] = value;
      this.length++;
      return this.length;
    }
  
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
  
    delete(index) {
      const deletedItem = this.data[index];
      this.shiftItems(index);
      return deletedItem;
    }
  
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  
  // Example usage:
  const myArray = new CustomArray();
  myArray.push(1);
  myArray.push(2);
  myArray.push(3);
  console.log(myArray.get(1)); // Output: 2
  myArray.set(1, 4);
  console.log(myArray.get(1)); // Output: 4
  console.log(myArray.pop()); // Output: 3
  console.log(myArray.delete(0)); // Output: 1
  console.log(myArray); // Output: CustomArray { length: 1, data: { 0: 4 } }