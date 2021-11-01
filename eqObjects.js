const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
   return false;
  }
  let keysArray1 = Object.keys(object1)
  let keysArray2 = Object.keys(object2)
  let values1 = Object.values(object1)
  let values2 = Object.values(object2)
  for (let key1 of keysArray1) {
    if (key1 === key2) {

    } else {
    return false
    }
  }
}


// TESTS

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };

console.log(eqObjects(ab, ba)); 

const abc = { a: '1', b: '2', c: '3'};
console.log(eqObjects(ab, abc));

assertEqual(eqObjects(ab, ba))