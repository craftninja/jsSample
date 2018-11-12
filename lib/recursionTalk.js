module.exports = {
  recursion: function recursion(times) {
    const baseCase = times === 0;
    if (baseCase) {
      return 'Earth Below Us\nDrifting falling\nFloating weightless\nFalling, falling, home!';
    };
    return `${times}\n${recursion(times - 1)}`;
  },
  forLoop: function forLoop(times) {
    let returnString = '';
    for (let count = times; count > 0; count--) {
      returnString += `${count}\n`;
    };
    returnString += 'Earth Below Us\n';
    returnString += 'Drifting falling\n';
    returnString += 'Floating weightless\n';
    returnString += 'Falling, falling, home!';
    return returnString;
  },
};
