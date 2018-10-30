// Infix       Postfix         Result
// 3+5         3 5 +           8
// 7-3         7 3 -           4
// 5 * 3-10    5 3 * 10 -      5
// 5(3-10)     5 3 10 - *      -35

// postfix('5 3 10 - *') => -35

const postfix = require('../lib/postfix');

describe('postfix', () => {
  it('returns 8 for the string`3 5 +`', () => {
    expect(postfix('3 5 +')).toBe(8);
  });
  it('returns 4 for the string`7 3 -`', () => {
    expect(postfix('7 3 -')).toBe(4);
  });
  it('returns 5 for the string`5 3 * 10 -`', () => {
    expect(postfix('5 3 * 10 -')).toBe(5);
  });
  it('returns -35 for the string`5 3 10 - *`', () => {
    expect(postfix('5 3 10 - *')).toBe(-35);
  });
});
