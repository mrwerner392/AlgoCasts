// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

const weave = (q1, q2) => {
  const result = new Queue()
  let next = true
  while (next) {
    if (!q1.peek() && !q2.peek()) {
      next = false
    } else {
      if (q1.peek()) result.add(q1.remove())
      if (q2.peek()) result.add(q2.remove())
    }
  }
  return result
}

// // My solution
// // Matches video mostly except in while uses 'sourceOne.peek() || sourceOne.peek()'
// function weave(sourceOne, sourceTwo) {

//   const newQ = new Queue();
//   while (!(sourceOne.peek() === undefined && sourceTwo.peek() === undefined)) {
//     if (sourceOne.peek()) {
//       newQ.add(sourceOne.remove())
//     }
//     if (sourceTwo.peek()) {
//       newQ.add(sourceTwo.remove())
//     }
//   }
//   return newQ
// }

module.exports = weave;
