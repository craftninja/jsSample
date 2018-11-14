const Benchmark = require('benchmark');

const { forLoop, recursive, recursiveMemoized } = require('../lib/fibonacci');

const suite = new Benchmark.Suite;

suite.add('recursive', function() {
  recursive(20);
})
.add('recursive with memo', function() {
  recursiveMemoized(20);
})
.add('forLoop', function() {
  forLoop(20);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
