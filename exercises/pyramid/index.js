// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// My solution
function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let str = '';
    for (let col = 0; col < n-1; col++) {
      if (col + row + 2 <= n) {
        str += ' ';
      } else {
        str += '#';
      };
    };
    console.log(str + '#' + str.split('').reverse().join(''));
  };
};

module.exports = pyramid;


// // Video solution #1
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       };
//     };
//     console.log(level);
//   };
// };

// // Video solution #2
// function pyramid(n, row = 0, str = '') {
//   if (n === row) {
//     return;
//   };
//
//   if (str.length === 2 * n - 1) {
//     console.log(str);
//     return pyramid(n, row + 1, '');
//   };
//
//   const midpoint = n - 1;
//   if (midpoint - row <= str.length && midpoint + row >= str.length) {
//     str += '#';
//   } else {
//     str += ' ';
//   };
//
//   pyramid(n, row, str)
// };
