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

const Stack = require('./stack');

class Queue {
  constructor() {
    this.s1 = new Stack()
    this.s2 = new Stack()
  }

  add(newData) {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop())
    }
    this.s1.push(newData)
    while (this.s2.peek()) {
      this.s1.push(this.s2.pop())
    }
  }

  remove() {
    return this.s1.pop()
  }

  peek() {
    return this.s1.data[this.s1.data.length - 1]
  }
}

// // My solution -- matches video solution

// class Queue {

//   constructor() {
//     this.stackOne = new Stack();
//     this.stackTwo = new Stack();
//   };

//   add(item) {
//     this.stackOne.push(item);
//   };

//   remove() {
//     while (this.stackOne.peek()) {
//       this.stackTwo.push(this.stackOne.pop());
//     };
//     const removedItem = this.stackTwo.pop();
//     while (this.stackTwo.peek()) {
//       this.stackOne.push(this.stackTwo.pop());
//     };
//     return removedItem;
//   };

//   peek() {
//     while (this.stackOne.peek()) {
//       this.stackTwo.push(this.stackOne.pop());
//     };
//     const peekedItem = this.stackTwo.peek();
//     while (this.stackTwo.peek()) {
//       this.stackOne.push(this.stackTwo.pop());
//     };
//     return peekedItem;
//   };
// };

module.exports = Queue;
