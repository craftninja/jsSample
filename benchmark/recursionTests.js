const Benchmark = require('benchmark');

const notRecursion = require('../lib/notRecursion');
const recursion = require('../lib/recursion');

const suite = new Benchmark.Suite;

suite.add('recursion', function() {
  recursion(40000);
})
.add('notRecursion', function() {
  notRecursion(40000);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
