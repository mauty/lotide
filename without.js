const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
return true;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === false ) {
    console.log(`🛑 Assertion failed: ${array1} !== ${array2}`);
  } else {
    console.log(`✅ Assertion Passed:  ${array1} === ${array2}`);
  }
};

const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    let itemFound = false
    for (let j = 0; j < itemsToRemove.length; j++) { 
      if (source[i] === itemsToRemove[j]) {
        itemFound = true;
        break;
      } 
    } 
    if (itemFound === false) {
      newArray.push(source[i])
    }
  }
  return newArray;
}


// TEST SCENARIOS

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;