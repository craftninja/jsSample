const Benchmark = require('benchmark');

const { forLoop, recursion } = require('../lib/recursionTalk');

const suite = new Benchmark.Suite;

suite.add('recursion', function() {
  recursion(400);
})
.add('forLoop', function() {
  forLoop(400);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
