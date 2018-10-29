//
// Given a string, compute recursively a new string where all the adjacent chars
// are now separated by a "*".
//
//
// allStar("hello") → "h*e*l*l*o"
// allStar("abc") → "a*b*c"
// allStar("ab") → "a*b"

const allStar = require('../lib/allStar');

describe('allStar', () => {
  it('returns a when given a', () => {
    expect(allStar('a')).toBe('a');
  });
  it('returns a*b when given ab', () => {
    expect(allStar('ab')).toBe('a*b');
  });
  it('returns a*b*c when given abc', () => {
    expect(allStar('abc')).toBe('a*b*c');
  });
  it('returns h*e*l*l*o when given hello', () => {
    expect(allStar('hello')).toBe('h*e*l*l*o');
  });
});
