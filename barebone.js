var _ = require(__dirname + '/vendor/underscore');
var Barebone = {};


Barebone.Model = function() {
  this.attributes = {};
}

_.extend(Barebone.Model.prototype, {
});


module.exports = Barebone;