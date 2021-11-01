const eqArrays = require('./eqArrays')

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === false ) {
    console.log(`🛑 Assertion failed: ${array1} !== ${array2}`);
  } else {
    console.log(`✅ Assertion Passed:  ${array1} === ${array2}`);
  }
};

module.exports = assertArraysEqual;

