const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')


assertEqual(eqArrays([2,3],[2,"3"]), false)
assertEqual(eqArrays([2,3],[2,4]), false)
assertEqual(eqArrays([2,3],[2,3]), true)
assertEqual(eqArrays([],['hello', 'goodbye']), false)
assertEqual(eqArrays(['hello', 'goodbye'],['hello', 'goodbye']), true)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);