//
// Given a non-negative int n, return the sum of its digits recursively (no
// loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
// while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
//
//
// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3
const sumDigits = require('../lib/sumDigits');

describe('sumDigits', () => {
  it('sums the digits in 12', () => {
    expect(sumDigits(12)).toEqual(3);
  });
  it('sums the digits in 49', () => {
    expect(sumDigits(49)).toEqual(13);
  });
  it('sums the digits in 126', () => {
    expect(sumDigits(126)).toEqual(9);
  });
});
