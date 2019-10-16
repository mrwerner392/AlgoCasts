// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2


// My solution -- matches video solution
const Stack = require('./stack');

class Queue {


  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  };

  add(item) {
    this.stackOne.push(item);
  };

  remove() {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    };
    const removedItem = this.stackTwo.pop();
    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    };
    return removedItem;
  };

  peek() {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    };
    const peekedItem = this.stackTwo.peek();
    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    };
    return peekedItem;
  };
};

module.exports = Queue;
