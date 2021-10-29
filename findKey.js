const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  }
};



const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      // console.log(object[key])
      return key;
    }
  }
}



findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma")