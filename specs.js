var jasmine = require('jasmine-node');
var sys = require('sys');

for(var key in jasmine) {
  global[key] = jasmine[key];
}

var isVerbose = true;
var showColors = true;


jasmine.executeSpecsInFolder(__dirname + '/specs', function(runner, log){
  process.exit(runner.results().failedCount == 0 ? 0 : 1);
}, isVerbose, showColors);