// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//
// Find the value of the nth Fibonacci number
// fibonacci(0) => 0
// fibonacci(1) => 1
// fibonacci(2) => 1
// fibonacci(3) => 2
// fibonacci(9) => 34

const fibonacci = require('../lib/fibonacci');

describe('recursive fibonacci', () => {
  it('finds the 0th fibonacci number', () => {
    expect(fibonacci.recursive(0)).toBe(0);
  });
  it('finds the fibonacci number at index 1', () => {
    expect(fibonacci.recursive(1)).toBe(1);
  });
  it('finds the fibonacci number at index 2', () => {
    expect(fibonacci.recursive(2)).toBe(1);
  });
  it('finds the fibonacci number at index 3', () => {
    expect(fibonacci.recursive(3)).toBe(2);
  });
  it('finds the fibonacci number at index 9', () => {
    expect(fibonacci.recursive(9)).toBe(34);
  });
});

describe('forLoop fibonacci', () => {
  it('finds the 0th fibonacci number', () => {
    expect(fibonacci.forLoop(0)).toBe(0);
  });
  it('finds the fibonacci number at index 1', () => {
    expect(fibonacci.forLoop(1)).toBe(1);
  });
  it('finds the fibonacci number at index 2', () => {
    expect(fibonacci.forLoop(2)).toBe(1);
  });
  it('finds the fibonacci number at index 3', () => {
    expect(fibonacci.forLoop(3)).toBe(2);
  });
  it('finds the fibonacci number at index 9', () => {
    expect(fibonacci.forLoop(9)).toBe(34);
  });
});
