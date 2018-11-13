const Benchmark = require('benchmark');

const { forLoop, recursive } = require('../lib/fibonacci');

const suite = new Benchmark.Suite;

suite.add('recursive', function() {
  recursive(9);
})
.add('forLoop', function() {
  forLoop(9);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
