// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = string => {
  const charMap = {}
  let charMax = string[0]
  for (let char of string) {
    charMap[char] ? charMap[char] = charMap[char] + 1 : charMap[char] = 1
    if (charMap[char] > charMap[charMax]) charMax = char
  }
  return charMax
}


// // My solution
// // Matches video solution
// function maxChar(str) {
//   let charCount = {};
//   for (let char of str) {
//     charCount[char] ? charCount[char] += 1 : charCount[char] = 1;
//   };
//   let max = 0;
//   let maxChar = '';
//   for (let key in charCount) {
//     if (charCount[key] > max) {
//       maxChar = key;
//       max = charCount[key];
//     };
//   };
//   return maxChar;
// };

module.exports = maxChar;
