// palendrome creator
//
// bo=> bob
// boss=> bossob
// bos=> bosob
const palendromify = require('../lib/palendromify')

describe('palendromify', () => {
  it('returns bob for bo input', () => {
    expect(palendromify('bo')).toBe('bob');
  });
});
