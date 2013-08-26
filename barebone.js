var _ = require(__dirname + '/vendor/underscore');
var Barebone = {};


Barebone.Model = function() {
  this.attributes = {};
}

_.extend(Barebone.Model.prototype, {

  set: function(attributes) {
    _.extend(this.attributes, attributes);
    return this;
  }

});


module.exports = Barebone;