// Compare and contrast a recursive vs iterative function.
// This code was used as an example in a Lightning Talk at
// Boulder JS in November 2018

const recursionTalk = require('../lib/recursionTalk');

describe('Recursive vs Iterative functions', () => {
  it('returns the same string for the number 4', () => {
    const expected = '4\n3\n2\n1\nEarth Below Us\nDrifting falling\nFloating weightless\nFalling, falling, home!'
    expect(recursionTalk.recursion(4)).toBe(expected);
    expect(recursionTalk.forLoop(4)).toBe(expected);
  });
  it('returns the same string for the number 0', () => {
    const expected = 'Earth Below Us\nDrifting falling\nFloating weightless\nFalling, falling, home!'
    expect(recursionTalk.recursion(0)).toBe(expected);
    expect(recursionTalk.forLoop(0)).toBe(expected);
  });
});
