// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vow = ['A','E','I','O','U','a','e','i','o','u']

const vowels = string => {
  let count = 0
  for (let char of string) {
    if (vow.indexOf(char) > -1) count++
  }
  return count
}

// // My solution, recursion probably unnecessary but practicing while its fresh in mind
// function vowels(str, count = 0, index = 0) {
//   if (index === str.length) {
//     return count;
//   }

//   if (/[aeiouAEIOU]/.test(str[index])) {
//     count++;
//   };

//   return vowels(str, count, ++index);
// }

module.exports = vowels;


// // Video solution #1
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//   for (let char of str) {
//     if (checker.includes(char.toLowerCase())) {
//       count++
//     };
//   };
//   return count;
// };

// // Video solution #2
// function vowels(str) {
//   let matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }
