module.exports = function allStar(string) {
  if (string.length === 1) {
    return string;
  };
  return string[0] + '*' + allStar(string.slice(1));
};
