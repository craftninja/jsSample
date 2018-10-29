const triangleMadeOfBlocks = require('../lib/triangleMadeOfBlocks');

describe('triangleMadeOfBlocks', () => {
  it('returns 0 total blocks for triangle with 0 rows', () => {
    expect(triangleMadeOfBlocks(0)).toEqual(0);
  });
  it('returns 1 total blocks for triangle with 1 row', () => {
    expect(triangleMadeOfBlocks(1)).toEqual(1);
  });
  it('returns 3 total blocks for triangle with 2 rows', () => {
    expect(triangleMadeOfBlocks(2)).toEqual(3);
  });
  it('returns 15 total blocks for triangle with 5 rows', () => {
    expect(triangleMadeOfBlocks(5)).toEqual(15);
  });
});
