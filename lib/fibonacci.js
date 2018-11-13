module.exports = {
  recursive: function fibonacci(index) {
    if (index === 0) return 0;
    if (index === 1) return 1;
    return fibonacci(index - 2) + fibonacci(index - 1);
  },
  forLoop: function fibonacci(index) {
    if (index === 0) return 0;
    if (index === 1) return 1;

    let twoPrev = [0, 1]
    let current = 1
    for (var i = 2; i <= index; i++) {
      current = twoPrev.shift() + twoPrev[0]
      twoPrev.push(current)
    }
    return current
  }
}
