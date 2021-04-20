// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = str => {
  const words = str.split(' ')
  const newWords = []
  for (let word of words) {
    newWords.push(word[0].toUpperCase() + word.slice(1))
  }
  return newWords.join(' ')
}

// // My solution
// function capitalize(str) {
//   let capWords = [];
//   let words = str.split(' ');
//   for (let word of words) {
//     capWords.push(word[0].toUpperCase() + word.slice(1));
//   };
//   return capWords.join(' ');
// };

module.exports = capitalize;


// // Video solution #1
// function capitalize(str) {
//   let words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   };
//
//   return words.join(' ');
// };


// // Video solution #2
// function capitalize(str) {
//   let result = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     };
//   };
//   return result;
// };
