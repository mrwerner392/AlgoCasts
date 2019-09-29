// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My solution
function palindrome(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  };
  return reversed === str;
};

module.exports = palindrome;


// // My solution #2
// function palindrome(str) {
//   reversed = str.split("").reduce((rev, char) => char + rev, '')
//   return reversed === str;
// };

// // Video solution #1
// function palindrome(str) {
//   const reversed = str.split('')
//                       .reverse()
//                       .join('');
//   return reversed === str;
// };

// Video solution #2
// function palindrome(str) {
//   return str.split("").every((char, index) => char === str[str.length - index - 1]);
// };
