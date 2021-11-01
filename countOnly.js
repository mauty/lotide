const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  }
};


//  allItems: an array of strings that we need to look through
//  itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  
  // let count = 0;
  for (const item of allItems) {
    console.log(item)
    if (itemsToCount[item]) {
      if (results[item]) {
      results[item] += 1;
      } else {
      results[item] = 1;
      }
    }
  }
  return results;
}

// Tests

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


//ABORTED ATTEMPT
  //   console.log(item);
  //   count++;
  //   console.log(count)
  // }
  // results.count = count
  // console.log(`Total ${results.count}`)
  // return results.count;