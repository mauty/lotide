const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  }
};

const head = function(array) {
  if (array) {
    return array[0];
  } else {
    return undefined;
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 1.1); 

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]),1)