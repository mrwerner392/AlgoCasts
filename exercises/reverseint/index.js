// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


const reverseInt = int => {
  const neg = int < 0
  let intStr = int.toString()
  if (neg) intStr = intStr.slice(1)
  const reverseIntStr = intStr.split('').reverse().join('')
  let reverseInt = parseInt(reverseIntStr)
  return neg ? reverseInt * -1 : reverseInt
}

// // My solution
// function reverseInt(n) {
//   let numString = n.toString();
//   let digits = n < 0 ? numString.split('').shift() : numString.split('');
//   let revNumString = numString.split('').reduce((rev, char) => char + rev, '');
//   return n < 0 ? parseInt(revNumString, 10) * -1 : parseInt(revNumString, 10);
// };

module.exports = reverseInt;


// // My solution #2 (one line, probably not advisable, but works)
// function reverseInt(n) {
//   return n<0 ? -1 * parseInt((n * -1).toString().split('').reverse().join('')) : parseInt(n.toString().split('').reverse().join(''));
// };

// // Video solution
// function reverseInt(n) {
//   const reversed = n.toString()
//                     .split('')
//                     .reverse()
//                     .join('');
//   return parseInt(reversed) * Math.sign(n);
// };
