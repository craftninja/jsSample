module.exports = function recursion(times) {
  const baseCase = times === 0;
  if (baseCase) {
    return 'Earth Below Us\nDrifting falling\nFloating weightless\nFalling, falling, home!';
  };
  return `${times}\n${recursion(times - 1)}`
};
