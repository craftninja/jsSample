const palendromify = require('../lib/palendromify');

describe('palendromify', () => {
  it('returns bob for bo input', () => {
    expect(palendromify('bo')).toBe('bob');
  });
  it('returns bossob for boss input', () => {
    expect(palendromify('boss')).toBe('bossob');
  });
  it('returns bosob for bos input', () => {
    expect(palendromify('bos')).toBe('bosob');
  });
});
