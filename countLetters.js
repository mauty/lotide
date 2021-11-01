const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {}
  // let letter = "a"
  for (let letter of sentence) {
    // check for spaces
    if (letter !== ' ') {
      // console.log(`Letter: ${letter}`)
      // add new key to result object
    if (!result[letter]) {
      result[letter] = 1
    } else {
      // increase value of key by 1
      result[letter] += 1
    }
    }
    // console.log(result)
  }
  return result;
}

console.log(countLetters("lets go raptors"));
console.log(countLetters("raptors"));

module.exports = countLetters;