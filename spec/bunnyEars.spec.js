const bunnyEars = require('../lib/bunnyEars');

describe ('bunnyEars', () => {
  it('returns 0 ears for 0 bunnies', () => {
    expect(bunnyEars(0)).toEqual(0);
  });
  it('returns 2 ears for 1 bunnies', () => {
    expect(bunnyEars(1)).toEqual(2);
  });
  it('returns 4 ears for 2 bunnies', () => {
    expect(bunnyEars(2)).toEqual(4);
  });
  it('returns 6 ears for 3 bunnies', () => {
    expect(bunnyEars(2)).toEqual(4);
  });
  it('returns 6 ears for 3 bunnies', () => {
    expect(bunnyEars(2)).toEqual(4);
  });
});
