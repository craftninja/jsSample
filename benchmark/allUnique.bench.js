const Benchmark = require('benchmark');

const { luke, emily } = require('../lib/allUnique');

const suite = new Benchmark.Suite;

suite.add('luke', function() {
  luke('enchalada organza fancy pants whackamole sillyness hungry for molè');
})
.add('emily', function() {
  emily('enchalada organza fancy pants whackamole sillyness hungry for molè');
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
