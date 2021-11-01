const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  }
};


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