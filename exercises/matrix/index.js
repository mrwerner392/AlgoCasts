// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


const matrix = n => {
  let dir = 'r' // 'r'ight, 'l'eft, 'u'p, 'd'own
  let row = 0
  let col = 0
  let counter = 1
  let result = []

  for (let i = 0; i < n; i++) {
    result[i] = []
    for (let j = 0; j < n; j++) {
      result[i].push(0)
    }
  }

  while (counter <= n * n) {
    result[row][col] += counter
    if (dir === 'r') {
      if (result[row] && result[row][col + 1] === 0 ) {
        col += 1
      } else {
        row += 1
        dir = 'd'
      }
    } else if (dir === 'd') {
      if (result[row + 1] && result[row + 1][col] === 0) {
        row += 1
      } else {
        col -= 1
        dir = 'l'
      }
    } else if (dir === 'l') {
      if (result[row] && result[row][col - 1] === 0) {
        col -= 1
      } else {
        row -= 1
        dir = 'u'
      }
    } else {
      if (result[row - 1] && result[row - 1][col] === 0) {
        row -= 1
      } else {
        col += 1
        dir = 'r'
      }
    }
    counter++
  }

  return result
}

// // My solution
// function matrix(n, spiral = [], counter = 1, row = 0, col = 0, shift = 1, dir = "hor") {
//   if (spiral.length === 0) {
//     for (let i = 0; i < n; i++) {
//       let rowArr = [];
//       for (let j = 0; j < n; j++) {
//         rowArr.push(null);
//       };
//       spiral.push(rowArr);
//     };
//   };

//   if (counter > (n * n)) {return spiral};

//   spiral[row][col] = counter;
//   counter ++;

//   function doHorizontalMove() {
//     return matrix(n, spiral, counter, row, col + shift, shift, "hor");
//   };

//   function doVerticalMove() {
//     return matrix(n, spiral, counter, row + shift, col, shift, "vert");
//   };

//   if (dir === "hor") {
//     if (!spiral[row][col + shift] && !(col + shift === n || col + shift < 0)) {
//       return doHorizontalMove();
//     } else {
//       return doVerticalMove();
//     };
//   };

//   if (dir === "vert") {
//     if (!(row + shift === n) && !spiral[row + shift][col]) {
//       return doVerticalMove();
//     } else {
//       shift = shift * -1;
//       return doHorizontalMove();
//     };
//   };

// };

module.exports = matrix;


// // Video solution
// function matrix(n) {
//   const results = [];
//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   };
//
//   let counter = 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//
//   while (startRow <= endRow && startColumn <= endColumn) {
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     };
//     startRow++;
//
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter;
//       counter++;
//     };
//     endColumn--;
//
//     for (let i = endColumn; i >= startColumn; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     };
//     endRow--;
//
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     };
//     startColumn++;
//
//   };
//
//   return results;
//
// };
