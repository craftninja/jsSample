function sumDigits(digits) {
  if (parseInt(digits / 10) === 0) {
    return digits;
  };
  return digits % 10 + sumDigits(parseInt(digits / 10));
};

module.exports = sumDigits;
