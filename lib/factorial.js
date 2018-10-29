module.exports = function factorial(num) {
  if (num <= 2) {
    return num;
  };
  return num * factorial(num - 1);
};
