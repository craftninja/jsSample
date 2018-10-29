//
// Given n of 1 or more, return the factorial of n, which is
// n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).
//
//
// factorial(1) → 1
// factorial(2) → 2
// factorial(3) → 6

const factorial = require('../lib/factorial');

describe('factorial', () => {
  it('calculates the factorial of 1', () => {
    expect(factorial(1)).toBe(1);
  });
  it('calculates the factorial of 2', () => {
    expect(factorial(2)).toBe(2);
  });
  it('calculates the factorial of 3', () => {
    expect(factorial(3)).toBe(6);
  });
  it('calculates the factorial of 4', () => {
    expect(factorial(4)).toBe(24);
  });
});
