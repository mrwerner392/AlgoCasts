// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// My solution, but doesn't account for non-letters/upper and lower case
function anagrams(stringA, stringB) {
  const charsA = {};
  const charsB = {};
  let numCharsA = 0;
  let numCharsB = 0;

  for (let char of stringA) {
    if (charsA[char]) {
      charsA[char]++;
    } else {
      charsA[char] = 1;
      numCharsA++;
    };
  };

  for (let char of stringB) {
    if (charsB[char]) {
      charsB[char]++;
    } else {
      charsB[char] = 1;
      numCharsB++;
    };
  };

  let checker = true;

  if (numCharsA !== numCharsB) {
    return false;
  };

  for (let key in charsA) {
    if (charsA[key] !== charsB[key]) {
      return false;
    };
  };

  return true;

};

module.exports = anagrams;


// // Video solution #1
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   };
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     };
//   };
//
//   return true;
// };
//
// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   };
//   return charMap;
// };

// // Video solution #2
// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// };
//
// function cleanString(str) {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// };
