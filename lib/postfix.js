module.exports = function prefix (calculationString) {
  let calculation = calculationString.split(' ');
  let numberStack = [];
  let token, result;

  while (calculation.length > 0) {
    token = calculation.shift();
    if (Number(token)) {
      numberStack.push(Number(token));
    } else {
      if (token === '+') {
        result = numberStack.pop() + numberStack.pop();
      } else if (token === '-') {
        result = - numberStack.pop() + numberStack.pop();
      } else if (token === '*') {
        result = numberStack.pop() * numberStack.pop();
      }
      numberStack = numberStack.concat(result);
    };
  };
  return result;
};
