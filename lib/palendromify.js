module.exports = (string) => {
  const secondHalf = string.split('').reverse().join('');
  const lastTwoLettersSame = secondHalf[0] === secondHalf[1]
  if (lastTwoLettersSame) {
    return string + secondHalf.slice(2, secondHalf.length)
  }
  return string + secondHalf.slice(1, secondHalf.length)
}
