const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  }
};


const tail = function(array) {
  let newArray = [array.slice(1)];
  return newArray;
};



//Test section
const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsOne = ["Yo Yo"];
const wordsNone = [];
tail(words); // no need to capture the return value since we are not checking it
console.log(tail(wordsOne));
console.log(tail(wordsNone));
assertEqual(words.length, 3); // original array should still have 3 elements!