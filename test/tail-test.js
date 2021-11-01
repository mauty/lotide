const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];


// Test section
describe ('#tail', () => {
  it ("returns ['Two', 'Three', 'Four'] for ['One', 'Two', 'Three', 'Four']", () => {
    assert.deepEqual(tail(['One', 'Two', 'Three', 'Four']), ['Two', 'Three', 'Four'])
  });
  it ("returns [] for ['One']", () => {
    assert.deepEqual(tail(['One']), [])
  });
  it ("Array is correct length", () => {
    assert.strictEqual(tail(words).length, 2)
  })
});