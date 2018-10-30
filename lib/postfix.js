module.exports = function prefix (calculationString) {
  const operatorMatcher = / \D( |$)/;
  const stack = calculationString.split(operatorMatcher)[0].split(' ');
  const stackMatcher = /(-?\d+ )+/;
  const operatorAndRest = calculationString.replace(stackMatcher, '');
  const operator = operatorAndRest[0];
  const restOfCalculation = operatorAndRest.slice(1);
  const second = stack.pop();
  const first = stack.pop();
  const result = eval(first + operator + second);
  if (restOfCalculation.length === 0) return result;

  if (stack.length === 0) {
    return prefix(String(result) + restOfCalculation);
  };
  return prefix(stack.join(' ') + ' ' + result + restOfCalculation)
};
