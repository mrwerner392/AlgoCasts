// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let chars = str.split("");
  let reversedChars = [];
  for (let i = chars.length - 1; i >= 0; i--) {
    reversedChars.push(chars[i]);

  };
  return reversedChars.join("");
};


module.exports = reverse;

// // Video solution #1
// function reverse(str) {
//   return str.split("")
//             .reverse()
//             .join("");
// };

// // Video solution #2
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   };
//   return reversed;
// };

// // Video solution #3
// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// };

// function reverse(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   };
//   return reversed;
// }
