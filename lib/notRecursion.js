module.exports = function notRecursion(times) {
  let returnString = ''
  for (let count = times; count > 0; count--) {
    returnString += `${count}\n`
  }
  returnString += 'Earth Below Us\n';
  returnString += 'Drifting falling\n';
  returnString += 'Floating weightless\n';
  returnString += 'Falling, falling, home!';
  return returnString;
};
