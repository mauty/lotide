// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
//   }
// };

const findKeyByValue = function(object, value) {
  // iterate through object to find value
  let listOfKeys = [];
  listOfKeys = Object.keys(object);
  // console.log(`List of keys: ${listOfKeys}`);
  for (let item of listOfKeys) {
    if (object[item] === value) {
      return item;
    }
  }
  // return the key associated with that value
  // if no value is found return undefined
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;