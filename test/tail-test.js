const assertEqual = require('../assertEqual');
const tail = require('../tail');

//Test section
const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsOne = ["Yo Yo"];
const wordsNone = [];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!