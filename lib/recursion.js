module.exports = function recursion(times) {
  const baseCase = times === 0;
  if (baseCase) {
    console.log('Earth Below Us');
    console.log('Drifting falling');
    console.log('Floating weightless');
    console.log('Falling, falling, home!');
    return;
  };
  console.log(times);
  return recursion(times - 1);
};
