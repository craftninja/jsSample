const triangleMadeOfBlocks = require('../lib/triangleMadeOfBlocks');

describe('triangleMadeOfBlocks', () => {
  it('returns 0 total blocks for triangle with 0 rows', () => {
    expect(triangleMadeOfBlocks(0)).toEqual(0);
  });
});
