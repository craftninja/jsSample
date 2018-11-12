//
// Given a string, return boolean based on if all characters in string are unique
//
//
// allUnique("hello") → false
// allUnique("abc") → true
// allUnique("I'm sure") → true

const { emily, luke } = require('../lib/allUnique');

describe('allUnique - Emily', () => {
  it('returns false when given "hello"', () => {
    expect(emily('hello')).toBe(false);
  });
  it('returns true when given "abc"', () => {
    expect(emily('abc')).toBe(true);
  });
  it(`returns true when given "That's nice"`, () => {
    expect(emily("That's nice")).toBe(true);
  });
});

describe('allUnique - Luke', () => {
  it('returns false when given "hello"', () => {
    expect(luke('hello')).toBe(false);
  });
  it('returns true when given "abc"', () => {
    expect(luke('abc')).toBe(true);
  });
  it(`returns true when given "That's nice"`, () => {
    expect(luke("That's nice")).toBe(true);
  });
});
