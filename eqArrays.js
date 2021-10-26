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
    // console.log(array1[i], array2[i])
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
return true;
}

console.log(eqArrays([2,3],[2,"3"]))
console.log(eqArrays([2,3],[2,4]))
console.log(eqArrays([2,3],[2,3]))
console.log(eqArrays([],['hello', 'goodbye']))
console.log(eqArrays(['hello', 'goodbye'],['hello', 'goodbye']))

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);