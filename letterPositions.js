// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };


// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === false) {
//     console.log(`🛑 Assertion failed: ${array1} !== ${array2}`);
//   } else {
//     console.log(`✅ Assertion Passed:  ${array1} === ${array2}`);
//   }
// };


const letterPositions = function(sentence) {
  const results = {};
  // function takes a string as input
  for (let i = 0; i < sentence.length; i++) {
    // console.log(sentence[0])
    // iterates through each letter that is not a space
    if (sentence[i] !== ' ') {
      let currentLetter = sentence[i];
      // console.log("sentence[i]: ",sentence[i])
      if (results[currentLetter]) {
        // records the value of each occurance based on it's index as an array
        results[currentLetter].push(i);
      } else {
        // adds each letter as a key in an empty results object
        let letterPosition = [i];
        results[currentLetter] = letterPosition;
      }
    }
  }
  return results;
};

// console.log(letterPositions("basketball is great"));
// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;