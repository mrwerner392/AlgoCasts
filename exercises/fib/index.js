// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// My solution
// function fib(n) {
//
//   if (n === 0) {
//     // console.log(0);
//     return 0;
//   } else if (n === 1) {
//     // console.log(1);
//     return 1;
//   } else {
//     const fib = [0, 1];
//
//     for (let i = 2; i <= n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//     };
//
//     // console.log(fib[n]);
//     return fib[n];
//   };
//
// };

// module.exports = fib;


// // Video solution #1
// function fib(n) {
//
//   const results = [0, 1];
//
//   for (let i = 2; i <= n; i++) {
//     results[i] = results[i - 1] + results[i - 2];
//   };
//
//   return results[n];
//
// };

// // Video solution #2
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//
//   return fib(n - 1) + fib(n - 2);
// };

// Video solution #3 memoization
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    };

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
};

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};


fib = memoize(fib);

module.exports = fib;
