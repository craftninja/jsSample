const bunnyEars = require('../lib/bunnyEars');

describe ('bunnyEars', () => {
  it('returns 0 ears for 0 bunnies', () => {
    expect(bunnyEars(0)).toEqual(0);
  });
});
