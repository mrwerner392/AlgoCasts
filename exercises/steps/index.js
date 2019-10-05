// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// My solution
function steps(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    str += ' ';
  };

  for (let i = 0; i < n; i++) {
    str = '#' + str.slice(0, n-1);
    console.log(str);
  };
};

module.exports = steps;


// // Video solution #1
// function steps(n) {
//   for (let rowNum = 0; rowNum < n; rowNum++) {
//     let str = ''
//     for (let colNum = 0; colNum < n; colNum++) {
//       if (colNum <= rowNum) {
//         str += '#';
//       } else {
//         str += ' ';
//       };
//     };
//     console.log(str);
//   };
// };

// // Video solution #2
// function steps(n, row = 0, str = '') {
//   if (n === row) {
//     return;
//   };
//
//   if (n === str.length) {
//     console.log(str);
//     steps(n, row + 1);
//     return
//   };
//
//   if (str.length <= row) {
//     str += '#';
//   } else {
//     str += ' ';
//   };
//
//   steps(n, row, str);
//
// }
