// takes in two arguments, an array and a callback function

const words = ["ground", "control", "to", "major", "tom"];
const emptyWords = []
const numbers = [1,2,3,4,5]

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(emptyWords, word => word[0]);
const results3 = map(numbers, word => word[0]);

console.log('results1: ',results1);
console.log('results2: ',results2);
console.log('results3: ',results3);


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

// array1 = result from map
// array2 = expected result

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === false ) {
    console.log(`🛑 Assertion failed: ${array1} !== ${array2}`);
  } else {
    console.log(`✅ Assertion Passed:  ${array1} === ${array2}`);
  }
};

assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(results2,[ ])
assertArraysEqual(results3,[ undefined, undefined, undefined, undefined, undefined ])