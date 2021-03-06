const takeUntil = function (array, callback) {
  const results = []
  for (let item of array) {
    const untilValue = callback();
    // console.log('untilValue: ',untilValue)
    // console.log('item: ',item)
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
// return true;
// };


// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === false ) {
//     console.log(`🛑 Assertion failed: ${array1} !== ${array2}`);
//   } else {
//     console.log(`✅ Assertion Passed:  ${array1} === ${array2}`);
//   }
// };

// assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])
// assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ])

module.exports = takeUntil;