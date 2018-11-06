//
// Given a string and a list of matchers,
// enclose the matched characters in the string with bold tags
//
//
// boldify('abcxyz', []) → 'abcxyz'
// boldify('abcxyz', ['abc']) → '<b>abc</b>xyz'
// boldify('abcdxyz', ['abc', 'bcd']) → '<b>abcd</b>xyz'
// boldify('abcxyz', ['bc', 'xy']) → 'a<b>bcxy</b>z' OR 'a<b>bc</b></b>xy</b>z'


const boldify = require('../lib/boldify');

describe('boldify', () => {
  it('returns unmodified string when given no matchers', () => {
    expect(boldify('abcxyz', [])).toBe('abcxyz');
  });
  it('returns wrapped substring when given matcher', () => {
    expect(boldify('abcxyz', ['abc'])).toBe('<b>abc</b>xyz');
  });
  it('returns singly wrapped substring when given matchers that overlap', () => {
    expect(boldify('abcdxyz', ['abc', 'bcd'])).toBe('<b>abcd</b>xyz');
  });
  it('returns wrapped substring when given matchers that are adjacent', () => {
    expect(boldify('abcxyz', ['bc', 'xy'])).toBe('a<b>bcxy</b>z');
  });
});
